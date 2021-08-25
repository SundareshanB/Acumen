import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Stage, StageRelations } from '../models';
export declare class StageRepository extends DefaultCrudRepository<Stage, typeof Stage.prototype.id, StageRelations> {
    constructor(dataSource: MongoDataSource);
}
