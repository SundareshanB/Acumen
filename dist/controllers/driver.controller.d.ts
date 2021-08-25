import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Driver } from '../models';
import { DriverRepository } from '../repositories';
export declare class DriverController {
    driverRepository: DriverRepository;
    constructor(driverRepository: DriverRepository);
    create(driver: Omit<Driver, ''>): Promise<Driver>;
    count(where?: Where<Driver>): Promise<Count>;
    find(filter?: Filter<Driver>): Promise<Driver[]>;
    updateAll(driver: Driver, where?: Where<Driver>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Driver>): Promise<Driver>;
    updateById(id: string, driver: Driver): Promise<void>;
    replaceById(id: string, driver: Driver): Promise<void>;
    deleteById(id: string): Promise<void>;
}
