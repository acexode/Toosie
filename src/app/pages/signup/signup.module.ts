import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { FormatTimePipe } from 'src/app/core/pipes/format-time.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SignupPage, FormatTimePipe]
})
export class SignupPageModule {}
