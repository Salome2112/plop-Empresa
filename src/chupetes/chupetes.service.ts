import { Injectable } from '@nestjs/common';
import { CreateChupeteDto } from './dto/create-chupete.dto';
import { UpdateChupeteDto } from './dto/update-chupete.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChupetesService {
  constructor(private prisma: PrismaService) {}
  create(createChupeteDto: CreateChupeteDto) {
    return this.prisma.chupete.create({ data: createChupeteDto});
  }

  findAll() {
    return this.prisma.chupete.findMany({ });
  }

  findOne(id: number) {
    return this.prisma.chupete.findUnique({ where: {id}});
  }

  update(id: number, updateChupeteDto: UpdateChupeteDto) {
    return this.prisma.chupete.update({
      where: {id},
      data: updateChupeteDto,
    });
  }

  remove(id: number) {
    return this.prisma.chupete.delete({ where: {id}});
  }
}
