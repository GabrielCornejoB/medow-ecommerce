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

  login(user: LoginForm) {
    return this.http.post<any>(this.URL + "/login", user);
  }
  register(user: RegisterForm) {
    return this.http.post<any>(this.URL + '/register', user);
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
