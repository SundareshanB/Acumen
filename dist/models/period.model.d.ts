import { Entity } from '@loopback/repository';
export declare class Period extends Entity {
    id?: string;
    periodName: string;
    startDate: string;
    endDate: string;
    scenario: string;
    constructor(data?: Partial<Period>);
}
export interface PeriodRelations {
}
export declare type PeriodWithRelations = Period & PeriodRelations;
