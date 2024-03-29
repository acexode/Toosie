/* eslint-disable no-underscore-dangle */
import { Router } from '@angular/router';
import { InventoryService } from './../../core/service/inventory/inventory.service';
/* eslint-disable @angular-eslint/no-input-rename */
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { OrdersService } from 'src/app/core/service/orders/orders.service';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  @Input() item;
  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper: ElementRef;
  @Input('expanded') expanded = false;
  @Input('expandHeight') expandHeight = '150px';
  sameCategory = [];
  buttonTitle = 'Add to cart';
  showButton = false;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  infoPanel = [];
  constructor(
    private orderS: OrdersService,
    public renderer: Renderer2,
    public router: Router,
    public inventoryS: InventoryService,
    private toastController: ToastController,
    private modal: ModalController
  ) {}

  ionViewWillEnter() {
    // this.orderS.addItemToCart(this.item).then((e) => {
    //   if (!e) {
    //     this.buttonTitle = 'Checkout';
    //   }
    // });
  }
  ngOnInit() {
    console.log(this.item);
    this.inventoryS
      .inventoryByCategory(this.item.category)
      .subscribe((e: any) => {
        console.log(e);
        this.sameCategory = e.data;
        this.inventoryS.similarStore.next(e.data);
        console.log(e.data);
      });
    const acc = document.getElementsByClassName('accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
    console.log(this.item);
  }

  addToCart(item) {
    if (this.buttonTitle === 'Checkout') {
      this.modal.dismiss();
      this.router.navigate(['menu/home/cart-orders']);
    } else {
      this.orderS.addItemToCart(item).then((e) => {
        if (e) {
          this.presentToast('item added to cart');
        } else {
          this.presentToast('item already in cart');
        }
      });
    }
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 800,
      cssClass: 'toastCss',
      position: 'top',
    });
    toast.present();
  }
}
