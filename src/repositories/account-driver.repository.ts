import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {AccountDriver, AccountDriverRelations} from '../models';

export class AccountDriverRepository extends DefaultCrudRepository<
  AccountDriver,
  typeof AccountDriver.prototype.id,
  AccountDriverRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(AccountDriver, dataSource);
  }
}
