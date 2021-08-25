import { Entity } from '@loopback/repository';
export declare class Driver extends Entity {
    id?: string;
    driverName: string;
    driverType: string;
    driverAssociation: string;
    constructor(data?: Partial<Driver>);
}
export interface DriverRelations {
}
export declare type DriverWithRelations = Driver & DriverRelations;
