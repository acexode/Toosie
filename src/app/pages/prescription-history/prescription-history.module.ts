import { SharedModule } from 'src/app/components/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrescriptionHistoryPageRoutingModule } from './prescription-history-routing.module';

import { PrescriptionHistoryPage } from './prescription-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrescriptionHistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [PrescriptionHistoryPage]
})
export class PrescriptionHistoryPageModule {}
