"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentProfileController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AssignmentProfileController = class AssignmentProfileController {
    constructor(assignmentProfileRepository) {
        this.assignmentProfileRepository = assignmentProfileRepository;
    }
    async create(assignmentProfile) {
        return this.assignmentProfileRepository.create(assignmentProfile);
    }
    async count(where) {
        return this.assignmentProfileRepository.count(where);
    }
    async find(filter) {
        return this.assignmentProfileRepository.find(filter);
    }
    async updateAll(assignmentProfile, where) {
        return this.assignmentProfileRepository.updateAll(assignmentProfile, where);
    }
    async findById(id, filter) {
        return this.assignmentProfileRepository.findById(id, filter);
    }
    async updateById(id, assignmentProfile) {
        await this.assignmentProfileRepository.updateById(id, assignmentProfile);
    }
    async replaceById(id, assignmentProfile) {
        await this.assignmentProfileRepository.replaceById(id, assignmentProfile);
    }
    async deleteById(id) {
        await this.assignmentProfileRepository.deleteById(id);
    }
    // Fetch all destination for Common Driver Type 
    async findCommonDest(period, refNum) {
        const centerCollection = this.assignmentProfileRepository.dataSource.connector.collection('AssignmentProfile');
        return await centerCollection.aggregate([
            {
                '$lookup': {
                    'from': 'vwAccountXDriver',
                    'let': {
                        'per': '$period',
                        'pro': '$profileName'
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
                                                '$$pro', '$profile'
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
                    'from': 'DriverQuantity',
                    'let': {
                        'dest': '$destRefNum',
                        'per': '$period',
                        'drv': '$AD.driver'
                    },
                    'pipeline': [
                        {
                            '$match': {
                                '$expr': {
                                    '$and': [
                                        {
                                            '$eq': [
                                                '$$dest', '$destRefNum'
                                            ]
                                        }, {
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
                    'as': 'DQ'
                }
            }, {
                '$unwind': {
                    'path': '$DQ',
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
                    'let': {
                        'per': '$AD.period',
                        'ref': '$AD.refNum'
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
                    'as': 'CC'
                }
            }, {
                '$project': {
                    '_id': 0,
                    'AD.period': 1,
                    'AD.refNum': 1,
                    'destRefNum': 1,
                    'AH.name': 1,
                    'DQ.driverQty': 1,
                    'DQ.driverWt': 1,
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
    //Update Destination Qty and Weight
    // @put
    async updateDest(period, profile, destRefNum) {
        const updateCollection = this.assignmentProfileRepository.dataSource.connector.collection('AssignmentProfile');
        return await updateCollection.updateOne({
            'period': period,
            'profileName': profile,
            'destRefNum': destRefNum,
        }, {
            '$set': {
                'period': period,
                'profileName': profile,
                'destRefNum': destRefNum,
            }
        }, { upsert: true });
    }
};
tslib_1.__decorate([
    rest_1.post('/assignment-profiles'),
    rest_1.response(200, {
        description: 'AssignmentProfile model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.AssignmentProfile) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AssignmentProfile, {
                    title: 'NewAssignmentProfile',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/assignment-profiles/count'),
    rest_1.response(200, {
        description: 'AssignmentProfile model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AssignmentProfile)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/assignment-profiles'),
    rest_1.response(200, {
        description: 'Array of AssignmentProfile model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AssignmentProfile, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AssignmentProfile)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/assignment-profiles'),
    rest_1.response(200, {
        description: 'AssignmentProfile PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AssignmentProfile, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AssignmentProfile)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AssignmentProfile, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/assignment-profiles/{id}'),
    rest_1.response(200, {
        description: 'AssignmentProfile model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AssignmentProfile, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AssignmentProfile, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/assignment-profiles/{id}'),
    rest_1.response(204, {
        description: 'AssignmentProfile PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.AssignmentProfile, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AssignmentProfile]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/assignment-profiles/{id}'),
    rest_1.response(204, {
        description: 'AssignmentProfile PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AssignmentProfile]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/assignment-profiles/{id}'),
    rest_1.response(204, {
        description: 'AssignmentProfile DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.get('/api/AssignmentProfile/Dest_Common'),
    rest_1.response(200, {
        description: 'Array of AssignmentProfile model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.AssignmentProfile, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('refNum')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "findCommonDest", null);
tslib_1.__decorate([
    rest_1.patch('/assignmentProfile/SubmitAssignmentDest'),
    rest_1.response(204, {
        description: 'Array of DriverQuantity model instances',
    }),
    tslib_1.__param(0, rest_1.param.query.string('period')),
    tslib_1.__param(1, rest_1.param.query.string('profileName')),
    tslib_1.__param(2, rest_1.param.query.string('destRefNum')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AssignmentProfileController.prototype, "updateDest", null);
AssignmentProfileController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AssignmentProfileRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AssignmentProfileRepository])
], AssignmentProfileController);
exports.AssignmentProfileController = AssignmentProfileController;
//# sourceMappingURL=assignment-profile.controller.js.map