import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {DriverDictionary, DriverDictionaryRelations} from '../models';

export class DriverDictionaryRepository extends DefaultCrudRepository<
  DriverDictionary,
  typeof DriverDictionary.prototype.id,
  DriverDictionaryRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(DriverDictionary, dataSource);
  }
}
