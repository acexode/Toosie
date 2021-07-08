(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_manage-refill_manage-refill_module_ts"],{

/***/ 6924:
/*!*********************************************************************!*\
  !*** ./src/app/pages/manage-refill/manage-refill-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageRefillPageRoutingModule": () => (/* binding */ ManageRefillPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _manage_refill_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-refill.page */ 941);




const routes = [
    {
        path: '',
        component: _manage_refill_page__WEBPACK_IMPORTED_MODULE_0__.ManageRefillPage
    }
];
let ManageRefillPageRoutingModule = class ManageRefillPageRoutingModule {
};
ManageRefillPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ManageRefillPageRoutingModule);



/***/ }),

/***/ 184:
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-refill/manage-refill.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageRefillPageModule": () => (/* binding */ ManageRefillPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _manage_refill_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-refill-routing.module */ 6924);
/* harmony import */ var _manage_refill_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-refill.page */ 941);








let ManageRefillPageModule = class ManageRefillPageModule {
};
ManageRefillPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _manage_refill_routing_module__WEBPACK_IMPORTED_MODULE_1__.ManageRefillPageRoutingModule,
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_manage_refill_page__WEBPACK_IMPORTED_MODULE_2__.ManageRefillPage]
    })
], ManageRefillPageModule);



/***/ }),

/***/ 941:
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-refill/manage-refill.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageRefillPage": () => (/* binding */ ManageRefillPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_manage_refill_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./manage-refill.page.html */ 6585);
/* harmony import */ var _manage_refill_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-refill.page.scss */ 4151);
/* harmony import */ var _components_add_refill_add_refill_add_refill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/add-refill/add-refill/add-refill.component */ 2451);
/* harmony import */ var _core_service_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/service/inventory/inventory.service */ 8204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_core_service_add_refill_add_refill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/add-refill/add-refill.service */ 1856);








let ManageRefillPage = class ManageRefillPage {
    constructor(invS, refillS, modalController) {
        this.invS = invS;
        this.refillS = refillS;
        this.modalController = modalController;
        this.orderList = [];
        this.refillList = [];
    }
    ngOnInit() {
        this.loadRefill();
        this.invS.myOrders().subscribe((e) => {
            console.log(e.receipts);
            e.receipts.map((det) => this.orderList.push(...det.details));
            console.log(this.orderList);
        });
    }
    loadRefill() {
        this.refillS.refillListing().subscribe((obj) => {
            console.log(obj.refill);
            this.refillList = obj.refill;
        });
    }
    removeRefill(id) {
        const obj = {
            refillId: id
        };
        this.refillS.remove(obj).subscribe(e => {
            this.loadRefill();
        });
    }
    presentModal(list) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_add_refill_add_refill_add_refill_component__WEBPACK_IMPORTED_MODULE_2__.AddRefillComponent,
                cssClass: 'fullscreen',
                componentProps: {
                    itemName: list.itemName,
                    item: list
                }
            });
            yield modal.present();
        });
    }
};
ManageRefillPage.ctorParameters = () => [
    { type: _core_service_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_3__.InventoryService },
    { type: src_app_core_service_add_refill_add_refill_service__WEBPACK_IMPORTED_MODULE_4__.AddRefillService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ManageRefillPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-manage-refill',
        template: _raw_loader_manage_refill_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manage_refill_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ManageRefillPage);



/***/ }),

/***/ 4151:
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-refill/manage-refill.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".add-reminder {\n  --border-color: #0281B2;\n  --color: #0281B2 ;\n}\n\n.cal {\n  color: #0281B2;\n  font-size: 64px;\n}\n\nion-content {\n  --background: #f2f2f2 ;\n}\n\nspan {\n  display: flex;\n  padding-bottom: 5px;\n}\n\nion-icon {\n  color: #0281B2;\n}\n\n.c-card {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  background: #fff;\n  height: 180px;\n  padding: 5px 10px;\n}\n\n.success {\n  color: #32d179;\n}\n\n.title-container {\n  height: 90px;\n  text-overflow: ellipsis;\n}\n\n.title-container p {\n  color: #000;\n}\n\n.img-wrapper {\n  width: 90%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.border {\n  border-right: 1.5px solid #f2f2f2;\n}\n\nion-segment {\n  --background: #fff;\n  --text-transform:none ;\n}\n\n.spinner {\n  color: #34C3EC;\n}\n\n.bg-white {\n  background: #fff;\n  padding: 8px;\n}\n\n.addToCart {\n  width: 100%;\n  height: 53 !important;\n  font-size: small;\n  color: #fff;\n  text-align: center;\n  --background: #0281B2;\n  text-transform: none;\n}\n\n.favorite-items {\n  margin: 20px 5px;\n  padding: 0 5px;\n}\n\n.favorite-items ion-col img {\n  width: 100%;\n  height: 120px;\n  margin-top: 10px;\n}\n\n.favorite-items ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n  padding-left: 10px;\n  color: #000;\n}\n\n.favorite-items ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n  height: 60px;\n  color: #000;\n  padding-left: 10px;\n}\n\n.favorite-items ion-col .heart {\n  position: absolute;\n  font-size: 18px;\n  top: 10px;\n  right: 10px;\n}\n\n.padding-left0 {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1yZWZpbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQU9KOztBQU5JO0VBQ0ksV0FBQTtBQVFSOztBQUxBO0VBRUksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFPSjs7QUFMQTtFQUNJLGlDQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBU0o7O0FBUEE7RUFDSSxjQUFBO0FBVUo7O0FBUkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFXSjs7QUFUQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQVlKOztBQVZBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBYUo7O0FBUFE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBU1o7O0FBTlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFRWjs7QUFMUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFPWjs7QUFMUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBT1o7O0FBRkE7RUFDSSwwQkFBQTtBQUtKIiwiZmlsZSI6Im1hbmFnZS1yZWZpbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1yZW1pbmRlcntcclxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDI4MUIyO1xyXG4gICAgLS1jb2xvcjogIzAyODFCMlxyXG59XHJcbi5jYWx7XHJcbiAgICBjb2xvcjogIzAyODFCMjtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIFxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyXHJcbn1cclxuc3BhbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6ICMwMjgxQjJcclxufVxyXG4uYy1jYXJke1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTIlKSAwcHggNHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbi5zdWNjZXNze1xyXG4gICAgY29sb3I6IHJnYig1MCwgMjA5LCAxMjEpO1xyXG59XHJcbi50aXRsZS1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbn1cclxuLmltZy13cmFwcGVyIHtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5ib3JkZXJ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkICNmMmYyZjI7XHJcbn1cclxuaW9uLXNlZ21lbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLXRleHQtdHJhbnNmb3JtOm5vbmVcclxufVxyXG4uc3Bpbm5lcntcclxuICAgIGNvbG9yOiAjMzRDM0VDO1xyXG59XHJcbi5iZy13aGl0ZXtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLmFkZFRvQ2FydCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTMgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyODFCMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5mYXZvcml0ZS1pdGVtcyB7XHJcbiAgICBtYXJnaW46IDIwcHggNXB4O1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhcnR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBhZGRpbmctbGVmdDAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIC5wYWRkaW5nLXJpZ2h0MCB7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbi8vIH0iXX0= */");

/***/ }),

/***/ 6585:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-refill/manage-refill.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"My Orders\"></app-header>\r\n\r\n<ion-content>\r\n  <ng-template #openModal>\r\n    <ion-row style=\"height: 100%;\">\r\n      <ion-col  class=\"flex flex-column ion-justify-content-center ion-align-items-center\">\r\n        <ion-icon class=\"cal\" name=\"cart\"></ion-icon>\r\n        <ion-text class=\"mb-10\">\r\n          No orders found\r\n        </ion-text>\r\n        <!-- <ion-button (click)=\"presentModal()\" fill=\"outline\" class=\"add-reminder\">\r\n          Add New\r\n        </ion-button> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-template>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"refillList.length\" class=\"favorite-items flex flex-column ion-justify-content-between\">\r\n      <ion-col size=\"12\" *ngFor=\"let p of refillList\" class=\"ion-text-left\">\r\n        <div class=\"c-card\">\r\n          <ion-row>\r\n            <ion-col size=\"10\">\r\n              <div class=\"title-container\">\r\n                <h5>Order Status</h5>\r\n                <span class=\"success\">{{p.isActive ? 'Active': ''}}</span>\r\n                <span >Order No: {{p.id | slice:0:16}}</span>\r\n                <span >Pat Name: {{p.user.fullName}}</span>\r\n                <span >Start Date: {{p.startDate | date}}</span>\r\n                <span >Refill Date: {{p.nextRefillDate | date}}</span>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"2\">\r\n              <ion-button (click) =\"removeRefill(p.id)\" fill=\"clear\" >\r\n                <ion-icon name=\"trash\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          \r\n          \r\n          \r\n        </div>\r\n      </ion-col>\r\n    \r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid *ngIf=\"orderList.length; else openModal\" >\r\n   \r\n    <ion-list>\r\n      <ion-list-header>\r\n        <ion-label>Orders</ion-label>\r\n      </ion-list-header>\r\n\r\n      <ion-item *ngFor=\"let list of orderList\" class=\"flex mt-16 px-8\">     \r\n          \r\n       \r\n        <ion-label class=\"ml-5\">\r\n          <h6>{{list.itemName}}</h6>\r\n          <small>\r\n           Price:  {{list.cost}}\r\n          </small>\r\n          <small>\r\n           Quantity:  {{list.quantity}}\r\n          </small>\r\n        </ion-label>\r\n        <ion-button (click)=\"presentModal(list)\" class=\"success-btn\">Refill</ion-button>\r\n        \r\n      </ion-item>\r\n  \r\n      \r\n    </ion-list>\r\n   \r\n  </ion-grid>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-refill_manage-refill_module_ts.js.map