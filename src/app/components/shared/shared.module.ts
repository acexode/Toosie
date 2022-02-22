import { ProfileComponentsComponent } from './../profile-components/profile-components.component';
import { ReceiptComponent } from './../receipt/receipt.component';
import { SingleComponent } from './../single/single.component';
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
import { SwiperModule } from 'swiper/angular';
import { PasscodeComponent } from '../passcode/passcode.component';


@NgModule({
  declarations: [BannerComponent, BrandsComponent,PasscodeComponent,
    ItemsComponent,SearchComponent, SlideItemComponent, HeaderComponent, ReceiptComponent,
    PillReminderModalComponent, AddRefillComponent, BillingComponent, SingleComponent, ProfileComponentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FlutterwaveModule,
    SwiperModule
  ],
  exports:[
    BannerComponent,
    BrandsComponent,
    SearchComponent,
    SlideItemComponent, HeaderComponent, ItemsComponent,ReceiptComponent, ProfileComponentsComponent,
    PillReminderModalComponent, AddRefillComponent, BillingComponent, SingleComponent, PasscodeComponent
  ]
})
export class SharedModule { }
