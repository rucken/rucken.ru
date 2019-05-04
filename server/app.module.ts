import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';
import { config } from './config';
import { APP_CONTROLLERS } from './controllers';
import { HandlebarsAdapter, MailerModule } from './modules/mailer';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
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
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    })
  ],
  controllers: [
    ...APP_CONTROLLERS
  ],
  providers: [
    { provide: APP_PIPE, useFactory: () => new ValidationPipe({ validationError: { target: false } }) }
  ]
})
export class ApplicationModule { }
