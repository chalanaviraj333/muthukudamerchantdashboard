(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carmodel_addcarmodel_addcarmodel_module_ts"],{

/***/ 16204:
/*!********************************************************************!*\
  !*** ./src/app/carmodel/addcarmodel/addcarmodel-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcarmodelPageRoutingModule": function() { return /* binding */ AddcarmodelPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _addcarmodel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcarmodel.page */ 33742);




const routes = [
    {
        path: '',
        component: _addcarmodel_page__WEBPACK_IMPORTED_MODULE_0__.AddcarmodelPage
    }
];
let AddcarmodelPageRoutingModule = class AddcarmodelPageRoutingModule {
};
AddcarmodelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddcarmodelPageRoutingModule);



/***/ }),

/***/ 91019:
/*!************************************************************!*\
  !*** ./src/app/carmodel/addcarmodel/addcarmodel.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcarmodelPageModule": function() { return /* binding */ AddcarmodelPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _addcarmodel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcarmodel-routing.module */ 16204);
/* harmony import */ var _addcarmodel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addcarmodel.page */ 33742);







let AddcarmodelPageModule = class AddcarmodelPageModule {
};
AddcarmodelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addcarmodel_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddcarmodelPageRoutingModule
        ],
        declarations: [_addcarmodel_page__WEBPACK_IMPORTED_MODULE_1__.AddcarmodelPage]
    })
], AddcarmodelPageModule);



/***/ }),

/***/ 33742:
/*!**********************************************************!*\
  !*** ./src/app/carmodel/addcarmodel/addcarmodel.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddcarmodelPage": function() { return /* binding */ AddcarmodelPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addcarmodel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addcarmodel.page.html */ 77748);
/* harmony import */ var _addcarmodel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addcarmodel.page.scss */ 17481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AddcarmodelPage = class AddcarmodelPage {
    constructor() { }
    ngOnInit() {
    }
};
AddcarmodelPage.ctorParameters = () => [];
AddcarmodelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-addcarmodel',
        template: _raw_loader_addcarmodel_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addcarmodel_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddcarmodelPage);



/***/ }),

/***/ 17481:
/*!************************************************************!*\
  !*** ./src/app/carmodel/addcarmodel/addcarmodel.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRjYXJtb2RlbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 77748:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carmodel/addcarmodel/addcarmodel.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADD CAR MODEL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_carmodel_addcarmodel_addcarmodel_module_ts-es2015.js.map