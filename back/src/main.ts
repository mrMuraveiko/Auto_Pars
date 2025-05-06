import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Auto Parts API')
    .setDescription('API для магазина автозапчастей')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  
  await app.listen(3000, 'localhost');
  console.log(`Application is running on: http://localhost:3000`);
  console.log(`Swagger documentation is available at: http://localhost:3000/api`);
}

bootstrap();
