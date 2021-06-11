import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.page.html',
  styleUrls: ['./wish.page.scss'],
})
export class WishPage implements OnInit {
  lists = [
    {
      img:'assets/icon/product.jpg',
      name: 'Product 1',
      price: '450'
    },
    {
      img:'assets/icon/product2.jpg',
      name: 'Product 2',
      price: '850'
    },
    {
      img:'assets/icon/product3.jpg',
      name: 'Product 3',
      price: '700'
    },
    {
      img:'assets/icon/product1.jpg',
      name: 'Product 4',
      price: '1000'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
