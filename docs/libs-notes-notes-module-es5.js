function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["libs-notes-notes-module"], {
  /***/
  "./src/libs/notes/notes.component.ts":
  /*!*******************************************!*\
    !*** ./src/libs/notes/notes.component.ts ***!
    \*******************************************/

  /*! exports provided: NotesComponent */

  /***/
  function srcLibsNotesNotesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesComponent", function () {
      return NotesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_router_router_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common/router/router.element */
    "./src/libs/common/router/router.element.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        "name": "..",
        "path": "./"
      };
    };

    var _c1 = function _c1(a0) {
      return [a0, "angular"];
    };

    var NotesComponent = function NotesComponent() {
      _classCallCheck(this, NotesComponent);
    };

    NotesComponent.ɵfac = function NotesComponent_Factory(t) {
      return new (t || NotesComponent)();
    };

    NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotesComponent,
      selectors: [["notes"]],
      decls: 4,
      vars: 4,
      consts: [[1, "glo-drop", "bl", "ubuntu", "bottom", 3, "routes"], [1, "glo-drop", "p"]],
      template: function NotesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "common-router-element", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ready to learn?\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
        }
      },
      directives: [_common_router_router_element__WEBPACK_IMPORTED_MODULE_1__["CommonRouterElement"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbGlicy9ub3Rlcy9ub3Rlcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'notes',
          templateUrl: './notes.component.html',
          styleUrls: ['./notes.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/libs/notes/notes.module.ts":
  /*!****************************************!*\
    !*** ./src/libs/notes/notes.module.ts ***!
    \****************************************/

  /*! exports provided: NotesModule */

  /***/
  function srcLibsNotesNotesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesModule", function () {
      return NotesModule;
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


    var _notes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./notes.routing.module */
    "./src/libs/notes/notes.routing.module.ts");
    /* harmony import */


    var _notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notes.component */
    "./src/libs/notes/notes.component.ts");
    /* harmony import */


    var _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/router/router.element.module */
    "./src/libs/common/router/router.element.module.ts");

    var NotesModule = function NotesModule() {
      _classCallCheck(this, NotesModule);
    };

    NotesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NotesModule
    });
    NotesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NotesModule_Factory(t) {
        return new (t || NotesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notes_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotesRoutingModule"], _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotesModule, {
        declarations: [_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notes_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotesRoutingModule"], _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _notes_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotesRoutingModule"], _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/libs/notes/notes.routing.module.ts":
  /*!************************************************!*\
    !*** ./src/libs/notes/notes.routing.module.ts ***!
    \************************************************/

  /*! exports provided: NotesRoutingModule */

  /***/
  function srcLibsNotesNotesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesRoutingModule", function () {
      return NotesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notes.component */
    "./src/libs/notes/notes.component.ts");

    var routes = [{
      path: '',
      component: _notes_component__WEBPACK_IMPORTED_MODULE_3__["NotesComponent"],
      pathMatch: 'full'
    }, {
      path: 'angular',
      loadChildren: function loadChildren() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __webpack_require__.e(
                  /*! import() | angular-angular-module */
                  "angular-angular-module").then(__webpack_require__.bind(null,
                  /*! ./angular/angular.module */
                  "./src/libs/notes/angular/angular.module.ts"));

                case 2:
                  return _context.abrupt("return", _context.sent.NotesAngularModule);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }
    }];

    var NotesRoutingModule = function NotesRoutingModule() {
      _classCallCheck(this, NotesRoutingModule);
    };

    NotesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NotesRoutingModule
    });
    NotesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NotesRoutingModule_Factory(t) {
        return new (t || NotesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=libs-notes-notes-module-es5.js.map