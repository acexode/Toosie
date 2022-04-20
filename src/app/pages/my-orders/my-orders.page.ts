import { InventoryService } from './../../core/service/inventory/inventory.service';
import { ReceiptComponent } from './../../components/receipt/receipt.component';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { isEmpty } from 'lodash';
import { AddRefillComponent } from 'src/app/components/add-refill/add-refill/add-refill.component';
import { BillingComponent } from 'src/app/components/billing/billing.component';
import { AddRefillService } from 'src/app/core/service/add-refill/add-refill.service';
import { OrdersService } from 'src/app/core/service/orders/orders.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  lists = [];
  total = 0;
  grandTotal = 0;
  discount= 0;
  orderHistory = [];
  constructor(private orderS: OrdersService, private modalController: ModalController,
    private refillS: AddRefillService, private toastController: ToastController, private loadCtrl: LoadingController) { }

  async ngOnInit() {
    const loading = await this.loadCtrl.create();
    await loading.present();
    this.orderS.myOrders().subscribe((e:  any) =>{
      console.log(e);
      loading.dismiss();
      this.orderHistory = e.data;
    });
    // this.orderS.cartStore.subscribe(e =>{
    //   console.log(e);
    //   this.lists = isEmpty(e) ? [] : e;
    //   this.total = this.lists.reduce((a, b) => a + (b.actualPrice * b.quantity),0);
    //   this.discount = this.lists.reduce((a, b) => {
    //     console.log(a + ((b.actualPrice - b.currentPrice)));
    //     // return a + ((b.actualPrice - b.currentPrice));
    //     return a + ( b.currentPrice * b.quantity);
    //   },0);
    //   console.log(this.discount);
    // });
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
      component: ReceiptComponent,
      cssClass: 'fullscreen',
      componentProps: {
        itemName: list.itemName,
        item: list
      }
    });
    await modal.present();
  }
  async checkoutModal() {
    const modal = await this.modalController.create({
      component: BillingComponent,
      cssClass: 'fullscreen',
      componentProps: {
        grandTotal: this.total - this.discount,
        items: this.lists
      }
    });
    await modal.present();
  }
  totalAmount(arr){
    let total = 0;
    arr.forEach(element => {
      total += element.cost * element.quantity;
    });
    return total;
  }
}
