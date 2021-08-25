import {Entity, model, property} from '@loopback/repository';

@model()
export class CenterHierarchy extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  stage: string;

  @property({
    type: 'number',
    required: true,
  })
  node: number;


  constructor(data?: Partial<CenterHierarchy>) {
    super(data);
  }
}

export interface CenterHierarchyRelations {
  // describe navigational properties here
}

export type CenterHierarchyWithRelations = CenterHierarchy & CenterHierarchyRelations;
