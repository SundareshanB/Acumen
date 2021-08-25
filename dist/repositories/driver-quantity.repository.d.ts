import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { DriverQuantity, DriverQuantityRelations } from '../models';
export declare class DriverQuantityRepository extends DefaultCrudRepository<DriverQuantity, typeof DriverQuantity.prototype.id, DriverQuantityRelations> {
    constructor(dataSource: MongoDataSource);
}
