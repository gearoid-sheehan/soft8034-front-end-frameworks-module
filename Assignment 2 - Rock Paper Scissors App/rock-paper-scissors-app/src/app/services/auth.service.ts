import { Injectable } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { UserRegister } from '../models/user-register';
import { AlertifyService } from './alertify.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  result: any;
  private jsonUrl = 'src/assets/json/users';

  constructor(private http: HttpClient, alertifyService: AlertifyService) { }

  register(user: UserRegister) {
    return this.http.post(this.jsonUrl, user);
  }

  login(user: UserLogin) {
    return this.http.post(this.jsonUrl, user)
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  /* Checks for token in local storage, returns true 
    if token exists, false if it does not*/

  loggedIn() {
    const token = localStorage.getItem('token');
    return !! token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log("Logged out");
  }
}
