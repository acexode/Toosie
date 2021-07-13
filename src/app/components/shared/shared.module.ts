import { BillingComponent } from './../billing/billing.component';
import { AddRefillComponent } from './../add-refill/add-refill/add-refill.component';
import { PillReminderModalComponent } from './../pill-reminder-modal/pill-reminder-modal.component';
import { ItemsComponent } from './../items/items.component';
import { SlideItemComponent } from './../slide-item/slide-item.component';
import { SearchComponent } from './../search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrandsComponent } from '../brands/brands.component';
import { HeaderComponent } from '../header/header.component';
import { FlutterwaveModule } from 'flutterwave-angular-v3';



@NgModule({
  declarations: [BannerComponent, BrandsComponent,
    ItemsComponent,SearchComponent, SlideItemComponent, HeaderComponent,
    PillReminderModalComponent, AddRefillComponent, BillingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FlutterwaveModule,
  ],
  exports:[
    BannerComponent,
    BrandsComponent,
    SearchComponent,
    SlideItemComponent, HeaderComponent, ItemsComponent,
    PillReminderModalComponent, AddRefillComponent, BillingComponent
  ]
})
export class SharedModule { }
