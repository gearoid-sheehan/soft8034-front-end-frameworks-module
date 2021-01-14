import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import {NgbModal, NgbModule, NgbDate, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClubService } from 'src/app/services/club.service';
import { BookingService } from 'src/app/services/booking.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-clubcards',
  templateUrl: './clubcards.component.html',
  styleUrls: ['./clubcards.component.scss']
})
export class ClubcardsComponent implements OnInit {

  searchTitle: string;
  searchTrainer: string;
  
  clubs: any;

  selectClub: Club;
  
  constructor(private modalService: NgbModal, private clubService: ClubService, 
              private bookingService: BookingService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.clubs = this.clubService.retrieveAllClubs();
  }

  viewClub(content, club) {
    this.selectClub = club;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  makeBooking() {
    this.bookingService.bookClub(this.selectClub);
    this.alertifyService.success("Club Booked");
  }
}
