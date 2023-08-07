import { Module } from '@nestjs/common';
import { RoverService } from './services/rover.service';
import { RoverController } from './controllers/rover.controller';

@Module({
  imports: [],
  controllers: [RoverController],
  providers: [RoverService],
})
export class RoverModule {}
