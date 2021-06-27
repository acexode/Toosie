import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageRefillPage } from './manage-refill.page';

const routes: Routes = [
  {
    path: '',
    component: ManageRefillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRefillPageRoutingModule {}
