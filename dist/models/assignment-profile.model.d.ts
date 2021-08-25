import { Entity } from '@loopback/repository';
export declare class AssignmentProfile extends Entity {
    id?: string;
    profileName: string;
    destRefNum: string;
    period: string;
    constructor(data?: Partial<AssignmentProfile>);
}
export interface AssignmentProfileRelations {
}
export declare type AssignmentProfileWithRelations = AssignmentProfile & AssignmentProfileRelations;
