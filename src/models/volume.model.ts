import {Entity, model, property} from '@loopback/repository';

@model()
export class Volume extends Entity {
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
    required: true,
  })
  volume: number;

  @property({
    type: 'string',
  })
  uom?: string;


  constructor(data?: Partial<Volume>) {
    super(data);
  }
}

export interface VolumeRelations {
  // describe navigational properties here
}

export type VolumeWithRelations = Volume & VolumeRelations;
