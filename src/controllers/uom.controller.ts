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
import {Uom} from '../models';
import {UomRepository} from '../repositories';

export class UomController {
  constructor(
    @repository(UomRepository)
    public uomRepository : UomRepository,
  ) {}

  @post('/uoms')
  @response(200, {
    description: 'Uom model instance',
    content: {'application/json': {schema: getModelSchemaRef(Uom)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uom, {
            title: 'NewUom',
            exclude: ['id'],
          }),
        },
      },
    })
    uom: Omit<Uom, 'id'>,
  ): Promise<Uom> {
    return this.uomRepository.create(uom);
  }

  @get('/uoms/count')
  @response(200, {
    description: 'Uom model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Uom) where?: Where<Uom>,
  ): Promise<Count> {
    return this.uomRepository.count(where);
  }

  @get('/uoms')
  @response(200, {
    description: 'Array of Uom model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Uom, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Uom) filter?: Filter<Uom>,
  ): Promise<Uom[]> {
    return this.uomRepository.find(filter);
  }

  @patch('/uoms')
  @response(200, {
    description: 'Uom PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uom, {partial: true}),
        },
      },
    })
    uom: Uom,
    @param.where(Uom) where?: Where<Uom>,
  ): Promise<Count> {
    return this.uomRepository.updateAll(uom, where);
  }

  @get('/uoms/{id}')
  @response(200, {
    description: 'Uom model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Uom, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Uom, {exclude: 'where'}) filter?: FilterExcludingWhere<Uom>
  ): Promise<Uom> {
    return this.uomRepository.findById(id, filter);
  }

  @patch('/uoms/{id}')
  @response(204, {
    description: 'Uom PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Uom, {partial: true}),
        },
      },
    })
    uom: Uom,
  ): Promise<void> {
    await this.uomRepository.updateById(id, uom);
  }

  @put('/uoms/{id}')
  @response(204, {
    description: 'Uom PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() uom: Uom,
  ): Promise<void> {
    await this.uomRepository.replaceById(id, uom);
  }

  @del('/uoms/{id}')
  @response(204, {
    description: 'Uom DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.uomRepository.deleteById(id);
  }
}
