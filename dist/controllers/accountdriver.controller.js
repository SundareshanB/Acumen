"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountdriverController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AccountdriverController = class AccountdriverController {
    constructor(accountDriverRepository) {
        this.accountDriverRepository = accountDriverRepository;
    }
    async create(accountDriver) {
        return this.accountDriverRepository.create(accountDriver);
    }
    async count(where) {
        return this.accountDriverRepository.count(where);
    }
    async find(filter) {
        return this.accountDriverRepository.find(filter);
    }
    async updateAll(accountDriver, where) {
        return this.accountDriverRepository.updateAll(accountDriver, where);
    }
    async findById(id, filter) {
        return this.accountDriverRepository.findById(id, filter);
    }
    async updateById(id, accountDriver) {
        await this.accountDriverRepository.updateById(id, accountDriver);
    }
    async replaceById(id, accountDriver) {
        await this.accountDriverRepository.replaceById(id, accountDriver);
    }
    async deleteById(id) {
        await this.accountDriverRepository.deleteById(id);
    }
    // Show similar accounts with same driver and profile in current stage 
    async findSimilarAssignments(period, driver, profile, refNum) {
        const accDriverCollection = this.accountDriverRepository.dataSource.connector.collection('AccountDriver');
        return await accDriverCollection.aggregate([
            {
                '$lookup': {
                    'from': 'AccountHierarchy',
                    'localField': 'refNum',
                    'foreignField': 'refNum',
                    'as': 'AH'
                }
            }, {
                '$unwind': {
                    'path': '$AH',
                    'preserveNullAndEmptyArrays': false
                }
            }, {
                '$project': {
                    '_id': 0,
                    'refNum': 1,
                    'AH.name': 1,
                    'driver': 1,
                    'profile': 1,
                    'period': 1
                }
            }, {
                '$match': {
                    'driver': driver,
                    'profile': profile,
                    'period': period,
                    'refNum': {
                        '$ne': refNum
                    }
                }
            }, {
                '$sort': {
                    'refNum': 1
                }
            }
        ]).get();
    }
    // Show similar accounts with same driver and profile in same stage excluding selected account
    async findSimilarAccounts(period, driver, profile) {
        const accoDriverCollection = this.accountDriverRepository.dataSource.connector.collection('AccountDriver');
        return await accoDriverCollection.aggregate([
            {
                '$lookup': {
                    'from': 'AccountHierarchy',
                    'localField': 'refNum',
                    'foreignField': 'refNum',
                    'as': 'AH'
                }
            }, {
                '$unwind': {
                    'path': '$AH',
                    'preserveNullAndEmptyArrays': false
                }
            }, {
                '$project': {
                    '_id': 0,
                    'refNum': 1,
                    'AH.name': 1,
                    'driver': 1,
                    'profile': 1,
                    'period': 1
                }
            }, {
                '$match': {
                    'driver': driver,
                    'profile': profile,
                    'period': period,
                }
            }, {
                '$sort': {
                    'refNum': 1
                }
            }
        ]).get();
    }
    // Show account details
    async findAccountDetails(period, refNum) {
        const acCollection = this.accountDriverRepository.dataSource.connector.collection('AccountDriver');
        return await acCollection.aggregate([
            {
                '$lookup': { from: 'Driver',
                    localField: 'driver',
                    foreignField: 'driverName',
                    as: 'driverLink' }
            },
            {
                '$match': {
                    'period': period,
                    'refNum': refNum,
                }
            }, {
                '$lookup': {
                    'from': 'Cost',
                    'let': {
                        'per': '$period',
                        'ref': '$refNum'
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
                                                '$$ref', '$refNum'
                                            ]
                                        }
                                    ]
                                }
                            }
                        }
                    ],
                    'as': 'costLink'
                }
            }, {
                '$lookup': {
                    'from': 'Volume',
                    'let': {
                        'per': '$period',
                        'ref': '$refNum'
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
                                                '$$ref', '$refNum'
                                            ]
                                        }
                                    ]
                                }
                            }
                        }
                    ],
                    'as': 'volLink'
                }
            }
        ]).get();
    }
    //Check if account has already assigned with driver and profile
    async findAccountAssignment(refNum, period, driver, profile) {
        const dqCollection = this.accountDriverRepository.dataSource.connector.collection('AccountDriver');
        return await dqCollection.aggregate([
            {
                '$match': {
                    'refNum': refNum,
                    'period': period,
                    'driver': driver,
                    'profile': profile
                }
            }
        ]).get();
    }
    //Assign Driver and Profile to other account
    async updateDest(refNum, period, driver, profile) {
        const updateCollection = this.accountDriverRepository.dataSource.connector.collection('AccountDriver');
        return await updateCollection.updateOne({
            'refNum': refNum,
            'period': period,
        }, {
            '$set': {
                'driver': driver,
                'profile': profile,
            }
        });
    }
};
tslib_1.__decorate([
    rest_1.post('/account-drivers'),
    rest_1.response(200, {
        description: 'AccountDriver model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.AccountDriver) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AccountDriver, {
                    title: 'NewAccountDriver',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/account-drivers/count'),
    rest_1.response(200, {
        description: 'AccountDriver model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AccountDriver)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/account-drivers'),
    rest_1.response(200, {
        description: 'Array of AccountDriver model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AccountDriver, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AccountDriver)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/account-drivers'),
    rest_1.response(200, {
        description: 'AccountDriver PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AccountDriver, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AccountDriver)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AccountDriver, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/account-drivers/{id}'),
    rest_1.response(200, {
        description: 'AccountDriver model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AccountDriver, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AccountDriver, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/account-drivers/{id}'),
    rest_1.response(204, {
        description: 'AccountDriver PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AccountDriver, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AccountDriver]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/account-drivers/{id}'),
    rest_1.response(204, {
        description: 'AccountDriver PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AccountDriver]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/account-drivers/{id}'),
    rest_1.response(204, {
        description: 'AccountDriver DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.get('/account-drivers/similarassignments'),
    rest_1.response(200, {
        description: 'Array of AccountDriver model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AccountDriver, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('driver')),
    tslib_1.__param(2, rest_1.param.query.string('profile')),
    tslib_1.__param(3, rest_1.param.query.string('refNum')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "findSimilarAssignments", null);
tslib_1.__decorate([
    rest_1.get('/account-drivers/similaraccounts'),
    rest_1.response(200, {
        description: 'Array of AccountDriver model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AccountDriver, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('driver')),
    tslib_1.__param(2, rest_1.param.query.string('profile')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "findSimilarAccounts", null);
tslib_1.__decorate([
    rest_1.get('/api/account-drivers/accountDetails'),
    rest_1.response(200, {
        description: 'Array of Account Details',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AccountDriver, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('refNum')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "findAccountDetails", null);
tslib_1.__decorate([
    rest_1.get('/account-drivers/findAccountAssign'),
    rest_1.response(200, {
        description: 'Array of Account Driver model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AccountDriver, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('refNum')),
    tslib_1.__param(1, rest_1.param.query.string('period')),
    tslib_1.__param(2, rest_1.param.query.string('driver')),
    tslib_1.__param(3, rest_1.param.query.string('profile')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "findAccountAssignment", null);
tslib_1.__decorate([
    rest_1.patch('/account-drivers/assignDriverProfile'),
    rest_1.response(204, {
        description: 'Array of DriverQuantity model instances',
    }),
    tslib_1.__param(0, rest_1.param.query.string('refNum')),
    tslib_1.__param(1, rest_1.param.query.string('period')),
    tslib_1.__param(2, rest_1.param.query.string('driver')),
    tslib_1.__param(3, rest_1.param.query.string('profile')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountdriverController.prototype, "updateDest", null);
AccountdriverController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AccountDriverRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AccountDriverRepository])
], AccountdriverController);
exports.AccountdriverController = AccountdriverController;
//# sourceMappingURL=accountdriver.controller.js.map