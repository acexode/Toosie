import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { OrdersService } from 'src/app/core/service/orders/orders.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  @Input() item;
  opts = {
    freeMode: true,
    slidesPerView: 1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0
  };
  constructor(private orderS: OrdersService, private toastController: ToastController) { }

  ngOnInit() {
    console.log(this.item);
  }
  addToCart(item){
    this.orderS.addItemToCart(item).then(e =>{
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
}
