import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {AccountHierarchy, AccountHierarchyRelations} from '../models';

export class AccountHierarchyRepository extends DefaultCrudRepository<
  AccountHierarchy,
  typeof AccountHierarchy.prototype.id,
  AccountHierarchyRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(AccountHierarchy, dataSource);
  }
}
