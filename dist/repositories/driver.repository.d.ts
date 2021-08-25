import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Driver, DriverRelations } from '../models';
export declare class DriverRepository extends DefaultCrudRepository<Driver, typeof Driver.prototype.id, DriverRelations> {
    constructor(dataSource: MongoDataSource);
}
