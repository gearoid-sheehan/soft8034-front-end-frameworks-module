import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clubcards',
  templateUrl: './clubcards.component.html',
  styleUrls: ['./clubcards.component.scss']
})
export class ClubcardsComponent implements OnInit {

  clubs: any = [{title: 'BasketBall', img: 'assets/images/basketball_stock_img.jpg', time: '14:00', venue: 'Neptune', trainer: 'Gearoid', isFull: true},
              {title: 'Soccer', img: 'assets/images/soccer_stock_img.jpg', time: '16:00', venue: 'CIT Sports Ground', trainer: 'Gearoid', isFull: false}, 
              {title: 'Baseball', img: 'assets/images/baseball_stock_img.jpg', time: '15:00', venue: 'Mardyke', trainer: 'Shane', isFull: true}, 
              {title: 'Hockey', img: 'assets/images/hockey_stock_img.jpg', time: '12:00', venue: 'CIT Gym', trainer: 'Sean', isFull: false}, 
              {title: 'Swimming', img: 'assets/images/swimming_stock_img.jpg', time: '12:00', venue: 'Lesuire Centre', trainer: 'Diarmuid', isFull: true}, 
              {title: 'Squash', img: 'assets/images/squash_stock_img.jpg', time: '10:00', venue: 'CIT Gym', trainer: 'Peter', isFull: true},
              {title: 'BasketBall', img: 'assets/images/basketball_stock_img.jpg', time: '14:00', venue: 'Neptune', trainer: 'Gearoid', isFull: true},
              {title: 'Soccer', img: 'assets/images/soccer_stock_img.jpg', time: '16:00', venue: 'CIT Sports Ground', trainer: 'Gearoid', isFull: false}, 
              {title: 'Baseball', img: 'assets/images/baseball_stock_img.jpg', time: '15:00', venue: 'Mardyke', trainer: 'Shane', isFull: true}, 
              {title: 'Hockey', img: 'assets/images/hockey_stock_img.jpg', time: '12:00', venue: 'CIT Gym', trainer: 'Sean', isFull: false}, 
              {title: 'Swimming', img: 'assets/images/swimming_stock_img.jpg', time: '12:00', venue: 'Lesuire Centre', trainer: 'Diarmuid', isFull: true}, 
              {title: 'Squash', img: 'assets/images/squash_stock_img.jpg', time: '10:00', venue: 'CIT Gym', trainer: 'Peter', isFull: true}];
  
  constructor() { }

  ngOnInit(): void {
  }

}
