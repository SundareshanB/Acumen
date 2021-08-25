import {Entity, model, property} from '@loopback/repository';

@model()
export class DriverQuantity extends Entity {
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
  destRefNum: string;

  @property({
    type: 'string',
    required: true,
  })
  driver: string;

  @property({
    type: 'string',
    required: true,
  })
  period: string;

  @property({
    type: 'number',
    required: true,
  })
  driverQty: number;

  @property({
    type: 'number',
    required: true,
  })
  driverWt: number;

  @property({
    type: 'date',
    default: Date.now,
  })
  timeStamp?: string;


  constructor(data?: Partial<DriverQuantity>) {
    super(data);
  }
}

export interface DriverQuantityRelations {
  // describe navigational properties here
}

export type DriverQuantityWithRelations = DriverQuantity & DriverQuantityRelations;
