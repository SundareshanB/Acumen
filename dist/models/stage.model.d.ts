import { Entity } from '@loopback/repository';
export declare class Stage extends Entity {
    id?: string;
    stageName: string;
    stageOrder: number;
    constructor(data?: Partial<Stage>);
}
export interface StageRelations {
}
export declare type StageWithRelations = Stage & StageRelations;
