(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["src_app_category_addnewcategory_addnewcategory_module_ts"], {
    /***/
    62622:
    /*!**************************************************************************!*\
      !*** ./src/app/category/addnewcategory/addnewcategory-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddnewcategoryPageRoutingModule": function AddnewcategoryPageRoutingModule() {
          return (
            /* binding */
            _AddnewcategoryPageRoutingModule
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


      var _addnewcategory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addnewcategory.page */
      12837);

      var routes = [{
        path: '',
        component: _addnewcategory_page__WEBPACK_IMPORTED_MODULE_0__.AddnewcategoryPage
      }];

      var _AddnewcategoryPageRoutingModule = function AddnewcategoryPageRoutingModule() {
        _classCallCheck(this, AddnewcategoryPageRoutingModule);
      };

      _AddnewcategoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AddnewcategoryPageRoutingModule);
      /***/
    },

    /***/
    34708:
    /*!******************************************************************!*\
      !*** ./src/app/category/addnewcategory/addnewcategory.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddnewcategoryPageModule": function AddnewcategoryPageModule() {
          return (
            /* binding */
            _AddnewcategoryPageModule
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


      var _addnewcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./addnewcategory-routing.module */
      62622);
      /* harmony import */


      var _addnewcategory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./addnewcategory.page */
      12837);

      var _AddnewcategoryPageModule = function AddnewcategoryPageModule() {
        _classCallCheck(this, AddnewcategoryPageModule);
      };

      _AddnewcategoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _addnewcategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddnewcategoryPageRoutingModule],
        declarations: [_addnewcategory_page__WEBPACK_IMPORTED_MODULE_1__.AddnewcategoryPage]
      })], _AddnewcategoryPageModule);
      /***/
    },

    /***/
    12837:
    /*!****************************************************************!*\
      !*** ./src/app/category/addnewcategory/addnewcategory.page.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddnewcategoryPage": function AddnewcategoryPage() {
          return (
            /* binding */
            _AddnewcategoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_addnewcategory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./addnewcategory.page.html */
      94717);
      /* harmony import */


      var _addnewcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./addnewcategory.page.scss */
      23217);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AddnewcategoryPage = /*#__PURE__*/function () {
        function AddnewcategoryPage(http, toastController) {
          _classCallCheck(this, AddnewcategoryPage);

          this.http = http;
          this.toastController = toastController;
        }

        _createClass(AddnewcategoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentToast",
          value: function presentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'New Category Successfully Saved!',
                        cssClass: "backtoast",
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this = this;

            if (!form.valid) {
              return;
            }

            var newCategory = {
              key: null,
              categoryName: form.value.categoryName,
              categoryItems: []
            };
            this.http.post("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/product-categories.json", newCategory).subscribe(function (resData) {
              form.reset();

              _this.presentToast();
            });
          }
        }]);

        return AddnewcategoryPage;
      }();

      _AddnewcategoryPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }];
      };

      _AddnewcategoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-addnewcategory',
        template: _raw_loader_addnewcategory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_addnewcategory_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AddnewcategoryPage);
      /***/
    },

    /***/
    23217:
    /*!******************************************************************!*\
      !*** ./src/app/category/addnewcategory/addnewcategory.page.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n\nion-button {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG5ld2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJhZGRuZXdjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    94717:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category/addnewcategory/addnewcategory.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADD PRODUCTS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n    <ion-item>\n      <ion-label class=\"inputClass\" position=\"floating\">Category Name</ion-label>\n      <ion-input class=\"inputClass ion-text-capitalize\" type=\"text\" ngModel name=\"categoryName\" required #categoryNameCtrl=\"ngModel\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"!categoryNameCtrl.valid && categoryNameCtrl.touched\" lines=\"none\">\n      <ion-label class=\"fontFamily\" color=\"danger\">Category Name field should not be empty</ion-label>\n    </ion-item>\n\n    <br>\n    <ion-button class=\"addCarButton fontFamily\" color=\"success\" type=\"submit\" expand=\"block\" shape=\"round\" [disabled]=\"!f.valid\">ADD CATEGORY</ion-button>\n\n  </form>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_category_addnewcategory_addnewcategory_module_ts-es5.js.map