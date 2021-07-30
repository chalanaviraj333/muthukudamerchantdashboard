(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_customer_deletecustomer_deletecustomer_module_ts"], {
    /***/
    71453:
    /*!**************************************************************************!*\
      !*** ./src/app/customer/deletecustomer/deletecustomer-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeletecustomerPageRoutingModule": function DeletecustomerPageRoutingModule() {
          return (
            /* binding */
            _DeletecustomerPageRoutingModule
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


      var _deletecustomer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./deletecustomer.page */
      33763);

      var routes = [{
        path: '',
        component: _deletecustomer_page__WEBPACK_IMPORTED_MODULE_0__.DeletecustomerPage
      }];

      var _DeletecustomerPageRoutingModule = function DeletecustomerPageRoutingModule() {
        _classCallCheck(this, DeletecustomerPageRoutingModule);
      };

      _DeletecustomerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DeletecustomerPageRoutingModule);
      /***/
    },

    /***/
    10073:
    /*!******************************************************************!*\
      !*** ./src/app/customer/deletecustomer/deletecustomer.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeletecustomerPageModule": function DeletecustomerPageModule() {
          return (
            /* binding */
            _DeletecustomerPageModule
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


      var _deletecustomer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./deletecustomer-routing.module */
      71453);
      /* harmony import */


      var _deletecustomer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deletecustomer.page */
      33763);

      var _DeletecustomerPageModule = function DeletecustomerPageModule() {
        _classCallCheck(this, DeletecustomerPageModule);
      };

      _DeletecustomerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _deletecustomer_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeletecustomerPageRoutingModule],
        declarations: [_deletecustomer_page__WEBPACK_IMPORTED_MODULE_1__.DeletecustomerPage]
      })], _DeletecustomerPageModule);
      /***/
    },

    /***/
    33763:
    /*!****************************************************************!*\
      !*** ./src/app/customer/deletecustomer/deletecustomer.page.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeletecustomerPage": function DeletecustomerPage() {
          return (
            /* binding */
            _DeletecustomerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_deletecustomer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./deletecustomer.page.html */
      43245);
      /* harmony import */


      var _deletecustomer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deletecustomer.page.scss */
      4220);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DeletecustomerPage = /*#__PURE__*/function () {
        function DeletecustomerPage() {
          _classCallCheck(this, DeletecustomerPage);
        }

        _createClass(DeletecustomerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeletecustomerPage;
      }();

      _DeletecustomerPage.ctorParameters = function () {
        return [];
      };

      _DeletecustomerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-deletecustomer',
        template: _raw_loader_deletecustomer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_deletecustomer_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DeletecustomerPage);
      /***/
    },

    /***/
    4220:
    /*!******************************************************************!*\
      !*** ./src/app/customer/deletecustomer/deletecustomer.page.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVjdXN0b21lci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    43245:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/deletecustomer/deletecustomer.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>DELETE CUSTOMERS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_customer_deletecustomer_deletecustomer_module_ts-es5.js.map