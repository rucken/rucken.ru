import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import 'reflect-metadata';
import { ApplicationModule } from './app.module';
import { config } from './config';

enableProdMode();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  await app.listen(config.env.port);
}
bootstrap();
