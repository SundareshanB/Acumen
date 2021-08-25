import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { AccountDriver, AccountDriverRelations } from '../models';
export declare class AccountDriverRepository extends DefaultCrudRepository<AccountDriver, typeof AccountDriver.prototype.id, AccountDriverRelations> {
    constructor(dataSource: MongoDataSource);
}
