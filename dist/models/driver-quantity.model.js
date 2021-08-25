"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverQuantity = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let DriverQuantity = class DriverQuantity extends repository_1.Entity {
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
], DriverQuantity.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], DriverQuantity.prototype, "destRefNum", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], DriverQuantity.prototype, "driver", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], DriverQuantity.prototype, "period", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], DriverQuantity.prototype, "driverQty", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], DriverQuantity.prototype, "driverWt", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        default: Date.now,
    }),
    tslib_1.__metadata("design:type", String)
], DriverQuantity.prototype, "timeStamp", void 0);
DriverQuantity = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], DriverQuantity);
exports.DriverQuantity = DriverQuantity;
//# sourceMappingURL=driver-quantity.model.js.map