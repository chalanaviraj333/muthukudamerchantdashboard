(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_remoteshell_addremoteshell_addremoteshell_module_ts"],{

/***/ 95432:
/*!*****************************************************************************!*\
  !*** ./src/app/remoteshell/addremoteshell/addremoteshell-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddremoteshellPageRoutingModule": function() { return /* binding */ AddremoteshellPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _addremoteshell_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addremoteshell.page */ 5024);




const routes = [
    {
        path: '',
        component: _addremoteshell_page__WEBPACK_IMPORTED_MODULE_0__.AddremoteshellPage
    }
];
let AddremoteshellPageRoutingModule = class AddremoteshellPageRoutingModule {
};
AddremoteshellPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddremoteshellPageRoutingModule);



/***/ }),

/***/ 88033:
/*!*********************************************************************!*\
  !*** ./src/app/remoteshell/addremoteshell/addremoteshell.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddremoteshellPageModule": function() { return /* binding */ AddremoteshellPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _addremoteshell_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addremoteshell-routing.module */ 95432);
/* harmony import */ var _addremoteshell_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addremoteshell.page */ 5024);







let AddremoteshellPageModule = class AddremoteshellPageModule {
};
AddremoteshellPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addremoteshell_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddremoteshellPageRoutingModule
        ],
        declarations: [_addremoteshell_page__WEBPACK_IMPORTED_MODULE_1__.AddremoteshellPage]
    })
], AddremoteshellPageModule);



/***/ }),

/***/ 5024:
/*!*******************************************************************!*\
  !*** ./src/app/remoteshell/addremoteshell/addremoteshell.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddremoteshellPage": function() { return /* binding */ AddremoteshellPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addremoteshell_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addremoteshell.page.html */ 69620);
/* harmony import */ var _addremoteshell_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addremoteshell.page.scss */ 80050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AddremoteshellPage = class AddremoteshellPage {
    constructor() { }
    ngOnInit() {
    }
};
AddremoteshellPage.ctorParameters = () => [];
AddremoteshellPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-addremoteshell',
        template: _raw_loader_addremoteshell_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addremoteshell_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddremoteshellPage);



/***/ }),

/***/ 80050:
/*!*********************************************************************!*\
  !*** ./src/app/remoteshell/addremoteshell/addremoteshell.page.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRyZW1vdGVzaGVsbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 69620:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remoteshell/addremoteshell/addremoteshell.page.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADD REMOTE SHELL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_remoteshell_addremoteshell_addremoteshell_module_ts-es2015.js.map