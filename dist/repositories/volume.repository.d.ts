import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Volume, VolumeRelations } from '../models';
export declare class VolumeRepository extends DefaultCrudRepository<Volume, typeof Volume.prototype.id, VolumeRelations> {
    constructor(dataSource: MongoDataSource);
}
