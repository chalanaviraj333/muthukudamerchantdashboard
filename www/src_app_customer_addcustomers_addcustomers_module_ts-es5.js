(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_customer_addcustomers_addcustomers_module_ts"], {
    /***/
    47700:
    /*!**********************************************************************!*\
      !*** ./src/app/customer/addcustomers/addcustomers-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddcustomersPageRoutingModule": function AddcustomersPageRoutingModule() {
          return (
            /* binding */
            _AddcustomersPageRoutingModule
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


      var _addcustomers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addcustomers.page */
      20616);

      var routes = [{
        path: '',
        component: _addcustomers_page__WEBPACK_IMPORTED_MODULE_0__.AddcustomersPage
      }];

      var _AddcustomersPageRoutingModule = function AddcustomersPageRoutingModule() {
        _classCallCheck(this, AddcustomersPageRoutingModule);
      };

      _AddcustomersPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddcustomersPageRoutingModule);
      /***/
    },

    /***/
    17852:
    /*!**************************************************************!*\
      !*** ./src/app/customer/addcustomers/addcustomers.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddcustomersPageModule": function AddcustomersPageModule() {
          return (
            /* binding */
            _AddcustomersPageModule
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


      var _addcustomers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addcustomers-routing.module */
      47700);
      /* harmony import */


      var _addcustomers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./addcustomers.page */
      20616);

      var _AddcustomersPageModule = function AddcustomersPageModule() {
        _classCallCheck(this, AddcustomersPageModule);
      };

      _AddcustomersPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _addcustomers_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddcustomersPageRoutingModule],
        declarations: [_addcustomers_page__WEBPACK_IMPORTED_MODULE_1__.AddcustomersPage]
      })], _AddcustomersPageModule);
      /***/
    },

    /***/
    20616:
    /*!************************************************************!*\
      !*** ./src/app/customer/addcustomers/addcustomers.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddcustomersPage": function AddcustomersPage() {
          return (
            /* binding */
            _AddcustomersPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_addcustomers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./addcustomers.page.html */
      88140);
      /* harmony import */


      var _addcustomers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./addcustomers.page.scss */
      38249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AddcustomersPage = /*#__PURE__*/function () {
        function AddcustomersPage() {
          _classCallCheck(this, AddcustomersPage);
        }

        _createClass(AddcustomersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddcustomersPage;
      }();

      _AddcustomersPage.ctorParameters = function () {
        return [];
      };

      _AddcustomersPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-addcustomers',
        template: _raw_loader_addcustomers_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_addcustomers_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddcustomersPage);
      /***/
    },

    /***/
    38249:
    /*!**************************************************************!*\
      !*** ./src/app/customer/addcustomers/addcustomers.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRjdXN0b21lcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    88140:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/addcustomers/addcustomers.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADD CUSTOMERS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_customer_addcustomers_addcustomers_module_ts-es5.js.map