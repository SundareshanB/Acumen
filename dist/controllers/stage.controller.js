"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StageController = class StageController {
    constructor(stageRepository) {
        this.stageRepository = stageRepository;
    }
    async create(stage) {
        return this.stageRepository.create(stage);
    }
    async count(where) {
        return this.stageRepository.count(where);
    }
    async find(filter) {
        return this.stageRepository.find(filter);
    }
    async updateAll(stage, where) {
        return this.stageRepository.updateAll(stage, where);
    }
    async findById(id, filter) {
        return this.stageRepository.findById(id, filter);
    }
    async updateById(id, stage) {
        await this.stageRepository.updateById(id, stage);
    }
    async replaceById(id, stage) {
        await this.stageRepository.replaceById(id, stage);
    }
    async deleteById(id) {
        await this.stageRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/stages'),
    rest_1.response(200, {
        description: 'Stage model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Stage) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Stage, {
                    title: 'NewStage',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StageController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/stages/count'),
    rest_1.response(200, {
        description: 'Stage model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Stage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StageController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/api/stages'),
    rest_1.response(200, {
        description: 'Array of Stage model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Stage, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Stage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StageController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/stages'),
    rest_1.response(200, {
        description: 'Stage PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Stage, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Stage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Stage, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StageController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/stages/{id}'),
    rest_1.response(200, {
        description: 'Stage model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Stage, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Stage, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StageController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/stages/{id}'),
    rest_1.response(204, {
        description: 'Stage PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Stage, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Stage]),
    tslib_1.__metadata("design:returntype", Promise)
], StageController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/stages/{id}'),
    rest_1.response(204, {
        description: 'Stage PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Stage]),
    tslib_1.__metadata("design:returntype", Promise)
], StageController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/stages/{id}'),
    rest_1.response(204, {
        description: 'Stage DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StageController.prototype, "deleteById", null);
StageController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.StageRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StageRepository])
], StageController);
exports.StageController = StageController;
//# sourceMappingURL=stage.controller.js.map