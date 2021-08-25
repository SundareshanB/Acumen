import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AccountHierarchy } from '../models';
import { AccountHierarchyRepository } from '../repositories';
export declare class AccountHierarchyController {
    accountHierarchyRepository: AccountHierarchyRepository;
    constructor(accountHierarchyRepository: AccountHierarchyRepository);
    create(accountHierarchy: Omit<AccountHierarchy, 'id'>): Promise<AccountHierarchy>;
    count(where?: Where<AccountHierarchy>): Promise<Count>;
    find(filter?: Filter<AccountHierarchy>): Promise<AccountHierarchy[]>;
    updateAll(accountHierarchy: AccountHierarchy, where?: Where<AccountHierarchy>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<AccountHierarchy>): Promise<AccountHierarchy>;
    updateById(id: string, accountHierarchy: AccountHierarchy): Promise<void>;
    replaceById(id: string, accountHierarchy: AccountHierarchy): Promise<void>;
    deleteById(id: string): Promise<void>;
}
