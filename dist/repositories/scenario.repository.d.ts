import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Scenario, ScenarioRelations } from '../models';
export declare class ScenarioRepository extends DefaultCrudRepository<Scenario, typeof Scenario.prototype.id, ScenarioRelations> {
    constructor(dataSource: MongoDataSource);
}
