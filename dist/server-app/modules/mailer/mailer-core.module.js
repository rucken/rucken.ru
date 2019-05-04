"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var MailerCoreModule_1;
const common_1 = require("@nestjs/common");
const mailer_options_constant_1 = require("./constants/mailer-options.constant");
const mailer_service_1 = require("./mailer.service");
let MailerCoreModule = MailerCoreModule_1 = class MailerCoreModule {
    static forRoot(options) {
        const MailerOptionsProvider = {
            name: mailer_options_constant_1.MAILER_OPTIONS,
            provide: mailer_options_constant_1.MAILER_OPTIONS,
            useValue: options,
        };
        return {
            module: MailerCoreModule_1,
            providers: [
                MailerOptionsProvider,
                mailer_service_1.MailerService,
            ],
            exports: [
                mailer_service_1.MailerService,
            ],
        };
    }
    static forRootAsync(options) {
        const providers = this.createAsyncProviders(options);
        return {
            module: MailerCoreModule_1,
            providers: [
                ...providers,
                mailer_service_1.MailerService,
            ],
            imports: options.imports,
            exports: [
                mailer_service_1.MailerService,
            ],
        };
    }
    static createAsyncProviders(options) {
        const providers = [
            this.createAsyncOptionsProvider(options),
        ];
        if (options.useClass) {
            providers.push({
                provide: options.useClass,
                useClass: options.useClass,
            });
        }
        return providers;
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                name: mailer_options_constant_1.MAILER_OPTIONS,
                provide: mailer_options_constant_1.MAILER_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            name: mailer_options_constant_1.MAILER_OPTIONS,
            provide: mailer_options_constant_1.MAILER_OPTIONS,
            useFactory: (optionsFactory) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return optionsFactory.createMailerOptions();
            }),
            inject: [options.useExisting || options.useClass],
        };
    }
};
MailerCoreModule = MailerCoreModule_1 = tslib_1.__decorate([
    common_1.Global(),
    common_1.Module({})
], MailerCoreModule);
exports.MailerCoreModule = MailerCoreModule;
//# sourceMappingURL=mailer-core.module.js.map