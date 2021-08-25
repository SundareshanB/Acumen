import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {CostType, CostTypeRelations} from '../models';

export class CostTypeRepository extends DefaultCrudRepository<
  CostType,
  typeof CostType.prototype.id,
  CostTypeRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(CostType, dataSource);
  }
}
