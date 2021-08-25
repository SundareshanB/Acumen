import {Entity, model, property} from '@loopback/repository';

@model()
export class AccountHierarchy extends Entity {
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
  })
  parentRefNum?: string;


  constructor(data?: Partial<AccountHierarchy>) {
    super(data);
  }
}

export interface AccountHierarchyRelations {
  // describe navigational properties here
}

export type AccountHierarchyWithRelations = AccountHierarchy & AccountHierarchyRelations;
