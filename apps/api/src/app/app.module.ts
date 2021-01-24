import { HttpException, Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { existsSync } from 'fs';
import { join } from 'path';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppServerModule } from '../../../rucken/src/main.server';
import { config } from './config';
import { APP_CONTROLLERS } from './controllers';
import { HandlebarsAdapter, MailerModule } from './modules/mailer';

let BROWSER_DIR: string;
if (existsSync(join(process.cwd(), 'dist/apps/rucken'))) {
    BROWSER_DIR = join(process.cwd(), 'dist/apps/rucken');
} else {
    BROWSER_DIR = join(process.cwd());
}

applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
    imports: [
        MailerModule.forRoot({
            transport: config.mailer.transport,
            defaults: {
                from: `"${config.mailer.users.robot.name}" <${config.mailer.users.robot.email}>`,
            },
            template: {
                dir: join(config.project.path, 'templates'),
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
        AngularUniversalModule.forRoot({
            bootstrap: AppServerModule,
            viewsPath: BROWSER_DIR,
        }),
    ],
    controllers: [...APP_CONTROLLERS],
    providers: [
        {
            provide: APP_PIPE,
            useFactory: () => new ValidationPipe({ validationError: { target: false } }),
        },
    ],
})
export class AppModule {}
