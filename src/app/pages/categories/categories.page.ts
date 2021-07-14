/* eslint-disable no-underscore-dangle */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories =  [
    {
      img: 'assets/icon/baby.png',
      title: 'Baby & Child',
      path: ''
    },
    {
      img: 'assets/icon/woman.png',
      title: 'Women Care',
      path: ''
    },
    {
      img: 'assets/icon/man.png',
      title: 'Men Care',
      path: ''
    },
    {
      img: 'assets/icon/man.png',
      title: 'Vitamins',
      path: ''
    },
    {
      img: 'assets/icon/hair-care.png',
      title: 'Hair Care',
      path: ''
    },
    {
      img: 'assets/icon/skincare.png',
      title: 'Skin Care',
      path: ''
    },
    {
      img: 'assets/icon/toothbrush.png',
      title: 'Oral Care',
      path: ''
    },
    {
      img: 'assets/icon/natural.png',
      title: 'Organic Products',
      path: ''
    },
    {
      img: 'assets/icon/medical-assistance.png',
      title: 'Medical Supplies',
      path: ''
    },
    // {
    //   img: 'assets/icon/mask.png',
    //   title: 'Protection 101',
    //   path: ''
    // },
    // {
    //   img: 'assets/icon/sex.png',
    //   title: 'Sexual Health1',
    //   path: ''
    // },
  ];
  constructor(private _location: Location, private router: Router) { }

  ngOnInit() {
  }
  back(){
    this._location.back();
  }
  navigate(q){
    this.router.navigate(['menu/home/shop', {category: q}]);
  }
}
