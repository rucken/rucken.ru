"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("../config");
const contact_message_dto_1 = require("../dto/contact-message.dto");
const mailer_1 = require("../modules/mailer");
let ContactController = class ContactController {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    send(req, contactMessageDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const subject = `[${config_1.config.project.title}] Message from contact form`;
                yield this
                    .mailerService
                    .sendMail({
                    to: config_1.config.mailer.users.admin.email,
                    from: config_1.config.mailer.users.robot.email,
                    subject,
                    template: 'contact-form',
                    context: Object.assign({ subject }, contactMessageDto)
                });
                return {
                    message: 'Message sent successfully!'
                };
            }
            catch (error) {
                throw error;
            }
        });
    }
};
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, contact_message_dto_1.ContactMessageDto]),
    tslib_1.__metadata("design:returntype", Promise)
], ContactController.prototype, "send", null);
ContactController = tslib_1.__decorate([
    common_1.Controller('/contact'),
    tslib_1.__metadata("design:paramtypes", [mailer_1.MailerService])
], ContactController);
exports.ContactController = ContactController;
//# sourceMappingURL=contact.controller.js.map