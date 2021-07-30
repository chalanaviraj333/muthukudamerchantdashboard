(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carremote_editremote_editremote_module_ts"],{

/***/ 51749:
/*!*******************************************************************!*\
  !*** ./src/app/carremote/editremote/editremote-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditremotePageRoutingModule": function() { return /* binding */ EditremotePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _editremote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editremote.page */ 59945);




const routes = [
    {
        path: '',
        component: _editremote_page__WEBPACK_IMPORTED_MODULE_0__.EditremotePage
    }
];
let EditremotePageRoutingModule = class EditremotePageRoutingModule {
};
EditremotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditremotePageRoutingModule);



/***/ }),

/***/ 92356:
/*!***********************************************************!*\
  !*** ./src/app/carremote/editremote/editremote.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditremotePageModule": function() { return /* binding */ EditremotePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _editremote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editremote-routing.module */ 51749);
/* harmony import */ var _editremote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editremote.page */ 59945);







let EditremotePageModule = class EditremotePageModule {
};
EditremotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editremote_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditremotePageRoutingModule
        ],
        declarations: [_editremote_page__WEBPACK_IMPORTED_MODULE_1__.EditremotePage]
    })
], EditremotePageModule);



/***/ }),

/***/ 59945:
/*!*********************************************************!*\
  !*** ./src/app/carremote/editremote/editremote.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditremotePage": function() { return /* binding */ EditremotePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_editremote_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editremote.page.html */ 83550);
/* harmony import */ var _editremote_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editremote.page.scss */ 15028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let EditremotePage = class EditremotePage {
    constructor() { }
    ngOnInit() {
    }
};
EditremotePage.ctorParameters = () => [];
EditremotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editremote',
        template: _raw_loader_editremote_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editremote_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditremotePage);



/***/ }),

/***/ 15028:
/*!***********************************************************!*\
  !*** ./src/app/carremote/editremote/editremote.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0cmVtb3RlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 83550:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carremote/editremote/editremote.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>EDIT REMOTE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_carremote_editremote_editremote_module_ts-es2015.js.map