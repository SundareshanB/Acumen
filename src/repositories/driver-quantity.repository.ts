import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {DriverQuantity, DriverQuantityRelations} from '../models';

export class DriverQuantityRepository extends DefaultCrudRepository<
  DriverQuantity,
  typeof DriverQuantity.prototype.id,
  DriverQuantityRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(DriverQuantity, dataSource);    

  }
}
