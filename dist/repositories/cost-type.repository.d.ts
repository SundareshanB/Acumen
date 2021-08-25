import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { CostType, CostTypeRelations } from '../models';
export declare class CostTypeRepository extends DefaultCrudRepository<CostType, typeof CostType.prototype.id, CostTypeRelations> {
    constructor(dataSource: MongoDataSource);
}
