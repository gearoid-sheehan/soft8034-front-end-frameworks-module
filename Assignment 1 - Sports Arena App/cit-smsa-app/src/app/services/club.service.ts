import { Injectable } from '@angular/core';
import { Club } from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  clubs: Club[] = [{id: 1, title: "Baseball", img: "assets/images/baseball_stock_img.jpg", time: "16:00", date: "05/02/2021", venue: "Sundays Well",  trainer: "Nevin", 
                isFull: false, length: 1, caloriesBurned: 1500, maxSize: 10}, 
                {id: 2, title: "Tennis", img: "assets/images/tennis_stock_img.jpg", time: "14:00", date: "9/02/2022", venue: "CIT Courts", trainer: "Nevin", 
                isFull: false, length: 1, caloriesBurned: 1500, maxSize: 4},
                {id: 3, title: "Hockey", img: "assets/images/hockey_stock_img.jpg", time: "14:00", date: "11/01/2012", venue: "Neptune", trainer: "Eoin", 
                isFull: true, length: 1, caloriesBurned: 1500, maxSize: 12},
                {id: 4, title: "BasketBall", img: "assets/images/basketball_stock_img.jpg", time: "16:00", date: "01/02/2021", venue: "Neptune", trainer: "Eoin", 
                isFull: false, length: 1, caloriesBurned: 1500, maxSize: 20},
                {id: 5, title: "Swimming", img: "assets/images/swimming_stock_img.jpg", time: "14:00", date: "11/01/2012", venue: "Neptune", trainer: "Tom", 
                isFull: true, length: 1, caloriesBurned: 1500, maxSize: 20},
                {id: 6, title: "Squash", img: "assets/images/squash_stock_img.jpg", time: "14:00", date: "01/02/2012", venue: "LesuireWorld", trainer: "Tom", 
                isFull: true, length: 1, caloriesBurned: 1500, maxSize: 20},
                {id: 7, title: "Soccer", img: "assets/images/soccer_stock_img.jpg", time: "10:00", date: "14/02/2021", venue: "Neptune", trainer: "Niall", 
                isFull: true, length: 1, caloriesBurned: 1500, maxSize: 20},
                {id: 8, title: "Running", img: "assets/images/running_stock_img.jpg", time: "21:00", date: "20/01/2021", venue: "CIT Track", trainer: "Niall", 
                isFull: true, length: 2, caloriesBurned: 1500, maxSize: 20},
                {id: 8, title: "Running", img: "assets/images/taekwondo_stock_img.jpg", time: "21:00", date: "20/01/2021", venue: "CIT Track", trainer: "Niall", 
                isFull: true, length: 2, caloriesBurned: 1500, maxSize: 20}];

  constructor() {}

  retrieveAllClubs() {
    return this.clubs;
  }

  addClub(club) {
    this.clubs.push(club);
  }
}
