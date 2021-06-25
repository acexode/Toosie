import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrescriptionHistoryPage } from './prescription-history.page';

const routes: Routes = [
  {
    path: '',
    component: PrescriptionHistoryPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescriptionHistoryPageRoutingModule {}
