"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostTypeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CostTypeController = class CostTypeController {
    constructor(costTypeRepository) {
        this.costTypeRepository = costTypeRepository;
    }
    async create(costType) {
        return this.costTypeRepository.create(costType);
    }
    async count(where) {
        return this.costTypeRepository.count(where);
    }
    async find(filter) {
        return this.costTypeRepository.find(filter);
    }
    async updateAll(costType, where) {
        return this.costTypeRepository.updateAll(costType, where);
    }
    async findById(id, filter) {
        return this.costTypeRepository.findById(id, filter);
    }
    async updateById(id, costType) {
        await this.costTypeRepository.updateById(id, costType);
    }
    async replaceById(id, costType) {
        await this.costTypeRepository.replaceById(id, costType);
    }
    async deleteById(id) {
        await this.costTypeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/cost-types'),
    rest_1.response(200, {
        description: 'CostType model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.CostType) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CostType, {
                    title: 'NewCostType',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostTypeController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/cost-types/count'),
    rest_1.response(200, {
        description: 'CostType model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.CostType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostTypeController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/cost-types'),
    rest_1.response(200, {
        description: 'Array of CostType model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.CostType, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.CostType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostTypeController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/cost-types'),
    rest_1.response(200, {
        description: 'CostType PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CostType, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.CostType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.CostType, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostTypeController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/cost-types/{id}'),
    rest_1.response(200, {
        description: 'CostType model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CostType, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.CostType, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostTypeController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/cost-types/{id}'),
    rest_1.response(204, {
        description: 'CostType PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CostType, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.CostType]),
    tslib_1.__metadata("design:returntype", Promise)
], CostTypeController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/cost-types/{id}'),
    rest_1.response(204, {
        description: 'CostType PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.CostType]),
    tslib_1.__metadata("design:returntype", Promise)
], CostTypeController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/cost-types/{id}'),
    rest_1.response(204, {
        description: 'CostType DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CostTypeController.prototype, "deleteById", null);
CostTypeController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CostTypeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CostTypeRepository])
], CostTypeController);
exports.CostTypeController = CostTypeController;
//# sourceMappingURL=cost-type.controller.js.map