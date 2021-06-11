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
      title: 'Settings',
      url: '/menu/first',
      icon: 'settings-f'
    },
    {
      title: 'Rate',
      url: 'rate',
      icon: 'star-f',
      
    },
    {
      title: 'Share Toosie',
      url: 'share',
      icon: 'share-2',

    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigateByUrl('login')
  }

}
