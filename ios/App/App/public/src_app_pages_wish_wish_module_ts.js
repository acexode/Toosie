(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_wish_wish_module_ts"],{

/***/ 382:
/*!***************************************************!*\
  !*** ./src/app/pages/wish/wish-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishPageRoutingModule": () => (/* binding */ WishPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _wish_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wish.page */ 9963);




const routes = [
    {
        path: '',
        component: _wish_page__WEBPACK_IMPORTED_MODULE_0__.WishPage
    }
];
let WishPageRoutingModule = class WishPageRoutingModule {
};
WishPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WishPageRoutingModule);



/***/ }),

/***/ 9043:
/*!*******************************************!*\
  !*** ./src/app/pages/wish/wish.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishPageModule": () => (/* binding */ WishPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _wish_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wish-routing.module */ 382);
/* harmony import */ var _wish_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wish.page */ 9963);








let WishPageModule = class WishPageModule {
};
WishPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _wish_routing_module__WEBPACK_IMPORTED_MODULE_1__.WishPageRoutingModule,
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_wish_page__WEBPACK_IMPORTED_MODULE_2__.WishPage]
    })
], WishPageModule);



/***/ }),

/***/ 9963:
/*!*****************************************!*\
  !*** ./src/app/pages/wish/wish.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishPage": () => (/* binding */ WishPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_wish_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wish.page.html */ 8405);
/* harmony import */ var _wish_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wish.page.scss */ 5150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let WishPage = class WishPage {
    constructor() {
        this.lists = [
            {
                img: 'assets/icon/product.jpg',
                name: 'Product 1',
                price: '450'
            },
            {
                img: 'assets/icon/product2.jpg',
                name: 'Product 2',
                price: '850'
            },
            {
                img: 'assets/icon/product3.jpg',
                name: 'Product 3',
                price: '700'
            },
            {
                img: 'assets/icon/product1.jpg',
                name: 'Product 4',
                price: '1000'
            },
        ];
    }
    ngOnInit() {
    }
};
WishPage.ctorParameters = () => [];
WishPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-wish',
        template: _raw_loader_wish_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wish_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WishPage);



/***/ }),

/***/ 5150:
/*!*******************************************!*\
  !*** ./src/app/pages/wish/wish.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-header {\n  --border-bottom: 1px solid #f2f2f2;\n}\n\nimg {\n  width: 80px;\n  height: 80px;\n}\n\nion-button {\n  --box-shadow: none;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUNFO0VBQ0ksa0NBQUE7QUFFTjs7QUFBRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR047O0FBREU7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBSU4iLCJmaWxlIjoid2lzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9XHJcbiAgaW9uLWhlYWRlcntcclxuICAgICAgLS1ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuICBpb24tYnV0dG9ue1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG5cclxuICB9Il19 */");

/***/ }),

/***/ 8405:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wish/wish.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Wish Lists\"></app-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n  <ion-list>\r\n   \r\n\r\n    <ion-item *ngFor=\"let list of lists\" class=\"flex mt-16 px-8\">     \r\n        <img  [src]=\"list.img\">\r\n     \r\n      <ion-label class=\"ml-5\">\r\n        <h6>{{list.name}}</h6>\r\n        <ion-button class=\"success-btn\">Add to Cart</ion-button>\r\n      </ion-label>\r\n      <small>\r\n        {{list.price}}\r\n      </small>\r\n    </ion-item>\r\n\r\n    \r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_wish_wish_module_ts.js.map