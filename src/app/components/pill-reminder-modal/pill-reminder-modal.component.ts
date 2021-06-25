/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { LocalNotification, LocalNotificationActionPerformed, LocalNotifications } from '@capacitor/local-notifications';
@Component({
  selector: 'app-pill-reminder-modal',
  templateUrl: './pill-reminder-modal.component.html',
  styleUrls: ['./pill-reminder-modal.component.scss'],
})
export class PillReminderModalComponent implements OnInit {
  reminderForm: FormGroup;
  constructor(private fb: FormBuilder, public modalController: ModalController,private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.reminderForm = this.fb.group({
      remindTo: ['', [Validators.required]],
      description: ['', [Validators.required]],
      time: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
    await LocalNotifications.requestPermissions();
    LocalNotifications.registerActionTypes({
      types: [
        {
          id: 'CHAT_MSG',
          actions: [
            {
              id: 'view',
              title: 'Open Chat'
            },
            {
              id: 'remove',
              title: 'Dismiss',
              destructive: true
            },
            {
              id: 'respond',
              title: 'Respond',
              input: true
            }
          ]
        }
      ]
    });
     // Received when notification is executed at the scheduled time
     LocalNotifications.addListener('localNotificationReceived', (notification: LocalNotification) => {
      this.presentAlert(`Received: ${notification.title}`, `Custom Data: ${JSON.stringify(notification.extra)}`);
    });

    // Received when a special action button is clicked or notification is tapped
    LocalNotifications.addListener('localNotificationActionPerformed', (notification: LocalNotificationActionPerformed) => {
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
          schedule: { at: new Date(scheduleTime) },
          sound: 'fanfare.wav',
          smallIcon: 'ic_stat_ionic_logo', // Android only, overrides capacitor.config setting!
          actionTypeId: 'CHAT_MSG',
          extra: {
            custom: 'My custom data object'
          },
          attachments: [
            { id: 'face', url: 'res://public/assets/notif_image.jpg' }
          ],
        }
      ]
    });

  }
  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
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
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
