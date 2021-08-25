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
import {CenterHierarchy} from '../models';
import {CenterHierarchyRepository} from '../repositories';

export class CenterHierarchyController {
  constructor(
    @repository(CenterHierarchyRepository)
    public centerHierarchyRepository : CenterHierarchyRepository,
  ) {}

  @post('/center-hierarchies')
  @response(200, {
    description: 'CenterHierarchy model instance',
    content: {'application/json': {schema: getModelSchemaRef(CenterHierarchy)}},
  })

  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterHierarchy, {
            title: 'NewCenterHierarchy',
            exclude: ['id'],
          }),
        },
      },
    })
    centerHierarchy: Omit<CenterHierarchy, 'id'>,
  ): Promise<CenterHierarchy> {
    return this.centerHierarchyRepository.create(centerHierarchy);
  }

  @get('/center-hierarchies/count')
  @response(200, {
    description: 'CenterHierarchy model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CenterHierarchy) where?: Where<CenterHierarchy>,
  ): Promise<Count> {
    return this.centerHierarchyRepository.count(where);
  }

  @get('/center-hierarchies')
  @response(200, {
    description: 'Array of CenterHierarchy model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CenterHierarchy, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CenterHierarchy) filter?: Filter<CenterHierarchy>,
  ): Promise<CenterHierarchy[]> {
    return this.centerHierarchyRepository.find(filter);
  }

//////////////////////////

@get('/center-hierarchies/treeview')
@response(200, {
  description: 'Array of CenterHierarchy model instances',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        items: getModelSchemaRef(CenterHierarchy, {includeRelations: true}),
      },
    },
  },
})
  async findX(
    @param.query.object('filter', getFilterSchemaFor(CenterHierarchy)) filter?: Filter,
   ): Promise<CenterHierarchy[]> {

  const centerCollection = (this.centerHierarchyRepository.dataSource.connector as any).collection('CenterHierarchy')

  return await centerCollection.aggregate([
    {
      '$lookup': {
        'from': 'AccountHierarchy', 
        'localField': 'refNum', 
        'foreignField': 'parentRefNum', 
        'as': 'treeView'
      }
    },
      {'$sort': {
        'name': -1
      }
    }
  ]).get();
}

///////////////////////////

  @patch('/center-hierarchies')
  @response(200, {
    description: 'CenterHierarchy PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterHierarchy, {partial: true}),
        },
      },
    })
    centerHierarchy: CenterHierarchy,
    @param.where(CenterHierarchy) where?: Where<CenterHierarchy>,
  ): Promise<Count> {
    return this.centerHierarchyRepository.updateAll(centerHierarchy, where);
  }

  @get('/center-hierarchies/{id}')
  @response(200, {
    description: 'CenterHierarchy model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CenterHierarchy, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CenterHierarchy, {exclude: 'where'}) filter?: FilterExcludingWhere<CenterHierarchy>
  ): Promise<CenterHierarchy> {
    return this.centerHierarchyRepository.findById(id, filter);
  }

  @patch('/center-hierarchies/{id}')
  @response(204, {
    description: 'CenterHierarchy PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CenterHierarchy, {partial: true}),
        },
      },
    })
    centerHierarchy: CenterHierarchy,
  ): Promise<void> {
    await this.centerHierarchyRepository.updateById(id, centerHierarchy);
  }

  @put('/center-hierarchies/{id}')
  @response(204, {
    description: 'CenterHierarchy PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() centerHierarchy: CenterHierarchy,
  ): Promise<void> {
    await this.centerHierarchyRepository.replaceById(id, centerHierarchy);
  }

  @del('/center-hierarchies/{id}')
  @response(204, {
    description: 'CenterHierarchy DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.centerHierarchyRepository.deleteById(id);
  }
}
