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
    this.totalAmount();
  }
  dismiss(){
    this.modalController.dismiss();
  }
  totalAmount(){
    this.item.details.forEach(element => {
      this.total += element.cost * element.quantity;
    });
    console.log(this.total);
  }
}
