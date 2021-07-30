(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carbrand_editcarbrand_editcarbrand_module_ts"], {
    /***/
    37478:
    /*!**********************************************************************!*\
      !*** ./src/app/carbrand/editcarbrand/editcarbrand-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcarbrandPageRoutingModule": function EditcarbrandPageRoutingModule() {
          return (
            /* binding */
            _EditcarbrandPageRoutingModule
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


      var _editcarbrand_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editcarbrand.page */
      98547);

      var routes = [{
        path: '',
        component: _editcarbrand_page__WEBPACK_IMPORTED_MODULE_0__.EditcarbrandPage
      }];

      var _EditcarbrandPageRoutingModule = function EditcarbrandPageRoutingModule() {
        _classCallCheck(this, EditcarbrandPageRoutingModule);
      };

      _EditcarbrandPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditcarbrandPageRoutingModule);
      /***/
    },

    /***/
    10271:
    /*!**************************************************************!*\
      !*** ./src/app/carbrand/editcarbrand/editcarbrand.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcarbrandPageModule": function EditcarbrandPageModule() {
          return (
            /* binding */
            _EditcarbrandPageModule
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


      var _editcarbrand_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editcarbrand-routing.module */
      37478);
      /* harmony import */


      var _editcarbrand_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editcarbrand.page */
      98547);

      var _EditcarbrandPageModule = function EditcarbrandPageModule() {
        _classCallCheck(this, EditcarbrandPageModule);
      };

      _EditcarbrandPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editcarbrand_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditcarbrandPageRoutingModule],
        declarations: [_editcarbrand_page__WEBPACK_IMPORTED_MODULE_1__.EditcarbrandPage]
      })], _EditcarbrandPageModule);
      /***/
    },

    /***/
    98547:
    /*!************************************************************!*\
      !*** ./src/app/carbrand/editcarbrand/editcarbrand.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcarbrandPage": function EditcarbrandPage() {
          return (
            /* binding */
            _EditcarbrandPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_editcarbrand_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./editcarbrand.page.html */
      90997);
      /* harmony import */


      var _editcarbrand_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editcarbrand.page.scss */
      72894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EditcarbrandPage = /*#__PURE__*/function () {
        function EditcarbrandPage() {
          _classCallCheck(this, EditcarbrandPage);
        }

        _createClass(EditcarbrandPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditcarbrandPage;
      }();

      _EditcarbrandPage.ctorParameters = function () {
        return [];
      };

      _EditcarbrandPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editcarbrand',
        template: _raw_loader_editcarbrand_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editcarbrand_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditcarbrandPage);
      /***/
    },

    /***/
    72894:
    /*!**************************************************************!*\
      !*** ./src/app/carbrand/editcarbrand/editcarbrand.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0Y2FyYnJhbmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    90997:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carbrand/editcarbrand/editcarbrand.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>EDIT CAR BRAND</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_carbrand_editcarbrand_editcarbrand_module_ts-es5.js.map