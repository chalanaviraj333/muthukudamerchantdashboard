(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carremote_addremote_addremote_module_ts"], {
    /***/
    98620:
    /*!*****************************************************************!*\
      !*** ./src/app/carremote/addremote/addremote-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddremotePageRoutingModule": function AddremotePageRoutingModule() {
          return (
            /* binding */
            _AddremotePageRoutingModule
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


      var _addremote_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addremote.page */
      54657);

      var routes = [{
        path: '',
        component: _addremote_page__WEBPACK_IMPORTED_MODULE_0__.AddremotePage
      }];

      var _AddremotePageRoutingModule = function AddremotePageRoutingModule() {
        _classCallCheck(this, AddremotePageRoutingModule);
      };

      _AddremotePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddremotePageRoutingModule);
      /***/
    },

    /***/
    91007:
    /*!*********************************************************!*\
      !*** ./src/app/carremote/addremote/addremote.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddremotePageModule": function AddremotePageModule() {
          return (
            /* binding */
            _AddremotePageModule
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


      var _addremote_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addremote-routing.module */
      98620);
      /* harmony import */


      var _addremote_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./addremote.page */
      54657);

      var _AddremotePageModule = function AddremotePageModule() {
        _classCallCheck(this, AddremotePageModule);
      };

      _AddremotePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _addremote_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddremotePageRoutingModule],
        declarations: [_addremote_page__WEBPACK_IMPORTED_MODULE_1__.AddremotePage]
      })], _AddremotePageModule);
      /***/
    },

    /***/
    54657:
    /*!*******************************************************!*\
      !*** ./src/app/carremote/addremote/addremote.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddremotePage": function AddremotePage() {
          return (
            /* binding */
            _AddremotePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_addremote_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./addremote.page.html */
      54269);
      /* harmony import */


      var _addremote_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./addremote.page.scss */
      21645);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AddremotePage = /*#__PURE__*/function () {
        function AddremotePage() {
          _classCallCheck(this, AddremotePage);
        }

        _createClass(AddremotePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddremotePage;
      }();

      _AddremotePage.ctorParameters = function () {
        return [];
      };

      _AddremotePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-addremote',
        template: _raw_loader_addremote_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_addremote_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddremotePage);
      /***/
    },

    /***/
    21645:
    /*!*********************************************************!*\
      !*** ./src/app/carremote/addremote/addremote.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRyZW1vdGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    54269:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carremote/addremote/addremote.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADD REMOTE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_carremote_addremote_addremote_module_ts-es5.js.map