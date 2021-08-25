import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cost } from '../models';
import { CostRepository } from '../repositories';
export declare class CostController {
    costRepository: CostRepository;
    constructor(costRepository: CostRepository);
    create(cost: Omit<Cost, 'id'>): Promise<Cost>;
    count(where?: Where<Cost>): Promise<Count>;
    find(filter?: Filter<Cost>): Promise<Cost[]>;
    updateAll(cost: Cost, where?: Where<Cost>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cost>): Promise<Cost>;
    updateById(id: string, cost: Cost): Promise<void>;
    replaceById(id: string, cost: Cost): Promise<void>;
    deleteById(id: string): Promise<void>;
    findX(filter?: Filter): Promise<Cost[]>;
}
