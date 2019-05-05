"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
const mailer_options_constant_1 = require("./constants/mailer-options.constant");
const get = require('lodash.get');
let MailerService = class MailerService {
    constructor(mailerOptions) {
        this.mailerOptions = mailerOptions;
        if (!mailerOptions.transport || Object.keys(mailerOptions.transport).length <= 0) {
            throw new Error('Make sure to provide a nodemailer transport configuration object, connection url or a transport plugin instance.');
        }
        this.transporter = nodemailer_1.createTransport(this.mailerOptions.transport, this.mailerOptions.defaults);
        const templateAdapter = get(this.mailerOptions, 'template.adapter');
        if (templateAdapter) {
            this.transporter.use('compile', (mail, callback) => {
                if (mail.data.html) {
                    return callback();
                }
                return templateAdapter.compile(mail, callback, this.mailerOptions);
            });
        }
    }
    sendMail(sendMailOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.transporter.sendMail(sendMailOptions);
        });
    }
};
MailerService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, common_1.Inject(mailer_options_constant_1.MAILER_OPTIONS)),
    tslib_1.__metadata("design:paramtypes", [Object])
], MailerService);
exports.MailerService = MailerService;
//# sourceMappingURL=mailer.service.js.map