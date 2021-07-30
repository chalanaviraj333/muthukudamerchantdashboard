(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_customer_editcustomer_editcustomer_module_ts"], {
    /***/
    63097:
    /*!**********************************************************************!*\
      !*** ./src/app/customer/editcustomer/editcustomer-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcustomerPageRoutingModule": function EditcustomerPageRoutingModule() {
          return (
            /* binding */
            _EditcustomerPageRoutingModule
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


      var _editcustomer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editcustomer.page */
      72751);

      var routes = [{
        path: '',
        component: _editcustomer_page__WEBPACK_IMPORTED_MODULE_0__.EditcustomerPage
      }];

      var _EditcustomerPageRoutingModule = function EditcustomerPageRoutingModule() {
        _classCallCheck(this, EditcustomerPageRoutingModule);
      };

      _EditcustomerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditcustomerPageRoutingModule);
      /***/
    },

    /***/
    62007:
    /*!**************************************************************!*\
      !*** ./src/app/customer/editcustomer/editcustomer.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcustomerPageModule": function EditcustomerPageModule() {
          return (
            /* binding */
            _EditcustomerPageModule
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


      var _editcustomer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editcustomer-routing.module */
      63097);
      /* harmony import */


      var _editcustomer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editcustomer.page */
      72751);

      var _EditcustomerPageModule = function EditcustomerPageModule() {
        _classCallCheck(this, EditcustomerPageModule);
      };

      _EditcustomerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editcustomer_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditcustomerPageRoutingModule],
        declarations: [_editcustomer_page__WEBPACK_IMPORTED_MODULE_1__.EditcustomerPage]
      })], _EditcustomerPageModule);
      /***/
    },

    /***/
    72751:
    /*!************************************************************!*\
      !*** ./src/app/customer/editcustomer/editcustomer.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcustomerPage": function EditcustomerPage() {
          return (
            /* binding */
            _EditcustomerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_editcustomer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./editcustomer.page.html */
      8529);
      /* harmony import */


      var _editcustomer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editcustomer.page.scss */
      98436);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EditcustomerPage = /*#__PURE__*/function () {
        function EditcustomerPage() {
          _classCallCheck(this, EditcustomerPage);
        }

        _createClass(EditcustomerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditcustomerPage;
      }();

      _EditcustomerPage.ctorParameters = function () {
        return [];
      };

      _EditcustomerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editcustomer',
        template: _raw_loader_editcustomer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editcustomer_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditcustomerPage);
      /***/
    },

    /***/
    98436:
    /*!**************************************************************!*\
      !*** ./src/app/customer/editcustomer/editcustomer.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0Y3VzdG9tZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    8529:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/editcustomer/editcustomer.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>EDIT CUSTOMERS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_customer_editcustomer_editcustomer_module_ts-es5.js.map