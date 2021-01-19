/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as Sentry from '@sentry/browser';
import { AppModule } from './app/app.module';
import { config } from './app/config';

async function bootstrap() {
  Sentry.init({ dsn: config.logger.sentryDsn });
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(config.env.port, () => {
    Logger.log('Listening at http://localhost:' + config.env.port);
  });
}

bootstrap();
