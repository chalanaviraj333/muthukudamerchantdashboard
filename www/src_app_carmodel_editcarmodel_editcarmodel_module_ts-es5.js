(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_carmodel_editcarmodel_editcarmodel_module_ts"], {
    /***/
    19020:
    /*!**********************************************************************!*\
      !*** ./src/app/carmodel/editcarmodel/editcarmodel-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcarmodelPageRoutingModule": function EditcarmodelPageRoutingModule() {
          return (
            /* binding */
            _EditcarmodelPageRoutingModule
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


      var _editcarmodel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editcarmodel.page */
      44134);

      var routes = [{
        path: '',
        component: _editcarmodel_page__WEBPACK_IMPORTED_MODULE_0__.EditcarmodelPage
      }];

      var _EditcarmodelPageRoutingModule = function EditcarmodelPageRoutingModule() {
        _classCallCheck(this, EditcarmodelPageRoutingModule);
      };

      _EditcarmodelPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditcarmodelPageRoutingModule);
      /***/
    },

    /***/
    73378:
    /*!**************************************************************!*\
      !*** ./src/app/carmodel/editcarmodel/editcarmodel.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcarmodelPageModule": function EditcarmodelPageModule() {
          return (
            /* binding */
            _EditcarmodelPageModule
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


      var _editcarmodel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editcarmodel-routing.module */
      19020);
      /* harmony import */


      var _editcarmodel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editcarmodel.page */
      44134);

      var _EditcarmodelPageModule = function EditcarmodelPageModule() {
        _classCallCheck(this, EditcarmodelPageModule);
      };

      _EditcarmodelPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editcarmodel_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditcarmodelPageRoutingModule],
        declarations: [_editcarmodel_page__WEBPACK_IMPORTED_MODULE_1__.EditcarmodelPage]
      })], _EditcarmodelPageModule);
      /***/
    },

    /***/
    44134:
    /*!************************************************************!*\
      !*** ./src/app/carmodel/editcarmodel/editcarmodel.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditcarmodelPage": function EditcarmodelPage() {
          return (
            /* binding */
            _EditcarmodelPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_editcarmodel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./editcarmodel.page.html */
      92174);
      /* harmony import */


      var _editcarmodel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editcarmodel.page.scss */
      7036);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EditcarmodelPage = /*#__PURE__*/function () {
        function EditcarmodelPage() {
          _classCallCheck(this, EditcarmodelPage);
        }

        _createClass(EditcarmodelPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditcarmodelPage;
      }();

      _EditcarmodelPage.ctorParameters = function () {
        return [];
      };

      _EditcarmodelPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editcarmodel',
        template: _raw_loader_editcarmodel_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editcarmodel_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditcarmodelPage);
      /***/
    },

    /***/
    7036:
    /*!**************************************************************!*\
      !*** ./src/app/carmodel/editcarmodel/editcarmodel.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0Y2FybW9kZWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    92174:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carmodel/editcarmodel/editcarmodel.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>EDIT CAR MODEL</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_carmodel_editcarmodel_editcarmodel_module_ts-es5.js.map