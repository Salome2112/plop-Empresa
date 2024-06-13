import { Module } from '@nestjs/common';
import { ChupetesService } from './chupetes.service';
import { ChupetesController } from './chupetes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ChupetesController],
  providers: [ChupetesService],
  imports: [PrismaModule],
})
export class ChupetesModule {}
