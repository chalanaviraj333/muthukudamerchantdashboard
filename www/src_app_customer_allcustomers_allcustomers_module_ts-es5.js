(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_customer_allcustomers_allcustomers_module_ts"], {
    /***/
    81212:
    /*!**********************************************************************!*\
      !*** ./src/app/customer/allcustomers/allcustomers-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcustomersPageRoutingModule": function AllcustomersPageRoutingModule() {
          return (
            /* binding */
            _AllcustomersPageRoutingModule
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


      var _allcustomers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allcustomers.page */
      88472);

      var routes = [{
        path: '',
        component: _allcustomers_page__WEBPACK_IMPORTED_MODULE_0__.AllcustomersPage
      }];

      var _AllcustomersPageRoutingModule = function AllcustomersPageRoutingModule() {
        _classCallCheck(this, AllcustomersPageRoutingModule);
      };

      _AllcustomersPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AllcustomersPageRoutingModule);
      /***/
    },

    /***/
    94773:
    /*!**************************************************************!*\
      !*** ./src/app/customer/allcustomers/allcustomers.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcustomersPageModule": function AllcustomersPageModule() {
          return (
            /* binding */
            _AllcustomersPageModule
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


      var _allcustomers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allcustomers-routing.module */
      81212);
      /* harmony import */


      var _allcustomers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allcustomers.page */
      88472);

      var _AllcustomersPageModule = function AllcustomersPageModule() {
        _classCallCheck(this, AllcustomersPageModule);
      };

      _AllcustomersPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _allcustomers_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllcustomersPageRoutingModule],
        declarations: [_allcustomers_page__WEBPACK_IMPORTED_MODULE_1__.AllcustomersPage]
      })], _AllcustomersPageModule);
      /***/
    },

    /***/
    88472:
    /*!************************************************************!*\
      !*** ./src/app/customer/allcustomers/allcustomers.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcustomersPage": function AllcustomersPage() {
          return (
            /* binding */
            _AllcustomersPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_allcustomers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./allcustomers.page.html */
      64882);
      /* harmony import */


      var _allcustomers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allcustomers.page.scss */
      36008);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AllcustomersPage = /*#__PURE__*/function () {
        function AllcustomersPage() {
          _classCallCheck(this, AllcustomersPage);
        }

        _createClass(AllcustomersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllcustomersPage;
      }();

      _AllcustomersPage.ctorParameters = function () {
        return [];
      };

      _AllcustomersPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-allcustomers',
        template: _raw_loader_allcustomers_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_allcustomers_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AllcustomersPage);
      /***/
    },

    /***/
    36008:
    /*!**************************************************************!*\
      !*** ./src/app/customer/allcustomers/allcustomers.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxjdXN0b21lcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    64882:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/allcustomers/allcustomers.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ALL CUSTOMERS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_customer_allcustomers_allcustomers_module_ts-es5.js.map