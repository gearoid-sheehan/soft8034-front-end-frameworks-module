import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = JSON.parse(localStorage.getItem('user'));

  users: User[] = [{name: 'Gearoid Sheehan', gender: 'male', age: 23, weight: 180, height: 183, address: 'Clashduv, Cork, Ireland', email: 'garsheehan@gmail.com', 
                    phoneNumber: '0838251901', membershipStatus: 'staff', membershipType: 'open-ended', username: 'gearoidsheehan', password: 'password', 
                    isLoggedIn: false, loginAttempts: 0, isLockedOut: false, userId: 1},

                    {name: 'Nevin Hall', gender: 'male', age: 21, weight: 190, height: 189, address: 'Midleton, Cork, Ireland', email: 'nevinhall@gmail.com', 
                    phoneNumber: '0853747374', membershipStatus: 'staff', membershipType: 'open-ended', username: 'nevinhall', password: 'password', 
                    isLoggedIn: false, loginAttempts: 0, isLockedOut: false, userId: 2},

                    {name: 'Eoin Daly', gender: 'male', age: 28, weight: 168, height: 171, address: 'Killarney, Kerry, Ireland', email: 'eoindaly@gmail.com', 
                    phoneNumber: '0857463527', membershipStatus: 'student', membershipType: 'one-year', username: 'eoindaly', password: 'password', 
                    isLoggedIn: false, loginAttempts: 0, isLockedOut: false, userId: 2},
                  
                  
                    {name: 'Niall Xie', gender: 'male', age: 21, weight: 170, height: 164, address: 'Ballincollig, Cork, Ireland', email: 'niallxie@gmail.com', 
                    phoneNumber: '0858694738', membershipStatus: 'student', membershipType: 'open-ended', username: 'niallxie', password: 'password', 
                    isLoggedIn: false, loginAttempts: 0, isLockedOut: false, userId: 2},
                  
                    {name: 'Megan Cummins', gender: 'female', age: 22, weight: 160, height: 151, address: 'Blarney, Cork, Ireland', email: 'megancummins@gmail.com', 
                    phoneNumber: '0893847384', membershipStatus: 'student', membershipType: 'one-year', username: 'megancummins', password: 'password', 
                    isLoggedIn: false, loginAttempts: 0, isLockedOut: false, userId: 2}];

  constructor(private router: Router, private alertifyService: AlertifyService) { }

  login(userLogin) {

    for(var i = 0; i < this.users.length; i++) {
      if (this.users[i].email == userLogin.email && this.users[i].password == userLogin.password) {
        this.users[i].isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(this.users[i]));
        this.user = JSON.parse(localStorage.getItem('user'));
        return true;
      }
    }
  }

  checkLoggedIn() {
    return this.user.isLoggedIn;
  }

  resetPassword(userReset) {
    for(var i = 0; i < this.users.length; i++) {
      if (this.users[i].email == userReset.email) {
        
        return true;
      }
    }
  }

  registerUser(user) {
    this.users.push(user);
    console.log(this.users);
  }

  logout() {
    localStorage.clear();
    this.user = {name: '', gender: '', age: 0, weight: 0, height: 0, address: '', email: '', phoneNumber: '', 
                membershipStatus: '', membershipType: '', username: '', password: '', isLoggedIn: false, 
                loginAttempts: 0, isLockedOut: false, userId: 0};
  }

  sendMail(userForgotPassword) {
    // var nodemailer = require('nodemailer');

    // var transport = nodemailer.createTransport({
    //   service: 'Gmail',
    //     auth: {
    //         user: "gearoid.sheehan@mycit.ie",
    //         pass: "JasperSheehan2012!"
    //     }
    // });

    // var mailOptions = {
    //   from: 'gearoid.sheehan@mycit.ie', // sender address
    //   to: userForgotPassword.email, // list of receivers
    //   subject: 'Password Reset', // Subject line

    //   text: 'Your Password has been changed!', 
    // };

    // transport.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Message sent: " + info.response);
    //   }
    // });
  }

  routeGuard() {
    var checkUser = JSON.parse(localStorage.getItem('user'));

    if (checkUser == null) {
      this.router.navigate(['']);
      this.alertifyService.error('Please login or register');
    }
  }
}
