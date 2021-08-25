"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountHierarchyController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AccountHierarchyController = class AccountHierarchyController {
    constructor(accountHierarchyRepository) {
        this.accountHierarchyRepository = accountHierarchyRepository;
    }
    async create(accountHierarchy) {
        return this.accountHierarchyRepository.create(accountHierarchy);
    }
    async count(where) {
        return this.accountHierarchyRepository.count(where);
    }
    async find(filter) {
        return this.accountHierarchyRepository.find(filter);
    }
    async updateAll(accountHierarchy, where) {
        return this.accountHierarchyRepository.updateAll(accountHierarchy, where);
    }
    async findById(id, filter) {
        return this.accountHierarchyRepository.findById(id, filter);
    }
    async updateById(id, accountHierarchy) {
        await this.accountHierarchyRepository.updateById(id, accountHierarchy);
    }
    async replaceById(id, accountHierarchy) {
        await this.accountHierarchyRepository.replaceById(id, accountHierarchy);
    }
    async deleteById(id) {
        await this.accountHierarchyRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/account-hierarchies'),
    rest_1.response(200, {
        description: 'AccountHierarchy model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.AccountHierarchy) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AccountHierarchy, {
                    title: 'NewAccountHierarchy',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountHierarchyController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/account-hierarchies/count'),
    rest_1.response(200, {
        description: 'AccountHierarchy model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AccountHierarchy)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountHierarchyController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/account-hierarchies'),
    rest_1.response(200, {
        description: 'Array of AccountHierarchy model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AccountHierarchy, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AccountHierarchy)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountHierarchyController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/account-hierarchies'),
    rest_1.response(200, {
        description: 'AccountHierarchy PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AccountHierarchy, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AccountHierarchy)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AccountHierarchy, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountHierarchyController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/account-hierarchies/{id}'),
    rest_1.response(200, {
        description: 'AccountHierarchy model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AccountHierarchy, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AccountHierarchy, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountHierarchyController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/account-hierarchies/{id}'),
    rest_1.response(204, {
        description: 'AccountHierarchy PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AccountHierarchy, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AccountHierarchy]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountHierarchyController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/account-hierarchies/{id}'),
    rest_1.response(204, {
        description: 'AccountHierarchy PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AccountHierarchy]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountHierarchyController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/account-hierarchies/{id}'),
    rest_1.response(204, {
        description: 'AccountHierarchy DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountHierarchyController.prototype, "deleteById", null);
AccountHierarchyController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AccountHierarchyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AccountHierarchyRepository])
], AccountHierarchyController);
exports.AccountHierarchyController = AccountHierarchyController;
//# sourceMappingURL=account-hierarchy.controller.js.map