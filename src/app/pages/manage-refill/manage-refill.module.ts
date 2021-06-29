import { SharedModule } from './../../components/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageRefillPageRoutingModule } from './manage-refill-routing.module';

import { ManageRefillPage } from './manage-refill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageRefillPageRoutingModule,
    SharedModule
  ],
  declarations: [ManageRefillPage]
})
export class ManageRefillPageModule {}
