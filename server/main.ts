import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { ApplicationModule } from './app.module';
import { config } from './config';
const cacheManager = require('cache-manager');

enableProdMode();

async function bootstrap() {
  cacheManager();
  // tslint:disable-next-line:no-string-literal
  global['window'] = {};
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  await app.listen(config.env.port);
}
bootstrap();
