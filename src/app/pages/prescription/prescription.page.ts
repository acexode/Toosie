import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.page.html',
  styleUrls: ['./prescription.page.scss'],
})
export class PrescriptionPage implements OnInit {

  constructor() { }
  pharmacyTool = [
    {
      text: 'Pill Reminder',
      icon: 'pill-reminder'
  },
  {
    text: 'Prescription History',
    icon: 'prescription-history'
  },
  ]
  prescription = [   
    {
      text: 'Submit Rx Insurance card',
      icon: 'insurance-card'
  },
    {
      text: 'Talk to an expert',
      icon: 'comment-bubble'
  },
    {
      text: 'Manage family prescription',
      icon: 'family-prescription'
  },
    {
      text: 'Prescription Savings club',
      icon: 'save-prescription'
  },
]
  ngOnInit() {
  }

}
