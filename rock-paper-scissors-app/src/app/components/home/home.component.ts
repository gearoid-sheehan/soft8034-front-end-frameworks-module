import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userScore: number = 0;
  pcScore: number = 0;
  count: number = 0;
  round: number = 1;
  playPressed: boolean;
  isActive: boolean;
  choiceMade: boolean;
  timeLeft: number = 3;
  interval;
  imageShownHand: any = "";
  imageShownFont: any = "";
  userChoice: number;
  randomCount: number;
  pcChoiceCount: number;
  handSelected: any;
  handChoices: any = [{name: "Rock", index: 0}, {name: "Paper", index: 1}, {name: "Scissors", index: 2}];
  imagesHands: any = ["/assets/images/rock_hand.png", "/assets/images/paper_hand.png", "/assets/images/scissors_hand.png"]
  imagesFonts: any = ["/assets/images/rock_font.png", "/assets/images/paper_font.png", "/assets/images/scissors_font.png"]

  constructor(private router: Router, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  play() {
    if (this.handSelected == null) {
      this.alertify.error('Please choose a hand');
    } else {
      this.count++;
      if (this.count > 1) {
        this.round++;
      }
      this.imageShownHand = this.imagesHands[0];
      this.imageShownFont = this.imagesFonts[0];
      this.playPressed = true;
      this.startTimer();
    }
  }

  reset() {
    this.userScore = 0;
    this.pcScore = 0;
    this.round = 1;
    this.handSelected = null;
    this.playPressed = false;
    this.isActive = false;
    this.choiceMade = false;
  }

  setChoices() {
    this.randomCount = (Math.floor((Math.random() * 3) + 1) - 1);
    this.userChoice = this.handSelected.index;
  }

  outcomeCalc(x, y) {
    if (x == y) {
      this.userScore++;
      this.pcScore++;
    } else if (x == 0 && y == 1) {
      this.pcScore++;
    } else if (x == 1 && y == 2) {
      this.pcScore++;
    } else if (x == 2 && y == 0) {
      this.pcScore++;
    } else if (x == 2 && y == 1) {
      this.userScore++;
    } else if (x == 1 && y == 0) {
      this.userScore++;
    } else if (x == 0 && y== 2) {
      this.userScore++;
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        if (this.timeLeft == 2) {
          this.imageShownHand = this.imagesHands[0];
          this.imageShownFont = this.imagesFonts[0];
        } else if (this.timeLeft == 1) {
          this.imageShownHand = this.imagesHands[1];
          this.imageShownFont = this.imagesFonts[1];
        } else if (this.timeLeft == 0) {
          this.imageShownHand = this.imagesHands[2];
          this.imageShownFont = this.imagesFonts[2];
          this.choiceMade = true;
          this.isActive = true;
          clearTimeout(this.interval);
          this.setChoices();
          this.outcomeCalc(this.userChoice, this.randomCount);
        }
      } else {
        this.timeLeft = 3;
      }
    }, 1000)
  }

  logout() {
    this.router.navigate(['']);
    this.alertify.success('Logged Out');
  }
}
