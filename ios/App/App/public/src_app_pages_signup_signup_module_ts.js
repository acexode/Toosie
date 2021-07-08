(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 4374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 4374);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 4374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1979);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 9233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth/auth.service */ 7083);








let SignupPage = class SignupPage {
    constructor(fb, authService, alertController, router, cdref, loadingController) {
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.cdref = cdref;
        this.loadingController = loadingController;
        this.pwd = 'password';
        this.hide = true;
        this.hideConfirm = true;
        this.confirmP = 'password';
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
        });
    }
    signup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.signup(this.credentials.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    get password() {
        return this.credentials.get('password');
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 9233:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f4f8f5;\n  --ion-color-base: transparent !important;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.login {\n  --background: #34C3EC ;\n}\n\n.primary-text {\n  color: #0281B2;\n}\n\n.container::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 85%;\n  background-image: url('path.png');\n  background-position: top center;\n  background-repeat: no-repeat;\n  border-bottom-left-radius: 40%;\n  border-bottom-right-radius: 40%;\n}\n\n.form-container {\n  width: 311px;\n  height: 431px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  position: absolute;\n  z-index: 10;\n  padding: 20px 16px;\n  top: 25%;\n  left: 8%;\n}\n\n.login {\n  --background: #0281B2;\n}\n\nh6 {\n  text-align: center;\n  color: #fff;\n  margin: 20px 0px;\n  position: absolute;\n  z-index: 10;\n  top: 15%;\n}\n\n.logo {\n  width: 40%;\n  position: absolute;\n  top: 6%;\n  z-index: 10;\n  margin: 0 20%;\n}\n\nsignup-page .signup-content .legal-stuff {\n  text-align: center;\n  margin: 10px 12px;\n}\n\nsignup-page .signup-content .legal-stuff .legal-action {\n  font-weight: 500;\n}\n\n.errors {\n  font-size: small;\n  color: #df4141;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBQ0M7RUFDSSwyQkFBQTtBQUVMOztBQUFDO0VBQ0ksc0JBQUE7QUFHTDs7QUFEQztFQUNDLGNBQUE7QUFJRjs7QUFGQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBS0Q7O0FBSEE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBTUQ7O0FBSkE7RUFDQyxxQkFBQTtBQU9EOztBQUxBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNHLFdBQUE7RUFDSCxRQUFBO0FBUUQ7O0FBTEE7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFRRDs7QUFIRTtFQUdDLGtCQUFBO0VBQ0EsaUJBQUE7QUFJSDs7QUFGRztFQUVDLGdCQUFBO0FBR0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjRmOGY1O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuIH1cclxuIC5oZWFkZXItbWQ6OmFmdGVyIHtcclxuICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAubG9naW57XHJcbiAgICAgLS1iYWNrZ3JvdW5kOiAjMzRDM0VDXHJcbiB9XHJcbiAucHJpbWFyeS10ZXh0e1xyXG5cdCBjb2xvcjogIzAyODFCMjtcclxuIH1cclxuLmNvbnRhaW5lcjo6YWZ0ZXJ7XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogODUlO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbi9wYXRoLnBuZyk7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQwJTtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDAlO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lcntcclxuXHR3aWR0aDogMzExcHg7XHJcblx0aGVpZ2h0OiA0MzFweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDEyJSkgMHB4IDRweCAxNnB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRwYWRkaW5nOiAyMHB4IDE2cHg7XHJcblx0dG9wOiAyNSU7XHJcblx0bGVmdDogOCU7XHJcbn1cclxuLmxvZ2lue1xyXG5cdC0tYmFja2dyb3VuZDogIzAyODFCMjtcclxufVxyXG5oNntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bWFyZ2luOiAyMHB4IDBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHR0b3A6IDE1JTtcclxufVxyXG5cclxuLmxvZ297XHJcblx0d2lkdGg6IDQwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA2JTtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRtYXJnaW46IDAgMjAlO1xyXG59XHJcbiBzaWdudXAtcGFnZSB7XHJcblx0LnNpZ251cC1jb250ZW50XHJcblx0e1xyXG5cdFx0LmxlZ2FsLXN0dWZmXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbG9yOiAkd2hpdGUtZDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRtYXJnaW46IDEwcHggMTJweDtcclxuXHJcblx0XHRcdC5sZWdhbC1hY3Rpb25cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0Ly8gY29sb3I6ICR0aGVtZS1jb2xvci0yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5lcnJvcnMge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiByZ2IoMjIzLCA2NSwgNjUpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 1979:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <ion-button fill=\"clear\" color=\"dark\" type=\"back\">\r\n        <ion-icon  transparent name=\"arrow-left\"></ion-icon>\r\n      </ion-button>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"ion-padding container mt-32\">\r\n    <img src=\"assets/icon/logo-big.png\" alt=\"\" class=\"logo\">\r\n    <h6>Fill the following instructions to Sign Up</h6>\r\n    <form (ngSubmit)=\"signup()\" [formGroup]=\"credentials\" class=\"form-container pt-16\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Name</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"fullName\"></ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"(fullName.dirty || fullName.touched) && fullName.errors\" class=\"errors\">\r\n        <span *ngIf=\"fullName.errors?.required\">Full Name is required</span>\r\n        <span *ngIf=\"fullName.errors?.email\">Full Name is invalid</span>\r\n      </div>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\r\n        <span *ngIf=\"email.errors?.required\">Email is required</span>\r\n        <span *ngIf=\"email.errors?.email\">Email is invalid</span>\r\n      </div>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input  [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\"></ion-input>\r\n        \r\n        <ion-icon class=\"mt-15\" (click)=\"hide = !hide\" name=\"eye\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\r\n        <span *ngIf=\"password.errors?.required\">Password is required</span>\r\n        <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\r\n      </div>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Confirm Password</ion-label>\r\n        <ion-input [type]=\"hideConfirm ? 'password' : 'text'\"></ion-input>\r\n        <ion-icon class=\"mt-15\" (click)=\"hideConfirm = !hideConfirm\" name=\"eye\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-button class=\"login mt-32\" type=\"submit\" expand=\"block\" [disabled]=\"!credentials.valid\">Sign up</ion-button>\r\n\r\n      <div class=\"flex sign-up\">\r\n        <ion-label class=\"pt-11\">\r\n          Already have an account?\r\n        </ion-label> \r\n        <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/login\" routerDirection=\"forward\">Login</ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-button expand=\"block\" routerLink=\"/menu/home\">Login</ion-button> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map