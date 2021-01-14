import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserLogin } from 'src/app/models/user-login';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = {email: '', password: ''};
  userForgotPassword: UserLogin = {email: '', password: ''};

  userRegister: User = {name: '', gender: '', age: 0, weight: 0, height: 0, address: '', email: '', phoneNumber: '', 
                        membershipStatus: '', membershipType: '', username: '', password: '', isLoggedIn: false, 
                        loginAttempts: 0, isLockedOut: false, userId: 0};

  constructor(private authService: AuthService, private router: Router, private alertifyService: AlertifyService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  login() {
    var isLoggedIn = this.authService.login(this.userLogin);

    if (isLoggedIn == true) {
      
      if (this.authService.user.isLockedOut == true) {
        this.alertifyService.error('Password has been entered incorrectly too many times');

      } else {        
        this.alertifyService.success('Login Successful');
        this.router.navigate(['/home']);
      }

    } else {
      this.authService.user.loginAttempts + 1;

      this.alertifyService.error('Login failed. Please try again.');
    }

    if (this.authService.user.loginAttempts == 3) {
      this.authService.user.isLockedOut = true;
      this.alertifyService.error('Password has been entered incorrectly too many times');
    }
  }

  registerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  register() {
    this.authService.registerUser(this.userRegister);
    this.userRegister.userId = this.authService.users.length + 1;
    this.alertifyService.success('Registration Successful');
  }

  forgotPasswordModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  forgotPassword() {
    var result = this.authService.resetPassword(this.userForgotPassword);

    if (result == true) {

      this.authService.sendMail(this.userForgotPassword);
      this.alertifyService.success('Password Reset Link Sent');

    } else {
      this.alertifyService.error('No account exists with that Email');
    }
  }
}
