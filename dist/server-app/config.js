"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
const fs_1 = require("fs");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV || 'develop';
let envFile = resolveRootFile(`${NODE_ENV}.env`);
try {
    fs_1.accessSync(envFile);
    dotenv_1.config({ path: envFile });
    common_1.Logger.log(`env file: ${envFile}`, 'Main');
}
catch (error) {
    common_1.Logger.log(`error on get env file: ${envFile}`, 'Main');
    try {
        envFile = resolveRootFile(`.env`);
        fs_1.accessSync(envFile);
        dotenv_1.config({ path: envFile });
        common_1.Logger.log(`env file: ${envFile}`, 'Main');
    }
    catch (error) {
        common_1.Logger.log(`error on get env file: ${envFile}`, 'Main');
    }
}
exports.config = {
    env: {
        name: NODE_ENV,
        port: process.env.PORT ? +process.env.PORT : 3000,
        protocol: process.env.PROTOCOL === 'https' ? 'https' : 'http'
    },
    project: {
        title: process.env.TITLE,
        path: resolveRootFile(''),
        package: loadRootJson('package.json')
    },
    mailer: {
        transport: process.env.MAILER_TRANSPORT,
        users: {
            robot: {
                name: process.env.MAILER_ROBOT_NAME,
                email: process.env.MAILER_ROBOT_EMAIL
            },
            admin: {
                name: process.env.MAILER_ADMIN_NAME,
                email: process.env.MAILER_ADMIN_EMAIL
            }
        }
    }
};
function getRootPath() {
    return NODE_ENV === 'develop' ? '../../' : '../';
}
exports.getRootPath = getRootPath;
function resolveRootFile(fileName) {
    let file = path.resolve(__dirname || '.', getRootPath(), fileName);
    if (file && file === '/') {
        file = '.' + file;
    }
    try {
        fs_1.accessSync(file);
    }
    catch (error) {
        common_1.Logger.log(`error on resolve root file on path ${__dirname}`, 'Main');
        common_1.Logger.log(`error on resolve root file ${file}`, 'Main');
    }
    return file;
}
exports.resolveRootFile = resolveRootFile;
function loadRootJson(fileName) {
    return JSON.parse(fs_1.readFileSync(resolveRootFile(fileName)).toString());
}
exports.loadRootJson = loadRootJson;
//# sourceMappingURL=config.js.map