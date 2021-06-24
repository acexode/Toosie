import { authEndpoints } from './../../config/endpoints';
import { RequestService } from './../../request/request.service';
import { Injectable } from '@angular/core';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';


const TOKEN_KEY = 'my-token';
const CURRENT_USER = 'current-user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  constructor(private reqS: RequestService) {
    this.loadToken();
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }
  async getToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    return (token && token.value) ? token.value : null;
  }

  login(credentials: {email; password}): Observable<any> {
    return this.reqS.post(authEndpoints.login, credentials).pipe(

      switchMap((data: any) => {
        console.log(data.token);
        from(Storage.set({key: CURRENT_USER, value: JSON.stringify(data.user)}));
        return from(Storage.set({key: TOKEN_KEY, value: data.token}));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }
  signup(credentials: {name; email; password}): Observable<any> {
    return this.reqS.post(authEndpoints.signup, credentials).pipe(
      switchMap((data: any) => {
        from(Storage.set({key: CURRENT_USER, value: JSON.stringify(data.user)}));
        return from(Storage.set({key: TOKEN_KEY, value: data.token}));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }
  updateUser(credentials: {fullname; phone; address}): Observable<any> {
    return this.reqS.patch(authEndpoints.updateProfile, credentials).pipe(
      switchMap((data: any) => {
        console.log(data);
        return from(Storage.set({key: CURRENT_USER, value: JSON.stringify(data.userInfo)}));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    );
  }
  currentUser(): Observable<any> {
    return from(Storage.get({key: CURRENT_USER}));

  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({key: TOKEN_KEY});
  }
}

