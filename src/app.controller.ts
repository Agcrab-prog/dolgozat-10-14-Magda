import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Render('index.ejs')
    getForm() {
        return { errors: null, formData: {} };
    }

    @Post('book')
    async createBooking(@Body() createBookingDto: CreateBookingDto, @Res() res) {
        const errors = await this.appService.validateBooking(createBookingDto);

        if (errors.length) {
            return res.render('index.ejs', { errors, formData: createBookingDto });
        }

        return res.redirect('/success');
    }

    @Get('success')
    @Render('success.ejs') 
    getSuccess() {
        return {};
    }
}
