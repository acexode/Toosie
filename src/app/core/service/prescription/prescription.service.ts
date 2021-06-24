import { prescriptionEndpoints } from './../../config/endpoints';
import { RequestService } from './../../request/request.service';
import { Injectable } from '@angular/core';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private reqS: RequestService) { 

  }

  uploadPrescription(formData): Observable<any> {
    return this.reqS.post(prescriptionEndpoints.newPrecription, formData)
  }
}
