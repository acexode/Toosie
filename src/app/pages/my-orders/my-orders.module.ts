import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOrdersPageRoutingModule } from './my-orders-routing.module';

import { MyOrdersPage } from './my-orders.page';
import { SharedModule } from '../../components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyOrdersPageRoutingModule,
    SharedModule
  ],
  declarations: [MyOrdersPage]
})
export class MyOrdersPageModule {}
