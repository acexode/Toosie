import { prescriptionEndpoints, miscEndpoint } from './../../config/endpoints';
import { RequestService } from './../../request/request.service';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
const REMINDER_KEY = 'pill-reminder';
import { Storage } from '@capacitor/storage';
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
  uploadPrescription(formData): Observable<any> {
    return this.reqS.post(prescriptionEndpoints.newPrecription, formData);
  }
  uploadMedia(formData): Observable<any> {
    return this.reqS.post(miscEndpoint.mediaUpload,formData);
  }
  allPrescriptions(): Observable<any> {
    return this.reqS.get(prescriptionEndpoints.usersPrescription + '/1').pipe(
                map((data: any) =>  data.prescription
                )
               );
  }
}
