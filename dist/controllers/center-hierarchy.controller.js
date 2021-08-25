"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenterHierarchyController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CenterHierarchyController = class CenterHierarchyController {
    constructor(centerHierarchyRepository) {
        this.centerHierarchyRepository = centerHierarchyRepository;
    }
    async create(centerHierarchy) {
        return this.centerHierarchyRepository.create(centerHierarchy);
    }
    async count(where) {
        return this.centerHierarchyRepository.count(where);
    }
    async find(filter) {
        return this.centerHierarchyRepository.find(filter);
    }
    //////////////////////////
    async findX(filter) {
        const centerCollection = this.centerHierarchyRepository.dataSource.connector.collection('CenterHierarchy');
        return await centerCollection.aggregate([
            {
                '$lookup': {
                    'from': 'AccountHierarchy',
                    'localField': 'refNum',
                    'foreignField': 'parentRefNum',
                    'as': 'treeView'
                }
            },
            { '$sort': {
                    'name': -1
                }
            }
        ]).get();
    }
    ///////////////////////////
    async updateAll(centerHierarchy, where) {
        return this.centerHierarchyRepository.updateAll(centerHierarchy, where);
    }
    async findById(id, filter) {
        return this.centerHierarchyRepository.findById(id, filter);
    }
    async updateById(id, centerHierarchy) {
        await this.centerHierarchyRepository.updateById(id, centerHierarchy);
    }
    async replaceById(id, centerHierarchy) {
        await this.centerHierarchyRepository.replaceById(id, centerHierarchy);
    }
    async deleteById(id) {
        await this.centerHierarchyRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/center-hierarchies'),
    rest_1.response(200, {
        description: 'CenterHierarchy model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.CenterHierarchy) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CenterHierarchy, {
                    title: 'NewCenterHierarchy',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/center-hierarchies/count'),
    rest_1.response(200, {
        description: 'CenterHierarchy model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.CenterHierarchy)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/center-hierarchies'),
    rest_1.response(200, {
        description: 'Array of CenterHierarchy model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.CenterHierarchy, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.CenterHierarchy)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.get('/center-hierarchies/treeview'),
    rest_1.response(200, {
        description: 'Array of CenterHierarchy model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.CenterHierarchy, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.CenterHierarchy))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "findX", null);
tslib_1.__decorate([
    rest_1.patch('/center-hierarchies'),
    rest_1.response(200, {
        description: 'CenterHierarchy PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CenterHierarchy, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.CenterHierarchy)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.CenterHierarchy, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/center-hierarchies/{id}'),
    rest_1.response(200, {
        description: 'CenterHierarchy model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CenterHierarchy, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.CenterHierarchy, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/center-hierarchies/{id}'),
    rest_1.response(204, {
        description: 'CenterHierarchy PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.CenterHierarchy, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.CenterHierarchy]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/center-hierarchies/{id}'),
    rest_1.response(204, {
        description: 'CenterHierarchy PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.CenterHierarchy]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/center-hierarchies/{id}'),
    rest_1.response(204, {
        description: 'CenterHierarchy DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CenterHierarchyController.prototype, "deleteById", null);
CenterHierarchyController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CenterHierarchyRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CenterHierarchyRepository])
], CenterHierarchyController);
exports.CenterHierarchyController = CenterHierarchyController;
//# sourceMappingURL=center-hierarchy.controller.js.map