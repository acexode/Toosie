import { prescriptionEndpoints, miscEndpoint, baseEndpoints } from './../../config/endpoints';
import { RequestService } from './../../request/request.service';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
const REMINDER_KEY = 'pill-reminder';
import {  Preferences as Storage } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private reqS: RequestService) {

  }
  async getReminderList() {
    const list = await Storage.get({ key: REMINDER_KEY });
    return (list && list.value) ? list.value : '[]';
  }
  uploadMedia(formData): Observable<any> {
    return this.reqS.post(miscEndpoint.mediaUpload,formData);
  }
  uploadPrescription(formData): Observable<any> {
    return this.reqS.post(baseEndpoints.prescription, formData);
  }
  creatPrescription(formData): Observable<any> {
    return this.reqS.post(baseEndpoints.prescription, formData);
  }

  allPrescriptions(): Observable<any> {
    return this.reqS
      .get(baseEndpoints.prescription)
      .pipe(map((data: any) => data.prescription));
  }
  userPrescriptions(id): Observable<any> {
    return this.reqS
      .get(baseEndpoints.prescription + '?customerId=' + id);
  }
}
