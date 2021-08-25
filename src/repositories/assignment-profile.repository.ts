import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {AssignmentProfile, AssignmentProfileRelations} from '../models';

export class AssignmentProfileRepository extends DefaultCrudRepository<
  AssignmentProfile,
  typeof AssignmentProfile.prototype.id,
  AssignmentProfileRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(AssignmentProfile, dataSource);
  }
}
