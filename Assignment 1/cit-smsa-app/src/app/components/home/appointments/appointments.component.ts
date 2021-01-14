import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  appointments: Observable<Array<{userId: number, trainer: string, time: string, date: string, venue: string}>>
  searchTitle: string;
  appointment: Appointment = {userId: 0, trainer: "", time: "", date: "", venue: ""};

  refreshAppointments = new BehaviorSubject<boolean>(true);

  constructor(private appointmentService: AppointmentService, private authService: AuthService, 
              private modalService: NgbModal, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.authService.routeGuard();
    this.appointments = this.refreshAppointments.pipe(switchMap(_ => this.appointmentService.getAppointments()));
  }

  bookAppointmentModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  bookAppointment() {
    var userId = this.authService.user.userId;
    this.appointment.userId = userId;
    this.appointmentService.bookAppointment(this.appointment);
    this.refreshAppointments.next(true);
    this.alertifyService.success('Appointment Booked');
  }

  cancelAppointment(appointment) {
    this.appointmentService.cancelAppointment(appointment);
    this.refreshAppointments.next(true);
    this.alertifyService.success('Appointment Cancelled');
  }
}
