import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadPage } from './upload.page';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UploadPage,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadPageRoutingModule {}
