import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Uom, UomRelations} from '../models';

export class UomRepository extends DefaultCrudRepository<
  Uom,
  typeof Uom.prototype.id,
  UomRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Uom, dataSource);
  }
}
