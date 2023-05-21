/* eslint-disable no-underscore-dangle */
import {
  authEndpoints,
  baseEndpoints,
  miscEndpoint,
} from './../../config/endpoints';
import { RequestService } from './../../request/request.service';
import { Injectable } from '@angular/core';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Preferences as Storage } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { OrdersService } from '../orders/orders.service';
import { MenuController } from '@ionic/angular';

const TOKEN_KEY = 'my-token';
const CURRENT_USER = 'current-user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );
  currentUser$: BehaviorSubject<any> = new BehaviorSubject<boolean>(null);
  refetchUser$: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
  token = '';

  constructor(private reqS: RequestService, private menu: MenuController) {
    this.loadToken();
    this.currentUser().subscribe((e) => {
      this.currentUser$.next(JSON.parse(e.value));
    });
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }
  async getToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    return token && token.value ? token.value : null;
  }

  login(credentials: { email; password }): Observable<any> {
    return this.reqS.post(authEndpoints.login, credentials).pipe(
      switchMap((res: any) => {
        console.log(res.token);
        if (this.menu.isOpen) {
          this.menu.close();
        }
        this.currentUser$.next(res.data);

        from(
          Storage.set({ key: CURRENT_USER, value: JSON.stringify(res.data) })
        );
        return from(Storage.set({ key: TOKEN_KEY, value: res.token.token }));
      }),
      tap((_) => {
        this.isAuthenticated.next(true);
      })
    );
  }
  signup(credentials: { name; email; password }): Observable<any> {
    return this.reqS.post(authEndpoints.signup, credentials).pipe(
      switchMap((res: any) =>
        // this.currentUser$.next(res.data);
        from(
          Storage.set({ key: CURRENT_USER, value: JSON.stringify(res.data) })
        )
      )
    );
  }
  getUser(id): Observable<any> {
    console.log('USER ID');
    return this.reqS.get(baseEndpoints.user + '/' + id);
    // .pipe(
    //   switchMap((res: any) => {
    //     // this.currentUser$.next(res.data);
    //     console.log(res, 'USER INFO');
    //     return from(Storage.set({ key: 'RANDOM', value: JSON.stringify(res.data) }));
    //   })
    // );
  }
  resendOTP(obj): Observable<any> {
    return this.reqS.post(authEndpoints.resendOTP, obj);
  }
  activateAccount(credentials: { email; otp }, id): Observable<any> {
    return this.reqS.post(authEndpoints.activate + '/' + id, credentials).pipe(
      switchMap((res: any) => {
        console.log(res.data.user, res.data.token, res);
        this.currentUser$.next(res.data.user);
        from(
          Storage.set({
            key: CURRENT_USER,
            value: JSON.stringify(res.data.user),
          })
        );
        return from(
          Storage.set({ key: TOKEN_KEY, value: res.data.token.token })
        );
      }),
      tap((_) => {
        this.isAuthenticated.next(true);
      })
    );
  }
  forgotPasswordInitiate(credentials: { email }): Observable<any> {
    return this.reqS.post(authEndpoints.forgotPasswordInitiate, credentials);
  }
  forgotPasswordComplete(credentials: {
    email;
    verificationCode;
    password;
  }): Observable<any> {
    return this.reqS.post(authEndpoints.forgotPasswordComplete, credentials);
  }
  changePassword(credentials: { oldPassword; newPassword }): Observable<any> {
    return this.reqS.post(authEndpoints.changePassword, credentials);
  }
  updateUser(id, credentials): Observable<any> {
    return this.reqS.put(baseEndpoints.user + '/' + id, credentials).pipe(
      switchMap((res: any) => {
        console.log(res);
        this.currentUser$.next(res.data);
        return from(
          Storage.set({ key: CURRENT_USER, value: JSON.stringify(res.data) })
        );
      })
    );
  }
  newAddress(data): Observable<any> {
    return this.reqS.post(authEndpoints.addAddress, data).pipe(
      switchMap((res: any) => {
        console.log(res);
        this.currentUser$.next(res.data);
        return from(
          Storage.set({ key: CURRENT_USER, value: JSON.stringify(res.data) })
        );
      })
    );
  }
  deleteAddress(id): Observable<any> {
    return this.reqS.delete(authEndpoints.deleteAddress + '/' + id);
  }
  allAddress(): Observable<any> {
    return this.reqS.get(authEndpoints.allAddress);
  }
  uploadProfileImage(formData): Observable<any> {
    return this.reqS.post(miscEndpoint.mediaUpload, formData);
  }
  currentUser(): Observable<any> {
    return from(Storage.get({ key: CURRENT_USER }));
  }

  logout(): Promise<void> {
    Storage.remove({ key: CURRENT_USER });
    Storage.remove({ key: 'my_cart' });
    // this.orderS.cartStore.next([]);
    this.isAuthenticated.next(false);
    return Storage.remove({ key: TOKEN_KEY });
  }
}
