"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class ContactMessageDto {
    constructor(data) {
        this.username = undefined;
        this.email = undefined;
        this.message = undefined;
        class_transformer_1.plainToClassFromExist(this, data);
    }
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(255),
    tslib_1.__metadata("design:type", String)
], ContactMessageDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    class_validator_1.MaxLength(255),
    tslib_1.__metadata("design:type", String)
], ContactMessageDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(4000),
    tslib_1.__metadata("design:type", String)
], ContactMessageDto.prototype, "message", void 0);
exports.ContactMessageDto = ContactMessageDto;
//# sourceMappingURL=contact-message.dto.js.map