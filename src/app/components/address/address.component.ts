import { Output, EventEmitter } from '@angular/core';
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';

import { ProfileComponentsComponent } from '../profile-components/profile-components.component';
import { IUserAddress } from 'src/app/core/model/inteface';
import { deliveryLocation } from 'src/app/core/service/global-service/deliveryLocation';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  allAddress = [];
  allLocations = deliveryLocation;
  address = null;
  user = null;
  deliveryType = 'pickup';
  @Output() next = new EventEmitter();
  deliveryCost = 0;
  priorityDelivery = false;
  deliveryState = '';
  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getAllAddress();
  }

  async getAllAddress() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.currentUser$.subscribe((res) => {
      loading.dismiss();
      this.user = res;
      if (res.addresses) {
        this.allAddress.push(...res.addresses);
        // this.address = res.addresses;
      } else {
        this.presentAlertPrompt();
      }
    });
  }

  async presentAlertPrompt() {
    this.deliveryType = 'delivery';
    const modal = await this.modalController.create({
      component: ProfileComponentsComponent,
      cssClass: 'fullscreen',
      componentProps: {
        show: 'checkout-address',
      },
    });
    modal.onDidDismiss().then((v) => {
      this.deliveryType = 'delivery';
      this.getAllAddress();
    });
    await modal.present();
  }

  setAddress(value: IUserAddress) {
    this.address = value;
    const loc = this.allLocations.filter(
      (obj) => obj.label === value.localGov
    )[0];
    this.deliveryCost = loc.value;
    this.deliveryState = loc.state;
  }
  proceed() {
    if (this.priorityDelivery) {
      this.deliveryCost =
        this.deliveryState === 'Abuja'
          ? 1000
          : this.deliveryState === 'Lagos'
          ? 1500
          : 500;
    }
    this.next.emit({
      value: {
        address: this.address,
        deliveryType: this.deliveryType,
        deliveryCost: this.deliveryCost,
        priorityDelivery: this.priorityDelivery,
      },
      field: 'address',
      next: 'paymentMethod',
    });
  }
  locationChange(e) {

    const loc = this.allLocations.filter(
      (obj) => obj.label === e.detail.value
    )[0];
    this.deliveryCost = loc.value;
    this.deliveryState = loc.state;
  }
}
