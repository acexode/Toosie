import { PillReminderModalComponent } from './../../components/pill-reminder-modal/pill-reminder-modal.component';
import { PrescriptionService } from './../../core/service/prescription/prescription.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pill-reminder',
  templateUrl: './pill-reminder.page.html',
  styleUrls: ['./pill-reminder.page.scss'],
})
export class PillReminderPage implements OnInit {
  reminderList = [];

  constructor(
    private prescS: PrescriptionService,
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.prescS.getReminderList().then(e =>{
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
}
