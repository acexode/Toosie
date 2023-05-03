import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrescriptionHistoryPage } from '../prescription-history/prescription-history.page';
import { PrescriptionPage } from './prescription.page';

const routes: Routes = [
  {
    path: '',
    component: PrescriptionPage
  },
  // {
  //   path: '/prescription',
  //   component: PrescriptionPage,
  //   children: [
  //     {
  //       path: 'history',
  //       loadChildren: () => import('../prescription-history/prescription-history.module').then(m => m.PrescriptionHistoryPageModule)
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescriptionPageRoutingModule {}
