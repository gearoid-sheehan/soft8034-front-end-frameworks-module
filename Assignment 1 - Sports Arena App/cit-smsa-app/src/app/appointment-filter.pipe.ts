import { PipeTransform, Pipe } from '@angular/core';
import { Appointment } from './models/appointment';

@Pipe({
    name: 'appointmentFilter'
})
export class AppointmentFilterPipe implements PipeTransform {
    transform(appointments: Appointment[], searchTitle: string): Appointment[] {
        if (!appointments || !searchTitle) {
            return appointments;
        }

        return appointments.filter(appointment =>
          appointment.trainer.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1);
    }
}