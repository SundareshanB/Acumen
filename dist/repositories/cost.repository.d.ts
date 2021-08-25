import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Cost, CostRelations } from '../models';
export declare class CostRepository extends DefaultCrudRepository<Cost, typeof Cost.prototype.id, CostRelations> {
    constructor(dataSource: MongoDataSource);
}
