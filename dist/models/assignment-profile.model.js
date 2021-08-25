"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentProfile = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AssignmentProfile = class AssignmentProfile extends repository_1.Entity {
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
], AssignmentProfile.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AssignmentProfile.prototype, "profileName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AssignmentProfile.prototype, "destRefNum", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AssignmentProfile.prototype, "period", void 0);
AssignmentProfile = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AssignmentProfile);
exports.AssignmentProfile = AssignmentProfile;
//# sourceMappingURL=assignment-profile.model.js.map