import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Volume } from '../models';
import { VolumeRepository } from '../repositories';
export declare class VolumeController {
    volumeRepository: VolumeRepository;
    constructor(volumeRepository: VolumeRepository);
    create(volume: Volume): Promise<Volume>;
    count(where?: Where<Volume>): Promise<Count>;
    find(filter?: Filter<Volume>): Promise<Volume[]>;
    updateAll(volume: Volume, where?: Where<Volume>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Volume>): Promise<Volume>;
    updateById(id: string, volume: Volume): Promise<void>;
    replaceById(id: string, volume: Volume): Promise<void>;
    deleteById(id: string): Promise<void>;
}
