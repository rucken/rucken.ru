import { Logger } from '@nestjs/common';
import { config as load } from 'dotenv';
import { accessSync, readFileSync } from 'fs';
import * as path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'develop';
let envFile = resolveRootFile(`${NODE_ENV}.env`);
try {
    accessSync(envFile);
    load({ path: envFile });
    Logger.log(`env file: ${envFile}`, 'Main');
} catch (error) {
    Logger.log(`error on get env file: ${envFile}`, 'Main');
    try {
        envFile = resolveRootFile(`.env`);
        accessSync(envFile);
        load({ path: envFile });
        Logger.log(`env file: ${envFile}`, 'Main');
    } catch (error) {
        Logger.log(`error on get env file: ${envFile}`, 'Main');
    }
}
export interface IConfig {
    env: {
        name: string;
        port: number;
        protocol: 'http' | 'https';
    };
    project: {
        title: string;
        path: string;
        package: any;
    };
    mailer: {
        transport: string;
        users: {
            [key: string]: {
                name: string;
                email: string;
            }
        }
    };
}
export const config: IConfig = {
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
export function getRootPath() {
    return NODE_ENV === 'develop' ? '../../' : '../';
}
export function resolveRootFile(fileName: string) {
    let file = path.resolve(__dirname || '.', getRootPath(), fileName);
    if (file && file[0] === '/') {
        file = '.' + file;
    }
    try {
        accessSync(file);
    } catch (error) {
        Logger.log(`error on resolve root file on path ${__dirname}`, 'Main');
        Logger.log(`error on resolve root file ${file}`, 'Main');
    }
    return file;
}
export function loadRootJson<T = any>(fileName: string) {
    return JSON.parse(readFileSync(resolveRootFile(fileName)).toString()) as T;
}

