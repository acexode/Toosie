/* eslint-disable @typescript-eslint/member-ordering */
import { locationList } from './locations';
import { OrdersService } from './../../core/service/orders/orders.service';
import { InventoryService } from './../../core/service/inventory/inventory.service';
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';
// import {Flutterwave, InlinePaymentOptions, PaymentSuccessResponse} from 'flutterwave-angular-v3';
import { Preferences as Storage } from '@capacitor/preferences';
import { GlobalServiceService } from 'src/app/core/service/global-service/global-service.service';
const SAVED_CARD = 'saved_card';
declare const getpaidSetup: any;
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {
  @Input() grandTotal: any;
  @Input() total: any;
  @Input() discount: any;
  @Input() items: any;
  savedTotal = 0;
  paystackBtn = {
    padding: '14px',
    background: '#0281b2',
    width: '100%',
    ['border-radius']: '8px',
    ['font-weight']: 'bold',
    ['font-size']: '16px',
  };
  allLocations = locationList;
  cardSaved = false;
  cardObj: any;
  publicKey = 'FLWPUBK-e2f49a592820916c1f1c939c171b645a-X';
  customizations = {
    title: 'Toosie Pharmacy',
    description: '',
    logo: '/assets/icon/logo-big.png',
  };
  allAddress = [];
  user: any;
  meta = { counsumer_id: '7898', consumer_mac: 'kjs9s8ss7dd' };
  billingInfo: FormGroup;
  selectedAddress: any = {};
  selectedPaymentType = '';
  deliveryCost = 0;

  paymentMethods = [
    // {
    //   id: '1',
    //   name: 'payment',
    //   text: 'Card Payment',
    //   value: 'card',
    //   icon: 'credit-card',
    //   disabled: true,
    //   checked: false,
    //   color: 'primary'
    // },
    {
      id: '2',
      name: 'payment',
      text: 'Cash Payment',
      value: 'cash',
      icon: 'cash',
      disabled: false,
      checked: true,
      color: 'secondary',
    },
  ];
  step = 'address';
  useLoyaltyPoint = false;
  priorityDelivery: any;
  deliveryType: any;
  reference: string;
  title: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private invS: InventoryService,
    private orderS: OrdersService,
    private modal: ModalController,
    private alertController: AlertController,
    private router: Router,
    private globalS: GlobalServiceService,
    // private flutterwave: Flutterwave,
    private loadingController: LoadingController
  ) {
    this.billingInfo = this.fb.group({
      name: [''],
      email: [''],
      phone_number: [''],
      address: ['', [Validators.required]],
      paymentType: ['card', [Validators.required]],
    });
  }

  async ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    this.savedTotal = this.grandTotal;
    console.log(
      this.savedTotal,
      this.total,
      this.grandTotal,
      this.discount,
      'amounts'
    );

    this.authService.currentUser().subscribe((str) => {
      this.user = JSON.parse(str.value);
      console.log(this.user);
      this.billingInfo.patchValue({
        email: this.user.email,
        phone_number: this.user.phone,
        name: this.user.fullName,
        address: this.user.address,
      });
    });
  }

  async placeOrder(paymentMethod = 'pod', paymentId = null) {
    const orderDetails = this.items.map((e) => ({
      product: e._id,
      quantity: e.quantity,
    }));
    const address = JSON.parse(this.address.value);
    console.log(address);
    const body: any = {
      customerId: this.user._id,
      shipping: {
        city: address.localGov,
        state: address.state,
        address: address.address,
        addressDeliveryCost: this.deliveryCost,
      },
      products: this.items,
      orderDetails,
      totalCost: this.grandTotal,
      paymentMethod,
      deliveryType: this.deliveryType,
      priorityDelivery: this.priorityDelivery,
    };
    if (paymentMethod === 'card') {
      // body.paymentStatus = 'paid';
      body.paymentId = paymentId;
    }
    console.log(body);
    const loading = await this.loadingController.create();
    await loading.present();

    this.invS.savePODCashOrder(body).subscribe(
      async (res) => {
        await loading.dismiss();
        this.successAlert();
        this.orderS.removeCart();
        const t = new Date();
        t.setSeconds(t.getSeconds() + 10);
        this.globalS.triggerNotification(
          'Order has been confirmed',
          'Your order will be delivered to your address within 24hrs',
          1,
          t
        );
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
  setPayment(value: any) {
    this.selectedPaymentType = value;
    console.log(value);
    this.billingInfo.patchValue({
      paymentType: value,
    });
  }

  loyaltyDiscount(ev) {
    if (ev.detail.checked) {
      this.useLoyaltyPoint = true;
      this.grandTotal =
        this.savedTotal + this.deliveryCost - this.user.loyaltyPoint;
    } else {
      this.useLoyaltyPoint = false;
      this.grandTotal = this.savedTotal + this.deliveryCost;
    }
    console.log(ev);
  }
  setAddress(value: any) {
    this.selectedAddress = value;
    console.log(value);
    this.billingInfo.patchValue({
      address: JSON.stringify(value),
    });
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Order Placed Successfully',
      message: 'Your order will be delivered to your address within 24hrs',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.modal.dismiss();
            this.router.navigateByUrl('menu/home/tab1');
          },
        },
      ],
    });
    await alert.present();
  }
  generateReference(): string {
    const date = new Date();
    return 'TPHREC' + date.getTime().toString();
  }


  closedPaymentModal(): void {
    console.log('payment is closed');
  }
  locationChange(value) {
    this.deliveryCost = value;
    this.grandTotal = value + this.savedTotal;
    console.log(this.grandTotal);
  }

  nextStep(ev) {
    console.log(ev);
    const { field, value, next } = ev;
    this.step = next;
    if (field === 'address') {
      const { address, deliveryType, deliveryCost, priorityDelivery } = value;
      this.setAddress(address);
      this.priorityDelivery = priorityDelivery;
      this.deliveryType = deliveryType;
      this.locationChange(deliveryCost);
    } else if (field === 'paymentType') {
      this.setPayment(value);
    }
    console.log(this.billingInfo.value);
    this.step = next;
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
  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
    this.placeOrder('card', ref.reference);
  }

  paymentCancel() {
    console.log('payment failed');
  }
}
