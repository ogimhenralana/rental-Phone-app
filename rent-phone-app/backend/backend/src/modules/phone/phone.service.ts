import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Phone } from './phone.entity';

@Injectable()
export class PhoneService {
  constructor(
    @InjectRepository(Phone)
    private phoneRepository: Repository<Phone>,
  ) {}

  findAll() {
    return this.phoneRepository.find();
  }

  updateAvailability(id: number, available: boolean) {
    return this.phoneRepository.update(id, { available });
  }
}
