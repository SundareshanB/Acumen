import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Stage } from '../models';
import { StageRepository } from '../repositories';
export declare class StageController {
    stageRepository: StageRepository;
    constructor(stageRepository: StageRepository);
    create(stage: Omit<Stage, 'id'>): Promise<Stage>;
    count(where?: Where<Stage>): Promise<Count>;
    find(filter?: Filter<Stage>): Promise<Stage[]>;
    updateAll(stage: Stage, where?: Where<Stage>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Stage>): Promise<Stage>;
    updateById(id: string, stage: Stage): Promise<void>;
    replaceById(id: string, stage: Stage): Promise<void>;
    deleteById(id: string): Promise<void>;
}
