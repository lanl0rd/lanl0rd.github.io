(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/0DP":function(t,e,n){"use strict";n.r(e),n.d(e,"NotesComponent",function(){return d});var o=n("2Y8H"),s=n("Xdqb"),i=n("KAu+");let c=(()=>{class t{constructor(t){this.http=t,this.note=""}init(){return Object(s.a)(this,void 0,void 0,function*(){this.index=(yield this.http.get("assets/index.json").toPromise()).filter(t=>t.includes("/notes/")).map(t=>t.split("assets/notes/").join(""))})}changeNote(t){return Object(s.a)(this,void 0,void 0,function*(){this.note=yield this.http.get(t,{responseType:"text"}).toPromise()})}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(i.a))},t.\u0275prov=o.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var r=n("0ETx"),a=n("Waoo");function b(t,e){if(1&t){const t=o.Nb();o.Kb(0),o.Mb(1,"div",1),o.Mb(2,"common-select-element",2),o.Tb("optionChange",function(e){return o.bc(t),o.Xb().selected=e})("clicked",function(e){return o.bc(t),o.Xb().srv.changeNote("assets/notes/"+e)}),o.Lb(),o.Lb(),o.Mb(3,"pre",3),o.gc(4),o.Lb(),o.Jb()}if(2&t){const t=o.Xb();o.xb(2),o.Yb("options",t.srv.index)("option",t.selected)("searchEnabled",!0),o.xb(2),o.hc(t.srv.note)}}let p=(()=>{class t{constructor(t){this.srv=t}ngOnInit(){return Object(s.a)(this,void 0,void 0,function*(){yield this.srv.init(),this.selected=this.srv.index[0],this.srv.changeNote("assets/notes/"+this.selected)})}}return t.\u0275fac=function(e){return new(e||t)(o.Hb(c))},t.\u0275cmp=o.Bb({type:t,selectors:[["notes-txt-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"tcenter"],[1,"glo-drop","p","ubuntu-thin","bl",3,"options","option","searchEnabled","optionChange","clicked"],[1,"glo-drop","p","pre","ubuntu-mono",2,"margin-top","2rem"]],template:function(t,e){1&t&&o.fc(0,b,5,4,"ng-container",0),2&t&&o.Yb("ngIf",e.srv.index)},directives:[r.j,a.a],styles:[""]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Bb({type:t,selectors:[["notes-component"]],decls:3,vars:0,consts:[[1,"glo-drop","p",2,"color","gold"],[1,"bl",2,"margin-top","2rem"]],template:function(t,e){1&t&&(o.Mb(0,"div",0),o.gc(1," Ready to learn? Use the topics above to navigate to formal notes, or check the quick notes below!\n"),o.Lb(),o.Ib(2,"notes-txt-component",1))},directives:[p],styles:[""]}),t})()}}]);