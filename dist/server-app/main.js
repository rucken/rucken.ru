"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const core_2 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
require("reflect-metadata");
core_1.enableProdMode();
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        global['window'] = {};
        const app = yield core_2.NestFactory.create(app_module_1.ApplicationModule);
        app.setGlobalPrefix('api');
        yield app.listen(config_1.config.env.port);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map