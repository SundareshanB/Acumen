import { Entity } from '@loopback/repository';
export declare class AccountDriver extends Entity {
    id?: string;
    refNum: string;
    driver: string;
    profile?: string;
    period?: string;
    constructor(data?: Partial<AccountDriver>);
}
export interface AccountDriverRelations {
}
export declare type AccountDriverWithRelations = AccountDriver & AccountDriverRelations;
