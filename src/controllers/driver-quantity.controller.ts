import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  getFilterSchemaFor
} from '@loopback/rest';
import {DriverQuantity} from '../models';
import {DriverQuantityRepository} from '../repositories';

export class DriverQuantityController {
  constructor(
    @repository(DriverQuantityRepository)
    public driverQuantityRepository : DriverQuantityRepository,
  ) {}

  @post('/driver-quantities')
  @response(200, {
    description: 'DriverQuantity model instance',
    content: {'application/json': {schema: getModelSchemaRef(DriverQuantity)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverQuantity, {
            title: 'NewDriverQuantity',
            exclude: ['id'],
          }),
        },
      },
    })
    driverQuantity: Omit<DriverQuantity, 'id'>,
  ): Promise<DriverQuantity> {
    return this.driverQuantityRepository.create(driverQuantity);
  }

  @get('/driver-quantities/count')
  @response(200, {
    description: 'DriverQuantity model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DriverQuantity) where?: Where<DriverQuantity>,
  ): Promise<Count> {
    return this.driverQuantityRepository.count(where);
  }

  @get('/driver-quantities')
  @response(200, {
    description: 'Array of DriverQuantity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DriverQuantity, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DriverQuantity) filter?: Filter<DriverQuantity>,
  ): Promise<DriverQuantity[]> {
    return this.driverQuantityRepository.find(filter);
  }

  @patch('/driver-quantities')
  @response(200, {
    description: 'DriverQuantity PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverQuantity, {partial: true}),
        },
      },
    })
    driverQuantity: DriverQuantity,
    @param.where(DriverQuantity) where?: Where<DriverQuantity>,
  ): Promise<Count> {
    return this.driverQuantityRepository.updateAll(driverQuantity, where);
  }

  @get('/driver-quantities/{id}')
  @response(200, {
    description: 'DriverQuantity model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DriverQuantity, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DriverQuantity, {exclude: 'where'}) filter?: FilterExcludingWhere<DriverQuantity>
  ): Promise<DriverQuantity> {
    return this.driverQuantityRepository.findById(id, filter);
  }

  @patch('/driver-quantities/{id}')
  @response(204, {
    description: 'DriverQuantity PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverQuantity, {partial: true}),
        },
      },
    })
    driverQuantity: DriverQuantity,
  ): Promise<void> {
    await this.driverQuantityRepository.updateById(id, driverQuantity);
  }

  @put('/driver-quantities/{id}')
  @response(204, {
    description: 'DriverQuantity PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() driverQuantity: DriverQuantity,
  ): Promise<void> {
    await this.driverQuantityRepository.replaceById(id, driverQuantity);
  }

  @del('/driver-quantities/{id}')
  @response(204, {
    description: 'DriverQuantity DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.driverQuantityRepository.deleteById(id);
  }

@get('/api/driverQuantity/Dest_Specific')
@response(200, {
  description: 'Array of DriverQuantity model instances',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        items: getModelSchemaRef(DriverQuantity, {includeRelations: true}),
      },
    },
  },
})
  async findSpecificDest(
    @param.query.string('period') period: string, 
    @param.query.string('refNum') refNum: string,
    // @param.query.object('filter', getFilterSchemaFor(DriverQuantity)) filter?: Filter,
   ): Promise<DriverQuantity[]> {

  const dqCollection = (this.driverQuantityRepository.dataSource.connector as any).collection('DriverQuantity')

  return await dqCollection.aggregate([
      {
        '$lookup': {
          'from': 'vwAccountXDriver', 
          'let': {
            'per': '$period', 
            'drv': '$driver'
          }, 
          'pipeline': [
            {
              '$match': {
                '$expr': {
                  '$and': [
                    {
                      '$eq': [
                        '$$per', '$period'
                      ]
                    }, {
                      '$eq': [
                        '$$drv', '$driver'
                      ]
                    }
                  ]
                }
              }
            }
          ], 
          'as': 'AD'
        }
      }, {
        '$unwind': {
          'path': '$AD', 
          'preserveNullAndEmptyArrays': false
        }
      }, {
        '$lookup': {
          'from': 'AccountHierarchy', 
          'localField': 'destRefNum', 
          'foreignField': 'refNum', 
          'as': 'AH'
        }
      }, {
        '$unwind': {
          'path': '$AH', 
          'preserveNullAndEmptyArrays': false
        }
      }, {
        '$lookup': {
            'from': 'Cost', 
            'localField': 'AD.refNum', 
            'foreignField': 'refNum', 
            'as': 'CC'
          }
      }, {
        '$project': {
          '_id': 0, 
          'destRefNum': 1, 
          'AD.refNum': 1, 
          'AD.period': 1, 
          'AH.name': 1, 
          'driverQty': 1, 
          'driverWt': 1, 
          'CC.cost': 1
        }
      },
      {
        '$match':{
          'AD.period': period, 
          'AD.refNum': refNum, 
        }
      }
  ]).get();
}

//Delete single selected Destination account
@del('/driverQuantity/deleteDest')
@response(200, {
  description: 'Array of DriverQuantity model instances',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        items: getModelSchemaRef(DriverQuantity, {includeRelations: true}),
      },
    },
  },
})
  async deleteDest(
    @param.query.string('period') period: string, 
    @param.query.string('driver') deriver: string,
    @param.query.string('destRefNum') destRefNum: string,

   ): Promise<void> {

  const dqCollection = (this.driverQuantityRepository.dataSource.connector as any).collection('DriverQuantity')

  return await dqCollection.deleteOne(
      {
          'period': period, 
          'driver': deriver, 
          'destRefNum': destRefNum
      }
  )
}

//Delete all destination account linked with driver and period
@del('/driverQuantity/deleteAllDest')
@response(200, {
  description: 'Array of DriverQuantity model instances',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        items: getModelSchemaRef(DriverQuantity, {includeRelations: true}),
      },
    },
  },
})
  async deleteAllDest(
    @param.query.string('period') period: string, 
    @param.query.string('driver') driver: string,

   ): Promise<void> {

  const dqCollection = (this.driverQuantityRepository.dataSource.connector as any).collection('DriverQuantity')

  return await dqCollection.deleteMany(
        {
          'period': period, 
          'driver': driver,
        }
  )
}

//Update Destination Qty and Weight
// @put
@patch('/driverQuantity/SubmitDest')
@response(204, {
  description: 'Array of DriverQuantity model instances',
})
  async updateDest(
    @param.query.string('period') period: string, 
    @param.query.string('driver') driver: string,
    @param.query.string('destRefNum') destRefNum: string,
    @param.query.string('driverQty') dvrQty: DoubleRange, 
    @param.query.string('driverWt') dvrWt: DoubleRange,

   ): Promise<void> {
    const updateCollection = (this.driverQuantityRepository.dataSource.connector as any).collection('DriverQuantity')
    return await updateCollection.updateOne(
        {
        'period': period, 
        'driver': driver,
        'destRefNum':destRefNum,
        },
      {
        '$set':{
        'driverQty': dvrQty,
        'driverWt': dvrWt, 
        }
      },
      { upsert: true }
);
}

}
