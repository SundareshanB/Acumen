import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DriverDictionary } from '../models';
import { DriverDictionaryRepository } from '../repositories';
export declare class DriverDictionaryController {
    driverDictionaryRepository: DriverDictionaryRepository;
    constructor(driverDictionaryRepository: DriverDictionaryRepository);
    create(driverDictionary: Omit<DriverDictionary, 'id'>): Promise<DriverDictionary>;
    count(where?: Where<DriverDictionary>): Promise<Count>;
    find(filter?: Filter<DriverDictionary>): Promise<DriverDictionary[]>;
    updateAll(driverDictionary: DriverDictionary, where?: Where<DriverDictionary>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<DriverDictionary>): Promise<DriverDictionary>;
    updateById(id: string, driverDictionary: DriverDictionary): Promise<void>;
    replaceById(id: string, driverDictionary: DriverDictionary): Promise<void>;
    deleteById(id: string): Promise<void>;
    findDictionary(driver: string): Promise<DriverDictionary[]>;
    updateDest(driver: string, definition: string, source: string, srcContact: string): Promise<void>;
}
