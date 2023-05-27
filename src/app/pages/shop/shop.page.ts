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
  categories =  [];
  products =  [];
  loading = false;
  tab = 0;
  opts = {
    freeMode: false,
    slidesPerView: 2.5,
    slidesOffsetBefore: 40,
    slidesOffsetAfter: 40
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
      console.log(params);
      this.inventoryS.categoryStore.subscribe((e: any) =>{
        this.categories = e;
        console.log(e);
        const index = this.categories.findIndex(c => c?._id === params.category);
        this.tab = this.categories[index]._id;
        this.slides.slideTo(index);
        console.log(this.tab);
        console.log(index);
        this.loadInventory(this.tab);
      });
    });
  }
  loadInventory(id){
    this.loading = true;
    this.inventoryS.inventoryByCategory(id).subscribe((e: any) =>{
      console.log(e);
      this.loading = false;
      this.products = e.data;
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
      duration: 800,
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
