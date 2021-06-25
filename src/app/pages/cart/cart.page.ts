import { OrdersService } from 'src/app/core/service/orders/orders.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  lists = [];

  constructor( private modalController: ModalController, private orderS: OrdersService) { }

  ngOnInit() {
    this.orderS.cartStore.subscribe(e =>{
      console.log(e);
      this.lists = e;
    });
  }
  removeItem(item){
    this.orderS.removeItemFromCart(item);
  }
  incrementDecrement(item, type){
    this.orderS.incrementDecrement(item, type);
  }

}
