import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Driver, DriverRelations} from '../models';

export class DriverRepository extends DefaultCrudRepository<
  Driver,
  typeof Driver.prototype.id,
  DriverRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Driver, dataSource);
  }
}
