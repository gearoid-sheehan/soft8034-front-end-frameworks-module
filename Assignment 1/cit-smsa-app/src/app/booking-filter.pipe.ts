import { PipeTransform, Pipe } from '@angular/core';
import { Booking } from './models/booking';

@Pipe({
    name: 'bookingFilter'
})
export class BookingFilterPipe implements PipeTransform {
    transform(bookings: Booking[], searchTitle: string): Booking[] {
        if (!bookings || !searchTitle) {
            return bookings;
        }

        return bookings.filter(booking =>
          booking.clubTitle.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1);
    }
}