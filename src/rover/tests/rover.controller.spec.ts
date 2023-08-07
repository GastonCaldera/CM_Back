import { Test, TestingModule } from '@nestjs/testing';
import { RoverController } from '../controllers/rover.controller';

describe('GalleryController', () => {
  let controller: RoverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoverController],
    }).compile();

    controller = module.get<RoverController>(RoverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
