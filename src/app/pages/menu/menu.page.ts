import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Search & Buy Medicine',
      url: '/menu/first',
      icon: 'search-f'
    },
    {
      title: 'Upload Prescription',
      url: 'rate',
      icon: 'file-plus',
      
    },
    {
      title: 'Categories',
      url: 'share',
      icon: 'package',

    }
  ];
  manage = [
    {
      title: 'My Orders',
      url: '/menu/first',
      icon: 'shopping-cart'
    },
    {
      title: 'My Prescription',
      url: 'rate',
      icon: 'file-plus',
      
    },
    {
      title: 'Profile',
      url: 'share',
      icon: 'user',

    }
  ];
  support = [
    {
      title: 'Contact Us',
      url: '/menu/first',
      icon: 'users'
    },
    {
      title: 'Send Feedback',
      url: 'rate',
      icon: 'thumbs-up-f',
      
    },
    {
      title: 'FAQs',
      url: 'share',
      icon: 'help-circle-f',

    },
    {
      title: 'About Us',
      url: 'share',
      icon: 'info',
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigateByUrl('login')
  }

}
