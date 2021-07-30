(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carremote_remotedetailspage_remotedetailspage_module_ts"], {
    /***/
    54170:
    /*!*********************************************************************************!*\
      !*** ./src/app/carremote/remotedetailspage/remotedetailspage-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RemotedetailspagePageRoutingModule": function RemotedetailspagePageRoutingModule() {
          return (
            /* binding */
            _RemotedetailspagePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _remotedetailspage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./remotedetailspage.page */
      6018);

      var routes = [{
        path: '',
        component: _remotedetailspage_page__WEBPACK_IMPORTED_MODULE_0__.RemotedetailspagePage
      }];

      var _RemotedetailspagePageRoutingModule = function RemotedetailspagePageRoutingModule() {
        _classCallCheck(this, RemotedetailspagePageRoutingModule);
      };

      _RemotedetailspagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RemotedetailspagePageRoutingModule);
      /***/
    },

    /***/
    61907:
    /*!*************************************************************************!*\
      !*** ./src/app/carremote/remotedetailspage/remotedetailspage.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RemotedetailspagePageModule": function RemotedetailspagePageModule() {
          return (
            /* binding */
            _RemotedetailspagePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _remotedetailspage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./remotedetailspage-routing.module */
      54170);
      /* harmony import */


      var _remotedetailspage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./remotedetailspage.page */
      6018);

      var _RemotedetailspagePageModule = function RemotedetailspagePageModule() {
        _classCallCheck(this, RemotedetailspagePageModule);
      };

      _RemotedetailspagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _remotedetailspage_routing_module__WEBPACK_IMPORTED_MODULE_0__.RemotedetailspagePageRoutingModule],
        declarations: [_remotedetailspage_page__WEBPACK_IMPORTED_MODULE_1__.RemotedetailspagePage]
      })], _RemotedetailspagePageModule);
      /***/
    },

    /***/
    6018:
    /*!***********************************************************************!*\
      !*** ./src/app/carremote/remotedetailspage/remotedetailspage.page.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RemotedetailspagePage": function RemotedetailspagePage() {
          return (
            /* binding */
            _RemotedetailspagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_remotedetailspage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./remotedetailspage.page.html */
      33769);
      /* harmony import */


      var _remotedetailspage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./remotedetailspage.page.scss */
      52844);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_navparam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/navparam.service */
      62794);

      var _RemotedetailspagePage = /*#__PURE__*/function () {
        function RemotedetailspagePage(http, activatedRoute, navParamService) {
          var _this = this;

          _classCallCheck(this, RemotedetailspagePage);

          this.http = http;
          this.activatedRoute = activatedRoute;
          this.navParamService = navParamService;
          this.selectedremote = {};
          this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has("selectedRemote")) {
              // redirect
              return;
            }

            _this.selectedremote.tapsycode = paramMap.get("selectedRemote");
          });
        }

        _createClass(RemotedetailspagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.http.get("https://tapsystock-a6450-default-rtdb.firebaseio.com/remotes.json").subscribe(function (resData) {
              for (var key in resData) {
                if (resData.hasOwnProperty(key)) {
                  if (resData[key].tapsycode == _this2.selectedremote.tapsycode) {
                    _this2.selectedremote.key = key, _this2.selectedremote.boxnumber = resData[key].boxnumber, _this2.selectedremote.inbuildchip = resData[key].inbuildchip, _this2.selectedremote.inbuildblade = resData[key].inbuildblade, _this2.selectedremote.battery = resData[key].battery, _this2.selectedremote.buttons = resData[key].buttons, _this2.selectedremote.costperitem = resData[key].costperitem, _this2.selectedremote.frequency = resData[key].frequency, _this2.selectedremote.remotetype = resData[key].remotetype.toUpperCase(), _this2.selectedremote.image = resData[key].image, _this2.selectedremote.notes = resData[key].notes, _this2.selectedremote.remoteinStock = resData[key].remoteinStock, _this2.selectedremote.compitablecars = resData[key].compitablecars, _this2.selectedremote.compitablebrands = resData[key].compitablebrands;
                  }
                }
              }
            });
          }
        }, {
          key: "onClickLowStock",
          value: function onClickLowStock() {
            this.selectedremote.remoteinStock = false;
            this.navParamService.setRemoteKey(this.selectedremote.key);
            var lowStockItem = {
              key: null,
              boxno: this.selectedremote.boxnumber,
              tapsycode: this.selectedremote.tapsycode,
              itemtype: this.selectedremote.remotetype,
              image: this.selectedremote.image
            };
            this.http.put("https://tapsystock-a6450-default-rtdb.firebaseio.com/remotes/".concat(this.selectedremote.key, ".json"), Object.assign(Object.assign({}, this.selectedremote), {
              remoteinStock: false,
              key: null
            })).subscribe(function (resData) {// console.log(resData);
            });
            this.http.post("https://tapsystock-a6450-default-rtdb.firebaseio.com/lowstockitemsV2.json", lowStockItem).subscribe(function (resData) {// console.log(resData);
            });
          }
        }]);

        return RemotedetailspagePage;
      }();

      _RemotedetailspagePage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_navparam_service__WEBPACK_IMPORTED_MODULE_2__.NavparamService
        }];
      };

      _RemotedetailspagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-remotedetailspage',
        template: _raw_loader_remotedetailspage_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_remotedetailspage_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RemotedetailspagePage);
      /***/
    },

    /***/
    52844:
    /*!*************************************************************************!*\
      !*** ./src/app/carremote/remotedetailspage/remotedetailspage.page.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  box-shadow: 1px 1px 5px 0px rgba(84, 6, 156, 0.315);\n  border-radius: 15px;\n}\n\nimg {\n  padding: 10px;\n}\n\n#lowStockIndicate {\n  margin-top: 1rem;\n  text-align: center;\n}\n\n#remoteheader {\n  border-color: #e4e4e494;\n  border-style: solid;\n  border-radius: 15px;\n}\n\nh2 {\n  margin-left: 10px;\n}\n\n#remotedetails {\n  padding-top: 25px;\n  padding-right: 15px;\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\nlowStockButton {\n  border-radius: 15px;\n}\n\n#errorContent {\n  text-align: center;\n  margin-top: 5px;\n}\n\n#remoteDetails {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.detailtitles {\n  font-family: rucksack, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  font-size: 30px;\n}\n\n.remotedetails {\n  font-family: rucksack, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n  color: #ff4961;\n  font-size: 30px;\n}\n\n.remotetypebox {\n  color: #7049ff;\n}\n\n.remotetypebox::content {\n  margin-top: auto;\n  margin-bottom: auto;\n  font-family: rucksack, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.primarytext {\n  font-family: futura-pt, sans-serif;\n  font-weight: 700;\n  font-style: normal;\n}\n\n.fontsize {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZWRldGFpbHNwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZGOztBQU1BO0VBQ0Usa0NBQUE7RUFDRixnQkFBQTtFQUNBLGtCQUFBO0FBSEE7O0FBUUE7RUFDRSxlQUFBO0FBTEYiLCJmaWxlIjoicmVtb3RlZGV0YWlsc3BhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggcmdiYSg4NCwgNiwgMTU2LCAwLjMxNSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmltZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNsb3dTdG9ja0luZGljYXRlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcmVtb3RlaGVhZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTRlNGU0OTQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuaDIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcblxufVxuXG4jcmVtb3RlZGV0YWlscyB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5sb3dTdG9ja0J1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cblxuI2Vycm9yQ29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4jcmVtb3RlRGV0YWlscyB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5kZXRhaWx0aXRsZXN7XG4gIGZvbnQtZmFtaWx5OiBydWNrc2FjayxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnJlbW90ZWRldGFpbHMge1xuICBmb250LWZhbWlseTogcnVja3NhY2ssc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogI2ZmNDk2MTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ucmVtb3RldHlwZWJveCB7XG4gIGNvbG9yOiAjNzA0OWZmO1xufVxuXG4ucmVtb3RldHlwZWJveDo6Y29udGVudCB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBydWNrc2FjayxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cblxuLnByaW1hcnl0ZXh0IHtcbiAgZm9udC1mYW1pbHk6IGZ1dHVyYS1wdCxzYW5zLXNlcmlmO1xuZm9udC13ZWlnaHQ6IDcwMDtcbmZvbnQtc3R5bGU6IG5vcm1hbDtcblxufVxuXG5cbi5mb250c2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    33769:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carremote/remotedetailspage/remotedetailspage.page.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/allremotes\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"primarytext\">REMOTE</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"3\" size-md=\"2\" offset-md=\"5\" size-lg=\"2\" offset-lg=\"5\">\n\n  <ion-card>\n    <ion-img src=\"{{selectedremote.image}}\" width=\"320\" height=\"320\"></ion-img>\n  </ion-card>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n\n\n  <div id=\"errorContent\">\n      <ion-chip color=\"danger\" *ngIf=\"!selectedremote.remoteinStock\">\n      <ion-icon name=\"sad-outline\" color=\"danger\"></ion-icon>\n      <ion-label>LOW STOCK!!</ion-label>\n    </ion-chip>\n  </div>\n\n  <div id=\"remoteDetails\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-xs=\"5\" size-md=\"2\" size-lg=\"2\">\n          <h1 class=\"detailtitles\">Box No:</h1>\n        </ion-col>\n        <ion-col size-xs=\"3\" size-md=\"2\" size-lg=\"2\">\n          <h1 class=\"remotedetails\">{{selectedremote.boxnumber}}</h1>\n        </ion-col>\n        <ion-col class=\"remotetypebox ion-text-center\" size-xs=\"4\" size-md=\"8\" size-lg=\"8\">\n          <h1>| {{selectedremote.remotetype}}</h1>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size-xs=\"12\">\n            <ion-button id=\"lowStockButton\" class=\"primarytext\" expand=\"block\" color=\"danger\" (click)=\"onClickLowStock()\" [disabled]=\"!selectedremote.remoteinStock\">LOW STOCK</ion-button>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"2\" size-lg=\"2\">\n          <ion-label>Tapsy Code:</ion-label>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-label><b>{{selectedremote.tapsycode}}</b></ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"2\" size-lg=\"2\">\n          <ion-label>Blade:</ion-label>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-label><b>{{selectedremote.inbuildblade}}</b></ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"2\" size-lg=\"2\">\n          <ion-label>Chip:</ion-label>\n        </ion-col>\n        <ion-col size-xs=\"8\">\n          <ion-label><b>{{selectedremote.inbuildchip}}</b></ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"2\" size-lg=\"2\">\n          <ion-label>Frequency:</ion-label>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-label><b>{{selectedremote.frequency}}</b></ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"2\" size-lg=\"2\">\n          <ion-label>Buttons:</ion-label>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-label><b>{{selectedremote.buttons}}</b></ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"2\" size-lg=\"2\">\n          <ion-label>Battery:</ion-label>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-label><b>{{selectedremote.battery}}</b></ion-label>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col size-xs=\"4\" size-md=\"2\" size-lg=\"2\">\n          <ion-label>Cost per Item:</ion-label>\n        </ion-col>\n        <ion-col size-xs=\"8\" size-md=\"8\" size-lg=\"8\">\n          <ion-label><b>${{selectedremote.costperitem}}</b></ion-label>\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col>\n          <ion-label>Compatible with:</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ul *ngFor=\"let car of selectedremote.compitablecars\">\n          <li class=\"primarytext\">\n            <ion-text color=\"secondary\">{{car.brand}} {{car.model}} {{car.startyear}} - {{car.endyear}}</ion-text>\n          </li>\n        </ul>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label>Special Notes:</ion-label>\n        </ion-col>\n        <ion-text color=\"danger\">\n          {{selectedremote.notes}}\n        </ion-text>\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_carremote_remotedetailspage_remotedetailspage_module_ts-es5.js.map