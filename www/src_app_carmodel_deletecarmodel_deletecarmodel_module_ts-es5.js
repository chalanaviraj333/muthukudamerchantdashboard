(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carmodel_deletecarmodel_deletecarmodel_module_ts"], {
    /***/
    42833:
    /*!**************************************************************************!*\
      !*** ./src/app/carmodel/deletecarmodel/deletecarmodel-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeletecarmodelPageRoutingModule": function DeletecarmodelPageRoutingModule() {
          return (
            /* binding */
            _DeletecarmodelPageRoutingModule
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


      var _deletecarmodel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./deletecarmodel.page */
      8104);

      var routes = [{
        path: '',
        component: _deletecarmodel_page__WEBPACK_IMPORTED_MODULE_0__.DeletecarmodelPage
      }];

      var _DeletecarmodelPageRoutingModule = function DeletecarmodelPageRoutingModule() {
        _classCallCheck(this, DeletecarmodelPageRoutingModule);
      };

      _DeletecarmodelPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DeletecarmodelPageRoutingModule);
      /***/
    },

    /***/
    18933:
    /*!******************************************************************!*\
      !*** ./src/app/carmodel/deletecarmodel/deletecarmodel.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeletecarmodelPageModule": function DeletecarmodelPageModule() {
          return (
            /* binding */
            _DeletecarmodelPageModule
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


      var _deletecarmodel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./deletecarmodel-routing.module */
      42833);
      /* harmony import */


      var _deletecarmodel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deletecarmodel.page */
      8104);

      var _DeletecarmodelPageModule = function DeletecarmodelPageModule() {
        _classCallCheck(this, DeletecarmodelPageModule);
      };

      _DeletecarmodelPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _deletecarmodel_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeletecarmodelPageRoutingModule],
        declarations: [_deletecarmodel_page__WEBPACK_IMPORTED_MODULE_1__.DeletecarmodelPage]
      })], _DeletecarmodelPageModule);
      /***/
    },

    /***/
    8104:
    /*!****************************************************************!*\
      !*** ./src/app/carmodel/deletecarmodel/deletecarmodel.page.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DeletecarmodelPage": function DeletecarmodelPage() {
          return (
            /* binding */
            _DeletecarmodelPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_deletecarmodel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./deletecarmodel.page.html */
      74152);
      /* harmony import */


      var _deletecarmodel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./deletecarmodel.page.scss */
      85289);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DeletecarmodelPage = /*#__PURE__*/function () {
        function DeletecarmodelPage() {
          _classCallCheck(this, DeletecarmodelPage);
        }

        _createClass(DeletecarmodelPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeletecarmodelPage;
      }();

      _DeletecarmodelPage.ctorParameters = function () {
        return [];
      };

      _DeletecarmodelPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-deletecarmodel',
        template: _raw_loader_deletecarmodel_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_deletecarmodel_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DeletecarmodelPage);
      /***/
    },

    /***/
    85289:
    /*!******************************************************************!*\
      !*** ./src/app/carmodel/deletecarmodel/deletecarmodel.page.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGVjYXJtb2RlbC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    74152:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carmodel/deletecarmodel/deletecarmodel.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>DELETE CAR MODELS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_carmodel_deletecarmodel_deletecarmodel_module_ts-es5.js.map