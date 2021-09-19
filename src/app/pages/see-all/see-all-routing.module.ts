import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeeAllPage } from './see-all.page';

const routes: Routes = [
  {
    path: '',
    component: SeeAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeAllPageRoutingModule {}
