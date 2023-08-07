import { Test, TestingModule } from '@nestjs/testing';
import { RoverService } from '../services/rover.service';

describe('RoverService', () => {
  let service: RoverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoverService],
    }).compile();

    service = module.get<RoverService>(RoverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
