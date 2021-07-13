/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import {Flutterwave, InlinePaymentOptions, PaymentSuccessResponse} from 'flutterwave-angular-v3';
declare const getpaidSetup: any;
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  @Input() grandTotal: any;
  @Input() items: any;
  publicKey = 'FLWPUBK-e2f49a592820916c1f1c939c171b645a-X';
  customizations = {
    title: 'Toosie Pharmacy',
    description: '',
    logo: '/assets/icon/logo-big.png'
  };

  meta = {counsumer_id: '7898', consumer_mac: 'kjs9s8ss7dd'};
  billingInfo: FormGroup;
  opts = {
    freeMode: true,
    slidesPerView: 2,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 50
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
    }, {
      id: '2',
      name: 'payment',
      text: 'Cash Payment',
      value: 'cash',
      icon: 'cash',
      disabled: false,
      checked: true,
      color: 'secondary'
    },
  ];
  loadAPI: Promise<unknown>;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private flutterwave: Flutterwave,
    private loadingController: LoadingController) {
      this.billingInfo = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone_number: ['', [Validators.required, Validators.minLength(8)]],
        address: ['', [Validators.required]],
        paymentType: ['card', [Validators.required]],
      });

    }

  ngOnInit() {
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
    console.log(this.billingInfo.value);
    console.log(this.grandTotal);
    console.log(this.items);
    return;
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.updateUser(this.billingInfo.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigate(['menu/home']);
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
    this.billingInfo.patchValue({
      paymentType: value
    });
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
  const trxref = 'FDKHGK'+ Math.random();

}

makePaymentCallback(response: PaymentSuccessResponse): void {
  console.log('Payment callback', response);
}
closedPaymentModal(): void {
  console.log('payment is closed');
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


