"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ScenarioController = class ScenarioController {
    constructor(scenarioRepository) {
        this.scenarioRepository = scenarioRepository;
    }
    async create(scenario) {
        return this.scenarioRepository.create(scenario);
    }
    async count(where) {
        return this.scenarioRepository.count(where);
    }
    async find(filter) {
        return this.scenarioRepository.find(filter);
    }
    async updateAll(scenario, where) {
        return this.scenarioRepository.updateAll(scenario, where);
    }
    async findById(id, filter) {
        return this.scenarioRepository.findById(id, filter);
    }
    async updateById(id, scenario) {
        await this.scenarioRepository.updateById(id, scenario);
    }
    async replaceById(id, scenario) {
        await this.scenarioRepository.replaceById(id, scenario);
    }
    async deleteById(id) {
        await this.scenarioRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/scenarios'),
    rest_1.response(200, {
        description: 'Scenario model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Scenario) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Scenario, {
                    title: 'NewScenario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ScenarioController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/scenarios/count'),
    rest_1.response(200, {
        description: 'Scenario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Scenario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ScenarioController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/scenarios'),
    rest_1.response(200, {
        description: 'Array of Scenario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Scenario, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Scenario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ScenarioController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/scenarios'),
    rest_1.response(200, {
        description: 'Scenario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Scenario, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Scenario)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Scenario, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ScenarioController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/scenarios/{id}'),
    rest_1.response(200, {
        description: 'Scenario model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Scenario, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Scenario, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ScenarioController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/scenarios/{id}'),
    rest_1.response(204, {
        description: 'Scenario PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Scenario, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Scenario]),
    tslib_1.__metadata("design:returntype", Promise)
], ScenarioController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/scenarios/{id}'),
    rest_1.response(204, {
        description: 'Scenario PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Scenario]),
    tslib_1.__metadata("design:returntype", Promise)
], ScenarioController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/scenarios/{id}'),
    rest_1.response(204, {
        description: 'Scenario DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ScenarioController.prototype, "deleteById", null);
ScenarioController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ScenarioRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ScenarioRepository])
], ScenarioController);
exports.ScenarioController = ScenarioController;
//# sourceMappingURL=scenario.controller.js.map