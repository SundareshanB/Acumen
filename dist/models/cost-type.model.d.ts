import { Entity } from '@loopback/repository';
export declare class CostType extends Entity {
    id?: string;
    costType: string;
    constructor(data?: Partial<CostType>);
}
export interface CostTypeRelations {
}
export declare type CostTypeWithRelations = CostType & CostTypeRelations;
