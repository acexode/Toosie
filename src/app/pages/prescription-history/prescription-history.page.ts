/* eslint-disable no-underscore-dangle */
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { PrescriptionService } from './../../core/service/prescription/prescription.service';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
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
  prescriptionList = [];
  constructor(private pres: PrescriptionService, private authS: AuthService) { }

  ngOnInit() {
    this.authS.currentUser$.subscribe(str =>{

      this.pres.userPrescriptions(str._id).subscribe(e =>{
        console.log(e.data);
        this.prescriptionList = e.data;
      });

    });
  }

}
