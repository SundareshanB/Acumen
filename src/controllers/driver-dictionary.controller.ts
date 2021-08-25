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
import {DriverDictionary} from '../models';
import {DriverDictionaryRepository} from '../repositories';

export class DriverDictionaryController {
  constructor(
    @repository(DriverDictionaryRepository)
    public driverDictionaryRepository : DriverDictionaryRepository,
  ) {}

  @post('/driver-dictionaries')
  @response(200, {
    description: 'DriverDictionary model instance',
    content: {'application/json': {schema: getModelSchemaRef(DriverDictionary)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverDictionary, {
            title: 'NewDriverDictionary',
            exclude: ['id'],
          }),
        },
      },
    })
    driverDictionary: Omit<DriverDictionary, 'id'>,
  ): Promise<DriverDictionary> {
    return this.driverDictionaryRepository.create(driverDictionary);
  }

  @get('/driver-dictionaries/count')
  @response(200, {
    description: 'DriverDictionary model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DriverDictionary) where?: Where<DriverDictionary>,
  ): Promise<Count> {
    return this.driverDictionaryRepository.count(where);
  }

  @get('/driver-dictionaries')
  @response(200, {
    description: 'Array of DriverDictionary model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DriverDictionary, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DriverDictionary) filter?: Filter<DriverDictionary>,
  ): Promise<DriverDictionary[]> {
    return this.driverDictionaryRepository.find(filter);
  }

  @patch('/driver-dictionaries')
  @response(200, {
    description: 'DriverDictionary PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverDictionary, {partial: true}),
        },
      },
    })
    driverDictionary: DriverDictionary,
    @param.where(DriverDictionary) where?: Where<DriverDictionary>,
  ): Promise<Count> {
    return this.driverDictionaryRepository.updateAll(driverDictionary, where);
  }

  @get('/driver-dictionaries/{id}')
  @response(200, {
    description: 'DriverDictionary model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DriverDictionary, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DriverDictionary, {exclude: 'where'}) filter?: FilterExcludingWhere<DriverDictionary>
  ): Promise<DriverDictionary> {
    return this.driverDictionaryRepository.findById(id, filter);
  }

  @patch('/driver-dictionaries/{id}')
  @response(204, {
    description: 'DriverDictionary PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DriverDictionary, {partial: true}),
        },
      },
    })
    driverDictionary: DriverDictionary,
  ): Promise<void> {
    await this.driverDictionaryRepository.updateById(id, driverDictionary);
  }

  @put('/driver-dictionaries/{id}')
  @response(204, {
    description: 'DriverDictionary PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() driverDictionary: DriverDictionary,
  ): Promise<void> {
    await this.driverDictionaryRepository.replaceById(id, driverDictionary);
  }

  @del('/driver-dictionaries/{id}')
  @response(204, {
    description: 'DriverDictionary DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.driverDictionaryRepository.deleteById(id);
  }


  @get('/driverDictionary/findBydriver')
  @response(200, {
    description: 'Array of DriverDictionary model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DriverDictionary, {includeRelations: true}),
        },
      },
    },
  })
    async findDictionary(
      @param.query.string('driver') driver: string, 

     ): Promise<DriverDictionary[]> {
  
    const dqCollection = (this.driverDictionaryRepository.dataSource.connector as any).collection('DriverDictionary')
  
    return await dqCollection.aggregate([
        {
          '$match':{
          'driver': driver
          }
        }
    ]).get();
  }

@patch('/driverDictionary/updateDriverDict')
@response(204, {
  description: 'Array of DriverQuantity model instances',
})
  async updateDest(
    @param.query.string('driver') driver: string,
    @param.query.string('definition') definition: string,
    @param.query.string('source') source: string, 
    @param.query.string('sourceContact') srcContact: string,

   ): Promise<void> {
    const updateCollection = (this.driverDictionaryRepository.dataSource.connector as any).collection('DriverDictionary')
    return await updateCollection.updateOne(
        {
        'driver': driver,
        },
      {
        '$set':{
          'definition':definition,
          'source':source,
          'sourceContact': srcContact
        }
      }
);
}

}
