import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { config } from './config';

import 'reflect-metadata';

enableProdMode();

async function bootstrap() {
  // tslint:disable-next-line:no-string-literal
  global['window'] = {};
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  await app.listen(config.env.port);
}
bootstrap();
