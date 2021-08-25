import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Scenario, ScenarioRelations} from '../models';

export class ScenarioRepository extends DefaultCrudRepository<
  Scenario,
  typeof Scenario.prototype.id,
  ScenarioRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Scenario, dataSource);
  }
}
