import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Starting API on port 8080');
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
