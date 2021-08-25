"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PeriodController = class PeriodController {
    constructor(periodRepository) {
        this.periodRepository = periodRepository;
    }
    async create(period) {
        return this.periodRepository.create(period);
    }
    async count(where) {
        return this.periodRepository.count(where);
    }
    async find(filter) {
        return this.periodRepository.find(filter);
    }
    async updateAll(period, where) {
        return this.periodRepository.updateAll(period, where);
    }
    async findById(id, filter) {
        return this.periodRepository.findById(id, filter);
    }
    async updateById(id, period) {
        await this.periodRepository.updateById(id, period);
    }
    async replaceById(id, period) {
        await this.periodRepository.replaceById(id, period);
    }
    async deleteById(id) {
        await this.periodRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/periods'),
    rest_1.response(200, {
        description: 'Period model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Period) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Period, {
                    title: 'NewPeriod',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PeriodController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/periods/count'),
    rest_1.response(200, {
        description: 'Period model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Period)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PeriodController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/api/periods'),
    rest_1.response(200, {
        description: 'Array of Period model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Period, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Period)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PeriodController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/periods'),
    rest_1.response(200, {
        description: 'Period PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Period, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Period)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Period, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PeriodController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/periods/{id}'),
    rest_1.response(200, {
        description: 'Period model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Period, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Period, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PeriodController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/periods/{id}'),
    rest_1.response(204, {
        description: 'Period PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Period, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Period]),
    tslib_1.__metadata("design:returntype", Promise)
], PeriodController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/periods/{id}'),
    rest_1.response(204, {
        description: 'Period PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Period]),
    tslib_1.__metadata("design:returntype", Promise)
], PeriodController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/periods/{id}'),
    rest_1.response(204, {
        description: 'Period DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PeriodController.prototype, "deleteById", null);
PeriodController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PeriodRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PeriodRepository])
], PeriodController);
exports.PeriodController = PeriodController;
//# sourceMappingURL=period.controller.js.map