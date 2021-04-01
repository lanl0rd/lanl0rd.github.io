function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"61yP":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("ofXK"),o=n("3Pt+"),i=n("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({factory:function(t){return new(t||e)},imports:[[r.b,o.b]]}),e}()},"6DTd":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("fXoL"),o=function(){var e=function(){function e(){_classCallCheck(this,e),this.isToggled.bind(this)}return _createClass(e,[{key:"parse",value:function(e){try{return"obj"===this.typeOf(e)?e:JSON.parse(e)}catch(t){return e}}},{key:"stringify",value:function(e,t){try{return"str"===this.typeOf(e)?e:t?JSON.stringify(e,void 0,t):JSON.stringify(e)}catch(n){return e}}},{key:"in",value:function(e,t){return e in t}},{key:"has",value:function(e,t){switch(this.typeOf(t)){case"obj":return e in t;case"arr":return t.indexOf(e)>-1;default:return!1}}},{key:"toggle",value:function(e,t,n){"str"===this.typeOf(e[t])?e[t]=e[t]===n?"":n:"arr"===this.typeOf(e[t])&&(e[t].indexOf(n)>-1?this.remove(e[t],n):e[t].push(n))}},{key:"isToggled",value:function(e,t,n){return"str"===this.typeOf(e[t])?e[t]===n:"arr"===this.typeOf(e[t])?e[t].indexOf(n)>-1:void 0}},{key:"keys",value:function(e){try{return Object.keys(e)}catch(t){return[]}}},{key:"values",value:function(e){try{return Object.values(e)}catch(t){return[]}}},{key:"entries",value:function(e){try{return Object.entries(e)}catch(t){return[]}}},{key:"clone",value:function(e){try{return this.parse(this.stringify(e))}catch(t){return e}}},{key:"remove",value:function(e,t){var n=this;try{switch(this.typeOf(e)){case"obj":if("str"===this.typeOf(t)&&t in e)return delete e[t],e;var r=this.values(e).indexOf(t);return r>-1&&delete e[this.keys(e)[r]],e;case"arr":return e.filter((function(e){return n.stringify(e)!==n.stringify(t)}));default:return e}}catch(o){return e}}},{key:"removeFromArray",value:function(e,t){return e.splice(t,1),e}},{key:"typeOf",value:function(e){return e instanceof Array?"arr":"object"==typeof e?"obj":"string"==typeof e?"str":"number"==typeof e?"num":"boolean"==typeof e?"boo":void 0===e?"und":void 0}},{key:"equals",value:function(e,t){return e===t||this.stringify(e)===this.stringify(t)}},{key:"removeDuplicates",value:function(e){return _toConsumableArray(new Set(e))}},{key:"split",value:function(e,t){try{return console.log(e,t),e.split(t)}catch(n){return[]}}},{key:"join",value:function(e,t){return e.join(t)}},{key:"unique",value:function(e){return _toConsumableArray(new Set(e))}},{key:"encodeURI",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return encodeURI(e)}))},{key:"decodeURI",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return decodeURI(e)}))},{key:"encodeURIComponent",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return encodeURIComponent(e)}))},{key:"decodeURIComponent",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return decodeURIComponent(e)}))},{key:"copy",value:function(e){return this.parse(this.stringify(e))}},{key:"pathToValue",value:function(e,t){if(!(e instanceof Object)||void 0===t)return e;for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=n.length;r<o;++r){var i=n[r];if(!(i in e))return null;if(null===e[i])return null;e=e[i]}return e}},{key:"trackBy",value:function(e,t){if(t)return e}},{key:"capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"mergeArrays",value:function(e,t){return e.concat(t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},BFvR:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("tyNb"),o=n("fXoL"),i=n("6DTd"),a=function(){var e=function(){function e(t,n,o){var i=this;_classCallCheck(this,e),this.router=t,this.json=n,this.resolver=o,this._renderedRoutes=[],this.activations=[],t.events.subscribe((function(e){if(e instanceof r.b){var t=i.json.pathToValue(e,"snapshot.routeConfig.data.data.CommonRouterService.routes");i.activations.push(t||[])}else e instanceof r.c&&(i.routes(i.activations[0]),i.activations=[])}))}return _createClass(e,[{key:"routes",value:function(e){var t,n=[],r=_createForOfIteratorHelper(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push("string"==typeof o?o:o.name)}}catch(i){r.e(i)}finally{r.f()}this._routes=e,this._renderedRoutes=n}},{key:"route",value:function(e){"string"==typeof e&&this.router.navigate([this.router.url+"/"+e],{});var t,n=_createForOfIteratorHelper(this._routes);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.name===e&&this.router.navigate([r.path])}}catch(o){n.e(o)}finally{n.f()}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Tb(r.d),o.Tb(i.a),o.Tb(o.j))},e.\u0275prov=o.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},Jnr8:function(e,t,n){"use strict";n.r(t),n.d(t,"NotesAngularFeature",(function(){return o}));var r=n("fXoL"),o=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["notes-angular-feature"]],decls:1,vars:0,template:function(e,t){1&e&&r.qc(0," angular!")},styles:[""]}),e}()},Waoo:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("fXoL"),o=n("ofXK"),i=n("3Pt+"),a=function(e){return{bold:e}};function u(e,t){if(1&e){var n=r.Qb();r.Pb(0,"div",3),r.Xb("click",(function(){r.lc(n);var e=t.$implicit,o=r.bc(2);return o.option=e,o.optionChange.emit(o.option),o.clicked.emit(e)})),r.Pb(1,"div",4),r.qc(2),r.Ob(),r.Ob()}if(2&e){var o=t.$implicit,i=r.bc(2);r.ec("ngClass",r.fc(3,a,o===i.option)),r.zb(1),r.ec("ngClass",r.fc(5,a,o===i.option)),r.zb(1),r.sc(" ",o," ")}}function c(e,t){if(1&e){var n=r.Qb();r.Pb(0,"div"),r.Pb(1,"input",5),r.Xb("ngModelChange",(function(e){return r.lc(n),r.bc(2).search=e}))("ngModelChange",(function(){r.lc(n);var e=r.bc(2);return e.searchChange.emit(e.search)})),r.Ob(),r.Ob()}if(2&e){var o=r.bc(2);r.zb(1),r.ec("ngModel",o.search)}}function s(e,t){if(1&e&&(r.Nb(0),r.Pb(1,"div",1),r.pc(2,u,3,7,"div",2),r.Ob(),r.pc(3,c,2,1,"div",0),r.Mb()),2&e){var n=r.bc();r.zb(2),r.ec("ngForOf",n.renderOptions()),r.zb(1),r.ec("ngIf",n.searchEnabled)}}var f=function(){var e=function(){function e(t){_classCallCheck(this,e),this.cd=t,this.optionChange=new r.n,this.clicked=new r.n,this.searchEnabled=!1,this.search="",this.searchChange=new r.n}return _createClass(e,[{key:"ngOnChanges",value:function(e){this.options.includes(this.option)||(this.option=null)}},{key:"renderOptions",value:function(){var e=this;return this.searchEnabled&&this.search.trim().length>0?this.options.filter((function(t){return t.includes(e.search)||e.search.includes(t)})):this.options}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Kb(r.h))},e.\u0275cmp=r.Eb({type:e,selectors:[["common-select-element"]],inputs:{option:"option",options:"options",searchEnabled:"searchEnabled",filterFun:"filterFun",search:"search"},outputs:{optionChange:"optionChange",clicked:"clicked",searchChange:"searchChange"},features:[r.xb],decls:1,vars:1,consts:[[4,"ngIf"],[1,"scrollable"],["class","grow ib p",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"grow","ib","p",3,"ngClass","click"],[3,"ngClass"],[1,"tcenter","p","ubuntu-thin",2,"width","100%","border-radius","10px","background-color","rgba(0, 0, 0, 0)","color","white","font-size","1rem","outline","none","backdrop-filter","blur(5px)",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&r.pc(0,s,4,2,"ng-container",0),2&e&&r.ec("ngIf",t.options)},directives:[o.k,o.j,o.i,i.a,i.c,i.d],styles:[".bold[_ngcontent-%COMP%]{filter:drop-shadow(0 0 2.5px white)}select[_ngcontent-%COMP%]{max-width:calc(100vw - 4rem)}"]}),e}()}}]);