import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { AccountHierarchy, AccountHierarchyRelations } from '../models';
export declare class AccountHierarchyRepository extends DefaultCrudRepository<AccountHierarchy, typeof AccountHierarchy.prototype.id, AccountHierarchyRelations> {
    constructor(dataSource: MongoDataSource);
}
