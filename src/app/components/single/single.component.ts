/* eslint-disable no-underscore-dangle */
import { InventoryService } from './../../core/service/inventory/inventory.service';
/* eslint-disable @angular-eslint/no-input-rename */
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { OrdersService } from 'src/app/core/service/orders/orders.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit  {
  @Input() item;
  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper: ElementRef;
  @Input('expanded') expanded = false;
  @Input('expandHeight') expandHeight = '150px';
  sameCategory$: Observable<any>;
  showButton = false;
  opts  = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  infoPanel = [];
  constructor(private orderS: OrdersService,
    public renderer: Renderer2,
    public inventoryS: InventoryService,
    private toastController: ToastController) { }

  ngOnInit() {
    // this.opts = {
    //   freeMode: false,
    // };
    console.log(this.item);
    this.inventoryS.inventoryByCategory(this.item.category._id).subscribe((e: any) =>{
      console.log(e);
      this.sameCategory$ = of(e.inventory);
    });
    const acc = document.getElementsByClassName('accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
    console.log(this.item);
  }

  addToCart(item){
    this.orderS.addItemToCart(item).then(e =>{
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
}
