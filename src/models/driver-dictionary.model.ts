import {Entity, model, property} from '@loopback/repository';

@model()
export class DriverDictionary extends Entity {
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
  driver: string;

  @property({
    type: 'string',
  })
  definition?: string;

  @property({
    type: 'string',
  })
  source?: string;

  @property({
    type: 'string',
  })
  sourceContact?: string;

  @property({
    type: 'number',
  })
  modBy?: number;

  @property({
    type: 'date',
  })
  modTime?: string;


  constructor(data?: Partial<DriverDictionary>) {
    super(data);
  }
}

export interface DriverDictionaryRelations {
  // describe navigational properties here
}

export type DriverDictionaryWithRelations = DriverDictionary & DriverDictionaryRelations;
