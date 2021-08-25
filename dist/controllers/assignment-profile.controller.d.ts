import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AssignmentProfile } from '../models';
import { AssignmentProfileRepository } from '../repositories';
export declare class AssignmentProfileController {
    assignmentProfileRepository: AssignmentProfileRepository;
    constructor(assignmentProfileRepository: AssignmentProfileRepository);
    create(assignmentProfile: Omit<AssignmentProfile, 'id'>): Promise<AssignmentProfile>;
    count(where?: Where<AssignmentProfile>): Promise<Count>;
    find(filter?: Filter<AssignmentProfile>): Promise<AssignmentProfile[]>;
    updateAll(assignmentProfile: AssignmentProfile, where?: Where<AssignmentProfile>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<AssignmentProfile>): Promise<AssignmentProfile>;
    updateById(id: string, assignmentProfile: AssignmentProfile): Promise<void>;
    replaceById(id: string, assignmentProfile: AssignmentProfile): Promise<void>;
    deleteById(id: string): Promise<void>;
    findCommonDest(period: string, refNum: string): Promise<AssignmentProfile[]>;
    updateDest(period: string, profile: string, destRefNum: string): Promise<void>;
}
