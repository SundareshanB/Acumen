"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Stage = class Stage extends repository_1.Entity {
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
], Stage.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        unique: true
    }),
    tslib_1.__metadata("design:type", String)
], Stage.prototype, "stageName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        unique: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stage.prototype, "stageOrder", void 0);
Stage = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Stage);
exports.Stage = Stage;
//# sourceMappingURL=stage.model.js.map