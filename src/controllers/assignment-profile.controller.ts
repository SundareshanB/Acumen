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
import {AssignmentProfile} from '../models';
import {AssignmentProfileRepository} from '../repositories';

export class AssignmentProfileController {
  constructor(
    @repository(AssignmentProfileRepository)
    public assignmentProfileRepository : AssignmentProfileRepository,
  ) {}

  @post('/assignment-profiles')
  @response(200, {
    description: 'AssignmentProfile model instance',
    content: {'application/json': {schema: getModelSchemaRef(AssignmentProfile)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssignmentProfile, {
            title: 'NewAssignmentProfile',
            exclude: ['id'],
          }),
        },
      },
    })
    assignmentProfile: Omit<AssignmentProfile, 'id'>,
  ): Promise<AssignmentProfile> {
    return this.assignmentProfileRepository.create(assignmentProfile);
  }

  @get('/assignment-profiles/count')
  @response(200, {
    description: 'AssignmentProfile model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AssignmentProfile) where?: Where<AssignmentProfile>,
  ): Promise<Count> {
    return this.assignmentProfileRepository.count(where);
  }

  @get('/assignment-profiles')
  @response(200, {
    description: 'Array of AssignmentProfile model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AssignmentProfile, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AssignmentProfile) filter?: Filter<AssignmentProfile>,
  ): Promise<AssignmentProfile[]> {
    return this.assignmentProfileRepository.find(filter);
  }

  @patch('/assignment-profiles')
  @response(200, {
    description: 'AssignmentProfile PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssignmentProfile, {partial: true}),
        },
      },
    })
    assignmentProfile: AssignmentProfile,
    @param.where(AssignmentProfile) where?: Where<AssignmentProfile>,
  ): Promise<Count> {
    return this.assignmentProfileRepository.updateAll(assignmentProfile, where);
  }

  @get('/assignment-profiles/{id}')
  @response(200, {
    description: 'AssignmentProfile model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AssignmentProfile, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AssignmentProfile, {exclude: 'where'}) filter?: FilterExcludingWhere<AssignmentProfile>
  ): Promise<AssignmentProfile> {
    return this.assignmentProfileRepository.findById(id, filter);
  }

  @patch('/assignment-profiles/{id}')
  @response(204, {
    description: 'AssignmentProfile PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AssignmentProfile, {partial: true}),
        },
      },
    })
    assignmentProfile: AssignmentProfile,
  ): Promise<void> {
    await this.assignmentProfileRepository.updateById(id, assignmentProfile);
  }

  @put('/assignment-profiles/{id}')
  @response(204, {
    description: 'AssignmentProfile PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() assignmentProfile: AssignmentProfile,
  ): Promise<void> {
    await this.assignmentProfileRepository.replaceById(id, assignmentProfile);
  }

  @del('/assignment-profiles/{id}')
  @response(204, {
    description: 'AssignmentProfile DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.assignmentProfileRepository.deleteById(id);
  }

  // Fetch all destination for Common Driver Type 
  @get('/api/AssignmentProfile/Dest_Common')
  @response(200, {
    description: 'Array of AssignmentProfile model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AssignmentProfile, {includeRelations: true}),
        },
      },
    },
  })
    async findCommonDest(
      @param.query.string('period') period: string, 
      @param.query.string('refNum') refNum: string,
      // @param.query.object('filter', getFilterSchemaFor(AssignmentProfile)) filter?: Filter,
     ): Promise<AssignmentProfile[]> {
  
    const centerCollection = (this.assignmentProfileRepository.dataSource.connector as any).collection('AssignmentProfile')
  
    return await centerCollection.aggregate([
        {
          '$lookup': {
            'from': 'vwAccountXDriver', 
            'let': {
              'per': '$period', 
              'pro': '$profileName'
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
                          '$$pro', '$profile'
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
            'from': 'DriverQuantity', 
            'let': {
              'dest': '$destRefNum', 
              'per': '$period', 
              'drv': '$AD.driver'
            }, 
            'pipeline': [
              {
                '$match': {
                  '$expr': {
                    '$and': [
                      {
                        '$eq': [
                          '$$dest', '$destRefNum'
                        ]
                      }, {
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
            'as': 'DQ'
          }
        }, {
          '$unwind': {
            'path': '$DQ', 
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
            'let': {
              'per': '$AD.period', 
              'ref': '$AD.refNum'
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
                          '$$ref', '$refNum'
                        ]
                      }
                    ]
                  }
                }
              }
            ], 
            'as': 'CC'
          }
        }, {
          '$project': {
            '_id': 0, 
            'AD.period': 1, 
            'AD.refNum': 1, 
            'destRefNum': 1, 
            'AH.name': 1, 
            'DQ.driverQty': 1, 
            'DQ.driverWt': 1, 
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

  //Update Destination Qty and Weight
// @put
@patch('/assignmentProfile/SubmitAssignmentDest')
@response(204, {
  description: 'Array of DriverQuantity model instances',
})
  async updateDest(
    @param.query.string('period') period: string, 
    @param.query.string('profileName') profile: string,
    @param.query.string('destRefNum') destRefNum: string,

   ): Promise<void> {
    const updateCollection = (this.assignmentProfileRepository.dataSource.connector as any).collection('AssignmentProfile')
    return await updateCollection.updateOne(
        {
        'period': period,
        'profileName': profile, 
        'destRefNum':destRefNum,
        },
      {
        '$set':{
          'period': period,
          'profileName': profile, 
          'destRefNum':destRefNum,
        }
      },
      { upsert: true }
);
}

}
