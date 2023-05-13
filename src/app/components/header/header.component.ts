import { isEmpty } from 'lodash';
/* eslint-disable no-underscore-dangle */
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/core/service/orders/orders.service';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title;
  @Input() search;
  @Input() cart;
  @Input() dismiss = false;
  cartTotal;
  user = null;
  constructor(
    private _location: Location,
    private modalController: ModalController,
    private router: Router,
    private orderS: OrdersService,
    private authS: AuthService
  ) {}

  ngOnInit() {
    this.authS.currentUser$.subscribe((e) => (this.user = e));
    this.orderS.cartStore.subscribe((e) => {
      this.cartTotal = isEmpty(e) ? 0 : e.length;
    });
  }
  back() {
    if (this.dismiss) {
      this.modalController.dismiss();
    } else {
      this._location.back();
    }
  }
  goToCart() {
    this.router.navigate(['menu/home/cart-orders']);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      cssClass: 'fullscreen',
    });
    await modal.present();
  }
}
