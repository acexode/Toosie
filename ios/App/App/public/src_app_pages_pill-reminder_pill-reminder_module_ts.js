(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_pill-reminder_pill-reminder_module_ts"],{

/***/ 4318:
/*!*********************************************************************!*\
  !*** ./src/app/pages/pill-reminder/pill-reminder-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PillReminderPageRoutingModule": () => (/* binding */ PillReminderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pill_reminder_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pill-reminder.page */ 6906);




const routes = [
    {
        path: '',
        component: _pill_reminder_page__WEBPACK_IMPORTED_MODULE_0__.PillReminderPage
    }
];
let PillReminderPageRoutingModule = class PillReminderPageRoutingModule {
};
PillReminderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PillReminderPageRoutingModule);



/***/ }),

/***/ 3106:
/*!*************************************************************!*\
  !*** ./src/app/pages/pill-reminder/pill-reminder.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PillReminderPageModule": () => (/* binding */ PillReminderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pill_reminder_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pill-reminder-routing.module */ 4318);
/* harmony import */ var _pill_reminder_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pill-reminder.page */ 6906);








let PillReminderPageModule = class PillReminderPageModule {
};
PillReminderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pill_reminder_routing_module__WEBPACK_IMPORTED_MODULE_1__.PillReminderPageRoutingModule,
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_pill_reminder_page__WEBPACK_IMPORTED_MODULE_2__.PillReminderPage]
    })
], PillReminderPageModule);



/***/ }),

/***/ 6906:
/*!***********************************************************!*\
  !*** ./src/app/pages/pill-reminder/pill-reminder.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PillReminderPage": () => (/* binding */ PillReminderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pill_reminder_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pill-reminder.page.html */ 9749);
/* harmony import */ var _pill_reminder_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pill-reminder.page.scss */ 6558);
/* harmony import */ var _components_pill_reminder_modal_pill_reminder_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/pill-reminder-modal/pill-reminder-modal.component */ 6870);
/* harmony import */ var _core_service_prescription_prescription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/service/prescription/prescription.service */ 8230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);








const PILL_REMINDER = 'pill-reminder';
let PillReminderPage = class PillReminderPage {
    constructor(prescS, modalController, router, loadingController) {
        this.prescS = prescS;
        this.modalController = modalController;
        this.router = router;
        this.loadingController = loadingController;
        this.reminderList = [];
    }
    ngOnInit() {
        this.prescS.getReminderList().then(e => {
            this.reminderList = JSON.parse(e);
            console.log(e);
        });
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_pill_reminder_modal_pill_reminder_modal_component__WEBPACK_IMPORTED_MODULE_2__.PillReminderModalComponent,
                cssClass: 'fullscreen'
            });
            yield modal.present();
        });
    }
};
PillReminderPage.ctorParameters = () => [
    { type: _core_service_prescription_prescription_service__WEBPACK_IMPORTED_MODULE_3__.PrescriptionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
PillReminderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pill-reminder',
        template: _raw_loader_pill_reminder_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pill_reminder_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PillReminderPage);



/***/ }),

/***/ 6558:
/*!*************************************************************!*\
  !*** ./src/app/pages/pill-reminder/pill-reminder.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".add-reminder {\n  --border-color: #0281B2;\n  --color: #0281B2 ;\n}\n\n.cal {\n  color: #0281B2;\n  font-size: 64px;\n}\n\nion-icon {\n  color: #0281B2;\n}\n\n.d-block {\n  display: block;\n}\n\n.w-100 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGwtcmVtaW5kZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7QUFHSiIsImZpbGUiOiJwaWxsLXJlbWluZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYWRkLXJlbWluZGVye1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICMwMjgxQjI7XHJcbiAgICAtLWNvbG9yOiAjMDI4MUIyXHJcbn1cclxuLmNhbHtcclxuICAgIGNvbG9yOiAjMDI4MUIyO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgXHJcbn1cclxuaW9uLWljb257XHJcbiAgICBjb2xvcjogIzAyODFCMjtcclxufVxyXG4uZC1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi53LTEwMHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ 9749:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pill-reminder/pill-reminder.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Pill Reminder\"></app-header>\r\n\r\n<ion-content>\r\n  <ng-template #openModal>\r\n    <ion-row style=\"height: 100%;\">\r\n      <ion-col  class=\"flex flex-column ion-justify-content-center ion-align-items-center\">\r\n        <ion-icon class=\"cal\" name=\"calendar-f\"></ion-icon>\r\n        <ion-text class=\"mb-10\">\r\n          You haven't set any reminder\r\n        </ion-text>\r\n        <ion-button (click)=\"presentModal()\" fill=\"outline\" class=\"add-reminder\">\r\n          Add Reminder\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-template>\r\n  <ion-grid *ngIf=\"reminderList.length; else openModal\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngFor=\"let list of reminderList\" >\r\n            <ion-row class=\"w-100\">\r\n              <ion-col class=\"flex flex-column\" size=\"9\">\r\n                <ion-text class=\"d-block h5\">{{list.remindTo}}</ion-text>\r\n                <ion-text class=\"d-block\">{{list.description}}</ion-text>\r\n                <small class=\"d-block\">{{list.time}} - {{list.date}}</small>\r\n\r\n              </ion-col>\r\n              <ion-col class=\"flex flex-column\" size=\"3\">\r\n               <ion-button fill=\"clear\" >\r\n                <ion-icon size=\"32\" name=\"trash\"></ion-icon>\r\n               </ion-button>\r\n\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pill-reminder_pill-reminder_module_ts.js.map