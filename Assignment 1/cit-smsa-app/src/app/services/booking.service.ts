import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Booking } from '../models/booking';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: Booking[] =[{userId: 1, clubTitle: "Basketball", clubTime: "16:00", clubDate: "1/02/2021"},
                        {userId: 1, clubTitle: "Baseball", clubTime: "16:00", clubDate: "05/01/2021"},
                        {userId: 1, clubTitle: "Swimming", clubTime: "12:00", clubDate: "1/02/2021"},
                        {userId: 2, clubTitle: "Tennis", clubTime: "2:00", clubDate: "1/02/2021"},
                        {userId: 2, clubTitle: "Soccer", clubTime: "2:00", clubDate: "1/02/2021"},
                        {userId: 2, clubTitle: "Hockey", clubTime: "2:00", clubDate: "1/02/2021"},
                        {userId: 3, clubTitle: "Tennis", clubTime: "2:00", clubDate: "1/02/2021"},
                        {userId: 3, clubTitle: "Soccer", clubTime: "2:00", clubDate: "1/02/2021"},
                        {userId: 3, clubTitle: "Hockey", clubTime: "2:00", clubDate: "1/02/2021"}];

  userBookings: Booking[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  userId = this.authService.user.userId;

  getBookedClubs(): Observable<any[]> {
    this.userBookings = [];
    for(var i = 0; i < this.bookings.length; i++) {
      if (this.bookings[i].userId == this.userId) {
        var booking = this.bookings[i];
        this.userBookings.push(booking);
      }
    }

    return of(this.userBookings);
  }

  bookClub(club) {
    var makeBooking;
    
    makeBooking = {userId: this.userId, clubTitle: club.title, clubTime: club.time, clubDate: club.date}
    this.bookings.push(makeBooking);
  }

  cancelBooking(booking) {
    this.bookings = this.bookings.filter(obj => obj !== booking);
    this.userBookings = this.userBookings.filter(obj => obj !== booking);
  }
}
