import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  
  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.authService.routeGuard();
    this.user = this.authService.user;
  }

  updateProfile() {
    localStorage.setItem('user', JSON.stringify(this.user));
    this.alertifyService.success("Account Details Updated")
  }
}
