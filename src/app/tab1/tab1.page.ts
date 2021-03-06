/* eslint-disable no-underscore-dangle */
import { InventoryService } from './../core/service/inventory/inventory.service';
import { SearchComponent } from './../components/search/search.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BlogService } from '../core/service/blog/blog.service';
import SwiperCore, { SwiperOptions } from 'swiper';
declare const window: any;
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
  blogs$: Observable<any>;
  categories =  [];
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };



  constructor(private router: Router, public modalController: ModalController,
    private invS: InventoryService, private blogS: BlogService) {}
  ngOnInit() {
    this.brand$ = this.invS.allBrands();
    this.popular$ = this.invS.popularStore;
    this.latest$ = this.invS.latestStore;
    this.blogs$ = this.blogS.blogStore;
    this.invS.categoryStore.subscribe((res: any) =>{
      this.categories = res.map(cat =>({
        img: cat.categoryImage,
        title: cat.category,
        id: cat._id
      }));
    });
  }
  onSwiper([swiper]) {
  }
  onSlideChange() {
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


    setTimeout(() => {

      event.target.complete();
    }, 1000);
  }
  navigate(end){
    this.router.navigate(['menu/home/'+end]);
  }
  seeAll(path, params){
    this.router.navigate(['menu/home/'+path, params]);

  }
  tawkto(){

    window.Tawk_API.maximize();
  }
}
