import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ChupetesModule } from './chupetes/chupetes.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    PrismaModule,
    ChupetesModule,
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el ConfigModule sea global
      envFilePath: '.env', // Ruta al archivo .env si está en una ubicación diferente
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

