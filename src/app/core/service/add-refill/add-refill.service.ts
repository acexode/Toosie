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
  constructor(private reqS: RequestService) {
    // this.refillListing();
  }

  refillListing(){
    return this.reqS.get(refillEndpoints.allRefill + 1);
  }
  refill(data){
    return this.reqS.post(refillEndpoints.addRefill, data);
  }
  remove(data){
    return this.reqS.patch(refillEndpoints.removeRefill, data);
  }
}
