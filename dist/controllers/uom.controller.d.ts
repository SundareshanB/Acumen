import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Uom } from '../models';
import { UomRepository } from '../repositories';
export declare class UomController {
    uomRepository: UomRepository;
    constructor(uomRepository: UomRepository);
    create(uom: Omit<Uom, 'id'>): Promise<Uom>;
    count(where?: Where<Uom>): Promise<Count>;
    find(filter?: Filter<Uom>): Promise<Uom[]>;
    updateAll(uom: Uom, where?: Where<Uom>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Uom>): Promise<Uom>;
    updateById(id: string, uom: Uom): Promise<void>;
    replaceById(id: string, uom: Uom): Promise<void>;
    deleteById(id: string): Promise<void>;
}
