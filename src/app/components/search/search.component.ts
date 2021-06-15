import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalController, IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchProduct') searchProduct: IonSearchbar
  constructor(public modalController: ModalController) { }

  ngAfterViewInit() {
    console.log(this.searchProduct)
   this.searchProduct.setFocus()
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
