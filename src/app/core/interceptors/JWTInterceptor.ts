import { serverBaseUrl } from './../config/endpoints';
import { AuthService } from './../service/auth/auth.service';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { switchMap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const externalUrl = request.url.startsWith(serverBaseUrl);
    return from(this.authService.getToken())
              .pipe(
                switchMap(token => {
                   const headers = request.headers
                            .set('Authorization', 'Bearer ' + token);

                   const requestClone = request.clone({
                     headers
                    });
                  return next.handle(requestClone);
                })
               );

  }
}
