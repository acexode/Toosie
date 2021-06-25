import { SharedModule } from './../../components/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishPageRoutingModule } from './wish-routing.module';

import { WishPage } from './wish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishPageRoutingModule,
    SharedModule
  ],
  declarations: [WishPage]
})
export class WishPageModule {}
