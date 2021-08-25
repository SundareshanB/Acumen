import {Entity, model, property} from '@loopback/repository';

@model()
export class Scenario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  scenarioName: string;


  constructor(data?: Partial<Scenario>) {
    super(data);
  }
}

export interface ScenarioRelations {
  // describe navigational properties here
}

export type ScenarioWithRelations = Scenario & ScenarioRelations;
