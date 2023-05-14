import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss'],
})
export class TermsAndConditionComponent implements OnInit {
  constructor(private modal: ModalController) {}

  ngOnInit() {}

  dismissModal() {
    this.modal.dismiss();
  }
}
