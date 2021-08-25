"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverQuantityController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DriverQuantityController = class DriverQuantityController {
    constructor(driverQuantityRepository) {
        this.driverQuantityRepository = driverQuantityRepository;
    }
    async create(driverQuantity) {
        return this.driverQuantityRepository.create(driverQuantity);
    }
    async count(where) {
        return this.driverQuantityRepository.count(where);
    }
    async find(filter) {
        return this.driverQuantityRepository.find(filter);
    }
    async updateAll(driverQuantity, where) {
        return this.driverQuantityRepository.updateAll(driverQuantity, where);
    }
    async findById(id, filter) {
        return this.driverQuantityRepository.findById(id, filter);
    }
    async updateById(id, driverQuantity) {
        await this.driverQuantityRepository.updateById(id, driverQuantity);
    }
    async replaceById(id, driverQuantity) {
        await this.driverQuantityRepository.replaceById(id, driverQuantity);
    }
    async deleteById(id) {
        await this.driverQuantityRepository.deleteById(id);
    }
    async findSpecificDest(period, refNum) {
        const dqCollection = this.driverQuantityRepository.dataSource.connector.collection('DriverQuantity');
        return await dqCollection.aggregate([
            {
                '$lookup': {
                    'from': 'vwAccountXDriver',
                    'let': {
                        'per': '$period',
                        'drv': '$driver'
                    },
                    'pipeline': [
                        {
                            '$match': {
                                '$expr': {
                                    '$and': [
                                        {
                                            '$eq': [
                                                '$$per', '$period'
                                            ]
                                        }, {
                                            '$eq': [
                                                '$$drv', '$driver'
                                            ]
                                        }
                                    ]
                                }
                            }
                        }
                    ],
                    'as': 'AD'
                }
            }, {
                '$unwind': {
                    'path': '$AD',
                    'preserveNullAndEmptyArrays': false
                }
            }, {
                '$lookup': {
                    'from': 'AccountHierarchy',
                    'localField': 'destRefNum',
                    'foreignField': 'refNum',
                    'as': 'AH'
                }
            }, {
                '$unwind': {
                    'path': '$AH',
                    'preserveNullAndEmptyArrays': false
                }
            }, {
                '$lookup': {
                    'from': 'Cost',
                    'localField': 'AD.refNum',
                    'foreignField': 'refNum',
                    'as': 'CC'
                }
            }, {
                '$project': {
                    '_id': 0,
                    'destRefNum': 1,
                    'AD.refNum': 1,
                    'AD.period': 1,
                    'AH.name': 1,
                    'driverQty': 1,
                    'driverWt': 1,
                    'CC.cost': 1
                }
            },
            {
                '$match': {
                    'AD.period': period,
                    'AD.refNum': refNum,
                }
            }
        ]).get();
    }
    //Delete single selected Destination account
    async deleteDest(period, deriver, destRefNum) {
        const dqCollection = this.driverQuantityRepository.dataSource.connector.collection('DriverQuantity');
        return await dqCollection.deleteOne({
            'period': period,
            'driver': deriver,
            'destRefNum': destRefNum
        });
    }
    //Delete all destination account linked with driver and period
    async deleteAllDest(period, driver) {
        const dqCollection = this.driverQuantityRepository.dataSource.connector.collection('DriverQuantity');
        return await dqCollection.deleteMany({
            'period': period,
            'driver': driver,
        });
    }
    //Update Destination Qty and Weight
    // @put
    async updateDest(period, driver, destRefNum, dvrQty, dvrWt) {
        const updateCollection = this.driverQuantityRepository.dataSource.connector.collection('DriverQuantity');
        return await updateCollection.updateOne({
            'period': period,
            'driver': driver,
            'destRefNum': destRefNum,
        }, {
            '$set': {
                'driverQty': dvrQty,
                'driverWt': dvrWt,
            }
        }, { upsert: true });
    }
};
tslib_1.__decorate([
    rest_1.post('/driver-quantities'),
    rest_1.response(200, {
        description: 'DriverQuantity model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.DriverQuantity) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DriverQuantity, {
                    title: 'NewDriverQuantity',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/driver-quantities/count'),
    rest_1.response(200, {
        description: 'DriverQuantity model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.DriverQuantity)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/driver-quantities'),
    rest_1.response(200, {
        description: 'Array of DriverQuantity model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.DriverQuantity, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.DriverQuantity)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/driver-quantities'),
    rest_1.response(200, {
        description: 'DriverQuantity PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DriverQuantity, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.DriverQuantity)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.DriverQuantity, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/driver-quantities/{id}'),
    rest_1.response(200, {
        description: 'DriverQuantity model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DriverQuantity, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.DriverQuantity, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/driver-quantities/{id}'),
    rest_1.response(204, {
        description: 'DriverQuantity PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.DriverQuantity, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.DriverQuantity]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/driver-quantities/{id}'),
    rest_1.response(204, {
        description: 'DriverQuantity PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.DriverQuantity]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/driver-quantities/{id}'),
    rest_1.response(204, {
        description: 'DriverQuantity DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.get('/api/driverQuantity/Dest_Specific'),
    rest_1.response(200, {
        description: 'Array of DriverQuantity model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.DriverQuantity, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('refNum')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "findSpecificDest", null);
tslib_1.__decorate([
    rest_1.del('/driverQuantity/deleteDest'),
    rest_1.response(200, {
        description: 'Array of DriverQuantity model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.DriverQuantity, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('driver')),
    tslib_1.__param(2, rest_1.param.query.string('destRefNum')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "deleteDest", null);
tslib_1.__decorate([
    rest_1.del('/driverQuantity/deleteAllDest'),
    rest_1.response(200, {
        description: 'Array of DriverQuantity model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.DriverQuantity, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('driver')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "deleteAllDest", null);
tslib_1.__decorate([
    rest_1.patch('/driverQuantity/SubmitDest'),
    rest_1.response(204, {
        description: 'Array of DriverQuantity model instances',
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('driver')),
    tslib_1.__param(2, rest_1.param.query.string('destRefNum')),
    tslib_1.__param(3, rest_1.param.query.string('driverQty')),
    tslib_1.__param(4, rest_1.param.query.string('driverWt')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DriverQuantityController.prototype, "updateDest", null);
DriverQuantityController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.DriverQuantityRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DriverQuantityRepository])
], DriverQuantityController);
exports.DriverQuantityController = DriverQuantityController;
//# sourceMappingURL=driver-quantity.controller.js.map