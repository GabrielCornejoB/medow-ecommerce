import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private authService: AuthService) { }

  intercept(req: any, next: any) {
    let concat: string = "Bearer " + this.authService.getToken();
    const tokenizeRequest = req.clone({
      setHeaders: {
        Authorization: concat
      }
    });
    return next.handle(tokenizeRequest);
  }
}
