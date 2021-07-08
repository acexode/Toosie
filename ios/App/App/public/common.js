(self["webpackChunkToosie"] = self["webpackChunkToosie"] || []).push([["common"],{

/***/ 6633:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ 7279);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 7295:
/*!***************************************************!*\
  !*** ./src/app/core/service/blog/blog.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogService": () => (/* binding */ BlogService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/endpoints */ 3812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _request_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request/request.service */ 2927);





let BlogService = class BlogService {
    constructor(reqS) {
        this.reqS = reqS;
        this.blogStore = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.singleBlog = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.blogListing();
    }
    blogListing() {
        this.reqS.get(_config_endpoints__WEBPACK_IMPORTED_MODULE_0__.blogEndpoints.blogListing).subscribe((e) => {
            console.log(e);
            this.blogStore.next(e.blogs);
        });
    }
};
BlogService.ctorParameters = () => [
    { type: _request_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
BlogService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], BlogService);



/***/ }),

/***/ 8230:
/*!*******************************************************************!*\
  !*** ./src/app/core/service/prescription/prescription.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrescriptionService": () => (/* binding */ PrescriptionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../config/endpoints */ 3812);
/* harmony import */ var _request_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../request/request.service */ 2927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/storage */ 6628);





const REMINDER_KEY = 'pill-reminder';

let PrescriptionService = class PrescriptionService {
    constructor(reqS) {
        this.reqS = reqS;
    }
    getReminderList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const list = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_2__.Storage.get({ key: REMINDER_KEY });
            return (list && list.value) ? list.value : null;
        });
    }
    uploadPrescription(formData) {
        return this.reqS.post(_config_endpoints__WEBPACK_IMPORTED_MODULE_0__.prescriptionEndpoints.newPrecription, formData);
    }
    allPrescriptions() {
        return this.reqS.get(_config_endpoints__WEBPACK_IMPORTED_MODULE_0__.prescriptionEndpoints.usersPrescription + '/1').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((data) => data.prescription));
    }
};
PrescriptionService.ctorParameters = () => [
    { type: _request_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
PrescriptionService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PrescriptionService);



/***/ }),

/***/ 1791:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/prescription-history/prescription-history-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrescriptionHistoryPageRoutingModule": () => (/* binding */ PrescriptionHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _prescription_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prescription-history.page */ 1520);




const routes = [
    {
        path: '',
        component: _prescription_history_page__WEBPACK_IMPORTED_MODULE_0__.PrescriptionHistoryPage
    },
];
let PrescriptionHistoryPageRoutingModule = class PrescriptionHistoryPageRoutingModule {
};
PrescriptionHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrescriptionHistoryPageRoutingModule);



/***/ }),

/***/ 3239:
/*!***************************************************************************!*\
  !*** ./src/app/pages/prescription-history/prescription-history.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrescriptionHistoryPageModule": () => (/* binding */ PrescriptionHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/shared/shared.module */ 4065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _prescription_history_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prescription-history-routing.module */ 1791);
/* harmony import */ var _prescription_history_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prescription-history.page */ 1520);








let PrescriptionHistoryPageModule = class PrescriptionHistoryPageModule {
};
PrescriptionHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _prescription_history_routing_module__WEBPACK_IMPORTED_MODULE_1__.PrescriptionHistoryPageRoutingModule,
            src_app_components_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        declarations: [_prescription_history_page__WEBPACK_IMPORTED_MODULE_2__.PrescriptionHistoryPage]
    })
], PrescriptionHistoryPageModule);



/***/ }),

/***/ 1520:
/*!*************************************************************************!*\
  !*** ./src/app/pages/prescription-history/prescription-history.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrescriptionHistoryPage": () => (/* binding */ PrescriptionHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_prescription_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./prescription-history.page.html */ 9533);
/* harmony import */ var _prescription_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prescription-history.page.scss */ 533);
/* harmony import */ var _core_service_prescription_prescription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/service/prescription/prescription.service */ 8230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





let PrescriptionHistoryPage = class PrescriptionHistoryPage {
    constructor(pres) {
        this.pres = pres;
    }
    ngOnInit() {
        this.prescriptionList$ = this.pres.allPrescriptions();
    }
};
PrescriptionHistoryPage.ctorParameters = () => [
    { type: _core_service_prescription_prescription_service__WEBPACK_IMPORTED_MODULE_2__.PrescriptionService }
];
PrescriptionHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-prescription-history',
        template: _raw_loader_prescription_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_prescription_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrescriptionHistoryPage);



/***/ }),

/***/ 533:
/*!***************************************************************************!*\
  !*** ./src/app/pages/prescription-history/prescription-history.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  box-shadow: 0 2px 8px 0 #ddd;\n  background: #fff;\n  margin: 0 8px 8px 8px;\n  padding: 10px;\n  color: #000 !important;\n}\n.card .img-col .block-center {\n  display: block !important;\n  margin: 0 auto;\n}\n.card .details-col .ellipsis-2 {\n  color: #000;\n  overflow: hidden;\n  text-overflow: -o-ellipsis-lastline;\n  text-overflow: ellipsis;\n  display: block;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-height: 2.824em;\n}\n.card .details-col .ellipsis-2 span {\n  color: #434343;\n  font-size: 90%;\n}\n.card .border-top {\n  border-top: 1px solid #ebe1e1;\n}\n.card .title {\n  font-weight: 600;\n  font-weight: 120%;\n}\n.card .price {\n  font-size: 110%;\n  font-weight: 600;\n}\n.card .strike {\n  text-decoration: line-through;\n  color: #999;\n}\n.card .ps {\n  --padding-start: 0px !important ;\n}\n.card ion-spinner {\n  --color: #0281B2;\n  font-size: larger;\n}\n.card ion-button {\n  margin-top: 10px;\n  width: 80px;\n  --background: #0281B2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNjcmlwdGlvbi1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ1E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFDWjtBQUdRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQURaO0FBRVk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUFoQjtBQUlJO0VBQ0ksNkJBQUE7QUFGUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlJO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBRlI7QUFJSTtFQUNJLGdDQUFBO0FBRlI7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFGUiIsImZpbGUiOiJwcmVzY3JpcHRpb24taGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMCA4cHggOHB4IDhweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgLmltZy1jb2x7XHJcbiAgICAgICAgLmJsb2NrLWNlbnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRldGFpbHMtY29se1xyXG4gICAgICAgIC5lbGxpcHNpcy0yIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IC1vLWVsbGlwc2lzLWxhc3RsaW5lO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDIuODI0ZW07XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5ib3JkZXItdG9we1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlMWUxO1xyXG4gICAgfVxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEyMCU7XHJcbiAgICB9XHJcbiAgICAucHJpY2V7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAuc3RyaWtle1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgLnBze1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQgO1xyXG4gICAgfVxyXG4gICAgaW9uLXNwaW5uZXJ7XHJcbiAgICAgICAgLS1jb2xvcjogIzAyODFCMjtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMwMjgxQjI7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 9533:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prescription-history/prescription-history.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Prescription History\"></app-header>\r\n\r\n<ion-content>\r\n  <ng-template #loading>\r\n    <ion-row class=\"mt-64\">\r\n      <ion-col class=\"text-center\">\r\n        <ion-spinner name=\"crescent\"></ion-spinner>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ng-template>\r\n  <ion-grid *ngIf=\"(prescriptionList$ | async); else loading\">\r\n    <ion-row class=\"card\" *ngFor=\"let presc of prescriptionList$ |async\">\r\n      <ion-col class=\"flex ion-align-items-center\" size=\"3\">\r\n        <img [src]=\"presc.prescriptionImage\" alt=\"\">\r\n      </ion-col>\r\n      <ion-col class=\"flex flex-column\" size=\"9\">\r\n        <ion-text *ngIf=\"presc.description\" class=\"h2\">\r\n          {{presc.description | slice:0:40}}\r\n        </ion-text>\r\n        <ion-text *ngIf=\"!presc.description\" class=\"h6\">\r\n          Description: <b>Not Available</b>\r\n        </ion-text>\r\n        <ion-text>\r\n          {{presc.createdAt | date}}\r\n        </ion-text>\r\n        <ion-button>\r\n          Refill\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map