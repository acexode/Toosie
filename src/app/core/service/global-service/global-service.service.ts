import { Injectable } from '@angular/core';
import {
  LocalNotifications,
  ScheduleOptions,
} from '@capacitor/local-notifications';
@Injectable({
  providedIn: 'root',
})
export class GlobalServiceService {
  constructor() {}

  async triggerNotification(title, body, id, scheduleTime) {
    const options: ScheduleOptions = {
      notifications: [
        {
          title,
          body,
          id,
          schedule: {
            at: new Date(scheduleTime),
          },
          sound: 'fanfare.wav',
          smallIcon: 'ic_stat_ionic_logo', // Android only, overrides capacitor.config setting!
          actionTypeId: 'PILL_REMINDER',
          extra: {
            custom: 'My custom data object',
          },
          attachments: [
            { id: 'face', url: 'res://public/assets/notif_image.jpg' },
          ],
        },
      ],
    };

    await LocalNotifications.schedule(options);
  }
}
