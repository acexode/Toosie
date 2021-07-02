(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_categories_categories_module_ts"],{

/***/ 5353:
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageRoutingModule": () => (/* binding */ CategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.page */ 5478);




const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CategoriesPageRoutingModule);



/***/ }),

/***/ 4483:
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPageModule": () => (/* binding */ CategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-routing.module */ 5353);
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.page */ 5478);








let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageRoutingModule,
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_2__.CategoriesPage]
    })
], CategoriesPageModule);



/***/ }),

/***/ 5478:
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesPage": () => (/* binding */ CategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./categories.page.html */ 9996);
/* harmony import */ var _categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.page.scss */ 2036);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);






let CategoriesPage = class CategoriesPage {
    constructor(_location, router) {
        this._location = _location;
        this.router = router;
        this.categories = [
            {
                img: 'assets/icon/baby.png',
                title: 'Baby & Child',
                path: ''
            },
            {
                img: 'assets/icon/woman.png',
                title: 'Women Care',
                path: ''
            },
            {
                img: 'assets/icon/man.png',
                title: 'Men Care',
                path: ''
            },
            {
                img: 'assets/icon/man.png',
                title: 'Vitamins',
                path: ''
            },
            {
                img: 'assets/icon/hair-care.png',
                title: 'Hair Care',
                path: ''
            },
            {
                img: 'assets/icon/skincare.png',
                title: 'Skin Care',
                path: ''
            },
            {
                img: 'assets/icon/toothbrush.png',
                title: 'Oral Care',
                path: ''
            },
            {
                img: 'assets/icon/natural.png',
                title: 'Organic Products',
                path: ''
            },
            {
                img: 'assets/icon/medical-assistance.png',
                title: 'Medical Supplies',
                path: ''
            },
            // {
            //   img: 'assets/icon/mask.png',
            //   title: 'Protection 101',
            //   path: ''
            // },
            // {
            //   img: 'assets/icon/sex.png',
            //   title: 'Sexual Health1',
            //   path: ''
            // },
        ];
    }
    ngOnInit() {
    }
    back() {
        this._location.back();
    }
    navigate(q) {
        this.router.navigate(['menu/home/shop', { category: q }]);
    }
};
CategoriesPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
CategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CategoriesPage);



/***/ }),

/***/ 2036:
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".c-card {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  height: 150px;\n  max-height: 150px;\n}\n\n.img-wrapper {\n  align-self: center;\n  width: 50%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFDSiIsImZpbGUiOiJjYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jLWNhcmR7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMiUpIDBweCA0cHggMTZweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxufVxyXG4uaW1nLXdyYXBwZXIge1xyXG4gICAgLy8gbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 9996:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Categories\"></app-header>\r\n\r\n<ion-content>\r\n  <ion-grid>    \r\n  <ion-row wrap>\r\n    <ion-col (click)=\"navigate(cat.title)\" sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" class=\"p-8 animate__fadeInUp\" *ngFor=\"let cat of categories\">\r\n      <div class=\"c-card flex flex-column ion-justify-content-center p-20\">\r\n        <img class=\"img-wrapper\" [src]=\"cat.img\">\r\n        <ion-text class=\"s18-h24 pt-8 text-center\">{{cat.title}}</ion-text>\r\n      </div>\r\n     \r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categories_categories_module_ts.js.map