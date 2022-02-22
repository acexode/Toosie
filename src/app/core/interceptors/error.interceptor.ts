import { AuthService } from 'src/app/core/service/auth/auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authS: AuthService,
    private routerS: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.authS.logout();
          location.reload();
        } else {
          return throwError(err);
        }
      })
    );
  }
}
