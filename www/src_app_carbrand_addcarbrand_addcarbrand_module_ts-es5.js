(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carbrand_addcarbrand_addcarbrand_module_ts"], {
    /***/
    947:
    /*!********************************************************************!*\
      !*** ./src/app/carbrand/addcarbrand/addcarbrand-routing.module.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddcarbrandPageRoutingModule": function AddcarbrandPageRoutingModule() {
          return (
            /* binding */
            _AddcarbrandPageRoutingModule
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


      var _addcarbrand_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addcarbrand.page */
      43083);

      var routes = [{
        path: '',
        component: _addcarbrand_page__WEBPACK_IMPORTED_MODULE_0__.AddcarbrandPage
      }];

      var _AddcarbrandPageRoutingModule = function AddcarbrandPageRoutingModule() {
        _classCallCheck(this, AddcarbrandPageRoutingModule);
      };

      _AddcarbrandPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddcarbrandPageRoutingModule);
      /***/
    },

    /***/
    68857:
    /*!************************************************************!*\
      !*** ./src/app/carbrand/addcarbrand/addcarbrand.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddcarbrandPageModule": function AddcarbrandPageModule() {
          return (
            /* binding */
            _AddcarbrandPageModule
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


      var _addcarbrand_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addcarbrand-routing.module */
      947);
      /* harmony import */


      var _addcarbrand_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./addcarbrand.page */
      43083);

      var _AddcarbrandPageModule = function AddcarbrandPageModule() {
        _classCallCheck(this, AddcarbrandPageModule);
      };

      _AddcarbrandPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _addcarbrand_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddcarbrandPageRoutingModule],
        declarations: [_addcarbrand_page__WEBPACK_IMPORTED_MODULE_1__.AddcarbrandPage]
      })], _AddcarbrandPageModule);
      /***/
    },

    /***/
    43083:
    /*!**********************************************************!*\
      !*** ./src/app/carbrand/addcarbrand/addcarbrand.page.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddcarbrandPage": function AddcarbrandPage() {
          return (
            /* binding */
            _AddcarbrandPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_addcarbrand_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./addcarbrand.page.html */
      84680);
      /* harmony import */


      var _addcarbrand_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./addcarbrand.page.scss */
      41528);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AddcarbrandPage = /*#__PURE__*/function () {
        function AddcarbrandPage() {
          _classCallCheck(this, AddcarbrandPage);
        }

        _createClass(AddcarbrandPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddcarbrandPage;
      }();

      _AddcarbrandPage.ctorParameters = function () {
        return [];
      };

      _AddcarbrandPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-addcarbrand',
        template: _raw_loader_addcarbrand_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_addcarbrand_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddcarbrandPage);
      /***/
    },

    /***/
    41528:
    /*!************************************************************!*\
      !*** ./src/app/carbrand/addcarbrand/addcarbrand.page.scss ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRjYXJicmFuZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    84680:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carbrand/addcarbrand/addcarbrand.page.html ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADD CAR BRAND</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_carbrand_addcarbrand_addcarbrand_module_ts-es5.js.map