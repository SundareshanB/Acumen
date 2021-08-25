import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Scenario } from '../models';
import { ScenarioRepository } from '../repositories';
export declare class ScenarioController {
    scenarioRepository: ScenarioRepository;
    constructor(scenarioRepository: ScenarioRepository);
    create(scenario: Omit<Scenario, 'id'>): Promise<Scenario>;
    count(where?: Where<Scenario>): Promise<Count>;
    find(filter?: Filter<Scenario>): Promise<Scenario[]>;
    updateAll(scenario: Scenario, where?: Where<Scenario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Scenario>): Promise<Scenario>;
    updateById(id: string, scenario: Scenario): Promise<void>;
    replaceById(id: string, scenario: Scenario): Promise<void>;
    deleteById(id: string): Promise<void>;
}
