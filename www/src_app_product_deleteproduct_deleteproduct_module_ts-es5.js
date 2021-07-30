(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_product_deleteproduct_deleteproduct_module_ts"], {
    /***/
    76601:
    /*!***********************************************************************!*\
      !*** ./src/app/product/deleteproduct/deleteproduct-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeleteproductPageRoutingModule": function DeleteproductPageRoutingModule() {
          return (
            /* binding */
            _DeleteproductPageRoutingModule
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


      var _deleteproduct_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./deleteproduct.page */
      17930);

      var routes = [{
        path: '',
        component: _deleteproduct_page__WEBPACK_IMPORTED_MODULE_0__.DeleteproductPage
      }];

      var _DeleteproductPageRoutingModule = function DeleteproductPageRoutingModule() {
        _classCallCheck(this, DeleteproductPageRoutingModule);
      };

      _DeleteproductPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DeleteproductPageRoutingModule);
      /***/
    },

    /***/
    54215:
    /*!***************************************************************!*\
      !*** ./src/app/product/deleteproduct/deleteproduct.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeleteproductPageModule": function DeleteproductPageModule() {
          return (
            /* binding */
            _DeleteproductPageModule
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


      var _deleteproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./deleteproduct-routing.module */
      76601);
      /* harmony import */


      var _deleteproduct_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deleteproduct.page */
      17930);

      var _DeleteproductPageModule = function DeleteproductPageModule() {
        _classCallCheck(this, DeleteproductPageModule);
      };

      _DeleteproductPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _deleteproduct_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeleteproductPageRoutingModule],
        declarations: [_deleteproduct_page__WEBPACK_IMPORTED_MODULE_1__.DeleteproductPage]
      })], _DeleteproductPageModule);
      /***/
    },

    /***/
    17930:
    /*!*************************************************************!*\
      !*** ./src/app/product/deleteproduct/deleteproduct.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeleteproductPage": function DeleteproductPage() {
          return (
            /* binding */
            _DeleteproductPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_deleteproduct_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./deleteproduct.page.html */
      13856);
      /* harmony import */


      var _deleteproduct_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deleteproduct.page.scss */
      636);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DeleteproductPage = /*#__PURE__*/function () {
        function DeleteproductPage() {
          _classCallCheck(this, DeleteproductPage);
        }

        _createClass(DeleteproductPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeleteproductPage;
      }();

      _DeleteproductPage.ctorParameters = function () {
        return [];
      };

      _DeleteproductPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-deleteproduct',
        template: _raw_loader_deleteproduct_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_deleteproduct_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DeleteproductPage);
      /***/
    },

    /***/
    636:
    /*!***************************************************************!*\
      !*** ./src/app/product/deleteproduct/deleteproduct.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVwcm9kdWN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    13856:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/deleteproduct/deleteproduct.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>deleteproduct</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_product_deleteproduct_deleteproduct_module_ts-es5.js.map