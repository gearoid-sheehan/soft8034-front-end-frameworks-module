import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './components/home/appointments/appointments.component';
import { BookfacilitiesComponent } from './components/home/bookfacilities/bookfacilities.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { ViewbookingsComponent } from './components/home/viewbookings/viewbookings.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'viewbookings', component: ViewbookingsComponent },
  { path: 'trainerappointments', component: AppointmentsComponent },
  { path: 'bookfacilities', component: BookfacilitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
