import { PillReminderModalComponent } from './../pill-reminder-modal/pill-reminder-modal.component';
import { ItemsComponent } from './../items/items.component';
import { SlideItemComponent } from './../slide-item/slide-item.component';
import { SearchComponent } from './../search/search.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrandsComponent } from '../brands/brands.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [BannerComponent, BrandsComponent,
    ItemsComponent,SearchComponent, SlideItemComponent, HeaderComponent, PillReminderModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports:[
    BannerComponent,
    BrandsComponent,
    SearchComponent,
    SlideItemComponent, HeaderComponent, ItemsComponent,
    PillReminderModalComponent
  ]
})
export class SharedModule { }
