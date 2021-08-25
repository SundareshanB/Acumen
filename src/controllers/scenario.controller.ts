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
import {Scenario} from '../models';
import {ScenarioRepository} from '../repositories';

export class ScenarioController {
  constructor(
    @repository(ScenarioRepository)
    public scenarioRepository : ScenarioRepository,
  ) {}

  @post('/scenarios')
  @response(200, {
    description: 'Scenario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Scenario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Scenario, {
            title: 'NewScenario',
            exclude: ['id'],
          }),
        },
      },
    })
    scenario: Omit<Scenario, 'id'>,
  ): Promise<Scenario> {
    return this.scenarioRepository.create(scenario);
  }

  @get('/scenarios/count')
  @response(200, {
    description: 'Scenario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Scenario) where?: Where<Scenario>,
  ): Promise<Count> {
    return this.scenarioRepository.count(where);
  }

  @get('/scenarios')
  @response(200, {
    description: 'Array of Scenario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Scenario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Scenario) filter?: Filter<Scenario>,
  ): Promise<Scenario[]> {
    return this.scenarioRepository.find(filter);
  }

  @patch('/scenarios')
  @response(200, {
    description: 'Scenario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Scenario, {partial: true}),
        },
      },
    })
    scenario: Scenario,
    @param.where(Scenario) where?: Where<Scenario>,
  ): Promise<Count> {
    return this.scenarioRepository.updateAll(scenario, where);
  }

  @get('/scenarios/{id}')
  @response(200, {
    description: 'Scenario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Scenario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Scenario, {exclude: 'where'}) filter?: FilterExcludingWhere<Scenario>
  ): Promise<Scenario> {
    return this.scenarioRepository.findById(id, filter);
  }

  @patch('/scenarios/{id}')
  @response(204, {
    description: 'Scenario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Scenario, {partial: true}),
        },
      },
    })
    scenario: Scenario,
  ): Promise<void> {
    await this.scenarioRepository.updateById(id, scenario);
  }

  @put('/scenarios/{id}')
  @response(204, {
    description: 'Scenario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() scenario: Scenario,
  ): Promise<void> {
    await this.scenarioRepository.replaceById(id, scenario);
  }

  @del('/scenarios/{id}')
  @response(204, {
    description: 'Scenario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.scenarioRepository.deleteById(id);
  }
}
