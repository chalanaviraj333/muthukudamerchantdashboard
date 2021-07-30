(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carbrand_allcarbrands_allcarbrands_module_ts"], {
    /***/
    64351:
    /*!**********************************************************************!*\
      !*** ./src/app/carbrand/allcarbrands/allcarbrands-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcarbrandsPageRoutingModule": function AllcarbrandsPageRoutingModule() {
          return (
            /* binding */
            _AllcarbrandsPageRoutingModule
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


      var _allcarbrands_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allcarbrands.page */
      56324);

      var routes = [{
        path: '',
        component: _allcarbrands_page__WEBPACK_IMPORTED_MODULE_0__.AllcarbrandsPage
      }];

      var _AllcarbrandsPageRoutingModule = function AllcarbrandsPageRoutingModule() {
        _classCallCheck(this, AllcarbrandsPageRoutingModule);
      };

      _AllcarbrandsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AllcarbrandsPageRoutingModule);
      /***/
    },

    /***/
    70995:
    /*!**************************************************************!*\
      !*** ./src/app/carbrand/allcarbrands/allcarbrands.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcarbrandsPageModule": function AllcarbrandsPageModule() {
          return (
            /* binding */
            _AllcarbrandsPageModule
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


      var _allcarbrands_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allcarbrands-routing.module */
      64351);
      /* harmony import */


      var _allcarbrands_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allcarbrands.page */
      56324);

      var _AllcarbrandsPageModule = function AllcarbrandsPageModule() {
        _classCallCheck(this, AllcarbrandsPageModule);
      };

      _AllcarbrandsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _allcarbrands_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllcarbrandsPageRoutingModule],
        declarations: [_allcarbrands_page__WEBPACK_IMPORTED_MODULE_1__.AllcarbrandsPage]
      })], _AllcarbrandsPageModule);
      /***/
    },

    /***/
    56324:
    /*!************************************************************!*\
      !*** ./src/app/carbrand/allcarbrands/allcarbrands.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcarbrandsPage": function AllcarbrandsPage() {
          return (
            /* binding */
            _AllcarbrandsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_allcarbrands_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./allcarbrands.page.html */
      12896);
      /* harmony import */


      var _allcarbrands_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allcarbrands.page.scss */
      50439);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AllcarbrandsPage = /*#__PURE__*/function () {
        function AllcarbrandsPage() {
          _classCallCheck(this, AllcarbrandsPage);
        }

        _createClass(AllcarbrandsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllcarbrandsPage;
      }();

      _AllcarbrandsPage.ctorParameters = function () {
        return [];
      };

      _AllcarbrandsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-allcarbrands',
        template: _raw_loader_allcarbrands_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_allcarbrands_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AllcarbrandsPage);
      /***/
    },

    /***/
    50439:
    /*!**************************************************************!*\
      !*** ./src/app/carbrand/allcarbrands/allcarbrands.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxjYXJicmFuZHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    12896:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carbrand/allcarbrands/allcarbrands.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ALL CAR BRANDS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_carbrand_allcarbrands_allcarbrands_module_ts-es5.js.map