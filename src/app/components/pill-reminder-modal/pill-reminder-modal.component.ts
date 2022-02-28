import { ToastController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { LocalNotification, LocalNotificationActionPerformed, LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';
import { Storage } from '@capacitor/storage';
import { AddRefillService } from 'src/app/core/service/add-refill/add-refill.service';
const PILL_REMINDER = 'pill-reminder';
@Component({
  selector: 'app-pill-reminder-modal',
  templateUrl: './pill-reminder-modal.component.html',
  styleUrls: ['./pill-reminder-modal.component.scss'],
})
export class PillReminderModalComponent implements OnInit {
  reminderForm: FormGroup;
  currDate = new Date();
  constructor(private fb: FormBuilder,
    public modalController: ModalController,
    public toastController: ToastController,
    public refillS: AddRefillService,
    private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.reminderForm = this.fb.group({
      remindTo: ['', [Validators.required]],
      description: ['', [Validators.required]],
      time: ['', [Validators.required]],
      date: ['', [Validators.required]],
      frequency: ['day'],
    });
    this.date.valueChanges.subscribe(e =>{
      const  g1 = new Date(e);
      const g2 = new Date();
      g2.setHours(0);
      g2.setMinutes(0);
      g2.setSeconds(0);
      console.log(g1.getTime() === g2.getTime());
      console.log(g1.getTime() ,g2.getTime());
    });
    await LocalNotifications.requestPermissions();
    LocalNotifications.registerActionTypes({
      types: [
        {
          id: 'PILL_REMINDER',

        }
      ]
    });
     // Received when notification is executed at the scheduled time
     LocalNotifications.addListener('localNotificationReceived', (notification: LocalNotification) => {
      console.log(notification);
      this.presentAlert(`Received: ${notification.title}`, `${notification.body}`);
    });


    // Received when a special action button is clicked or notification is tapped
    LocalNotifications.addListener('localNotificationActionPerformed', (notification: LocalNotificationActionPerformed) => {
      console.log(notification);
      this.presentAlert(`Performed: ${notification.actionId}`, `Input value: ${notification.inputValue}`);
    });
  }
  async saveReminder(){
    const values = this.reminderForm.value;
    console.log(values);
    const scheduleTime = values.date + ' ' + values.time;
    console.log(scheduleTime);
    console.log(new Date(scheduleTime));
    await LocalNotifications.schedule({
      notifications: [
        {
          title: values.remindTo,
          body: values.description,
          id: 2,
          schedule: {
             at: new Date(scheduleTime),
             every: this.frequency.value
           },
          sound: 'fanfare.wav',
          smallIcon: 'ic_stat_ionic_logo', // Android only, overrides capacitor.config setting!
          actionTypeId: 'PILL_REMINDER',
          extra: {
            custom: 'My custom data object'
          },
          attachments: [
            { id: 'face', url: 'res://public/assets/notif_image.jpg' }
          ],
        }
      ],
    });

    this.presentToast('Reminder set successfully');
    this.storeReminder(values);
    this.modalController.dismiss();
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'toastCss',
      position: 'top'
    });
    toast.present();
  }
  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async storeReminder(item) {
    const reminder = await Storage.get({ key: PILL_REMINDER });
    item.id = new Date().getTime();
    if (reminder && reminder.value) {
      const parseReminder = JSON.parse(reminder.value);
      parseReminder.push(item);
      this.refillS.reminderStore.next(parseReminder);
      Storage.set({key: PILL_REMINDER, value: JSON.stringify(parseReminder)});

    } else {
      Storage.set({key: PILL_REMINDER, value: JSON.stringify([item])});
      this.refillS.reminderStore.next([item]);
      return true;
    }
  }

  // Easy access for form fields
  get remindTo() {
    return this.reminderForm.get('remindTo');
  }
  get description() {
    return this.reminderForm.get('description');
  }

  get time() {
    return this.reminderForm.get('time');
  }
  get date() {
    return this.reminderForm.get('date');
  }
  get frequency() {
    return this.reminderForm.get('frequency');
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
