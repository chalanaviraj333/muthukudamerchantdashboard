(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carmodel_allcarmodels_allcarmodels_module_ts"], {
    /***/
    49663:
    /*!**********************************************************************!*\
      !*** ./src/app/carmodel/allcarmodels/allcarmodels-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcarmodelsPageRoutingModule": function AllcarmodelsPageRoutingModule() {
          return (
            /* binding */
            _AllcarmodelsPageRoutingModule
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


      var _allcarmodels_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allcarmodels.page */
      69866);

      var routes = [{
        path: '',
        component: _allcarmodels_page__WEBPACK_IMPORTED_MODULE_0__.AllcarmodelsPage
      }];

      var _AllcarmodelsPageRoutingModule = function AllcarmodelsPageRoutingModule() {
        _classCallCheck(this, AllcarmodelsPageRoutingModule);
      };

      _AllcarmodelsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AllcarmodelsPageRoutingModule);
      /***/
    },

    /***/
    26764:
    /*!**************************************************************!*\
      !*** ./src/app/carmodel/allcarmodels/allcarmodels.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcarmodelsPageModule": function AllcarmodelsPageModule() {
          return (
            /* binding */
            _AllcarmodelsPageModule
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


      var _allcarmodels_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./allcarmodels-routing.module */
      49663);
      /* harmony import */


      var _allcarmodels_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allcarmodels.page */
      69866);

      var _AllcarmodelsPageModule = function AllcarmodelsPageModule() {
        _classCallCheck(this, AllcarmodelsPageModule);
      };

      _AllcarmodelsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _allcarmodels_routing_module__WEBPACK_IMPORTED_MODULE_0__.AllcarmodelsPageRoutingModule],
        declarations: [_allcarmodels_page__WEBPACK_IMPORTED_MODULE_1__.AllcarmodelsPage]
      })], _AllcarmodelsPageModule);
      /***/
    },

    /***/
    69866:
    /*!************************************************************!*\
      !*** ./src/app/carmodel/allcarmodels/allcarmodels.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AllcarmodelsPage": function AllcarmodelsPage() {
          return (
            /* binding */
            _AllcarmodelsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_allcarmodels_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./allcarmodels.page.html */
      36225);
      /* harmony import */


      var _allcarmodels_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./allcarmodels.page.scss */
      34403);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AllcarmodelsPage = /*#__PURE__*/function () {
        function AllcarmodelsPage() {
          _classCallCheck(this, AllcarmodelsPage);
        }

        _createClass(AllcarmodelsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllcarmodelsPage;
      }();

      _AllcarmodelsPage.ctorParameters = function () {
        return [];
      };

      _AllcarmodelsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-allcarmodels',
        template: _raw_loader_allcarmodels_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_allcarmodels_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AllcarmodelsPage);
      /***/
    },

    /***/
    34403:
    /*!**************************************************************!*\
      !*** ./src/app/carmodel/allcarmodels/allcarmodels.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGxjYXJtb2RlbHMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    36225:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carmodel/allcarmodels/allcarmodels.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ALL CAR MODELS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_carmodel_allcarmodels_allcarmodels_module_ts-es5.js.map