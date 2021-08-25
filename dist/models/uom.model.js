"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uom = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Uom = class Uom extends repository_1.Entity {
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
], Uom.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        unique: true
    }),
    tslib_1.__metadata("design:type", String)
], Uom.prototype, "uom", void 0);
Uom = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Uom);
exports.Uom = Uom;
//# sourceMappingURL=uom.model.js.map