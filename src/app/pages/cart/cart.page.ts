import { AddRefillComponent } from './../../components/add-refill/add-refill/add-refill.component';
import { AddRefillService } from './../../core/service/add-refill/add-refill.service';
import { OrdersService } from 'src/app/core/service/orders/orders.service';
import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';
import { ToastController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  lists = [];
  total = 0;
  grandTotal = 0;
  discount= 0;
  constructor(private orderS: OrdersService, private modalController: ModalController,
    private refillS: AddRefillService, private toastController: ToastController) { }

  ngOnInit() {
    this.orderS.cartStore.subscribe(e =>{
      console.log(e);
      this.lists = isEmpty(e) ? [] : e;
      this.lists.forEach(i =>{
        this.total += i.actualPrice;
        this.discount += (i.discountPercent/100) * i.actualPrice;
      });
    });
  }
  removeItem(item){
    this.orderS.removeItemFromCart(item);
  }
  incrementDecrement(item, type){
    this.orderS.incrementDecrement(item, type);
  }
  refill(item){
    this.refillS.refill(item).subscribe(e =>{
      console.log(e);
      this.presentToast('product added to refill');
    });
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toastCss',
      position: 'top'
    });
    toast.present();
  }
  async presentModal(list) {
    const modal = await this.modalController.create({
      component: AddRefillComponent,
      cssClass: 'fullscreen',
      componentProps: {
        itemName: list.itemName,
        item: list
      }
    });
    await modal.present();
  }

}
