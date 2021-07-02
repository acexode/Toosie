(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_cart_cart_module_ts"],{

/***/ 485:
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 3278);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 313:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-routing.module */ 485);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.page */ 3278);








let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_1__.CartPageRoutingModule,
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_2__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 3278:
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart.page.html */ 3516);
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss */ 8365);
/* harmony import */ var _components_add_refill_add_refill_add_refill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/add-refill/add-refill/add-refill.component */ 2451);
/* harmony import */ var _core_service_add_refill_add_refill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/service/add-refill/add-refill.service */ 1856);
/* harmony import */ var src_app_core_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/orders/orders.service */ 657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ 3815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);









let CartPage = class CartPage {
    constructor(orderS, modalController, refillS, toastController) {
        this.orderS = orderS;
        this.modalController = modalController;
        this.refillS = refillS;
        this.toastController = toastController;
        this.lists = [];
        this.total = 0;
        this.grandTotal = 0;
        this.discount = 0;
    }
    ngOnInit() {
        this.orderS.cartStore.subscribe(e => {
            console.log(e);
            this.lists = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(e) ? [] : e;
            this.lists.forEach(i => {
                this.total += i.actualPrice;
                this.discount += (i.discountPercent / 100) * i.actualPrice;
            });
        });
    }
    removeItem(item) {
        this.orderS.removeItemFromCart(item);
    }
    incrementDecrement(item, type) {
        this.orderS.incrementDecrement(item, type);
    }
    refill(item) {
        this.refillS.refill(item).subscribe(e => {
            console.log(e);
            this.presentToast('product added to refill');
        });
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                cssClass: 'toastCss',
                position: 'top'
            });
            toast.present();
        });
    }
    presentModal(list) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
CartPage.ctorParameters = () => [
    { type: src_app_core_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_4__.OrdersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _core_service_add_refill_add_refill_service__WEBPACK_IMPORTED_MODULE_3__.AddRefillService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartPage);



/***/ }),

/***/ 8365:
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #fff;\n  --ion-color-base: transparent !important;\n  margin-bottom: 15px;\n}\n\n.card {\n  box-shadow: 0 2px 8px 0 #ddd;\n  background: #fff;\n  margin: 0 8px 8px 8px;\n  padding: 10px;\n  color: #000 !important;\n}\n\n.card .img-col .block-center {\n  display: block !important;\n  margin: 0 auto;\n}\n\n.card .details-col .ellipsis-2 {\n  color: #000;\n  overflow: hidden;\n  text-overflow: -o-ellipsis-lastline;\n  text-overflow: ellipsis;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-height: 2.824em;\n}\n\n.card .details-col .ellipsis-2 span {\n  color: #434343;\n  font-size: 90%;\n}\n\n.card .border-top {\n  border-top: 1px solid #ebe1e1;\n}\n\n.card .title {\n  font-weight: 600;\n  font-weight: 120%;\n}\n\n.card .price {\n  font-size: 110%;\n  font-weight: 600;\n}\n\n.card .strike {\n  text-decoration: line-through;\n  color: #999;\n}\n\n.card .ps {\n  --padding-start: 0px !important ;\n}\n\n.card ion-button {\n  color: #0281B2;\n  text-transform: none;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.small {\n  font-size: x-small;\n}\n\n.backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-row {\n  margin-bottom: 1px;\n}\n\nion-content, ion-footer {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --background: #f2f2f2;\n}\n\nion-footer {\n  margin-top: 9px;\n  background: #fff;\n  color: #000;\n}\n\n.border-t {\n  border-top: 1px solid #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0M7RUFDRyw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFBUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQUVaOztBQUVRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUFaOztBQUNZO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFDaEI7O0FBR0k7RUFDSSw2QkFBQTtBQURSOztBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQURSOztBQUdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRFI7O0FBR0k7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFEUjs7QUFHSTtFQUNJLGdDQUFBO0FBRFI7O0FBR0k7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7QUFEUjs7QUFJQztFQUNJLDJCQUFBO0FBREw7O0FBR0M7RUFDSSxrQkFBQTtBQUFMOztBQUVDO0VBQ0csaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSwwQkFBQTtBQUdKIiwiZmlsZSI6ImNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiB9XHJcbiAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMCA4cHggOHB4IDhweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgLmltZy1jb2x7XHJcbiAgICAgICAgLmJsb2NrLWNlbnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldGFpbHMtY29se1xyXG4gICAgICAgIC5lbGxpcHNpcy0yIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IC1vLWVsbGlwc2lzLWxhc3RsaW5lO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIuODI0ZW07XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5ib3JkZXItdG9we1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlMWUxO1xyXG4gICAgfVxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEyMCU7XHJcbiAgICB9XHJcbiAgICAucHJpY2V7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAuc3RyaWtle1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgLnBze1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogIzAyODFCMjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxufVxyXG4gLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuIH1cclxuIC5zbWFsbHtcclxuICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiB9XHJcbiAuYmFja2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuaW9uLXJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuaW9uLWNvbnRlbnQsIGlvbi1mb290ZXIge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBcclxufVxyXG5pb24tZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5ib3JkZXItdHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 3516:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [search]=\"true\" [cart]=\"false\" title=\"Cart\"></app-header>\r\n\r\n<ion-content>\r\n  <ion-row *ngFor=\"let list of lists\" class=\"card\">\r\n   <ion-col class=\"img-col\" size=\"4\">\r\n    <a style=\"min-height: 150px\" class=\"block-center flex pt-20\">\r\n      <img class=\"block-center\" width=\"220\" height=\"100\" [src]=\"list?.resourceImages[0]\" >  \r\n    </a>\r\n   </ion-col>\r\n   <ion-col size=\"8\" class=\"details-col pl-10\">\r\n    <a  class=\"title mb-4 ellipsis-2\">{{list.title}} </a>\r\n    <a  class=\"text-display-4 mb-4 ellipsis-2\">Type: <span>{{list.type ? list.type : 'Not available'}}</span> </a>\r\n    <a  class=\"text-display-4 mb-4 ellipsis-2\">Brand: <span>{{list.brand ? list.brand : 'Not available'}}</span> </a>\r\n    <div class=\"pt-16 mb-4\">\r\n      <span class=\"price\">\r\n        ₦ {{list.currentPrice}}\r\n      </span>\r\n      <span class=\"price strike\">\r\n        ₦ {{list.actualPrice}}\r\n      </span>\r\n    </div>\r\n   </ion-col>\r\n   <ion-col size=\"12\" class=\"flex ion-justify-content-between pl-10 border-top\">\r\n    <div class=\"left\">      \r\n      <ion-button (click)=\"removeItem(list)\" class=\"ps\" fill=\"clear\">\r\n        <ion-icon class=\"pr-4\" name=\"trash\"></ion-icon>        \r\n      </ion-button>\r\n      <ion-button (click)=\"presentModal(list)\" class=\"ps\" fill=\"clear\">\r\n        <ion-icon class=\"pr-4\" name=\"refresh-f\"></ion-icon>\r\n        Refill\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"right\">\r\n        <ion-button (click)=\"incrementDecrement(list, 'decrement')\" class=\"ps\" fill=\"clear\">\r\n          <ion-icon name=\"minus-circle\"></ion-icon>\r\n        </ion-button>       \r\n        <ion-button class=\"ps\" fill=\"clear\">\r\n          <ion-label>{{list.quantity}}</ion-label>\r\n        </ion-button>\r\n        <ion-button (click)=\"incrementDecrement(list, 'increment')\" class=\"ps\" fill=\"clear\">\r\n          <ion-icon name=\"plus-circle\"></ion-icon>\r\n        </ion-button>\r\n        \r\n       \r\n    </div>\r\n   </ion-col>\r\n  </ion-row>\r\n\r\n  \r\n  <ion-row style=\"min-height: 100%;\" *ngIf=\"lists.length === 0\" class=\"flex ion-align-items-center\">\r\n    <ion-col class=\"text-center\" size=\"12\">\r\n      <h1>OOPS !!</h1>\r\n      <ion-text>No Item in cart</ion-text>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n</ion-content>\r\n<ion-footer *ngIf=\"lists.length !== 0\">\r\n  <ion-row  class=\"my-16\">\r\n    <ion-col size=\"9\">\r\n      <ion-text>Total</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-text>₦ {{total}}</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n      <ion-text>Discount</ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"3\">\r\n      <ion-text>₦ {{discount}}</ion-text>\r\n    </ion-col>\r\n    <ion-col class=\"border-t\" size=\"9\">\r\n      <ion-text><b>Grand Total</b></ion-text>\r\n    </ion-col>\r\n    <ion-col class=\"border-t\" size=\"3\">\r\n      <ion-text><b>₦ {{total - discount}}</b></ion-text>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-button expand=\"block\" class=\"main-button success-btn\" routerLink=\"/checkout\" routerDirection=\"forward\">\r\n        Checkout</ion-button>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart_cart_module_ts.js.map