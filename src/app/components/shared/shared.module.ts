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
// import { FlutterwaveModule } from 'flutterwave-angular-v3';
import { SwiperModule } from 'swiper/angular';
import { PasscodeComponent } from '../passcode/passcode.component';
import { AddressComponent } from '../address/address.component';
import { SelectPaymentComponent } from '../select-payment/select-payment.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { TermsAndConditionComponent } from '../terms-and-condition/terms-and-condition.component';
@NgModule({
  declarations: [
    BannerComponent,
    BrandsComponent,
    PasscodeComponent,
    ItemsComponent,
    SearchComponent,
    SlideItemComponent,
    HeaderComponent,
    ReceiptComponent,
    PillReminderModalComponent,
    AddRefillComponent,
    BillingComponent,
    SingleComponent,
    ProfileComponentsComponent,
    AddressComponent,
    SelectPaymentComponent,
    TermsAndConditionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Angular4PaystackModule.forRoot('pk_live_8fa45918feaa0925713ae746c8ae810b67462b3a'),
    // Angular4PaystackModule.forRoot('pk_test_09622c99e0e1e03ccf95ba94643ec7da2569e8bc'), // test key
    SwiperModule,
  ],
  exports: [
    BannerComponent,
    BrandsComponent,
    SearchComponent,
    SlideItemComponent,
    HeaderComponent,
    ItemsComponent,
    ReceiptComponent,
    ProfileComponentsComponent,
    PillReminderModalComponent,
    AddRefillComponent,
    BillingComponent,
    SingleComponent,
    PasscodeComponent,
    AddressComponent,
    SelectPaymentComponent,
    TermsAndConditionComponent
  ],
})
export class SharedModule {}
