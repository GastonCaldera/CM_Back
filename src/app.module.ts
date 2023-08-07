import { Module } from '@nestjs/common';
import { RoverController } from './rover/controllers/rover.controller';
import { RoverModule } from './rover/rover.module';
import { RoverService } from './rover/services/rover.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [RoverModule, ConfigModule.forRoot()],
  controllers: [RoverController],
  providers: [RoverService],
})
export class AppModule {}
