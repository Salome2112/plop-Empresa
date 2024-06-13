import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Configurar CORS
  app.enableCors({
    origin: 'http://localhost:50541',
  });

  // Filtro global de excepciones HTTP
  app.useGlobalFilters(new HttpExceptionFilter());

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Obtener el puerto del servicio de configuración
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
}
bootstrap();
