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
import {AccountHierarchy} from '../models';
import {AccountHierarchyRepository} from '../repositories';

export class AccountHierarchyController {
  constructor(
    @repository(AccountHierarchyRepository)
    public accountHierarchyRepository : AccountHierarchyRepository,
  ) {}

  @post('/account-hierarchies')
  @response(200, {
    description: 'AccountHierarchy model instance',
    content: {'application/json': {schema: getModelSchemaRef(AccountHierarchy)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountHierarchy, {
            title: 'NewAccountHierarchy',
            exclude: ['id'],
          }),
        },
      },
    })
    accountHierarchy: Omit<AccountHierarchy, 'id'>,
  ): Promise<AccountHierarchy> {
    return this.accountHierarchyRepository.create(accountHierarchy);
  }

  @get('/account-hierarchies/count')
  @response(200, {
    description: 'AccountHierarchy model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AccountHierarchy) where?: Where<AccountHierarchy>,
  ): Promise<Count> {
    return this.accountHierarchyRepository.count(where);
  }

  @get('/account-hierarchies')
  @response(200, {
    description: 'Array of AccountHierarchy model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AccountHierarchy, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AccountHierarchy) filter?: Filter<AccountHierarchy>,
  ): Promise<AccountHierarchy[]> {
    return this.accountHierarchyRepository.find(filter);
  }

  @patch('/account-hierarchies')
  @response(200, {
    description: 'AccountHierarchy PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountHierarchy, {partial: true}),
        },
      },
    })
    accountHierarchy: AccountHierarchy,
    @param.where(AccountHierarchy) where?: Where<AccountHierarchy>,
  ): Promise<Count> {
    return this.accountHierarchyRepository.updateAll(accountHierarchy, where);
  }

  @get('/account-hierarchies/{id}')
  @response(200, {
    description: 'AccountHierarchy model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AccountHierarchy, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AccountHierarchy, {exclude: 'where'}) filter?: FilterExcludingWhere<AccountHierarchy>
  ): Promise<AccountHierarchy> {
    return this.accountHierarchyRepository.findById(id, filter);
  }

  @patch('/account-hierarchies/{id}')
  @response(204, {
    description: 'AccountHierarchy PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AccountHierarchy, {partial: true}),
        },
      },
    })
    accountHierarchy: AccountHierarchy,
  ): Promise<void> {
    await this.accountHierarchyRepository.updateById(id, accountHierarchy);
  }

  @put('/account-hierarchies/{id}')
  @response(204, {
    description: 'AccountHierarchy PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() accountHierarchy: AccountHierarchy,
  ): Promise<void> {
    await this.accountHierarchyRepository.replaceById(id, accountHierarchy);
  }

  @del('/account-hierarchies/{id}')
  @response(204, {
    description: 'AccountHierarchy DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.accountHierarchyRepository.deleteById(id);
  }
}
