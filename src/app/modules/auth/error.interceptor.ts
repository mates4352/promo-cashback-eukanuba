import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {AuthService} from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
      if (err.status === 401) {
        if (currentUser && currentUser.refreshToken) {
          this.authService.refreshToken();
        } else {
          this.authService.logOut();
        }
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
