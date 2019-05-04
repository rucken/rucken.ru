"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var MailerModule_1;
const common_1 = require("@nestjs/common");
const mailer_core_module_1 = require("./mailer-core.module");
let MailerModule = MailerModule_1 = class MailerModule {
    static forRoot(options) {
        return {
            module: MailerModule_1,
            imports: [
                mailer_core_module_1.MailerCoreModule.forRoot(options),
            ],
        };
    }
    static forRootAsync(options) {
        return {
            module: MailerModule_1,
            imports: [
                mailer_core_module_1.MailerCoreModule.forRootAsync(options),
            ],
        };
    }
};
MailerModule = MailerModule_1 = tslib_1.__decorate([
    common_1.Module({})
], MailerModule);
exports.MailerModule = MailerModule;
//# sourceMappingURL=mailer.module.js.map