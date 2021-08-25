import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Uom, UomRelations } from '../models';
export declare class UomRepository extends DefaultCrudRepository<Uom, typeof Uom.prototype.id, UomRelations> {
    constructor(dataSource: MongoDataSource);
}
