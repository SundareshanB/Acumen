import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Period, PeriodRelations } from '../models';
export declare class PeriodRepository extends DefaultCrudRepository<Period, typeof Period.prototype.id, PeriodRelations> {
    constructor(dataSource: MongoDataSource);
}
