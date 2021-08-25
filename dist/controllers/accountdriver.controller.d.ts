import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AccountDriver } from '../models';
import { AccountDriverRepository } from '../repositories';
export declare class AccountdriverController {
    accountDriverRepository: AccountDriverRepository;
    constructor(accountDriverRepository: AccountDriverRepository);
    create(accountDriver: Omit<AccountDriver, 'id'>): Promise<AccountDriver>;
    count(where?: Where<AccountDriver>): Promise<Count>;
    find(filter?: Filter<AccountDriver>): Promise<AccountDriver[]>;
    updateAll(accountDriver: AccountDriver, where?: Where<AccountDriver>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<AccountDriver>): Promise<AccountDriver>;
    updateById(id: string, accountDriver: AccountDriver): Promise<void>;
    replaceById(id: string, accountDriver: AccountDriver): Promise<void>;
    deleteById(id: string): Promise<void>;
    findSimilarAssignments(period: string, driver: string, profile: string, refNum: string): Promise<AccountDriver[]>;
    findSimilarAccounts(period: string, driver: string, profile: string): Promise<AccountDriver[]>;
    findAccountDetails(period: string, refNum: string): Promise<AccountDriver[]>;
    findAccountAssignment(refNum: string, period: string, driver: string, profile: string): Promise<AccountDriver[]>;
    updateDest(refNum: string, period: string, driver: string, profile: string): Promise<void>;
}
