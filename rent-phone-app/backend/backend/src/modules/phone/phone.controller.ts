import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('phones')
export class PhoneController {
  constructor(private phoneService: PhoneService) {}

  @Get()
  findAll() {
    return this.phoneService.findAll();
  }

  @Put(':id')
  updateAvailability(@Param('id') id: string, @Body('available') available: boolean) {
    return this.phoneService.updateAvailability(+id, available);
  }
}
