import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config(); // load .env
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:5173', 'https://smart-investor-sand.vercel.app'],
  }); // allow frontend calls
  await app.listen(3000);
}
bootstrap();
