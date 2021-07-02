(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_shop_shop_module_ts"],{

/***/ 7700:
/*!***************************************************!*\
  !*** ./src/app/pages/shop/shop-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPageRoutingModule": () => (/* binding */ ShopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.page */ 737);




const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_0__.ShopPage
    }
];
let ShopPageRoutingModule = class ShopPageRoutingModule {
};
ShopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShopPageRoutingModule);



/***/ }),

/***/ 1159:
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPageModule": () => (/* binding */ ShopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop-routing.module */ 7700);
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.page */ 737);








let ShopPageModule = class ShopPageModule {
};
ShopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_1__.ShopPageRoutingModule,
            src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_2__.ShopPage]
    })
], ShopPageModule);



/***/ }),

/***/ 737:
/*!*****************************************!*\
  !*** ./src/app/pages/shop/shop.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopPage": () => (/* binding */ ShopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_shop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shop.page.html */ 3978);
/* harmony import */ var _shop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.page.scss */ 1248);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/search/search.component */ 9055);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _core_service_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/service/inventory/inventory.service */ 8204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_core_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/orders/orders.service */ 657);




/* eslint-disable no-underscore-dangle */





let ShopPage = class ShopPage {
    constructor(_location, inventoryS, orderS, modalController, toastController) {
        this._location = _location;
        this.inventoryS = inventoryS;
        this.orderS = orderS;
        this.modalController = modalController;
        this.toastController = toastController;
        this.categories = [
            {
                category: 'Baby & Child',
                id: 1
            },
            {
                category: 'Women Care',
                id: 2
            },
            {
                category: 'Men Care',
                id: 3
            },
            {
                category: 'Vitamins',
                id: 4
            },
            {
                category: 'Hair Care',
                id: 5
            },
            {
                category: 'Skin Care',
                id: 6
            },
            {
                category: 'Oral Care',
                id: 7
            },
            {
                category: 'Organic Products',
                id: 8
            },
            {
                category: 'Medical Supplies',
                id: 9
            }
        ];
        this.products = [];
        this.loading = false;
        this.tab = this.categories[0].id;
    }
    ngOnInit() {
        this.loadCategory();
    }
    loadCategory() {
        this.inventoryS.allCategories().subscribe((e) => {
            console.log(e);
            this.categories = e.inventoryCategory;
            this.tab = this.categories[0].id;
            this.loadInventory(this.tab);
        });
    }
    loadInventory(id) {
        this.loading = true;
        this.inventoryS.inventoryByCategory(id).subscribe((e) => {
            console.log(e);
            this.loading = false;
            this.products = e.inventory;
        });
    }
    addToCart(id) {
        this.orderS.addItemToCart(id).then(e => {
            if (e) {
                this.presentToast('item added to cart');
            }
            else {
                this.presentToast('item already in cart');
            }
        });
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                cssClass: 'toastCss',
                position: 'top'
            });
            toast.present();
        });
    }
    segmentChanged($event) {
        this.tab = $event.detail.value;
        this.loadInventory(this.tab);
        console.log($event.detail.value);
    }
    back() {
        this._location.back();
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent,
                cssClass: 'fullscreen'
            });
            yield modal.present();
        });
    }
};
ShopPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _core_service_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_3__.InventoryService },
    { type: src_app_core_service_orders_orders_service__WEBPACK_IMPORTED_MODULE_4__.OrdersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
ShopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-shop',
        template: _raw_loader_shop_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shop_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShopPage);



/***/ }),

/***/ 1248:
/*!*******************************************!*\
  !*** ./src/app/pages/shop/shop.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f2f2f2 ;\n}\n\n.c-card {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  background: #fff;\n  height: 300px;\n  max-height: 300px;\n  padding: 5px 10px;\n}\n\n.title-container {\n  height: 90px;\n  text-overflow: ellipsis;\n}\n\n.title-container p {\n  color: #000;\n}\n\n.img-wrapper {\n  width: 90%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.border {\n  border-right: 1.5px solid #f2f2f2;\n}\n\nion-segment {\n  --background: #fff;\n  --text-transform:none ;\n}\n\n.spinner {\n  color: #34C3EC;\n}\n\n.bg-white {\n  background: #fff;\n  padding: 8px;\n}\n\n.addToCart {\n  width: 100%;\n  height: 53 !important;\n  font-size: small;\n  color: #fff;\n  text-align: center;\n  --background: #0281B2;\n  text-transform: none;\n}\n\n.favorite-items {\n  margin: 20px 5px;\n  padding: 0 5px;\n}\n\n.favorite-items ion-col img {\n  width: 100%;\n  height: 120px;\n  margin-top: 10px;\n}\n\n.favorite-items ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n  padding-left: 10px;\n  color: #000;\n}\n\n.favorite-items ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n  height: 60px;\n  color: #000;\n  padding-left: 10px;\n}\n\n.favorite-items ion-col .heart {\n  position: absolute;\n  font-size: 18px;\n  top: 10px;\n  right: 10px;\n}\n\n.padding-left0 {\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFDQTtFQUNJLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBRkk7RUFDSSxXQUFBO0FBSVI7O0FBREE7RUFFSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUdKOztBQURBO0VBQ0ksaUNBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFTSjs7QUFIUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFLWjs7QUFGUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUlaOztBQURRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdaOztBQURRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFHWjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0oiLCJmaWxlIjoic2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2YyZjJmMlxyXG59XHJcbi5jLWNhcmR7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMiUpIDBweCA0cHggMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4udGl0bGUtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBwe1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG59XHJcbi5pbWctd3JhcHBlciB7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4uYm9yZGVye1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCAjZjJmMmYyO1xyXG59XHJcbmlvbi1zZWdtZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS10ZXh0LXRyYW5zZm9ybTpub25lXHJcbn1cclxuLnNwaW5uZXJ7XHJcbiAgICBjb2xvcjogIzM0QzNFQztcclxufVxyXG4uYmctd2hpdGV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcbi5hZGRUb0NhcnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUzICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjgxQjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uZmF2b3JpdGUtaXRlbXMge1xyXG4gICAgbWFyZ2luOiAyMHB4IDVweDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgXHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYXJ0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWRkaW5nLWxlZnQwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAucGFkZGluZy1yaWdodDAge1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */");

/***/ }),

/***/ 3978:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shop/shop.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [cart]=\"true\" [search]=\"true\" title=\"Shop\"></app-header>\r\n\r\n<ion-content>\r\n  <ion-segment [value]='tab' scrollable  (ionChange)=\"segmentChanged($event)\">\r\n    <ion-segment-button *ngFor=\"let cat of categories\" [value]=\"cat.id\">\r\n      <ion-label>{{cat?.category}}</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <ion-row class=\"mt-1 bg-white\"   (ionChange)=\"segmentChanged($event)\">\r\n    <ion-col class=\"ion-text-center border\" size=\"6\">\r\n      <ion-label>\r\n        <ion-icon name=\"filter\"></ion-icon>\r\n        Filter\r\n      </ion-label>\r\n    </ion-col>\r\n    <ion-col class=\"ion-text-center\" size=\"6\" >\r\n      <ion-label (click)=\"presentModal()\">\r\n        <ion-icon size=\"10\" name=\"search-outline\"></ion-icon>\r\n        Search\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div *ngIf=\"loading\">\r\n    <ion-row class=\"mt-64\">\r\n      <ion-col sizeLg=\"12\" sizeMd=\"12\" sizeXs=\"12\"  class=\"ion-text-center\">\r\n        <ion-spinner class=\"spinner\" name=\"bubbles\"></ion-spinner>\r\n      </ion-col>\r\n      </ion-row>\r\n  </div>\r\n  <div *ngIf=\"!loading\">\r\n    <app-items [items]=\"products\"></app-items>\r\n    <ion-row *ngIf=\"products.length === 0\" class=\"mt-64\">\r\n      <ion-col sizeLg=\"12\" sizeMd=\"12\" sizeXs=\"12\"  class=\"ion-text-center\">\r\n        <ion-text>No product found for this category</ion-text>\r\n      </ion-col>\r\n  \r\n    </ion-row>\r\n   \r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shop_shop_module_ts.js.map