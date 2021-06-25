import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { OrdersService } from 'src/app/core/service/orders/orders.service';

@Component({
  selector: 'app-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.scss'],
})
export class SlideItemComponent implements OnInit {

  @Input() preview;
  @Input() button;
  @Input() items;
  @Input() pager;
  slideOpts = {};

  constructor(private orderS: OrdersService, private toastController: ToastController) { }

  ngOnInit() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: this.preview,
    // coverflowEffect: {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows: true,
    // },
    };
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
