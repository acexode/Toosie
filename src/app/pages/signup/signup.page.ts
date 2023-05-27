/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { Preferences as Storage } from '@capacitor/preferences';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { TermsAndConditionComponent } from 'src/app/components/terms-and-condition/terms-and-condition.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  pwd = 'password';
  countDown: Subscription;
  counter = 60;
  showVerifySubject: BehaviorSubject<any> = new BehaviorSubject(false);
  tick = 1000;
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
    private modalController: ModalController,
    private router: Router,
    private cdref: ChangeDetectorRef,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.showVerifySubject.subscribe((v) => {
      if (this.showVerify) {
        this.countDown = timer(0, this.tick).subscribe(() => {
          if (this.counter > 0) {
            --this.counter;
            this.showResend = true;
          }
        });
      }
    });
    this.credentials = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required,Validators.minLength(11), Validators.maxLength(11)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      agree: [false, [Validators.required]],
    });
    this.credentials.valueChanges.subscribe((v) => {
      if (!v.agree) {
        this.agree.setErrors({ valid: false });
      } else {
        this.agree.setErrors(null);
      }
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
          //this.showVerifySubject.next(true);
          this.resendOTP();
        }
        console.log(this.signupResponse);
      }
    });
  }

  async signup(code) {
    const loading = await this.loadingController.create();
    await loading.present();
    const { agree, ...mainValues } = this.credentials.value;
    const value = {
      ...mainValues,
      ...code,
    };
    this.authService.signup(value).subscribe(
      async (res) => {
        console.log(res);
        await loading.dismiss();
        this.showVerify = true;
        this.showVerifySubject.next(true);
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
        this.displayAlert('New OTP Code Sent', 'check your Email');
        await loading.dismiss();
        this.showResend = false;
        this.showVerifySubject.next(true);
        this.counter = 60;
      },
      async (err) => {
        this.displayAlert('Failed to send otp', err.message);
        // await loading.dismiss();
      }
    );
  }
  async addReferalCode() {
    const alert = await this.alertController.create({
      subHeader: 'Referal Code',
      message: 'Enter Referrer code if any or dismiss if none',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => {
            this.signup({ referrerToken: null });
          },
        },
        {
          text: 'Continue',
          handler: (data) => {
            console.log(data);
            this.signup(data);
            // this.modal.dismiss();
            // this.router.navigateByUrl('menu/home/tab1');
          },
        },
      ],
      inputs: [
        {
          placeholder: 'Referrer Code',
          name: 'referrerToken',
        },
      ],
    });

    await alert.present();
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
  get agree() {
    return this.credentials.get('agree');
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

  async showTermsAndCondtion() {
    const modal = await this.modalController.create({
      component: TermsAndConditionComponent,
      cssClass: '',
    });
    await modal.present();
  }

  ngOnDestroy() {
    this.countDown = null;
  }
}
