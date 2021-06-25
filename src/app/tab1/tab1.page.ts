import { InventoryService } from './../core/service/inventory/inventory.service';
import { SearchComponent } from './../components/search/search.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  showButton = false;
  brand$: Observable<any>;
  popular$: Observable<any>;
  latest$: Observable<any>;
  categories =  [
    {
      img: 'assets/icon/baby.png',
      title: 'Baby & Child',
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
      img: 'assets/icon/man.png',
      title: 'Vitamins',
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
    // {
    //   img: 'assets/icon/toothbrush.png',
    //   title: 'Oral Care',
    //   path: ''
    // },
    // {
    //   img: 'assets/icon/natural.png',
    //   title: 'Organic Products',
    //   path: ''
    // },
    // {
    //   img: 'assets/icon/medical-assistance.png',
    //   title: 'Medical Supplies',
    //   path: ''
    // },
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
  ];
  explore =  [
    {
      img: 'assets/icon/tablet.png',
      title: 'Men Shaving Stick',
      price: 2500,
      discount: 20
    },
    {
      img: 'assets/icon/beauty.png',
      title: 'Beauty',
      price: 2500,
      discount: 20
    },
    {
      img: 'assets/icon/vitamin.png',
      title: 'Vitamins',
      price: 2500,
      discount: 20
    },
    {
      img: 'assets/icon/grocery.png',
      title: 'Grocery',
      price: 2500,
      discount: 20
    },
    {
      img: 'assets/icon/household.png',
      title: 'Household',
      price: 2500,
      discount: 20
    },
  ];
  bannerList = [
    {
      img: 'assets/icon/banner3.jpg',
      title: 'Men Shaving Stick',
      price: 2500,
      discount: 20
    },
    {
      img: 'assets/icon/banner1.png',
      title: 'Adel 18 glucorect drop',
      price: 900,
      discount: 10
    },
    {
      img: 'assets/icon/banner2.png',
      title: 'Cough syrup',
      price: 3000,
      discount: 5
    },
    {
      img: 'assets/icon/home-bg3.jpg',
      title: 'Neuroton 6 AMP',
      price: 4000,
      discount: 8
    },
    {
      img: 'assets/icon/home-bg.jpg',
      title: 'Sparkle Shampoo And Conditioner',
      price: 4000,
      discount: 8
    }
  ];
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
  ];

  constructor(private router: Router, public modalController: ModalController, private invS: InventoryService) {}
  ngOnInit() {
    this.brand$ = this.invS.allBrands();
    this.popular$ = this.invS.popularStore;
    this.latest$ = this.invS.latestStore;
  }
  shop(q){
    this.router.navigate(['menu/home/shop', {category: q}]);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      cssClass: 'fullscreen'
    });
    await modal.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
  navigate(end){
    this.router.navigate(['menu/home/'+end]);
  }
}
