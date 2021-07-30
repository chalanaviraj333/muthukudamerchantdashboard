(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_remoteshell_editremoteshell_editremoteshell_module_ts"], {
    /***/
    71756:
    /*!*******************************************************************************!*\
      !*** ./src/app/remoteshell/editremoteshell/editremoteshell-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditremoteshellPageRoutingModule": function EditremoteshellPageRoutingModule() {
          return (
            /* binding */
            _EditremoteshellPageRoutingModule
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


      var _editremoteshell_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editremoteshell.page */
      68658);

      var routes = [{
        path: '',
        component: _editremoteshell_page__WEBPACK_IMPORTED_MODULE_0__.EditremoteshellPage
      }];

      var _EditremoteshellPageRoutingModule = function EditremoteshellPageRoutingModule() {
        _classCallCheck(this, EditremoteshellPageRoutingModule);
      };

      _EditremoteshellPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditremoteshellPageRoutingModule);
      /***/
    },

    /***/
    3386:
    /*!***********************************************************************!*\
      !*** ./src/app/remoteshell/editremoteshell/editremoteshell.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditremoteshellPageModule": function EditremoteshellPageModule() {
          return (
            /* binding */
            _EditremoteshellPageModule
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


      var _editremoteshell_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editremoteshell-routing.module */
      71756);
      /* harmony import */


      var _editremoteshell_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editremoteshell.page */
      68658);

      var _EditremoteshellPageModule = function EditremoteshellPageModule() {
        _classCallCheck(this, EditremoteshellPageModule);
      };

      _EditremoteshellPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editremoteshell_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditremoteshellPageRoutingModule],
        declarations: [_editremoteshell_page__WEBPACK_IMPORTED_MODULE_1__.EditremoteshellPage]
      })], _EditremoteshellPageModule);
      /***/
    },

    /***/
    68658:
    /*!*********************************************************************!*\
      !*** ./src/app/remoteshell/editremoteshell/editremoteshell.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditremoteshellPage": function EditremoteshellPage() {
          return (
            /* binding */
            _EditremoteshellPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_editremoteshell_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./editremoteshell.page.html */
      98854);
      /* harmony import */


      var _editremoteshell_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editremoteshell.page.scss */
      11907);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EditremoteshellPage = /*#__PURE__*/function () {
        function EditremoteshellPage() {
          _classCallCheck(this, EditremoteshellPage);
        }

        _createClass(EditremoteshellPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditremoteshellPage;
      }();

      _EditremoteshellPage.ctorParameters = function () {
        return [];
      };

      _EditremoteshellPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editremoteshell',
        template: _raw_loader_editremoteshell_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editremoteshell_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditremoteshellPage);
      /***/
    },

    /***/
    11907:
    /*!***********************************************************************!*\
      !*** ./src/app/remoteshell/editremoteshell/editremoteshell.page.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0cmVtb3Rlc2hlbGwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    98854:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remoteshell/editremoteshell/editremoteshell.page.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>EDIT REMOTE SHELL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_remoteshell_editremoteshell_editremoteshell_module_ts-es5.js.map