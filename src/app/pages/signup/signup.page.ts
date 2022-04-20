import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';

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
  errorLogin= false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  InvalidCode = false;
  confirmP = 'password';
  credentials: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private cdref: ChangeDetectorRef,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.min(11),Validators.maxLength(11) ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async signup() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.signup(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        // this.showVerify = true;
        this.router.navigate(['menu/home']);
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
    await loading.present();
    const value = passForm.get('passcode').value;
    const obj = {
      verificationCode: value,
      email: this.email.value
    };
    console.log(value);
    this.authService.activateAccount(obj).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigate(['menu/home']);
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

}
