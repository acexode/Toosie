import { AuthService } from './../../core/service/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  forgotPassword: FormGroup;
  hide = true;
  showForgotPasswordPage = false;
  showForgotPasswordPageComplete = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((isAuth) => {
      console.log(isAuth);
      if (isAuth) {
        // Directly open inside area
        this.router.navigate(['menu/home']);
      }
    });
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.forgotPassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      verificationCode: [''],
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigate(['menu/home']);
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: res.error.error,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }
  async submitForgotPassword() {
    const loading = await this.loadingController.create();
    await loading.present();
    if (!this.showForgotPasswordPageComplete) {
      this.authService
        .forgotPasswordInitiate({ email: this.femail.value })
        .subscribe(
          async (res) => {
            await loading.dismiss();
            this.showForgotPasswordPageComplete = true;
            this.reqFailed(
              'Success',
              'A verification token has been sent to your email'
            );
          },
          async (res) => {
            console.log(res);
            await loading.dismiss();
            this.reqFailed(res?.error?.error, 'Request failed');
          }
        );
    } else {
      this.authService
        .forgotPasswordComplete(this.forgotPassword.value)
        .subscribe(
          async (res) => {
            await loading.dismiss();
            this.reqFailed('Success', 'Password changed successfully');
            this.showForgotPasswordPage = false;
          },
          async (res) => {
            console.log(res);
            await loading.dismiss();
            this.reqFailed(res?.error?.error, 'Request failed');
          }
        );
    }
  }

  async reqFailed(res, msg) {
    const alert = await this.alertController.create({
      header: msg,
      message: res,
      buttons: ['OK'],
    });

    await alert.present();
  }
  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }
  get femail() {
    return this.forgotPassword.get('email');
  }
  get fpwd() {
    return this.forgotPassword.get('password');
  }

  get password() {
    return this.credentials.get('password');
  }
}
