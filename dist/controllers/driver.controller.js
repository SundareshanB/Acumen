"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DriverController = class DriverController {
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    async create(driver) {
        return this.driverRepository.create(driver);
    }
    async count(where) {
        return this.driverRepository.count(where);
    }
    async find(filter) {
        return this.driverRepository.find(filter);
    }
    async updateAll(driver, where) {
        return this.driverRepository.updateAll(driver, where);
    }
    async findById(id, filter) {
        return this.driverRepository.findById(id, filter);
    }
    async updateById(id, driver) {
        await this.driverRepository.updateById(id, driver);
    }
    async replaceById(id, driver) {
        await this.driverRepository.replaceById(id, driver);
    }
    async deleteById(id) {
        await this.driverRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/drivers'),
    rest_1.response(200, {
        description: 'Driver model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Driver) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Driver, {
                    title: 'NewDriver',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/drivers/count'),
    rest_1.response(200, {
        description: 'Driver model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Driver)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/drivers'),
    rest_1.response(200, {
        description: 'Array of Driver model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Driver, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Driver)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/drivers'),
    rest_1.response(200, {
        description: 'Driver PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Driver, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Driver)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Driver, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/drivers/{id}'),
    rest_1.response(200, {
        description: 'Driver model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Driver, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Driver, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/drivers/{id}'),
    rest_1.response(204, {
        description: 'Driver PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Driver, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Driver]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/drivers/{id}'),
    rest_1.response(204, {
        description: 'Driver PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Driver]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/drivers/{id}'),
    rest_1.response(204, {
        description: 'Driver DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverController.prototype, "deleteById", null);
DriverController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DriverRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DriverRepository])
], DriverController);
exports.DriverController = DriverController;
//# sourceMappingURL=driver.controller.js.map