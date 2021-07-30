(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_remoteshell_allremoteshells_allremoteshells_module_ts"],{

/***/ 38902:
/*!*******************************************************************************!*\
  !*** ./src/app/remoteshell/allremoteshells/allremoteshells-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllremoteshellsPageRoutingModule": function() { return /* binding */ AllremoteshellsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _allremoteshells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allremoteshells.page */ 90632);




const routes = [
    {
        path: '',
        component: _allremoteshells_page__WEBPACK_IMPORTED_MODULE_0__.AllremoteshellsPage
    }
];
let AllremoteshellsPageRoutingModule = class AllremoteshellsPageRoutingModule {
};
AllremoteshellsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllremoteshellsPageRoutingModule);



/***/ }),

/***/ 37996:
/*!***********************************************************************!*\
  !*** ./src/app/remoteshell/allremoteshells/allremoteshells.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllremoteshellsPageModule": function() { return /* binding */ AllremoteshellsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _allremoteshells_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allremoteshells-routing.module */ 38902);
/* harmony import */ var _allremoteshells_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allremoteshells.page */ 90632);







let AllremoteshellsPageModule = class AllremoteshellsPageModule {
};
AllremoteshellsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _allremoteshells_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllremoteshellsPageRoutingModule
        ],
        declarations: [_allremoteshells_page__WEBPACK_IMPORTED_MODULE_1__.AllremoteshellsPage]
    })
], AllremoteshellsPageModule);



/***/ }),

/***/ 90632:
/*!*********************************************************************!*\
  !*** ./src/app/remoteshell/allremoteshells/allremoteshells.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllremoteshellsPage": function() { return /* binding */ AllremoteshellsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_allremoteshells_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./allremoteshells.page.html */ 29308);
/* harmony import */ var _allremoteshells_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allremoteshells.page.scss */ 90211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AllremoteshellsPage = class AllremoteshellsPage {
    constructor() { }
    ngOnInit() {
    }
};
AllremoteshellsPage.ctorParameters = () => [];
AllremoteshellsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-allremoteshells',
        template: _raw_loader_allremoteshells_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_allremoteshells_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AllremoteshellsPage);



/***/ }),

/***/ 90211:
/*!***********************************************************************!*\
  !*** ./src/app/remoteshell/allremoteshells/allremoteshells.page.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxyZW1vdGVzaGVsbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 29308:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remoteshell/allremoteshells/allremoteshells.page.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ALL REMOTE SHELL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_remoteshell_allremoteshells_allremoteshells_module_ts-es2015.js.map