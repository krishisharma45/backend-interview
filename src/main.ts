import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

// leverages dotenv package to load variables from .env to process.env object
dotenv.config();

const port = process.env.NESTJS_PORT || 3000

// bootstrap the setup by creating app module, which lets us listen to port
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
