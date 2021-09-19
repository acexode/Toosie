import { SearchComponent } from './../../components/search/search.component';
/* eslint-disable no-underscore-dangle */
import { ToastController, ModalController, IonSlides } from '@ionic/angular';
import { InventoryService } from './../../core/service/inventory/inventory.service';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersService } from 'src/app/core/service/orders/orders.service';
import { ActivatedRoute } from '@angular/router';
import { SingleComponent } from 'src/app/components/single/single.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})

export class ShopPage implements OnInit {
  @ViewChild('slides', {static: true}) slides: IonSlides;
  categories =  [
    {
      category: 'Baby & Child',
      id: 1
    },
    {
      category: 'Women Care',
      id: 2
    },
    {
      category: 'Men Care',
      id: 3
    },
    {
      category: 'Vitamins',
      id: 4
    },
    {
      category: 'Hair Care',
      id: 5
    },
    {
      category: 'Skin Care',
      id: 6
    },
    {
      category: 'Oral Care',
      id: 7
    },
    {
      category: 'Organic Products',
      id: 8
    },
    {
      category: 'Medical Supplies',
      id: 9
    }
  ];

  products =  [];
 loading = false;
  tab = this.categories[0].id;
  opts = {
    freeMode: true,
    slidesPerView: 2.5,
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 100
  };
  activeCategory = 0;
  categorySlidesVisible = true;
  constructor(private _location: Location, private inventoryS: InventoryService,
    private orderS: OrdersService,public modalController: ModalController,
     public toastController: ToastController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCategory();
  }
  loadCategory(){
    this.route.params.subscribe(params => {
      // const cat = params.get('category');
      console.log(params.category);
      this.inventoryS.allCategories().subscribe((e: any) =>{
        console.log(e);
        this.categories = e.inventoryCategory;
        const index = this.categories.findIndex(c => c.category === params.category);
        this.tab = this.categories[index].id;
        this.slides.slideTo(index);
        console.log(this.tab);
        this.loadInventory(this.tab);
      });
    });
  }
  loadInventory(id){
    this.loading = true;
    this.inventoryS.inventoryByCategory(id).subscribe((e: any) =>{
      console.log(e);
      this.loading = false;
      this.products = e.inventory;
    });
  }
  addToCart(id){
    this.orderS.addItemToCart(id).then(e =>{
      if(e){
        this.presentToast('item added to cart');
      }else{
        this.presentToast('item already in cart');
      }

    });
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toastCss',
      position: 'top'
    });
    toast.present();
  }
  segmentChanged(id){
    this.tab = id;
    this.loadInventory(this.tab);
    console.log(this.tab);
    console.log(id);
  }
  back(){
    this._location.back();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      cssClass: 'fullscreen'
    });
    await modal.present();
  }

}
