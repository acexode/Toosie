(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/service/auth/auth.service */ 7083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);








let LoginPage = class LoginPage {
    constructor(fb, authService, alertController, router, loadingController) {
        this.fb = fb;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.hide = true;
    }
    ngOnInit() {
        this.credentials = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.authService.login(this.credentials.value).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                this.router.navigate(['menu/home']);
            }), (res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                yield loading.dismiss();
                const alert = yield this.alertController.create({
                    header: 'Login failed',
                    message: res.error.error,
                    buttons: ['OK'],
                });
                yield alert.present();
            }));
        });
    }
    // Easy access for form fields
    get email() {
        return this.credentials.get('email');
    }
    get password() {
        return this.credentials.get('password');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _core_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #f4f8f5;\n  --ion-color-base: transparent !important;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.login {\n  --background: #34C3EC ;\n}\n\n.primary-text {\n  color: #0281B2;\n}\n\n.container::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 85%;\n  background-image: url('path.png');\n  background-position: top center;\n  background-repeat: no-repeat;\n  border-bottom-left-radius: 40%;\n  border-bottom-right-radius: 40%;\n}\n\n.form-container {\n  width: 311px;\n  height: 431px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  position: absolute;\n  z-index: 10;\n  padding: 20px 16px;\n  top: 25%;\n  left: 8%;\n}\n\n.login {\n  --background: #0281B2;\n}\n\nh6 {\n  text-align: center;\n  color: #fff;\n  margin: 20px 0px;\n  position: absolute;\n  z-index: 10;\n  top: 15%;\n}\n\n.logo {\n  width: 40%;\n  position: absolute;\n  top: 6%;\n  z-index: 10;\n  margin: 0 20%;\n}\n\nsignup-page .signup-content .legal-stuff {\n  text-align: center;\n  margin: 10px 12px;\n}\n\nsignup-page .signup-content .legal-stuff .legal-action {\n  font-weight: 500;\n}\n\n.errors {\n  font-size: small;\n  color: #df4141;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFDQztFQUNJLDJCQUFBO0FBRUw7O0FBQUM7RUFDSSxzQkFBQTtBQUdMOztBQURDO0VBQ0MsY0FBQTtBQUlGOztBQUZBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUFLRDs7QUFIQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFNRDs7QUFKQTtFQUNDLHFCQUFBO0FBT0Q7O0FBTEE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0csV0FBQTtFQUNILFFBQUE7QUFRRDs7QUFMQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQVFEOztBQUhFO0VBR0Msa0JBQUE7RUFDQSxpQkFBQTtBQUlIOztBQUZHO0VBRUMsZ0JBQUE7QUFHSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjhmNTtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmxvZ2lue1xyXG4gICAgIC0tYmFja2dyb3VuZDogIzM0QzNFQ1xyXG4gfVxyXG4gLnByaW1hcnktdGV4dHtcclxuXHQgY29sb3I6ICMwMjgxQjI7XHJcbiB9XHJcbi5jb250YWluZXI6OmFmdGVye1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDg1JTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb24vcGF0aC5wbmcpO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0MCU7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwJTtcclxufVxyXG4uZm9ybS1jb250YWluZXJ7XHJcblx0d2lkdGg6IDMxMXB4O1xyXG5cdGhlaWdodDogNDMxcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMiUpIDBweCA0cHggMTZweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTA7XHJcblx0cGFkZGluZzogMjBweCAxNnB4O1xyXG5cdHRvcDogMjUlO1xyXG5cdGxlZnQ6IDglO1xyXG59XHJcbi5sb2dpbntcclxuXHQtLWJhY2tncm91bmQ6ICMwMjgxQjI7XHJcbn1cclxuaDZ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdG1hcmdpbjogMjBweCAwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcblx0dG9wOiAxNSU7XHJcbn1cclxuXHJcbi5sb2dve1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNiU7XHJcblx0ei1pbmRleDogMTA7XHJcblx0bWFyZ2luOiAwIDIwJTtcclxufVxyXG4gc2lnbnVwLXBhZ2Uge1xyXG5cdC5zaWdudXAtY29udGVudFxyXG5cdHtcclxuXHRcdC5sZWdhbC1zdHVmZlxyXG5cdFx0e1xyXG5cdFx0XHQvLyBjb2xvcjogJHdoaXRlLWQ7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0bWFyZ2luOiAxMHB4IDEycHg7XHJcblxyXG5cdFx0XHQubGVnYWwtYWN0aW9uXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRcdC8vIGNvbG9yOiAkdGhlbWUtY29sb3ItMjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uZXJyb3JzIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogcmdiKDIyMywgNjUsIDY1KTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header no-border>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <ion-button fill=\"clear\" color=\"dark\" type=\"back\">\r\n        <ion-icon  transparent name=\"arrow-left\"></ion-icon>\r\n      </ion-button>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"ion-padding container mt-32\">\r\n    <img src=\"assets/icon/logo-big.png\" alt=\"\" class=\"logo\">\r\n    <h6>Fill the following instructions to login</h6>\r\n    <form (ngSubmit)=\"login()\" [formGroup]=\"credentials\" class=\"form-container pt-16\">\r\n      <h1 class=\"ion-text-center primary-text\">Login</h1>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input type=\"email\"  formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n      <div *ngIf=\"(email.dirty || email.touched) && email.errors\" class=\"errors\">\r\n        <span *ngIf=\"email.errors?.required\">Email is required</span>\r\n        <span *ngIf=\"email.errors?.email\">Email is invalid</span>\r\n      </div>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input  [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\"></ion-input>        \r\n        <ion-icon class=\"mt-15\" (click)=\"hide = !hide\" name=\"eye\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n      <div *ngIf=\"(password.dirty || password.touched) && password.errors\" class=\"errors\">\r\n        <span *ngIf=\"password.errors?.required\">Password is required</span>\r\n        <span *ngIf=\"password.errors?.minlength\">Password needs to be 6 characters</span>\r\n      </div>\r\n\r\n      <ion-button expand=\"block\" class=\"login mt-32\" type=\"submit\" [disabled]=\"!credentials.valid\">Log in</ion-button>\r\n\r\n      <div class=\"flex sign-up\">\r\n        <ion-label class=\"pt-11\">\r\n          Don't have an account?\r\n        </ion-label> \r\n        <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/signup\" routerDirection=\"forward\">Sign up</ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-button expand=\"block\" routerLink=\"/menu/home\">Login</ion-button> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map