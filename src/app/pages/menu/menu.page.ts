import { ModalController } from '@ionic/angular';
import { AuthService } from './../../core/service/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { SearchComponent } from 'src/app/components/search/search.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  user;
  pages = [
    {
      title: 'Upload Prescription',
      url: '/menu/home/upload',
      icon: 'file-plus',

    },
    {
      title: 'Categories',
      url: '/menu/home/categories',
      icon: 'package',

    }
  ];
  manage = [
    {
      title: 'My Orders',
      url: '/menu/home/cart',
      icon: 'shopping-cart'
    },
    {
      title: 'My Prescription',
      url: '/menu/home/prescription',
      icon: 'file-plus',

    },
    {
      title: 'Profile',
      url: '/menu/home/profile',
      icon: 'user',

    }
  ];
  support = [
    {
      title: 'Contact Us',
      url: '/menu/home/contact',
      icon: 'users'
    },
    {
      title: 'FAQs',
      url: '/menu/home/faq',
      icon: 'help-circle-f',

    },
    {
      title: 'About Us',
      url: '/menu/home/about',
      icon: 'info',
    }
  ];
  constructor(private router: Router, private authS: AuthService, private modalController: ModalController) { }

  async ngOnInit() {
   await Storage.get({key: 'current-user'}).then((user: any) =>{
     console.log(user.value);
      this.user = JSON.parse(user.value);
    });
  }
  logout(){
    this.authS.logout().then(e =>{
      this.router.navigateByUrl('login');

    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SearchComponent,
      cssClass: 'fullscreen'
    });
    await modal.present();
  }
}
