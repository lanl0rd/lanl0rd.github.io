(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["libs-about-about-feature-module"],{

/***/ "./src/libs/about/about.feature.module.ts":
/*!************************************************!*\
  !*** ./src/libs/about/about.feature.module.ts ***!
  \************************************************/
/*! exports provided: AboutFeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutFeatureModule", function() { return AboutFeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _about_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.feature.routing.module */ "./src/libs/about/about.feature.routing.module.ts");
/* harmony import */ var _about_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.feature */ "./src/libs/about/about.feature.ts");
/* harmony import */ var _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/router/router.element.module */ "./src/libs/common/router/router.element.module.ts");






class AboutFeatureModule {
}
AboutFeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutFeatureModule });
AboutFeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutFeatureModule_Factory(t) { return new (t || AboutFeatureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _about_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutFeatureRoutingModule"],
            _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutFeatureModule, { declarations: [_about_feature__WEBPACK_IMPORTED_MODULE_3__["AboutFeature"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _about_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutFeatureRoutingModule"],
        _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutFeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _about_feature__WEBPACK_IMPORTED_MODULE_3__["AboutFeature"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _about_feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutFeatureRoutingModule"],
                    _common_router_router_element_module__WEBPACK_IMPORTED_MODULE_4__["CommonRouterElementModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/libs/about/about.feature.routing.module.ts":
/*!********************************************************!*\
  !*** ./src/libs/about/about.feature.routing.module.ts ***!
  \********************************************************/
/*! exports provided: AboutFeatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutFeatureRoutingModule", function() { return AboutFeatureRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.feature */ "./src/libs/about/about.feature.ts");





const routes = [
    {
        path: '',
        component: _about_feature__WEBPACK_IMPORTED_MODULE_2__["AboutFeature"],
        pathMatch: 'full'
    }
];
class AboutFeatureRoutingModule {
}
AboutFeatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutFeatureRoutingModule });
AboutFeatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutFeatureRoutingModule_Factory(t) { return new (t || AboutFeatureRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutFeatureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutFeatureRoutingModule, [{
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

/***/ "./src/libs/about/about.feature.ts":
/*!*****************************************!*\
  !*** ./src/libs/about/about.feature.ts ***!
  \*****************************************/
/*! exports provided: AboutFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutFeature", function() { return AboutFeature; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_router_router_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/router/router.element */ "./src/libs/common/router/router.element.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return { "name": "..", "path": "./" }; };
const _c1 = function (a0) { return [a0]; };
class AboutFeature {
}
AboutFeature.ɵfac = function AboutFeature_Factory(t) { return new (t || AboutFeature)(); };
AboutFeature.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutFeature, selectors: [["about-feature"]], decls: 27, vars: 4, consts: [[1, "glo-drop", "bl", "ubuntu", "bottom", 3, "routes"], [1, "center"], [1, "glo-drop", "p", "grow", "circle"], ["href", "https://hub.docker.com/u/lanl0rd", "target", "_blank", 2, "top", "3px", "right", "-1.5px", "position", "relative"], ["xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid meet", "viewBox", "0 0 36 26", "fill", "white", 1, "dicon", "styles__dockerFlat___2woUp", "styles__large___2556i"], ["d", "M35.2114674,9.90088871 C34.4018592,9.33913616 32.5465072,9.12847895 31.0959592,9.40935523 C30.9272908,8.00497385 30.1514163,6.77614015 28.8020694,5.68774458 L28.0261949,5.12599203 L27.4864561,5.93351132 C26.8117826,6.98679735 26.4744459,8.4613978 26.5756469,9.86577918 C26.6093806,10.3573127 26.778049,11.235051 27.2840541,12.0074608 C26.8117826,12.2883371 25.8335061,12.6394324 24.5516265,12.6394324 L0.16218026,12.6394324 L0.0947129121,12.9203087 C-0.141422805,14.32469 -0.141422805,18.7133819 2.62473845,22.0838972 C4.71622623,24.6468932 7.81972423,25.9459459 11.9014988,25.9459459 C20.7397213,25.9459459 27.2840541,21.6976923 30.3538184,14.0087042 C31.5682306,14.0438138 34.1657235,14.0087042 35.4813368,11.3754892 C35.5150705,11.3052701 35.5825378,11.1648319 35.8186736,10.6381889 L35.9536082,10.3573127 L35.2114674,9.90088871 L35.2114674,9.90088871 Z M19.6602438,0 L15.9495396,0 L15.9495396,3.51095344 L19.6602438,3.51095344 L19.6602438,0 L19.6602438,0 Z M19.6602438,4.21314413 L15.9495396,4.21314413 L15.9495396,7.72409758 L19.6602438,7.72409758 L19.6602438,4.21314413 L19.6602438,4.21314413 Z M15.2748662,4.21314413 L11.564162,4.21314413 L11.564162,7.72409758 L15.2748662,7.72409758 L15.2748662,4.21314413 L15.2748662,4.21314413 Z M10.8894886,4.21314413 L7.17878443,4.21314413 L7.17878443,7.72409758 L10.8894886,7.72409758 L10.8894886,4.21314413 L10.8894886,4.21314413 Z M6.50411095,8.42628826 L2.79340682,8.42628826 L2.79340682,11.9372417 L6.50411095,11.9372417 L6.50411095,8.42628826 L6.50411095,8.42628826 Z M10.8894886,8.42628826 L7.17878443,8.42628826 L7.17878443,11.9372417 L10.8894886,11.9372417 L10.8894886,8.42628826 L10.8894886,8.42628826 Z M15.2748662,8.42628826 L11.564162,8.42628826 L11.564162,11.9372417 L15.2748662,11.9372417 L15.2748662,8.42628826 L15.2748662,8.42628826 Z M19.6602438,8.42628826 L15.9495396,8.42628826 L15.9495396,11.9372417 L19.6602438,11.9372417 L19.6602438,8.42628826 L19.6602438,8.42628826 Z M24.0456214,8.42628826 L20.3349172,8.42628826 L20.3349172,11.9372417 L24.0456214,11.9372417 L24.0456214,8.42628826 L24.0456214,8.42628826 Z"], ["href", "https://github.com/lanl0rd", "target", "_blank", 2, "top", "-4px", "right", "3px", "position", "relative"], ["height", "32", "viewBox", "0 0 16 16", "version", "1.1", "width", "32", "aria-hidden", "true", "fill", "white", 1, "octicon", "octicon-mark-github", "v-align-middle"], ["fill-rule", "evenodd", "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"], ["href", "mailto:k1ng.lanl0rd@gmail.com", "target", "_blank", 2, "top", "3px", "right", "0px", "position", "relative"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "52 42 88 66"], ["fill", "#4285f4", "d", "M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"], ["fill", "#34a853", "d", "M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"], ["fill", "#fbbc04", "d", "M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"], ["fill", "#ea4335", "d", "M72 74V48l24 18 24-18v26L96 92"], ["fill", "#c5221f", "d", "M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"], ["href", "https://www.youtube.com/channel/UCI8EE_qSxjQ9EoZ23sNS_Lw", "target", "_blank"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 496 496", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 496 496"], ["d", "M496,248c0,136.8-111.2,248-248,248S0,384.8,0,248S111.2,0,248,0S496,111.2,496,248z", 2, "fill", "#F73974"], ["d", "M248,0c136.8,0,248,111.2,248,248S384.8,496,248,496", 2, "fill", "#DD0772"], ["d", "M72.8,72.8c96.8-96.8,253.6-96.8,350.4,0s96.8,253.6,0,350.4", 2, "fill", "#ED266E"], ["d", "M212.8,360.8c-1.6,0-4-0.8-5.6-1.6c-4-1.6-7.2-6.4-7.2-10.4V199.2c0-4,3.2-8.8,7.2-10.4\n                c4-1.6,8.8-1.6,12.8,0.8l101.6,75.2c3.2,2.4,4.8,5.6,4.8,9.6s-1.6,7.2-4.8,9.6L220,359.2C217.6,360,215.2,360.8,212.8,360.8z", 2, "fill", "#DD0772"], ["d", "M212.8,334.4c-1.6,0-4-0.8-5.6-1.6c-4-1.6-7.2-6.4-7.2-10.4V172.8c0-4,3.2-8.8,7.2-10.4\n                c4-1.6,8.8-1.6,12.8,0.8l101.6,75.2c3.2,2.4,4.8,5.6,4.8,9.6c0,4-1.6,7.2-4.8,9.6L220,332.8C217.6,333.6,215.2,334.4,212.8,334.4z", 2, "fill", "#FFFFFF"]], template: function AboutFeature_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "common-router-element", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
    } }, directives: [_common_router_router_element__WEBPACK_IMPORTED_MODULE_1__["CommonRouterElement"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["a[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.center[_ngcontent-%COMP%] {\n  \n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  margin: 5px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaW1iYS9sYW5sMHJkL3NwYWNlL2xhbmwwcmQvbGFubDByZC5naXRodWIuaW8vc3JjL2xpYnMvYWJvdXQvYWJvdXQuZmVhdHVyZS5zY3NzIiwic3JjL2xpYnMvYWJvdXQvYWJvdXQuZmVhdHVyZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0E7K0JBQUE7QUNFQTs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2xpYnMvYWJvdXQvYWJvdXQuZmVhdHVyZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyIHtcbi8qICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cbn1cblxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iLCJhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyIHtcbiAgLyogICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyovXG59XG5cbi5jaXJjbGUge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutFeature, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'about-feature',
                templateUrl: './about.feature.html',
                styleUrls: ['./about.feature.scss']
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=libs-about-about-feature-module-es2015.js.map