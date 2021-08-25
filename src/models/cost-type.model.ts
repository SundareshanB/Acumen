import {Entity, model, property} from '@loopback/repository';

@model()
export class CostType extends Entity {
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
  costType: string;


  constructor(data?: Partial<CostType>) {
    super(data);
  }
}

export interface CostTypeRelations {
  // describe navigational properties here
}

export type CostTypeWithRelations = CostType & CostTypeRelations;
