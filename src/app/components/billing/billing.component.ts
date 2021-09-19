import { locationList } from './locations';
import { OrdersService } from './../../core/service/orders/orders.service';
import { InventoryService } from './../../core/service/inventory/inventory.service';
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import {Flutterwave, InlinePaymentOptions, PaymentSuccessResponse} from 'flutterwave-angular-v3';
import { Storage } from '@capacitor/storage';
const SAVED_CARD = 'saved_card';
declare const getpaidSetup: any;
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  @Input() grandTotal: any;
  @Input() items: any;
  savedTotal = 0;
  allLocations = locationList;
  cardSaved = false;
  cardObj: any;
  publicKey = 'FLWPUBK-e2f49a592820916c1f1c939c171b645a-X';
  customizations = {
    title: 'Toosie Pharmacy',
    description: '',
    logo: '/assets/icon/logo-big.png'
  };

  meta = {counsumer_id: '7898', consumer_mac: 'kjs9s8ss7dd'};
  billingInfo: FormGroup;
  opts = {
    // freeMode: false,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  paymentMethods = [
    {
      id: '1',
      name: 'payment',
      text: 'Card Payment',
      value: 'card',
      icon: 'credit-card',
      disabled: false,
      checked: false,
      color: 'primary'
    },
    // {
    //   id: '2',
    //   name: 'payment',
    //   text: 'Cash Payment',
    //   value: 'cash',
    //   icon: 'cash',
    //   disabled: false,
    //   checked: true,
    //   color: 'secondary'
    // }
  ];
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private invS: InventoryService,
    private orderS: OrdersService,
    private modal: ModalController,
    private alertController: AlertController,
    private router: Router,
    private flutterwave: Flutterwave,
    private loadingController: LoadingController) {
      this.billingInfo = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone_number: ['', [Validators.required, Validators.minLength(8)]],
        address: ['', [Validators.required]],
        location: ['', [Validators.required]],
        paymentType: ['card', [Validators.required]],
      });
    }

    async ngOnInit() {
      this.savedTotal = this.grandTotal;
      console.log(this.savedTotal);
    const card = await Storage.get({ key: SAVED_CARD });
    this.cardObj = JSON.parse(card.value);
    if(this.cardObj !== null){
      console.log(this.cardObj);
      this.cardSaved = true;
      this.billingInfo.patchValue({
        paymentType: 'savedCard'
      });
    }
    this.authService.currentUser().subscribe(str =>{
      const user = JSON.parse(str.value);
      console.log(user);
      this.billingInfo.patchValue({
        email: user.email,
        phone_number: user.phone,
        name: user.fullName,
        address: user.address,
      });
    });
  }

  async placeOrder() {
    const records = this.items.map(e => ({
        inventoryId: e._id,
        itemName: e.title,
        quantity: e.quantity,
        cost: e.currentPrice
      }));
    const body = {
      records,
      paymentType:'POD',
      address: this.address.value
    };
    console.log(body);
    const loading = await this.loadingController.create();
    await loading.present();

    this.invS.savePODCashOrder(body).subscribe(
      async (res) => {
        await loading.dismiss();
        this.successAlert();
        this.orderS.removeCart();
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: res.error.message,
          message: res.error.error,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }
  setPayment(value: any){
    console.log(value);
    this.billingInfo.patchValue({
      paymentType: value
    });
  }


  async successAlert(){
    const alert = await this.alertController.create({
      header: 'Order Placed Successfully',
      message: 'Your order will be delivered to your address within 24hrs',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.modal.dismiss();
          this.router.navigateByUrl('menu/home/tab1');
        }}],
    });
    await alert.present();
  }
  generateReference(): string {
    const date = new Date();
    return 'TPHREC' + date.getTime().toString();
  }
  payWithRave() {
    //flw-t1nf-df84793838bb8a62267a8ce63b204e5e-k3n
    const customerDetails = {
      name: this.name.value,
      email: this.email.value,
      phone_number_number: this.phone_number.value
    };
    const metas = this.items.map(it =>({
      metaname: it.title,
      metavalue: it._id
    }));
    const paymentData: InlinePaymentOptions = {
      public_key: this.publicKey,
      tx_ref: this.generateReference(),
      amount: 10,
      currency: 'NGN',
      payment_options: 'card,ussd',
      redirect_url: '',
      meta: this.meta,
      customer: customerDetails,
      customizations: this.customizations,
      callback: this.makePaymentCallback,
      onclose: this.closedPaymentModal,
      callbackContext: this
    };
    this.flutterwave.inlinePay(paymentData);

  }

  async savedCardPayment(): Promise<void> {
    const records = this.items.map(e => ({
      inventoryId: e._id,
      itemName: e.title,
      quantity: e.quantity,
      cost: e.currentPrice
    }));
    const body = {
      address: this.address.value,
      paymentType:'Card',
      records,
      txref: this.generateReference(),
      token: this.cardObj.life_time_token,
      grandTotal: 10
    };
    console.log(body);
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Saving and verifying...'
    });
    await loading.present();

    this.invS.saveTokenOrder(body).subscribe(
      async (res: any) => {
      //Storage.set({key: SAVED_CARD,value: JSON.stringify(res.card)});
      await loading.dismiss();
      this.successAlert();
      this.orderS.removeCart();
    },
    async (res) => {
      console.log(res);
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: res.error.message,
        message: res.error.error,
        buttons: ['OK'],
      });

      await alert.present();
    }
  );
  }
  async makePaymentCallback(response: PaymentSuccessResponse): Promise<void> {
    const records = this.items.map(e => ({
      inventoryId: e._id,
      itemName: e.title,
      quantity: e.quantity,
      cost: e.currentPrice
    }));
    const body = {
      address: this.address.value,
      paymentType:'Card',
      records,
      txref: response.tx_ref
    };
    console.log(body);
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Saving and verifying...'
    });
    await loading.present();

    this.invS.saveCardOrder(body).subscribe(
      async (res: any) => {
      Storage.set({key: SAVED_CARD,value: JSON.stringify(res.card)});
      await loading.dismiss();
      this.successAlert();
      this.orderS.removeCart();
    },
    async (res) => {
      console.log(res);
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: res.error.message,
        message: res.error.error,
        buttons: ['OK'],
      });

      await alert.present();
    }
  );
  }
  closedPaymentModal(): void {
    console.log('payment is closed');
  }
  locationChange(e){
    console.log(e.detail.value);
    console.log(e);
    const value = this.allLocations.filter(loc => loc.label === e.detail.value)[0].value;
    console.log(value);
    this.grandTotal = value + this.savedTotal;
    console.log(this.grandTotal);
  }
  // Easy access for form fields
  get name() {
    return this.billingInfo.get('name');
  }
  get email() {
    return this.billingInfo.get('email');
  }

  get phone_number() {
    return this.billingInfo.get('phone_number');
  }
  get address() {
    return this.billingInfo.get('address');
  }
  get paymentType() {
    return this.billingInfo.get('paymentType');
  }
}


