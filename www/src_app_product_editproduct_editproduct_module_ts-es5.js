(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_product_editproduct_editproduct_module_ts"], {
    /***/
    52398:
    /*!*******************************************************************!*\
      !*** ./src/app/product/editproduct/editproduct-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditproductPageRoutingModule": function EditproductPageRoutingModule() {
          return (
            /* binding */
            _EditproductPageRoutingModule
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


      var _editproduct_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editproduct.page */
      96580);

      var routes = [{
        path: '',
        component: _editproduct_page__WEBPACK_IMPORTED_MODULE_0__.EditproductPage
      }];

      var _EditproductPageRoutingModule = function EditproductPageRoutingModule() {
        _classCallCheck(this, EditproductPageRoutingModule);
      };

      _EditproductPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditproductPageRoutingModule);
      /***/
    },

    /***/
    60675:
    /*!***********************************************************!*\
      !*** ./src/app/product/editproduct/editproduct.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditproductPageModule": function EditproductPageModule() {
          return (
            /* binding */
            _EditproductPageModule
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


      var _editproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editproduct-routing.module */
      52398);
      /* harmony import */


      var _editproduct_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editproduct.page */
      96580);

      var _EditproductPageModule = function EditproductPageModule() {
        _classCallCheck(this, EditproductPageModule);
      };

      _EditproductPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditproductPageRoutingModule],
        declarations: [_editproduct_page__WEBPACK_IMPORTED_MODULE_1__.EditproductPage]
      })], _EditproductPageModule);
      /***/
    },

    /***/
    96580:
    /*!*********************************************************!*\
      !*** ./src/app/product/editproduct/editproduct.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditproductPage": function EditproductPage() {
          return (
            /* binding */
            _EditproductPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_editproduct_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./editproduct.page.html */
      41030);
      /* harmony import */


      var _editproduct_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editproduct.page.scss */
      17034);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EditproductPage = /*#__PURE__*/function () {
        function EditproductPage() {
          _classCallCheck(this, EditproductPage);
        }

        _createClass(EditproductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditproductPage;
      }();

      _EditproductPage.ctorParameters = function () {
        return [];
      };

      _EditproductPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editproduct',
        template: _raw_loader_editproduct_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editproduct_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditproductPage);
      /***/
    },

    /***/
    17034:
    /*!***********************************************************!*\
      !*** ./src/app/product/editproduct/editproduct.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0cHJvZHVjdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    41030:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/editproduct/editproduct.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>editproduct</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_product_editproduct_editproduct_module_ts-es5.js.map