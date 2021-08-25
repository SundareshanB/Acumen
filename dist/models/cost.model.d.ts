import { Entity } from '@loopback/repository';
export declare class Cost extends Entity {
    id?: string;
    refNum: string;
    period: string;
    cost?: number;
    costType?: string;
    constructor(data?: Partial<Cost>);
}
export interface CostRelations {
}
export declare type CostWithRelations = Cost & CostRelations;
