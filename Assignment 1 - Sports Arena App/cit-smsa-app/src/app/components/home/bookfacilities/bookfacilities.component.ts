import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-bookfacilities',
  templateUrl: './bookfacilities.component.html',
  styleUrls: ['./bookfacilities.component.scss']
})
export class BookfacilitiesComponent implements OnInit {

  newBooking: Club = {id: 0, title: "", img: "", time: "", date: "", venue: "",  trainer: "", 
                isFull: false, length: 0, caloriesBurned: 0, maxSize: 0};

  constructor(private alertifyService: AlertifyService, private clubService: ClubService) { }

  ngOnInit(): void {
  }

  bookFacility() {
    this.clubService.addClub(this.newBooking);
    this.alertifyService.success("Facility Booked");
  }

}
