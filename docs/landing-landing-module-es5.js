function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"], {
  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: AppLandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLandingComponent", function () {
      return AppLandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _libs_common_router_router_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../libs/common/router/router.element */
    "./src/libs/common/router/router.element.ts");

    var _c0 = function _c0() {
      return ["notes", "play", "about"];
    };

    var AppLandingComponent = function AppLandingComponent() {
      _classCallCheck(this, AppLandingComponent);
    };

    AppLandingComponent.ɵfac = function AppLandingComponent_Factory(t) {
      return new (t || AppLandingComponent)();
    };

    AppLandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppLandingComponent,
      selectors: [["app-landing"]],
      decls: 1,
      vars: 2,
      consts: [[1, "glo-drop", "bl", "ubuntu", "bottom", 3, "routes"]],
      template: function AppLandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "common-router-element", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_libs_common_router_router_element__WEBPACK_IMPORTED_MODULE_1__["CommonRouterElement"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/landing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/landing/landing.module.ts ***!
    \*******************************************/

  /*! exports provided: AppLandingModule */

  /***/
  function srcAppLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLandingModule", function () {
      return AppLandingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing.routing.module */
    "./src/app/landing/landing.routing.module.ts");
    /* harmony import */


    var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _libs_common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../libs/common/router/router.element.module */
    "./src/libs/common/router/router.element.module.ts");

    var AppLandingModule = function AppLandingModule() {
      _classCallCheck(this, AppLandingModule);
    };

    AppLandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppLandingModule
    });
    AppLandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppLandingModule_Factory(t) {
        return new (t || AppLandingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppLandingRoutingModule"], _libs_common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppLandingModule, {
        declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_3__["AppLandingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppLandingRoutingModule"], _libs_common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_3__["AppLandingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppLandingRoutingModule"], _libs_common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/landing.routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/landing/landing.routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AppLandingRoutingModule */

  /***/
  function srcAppLandingLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLandingRoutingModule", function () {
      return AppLandingRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing.component */
    "./src/app/landing/landing.component.ts");

    var routes = [{
      path: '',
      component: _landing_component__WEBPACK_IMPORTED_MODULE_2__["AppLandingComponent"]
    }];

    var AppLandingRoutingModule = function AppLandingRoutingModule() {
      _classCallCheck(this, AppLandingRoutingModule);
    };

    AppLandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppLandingRoutingModule
    });
    AppLandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppLandingRoutingModule_Factory(t) {
        return new (t || AppLandingRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppLandingRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLandingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=landing-landing-module-es5.js.map