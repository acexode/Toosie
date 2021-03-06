import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'prescription',
        loadChildren: () => import('../prescription/prescription.module').then(m => m.PrescriptionPageModule)
      },
      {
        path: 'prescription/history',
        loadChildren: () => import('../prescription-history/prescription-history.module').then(m => m.PrescriptionHistoryPageModule)
      },
      {
        path: 'prescription/reminder',
        loadChildren: () => import('../pill-reminder/pill-reminder.module').then(m => m.PillReminderPageModule)
      },
      {
        path: 'prescription/manage-refill',
        loadChildren: () => import('../manage-refill/manage-refill.module').then(m => m.ManageRefillPageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'wish',
        loadChildren: () => import('../wish/wish.module').then(m => m.WishPageModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('../blog/blog.module').then(m => m.BlogPageModule)
      },
      {
        path: 'cart-orders',
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'payment-details',
        loadChildren: () => import('../payment/payment.module').then(m => m.PaymentPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'upload',
        loadChildren: () => import('../upload/upload.module').then(m => m.UploadPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsPageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsPageModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('../faqs/faqs.module').then(m => m.FaqsPageModule)
      },
      {
        path: 'my-orders',
        loadChildren: () => import('../my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
      },
      {
        path: 'see-all/:id',
        loadChildren: () => import('../see-all/see-all.module').then( m => m.SeeAllPageModule)
      },

    ],
  },
    {
      path: '',
      redirectTo: '/tabs/tab1',
      pathMatch: 'full'
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
