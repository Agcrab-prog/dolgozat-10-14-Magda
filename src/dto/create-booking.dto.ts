import { IsEmail, IsInt, IsNotEmpty, IsPositive, Max, Min, Validate } from 'class-validator';
import { IsDateAfterToday } from '../validators/is-date-after-today.validator';

export class CreateBookingDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Validate(IsDateAfterToday)  
    date: String; 

    @IsInt()
    @IsPositive()
    @Min(1)
    @Max(10)
    guests: number;
}
