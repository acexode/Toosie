import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  credentials: FormGroup;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
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
      this.credentials.patchValue({
        email: user.email,
        phone: user.phone,
        fullName: user.fullName,
        address: user.address,
      });
    });
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
