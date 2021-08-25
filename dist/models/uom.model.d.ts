import { Entity } from '@loopback/repository';
export declare class Uom extends Entity {
    id?: string;
    uom: string;
    constructor(data?: Partial<Uom>);
}
export interface UomRelations {
}
export declare type UomWithRelations = Uom & UomRelations;
