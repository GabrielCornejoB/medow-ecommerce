import { Component } from '@angular/core';
import { LoginForm } from '../../types/Auth';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.userLogin).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
      },
      err => {
        console.log(err);
      }
    ) 
  }
}
