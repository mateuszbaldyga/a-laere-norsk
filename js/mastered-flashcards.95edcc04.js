(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mastered-flashcards"],{"2c74":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("PageMasteredFlashCards")},n=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("LayoutDefault",{staticClass:"PageMasteredFlashCards"},[s("template",{slot:"header"},[s("BackButton",{attrs:{to:{name:"categories"}}}),s("h1",[t._v("Opanowany materiał")])],1),s("div",{staticClass:"PageMasteredFlashCards_main container",attrs:{slot:"main"},slot:"main"},[t.isLoading.masteredFlashCards?s("h1",[t._v("\n            Loading...\n        ")]):t._e(),t.list.length?s("DictListing",{attrs:{list:t.list,onDeleteClick:t.onDeleteClick}}):t._e()],1),s("template",{slot:"footer"})],2)},l=[],r=s("774e"),c=s.n(r),o=s("cebc"),u=s("2f62"),d=s("c1f3"),h={components:{DictListing:d["a"]},data:function(){return{list:[]}},computed:Object(o["a"])({},Object(u["d"])(["masteredFlashCards","isLoading"])),methods:{onDeleteClick:function(t){this.$store.dispatch("UPDATE_MASTERED_FLASHCARD",{flashcard:t,method:"delete"}),this.list=c()(this.masteredFlashCards)}},created:function(){var t=this;this.list=c()(this.masteredFlashCards),this.$store.subscribe(function(e){"SET_MASTERED_FLASHCARDS"===e.type&&(t.list=c()(t.masteredFlashCards))})}},f=h,_=(s("b9d1"),s("2877")),m=Object(_["a"])(f,i,l,!1,null,null,null),p=m.exports,C={components:{PageMasteredFlashCards:p}},b=C,v=Object(_["a"])(b,a,n,!1,null,null,null);e["default"]=v.exports},8628:function(t,e,s){},b9d1:function(t,e,s){"use strict";var a=s("8628"),n=s.n(a);n.a},c1f3:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"DictListing"},t._l(t.list,function(e,a){return s("li",{key:a},[s("strong",[s("i",[t._v("🇳🇴")]),t._v(" "+t._s(e.no))]),s("span",[s("i",[t._v("🇵🇱")]),t._v(t._s(e.pl))]),t.onDeleteClick?s("button",{on:{click:function(s){return t.onDeleteClick(e)}}},[t._v("\n            ❌\n        ")]):t._e()])}),0)},n=[],i={props:{list:Array,onDeleteClick:Function}},l=i,r=(s("cbe3"),s("2877")),c=Object(r["a"])(l,a,n,!1,null,null,null);e["a"]=c.exports},cbe3:function(t,e,s){"use strict";var a=s("ebc8"),n=s.n(a);n.a},ebc8:function(t,e,s){}}]);
//# sourceMappingURL=mastered-flashcards.95edcc04.js.map