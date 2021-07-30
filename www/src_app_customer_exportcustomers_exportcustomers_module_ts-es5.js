(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_customer_exportcustomers_exportcustomers_module_ts"], {
    /***/
    5485:
    /*!****************************************************************************!*\
      !*** ./src/app/customer/exportcustomers/exportcustomers-routing.module.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExportcustomersPageRoutingModule": function ExportcustomersPageRoutingModule() {
          return (
            /* binding */
            _ExportcustomersPageRoutingModule
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


      var _exportcustomers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./exportcustomers.page */
      16068);

      var routes = [{
        path: '',
        component: _exportcustomers_page__WEBPACK_IMPORTED_MODULE_0__.ExportcustomersPage
      }];

      var _ExportcustomersPageRoutingModule = function ExportcustomersPageRoutingModule() {
        _classCallCheck(this, ExportcustomersPageRoutingModule);
      };

      _ExportcustomersPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ExportcustomersPageRoutingModule);
      /***/
    },

    /***/
    81413:
    /*!********************************************************************!*\
      !*** ./src/app/customer/exportcustomers/exportcustomers.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExportcustomersPageModule": function ExportcustomersPageModule() {
          return (
            /* binding */
            _ExportcustomersPageModule
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


      var _exportcustomers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./exportcustomers-routing.module */
      5485);
      /* harmony import */


      var _exportcustomers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./exportcustomers.page */
      16068);

      var _ExportcustomersPageModule = function ExportcustomersPageModule() {
        _classCallCheck(this, ExportcustomersPageModule);
      };

      _ExportcustomersPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _exportcustomers_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExportcustomersPageRoutingModule],
        declarations: [_exportcustomers_page__WEBPACK_IMPORTED_MODULE_1__.ExportcustomersPage]
      })], _ExportcustomersPageModule);
      /***/
    },

    /***/
    16068:
    /*!******************************************************************!*\
      !*** ./src/app/customer/exportcustomers/exportcustomers.page.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExportcustomersPage": function ExportcustomersPage() {
          return (
            /* binding */
            _ExportcustomersPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_exportcustomers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./exportcustomers.page.html */
      97721);
      /* harmony import */


      var _exportcustomers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./exportcustomers.page.scss */
      40026);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ExportcustomersPage = /*#__PURE__*/function () {
        function ExportcustomersPage() {
          _classCallCheck(this, ExportcustomersPage);
        }

        _createClass(ExportcustomersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExportcustomersPage;
      }();

      _ExportcustomersPage.ctorParameters = function () {
        return [];
      };

      _ExportcustomersPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-exportcustomers',
        template: _raw_loader_exportcustomers_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_exportcustomers_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ExportcustomersPage);
      /***/
    },

    /***/
    40026:
    /*!********************************************************************!*\
      !*** ./src/app/customer/exportcustomers/exportcustomers.page.scss ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBvcnRjdXN0b21lcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    97721:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/exportcustomers/exportcustomers.page.html ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>EXPORT CUSTOMERS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_customer_exportcustomers_exportcustomers_module_ts-es5.js.map