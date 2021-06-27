import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AutoLoginGuard } from './core/guards/auto-login.guard';
import { IntroGuard } from './core/guards/intro.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'prescription-history',
    loadChildren: () => import('./pages/prescription-history/prescription-history.module').then( m => m.PrescriptionHistoryPageModule)
  },
  {
    path: 'pill-reminder',
    loadChildren: () => import('./pages/pill-reminder/pill-reminder.module').then( m => m.PillReminderPageModule)
  },  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'manage-refill',
    loadChildren: () => import('./pages/manage-refill/manage-refill.module').then( m => m.ManageRefillPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
