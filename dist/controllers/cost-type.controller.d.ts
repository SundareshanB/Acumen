import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CostType } from '../models';
import { CostTypeRepository } from '../repositories';
export declare class CostTypeController {
    costTypeRepository: CostTypeRepository;
    constructor(costTypeRepository: CostTypeRepository);
    create(costType: Omit<CostType, 'id'>): Promise<CostType>;
    count(where?: Where<CostType>): Promise<Count>;
    find(filter?: Filter<CostType>): Promise<CostType[]>;
    updateAll(costType: CostType, where?: Where<CostType>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<CostType>): Promise<CostType>;
    updateById(id: string, costType: CostType): Promise<void>;
    replaceById(id: string, costType: CostType): Promise<void>;
    deleteById(id: string): Promise<void>;
}
