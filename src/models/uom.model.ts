import {Entity, model, property} from '@loopback/repository';

@model()
export class Uom extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    unique:true
  })
  uom: string;


  constructor(data?: Partial<Uom>) {
    super(data);
  }
}

export interface UomRelations {
  // describe navigational properties here
}

export type UomWithRelations = Uom & UomRelations;
