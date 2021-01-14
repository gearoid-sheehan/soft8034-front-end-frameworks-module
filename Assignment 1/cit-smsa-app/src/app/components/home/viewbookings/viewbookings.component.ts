import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Booking } from 'src/app/models/booking';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.scss']
})
export class ViewbookingsComponent implements OnInit {

  bookings: Observable<Array<{userId: number, clubTitle: string, clubTime: string, clubDate: string}>>
  searchTitle: string;

  refreshBookings = new BehaviorSubject<boolean>(true);

  constructor(private bookingService: BookingService, private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
    this.authService.routeGuard();
    this.bookings = this.refreshBookings.pipe(switchMap(_ => this.bookingService.getBookedClubs()));
  }

  cancelBooking(booking) {
    this.bookingService.cancelBooking(booking);
    this.refreshBookings.next(true);
    this.alertifyService.success('Booking Cancelled');
  }

}
