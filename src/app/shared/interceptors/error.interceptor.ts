import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {

  // constructor( ) {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   return next.handle(request).pipe(catchError(err=>{
  //     console.log(err);
  //     //here can handle error
  //     if([401, 403].indexOf(err.status) !== -1){
  //       console.log("error from interseptor");
  //       // this.router.navigate([../login]);
        
  //     }
  //     return throwError(err);
      
  //   }));
  // }
// }

