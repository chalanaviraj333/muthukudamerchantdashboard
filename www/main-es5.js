(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunktapsynewdashboard"] = self["webpackChunktapsynewdashboard"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: 'allcustomers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customer_allcustomers_allcustomers_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customer/allcustomers/allcustomers.module */
          94773)).then(function (m) {
            return m.AllcustomersPageModule;
          });
        }
      }, {
        path: 'addcustomers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customer_addcustomers_addcustomers_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customer/addcustomers/addcustomers.module */
          17852)).then(function (m) {
            return m.AddcustomersPageModule;
          });
        }
      }, {
        path: 'editcustomer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customer_editcustomer_editcustomer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customer/editcustomer/editcustomer.module */
          62007)).then(function (m) {
            return m.EditcustomerPageModule;
          });
        }
      }, {
        path: 'deletecustomer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customer_deletecustomer_deletecustomer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customer/deletecustomer/deletecustomer.module */
          10073)).then(function (m) {
            return m.DeletecustomerPageModule;
          });
        }
      }, {
        path: 'exportcustomers',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_customer_exportcustomers_exportcustomers_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./customer/exportcustomers/exportcustomers.module */
          81413)).then(function (m) {
            return m.ExportcustomersPageModule;
          });
        }
      }, {
        path: 'allremotes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_carremote_allremotes_allremotes_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./carremote/allremotes/allremotes.module */
          79540)).then(function (m) {
            return m.AllremotesPageModule;
          });
        }
      }, {
        path: 'addremote',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carremote_addremote_addremote_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carremote/addremote/addremote.module */
          91007)).then(function (m) {
            return m.AddremotePageModule;
          });
        }
      }, {
        path: 'editremote',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carremote_editremote_editremote_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carremote/editremote/editremote.module */
          92356)).then(function (m) {
            return m.EditremotePageModule;
          });
        }
      }, {
        path: 'deleteremote',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carremote_deleteremote_deleteremote_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carremote/deleteremote/deleteremote.module */
          70541)).then(function (m) {
            return m.DeleteremotePageModule;
          });
        }
      }, {
        path: 'allremoteshells',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_remoteshell_allremoteshells_allremoteshells_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./remoteshell/allremoteshells/allremoteshells.module */
          37996)).then(function (m) {
            return m.AllremoteshellsPageModule;
          });
        }
      }, {
        path: 'addremoteshell',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_remoteshell_addremoteshell_addremoteshell_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./remoteshell/addremoteshell/addremoteshell.module */
          88033)).then(function (m) {
            return m.AddremoteshellPageModule;
          });
        }
      }, {
        path: 'editremoteshell',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_remoteshell_editremoteshell_editremoteshell_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./remoteshell/editremoteshell/editremoteshell.module */
          3386)).then(function (m) {
            return m.EditremoteshellPageModule;
          });
        }
      }, {
        path: 'deleteremoteshell',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_remoteshell_deleteremoteshell_deleteremoteshell_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./remoteshell/deleteremoteshell/deleteremoteshell.module */
          83882)).then(function (m) {
            return m.DeleteremoteshellPageModule;
          });
        }
      }, {
        path: 'allcarbrands',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carbrand_allcarbrands_allcarbrands_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carbrand/allcarbrands/allcarbrands.module */
          70995)).then(function (m) {
            return m.AllcarbrandsPageModule;
          });
        }
      }, {
        path: 'addcarbrand',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carbrand_addcarbrand_addcarbrand_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carbrand/addcarbrand/addcarbrand.module */
          68857)).then(function (m) {
            return m.AddcarbrandPageModule;
          });
        }
      }, {
        path: 'editcarbrand',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carbrand_editcarbrand_editcarbrand_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carbrand/editcarbrand/editcarbrand.module */
          10271)).then(function (m) {
            return m.EditcarbrandPageModule;
          });
        }
      }, {
        path: 'deletecarbrand',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carbrand_deletecarbrand_deletecarbrand_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carbrand/deletecarbrand/deletecarbrand.module */
          74530)).then(function (m) {
            return m.DeletecarbrandPageModule;
          });
        }
      }, {
        path: 'allcarmodels',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carmodel_allcarmodels_allcarmodels_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carmodel/allcarmodels/allcarmodels.module */
          26764)).then(function (m) {
            return m.AllcarmodelsPageModule;
          });
        }
      }, {
        path: 'addcarmodel',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carmodel_addcarmodel_addcarmodel_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carmodel/addcarmodel/addcarmodel.module */
          91019)).then(function (m) {
            return m.AddcarmodelPageModule;
          });
        }
      }, {
        path: 'editcarmodel',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carmodel_editcarmodel_editcarmodel_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carmodel/editcarmodel/editcarmodel.module */
          73378)).then(function (m) {
            return m.EditcarmodelPageModule;
          });
        }
      }, {
        path: 'deletecarmodel',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_carmodel_deletecarmodel_deletecarmodel_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./carmodel/deletecarmodel/deletecarmodel.module */
          18933)).then(function (m) {
            return m.DeletecarmodelPageModule;
          });
        }
      }, {
        path: 'carremote/remotedetailspage/:selectedRemote',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_carremote_remotedetailspage_remotedetailspage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./carremote/remotedetailspage/remotedetailspage.module */
          61907)).then(function (m) {
            return m.RemotedetailspagePageModule;
          });
        }
      }, {
        path: 'allproducts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_product_allproducts_allproducts_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./product/allproducts/allproducts.module */
          96343)).then(function (m) {
            return m.AllproductsPageModule;
          });
        }
      }, {
        path: 'addproduct',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_product_addproduct_addproduct_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./product/addproduct/addproduct.module */
          68105)).then(function (m) {
            return m.AddproductPageModule;
          });
        }
      }, {
        path: 'editproduct',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_product_editproduct_editproduct_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./product/editproduct/editproduct.module */
          60675)).then(function (m) {
            return m.EditproductPageModule;
          });
        }
      }, {
        path: 'deleteproduct',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_product_deleteproduct_deleteproduct_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./product/deleteproduct/deleteproduct.module */
          54215)).then(function (m) {
            return m.DeleteproductPageModule;
          });
        }
      }, {
        path: 'productswithoutcategory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_category_productswithoutcategory_productswithoutcategory_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./category/productswithoutcategory/productswithoutcategory.module */
          87250)).then(function (m) {
            return m.ProductswithoutcategoryPageModule;
          });
        }
      }, {
        path: 'allcategory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_category_allcategory_allcategory_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./category/allcategory/allcategory.module */
          20057)).then(function (m) {
            return m.AllcategoryPageModule;
          });
        }
      }, {
        path: 'addnewcategory',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_category_addnewcategory_addnewcategory_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./category/addnewcategory/addnewcategory.module */
          34708)).then(function (m) {
            return m.AddnewcategoryPageModule;
          });
        }
      } //   path: '',
      //   redirectTo: 'folder/Inbox',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'folder/:id',
      //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
      // }
      ];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(http) {
          _classCallCheck(this, AppComponent);

          this.http = http;
          this.appPages = [{
            title: 'Sales',
            numberofitems: 0,
            children: [{
              title: 'All Sales',
              url: '/',
              icon: 'assets/icon/all.svg'
            }, {
              title: 'Add Sale',
              url: '/',
              icon: 'assets/icon/add.svg'
            }, {
              title: 'Edit Sale',
              url: '/',
              icon: 'assets/icon/edit.svg'
            }, {
              title: 'Delete Sale',
              url: '/',
              icon: 'assets/icon/delete.svg'
            }]
          }, {
            title: 'Customers',
            numberofitems: 0,
            children: [{
              title: 'All Customers',
              url: '/allcustomers',
              icon: 'assets/icon/all.svg'
            }, {
              title: 'Add Customer',
              url: '/addcustomers',
              icon: 'assets/icon/add.svg'
            }, {
              title: 'Edit Customer',
              url: '/editcustomer',
              icon: 'assets/icon/edit.svg'
            }, {
              title: 'Delete Customer',
              url: '/deletecustomer',
              icon: 'assets/icon/delete.svg'
            }, {
              title: 'Export Customers',
              url: '/exportcustomers',
              icon: 'assets/icon/export.svg'
            }]
          }, {
            title: 'Products',
            numberofitems: 0,
            children: [{
              title: 'All Products',
              url: '/allproducts',
              icon: 'assets/icon/all.svg'
            }, {
              title: 'Add New Product',
              url: '/addproduct',
              icon: 'assets/icon/add.svg'
            }, {
              title: 'Edit Product',
              url: '/editproduct',
              icon: 'assets/icon/edit.svg'
            }, {
              title: 'Delete Product',
              url: '/deleteproduct',
              icon: 'assets/icon/delete.svg'
            }, // All Categories
            {
              title: 'All Categories',
              url: '/allcategories',
              icon: 'assets/icon/all.svg'
            }, {
              title: 'Add New Category',
              url: '/addproduct',
              icon: 'assets/icon/add.svg'
            }, {
              title: 'Products Without Category',
              url: '/editproduct',
              icon: 'assets/icon/edit.svg'
            }, {
              title: 'Delete Category',
              url: '/deleteproduct',
              icon: 'assets/icon/delete.svg'
            }]
          }, {
            title: 'Categories',
            numberofitems: 0,
            children: [{
              title: 'All Categories',
              url: '/allcategory',
              icon: 'assets/icon/all.svg'
            }, {
              title: 'Add New Category',
              url: '/addnewcategory',
              icon: 'assets/icon/add.svg'
            }, {
              title: 'Products Without Category',
              url: '/productswithoutcategory',
              icon: 'assets/icon/edit.svg'
            }, {
              title: 'Delete Category',
              url: '/deleteproduct',
              icon: 'assets/icon/delete.svg'
            }]
          }, {
            title: 'Storehouse',
            numberofitems: 0,
            children: [{
              title: 'View Stock',
              url: '/',
              icon: 'assets/icon/all.svg'
            }, {
              title: 'Update Stock',
              url: '/',
              icon: 'assets/icon/add.svg'
            }, {
              title: 'Change Financila Year',
              url: '/',
              icon: 'assets/icon/edit.svg'
            }, {
              title: 'Delete Product',
              url: '/',
              icon: 'assets/icon/delete.svg'
            }]
          }];
          this.shortcuts = ['Add New Customer', 'Add New Product', 'Add Stock', 'Last Sale Receipt'];
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.http.get("https://muthukudamerchant-496e8-default-rtdb.firebaseio.com/newlyaddedproductswithoutimage.json").subscribe(function (resData) {
                        for (var key in resData) {
                          if (resData.hasOwnProperty(key)) {
                            _this.appPages[2].numberofitems = _this.appPages[2].numberofitems + 1;
                          }
                        }
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyDS6DCQcYOD1Rdt0RrdMEo1k2INx34xc1U",
          authDomain: "tapsystock-a6450.firebaseapp.com",
          databaseURL: "https://tapsystock-a6450-default-rtdb.firebaseio.com",
          projectId: "tapsystock-a6450",
          storageBucket: "tapsystock-a6450.appspot.com",
          messagingSenderId: "125405620194",
          appId: "1:125405620194:web:c676bf1524d48db2133bbb"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.sub-item {\n  padding-left: 20px;\n  color: #479939;\n}\n\n.mainlogo {\n  width: 50px;\n  height: 50px;\n}\n\n.sidemenuTitles {\n  font-family: noto-sans, sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n\n.shortcutsTitles {\n  font-family: noto-sans, sans-serif;\n  font-weight: 900;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFBQSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFORjs7QUFVQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUEYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuXG4uc3ViLWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjNDc5OTM5O1xufVxuXG5cbi5tYWlubG9nbyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cblxuLnNpZGVtZW51VGl0bGVzIHtcbiAgZm9udC1mYW1pbHk6IG5vdG8tc2FucyxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5zaG9ydGN1dHNUaXRsZXMge1xuICBmb250LWZhbWlseTogbm90by1zYW5zLHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn0iXX0= */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">\n              <ion-text color=\"primary\">\n                <ion-list-header>YoBox.</ion-list-header>\n              </ion-text>\n              <ion-note class=\"sidemenuTitles\">Part of Muthukuda Merchants</ion-note>\n            </ion-label>\n            <ion-icon class=\"mainlogo\" slot=\"end\" src=\"assets/icon/logo.svg\"></ion-icon>\n          </ion-item>\n          \n          \n        <div *ngFor=\"let p of appPages\">\n          <ion-menu-toggle *ngIf=\"p.url\" auto-hide=\"false\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\n              <ion-icon src={{p.icon}} slot=\"start\"></ion-icon>\n              <ion-label class=\"sidemenuTitles\">\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n\n          </ion-menu-toggle>\n\n          <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.active-parent]=\"p.open\" detail=\"false\" lines=\"none\">\n            <ion-label class=\"sidemenuTitles\">\n              {{p.title}}\n            </ion-label>\n            <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!p.open\"></ion-icon>\n            <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"p.open\"></ion-icon>\n            <ion-badge slot=\"end\">{{p.numberofitems}}</ion-badge>\n          </ion-item>\n\n          <ion-list *ngIf=\"p.open\">\n            <ion-menu-toggle auto-hide=\"false\">\n              <ion-item class=\"sub-item\" *ngFor=\"let sub of p.children\" routerDirection=\"root\" [routerLink]=\"[sub.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n                <ion-icon src={{sub.icon}} slot=\"start\"></ion-icon>\n                <ion-label class=\"sidemenuTitles\">\n                  {{sub.title}}\n                </ion-label>\n              </ion-item>\n\n            </ion-menu-toggle>\n          </ion-list>\n        </div>\n\n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-list-header class=\"shortcutsTitles\">Shortcuts</ion-list-header>\n          <ion-label>{{numberOfCarRemote}}</ion-label>\n\n          <ion-item *ngFor=\"let shortcut of shortcuts\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\" color=\"primary\"></ion-icon>\n            <ion-label class=\"sidemenuTitles\">{{ shortcut }}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map