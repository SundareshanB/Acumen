"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverDictionaryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DriverDictionaryController = class DriverDictionaryController {
    constructor(driverDictionaryRepository) {
        this.driverDictionaryRepository = driverDictionaryRepository;
    }
    async create(driverDictionary) {
        return this.driverDictionaryRepository.create(driverDictionary);
    }
    async count(where) {
        return this.driverDictionaryRepository.count(where);
    }
    async find(filter) {
        return this.driverDictionaryRepository.find(filter);
    }
    async updateAll(driverDictionary, where) {
        return this.driverDictionaryRepository.updateAll(driverDictionary, where);
    }
    async findById(id, filter) {
        return this.driverDictionaryRepository.findById(id, filter);
    }
    async updateById(id, driverDictionary) {
        await this.driverDictionaryRepository.updateById(id, driverDictionary);
    }
    async replaceById(id, driverDictionary) {
        await this.driverDictionaryRepository.replaceById(id, driverDictionary);
    }
    async deleteById(id) {
        await this.driverDictionaryRepository.deleteById(id);
    }
    async findDictionary(driver) {
        const dqCollection = this.driverDictionaryRepository.dataSource.connector.collection('DriverDictionary');
        return await dqCollection.aggregate([
            {
                '$match': {
                    'driver': driver
                }
            }
        ]).get();
    }
    async updateDest(driver, definition, source, srcContact) {
        const updateCollection = this.driverDictionaryRepository.dataSource.connector.collection('DriverDictionary');
        return await updateCollection.updateOne({
            'driver': driver,
        }, {
            '$set': {
                'definition': definition,
                'source': source,
                'sourceContact': srcContact
            }
        });
    }
};
tslib_1.__decorate([
    rest_1.post('/driver-dictionaries'),
    rest_1.response(200, {
        description: 'DriverDictionary model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.DriverDictionary) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DriverDictionary, {
                    title: 'NewDriverDictionary',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/driver-dictionaries/count'),
    rest_1.response(200, {
        description: 'DriverDictionary model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.DriverDictionary)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/driver-dictionaries'),
    rest_1.response(200, {
        description: 'Array of DriverDictionary model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.DriverDictionary, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.DriverDictionary)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/driver-dictionaries'),
    rest_1.response(200, {
        description: 'DriverDictionary PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DriverDictionary, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.DriverDictionary)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.DriverDictionary, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/driver-dictionaries/{id}'),
    rest_1.response(200, {
        description: 'DriverDictionary model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DriverDictionary, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.DriverDictionary, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/driver-dictionaries/{id}'),
    rest_1.response(204, {
        description: 'DriverDictionary PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DriverDictionary, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.DriverDictionary]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/driver-dictionaries/{id}'),
    rest_1.response(204, {
        description: 'DriverDictionary PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.DriverDictionary]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/driver-dictionaries/{id}'),
    rest_1.response(204, {
        description: 'DriverDictionary DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.get('/driverDictionary/findBydriver'),
    rest_1.response(200, {
        description: 'Array of DriverDictionary model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.DriverDictionary, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('driver')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "findDictionary", null);
tslib_1.__decorate([
    rest_1.patch('/driverDictionary/updateDriverDict'),
    rest_1.response(204, {
        description: 'Array of DriverQuantity model instances',
    }),
    tslib_1.__param(0, rest_1.param.query.string('driver')),
    tslib_1.__param(1, rest_1.param.query.string('definition')),
    tslib_1.__param(2, rest_1.param.query.string('source')),
    tslib_1.__param(3, rest_1.param.query.string('sourceContact')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverDictionaryController.prototype, "updateDest", null);
DriverDictionaryController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DriverDictionaryRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DriverDictionaryRepository])
], DriverDictionaryController);
exports.DriverDictionaryController = DriverDictionaryController;
//# sourceMappingURL=driver-dictionary.controller.js.map