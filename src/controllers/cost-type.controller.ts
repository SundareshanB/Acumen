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
} from '@loopback/rest';
import {CostType} from '../models';
import {CostTypeRepository} from '../repositories';

export class CostTypeController {
  constructor(
    @repository(CostTypeRepository)
    public costTypeRepository : CostTypeRepository,
  ) {}

  @post('/cost-types')
  @response(200, {
    description: 'CostType model instance',
    content: {'application/json': {schema: getModelSchemaRef(CostType)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostType, {
            title: 'NewCostType',
            exclude: ['id'],
          }),
        },
      },
    })
    costType: Omit<CostType, 'id'>,
  ): Promise<CostType> {
    return this.costTypeRepository.create(costType);
  }

  @get('/cost-types/count')
  @response(200, {
    description: 'CostType model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CostType) where?: Where<CostType>,
  ): Promise<Count> {
    return this.costTypeRepository.count(where);
  }

  @get('/cost-types')
  @response(200, {
    description: 'Array of CostType model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CostType, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CostType) filter?: Filter<CostType>,
  ): Promise<CostType[]> {
    return this.costTypeRepository.find(filter);
  }

  @patch('/cost-types')
  @response(200, {
    description: 'CostType PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostType, {partial: true}),
        },
      },
    })
    costType: CostType,
    @param.where(CostType) where?: Where<CostType>,
  ): Promise<Count> {
    return this.costTypeRepository.updateAll(costType, where);
  }

  @get('/cost-types/{id}')
  @response(200, {
    description: 'CostType model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CostType, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CostType, {exclude: 'where'}) filter?: FilterExcludingWhere<CostType>
  ): Promise<CostType> {
    return this.costTypeRepository.findById(id, filter);
  }

  @patch('/cost-types/{id}')
  @response(204, {
    description: 'CostType PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostType, {partial: true}),
        },
      },
    })
    costType: CostType,
  ): Promise<void> {
    await this.costTypeRepository.updateById(id, costType);
  }

  @put('/cost-types/{id}')
  @response(204, {
    description: 'CostType PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() costType: CostType,
  ): Promise<void> {
    await this.costTypeRepository.replaceById(id, costType);
  }

  @del('/cost-types/{id}')
  @response(204, {
    description: 'CostType DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.costTypeRepository.deleteById(id);
  }
}
