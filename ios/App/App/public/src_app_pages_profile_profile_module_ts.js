(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared/shared.module */ 4065);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 9291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth/auth.service */ 7083);








let ProfilePage = class ProfilePage {
    constructor(fb, authService, alertController, router, loadingController) {
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.credentials = this.fb.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
    }
    ngOnInit() {
        this.authService.currentUser().subscribe(str => {
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
    updateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.updateUser(this.credentials.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                this.router.navigate(['menu/home']);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: res.error.message,
                    message: res.error.error,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
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
};
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f4f8f5;\n  --ion-color-base: transparent !important;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.login {\n  --background: #34C3EC ;\n}\n\n.primary-text {\n  color: #0281B2;\n}\n\n.login {\n  --background: #0281B2;\n}\n\n.img-container {\n  width: 150px;\n  display: flex;\n  justify-content: center;\n}\n\n.logo {\n  width: 100%;\n  align-self: center;\n  z-index: 10;\n  margin-left: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSx3Q0FBQTtBQUNKOztBQUNDO0VBQ0ksMkJBQUE7QUFFTDs7QUFBQztFQUNJLHNCQUFBO0FBR0w7O0FBREM7RUFDQyxjQUFBO0FBSUY7O0FBQUE7RUFDQyxxQkFBQTtBQUdEOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNHLGdCQUFBO0FBSUoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNGY4ZjU7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuIC5sb2dpbntcclxuICAgICAtLWJhY2tncm91bmQ6ICMzNEMzRUNcclxuIH1cclxuIC5wcmltYXJ5LXRleHR7XHJcblx0IGNvbG9yOiAjMDI4MUIyO1xyXG4gfVxyXG5cclxuXHJcbi5sb2dpbntcclxuXHQtLWJhY2tncm91bmQ6ICMwMjgxQjI7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sb2dve1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcclxuXHR6LWluZGV4OiAxMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuICJdfQ== */");

/***/ }),

/***/ 9291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Profile\"></app-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid class=\"ion-padding container\">\r\n    <ion-row class=\"img-container\">\r\n      <ion-col  size=\"12\">\r\n        <img src=\"assets/icon/update-profile.jpg\" alt=\"\" class=\"logo\">\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"mt-16\">\r\n      <ion-col size=\"12\">\r\n        <form (ngSubmit)=\"updateUser()\" [formGroup]=\"credentials\" class=\"form-container pt-16\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Name</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"fullName\"></ion-input>\r\n          </ion-item>\r\n          <div *ngIf=\"(fullName.dirty || fullName.touched) && fullName.errors\" class=\"errors\">\r\n            <span *ngIf=\"fullName.errors?.required\">Name is required</span>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Email</ion-label>\r\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n          </ion-item>\r\n          <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\r\n            <span *ngIf=\"email.errors?.required\">Email is required</span>\r\n            <span *ngIf=\"email.errors?.email\">Email is invalid</span>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Phone</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"phone\"></ion-input>\r\n          </ion-item>\r\n          <div *ngIf=\"(phone.dirty || phone.touched) && phone.errors\" class=\"errors\">\r\n            <span *ngIf=\"phone.errors?.required\">phone is required</span>\r\n            <span *ngIf=\"phone.errors?.minlength\">phone needs to be 8 characters</span>\r\n          </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Address</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"address\"></ion-input>\r\n          </ion-item>\r\n          <div *ngIf=\"(address.dirty || address.touched) && address.errors\" class=\"errors\">\r\n            <span *ngIf=\"address.errors?.required\">address is required</span>\r\n          </div>\r\n          <ion-button class=\"success-btn mt-32\" type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Update</ion-button>\r\n    \r\n         \r\n        </form>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map