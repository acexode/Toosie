/* eslint-disable no-underscore-dangle */
import { OrdersService } from './../../core/service/orders/orders.service';

import { AddRefillComponent } from './../../components/add-refill/add-refill/add-refill.component';
import { InventoryService } from './../../core/service/inventory/inventory.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRefillService } from 'src/app/core/service/add-refill/add-refill.service';

@Component({
  selector: 'app-manage-refill',
  templateUrl: './manage-refill.page.html',
  styleUrls: ['./manage-refill.page.scss'],
})
export class ManageRefillPage implements OnInit {
  orderList = null;
  refillList = [];
  constructor(
    private invS: InventoryService,
    private refillS: AddRefillService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadRefill();
    this.invS.myOrders().subscribe((e: any) => {
      console.log(e);
      this.orderList =  e.data.map((det: any) => {
        const {products, orderDetails} = det;
        for (const [i, item] of products.entries()) {
          return {
            quantity: orderDetails[i].quantity,
            ...item,
            orderId: det._id
          };
        }
      });
      console.log(this.orderList);
    });
  }
  loadRefill() {
    this.refillS.refillListing().subscribe((obj: any) =>{
      console.log(obj.data);
      this.refillList = obj.data;
    });
  }
  removeRefill(id) {

    const obj = {
      refillId: id,
    };
    this.refillS.remove(id).subscribe(e =>{
      this.loadRefill();
    });
  }
  async presentModal(list) {
    const modal = await this.modalController.create({
      component: AddRefillComponent,
      cssClass: 'fullscreen',
      componentProps: {
        itemName: list.itemName,
        item: list,
      },
    });
    await modal.present();
  }
}
