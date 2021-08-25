"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountHierarchy = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AccountHierarchy = class AccountHierarchy extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], AccountHierarchy.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AccountHierarchy.prototype, "refNum", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AccountHierarchy.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], AccountHierarchy.prototype, "parentRefNum", void 0);
AccountHierarchy = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AccountHierarchy);
exports.AccountHierarchy = AccountHierarchy;
//# sourceMappingURL=account-hierarchy.model.js.map