import { ProfileComponentsComponent } from './../../components/profile-components/profile-components.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  credentials: FormGroup;
  addressForm: FormGroup;
  user;
  showAddressForm = false;
  items = [
    {
      title: 'My Orders',
      url: '/menu/home/my-orders',
      icon: 'shopping-cart',
      autoNav: false
    },
    {
      title: 'My Prescription',
      url: '/menu/home/prescription',
      icon: 'file-plus',
      autoNav: false

    }
  ];
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private modalController: ModalController,
    private loadingController: LoadingController) {
      this.credentials = this.fb.group({
        fullName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(8)]],
        address: ['', [Validators.required]],
      });

    }

  ngOnInit() {
    this.authService.currentUser().subscribe(str =>{
      const user = JSON.parse(str.value);
      console.log(user);
      this.user = user;
      this.credentials.patchValue({
        email: user.email,
        phone: user.phone,
        fullName: user.fullName,
        address: user.address,
      });
    });
  }
  async presentModal(show) {
    const modal = await this.modalController.create({
      component: ProfileComponentsComponent,
      cssClass: 'fullscreen',
      componentProps: {
        show
      }
    });
    await modal.present();
  }
  async updateUser() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.updateUser(this.credentials.value).subscribe(
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
  back(){

  }
  navigate(path){
    this.router.navigate(['menu/home/'+ path]);
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
  get address() {
    return this.credentials.get('address');
  }
}
