import { Logger } from '@nestjs/common';
import { accessSync, readFileSync } from 'fs';
import * as path from 'path';
import { cwd } from 'process';

export interface IConfig {
    logger: {
        sentryDsn: string;
    };
    env: {
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
            };
        };
    };
}
export const config: IConfig = {
    logger: {
        sentryDsn: 'https://69151c7c4350444b85883a2cbc328ee7@sentry.io/1456889',
    },
    env: {
        port: 5000,
        protocol: process.env.PROTOCOL === 'https' ? 'https' : 'http',
    },
    project: {
        title: process.env.TITLE,
        path: resolveRootFile(''),
        package: loadRootJson('package.json'),
    },
    mailer: {
        transport: process.env.MAILER_TRANSPORT,
        users: {
            robot: {
                name: process.env.MAILER_ROBOT_NAME,
                email: process.env.MAILER_ROBOT_EMAIL,
            },
            admin: {
                name: process.env.MAILER_ADMIN_NAME,
                email: process.env.MAILER_ADMIN_EMAIL,
            },
        },
    },
};
export function getRootPath() {
    return cwd();
}
export function resolveRootFile(fileName: string) {
    let file = path.resolve(__dirname || '.', getRootPath(), fileName);
    if (file && file === '/' + fileName) {
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
