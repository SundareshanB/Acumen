import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DriverQuantity } from '../models';
import { DriverQuantityRepository } from '../repositories';
export declare class DriverQuantityController {
    driverQuantityRepository: DriverQuantityRepository;
    constructor(driverQuantityRepository: DriverQuantityRepository);
    create(driverQuantity: Omit<DriverQuantity, 'id'>): Promise<DriverQuantity>;
    count(where?: Where<DriverQuantity>): Promise<Count>;
    find(filter?: Filter<DriverQuantity>): Promise<DriverQuantity[]>;
    updateAll(driverQuantity: DriverQuantity, where?: Where<DriverQuantity>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<DriverQuantity>): Promise<DriverQuantity>;
    updateById(id: string, driverQuantity: DriverQuantity): Promise<void>;
    replaceById(id: string, driverQuantity: DriverQuantity): Promise<void>;
    deleteById(id: string): Promise<void>;
    findSpecificDest(period: string, refNum: string): Promise<DriverQuantity[]>;
    deleteDest(period: string, deriver: string, destRefNum: string): Promise<void>;
    deleteAllDest(period: string, driver: string): Promise<void>;
    updateDest(period: string, driver: string, destRefNum: string, dvrQty: DoubleRange, dvrWt: DoubleRange): Promise<void>;
}
