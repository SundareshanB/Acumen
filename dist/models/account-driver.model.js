"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDriver = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AccountDriver = class AccountDriver extends repository_1.Entity {
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
], AccountDriver.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AccountDriver.prototype, "refNum", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AccountDriver.prototype, "driver", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], AccountDriver.prototype, "profile", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], AccountDriver.prototype, "period", void 0);
AccountDriver = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AccountDriver);
exports.AccountDriver = AccountDriver;
//# sourceMappingURL=account-driver.model.js.map