/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { PrescriptionService } from './../../core/service/prescription/prescription.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth/auth.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  uploadForm: FormGroup;
  upload_label = 'Upload a photo of your prescription or product';
  file_text = this.upload_label;
  file;
  user: any;
  constructor(
    private formBuilder: FormBuilder,
    private pService: PrescriptionService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router,
    private authS: AuthService
  ) {
    this.authS.currentUser$.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      prescriptionImage: [''],
      description: ['', Validators.required],
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
      this.file_text = this.file.name;

      // this.uploadForm.get('prescriptionImage').setValue(this.file);
    }
  }
  async onSubmit() {
    const formData = new FormData();
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      if (this.file) {
        formData.append('upload', this.file);
        const upload = await this.pService.uploadMedia(formData).toPromise();
        const data = {
          description: this.uploadForm.get('description').value,
          prescriptionImage: upload.images[0],
          customerId: this.user?._id,
        };
        this.pService.uploadPrescription(data).subscribe(async (d) => {
          await loading.dismiss();
          this.uploadForm.reset();
          this.file_text = this.upload_label;
          this.displayAlert(
            'Prescription Uploaded',
            'Your order has been received, we will get back to you shortly',
            true
          );
        });
      } else {
        const data = {
          description: this.uploadForm.get('description').value,
          customerId: this.user?._id,
        };
        this.pService.uploadPrescription(data).subscribe(async (d) => {
          await loading.dismiss();
          this.uploadForm.reset();
          this.file_text = this.upload_label;
          this.displayAlert(
            'Prescription Uploaded',
            'Your order has been received, we will get back to you shortly',
            true
          );
        });
      }
    } catch (error) {
      await loading.dismiss();
      this.displayAlert(
        'Upload Failed',
        'unable to upload to prescription, try again',
        false
      );
    }
  }

  async displayAlert(header, msg, uploaded) {
    console.log(header);
    const alert = await this.alertController.create({
      header,
      message: msg,
      buttons: [
        {
          text: 'OK',
          cssClass: 'success-btn',
          handler: (blah) => {
            if (uploaded) {
              this.router.navigate(['menu/home']);
            }
          },
        },
      ],
    });
    await alert.present();
  }

  get prescriptionDescription() {
    return this.uploadForm.get('description');
  }
}
