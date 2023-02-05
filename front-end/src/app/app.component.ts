import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medow';
  constructor(private authService: AuthService) {}
  isAuthenticated() {
    return this.authService.isLogged();
  }
  logout() {
    this.authService.logout();
  }
}
