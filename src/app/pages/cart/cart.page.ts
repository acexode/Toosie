import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { BillingComponent } from './../../components/billing/billing.component';
import { AddRefillComponent } from './../../components/add-refill/add-refill/add-refill.component';
import { AddRefillService } from './../../core/service/add-refill/add-refill.service';
import { OrdersService } from 'src/app/core/service/orders/orders.service';
import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';
import {
  ToastController,
  ModalController,
  AlertController,
} from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  lists = [];
  total = 0;
  grandTotal = 0;
  discount = 0;
  constructor(
    private orderS: OrdersService,
    private modalController: ModalController,
    private alertController: AlertController,
    private router: Router,
    private refillS: AddRefillService,
    private toastController: ToastController,
    private authS: AuthService
  ) {}

  ngOnInit() {
    this.orderS.cartStore.subscribe((e) => {
      console.log(e);
      if (e?.length === 0) {
        this.presentToast('No item in cart');
      }
      this.lists = isEmpty(e) ? [] : e;
      this.total = this.lists.reduce(
        (a, b) => a + b.actualPrice * b.quantity,
        0
      );
      this.discount = this.lists.reduce((a, b) => {
        console.log(b.actualPrice * (b.discountPercent / 100) * b.quantity);
        // return a + ((b.actualPrice - b.currentPrice));
        return a + b.actualPrice * (b.discountPercent / 100) * b.quantity;
      }, 0);
      console.log(this.discount);
    });
  }
  removeItem(item) {
    this.orderS.removeItemFromCart(item);
  }
  incrementDecrement(item, type) {
    this.orderS.incrementDecrement(item, type);
  }
  refill(item) {
    this.refillS.refill(item).subscribe((e) => {
      console.log(e);
      this.presentToast('product added to refill');
    });
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
  async checkoutModal() {
    if (this.total - this.discount > 1000) {
      this.authS.currentUser().subscribe(async (val) => {
        const user = JSON.parse(val.value);
        console.log(user && user?.isActivated, user, user?.isActivated);
        if (user?.isActivated) {
          if(this.lists.length > 0){
            const modal = await this.modalController.create({
              component: BillingComponent,
              cssClass: 'fullscreen',
              componentProps: {
                grandTotal: this.total - this.discount,
                total: this.total,
                discount: this.discount,
                items: this.lists,
              },
            });
            await modal.present();

          }
        } else {
          this.presentAlert(
            'You have to signup/login to proceed',
            'Login / Signup',
            'login'
          );
        }
      });
    } else {
      this.presentAlert(
        'Minimum order for delivery is ₦1000',
        'Go to Shop',
        'menu/home/categories'
      );
    }
  }
  async presentAlert(msg, okText, navigate) {
    const alert = await this.alertController.create({
      header: 'Alert !!',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: okText,
          role: 'confirm',
          handler: () => {
            console.log(this.alertController.dismiss());
            this.alertController.dismiss();
            this.router.navigate([navigate]);
          },
        },
      ],
    });

    await alert.present();
  }
}
