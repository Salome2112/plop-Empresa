import { Test, TestingModule } from '@nestjs/testing';
import { ChupetesService } from './chupetes.service';

describe('ChupetesService', () => {
  let service: ChupetesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChupetesService],
    }).compile();

    service = module.get<ChupetesService>(ChupetesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
