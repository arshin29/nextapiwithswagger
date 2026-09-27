import { Test, TestingModule } from '@nestjs/testing';
import { FunController } from './fun.controller';

describe('FunController', () => {
  let controller: FunController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FunController],
    }).compile();

    controller = module.get<FunController>(FunController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
