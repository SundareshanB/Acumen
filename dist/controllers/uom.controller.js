"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UomController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UomController = class UomController {
    constructor(uomRepository) {
        this.uomRepository = uomRepository;
    }
    async create(uom) {
        return this.uomRepository.create(uom);
    }
    async count(where) {
        return this.uomRepository.count(where);
    }
    async find(filter) {
        return this.uomRepository.find(filter);
    }
    async updateAll(uom, where) {
        return this.uomRepository.updateAll(uom, where);
    }
    async findById(id, filter) {
        return this.uomRepository.findById(id, filter);
    }
    async updateById(id, uom) {
        await this.uomRepository.updateById(id, uom);
    }
    async replaceById(id, uom) {
        await this.uomRepository.replaceById(id, uom);
    }
    async deleteById(id) {
        await this.uomRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/uoms'),
    rest_1.response(200, {
        description: 'Uom model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Uom) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Uom, {
                    title: 'NewUom',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UomController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/uoms/count'),
    rest_1.response(200, {
        description: 'Uom model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Uom)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UomController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/uoms'),
    rest_1.response(200, {
        description: 'Array of Uom model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Uom, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Uom)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UomController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/uoms'),
    rest_1.response(200, {
        description: 'Uom PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Uom, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Uom)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Uom, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UomController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/uoms/{id}'),
    rest_1.response(200, {
        description: 'Uom model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Uom, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Uom, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UomController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/uoms/{id}'),
    rest_1.response(204, {
        description: 'Uom PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Uom, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Uom]),
    tslib_1.__metadata("design:returntype", Promise)
], UomController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/uoms/{id}'),
    rest_1.response(204, {
        description: 'Uom PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Uom]),
    tslib_1.__metadata("design:returntype", Promise)
], UomController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/uoms/{id}'),
    rest_1.response(204, {
        description: 'Uom DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UomController.prototype, "deleteById", null);
UomController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UomRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UomRepository])
], UomController);
exports.UomController = UomController;
//# sourceMappingURL=uom.controller.js.map