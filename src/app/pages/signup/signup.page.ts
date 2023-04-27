/* eslint-disable no-underscore-dangle */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import {  Preferences as Storage } from '@capacitor/preferences';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  pwd = 'password';
  hide = true;
  hideConfirm = true;
  showVerify = false;
  errorLogin = false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  InvalidCode = false;
  confirmP = 'password';
  credentials: FormGroup;
  showResend = false;
  signupResponse = null;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private cdref: ChangeDetectorRef,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.min(11), Validators.maxLength(11)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    if (this.showVerify) {
      setTimeout(() => {
        this.showResend = true;
      }, 30000);
    }
  }

  ionViewDidEnter() {
    console.log('first');
    Storage.get({ key: 'current-user' }).then((val) => {
      console.log(val);
      if (val.value) {
        this.signupResponse = JSON.parse(val.value);
        if (!this.signupResponse.isActivated) {
          this.showVerify = true;
        }
        console.log(this.signupResponse);
      }
    });
  }

  async signup() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.signup(this.credentials.value).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();
        this.showVerify = true;
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: res.error.message,
          message: res.error.error,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  async resendOTP() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.resendOTP({ email: this.signupResponse.email }).subscribe(
      async (e) => {
        this.displayAlert('New OTP Code Sent', 'check your inbox');
        await loading.dismiss();
      },
      async (err) => {
        this.displayAlert('Failed to send otp', err.message);
        await loading.dismiss();
      }
    );
  }

  async displayAlert(header, msg) {
    const alert = await this.alertController.create({
      header,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }

  // Easy access for form fields
  get fullName() {
    return this.credentials.get('fullName');
  }
  get email() {
    return this.credentials.get('email');
  }
  get phone() {
    return this.credentials.get('phone');
  }

  get password() {
    return this.credentials.get('password');
  }
  async continue(passForm: FormGroup) {
    const loading = await this.loadingController.create();
    const store = await Storage.get({ key: 'current-user' });
    const user = JSON.parse(store.value);
    await loading.present();
    const value = passForm.get('passcode').value;

    const obj = {
      otp: value,
      email: user.email,
    };
    console.log(value);
    this.authService.activateAccount(obj, user?._id).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigate(['menu/home']);
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        this.errorLogin = res.error.message;
        this.InvalidCode = true;
        console.log(passForm);
        setTimeout(() => {
          this.InvalidCode = false;
        }, 3000);
        const alert = await this.alertController.create({
          header: res.error.message,
          message: res.error.error,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }
}
