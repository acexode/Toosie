(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["src_app_pages_blog_blog_module_ts"],{

/***/ 6727:
/*!***************************************************!*\
  !*** ./src/app/pages/blog/blog-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPageRoutingModule": () => (/* binding */ BlogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog.page */ 5128);




const routes = [
    {
        path: '',
        component: _blog_page__WEBPACK_IMPORTED_MODULE_0__.BlogPage
    }
];
let BlogPageRoutingModule = class BlogPageRoutingModule {
};
BlogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BlogPageRoutingModule);



/***/ }),

/***/ 6238:
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPageModule": () => (/* binding */ BlogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-routing.module */ 6727);
/* harmony import */ var _blog_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.page */ 5128);








let BlogPageModule = class BlogPageModule {
};
BlogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _blog_routing_module__WEBPACK_IMPORTED_MODULE_1__.BlogPageRoutingModule,
            src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_blog_page__WEBPACK_IMPORTED_MODULE_2__.BlogPage]
    })
], BlogPageModule);



/***/ }),

/***/ 5128:
/*!*****************************************!*\
  !*** ./src/app/pages/blog/blog.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPage": () => (/* binding */ BlogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_blog_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./blog.page.html */ 2583);
/* harmony import */ var _blog_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.page.scss */ 1758);
/* harmony import */ var _core_service_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/service/blog/blog.service */ 7295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





let BlogPage = class BlogPage {
    constructor(blogS) {
        this.blogS = blogS;
    }
    ngOnInit() {
        this.blogs$ = this.blogS.blogStore;
    }
};
BlogPage.ctorParameters = () => [
    { type: _core_service_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService }
];
BlogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-blog',
        template: _raw_loader_blog_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_blog_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BlogPage);



/***/ }),

/***/ 1758:
/*!*******************************************!*\
  !*** ./src/app/pages/blog/blog.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2583:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog/blog.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Blog\"></app-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let blog of blogs$ | async\" class=\"12\">\r\n        <ion-card>\r\n          <img [src]=\"blog.blogImage\" style=\"width: 100%;\" alt=\"\">\r\n          <ion-card-header class=\"ion-inherit-color ios hydrated\">\r\n            <ion-card-subtitle role=\"heading\" aria-level=\"3\" class=\"ion-inherit-color ios hydrated\">Author: {{blog.blogAuthor.email }}</ion-card-subtitle>\r\n            <ion-card-title role=\"heading\" aria-level=\"2\" class=\"ion-inherit-color ios hydrated\">{{blog.blogaTitle}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"ios card-content-ios hydrated\">\r\n            {{blog.blogContent}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_blog_blog_module_ts.js.map