import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CenterHierarchy } from '../models';
import { CenterHierarchyRepository } from '../repositories';
export declare class CenterHierarchyController {
    centerHierarchyRepository: CenterHierarchyRepository;
    constructor(centerHierarchyRepository: CenterHierarchyRepository);
    create(centerHierarchy: Omit<CenterHierarchy, 'id'>): Promise<CenterHierarchy>;
    count(where?: Where<CenterHierarchy>): Promise<Count>;
    find(filter?: Filter<CenterHierarchy>): Promise<CenterHierarchy[]>;
    findX(filter?: Filter): Promise<CenterHierarchy[]>;
    updateAll(centerHierarchy: CenterHierarchy, where?: Where<CenterHierarchy>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<CenterHierarchy>): Promise<CenterHierarchy>;
    updateById(id: string, centerHierarchy: CenterHierarchy): Promise<void>;
    replaceById(id: string, centerHierarchy: CenterHierarchy): Promise<void>;
    deleteById(id: string): Promise<void>;
}
