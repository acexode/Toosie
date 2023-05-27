/* eslint-disable no-unused-labels */
import { SingleComponent } from './../single/single.component';
import { Component, Input, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { OrdersService } from 'src/app/core/service/orders/orders.service';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.scss'],
})
export class SlideItemComponent implements OnInit {

  @Input() preview;
  @Input() button;
  @Input() pager;
  @Input() items = [];

  fakeitems = [1,2,3,4,5,6];
  config: SwiperOptions = {
    slidesPerView: 1.9,
    spaceBetween: 4,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor(private orderS: OrdersService,
    private modalController: ModalController,
    private toastController: ToastController) { }

  ngOnInit() {

  }
  onSwiper(swiper) {

  }
  onSlideChange() {
    console.log('slide change');
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
      duration: 800,
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
