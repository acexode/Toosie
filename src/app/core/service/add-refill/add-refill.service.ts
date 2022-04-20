/* eslint-disable no-underscore-dangle */
import { AuthService } from './../auth/auth.service';
import { baseEndpoints } from './../../config/endpoints';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { refillEndpoints } from '../../config/endpoints';
import { RequestService } from '../../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class AddRefillService {

  refillStore: BehaviorSubject<any> = new BehaviorSubject([]);
  reminderStore: BehaviorSubject<any> = new BehaviorSubject([]);
  user: any;
  constructor(private reqS: RequestService, private authS: AuthService) {
    this.authS.currentUser$.subscribe(user =>{
      this.user = user;
    });
    // this.refillListing();
  }

  refillListing(){
    return this.reqS.get(baseEndpoints.refill + '?customerId=' + this.user._id);
  }
  refill(data){
    const obj = {
      ...data,
      customerId: this.user._id
    };
    return this.reqS.post(baseEndpoints.refill, obj);
  }
  remove(id){
    return this.reqS.delete(baseEndpoints.refill + '/' + id);
  }
}
