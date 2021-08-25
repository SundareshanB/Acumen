import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {CenterHierarchy, CenterHierarchyRelations} from '../models';

export class CenterHierarchyRepository extends DefaultCrudRepository<
  CenterHierarchy,
  typeof CenterHierarchy.prototype.id,
  CenterHierarchyRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(CenterHierarchy, dataSource);
  }
}
