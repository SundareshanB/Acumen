"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenterHierarchy = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let CenterHierarchy = class CenterHierarchy extends repository_1.Entity {
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
], CenterHierarchy.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CenterHierarchy.prototype, "refNum", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CenterHierarchy.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], CenterHierarchy.prototype, "stage", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], CenterHierarchy.prototype, "node", void 0);
CenterHierarchy = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], CenterHierarchy);
exports.CenterHierarchy = CenterHierarchy;
//# sourceMappingURL=center-hierarchy.model.js.map