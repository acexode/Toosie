/* eslint-disable no-underscore-dangle */
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-profile-components',
  templateUrl: './profile-components.component.html',
  styleUrls: ['./profile-components.component.scss'],
})
export class ProfileComponentsComponent implements OnInit {
  @Input() show = 'Profile';
  credentials: FormGroup;
  addressForm: FormGroup;
  changePasswordForm: FormGroup;
  showAddressForm = false;
  loadingAddress = false;
  title = 'Edit Profile';
  allAddress: any;
  user: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private modalC: ModalController,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.credentials = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      state: ['', [Validators.required]],
      localGov: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
    });
    this.addressForm = this.fb.group({
      state: ['', [Validators.required]],
      localGov: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.title = this.show === 'profile' ? 'Edit Profile' : 'Change Password';
    console.log(this.show);
    if (this.show === 'profile') {
      this.authService.currentUser().subscribe((str) => {
        this.user = JSON.parse(str.value);

        this.credentials.patchValue({
          email: this.user.email,
          phone: this.user.phone,
          fullName: this.user.fullName,
          state: this.user.address.state,
          localGov: this.user.address.localGov,
          address: this.user.address.address,
        });
      });
    } else {
      //  this.getAllAddress();
    }
  }
  async getAllAddress() {
    const loading = await this.loadingController.create();
    await loading.present();
    // this.authService.allAddress().subscribe(res =>{
    //   console.log(res);
    //   loading.dismiss();
    //   this.allAddress = res.address;
    // }, err => {
    //   console.log(err);
    //   loading.dismiss();
    // });
  }

  async updateUser() {
    const loading = await this.loadingController.create();
    await loading.present();
    const { localGov, state, address, ...slice } = this.credentials.value;
    console.log(slice);
    const fValue = {
      ...slice,
      address: {
        localGov,
        state,
        address,
      },
    };
    console.log(fValue);
    this.authService.updateUser(this.user._id, fValue).subscribe(
      async (res) => {
        await loading.dismiss();
        this.displayAlert('Success', 'Your profile has been updated');
        this.router.navigate(['menu/home']);
      },
      async (res) => {
        console.log(res);
        await loading.dismiss();
        this.displayAlert('Updated Failed', res.error.message);
      }
    );
  }

  async displayAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async updatePassword() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.currentUser().subscribe((str) => {
      this.user = JSON.parse(str.value);
      console.log(this.user);

      const update = {
        ...this.changePasswordForm.value,
        email: this.user?.email,
      };
      this.authService.changePassword(update).subscribe(
        async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Success',
            message: 'Password changed successfully',
            buttons: ['OK'],
          });
          this.changePasswordForm.reset();
          alert.present();
          this.router.navigate(['menu/home']);
        },
        async (res) => {
          console.log(res?.error);
          await loading.dismiss();
          this.changePasswordForm.reset();
          const alert = await this.alertController.create({
            header: 'Failed',
            message: res?.error.message,
            buttons: ['OK'],
          });

          await alert.present();
        }
      );
    });
  }
  submitAddress() {
    const value = this.addressForm.value;
    console.log(value);
    this.authService.newAddress(value).subscribe((e) => {
      this.getAllAddress();
      this.showAddressForm = false;
    });
  }
  deleteAddress(id) {
    this.authService.deleteAddress(id).subscribe((e) => {
      this.getAllAddress();
    });
    console.log('delete', id);
  }
  back() {
    this.modalC.dismiss();
  }
  navigate(path) {
    this.router.navigate(['menu/home/' + path]);
  }
  // Easy access for form fields
  get fullName() {
    return this.credentials.get('fullName');
  }
  get state() {
    return this.credentials.get('state');
  }
  get localGov() {
    return this.credentials.get('localGov');
  }
  get addressF() {
    return this.credentials.get('address');
  }
  get email() {
    return this.credentials.get('email');
  }

  get phone() {
    return this.credentials.get('phone');
  }
  get address() {
    return this.credentials.get('address');
  }
}
