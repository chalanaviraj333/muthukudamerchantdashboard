(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_remoteshell_allremoteshells_allremoteshells_module_ts"], {
    /***/
    38902:
    /*!*******************************************************************************!*\
      !*** ./src/app/remoteshell/allremoteshells/allremoteshells-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllremoteshellsPageRoutingModule": function AllremoteshellsPageRoutingModule() {
          return (
            /* binding */
            _AllremoteshellsPageRoutingModule
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


      var _allremoteshells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allremoteshells.page */
      90632);

      var routes = [{
        path: '',
        component: _allremoteshells_page__WEBPACK_IMPORTED_MODULE_0__.AllremoteshellsPage
      }];

      var _AllremoteshellsPageRoutingModule = function AllremoteshellsPageRoutingModule() {
        _classCallCheck(this, AllremoteshellsPageRoutingModule);
      };

      _AllremoteshellsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AllremoteshellsPageRoutingModule);
      /***/
    },

    /***/
    37996:
    /*!***********************************************************************!*\
      !*** ./src/app/remoteshell/allremoteshells/allremoteshells.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllremoteshellsPageModule": function AllremoteshellsPageModule() {
          return (
            /* binding */
            _AllremoteshellsPageModule
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


      var _allremoteshells_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allremoteshells-routing.module */
      38902);
      /* harmony import */


      var _allremoteshells_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allremoteshells.page */
      90632);

      var _AllremoteshellsPageModule = function AllremoteshellsPageModule() {
        _classCallCheck(this, AllremoteshellsPageModule);
      };

      _AllremoteshellsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _allremoteshells_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllremoteshellsPageRoutingModule],
        declarations: [_allremoteshells_page__WEBPACK_IMPORTED_MODULE_1__.AllremoteshellsPage]
      })], _AllremoteshellsPageModule);
      /***/
    },

    /***/
    90632:
    /*!*********************************************************************!*\
      !*** ./src/app/remoteshell/allremoteshells/allremoteshells.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllremoteshellsPage": function AllremoteshellsPage() {
          return (
            /* binding */
            _AllremoteshellsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_allremoteshells_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./allremoteshells.page.html */
      29308);
      /* harmony import */


      var _allremoteshells_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allremoteshells.page.scss */
      90211);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AllremoteshellsPage = /*#__PURE__*/function () {
        function AllremoteshellsPage() {
          _classCallCheck(this, AllremoteshellsPage);
        }

        _createClass(AllremoteshellsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllremoteshellsPage;
      }();

      _AllremoteshellsPage.ctorParameters = function () {
        return [];
      };

      _AllremoteshellsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-allremoteshells',
        template: _raw_loader_allremoteshells_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_allremoteshells_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AllremoteshellsPage);
      /***/
    },

    /***/
    90211:
    /*!***********************************************************************!*\
      !*** ./src/app/remoteshell/allremoteshells/allremoteshells.page.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxyZW1vdGVzaGVsbHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    29308:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remoteshell/allremoteshells/allremoteshells.page.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ALL REMOTE SHELL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_remoteshell_allremoteshells_allremoteshells_module_ts-es5.js.map