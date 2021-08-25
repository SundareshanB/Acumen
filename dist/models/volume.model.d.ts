import { Entity } from '@loopback/repository';
export declare class Volume extends Entity {
    id?: string;
    refNum: string;
    period: string;
    volume: number;
    uom?: string;
    constructor(data?: Partial<Volume>);
}
export interface VolumeRelations {
}
export declare type VolumeWithRelations = Volume & VolumeRelations;
