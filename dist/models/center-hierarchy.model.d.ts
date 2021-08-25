import { Entity } from '@loopback/repository';
export declare class CenterHierarchy extends Entity {
    id?: string;
    refNum: string;
    name: string;
    stage: string;
    node: number;
    constructor(data?: Partial<CenterHierarchy>);
}
export interface CenterHierarchyRelations {
}
export declare type CenterHierarchyWithRelations = CenterHierarchy & CenterHierarchyRelations;
