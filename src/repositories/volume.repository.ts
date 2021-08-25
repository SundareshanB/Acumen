import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Volume, VolumeRelations} from '../models';

export class VolumeRepository extends DefaultCrudRepository<
  Volume,
  typeof Volume.prototype.id,
  VolumeRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Volume, dataSource);
  }
}
