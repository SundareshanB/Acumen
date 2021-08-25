import { Entity } from '@loopback/repository';
export declare class Scenario extends Entity {
    id?: string;
    scenarioName: string;
    constructor(data?: Partial<Scenario>);
}
export interface ScenarioRelations {
}
export declare type ScenarioWithRelations = Scenario & ScenarioRelations;
