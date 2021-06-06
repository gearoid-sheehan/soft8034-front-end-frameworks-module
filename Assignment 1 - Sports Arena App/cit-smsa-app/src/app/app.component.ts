import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'cit-smsa-app';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    var checkUser = JSON.parse(localStorage.getItem('user'));
    
    if (checkUser == null) {
      
      this.authService.user = {name: '', gender: '', age: 0, weight: 0, height: 0, address: '', email: '', phoneNumber: '', 
                              membershipStatus: '', membershipType: '', username: '', password: '', isLoggedIn: false, 
                              loginAttempts: 0, isLockedOut: false, userId: 0};
    }
  }
}
