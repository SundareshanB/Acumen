"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostType = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let CostType = class CostType extends repository_1.Entity {
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
], CostType.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CostType.prototype, "costType", void 0);
CostType = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], CostType);
exports.CostType = CostType;
//# sourceMappingURL=cost-type.model.js.map