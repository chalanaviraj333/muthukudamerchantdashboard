(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_category_productswithoutcategory_productswithoutcategory_module_ts"], {
    /***/
    99620:
    /*!********************************************************************************************!*\
      !*** ./src/app/category/productswithoutcategory/productswithoutcategory-routing.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductswithoutcategoryPageRoutingModule": function ProductswithoutcategoryPageRoutingModule() {
          return (
            /* binding */
            _ProductswithoutcategoryPageRoutingModule
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


      var _productswithoutcategory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./productswithoutcategory.page */
      18845);

      var routes = [{
        path: '',
        component: _productswithoutcategory_page__WEBPACK_IMPORTED_MODULE_0__.ProductswithoutcategoryPage
      }];

      var _ProductswithoutcategoryPageRoutingModule = function ProductswithoutcategoryPageRoutingModule() {
        _classCallCheck(this, ProductswithoutcategoryPageRoutingModule);
      };

      _ProductswithoutcategoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProductswithoutcategoryPageRoutingModule);
      /***/
    },

    /***/
    87250:
    /*!************************************************************************************!*\
      !*** ./src/app/category/productswithoutcategory/productswithoutcategory.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductswithoutcategoryPageModule": function ProductswithoutcategoryPageModule() {
          return (
            /* binding */
            _ProductswithoutcategoryPageModule
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


      var _productswithoutcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./productswithoutcategory-routing.module */
      99620);
      /* harmony import */


      var _productswithoutcategory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./productswithoutcategory.page */
      18845);

      var _ProductswithoutcategoryPageModule = function ProductswithoutcategoryPageModule() {
        _classCallCheck(this, ProductswithoutcategoryPageModule);
      };

      _ProductswithoutcategoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _productswithoutcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductswithoutcategoryPageRoutingModule],
        declarations: [_productswithoutcategory_page__WEBPACK_IMPORTED_MODULE_1__.ProductswithoutcategoryPage]
      })], _ProductswithoutcategoryPageModule);
      /***/
    },

    /***/
    18845:
    /*!**********************************************************************************!*\
      !*** ./src/app/category/productswithoutcategory/productswithoutcategory.page.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductswithoutcategoryPage": function ProductswithoutcategoryPage() {
          return (
            /* binding */
            _ProductswithoutcategoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_productswithoutcategory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./productswithoutcategory.page.html */
      82028);
      /* harmony import */


      var _productswithoutcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./productswithoutcategory.page.scss */
      95064);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProductswithoutcategoryPage = /*#__PURE__*/function () {
        function ProductswithoutcategoryPage() {
          _classCallCheck(this, ProductswithoutcategoryPage);
        }

        _createClass(ProductswithoutcategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductswithoutcategoryPage;
      }();

      _ProductswithoutcategoryPage.ctorParameters = function () {
        return [];
      };

      _ProductswithoutcategoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-productswithoutcategory',
        template: _raw_loader_productswithoutcategory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_productswithoutcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductswithoutcategoryPage);
      /***/
    },

    /***/
    95064:
    /*!************************************************************************************!*\
      !*** ./src/app/category/productswithoutcategory/productswithoutcategory.page.scss ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Rzd2l0aG91dGNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InByb2R1Y3Rzd2l0aG91dGNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufSJdfQ== */";
      /***/
    },

    /***/
    82028:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/productswithoutcategory/productswithoutcategory.page.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADD PRODUCTS TO CATEGORY</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_category_productswithoutcategory_productswithoutcategory_module_ts-es5.js.map