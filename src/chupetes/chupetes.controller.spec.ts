import { Test, TestingModule } from '@nestjs/testing';
import { ChupetesController } from './chupetes.controller';
import { ChupetesService } from './chupetes.service';

describe('ChupetesController', () => {
  let controller: ChupetesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChupetesController],
      providers: [ChupetesService],
    }).compile();

    controller = module.get<ChupetesController>(ChupetesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
