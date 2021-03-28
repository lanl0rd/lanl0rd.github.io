(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["libs-play-play-feature-module"],{

/***/ "./src/libs/play/play.feature.module.ts":
/*!**********************************************!*\
  !*** ./src/libs/play/play.feature.module.ts ***!
  \**********************************************/
/*! exports provided: PlayFeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayFeatureModule", function() { return PlayFeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _play_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.feature.routing.module */ "./src/libs/play/play.feature.routing.module.ts");
/* harmony import */ var _play_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play.feature */ "./src/libs/play/play.feature.ts");
/* harmony import */ var _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/router/router.element.module */ "./src/libs/common/router/router.element.module.ts");






class PlayFeatureModule {
}
PlayFeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlayFeatureModule });
PlayFeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlayFeatureModule_Factory(t) { return new (t || PlayFeatureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _play_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayFeatureRoutingModule"],
            _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlayFeatureModule, { declarations: [_play_feature__WEBPACK_IMPORTED_MODULE_3__["PlayFeature"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _play_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayFeatureRoutingModule"],
        _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayFeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _play_feature__WEBPACK_IMPORTED_MODULE_3__["PlayFeature"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _play_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayFeatureRoutingModule"],
                    _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/libs/play/play.feature.routing.module.ts":
/*!******************************************************!*\
  !*** ./src/libs/play/play.feature.routing.module.ts ***!
  \******************************************************/
/*! exports provided: PlayFeatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayFeatureRoutingModule", function() { return PlayFeatureRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _play_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play.feature */ "./src/libs/play/play.feature.ts");





const routes = [
    {
        path: '',
        component: _play_feature__WEBPACK_IMPORTED_MODULE_2__["PlayFeature"],
        pathMatch: 'full'
    }
];
class PlayFeatureRoutingModule {
}
PlayFeatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlayFeatureRoutingModule });
PlayFeatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlayFeatureRoutingModule_Factory(t) { return new (t || PlayFeatureRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlayFeatureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayFeatureRoutingModule, [{
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


/***/ }),

/***/ "./src/libs/play/play.feature.ts":
/*!***************************************!*\
  !*** ./src/libs/play/play.feature.ts ***!
  \***************************************/
/*! exports provided: PlayFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayFeature", function() { return PlayFeature; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_router_router_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/router/router.element */ "./src/libs/common/router/router.element.ts");



const _c0 = function () { return { "name": "..", "path": "./" }; };
const _c1 = function (a0) { return [a0]; };
class PlayFeature {
}
PlayFeature.ɵfac = function PlayFeature_Factory(t) { return new (t || PlayFeature)(); };
PlayFeature.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayFeature, selectors: [["play-feature"]], decls: 3, vars: 4, consts: [[1, "glo-drop", "bl", "ubuntu", "bottom", 3, "routes"], [1, "glo-drop", "p"]], template: function PlayFeature_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "common-router-element", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " play!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
    } }, directives: [_common_router_router_element__WEBPACK_IMPORTED_MODULE_1__["CommonRouterElement"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbGlicy9wbGF5L3BsYXkuZmVhdHVyZS5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayFeature, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'play-feature',
                templateUrl: './play.feature.html',
                styleUrls: ['./play.feature.scss']
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=libs-play-play-feature-module-es2015.js.map