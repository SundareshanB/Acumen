import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Stage, StageRelations} from '../models';

export class StageRepository extends DefaultCrudRepository<
  Stage,
  typeof Stage.prototype.id,
  StageRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Stage, dataSource);
  }
}
