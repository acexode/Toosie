import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrandsComponent } from '../brands/brands.component';



@NgModule({
  declarations: [BannerComponent, BrandsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[
    BannerComponent,
    BrandsComponent
  ]
})
export class SharedModule { }
