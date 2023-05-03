import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss'],
})
export class SelectPaymentComponent implements OnInit {
  @Output() next = new EventEmitter();
  paymentMethods = [
    {
      id: '1',
      name: 'payment',
      text: 'Card Payment',
      value: 'card',
      icon: 'card-payment',
      disabled: true,
      checked: false,
      color: 'primary'
    },
    {
      id: '2',
      name: 'payment',
      text: 'Cash Payment',
      value: 'cash',
      icon: 'cash-payment',
      disabled: false,
      checked: true,
      color: 'secondary'
    }
  ];
  paymentType = 'cash';
  constructor() { }

  ngOnInit() {}

  setPayment(value: any){
    console.log(value);
    this.paymentType = value;
    // this.billingInfo.patchValue({
    //   paymentType: value
    // });
  }
  proceed(){
    this.next.emit({
      value: this.paymentType,
      field: 'paymentType',
      next: 'preview'
    });
  }

}
