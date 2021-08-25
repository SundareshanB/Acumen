import { Entity } from '@loopback/repository';
export declare class AccountHierarchy extends Entity {
    id?: string;
    refNum: string;
    name: string;
    parentRefNum?: string;
    constructor(data?: Partial<AccountHierarchy>);
}
export interface AccountHierarchyRelations {
}
export declare type AccountHierarchyWithRelations = AccountHierarchy & AccountHierarchyRelations;
