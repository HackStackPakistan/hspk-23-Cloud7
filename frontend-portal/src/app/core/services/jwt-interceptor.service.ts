// import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { tokenQ } from '../stores/auth.repository';

// @Injectable()
// export class JwtInterceptorService {

//   constructor() { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const authToken: string | null = tokenQ();
//     const hasAuthHeader = request.headers.get('Authorization');
//     if (!hasAuthHeader) {
//       const authRequest: HttpRequest<any> = request.clone({ setHeaders: { Authorization: `${authToken}` } })
//       return next.handle(authRequest);
//     }
//     return next.handle(request);

//   }
// }
