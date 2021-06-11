import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showButton = false
  iconList =  [
    {
      img: 'assets/icon/prescription.png',
      title: 'Prescription',
      path: ''
    },
    {
      img: 'assets/icon/medicine.png',
      title: 'Medicine',
      path: ''
    },
    {
      img: 'assets/icon/online-shopping.png',
      title: 'Shop',
      path: ''
    },
    {
      img: 'assets/icon/surprise.png',
      title: 'Toosie Box',
      path: ''
    },
  ]
  categories =  [
    {
      img: 'assets/icon/baby.png',
      title: 'Baby Care',
      path: ''
    },
    {
      img: 'assets/icon/woman.png',
      title: 'Women Care',
      path: ''
    },
    {
      img: 'assets/icon/man.png',
      title: 'Men Care',
      path: ''
    },
    {
      img: 'assets/icon/hair-care.png',
      title: 'Hair Care',
      path: ''
    },
    {
      img: 'assets/icon/skincare.png',
      title: 'Skin Care',
      path: ''
    },
    {
      img: 'assets/icon/toothbrush.png',
      title: 'Oral Care',
      path: ''
    },
    {
      img: 'assets/icon/natural.png',
      title: 'Organic Products',
      path: ''
    },
    {
      img: 'assets/icon/medical-assistance.png',
      title: 'Medical Supplies',
      path: ''
    },
    // {
    //   img: 'assets/icon/mask.png',
    //   title: 'Protection 101',
    //   path: ''
    // },
    // {
    //   img: 'assets/icon/sex.png',
    //   title: 'Sexual Health1',
    //   path: ''
    // },
  ]
  bannerList = [
    {
      img: 'assets/icon/banner1.png',
      title: ''
    },
    {
      img: 'assets/icon/banner2.png',
      title: ''
    },
    {
      img: 'assets/icon/banner3.jpg',
      title: ''
    }
  ]
  offers = [
    {
      img: 'assets/icon/product3.jpg',
      title: ''
    },
    {
      img: 'assets/icon/product1.jpg',
      title: ''
    },
    {
      img: 'assets/icon/product.jpg',
      title: ''
    },
    {
      img: 'assets/icon/product2.jpg',
      title: ''
    }
  ]
  constructor(private router: Router) {}

  shop(q){
    this.router.navigate(['menu/home/shop', {category: q}])
  }

}
