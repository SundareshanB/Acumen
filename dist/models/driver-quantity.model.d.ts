import { Entity } from '@loopback/repository';
export declare class DriverQuantity extends Entity {
    id?: string;
    destRefNum: string;
    driver: string;
    period: string;
    driverQty: number;
    driverWt: number;
    timeStamp?: string;
    constructor(data?: Partial<DriverQuantity>);
}
export interface DriverQuantityRelations {
}
export declare type DriverQuantityWithRelations = DriverQuantity & DriverQuantityRelations;
