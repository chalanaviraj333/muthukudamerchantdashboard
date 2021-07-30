(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_product_addproduct_addproduct_module_ts"],{

/***/ 74261:
/*!*****************************************************************!*\
  !*** ./src/app/product/addproduct/addproduct-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddproductPageRoutingModule": function() { return /* binding */ AddproductPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _addproduct_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addproduct.page */ 81559);




const routes = [
    {
        path: '',
        component: _addproduct_page__WEBPACK_IMPORTED_MODULE_0__.AddproductPage
    }
];
let AddproductPageRoutingModule = class AddproductPageRoutingModule {
};
AddproductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddproductPageRoutingModule);



/***/ }),

/***/ 68105:
/*!*********************************************************!*\
  !*** ./src/app/product/addproduct/addproduct.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddproductPageModule": function() { return /* binding */ AddproductPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _addproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addproduct-routing.module */ 74261);
/* harmony import */ var _addproduct_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addproduct.page */ 81559);







let AddproductPageModule = class AddproductPageModule {
};
AddproductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddproductPageRoutingModule
        ],
        declarations: [_addproduct_page__WEBPACK_IMPORTED_MODULE_1__.AddproductPage]
    })
], AddproductPageModule);



/***/ }),

/***/ 81559:
/*!*******************************************************!*\
  !*** ./src/app/product/addproduct/addproduct.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddproductPage": function() { return /* binding */ AddproductPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addproduct_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addproduct.page.html */ 70613);
/* harmony import */ var _addproduct_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addproduct.page.scss */ 9706);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);






let AddproductPage = class AddproductPage {
    constructor(http, toastController) {
        this.http = http;
        this.toastController = toastController;
        this.itemNumber = 1;
        this.defaultQuantityinStock = 10;
        this.maxQuantityLimit = 10;
        this.minQuantityLimit = 1;
        this.productWeightUnit = 'G';
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'New Product Successfully Saved!',
                cssClass: "backtoast",
                duration: 2000
            });
            toast.present();
        });
    }
    ngOnInit() {
        this.http
            .get("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json")
            .subscribe((resData) => {
            for (const key in resData) {
                if (resData.hasOwnProperty(key)) {
                    this.itemNumber = this.itemNumber + 1;
                }
            }
        });
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const newProduct = {
            key: null,
            productnumber: this.itemNumber,
            productname: form.value.productName,
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/muthukudamerchant-496e8.appspot.com/o/2048px-No_image_available.svg.png?alt=media&token=795c44a2-ef49-4d52-a765-b7640d6ebe87',
            productWeight: form.value.productWeight + this.productWeightUnit,
            productmaxsellingprice: form.value.maxSellingPrice,
            productoursellingprice: form.value.ourPrice,
            quantityinstock: this.defaultQuantityinStock,
            itemMaxQuantity: this.maxQuantityLimit,
            itemMinQuantity: this.minQuantityLimit,
        };
        this.http.post("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json", newProduct)
            .subscribe(resData => {
            this.itemNumber = this.itemNumber + 1;
            form.reset();
            this.presentToast();
        });
    }
    _ionChangeQIS(event) {
        this.defaultQuantityinStock = Number(event.target.value);
    }
    _ionChangeMOQ(event) {
        this.maxQuantityLimit = Number(event.target.value);
    }
    _ionChangeMinOQ(event) {
        this.minQuantityLimit = Number(event.target.value);
    }
    segmentChanged(event) {
        this.productWeightUnit = event.target.value;
    }
};
AddproductPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
AddproductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-addproduct',
        template: _raw_loader_addproduct_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addproduct_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddproductPage);



/***/ }),

/***/ 9706:
/*!*********************************************************!*\
  !*** ./src/app/product/addproduct/addproduct.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#itemnumberID {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 20px;\n}\n\nion-fab {\n  margin-bottom: 20px;\n  margin-right: 20px;\n}\n\n.fontFamily {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.inputClass {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\nion-title {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\n.kiloButton {\n  width: 58px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHRTtFQUNFLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQUFKIiwiZmlsZSI6ImFkZHByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2l0ZW1udW1iZXJJRCB7XG4gICAgZm9udC1mYW1pbHk6IGZ1dHVyYS1wdCxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWZhYiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5mb250RmFtaWx5IHtcbiAgICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWUsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuICAuaW5wdXRDbGFzcyB7XG4gICAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cblxuICBpb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4gIC5raWxvQnV0dG9uIHtcbiAgICB3aWR0aDogNThweDtcbiAgfVxuIl19 */");

/***/ }),

/***/ 70613:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/addproduct/addproduct.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADD PRODUCTS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-text id=\"itemnumberID\">{{itemNumber}}</ion-text>\n    </ion-fab-button>\n  </ion-fab>\n\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n    <ion-item>\n      <ion-label class=\"inputClass\" position=\"floating\">Product Name</ion-label>\n      <ion-input class=\"inputClass ion-text-capitalize\" type=\"text\" ngModel name=\"productName\" clearInput required #productNameCtrl=\"ngModel\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"!productNameCtrl.valid && productNameCtrl.touched\" lines=\"none\">\n      <ion-label class=\"fontFamily\" color=\"danger\">Product Name field should not be empty</ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label class=\"inputClass\" position=\"floating\">Quantity in Stock</ion-label>\n      <ion-input class=\"inputClass\" type=\"number\" [value]=\"defaultQuantityinStock\" (ionChange)=\"_ionChangeQIS($event)\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input class=\"inputClass\" type=\"text\" placeholder=\"Product Weight\" ngModel name=\"productWeight\" clearInput required #productWeightCtrl=\"ngModel\"></ion-input>\n      <div class=\"ion-text-warp\">\n\n        <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"G\">\n          <ion-segment-button value=\"G\">\n            <ion-label class=\"fontFamily\">Grams</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"KG\">\n            <ion-label class=\"fontFamily\">Kilo</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"ML\">\n            <ion-label class=\"fontFamily\">Mil</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"L\">\n            <ion-label class=\"fontFamily\">L</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n        \n      </div>\n      \n    </ion-item>\n    <ion-item *ngIf=\"!productWeightCtrl.valid && productWeightCtrl.touched\" lines=\"none\">\n      <ion-label class=\"fontFamily\" color=\"danger\">Product Weight field should not be empty</ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label class=\"inputClass\" position=\"floating\">MRP</ion-label>\n      <ion-input class=\"inputClass\" type=\"number\" ngModel name=\"maxSellingPrice\" clearInput required #maxsellingpriceCtrl=\"ngModel\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"!maxsellingpriceCtrl.valid && maxsellingpriceCtrl.touched\" lines=\"none\">\n      <ion-label class=\"fontFamily\" color=\"danger\">MRP Should not be empty</ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label class=\"inputClass\" position=\"floating\">Our Price</ion-label>\n      <ion-input class=\"inputClass\" type=\"number\" ngModel name=\"ourPrice\" clearInput required #oursellingpriceCtrl=\"ngModel\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"!oursellingpriceCtrl.valid && oursellingpriceCtrl.touched\" lines=\"none\">\n      <ion-label class=\"fontFamily\" color=\"danger\">Our Price Should not be empty</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"inputClass\" position=\"floating\">Max Quantity Limit</ion-label>\n      <ion-input class=\"inputClass\" type=\"number\" [value]=\"maxQuantityLimit\" (ionChange)=\"_ionChangeMOQ($event)\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label class=\"inputClass\" position=\"floating\">Min Quantity Limit</ion-label>\n      <ion-input class=\"inputClass\" type=\"number\" [value]=\"minQuantityLimit\" (ionChange)=\"_ionChangeMinOQ($event)\"></ion-input>\n    </ion-item>\n\n    <br>\n    <ion-button class=\"addCarButton fontFamily\" color=\"success\" type=\"submit\" expand=\"block\" shape=\"round\" [disabled]=\"!f.valid\">ADD PRODUCT</ion-button>\n\n  </form>\n  \n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_product_addproduct_addproduct_module_ts-es2015.js.map