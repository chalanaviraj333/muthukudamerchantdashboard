(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carremote_deleteremote_deleteremote_module_ts"],{

/***/ 71622:
/*!***********************************************************************!*\
  !*** ./src/app/carremote/deleteremote/deleteremote-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteremotePageRoutingModule": function() { return /* binding */ DeleteremotePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _deleteremote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteremote.page */ 39314);




const routes = [
    {
        path: '',
        component: _deleteremote_page__WEBPACK_IMPORTED_MODULE_0__.DeleteremotePage
    }
];
let DeleteremotePageRoutingModule = class DeleteremotePageRoutingModule {
};
DeleteremotePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeleteremotePageRoutingModule);



/***/ }),

/***/ 70541:
/*!***************************************************************!*\
  !*** ./src/app/carremote/deleteremote/deleteremote.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteremotePageModule": function() { return /* binding */ DeleteremotePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _deleteremote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteremote-routing.module */ 71622);
/* harmony import */ var _deleteremote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteremote.page */ 39314);







let DeleteremotePageModule = class DeleteremotePageModule {
};
DeleteremotePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _deleteremote_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeleteremotePageRoutingModule
        ],
        declarations: [_deleteremote_page__WEBPACK_IMPORTED_MODULE_1__.DeleteremotePage]
    })
], DeleteremotePageModule);



/***/ }),

/***/ 39314:
/*!*************************************************************!*\
  !*** ./src/app/carremote/deleteremote/deleteremote.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteremotePage": function() { return /* binding */ DeleteremotePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_deleteremote_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./deleteremote.page.html */ 35662);
/* harmony import */ var _deleteremote_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteremote.page.scss */ 87462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let DeleteremotePage = class DeleteremotePage {
    constructor() { }
    ngOnInit() {
    }
};
DeleteremotePage.ctorParameters = () => [];
DeleteremotePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-deleteremote',
        template: _raw_loader_deleteremote_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_deleteremote_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DeleteremotePage);



/***/ }),

/***/ 87462:
/*!***************************************************************!*\
  !*** ./src/app/carremote/deleteremote/deleteremote.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVyZW1vdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 35662:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carremote/deleteremote/deleteremote.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>DELETE REMOTE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_carremote_deleteremote_deleteremote_module_ts-es2015.js.map