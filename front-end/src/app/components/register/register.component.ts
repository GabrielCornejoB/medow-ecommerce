import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userRegister: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  existingEmail: boolean = false;
  passwordMatched: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.userRegister.password == this.userRegister.confirmPassword) {
      this.authService.register(this.userRegister).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/about']);
        },
        err => {
          if(err.error == "E-mail already registered") this.existingEmail = true;
        }
      )
    }
    else this.passwordMatched = false;
  }
}
