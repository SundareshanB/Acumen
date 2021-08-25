import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { DriverDictionary, DriverDictionaryRelations } from '../models';
export declare class DriverDictionaryRepository extends DefaultCrudRepository<DriverDictionary, typeof DriverDictionary.prototype.id, DriverDictionaryRelations> {
    constructor(dataSource: MongoDataSource);
}
