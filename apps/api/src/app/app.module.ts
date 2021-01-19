import { HttpException, Module, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { RavenInterceptor, RavenModule } from 'nest-raven';
import { join } from 'path';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppServerModule } from '../../../rucken/src/main.server';
import { config } from './config';
import { APP_CONTROLLERS } from './controllers';
import { HandlebarsAdapter, MailerModule } from './modules/mailer';

const BROWSER_DIR = join(process.cwd(), 'dist/apps/rucken');

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
    RavenModule,
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/apps/rucken'),
    }),
  ],
  controllers: [...APP_CONTROLLERS],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useValue: new RavenInterceptor({
        filters: [
          // Filter exceptions of type HttpException. Ignore those that
          // have status code of less than 500
          {
            type: HttpException,
            filter: (exception: HttpException) => 500 > exception.getStatus(),
          },
        ],
      }),
    },
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({ validationError: { target: false } }),
    },
  ],
})
export class AppModule {}
