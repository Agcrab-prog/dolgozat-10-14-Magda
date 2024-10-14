import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IsDateAfterToday } from './validators/is-date-after-today.validator'; 

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, IsDateAfterToday], 
})
export class AppModule {}
