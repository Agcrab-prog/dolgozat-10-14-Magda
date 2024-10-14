import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'isDateAfterToday', async: false })
export class IsDateAfterToday implements ValidatorConstraintInterface {
    validate(dateString: string, args: ValidationArguments) {
        const date = new Date(dateString); 
        if (isNaN(date.getTime())) {
            return false; 
        }
        
        const today = new Date();
        today.setHours(0, 0, 0, 0); 

        return date.getTime() >= today.getTime();
    }
    
    defaultMessage(args: ValidationArguments) {
        return 'A dátumnak a mai napra vagy későbbi időpontra kell esnie.';
    }
}  