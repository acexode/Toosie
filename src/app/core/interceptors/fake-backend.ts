import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import { serverBaseUrl } from '../configs/endpoints';
import { ConfigService } from '../services/config/config.service';

// TODO: decouple this after we start service implementation.
// taken from https://jasonwatmore.com/post/2018/11/22/angular-7-role-based-authorization-tutorial-with-example#fake-backend-ts

@Injectable({ providedIn: 'root' })
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor(private configS: ConfigService) {}
  fakeBackendEnabled = this.configS.getFakeBackendConfig();
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Disable based on config setup.
    if (!this.fakeBackendEnabled) {
      return next.handle(request);
    }
    // wrap in delayed observable to simulate server api call
    return (
      of(null)
        .pipe(
          mergeMap(() => {
            if (request.url.match(/\/login/)) {
              return handleJsonDataReq(request, 'login');
            }
            if (request.url.match(/\/payment/)) {
              return handleJsonDataReq(request, 'payment');
            }
            if (request.url.match(/\/user/)) {
              return handleJsonDataReq(request, 'user');
            }
            if (request.url.match(/\/api-call/)) {
              return handleJsonDataReq(request, 'api-call');
            }
            if (request.url.match(/\/policy/)) {
              return handleJsonDataReq(request, 'policy');
            }
            if (request.url.match(/\/locuinte/)) {
              return handleJsonDataReq(request, 'locuinte');
            }
            // // authenticate - public
            // if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
            //    return ok(null);
            // }
            //
            // // get user by id - admin or user (user can only access their own record)
            // if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
            //    return ok(null);
            // }
            //
            // // get all users (admin only)
            // if (request.url.endsWith('/users') && request.method === 'GET') {
            //    return ok(null);
            // }

            // pass through any requests not handled above
            return next.handle(request);
          })
        )
        // call materialize and dematerialize to ensure delay even if an error is thrown
        // (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(125))
        .pipe(dematerialize())
    );

    // private helper functions

    function ok(body) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function unauthorised() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function error(message) {
      return throwError({ status: 400, error: { message } });
    }

    function handleJsonDataReq(req, folder: string) {
      console.log('Using PathName: ' + req.url);
      console.log('Using folderName: ' + folder);
      const splitReq = req.url
        .replace(serverBaseUrl, '')
        .split(/[\/\?\=]/)
        .filter((v) => v);
      try {
        if (splitReq.length) {
          const pathName =
            'assets/mocks/' +
            folder +
            '/' +
            splitReq.join('--') +
            '--' +
            req.method +
            '.json';
          console.log('Converted File Path: ' + pathName);
          const newReq = req.clone({
            url: pathName,
            method: 'GET',
          });
          console.log('Redirecting the request: ');
          console.log(newReq);
          return next.handle(newReq);
        }
      } catch (err) {
        console.log('Failed redirecting the request: ' + err.message);
        return next.handle(req);
      }
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
