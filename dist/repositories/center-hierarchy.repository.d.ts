import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { CenterHierarchy, CenterHierarchyRelations } from '../models';
export declare class CenterHierarchyRepository extends DefaultCrudRepository<CenterHierarchy, typeof CenterHierarchy.prototype.id, CenterHierarchyRelations> {
    constructor(dataSource: MongoDataSource);
}
