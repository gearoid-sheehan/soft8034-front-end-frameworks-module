import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ClubcardsComponent } from './components/home/clubcards/clubcards.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClubFilterPipe } from './club-filter.pipe';
import { ProfileComponent } from './components/home/profile/profile.component';
import { ViewbookingsComponent } from './components/home/viewbookings/viewbookings.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentsComponent } from './components/home/appointments/appointments.component';
import { BookfacilitiesComponent } from './components/home/bookfacilities/bookfacilities.component';
import { BookingFilterPipe } from './booking-filter.pipe';
import { AppointmentFilterPipe } from './appointment-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ClubcardsComponent,
    HomeComponent,
    LoginComponent,
    ClubFilterPipe,
    ProfileComponent,
    ViewbookingsComponent,
    AppointmentsComponent,
    BookfacilitiesComponent,
    BookingFilterPipe,
    AppointmentFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
