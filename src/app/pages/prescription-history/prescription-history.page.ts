import { PrescriptionService } from './../../core/service/prescription/prescription.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export interface PrescriptionObject {
  prescriptionImage: string;
  description?: any;
  response?: any;
  isActive: boolean;
  _id: string;
  createdAt: Date;
  id: string;
}
@Component({
  selector: 'app-prescription-history',
  templateUrl: './prescription-history.page.html',
  styleUrls: ['./prescription-history.page.scss'],
})
export class PrescriptionHistoryPage implements OnInit {
  prescriptionList$: Observable<[PrescriptionObject]> ;
  constructor(private pres: PrescriptionService) { }

  ngOnInit() {
    this.prescriptionList$ = this.pres.allPrescriptions();
  }

}
