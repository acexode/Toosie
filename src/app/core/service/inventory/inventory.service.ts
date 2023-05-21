/* eslint-disable no-underscore-dangle */
import { AuthService } from './../auth/auth.service';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { roleEndpoints, baseEndpoints } from './../../config/endpoints';
import { RequestService } from './../../request/request.service';
import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  cartStore: BehaviorSubject<any> = new BehaviorSubject([]);
  categoryStore: BehaviorSubject<any> = new BehaviorSubject([]);
  popularStore: BehaviorSubject<any> = new BehaviorSubject([]);
  latestStore: BehaviorSubject<any> = new BehaviorSubject([]);
  similarStore: BehaviorSubject<any> = new BehaviorSubject([]);
  loading: BehaviorSubject<any> = new BehaviorSubject(false);
  user: any;

  constructor(private reqS: RequestService, private authS: AuthService ) {
    this.authS.currentUser$.subscribe(user =>{
      if(user){

        this.user = user;

      }
    });
    this.multipleRequest();
   }

  allBrands(){
    return this.reqS.get(baseEndpoints.order).pipe(map((data: any) => data.data));
  }
  multipleRequest(){

    const popular = this.reqS.get(baseEndpoints.inventory + '?isSpecial=' + true );
    const latest = this.reqS.get(baseEndpoints.inventory + '?isTrending=' + true);
    const categories = this.reqS.get(baseEndpoints.category);
    forkJoin([popular, latest, categories]).subscribe((results: any) =>{
      this.popularStore.next(results[0].data);
      this.latestStore.next(results[1].data);
      this.categoryStore.next(results[2].data);
    });
  }
  allCategories(){
    return this.reqS.get(baseEndpoints.category);
  }
  inventoryByCategory(id){
    return this.reqS.get(baseEndpoints.inventory +'?category=' + id);
  }
  singleInventory(id){
    return this.reqS.get(baseEndpoints.inventory + '/' + id);
  }
  myOrders(){
    return this.reqS.get(baseEndpoints.order +'?customerId=' + this.user._id);
  }
  searchInventory(term){

    this.loading.next(true);
    return this.reqS.get(baseEndpoints.searchProduct+'?searchText=' + term );
  }
  search(terms: Observable<string>){
    return terms.pipe(debounceTime(1000),distinctUntilChanged(),
    switchMap(term => this.searchInventory(term)));
  }
  savePODCashOrder(obj){
    return this.reqS.post(baseEndpoints.order, obj);
  }
  saveCardOrder(obj){
    return this.reqS.post(baseEndpoints.order, obj);
  }
  saveTokenOrder(obj){
    return this.reqS.post('', obj);
  }

}
