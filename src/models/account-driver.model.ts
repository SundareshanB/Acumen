import {Entity, model, property} from '@loopback/repository';

@model()
export class AccountDriver extends Entity {
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
  driver: string;

  @property({
    type: 'string',
  })
  profile?: string;

  @property({
    type: 'string',
  })
  period?: string;


  constructor(data?: Partial<AccountDriver>) {
    super(data);
  }
}

export interface AccountDriverRelations {
  // describe navigational properties here
}

export type AccountDriverWithRelations = AccountDriver & AccountDriverRelations;
