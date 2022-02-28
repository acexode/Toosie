import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeAllPageRoutingModule } from './see-all-routing.module';

import { SeeAllPage } from './see-all.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeAllPageRoutingModule,
    SharedModule
  ],
  declarations: [SeeAllPage]
})
export class SeeAllPageModule {}
