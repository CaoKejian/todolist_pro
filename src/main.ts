import { NestFactory } from '@nestjs/core';
import { AppModule } from './api/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('TodoList app')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('example')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
