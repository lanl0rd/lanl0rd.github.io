function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yCeY:function(e,t,n){"use strict";n.r(t);var r,o=n("fXoL"),s=n("BFvR"),i=n("mrSG"),c=n("xgIS"),a=n("Waoo"),u=((r=function(){function e(t,n){_classCallCheck(this,e),this.srv=t,this.ref=n,this.scrollPos=0}return _createClass(e,[{key:"ngAfterViewInit",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.listener$=Object(c.a)(window,"scroll").subscribe((function(e){var n=window.pageYOffset;t.ref.nativeElement.style.top=t.scrollPos>n?"2rem":"-4rem",t.scrollPos=n}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnDestroy",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.listener$.unsubscribe();case 1:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||r)(o.Jb(s.a),o.Jb(o.l))},r.\u0275cmp=o.Db({type:r,selectors:[["common-router-element"]],decls:1,vars:1,consts:[[1,"bl",3,"options","optionChange"]],template:function(e,t){1&e&&(o.Ob(0,"common-select-element",0),o.Wb("optionChange",(function(e){return t.srv.route(e)})),o.Nb()),2&e&&o.bc("options",t.srv._renderedRoutes)},directives:[a.a],styles:[""]}),r),l=n("ofXK");n.d(t,"AppInitElement",(function(){return b}));var f,p=function(e){return{hidden:e}},b=((f=function e(t){_classCallCheck(this,e),this.router=t}).\u0275fac=function(e){return new(e||f)(o.Jb(s.a))},f.\u0275cmp=o.Db({type:f,selectors:[["app-init-element"]],decls:1,vars:3,consts:[[1,"glo-drop","bl","ubuntu","bottom","tcenter","sticky",3,"ngClass"]],template:function(e,t){1&e&&o.Kb(0,"common-router-element",0),2&e&&o.bc("ngClass",o.cc(1,p,0===t.router._renderedRoutes.length))},directives:[u,l.h],styles:[""]}),f)}}]);