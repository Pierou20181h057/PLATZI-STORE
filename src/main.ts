import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //no considera los campos adicionales
      whitelist: true,
      //te advierte que hay un campo adicional
      //forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
