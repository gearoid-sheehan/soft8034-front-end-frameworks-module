import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {email: '', password: ''};

  constructor(private authService: AuthService, private router: Router, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.user).subscribe(next => {
      this.alertifyService.success('Login Successful');
      this.router.navigate(['/home']);
    }, error => {
      this.alertifyService.error('Login failed. Please try again.');
    });
  }
}
