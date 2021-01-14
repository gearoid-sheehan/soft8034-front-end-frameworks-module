import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../models/appointment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments: Appointment[] =[{userId: 1, trainer: "Gearoid", time: "16:00", date: "1/02/2021", venue: "CIT"},
                                {userId: 1, trainer: "Eoin", time: "16:00", date: "1/02/2021", venue: "CIT"},
                                {userId: 1, trainer: "Daniel", time: "16:00", date: "1/02/2021", venue: "CIT"}];

  userAppointments: Appointment[] = [];

  constructor(private authService: AuthService) { }

  userId = this.authService.user.userId;

  getAppointments(): Observable<any[]> {
    this.userAppointments = [];
    for(var i = 0; i < this.appointments.length; i++) {
      if (this.appointments[i].userId == this.userId) {
        var booking = this.appointments[i];
        this.userAppointments.push(booking);
      }
    }

    return of(this.userAppointments);
  }

  bookAppointment(appointment) {
    this.appointments.push(appointment);
    console.log(this.appointments);
  }

  cancelAppointment(appointment) {
    this.appointments = this.appointments.filter(obj => obj !== appointment);
    this.userAppointments = this.userAppointments.filter(obj => obj !== appointment);
  }
}
