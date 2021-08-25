import {Entity, model, property} from '@loopback/repository';

@model()
export class Cost extends Entity {
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
  refNum: string;

  @property({
    type: 'string',
    required: true,
  })
  period: string;

  @property({
    type: 'number',
  })
  cost?: number;

  @property({
    type: 'string',
  })
  costType?: string;


  constructor(data?: Partial<Cost>) {
    super(data);
  }
}

export interface CostRelations {
  // describe navigational properties here
}

export type CostWithRelations = Cost & CostRelations;
