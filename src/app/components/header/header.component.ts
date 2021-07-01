import { isEmpty } from 'lodash';
/* eslint-disable no-underscore-dangle */
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/core/service/orders/orders.service';
import { ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title;
  @Input() search;
  @Input() cart;
  cartTotal;
  constructor(private _location: Location,
    private modalController: ModalController,
    private router: Router,
    private orderS: OrdersService) { }

  ngOnInit() {
    this.orderS.cartStore.subscribe(e =>{
      console.log(e);
      this.cartTotal = isEmpty(e) ? 0 : e.length;
    });
  }
  back(){
    this._location.back();
  }
  goToCart(){
    this.router.navigate(['menu/home/cart-orders']);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      cssClass: 'fullscreen'
    });
    await modal.present();
  }
}
