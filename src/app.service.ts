import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { validate } from 'class-validator';

@Injectable()
export class AppService {
    async validateBooking(createBookingDto: CreateBookingDto) {
        const errors = await validate(createBookingDto);
        return errors;
    }
}
