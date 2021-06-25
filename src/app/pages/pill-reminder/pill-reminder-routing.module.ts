import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PillReminderPage } from './pill-reminder.page';

const routes: Routes = [
  {
    path: '',
    component: PillReminderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PillReminderPageRoutingModule {}
