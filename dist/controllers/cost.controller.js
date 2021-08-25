"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CostController = class CostController {
    constructor(costRepository) {
        this.costRepository = costRepository;
    }
    async create(cost) {
        return this.costRepository.create(cost);
    }
    async count(where) {
        return this.costRepository.count(where);
    }
    async find(filter) {
        return this.costRepository.find(filter);
    }
    async updateAll(cost, where) {
        return this.costRepository.updateAll(cost, where);
    }
    async findById(id, filter) {
        return this.costRepository.findById(id, filter);
    }
    async updateById(id, cost) {
        await this.costRepository.updateById(id, cost);
    }
    async replaceById(id, cost) {
        await this.costRepository.replaceById(id, cost);
    }
    async deleteById(id) {
        await this.costRepository.deleteById(id);
    }
    // Fetch all destination for Common Driver Type 
    async findX(filter) {
        const centerCollection = this.costRepository.dataSource.connector.collection('Cost');
        return await centerCollection.aggregate([
            {
                '$lookup': {
                    'from': 'AccountHierarchy',
                    'localField': 'refNum',
                    'foreignField': 'refNum',
                    'as': 'AH'
                }
            }, {
                '$lookup': {
                    'from': 'CenterHierarchy',
                    'localField': 'AH.parentRefNum',
                    'foreignField': 'refNum',
                    'as': 'CH'
                }
            }, {
                '$lookup': {
                    'from': 'Stage',
                    'localField': 'CH.stage',
                    'foreignField': 'stageName',
                    'as': 'stageLink'
                }
            }, {
                '$match': {
                    'costType': 'USD',
                    'period': '2015_Plan'
                }
            }, {
                '$project': {
                    'stageLink.stageName': 1,
                    'stageLink.stageOrder': 1,
                    'cost': 1
                }
            }, {
                '$group': {
                    '_id': '$stageLink',
                    'USDCost': {
                        '$push': '$$ROOT'
                    }
                }
            }, {
                '$addFields': {
                    'USD': {
                        '$sum': '$USDCost.cost'
                    }
                }
            }
        ]).get();
    }
};
tslib_1.__decorate([
    rest_1.post('/costs'),
    rest_1.response(200, {
        description: 'Cost model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Cost) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cost, {
                    title: 'NewCost',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/costs/count'),
    rest_1.response(200, {
        description: 'Cost model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/costs'),
    rest_1.response(200, {
        description: 'Array of Cost model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Cost, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/costs'),
    rest_1.response(200, {
        description: 'Cost PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cost, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cost)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cost, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/costs/{id}'),
    rest_1.response(200, {
        description: 'Cost model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cost, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cost, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/costs/{id}'),
    rest_1.response(204, {
        description: 'Cost PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cost, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cost]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/costs/{id}'),
    rest_1.response(204, {
        description: 'Cost PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cost]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/costs/{id}'),
    rest_1.response(204, {
        description: 'Cost DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.get('/cost/stage1'),
    rest_1.response(200, {
        description: 'Array of Stage1 model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Cost, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Cost))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CostController.prototype, "findX", null);
CostController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CostRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CostRepository])
], CostController);
exports.CostController = CostController;
//# sourceMappingURL=cost.controller.js.map