import { ToastController, ModalController } from '@ionic/angular';
import { OrdersService } from 'src/app/core/service/orders/orders.service';
import { Component, Input, OnInit } from '@angular/core';
import { SingleComponent } from '../single/single.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Input() items;
  constructor(private orderS: OrdersService,
    private modalController: ModalController,
    private toastController: ToastController
    ) { }

  ngOnInit() {}
  addToCart(id){
    this.orderS.addItemToCart(id).then(e =>{
      if(e){
        this.presentToast('item added to cart');
      }else{
        this.presentToast('item already in cart');
      }

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
  async productModal(item) {
    const modal = await this.modalController.create({
      component: SingleComponent,
      cssClass: 'fullscreen',
      componentProps: {
        item
      }
    });
    await modal.present();
  }
}
