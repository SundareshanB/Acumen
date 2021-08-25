import { Entity } from '@loopback/repository';
export declare class Profile extends Entity {
    id?: string;
    profileName: string;
    constructor(data?: Partial<Profile>);
}
export interface ProfileRelations {
}
export declare type ProfileWithRelations = Profile & ProfileRelations;
