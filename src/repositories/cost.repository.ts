import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Cost, CostRelations} from '../models';

export class CostRepository extends DefaultCrudRepository<
  Cost,
  typeof Cost.prototype.id,
  CostRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Cost, dataSource);
  }
}
