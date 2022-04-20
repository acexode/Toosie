import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {
  @Input() item;
  total = 0;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.item);
  }
  dismiss(){
    this.modalController.dismiss();
  }
  calcDiscount(cost, discount){
    return cost - (cost * (discount /100));
  }
}
