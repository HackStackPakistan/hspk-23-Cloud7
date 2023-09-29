import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { resetAuthStore } from '../stores/auth.repository';
import { resetUserStore } from '../stores/user.repository';
import { NotificationService } from './notification.service';

@Injectable()
export class ErrorInterceptorService {

  constructor(private router: Router, private notification: NotificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (window.location.origin.match('http://localhost')) {
      if ((request.method == "POST" || request.method == "PUT" || request.method == "GET") && !(request.url.match('assets'))) {
        console.group("REQ: ", request.url);
        console.info(JSON.stringify(request.body, null, 2));
        console.groupEnd();
      }
    }


    return next.handle(request)
      .pipe(
        tap(evt => {
          if (evt instanceof HttpResponse) {
            if (window.location.origin.match('http://localhost') && !(request.url.match('assets'))) {
              console.group("RES: ", evt.url);
              console.info(evt.body);
              console.groupEnd();
            }
          }
        }),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.status === 401) {
            resetAuthStore();
            resetUserStore();
            this.router.navigateByUrl('/sign-in');
          }
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          }
          else {
            if (error.error)
              this.notification.error('Error Occurred', error.error.data);
          }
          return throwError(() => error);
        })
      )
  }
}
