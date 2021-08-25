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
import {Cost} from '../models';
import {CostRepository} from '../repositories';

export class CostController {
  constructor(
    @repository(CostRepository)
    public costRepository : CostRepository,
  ) {}

  @post('/costs')
  @response(200, {
    description: 'Cost model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cost)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cost, {
            title: 'NewCost',
            exclude: ['id'],
          }),
        },
      },
    })
    cost: Omit<Cost, 'id'>,
  ): Promise<Cost> {
    return this.costRepository.create(cost);
  }

  @get('/costs/count')
  @response(200, {
    description: 'Cost model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cost) where?: Where<Cost>,
  ): Promise<Count> {
    return this.costRepository.count(where);
  }

  @get('/costs')
  @response(200, {
    description: 'Array of Cost model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cost, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cost) filter?: Filter<Cost>,
  ): Promise<Cost[]> {
    return this.costRepository.find(filter);
  }

  @patch('/costs')
  @response(200, {
    description: 'Cost PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cost, {partial: true}),
        },
      },
    })
    cost: Cost,
    @param.where(Cost) where?: Where<Cost>,
  ): Promise<Count> {
    return this.costRepository.updateAll(cost, where);
  }

  @get('/costs/{id}')
  @response(200, {
    description: 'Cost model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cost, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cost, {exclude: 'where'}) filter?: FilterExcludingWhere<Cost>
  ): Promise<Cost> {
    return this.costRepository.findById(id, filter);
  }

  @patch('/costs/{id}')
  @response(204, {
    description: 'Cost PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cost, {partial: true}),
        },
      },
    })
    cost: Cost,
  ): Promise<void> {
    await this.costRepository.updateById(id, cost);
  }

  @put('/costs/{id}')
  @response(204, {
    description: 'Cost PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cost: Cost,
  ): Promise<void> {
    await this.costRepository.replaceById(id, cost);
  }

  @del('/costs/{id}')
  @response(204, {
    description: 'Cost DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.costRepository.deleteById(id);
  }

  // Fetch all destination for Common Driver Type 
  @get('/cost/stage1')
  @response(200, {
    description: 'Array of Stage1 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cost, {includeRelations: true}),
        },
      },
    },
  })
    async findX(
      @param.query.object('filter', getFilterSchemaFor(Cost)) filter?: Filter,
     ): Promise<Cost[]> {
  
    const centerCollection = (this.costRepository.dataSource.connector as any).collection('Cost')
  
    return await centerCollection.aggregate([
        {
          '$lookup': {
            'from': 'AccountHierarchy', 
            'localField': 'refNum', 
            'foreignField': 'refNum', 
            'as': 'AH'
          }
        }, {
          '$lookup': {
            'from': 'CenterHierarchy', 
            'localField': 'AH.parentRefNum', 
            'foreignField': 'refNum', 
            'as': 'CH'
          }
        }, {
          '$lookup': {
            'from': 'Stage', 
            'localField': 'CH.stage', 
            'foreignField': 'stageName', 
            'as': 'stageLink'
          }
        }, {
          '$match': {
            'costType': 'USD', 
            'period': '2015_Plan'
          }
        }, {
          '$project': {
            'stageLink.stageName': 1, 
            'stageLink.stageOrder': 1, 
            'cost': 1
          }
        }, {
          '$group': {
            '_id': '$stageLink', 
            'USDCost': {
              '$push': '$$ROOT'
            }
          }
        }, {
          '$addFields': {
            'USD': {
              '$sum': '$USDCost.cost'
            }
          }
        }  
    ]).get();
  }
}
