import {Entity, model, property} from '@loopback/repository';

@model()
export class AssignmentProfile extends Entity {
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
  profileName: string;

  @property({
    type: 'string',
    required: true,
  })
  destRefNum: string;

  @property({
    type: 'string',
    required: true,
  })
  period: string;


  constructor(data?: Partial<AssignmentProfile>) {
    super(data);
  }
}

export interface AssignmentProfileRelations {
  // describe navigational properties here
}

export type AssignmentProfileWithRelations = AssignmentProfile & AssignmentProfileRelations;
