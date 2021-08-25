"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VolumeController = class VolumeController {
    constructor(volumeRepository) {
        this.volumeRepository = volumeRepository;
    }
    async create(volume) {
        return this.volumeRepository.create(volume);
    }
    async count(where) {
        return this.volumeRepository.count(where);
    }
    async find(filter) {
        return this.volumeRepository.find(filter);
    }
    async updateAll(volume, where) {
        return this.volumeRepository.updateAll(volume, where);
    }
    async findById(id, filter) {
        return this.volumeRepository.findById(id, filter);
    }
    async updateById(id, volume) {
        await this.volumeRepository.updateById(id, volume);
    }
    async replaceById(id, volume) {
        await this.volumeRepository.replaceById(id, volume);
    }
    async deleteById(id) {
        await this.volumeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/volumes'),
    rest_1.response(200, {
        description: 'Volume model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Volume) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Volume, {
                    title: 'NewVolume',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Volume]),
    tslib_1.__metadata("design:returntype", Promise)
], VolumeController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/volumes/count'),
    rest_1.response(200, {
        description: 'Volume model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Volume)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VolumeController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/volumes'),
    rest_1.response(200, {
        description: 'Array of Volume model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Volume, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Volume)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VolumeController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/volumes'),
    rest_1.response(200, {
        description: 'Volume PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Volume, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Volume)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Volume, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VolumeController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/volumes/{id}'),
    rest_1.response(200, {
        description: 'Volume model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Volume, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Volume, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VolumeController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/volumes/{id}'),
    rest_1.response(204, {
        description: 'Volume PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Volume, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Volume]),
    tslib_1.__metadata("design:returntype", Promise)
], VolumeController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/volumes/{id}'),
    rest_1.response(204, {
        description: 'Volume PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Volume]),
    tslib_1.__metadata("design:returntype", Promise)
], VolumeController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/volumes/{id}'),
    rest_1.response(204, {
        description: 'Volume DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VolumeController.prototype, "deleteById", null);
VolumeController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.VolumeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VolumeRepository])
], VolumeController);
exports.VolumeController = VolumeController;
//# sourceMappingURL=volume.controller.js.map