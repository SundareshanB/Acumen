import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { AssignmentProfile, AssignmentProfileRelations } from '../models';
export declare class AssignmentProfileRepository extends DefaultCrudRepository<AssignmentProfile, typeof AssignmentProfile.prototype.id, AssignmentProfileRelations> {
    constructor(dataSource: MongoDataSource);
}
