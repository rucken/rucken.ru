"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const ng_universal_1 = require("@nestjs/ng-universal");
const path_1 = require("path");
const config_1 = require("./config");
const controllers_1 = require("./controllers");
const mailer_1 = require("./modules/mailer");
const BROWSER_DIR = path_1.join(process.cwd(), 'dist/browser');
ng_universal_1.applyDomino(global, path_1.join(BROWSER_DIR, 'index.html'));
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: config_1.config.mailer.transport,
                defaults: {
                    from: `"${config_1.config.mailer.users.robot.name}" <${config_1.config.mailer.users.robot.email}>`,
                },
                template: {
                    dir: path_1.join(config_1.config.project.path, 'templates'),
                    adapter: new mailer_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
            ng_universal_1.AngularUniversalModule.forRoot({
                viewsPath: path_1.join(process.cwd(), 'dist/browser'),
                bundle: require('../server/main'),
                liveReload: true
            })
        ],
        controllers: [
            ...controllers_1.APP_CONTROLLERS
        ],
        providers: [
            { provide: core_1.APP_PIPE, useFactory: () => new common_1.ValidationPipe({ validationError: { target: false } }) }
        ]
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map