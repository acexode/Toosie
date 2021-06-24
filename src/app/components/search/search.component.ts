import { InventoryService } from './../../core/service/inventory/inventory.service';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { Subject } from 'rxjs';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('searchProduct') searchProduct: IonSearchbar;
  searchTerm$ = new Subject<string>();
  showSpinner;
  items = [];
  searchResult = null;
  constructor(public modalController: ModalController, private invS: InventoryService) {
    this.invS.loading.subscribe(e =>{
      console.log(e);
      this.showSpinner = e;
    });
    this.invS.search(this.searchTerm$).subscribe((e: any) =>{
      console.log(e);
      this.items = e.searchResult;
      this.searchResult = e.searchResult;
      this.invS.loading.next(false);
      this.showSpinner = false;
    });
  }

  ngAfterViewInit() {
    Keyboard.show();
    console.log(this.searchProduct);
   this.searchProduct.setFocus();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
  onChange($event){
    this.searchTerm$.next($event.target.value);
  }
}
