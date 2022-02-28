import { Observable } from 'rxjs';
import { InventoryService } from './../../core/service/inventory/inventory.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-see-all',
  templateUrl: './see-all.page.html',
  styleUrls: ['./see-all.page.scss'],
})
export class SeeAllPage implements OnInit {
  title = '';
  products= [];
  constructor(private route: ActivatedRoute, private invS: InventoryService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // this.myParam = params['caller']
      if(params.id === 'popular'){
        this.title = 'Popular Products';
        this.invS.popularStore.subscribe(e => this.products = e);
      }else{
        this.title = 'Latest Products';
        this.invS.latestStore.subscribe(e => this.products = e);
      }
      console.log(params);
    });
  }

}
