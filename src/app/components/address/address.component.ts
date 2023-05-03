import { Output, EventEmitter } from '@angular/core';
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { locationList } from './locations';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  allAddress = [];
  allLocations = locationList;
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
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getAllAddress();
  }

  async getAllAddress() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.currentUser$.subscribe((res) => {
      console.log(res.address);
      loading.dismiss();
      this.user = res;
      if (res.addresses) {
        this.allAddress.push(...res.addresses);
        this.address = res.addresses;
        console.log(this.allAddress);
      } else {
        this.presentAlertPrompt('Add delivery address to proceed!');
      }
    });
  }

  async presentAlertPrompt(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: msg,
      inputs: [
        {
          name: 'state',
          type: 'text',
          placeholder: 'State',
        },
        {
          name: 'localGov',
          type: 'text',
          placeholder: 'City / Town',
        },
        // multiline input.
        {
          name: 'address',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Full Address',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (data) => {
            const obj = {
              ...data,
              user: this.user.email,
            };
            this.allAddress.push(obj.address);
            console.log(obj);
            this.authService.newAddress(obj).subscribe((e) => {
              console.log(e, 'from alert');
              this.getAllAddress();
              alert.dismiss();
            });
          },
        },
      ],
    });

    await alert.present();
  }

  setAddress(value: any) {
    this.address = value;
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
    console.log(e.detail.value);
    console.log(e);
    const loc = this.allLocations.filter(
      (obj) => obj.label === e.detail.value
    )[0];
    console.log(loc);
    this.deliveryCost = loc.value;
    this.deliveryState = loc.state;
  }
}
