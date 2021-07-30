(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_product_allproducts_allproducts_module_ts"],{

/***/ 74579:
/*!*******************************************************************!*\
  !*** ./src/app/product/allproducts/allproducts-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllproductsPageRoutingModule": function() { return /* binding */ AllproductsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _allproducts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allproducts.page */ 72668);




const routes = [
    {
        path: '',
        component: _allproducts_page__WEBPACK_IMPORTED_MODULE_0__.AllproductsPage
    }
];
let AllproductsPageRoutingModule = class AllproductsPageRoutingModule {
};
AllproductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllproductsPageRoutingModule);



/***/ }),

/***/ 96343:
/*!***********************************************************!*\
  !*** ./src/app/product/allproducts/allproducts.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllproductsPageModule": function() { return /* binding */ AllproductsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _allproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allproducts-routing.module */ 74579);
/* harmony import */ var _allproducts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allproducts.page */ 72668);







let AllproductsPageModule = class AllproductsPageModule {
};
AllproductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _allproducts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllproductsPageRoutingModule
        ],
        declarations: [_allproducts_page__WEBPACK_IMPORTED_MODULE_1__.AllproductsPage]
    })
], AllproductsPageModule);



/***/ }),

/***/ 72668:
/*!*********************************************************!*\
  !*** ./src/app/product/allproducts/allproducts.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllproductsPage": function() { return /* binding */ AllproductsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_allproducts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./allproducts.page.html */ 94758);
/* harmony import */ var _allproducts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allproducts.page.scss */ 71214);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let AllproductsPage = class AllproductsPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.allProducts = [];
        this.searchedItems = [];
        this.hideButton = false;
    }
    ngOnInit() {
        this.http
            .get("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json")
            .subscribe((resData) => {
            for (const key in resData) {
                if (resData.hasOwnProperty(key)) {
                    this.allProducts.push({
                        key,
                        productnumber: resData[key].productnumber,
                        productname: resData[key].productname,
                        imageUrl: resData[key].imageUrl,
                        productWeight: resData[key].productWeight,
                        productmaxsellingprice: resData[key].productmaxsellingprice,
                        productoursellingprice: resData[key].productoursellingprice,
                        quantityinstock: resData[key].quantityinstock,
                        itemMaxQuantity: resData[key].itemMaxQuantity,
                        itemMinQuantity: resData[key].itemMinQuantity
                    });
                    this.allProducts.sort((a, b) => (a.productnumber < b.productnumber ? 1 : -1));
                }
            }
        });
        this.searchedItems = this.allProducts;
    }
    ngOnDestroy() { }
    _ionChange(event) {
        const val = event.target.value;
        this.searchedItems = this.allProducts;
        if (val && val.trim() != "") {
            this.searchedItems = this.searchedItems.filter((currentproduct) => {
                if (currentproduct.productname !== undefined) {
                    let searchWord = currentproduct.productnumber +
                        currentproduct.productname;
                    return searchWord.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
                else {
                    // let searchWord = currentproduct.productnumber + currentproduct.productprice;
                    // return searchWord.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
            });
        }
    }
    logScrollStart() {
        setTimeout(() => {
            this.hideButton = true;
        }, 500);
    }
    ScrollToTop() {
        this.content.scrollToTop(1500);
        setTimeout(() => {
            this.hideButton = false;
        }, 4000);
    }
};
AllproductsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
AllproductsPage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ["search", { static: false },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, { static: false },] }]
};
AllproductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-allproducts',
        template: _raw_loader_allproducts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_allproducts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AllproductsPage);



/***/ }),

/***/ 71214:
/*!***********************************************************!*\
  !*** ./src/app/product/allproducts/allproducts.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".productImage {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.productTitle {\n  text-align: center;\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  color: #111111;\n  height: 40px;\n}\n\n.productMRP {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  color: #111111;\n  text-decoration: line-through;\n  text-align: right;\n  font-size: 20px;\n  margin-right: 20px;\n}\n\n.productOurSellingPrice {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  color: #ac0202;\n  font-size: 35px;\n  text-align: right;\n}\n\n.priceTag {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  text-align: right;\n  padding-right: 3px;\n}\n\n.searchBarClass {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\nion-title {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\nion-chip {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\nion-note {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbHByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJhbGxwcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdEltYWdlIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cblxuLnByb2R1Y3RUaXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBmdXR1cmEtcHQsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogIzExMTExMTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5wcm9kdWN0TVJQIHtcbiAgICBmb250LWZhbWlseTogZnV0dXJhLXB0LHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgY29sb3I6ICMxMTExMTE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnByb2R1Y3RPdXJTZWxsaW5nUHJpY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBmdXR1cmEtcHQsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogI2FjMDIwMjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wcmljZVRhZyB7XG4gICAgZm9udC1mYW1pbHk6IGZ1dHVyYS1wdCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cblxuLnNlYXJjaEJhckNsYXNzIHtcbiAgICBmb250LWZhbWlseTogZnV0dXJhLXB0LHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5pb24tY2hpcCB7XG4gICAgZm9udC1mYW1pbHk6IGZ1dHVyYS1wdCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5pb24tbm90ZSB7XG4gICAgZm9udC1mYW1pbHk6IGZ1dHVyYS1wdCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufSJdfQ== */");

/***/ }),

/***/ 94758:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/allproducts/allproducts.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ALL PRODUCTS</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar class=\"searchBarClass\" #search debounce=\"500\" (ionChange)=\"_ionChange($event)\" placeholder=\"Enter Product name,Product Number or Product Store Area\" showCancelButton=\"never\" animated></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\">\n  <ion-grid>\n    <ion-row>\n\n      <ion-col size-xs=\"4\" size-md=\"3\" size-lg=\"3\" *ngFor=\"let product of searchedItems\">\n  <ion-card\n    class=\"ion-activatable ripple-parent\">\n    <div class=\"fabbutton\">\n    </div>\n\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-chip color=\"primary\" class=\"ion-text-lowercase\">{{product.productWeight}}</ion-chip>\n            <img class=\"productImage\" src=\"{{product.imageUrl}}\" width=\"130\" height=\"130\">\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <h2 class=\"productTitle ion-text-capitalize\">{{product.productname}}</h2>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label class=\"priceTag\">RS</ion-label>\n            <h1 class=\"productOurSellingPrice\"> {{product.productoursellingprice}}</h1>\n          </ion-item>\n          <h1 class=\"productMRP\"> {{product.productmaxsellingprice}}</h1>\n          <ion-label>\n            <ion-note>Avail: {{product.quantityinstock}}</ion-note>\n          </ion-label>\n          \n      </ion-col >\n          </ion-row>\n        </ion-grid>\n        <ion-row class=\"ion-no-padding\">\n        </ion-row>\n      </ion-card-content>\n    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n  </ion-card>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"ScrollToTop()\" *ngIf=\"hideButton\">\n      <ion-icon name=\"arrow-up-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_product_allproducts_allproducts_module_ts-es2015.js.map