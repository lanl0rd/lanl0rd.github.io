!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/0DP":function(t,o,r){"use strict";r.r(o),r.d(o,"NotesComponent",function(){return v});var i,s=r("2Y8H"),c=r("Xdqb"),a=r("KAu+"),u=((i=function(){function t(n){e(this,t),this.http=n,this.note=""}return n(t,[{key:"init",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.get("assets/index.json").toPromise();case 2:this.index=e.sent.filter(function(e){return e.includes("/notes/")}).map(function(e){return e.split("assets/notes/").join("")});case 3:case"end":return e.stop()}},e,this)}))}},{key:"changeNote",value:function(e){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.http.get(e,{responseType:"text"}).toPromise();case 2:this.note=t.sent;case 3:case"end":return t.stop()}},t,this)}))}}]),t}()).\u0275fac=function(e){return new(e||i)(s.Qb(a.a))},i.\u0275prov=s.Db({token:i,factory:i.\u0275fac,providedIn:"root"}),i),p=r("0ETx"),f=r("Waoo");function b(e,t){if(1&e){var n=s.Nb();s.Kb(0),s.Mb(1,"div",1),s.Mb(2,"common-select-element",2),s.Tb("optionChange",function(e){return s.bc(n),s.Xb().selected=e})("clicked",function(e){return s.bc(n),s.Xb().srv.changeNote("assets/notes/"+e)}),s.Lb(),s.Lb(),s.Mb(3,"pre",3),s.gc(4),s.Lb(),s.Jb()}if(2&e){var o=s.Xb();s.xb(2),s.Yb("options",o.srv.index)("option",o.selected)("searchEnabled",!0),s.xb(2),s.hc(o.srv.note)}}var l,h,d=((h=function(){function t(n){e(this,t),this.srv=n}return n(t,[{key:"ngOnInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.srv.init();case 2:this.selected=this.srv.index[0],this.srv.changeNote("assets/notes/"+this.selected);case 4:case"end":return e.stop()}},e,this)}))}}]),t}()).\u0275fac=function(e){return new(e||h)(s.Hb(u))},h.\u0275cmp=s.Bb({type:h,selectors:[["notes-txt-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"tcenter"],[1,"glo-drop","p","ubuntu-thin","bl",3,"options","option","searchEnabled","optionChange","clicked"],[1,"glo-drop","p","pre","ubuntu-mono",2,"margin-top","2rem"]],template:function(e,t){1&e&&s.fc(0,b,5,4,"ng-container",0),2&e&&s.Yb("ngIf",t.srv.index)},directives:[p.j,f.a],styles:[""]}),h),v=((l=function t(){e(this,t)}).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=s.Bb({type:l,selectors:[["notes-component"]],decls:3,vars:0,consts:[[1,"glo-drop","p",2,"color","gold"],[1,"bl",2,"margin-top","2rem"]],template:function(e,t){1&e&&(s.Mb(0,"div",0),s.gc(1," Ready to learn? Use the topics above to navigate to formal notes, or check the quick notes below!\n"),s.Lb(),s.Ib(2,"notes-txt-component",1))},directives:[d],styles:[""]}),l)}}])}();