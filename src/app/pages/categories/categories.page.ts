/* eslint-disable no-underscore-dangle */
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { InventoryService } from 'src/app/core/service/inventory/inventory.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories =[];
  constructor(private _location: Location, private router: Router,  private invS: InventoryService) { }

  ngOnInit() {
    this.invS.categoryStore.subscribe((res: any) =>{
      console.log(res);
      this.categories = res.map(cat =>({
        img: cat.categoryImage,
        title: cat.category,
        id: cat.id
      }));
    });
  }
  back(){
    this._location.back();
  }
  navigate(q){
    this.router.navigate(['menu/home/shop', {category: q}]);
  }
}
