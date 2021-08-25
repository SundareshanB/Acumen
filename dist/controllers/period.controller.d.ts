import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Period } from '../models';
import { PeriodRepository } from '../repositories';
export declare class PeriodController {
    periodRepository: PeriodRepository;
    constructor(periodRepository: PeriodRepository);
    create(period: Omit<Period, 'id'>): Promise<Period>;
    count(where?: Where<Period>): Promise<Count>;
    find(filter?: Filter<Period>): Promise<Period[]>;
    updateAll(period: Period, where?: Where<Period>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Period>): Promise<Period>;
    updateById(id: string, period: Period): Promise<void>;
    replaceById(id: string, period: Period): Promise<void>;
    deleteById(id: string): Promise<void>;
}
