(self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carremote_allremotes_allremotes_module_ts"],{

/***/ 46322:
/*!*******************************************************************!*\
  !*** ./src/app/carremote/allremotes/allremotes-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllremotesPageRoutingModule": function() { return /* binding */ AllremotesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _allremotes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allremotes.page */ 69352);




const routes = [
    {
        path: '',
        component: _allremotes_page__WEBPACK_IMPORTED_MODULE_0__.AllremotesPage
    }
];
let AllremotesPageRoutingModule = class AllremotesPageRoutingModule {
};
AllremotesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AllremotesPageRoutingModule);



/***/ }),

/***/ 79540:
/*!***********************************************************!*\
  !*** ./src/app/carremote/allremotes/allremotes.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllremotesPageModule": function() { return /* binding */ AllremotesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _allremotes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allremotes-routing.module */ 46322);
/* harmony import */ var _allremotes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allremotes.page */ 69352);







let AllremotesPageModule = class AllremotesPageModule {
};
AllremotesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _allremotes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllremotesPageRoutingModule
        ],
        declarations: [_allremotes_page__WEBPACK_IMPORTED_MODULE_1__.AllremotesPage]
    })
], AllremotesPageModule);



/***/ }),

/***/ 69352:
/*!*********************************************************!*\
  !*** ./src/app/carremote/allremotes/allremotes.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllremotesPage": function() { return /* binding */ AllremotesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_allremotes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./allremotes.page.html */ 14531);
/* harmony import */ var _allremotes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allremotes.page.scss */ 97611);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_navparam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/navparam.service */ 62794);








let AllremotesPage = class AllremotesPage {
    constructor(router, http, navParamService) {
        this.router = router;
        this.http = http;
        this.navParamService = navParamService;
        this.remotes = [];
        this.searchedItem = [];
        this.hideButton = false;
    }
    ngOnInit() {
        this.http
            .get("https://tapsystock-a6450-default-rtdb.firebaseio.com/remotes.json")
            .subscribe((resData) => {
            for (const key in resData) {
                if (resData.hasOwnProperty(key)) {
                    this.remotes.push({
                        key,
                        tapsycode: resData[key].tapsycode,
                        boxnumber: resData[key].boxnumber,
                        inbuildchip: resData[key].inbuildchip,
                        inbuildblade: resData[key].inbuildblade,
                        battery: resData[key].battery,
                        buttons: resData[key].buttons,
                        costperitem: resData[key].costperitem,
                        frequency: resData[key].frequency,
                        remotetype: resData[key].remotetype,
                        image: resData[key].image,
                        notes: resData[key].notes,
                        remoteinStock: resData[key].remoteinStock,
                        compitablecars: resData[key].compitablecars,
                        compitablebrands: resData[key].compitablebrands,
                    });
                    this.remotes.sort((a, b) => (a.boxnumber > b.boxnumber ? 1 : -1));
                }
            }
        });
        this.searchedItem = this.remotes;
    }
    ionViewWillEnter() {
        let changedLowStockItem = this.navParamService.getRemoteKey();
        if (changedLowStockItem !== undefined) {
            const changingitem = this.remotes.find((i) => i.key === changedLowStockItem);
            changingitem.remoteinStock = false;
            this.navParamService.setRemoteKey(undefined);
        }
    }
    ngOnDestroy() { }
    _ionChange(event) {
        const val = event.target.value;
        this.searchedItem = this.remotes;
        if (val && val.trim() != "") {
            this.searchedItem = this.searchedItem.filter((currentremote) => {
                if (currentremote.compitablebrands !== undefined) {
                    let searchWord = currentremote.tapsycode +
                        currentremote.inbuildblade +
                        currentremote.compitablebrands.toString();
                    return searchWord.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
                else {
                    let searchWord = currentremote.tapsycode + currentremote.inbuildblade;
                    return searchWord.toLowerCase().indexOf(val.toLowerCase()) > -1;
                }
            });
        }
    }
    onClick(x) {
        const selectedremote = x;
        this.router.navigateByUrl("carremote/remotedetailspage/" + selectedremote);
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
AllremotesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_navparam_service__WEBPACK_IMPORTED_MODULE_2__.NavparamService }
];
AllremotesPage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ["search", { static: false },] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, { static: false },] }]
};
AllremotesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-allremotes',
        template: _raw_loader_allremotes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_allremotes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AllremotesPage);



/***/ }),

/***/ 97611:
/*!***********************************************************!*\
  !*** ./src/app/carremote/allremotes/allremotes.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  box-shadow: 1px 1px 5px 0px rgba(84, 6, 156, 0.315);\n  border-radius: 15px;\n  text-align: left;\n}\n\n#boxNumber {\n  font-size: 20px;\n}\n\nion-chip {\n  display: flex;\n  margin-top: 20px;\n  width: 50%;\n  justify-content: center;\n}\n\n.primarytext {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.fontsize {\n  font-size: 30px;\n}\n\n.fabbutton {\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: end;\n}\n\n.imageColoum {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbHJlbW90ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFHQTtFQUNFLGtDQUFBO0VBQ0YsZ0JBQUE7RUFDQSxrQkFBQTtBQUFBOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkYiLCJmaWxlIjoiYWxscmVtb3Rlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCByZ2JhKDg0LCA2LCAxNTYsIDAuMzE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2JveE51bWJlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWNoaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4ucHJpbWFyeXRleHQge1xuICBmb250LWZhbWlseTogZnV0dXJhLXB0LHNhbnMtc2VyaWY7XG5mb250LXdlaWdodDogNzAwO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuXG59XG5cblxuLmZvbnRzaXplIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uZmFiYnV0dG9uIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uaW1hZ2VDb2xvdW0ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4iXX0= */");

/***/ }),

/***/ 14531:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carremote/allremotes/allremotes.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ALL REMOTES</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar #search debounce=\"500\" (ionChange)=\"_ionChange($event)\" placeholder=\"Enter Brand,Blade,Code or Box no\" showCancelButton=\"never\" animated></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\">\n  <ion-grid>\n    <ion-row>\n\n      <ion-col size-md=\"8\" offset-md=\"2\" size-lg=\"8\" offset-lg=\"2\">\n  <ion-card *ngFor=\"let remote of searchedItem\" (click)=\"onClick(x = remote.tapsycode)\"\n    class=\"ion-activatable ripple-parent\">\n    <div class=\"fabbutton\">\n      <ion-fab *ngIf=\"!remote.remoteinStock\">\n        <ion-fab-button color=\"danger\">\n          <ion-icon src=\"/assets/icon/lowinstock.svg\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </div>\n\n      <ion-card-content>\n        <ion-row class=\"ion-no-padding\">\n          <ion-col size-xs=\"4\" size-md=\"4\" size-lg=\"4\">\n            <ion-card-subtitle color=\"primary\" id=\"boxNumber\" class=\"primarytext\"s>BOX: {{remote.boxnumber}}</ion-card-subtitle>\n            <ion-card-subtitle color=\"danger\" class=\"primarytext\">{{remote.frequency}}</ion-card-subtitle>\n            <ion-card-subtitle color=\"dark\" class=\"primarytext\">BLADE:{{remote.inbuildblade}}</ion-card-subtitle>\n            <ion-card-subtitle color=\"medium\" class=\"primarytext\">{{remote.inbuildchip}}</ion-card-subtitle>\n            <ion-card-subtitle color=\"dark\" class=\"primarytext\">BATTERY:{{remote.battery}}</ion-card-subtitle>\n            <ion-card-subtitle color=\"dark\" class=\"primarytext\">CODE:{{remote.tapsycode}}</ion-card-subtitle>\n\n          </ion-col>\n          <ion-col class=\"imageColoum\" size-xs=\"4\" size-md=\"4\" offset-md=\"1\" size-lg=\"4\" offset-lg=\"1\">\n            <img src=\"{{remote.image}}\" width=\"120\" height=\"120\" />\n\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n  </ion-card>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"ScrollToTop()\" *ngIf=\"hideButton\">\n      <ion-icon name=\"arrow-up-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_carremote_allremotes_allremotes_module_ts-es2015.js.map