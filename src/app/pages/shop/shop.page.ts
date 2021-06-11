import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  tab = 'ipsum'
  constructor() { }

  ngOnInit() {
  }
  segmentChanged($event){
    console.log($event.detail.value)
  }
}
