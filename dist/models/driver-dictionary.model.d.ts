import { Entity } from '@loopback/repository';
export declare class DriverDictionary extends Entity {
    id?: string;
    driver: string;
    definition?: string;
    source?: string;
    sourceContact?: string;
    modBy?: number;
    modTime?: string;
    constructor(data?: Partial<DriverDictionary>);
}
export interface DriverDictionaryRelations {
}
export declare type DriverDictionaryWithRelations = DriverDictionary & DriverDictionaryRelations;
