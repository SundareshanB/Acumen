"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scenario = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Scenario = class Scenario extends repository_1.Entity {
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
], Scenario.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Scenario.prototype, "scenarioName", void 0);
Scenario = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Scenario);
exports.Scenario = Scenario;
//# sourceMappingURL=scenario.model.js.map