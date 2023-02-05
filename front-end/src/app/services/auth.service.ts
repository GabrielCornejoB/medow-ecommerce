import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://localhost:4201/api';

  constructor(private http: HttpClient, private router: Router) { 

  }

  login(loginForm: LoginForm) {
    return this.http.post<any>(this.URL + "/login", {email: loginForm.email, password: loginForm.password});
  }
  register(registerForm: RegisterForm) {
    return this.http.post<any>(this.URL + '/register', {email: registerForm.email, password: registerForm.password});
  }
  isLogged(): Boolean {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
