/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { PrescriptionService } from './../../core/service/prescription/prescription.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  uploadForm: FormGroup;
  file_text = 'Upload a photo of your prescription or product';
  constructor(private formBuilder: FormBuilder,
    private pService: PrescriptionService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router,
    ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      prescriptionImage: [''],
      description: '',
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.file_text = file.name;
      this.uploadForm.get('prescriptionImage').setValue(file);
    }
  }
  async onSubmit() {
    const formData = new FormData();
    formData.append('prescriptionImage', this.uploadForm.get('prescriptionImage').value);
    formData.append('description', this.uploadForm.get('description').value);
    const loading = await this.loadingController.create();
    await loading.present();
    this.pService.uploadPrescription(formData).subscribe(
      async (res) =>{
        await loading.dismiss();
       this.displayAlert('Prescription Uploaded', 'Your order has been received, we will get back to you shortly', true);
      },
      (err) => {
        this.displayAlert('Upload Failed', 'unable to upload to prescription, try again', false);
      }
    );
  }

  async displayAlert(header, msg, uploaded){
    console.log(header);
    const alert = await this.alertController.create({
      header,
      message: msg,
      buttons: [{
        text: 'OK',
        cssClass: 'success-btn',
        handler: (blah) => {
          if(uploaded){
            this.router.navigate(['menu/home']);
          }
        }
      },],
    });
    await alert.present();
  }
}
