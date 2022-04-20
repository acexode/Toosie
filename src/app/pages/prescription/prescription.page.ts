/* eslint-disable @typescript-eslint/naming-convention */
import { Router } from '@angular/router';
import { PrescriptionService } from './../../core/service/prescription/prescription.service';
import { Component, OnInit } from '@angular/core';
import {
  Platform,
  ActionSheetController,
  ToastController,
} from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from 'src/app/core/service/auth/auth.service';
declare const window: any;

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.page.html',
  styleUrls: ['./prescription.page.scss'],
})
export class PrescriptionPage implements OnInit {
  id = '60d8e98f65b7290ac6383064';
  user = null;
  pharmacyTool = [
    {
      text: 'Pill Reminder',
      icon: 'pill-reminder',
      path: '/reminder',
    },
    {
      text: 'Prescription History',
      icon: 'prescription-history',
      path: '/history',
    },
  ];
  prescription = [
    {
      text: 'Submit Rx Insurance card',
      icon: 'insurance-card',
      action: '',
    },
    {
      text: 'Talk to an expert',
      icon: 'comment-bubble',
      action: 'tawkto',
    },
    //   {
    //     text: 'Manage family prescription',
    //     icon: 'family-prescription'
    // },
    {
      text: 'Prescription Savings club',
      icon: 'save-prescription',
      action: '',
    },
  ];
  constructor(
    private plt: Platform,
    private actionSheetCtrl: ActionSheetController,
    private prescriptionS: PrescriptionService,
    public toastController: ToastController,
    public router: Router,
    private authS: AuthService
  ) {
    this.authS.currentUser$.subscribe(user =>{
      this.user = user;
      console.log(this.user);
    });
  }
  ngOnInit() {}
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your prescription have been sent.',
      duration: 2000,
      position: 'top',
      cssClass: 'toastCss',
      animated: true,
    });
    toast.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  async selectImageSource() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        },
      },
      {
        text: 'Choose From Image Photo',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        },
      },
    ];

    // Only allow file selection inside a browser
    // if (!this.plt.is('hybrid')) {
    //   buttons.push({
    //     text: 'Choose a File',
    //     icon: 'attach',
    //     handler: () => {
    //       this.fileInput.nativeElement.click();
    //     }
    //   });
    // }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons,
    });
    await actionSheet.present();
  }
  async addImage(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source,
    });
    const blobData = this.b64toBlob(
      image.base64String,
      `image/${image.format}`
    );
    const imageName = 'Give me a name';
    const formData = new FormData();
    formData.append('upload', blobData);
    this.prescriptionS.uploadMedia(formData).subscribe((e) => {
      console.log(e);
      const data = {
        description: 'prescription refill',
        prescriptionImage: e.images,
        // eslint-disable-next-line no-underscore-dangle
        customerId: this.user?._id
      };
      this.prescriptionS.uploadPrescription(data).subscribe((res) => {
        console.log(res);
        this.presentToast();
      });
      this.presentToast();
    });
    // this.api.uploadImage(blobData, imageName, image.format).subscribe((newImage: ApiImage) => {
    //   this.images.push(newImage);
    // });
  }
  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  navigate(path) {
    this.router.navigate(['menu/home/prescription/' + path]);
  }

  prescriptionAction(action) {
    if (action === 'tawkto') {
      window.Tawk_API.maximize();
    }
  }
}
