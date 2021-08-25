import {Entity, model, property} from '@loopback/repository';

@model()
export class Driver extends Entity {
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
  driverName: string;

  @property({
    type: 'string',
    required: true,
  })
  driverType: string;

  @property({
    type: 'string',
    required: true,
  })
  driverAssociation: string;


  constructor(data?: Partial<Driver>) {
    super(data);
  }
}

export interface DriverRelations {
  // describe navigational properties here
}

export type DriverWithRelations = Driver & DriverRelations;
