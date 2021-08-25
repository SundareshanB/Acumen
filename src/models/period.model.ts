import {Entity, model, property} from '@loopback/repository';

@model()
export class Period extends Entity {
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
  periodName: string;

  @property({
    type: 'date',
    required: true,
  })
  startDate: string;

  @property({
    type: 'date',
    required: true,
  })
  endDate: string;

  @property({
    type: 'string',
    required: true,
  })
  scenario: string;


  constructor(data?: Partial<Period>) {
    super(data);
  }
}

export interface PeriodRelations {
  // describe navigational properties here
}

export type PeriodWithRelations = Period & PeriodRelations;
