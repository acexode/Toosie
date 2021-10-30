import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
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
  showAddressForm = false;
  loadingAddress = false;
  title = this.show === 'profile' ? 'Profile' : 'Address';
  allAddress: any;
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private modalC: ModalController,
    private router: Router,
    private loadingController: LoadingController) {
    this.credentials = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', [Validators.required]],
    });
    this.addressForm = this.fb.group({
      state: ['', [Validators.required]],
      localGov: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
   }

   ngOnInit() {
     console.log(this.show);
     if(this.show === 'profile'){
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

     }else{
       this.getAllAddress();
     }
  }
  async getAllAddress(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.allAddress().subscribe(res =>{
      console.log(res);
      loading.dismiss();
      this.allAddress = res.address;
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
  submitAddress(){
    const value = this.addressForm.value;
    console.log(value);
    this.authService.newAddress(value).subscribe(e =>{
      this.getAllAddress();
      this.showAddressForm = false;
    });
  }
  deleteAddress(id){
    this.authService.deleteAddress(id).subscribe(e =>{
      this.getAllAddress();
    });
    console.log('delete', id);
  }
  back(){
    this.modalC.dismiss();
  }
  navigate(path){
    this.router.navigate(['menu/home/'+ path]);
  }
  // Easy access for form fields
  get fullName() {
    return this.credentials.get('fullName');
  }
  get state() {
    return this.addressForm.get('state');
  }
  get localGov() {
    return this.addressForm.get('localGov');
  }
  get addressF() {
    return this.addressForm.get('address');
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