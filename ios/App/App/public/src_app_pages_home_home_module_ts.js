(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'prescription',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_prescription_prescription_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../prescription/prescription.module */ 689)).then(m => m.PrescriptionPageModule)
            },
            {
                path: 'prescription/history',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../prescription-history/prescription-history.module */ 3239)).then(m => m.PrescriptionHistoryPageModule)
            },
            {
                path: 'prescription/reminder',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pill-reminder_pill-reminder_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pill-reminder/pill-reminder.module */ 3106)).then(m => m.PillReminderPageModule)
            },
            {
                path: 'prescription/manage-refill',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_manage-refill_manage-refill_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../manage-refill/manage-refill.module */ 184)).then(m => m.ManageRefillPageModule)
            },
            {
                path: 'shop',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_shop_shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../shop/shop.module */ 1159)).then(m => m.ShopPageModule)
            },
            {
                path: 'wish',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_wish_wish_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../wish/wish.module */ 9043)).then(m => m.WishPageModule)
            },
            {
                path: 'blog',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_blog_blog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../blog/blog.module */ 6238)).then(m => m.BlogPageModule)
            },
            {
                path: 'cart-orders',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../cart/cart.module */ 313)).then(m => m.CartPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 8558)).then(m => m.ProfilePageModule)
            },
            {
                path: 'upload',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_upload_upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../upload/upload.module */ 5411)).then(m => m.UploadPageModule)
            },
            {
                path: 'categories',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_categories_categories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../categories/categories.module */ 4483)).then(m => m.CategoriesPageModule)
            },
            {
                path: 'contact-us',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../contact-us/contact-us.module */ 4754)).then(m => m.ContactUsPageModule)
            },
            {
                path: 'about-us',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about-us_about-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../about-us/about-us.module */ 9902)).then(m => m.AboutUsPageModule)
            },
            {
                path: 'faq',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faqs_faqs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../faqs/faqs.module */ 6392)).then(m => m.FaqsPageModule)
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_app_core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/interceptors/error.interceptor */ 422);
/* harmony import */ var src_app_core_interceptors_JWTInterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/interceptors/JWTInterceptor */ 5255);
/* harmony import */ var src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared/shared.module */ 4065);











let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: src_app_core_interceptors_JWTInterceptor__WEBPACK_IMPORTED_MODULE_3__.JwtInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: src_app_core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorInterceptor, multi: true },
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon name=\"custom-home\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"prescription\">\r\n      <ion-icon name=\"file-plus\"></ion-icon>\r\n      <ion-label>Prescription</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <!-- <ion-tab-button tab=\"wish\">\r\n      <ion-icon name=\"heart-f\"></ion-icon>\r\n      <ion-label>WishList</ion-label>\r\n    </ion-tab-button>    -->\r\n    <ion-tab-button tab=\"cart-orders\">\r\n      <ion-icon name=\"shopping-bag\"></ion-icon>\r\n      <ion-label>Cart</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"profile\">\r\n      <ion-icon name=\"user\"></ion-icon>\r\n      <ion-label>Me</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map