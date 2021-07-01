import { SearchComponent } from './../../components/search/search.component';
/* eslint-disable no-underscore-dangle */
import { ToastController, ModalController } from '@ionic/angular';
import { InventoryService } from './../../core/service/inventory/inventory.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/service/orders/orders.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})

export class ShopPage implements OnInit {
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
  constructor(private _location: Location, private inventoryS: InventoryService,
    private orderS: OrdersService,public modalController: ModalController,
     public toastController: ToastController) { }

  ngOnInit() {
    this.loadCategory();
  }
  loadCategory(){
    this.inventoryS.allCategories().subscribe((e: any) =>{
      console.log(e);
      this.categories = e.inventoryCategory;
      this.tab = this.categories[0].id;
      this.loadInventory(this.tab);
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
  segmentChanged($event){
    this.tab = $event.detail.value;
    this.loadInventory(this.tab);
    console.log($event.detail.value);
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
