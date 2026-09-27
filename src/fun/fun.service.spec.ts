import { Test, TestingModule } from '@nestjs/testing';
import { FunService } from './fun.service';

describe('FunService', () => {
  let service: FunService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FunService],
    }).compile();

    service = module.get<FunService>(FunService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
