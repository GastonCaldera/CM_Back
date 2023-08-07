import { Controller, Get, Query } from '@nestjs/common';
import { RoverService } from '../services/rover.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rover')
@Controller('rover')
export class RoverController {
  constructor(private roverService: RoverService) {}
  @Get()
  getRoverImages(
    @Query('type') type: string,
    @Query('camera') camera: string,
    @Query('page') page: number,
    @Query('sol') sol: number,
    @Query('earth_date') earth_date: string,
  ) {
    return this.roverService.getRoverImages(
      type,
      camera,
      page,
      sol,
      earth_date,
    );
  }
}
