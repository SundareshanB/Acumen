import {Entity, model, property} from '@loopback/repository';

@model()
export class Stage extends Entity {
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
  stageName: string;

  @property({
    type: 'number',
    required: true,
    unique:true
  })
  stageOrder: number;


  constructor(data?: Partial<Stage>) {
    super(data);
  }
}

export interface StageRelations {
  // describe navigational properties here
}

export type StageWithRelations = Stage & StageRelations;
