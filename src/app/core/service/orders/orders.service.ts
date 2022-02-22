/* eslint-disable no-underscore-dangle */
import { BehaviorSubject, from, Observable } from 'rxjs';
import { wishListEndpoints } from './../../config/endpoints';
import { RequestService } from './../../request/request.service';
import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

const MY_CART = 'my_cart';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  cartStore: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(private reqS: RequestService) {
    Storage.get({ key: MY_CART }).then(cart =>{
      this.cartStore.next(JSON.parse(cart.value));
    });
  }
  async removeCart() {
    await Storage.remove({ key: MY_CART });
    this.cartStore.next([]);
  };
  async addItemToCart(item) {
    item.quantity = 1;
    const cart = await Storage.get({ key: MY_CART });
    if (cart && cart.value) {
      const parseCart = JSON.parse(cart.value);
      // eslint-disable-next-line no-underscore-dangle
      const idx = parseCart.findIndex(e => e._id === item._id);
      if(idx < 0){
        parseCart.push(item);
        this.cartStore.next(parseCart);
        Storage.set({key: MY_CART, value: JSON.stringify(parseCart)});
        return true;

      }else{
        return false;
      }
    } else {
      Storage.set({key: MY_CART, value: JSON.stringify([item])});
      this.cartStore.next([item]);
      return true;
    }
  }
  async removeItemFromCart(item){
    const cart = await Storage.get({ key: MY_CART });
    if (cart && cart.value) {
      const parseCart = JSON.parse(cart.value);
      // eslint-disable-next-line no-underscore-dangle
      const filt = parseCart.filter(e => e._id !== item._id);
      this.cartStore.next(filt);
      Storage.set({key: MY_CART, value: JSON.stringify(filt)});
    }
  }
  async incrementDecrement(item, type){
    const cart = await Storage.get({ key: MY_CART });
    if(cart && cart.value){
      if(type === 'increment'){
        item.quantity = item.quantity + 1;
        const parseCart = JSON.parse(cart.value);
        const index = parseCart.findIndex((e) => e._id === item._id);
        parseCart[index] = item;
        this.cartStore.next(parseCart);
        Storage.set({key: MY_CART, value: JSON.stringify([...parseCart])});
      }else{
        item.quantity = item.quantity - 1;
        if(item.quantity < 1){
          this.removeItemFromCart(item);
        }else{
          const parseCart = JSON.parse(cart.value);
          const index = parseCart.findIndex((e) => e._id === item._id);
          parseCart[index] = item;
          this.cartStore.next(parseCart);
          Storage.set({key: MY_CART, value: JSON.stringify([...parseCart])});
        }
      }
    }
  }
}
