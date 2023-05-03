import { InventoryService } from './../../core/service/inventory/inventory.service';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
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
  sameCategory = [];
  constructor(
    public modalController: ModalController,
    private invS: InventoryService
  ) {
    this.invS.loading.subscribe((e) => {
      console.log(e);
      this.showSpinner = e;
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
      dismissed: true,
    });
  }
  onChange($event) {
    console.log($event.target.value);
    const value = $event.target.value;
    if (value.length) {
      this.searchTerm$.next($event.target.value);
      this.invS.search(this.searchTerm$).subscribe((e: any) => {
        console.log(e);
        this.items = e.data;
        if (this.items.length > 0) {
          this.getSimilarItems(this.items[0].category);
        }
        this.searchResult = e.data;
        this.invS.loading.next(false);
        this.showSpinner = false;
      });
    }
  }

  getSimilarItems(id) {
    this.invS.inventoryByCategory(id).subscribe((e: any) => {
      console.log(e);
      this.sameCategory = e.data;
      this.invS.similarStore.next(e.data);
      console.log(e.data);
    });
  }
}
