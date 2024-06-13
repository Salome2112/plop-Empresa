import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChupetesService } from './chupetes.service';
import { CreateChupeteDto } from './dto/create-chupete.dto';
import { UpdateChupeteDto } from './dto/update-chupete.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('chupetes')
@ApiTags('chupetes')
export class ChupetesController {
  constructor(private readonly chupetesService: ChupetesService) {}

  @Post()
  create(@Body() createChupeteDto: CreateChupeteDto) {
    return this.chupetesService.create(createChupeteDto);
  }

  @Get()
  findAll() {
    return this.chupetesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chupetesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChupeteDto: UpdateChupeteDto) {
    return this.chupetesService.update(+id, updateChupeteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chupetesService.remove(+id);
  }
}
