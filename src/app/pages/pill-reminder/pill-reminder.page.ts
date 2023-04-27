import { PillReminderModalComponent } from './../../components/pill-reminder-modal/pill-reminder-modal.component';
import { PrescriptionService } from './../../core/service/prescription/prescription.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import {  Preferences as Storage } from '@capacitor/preferences';
import { AddRefillService } from 'src/app/core/service/add-refill/add-refill.service';
const PILL_REMINDER = 'pill-reminder';
@Component({
  selector: 'app-pill-reminder',
  templateUrl: './pill-reminder.page.html',
  styleUrls: ['./pill-reminder.page.scss'],
})
export class PillReminderPage implements OnInit {
  reminderList = [];

  constructor(
    private prescS: PrescriptionService,
    private refillS: AddRefillService,
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.refillS.reminderStore.subscribe(e =>{
      console.log(e);
      this.reminderList = e;
    });
    this.prescS.getReminderList().then((e: any) =>{
      console.log(e);
      this.reminderList = JSON.parse(e);
      console.log(e);
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: PillReminderModalComponent,
      cssClass: 'fullscreen'
    });
    await modal.present();
  }
  async removeReminder(item) {
    const reminder = await Storage.get({ key: PILL_REMINDER });
    if (reminder && reminder.value) {
      const parseReminder = JSON.parse(reminder.value);
      const filt = parseReminder.filter(f => f.id !== item.id);
      this.refillS.reminderStore.next(filt);
      Storage.set({key: PILL_REMINDER, value: JSON.stringify(filt)});

    }
  }
}
