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
import {Volume} from '../models';
import {VolumeRepository} from '../repositories';

export class VolumeController {
  constructor(
    @repository(VolumeRepository)
    public volumeRepository : VolumeRepository,
  ) {}

  @post('/volumes')
  @response(200, {
    description: 'Volume model instance',
    content: {'application/json': {schema: getModelSchemaRef(Volume)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Volume, {
            title: 'NewVolume',
            
          }),
        },
      },
    })
    volume: Volume,
  ): Promise<Volume> {
    return this.volumeRepository.create(volume);
  }

  @get('/volumes/count')
  @response(200, {
    description: 'Volume model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Volume) where?: Where<Volume>,
  ): Promise<Count> {
    return this.volumeRepository.count(where);
  }

  @get('/volumes')
  @response(200, {
    description: 'Array of Volume model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Volume, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Volume) filter?: Filter<Volume>,
  ): Promise<Volume[]> {
    return this.volumeRepository.find(filter);
  }

  @patch('/volumes')
  @response(200, {
    description: 'Volume PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Volume, {partial: true}),
        },
      },
    })
    volume: Volume,
    @param.where(Volume) where?: Where<Volume>,
  ): Promise<Count> {
    return this.volumeRepository.updateAll(volume, where);
  }

  @get('/volumes/{id}')
  @response(200, {
    description: 'Volume model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Volume, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Volume, {exclude: 'where'}) filter?: FilterExcludingWhere<Volume>
  ): Promise<Volume> {
    return this.volumeRepository.findById(id, filter);
  }

  @patch('/volumes/{id}')
  @response(204, {
    description: 'Volume PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Volume, {partial: true}),
        },
      },
    })
    volume: Volume,
  ): Promise<void> {
    await this.volumeRepository.updateById(id, volume);
  }

  @put('/volumes/{id}')
  @response(204, {
    description: 'Volume PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() volume: Volume,
  ): Promise<void> {
    await this.volumeRepository.replaceById(id, volume);
  }

  @del('/volumes/{id}')
  @response(204, {
    description: 'Volume DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.volumeRepository.deleteById(id);
  }
}
