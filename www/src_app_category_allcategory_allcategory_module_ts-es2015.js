(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_category_allcategory_allcategory_module_ts"],{

/***/ 51362:
/*!********************************************************************!*\
  !*** ./src/app/category/allcategory/allcategory-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllcategoryPageRoutingModule": function() { return /* binding */ AllcategoryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _allcategory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allcategory.page */ 27215);




const routes = [
    {
        path: '',
        component: _allcategory_page__WEBPACK_IMPORTED_MODULE_0__.AllcategoryPage
    }
];
let AllcategoryPageRoutingModule = class AllcategoryPageRoutingModule {
};
AllcategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllcategoryPageRoutingModule);



/***/ }),

/***/ 20057:
/*!************************************************************!*\
  !*** ./src/app/category/allcategory/allcategory.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllcategoryPageModule": function() { return /* binding */ AllcategoryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _allcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allcategory-routing.module */ 51362);
/* harmony import */ var _allcategory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allcategory.page */ 27215);







let AllcategoryPageModule = class AllcategoryPageModule {
};
AllcategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _allcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllcategoryPageRoutingModule
        ],
        declarations: [_allcategory_page__WEBPACK_IMPORTED_MODULE_1__.AllcategoryPage]
    })
], AllcategoryPageModule);



/***/ }),

/***/ 27215:
/*!**********************************************************!*\
  !*** ./src/app/category/allcategory/allcategory.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllcategoryPage": function() { return /* binding */ AllcategoryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_allcategory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./allcategory.page.html */ 33287);
/* harmony import */ var _allcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allcategory.page.scss */ 76549);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);





let AllcategoryPage = class AllcategoryPage {
    constructor(http) {
        this.http = http;
        this.allCategories = [];
    }
    ngOnInit() {
        this.http
            .get("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/product-categories.json")
            .subscribe((resData) => {
            for (const key in resData) {
                if (resData.hasOwnProperty(key)) {
                    this.allCategories.push({
                        key,
                        categoryName: resData[key].categoryName,
                        categoryItems: resData[key].categoryItems
                    });
                }
            }
        });
    }
};
AllcategoryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
AllcategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-allcategory',
        template: _raw_loader_allcategory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_allcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AllcategoryPage);



/***/ }),

/***/ 76549:
/*!************************************************************!*\
  !*** ./src/app/category/allcategory/allcategory.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.categoryName {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbGNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiYWxsY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWUsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jYXRlZ29yeU5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBmdXR1cmEtcHQsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn0iXX0= */");

/***/ }),

/***/ 33287:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/allcategory/allcategory.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ALL CATEGORIES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n\n      <ion-col size=\"10\" offset=\"1\" *ngFor=\"let category of allCategories\">\n  <ion-item>\n    <ion-label class=\"ion-text-capitalize categoryName\">{{category.categoryName}}</ion-label>\n    <ion-badge *ngIf=\"category.categoryItems\">{{category.categoryItems.length}}</ion-badge>\n  </ion-item>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_category_allcategory_allcategory_module_ts-es2015.js.map