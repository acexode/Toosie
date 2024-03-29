/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { AuthService } from './../../../core/service/auth/auth.service';
import { AddRefillService } from './../../../core/service/add-refill/add-refill.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-add-refill',
  templateUrl: './add-refill.component.html',
  styleUrls: ['./add-refill.component.scss'],
})
export class AddRefillComponent implements OnInit {
 @Input() itemName;
 @Input() item;
 fileText = 'Upload prescription';
  frequencyList = [
    {
      id: '1',
      name: 'cycle',
      text: 'Every 7 days',
      value: '7',
      disabled: false,
      checked: false,
      color: 'primary'
    }, {
      id: '2',
      name: 'cycle',
      text: 'Every 15 days',
      value: '15',
      disabled: false,
      checked: true,
      color: 'secondary'
    }, {
      id: '3',
      name: 'cycle',
      text: 'Every 30 days',
      value: '30',
      disabled: false,
      checked: false,
      color: 'danger'
    },
  ];
  refillForm: FormGroup;
  constructor(private fb: FormBuilder, public modalController: ModalController,
    private alertCtrl: AlertController, private refillS: AddRefillService, private authS: AuthService) { }

  async ngOnInit() {
    this.refillForm = this.fb.group({
      frequency: ['', [Validators.required]],
      prescriptionImage: [''],
      // frequencyInterval: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      inventoryId: [this.item.title, [Validators.required]],
      otherInformation: ['',[Validators.required]],
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileText = file.name;
      this.refillForm.get('prescriptionImage').setValue(file);
    }
  }
  saveRefill(){
    const data = new FormData();

    const obj = {
      ...this.refillForm.value,
      orderId: this.item.orderId,
      frequencyInterval: this.frequencyList.filter(e => e.value === this.frequency.value)[0].text
    };
    delete obj.inventoryId;
    this.refillS.refill(obj).subscribe(ref =>{
      this.refillS.refillListing();
      this.dismiss();
    });

  }
  dismiss(){
    this.modalController.dismiss();
  }

  get startDate() {
    return this.refillForm.get('startDate');
  }
  // get frequencyInterval() {
  //   return this.refillForm.get('frequencyInterval');
  // }
  get prescriptionImage() {
    return this.refillForm.get('prescriptionImage');
  }
  get inventoryId() {
    return this.refillForm.get('inventoryId');
  }
  get frequency() {
    return this.refillForm.get('frequency');
  }
  get otherInformation() {
    return this.refillForm.get('otherInformation');
  }

}
