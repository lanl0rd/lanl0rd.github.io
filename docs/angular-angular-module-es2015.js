(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-angular-module"],{

/***/ "./src/libs/notes/angular/angular.component.ts":
/*!*****************************************************!*\
  !*** ./src/libs/notes/angular/angular.component.ts ***!
  \*****************************************************/
/*! exports provided: NotesAngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesAngularComponent", function() { return NotesAngularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_router_router_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/router/router.element */ "./src/libs/common/router/router.element.ts");



const _c0 = function () { return { "name": "..", "path": "./notes" }; };
const _c1 = function (a0) { return [a0]; };
class NotesAngularComponent {
}
NotesAngularComponent.ɵfac = function NotesAngularComponent_Factory(t) { return new (t || NotesAngularComponent)(); };
NotesAngularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesAngularComponent, selectors: [["notes-angular"]], decls: 3, vars: 4, consts: [[1, "glo-drop", "bl", "ubuntu", "bottom", 3, "routes"], [1, "glo-drop", "p"]], template: function NotesAngularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "common-router-element", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " angular notes!!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
    } }, directives: [_common_router_router_element__WEBPACK_IMPORTED_MODULE_1__["CommonRouterElement"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbGlicy9ub3Rlcy9hbmd1bGFyL2FuZ3VsYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesAngularComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'notes-angular',
                templateUrl: './angular.component.html',
                styleUrls: ['./angular.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/libs/notes/angular/angular.module.ts":
/*!**************************************************!*\
  !*** ./src/libs/notes/angular/angular.module.ts ***!
  \**************************************************/
/*! exports provided: NotesAngularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesAngularModule", function() { return NotesAngularModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular.routing.module */ "./src/libs/notes/angular/angular.routing.module.ts");
/* harmony import */ var _angular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular.component */ "./src/libs/notes/angular/angular.component.ts");
/* harmony import */ var _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/router/router.element.module */ "./src/libs/common/router/router.element.module.ts");






class NotesAngularModule {
}
NotesAngularModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotesAngularModule });
NotesAngularModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotesAngularModule_Factory(t) { return new (t || NotesAngularModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotesAngularRoutingModule"],
            _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotesAngularModule, { declarations: [_angular_component__WEBPACK_IMPORTED_MODULE_3__["NotesAngularComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotesAngularRoutingModule"],
        _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesAngularModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _angular_component__WEBPACK_IMPORTED_MODULE_3__["NotesAngularComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotesAngularRoutingModule"],
                    _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/libs/notes/angular/angular.routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/libs/notes/angular/angular.routing.module.ts ***!
  \**********************************************************/
/*! exports provided: NotesAngularRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesAngularRoutingModule", function() { return NotesAngularRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular.component */ "./src/libs/notes/angular/angular.component.ts");





const routes = [
    {
        path: '',
        component: _angular_component__WEBPACK_IMPORTED_MODULE_2__["NotesAngularComponent"]
    }
];
class NotesAngularRoutingModule {
}
NotesAngularRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotesAngularRoutingModule });
NotesAngularRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotesAngularRoutingModule_Factory(t) { return new (t || NotesAngularRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotesAngularRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesAngularRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=angular-angular-module-es2015.js.map