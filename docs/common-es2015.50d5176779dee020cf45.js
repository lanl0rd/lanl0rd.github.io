(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"61yP":function(n,t,o){"use strict";o.d(t,"a",(function(){return e}));var c=o("ofXK"),i=o("fXoL");let e=(()=>{class n{}return n.\u0275mod=i.Hb({type:n}),n.\u0275inj=i.Gb({factory:function(t){return new(t||n)},imports:[[c.b]]}),n})()},Jnr8:function(n,t,o){"use strict";o.r(t),o.d(t,"NotesAngularFeature",(function(){return i}));var c=o("fXoL");let i=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Db({type:n,selectors:[["notes-angular-feature"]],decls:1,vars:0,template:function(n,t){1&n&&c.jc(0," angular!")},styles:[""]}),n})()},Waoo:function(n,t,o){"use strict";o.d(t,"a",(function(){return l}));var c=o("fXoL"),i=o("ofXK");const e=function(n){return{bold:n}};function s(n,t){if(1&n){const n=c.Pb();c.Ob(0,"div",3),c.Wb("click",(function(){c.ec(n);const o=t.$implicit,i=c.ac(2);return i.option=o,i.optionChange.emit(i.option),i.clicked.emit(o)})),c.jc(1),c.Nb()}if(2&n){const n=t.$implicit,o=c.ac(2);c.bc("ngClass",c.cc(2,e,n===o.option)),c.zb(1),c.lc(" ",n," ")}}function r(n,t){if(1&n&&(c.Ob(0,"div",1),c.ic(1,s,2,4,"div",2),c.jc(2),c.Nb()),2&n){const n=c.ac();c.zb(1),c.bc("ngForOf",n.options),c.zb(1),c.lc(" ",n.option," ")}}let l=(()=>{class n{constructor(){this.optionChange=new c.n,this.clicked=new c.n}ngOnChanges(n){console.log("changes",n),this.option in this.options||(this.option=null)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Db({type:n,selectors:[["common-select-element"]],inputs:{option:"option",options:"options"},outputs:{optionChange:"optionChange",clicked:"clicked"},features:[c.xb],decls:1,vars:1,consts:[["class","scrollable",4,"ngIf"],[1,"scrollable"],["class","grow ib p",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"grow","ib","p",3,"ngClass","click"]],template:function(n,t){1&n&&c.ic(0,r,3,2,"div",0),2&n&&c.bc("ngIf",t.options)},directives:[i.j,i.i,i.h],styles:[".bold[_ngcontent-%COMP%]{filter:drop-shadow(0 0 2.5px white);font-weight:800}"]}),n})()}}]);