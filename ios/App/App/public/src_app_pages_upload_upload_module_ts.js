(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_upload_upload_module_ts"],{

/***/ 7361:
/*!*******************************************************!*\
  !*** ./src/app/pages/upload/upload-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPageRoutingModule": () => (/* binding */ UploadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload.page */ 9627);




const routes = [
    {
        path: '',
        component: _upload_page__WEBPACK_IMPORTED_MODULE_0__.UploadPage
    }
];
let UploadPageRoutingModule = class UploadPageRoutingModule {
};
UploadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadPageRoutingModule);



/***/ }),

/***/ 5411:
/*!***********************************************!*\
  !*** ./src/app/pages/upload/upload.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPageModule": () => (/* binding */ UploadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-routing.module */ 7361);
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.page */ 9627);








let UploadPageModule = class UploadPageModule {
};
UploadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _upload_routing_module__WEBPACK_IMPORTED_MODULE_1__.UploadPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_upload_page__WEBPACK_IMPORTED_MODULE_2__.UploadPage]
    })
], UploadPageModule);



/***/ }),

/***/ 9627:
/*!*********************************************!*\
  !*** ./src/app/pages/upload/upload.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadPage": () => (/* binding */ UploadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_upload_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./upload.page.html */ 9682);
/* harmony import */ var _upload_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.page.scss */ 9862);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _core_service_prescription_prescription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/service/prescription/prescription.service */ 8230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);



/* eslint-disable @typescript-eslint/naming-convention */





let UploadPage = class UploadPage {
    constructor(formBuilder, pService, loadingController, alertController, router) {
        this.formBuilder = formBuilder;
        this.pService = pService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.file_text = 'Upload a photo of your prescription or product';
    }
    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
            prescriptionImage: [''],
            description: '',
        });
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            console.log(file);
            this.file_text = file.name;
            this.uploadForm.get('prescriptionImage').setValue(file);
        }
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const formData = new FormData();
            formData.append('prescriptionImage', this.uploadForm.get('prescriptionImage').value);
            formData.append('description', this.uploadForm.get('description').value);
            const loading = yield this.loadingController.create();
            yield loading.present();
            this.pService.uploadPrescription(formData).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                this.displayAlert('Prescription Uploaded', 'Your order has been received, we will get back to you shortly', true);
            }), (err) => {
                this.displayAlert('Upload Failed', 'unable to upload to prescription, try again', false);
            });
        });
    }
    displayAlert(header, msg, uploaded) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(header);
            const alert = yield this.alertController.create({
                header,
                message: msg,
                buttons: [{
                        text: 'OK',
                        cssClass: 'success-btn',
                        handler: (blah) => {
                            if (uploaded) {
                                this.router.navigate(['menu/home']);
                            }
                        }
                    },],
            });
            yield alert.present();
        });
    }
};
UploadPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _core_service_prescription_prescription_service__WEBPACK_IMPORTED_MODULE_2__.PrescriptionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
UploadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-upload',
        template: _raw_loader_upload_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_upload_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UploadPage);



/***/ }),

/***/ 9862:
/*!***********************************************!*\
  !*** ./src/app/pages/upload/upload.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  width: 100%;\n}\n\n.btn {\n  border: 1px dashed #67e9b7;\n  color: gray;\n  background-color: white;\n  padding: 8px 20px;\n  border-radius: 8px;\n  width: 100%;\n}\n\n.icon-container {\n  background: #e6faf2;\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.icon-container ion-icon {\n  font-size: 28px;\n  color: #67e9b7;\n}\n\n.upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n\n.border-b {\n  border-bottom: 1px solid #d6d1d1;\n  margin-bottom: 15px;\n}\n\nion-textarea {\n  background: #E2E3E5;\n  color: #000;\n  border-radius: 3px;\n}\n\n.alert-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVOOztBQURNO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFHVjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFHSjs7QUFERTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7QUFJTjs7QUFGRTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBS047O0FBSEU7RUFDSSxrQkFBQTtBQU1OIiwiZmlsZSI6InVwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWJ0bi13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiKDEwMywgMjMzLCAxODMpO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5pY29uLWNvbnRhaW5lcntcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjUwLCAyNDIpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxMDMsIDIzMywgMTgzKTtcclxuICAgICAgfVxyXG4gIH1cclxuICAudXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuYm9yZGVyLWJ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE0LCAyMDksIDIwOSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIGlvbi10ZXh0YXJlYXtcclxuICAgICAgYmFja2dyb3VuZDogI0UyRTNFNTtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgLmFsZXJ0LXRpdGxle1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 9682:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/upload/upload.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Upload Prescription\"></app-header>\r\n\r\n<ion-content>\r\n  <form  [formGroup] = \"uploadForm\" (ngSubmit)=\"onSubmit()\" >\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-card>\r\n          <ion-card-content class=\"p-8\">\r\n            <div class=\"card upload-btn-wrapper\">\r\n              <div class=\"btn flex p-20\">\r\n                <div class=\"icon-container\">\r\n                  <ion-icon name=\"file-plus\"></ion-icon>\r\n                </div>\r\n                <ion-text class=\"pl-16 pt-6\">\r\n                  {{file_text}}\r\n                </ion-text>\r\n              </div>\r\n              <input type=\"file\" (change)=\"onFileSelect($event)\" formcontrolName=\"prescriptionImage\" />\r\n            </div>\r\n            \r\n          </ion-card-content>\r\n\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"5\"  class=\"border-b\"></ion-col>\r\n      <ion-col size=\"2\" class=\"pt-10 ion-text-center\" >\r\n        <ion-text class=\"\">OR</ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"5\" class=\"border-b\"></ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"mt-10 flex ion-justify-content-center\">\r\n      <ion-col size=\"2\" class=\"ion-text-center\" >\r\n        <div class=\"icon-container \">\r\n          <ion-icon name=\"file-plus\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"ion-text-center\" >\r\n        <ion-text class=\"text-weight-bold s14-h16 mb-8\">\r\n          Type your order\r\n        </ion-text> <br>\r\n        <ion-text>\r\n          Type here the medicine name or the product name you wish to order\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\" mt-8\" >       \r\n          <ion-textarea rows=\"4\" formcontrolName=\"description\"  placeholder=\"Ex: Paracetamol\"></ion-textarea>\r\n       \r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\" mt-8\" >       \r\n          <ion-button type=\"submit\" expand=\"block\" class=\"success-btn\">Submit</ion-button>\r\n       \r\n      </ion-col>\r\n     \r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_upload_upload_module_ts.js.map