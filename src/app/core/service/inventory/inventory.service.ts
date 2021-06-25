import { BehaviorSubject, Observable } from 'rxjs';
import { roleEndpoints, inventoryEndpoints } from './../../config/endpoints';
import { RequestService } from './../../request/request.service';
import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  cartStore: BehaviorSubject<any> = new BehaviorSubject([]);
  loading: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor(private reqS: RequestService) { }

  allCategories(){
    return this.reqS.get(inventoryEndpoints.allCategories);
  }
  allBrands(){
    return this.reqS.get(inventoryEndpoints.brands).pipe(map((data: any) => data.inventoryBrands));
  }
  inventoryByCategory(id){
    return this.reqS.get(inventoryEndpoints.inventoryByCategory + id + '/1');
  }
  searchInventory(term){
    this.loading.next(true);
    return this.reqS.post(inventoryEndpoints.searchInventory, {searchText: term });
  }
  search(terms: Observable<string>){
    return terms.pipe(debounceTime(400),distinctUntilChanged(),
    switchMap(term => this.searchInventory(term)));
  }

}
