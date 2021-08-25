"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverDictionary = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let DriverDictionary = class DriverDictionary extends repository_1.Entity {
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
], DriverDictionary.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], DriverDictionary.prototype, "driver", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], DriverDictionary.prototype, "definition", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], DriverDictionary.prototype, "source", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], DriverDictionary.prototype, "sourceContact", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], DriverDictionary.prototype, "modBy", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], DriverDictionary.prototype, "modTime", void 0);
DriverDictionary = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], DriverDictionary);
exports.DriverDictionary = DriverDictionary;
//# sourceMappingURL=driver-dictionary.model.js.map