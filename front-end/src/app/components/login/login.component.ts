import { Component } from '@angular/core';
import { LoginForm } from '../../types/Auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userLogin: LoginForm = {
    email: '',
    password: ''
  };
  invalidEmail: boolean = false;
  incorrectPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.userLogin).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      err => {
        if (err.error == "E-mail not registered") this.invalidEmail = true;
        if (err.error == "Wrong password") this.incorrectPassword = true;
      }
    ) 
  }
}
