import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string = 'http://localhost:4201/api';

  constructor(private http: HttpClient) { 

  }

  login(user: LoginForm) {
    return this.http.post<any>(this.URL + "/login", user);
  }
}
