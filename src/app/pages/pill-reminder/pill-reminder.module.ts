import { SharedModule } from './../../components/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PillReminderPageRoutingModule } from './pill-reminder-routing.module';

import { PillReminderPage } from './pill-reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PillReminderPageRoutingModule,
    SharedModule
  ],
  declarations: [PillReminderPage]
})
export class PillReminderPageModule {}
