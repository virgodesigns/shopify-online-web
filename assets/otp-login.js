//!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=122)}([function(t,n,e){var r=e(1),i=e(7),o=e(14),d=e(11),a=e(17),c=function(t,n,e){var u,s,l,f,$=t&c.F,p=t&c.G,h=t&c.S,v=t&c.P,y=t&c.B,g=p?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,m=p?i:i[n]||(i[n]={}),b=m.prototype||(m.prototype={});for(u in p&&(e=n),e)l=((s=!$&&g&&void 0!==g[u])?g:e)[u],f=y&&s?a(l,r):v&&"function"==typeof l?a(Function.call,l):l,g&&d(g,u,l,t&c.U),m[u]!=l&&o(m,u,f),v&&b[u]!=l&&(b[u]=l)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(48)("wks"),i=e(29),o=e(1).Symbol,d="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=d&&o[t]||(d?o:i)("Symbol."+t))}).store=r},function(t,n,e){var r=e(19),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(2)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),i=e(88),o=e(26),d=Object.defineProperty;n.f=e(8)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return d(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(24);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(1),i=e(14),o=e(13),d=e(29)("src"),a=e(127),c=(""+a).split("toString");e(7).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var u="function"==typeof e;u&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(u&&(o(e,d)||i(e,d,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[d]||a.call(this)}))},function(t,n,e){var r=e(0),i=e(2),o=e(24),d=/"/g,a=function(t,n,e,r){var i=String(o(t)),a="<"+n;return""!==e&&(a+=" "+e+'="'+String(r).replace(d,"&quot;")+'"'),a+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(a),r(r.P+r.F*i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(9),i=e(28);t.exports=e(8)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(44),i=e(24);t.exports=function(t){return r(i(t))}},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(45),i=e(28),o=e(15),d=e(26),a=e(13),c=e(88),u=Object.getOwnPropertyDescriptor;n.f=e(8)?u:function(t,n){if(t=o(t),n=d(n,!0),c)try{return u(t,n)}catch(t){}if(a(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(0),i=e(7),o=e(2);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],d={};d[t]=n(e),r(r.S+r.F*o((function(){e(1)})),"Object",d)}},function(t,n,e){var r=e(17),i=e(44),o=e(10),d=e(6),a=e(104);t.exports=function(t,n){var e=1==t,c=2==t,u=3==t,s=4==t,l=6==t,f=5==t||l,$=n||a;return function(n,a,p){for(var h,v,y=o(n),g=i(y),m=r(a,p,3),b=d(g.length),w=0,x=e?$(n,b):c?$(n,0):void 0;b>w;w++)if((f||w in g)&&(v=m(h=g[w],w,y),t))if(e)x[w]=v;else if(v)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:x.push(h)}else if(s)return!1;return l?-1:u||s?s:x}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";if(e(8)){var r=e(30),i=e(1),o=e(2),d=e(0),a=e(59),c=e(84),u=e(17),s=e(42),l=e(28),f=e(14),$=e(43),p=e(19),h=e(6),v=e(115),y=e(32),g=e(26),m=e(13),b=e(46),w=e(4),x=e(10),S=e(76),O=e(33),E=e(35),_=e(34).f,P=e(78),A=e(29),C=e(5),L=e(22),T=e(49),N=e(47),I=e(80),M=e(40),k=e(52),F=e(41),j=e(79),B=e(106),R=e(9),D=e(20),G=R.f,q=D.f,U=i.RangeError,H=i.TypeError,W=i.Uint8Array,V=Array.prototype,K=c.ArrayBuffer,Z=c.DataView,z=L(0),Y=L(2),J=L(3),X=L(4),Q=L(5),tt=L(6),nt=T(!0),et=T(!1),rt=I.values,it=I.keys,ot=I.entries,dt=V.lastIndexOf,at=V.reduce,ct=V.reduceRight,ut=V.join,st=V.sort,lt=V.slice,ft=V.toString,$t=V.toLocaleString,pt=C("iterator"),ht=C("toStringTag"),vt=A("typed_constructor"),yt=A("def_constructor"),gt=a.CONSTR,mt=a.TYPED,bt=a.VIEW,wt=L(1,(function(t,n){return _t(N(t,t[yt]),n)})),xt=o((function(){return 1===new W(new Uint16Array([1]).buffer)[0]})),St=!!W&&!!W.prototype.set&&o((function(){new W(1).set({})})),Ot=function(t,n){var e=p(t);if(e<0||e%n)throw U("Wrong offset!");return e},Et=function(t){if(w(t)&&mt in t)return t;throw H(t+" is not a typed array!")},_t=function(t,n){if(!w(t)||!(vt in t))throw H("It is not a typed array constructor!");return new t(n)},Pt=function(t,n){return At(N(t,t[yt]),n)},At=function(t,n){for(var e=0,r=n.length,i=_t(t,r);r>e;)i[e]=n[e++];return i},Ct=function(t,n,e){G(t,n,{get:function(){return this._d[e]}})},Lt=function(t){var n,e,r,i,o,d,a=x(t),c=arguments.length,s=c>1?arguments[1]:void 0,l=void 0!==s,f=P(a);if(null!=f&&!S(f)){for(d=f.call(a),r=[],n=0;!(o=d.next()).done;n++)r.push(o.value);a=r}for(l&&c>2&&(s=u(s,arguments[2],2)),n=0,e=h(a.length),i=_t(this,e);e>n;n++)i[n]=l?s(a[n],n):a[n];return i},Tt=function(){for(var t=0,n=arguments.length,e=_t(this,n);n>t;)e[t]=arguments[t++];return e},Nt=!!W&&o((function(){$t.call(new W(1))})),It=function(){return $t.apply(Nt?lt.call(Et(this)):Et(this),arguments)},Mt={copyWithin:function(t,n){return B.call(Et(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return X(Et(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return j.apply(Et(this),arguments)},filter:function(t){return Pt(this,Y(Et(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Et(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Et(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){z(Et(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return et(Et(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(Et(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ut.apply(Et(this),arguments)},lastIndexOf:function(t){return dt.apply(Et(this),arguments)},map:function(t){return wt(Et(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return at.apply(Et(this),arguments)},reduceRight:function(t){return ct.apply(Et(this),arguments)},reverse:function(){for(var t,n=Et(this).length,e=Math.floor(n/2),r=0;r<e;)t=this[r],this[r++]=this[--n],this[n]=t;return this},some:function(t){return J(Et(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return st.call(Et(this),t)},subarray:function(t,n){var e=Et(this),r=e.length,i=y(t,r);return new(N(e,e[yt]))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,h((void 0===n?r:y(n,r))-i))}},kt=function(t,n){return Pt(this,lt.call(Et(this),t,n))},Ft=function(t){Et(this);var n=Ot(arguments[1],1),e=this.length,r=x(t),i=h(r.length),o=0;if(i+n>e)throw U("Wrong length!");for(;o<i;)this[n+o]=r[o++]},jt={entries:function(){return ot.call(Et(this))},keys:function(){return it.call(Et(this))},values:function(){return rt.call(Et(this))}},Bt=function(t,n){return w(t)&&t[mt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Rt=function(t,n){return Bt(t,n=g(n,!0))?l(2,t[n]):q(t,n)},Dt=function(t,n,e){return!(Bt(t,n=g(n,!0))&&w(e)&&m(e,"value"))||m(e,"get")||m(e,"set")||e.configurable||m(e,"writable")&&!e.writable||m(e,"enumerable")&&!e.enumerable?G(t,n,e):(t[n]=e.value,t)};gt||(D.f=Rt,R.f=Dt),d(d.S+d.F*!gt,"Object",{getOwnPropertyDescriptor:Rt,defineProperty:Dt}),o((function(){ft.call({})}))&&(ft=$t=function(){return ut.call(this)});var Gt=$({},Mt);$(Gt,jt),f(Gt,pt,jt.values),$(Gt,{slice:kt,set:Ft,constructor:function(){},toString:ft,toLocaleString:It}),Ct(Gt,"buffer","b"),Ct(Gt,"byteOffset","o"),Ct(Gt,"byteLength","l"),Ct(Gt,"length","e"),G(Gt,ht,{get:function(){return this[mt]}}),t.exports=function(t,n,e,c){var u=t+((c=!!c)?"Clamped":"")+"Array",l="get"+t,$="set"+t,p=i[u],y=p||{},g=p&&E(p),m=!p||!a.ABV,x={},S=p&&p.prototype,P=function(t,e){G(t,e,{get:function(){return function(t,e){var r=t._d;return r.v[l](e*n+r.o,xt)}(this,e)},set:function(t){return function(t,e,r){var i=t._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[$](e*n+i.o,r,xt)}(this,e,t)},enumerable:!0})};m?(p=e((function(t,e,r,i){s(t,p,u,"_d");var o,d,a,c,l=0,$=0;if(w(e)){if(!(e instanceof K||"ArrayBuffer"==(c=b(e))||"SharedArrayBuffer"==c))return mt in e?At(p,e):Lt.call(p,e);o=e,$=Ot(r,n);var y=e.byteLength;if(void 0===i){if(y%n)throw U("Wrong length!");if((d=y-$)<0)throw U("Wrong length!")}else if((d=h(i)*n)+$>y)throw U("Wrong length!");a=d/n}else a=v(e),o=new K(d=a*n);for(f(t,"_d",{b:o,o:$,l:d,e:a,v:new Z(o)});l<a;)P(t,l++)})),S=p.prototype=O(Gt),f(S,"constructor",p)):o((function(){p(1)}))&&o((function(){new p(-1)}))&&k((function(t){new p,new p(null),new p(1.5),new p(t)}),!0)||(p=e((function(t,e,r,i){var o;return s(t,p,u),w(e)?e instanceof K||"ArrayBuffer"==(o=b(e))||"SharedArrayBuffer"==o?void 0!==i?new y(e,Ot(r,n),i):void 0!==r?new y(e,Ot(r,n)):new y(e):mt in e?At(p,e):Lt.call(p,e):new y(v(e))})),z(g!==Function.prototype?_(y).concat(_(g)):_(y),(function(t){t in p||f(p,t,y[t])})),p.prototype=S,r||(S.constructor=p));var A=S[pt],C=!!A&&("values"==A.name||null==A.name),L=jt.values;f(p,vt,!0),f(S,mt,u),f(S,bt,!0),f(S,yt,p),(c?new p(1)[ht]==u:ht in S)||G(S,ht,{get:function(){return u}}),x[u]=p,d(d.G+d.W+d.F*(p!=y),x),d(d.S,u,{BYTES_PER_ELEMENT:n}),d(d.S+d.F*o((function(){y.of.call(p,1)})),u,{from:Lt,of:Tt}),"BYTES_PER_ELEMENT"in S||f(S,"BYTES_PER_ELEMENT",n),d(d.P,u,Mt),F(u),d(d.P+d.F*St,u,{set:Ft}),d(d.P+d.F*!C,u,jt),r||S.toString==ft||(S.toString=ft),d(d.P+d.F*o((function(){new p(1).slice()})),u,{slice:kt}),d(d.P+d.F*(o((function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()}))||!o((function(){S.toLocaleString.call([1,2])}))),u,{toLocaleString:It}),M[u]=C?A:L,r||C||f(S,pt,L)}}else t.exports=function(){}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(29)("meta"),i=e(4),o=e(13),d=e(9).f,a=0,c=Object.isExtensible||function(){return!0},u=!e(2)((function(){return c(Object.preventExtensions({}))})),s=function(t){d(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!o(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return u&&l.NEED&&c(t)&&!o(t,r)&&s(t),t}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(90),i=e(63);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(19),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(3),i=e(91),o=e(63),d=e(62)("IE_PROTO"),a=function(){},c=function(){var t,n=e(60)("iframe"),r=o.length;for(n.style.display="none",e(64).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[o[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[d]=t):e=c(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(90),i=e(63).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,n,e){var r=e(13),i=e(10),o=e(62)("IE_PROTO"),d=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?d:null}},function(t,n,e){var r=e(5)("unscopables"),i=Array.prototype;null==i[r]&&e(14)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,e){var r=e(9).f,i=e(13),o=e(5)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n,e){var r=e(0),i=e(24),o=e(2),d=e(66),a="["+d+"]",c=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),s=function(t,n,e){var i={},a=o((function(){return!!d[t]()||"​"!="​"[t]()})),c=i[t]=a?n(l):d[t];e&&(i[e]=c),r(r.P+r.F*a,"String",i)},l=s.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(u,"")),t};t.exports=s},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(1),i=e(9),o=e(8),d=e(5)("species");t.exports=function(t){var n=r[t];o&&n&&!n[d]&&i.f(n,d,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(11);t.exports=function(t,n,e){for(var i in n)r(t,i,n[i],e);return t}},function(t,n,e){var r=e(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(23),i=e(5)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,d;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(d=r(n))&&"function"==typeof n.callee?"Arguments":d}},function(t,n,e){var r=e(3),i=e(18),o=e(5)("species");t.exports=function(t,n){var e,d=r(t).constructor;return void 0===d||null==(e=r(d)[o])?n:i(e)}},function(t,n,e){var r=e(7),i=e(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(30)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(15),i=e(6),o=e(32);t.exports=function(t){return function(n,e,d){var a,c=r(n),u=i(c.length),s=o(d,u);if(t&&e!=e){for(;u>s;)if((a=c[s++])!=a)return!0}else for(;u>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(23);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(5)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],d=o[r]();d.next=function(){return{done:e=!0}},o[r]=function(){return d},t(o)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(3);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(46),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},function(t,n,e){"use strict";e(108);var r=e(11),i=e(14),o=e(2),d=e(24),a=e(5),c=e(81),u=a("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var f=a(t),$=!o((function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})),p=$?!o((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[u]=function(){return e}),e[f](""),!n})):void 0;if(!$||!p||"replace"===t&&!s||"split"===t&&!l){var h=/./[f],v=e(d,f,""[t],(function(t,n,e,r,i){return n.exec===c?$&&!i?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),y=v[0],g=v[1];r(String.prototype,t,y),i(RegExp.prototype,f,2==n?function(t,n){return g.call(t,this,n)}:function(t){return g.call(t,this)})}}},function(t,n,e){var r=e(17),i=e(103),o=e(76),d=e(3),a=e(6),c=e(78),u={},s={};(n=t.exports=function(t,n,e,l,f){var $,p,h,v,y=f?function(){return t}:c(t),g=r(e,l,n?2:1),m=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for($=a(t.length);$>m;m++)if((v=n?g(d(p=t[m])[0],p[1]):g(t[m]))===u||v===s)return v}else for(h=y.call(t);!(p=h.next()).done;)if((v=i(h,g,p.value,n))===u||v===s)return v}).BREAK=u,n.RETURN=s},function(t,n,e){var r=e(1).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){"use strict";var r=e(1),i=e(0),o=e(11),d=e(43),a=e(27),c=e(56),u=e(42),s=e(4),l=e(2),f=e(52),$=e(38),p=e(67);t.exports=function(t,n,e,h,v,y){var g=r[t],m=g,b=v?"set":"add",w=m&&m.prototype,x={},S=function(t){var n=w[t];o(w,t,"delete"==t||"has"==t?function(t){return!(y&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof m&&(y||w.forEach&&!l((function(){(new m).entries().next()})))){var O=new m,E=O[b](y?{}:-0,1)!=O,_=l((function(){O.has(1)})),P=f((function(t){new m(t)})),A=!y&&l((function(){for(var t=new m,n=5;n--;)t[b](n,n);return!t.has(-0)}));P||((m=n((function(n,e){u(n,m,t);var r=p(new g,n,m);return null!=e&&c(e,v,r[b],r),r}))).prototype=w,w.constructor=m),(_||A)&&(S("delete"),S("has"),v&&S("get")),(A||E)&&S(b),y&&w.clear&&delete w.clear}else m=h.getConstructor(n,t,v,b),d(m.prototype,e),a.NEED=!0;return $(m,t),x[t]=m,i(i.G+i.W+i.F*(m!=g),x),y||h.setStrong(m,t,v),m}},function(t,n,e){for(var r,i=e(1),o=e(14),d=e(29),a=d("typed_array"),c=d("view"),u=!(!i.ArrayBuffer||!i.DataView),s=u,l=0,f="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(r=i[f[l++]])?(o(r.prototype,a,!0),o(r.prototype,c,!0)):s=!1;t.exports={ABV:u,CONSTR:s,TYPED:a,VIEW:c}},function(t,n,e){var r=e(4),i=e(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){n.f=e(5)},function(t,n,e){var r=e(48)("keys"),i=e(29);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(4),i=e(3),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(17)(Function.call,e(20).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,e){var r=e(4),i=e(65).set;t.exports=function(t,n,e){var o,d=n.constructor;return d!==e&&"function"==typeof d&&(o=d.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},function(t,n,e){"use strict";var r=e(19),i=e(24);t.exports=function(t){var n=String(i(this)),e="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(e+=n);return e}},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var e=Math.expm1;t.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},function(t,n,e){var r=e(19),i=e(24);t.exports=function(t){return function(n,e){var o,d,a=String(i(n)),c=r(e),u=a.length;return c<0||c>=u?t?"":void 0:(o=a.charCodeAt(c))<55296||o>56319||c+1===u||(d=a.charCodeAt(c+1))<56320||d>57343?t?a.charAt(c):o:t?a.slice(c,c+2):d-56320+(o-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(30),i=e(0),o=e(11),d=e(14),a=e(40),c=e(102),u=e(38),s=e(35),l=e(5)("iterator"),f=!([].keys&&"next"in[].keys()),$=function(){return this};t.exports=function(t,n,e,p,h,v,y){c(e,n,p);var g,m,b,w=function(t){if(!f&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},x=n+" Iterator",S="values"==h,O=!1,E=t.prototype,_=E[l]||E["@@iterator"]||h&&E[h],P=_||w(h),A=h?S?w("entries"):P:void 0,C="Array"==n&&E.entries||_;if(C&&(b=s(C.call(new t)))!==Object.prototype&&b.next&&(u(b,x,!0),r||"function"==typeof b[l]||d(b,l,$)),S&&_&&"values"!==_.name&&(O=!0,P=function(){return _.call(this)}),r&&!y||!f&&!O&&E[l]||d(E,l,P),a[n]=P,a[x]=$,h)if(g={values:S?P:w("values"),keys:v?P:w("keys"),entries:A},y)for(m in g)m in E||o(E,m,g[m]);else i(i.P+i.F*(f||O),n,g);return g}},function(t,n,e){var r=e(74),i=e(24);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},function(t,n,e){var r=e(4),i=e(23),o=e(5)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,e){var r=e(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,e){var r=e(40),i=e(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n,e){"use strict";var r=e(9),i=e(28);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},function(t,n,e){var r=e(46),i=e(5)("iterator"),o=e(40);t.exports=e(7).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){"use strict";var r=e(10),i=e(32),o=e(6);t.exports=function(t){for(var n=r(this),e=o(n.length),d=arguments.length,a=i(d>1?arguments[1]:void 0,e),c=d>2?arguments[2]:void 0,u=void 0===c?e:i(c,e);u>a;)n[a++]=t;return n}},function(t,n,e){"use strict";var r=e(36),i=e(107),o=e(40),d=e(15);t.exports=e(72)(Array,"Array",(function(t,n){this._t=d(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,n,e){"use strict";var r,i,o=e(53),d=RegExp.prototype.exec,a=String.prototype.replace,c=d,u=(r=/a/,i=/b*/g,d.call(r,"a"),d.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),s=void 0!==/()??/.exec("")[1];(u||s)&&(c=function(t){var n,e,r,i,c=this;return s&&(e=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),u&&(n=c.lastIndex),r=d.call(c,t),u&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),s&&r&&r.length>1&&a.call(r[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=c},function(t,n,e){"use strict";var r=e(71)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r,i,o,d=e(17),a=e(96),c=e(64),u=e(60),s=e(1),l=s.process,f=s.setImmediate,$=s.clearImmediate,p=s.MessageChannel,h=s.Dispatch,v=0,y={},g=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},m=function(t){g.call(t.data)};f&&$||(f=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++v]=function(){a("function"==typeof t?t:Function(t),n)},r(v),v},$=function(t){delete y[t]},"process"==e(23)(l)?r=function(t){l.nextTick(d(g,t,1))}:h&&h.now?r=function(t){h.now(d(g,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=m,r=d(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",m,!1)):r="onreadystatechange"in u("script")?function(t){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),g.call(t)}}:function(t){setTimeout(d(g,t,1),0)}),t.exports={set:f,clear:$}},function(t,n,e){"use strict";var r=e(1),i=e(8),o=e(30),d=e(59),a=e(14),c=e(43),u=e(2),s=e(42),l=e(19),f=e(6),$=e(115),p=e(34).f,h=e(9).f,v=e(79),y=e(38),g=r.ArrayBuffer,m=r.DataView,b=r.Math,w=r.RangeError,x=r.Infinity,S=g,O=b.abs,E=b.pow,_=b.floor,P=b.log,A=b.LN2,C=i?"_b":"buffer",L=i?"_l":"byteLength",T=i?"_o":"byteOffset";function N(t,n,e){var r,i,o,d=new Array(e),a=8*e-n-1,c=(1<<a)-1,u=c>>1,s=23===n?E(2,-24)-E(2,-77):0,l=0,f=t<0||0===t&&1/t<0?1:0;for((t=O(t))!=t||t===x?(i=t!=t?1:0,r=c):(r=_(P(t)/A),t*(o=E(2,-r))<1&&(r--,o*=2),(t+=r+u>=1?s/o:s*E(2,1-u))*o>=2&&(r++,o/=2),r+u>=c?(i=0,r=c):r+u>=1?(i=(t*o-1)*E(2,n),r+=u):(i=t*E(2,u-1)*E(2,n),r=0));n>=8;d[l++]=255&i,i/=256,n-=8);for(r=r<<n|i,a+=n;a>0;d[l++]=255&r,r/=256,a-=8);return d[--l]|=128*f,d}function I(t,n,e){var r,i=8*e-n-1,o=(1<<i)-1,d=o>>1,a=i-7,c=e-1,u=t[c--],s=127&u;for(u>>=7;a>0;s=256*s+t[c],c--,a-=8);for(r=s&(1<<-a)-1,s>>=-a,a+=n;a>0;r=256*r+t[c],c--,a-=8);if(0===s)s=1-d;else{if(s===o)return r?NaN:u?-x:x;r+=E(2,n),s-=d}return(u?-1:1)*r*E(2,s-n)}function M(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function k(t){return[255&t]}function F(t){return[255&t,t>>8&255]}function j(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function B(t){return N(t,52,8)}function R(t){return N(t,23,4)}function D(t,n,e){h(t.prototype,n,{get:function(){return this[e]}})}function G(t,n,e,r){var i=$(+e);if(i+n>t[L])throw w("Wrong index!");var o=t[C]._b,d=i+t[T],a=o.slice(d,d+n);return r?a:a.reverse()}function q(t,n,e,r,i,o){var d=$(+e);if(d+n>t[L])throw w("Wrong index!");for(var a=t[C]._b,c=d+t[T],u=r(+i),s=0;s<n;s++)a[c+s]=u[o?s:n-s-1]}if(d.ABV){if(!u((function(){g(1)}))||!u((function(){new g(-1)}))||u((function(){return new g,new g(1.5),new g(NaN),"ArrayBuffer"!=g.name}))){for(var U,H=(g=function(t){return s(this,g),new S($(t))}).prototype=S.prototype,W=p(S),V=0;W.length>V;)(U=W[V++])in g||a(g,U,S[U]);o||(H.constructor=g)}var K=new m(new g(2)),Z=m.prototype.setInt8;K.setInt8(0,2147483648),K.setInt8(1,2147483649),!K.getInt8(0)&&K.getInt8(1)||c(m.prototype,{setInt8:function(t,n){Z.call(this,t,n<<24>>24)},setUint8:function(t,n){Z.call(this,t,n<<24>>24)}},!0)}else g=function(t){s(this,g,"ArrayBuffer");var n=$(t);this._b=v.call(new Array(n),0),this[L]=n},m=function(t,n,e){s(this,m,"DataView"),s(t,g,"DataView");var r=t[L],i=l(n);if(i<0||i>r)throw w("Wrong offset!");if(i+(e=void 0===e?r-i:f(e))>r)throw w("Wrong length!");this[C]=t,this[T]=i,this[L]=e},i&&(D(g,"byteLength","_l"),D(m,"buffer","_b"),D(m,"byteLength","_l"),D(m,"byteOffset","_o")),c(m.prototype,{getInt8:function(t){return G(this,1,t)[0]<<24>>24},getUint8:function(t){return G(this,1,t)[0]},getInt16:function(t){var n=G(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=G(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return M(G(this,4,t,arguments[1]))},getUint32:function(t){return M(G(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return I(G(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return I(G(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){q(this,1,t,k,n)},setUint8:function(t,n){q(this,1,t,k,n)},setInt16:function(t,n){q(this,2,t,F,n,arguments[2])},setUint16:function(t,n){q(this,2,t,F,n,arguments[2])},setInt32:function(t,n){q(this,4,t,j,n,arguments[2])},setUint32:function(t,n){q(this,4,t,j,n,arguments[2])},setFloat32:function(t,n){q(this,4,t,R,n,arguments[2])},setFloat64:function(t,n){q(this,8,t,B,n,arguments[2])}});y(g,"ArrayBuffer"),y(m,"DataView"),a(m.prototype,d.VIEW,!0),n.ArrayBuffer=g,n.DataView=m},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(120)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){t.exports=!e(8)&&!e(2)((function(){return 7!=Object.defineProperty(e(60)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(1),i=e(7),o=e(30),d=e(61),a=e(9).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:d.f(t)})}},function(t,n,e){var r=e(13),i=e(15),o=e(49)(!1),d=e(62)("IE_PROTO");t.exports=function(t,n){var e,a=i(t),c=0,u=[];for(e in a)e!=d&&r(a,e)&&u.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~o(u,e)||u.push(e));return u}},function(t,n,e){var r=e(9),i=e(3),o=e(31);t.exports=e(8)?Object.defineProperties:function(t,n){i(t);for(var e,d=o(n),a=d.length,c=0;a>c;)r.f(t,e=d[c++],n[e]);return t}},function(t,n,e){var r=e(15),i=e(34).f,o={}.toString,d="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return d&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return d.slice()}}(t):i(r(t))}},function(t,n,e){"use strict";var r=e(8),i=e(31),o=e(50),d=e(45),a=e(10),c=e(44),u=Object.assign;t.exports=!u||e(2)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=u({},t)[e]||Object.keys(u({},n)).join("")!=r}))?function(t,n){for(var e=a(t),u=arguments.length,s=1,l=o.f,f=d.f;u>s;)for(var $,p=c(arguments[s++]),h=l?i(p).concat(l(p)):i(p),v=h.length,y=0;v>y;)$=h[y++],r&&!f.call(p,$)||(e[$]=p[$]);return e}:u},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){"use strict";var r=e(18),i=e(4),o=e(96),d=[].slice,a={},c=function(t,n,e){if(!(n in a)){for(var r=[],i=0;i<n;i++)r[i]="a["+i+"]";a[n]=Function("F,a","return new F("+r.join(",")+")")}return a[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=d.call(arguments,1),a=function(){var r=e.concat(d.call(arguments));return this instanceof a?c(n,r.length,r):o(n,r,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(1).parseInt,i=e(39).trim,o=e(66),d=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,n){var e=i(String(t),3);return r(e,n>>>0||(d.test(e)?16:10))}:r},function(t,n,e){var r=e(1).parseFloat,i=e(39).trim;t.exports=1/r(e(66)+"-0")!=-1/0?function(t){var n=i(String(t),3),e=r(n);return 0===e&&"-"==n.charAt(0)?-0:e}:r},function(t,n,e){var r=e(23);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(n);return+t}},function(t,n,e){var r=e(4),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,e){"use strict";var r=e(33),i=e(28),o=e(38),d={};e(14)(d,e(5)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(d,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){var r=e(3);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){var r=e(217);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(18),i=e(10),o=e(44),d=e(6);t.exports=function(t,n,e,a,c){r(n);var u=i(t),s=o(u),l=d(u.length),f=c?l-1:0,$=c?-1:1;if(e<2)for(;;){if(f in s){a=s[f],f+=$;break}if(f+=$,c?f<0:l<=f)throw TypeError("Reduce of empty array with no initial value")}for(;c?f>=0:l>f;f+=$)f in s&&(a=n(a,s[f],f,u));return a}},function(t,n,e){"use strict";var r=e(10),i=e(32),o=e(6);t.exports=[].copyWithin||function(t,n){var e=r(this),d=o(e.length),a=i(t,d),c=i(n,d),u=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===u?d:i(u,d))-c,d-a),l=1;for(c<a&&a<c+s&&(l=-1,c+=s-1,a+=s-1);s-- >0;)c in e?e[a]=e[c]:delete e[a],a+=l,c+=l;return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(81);e(0)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){e(8)&&"g"!=/./g.flags&&e(9).f(RegExp.prototype,"flags",{configurable:!0,get:e(53)})},function(t,n,e){"use strict";var r,i,o,d,a=e(30),c=e(1),u=e(17),s=e(46),l=e(0),f=e(4),$=e(18),p=e(42),h=e(56),v=e(47),y=e(83).set,g=e(237)(),m=e(111),b=e(238),w=e(57),x=e(112),S=c.TypeError,O=c.process,E=O&&O.versions,_=E&&E.v8||"",P=c.Promise,A="process"==s(O),C=function(){},L=i=m.f,T=!!function(){try{var t=P.resolve(1),n=(t.constructor={})[e(5)("species")]=function(t){t(C,C)};return(A||"function"==typeof PromiseRejectionEvent)&&t.then(C)instanceof n&&0!==_.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),N=function(t){var n;return!(!f(t)||"function"!=typeof(n=t.then))&&n},I=function(t,n){if(!t._n){t._n=!0;var e=t._c;g((function(){for(var r=t._v,i=1==t._s,o=0,d=function(n){var e,o,d,a=i?n.ok:n.fail,c=n.resolve,u=n.reject,s=n.domain;try{a?(i||(2==t._h&&F(t),t._h=1),!0===a?e=r:(s&&s.enter(),e=a(r),s&&(s.exit(),d=!0)),e===n.promise?u(S("Promise-chain cycle")):(o=N(e))?o.call(e,c,u):c(e)):u(r)}catch(t){s&&!d&&s.exit(),u(t)}};e.length>o;)d(e[o++]);t._c=[],t._n=!1,n&&!t._h&&M(t)}))}},M=function(t){y.call(c,(function(){var n,e,r,i=t._v,o=k(t);if(o&&(n=b((function(){A?O.emit("unhandledRejection",i,t):(e=c.onunhandledrejection)?e({promise:t,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=A||k(t)?2:1),t._a=void 0,o&&n.e)throw n.v}))},k=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){y.call(c,(function(){var n;A?O.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})}))},j=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),I(n,!0))},B=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw S("Promise can't be resolved itself");(n=N(t))?g((function(){var r={_w:e,_d:!1};try{n.call(t,u(B,r,1),u(j,r,1))}catch(t){j.call(r,t)}})):(e._v=t,e._s=1,I(e,!1))}catch(t){j.call({_w:e,_d:!1},t)}}};T||(P=function(t){p(this,P,"Promise","_h"),$(t),r.call(this);try{t(u(B,this,1),u(j,this,1))}catch(t){j.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(43)(P.prototype,{then:function(t,n){var e=L(v(this,P));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=A?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&I(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(B,t,1),this.reject=u(j,t,1)},m.f=L=function(t){return t===P||t===d?new o(t):i(t)}),l(l.G+l.W+l.F*!T,{Promise:P}),e(38)(P,"Promise"),e(41)("Promise"),d=e(7).Promise,l(l.S+l.F*!T,"Promise",{reject:function(t){var n=L(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(a||!T),"Promise",{resolve:function(t){return x(a&&this===d?P:this,t)}}),l(l.S+l.F*!(T&&e(52)((function(t){P.all(t).catch(C)}))),"Promise",{all:function(t){var n=this,e=L(n),r=e.resolve,i=e.reject,o=b((function(){var e=[],o=0,d=1;h(t,!1,(function(t){var a=o++,c=!1;e.push(void 0),d++,n.resolve(t).then((function(t){c||(c=!0,e[a]=t,--d||r(e))}),i)})),--d||r(e)}));return o.e&&i(o.v),e.promise},race:function(t){var n=this,e=L(n),r=e.reject,i=b((function(){h(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return i.e&&r(i.v),e.promise}})},function(t,n,e){"use strict";var r=e(18);function i(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new i(t)}},function(t,n,e){var r=e(3),i=e(4),o=e(111);t.exports=function(t,n){if(r(t),i(n)&&n.constructor===t)return n;var e=o.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";var r=e(9).f,i=e(33),o=e(43),d=e(17),a=e(42),c=e(56),u=e(72),s=e(107),l=e(41),f=e(8),$=e(27).fastKey,p=e(37),h=f?"_s":"size",v=function(t,n){var e,r=$(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,u){var s=t((function(t,r){a(t,s,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[h]=0,null!=r&&c(r,e,t[u],t)}));return o(s.prototype,{clear:function(){for(var t=p(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var e=p(this,n),r=v(e,t);if(r){var i=r.n,o=r.p;delete e._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),e._f==r&&(e._f=i),e._l==r&&(e._l=o),e[h]--}return!!r},forEach:function(t){p(this,n);for(var e,r=d(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!v(p(this,n),t)}}),f&&r(s.prototype,"size",{get:function(){return p(this,n)[h]}}),s},def:function(t,n,e){var r,i,o=v(t,n);return o?o.v=e:(t._l=o={i:i=$(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[h]++,"F"!==i&&(t._i[i]=o)),t},getEntry:v,setStrong:function(t,n,e){u(t,n,(function(t,e){this._t=p(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))}),e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){"use strict";var r=e(43),i=e(27).getWeak,o=e(3),d=e(4),a=e(42),c=e(56),u=e(22),s=e(13),l=e(37),f=u(5),$=u(6),p=0,h=function(t){return t._l||(t._l=new v)},v=function(){this.a=[]},y=function(t,n){return f(t.a,(function(t){return t[0]===n}))};v.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var e=y(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=$(this.a,(function(n){return n[0]===t}));return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,o){var u=t((function(t,r){a(t,u,n,"_i"),t._t=n,t._i=p++,t._l=void 0,null!=r&&c(r,e,t[o],t)}));return r(u.prototype,{delete:function(t){if(!d(t))return!1;var e=i(t);return!0===e?h(l(this,n)).delete(t):e&&s(e,this._i)&&delete e[this._i]},has:function(t){if(!d(t))return!1;var e=i(t);return!0===e?h(l(this,n)).has(t):e&&s(e,this._i)}}),u},def:function(t,n,e){var r=i(o(n),!0);return!0===r?h(t).set(n,e):r[t._i]=e,t},ufstore:h}},function(t,n,e){var r=e(19),i=e(6);t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=i(n);if(n!==e)throw RangeError("Wrong length!");return e}},function(t,n,e){var r=e(34),i=e(50),o=e(3),d=e(1).Reflect;t.exports=d&&d.ownKeys||function(t){var n=r.f(o(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(6),i=e(68),o=e(24);t.exports=function(t,n,e,d){var a=String(o(t)),c=a.length,u=void 0===e?" ":String(e),s=r(n);if(s<=c||""==u)return a;var l=s-c,f=i.call(u,Math.ceil(l/u.length));return f.length>l&&(f=f.slice(0,l)),d?f+a:a+f}},function(t,n,e){var r=e(8),i=e(31),o=e(15),d=e(45).f;t.exports=function(t){return function(n){for(var e,a=o(n),c=i(a),u=c.length,s=0,l=[];u>s;)e=c[s++],r&&!d.call(a,e)||l.push(t?[e,a[e]]:a[e]);return l}}},function(t,n){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,function(t,n,e){e(123),t.exports=e(309)},function(t,n,e){"use strict";e(124);var r,i=(r=e(296))&&r.__esModule?r:{default:r};i.default._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),i.default._babelPolyfill=!0},function(t,n,e){"use strict";e(125),e(268),e(270),e(273),e(275),e(277),e(279),e(281),e(283),e(285),e(287),e(289),e(291),e(295)},function(t,n,e){e(126),e(129),e(130),e(131),e(132),e(133),e(134),e(135),e(136),e(137),e(138),e(139),e(140),e(141),e(142),e(143),e(144),e(145),e(146),e(147),e(148),e(149),e(150),e(151),e(152),e(153),e(154),e(155),e(156),e(157),e(158),e(159),e(160),e(161),e(162),e(163),e(164),e(165),e(166),e(167),e(168),e(169),e(170),e(172),e(173),e(174),e(175),e(176),e(177),e(178),e(179),e(180),e(181),e(182),e(183),e(184),e(185),e(186),e(187),e(188),e(189),e(190),e(191),e(192),e(193),e(194),e(195),e(196),e(197),e(198),e(199),e(200),e(201),e(202),e(203),e(204),e(205),e(207),e(208),e(210),e(211),e(212),e(213),e(214),e(215),e(216),e(218),e(219),e(220),e(221),e(222),e(223),e(224),e(225),e(226),e(227),e(228),e(229),e(230),e(80),e(231),e(108),e(232),e(109),e(233),e(234),e(235),e(236),e(110),e(239),e(240),e(241),e(242),e(243),e(244),e(245),e(246),e(247),e(248),e(249),e(250),e(251),e(252),e(253),e(254),e(255),e(256),e(257),e(258),e(259),e(260),e(261),e(262),e(263),e(264),e(265),e(266),e(267),t.exports=e(7)},function(t,n,e){"use strict";var r=e(1),i=e(13),o=e(8),d=e(0),a=e(11),c=e(27).KEY,u=e(2),s=e(48),l=e(38),f=e(29),$=e(5),p=e(61),h=e(89),v=e(128),y=e(51),g=e(3),m=e(4),b=e(10),w=e(15),x=e(26),S=e(28),O=e(33),E=e(92),_=e(20),P=e(50),A=e(9),C=e(31),L=_.f,T=A.f,N=E.f,I=r.Symbol,M=r.JSON,k=M&&M.stringify,F=$("_hidden"),j=$("toPrimitive"),B={}.propertyIsEnumerable,R=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),q=Object.prototype,U="function"==typeof I&&!!P.f,H=r.QObject,W=!H||!H.prototype||!H.prototype.findChild,V=o&&u((function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=L(q,n);r&&delete q[n],T(t,n,e),r&&t!==q&&T(q,n,r)}:T,K=function(t){var n=D[t]=O(I.prototype);return n._k=t,n},Z=U&&"symbol"==typeof I.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof I},z=function(t,n,e){return t===q&&z(G,n,e),g(t),n=x(n,!0),g(e),i(D,n)?(e.enumerable?(i(t,F)&&t[F][n]&&(t[F][n]=!1),e=O(e,{enumerable:S(0,!1)})):(i(t,F)||T(t,F,S(1,{})),t[F][n]=!0),V(t,n,e)):T(t,n,e)},Y=function(t,n){g(t);for(var e,r=v(n=w(n)),i=0,o=r.length;o>i;)z(t,e=r[i++],n[e]);return t},J=function(t){var n=B.call(this,t=x(t,!0));return!(this===q&&i(D,t)&&!i(G,t))&&(!(n||!i(this,t)||!i(D,t)||i(this,F)&&this[F][t])||n)},X=function(t,n){if(t=w(t),n=x(n,!0),t!==q||!i(D,n)||i(G,n)){var e=L(t,n);return!e||!i(D,n)||i(t,F)&&t[F][n]||(e.enumerable=!0),e}},Q=function(t){for(var n,e=N(w(t)),r=[],o=0;e.length>o;)i(D,n=e[o++])||n==F||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===q,r=N(e?G:w(t)),o=[],d=0;r.length>d;)!i(D,n=r[d++])||e&&!i(q,n)||o.push(D[n]);return o};U||(a((I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor!");var t=f(arguments.length>0?arguments[0]:void 0),n=function(e){this===q&&n.call(G,e),i(this,F)&&i(this[F],t)&&(this[F][t]=!1),V(this,t,S(1,e))};return o&&W&&V(q,t,{configurable:!0,set:n}),K(t)}).prototype,"toString",(function(){return this._k})),_.f=X,A.f=z,e(34).f=E.f=Q,e(45).f=J,P.f=tt,o&&!e(30)&&a(q,"propertyIsEnumerable",J,!0),p.f=function(t){return K($(t))}),d(d.G+d.W+d.F*!U,{Symbol:I});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)$(nt[et++]);for(var rt=C($.store),it=0;rt.length>it;)h(rt[it++]);d(d.S+d.F*!U,"Symbol",{for:function(t){return i(R,t+="")?R[t]:R[t]=I(t)},keyFor:function(t){if(!Z(t))throw TypeError(t+" is not a symbol!");for(var n in R)if(R[n]===t)return n},useSetter:function(){W=!0},useSimple:function(){W=!1}}),d(d.S+d.F*!U,"Object",{create:function(t,n){return void 0===n?O(t):Y(O(t),n)},defineProperty:z,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var ot=u((function(){P.f(1)}));d(d.S+d.F*ot,"Object",{getOwnPropertySymbols:function(t){return P.f(b(t))}}),M&&d(d.S+d.F*(!U||u((function(){var t=I();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(e=n=r[1],(m(n)||void 0!==t)&&!Z(t))return y(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!Z(n))return n}),r[1]=n,k.apply(M,r)}}),I.prototype[j]||e(14)(I.prototype,j,I.prototype.valueOf),l(I,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){t.exports=e(48)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(31),i=e(50),o=e(45);t.exports=function(t){var n=r(t),e=i.f;if(e)for(var d,a=e(t),c=o.f,u=0;a.length>u;)c.call(t,d=a[u++])&&n.push(d);return n}},function(t,n,e){var r=e(0);r(r.S,"Object",{create:e(33)})},function(t,n,e){var r=e(0);r(r.S+r.F*!e(8),"Object",{defineProperty:e(9).f})},function(t,n,e){var r=e(0);r(r.S+r.F*!e(8),"Object",{defineProperties:e(91)})},function(t,n,e){var r=e(15),i=e(20).f;e(21)("getOwnPropertyDescriptor",(function(){return function(t,n){return i(r(t),n)}}))},function(t,n,e){var r=e(10),i=e(35);e(21)("getPrototypeOf",(function(){return function(t){return i(r(t))}}))},function(t,n,e){var r=e(10),i=e(31);e(21)("keys",(function(){return function(t){return i(r(t))}}))},function(t,n,e){e(21)("getOwnPropertyNames",(function(){return e(92).f}))},function(t,n,e){var r=e(4),i=e(27).onFreeze;e(21)("freeze",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(4),i=e(27).onFreeze;e(21)("seal",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(4),i=e(27).onFreeze;e(21)("preventExtensions",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(4);e(21)("isFrozen",(function(t){return function(n){return!r(n)||!!t&&t(n)}}))},function(t,n,e){var r=e(4);e(21)("isSealed",(function(t){return function(n){return!r(n)||!!t&&t(n)}}))},function(t,n,e){var r=e(4);e(21)("isExtensible",(function(t){return function(n){return!!r(n)&&(!t||t(n))}}))},function(t,n,e){var r=e(0);r(r.S+r.F,"Object",{assign:e(93)})},function(t,n,e){var r=e(0);r(r.S,"Object",{is:e(94)})},function(t,n,e){var r=e(0);r(r.S,"Object",{setPrototypeOf:e(65).set})},function(t,n,e){"use strict";var r=e(46),i={};i[e(5)("toStringTag")]="z",i+""!="[object z]"&&e(11)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,n,e){var r=e(0);r(r.P,"Function",{bind:e(95)})},function(t,n,e){var r=e(9).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||e(8)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,e){"use strict";var r=e(4),i=e(35),o=e(5)("hasInstance"),d=Function.prototype;o in d||e(9).f(d,o,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,e){var r=e(0),i=e(97);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,n,e){var r=e(0),i=e(98);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},function(t,n,e){"use strict";var r=e(1),i=e(13),o=e(23),d=e(67),a=e(26),c=e(2),u=e(34).f,s=e(20).f,l=e(9).f,f=e(39).trim,$=r.Number,p=$,h=$.prototype,v="Number"==o(e(33)(h)),y="trim"in String.prototype,g=function(t){var n=a(t,!1);if("string"==typeof n&&n.length>2){var e,r,i,o=(n=y?n.trim():f(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+n}for(var d,c=n.slice(2),u=0,s=c.length;u<s;u++)if((d=c.charCodeAt(u))<48||d>i)return NaN;return parseInt(c,r)}}return+n};if(!$(" 0o1")||!$("0b1")||$("+0x1")){$=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof $&&(v?c((function(){h.valueOf.call(e)})):"Number"!=o(e))?d(new p(g(n)),e,$):g(n)};for(var m,b=e(8)?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;b.length>w;w++)i(p,m=b[w])&&!i($,m)&&l($,m,s(p,m));$.prototype=h,h.constructor=$,e(11)(r,"Number",$)}},function(t,n,e){"use strict";var r=e(0),i=e(19),o=e(99),d=e(68),a=1..toFixed,c=Math.floor,u=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l=function(t,n){for(var e=-1,r=n;++e<6;)r+=t*u[e],u[e]=r%1e7,r=c(r/1e7)},f=function(t){for(var n=6,e=0;--n>=0;)e+=u[n],u[n]=c(e/t),e=e%t*1e7},$=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==u[t]){var e=String(u[t]);n=""===n?e:n+d.call("0",7-e.length)+e}return n},p=function(t,n,e){return 0===n?e:n%2==1?p(t,n-1,e*t):p(t*t,n/2,e)};r(r.P+r.F*(!!a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!e(2)((function(){a.call({})}))),"Number",{toFixed:function(t){var n,e,r,a,c=o(this,s),u=i(t),h="",v="0";if(u<0||u>20)throw RangeError(s);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(c*p(2,69,1))-69)<0?c*p(2,-n,1):c/p(2,n,1),e*=4503599627370496,(n=52-n)>0){for(l(0,e),r=u;r>=7;)l(1e7,0),r-=7;for(l(p(10,r,1),0),r=n-1;r>=23;)f(1<<23),r-=23;f(1<<r),l(1,1),f(2),v=$()}else l(0,e),l(1<<-n,0),v=$()+d.call("0",u);return v=u>0?h+((a=v.length)<=u?"0."+d.call("0",u-a)+v:v.slice(0,a-u)+"."+v.slice(a-u)):h+v}})},function(t,n,e){"use strict";var r=e(0),i=e(2),o=e(99),d=1..toPrecision;r(r.P+r.F*(i((function(){return"1"!==d.call(1,void 0)}))||!i((function(){d.call({})}))),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?d.call(n):d.call(n,t)}})},function(t,n,e){var r=e(0);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,e){var r=e(0),i=e(1).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,e){var r=e(0);r(r.S,"Number",{isInteger:e(100)})},function(t,n,e){var r=e(0);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,e){var r=e(0),i=e(100),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,e){var r=e(0);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,e){var r=e(0);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,e){var r=e(0),i=e(98);r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,e){var r=e(0),i=e(97);r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,e){var r=e(0),i=e(101),o=Math.sqrt,d=Math.acosh;r(r.S+r.F*!(d&&710==Math.floor(d(Number.MAX_VALUE))&&d(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,e){var r=e(0),i=Math.asinh;r(r.S+r.F*!(i&&1/i(0)>0),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},function(t,n,e){var r=e(0),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,e){var r=e(0),i=e(69);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,e){var r=e(0);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,e){var r=e(0),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,e){var r=e(0),i=e(70);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,e){var r=e(0);r(r.S,"Math",{fround:e(171)})},function(t,n,e){var r=e(69),i=Math.pow,o=i(2,-52),d=i(2,-23),a=i(2,127)*(2-d),c=i(2,-126);t.exports=Math.fround||function(t){var n,e,i=Math.abs(t),u=r(t);return i<c?u*(i/c/d+1/o-1/o)*c*d:(e=(n=(1+d/o)*i)-(n-i))>a||e!=e?u*(1/0):u*e}},function(t,n,e){var r=e(0),i=Math.abs;r(r.S,"Math",{hypot:function(t,n){for(var e,r,o=0,d=0,a=arguments.length,c=0;d<a;)c<(e=i(arguments[d++]))?(o=o*(r=c/e)*r+1,c=e):o+=e>0?(r=e/c)*r:e;return c===1/0?1/0:c*Math.sqrt(o)}})},function(t,n,e){var r=e(0),i=Math.imul;r(r.S+r.F*e(2)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,n){var e=+t,r=+n,i=65535&e,o=65535&r;return 0|i*o+((65535&e>>>16)*o+i*(65535&r>>>16)<<16>>>0)}})},function(t,n,e){var r=e(0);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,e){var r=e(0);r(r.S,"Math",{log1p:e(101)})},function(t,n,e){var r=e(0);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,e){var r=e(0);r(r.S,"Math",{sign:e(69)})},function(t,n,e){var r=e(0),i=e(70),o=Math.exp;r(r.S+r.F*e(2)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,e){var r=e(0),i=e(70),o=Math.exp;r(r.S,"Math",{tanh:function(t){var n=i(t=+t),e=i(-t);return n==1/0?1:e==1/0?-1:(n-e)/(o(t)+o(-t))}})},function(t,n,e){var r=e(0);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,e){var r=e(0),i=e(32),o=String.fromCharCode,d=String.fromCodePoint;r(r.S+r.F*(!!d&&1!=d.length),"String",{fromCodePoint:function(t){for(var n,e=[],r=arguments.length,d=0;r>d;){if(n=+arguments[d++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");e.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return e.join("")}})},function(t,n,e){var r=e(0),i=e(15),o=e(6);r(r.S,"String",{raw:function(t){for(var n=i(t.raw),e=o(n.length),r=arguments.length,d=[],a=0;e>a;)d.push(String(n[a++])),a<r&&d.push(String(arguments[a]));return d.join("")}})},function(t,n,e){"use strict";e(39)("trim",(function(t){return function(){return t(this,3)}}))},function(t,n,e){"use strict";var r=e(71)(!0);e(72)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n,e){"use strict";var r=e(0),i=e(71)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,e){"use strict";var r=e(0),i=e(6),o=e(73),d="".endsWith;r(r.P+r.F*e(75)("endsWith"),"String",{endsWith:function(t){var n=o(this,t,"endsWith"),e=arguments.length>1?arguments[1]:void 0,r=i(n.length),a=void 0===e?r:Math.min(i(e),r),c=String(t);return d?d.call(n,c,a):n.slice(a-c.length,a)===c}})},function(t,n,e){"use strict";var r=e(0),i=e(73);r(r.P+r.F*e(75)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(0);r(r.P,"String",{repeat:e(68)})},function(t,n,e){"use strict";var r=e(0),i=e(6),o=e(73),d="".startsWith;r(r.P+r.F*e(75)("startsWith"),"String",{startsWith:function(t){var n=o(this,t,"startsWith"),e=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return d?d.call(n,r,e):n.slice(e,e+r.length)===r}})},function(t,n,e){"use strict";e(12)("anchor",(function(t){return function(n){return t(this,"a","name",n)}}))},function(t,n,e){"use strict";e(12)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,n,e){"use strict";e(12)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,n,e){"use strict";e(12)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,n,e){"use strict";e(12)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,n,e){"use strict";e(12)("fontcolor",(function(t){return function(n){return t(this,"font","color",n)}}))},function(t,n,e){"use strict";e(12)("fontsize",(function(t){return function(n){return t(this,"font","size",n)}}))},function(t,n,e){"use strict";e(12)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,n,e){"use strict";e(12)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},function(t,n,e){"use strict";e(12)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,n,e){"use strict";e(12)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,n,e){"use strict";e(12)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,n,e){"use strict";e(12)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,n,e){var r=e(0);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,e){"use strict";var r=e(0),i=e(10),o=e(26);r(r.P+r.F*e(2)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var n=i(this),e=o(n);return"number"!=typeof e||isFinite(e)?n.toISOString():null}})},function(t,n,e){var r=e(0),i=e(206);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,e){"use strict";var r=e(2),i=Date.prototype.getTime,o=Date.prototype.toISOString,d=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-50000000000001))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),e=t.getUTCMilliseconds(),r=n<0?"-":n>9999?"+":"";return r+("00000"+Math.abs(n)).slice(r?-6:-4)+"-"+d(t.getUTCMonth()+1)+"-"+d(t.getUTCDate())+"T"+d(t.getUTCHours())+":"+d(t.getUTCMinutes())+":"+d(t.getUTCSeconds())+"."+(e>99?e:"0"+d(e))+"Z"}:o},function(t,n,e){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&e(11)(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n,e){var r=e(5)("toPrimitive"),i=Date.prototype;r in i||e(14)(i,r,e(209))},function(t,n,e){"use strict";var r=e(3),i=e(26);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),"number"!=t)}},function(t,n,e){var r=e(0);r(r.S,"Array",{isArray:e(51)})},function(t,n,e){"use strict";var r=e(17),i=e(0),o=e(10),d=e(103),a=e(76),c=e(6),u=e(77),s=e(78);i(i.S+i.F*!e(52)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,i,l,f=o(t),$="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,v=void 0!==h,y=0,g=s(f);if(v&&(h=r(h,p>2?arguments[2]:void 0,2)),null==g||$==Array&&a(g))for(e=new $(n=c(f.length));n>y;y++)u(e,y,v?h(f[y],y):f[y]);else for(l=g.call(f),e=new $;!(i=l.next()).done;y++)u(e,y,v?d(l,h,[i.value,y],!0):i.value);return e.length=y,e}})},function(t,n,e){"use strict";var r=e(0),i=e(77);r(r.S+r.F*e(2)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,n=arguments.length,e=new("function"==typeof this?this:Array)(n);n>t;)i(e,t,arguments[t++]);return e.length=n,e}})},function(t,n,e){"use strict";var r=e(0),i=e(15),o=[].join;r(r.P+r.F*(e(44)!=Object||!e(16)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,n,e){"use strict";var r=e(0),i=e(64),o=e(23),d=e(32),a=e(6),c=[].slice;r(r.P+r.F*e(2)((function(){i&&c.call(i)})),"Array",{slice:function(t,n){var e=a(this.length),r=o(this);if(n=void 0===n?e:n,"Array"==r)return c.call(this,t,n);for(var i=d(t,e),u=d(n,e),s=a(u-i),l=new Array(s),f=0;f<s;f++)l[f]="String"==r?this.charAt(i+f):this[i+f];return l}})},function(t,n,e){"use strict";var r=e(0),i=e(18),o=e(10),d=e(2),a=[].sort,c=[1,2,3];r(r.P+r.F*(d((function(){c.sort(void 0)}))||!d((function(){c.sort(null)}))||!e(16)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},function(t,n,e){"use strict";var r=e(0),i=e(22)(0),o=e(16)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,e){var r=e(4),i=e(51),o=e(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){"use strict";var r=e(0),i=e(22)(1);r(r.P+r.F*!e(16)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(22)(2);r(r.P+r.F*!e(16)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(22)(3);r(r.P+r.F*!e(16)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(22)(4);r(r.P+r.F*!e(16)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(105);r(r.P+r.F*!e(16)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,e){"use strict";var r=e(0),i=e(105);r(r.P+r.F*!e(16)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,e){"use strict";var r=e(0),i=e(49)(!1),o=[].indexOf,d=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(d||!e(16)(o)),"Array",{indexOf:function(t){return d?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(0),i=e(15),o=e(19),d=e(6),a=[].lastIndexOf,c=!!a&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(c||!e(16)(a)),"Array",{lastIndexOf:function(t){if(c)return a.apply(this,arguments)||0;var n=i(this),e=d(n.length),r=e-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=e+r);r>=0;r--)if(r in n&&n[r]===t)return r||0;return-1}})},function(t,n,e){var r=e(0);r(r.P,"Array",{copyWithin:e(106)}),e(36)("copyWithin")},function(t,n,e){var r=e(0);r(r.P,"Array",{fill:e(79)}),e(36)("fill")},function(t,n,e){"use strict";var r=e(0),i=e(22)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(36)("find")},function(t,n,e){"use strict";var r=e(0),i=e(22)(6),o="findIndex",d=!0;o in[]&&Array(1)[o]((function(){d=!1})),r(r.P+r.F*d,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(36)(o)},function(t,n,e){e(41)("Array")},function(t,n,e){var r=e(1),i=e(67),o=e(9).f,d=e(34).f,a=e(74),c=e(53),u=r.RegExp,s=u,l=u.prototype,f=/a/g,$=/a/g,p=new u(f)!==f;if(e(8)&&(!p||e(2)((function(){return $[e(5)("match")]=!1,u(f)!=f||u($)==$||"/a/i"!=u(f,"i")})))){u=function(t,n){var e=this instanceof u,r=a(t),o=void 0===n;return!e&&r&&t.constructor===u&&o?t:i(p?new s(r&&!o?t.source:t,n):s((r=t instanceof u)?t.source:t,r&&o?c.call(t):n),e?this:l,u)};for(var h=function(t){t in u||o(u,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})},v=d(s),y=0;v.length>y;)h(v[y++]);l.constructor=u,u.prototype=l,e(11)(r,"RegExp",u)}e(41)("RegExp")},function(t,n,e){"use strict";e(109);var r=e(3),i=e(53),o=e(8),d=/./.toString,a=function(t){e(11)(RegExp.prototype,"toString",t,!0)};e(2)((function(){return"/a/b"!=d.call({source:"a",flags:"b"})}))?a((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=d.name&&a((function(){return d.call(this)}))},function(t,n,e){"use strict";var r=e(3),i=e(6),o=e(82),d=e(54);e(55)("match",1,(function(t,n,e,a){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=a(e,t,this);if(n.done)return n.value;var c=r(t),u=String(this);if(!c.global)return d(c,u);var s=c.unicode;c.lastIndex=0;for(var l,f=[],$=0;null!==(l=d(c,u));){var p=String(l[0]);f[$]=p,""===p&&(c.lastIndex=o(u,i(c.lastIndex),s)),$++}return 0===$?null:f}]}))},function(t,n,e){"use strict";var r=e(3),i=e(10),o=e(6),d=e(19),a=e(82),c=e(54),u=Math.max,s=Math.min,l=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,$=/\$([$&`']|\d\d?)/g;e(55)("replace",2,(function(t,n,e,p){return[function(r,i){var o=t(this),d=null==r?void 0:r[n];return void 0!==d?d.call(r,o,i):e.call(String(o),r,i)},function(t,n){var i=p(e,t,this,n);if(i.done)return i.value;var l=r(t),f=String(this),$="function"==typeof n;$||(n=String(n));var v=l.global;if(v){var y=l.unicode;l.lastIndex=0}for(var g=[];;){var m=c(l,f);if(null===m)break;if(g.push(m),!v)break;""===String(m[0])&&(l.lastIndex=a(f,o(l.lastIndex),y))}for(var b,w="",x=0,S=0;S<g.length;S++){m=g[S];for(var O=String(m[0]),E=u(s(d(m.index),f.length),0),_=[],P=1;P<m.length;P++)_.push(void 0===(b=m[P])?b:String(b));var A=m.groups;if($){var C=[O].concat(_,E,f);void 0!==A&&C.push(A);var L=String(n.apply(void 0,C))}else L=h(O,f,E,_,A,n);E>=x&&(w+=f.slice(x,E)+L,x=E+O.length)}return w+f.slice(x)}];function h(t,n,r,o,d,a){var c=r+t.length,u=o.length,s=$;return void 0!==d&&(d=i(d),s=f),e.call(a,s,(function(e,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":a=d[i.slice(1,-1)];break;default:var s=+i;if(0===s)return e;if(s>u){var f=l(s/10);return 0===f?e:f<=u?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):e}a=o[s-1]}return void 0===a?"":a}))}}))},function(t,n,e){"use strict";var r=e(3),i=e(94),o=e(54);e(55)("search",1,(function(t,n,e,d){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=d(e,t,this);if(n.done)return n.value;var a=r(t),c=String(this),u=a.lastIndex;i(u,0)||(a.lastIndex=0);var s=o(a,c);return i(a.lastIndex,u)||(a.lastIndex=u),null===s?-1:s.index}]}))},function(t,n,e){"use strict";var r=e(74),i=e(3),o=e(47),d=e(82),a=e(6),c=e(54),u=e(81),s=e(2),l=Math.min,f=[].push,$="length",p=!s((function(){RegExp(4294967295,"y")}));e(55)("split",2,(function(t,n,e,s){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[$]||2!="ab".split(/(?:ab)*/)[$]||4!=".".split(/(.?)(.?)/)[$]||".".split(/()()/)[$]>1||"".split(/.?/)[$]?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,d,a,c=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,p=void 0===n?4294967295:n>>>0,h=new RegExp(t.source,s+"g");(o=u.call(h,i))&&!((d=h.lastIndex)>l&&(c.push(i.slice(l,o.index)),o[$]>1&&o.index<i[$]&&f.apply(c,o.slice(1)),a=o[0][$],l=d,c[$]>=p));)h.lastIndex===o.index&&h.lastIndex++;return l===i[$]?!a&&h.test("")||c.push(""):c.push(i.slice(l)),c[$]>p?c.slice(0,p):c}:"0".split(void 0,0)[$]?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):h.call(String(i),e,r)},function(t,n){var r=s(h,t,this,n,h!==e);if(r.done)return r.value;var u=i(t),f=String(this),$=o(u,RegExp),v=u.unicode,y=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(p?"y":"g"),g=new $(p?u:"^(?:"+u.source+")",y),m=void 0===n?4294967295:n>>>0;if(0===m)return[];if(0===f.length)return null===c(g,f)?[f]:[];for(var b=0,w=0,x=[];w<f.length;){g.lastIndex=p?w:0;var S,O=c(g,p?f:f.slice(w));if(null===O||(S=l(a(g.lastIndex+(p?0:w)),f.length))===b)w=d(f,w,v);else{if(x.push(f.slice(b,w)),x.length===m)return x;for(var E=1;E<=O.length-1;E++)if(x.push(O[E]),x.length===m)return x;w=b=S}}return x.push(f.slice(b)),x}]}))},function(t,n,e){var r=e(1),i=e(83).set,o=r.MutationObserver||r.WebKitMutationObserver,d=r.process,a=r.Promise,c="process"==e(23)(d);t.exports=function(){var t,n,e,u=function(){var r,i;for(c&&(r=d.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(c)e=function(){d.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var s=a.resolve(void 0);e=function(){s.then(u)}}else e=function(){i.call(r,u)};else{var l=!0,f=document.createTextNode("");new o(u).observe(f,{characterData:!0}),e=function(){f.data=l=!l}}return function(r){var i={fn:r,next:void 0};n&&(n.next=i),t||(t=i,e()),n=i}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){"use strict";var r=e(113),i=e(37);t.exports=e(58)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(i(this,"Map"),0===t?0:t,n)}},r,!0)},function(t,n,e){"use strict";var r=e(113),i=e(37);t.exports=e(58)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},function(t,n,e){"use strict";var r,i=e(1),o=e(22)(0),d=e(11),a=e(27),c=e(93),u=e(114),s=e(4),l=e(37),f=e(37),$=!i.ActiveXObject&&"ActiveXObject"in i,p=a.getWeak,h=Object.isExtensible,v=u.ufstore,y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(s(t)){var n=p(t);return!0===n?v(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return u.def(l(this,"WeakMap"),t,n)}},m=t.exports=e(58)("WeakMap",y,g,u,!0,!0);f&&$&&(c((r=u.getConstructor(y,"WeakMap")).prototype,g),a.NEED=!0,o(["delete","has","get","set"],(function(t){var n=m.prototype,e=n[t];d(n,t,(function(n,i){if(s(n)&&!h(n)){this._f||(this._f=new r);var o=this._f[t](n,i);return"set"==t?this:o}return e.call(this,n,i)}))})))},function(t,n,e){"use strict";var r=e(114),i=e(37);e(58)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"WeakSet"),t,!0)}},r,!1,!0)},function(t,n,e){"use strict";var r=e(0),i=e(59),o=e(84),d=e(3),a=e(32),c=e(6),u=e(4),s=e(1).ArrayBuffer,l=e(47),f=o.ArrayBuffer,$=o.DataView,p=i.ABV&&s.isView,h=f.prototype.slice,v=i.VIEW;r(r.G+r.W+r.F*(s!==f),{ArrayBuffer:f}),r(r.S+r.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return p&&p(t)||u(t)&&v in t}}),r(r.P+r.U+r.F*e(2)((function(){return!new f(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,n){if(void 0!==h&&void 0===n)return h.call(d(this),t);for(var e=d(this).byteLength,r=a(t,e),i=a(void 0===n?e:n,e),o=new(l(this,f))(c(i-r)),u=new $(this),s=new $(o),p=0;r<i;)s.setUint8(p++,u.getUint8(r++));return o}}),e(41)("ArrayBuffer")},function(t,n,e){var r=e(0);r(r.G+r.W+r.F*!e(59).ABV,{DataView:e(84).DataView})},function(t,n,e){e(25)("Int8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(25)("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(25)("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}),!0)},function(t,n,e){e(25)("Int16",2,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(25)("Uint16",2,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(25)("Int32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(25)("Uint32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(25)("Float32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(25)("Float64",8,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){var r=e(0),i=e(18),o=e(3),d=(e(1).Reflect||{}).apply,a=Function.apply;r(r.S+r.F*!e(2)((function(){d((function(){}))})),"Reflect",{apply:function(t,n,e){var r=i(t),c=o(e);return d?d(r,n,c):a.call(r,n,c)}})},function(t,n,e){var r=e(0),i=e(33),o=e(18),d=e(3),a=e(4),c=e(2),u=e(95),s=(e(1).Reflect||{}).construct,l=c((function(){function t(){}return!(s((function(){}),[],t)instanceof t)})),f=!c((function(){s((function(){}))}));r(r.S+r.F*(l||f),"Reflect",{construct:function(t,n){o(t),d(n);var e=arguments.length<3?t:o(arguments[2]);if(f&&!l)return s(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(u.apply(t,r))}var c=e.prototype,$=i(a(c)?c:Object.prototype),p=Function.apply.call(t,$,n);return a(p)?p:$}})},function(t,n,e){var r=e(9),i=e(0),o=e(3),d=e(26);i(i.S+i.F*e(2)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,n,e){o(t),n=d(n,!0),o(e);try{return r.f(t,n,e),!0}catch(t){return!1}}})},function(t,n,e){var r=e(0),i=e(20).f,o=e(3);r(r.S,"Reflect",{deleteProperty:function(t,n){var e=i(o(t),n);return!(e&&!e.configurable)&&delete t[n]}})},function(t,n,e){"use strict";var r=e(0),i=e(3),o=function(t){this._t=i(t),this._i=0;var n,e=this._k=[];for(n in t)e.push(n)};e(102)(o,"Object",(function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,n,e){var r=e(20),i=e(35),o=e(13),d=e(0),a=e(4),c=e(3);d(d.S,"Reflect",{get:function t(n,e){var d,u,s=arguments.length<3?n:arguments[2];return c(n)===s?n[e]:(d=r.f(n,e))?o(d,"value")?d.value:void 0!==d.get?d.get.call(s):void 0:a(u=i(n))?t(u,e,s):void 0}})},function(t,n,e){var r=e(20),i=e(0),o=e(3);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return r.f(o(t),n)}})},function(t,n,e){var r=e(0),i=e(35),o=e(3);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,e){var r=e(0);r(r.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,e){var r=e(0),i=e(3),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,e){var r=e(0);r(r.S,"Reflect",{ownKeys:e(116)})},function(t,n,e){var r=e(0),i=e(3),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,e){var r=e(9),i=e(20),o=e(35),d=e(13),a=e(0),c=e(28),u=e(3),s=e(4);a(a.S,"Reflect",{set:function t(n,e,a){var l,f,$=arguments.length<4?n:arguments[3],p=i.f(u(n),e);if(!p){if(s(f=o(n)))return t(f,e,a,$);p=c(0)}if(d(p,"value")){if(!1===p.writable||!s($))return!1;if(l=i.f($,e)){if(l.get||l.set||!1===l.writable)return!1;l.value=a,r.f($,e,l)}else r.f($,e,c(0,a));return!0}return void 0!==p.set&&(p.set.call($,a),!0)}})},function(t,n,e){var r=e(0),i=e(65);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,e){e(269),t.exports=e(7).Array.includes},function(t,n,e){"use strict";var r=e(0),i=e(49)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(36)("includes")},function(t,n,e){e(271),t.exports=e(7).Array.flatMap},function(t,n,e){"use strict";var r=e(0),i=e(272),o=e(10),d=e(6),a=e(18),c=e(104);r(r.P,"Array",{flatMap:function(t){var n,e,r=o(this);return a(t),n=d(r.length),e=c(r,0),i(e,r,r,n,0,1,t,arguments[1]),e}}),e(36)("flatMap")},function(t,n,e){"use strict";var r=e(51),i=e(4),o=e(6),d=e(17),a=e(5)("isConcatSpreadable");t.exports=function t(n,e,c,u,s,l,f,$){for(var p,h,v=s,y=0,g=!!f&&d(f,$,3);y<u;){if(y in c){if(p=g?g(c[y],y,e):c[y],h=!1,i(p)&&(h=void 0!==(h=p[a])?!!h:r(p)),h&&l>0)v=t(n,e,p,o(p.length),v,l-1)-1;else{if(v>=9007199254740991)throw TypeError();n[v]=p}v++}y++}return v}},function(t,n,e){e(274),t.exports=e(7).String.padStart},function(t,n,e){"use strict";var r=e(0),i=e(117),o=e(57),d=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*d,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,e){e(276),t.exports=e(7).String.padEnd},function(t,n,e){"use strict";var r=e(0),i=e(117),o=e(57),d=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*d,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,e){e(278),t.exports=e(7).String.trimLeft},function(t,n,e){"use strict";e(39)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,n,e){e(280),t.exports=e(7).String.trimRight},function(t,n,e){"use strict";e(39)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,n,e){e(282),t.exports=e(61).f("asyncIterator")},function(t,n,e){e(89)("asyncIterator")},function(t,n,e){e(284),t.exports=e(7).Object.getOwnPropertyDescriptors},function(t,n,e){var r=e(0),i=e(116),o=e(15),d=e(20),a=e(77);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,e,r=o(t),c=d.f,u=i(r),s={},l=0;u.length>l;)void 0!==(e=c(r,n=u[l++]))&&a(s,n,e);return s}})},function(t,n,e){e(286),t.exports=e(7).Object.values},function(t,n,e){var r=e(0),i=e(118)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,n,e){e(288),t.exports=e(7).Object.entries},function(t,n,e){var r=e(0),i=e(118)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},function(t,n,e){"use strict";e(110),e(290),t.exports=e(7).Promise.finally},function(t,n,e){"use strict";var r=e(0),i=e(7),o=e(1),d=e(47),a=e(112);r(r.P+r.R,"Promise",{finally:function(t){var n=d(this,i.Promise||o.Promise),e="function"==typeof t;return this.then(e?function(e){return a(n,t()).then((function(){return e}))}:t,e?function(e){return a(n,t()).then((function(){throw e}))}:t)}})},function(t,n,e){e(292),e(293),e(294),t.exports=e(7)},function(t,n,e){var r=e(1),i=e(0),o=e(57),d=[].slice,a=/MSIE .\./.test(o),c=function(t){return function(n,e){var r=arguments.length>2,i=!!r&&d.call(arguments,2);return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};i(i.G+i.B+i.F*a,{setTimeout:c(r.setTimeout),setInterval:c(r.setInterval)})},function(t,n,e){var r=e(0),i=e(83);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,e){for(var r=e(80),i=e(31),o=e(11),d=e(1),a=e(14),c=e(40),u=e(5),s=u("iterator"),l=u("toStringTag"),f=c.Array,$={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i($),h=0;h<p.length;h++){var v,y=p[h],g=$[y],m=d[y],b=m&&m.prototype;if(b&&(b[s]||a(b,s,f),b[l]||a(b,l,y),c[y]=f,g))for(v in r)b[v]||o(b,v,r[v],!0)}},function(t,n,e){var r=function(t){"use strict";var n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",d=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,e){return t[n]=e}}function u(t,n,e,i){var o=n&&n.prototype instanceof f?n:f,d=Object.create(o.prototype),a=new E(i||[]);return r(d,"_invoke",{value:w(t,e,a)}),d}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function $(){}function p(){}var h={};c(h,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==n&&e.call(y,o)&&(h=y);var g=p.prototype=f.prototype=Object.create(h);function m(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){var i;r(this,"_invoke",{value:function(r,o){function d(){return new n((function(i,d){!function r(i,o,d,a){var c=s(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,d,a)}),(function(t){r("throw",t,d,a)})):n.resolve(l).then((function(t){u.value=t,d(u)}),(function(t){return r("throw",t,d,a)}))}a(c.arg)}(r,o,i,d)}))}return i=i?i.then(d,d):d()}})}function w(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return P()}for(e.method=i,e.arg=o;;){var d=e.delegate;if(d){var a=x(d,e);if(a){if(a===l)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=s(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function x(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,x(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var i=s(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,l;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return $.prototype=p,r(g,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:$,configurable:!0}),$.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===$||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(b.prototype),c(b.prototype,d,(function(){return this})),t.AsyncIterator=b,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var d=new b(u(n,e,r,i),o);return t.isGeneratorFunction(e)?d:d.next().then((function(t){return t.done?t.value:d.next()}))},m(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return d.type="throw",d.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],d=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=e.call(o,"catchLoc"),c=e.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var d=o?o.completion:{};return d.type=t,d.arg=n,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(d)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),l}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;O(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},function(t,n,e){e(297),t.exports=e(119).global},function(t,n,e){var r=e(298);r(r.G,{global:e(85)})},function(t,n,e){var r=e(85),i=e(119),o=e(299),d=e(301),a=e(308),c=function(t,n,e){var u,s,l,f=t&c.F,$=t&c.G,p=t&c.S,h=t&c.P,v=t&c.B,y=t&c.W,g=$?i:i[n]||(i[n]={}),m=g.prototype,b=$?r:p?r[n]:(r[n]||{}).prototype;for(u in $&&(e=n),e)(s=!f&&b&&void 0!==b[u])&&a(g,u)||(l=s?b[u]:e[u],g[u]=$&&"function"!=typeof b[u]?e[u]:v&&s?o(l,r):y&&b[u]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[u]=l,t&c.R&&m&&!m[u]&&d(m,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(300);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(302),i=e(307);t.exports=e(87)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(303),i=e(304),o=e(306),d=Object.defineProperty;n.f=e(87)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return d(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(86);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(87)&&!e(120)((function(){return 7!=Object.defineProperty(e(305)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(86),i=e(85).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(86);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){e(311),e(310)},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var r="\n    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M5 12H19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /><path d='M12 5L19 12L12 19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />\n    </svg>\n",i='\n    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 413.348 413.348"><path d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>\n',o={list:[{n:"Afghanistan",c:"93",i:"AF"},{n:"Albania",c:"355",i:"AL"},{n:"Algeria",c:"213",i:"DZ"},{n:"American Samoa",c:"1684",i:"AS"},{n:"Andorra",c:"376",i:"AD"},{n:"Angola",c:"244",i:"AO"},{n:"Antigua and Barbuda",c:"1268",i:"AG"},{n:"Argentina",c:"54",i:"AR"},{n:"Armenia",c:"374",i:"AM"},{n:"Aruba",c:"297",i:"AW"},{n:"Australia",c:"61",i:"AU"},{n:"Austria",c:"43",i:"AT"},{n:"Azerbaijan",c:"994",i:"AZ"},{n:"Bahamas",c:"1242",i:"BS"},{n:"Bangladesh",c:"880",i:"BD"},{n:"Barbados",c:"1246",i:"BB"},{n:"Belarus",c:"375",i:"BY"},{n:"Belgium",c:"32",i:"BE"},{n:"Belize",c:"501",i:"BZ"},{n:"Benin",c:"229",i:"BJ"},{n:"Bermuda",c:"1441",i:"BM"},{n:"Bhutan",c:"975",i:"BT"},{n:"Bolivia",c:"591",i:"BO"},{n:"Bosnia and Herzegovina",c:"387",i:"BA"},{n:"Botswana",c:"267",i:"BW"},{n:"Brazil",c:"55",i:"BR"},{n:"Brunei Darussalam",c:"673",i:"BN"},{n:"Bulgaria",c:"359",i:"BG"},{n:"Burkina Faso",c:"226",i:"BF"},{n:"Cambodia",c:"855",i:"KH"},{n:"Cameroon",c:"237",i:"CM"},{n:"Canada",c:"1",i:"CA"},{n:"Cape Verde",c:"238",i:"CV"},{n:"Cayman Islands",c:"1345",i:"KY"},{n:"Central African Republic",c:"236",i:"CF"},{n:"Chile",c:"56",i:"CL"},{n:"Colombia",c:"57",i:"CO"},{n:"Comoros",c:"269",i:"KM"},{n:"Congo",c:"242",i:"CG"},{n:"Cook Islands",c:"682",i:"CK"},{n:"Costa Rica",c:"506",i:"CR"},{n:"Croatia",c:"385",i:"HR"},{n:"Cyprus",c:"357",i:"CY"},{n:"Czech Republic",c:"420",i:"CZ"},{n:"Democratic Republic of the Congo",c:"243",i:"CD"},{n:"Denmark",c:"45",i:"DK"},{n:"Djibouti",c:"253",i:"DJ"},{n:"Dominica",c:"1767",i:"DM"},{n:"Dominican Republic",c:"1849",i:"DO"},{n:"Ecuador",c:"593",i:"EC"},{n:"Egypt",c:"20",i:"EG"},{n:"El Salvador",c:"503",i:"SV"},{n:"Equatorial Guinea",c:"240",i:"GQ"},{n:"Swaziland",c:"268",i:"SZ"},{n:"Ethiopia",c:"251",i:"ET"},{n:"Falkland Islands (Malvinas)",c:"500",i:"FK"},{n:"Faroe Islands",c:"298",i:"FO"},{n:"Fiji",c:"679",i:"FJ"},{n:"Finland",c:"358",i:"FI"},{n:"France",c:"33",i:"FR"},{n:"French Guiana",c:"594",i:"GF"},{n:"Gabon",c:"241",i:"GA"},{n:"Gambia",c:"220",i:"GM"},{n:"Georgia",c:"995",i:"GE"},{n:"Germany",c:"49",i:"DE"},{n:"Ghana",c:"233",i:"GH"},{n:"Gibraltar",c:"350",i:"GI"},{n:"Greece",c:"30",i:"GR"},{n:"Greenland",c:"299",i:"GL"},{n:"Grenada",c:"1473",i:"GD"},{n:"Guadeloupe",c:"590",i:"GP"},{n:"Guatemala",c:"502",i:"GT"},{n:"Guernsey",c:"44",i:"GG"},{n:"Guyana",c:"592",i:"GY"},{n:"Haiti",c:"509",i:"HT"},{n:"Honduras",c:"504",i:"HN"},{n:"Hong Kong",c:"852",i:"HK"},{n:"Hungary",c:"36",i:"HU"},{n:"India",c:"91",i:"IN"},{n:"Indonesia",c:"62",i:"ID"},{n:"Iraq",c:"964",i:"IQ"},{n:"Ireland",c:"353",i:"IE"},{n:"Isle of Man",c:"44",i:"IM"},{n:"Israel",c:"972",i:"IL"},{n:"Italy",c:"39",i:"IT"},{n:"Ivory Coast",c:"225",i:"CI"},{n:"Jamaica",c:"1876",i:"JM"},{n:"Japan",c:"81",i:"JP"},{n:"Jersey",c:"44",i:"JE"},{n:"Jordan",c:"962",i:"JO"},{n:"Kazakhstan",c:"77",i:"KZ"},{n:"Kenya",c:"254",i:"KE"},{n:"Korea, Republic of South Korea",c:"82",i:"KR"},{n:"Kuwait",c:"965",i:"KW"},{n:"Kyrgyzstan",c:"996",i:"KG"},{n:"Laos",c:"856",i:"LA"},{n:"Latvia",c:"371",i:"LV"},{n:"Lebanon",c:"961",i:"LB"},{n:"Lesotho",c:"266",i:"LS"},{n:"Libya",c:"218",i:"LY"},{n:"Liechtenstein",c:"423",i:"LI"},{n:"Lithuania",c:"370",i:"LT"},{n:"Luxembourg",c:"352",i:"LU"},{n:"Macau",c:"853",i:"MO"},{n:"Madagascar",c:"261",i:"MG"},{n:"Malawi",c:"265",i:"MW"},{n:"Malaysia",c:"60",i:"MY"},{n:"Malta",c:"356",i:"MT"},{n:"Mauritius",c:"230",i:"MU"},{n:"Mayotte",c:"262",i:"YT"},{n:"Mexico",c:"52",i:"MX"},{n:"Micronesia, Federated States of Micronesia",c:"691",i:"FM"},{n:"Moldova",c:"373",i:"MD"},{n:"Mongolia",c:"976",i:"MN"},{n:"Montenegro",c:"382",i:"ME"},{n:"Montserrat",c:"1664",i:"MS"},{n:"Morocco",c:"212",i:"MA"},{n:"Mozambique",c:"258",i:"MZ"},{n:"Myanmar",c:"95",i:"MM"},{n:"Namibia",c:"264",i:"NA"},{n:"Nepal",c:"977",i:"NP"},{n:"Netherlands",c:"31",i:"NL"},{n:"New Caledonia",c:"687",i:"NC"},{n:"New Zealand",c:"64",i:"NZ"},{n:"Nicaragua",c:"505",i:"NI"},{n:"Niger",c:"227",i:"NE"},{n:"Nigeria",c:"234",i:"NG"},{n:"Norfolk Island",c:"672",i:"NF"},{n:"Macedonia",c:"389",i:"MK"},{n:"Norway",c:"47",i:"NO"},{n:"Oman",c:"968",i:"OM"},{n:"Pakistan",c:"92",i:"PK"},{n:"Palestine",c:"970",i:"PS"},{n:"Panama",c:"507",i:"PA"},{n:"Papua New Guinea",c:"675",i:"PG"},{n:"Paraguay",c:"595",i:"PY"},{n:"Peru",c:"51",i:"PE"},{n:"Philippines",c:"63",i:"PH"},{n:"Poland",c:"48",i:"PL"},{n:"Portugal",c:"351",i:"PT"},{n:"Puerto Rico",c:"1939",i:"PR"},{n:"Qatar",c:"974",i:"QA"},{n:"Reunion",c:"262",i:"RE"},{n:"Romania",c:"40",i:"RO"},{n:"Russia",c:"7",i:"RU"},{n:"Rwanda",c:"250",i:"RW"},{n:"Saint Helena, Ascension and Tristan Da Cunha",c:"290",i:"SH"},{n:"Saint Kitts and Nevis",c:"1869",i:"KN"},{n:"Saint Lucia",c:"1758",i:"LC"},{n:"Saint Martin",c:"590",i:"MF"},{n:"Saint Pierre and Miquelon",c:"508",i:"PM"},{n:"Saint Vincent and the Grenadines",c:"1784",i:"VC"},{n:"Samoa",c:"685",i:"WS"},{n:"Sao Tome and Principe",c:"239",i:"ST"},{n:"Saudi Arabia",c:"966",i:"SA"},{n:"Senegal",c:"221",i:"SN"},{n:"Serbia",c:"381",i:"RS"},{n:"Seychelles",c:"248",i:"SC"},{n:"Sierra Leone",c:"232",i:"SL"},{n:"Singapore",c:"65",i:"SG"},{n:"Slovakia",c:"421",i:"SK"},{n:"Slovenia",c:"386",i:"SI"},{n:"South Africa",c:"27",i:"ZA"},{n:"Spain",c:"34",i:"ES"},{n:"Sri Lanka",c:"94",i:"LK"},{n:"Suriname",c:"597",i:"SR"},{n:"Sweden",c:"46",i:"SE"},{n:"Switzerland",c:"41",i:"CH"},{n:"Taiwan",c:"886",i:"TW"},{n:"Tanzania",c:"255",i:"TZ"},{n:"Thailand",c:"66",i:"TH"},{n:"Timor-Leste",c:"670",i:"TL"},{n:"Togo",c:"228",i:"TG"},{n:"Tonga",c:"676",i:"TO"},{n:"Trinidad and Tobago",c:"1868",i:"TT"},{n:"Turkey",c:"90",i:"TR"},{n:"Turkmenistan",c:"993",i:"TM"},{n:"Turks and Caicos Islands",c:"1649",i:"TC"},{n:"Uganda",c:"256",i:"UG"},{n:"Ukraine",c:"380",i:"UA"},{n:"United Arab Emirates",c:"971",i:"AE"},{n:"United Kingdom",c:"44",i:"GB"},{n:"United States",c:"1",i:"US"},{n:"Uruguay",c:"598",i:"UY"},{n:"Uzbekistan",c:"998",i:"UZ"},{n:"Venezuela",c:"58",i:"VE"},{n:"Vietnam",c:"84",i:"VN"},{n:"Virgin Islands, British",c:"1284",i:"VG"},{n:"Virgin Islands, U.S.",c:"1340",i:"VI"},{n:"Yemen",c:"967",i:"YE"},{n:"Zambia",c:"260",i:"ZM"},{n:"Zimbabwe",c:"263",i:"ZW"}]},d={list:[{n:"India",c:"91",i:"IN"}]},a=simplyOtp.language,c=function(t){var n='<div class="country-selector-main">\n    <div class="selected-country">\n    <div class="country-flag-box">\n    <span class="country-flag {{default_country_selected}}"></span>\n    </div>\n    </div>\n    '.concat('\n    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1 1L7 7L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n','\n    </div>\n    <ul class="country-selector-list" aria-label="List of countries">{{countryList}}</ul>'),e="",r=o;if(!t){simplyOtp.settings.onlyIndia&&(r=d);var i=simplyOtp.language.enableCountries.split(",");r.list=r.list.filter((function(t){return i.includes(t.i)}))}return r.list.forEach((function(t){var n='<li class="" data-dial-code="{{country_code}}" data-country-code="{{iso_code}}">\n        <div class="country-flag-box">\n        <div class="country-flag {{iso_code}}"></div>\n        </div>\n        <span class="country-name">{{country_name}}</span>\n        <span class="dial-code">+{{country_code}}</span>\n        </li>';n=(n=(n=n.replaceAll("{{country_code}}",t.c)).replaceAll("{{iso_code}}",t.i.toLowerCase())).replaceAll("{{country_name}}",t.n),e+=n})),n=(n=n.replaceAll("{{default_country_selected}}","in")).replaceAll("{{countryList}}",e)},u=function(){var t=c(!1),n='\n    <div class="input-box-content mobile-no-inner" data-current="mobile">\n    {{country_html}}\n    <input class="olInput user-name-input" placeholder="'.concat(a.phonePlaceholder,'" maxlength="10" name="phone" inputmode="decimal" type="number" />\n    </div>');return n=n.replaceAll("{{country_html}}",t)},s=function(){var t=u(),n='\n    <div class="input-box-content email-no-inner" data-current="email">\n    <input class="olInput user-name-input" placeholder="'.concat(a.emailPlaceholder,'" maxlength="" name="email" type="email" />\n    </div>'),e=function(){var t=c(!0),n='\n    <div class="input-box-content whatsapp-no-inner" data-current="whatsapp">\n    {{country_html}}\n    <input class="olInput user-name-input" placeholder="'.concat(a.whatsappPlaceholder,'" maxlength="10" name="whatsapp" inputmode="decimal" type="number" />\n    </div>');return n=n.replaceAll("{{country_html}}",t)}(),r='\n    <div class="login-inputBox">\n    {{phone_html}}\n    {{email_html}}\n    {{whatsapp_html}}\n    </div>';return r=(r=(r=r.replaceAll("{{phone_html}}",t)).replaceAll("{{email_html}}",n)).replaceAll("{{whatsapp_html}}",e)},l=simplyOtp.language,f=simplyOtp.language,$=function(){var t,n='<div class="update-user-box step-box-wrapper hideBox">\n            <h3 class="login-header">'.concat(f.accountTitle,'</h3>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input id="first-name" class="olInput update-user-first-name-input" maxlength="" name="name" type="text">\n                    <label for="first-name" class="input__label">').concat(f.fnameText,'</label>\n                </div>\n            </div>\n            <span class="error-message error-fname-message hideBox">').concat(f.fnameTextError,'</span>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input id="last-name" class="olInput update-user-last-name-input" maxlength="" name="name" type="text">\n                    <label for="last-name" class="input__label">').concat(f.lnameText,'</label>\n                </div>\n            </div>\n            <span class="error-message error-lname-message hideBox">').concat(f.lnameTextError,'</span>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input\n                    id="email-id"\n                    class="olInput update-user-email-input"\n                    maxlength=""\n                    name="email"\n                    type="email"\n                    required\n                    >\n                    <label for="email-id" class="input__label">').concat(f.emText,'</label>\n                </div>\n            </div>\n            <span class="error-message error-email-message hideBox">').concat(f.emTextError,'</span>\n            <div class="login-inputBox">\n                {{phone_html}}\n            </div>\n            <span class="error-message-phone hideBox">').concat(f.phTextError,'</span>\n            <div class="customFieldsBox">\n                {{custom_fields}}\n            </div>\n            <input class="otp-id" name="otp_id" type="hidden">\n            <div class="update-checkbox-wrapper">\n                <input class="input-checkbox marketing-option" type="checkbox" value="1" checked="checked" name="" id="marketing" />\n                <label class="checkbox-main-label" for="marketing">').concat(f.marketingText,'</p>\n            </div>\n            <div class="button-wrapper">\n                <button class="update-btn otp-btn">\n                    <span>').concat(f.updateBtnText,"</span>\n                    ").concat(r,"\n                </button>\n            </div>\n        </div>");return n=(n=n.replaceAll("{{phone_html}}",u())).replaceAll("{{custom_fields}}",(t="",simplyOtp.custom_fields.forEach((function(n){var e="";n.required&&(e='required="required"');var r="";n.pattern&&(r='pattern ="'.concat(n.pattern,'"'));var i="";n.patternMessage&&(i='title ="'.concat(n.patternMessage,'"'));var o="";n.length&&(o='maxlength="'.concat(n.length,'"'));var d="Please enter valid ".concat(n.label,".");if(n.patternMessage&&(d=n.patternMessage),"dropdown"==n.type){var a="";a='\n            <div class="custom_field">\n                <label>'.concat(n.label,'</label>\n                <div class="custom_select">\n                    <select ').concat(e," name=").concat(n.label,'>\n                        <option value="">').concat(n.placeholder,'</option>\n                        {{options}}\n                    </select>\n                    <svg aria-hidden="true" focusable="false" viewBox="0 0 10 6">\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">\n                        </path>\n                    </svg>\n                </div>\n                <span class="errormessage error-message-').concat(n.label,' hideBox">').concat(d,"</span>\n            </div>\n            ");var c=n.value.split(","),u="";c.forEach((function(t){u+="\n                    <option value=".concat(t,">\n                        ").concat(t,"\n                    </option>\n                ")})),t+=a.replaceAll("{{options}}",u)}else if("date"==n.type){var s;s='\n            <div class="custom_field">\n                <label>'.concat(n.label,'</label>\n                <div class="custom_input input-box-content">\n                    <input type="date" ').concat(r," ").concat(i," ").concat(o,' class="olInput" ').concat(e,' name="').concat(n.label,'"/>\n                </div>\n                <span class="errormessage error-message-').concat(n.label,' hideBox">').concat(d,"</span>\n            </div>\n            "),t+=s}else{var l;l='\n            <div class="custom_field">\n                <div class="custom_input input-box-content">\n                    <input type="text" '.concat(r," ").concat(i," ").concat(o,' class="olInput" ').concat(e,' name="').concat(n.label,'"/>\n                    <label class="input__label">').concat(n.placeholder,'</label>\n                </div>\n                <span class="errormessage error-message-').concat(n.label,' hideBox">').concat(d,"</span>\n            </div>\n            "),t+=l}})),t))};function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function v(t,n,e){return n&&h(t.prototype,n),e&&h(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(t,n,e){return(n=g(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function g(t){var n=function(t,n){if("object"!==p(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===p(n)?n:String(n)}var m=v((function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,"getLoginComponent",(function(){return function(){var t="<div class='login-box step-box-wrapper'>\n    <h3 class='login-header'>".concat(a.loginTitle,"</h3>\n    <p class='login-description'>").concat(a.loginSubTitle,"</p>\n    {{otp_type_html}}\n    <button class='send-btn otp-btn'>\n    <span>").concat(a.requestOTP,"</span>\n    ").concat(r,"\n    </button>\n    \n    <div style=\"display: grid;justify-content: space-around;margin: 8px 0 -12px 0;\">\n    <div id=\"otp-recaptcha-container-app\"></div>\n    </div>\n    \n    <div class='other-options-box'>\n    <p class='other-options-p'><span>").concat(a.otherOptionText,"</span></p>\n    <div class='other-options-wrap'>\n    \n    <div class='other-option-inner email-no-inner' data-current='email'>\n    ").concat("\n    <svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M2.50016 1.1665H13.8335C14.6127 1.1665 15.2502 1.804 15.2502 2.58317V11.0832C15.2502 11.8623 14.6127 12.4998 13.8335 12.4998H2.50016C1.721 12.4998 1.0835 11.8623 1.0835 11.0832V2.58317C1.0835 1.804 1.721 1.1665 2.50016 1.1665Z' stroke='#4A4A4A' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' /><path d='M15.2502 2.58301L8.16683 7.54134L1.0835 2.58301' stroke='#4A4A4A' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />\n    </svg>\n","\n    <p class='text-wrap'>").concat(a.emText,"</p>\n    </div>\n    \n    <div class='other-option-inner whatsapp-no-inner' data-current='whatsapp'>\n    ").concat("\n    <svg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M5.12292 4.39376C5.26072 4.39745 5.41349 4.4049 5.55885 4.72755C5.65523 4.94233 5.8176 5.33775 5.94986 5.65985C6.05278 5.9105 6.13748 6.11675 6.15867 6.15897C6.2071 6.25537 6.23691 6.36661 6.17358 6.49638C6.16611 6.51169 6.15906 6.52633 6.15226 6.54042C6.10146 6.64586 6.0653 6.7209 5.97986 6.81902C5.94473 6.85935 5.90813 6.90357 5.87167 6.94763C5.80755 7.02512 5.74383 7.10211 5.68922 7.1565C5.59237 7.25284 5.49173 7.35676 5.6035 7.54957C5.71533 7.74238 6.10653 8.37652 6.68403 8.88828C7.30489 9.44102 7.84477 9.67395 8.11767 9.7917C8.17066 9.81456 8.21358 9.83308 8.24507 9.84876C8.43885 9.94516 8.55433 9.93032 8.66609 9.80055C8.77792 9.67072 9.15044 9.23684 9.28089 9.04403C9.40756 8.85122 9.53794 8.88089 9.71681 8.94762C9.89562 9.01435 10.8494 9.4816 11.0431 9.57801C11.0814 9.59707 11.1172 9.61425 11.1504 9.63017C11.2852 9.69481 11.3769 9.73875 11.4157 9.80425C11.4641 9.88581 11.4641 10.2715 11.304 10.7239C11.1401 11.1763 10.3502 11.6102 9.99248 11.6436C9.95861 11.6468 9.92491 11.6508 9.89023 11.655C9.56245 11.6947 9.14634 11.745 7.66387 11.1615C5.83715 10.4431 4.63131 8.66086 4.38752 8.30053C4.36827 8.27208 4.35502 8.25249 4.34793 8.24299L4.34381 8.23747C4.23289 8.08906 3.55433 7.18109 3.55433 6.24429C3.55433 5.348 3.99585 4.88137 4.19724 4.66853C4.21 4.65504 4.2218 4.64257 4.23246 4.63108C4.41127 4.43827 4.61995 4.39007 4.75033 4.39007C4.88078 4.39007 5.01116 4.39007 5.12292 4.39376Z' fill='#4A4A4A' /><path fill-rule='evenodd' clip-rule='evenodd' d='M0.0753723 15.0598C0.0137505 15.2835 0.217474 15.4899 0.441954 15.4313L3.91205 14.5249C5.00742 15.1182 6.24066 15.4334 7.49629 15.4334H7.5C11.6319 15.4334 15 12.0848 15 7.9686C15 5.97352 14.2212 4.09708 12.8055 2.68788C11.3897 1.27875 9.50816 0.5 7.49994 0.5C3.36814 0.5 4.77741e-07 3.84862 4.77741e-07 7.9649C-0.000469058 9.27439 0.345173 10.561 1.00223 11.6954L0.0753723 15.0598ZM2.0914 11.9955C2.17185 11.7035 2.13166 11.3914 1.97985 11.1292C1.42239 10.1667 1.12935 9.07517 1.12975 7.9649C1.12975 4.47791 3.98671 1.62975 7.49994 1.62975C9.20955 1.62975 10.8045 2.29027 12.0085 3.48861C13.2111 4.68562 13.8702 6.27386 13.8702 7.9686C13.8702 11.4555 11.0133 14.3037 7.5 14.3037H7.49629C6.42941 14.3037 5.38102 14.0358 4.45013 13.5315C4.19818 13.3951 3.90378 13.3594 3.62654 13.4318L1.54599 13.9753L2.0914 11.9955Z' fill='#4A4A4A' />\n    </svg>\n","\n    <p class='text-wrap'>").concat(a.waText,"</p>\n    </div>\n    <div class='other-option-inner mobile-no-inner' data-current='mobile'>\n    ").concat("\n    <svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 202.592 202.592' style='enable-background:new 0 0 202.592 202.592;' xml:space='preserve'>\n        <g>\n            <g>\n                <path fill='#010002' d='M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761\n                                    c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874\n                                    c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769\n                                    c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816\n                                    c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055\n                                    c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747\n                                    C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507\n                                    c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235\n                                    C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497\n                                    c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282\n                                    c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067\n                                    c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279\n                                    C193.5,169.446,193.31,173.537,190.683,176.164z'/>\n            </g>\n        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n    </svg>\n","\n    <p class='text-wrap'>").concat(a.phText,"</p>\n    </div>\n    </div>\n    </div>\n    </div>"),n=s();return t=t.replaceAll("{{otp_type_html}}",n)}()})),y(this,"getOtpComponent",(function(){return'<div class="verify-box step-box-wrapper hideBox">\n            <h3 class="login-header">'.concat(l.otpTitle,'</h3>\n            <p class="verify-box-details login-description">').concat(l.otpSubTitle," <span>").concat(l.phText,'</span></p>\n            <div class="mn-container">\n                <p class="user-details">+91 999999999</p>\n                ').concat('\n    <svg\n        class="edit-phone bi bi-pencil-fill"\n        fill="currentColor"\n        height="16"\n        viewbox="0 0 16 16"\n        width="16"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>\n    </svg>\n','\n            </div>\n            <input class="verify-otp-id" name="olOtpId" type="hidden">\n            <input class="phoneNo" name="phoneNo" type="hidden">\n            <div class="verify-content">\n                <input type="tel" autocomplete="one-time-code" class="otp-input-main otp-input otp6" maxlength="6">\n            </div>\n            <button class="verify-btn otp-btn">\n                <span>').concat(l.verifyOTPText,"</span>\n                ").concat(r,'\n            </button>\n            <div class="resend-otp" id="resend-otp">\n                <div id="otp-recaptcha-container-app-resend"></div>\n                <p>').concat(l.didNotReceiveOTPText,' </p>\n                <a class="resend-btn disabled">').concat(l.resendOTPText,'</a>\n                <p class="count-down-otp"></p>\n            </div>\n        </div>')})),y(this,"getUpdateComponent",(function(){return $()})),y(this,"getCustomFieldComponent",(function(){})),y(this,"createLoginBox",(function(){var t=document.getElementsByClassName("sotp-widget"),n='\n        <div class="olWrapper" data-selected-country="'.concat(simplyOtp.settings.selectedCountry,'" style="--otp-login-btn-color:').concat(simplyOtp.settings.primaryColor,'">\n            <div class="ol">\n                {{popup_close}}\n                {{image_content}}\n                {{login_content}}\n                {{otp_content}}\n                {{update_content}}\n            </div>\n            <div class="small-otp-loader">\n                <div class="loader-innerDiv"></div>\n            </div>\n        </div>'),r="";simplyOtp.settings.image&&(r='\n                <div class="login-img">\n                    <img src="'.concat(simplyOtp.settings.image,'" alt="login">\n                </div>\n            '));var o="";simplyOtp.settings.popup_enabled&&(o='\n                <div class="simply-close-btn">\n                    '.concat(i,"\n                </div>\n            ")),n=(n=(n=(n=(n=n.replaceAll("{{popup_close}}",o)).replaceAll("{{image_content}}",r)).replaceAll("{{login_content}}",e.getLoginComponent())).replaceAll("{{otp_content}}",e.getOtpComponent())).replaceAll("{{update_content}}",e.getUpdateComponent()),0==window.simplyOtp.designMode&&(n=window.simplyOtp.wrapperHtml);for(var d=0;d<t.length;d++){var a=t[d];a.classList.remove("otp-loader"),a.innerHTML=n}if(0!=window.simplyOtp.designMode){simplyOtp.language.phoneEnable?(document.querySelectorAll(".login-box").forEach((function(t){t.setAttribute("data-active","mobile")})),document.querySelectorAll(".login-box .login-inputBox .mobile-no-inner").forEach((function(t){t.classList.add("active")}))):simplyOtp.language.emailEnable?(document.querySelectorAll(".login-box").forEach((function(t){t.setAttribute("data-active","email")})),document.querySelectorAll(".login-box .login-inputBox .email-no-inner").forEach((function(t){t.classList.add("active")}))):simplyOtp.language.whatsappEnable&&(document.querySelectorAll(".login-box").forEach((function(t){t.setAttribute("data-active","whatsapp")})),document.querySelectorAll(".login-box .login-inputBox .whatsapp-no-inner").forEach((function(t){t.classList.add("active")})));var c=3;simplyOtp.language.phoneEnable||(c--,document.querySelectorAll(".login-box .mobile-no-inner").forEach((function(t){t.classList.add("hideBox"),t.classList.remove("active")}))),simplyOtp.language.emailEnable||(c--,document.querySelectorAll(".login-box .email-no-inner").forEach((function(t){t.classList.add("hideBox"),t.classList.remove("active")}))),simplyOtp.language.whatsappEnable||(c--,document.querySelectorAll(".login-box .whatsapp-no-inner").forEach((function(t){t.classList.add("hideBox"),t.classList.remove("active")}))),1==c&&document.querySelectorAll(".other-options-p").forEach((function(t){t.classList.add("hideBox")})),simplyOtp.otp_widgets.btn_bg_color&&document.querySelectorAll(".otp-btn").forEach((function(t){t.style="--otp-btn-text:".concat(simplyOtp.language.btn_text_color),t.style.color=simplyOtp.language.btn_text_color,t.style.background=simplyOtp.language.btn_bg_color}))}})),this.parent=n,window.simplyOtp=window.simplyOtp||{},this.createLoginBox()})),b={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[46])\\d{4}",[5,6],0,0,0,0,0,0,0,[0,["4\\d{4}",[5]]]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],0,0,0,0,0,0,[0,["690\\d{6}|[356]\\d{5}",[6,9]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0",0,0,0,0,0,[0,["5[024-68]\\d{7}",[9]]]],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0",0,0,0,0,0,[0,["7\\d{8}"]]],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268",[0,["268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}"]]],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264",[0,["264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}"]]],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0",0,0,0,0,0,[0,["6(?:[78][2-9]|9\\d)\\d{6}",[9]]]],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:33|4[1349]|55|77|88|9[13-9])\\d{6}"]]],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]],0,0,0,0,0,0,[0,["9[1-59]\\d{7}"]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1",0,0,[0,["93(?:7(?:1[15]|81)[46]|8(?:(?:21|4[16]|69|9[12])[46]|88[013-9]))\\d{5}|9(?:2(?:657|9(?:54|66))|3(?:7(?:55|77)|865))[2-8]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:284|3(?:02|23)|920)|3(?:4(?:46|8[27]|92)|541|878))[2-7]\\d{5}|9(?:2(?:(?:26|62)2|320|477|9(?:42|83))|3(?:329|4(?:62|76|89)|564))[2-6]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[235][4-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|[17][2-6]|3[4-6]|[58][3-6]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}"]]],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684",[0,["684(?:2(?:48|5[2468]|7[26])|7(?:3[13]|70|82))\\d{4}"]]],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0",0,0,0,0,0,[0,["6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",[7,8,9,10,11,12,13]]]],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[0,["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",[9]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]],0,0,0,0,0,0,[0,["(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}"]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",[0,["4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}",[6,7,8,9,10]]],"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0",0,0,0,0,0,[0,["36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}"]]],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0",0,0,0,0,0,[0,["6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}"]]],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246",[0,["246(?:(?:2(?:[3568]\\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\\d)|69[5-7]|8(?:[2-5]\\d|83))\\d|52(?:1[147]|20))\\d{3}"]]],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|22"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0",0,0,0,0,0,[0,["(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}",[10]]]],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0",0,0,0,0,0,[0,["4[5-9]\\d{7}",[9]]]],BF:["226","00","[025-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]],0,0,0,0,0,0,[0,["(?:0[1-35-7]|5[0-8]|[67]\\d)\\d{6}"]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0",0,0,0,0,0,[0,["(?:43[07-9]|99[69]\\d)\\d{5}|(?:8[7-9]|98)\\d{7}",[8,9]]]],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[02-4679]"]]],0,0,0,0,0,0,[0,["(?:3(?:[0-79]\\d|8[0-57-9])\\d|6(?:3(?:00|33|6[16])|441|6(?:3[03-9]|[69]\\d|7[0-689])))\\d{4}"]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]],0,0,0,0,0,0,[0,["(?:29|[67][125-9])\\d{6}"]]],BJ:["229","00","[24-689]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-689]"]]],0,0,0,0,0,0,[0,["(?:4[0-6]|[56]\\d|9[013-9])\\d{6}"]]],BL:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[0,["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441",[0,["441(?:[2378]\\d|5[0-39]|92)\\d{5}"]]],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]],0,0,0,0,0,0,[0,["(?:22[89]|[78]\\d\\d)\\d{4}"]]],BO:["591","00(?:1\\d)?","(?:[2-467]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]"]],["(\\d{8})","$1",["[67]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?",0,0,0,[0,["[67]\\d{7}",[8]]]],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]",[0,["(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]]],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",0,0,[0,["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}",[10,11]]]],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242",[0,["242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}"]]],BT:["975","00","[17]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]],0,0,0,0,0,0,[0,["(?:1[67]|77)\\d{6}",[8]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-9]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]],0,0,0,0,0,0,[0,["(?:321|7[1-8]\\d)\\d{5}",[8]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,[0,["(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",[9]]],"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]],0,0,0,0,0,0,[0,["6[0-35-7]\\d{5}",[7]]]],CA:["1","011","(?:[2-8]\\d|90)\\d{8}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[0,["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[0,["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",[9]]],"0011"],CD:["243","00","[189]\\d{8}|[1-68]\\d{6}",[7,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,[0,["88\\d{5}|(?:8[0-59]|9[017-9])\\d{7}"]]],CF:["236","00","(?:[27]\\d{3}|8776)\\d{4}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]],0,0,0,0,0,0,[0,["7[024-7]\\d{6}"]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]],0,0,0,0,0,0,[0,["026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}"]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0",0,0,0,0,0,[0,["7[35-9]\\d{7}"]]],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]],0,0,0,0,0,0,[0,["0[157]\\d{8}"]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]],0,0,0,0,0,0,[0,["[578]\\d{4}"]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]],0,0,0,0,0,0,[0,["2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[03467]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",[9]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]],0,0,0,0,0,0,[0,["(?:24[23]|6[25-9]\\d)\\d{6}",[9]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","10(?:10|9[56])|2[0-57-9](?:100|9[56])"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,[0,["1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|[59][0-35-9]|6[25-7]|7[0-35-8])\\d{8}",[11]]],"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}",[10,11],[["(\\d{3})(\\d{7})","$1 $2",["6"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|91"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?",0,0,0,[0,["333301[0-5]\\d{3}|3333(?:00|2[5-9]|[3-9]\\d)\\d{4}|(?:3(?:24[1-9]|3(?:00|3[0-24-9]))|9101)\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}",[10]]]],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))",0,0,0,[0,["(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}",[8]]]],CU:["53","119","[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["[56]"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0",0,0,0,0,0,[0,["(?:5\\d|63)\\d{6}",[8]]]],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]],0,0,0,0,0,0,[0,["(?:36|5[1-389]|9\\d)\\d{5}"]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]",[0,["953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}"]]],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[0,["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",[9]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]],0,0,0,0,0,0,[0,["9(?:10|[4-79]\\d)\\d{5}"]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,[0,["(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}"]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[03568]","15(?:[0568]|31)"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0",0,0,0,0,0,[0,["15(?:[0-25-9]\\d\\d|310)\\d{6}|1(?:6[023]|7\\d)\\d{7,8}",[10,11]]]],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]],0,0,0,0,0,0,[0,["77\\d{6}"]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]],0,0,0,0,0,0,[0,["(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}"]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767",[0,["767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}"]]],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9",[0,["8[024]9[2-9]\\d{6}"]]],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:5(?:4[0-29]|5\\d|6[0-2])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}",[9]]]],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0",0,0,0,0,0,[0,["964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}",[9]]]],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],0,0,0,0,0,0,[0,["(?:5\\d{5}|8(?:1(?:0(?:0(?:00|[178]\\d)|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:2[0-59]|[3-79]\\d)\\d)\\d)|2(?:0(?:0(?:00|4\\d)|(?:19|[2-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9])\\d|7(?:[0-79]\\d|8[13-9])|8(?:[2-6]\\d|7[01]))\\d)|[349]\\d{4}))\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",[7,8]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{8})","$1 $2",["1"],"0$1"]],"0",0,0,0,0,0,[0,["1[0-25]\\d{8}",[10]]]],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,"528[89]",[0,["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}"]]],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:17[1-3]|7\\d\\d)\\d{4}"]]],ES:["34","00","[5-9]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]],0,0,0,0,0,0,[0,["(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}"]]],ET:["251","00","(?:11|[2-579]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-579]"],"0$1"]],"0",0,0,0,0,0,[0,["700[1-9]\\d{5}|(?:7(?:0[1-9]|1[0-8]|22|77|86|99)|9\\d\\d)\\d{6}"]]],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d{5})","$1",["20[2-59]"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[68])0|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"],["(\\d)(\\d{4,9})","$1 $2",["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",[0,["4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}",[6,7,8,9,10]]],"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,[0,["(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",[7]]],"00"],FK:["500","00","[2-7]\\d{4}",[5],0,0,0,0,0,0,0,[0,["[56]\\d{4}"]]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]],0,0,0,0,0,0,[0,["31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}"]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{6})","$1",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))",0,0,0,[0,["(?:[27][1-9]|5\\d|9[16])\\d{4}"]]],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7[3-9]\\d)\\d{6}"]]],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1",0,0,[0,["(?:(?:0[2-7]|7[467])\\d|6(?:0[0-4]|10|[256]\\d))\\d{5}|[2-7]\\d{6}"]]],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,0,0,0,0,[0,["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473",[0,["473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}"]]],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0",0,0,0,0,0,[0,["5(?:(?:(?:0555|1(?:[17]77|555))[5-9]|757(?:7[7-9]|8[01]))\\d|22252[0-4])\\d\\d|(?:5(?:00(?:0\\d|11|22|33|44|5[05]|77|88|9[09])|1(?:1(?:00|[124]\\d|3[01])|4\\d\\d)|(?:44|68)\\d\\d|5(?:[0157-9]\\d\\d|200)|7(?:[0147-9]\\d\\d|5(?:00|[57]5))|8(?:0(?:[018]\\d|2[0-4])|58[89]|8(?:55|88))|9(?:090|[1-35-9]\\d\\d))|790\\d\\d)\\d{4}|5(?:0(?:0[17]0|505)|1(?:0[01]0|1(?:07|33|51))|2(?:0[02]0|2[25]2)|3(?:0[03]0|3[35]3)|(?:40[04]|900)0|5222)[0-4]\\d{3}"]]],GF:["594","00","[56]94\\d{6}|(?:80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0",0,0,0,0,0,[0,["694(?:[0-249]\\d|3[0-8])\\d{4}"]]],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0","1481$1",0,0,[0,["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]]]],GH:["233","00","(?:[235]\\d{3}|800)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:2(?:[0346-9]\\d|5[67])|5(?:[03-7]\\d|9[1-9]))\\d{6}",[9]]]],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]],0,0,0,0,0,0,[0,["5251[0-4]\\d{3}|(?:5(?:[146-8]\\d\\d|250)|60(?:1[01]|6\\d))\\d{4}"]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]],0,0,0,0,0,0,[0,["[245]\\d{5}"]]],GM:["220","00","[2-9]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],0,0,0,0,0,0,[0,["(?:[23679]\\d|5[0-489])\\d{5}"]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]],0,0,0,0,0,0,[0,["6[0-356]\\d{7}",[9]]]],GP:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[0,["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]],0,0,0,0,0,0,[0,["(?:222|55\\d)\\d{6}"]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]],0,0,0,0,0,0,[0,["68[57-9]\\d{7}|(?:69|94)\\d{8}",[10]]]],GT:["502","00","80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-8]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,["(?:[3-5]\\d\\d|80[0-4])\\d{5}",[8]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","671$1",0,"671",[0,["671(?:2\\d\\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-46-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}"]]],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]],0,0,0,0,0,0,[0,["9(?:5\\d|6[569]|77)\\d{6}",[9]]]],GY:["592","001","(?:[2-8]\\d{3}|9008)\\d{3}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],0,0,0,0,0,0,[0,["(?:510|6\\d\\d|7(?:0\\d|1[0-8]|25|49))\\d{4}"]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,[0,["(?:4(?:44[5-9]|6(?:1[0-7]|4[0-57-9]|6[0-4]))|5(?:73[0-6]|95[0-8])|6(?:26[013-8]|66[0-3])|70(?:7[1-6]|8[0-4])|848[0-25-9]|9(?:29[013-9]|59[0-4]|899))\\d{4}|(?:4(?:4[0156]|6[02357-9])|5(?:[1-59][0-46-9]|6[0-4689]|7[0-246-9])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|709|84[09]|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}",[8]]],"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]],0,0,0,0,0,0,[0,["[37-9]\\d{7}",[8]]]],HR:["385","00","(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",[6,7,8,9],[["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0",0,0,0,0,0,[0,["9(?:(?:0[1-9]|[12589]\\d)\\d\\d|7(?:[0679]\\d\\d|5(?:[01]\\d|44|77|9[5-7])))\\d{4}|98\\d{6}",[8,9]]]],HT:["509","00","(?:[2-489]\\d|55)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]],0,0,0,0,0,0,[0,["(?:[34]\\d|55)\\d{6}"]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06",0,0,0,0,0,[0,["(?:[257]0|3[01])\\d{7}",[9]]]],ID:["62","00[89]","(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0",0,0,0,0,0,[0,["8[1-35-9]\\d{7,10}",[9,10,11,12]]]],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[0,["8(?:22|[35-9]\\d)\\d{6}",[9]]]],IL:["972","0(?:0|1[2-9])","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0",0,0,0,0,0,[0,["55410\\d{4}|5(?:(?:[02][02-9]|[149][2-9]|[36]\\d|8[3-7])\\d|5(?:01|2\\d|3[0-3]|4[34]|5[0-25689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}",[9]]]],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0","1624$1",0,"74576|(?:16|7[56])24",[0,["76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}"]]],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0",0,0,0,0,0,[0,["(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}",[10]]]],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]],0,0,0,0,0,0,[0,["38\\d{5}"]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,[0,["7[3-9]\\d{8}",[10]]]],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0",0,0,0,0,0,[0,["9(?:(?:0(?:[0-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d)\\d|9(?:[0-46]\\d\\d|5[15]0|8(?:[12]\\d|88)|9(?:0[0-3]|[19]\\d|21|69|77|8[7-9])))\\d{5}",[10]]]],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[0,["(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[238]))\\d{4}"]],"00"],IT:["39","00","0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],0,0,0,0,0,0,[0,["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0","1534$1",0,0,[0,["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876",[0,["(?:658295|876(?:2(?:0[1-9]|[13-9]\\d|2[013-9])|[348]\\d\\d|5(?:0[1-9]|[1-9]\\d)|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}"]]],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,[0,["7(?:[78][0-25-9]|9\\d)\\d{6}",[9]]]],JP:["81","010","00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[257-9]"],"0$1"]],"0",0,"(000[259]\\d{6})$|(?:(?:003768)0?)|0","$1",0,0,[0,["[7-9]0[1-9]\\d{7}",[10]]]],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:1(?:0[0-6]|1[0-5]|2[014]|30)|7\\d\\d)\\d{6}",[9]]]],KG:["996","00","8\\d{9}|[235-9]\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[0,["312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|600|7(?:[07]\\d|55)|88[08]|9(?:12|9[05-9]))\\d{6}",[9]]]],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0",0,0,0,0,0,[0,["(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}",[8,9]]]],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0",0,0,0,0,0,[0,["(?:6200[01]|7(?:310[1-9]|5(?:02[03-9]|12[0-47-9]|22[0-7]|[34](?:0[1-9]|8[02-9])|50[1-9])))\\d{3}|(?:63\\d\\d|7(?:(?:[0146-9]\\d|2[0-689])\\d|3(?:[02-9]\\d|1[1-9])|5(?:[0-2][013-9]|[34][1-79]|5[1-9]|[6-9]\\d)))\\d{4}",[8]]]],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]],0,0,0,0,0,0,[0,["[34]\\d{6}"]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869",[0,["869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}"]]],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0",0,0,0,0,0,[0,["19[1-3]\\d{7}",[10]]]],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?",0,0,0,[0,["1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[0-46-9]|[16-9]\\d|2[013-9])\\d{6,7}",[9,10]]]],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]],0,0,0,0,0,0,[0,["(?:41\\d\\d|5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|1(?:00|11|66)|222|3[36]3|444|7(?:0[013-9]|[67]\\d)|888|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|[4679]\\d|8[057-9])\\d|1(?:1[01]|99)|2(?:00|2\\d)|3(?:00|3[03])|5(?:00|5\\d)))\\d{4}",[8]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345",[0,["345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}"]]],KZ:["7","810","(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"33|7",[0,["7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}",[10]]],"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30[013-9]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:20(?:[2359]\\d|7[6-8]|88)|302\\d)\\d{6}",[10]]]],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0",0,0,0,0,0,[0,["793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}"]]],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758",[0,["758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}"]]],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0",0,0,0,[0,["(?:6(?:(?:4[5-9]|5[0-469])\\d|6(?:[0245]\\d|[17]0|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}"]]],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0",0,0,0,0,0,[0,["7(?:[0-25-8]\\d|4[0-4])\\d{6}"]]],LR:["231","00","(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[4-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:(?:(?:22|33)0|555|(?:77|88)\\d)\\d|4[67])\\d{5}|[56]\\d{6}",[7,9]]]],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]],0,0,0,0,0,0,[0,["[56]\\d{7}"]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(8-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",1]],"8",0,"[08]",0,0,0,[0,["6\\d{7}"]]],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",0,0,0,[0,["6(?:[269][18]|5[1568]|7[189]|81)\\d{6}",[9]]]],LV:["371","00","(?:[268]\\d|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]],0,0,0,0,0,0,[0,["23(?:23[0-57-9]|33[0238])\\d{3}|2(?:[0-24-9]\\d\\d|3(?:0[07]|[14-9]\\d|2[024-9]|3[0-24-9]))\\d{4}"]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0",0,0,0,0,0,[0,["9[1-6]\\d{7}"]]],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],["(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|8(?:0[89]|92)","5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|8(?:0[89]|92)"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8"],"0$1"],["(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}"]]],MC:["377","00","(?:[3489]|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],"0",0,0,0,0,0,[0,["4(?:[46]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}"]]],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0",0,0,0,0,0,[0,["562\\d{5}|(?:6\\d|7[16-9])\\d{6}"]]],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0",0,0,0,0,0,[0,["6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}",[8]]]],MF:["590","00","590\\d{6}|(?:69|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[0,["69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1",0,0,[0,["3[2-47-9]\\d{7}"]]],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1",0,0,0,0,0,[0,["(?:(?:23|54)5|329|45[356])\\d{4}"]]],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0",0,0,0,0,0,[0,["7(?:3555|(?:474|9[019]7)7)\\d{3}|7(?:[0-25-8]\\d\\d|3(?:[1-48]\\d|6[01]|7[01578])|4(?:2\\d|60|7[01578])|9(?:[2-4]\\d|5[01]|7[015]))\\d{4}"]]],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],0,0,0,0,0,0,[0,["2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[2-49])\\d{6}"]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0",0,0,0,0,0,[0,["(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}",[7,8,9,10]]]],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:83[01]|92[039])\\d{5}|(?:5[05]|6[069]|8[015689]|9[013-9])\\d{6}",[8]]]],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]],0,0,0,0,0,0,[0,["6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}",[8]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670",[0,["670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}"]]],MQ:["596","00","596\\d{6}|(?:69|80|9\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[569]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[0,["69(?:6(?:[0-46-9]\\d|5[0-6])|727)\\d{4}"]]],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]],0,0,0,0,0,0,[0,["[2-4][0-46-9]\\d{6}"]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664",[0,["664(?:3(?:49|9[1-6])|49[2-6])\\d{4}"]]],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]],0,0,0,0,0,0,[0,["(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}"]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,[0,["5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|(?:5(?:2[5-9]|4[3-689]|[57]\\d|8[0-689]|9[0-8])|7(?:0[0-3]|3[013]))\\d{5}",[8]]],"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,[0,["(?:46[46]|[79]\\d\\d)\\d{4}",[7]]],"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[137-9]"],"0$1"]],"0",0,0,0,0,0,[0,["111\\d{6}|(?:31|77|[89][89])\\d{7}",[9]]]],MX:["52","0[09]","1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}",[10,11],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],0,1],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],0,1],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],0,1]],"01",0,"0(?:[12]|4[45])|1",0,0,0,[0,["657[12]\\d{6}|(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|6[1-9]|7[12]|8[1-8]|9\\d))\\d{7}"]],"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0",0,0,0,0,0,[0,["1(?:1888[689]|4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0-4]\\d|5[0-7]))|(?:[269]\\d|[37][1-9]|4[235-9])\\d|5(?:31|9\\d\\d)|8(?:1[23]|[236]\\d|4[06]|5(?:46|[7-9])|7[016-9]|8[01]|9[0-8]))\\d{5}",[9,10]]]],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-79]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],0,0,0,0,0,0,[0,["8[2-79]\\d{7}",[9]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0",0,0,0,0,0,[0,["(?:60|8[1245])\\d{7}",[9]]]],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]],0,0,0,0,0,0,[0,["(?:5[0-4]|[79]\\d|8[0-79])\\d{4}"]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[047]"]]],0,0,0,0,0,0,[0,["(?:23|7[047]|[89]\\d)\\d{6}"]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1",0,0,[0,["(?:14|3[58])\\d{4}"]]],NG:["234","009","(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",[7,8,10,11,12,13,14],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:702[0-24-9]|819[01])\\d{6}|(?:70[13-689]|8(?:0[1-9]|1[0-8])|9(?:0[1-9]|1[1-356]))\\d{7}",[10]]]],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]],0,0,0,0,0,0,[0,["(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}"]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0",0,0,0,0,0,[0,["(?:6[1-58]|970\\d)\\d{7}",[9,11]]]],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]"]]],0,0,0,0,0,"[02-689]|7[0-8]",[0,["(?:4[015-8]|9\\d)\\d{6}",[8]]]],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0",0,0,0,0,0,[0,["9(?:6[0-3]|7[024-6]|8[0-24-68])\\d{7}",[10]]]],NR:["674","00","(?:444|(?:55|8\\d)\\d|666)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[4-68]"]]],0,0,0,0,0,0,[0,["(?:55[3-9]|666|8\\d\\d)\\d{4}"]]],NU:["683","00","(?:[4-7]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]],0,0,0,0,0,0,[0,["(?:[56]|888[1-9])\\d{3}"]]],NZ:["64","0(?:0|161)","[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-79]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|8|90","50(?:[0367]|88)|8|90"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[589]"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7"],"0$1"]],"0",0,0,0,0,0,[0,["2(?:[0-27-9]\\d|6)\\d{6,7}|2(?:1\\d|75)\\d{5}",[8,9,10]]],"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]],0,0,0,0,0,0,[0,["1505\\d{4}|(?:7(?:[1289]\\d|6[89]|7[0-5])|9(?:0[1-9]|[1-9]\\d))\\d{5}",[8]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],0,0,0,0,0,0,[0,["(?:1[16]1|21[89]|6\\d{3}|8(?:1[01]|7[23]))\\d{4}",[7,8]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,[0,["9\\d{8}",[9]]],"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],0,0,0,0,0,0,[0,["8[7-9]\\d{6}",[8]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,[0,["(?:7\\d|8[128])\\d{6}",[8]]],"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0",0,0,0,0,0,[0,["(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\\d|4[2-9]|8[135-9]|9[1-9]))\\d{7}",[10]]]],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0",0,0,0,0,0,[0,["3(?:[0-247]\\d|3[0-79]|55|64)\\d{7}",[10]]]],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]],0,0,0,0,0,0,[0,["21(?:1(?:[145]\\d|3[1-5])|2\\d\\d)\\d{4}|(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",[9]]]],PM:["508","00","[45]\\d{5}|(?:708|80\\d)\\d{6}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[0,["(?:4[02-4]|5[056]|708[45][0-5])\\d{4}"]]],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939",[0,["(?:787|939)[2-9]\\d{6}"]]],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0",0,0,0,0,0,[0,["5[69]\\d{7}",[9]]]],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]],0,0,0,0,0,0,[0,["6(?:[06]92(?:30|9\\d)|[35]92(?:3[03]|9\\d))\\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\\d\\d|480))\\d{5}"]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],0,0,0,0,0,0,[0,["(?:(?:46|83)[0-5]|6[2-4689]0)\\d{4}|(?:45|77|88)\\d{5}"]]],PY:["595","00","59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,[0,["9(?:51|6[129]|7[1-6]|8[1-7]|9[1-5])\\d{6}",[9]]]],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[16]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]],0,0,0,0,0,0,[0,["[35-7]\\d{7}",[8]]]],RE:["262","00","(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"],"0$1"]],"0",0,0,0,0,0,[0,["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"]]],RO:["40","00","(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"],"0$1"]],"0",0,0,0,0,0,[0,["7020\\d{5}|(?:6(?:2\\d|40)|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[0-39]))\\d{6}",[9]]],0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0",0,0,0,0,0,[0,["6(?:[0-689]|7\\d)\\d{6,7}",[8,9,10]]]],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"3[04-689]|[489]",[0,["9\\d{9}",[10]]],"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],"0",0,0,0,0,0,[0,["7[237-9]\\d{7}",[9]]]],SA:["966","00","92\\d{7}|(?:[15]|8\\d)\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0",0,0,0,0,0,[0,["579[01]\\d{5}|5(?:[013-689]\\d|7[0-8])\\d{6}",[9]]]],SB:["677","0[01]","(?:[1-6]|[7-9]\\d\\d)\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],0,0,0,0,0,0,[0,["48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}"]]],SC:["248","010|0[0-2]","800\\d{4}|(?:[249]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,[0,["2[125-8]\\d{5}"]],"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:1[0-2]|9[0-3569])\\d{7}"]]],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0",0,0,0,0,0,[0,["7[02369]\\d{7}",[9]]]],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-8]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,["8(?:08[013-9]|95[0-2])\\d{4}|(?:8(?:0[1-7]|[1-8]\\d|9[0-4])|9[0-8]\\d)\\d{5}",[8]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]",[0,["[56]\\d{4}",[5]]]],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,[0,["65(?:[178]\\d|5[56]|6[01])\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}",[8]]],"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|79)\\d{6}",[5,8],0,0,0,0,0,0,"79",[0,["(?:4[015-8]|9\\d)\\d{6}",[8]]]],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],"0",0,0,0,0,0,[0,["909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}",[9]]]],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0",0,0,0,0,0,[0,["(?:25|3[0-5]|66|7[2-9]|8[08]|9[09])\\d{6}"]]],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1",0,0,[0,["6[16]\\d{6}",[8]]]],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]],0,0,0,0,0,0,[0,["7(?:(?:[06-8]\\d|21|90)\\d|5(?:01|[19]0|25|[38]3|[4-7]\\d))\\d{5}"]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d)(\\d{7})","$1 $2",["(?:2|90)4|[67]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[348]|64|79|90"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|6[0-35-9]|77|9[2-9]"]]],"0",0,0,0,0,0,[0,["(?:(?:15|(?:3[59]|4[89]|6\\d|7[79]|8[08])\\d|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:[67]\\d\\d|904)\\d{5}",[7,8,9]]]],SR:["597","00","(?:[2-5]|68|[78]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]],0,0,0,0,0,0,[0,["(?:7[124-7]|8[124-9])\\d{5}",[7]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:12|9[1257-9])\\d{7}"]]],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]],0,0,0,0,0,0,[0,["900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}"]]],SV:["503","00","[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[267]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,[0,["[67]\\d{7}",[8]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721",[0,["7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}"]]],SY:["963","00","[1-39]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",1]],"0",0,0,0,0,0,[0,["9[1-689]\\d{7}",[9]]]],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]],0,0,0,0,0,0,[0,["7[6-9]\\d{6}",[8]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649",[0,["649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}"]]],TD:["235","00|16","(?:22|[69]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],0,0,0,0,0,0,[0,["(?:6[0235689]|77|9\\d)\\d{6}"]],"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]],0,0,0,0,0,0,[0,["(?:7[019]|9[0-36-9])\\d{6}"]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0",0,0,0,0,0,[0,["671[0-8]\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}",[9]]]],TJ:["992","810","[0-57-9]\\d{8}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["44[02-479]|[34]7"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0-57-9]"]]],0,0,0,0,0,0,[0,["(?:4(?:1[18]|4[02-479])|81[1-9])\\d{6}|(?:0[0-57-9]|1[017]|2[02]|[34]0|5[05]|7[0178]|8[078]|9\\d)\\d{7}"]],"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7],0,0,0,0,0,0,0,[0,["7[2-4]\\d{2,5}"]]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]],0,0,0,0,0,0,[0,["7[2-8]\\d{6}",[8]]]],TM:["993","810","[1-6]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],"8",0,0,0,0,0,[0,["6\\d{7}"]],"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]],0,0,0,0,0,0,[0,["3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-8])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}"]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]],0,0,0,0,0,0,[0,["(?:55[4-6]|6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}",[7]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|61[06])","5(?:[0-59]|61[06]1)"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0",0,0,0,0,0,[0,["561(?:011|61\\d)\\d{4}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}",[10]]]],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868",[0,["868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}"]]],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]],0,0,0,0,0,0,[0,["(?:7[01]\\d|90)\\d{4}",[6,7]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[258]0"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]","[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,[0,["(?:40001[0-2]|9[0-8]\\d{4})\\d{3}",[9]]],0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0",0,0,0,0,0,[0,["77[2-9]\\d{6}|(?:6[125-9]|7[13-689])\\d{7}"]]],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}",[9]]],"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],"0",0,0,0,0,0,[0,["726[01]\\d{5}|7(?:[015-8]\\d|20|36|4[0-4]|9[89])\\d{6}"]]],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[0,["(?:5056(?:[0-35-9]\\d|4[468])|73020\\d)\\d{4}|(?:472[24]|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}",[6,7,8,9,10,11,12,13],[["(\\d{3})(\\d{3,4})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[49]0|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,[0,["9[1-9]\\d{6}",[8]]],"00"," int. "],UZ:["998","810","(?:20|33|[5-79]\\d|88)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-9]"],"8 $1"]],"8",0,0,0,0,0,[0,["(?:(?:[25]0|33|88|9[0-57-9])\\d{3}|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}"]],"8~10"],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11],0,0,0,0,0,0,"06698",[0,["3[1-9]\\d{8}|3[2-9]\\d{7}",[9,10]]]],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784",[0,["784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}"]]],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0",0,0,0,0,0,[0,["4(?:1[24-8]|2[46])\\d{7}"]]],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284",[0,["284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|9[69])|5(?:4[0-7]|68|9[69]))\\d{4}"]]],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340",[0,["340(?:2(?:0[0-368]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}"]]],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",1],["(\\d{4})(\\d{4,6})","$1 $2",["1"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["6"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[357-9]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0",0,0,0,0,0,[0,["(?:5(?:2[238]|59)|89[6-9]|99[013-9])\\d{6}|(?:3\\d|5[1689]|7[06-9]|8[1-8]|9[0-8])\\d{7}",[9]]]],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]],0,0,0,0,0,0,[0,["(?:[58]\\d|7[013-7])\\d{5}",[7]]]],WF:["681","00","(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[478]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],0,0,0,0,0,0,[0,["(?:72|8[23])\\d{4}",[6]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]],0,0,0,0,0,0,[0,["(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}",[7,10]]]],XK:["383","00","[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],"0",0,0,0,0,0,[0,["4[3-9]\\d{6}",[8]]]],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,[0,["7[01378]\\d{7}",[9]]]],YT:["262","00","(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",[9],0,"0",0,0,0,0,0,[0,["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"]]],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0",0,0,0,0,0,[0,["(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d|7[0-46-9])\\d{3}|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}",[5,6,7,8,9]]]],ZM:["260","00","800\\d{6}|(?:21|63|[79]\\d)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],"0",0,0,0,0,0,[0,["(?:7[5-79]|9[5-8])\\d{7}"]]],ZW:["263","00","2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",[5,6,7,8,9,10],[["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],"0",0,0,0,0,0,[0,["7(?:[178]\\d|3[1-9])\\d{6}",[9]]]]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[35-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"6\\d{9}|[0-36-9]\\d{8}",[9,10],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-37-9]"]],["(\\d)(\\d{3})(\\d{5,6})","$1 $2 $3",["6"]]],0,0,0,0,0,0,[0,["6\\d{9}|[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|51"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",[7,8,9,10,12]],0,0,0,0,0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};function w(t,n){var e=Array.prototype.slice.call(n);return e.push(b),t.apply(this,e)}var x={}.constructor;function S(t){return null!=t&&t.constructor===x}function O(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function E(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function _(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,i,o=[],d=!0,a=!1;try{for(e=e.call(t);!(d=(r=e.next()).done)&&(o.push(r.value),!n||o.length!==n);d=!0);}catch(t){a=!0,i=t}finally{try{d||null==e.return||e.return()}finally{if(a)throw i}}return o}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return P(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return P(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function A(t){var n,e,r,i=_(Array.prototype.slice.call(t),4),o=i[0],d=i[1],a=i[2],c=i[3];if("string"!=typeof o)throw new TypeError("A text for parsing must be a string.");if(n=o,d&&"string"!=typeof d){if(!S(d))throw new Error("Invalid second argument: ".concat(d));a?(e=d,r=a):r=d}else c?(e=a,r=c):(e=void 0,r=a),d&&(e=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?O(Object(e),!0).forEach((function(n){E(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({defaultCountry:d},e));return{text:n,options:e,metadata:r}}var C="".concat("-‐-―−ー－").concat("／/").concat("．.").concat("  ­​⁠　").concat("()（）［］\\[\\]").concat("~⁓∼～");function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,n){if(n&&("object"===L(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t){var n="function"==typeof Map?new Map:void 0;return(M=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return k(t,arguments,B(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),j(r,t)})(t)}function k(t,n,e){return(k=F()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var i=new(Function.bind.apply(t,r));return e&&j(i,e.prototype),i}).apply(null,arguments)}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function j(t,n){return(j=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&j(t,n)}(a,t);var n,e,r,i,o,d=(n=a,e=F(),function(){var t,r=B(n);if(e){var i=B(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return N(this,t)});function a(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),n=d.call(this,t),Object.setPrototypeOf(I(n),a.prototype),n.name=n.constructor.name,n}return r=a,i&&T(r.prototype,i),o&&T(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}(M(Error)),D=function(t,n){t=t.split("-"),n=n.split("-");for(var e=t[0].split("."),r=n[0].split("."),i=0;i<3;i++){var o=Number(e[i]),d=Number(r[i]);if(o>d)return 1;if(d>o)return-1;if(!isNaN(o)&&isNaN(d))return 1;if(isNaN(o)&&!isNaN(d))return-1}return t[1]&&n[1]?t[1]>n[1]?1:t[1]<n[1]?-1:0:!t[1]&&n[1]?1:t[1]&&!n[1]?-1:0};function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function U(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H(t,n,e){return n&&U(t.prototype,n),e&&U(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var W=/^\d+$/,V=function(){function t(n){q(this,t),function(t){if(!t)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!S(t)||!S(t.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(S(t)?"an object of shape: { "+Object.keys(t).join(", ")+" }":"a "+X(t)+": "+t,"."))}(n),this.metadata=n,tt.call(this,n)}return H(t,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter((function(t){return"001"!==t}))}},{key:"getCountryMetadata",value:function(t){return this.metadata.countries[t]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(t){return void 0!==this.getCountryMetadata(t)}},{key:"hasCallingCode",value:function(t){if(this.getCountryCodesForCallingCode(t))return!0;if(this.nonGeographic()){if(this.nonGeographic()[t])return!0}else{var n=this.countryCallingCodes()[t];if(n&&1===n.length&&"001"===n[0])return!0}}},{key:"isNonGeographicCallingCode",value:function(t){return this.nonGeographic()?!!this.nonGeographic()[t]:!this.getCountryCodesForCallingCode(t)}},{key:"country",value:function(t){return this.selectNumberingPlan(t)}},{key:"selectNumberingPlan",value:function(t,n){if(t&&W.test(t)&&(n=t,t=null),t&&"001"!==t){if(!this.hasCountry(t))throw new Error("Unknown country: ".concat(t));this.numberingPlan=new K(this.getCountryMetadata(t),this)}else if(n){if(!this.hasCallingCode(n))throw new Error("Unknown calling code: ".concat(n));this.numberingPlan=new K(this.getNumberingPlanMetadata(n),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(t){var n=this.countryCallingCodes()[t];if(n){if(1===n.length&&3===n[0].length)return;return n}}},{key:"getCountryCodeForCallingCode",value:function(t){var n=this.getCountryCodesForCallingCode(t);if(n)return n[0]}},{key:"getNumberingPlanMetadata",value:function(t){var n=this.getCountryCodeForCallingCode(t);if(n)return this.getCountryMetadata(n);if(this.nonGeographic()){var e=this.nonGeographic()[t];if(e)return e}else{var r=this.countryCallingCodes()[t];if(r&&1===r.length&&"001"===r[0])return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(t){return this.numberingPlan.type(t)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(t){return this.selectNumberingPlan(t)}},{key:"hasSelectedNumberingPlan",value:function(){return void 0!==this.numberingPlan}}]),t}(),K=function(){function t(n,e){q(this,t),this.globalMetadataObject=e,this.metadata=n,tt.call(this,e.metadata)}return H(t,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(t){return t[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var t=this,n=this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return n.map((function(n){return new Z(n,t)}))}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(t){return t[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return(!this.types()||0!==this.types().length)&&!!this.types()}},{key:"type",value:function(t){if(this.hasTypes()&&J(this.types(),t))return new Y(J(this.types(),t),this)}},{key:"ext",value:function(){return this.v1||this.v2?" ext. ":this.metadata[13]||" ext. "}}]),t}(),Z=function(){function t(n,e){q(this,t),this._format=n,this.metadata=e}return H(t,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!(!this.nationalPrefixFormattingRule()||z.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),t}(),z=/^\(?\$1\)?$/,Y=function(){function t(n,e){q(this,t),this.type=n,this.metadata=e}return H(t,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),t}();function J(t,n){switch(n){case"FIXED_LINE":return t[0];case"MOBILE":return t[1];case"TOLL_FREE":return t[2];case"PREMIUM_RATE":return t[3];case"PERSONAL_NUMBER":return t[4];case"VOICEMAIL":return t[5];case"UAN":return t[6];case"PAGER":return t[7];case"VOIP":return t[8];case"SHARED_COST":return t[9]}}var X=function(t){return G(t)};function Q(t,n){if((n=new V(n)).hasCountry(t))return n.country(t).countryCallingCode();throw new Error("Unknown country: ".concat(t))}function tt(t){var n=t.version;"number"==typeof n?(this.v1=1===n,this.v2=2===n,this.v3=3===n,this.v4=4===n):n?-1===D(n,"1.2.0")?this.v2=!0:-1===D(n,"1.7.35")?this.v3=!0:this.v4=!0:this.v1=!0}var nt=function(t){return"([".concat("0-9０-９٠-٩۰-۹","]{1,").concat(t,"})")};function et(t){return";ext="+nt("20")+"|"+("[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)[:\\.．]?[  \\t,-]*"+nt("20")+"#?")+"|"+("[  \\t,]*(?:[xｘ#＃~～]|int|ｉｎｔ)[:\\.．]?[  \\t,-]*"+nt("9")+"#?")+"|"+("[- ]+"+nt("6")+"#")+"|"+("[  \\t]*(?:,{2}|;)[:\\.．]?[  \\t,-]*"+nt("15")+"#?")+"|"+("[  \\t]*(?:,)+[:\\.．]?[  \\t,-]*"+nt("9")+"#?")}var rt="[+＋]{0,1}(?:["+C+"]*[0-9０-９٠-٩۰-۹]){3,}["+C+"0-9０-９٠-٩۰-۹]*",it=new RegExp("^[+＋]{0,1}(?:["+C+"]*[0-9０-９٠-٩۰-۹]){1,2}$","i"),ot=rt+"(?:"+et()+")?",dt=new RegExp("^[0-9０-９٠-٩۰-۹]{2}$|^"+ot+"$","i");function at(t){return t.length>=2&&dt.test(t)}var ct=new RegExp("(?:"+et()+")$","i");var ut={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};function st(t){return ut[t]}function lt(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return ft(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ft(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ft(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function $t(t){for(var n,e="",r=lt(t.split(""));!(n=r()).done;){e+=pt(n.value,e)||""}return e}function pt(t,n){if("+"===t){if(n)return;return"+"}return st(t)}function ht(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return vt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return vt(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function vt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function yt(t,n){return function t(n,e,r){var i=r.type(e),o=i&&i.possibleLengths()||r.possibleLengths();if(!o)return"IS_POSSIBLE";if("FIXED_LINE_OR_MOBILE"===e){if(!r.type("FIXED_LINE"))return t(n,"MOBILE",r);var d=r.type("MOBILE");d&&(o=function(t,n){for(var e,r=t.slice(),i=ht(n);!(e=i()).done;){var o=e.value;t.indexOf(o)<0&&r.push(o)}return r.sort((function(t,n){return t-n}))}(o,d.possibleLengths()))}else if(e&&!i)return"INVALID_LENGTH";var a=n.length,c=o[0];if(c===a)return"IS_POSSIBLE";if(c>a)return"TOO_SHORT";if(o[o.length-1]<a)return"TOO_LONG";return o.indexOf(a,1)>=0?"IS_POSSIBLE":"INVALID_LENGTH"}(t,void 0,n)}function gt(t,n){switch(yt(t,n)){case"IS_POSSIBLE":return!0;default:return!1}}function mt(t,n){return t=t||"",new RegExp("^(?:"+n+")$").test(t)}function bt(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return wt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return wt(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function wt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var xt=["MOBILE","PREMIUM_RATE","TOLL_FREE","SHARED_COST","VOIP","PERSONAL_NUMBER","PAGER","UAN","VOICEMAIL"];function St(t,n,e){if(n=n||{},t.country||t.countryCallingCode){(e=new V(e)).selectNumberingPlan(t.country,t.countryCallingCode);var r=n.v2?t.nationalNumber:t.phone;if(mt(r,e.nationalNumberPattern())){if(Ot(r,"FIXED_LINE",e))return e.type("MOBILE")&&""===e.type("MOBILE").pattern()?"FIXED_LINE_OR_MOBILE":e.type("MOBILE")?Ot(r,"MOBILE",e)?"FIXED_LINE_OR_MOBILE":"FIXED_LINE":"FIXED_LINE_OR_MOBILE";for(var i,o=bt(xt);!(i=o()).done;){var d=i.value;if(Ot(r,d,e))return d}}}}function Ot(t,n,e){return!(!(n=e.type(n))||!n.pattern())&&(!(n.possibleLengths()&&n.possibleLengths().indexOf(t.length)<0)&&mt(t,n.pattern()))}function Et(t,n,e){var r=new V(e).getCountryCodesForCallingCode(t);return r?r.filter((function(t){return function(t,n,e){var r=new V(e);if(r.selectNumberingPlan(n),r.numberingPlan.possibleLengths().indexOf(t.length)>=0)return!0;return!1}(n,t,e)})):[]}var _t=/(\$\d)/;function Pt(t,n,e){var r=e.useInternationalFormat,i=e.withNationalPrefix,o=(e.carrierCode,e.metadata,t.replace(new RegExp(n.pattern()),r?n.internationalFormat():i&&n.nationalPrefixFormattingRule()?n.format().replace(_t,n.nationalPrefixFormattingRule()):n.format()));return r?function(t){return t.replace(new RegExp("[".concat(C,"]+"),"g")," ").trim()}(o):o}var At=/^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;function Ct(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return Lt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Lt(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Lt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Tt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function Nt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Tt(Object(e),!0).forEach((function(n){It(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Tt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function It(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var Mt={formatExtension:function(t,n,e){return"".concat(t).concat(e.ext()).concat(n)}};function kt(t,n,e,r){if(e=e?Nt(Nt({},Mt),e):Mt,r=new V(r),t.country&&"001"!==t.country){if(!r.hasCountry(t.country))throw new Error("Unknown country: ".concat(t.country));r.country(t.country)}else{if(!t.countryCallingCode)return t.phone||"";r.selectNumberingPlan(t.countryCallingCode)}var i,o=r.countryCallingCode(),d=e.v2?t.nationalNumber:t.phone;switch(n){case"NATIONAL":return d?jt(i=Ft(d,t.carrierCode,"NATIONAL",r,e),t.ext,r,e.formatExtension):"";case"INTERNATIONAL":return d?(i=Ft(d,null,"INTERNATIONAL",r,e),jt(i="+".concat(o," ").concat(i),t.ext,r,e.formatExtension)):"+".concat(o);case"E.164":return"+".concat(o).concat(d);case"RFC3966":return function(t){var n=t.number,e=t.ext;if(!n)return"";if("+"!==n[0])throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');return"tel:".concat(n).concat(e?";ext="+e:"")}({number:"+".concat(o).concat(d),ext:t.ext});case"IDD":if(!e.fromCountry)return;return jt(function(t,n,e,r,i){if(Q(r,i.metadata)===e){var o=Ft(t,n,"NATIONAL",i);return"1"===e?e+" "+o:o}var d=function(t,n,e){var r=new V(e);return r.selectNumberingPlan(t,n),r.defaultIDDPrefix()?r.defaultIDDPrefix():At.test(r.IDDPrefix())?r.IDDPrefix():void 0}(r,void 0,i.metadata);if(d)return"".concat(d," ").concat(e," ").concat(Ft(t,null,"INTERNATIONAL",i))}(d,t.carrierCode,o,e.fromCountry,r),t.ext,r,e.formatExtension);default:throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(n,'"'))}}function Ft(t,n,e,r,i){var o=function(t,n){for(var e,r=Ct(t);!(e=r()).done;){var i=e.value;if(i.leadingDigitsPatterns().length>0){var o=i.leadingDigitsPatterns()[i.leadingDigitsPatterns().length-1];if(0!==n.search(o))continue}if(mt(n,i.pattern()))return i}}(r.formats(),t);return o?Pt(t,o,{useInternationalFormat:"INTERNATIONAL"===e,withNationalPrefix:!o.nationalPrefixIsOptionalWhenFormattingInNationalFormat()||!i||!1!==i.nationalPrefix,carrierCode:n,metadata:r}):t}function jt(t,n,e,r){return n?r(t,n,e):t}function Bt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function Rt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Bt(Object(e),!0).forEach((function(n){Dt(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Bt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function Dt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Gt(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var qt=function(){function t(n,e,r){if(function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),!n)throw new TypeError("`country` or `countryCallingCode` not passed");if(!e)throw new TypeError("`nationalNumber` not passed");if(!r)throw new TypeError("`metadata` not passed");var i=function(t,n){var e,r,i=new V(n);o=t,/^[A-Z]{2}$/.test(o)?(e=t,i.selectNumberingPlan(e),r=i.countryCallingCode()):r=t;var o;return{country:e,countryCallingCode:r}}(n,r),o=i.country,d=i.countryCallingCode;this.country=o,this.countryCallingCode=d,this.nationalNumber=e,this.number="+"+this.countryCallingCode+this.nationalNumber,this.getMetadata=function(){return r}}var n,e,r;return n=t,(e=[{key:"setExt",value:function(t){this.ext=t}},{key:"getPossibleCountries",value:function(){return this.country?[this.country]:Et(this.countryCallingCode,this.nationalNumber,this.getMetadata())}},{key:"isPossible",value:function(){return function(t,n,e){if(void 0===n&&(n={}),e=new V(e),n.v2){if(!t.countryCallingCode)throw new Error("Invalid phone number object passed");e.selectNumberingPlan(t.countryCallingCode)}else{if(!t.phone)return!1;if(t.country){if(!e.hasCountry(t.country))throw new Error("Unknown country: ".concat(t.country));e.country(t.country)}else{if(!t.countryCallingCode)throw new Error("Invalid phone number object passed");e.selectNumberingPlan(t.countryCallingCode)}}if(e.possibleLengths())return gt(t.phone||t.nationalNumber,e);if(t.countryCallingCode&&e.isNonGeographicCallingCode(t.countryCallingCode))return!0;throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')}(this,{v2:!0},this.getMetadata())}},{key:"isValid",value:function(){return t=this,n={v2:!0},e=this.getMetadata(),n=n||{},(e=new V(e)).selectNumberingPlan(t.country,t.countryCallingCode),e.hasTypes()?void 0!==St(t,n,e.metadata):mt(n.v2?t.nationalNumber:t.phone,e.nationalNumberPattern());var t,n,e}},{key:"isNonGeographic",value:function(){return new V(this.getMetadata()).isNonGeographicCallingCode(this.countryCallingCode)}},{key:"isEqual",value:function(t){return this.number===t.number&&this.ext===t.ext}},{key:"getType",value:function(){return St(this,{v2:!0},this.getMetadata())}},{key:"format",value:function(t,n){return kt(this,t,n?Rt(Rt({},n),{},{v2:!0}):{v2:!0},this.getMetadata())}},{key:"formatNational",value:function(t){return this.format("NATIONAL",t)}},{key:"formatInternational",value:function(t){return this.format("INTERNATIONAL",t)}},{key:"getURI",value:function(t){return this.format("RFC3966",t)}}])&&Gt(n.prototype,e),r&&Gt(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();var Ut=new RegExp("([0-9０-９٠-٩۰-۹])");function Ht(t,n){var e=function(t,n){if(t&&n.numberingPlan.nationalPrefixForParsing()){var e=new RegExp("^(?:"+n.numberingPlan.nationalPrefixForParsing()+")"),r=e.exec(t);if(r){var i,o,d,a=r.length-1,c=a>0&&r[a];if(n.nationalPrefixTransformRule()&&c)i=t.replace(e,n.nationalPrefixTransformRule()),a>1&&(o=r[1]);else{var u=r[0];i=t.slice(u.length),c&&(o=r[1])}if(c){var s=t.indexOf(r[1]);t.slice(0,s)===n.numberingPlan.nationalPrefix()&&(d=n.numberingPlan.nationalPrefix())}else d=r[0];return{nationalNumber:i,nationalPrefix:d,carrierCode:o}}}return{nationalNumber:t}}(t,n),r=e.carrierCode,i=e.nationalNumber;if(i!==t){if(!function(t,n,e){if(mt(t,e.nationalNumberPattern())&&!mt(n,e.nationalNumberPattern()))return!1;return!0}(t,i,n))return{nationalNumber:t};if(n.possibleLengths()&&!function(t,n){switch(yt(t,n)){case"TOO_SHORT":case"INVALID_LENGTH":return!1;default:return!0}}(i,n))return{nationalNumber:t}}return{nationalNumber:i,carrierCode:r}}function Wt(t,n,e,r){if(!t)return{};var i;if("+"!==t[0]){var o=function(t,n,e,r){if(n){var i=new V(r);i.selectNumberingPlan(n,e);var o=new RegExp(i.IDDPrefix());if(0===t.search(o)){var d=(t=t.slice(t.match(o)[0].length)).match(Ut);if(!(d&&null!=d[1]&&d[1].length>0&&"0"===d[1]))return t}}}(t,n,e,r);if(!o||o===t){if(n||e){var d=function(t,n,e,r){var i=n?Q(n,r):e;if(0===t.indexOf(i)){(r=new V(r)).selectNumberingPlan(n,e);var o=t.slice(i.length),d=Ht(o,r).nationalNumber,a=Ht(t,r).nationalNumber;if(!mt(a,r.nationalNumberPattern())&&mt(d,r.nationalNumberPattern())||"TOO_LONG"===yt(a,r))return{countryCallingCode:i,number:o}}return{number:t}}(t,n,e,r),a=d.countryCallingCode,c=d.number;if(a)return{countryCallingCodeSource:"FROM_NUMBER_WITHOUT_PLUS_SIGN",countryCallingCode:a,number:c}}return{number:t}}i=!0,t="+"+o}if("0"===t[1])return{};r=new V(r);for(var u=2;u-1<=3&&u<=t.length;){var s=t.slice(1,u);if(r.hasCallingCode(s))return r.selectNumberingPlan(s),{countryCallingCodeSource:i?"FROM_NUMBER_WITH_IDD":"FROM_NUMBER_WITH_PLUS_SIGN",countryCallingCode:s,number:t.slice(u)};u++}return{}}function Vt(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return Kt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Kt(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Kt(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function Zt(t,n){var e=n.nationalNumber,r=n.defaultCountry,i=n.metadata;var o=i.getCountryCodesForCallingCode(t);if(o)return 1===o.length?o[0]:function(t,n){var e=n.countries,r=n.defaultCountry,i=n.metadata;i=new V(i);for(var o,d=[],a=Vt(e);!(o=a()).done;){var c=o.value;if(i.country(c),i.leadingDigits()){if(t&&0===t.search(i.leadingDigits()))return c}else if(St({phone:t,country:c},void 0,i.metadata)){if(!r)return c;if(c===r)return c;d.push(c)}}if(d.length>0)return d[0]}(e,{countries:o,defaultCountry:r,metadata:i.metadata})}var zt=new RegExp("^\\+([0-9０-９٠-٩۰-۹]|[\\-\\.\\(\\)]?)*[0-9０-９٠-٩۰-۹]([0-9０-９٠-٩۰-۹]|[\\-\\.\\(\\)]?)*$","g"),Yt=new RegExp("^([0-9０-９٠-٩۰-۹]+((\\-)*[0-9０-９٠-٩۰-۹])*\\.)*[a-zA-Z]+((\\-)*[0-9０-９٠-٩۰-۹])*\\.?$","g");function Jt(t,n){var e,r=n.extractFormattedPhoneNumber,i=function(t){var n=t.indexOf(";phone-context=");if(n<0)return null;var e=n+";phone-context=".length;if(e>=t.length)return"";var r=t.indexOf(";",e);return r>=0?t.substring(e,r):t.substring(e)}(t);if(!function(t){return null===t||0!==t.length&&(zt.test(t)||Yt.test(t))}(i))throw new R("NOT_A_NUMBER");if(null===i)e=r(t)||"";else{e="","+"===i.charAt(0)&&(e+=i);var o,d=t.indexOf("tel:");o=d>=0?d+"tel:".length:0;var a=t.indexOf(";phone-context=");e+=t.substring(o,a)}var c=e.indexOf(";isub=");if(c>0&&(e=e.substring(0,c)),""!==e)return e}var Xt=new RegExp("[+＋0-9０-９٠-٩۰-۹]"),Qt=new RegExp("[^0-9０-９٠-٩۰-۹#]+$");function tn(t,n,e){if(n=n||{},e=new V(e),n.defaultCountry&&!e.hasCountry(n.defaultCountry)){if(n.v2)throw new R("INVALID_COUNTRY");throw new Error("Unknown country: ".concat(n.defaultCountry))}var r=function(t,n,e){var r=Jt(t,{extractFormattedPhoneNumber:function(t){return function(t,n,e){if(!t)return;if(t.length>250){if(e)throw new R("TOO_LONG");return}if(!1===n)return t;var r=t.search(Xt);if(r<0)return;return t.slice(r).replace(Qt,"")}(t,e,n)}});if(!r)return{};if(!at(r))return function(t){return it.test(t)}(r)?{error:"TOO_SHORT"}:{};var i=function(t){var n=t.search(ct);if(n<0)return{};for(var e=t.slice(0,n),r=t.match(ct),i=1;i<r.length;){if(r[i])return{number:e,ext:r[i]};i++}}(r);if(i.ext)return i;return{number:r}}(t,n.v2,n.extract),i=r.number,o=r.ext,d=r.error;if(!i){if(n.v2){if("TOO_SHORT"===d)throw new R("TOO_SHORT");throw new R("NOT_A_NUMBER")}return{}}var a=function(t,n,e,r){var i,o=Wt($t(t),n,e,r.metadata),d=o.countryCallingCodeSource,a=o.countryCallingCode,c=o.number;if(a)r.selectNumberingPlan(a);else{if(!c||!n&&!e)return{};r.selectNumberingPlan(n,e),n&&(i=n),a=e||Q(n,r.metadata)}if(!c)return{countryCallingCodeSource:d,countryCallingCode:a};var u=Ht($t(c),r),s=u.nationalNumber,l=u.carrierCode,f=Zt(a,{nationalNumber:s,defaultCountry:n,metadata:r});f&&(i=f,"001"===f||r.country(i));return{country:i,countryCallingCode:a,countryCallingCodeSource:d,nationalNumber:s,carrierCode:l}}(i,n.defaultCountry,n.defaultCallingCode,e),c=a.country,u=a.nationalNumber,s=a.countryCallingCode,l=a.countryCallingCodeSource,f=a.carrierCode;if(!e.hasSelectedNumberingPlan()){if(n.v2)throw new R("INVALID_COUNTRY");return{}}if(!u||u.length<2){if(n.v2)throw new R("TOO_SHORT");return{}}if(u.length>17){if(n.v2)throw new R("TOO_LONG");return{}}if(n.v2){var $=new qt(s,u,e.metadata);return c&&($.country=c),f&&($.carrierCode=f),o&&($.ext=o),$.__countryCallingCodeSource=l,$}var p=!!(n.extended?e.hasSelectedNumberingPlan():c)&&mt(u,e.nationalNumberPattern());return n.extended?{country:c,countryCallingCode:s,carrierCode:f,valid:p,possible:!!p||!(!0!==n.extended||!e.possibleLengths()||!gt(u,e)),phone:u,ext:o}:p?function(t,n,e){var r={country:t,phone:n};e&&(r.ext=e);return r}(c,u,o):{}}function nn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function en(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?nn(Object(e),!0).forEach((function(n){rn(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):nn(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function rn(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function on(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function dn(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?on(Object(e),!0).forEach((function(n){an(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):on(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function an(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function cn(t,n,e){n&&n.defaultCountry&&!function(t,n){return n.countries.hasOwnProperty(t)}(n.defaultCountry,e)&&(n=dn(dn({},n),{},{defaultCountry:void 0}));try{return function(t,n,e){return tn(t,en(en({},n),{},{v2:!0}),e)}(t,n,e)}catch(t){if(!(t instanceof R))throw t}}function un(){var t=A(arguments),n=t.text,e=t.options,r=t.metadata;return cn(n,e,r)}function sn(t){return(sn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ln(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ln=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",d=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(t){c=function(t,n,e){return t[n]=e}}function u(t,n,e,i){var o=n&&n.prototype instanceof f?n:f,d=Object.create(o.prototype),a=new E(i||[]);return r(d,"_invoke",{value:w(t,e,a)}),d}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function $(){}function p(){}var h={};c(h,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==n&&e.call(y,o)&&(h=y);var g=p.prototype=f.prototype=Object.create(h);function m(t){["next","throw","return"].forEach((function(n){c(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){var i;r(this,"_invoke",{value:function(r,o){function d(){return new n((function(i,d){!function r(i,o,d,a){var c=s(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==sn(l)&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,d,a)}),(function(t){r("throw",t,d,a)})):n.resolve(l).then((function(t){u.value=t,d(u)}),(function(t){return r("throw",t,d,a)}))}a(c.arg)}(r,o,i,d)}))}return i=i?i.then(d,d):d()}})}function w(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return P()}for(e.method=i,e.arg=o;;){var d=e.delegate;if(d){var a=x(d,e);if(a){if(a===l)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var c=s(t,n,e);if("normal"===c.type){if(r=e.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r="completed",e.method="throw",e.arg=c.arg)}}}function x(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,x(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var i=s(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,l;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return $.prototype=p,r(g,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:$,configurable:!0}),$.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===$||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(b.prototype),c(b.prototype,d,(function(){return this})),t.AsyncIterator=b,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var d=new b(u(n,e,r,i),o);return t.isGeneratorFunction(e)?d:d.next().then((function(t){return t.done?t.value:d.next()}))},m(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return d.type="throw",d.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],d=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=e.call(o,"catchLoc"),c=e.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var d=o?o.completion:{};return d.type=t,d.arg=n,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(d)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),l}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;O(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}function fn(t,n,e,r,i,o,d){try{var a=t[o](d),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,i)}function $n(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function d(t){fn(o,r,i,d,a,"next",t)}function a(t){fn(o,r,i,d,a,"throw",t)}d(void 0)}))}}function pn(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,yn(r.key),r)}}function hn(t,n,e){return n&&pn(t.prototype,n),e&&pn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function vn(t,n,e){return(n=yn(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function yn(t){var n=function(t,n){if("object"!==sn(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!==sn(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===sn(n)?n:String(n)}var gn=hn((function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),vn(this,"popupClickEvent",(function(){var t=document.querySelector(".sotp-popup-close-btn");null==t||t.addEventListener("click",(function(t){t.preventDefault(),n.popUpCloseOpen(!1)}))})),vn(this,"popUpCloseOpen",(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=document.querySelector(".sotp-popup-wrapper");n&&(t?(n.classList.add("active"),document.querySelector("body").classList.add("overflow-hidden"),document.querySelector("html").classList.add("overflow-hidden")):(n.classList.remove("active"),document.querySelector("body").classList.remove("overflow-hidden"),document.querySelector("html").classList.remove("overflow-hidden")))})),vn(this,"setDefaultSelectedCountry",(function(){document.querySelectorAll("li[data-country-code='"+simplyOtp.settings.selectedCountry+"']").forEach((function(t){return t.click()}))})),vn(this,"createLoginForm",(function(){})),vn(this,"clickEvents",(function(){var t=document.querySelectorAll(".other-option-inner"),e=document.querySelectorAll(".country-selector-main"),r=document.querySelectorAll(".country-selector-list li"),i=document.querySelectorAll(".send-btn"),o=document.querySelectorAll(".edit-phone"),d=document.querySelectorAll(".resend-btn"),a=document.querySelectorAll(".verify-btn"),c=document.querySelectorAll(".update-btn"),u=document.querySelectorAll(".otp-input-main");document.querySelectorAll(".skip-btn").forEach((function(t){t.addEventListener("click",(function(e){var r=t.closest(".sotp-widget");n.skipNowHandler(r)}))})),c.forEach((function(t){t.addEventListener("click",(function(e){var r=t.closest(".sotp-widget");if(r.querySelector(".error-fname-message").classList.add("hideBox"),r.querySelector(".error-lname-message").classList.add("hideBox"),r.querySelector(".error-email-message").classList.add("hideBox"),simplyOtp.language.fname_required&&""==r.querySelector(".update-user-first-name-input").value)return r.querySelector(".error-fname-message").classList.remove("hideBox"),e.preventDefault(),!1;if(simplyOtp.language.lname_required&&""==r.querySelector(".update-user-last-name-input").value)return r.querySelector(".error-lname-message").classList.remove("hideBox"),e.preventDefault(),!1;var i=r.querySelector(".update-user-email-input").value;if(""==r.querySelector(".update-user-email-input").value||!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(i))return r.querySelector(".error-email-message").classList.remove("hideBox"),e.preventDefault(),!1;if(""==r.querySelector('.update-user-box input[name="phone"]').value)return r.querySelector(".error-message-phone").classList.remove("hideBox"),e.preventDefault(),!1;var o=!1;r.querySelectorAll(".custom_field select").forEach((function(t){(t.closest(".custom_field").querySelector(".errormessage").classList.add("hideBox"),t.getAttribute("required"))&&(""!=t.value||(t.closest(".custom_field").querySelector(".errormessage").classList.remove("hideBox"),o=!0,t.setAttribute("isvalid","true"),console.log(t.validity)))})),r.querySelectorAll(".custom_field input").forEach((function(t){var n=t.getAttribute("required");if(t.closest(".custom_field").querySelector(".errormessage").classList.add("hideBox"),n&&""!=t.value&&t.checkValidity());else if(n||""!=t.value)if(!n&&""!=t.value&&t.checkValidity());else{t.closest(".custom_field").querySelector(".errormessage").classList.remove("hideBox"),o=!0,t.setAttribute("isvalid","true"),console.log(t.validity)}else;})),o||n.updateUserHandler(r)}))})),u.forEach((function(t){t.addEventListener("input",(function(n){var e=t.closest(".sotp-widget"),r=t.getAttribute("maxlength");t.value.length==r&&e.querySelector(".verify-btn").click()}))})),a.forEach((function(t){t.addEventListener("click",(function(e){var r=t.closest(".sotp-widget");n.verifyOtpHandler(r)}))})),o.forEach((function(t){t.addEventListener("click",(function(t){var e=t.currentTarget.closest(".sotp-widget");n.goBack(e)}))})),i.forEach((function(t){t.addEventListener("click",(function(t){var e=t.currentTarget.closest(".sotp-widget");n.sendOtpHandler(e)}))})),d.forEach((function(t){t.addEventListener("click",(function(e){var r=t.closest(".sotp-widget");t.classList.contains("disabled")||(n.countDownStart(r),n.resendOtpHandler(r))}))})),t.forEach((function(t){t.addEventListener("click",(function(t){var n=t.currentTarget,e=n.closest(".sotp-widget"),r=n.getAttribute("data-current");e.querySelector(".login-box").setAttribute("data-active",r),e.querySelectorAll(".user-name-input").forEach((function(t){var n=t.parentElement.getAttribute("data-current");r==n?t.parentElement.classList.add("active"):t.parentElement.classList.remove("active")})),document.dispatchEvent(new CustomEvent("otp:loginmode:change"))}))})),e.forEach((function(t){t.addEventListener("click",(function(t){var n=t.currentTarget.parentElement.querySelector(".country-selector-list");n&&n.classList.toggle("active")}))})),r.forEach((function(t){t.addEventListener("click",(function(t){var n=t.currentTarget,e=n.closest(".sotp-widget"),r=n.closest(".input-box-content"),i=r.querySelectorAll(".country-selector-list li");i.length>0&&i.forEach((function(t){t.classList.remove("active")}));n.getAttribute("data-dial-code");var o=n.getAttribute("data-country-code");e.setAttribute("data-selected-country",o);var d=r.querySelectorAll(".selected-country .country-flag");d.length>0&&d.forEach((function(t){t.className="country-flag "+o})),i.length>0&&i.forEach((function(t){t.getAttribute("data-country-code")==o&&t.classList.add("active")}));var a=r.querySelector(".country-selector-list");a&&a.classList.remove("active")}))})),document.addEventListener("wheel",(function(t){"number"===document.activeElement.type&&document.elementFromPoint(t.x,t.y)==document.activeElement&&document.activeElement.blur()}))})),vn(this,"setInputEvent",(function(){var t=n.events,e=document.querySelectorAll(".update-user-email-input"),r=document.querySelectorAll(".update-user-box input");r.length>0&&r.forEach((function(n){t.forEach((function(t){n.addEventListener(t,(function(t){var n=t.currentTarget,e=n.value;e&&e.length>0?n.classList.add("is-filled"):n.classList.remove("is-filled")}))}))})),t.forEach((function(t){e.forEach((function(n){n.addEventListener(t,(function(t){n.closest(".sotp-widget").querySelector(".error-message").classList.add("hideBox")}))}))}))})),vn(this,"skipNowHandler",(function(){n.showLoader(parent),n.otpAction("updateEmail",parent)})),vn(this,"updateUserHandler",(function(t){n.showLoader(t),n.otpAction("updateEmail",t)})),vn(this,"verifyOtpHandler",(function(t){var e=t.querySelector(".otp-input-main"),r=Number(t.getAttribute("data-otp-total-attempt"));r++,t.setAttribute("data-otp-total-attempt",r),e.value.length<4?n.showToastBox(t,"Please enter OTP",!1):(n.showLoader(t),n.otpAction("verifyOTP",t))})),vn(this,"sendLoginOTP",(function(t,e,r,i){i={data:e=JSON.stringify(e),action:t},n.requestHandler(r,i,n.responseHandler)})),vn(this,"sendOtp",(function(t,e,r){var i=r.querySelector(".verify-otp-id");r.querySelector(".verify-box").classList.remove("hideBox"),r.querySelector(".update-user-box").classList.add("hideBox"),r.querySelector(".login-box").classList.add("hideBox"),i.setAttribute("value",t.data.otpId),n.session_otp_id=t.data.otpId;var o=r.querySelector(".otp-input-main");if(t.data.otpLength){var d;d=t.data.otpLength,o.setAttribute("maxlength",d),o.className=o.className+" otp"+d}r.setAttribute("data-resend-otp",!1),n.showToastBox(r,t.message,!0)})),vn(this,"countDownStart",(function(t){var e=n,r=t.querySelector(".count-down-otp"),i=t.querySelector(".resend-btn");i.classList.add("disabled"),r.classList.remove("hideBox");var o,d=simplyOtp.settings.resendTime;o=setInterval((function(){d>=0?(r.innerHTML=d<10?"00:0"+d:"00:"+d,d--):(clearInterval(o),d=0,r.innerHTML="00:00",i.classList.remove("disabled"),r.classList.add("hideBox")),e.stopTimer=function(){o&&(clearInterval(o),d=0,r.innerHTML="00:00",i.classList.remove("disabled"),r.classList.add("hideBox"))}}),1e3)})),vn(this,"resendOtpHandler",(function(t){n.showLoader(t),n.otpAction("resendOTP",t),n.manageOTPBox(t,!0),t.querySelector(".resend-otp").classList.add("hideBox"),t.setAttribute("data-resend-otp",!0)})),vn(this,"goBack",(function(t){n.stopTimer(t);var e=t.querySelector(".otp-input-main"),r=t.querySelector(".verify-btn");t.setAttribute("data-resend-otp",!1),t.querySelector(".resend-otp").classList.remove("hideBox"),e.removeAttribute("disabled"),r.removeAttribute("disabled"),t.setAttribute("data-otp-total-attempt",0);n.updateActiveOption(t).activeInput;t.querySelector(".login-box").classList.remove("hideBox"),t.querySelector(".verify-box").classList.add("hideBox"),n.manageOTPBox(t,!0)})),vn(this,"manageOTPBox",(function(t,e){var r=t.querySelector(".otp-input-main"),i=t.querySelector(".verify-btn");0==e?(r.value="",r.disabled=!0,i.disabled=!0,i.classList.add("hideBox"),n.stopTimer(t),t.getAttribute("data-resend-otp")&&n.goBack(t)):(r.removeAttribute("disabled"),i.removeAttribute("disabled"),i.classList.remove("hideBox"))})),vn(this,"updateActiveOption",(function(t){var n=t.querySelector(".input-box-content.active .user-name-input"),e=n.parentElement.getAttribute("data-current");return{activeInput:n,activeType:e}})),vn(this,"validateUserName",(function(t,n){var e="",r=!1;switch(n){case"mobile":case"whatsapp":r=!0,!1===function(){return w(un,arguments)}(t).isValid()&&(e="Please enter valid mobile number",r=!1);break;case"email":t.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?r=!0:(e="Please enter valid email id",r=!1);break;default:r=!1,e=""}return{flag:r,msg:e}})),vn(this,"fetchDomainURI",(function(){return window.location.port.length,window.location.host})),vn(this,"base64url",(function(t){return CryptoJS.enc.Base64.stringify(t).replace(/=+$/,"").replace(/\//g,"_")})),vn(this,"closeToastBox",(function(){var t=document.querySelectorAll(".toast-box-wrapper");t.length>0&&t.forEach((function(t){t.remove()}))})),vn(this,"showToastBox",(function(t,e,r,o){var d=r?"success":"error",a=document.createElement("div");a.setAttribute("class","toast-box-wrapper");var c='<div class="toast-content">\n    <div class="toast-card '.concat(d,'">\n    <div class="toast-icon-wrapper">\n    ').concat("success"==d?'\n    <svg class="feather feather-check" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>\n':'\n    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 413.348 413.348" fill="red"><path d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>\n','\n    </div>\n    <div class="toast-card-content">\n    <h6 class="toast-title">').concat(e,'</h6>\n    {{description}}\n    </div>\n    <span class="toast-close-icon">\n    ').concat(i,"\n    </span>\n    </div>\n    </div>\n    "),u="";o&&(u='<p class="toast-description">'.concat(o,"</p>")),c=c.replaceAll("{{description}}",u),a.innerHTML=c,n.closeToastBox();var s,l,f=t.querySelector(".step-box-wrapper:not(.hideBox) button");f&&(s=a,(l=f).parentNode.insertBefore(s,l.nextSibling)),a.classList.add("active");var $=document.querySelector(".toast-card .toast-close-icon");$&&$.addEventListener("click",(function(){return n.closeToastBox()})),setTimeout(n.closeToastBox,4e3)})),vn(this,"errorHandler",(function(t){n.showToastBox(t,"Something went wrong!",!1)})),vn(this,"requestHandler",(function(t,e,r){var i="".concat(n.appUrl),o=simplyOtp.permanentDomain,d=e.data,a=e.action;fetch(i,{method:"POST",headers:{"Content-Type":"application/json",shop_name:o,action:a},body:d}).then((function(t){return t.json()})).then((function(n){r(n,a,t)})).catch((function(e){console.log(e),n.errorHandler(t),n.hideLoader(t)}))})),vn(this,"updateEmail",(function(t,e,r){r.querySelector(".verify-box").classList.add("hideBox"),r.querySelector(".update-user-box").classList.remove("hideBox"),r.querySelector(".login-box").classList.add("hideBox"),t.data.redirect_url.includes("/account/activate")?n.performAccountActivateAction(t.data.redirect_url):n.performLoginAction(t.data.redirect_url)})),vn(this,"performLoginAction",(function(t){try{var e=new URL(t).searchParams.get("logintoken").split(".")[1].replace("-","+").replace("_","/"),r=decodeURIComponent(atob(e).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join("")),i=JSON.parse(r);if(document.body.dispatchEvent(new Event("sotp.login")),i.jti&&i.iss){var o=i.jti,d=i.iss;n.createLoginFormAndSubmit(o,d)}else window.location=t}catch(n){console.log(n),window.location=t}})),vn(this,"performAccountActivateAction",(function(t){try{var n=new URL(t).pathname.split("/"),e=(new Date).getTime().toString(),r=new URLSearchParams;r.append("form_type","activate_customer_password"),r.append("utf8","✓"),r.append("customer[password]",e),r.append("customer[password_confirmation]",e),r.append("token",n.pop()),r.append("id",n.pop());var i={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:r};fetch("".concat(location.origin,"/account/activate"),i).then((function(t){return t.text()})).then((function(t){return window.location="".concat(location.origin,"/account")})).catch((function(n){console.log("error",n),window.location=t}))}catch(n){console.log(n),window.location=t}})),vn(this,"createLoginFormAndSubmit",(function(t,e){if(document.getElementById("otp-original-email").value=t,document.getElementById("otp-original-password").value=e,simplyOtp.settings.goKwik&&n.checkout_url.includes("checkout"))document.getElementById("otp-return_to").value=location.origin+"/account/login#ref=gokwik",document.getElementsByName("checkout_url").forEach((function(t){t.remove()}));else if(""!=n.checkout_url){var r=n.checkout_url;document.getElementsByName("return_url").forEach((function(t){t.value=r}))}else document.getElementById("otp-return_to")&&document.getElementById("otp-return_to").remove();document.getElementById("sotp-form").submit()})),vn(this,"resendOtp",(function(t,e,r){var i=r.querySelector(".verify-otp-id");t.data.otpId&&i.setAttribute("value",t.data.otpId),n.showToastBox(r,t.message,!0)})),vn(this,"responseHandler",(function(t,e,r){n.hideLoader(r);var i=r.querySelector(".verify-otp-id");if(window.simplyOtp.resetCaptchToken(),200===t.status)"verifyOTP"==e?n.verifyOtp(t,e,r):"sendOTP"==e?n.sendOtp(t,e,r):"updateEmail"==e?n.updateEmail(t,e,r):"resendOTP"==e?n.resendOtp(t,e,r):n.showToastBox(r,t.message,!0);else if("updateEmail"==e)n.showToastBox(r,t.message,!1);else if("verifyOTP"!=e)n.showToastBox(r,t.message,!0),t.data&&t.data.otpId&&i.setAttribute("value",t.data.otpId);else{if("10001"===t.status_code)n.showToastBox(r,t.message,!1);else r.querySelector(".otp-input-main").value="",Number(r.getAttribute("data-otp-total-attempt"))>=n.totalAttemptWithSendOTP&&n.manageOTPBox(r,!1),n.showToastBox(r,"Please enter correct OTP",!1)}})),vn(this,"verifyOtp",(function(t,e,r){r.querySelector(".verify-box").classList.add("hideBox"),r.querySelector(".login-box").classList.add("hideBox");var i=t.data.email,o=t.data.phone,d=t.data.firstName,a=t.data.lastName;if(simplyOtp.settings.onlyOTPNoLogin){document.body.dispatchEvent(new Event("sotp.login"));var c={email:i,phone:o,firstName:d,lastName:a};simplyOtp.loginEvent(c)}else if(t.data.multipass_url){var u={email:i,phone:o,firstName:d,lastName:a};document.body.dispatchEvent(new Event("sotp.login")),simplyOtp.loginEvent(u),window.location=t.data.multipass_url}else if(t.data.redirect_url){var s={email:i,phone:o,firstName:d,lastName:a};document.body.dispatchEvent(new Event("sotp.login")),simplyOtp.loginEvent(s),t.data.redirect_url.includes("/account/activate")?n.performAccountActivateAction(t.data.redirect_url):n.performLoginAction(t.data.redirect_url)}else{var l=r.querySelector(".update-user-first-name-input"),f=r.querySelector(".update-user-last-name-input"),$=r.querySelector(".update-user-email-input"),p=r.querySelector(".update-user-box input[name='phone']");""!=o&&null!==o||($.value=i,$.classList.add("is-filled"));var h=l,v=f;d&&(h.value=d,h.classList.add("is-filled")),a&&(v.value=a,v.classList.add("is-filled")),""==o||null===o?$.disabled=!0:(p.type="text",p.value=o,p.classList.add("is-filled"),r.querySelector(".update-user-box .country-selector-main").classList.add("hideBox"),p.disabled=!0),r.querySelector(".otp-id").value=n.session_otp_id;var y=r.querySelector(".skip-btn");y&&y.classList.add("hideBox"),simplyOtp.settings.skipPage3?($.value=i,$.classList.add("is-filled"),r.querySelector(".update-btn").click(),n.showLoader()):(r.querySelector(".update-user-box").classList.remove("hideBox"),document.body.dispatchEvent(new Event("sotp.register")))}})),vn(this,"otpAction",function(){var t=$n(ln().mark((function t(e,r){var i,o,d,a,c,u,s,l,f,$,p,h,v,y,g,m,b,w,x,S,O,E,_,P,A,C,L,T,N,I;return ln().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=n.updateActiveOption(r),o=i.activeInput.value,d=i.activeType,a=simplyOtp.permanentDomain,s="",f="",$=new URLSearchParams(window.location.search),p=Object.fromEntries($.entries()),"email"!=d&&(f=n.getDialCode(r),o=f+parseInt(o)),h=p.checkout_url?p.checkout_url:"",n.settings.pageUrl&&(h=n.settings.pageUrl),n.checkout_url=h,"sendOTP"==e?(v={username:o,type:d,domain:n.fetchDomainURI(),recaptcha_token:n.firebaseToken},window.grecaptcha&&window.grecaptcha.enterprise&&simplyOtp.otp_widgets.recaptcha_enabled?simplyOtp.otp_widgets.challange_capcha_enabled?(v.token=window.simplyOtp.captchToken,n.sendLoginOTP(e,v,r,l)):grecaptcha.enterprise.ready($n(ln().mark((function t(){var i;return ln().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,grecaptcha.enterprise.execute("6LevdnMpAAAAAGszDiDJUl-nvE5alsE1x3sOgw-R",{action:"simply_otp_login"});case 2:i=t.sent,v.token=i,n.sendLoginOTP(e,v,r,l);case 5:case"end":return t.stop()}}),t)})))):n.sendLoginOTP(e,v,r,l)):"verifyOTP"==e?(c=r.querySelector(".verify-otp-id").value,g=r.querySelector(".otp-input-main"),m=g.value,u=m,s=JSON.stringify({username:o,otp:u,type:d,otp_id:c,multipass_enabled:n.settings.multipass_enabled,checkout_url:h,force_update_profile:null===(y=n.settings.forceUpdateProfile)||void 0===y||y,domain:n.fetchDomainURI()}),l={data:s,action:e},n.requestHandler(r,l,n.responseHandler)):"resendOTP"==e?(s={username:o,type:d,domain:n.fetchDomainURI(),recaptcha_token:n.firebaseToken},window.grecaptcha&&window.grecaptcha.enterprise&&simplyOtp.otp_widgets.recaptcha_enabled?simplyOtp.otp_widgets.challange_capcha_enabled?(s.token=window.simplyOtp.captchToken,n.sendLoginOTP(e,s,r,l)):grecaptcha.enterprise.ready($n(ln().mark((function t(){var i;return ln().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,grecaptcha.enterprise.execute("6LevdnMpAAAAAGszDiDJUl-nvE5alsE1x3sOgw-R",{action:"simply_otp_login"});case 2:i=t.sent,s.token=i,n.sendLoginOTP(e,s,r,l);case 5:case"end":return t.stop()}}),t)})))):n.sendLoginOTP(e,s,r,l)):"updateEmail"==e&&(b=r.querySelector(".otp-id").value,w=r.querySelector(".update-user-first-name-input"),x=r.querySelector(".update-user-last-name-input"),S=r.querySelector(".update-user-email-input"),O=r.querySelector(".update-user-box input[name='phone']"),E=w.value,_=x.value,P=S.value,A=O.value,O.disabled||(C=n.getDialCode(r),A&&(A=C+A)),L=r.querySelector(".update-user-box .marketing-option"),T=!0,L&&0==L.checked&&(T=!1),N=[],r.querySelectorAll(".custom_field select, .custom_field input").forEach((function(t){""!==t.value&&N.push(vn({},t.name,t.value))})),s=JSON.stringify({otp_id:b,store_url:a,first_name:E,last_name:_,phone_no:A,email:P,checkout_url:h,accept_email_marketing:T,accept_sms_marketing:T,accept_whatsapp_marketing:T,domain:n.fetchDomainURI(),custom_fields:N}),l={data:s,action:e},I={email:P,phone:A,firstName:E,lastName:_},document.body.dispatchEvent(new Event("sotp.register")),simplyOtp.signUpEvent(I),n.requestHandler(r,l,n.responseHandler));case 13:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()),vn(this,"showLoader",(function(t){var n=t.querySelector(".small-otp-loader"),e=t.querySelector(".loader-innerDiv");n&&e&&(n.style.display="block",e.style.display="block")})),vn(this,"hideLoader",(function(t){var n=t.querySelector(".small-otp-loader"),e=t.querySelector(".loader-innerDiv");n.style.display="none",e.style.display="none"})),vn(this,"getDialCode",(function(t){var e="",r=t.getAttribute("data-selected-country");if(r||(r=n.selectedCountry),t.querySelector('.country-selector-list li[data-country-code="'.concat(r,'"]'))){var i=t.querySelector('.country-selector-list li[data-country-code="'.concat(r,'"]')).getAttribute("data-dial-code");i&&(e="+"+i)}return e})),vn(this,"updateMobile",(function(t,e){var r=t.querySelector(".user-details"),i=n.getDialCode(t),o=e.activeInput.value;o.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?r.innerHTML="".concat(o):r.innerHTML="".concat(i," ").concat(o)})),vn(this,"generateFireBaseToken",(function(t){})),vn(this,"sendOtpHandler",(function(t){console.log("error msg remain");var e=n.updateActiveOption(t),r=e.activeInput.value,i="";"email"!=e.activeType&&(r=n.getDialCode(t)+parseInt(r));var o=n.validateUserName(r,e.activeType,t);if(!o||!o.flag)return i=o.msg,void n.showToastBox(t,i,!1);n.showLoader(t),n.otpAction("sendOTP",t),n.updateMobile(t,e),n.showOtpBox(t,e)})),vn(this,"showOtpBox",(function(t,e){t.querySelector(".otp-input-main").value="",t.querySelector(".login-box").classList.add("hideBox"),t.querySelector(".verify-box").classList.remove("hideBox");var r=t.querySelector(".verify-box-details span");if(n.countDownStart(t),r){var i="Mobile number";switch(e.activeType){case"whatsapp":i="Whatsapp number";break;case"email":i="Email id"}r.textContent=i}n.showLoader(t)})),this.version="5",this.appUrl="https://omqkhavcch.execute-api.ap-south-1.amazonaws.com/simplyotplogin/v"+this.version+"/otp",this.checkout_url="",this.session_otp_id="",window.simplyOtp=window.simplyOtp||{},this.selectedCountry=null|simplyOtp.settings.selectedCountry,this.events=["paste","keydown","keypress","keyup","onchange"],this.settings=simplyOtp.settings,this.firebaseToken="",this.recaptchaVerifier=null,this.recaptchaVerifierComponent=1,this.totalAttemptWithSendOTP=2,this.createLoginForm(),this.clickEvents(),this.setInputEvent(),this.setDefaultSelectedCountry(),simplyOtp.popupEnable&&(this.popupClickEvent(),simplyOtp.openPopup=function(){n.popUpCloseOpen(!0)},simplyOtp.closePopup=function(){n.popUpCloseOpen(!1)})}));window.simplyOtp.initializeSimplyOtp=function(){new m,window.simplyOtp.initializeCss();var t=document.getElementById("myCss"),n=document.querySelectorAll(".olWrapper");if(t&&n.length>0&&(n.forEach((function(t){return t.style.display="flex"})),new gn),simplyOtp.otp_widgets&&simplyOtp.otp_widgets.recaptcha_enabled){var e=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",simplyOtp.otp_widgets.challange_capcha_enabled?(r.src="https://www.google.com/recaptcha/enterprise.js?onload=onloadCallback&render=explicit",document.querySelector(".send-btn").disabled=!0,document.querySelector(".send-btn").style.cursor="not-allowed"):r.src="https://www.google.com/recaptcha/enterprise.js?render=6LevdnMpAAAAAGszDiDJUl-nvE5alsE1x3sOgw-R",e.appendChild(r)}window.simplyOtp.captchTokenCallback=function(t){window.simplyOtp.captchToken=t,document.querySelector(".send-btn").disabled=!1,document.querySelector(".send-btn").style.cursor=""},window.simplyOtp.resetCaptchToken=function(){window.grecaptcha&&grecaptcha.enterprise&&simplyOtp.otp_widgets.challange_capcha_enabled&&(grecaptcha.enterprise.reset(),document.querySelector(".send-btn").disabled=!0,document.querySelector(".send-btn").style.cursor="not-allowed")}},setTimeout((function(){window.simplyOtp.initializeSimplyOtp()}),1e3)}]);






!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 122));
})([
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "d", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return o;
        }),
        n.d(t, "f", function () {
          return E;
        }),
        n.d(t, "g", function () {
          return b;
        }),
        n.d(t, "h", function () {
          return I;
        }),
        n.d(t, "i", function () {
          return k;
        }),
        n.d(t, "j", function () {
          return c;
        }),
        n.d(t, "k", function () {
          return l;
        }),
        n.d(t, "l", function () {
          return y;
        }),
        n.d(t, "m", function () {
          return d;
        }),
        n.d(t, "n", function () {
          return f;
        }),
        n.d(t, "o", function () {
          return u;
        }),
        n.d(t, "p", function () {
          return h;
        }),
        n.d(t, "q", function () {
          return _;
        }),
        n.d(t, "r", function () {
          return S;
        }),
        n.d(t, "s", function () {
          return p;
        });
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      const r = function (e) {
          const t = [];
          let n = 0;
          for (let r = 0; r < e.length; r++) {
            let i = e.charCodeAt(r);
            i < 128
              ? (t[n++] = i)
              : i < 2048
              ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
              : 55296 == (64512 & i) &&
                r + 1 < e.length &&
                56320 == (64512 & e.charCodeAt(r + 1))
              ? ((i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r))),
                (t[n++] = (i >> 18) | 240),
                (t[n++] = ((i >> 12) & 63) | 128),
                (t[n++] = ((i >> 6) & 63) | 128),
                (t[n++] = (63 & i) | 128))
              : ((t[n++] = (i >> 12) | 224),
                (t[n++] = ((i >> 6) & 63) | 128),
                (t[n++] = (63 & i) | 128));
          }
          return t;
        },
        i = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray(e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              r = [];
            for (let t = 0; t < e.length; t += 3) {
              const i = e[t],
                o = t + 1 < e.length,
                s = o ? e[t + 1] : 0,
                a = t + 2 < e.length,
                c = a ? e[t + 2] : 0,
                u = i >> 2,
                l = ((3 & i) << 4) | (s >> 4);
              let h = ((15 & s) << 2) | (c >> 6),
                d = 63 & c;
              a || ((d = 64), o || (h = 64)), r.push(n[u], n[l], n[h], n[d]);
            }
            return r.join("");
          },
          encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(r(e), t);
          },
          decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : (function (e) {
                  const t = [];
                  let n = 0,
                    r = 0;
                  for (; n < e.length; ) {
                    const i = e[n++];
                    if (i < 128) t[r++] = String.fromCharCode(i);
                    else if (i > 191 && i < 224) {
                      const o = e[n++];
                      t[r++] = String.fromCharCode(((31 & i) << 6) | (63 & o));
                    } else if (i > 239 && i < 365) {
                      const o =
                        (((7 & i) << 18) |
                          ((63 & e[n++]) << 12) |
                          ((63 & e[n++]) << 6) |
                          (63 & e[n++])) -
                        65536;
                      (t[r++] = String.fromCharCode(55296 + (o >> 10))),
                        (t[r++] = String.fromCharCode(56320 + (1023 & o)));
                    } else {
                      const o = e[n++],
                        s = e[n++];
                      t[r++] = String.fromCharCode(
                        ((15 & i) << 12) | ((63 & o) << 6) | (63 & s)
                      );
                    }
                  }
                  return t.join("");
                })(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray(e, t) {
            this.init_();
            const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              r = [];
            for (let t = 0; t < e.length; ) {
              const i = n[e.charAt(t++)],
                o = t < e.length ? n[e.charAt(t)] : 0;
              ++t;
              const s = t < e.length ? n[e.charAt(t)] : 64;
              ++t;
              const a = t < e.length ? n[e.charAt(t)] : 64;
              if ((++t, null == i || null == o || null == s || null == a))
                throw Error();
              const c = (i << 2) | (o >> 4);
              if ((r.push(c), 64 !== s)) {
                const e = ((o << 4) & 240) | (s >> 2);
                if ((r.push(e), 64 !== a)) {
                  const e = ((s << 6) & 192) | a;
                  r.push(e);
                }
              }
            }
            return r;
          },
          init_() {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (let e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e),
                  e >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          },
        },
        o = function (e) {
          return (function (e) {
            const t = r(e);
            return i.encodeByteArray(t, !0);
          })(e).replace(/\./g, "");
        },
        s = function (e) {
          try {
            return i.decodeString(e, !0);
          } catch (e) {
            console.error("base64Decode failed: ", e);
          }
          return null;
        };
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      class a {
        constructor() {
          (this.reject = () => {}),
            (this.resolve = () => {}),
            (this.promise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        wrapCallback(e) {
          return (t, n) => {
            t ? this.reject(t) : this.resolve(n),
              "function" == typeof e &&
                (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, n));
          };
        }
      }
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function c() {
        return "undefined" != typeof navigator &&
          "string" == typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      function u() {
        return (
          "undefined" != typeof window &&
          !!(window.cordova || window.phonegap || window.PhoneGap) &&
          /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())
        );
      }
      function l() {
        const e =
          "object" == typeof chrome
            ? chrome.runtime
            : "object" == typeof browser
            ? browser.runtime
            : void 0;
        return "object" == typeof e && void 0 !== e.id;
      }
      function h() {
        return (
          "object" == typeof navigator && "ReactNative" === navigator.product
        );
      }
      function d() {
        const e = c();
        return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
      }
      function f() {
        return "object" == typeof indexedDB;
      }
      function p() {
        return new Promise((e, t) => {
          try {
            let n = !0;
            const r = "validate-browser-context-for-indexeddb-analytics-module",
              i = self.indexedDB.open(r);
            (i.onsuccess = () => {
              i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
            }),
              (i.onupgradeneeded = () => {
                n = !1;
              }),
              (i.onerror = () => {
                var e;
                t(
                  (null === (e = i.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (e) {
            t(e);
          }
        });
      }
      class v extends Error {
        constructor(e, t, n) {
          super(t),
            (this.code = e),
            (this.customData = n),
            (this.name = "FirebaseError"),
            Object.setPrototypeOf(this, v.prototype),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, g.prototype.create);
        }
      }
      class g {
        constructor(e, t, n) {
          (this.service = e), (this.serviceName = t), (this.errors = n);
        }
        create(e, ...t) {
          const n = t[0] || {},
            r = `${this.service}/${e}`,
            i = this.errors[e],
            o = i
              ? (function (e, t) {
                  return e.replace(m, (e, n) => {
                    const r = t[n];
                    return null != r ? String(r) : `<${n}?>`;
                  });
                })(i, n)
              : "Error",
            s = `${this.serviceName}: ${o} (${r}).`;
          return new v(r, s, n);
        }
      }
      const m = /\{\$([^}]+)}/g;
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function y(e) {
        for (const t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      function b(e, t) {
        if (e === t) return !0;
        const n = Object.keys(e),
          r = Object.keys(t);
        for (const i of n) {
          if (!r.includes(i)) return !1;
          const n = e[i],
            o = t[i];
          if (w(n) && w(o)) {
            if (!b(n, o)) return !1;
          } else if (n !== o) return !1;
        }
        for (const e of r) if (!n.includes(e)) return !1;
        return !0;
      }
      function w(e) {
        return null !== e && "object" == typeof e;
      }
      /**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function _(e) {
        const t = [];
        for (const [n, r] of Object.entries(e))
          Array.isArray(r)
            ? r.forEach((e) => {
                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e));
              })
            : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
        return t.length ? "&" + t.join("&") : "";
      }
      function S(e) {
        const t = {};
        return (
          e
            .replace(/^\?/, "")
            .split("&")
            .forEach((e) => {
              if (e) {
                const [n, r] = e.split("=");
                t[decodeURIComponent(n)] = decodeURIComponent(r);
              }
            }),
          t
        );
      }
      function I(e) {
        const t = e.indexOf("?");
        if (!t) return "";
        const n = e.indexOf("#", t);
        return e.substring(t, n > 0 ? n : void 0);
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ function E(e, t) {
        const n = new O(e, t);
        return n.subscribe.bind(n);
      }
      class O {
        constructor(e, t) {
          (this.observers = []),
            (this.unsubscribes = []),
            (this.observerCount = 0),
            (this.task = Promise.resolve()),
            (this.finalized = !1),
            (this.onNoObservers = t),
            this.task
              .then(() => {
                e(this);
              })
              .catch((e) => {
                this.error(e);
              });
        }
        next(e) {
          this.forEachObserver((t) => {
            t.next(e);
          });
        }
        error(e) {
          this.forEachObserver((t) => {
            t.error(e);
          }),
            this.close(e);
        }
        complete() {
          this.forEachObserver((e) => {
            e.complete();
          }),
            this.close();
        }
        subscribe(e, t, n) {
          let r;
          if (void 0 === e && void 0 === t && void 0 === n)
            throw new Error("Missing Observer.");
          (r = (function (e, t) {
            if ("object" != typeof e || null === e) return !1;
            for (const n of t)
              if (n in e && "function" == typeof e[n]) return !0;
            return !1;
          })(e, ["next", "error", "complete"])
            ? e
            : { next: e, error: t, complete: n }),
            void 0 === r.next && (r.next = T),
            void 0 === r.error && (r.error = T),
            void 0 === r.complete && (r.complete = T);
          const i = this.unsubscribeOne.bind(this, this.observers.length);
          return (
            this.finalized &&
              this.task.then(() => {
                try {
                  this.finalError ? r.error(this.finalError) : r.complete();
                } catch (e) {}
              }),
            this.observers.push(r),
            i
          );
        }
        unsubscribeOne(e) {
          void 0 !== this.observers &&
            void 0 !== this.observers[e] &&
            (delete this.observers[e],
            (this.observerCount -= 1),
            0 === this.observerCount &&
              void 0 !== this.onNoObservers &&
              this.onNoObservers(this));
        }
        forEachObserver(e) {
          if (!this.finalized)
            for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
        }
        sendOne(e, t) {
          this.task.then(() => {
            if (void 0 !== this.observers && void 0 !== this.observers[e])
              try {
                t(this.observers[e]);
              } catch (e) {
                "undefined" != typeof console &&
                  console.error &&
                  console.error(e);
              }
          });
        }
        close(e) {
          this.finalized ||
            ((this.finalized = !0),
            void 0 !== e && (this.finalError = e),
            this.task.then(() => {
              (this.observers = void 0), (this.onNoObservers = void 0);
            }));
        }
      }
      function T() {}
      /**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      /**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      function k(e) {
        return e && e._delegate ? e._delegate : e;
      }
    }).call(this, n(310));
  },
  function (e, t, n) {
    var r = n(2),
      i = n(8),
      o = n(15),
      s = n(12),
      a = n(18),
      c = function (e, t, n) {
        var u,
          l,
          h,
          d,
          f = e & c.F,
          p = e & c.G,
          v = e & c.S,
          g = e & c.P,
          m = e & c.B,
          y = p ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
          b = p ? i : i[t] || (i[t] = {}),
          w = b.prototype || (b.prototype = {});
        for (u in (p && (n = t), n))
          (h = ((l = !f && y && void 0 !== y[u]) ? y : n)[u]),
            (d =
              m && l
                ? a(h, r)
                : g && "function" == typeof h
                ? a(Function.call, h)
                : h),
            y && s(y, u, h, e & c.U),
            b[u] != h && o(b, u, d),
            g && w[u] != h && (w[u] = h);
      };
    (r.core = i),
      (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var r = n(5);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t, n) {
    var r = n(49)("wks"),
      i = n(30),
      o = n(2).Symbol,
      s = "function" == typeof o;
    (e.exports = function (e) {
      return r[e] || (r[e] = (s && o[e]) || (s ? o : i)("Symbol." + e));
    }).store = r;
  },
  function (e, t, n) {
    var r = n(20),
      i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    var n = (e.exports = { version: "2.6.12" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t, n) {
    e.exports = !n(3)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t, n) {
    var r = n(4),
      i = n(89),
      o = n(27),
      s = Object.defineProperty;
    t.f = n(9)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return s(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var r = n(25);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  function (e, t, n) {
    var r = n(2),
      i = n(15),
      o = n(14),
      s = n(30)("src"),
      a = n(127),
      c = ("" + a).split("toString");
    (n(8).inspectSource = function (e) {
      return a.call(e);
    }),
      (e.exports = function (e, t, n, a) {
        var u = "function" == typeof n;
        u && (o(n, "name") || i(n, "name", t)),
          e[t] !== n &&
            (u && (o(n, s) || i(n, s, e[t] ? "" + e[t] : c.join(String(t)))),
            e === r
              ? (e[t] = n)
              : a
              ? e[t]
                ? (e[t] = n)
                : i(e, t, n)
              : (delete e[t], i(e, t, n)));
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && this[s]) || a.call(this);
      });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(3),
      o = n(25),
      s = /"/g,
      a = function (e, t, n, r) {
        var i = String(o(e)),
          a = "<" + t;
        return (
          "" !== n &&
            (a += " " + n + '="' + String(r).replace(s, "&quot;") + '"'),
          a + ">" + i + "</" + t + ">"
        );
      };
    e.exports = function (e, t) {
      var n = {};
      (n[e] = t(a)),
        r(
          r.P +
            r.F *
              i(function () {
                var t = ""[e]('"');
                return t !== t.toLowerCase() || t.split('"').length > 3;
              }),
          "String",
          n
        );
    };
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(29);
    e.exports = n(9)
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(45),
      i = n(25);
    e.exports = function (e) {
      return r(i(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function (e, t) {
      return (
        !!e &&
        r(function () {
          t ? e.call(null, function () {}, 1) : e.call(null);
        })
      );
    };
  },
  function (e, t, n) {
    var r = n(19);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (e, t, n) {
    var r = n(46),
      i = n(29),
      o = n(16),
      s = n(27),
      a = n(14),
      c = n(89),
      u = Object.getOwnPropertyDescriptor;
    t.f = n(9)
      ? u
      : function (e, t) {
          if (((e = o(e)), (t = s(t, !0)), c))
            try {
              return u(e, t);
            } catch (e) {}
          if (a(e, t)) return i(!r.f.call(e, t), e[t]);
        };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(8),
      o = n(3);
    e.exports = function (e, t) {
      var n = (i.Object || {})[e] || Object[e],
        s = {};
      (s[e] = t(n)),
        r(
          r.S +
            r.F *
              o(function () {
                n(1);
              }),
          "Object",
          s
        );
    };
  },
  function (e, t, n) {
    var r = n(18),
      i = n(45),
      o = n(11),
      s = n(7),
      a = n(105);
    e.exports = function (e, t) {
      var n = 1 == e,
        c = 2 == e,
        u = 3 == e,
        l = 4 == e,
        h = 6 == e,
        d = 5 == e || h,
        f = t || a;
      return function (t, a, p) {
        for (
          var v,
            g,
            m = o(t),
            y = i(m),
            b = r(a, p, 3),
            w = s(y.length),
            _ = 0,
            S = n ? f(t, w) : c ? f(t, 0) : void 0;
          w > _;
          _++
        )
          if ((d || _ in y) && ((g = b((v = y[_]), _, m)), e))
            if (n) S[_] = g;
            else if (g)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return v;
                case 6:
                  return _;
                case 2:
                  S.push(v);
              }
            else if (l) return !1;
        return h ? -1 : u || l ? l : S;
      };
    };
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    if (n(9)) {
      var r = n(31),
        i = n(2),
        o = n(3),
        s = n(1),
        a = n(60),
        c = n(85),
        u = n(18),
        l = n(43),
        h = n(29),
        d = n(15),
        f = n(44),
        p = n(20),
        v = n(7),
        g = n(116),
        m = n(33),
        y = n(27),
        b = n(14),
        w = n(47),
        _ = n(5),
        S = n(11),
        I = n(77),
        E = n(34),
        O = n(36),
        T = n(35).f,
        k = n(79),
        x = n(30),
        A = n(6),
        P = n(23),
        L = n(50),
        C = n(48),
        N = n(81),
        R = n(41),
        M = n(53),
        D = n(42),
        j = n(80),
        F = n(107),
        B = n(10),
        U = n(21),
        q = B.f,
        V = U.f,
        H = i.RangeError,
        W = i.TypeError,
        z = i.Uint8Array,
        G = Array.prototype,
        K = c.ArrayBuffer,
        $ = c.DataView,
        J = P(0),
        Y = P(2),
        Z = P(3),
        X = P(4),
        Q = P(5),
        ee = P(6),
        te = L(!0),
        ne = L(!1),
        re = N.values,
        ie = N.keys,
        oe = N.entries,
        se = G.lastIndexOf,
        ae = G.reduce,
        ce = G.reduceRight,
        ue = G.join,
        le = G.sort,
        he = G.slice,
        de = G.toString,
        fe = G.toLocaleString,
        pe = A("iterator"),
        ve = A("toStringTag"),
        ge = x("typed_constructor"),
        me = x("def_constructor"),
        ye = a.CONSTR,
        be = a.TYPED,
        we = a.VIEW,
        _e = P(1, function (e, t) {
          return Te(C(e, e[me]), t);
        }),
        Se = o(function () {
          return 1 === new z(new Uint16Array([1]).buffer)[0];
        }),
        Ie =
          !!z &&
          !!z.prototype.set &&
          o(function () {
            new z(1).set({});
          }),
        Ee = function (e, t) {
          var n = p(e);
          if (n < 0 || n % t) throw H("Wrong offset!");
          return n;
        },
        Oe = function (e) {
          if (_(e) && be in e) return e;
          throw W(e + " is not a typed array!");
        },
        Te = function (e, t) {
          if (!_(e) || !(ge in e))
            throw W("It is not a typed array constructor!");
          return new e(t);
        },
        ke = function (e, t) {
          return xe(C(e, e[me]), t);
        },
        xe = function (e, t) {
          for (var n = 0, r = t.length, i = Te(e, r); r > n; ) i[n] = t[n++];
          return i;
        },
        Ae = function (e, t, n) {
          q(e, t, {
            get: function () {
              return this._d[n];
            },
          });
        },
        Pe = function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = S(e),
            c = arguments.length,
            l = c > 1 ? arguments[1] : void 0,
            h = void 0 !== l,
            d = k(a);
          if (null != d && !I(d)) {
            for (s = d.call(a), r = [], t = 0; !(o = s.next()).done; t++)
              r.push(o.value);
            a = r;
          }
          for (
            h && c > 2 && (l = u(l, arguments[2], 2)),
              t = 0,
              n = v(a.length),
              i = Te(this, n);
            n > t;
            t++
          )
            i[t] = h ? l(a[t], t) : a[t];
          return i;
        },
        Le = function () {
          for (var e = 0, t = arguments.length, n = Te(this, t); t > e; )
            n[e] = arguments[e++];
          return n;
        },
        Ce =
          !!z &&
          o(function () {
            fe.call(new z(1));
          }),
        Ne = function () {
          return fe.apply(Ce ? he.call(Oe(this)) : Oe(this), arguments);
        },
        Re = {
          copyWithin: function (e, t) {
            return F.call(
              Oe(this),
              e,
              t,
              arguments.length > 2 ? arguments[2] : void 0
            );
          },
          every: function (e) {
            return X(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function (e) {
            return j.apply(Oe(this), arguments);
          },
          filter: function (e) {
            return ke(
              this,
              Y(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0)
            );
          },
          find: function (e) {
            return Q(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function (e) {
            return ee(
              Oe(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          forEach: function (e) {
            J(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function (e) {
            return ne(
              Oe(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          includes: function (e) {
            return te(
              Oe(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          join: function (e) {
            return ue.apply(Oe(this), arguments);
          },
          lastIndexOf: function (e) {
            return se.apply(Oe(this), arguments);
          },
          map: function (e) {
            return _e(
              Oe(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          reduce: function (e) {
            return ae.apply(Oe(this), arguments);
          },
          reduceRight: function (e) {
            return ce.apply(Oe(this), arguments);
          },
          reverse: function () {
            for (
              var e, t = Oe(this).length, n = Math.floor(t / 2), r = 0;
              r < n;

            )
              (e = this[r]), (this[r++] = this[--t]), (this[t] = e);
            return this;
          },
          some: function (e) {
            return Z(Oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function (e) {
            return le.call(Oe(this), e);
          },
          subarray: function (e, t) {
            var n = Oe(this),
              r = n.length,
              i = m(e, r);
            return new (C(n, n[me]))(
              n.buffer,
              n.byteOffset + i * n.BYTES_PER_ELEMENT,
              v((void 0 === t ? r : m(t, r)) - i)
            );
          },
        },
        Me = function (e, t) {
          return ke(this, he.call(Oe(this), e, t));
        },
        De = function (e) {
          Oe(this);
          var t = Ee(arguments[1], 1),
            n = this.length,
            r = S(e),
            i = v(r.length),
            o = 0;
          if (i + t > n) throw H("Wrong length!");
          for (; o < i; ) this[t + o] = r[o++];
        },
        je = {
          entries: function () {
            return oe.call(Oe(this));
          },
          keys: function () {
            return ie.call(Oe(this));
          },
          values: function () {
            return re.call(Oe(this));
          },
        },
        Fe = function (e, t) {
          return (
            _(e) &&
            e[be] &&
            "symbol" != typeof t &&
            t in e &&
            String(+t) == String(t)
          );
        },
        Be = function (e, t) {
          return Fe(e, (t = y(t, !0))) ? h(2, e[t]) : V(e, t);
        },
        Ue = function (e, t, n) {
          return !(Fe(e, (t = y(t, !0))) && _(n) && b(n, "value")) ||
            b(n, "get") ||
            b(n, "set") ||
            n.configurable ||
            (b(n, "writable") && !n.writable) ||
            (b(n, "enumerable") && !n.enumerable)
            ? q(e, t, n)
            : ((e[t] = n.value), e);
        };
      ye || ((U.f = Be), (B.f = Ue)),
        s(s.S + s.F * !ye, "Object", {
          getOwnPropertyDescriptor: Be,
          defineProperty: Ue,
        }),
        o(function () {
          de.call({});
        }) &&
          (de = fe =
            function () {
              return ue.call(this);
            });
      var qe = f({}, Re);
      f(qe, je),
        d(qe, pe, je.values),
        f(qe, {
          slice: Me,
          set: De,
          constructor: function () {},
          toString: de,
          toLocaleString: Ne,
        }),
        Ae(qe, "buffer", "b"),
        Ae(qe, "byteOffset", "o"),
        Ae(qe, "byteLength", "l"),
        Ae(qe, "length", "e"),
        q(qe, ve, {
          get: function () {
            return this[be];
          },
        }),
        (e.exports = function (e, t, n, c) {
          var u = e + ((c = !!c) ? "Clamped" : "") + "Array",
            h = "get" + e,
            f = "set" + e,
            p = i[u],
            m = p || {},
            y = p && O(p),
            b = !p || !a.ABV,
            S = {},
            I = p && p.prototype,
            k = function (e, n) {
              q(e, n, {
                get: function () {
                  return (function (e, n) {
                    var r = e._d;
                    return r.v[h](n * t + r.o, Se);
                  })(this, n);
                },
                set: function (e) {
                  return (function (e, n, r) {
                    var i = e._d;
                    c &&
                      (r =
                        (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                      i.v[f](n * t + i.o, r, Se);
                  })(this, n, e);
                },
                enumerable: !0,
              });
            };
          b
            ? ((p = n(function (e, n, r, i) {
                l(e, p, u, "_d");
                var o,
                  s,
                  a,
                  c,
                  h = 0,
                  f = 0;
                if (_(n)) {
                  if (
                    !(
                      n instanceof K ||
                      "ArrayBuffer" == (c = w(n)) ||
                      "SharedArrayBuffer" == c
                    )
                  )
                    return be in n ? xe(p, n) : Pe.call(p, n);
                  (o = n), (f = Ee(r, t));
                  var m = n.byteLength;
                  if (void 0 === i) {
                    if (m % t) throw H("Wrong length!");
                    if ((s = m - f) < 0) throw H("Wrong length!");
                  } else if ((s = v(i) * t) + f > m) throw H("Wrong length!");
                  a = s / t;
                } else (a = g(n)), (o = new K((s = a * t)));
                for (
                  d(e, "_d", { b: o, o: f, l: s, e: a, v: new $(o) });
                  h < a;

                )
                  k(e, h++);
              })),
              (I = p.prototype = E(qe)),
              d(I, "constructor", p))
            : (o(function () {
                p(1);
              }) &&
                o(function () {
                  new p(-1);
                }) &&
                M(function (e) {
                  new p(), new p(null), new p(1.5), new p(e);
                }, !0)) ||
              ((p = n(function (e, n, r, i) {
                var o;
                return (
                  l(e, p, u),
                  _(n)
                    ? n instanceof K ||
                      "ArrayBuffer" == (o = w(n)) ||
                      "SharedArrayBuffer" == o
                      ? void 0 !== i
                        ? new m(n, Ee(r, t), i)
                        : void 0 !== r
                        ? new m(n, Ee(r, t))
                        : new m(n)
                      : be in n
                      ? xe(p, n)
                      : Pe.call(p, n)
                    : new m(g(n))
                );
              })),
              J(
                y !== Function.prototype ? T(m).concat(T(y)) : T(m),
                function (e) {
                  e in p || d(p, e, m[e]);
                }
              ),
              (p.prototype = I),
              r || (I.constructor = p));
          var x = I[pe],
            A = !!x && ("values" == x.name || null == x.name),
            P = je.values;
          d(p, ge, !0),
            d(I, be, u),
            d(I, we, !0),
            d(I, me, p),
            (c ? new p(1)[ve] == u : ve in I) ||
              q(I, ve, {
                get: function () {
                  return u;
                },
              }),
            (S[u] = p),
            s(s.G + s.W + s.F * (p != m), S),
            s(s.S, u, { BYTES_PER_ELEMENT: t }),
            s(
              s.S +
                s.F *
                  o(function () {
                    m.of.call(p, 1);
                  }),
              u,
              { from: Pe, of: Le }
            ),
            "BYTES_PER_ELEMENT" in I || d(I, "BYTES_PER_ELEMENT", t),
            s(s.P, u, Re),
            D(u),
            s(s.P + s.F * Ie, u, { set: De }),
            s(s.P + s.F * !A, u, je),
            r || I.toString == de || (I.toString = de),
            s(
              s.P +
                s.F *
                  o(function () {
                    new p(1).slice();
                  }),
              u,
              { slice: Me }
            ),
            s(
              s.P +
                s.F *
                  (o(function () {
                    return (
                      [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                    );
                  }) ||
                    !o(function () {
                      I.toLocaleString.call([1, 2]);
                    })),
              u,
              { toLocaleString: Ne }
            ),
            (R[u] = A ? x : P),
            r || A || d(I, pe, P);
        });
    } else e.exports = function () {};
  },
  function (e, t, n) {
    var r = n(5);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t, n) {
    var r = n(30)("meta"),
      i = n(5),
      o = n(14),
      s = n(10).f,
      a = 0,
      c =
        Object.isExtensible ||
        function () {
          return !0;
        },
      u = !n(3)(function () {
        return c(Object.preventExtensions({}));
      }),
      l = function (e) {
        s(e, r, { value: { i: "O" + ++a, w: {} } });
      },
      h = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function (e, t) {
          if (!i(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!o(e, r)) {
            if (!c(e)) return "F";
            if (!t) return "E";
            l(e);
          }
          return e[r].i;
        },
        getWeak: function (e, t) {
          if (!o(e, r)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            l(e);
          }
          return e[r].w;
        },
        onFreeze: function (e) {
          return u && h.NEED && c(e) && !o(e, r) && l(e), e;
        },
      });
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t, n) {
    var r = n(91),
      i = n(64);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, i);
      };
  },
  function (e, t, n) {
    var r = n(20),
      i = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(92),
      o = n(64),
      s = n(63)("IE_PROTO"),
      a = function () {},
      c = function () {
        var e,
          t = n(61)("iframe"),
          r = o.length;
        for (
          t.style.display = "none",
            n(65).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            c = e.F;
          r--;

        )
          delete c.prototype[o[r]];
        return c();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((a.prototype = r(e)),
              (n = new a()),
              (a.prototype = null),
              (n[s] = e))
            : (n = c()),
          void 0 === t ? n : i(n, t)
        );
      };
  },
  function (e, t, n) {
    var r = n(91),
      i = n(64).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return r(e, i);
      };
  },
  function (e, t, n) {
    var r = n(14),
      i = n(11),
      o = n(63)("IE_PROTO"),
      s = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = i(e)),
          r(e, o)
            ? e[o]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? s
            : null
        );
      };
  },
  function (e, t, n) {
    var r = n(6)("unscopables"),
      i = Array.prototype;
    null == i[r] && n(15)(i, r, {}),
      (e.exports = function (e) {
        i[r][e] = !0;
      });
  },
  function (e, t, n) {
    var r = n(5);
    e.exports = function (e, t) {
      if (!r(e) || e._t !== t)
        throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(10).f,
      i = n(14),
      o = n(6)("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !i((e = n ? e : e.prototype), o) &&
        r(e, o, { configurable: !0, value: t });
    };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(25),
      o = n(3),
      s = n(67),
      a = "[" + s + "]",
      c = RegExp("^" + a + a + "*"),
      u = RegExp(a + a + "*$"),
      l = function (e, t, n) {
        var i = {},
          a = o(function () {
            return !!s[e]() || "​" != "​"[e]();
          }),
          c = (i[e] = a ? t(h) : s[e]);
        n && (i[n] = c), r(r.P + r.F * a, "String", i);
      },
      h = (l.trim = function (e, t) {
        return (
          (e = String(i(e))),
          1 & t && (e = e.replace(c, "")),
          2 & t && (e = e.replace(u, "")),
          e
        );
      });
    e.exports = l;
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(10),
      o = n(9),
      s = n(6)("species");
    e.exports = function (e) {
      var t = r[e];
      o &&
        t &&
        !t[s] &&
        i.f(t, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(n + ": incorrect invocation!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(12);
    e.exports = function (e, t, n) {
      for (var i in t) r(e, i, t[i], n);
      return e;
    };
  },
  function (e, t, n) {
    var r = n(24);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  function (e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function (e, t, n) {
    var r = n(24),
      i = n(6)("toStringTag"),
      o =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    e.exports = function (e) {
      var t, n, s;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (n = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), i))
        ? n
        : o
        ? r(t)
        : "Object" == (s = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : s;
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(19),
      o = n(6)("species");
    e.exports = function (e, t) {
      var n,
        s = r(e).constructor;
      return void 0 === s || null == (n = r(s)[o]) ? t : i(n);
    };
  },
  function (e, t, n) {
    var r = n(8),
      i = n(2),
      o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: r.version,
      mode: n(31) ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t, n) {
    var r = n(16),
      i = n(7),
      o = n(33);
    e.exports = function (e) {
      return function (t, n, s) {
        var a,
          c = r(t),
          u = i(c.length),
          l = o(s, u);
        if (e && n != n) {
          for (; u > l; ) if ((a = c[l++]) != a) return !0;
        } else
          for (; u > l; l++)
            if ((e || l in c) && c[l] === n) return e || l || 0;
        return !e && -1;
      };
    };
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    var r = n(24);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == r(e);
      };
  },
  function (e, t, n) {
    var r = n(6)("iterator"),
      i = !1;
    try {
      var o = [7][r]();
      (o.return = function () {
        i = !0;
      }),
        Array.from(o, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !i) return !1;
      var n = !1;
      try {
        var o = [7],
          s = o[r]();
        (s.next = function () {
          return { done: (n = !0) };
        }),
          (o[r] = function () {
            return s;
          }),
          e(o);
      } catch (e) {}
      return n;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function () {
      var e = r(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(47),
      i = RegExp.prototype.exec;
    e.exports = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var o = n.call(e, t);
        if ("object" != typeof o)
          throw new TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== r(e))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return i.call(e, t);
    };
  },
  function (e, t, n) {
    "use strict";
    n(109);
    var r = n(12),
      i = n(15),
      o = n(3),
      s = n(25),
      a = n(6),
      c = n(82),
      u = a("species"),
      l = !o(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      h = (function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1];
      })();
    e.exports = function (e, t, n) {
      var d = a(e),
        f = !o(function () {
          var t = {};
          return (
            (t[d] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        p = f
          ? !o(function () {
              var t = !1,
                n = /a/;
              return (
                (n.exec = function () {
                  return (t = !0), null;
                }),
                "split" === e &&
                  ((n.constructor = {}),
                  (n.constructor[u] = function () {
                    return n;
                  })),
                n[d](""),
                !t
              );
            })
          : void 0;
      if (!f || !p || ("replace" === e && !l) || ("split" === e && !h)) {
        var v = /./[d],
          g = n(s, d, ""[e], function (e, t, n, r, i) {
            return t.exec === c
              ? f && !i
                ? { done: !0, value: v.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 };
          }),
          m = g[0],
          y = g[1];
        r(String.prototype, e, m),
          i(
            RegExp.prototype,
            d,
            2 == t
              ? function (e, t) {
                  return y.call(e, this, t);
                }
              : function (e) {
                  return y.call(e, this);
                }
          );
      }
    };
  },
  function (e, t, n) {
    var r = n(18),
      i = n(104),
      o = n(77),
      s = n(4),
      a = n(7),
      c = n(79),
      u = {},
      l = {};
    ((t = e.exports =
      function (e, t, n, h, d) {
        var f,
          p,
          v,
          g,
          m = d
            ? function () {
                return e;
              }
            : c(e),
          y = r(n, h, t ? 2 : 1),
          b = 0;
        if ("function" != typeof m) throw TypeError(e + " is not iterable!");
        if (o(m)) {
          for (f = a(e.length); f > b; b++)
            if ((g = t ? y(s((p = e[b]))[0], p[1]) : y(e[b])) === u || g === l)
              return g;
        } else
          for (v = m.call(e); !(p = v.next()).done; )
            if ((g = i(v, y, p.value, t)) === u || g === l) return g;
      }).BREAK = u),
      (t.RETURN = l);
  },
  function (e, t, n) {
    var r = n(2).navigator;
    e.exports = (r && r.userAgent) || "";
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(1),
      o = n(12),
      s = n(44),
      a = n(28),
      c = n(57),
      u = n(43),
      l = n(5),
      h = n(3),
      d = n(53),
      f = n(39),
      p = n(68);
    e.exports = function (e, t, n, v, g, m) {
      var y = r[e],
        b = y,
        w = g ? "set" : "add",
        _ = b && b.prototype,
        S = {},
        I = function (e) {
          var t = _[e];
          o(
            _,
            e,
            "delete" == e || "has" == e
              ? function (e) {
                  return !(m && !l(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : "get" == e
              ? function (e) {
                  return m && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                }
              : "add" == e
              ? function (e) {
                  return t.call(this, 0 === e ? 0 : e), this;
                }
              : function (e, n) {
                  return t.call(this, 0 === e ? 0 : e, n), this;
                }
          );
        };
      if (
        "function" == typeof b &&
        (m ||
          (_.forEach &&
            !h(function () {
              new b().entries().next();
            })))
      ) {
        var E = new b(),
          O = E[w](m ? {} : -0, 1) != E,
          T = h(function () {
            E.has(1);
          }),
          k = d(function (e) {
            new b(e);
          }),
          x =
            !m &&
            h(function () {
              for (var e = new b(), t = 5; t--; ) e[w](t, t);
              return !e.has(-0);
            });
        k ||
          (((b = t(function (t, n) {
            u(t, b, e);
            var r = p(new y(), t, b);
            return null != n && c(n, g, r[w], r), r;
          })).prototype = _),
          (_.constructor = b)),
          (T || x) && (I("delete"), I("has"), g && I("get")),
          (x || O) && I(w),
          m && _.clear && delete _.clear;
      } else
        (b = v.getConstructor(t, e, g, w)), s(b.prototype, n), (a.NEED = !0);
      return (
        f(b, e),
        (S[e] = b),
        i(i.G + i.W + i.F * (b != y), S),
        m || v.setStrong(b, e, g),
        b
      );
    };
  },
  function (e, t, n) {
    for (
      var r,
        i = n(2),
        o = n(15),
        s = n(30),
        a = s("typed_array"),
        c = s("view"),
        u = !(!i.ArrayBuffer || !i.DataView),
        l = u,
        h = 0,
        d =
          "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
            ","
          );
      h < 9;

    )
      (r = i[d[h++]])
        ? (o(r.prototype, a, !0), o(r.prototype, c, !0))
        : (l = !1);
    e.exports = { ABV: u, CONSTR: l, TYPED: a, VIEW: c };
  },
  function (e, t, n) {
    var r = n(5),
      i = n(2).document,
      o = r(i) && r(i.createElement);
    e.exports = function (e) {
      return o ? i.createElement(e) : {};
    };
  },
  function (e, t, n) {
    t.f = n(6);
  },
  function (e, t, n) {
    var r = n(49)("keys"),
      i = n(30);
    e.exports = function (e) {
      return r[e] || (r[e] = i(e));
    };
  },
  function (e, t) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  function (e, t, n) {
    var r = n(2).document;
    e.exports = r && r.documentElement;
  },
  function (e, t, n) {
    var r = n(5),
      i = n(4),
      o = function (e, t) {
        if ((i(e), !r(t) && null !== t))
          throw TypeError(t + ": can't set as prototype!");
      };
    e.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (e, t, r) {
              try {
                (r = n(18)(
                  Function.call,
                  n(21).f(Object.prototype, "__proto__").set,
                  2
                ))(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function (e, n) {
                return o(e, n), t ? (e.__proto__ = n) : r(e, n), e;
              };
            })({}, !1)
          : void 0),
      check: o,
    };
  },
  function (e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function (e, t, n) {
    var r = n(5),
      i = n(66).set;
    e.exports = function (e, t, n) {
      var o,
        s = t.constructor;
      return (
        s !== n &&
          "function" == typeof s &&
          (o = s.prototype) !== n.prototype &&
          r(o) &&
          i &&
          i(e, o),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(20),
      i = n(25);
    e.exports = function (e) {
      var t = String(i(this)),
        n = "",
        o = r(e);
      if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
      for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (n += t);
      return n;
    };
  },
  function (e, t) {
    e.exports =
      Math.sign ||
      function (e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
      };
  },
  function (e, t) {
    var n = Math.expm1;
    e.exports =
      !n ||
      n(10) > 22025.465794806718 ||
      n(10) < 22025.465794806718 ||
      -2e-17 != n(-2e-17)
        ? function (e) {
            return 0 == (e = +e)
              ? e
              : e > -1e-6 && e < 1e-6
              ? e + (e * e) / 2
              : Math.exp(e) - 1;
          }
        : n;
  },
  function (e, t, n) {
    var r = n(20),
      i = n(25);
    e.exports = function (e) {
      return function (t, n) {
        var o,
          s,
          a = String(i(t)),
          c = r(n),
          u = a.length;
        return c < 0 || c >= u
          ? e
            ? ""
            : void 0
          : (o = a.charCodeAt(c)) < 55296 ||
            o > 56319 ||
            c + 1 === u ||
            (s = a.charCodeAt(c + 1)) < 56320 ||
            s > 57343
          ? e
            ? a.charAt(c)
            : o
          : e
          ? a.slice(c, c + 2)
          : s - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(31),
      i = n(1),
      o = n(12),
      s = n(15),
      a = n(41),
      c = n(103),
      u = n(39),
      l = n(36),
      h = n(6)("iterator"),
      d = !([].keys && "next" in [].keys()),
      f = function () {
        return this;
      };
    e.exports = function (e, t, n, p, v, g, m) {
      c(n, t, p);
      var y,
        b,
        w,
        _ = function (e) {
          if (!d && e in O) return O[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        S = t + " Iterator",
        I = "values" == v,
        E = !1,
        O = e.prototype,
        T = O[h] || O["@@iterator"] || (v && O[v]),
        k = T || _(v),
        x = v ? (I ? _("entries") : k) : void 0,
        A = ("Array" == t && O.entries) || T;
      if (
        (A &&
          (w = l(A.call(new e()))) !== Object.prototype &&
          w.next &&
          (u(w, S, !0), r || "function" == typeof w[h] || s(w, h, f)),
        I &&
          T &&
          "values" !== T.name &&
          ((E = !0),
          (k = function () {
            return T.call(this);
          })),
        (r && !m) || (!d && !E && O[h]) || s(O, h, k),
        (a[t] = k),
        (a[S] = f),
        v)
      )
        if (
          ((y = {
            values: I ? k : _("values"),
            keys: g ? k : _("keys"),
            entries: x,
          }),
          m)
        )
          for (b in y) b in O || o(O, b, y[b]);
        else i(i.P + i.F * (d || E), t, y);
      return y;
    };
  },
  function (e, t, n) {
    var r = n(75),
      i = n(25);
    e.exports = function (e, t, n) {
      if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(i(e));
    };
  },
  function (e, t, n) {
    var r = n(5),
      i = n(24),
      o = n(6)("match");
    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
    };
  },
  function (e, t, n) {
    var r = n(6)("match");
    e.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[r] = !1), !"/./"[e](t);
        } catch (e) {}
      }
      return !0;
    };
  },
  function (e, t, n) {
    var r = n(41),
      i = n(6)("iterator"),
      o = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (r.Array === e || o[i] === e);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(10),
      i = n(29);
    e.exports = function (e, t, n) {
      t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
    };
  },
  function (e, t, n) {
    var r = n(47),
      i = n(6)("iterator"),
      o = n(41);
    e.exports = n(8).getIteratorMethod = function (e) {
      if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(11),
      i = n(33),
      o = n(7);
    e.exports = function (e) {
      for (
        var t = r(this),
          n = o(t.length),
          s = arguments.length,
          a = i(s > 1 ? arguments[1] : void 0, n),
          c = s > 2 ? arguments[2] : void 0,
          u = void 0 === c ? n : i(c, n);
        u > a;

      )
        t[a++] = e;
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(37),
      i = n(108),
      o = n(41),
      s = n(16);
    (e.exports = n(73)(
      Array,
      "Array",
      function (e, t) {
        (this._t = s(e)), (this._i = 0), (this._k = t);
      },
      function () {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), i(1))
          : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
      },
      "values"
    )),
      (o.Arguments = o.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (e, t, n) {
    "use strict";
    var r,
      i,
      o = n(54),
      s = RegExp.prototype.exec,
      a = String.prototype.replace,
      c = s,
      u =
        ((r = /a/),
        (i = /b*/g),
        s.call(r, "a"),
        s.call(i, "a"),
        0 !== r.lastIndex || 0 !== i.lastIndex),
      l = void 0 !== /()??/.exec("")[1];
    (u || l) &&
      (c = function (e) {
        var t,
          n,
          r,
          i,
          c = this;
        return (
          l && (n = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))),
          u && (t = c.lastIndex),
          (r = s.call(c, e)),
          u && r && (c.lastIndex = c.global ? r.index + r[0].length : t),
          l &&
            r &&
            r.length > 1 &&
            a.call(r[0], n, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      }),
      (e.exports = c);
  },
  function (e, t, n) {
    "use strict";
    var r = n(72)(!0);
    e.exports = function (e, t, n) {
      return t + (n ? r(e, t).length : 1);
    };
  },
  function (e, t, n) {
    var r,
      i,
      o,
      s = n(18),
      a = n(97),
      c = n(65),
      u = n(61),
      l = n(2),
      h = l.process,
      d = l.setImmediate,
      f = l.clearImmediate,
      p = l.MessageChannel,
      v = l.Dispatch,
      g = 0,
      m = {},
      y = function () {
        var e = +this;
        if (m.hasOwnProperty(e)) {
          var t = m[e];
          delete m[e], t();
        }
      },
      b = function (e) {
        y.call(e.data);
      };
    (d && f) ||
      ((d = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (m[++g] = function () {
            a("function" == typeof e ? e : Function(e), t);
          }),
          r(g),
          g
        );
      }),
      (f = function (e) {
        delete m[e];
      }),
      "process" == n(24)(h)
        ? (r = function (e) {
            h.nextTick(s(y, e, 1));
          })
        : v && v.now
        ? (r = function (e) {
            v.now(s(y, e, 1));
          })
        : p
        ? ((o = (i = new p()).port2),
          (i.port1.onmessage = b),
          (r = s(o.postMessage, o, 1)))
        : l.addEventListener &&
          "function" == typeof postMessage &&
          !l.importScripts
        ? ((r = function (e) {
            l.postMessage(e + "", "*");
          }),
          l.addEventListener("message", b, !1))
        : (r =
            "onreadystatechange" in u("script")
              ? function (e) {
                  c.appendChild(u("script")).onreadystatechange = function () {
                    c.removeChild(this), y.call(e);
                  };
                }
              : function (e) {
                  setTimeout(s(y, e, 1), 0);
                })),
      (e.exports = { set: d, clear: f });
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(9),
      o = n(31),
      s = n(60),
      a = n(15),
      c = n(44),
      u = n(3),
      l = n(43),
      h = n(20),
      d = n(7),
      f = n(116),
      p = n(35).f,
      v = n(10).f,
      g = n(80),
      m = n(39),
      y = r.ArrayBuffer,
      b = r.DataView,
      w = r.Math,
      _ = r.RangeError,
      S = r.Infinity,
      I = y,
      E = w.abs,
      O = w.pow,
      T = w.floor,
      k = w.log,
      x = w.LN2,
      A = i ? "_b" : "buffer",
      P = i ? "_l" : "byteLength",
      L = i ? "_o" : "byteOffset";
    function C(e, t, n) {
      var r,
        i,
        o,
        s = new Array(n),
        a = 8 * n - t - 1,
        c = (1 << a) - 1,
        u = c >> 1,
        l = 23 === t ? O(2, -24) - O(2, -77) : 0,
        h = 0,
        d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
      for (
        (e = E(e)) != e || e === S
          ? ((i = e != e ? 1 : 0), (r = c))
          : ((r = T(k(e) / x)),
            e * (o = O(2, -r)) < 1 && (r--, (o *= 2)),
            (e += r + u >= 1 ? l / o : l * O(2, 1 - u)) * o >= 2 &&
              (r++, (o /= 2)),
            r + u >= c
              ? ((i = 0), (r = c))
              : r + u >= 1
              ? ((i = (e * o - 1) * O(2, t)), (r += u))
              : ((i = e * O(2, u - 1) * O(2, t)), (r = 0)));
        t >= 8;
        s[h++] = 255 & i, i /= 256, t -= 8
      );
      for (r = (r << t) | i, a += t; a > 0; s[h++] = 255 & r, r /= 256, a -= 8);
      return (s[--h] |= 128 * d), s;
    }
    function N(e, t, n) {
      var r,
        i = 8 * n - t - 1,
        o = (1 << i) - 1,
        s = o >> 1,
        a = i - 7,
        c = n - 1,
        u = e[c--],
        l = 127 & u;
      for (u >>= 7; a > 0; l = 256 * l + e[c], c--, a -= 8);
      for (
        r = l & ((1 << -a) - 1), l >>= -a, a += t;
        a > 0;
        r = 256 * r + e[c], c--, a -= 8
      );
      if (0 === l) l = 1 - s;
      else {
        if (l === o) return r ? NaN : u ? -S : S;
        (r += O(2, t)), (l -= s);
      }
      return (u ? -1 : 1) * r * O(2, l - t);
    }
    function R(e) {
      return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    }
    function M(e) {
      return [255 & e];
    }
    function D(e) {
      return [255 & e, (e >> 8) & 255];
    }
    function j(e) {
      return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    }
    function F(e) {
      return C(e, 52, 8);
    }
    function B(e) {
      return C(e, 23, 4);
    }
    function U(e, t, n) {
      v(e.prototype, t, {
        get: function () {
          return this[n];
        },
      });
    }
    function q(e, t, n, r) {
      var i = f(+n);
      if (i + t > e[P]) throw _("Wrong index!");
      var o = e[A]._b,
        s = i + e[L],
        a = o.slice(s, s + t);
      return r ? a : a.reverse();
    }
    function V(e, t, n, r, i, o) {
      var s = f(+n);
      if (s + t > e[P]) throw _("Wrong index!");
      for (var a = e[A]._b, c = s + e[L], u = r(+i), l = 0; l < t; l++)
        a[c + l] = u[o ? l : t - l - 1];
    }
    if (s.ABV) {
      if (
        !u(function () {
          y(1);
        }) ||
        !u(function () {
          new y(-1);
        }) ||
        u(function () {
          return new y(), new y(1.5), new y(NaN), "ArrayBuffer" != y.name;
        })
      ) {
        for (
          var H,
            W = ((y = function (e) {
              return l(this, y), new I(f(e));
            }).prototype = I.prototype),
            z = p(I),
            G = 0;
          z.length > G;

        )
          (H = z[G++]) in y || a(y, H, I[H]);
        o || (W.constructor = y);
      }
      var K = new b(new y(2)),
        $ = b.prototype.setInt8;
      K.setInt8(0, 2147483648),
        K.setInt8(1, 2147483649),
        (!K.getInt8(0) && K.getInt8(1)) ||
          c(
            b.prototype,
            {
              setInt8: function (e, t) {
                $.call(this, e, (t << 24) >> 24);
              },
              setUint8: function (e, t) {
                $.call(this, e, (t << 24) >> 24);
              },
            },
            !0
          );
    } else
      (y = function (e) {
        l(this, y, "ArrayBuffer");
        var t = f(e);
        (this._b = g.call(new Array(t), 0)), (this[P] = t);
      }),
        (b = function (e, t, n) {
          l(this, b, "DataView"), l(e, y, "DataView");
          var r = e[P],
            i = h(t);
          if (i < 0 || i > r) throw _("Wrong offset!");
          if (i + (n = void 0 === n ? r - i : d(n)) > r)
            throw _("Wrong length!");
          (this[A] = e), (this[L] = i), (this[P] = n);
        }),
        i &&
          (U(y, "byteLength", "_l"),
          U(b, "buffer", "_b"),
          U(b, "byteLength", "_l"),
          U(b, "byteOffset", "_o")),
        c(b.prototype, {
          getInt8: function (e) {
            return (q(this, 1, e)[0] << 24) >> 24;
          },
          getUint8: function (e) {
            return q(this, 1, e)[0];
          },
          getInt16: function (e) {
            var t = q(this, 2, e, arguments[1]);
            return (((t[1] << 8) | t[0]) << 16) >> 16;
          },
          getUint16: function (e) {
            var t = q(this, 2, e, arguments[1]);
            return (t[1] << 8) | t[0];
          },
          getInt32: function (e) {
            return R(q(this, 4, e, arguments[1]));
          },
          getUint32: function (e) {
            return R(q(this, 4, e, arguments[1])) >>> 0;
          },
          getFloat32: function (e) {
            return N(q(this, 4, e, arguments[1]), 23, 4);
          },
          getFloat64: function (e) {
            return N(q(this, 8, e, arguments[1]), 52, 8);
          },
          setInt8: function (e, t) {
            V(this, 1, e, M, t);
          },
          setUint8: function (e, t) {
            V(this, 1, e, M, t);
          },
          setInt16: function (e, t) {
            V(this, 2, e, D, t, arguments[2]);
          },
          setUint16: function (e, t) {
            V(this, 2, e, D, t, arguments[2]);
          },
          setInt32: function (e, t) {
            V(this, 4, e, j, t, arguments[2]);
          },
          setUint32: function (e, t) {
            V(this, 4, e, j, t, arguments[2]);
          },
          setFloat32: function (e, t) {
            V(this, 4, e, B, t, arguments[2]);
          },
          setFloat64: function (e, t) {
            V(this, 8, e, F, t, arguments[2]);
          },
        });
    m(y, "ArrayBuffer"),
      m(b, "DataView"),
      a(b.prototype, s.VIEW, !0),
      (t.ArrayBuffer = y),
      (t.DataView = b);
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t, n) {
    e.exports = !n(121)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t, n) {
    e.exports =
      !n(9) &&
      !n(3)(function () {
        return (
          7 !=
          Object.defineProperty(n(61)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var r = n(2),
      i = n(8),
      o = n(31),
      s = n(62),
      a = n(10).f;
    e.exports = function (e) {
      var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || a(t, e, { value: s.f(e) });
    };
  },
  function (e, t, n) {
    var r = n(14),
      i = n(16),
      o = n(50)(!1),
      s = n(63)("IE_PROTO");
    e.exports = function (e, t) {
      var n,
        a = i(e),
        c = 0,
        u = [];
      for (n in a) n != s && r(a, n) && u.push(n);
      for (; t.length > c; ) r(a, (n = t[c++])) && (~o(u, n) || u.push(n));
      return u;
    };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(4),
      o = n(32);
    e.exports = n(9)
      ? Object.defineProperties
      : function (e, t) {
          i(e);
          for (var n, s = o(t), a = s.length, c = 0; a > c; )
            r.f(e, (n = s[c++]), t[n]);
          return e;
        };
  },
  function (e, t, n) {
    var r = n(16),
      i = n(35).f,
      o = {}.toString,
      s =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    e.exports.f = function (e) {
      return s && "[object Window]" == o.call(e)
        ? (function (e) {
            try {
              return i(e);
            } catch (e) {
              return s.slice();
            }
          })(e)
        : i(r(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(9),
      i = n(32),
      o = n(51),
      s = n(46),
      a = n(11),
      c = n(45),
      u = Object.assign;
    e.exports =
      !u ||
      n(3)(function () {
        var e = {},
          t = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
        );
      })
        ? function (e, t) {
            for (
              var n = a(e), u = arguments.length, l = 1, h = o.f, d = s.f;
              u > l;

            )
              for (
                var f,
                  p = c(arguments[l++]),
                  v = h ? i(p).concat(h(p)) : i(p),
                  g = v.length,
                  m = 0;
                g > m;

              )
                (f = v[m++]), (r && !d.call(p, f)) || (n[f] = p[f]);
            return n;
          }
        : u;
  },
  function (e, t) {
    e.exports =
      Object.is ||
      function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(19),
      i = n(5),
      o = n(97),
      s = [].slice,
      a = {},
      c = function (e, t, n) {
        if (!(t in a)) {
          for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
          a[t] = Function("F,a", "return new F(" + r.join(",") + ")");
        }
        return a[t](e, n);
      };
    e.exports =
      Function.bind ||
      function (e) {
        var t = r(this),
          n = s.call(arguments, 1),
          a = function () {
            var r = n.concat(s.call(arguments));
            return this instanceof a ? c(t, r.length, r) : o(t, r, e);
          };
        return i(t.prototype) && (a.prototype = t.prototype), a;
      };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    };
  },
  function (e, t, n) {
    var r = n(2).parseInt,
      i = n(40).trim,
      o = n(67),
      s = /^[-+]?0[xX]/;
    e.exports =
      8 !== r(o + "08") || 22 !== r(o + "0x16")
        ? function (e, t) {
            var n = i(String(e), 3);
            return r(n, t >>> 0 || (s.test(n) ? 16 : 10));
          }
        : r;
  },
  function (e, t, n) {
    var r = n(2).parseFloat,
      i = n(40).trim;
    e.exports =
      1 / r(n(67) + "-0") != -1 / 0
        ? function (e) {
            var t = i(String(e), 3),
              n = r(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n;
          }
        : r;
  },
  function (e, t, n) {
    var r = n(24);
    e.exports = function (e, t) {
      if ("number" != typeof e && "Number" != r(e)) throw TypeError(t);
      return +e;
    };
  },
  function (e, t, n) {
    var r = n(5),
      i = Math.floor;
    e.exports = function (e) {
      return !r(e) && isFinite(e) && i(e) === e;
    };
  },
  function (e, t) {
    e.exports =
      Math.log1p ||
      function (e) {
        return (e = +e) > -1e-8 && e < 1e-8 ? e - (e * e) / 2 : Math.log(1 + e);
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(34),
      i = n(29),
      o = n(39),
      s = {};
    n(15)(s, n(6)("iterator"), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = r(s, { next: i(1, n) })), o(e, t + " Iterator");
      });
  },
  function (e, t, n) {
    var r = n(4);
    e.exports = function (e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var o = e.return;
        throw (void 0 !== o && r(o.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var r = n(217);
    e.exports = function (e, t) {
      return new (r(e))(t);
    };
  },
  function (e, t, n) {
    var r = n(19),
      i = n(11),
      o = n(45),
      s = n(7);
    e.exports = function (e, t, n, a, c) {
      r(t);
      var u = i(e),
        l = o(u),
        h = s(u.length),
        d = c ? h - 1 : 0,
        f = c ? -1 : 1;
      if (n < 2)
        for (;;) {
          if (d in l) {
            (a = l[d]), (d += f);
            break;
          }
          if (((d += f), c ? d < 0 : h <= d))
            throw TypeError("Reduce of empty array with no initial value");
        }
      for (; c ? d >= 0 : h > d; d += f) d in l && (a = t(a, l[d], d, u));
      return a;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(11),
      i = n(33),
      o = n(7);
    e.exports =
      [].copyWithin ||
      function (e, t) {
        var n = r(this),
          s = o(n.length),
          a = i(e, s),
          c = i(t, s),
          u = arguments.length > 2 ? arguments[2] : void 0,
          l = Math.min((void 0 === u ? s : i(u, s)) - c, s - a),
          h = 1;
        for (
          c < a && a < c + l && ((h = -1), (c += l - 1), (a += l - 1));
          l-- > 0;

        )
          c in n ? (n[a] = n[c]) : delete n[a], (a += h), (c += h);
        return n;
      };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(82);
    n(1)({ target: "RegExp", proto: !0, forced: r !== /./.exec }, { exec: r });
  },
  function (e, t, n) {
    n(9) &&
      "g" != /./g.flags &&
      n(10).f(RegExp.prototype, "flags", { configurable: !0, get: n(54) });
  },
  function (e, t, n) {
    "use strict";
    var r,
      i,
      o,
      s,
      a = n(31),
      c = n(2),
      u = n(18),
      l = n(47),
      h = n(1),
      d = n(5),
      f = n(19),
      p = n(43),
      v = n(57),
      g = n(48),
      m = n(84).set,
      y = n(237)(),
      b = n(112),
      w = n(238),
      _ = n(58),
      S = n(113),
      I = c.TypeError,
      E = c.process,
      O = E && E.versions,
      T = (O && O.v8) || "",
      k = c.Promise,
      x = "process" == l(E),
      A = function () {},
      P = (i = b.f),
      L = !!(function () {
        try {
          var e = k.resolve(1),
            t = ((e.constructor = {})[n(6)("species")] = function (e) {
              e(A, A);
            });
          return (
            (x || "function" == typeof PromiseRejectionEvent) &&
            e.then(A) instanceof t &&
            0 !== T.indexOf("6.6") &&
            -1 === _.indexOf("Chrome/66")
          );
        } catch (e) {}
      })(),
      C = function (e) {
        var t;
        return !(!d(e) || "function" != typeof (t = e.then)) && t;
      },
      N = function (e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          y(function () {
            for (
              var r = e._v,
                i = 1 == e._s,
                o = 0,
                s = function (t) {
                  var n,
                    o,
                    s,
                    a = i ? t.ok : t.fail,
                    c = t.resolve,
                    u = t.reject,
                    l = t.domain;
                  try {
                    a
                      ? (i || (2 == e._h && D(e), (e._h = 1)),
                        !0 === a
                          ? (n = r)
                          : (l && l.enter(),
                            (n = a(r)),
                            l && (l.exit(), (s = !0))),
                        n === t.promise
                          ? u(I("Promise-chain cycle"))
                          : (o = C(n))
                          ? o.call(n, c, u)
                          : c(n))
                      : u(r);
                  } catch (e) {
                    l && !s && l.exit(), u(e);
                  }
                };
              n.length > o;

            )
              s(n[o++]);
            (e._c = []), (e._n = !1), t && !e._h && R(e);
          });
        }
      },
      R = function (e) {
        m.call(c, function () {
          var t,
            n,
            r,
            i = e._v,
            o = M(e);
          if (
            (o &&
              ((t = w(function () {
                x
                  ? E.emit("unhandledRejection", i, e)
                  : (n = c.onunhandledrejection)
                  ? n({ promise: e, reason: i })
                  : (r = c.console) &&
                    r.error &&
                    r.error("Unhandled promise rejection", i);
              })),
              (e._h = x || M(e) ? 2 : 1)),
            (e._a = void 0),
            o && t.e)
          )
            throw t.v;
        });
      },
      M = function (e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      D = function (e) {
        m.call(c, function () {
          var t;
          x
            ? E.emit("rejectionHandled", e)
            : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      j = function (e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          N(t, !0));
      },
      F = function (e) {
        var t,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === e) throw I("Promise can't be resolved itself");
            (t = C(e))
              ? y(function () {
                  var r = { _w: n, _d: !1 };
                  try {
                    t.call(e, u(F, r, 1), u(j, r, 1));
                  } catch (e) {
                    j.call(r, e);
                  }
                })
              : ((n._v = e), (n._s = 1), N(n, !1));
          } catch (e) {
            j.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    L ||
      ((k = function (e) {
        p(this, k, "Promise", "_h"), f(e), r.call(this);
        try {
          e(u(F, this, 1), u(j, this, 1));
        } catch (e) {
          j.call(this, e);
        }
      }),
      ((r = function (e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = n(44)(k.prototype, {
        then: function (e, t) {
          var n = P(g(this, k));
          return (
            (n.ok = "function" != typeof e || e),
            (n.fail = "function" == typeof t && t),
            (n.domain = x ? E.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && N(this, !1),
            n.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (o = function () {
        var e = new r();
        (this.promise = e),
          (this.resolve = u(F, e, 1)),
          (this.reject = u(j, e, 1));
      }),
      (b.f = P =
        function (e) {
          return e === k || e === s ? new o(e) : i(e);
        })),
      h(h.G + h.W + h.F * !L, { Promise: k }),
      n(39)(k, "Promise"),
      n(42)("Promise"),
      (s = n(8).Promise),
      h(h.S + h.F * !L, "Promise", {
        reject: function (e) {
          var t = P(this);
          return (0, t.reject)(e), t.promise;
        },
      }),
      h(h.S + h.F * (a || !L), "Promise", {
        resolve: function (e) {
          return S(a && this === s ? k : this, e);
        },
      }),
      h(
        h.S +
          h.F *
            !(
              L &&
              n(53)(function (e) {
                k.all(e).catch(A);
              })
            ),
        "Promise",
        {
          all: function (e) {
            var t = this,
              n = P(t),
              r = n.resolve,
              i = n.reject,
              o = w(function () {
                var n = [],
                  o = 0,
                  s = 1;
                v(e, !1, function (e) {
                  var a = o++,
                    c = !1;
                  n.push(void 0),
                    s++,
                    t.resolve(e).then(function (e) {
                      c || ((c = !0), (n[a] = e), --s || r(n));
                    }, i);
                }),
                  --s || r(n);
              });
            return o.e && i(o.v), n.promise;
          },
          race: function (e) {
            var t = this,
              n = P(t),
              r = n.reject,
              i = w(function () {
                v(e, !1, function (e) {
                  t.resolve(e).then(n.resolve, r);
                });
              });
            return i.e && r(i.v), n.promise;
          },
        }
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(19);
    function i(e) {
      var t, n;
      (this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = r);
      })),
        (this.resolve = r(t)),
        (this.reject = r(n));
    }
    e.exports.f = function (e) {
      return new i(e);
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(5),
      o = n(112);
    e.exports = function (e, t) {
      if ((r(e), i(t) && t.constructor === e)) return t;
      var n = o.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(10).f,
      i = n(34),
      o = n(44),
      s = n(18),
      a = n(43),
      c = n(57),
      u = n(73),
      l = n(108),
      h = n(42),
      d = n(9),
      f = n(28).fastKey,
      p = n(38),
      v = d ? "_s" : "size",
      g = function (e, t) {
        var n,
          r = f(t);
        if ("F" !== r) return e._i[r];
        for (n = e._f; n; n = n.n) if (n.k == t) return n;
      };
    e.exports = {
      getConstructor: function (e, t, n, u) {
        var l = e(function (e, r) {
          a(e, l, t, "_i"),
            (e._t = t),
            (e._i = i(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[v] = 0),
            null != r && c(r, n, e[u], e);
        });
        return (
          o(l.prototype, {
            clear: function () {
              for (var e = p(this, t), n = e._i, r = e._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
              (e._f = e._l = void 0), (e[v] = 0);
            },
            delete: function (e) {
              var n = p(this, t),
                r = g(n, e);
              if (r) {
                var i = r.n,
                  o = r.p;
                delete n._i[r.i],
                  (r.r = !0),
                  o && (o.n = i),
                  i && (i.p = o),
                  n._f == r && (n._f = i),
                  n._l == r && (n._l = o),
                  n[v]--;
              }
              return !!r;
            },
            forEach: function (e) {
              p(this, t);
              for (
                var n,
                  r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.n : this._f);

              )
                for (r(n.v, n.k, this); n && n.r; ) n = n.p;
            },
            has: function (e) {
              return !!g(p(this, t), e);
            },
          }),
          d &&
            r(l.prototype, "size", {
              get: function () {
                return p(this, t)[v];
              },
            }),
          l
        );
      },
      def: function (e, t, n) {
        var r,
          i,
          o = g(e, t);
        return (
          o
            ? (o.v = n)
            : ((e._l = o =
                {
                  i: (i = f(t, !0)),
                  k: t,
                  v: n,
                  p: (r = e._l),
                  n: void 0,
                  r: !1,
                }),
              e._f || (e._f = o),
              r && (r.n = o),
              e[v]++,
              "F" !== i && (e._i[i] = o)),
          e
        );
      },
      getEntry: g,
      setStrong: function (e, t, n) {
        u(
          e,
          t,
          function (e, n) {
            (this._t = p(e, t)), (this._k = n), (this._l = void 0);
          },
          function () {
            for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
            return this._t && (this._l = t = t ? t.n : this._t._f)
              ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v])
              : ((this._t = void 0), l(1));
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          h(t);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(44),
      i = n(28).getWeak,
      o = n(4),
      s = n(5),
      a = n(43),
      c = n(57),
      u = n(23),
      l = n(14),
      h = n(38),
      d = u(5),
      f = u(6),
      p = 0,
      v = function (e) {
        return e._l || (e._l = new g());
      },
      g = function () {
        this.a = [];
      },
      m = function (e, t) {
        return d(e.a, function (e) {
          return e[0] === t;
        });
      };
    (g.prototype = {
      get: function (e) {
        var t = m(this, e);
        if (t) return t[1];
      },
      has: function (e) {
        return !!m(this, e);
      },
      set: function (e, t) {
        var n = m(this, e);
        n ? (n[1] = t) : this.a.push([e, t]);
      },
      delete: function (e) {
        var t = f(this.a, function (t) {
          return t[0] === e;
        });
        return ~t && this.a.splice(t, 1), !!~t;
      },
    }),
      (e.exports = {
        getConstructor: function (e, t, n, o) {
          var u = e(function (e, r) {
            a(e, u, t, "_i"),
              (e._t = t),
              (e._i = p++),
              (e._l = void 0),
              null != r && c(r, n, e[o], e);
          });
          return (
            r(u.prototype, {
              delete: function (e) {
                if (!s(e)) return !1;
                var n = i(e);
                return !0 === n
                  ? v(h(this, t)).delete(e)
                  : n && l(n, this._i) && delete n[this._i];
              },
              has: function (e) {
                if (!s(e)) return !1;
                var n = i(e);
                return !0 === n ? v(h(this, t)).has(e) : n && l(n, this._i);
              },
            }),
            u
          );
        },
        def: function (e, t, n) {
          var r = i(o(t), !0);
          return !0 === r ? v(e).set(t, n) : (r[e._i] = n), e;
        },
        ufstore: v,
      });
  },
  function (e, t, n) {
    var r = n(20),
      i = n(7);
    e.exports = function (e) {
      if (void 0 === e) return 0;
      var t = r(e),
        n = i(t);
      if (t !== n) throw RangeError("Wrong length!");
      return n;
    };
  },
  function (e, t, n) {
    var r = n(35),
      i = n(51),
      o = n(4),
      s = n(2).Reflect;
    e.exports =
      (s && s.ownKeys) ||
      function (e) {
        var t = r.f(o(e)),
          n = i.f;
        return n ? t.concat(n(e)) : t;
      };
  },
  function (e, t, n) {
    var r = n(7),
      i = n(69),
      o = n(25);
    e.exports = function (e, t, n, s) {
      var a = String(o(e)),
        c = a.length,
        u = void 0 === n ? " " : String(n),
        l = r(t);
      if (l <= c || "" == u) return a;
      var h = l - c,
        d = i.call(u, Math.ceil(h / u.length));
      return d.length > h && (d = d.slice(0, h)), s ? d + a : a + d;
    };
  },
  function (e, t, n) {
    var r = n(9),
      i = n(32),
      o = n(16),
      s = n(46).f;
    e.exports = function (e) {
      return function (t) {
        for (var n, a = o(t), c = i(a), u = c.length, l = 0, h = []; u > l; )
          (n = c[l++]), (r && !s.call(a, n)) || h.push(e ? [n, a[n]] : a[n]);
        return h;
      };
    };
  },
  function (e, t) {
    var n = (e.exports = { version: "2.6.12" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    n(123), (e.exports = n(309));
  },
  function (e, t, n) {
    "use strict";
    n(124);
    var r,
      i = (r = n(296)) && r.__esModule ? r : { default: r };
    i.default._babelPolyfill &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn(
        "@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."
      ),
      (i.default._babelPolyfill = !0);
  },
  function (e, t, n) {
    "use strict";
    n(125),
      n(268),
      n(270),
      n(273),
      n(275),
      n(277),
      n(279),
      n(281),
      n(283),
      n(285),
      n(287),
      n(289),
      n(291),
      n(295);
  },
  function (e, t, n) {
    n(126),
      n(129),
      n(130),
      n(131),
      n(132),
      n(133),
      n(134),
      n(135),
      n(136),
      n(137),
      n(138),
      n(139),
      n(140),
      n(141),
      n(142),
      n(143),
      n(144),
      n(145),
      n(146),
      n(147),
      n(148),
      n(149),
      n(150),
      n(151),
      n(152),
      n(153),
      n(154),
      n(155),
      n(156),
      n(157),
      n(158),
      n(159),
      n(160),
      n(161),
      n(162),
      n(163),
      n(164),
      n(165),
      n(166),
      n(167),
      n(168),
      n(169),
      n(170),
      n(172),
      n(173),
      n(174),
      n(175),
      n(176),
      n(177),
      n(178),
      n(179),
      n(180),
      n(181),
      n(182),
      n(183),
      n(184),
      n(185),
      n(186),
      n(187),
      n(188),
      n(189),
      n(190),
      n(191),
      n(192),
      n(193),
      n(194),
      n(195),
      n(196),
      n(197),
      n(198),
      n(199),
      n(200),
      n(201),
      n(202),
      n(203),
      n(204),
      n(205),
      n(207),
      n(208),
      n(210),
      n(211),
      n(212),
      n(213),
      n(214),
      n(215),
      n(216),
      n(218),
      n(219),
      n(220),
      n(221),
      n(222),
      n(223),
      n(224),
      n(225),
      n(226),
      n(227),
      n(228),
      n(229),
      n(230),
      n(81),
      n(231),
      n(109),
      n(232),
      n(110),
      n(233),
      n(234),
      n(235),
      n(236),
      n(111),
      n(239),
      n(240),
      n(241),
      n(242),
      n(243),
      n(244),
      n(245),
      n(246),
      n(247),
      n(248),
      n(249),
      n(250),
      n(251),
      n(252),
      n(253),
      n(254),
      n(255),
      n(256),
      n(257),
      n(258),
      n(259),
      n(260),
      n(261),
      n(262),
      n(263),
      n(264),
      n(265),
      n(266),
      n(267),
      (e.exports = n(8));
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = n(9),
      s = n(1),
      a = n(12),
      c = n(28).KEY,
      u = n(3),
      l = n(49),
      h = n(39),
      d = n(30),
      f = n(6),
      p = n(62),
      v = n(90),
      g = n(128),
      m = n(52),
      y = n(4),
      b = n(5),
      w = n(11),
      _ = n(16),
      S = n(27),
      I = n(29),
      E = n(34),
      O = n(93),
      T = n(21),
      k = n(51),
      x = n(10),
      A = n(32),
      P = T.f,
      L = x.f,
      C = O.f,
      N = r.Symbol,
      R = r.JSON,
      M = R && R.stringify,
      D = f("_hidden"),
      j = f("toPrimitive"),
      F = {}.propertyIsEnumerable,
      B = l("symbol-registry"),
      U = l("symbols"),
      q = l("op-symbols"),
      V = Object.prototype,
      H = "function" == typeof N && !!k.f,
      W = r.QObject,
      z = !W || !W.prototype || !W.prototype.findChild,
      G =
        o &&
        u(function () {
          return (
            7 !=
            E(
              L({}, "a", {
                get: function () {
                  return L(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (e, t, n) {
              var r = P(V, t);
              r && delete V[t], L(e, t, n), r && e !== V && L(V, t, r);
            }
          : L,
      K = function (e) {
        var t = (U[e] = E(N.prototype));
        return (t._k = e), t;
      },
      $ =
        H && "symbol" == typeof N.iterator
          ? function (e) {
              return "symbol" == typeof e;
            }
          : function (e) {
              return e instanceof N;
            },
      J = function (e, t, n) {
        return (
          e === V && J(q, t, n),
          y(e),
          (t = S(t, !0)),
          y(n),
          i(U, t)
            ? (n.enumerable
                ? (i(e, D) && e[D][t] && (e[D][t] = !1),
                  (n = E(n, { enumerable: I(0, !1) })))
                : (i(e, D) || L(e, D, I(1, {})), (e[D][t] = !0)),
              G(e, t, n))
            : L(e, t, n)
        );
      },
      Y = function (e, t) {
        y(e);
        for (var n, r = g((t = _(t))), i = 0, o = r.length; o > i; )
          J(e, (n = r[i++]), t[n]);
        return e;
      },
      Z = function (e) {
        var t = F.call(this, (e = S(e, !0)));
        return (
          !(this === V && i(U, e) && !i(q, e)) &&
          (!(t || !i(this, e) || !i(U, e) || (i(this, D) && this[D][e])) || t)
        );
      },
      X = function (e, t) {
        if (((e = _(e)), (t = S(t, !0)), e !== V || !i(U, t) || i(q, t))) {
          var n = P(e, t);
          return (
            !n || !i(U, t) || (i(e, D) && e[D][t]) || (n.enumerable = !0), n
          );
        }
      },
      Q = function (e) {
        for (var t, n = C(_(e)), r = [], o = 0; n.length > o; )
          i(U, (t = n[o++])) || t == D || t == c || r.push(t);
        return r;
      },
      ee = function (e) {
        for (
          var t, n = e === V, r = C(n ? q : _(e)), o = [], s = 0;
          r.length > s;

        )
          !i(U, (t = r[s++])) || (n && !i(V, t)) || o.push(U[t]);
        return o;
      };
    H ||
      (a(
        (N = function () {
          if (this instanceof N)
            throw TypeError("Symbol is not a constructor!");
          var e = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function (n) {
              this === V && t.call(q, n),
                i(this, D) && i(this[D], e) && (this[D][e] = !1),
                G(this, e, I(1, n));
            };
          return o && z && G(V, e, { configurable: !0, set: t }), K(e);
        }).prototype,
        "toString",
        function () {
          return this._k;
        }
      ),
      (T.f = X),
      (x.f = J),
      (n(35).f = O.f = Q),
      (n(46).f = Z),
      (k.f = ee),
      o && !n(31) && a(V, "propertyIsEnumerable", Z, !0),
      (p.f = function (e) {
        return K(f(e));
      })),
      s(s.G + s.W + s.F * !H, { Symbol: N });
    for (
      var te =
          "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ","
          ),
        ne = 0;
      te.length > ne;

    )
      f(te[ne++]);
    for (var re = A(f.store), ie = 0; re.length > ie; ) v(re[ie++]);
    s(s.S + s.F * !H, "Symbol", {
      for: function (e) {
        return i(B, (e += "")) ? B[e] : (B[e] = N(e));
      },
      keyFor: function (e) {
        if (!$(e)) throw TypeError(e + " is not a symbol!");
        for (var t in B) if (B[t] === e) return t;
      },
      useSetter: function () {
        z = !0;
      },
      useSimple: function () {
        z = !1;
      },
    }),
      s(s.S + s.F * !H, "Object", {
        create: function (e, t) {
          return void 0 === t ? E(e) : Y(E(e), t);
        },
        defineProperty: J,
        defineProperties: Y,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: ee,
      });
    var oe = u(function () {
      k.f(1);
    });
    s(s.S + s.F * oe, "Object", {
      getOwnPropertySymbols: function (e) {
        return k.f(w(e));
      },
    }),
      R &&
        s(
          s.S +
            s.F *
              (!H ||
                u(function () {
                  var e = N();
                  return (
                    "[null]" != M([e]) ||
                    "{}" != M({ a: e }) ||
                    "{}" != M(Object(e))
                  );
                })),
          "JSON",
          {
            stringify: function (e) {
              for (var t, n, r = [e], i = 1; arguments.length > i; )
                r.push(arguments[i++]);
              if (((n = t = r[1]), (b(t) || void 0 !== e) && !$(e)))
                return (
                  m(t) ||
                    (t = function (e, t) {
                      if (
                        ("function" == typeof n && (t = n.call(this, e, t)),
                        !$(t))
                      )
                        return t;
                    }),
                  (r[1] = t),
                  M.apply(R, r)
                );
            },
          }
        ),
      N.prototype[j] || n(15)(N.prototype, j, N.prototype.valueOf),
      h(N, "Symbol"),
      h(Math, "Math", !0),
      h(r.JSON, "JSON", !0);
  },
  function (e, t, n) {
    e.exports = n(49)("native-function-to-string", Function.toString);
  },
  function (e, t, n) {
    var r = n(32),
      i = n(51),
      o = n(46);
    e.exports = function (e) {
      var t = r(e),
        n = i.f;
      if (n)
        for (var s, a = n(e), c = o.f, u = 0; a.length > u; )
          c.call(e, (s = a[u++])) && t.push(s);
      return t;
    };
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Object", { create: n(34) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S + r.F * !n(9), "Object", { defineProperty: n(10).f });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S + r.F * !n(9), "Object", { defineProperties: n(92) });
  },
  function (e, t, n) {
    var r = n(16),
      i = n(21).f;
    n(22)("getOwnPropertyDescriptor", function () {
      return function (e, t) {
        return i(r(e), t);
      };
    });
  },
  function (e, t, n) {
    var r = n(11),
      i = n(36);
    n(22)("getPrototypeOf", function () {
      return function (e) {
        return i(r(e));
      };
    });
  },
  function (e, t, n) {
    var r = n(11),
      i = n(32);
    n(22)("keys", function () {
      return function (e) {
        return i(r(e));
      };
    });
  },
  function (e, t, n) {
    n(22)("getOwnPropertyNames", function () {
      return n(93).f;
    });
  },
  function (e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("freeze", function (e) {
      return function (t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function (e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("seal", function (e) {
      return function (t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function (e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("preventExtensions", function (e) {
      return function (t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function (e, t, n) {
    var r = n(5);
    n(22)("isFrozen", function (e) {
      return function (t) {
        return !r(t) || (!!e && e(t));
      };
    });
  },
  function (e, t, n) {
    var r = n(5);
    n(22)("isSealed", function (e) {
      return function (t) {
        return !r(t) || (!!e && e(t));
      };
    });
  },
  function (e, t, n) {
    var r = n(5);
    n(22)("isExtensible", function (e) {
      return function (t) {
        return !!r(t) && (!e || e(t));
      };
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S + r.F, "Object", { assign: n(94) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Object", { is: n(95) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Object", { setPrototypeOf: n(66).set });
  },
  function (e, t, n) {
    "use strict";
    var r = n(47),
      i = {};
    (i[n(6)("toStringTag")] = "z"),
      i + "" != "[object z]" &&
        n(12)(
          Object.prototype,
          "toString",
          function () {
            return "[object " + r(this) + "]";
          },
          !0
        );
  },
  function (e, t, n) {
    var r = n(1);
    r(r.P, "Function", { bind: n(96) });
  },
  function (e, t, n) {
    var r = n(10).f,
      i = Function.prototype,
      o = /^\s*function ([^ (]*)/;
    "name" in i ||
      (n(9) &&
        r(i, "name", {
          configurable: !0,
          get: function () {
            try {
              return ("" + this).match(o)[1];
            } catch (e) {
              return "";
            }
          },
        }));
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      i = n(36),
      o = n(6)("hasInstance"),
      s = Function.prototype;
    o in s ||
      n(10).f(s, o, {
        value: function (e) {
          if ("function" != typeof this || !r(e)) return !1;
          if (!r(this.prototype)) return e instanceof this;
          for (; (e = i(e)); ) if (this.prototype === e) return !0;
          return !1;
        },
      });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(98);
    r(r.G + r.F * (parseInt != i), { parseInt: i });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(99);
    r(r.G + r.F * (parseFloat != i), { parseFloat: i });
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = n(24),
      s = n(68),
      a = n(27),
      c = n(3),
      u = n(35).f,
      l = n(21).f,
      h = n(10).f,
      d = n(40).trim,
      f = r.Number,
      p = f,
      v = f.prototype,
      g = "Number" == o(n(34)(v)),
      m = "trim" in String.prototype,
      y = function (e) {
        var t = a(e, !1);
        if ("string" == typeof t && t.length > 2) {
          var n,
            r,
            i,
            o = (t = m ? t.trim() : d(t, 3)).charCodeAt(0);
          if (43 === o || 45 === o) {
            if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
          } else if (48 === o) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (i = 49);
                break;
              case 79:
              case 111:
                (r = 8), (i = 55);
                break;
              default:
                return +t;
            }
            for (var s, c = t.slice(2), u = 0, l = c.length; u < l; u++)
              if ((s = c.charCodeAt(u)) < 48 || s > i) return NaN;
            return parseInt(c, r);
          }
        }
        return +t;
      };
    if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
      f = function (e) {
        var t = arguments.length < 1 ? 0 : e,
          n = this;
        return n instanceof f &&
          (g
            ? c(function () {
                v.valueOf.call(n);
              })
            : "Number" != o(n))
          ? s(new p(y(t)), n, f)
          : y(t);
      };
      for (
        var b,
          w = n(9)
            ? u(p)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          _ = 0;
        w.length > _;
        _++
      )
        i(p, (b = w[_])) && !i(f, b) && h(f, b, l(p, b));
      (f.prototype = v), (v.constructor = f), n(12)(r, "Number", f);
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(20),
      o = n(100),
      s = n(69),
      a = (1).toFixed,
      c = Math.floor,
      u = [0, 0, 0, 0, 0, 0],
      l = "Number.toFixed: incorrect invocation!",
      h = function (e, t) {
        for (var n = -1, r = t; ++n < 6; )
          (r += e * u[n]), (u[n] = r % 1e7), (r = c(r / 1e7));
      },
      d = function (e) {
        for (var t = 6, n = 0; --t >= 0; )
          (n += u[t]), (u[t] = c(n / e)), (n = (n % e) * 1e7);
      },
      f = function () {
        for (var e = 6, t = ""; --e >= 0; )
          if ("" !== t || 0 === e || 0 !== u[e]) {
            var n = String(u[e]);
            t = "" === t ? n : t + s.call("0", 7 - n.length) + n;
          }
        return t;
      },
      p = function (e, t, n) {
        return 0 === t
          ? n
          : t % 2 == 1
          ? p(e, t - 1, n * e)
          : p(e * e, t / 2, n);
      };
    r(
      r.P +
        r.F *
          ((!!a &&
            ("0.000" !== (8e-5).toFixed(3) ||
              "1" !== (0.9).toFixed(0) ||
              "1.25" !== (1.255).toFixed(2) ||
              "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
            !n(3)(function () {
              a.call({});
            })),
      "Number",
      {
        toFixed: function (e) {
          var t,
            n,
            r,
            a,
            c = o(this, l),
            u = i(e),
            v = "",
            g = "0";
          if (u < 0 || u > 20) throw RangeError(l);
          if (c != c) return "NaN";
          if (c <= -1e21 || c >= 1e21) return String(c);
          if ((c < 0 && ((v = "-"), (c = -c)), c > 1e-21))
            if (
              ((n =
                (t =
                  (function (e) {
                    for (var t = 0, n = e; n >= 4096; ) (t += 12), (n /= 4096);
                    for (; n >= 2; ) (t += 1), (n /= 2);
                    return t;
                  })(c * p(2, 69, 1)) - 69) < 0
                  ? c * p(2, -t, 1)
                  : c / p(2, t, 1)),
              (n *= 4503599627370496),
              (t = 52 - t) > 0)
            ) {
              for (h(0, n), r = u; r >= 7; ) h(1e7, 0), (r -= 7);
              for (h(p(10, r, 1), 0), r = t - 1; r >= 23; )
                d(1 << 23), (r -= 23);
              d(1 << r), h(1, 1), d(2), (g = f());
            } else h(0, n), h(1 << -t, 0), (g = f() + s.call("0", u));
          return (g =
            u > 0
              ? v +
                ((a = g.length) <= u
                  ? "0." + s.call("0", u - a) + g
                  : g.slice(0, a - u) + "." + g.slice(a - u))
              : v + g);
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(3),
      o = n(100),
      s = (1).toPrecision;
    r(
      r.P +
        r.F *
          (i(function () {
            return "1" !== s.call(1, void 0);
          }) ||
            !i(function () {
              s.call({});
            })),
      "Number",
      {
        toPrecision: function (e) {
          var t = o(this, "Number#toPrecision: incorrect invocation!");
          return void 0 === e ? s.call(t) : s.call(t, e);
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", { EPSILON: Math.pow(2, -52) });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(2).isFinite;
    r(r.S, "Number", {
      isFinite: function (e) {
        return "number" == typeof e && i(e);
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", { isInteger: n(101) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", {
      isNaN: function (e) {
        return e != e;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(101),
      o = Math.abs;
    r(r.S, "Number", {
      isSafeInteger: function (e) {
        return i(e) && o(e) <= 9007199254740991;
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(99);
    r(r.S + r.F * (Number.parseFloat != i), "Number", { parseFloat: i });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(98);
    r(r.S + r.F * (Number.parseInt != i), "Number", { parseInt: i });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(102),
      o = Math.sqrt,
      s = Math.acosh;
    r(
      r.S +
        r.F *
          !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0),
      "Math",
      {
        acosh: function (e) {
          return (e = +e) < 1
            ? NaN
            : e > 94906265.62425156
            ? Math.log(e) + Math.LN2
            : i(e - 1 + o(e - 1) * o(e + 1));
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.asinh;
    r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
      asinh: function e(t) {
        return isFinite((t = +t)) && 0 != t
          ? t < 0
            ? -e(-t)
            : Math.log(t + Math.sqrt(t * t + 1))
          : t;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
      atanh: function (e) {
        return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(70);
    r(r.S, "Math", {
      cbrt: function (e) {
        return i((e = +e)) * Math.pow(Math.abs(e), 1 / 3);
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", {
      clz32: function (e) {
        return (e >>>= 0)
          ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E)
          : 32;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.exp;
    r(r.S, "Math", {
      cosh: function (e) {
        return (i((e = +e)) + i(-e)) / 2;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(71);
    r(r.S + r.F * (i != Math.expm1), "Math", { expm1: i });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", { fround: n(171) });
  },
  function (e, t, n) {
    var r = n(70),
      i = Math.pow,
      o = i(2, -52),
      s = i(2, -23),
      a = i(2, 127) * (2 - s),
      c = i(2, -126);
    e.exports =
      Math.fround ||
      function (e) {
        var t,
          n,
          i = Math.abs(e),
          u = r(e);
        return i < c
          ? u * (i / c / s + 1 / o - 1 / o) * c * s
          : (n = (t = (1 + s / o) * i) - (t - i)) > a || n != n
          ? u * (1 / 0)
          : u * n;
      };
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.abs;
    r(r.S, "Math", {
      hypot: function (e, t) {
        for (var n, r, o = 0, s = 0, a = arguments.length, c = 0; s < a; )
          c < (n = i(arguments[s++]))
            ? ((o = o * (r = c / n) * r + 1), (c = n))
            : (o += n > 0 ? (r = n / c) * r : n);
        return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o);
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = Math.imul;
    r(
      r.S +
        r.F *
          n(3)(function () {
            return -5 != i(4294967295, 5) || 2 != i.length;
          }),
      "Math",
      {
        imul: function (e, t) {
          var n = +e,
            r = +t,
            i = 65535 & n,
            o = 65535 & r;
          return (
            0 |
            (i * o +
              ((((65535 & (n >>> 16)) * o + i * (65535 & (r >>> 16))) << 16) >>>
                0))
          );
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", {
      log10: function (e) {
        return Math.log(e) * Math.LOG10E;
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", { log1p: n(102) });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", {
      log2: function (e) {
        return Math.log(e) / Math.LN2;
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", { sign: n(70) });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(71),
      o = Math.exp;
    r(
      r.S +
        r.F *
          n(3)(function () {
            return -2e-17 != !Math.sinh(-2e-17);
          }),
      "Math",
      {
        sinh: function (e) {
          return Math.abs((e = +e)) < 1
            ? (i(e) - i(-e)) / 2
            : (o(e - 1) - o(-e - 1)) * (Math.E / 2);
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(71),
      o = Math.exp;
    r(r.S, "Math", {
      tanh: function (e) {
        var t = i((e = +e)),
          n = i(-e);
        return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (o(e) + o(-e));
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Math", {
      trunc: function (e) {
        return (e > 0 ? Math.floor : Math.ceil)(e);
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(33),
      o = String.fromCharCode,
      s = String.fromCodePoint;
    r(r.S + r.F * (!!s && 1 != s.length), "String", {
      fromCodePoint: function (e) {
        for (var t, n = [], r = arguments.length, s = 0; r > s; ) {
          if (((t = +arguments[s++]), i(t, 1114111) !== t))
            throw RangeError(t + " is not a valid code point");
          n.push(
            t < 65536
              ? o(t)
              : o(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
          );
        }
        return n.join("");
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(16),
      o = n(7);
    r(r.S, "String", {
      raw: function (e) {
        for (
          var t = i(e.raw),
            n = o(t.length),
            r = arguments.length,
            s = [],
            a = 0;
          n > a;

        )
          s.push(String(t[a++])), a < r && s.push(String(arguments[a]));
        return s.join("");
      },
    });
  },
  function (e, t, n) {
    "use strict";
    n(40)("trim", function (e) {
      return function () {
        return e(this, 3);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(72)(!0);
    n(73)(
      String,
      "String",
      function (e) {
        (this._t = String(e)), (this._i = 0);
      },
      function () {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(72)(!1);
    r(r.P, "String", {
      codePointAt: function (e) {
        return i(this, e);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(7),
      o = n(74),
      s = "".endsWith;
    r(r.P + r.F * n(76)("endsWith"), "String", {
      endsWith: function (e) {
        var t = o(this, e, "endsWith"),
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = i(t.length),
          a = void 0 === n ? r : Math.min(i(n), r),
          c = String(e);
        return s ? s.call(t, c, a) : t.slice(a - c.length, a) === c;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(74);
    r(r.P + r.F * n(76)("includes"), "String", {
      includes: function (e) {
        return !!~i(this, e, "includes").indexOf(
          e,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.P, "String", { repeat: n(69) });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(7),
      o = n(74),
      s = "".startsWith;
    r(r.P + r.F * n(76)("startsWith"), "String", {
      startsWith: function (e) {
        var t = o(this, e, "startsWith"),
          n = i(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)
          ),
          r = String(e);
        return s ? s.call(t, r, n) : t.slice(n, n + r.length) === r;
      },
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("anchor", function (e) {
      return function (t) {
        return e(this, "a", "name", t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("big", function (e) {
      return function () {
        return e(this, "big", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("blink", function (e) {
      return function () {
        return e(this, "blink", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("bold", function (e) {
      return function () {
        return e(this, "b", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("fixed", function (e) {
      return function () {
        return e(this, "tt", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("fontcolor", function (e) {
      return function (t) {
        return e(this, "font", "color", t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("fontsize", function (e) {
      return function (t) {
        return e(this, "font", "size", t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("italics", function (e) {
      return function () {
        return e(this, "i", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("link", function (e) {
      return function (t) {
        return e(this, "a", "href", t);
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("small", function (e) {
      return function () {
        return e(this, "small", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("strike", function (e) {
      return function () {
        return e(this, "strike", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("sub", function (e) {
      return function () {
        return e(this, "sub", "", "");
      };
    });
  },
  function (e, t, n) {
    "use strict";
    n(13)("sup", function (e) {
      return function () {
        return e(this, "sup", "", "");
      };
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Date", {
      now: function () {
        return new Date().getTime();
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(11),
      o = n(27);
    r(
      r.P +
        r.F *
          n(3)(function () {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function () {
                    return 1;
                  },
                })
            );
          }),
      "Date",
      {
        toJSON: function (e) {
          var t = i(this),
            n = o(t);
          return "number" != typeof n || isFinite(n) ? t.toISOString() : null;
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(206);
    r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
      toISOString: i,
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      i = Date.prototype.getTime,
      o = Date.prototype.toISOString,
      s = function (e) {
        return e > 9 ? e : "0" + e;
      };
    e.exports =
      r(function () {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001));
      }) ||
      !r(function () {
        o.call(new Date(NaN));
      })
        ? function () {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var e = this,
              t = e.getUTCFullYear(),
              n = e.getUTCMilliseconds(),
              r = t < 0 ? "-" : t > 9999 ? "+" : "";
            return (
              r +
              ("00000" + Math.abs(t)).slice(r ? -6 : -4) +
              "-" +
              s(e.getUTCMonth() + 1) +
              "-" +
              s(e.getUTCDate()) +
              "T" +
              s(e.getUTCHours()) +
              ":" +
              s(e.getUTCMinutes()) +
              ":" +
              s(e.getUTCSeconds()) +
              "." +
              (n > 99 ? n : "0" + s(n)) +
              "Z"
            );
          }
        : o;
  },
  function (e, t, n) {
    var r = Date.prototype,
      i = r.toString,
      o = r.getTime;
    new Date(NaN) + "" != "Invalid Date" &&
      n(12)(r, "toString", function () {
        var e = o.call(this);
        return e == e ? i.call(this) : "Invalid Date";
      });
  },
  function (e, t, n) {
    var r = n(6)("toPrimitive"),
      i = Date.prototype;
    r in i || n(15)(i, r, n(209));
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      i = n(27);
    e.exports = function (e) {
      if ("string" !== e && "number" !== e && "default" !== e)
        throw TypeError("Incorrect hint");
      return i(r(this), "number" != e);
    };
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Array", { isArray: n(52) });
  },
  function (e, t, n) {
    "use strict";
    var r = n(18),
      i = n(1),
      o = n(11),
      s = n(104),
      a = n(77),
      c = n(7),
      u = n(78),
      l = n(79);
    i(
      i.S +
        i.F *
          !n(53)(function (e) {
            Array.from(e);
          }),
      "Array",
      {
        from: function (e) {
          var t,
            n,
            i,
            h,
            d = o(e),
            f = "function" == typeof this ? this : Array,
            p = arguments.length,
            v = p > 1 ? arguments[1] : void 0,
            g = void 0 !== v,
            m = 0,
            y = l(d);
          if (
            (g && (v = r(v, p > 2 ? arguments[2] : void 0, 2)),
            null == y || (f == Array && a(y)))
          )
            for (n = new f((t = c(d.length))); t > m; m++)
              u(n, m, g ? v(d[m], m) : d[m]);
          else
            for (h = y.call(d), n = new f(); !(i = h.next()).done; m++)
              u(n, m, g ? s(h, v, [i.value, m], !0) : i.value);
          return (n.length = m), n;
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(78);
    r(
      r.S +
        r.F *
          n(3)(function () {
            function e() {}
            return !(Array.of.call(e) instanceof e);
          }),
      "Array",
      {
        of: function () {
          for (
            var e = 0,
              t = arguments.length,
              n = new ("function" == typeof this ? this : Array)(t);
            t > e;

          )
            i(n, e, arguments[e++]);
          return (n.length = t), n;
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(16),
      o = [].join;
    r(r.P + r.F * (n(45) != Object || !n(17)(o)), "Array", {
      join: function (e) {
        return o.call(i(this), void 0 === e ? "," : e);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(65),
      o = n(24),
      s = n(33),
      a = n(7),
      c = [].slice;
    r(
      r.P +
        r.F *
          n(3)(function () {
            i && c.call(i);
          }),
      "Array",
      {
        slice: function (e, t) {
          var n = a(this.length),
            r = o(this);
          if (((t = void 0 === t ? n : t), "Array" == r))
            return c.call(this, e, t);
          for (
            var i = s(e, n), u = s(t, n), l = a(u - i), h = new Array(l), d = 0;
            d < l;
            d++
          )
            h[d] = "String" == r ? this.charAt(i + d) : this[i + d];
          return h;
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(19),
      o = n(11),
      s = n(3),
      a = [].sort,
      c = [1, 2, 3];
    r(
      r.P +
        r.F *
          (s(function () {
            c.sort(void 0);
          }) ||
            !s(function () {
              c.sort(null);
            }) ||
            !n(17)(a)),
      "Array",
      {
        sort: function (e) {
          return void 0 === e ? a.call(o(this)) : a.call(o(this), i(e));
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(0),
      o = n(17)([].forEach, !0);
    r(r.P + r.F * !o, "Array", {
      forEach: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    var r = n(5),
      i = n(52),
      o = n(6)("species");
    e.exports = function (e) {
      var t;
      return (
        i(e) &&
          ("function" != typeof (t = e.constructor) ||
            (t !== Array && !i(t.prototype)) ||
            (t = void 0),
          r(t) && null === (t = t[o]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(1);
    r(r.P + r.F * !n(17)([].map, !0), "Array", {
      map: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(2);
    r(r.P + r.F * !n(17)([].filter, !0), "Array", {
      filter: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(3);
    r(r.P + r.F * !n(17)([].some, !0), "Array", {
      some: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(4);
    r(r.P + r.F * !n(17)([].every, !0), "Array", {
      every: function (e) {
        return i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(106);
    r(r.P + r.F * !n(17)([].reduce, !0), "Array", {
      reduce: function (e) {
        return i(this, e, arguments.length, arguments[1], !1);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(106);
    r(r.P + r.F * !n(17)([].reduceRight, !0), "Array", {
      reduceRight: function (e) {
        return i(this, e, arguments.length, arguments[1], !0);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(50)(!1),
      o = [].indexOf,
      s = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (s || !n(17)(o)), "Array", {
      indexOf: function (e) {
        return s ? o.apply(this, arguments) || 0 : i(this, e, arguments[1]);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(16),
      o = n(20),
      s = n(7),
      a = [].lastIndexOf,
      c = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (c || !n(17)(a)), "Array", {
      lastIndexOf: function (e) {
        if (c) return a.apply(this, arguments) || 0;
        var t = i(this),
          n = s(t.length),
          r = n - 1;
        for (
          arguments.length > 1 && (r = Math.min(r, o(arguments[1]))),
            r < 0 && (r = n + r);
          r >= 0;
          r--
        )
          if (r in t && t[r] === e) return r || 0;
        return -1;
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.P, "Array", { copyWithin: n(107) }), n(37)("copyWithin");
  },
  function (e, t, n) {
    var r = n(1);
    r(r.P, "Array", { fill: n(80) }), n(37)("fill");
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(5),
      o = !0;
    "find" in [] &&
      Array(1).find(function () {
        o = !1;
      }),
      r(r.P + r.F * o, "Array", {
        find: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      n(37)("find");
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(23)(6),
      o = "findIndex",
      s = !0;
    o in [] &&
      Array(1)[o](function () {
        s = !1;
      }),
      r(r.P + r.F * s, "Array", {
        findIndex: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      n(37)(o);
  },
  function (e, t, n) {
    n(42)("Array");
  },
  function (e, t, n) {
    var r = n(2),
      i = n(68),
      o = n(10).f,
      s = n(35).f,
      a = n(75),
      c = n(54),
      u = r.RegExp,
      l = u,
      h = u.prototype,
      d = /a/g,
      f = /a/g,
      p = new u(d) !== d;
    if (
      n(9) &&
      (!p ||
        n(3)(function () {
          return (
            (f[n(6)("match")] = !1),
            u(d) != d || u(f) == f || "/a/i" != u(d, "i")
          );
        }))
    ) {
      u = function (e, t) {
        var n = this instanceof u,
          r = a(e),
          o = void 0 === t;
        return !n && r && e.constructor === u && o
          ? e
          : i(
              p
                ? new l(r && !o ? e.source : e, t)
                : l(
                    (r = e instanceof u) ? e.source : e,
                    r && o ? c.call(e) : t
                  ),
              n ? this : h,
              u
            );
      };
      for (
        var v = function (e) {
            (e in u) ||
              o(u, e, {
                configurable: !0,
                get: function () {
                  return l[e];
                },
                set: function (t) {
                  l[e] = t;
                },
              });
          },
          g = s(l),
          m = 0;
        g.length > m;

      )
        v(g[m++]);
      (h.constructor = u), (u.prototype = h), n(12)(r, "RegExp", u);
    }
    n(42)("RegExp");
  },
  function (e, t, n) {
    "use strict";
    n(110);
    var r = n(4),
      i = n(54),
      o = n(9),
      s = /./.toString,
      a = function (e) {
        n(12)(RegExp.prototype, "toString", e, !0);
      };
    n(3)(function () {
      return "/a/b" != s.call({ source: "a", flags: "b" });
    })
      ? a(function () {
          var e = r(this);
          return "/".concat(
            e.source,
            "/",
            "flags" in e
              ? e.flags
              : !o && e instanceof RegExp
              ? i.call(e)
              : void 0
          );
        })
      : "toString" != s.name &&
        a(function () {
          return s.call(this);
        });
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      i = n(7),
      o = n(83),
      s = n(55);
    n(56)("match", 1, function (e, t, n, a) {
      return [
        function (n) {
          var r = e(this),
            i = null == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
        },
        function (e) {
          var t = a(n, e, this);
          if (t.done) return t.value;
          var c = r(e),
            u = String(this);
          if (!c.global) return s(c, u);
          var l = c.unicode;
          c.lastIndex = 0;
          for (var h, d = [], f = 0; null !== (h = s(c, u)); ) {
            var p = String(h[0]);
            (d[f] = p),
              "" === p && (c.lastIndex = o(u, i(c.lastIndex), l)),
              f++;
          }
          return 0 === f ? null : d;
        },
      ];
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      i = n(11),
      o = n(7),
      s = n(20),
      a = n(83),
      c = n(55),
      u = Math.max,
      l = Math.min,
      h = Math.floor,
      d = /\$([$&`']|\d\d?|<[^>]*>)/g,
      f = /\$([$&`']|\d\d?)/g;
    n(56)("replace", 2, function (e, t, n, p) {
      return [
        function (r, i) {
          var o = e(this),
            s = null == r ? void 0 : r[t];
          return void 0 !== s ? s.call(r, o, i) : n.call(String(o), r, i);
        },
        function (e, t) {
          var i = p(n, e, this, t);
          if (i.done) return i.value;
          var h = r(e),
            d = String(this),
            f = "function" == typeof t;
          f || (t = String(t));
          var g = h.global;
          if (g) {
            var m = h.unicode;
            h.lastIndex = 0;
          }
          for (var y = []; ; ) {
            var b = c(h, d);
            if (null === b) break;
            if ((y.push(b), !g)) break;
            "" === String(b[0]) && (h.lastIndex = a(d, o(h.lastIndex), m));
          }
          for (var w, _ = "", S = 0, I = 0; I < y.length; I++) {
            b = y[I];
            for (
              var E = String(b[0]),
                O = u(l(s(b.index), d.length), 0),
                T = [],
                k = 1;
              k < b.length;
              k++
            )
              T.push(void 0 === (w = b[k]) ? w : String(w));
            var x = b.groups;
            if (f) {
              var A = [E].concat(T, O, d);
              void 0 !== x && A.push(x);
              var P = String(t.apply(void 0, A));
            } else P = v(E, d, O, T, x, t);
            O >= S && ((_ += d.slice(S, O) + P), (S = O + E.length));
          }
          return _ + d.slice(S);
        },
      ];
      function v(e, t, r, o, s, a) {
        var c = r + e.length,
          u = o.length,
          l = f;
        return (
          void 0 !== s && ((s = i(s)), (l = d)),
          n.call(a, l, function (n, i) {
            var a;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, r);
              case "'":
                return t.slice(c);
              case "<":
                a = s[i.slice(1, -1)];
                break;
              default:
                var l = +i;
                if (0 === l) return n;
                if (l > u) {
                  var d = h(l / 10);
                  return 0 === d
                    ? n
                    : d <= u
                    ? void 0 === o[d - 1]
                      ? i.charAt(1)
                      : o[d - 1] + i.charAt(1)
                    : n;
                }
                a = o[l - 1];
            }
            return void 0 === a ? "" : a;
          })
        );
      }
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      i = n(95),
      o = n(55);
    n(56)("search", 1, function (e, t, n, s) {
      return [
        function (n) {
          var r = e(this),
            i = null == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
        },
        function (e) {
          var t = s(n, e, this);
          if (t.done) return t.value;
          var a = r(e),
            c = String(this),
            u = a.lastIndex;
          i(u, 0) || (a.lastIndex = 0);
          var l = o(a, c);
          return (
            i(a.lastIndex, u) || (a.lastIndex = u), null === l ? -1 : l.index
          );
        },
      ];
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(75),
      i = n(4),
      o = n(48),
      s = n(83),
      a = n(7),
      c = n(55),
      u = n(82),
      l = n(3),
      h = Math.min,
      d = [].push,
      f = "length",
      p = !l(function () {
        RegExp(4294967295, "y");
      });
    n(56)("split", 2, function (e, t, n, l) {
      var v;
      return (
        (v =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1)[f] ||
          2 != "ab".split(/(?:ab)*/)[f] ||
          4 != ".".split(/(.?)(.?)/)[f] ||
          ".".split(/()()/)[f] > 1 ||
          "".split(/.?/)[f]
            ? function (e, t) {
                var i = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!r(e)) return n.call(i, e, t);
                for (
                  var o,
                    s,
                    a,
                    c = [],
                    l =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    h = 0,
                    p = void 0 === t ? 4294967295 : t >>> 0,
                    v = new RegExp(e.source, l + "g");
                  (o = u.call(v, i)) &&
                  !(
                    (s = v.lastIndex) > h &&
                    (c.push(i.slice(h, o.index)),
                    o[f] > 1 && o.index < i[f] && d.apply(c, o.slice(1)),
                    (a = o[0][f]),
                    (h = s),
                    c[f] >= p)
                  );

                )
                  v.lastIndex === o.index && v.lastIndex++;
                return (
                  h === i[f]
                    ? (!a && v.test("")) || c.push("")
                    : c.push(i.slice(h)),
                  c[f] > p ? c.slice(0, p) : c
                );
              }
            : "0".split(void 0, 0)[f]
            ? function (e, t) {
                return void 0 === e && 0 === t ? [] : n.call(this, e, t);
              }
            : n),
        [
          function (n, r) {
            var i = e(this),
              o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, i, r) : v.call(String(i), n, r);
          },
          function (e, t) {
            var r = l(v, e, this, t, v !== n);
            if (r.done) return r.value;
            var u = i(e),
              d = String(this),
              f = o(u, RegExp),
              g = u.unicode,
              m =
                (u.ignoreCase ? "i" : "") +
                (u.multiline ? "m" : "") +
                (u.unicode ? "u" : "") +
                (p ? "y" : "g"),
              y = new f(p ? u : "^(?:" + u.source + ")", m),
              b = void 0 === t ? 4294967295 : t >>> 0;
            if (0 === b) return [];
            if (0 === d.length) return null === c(y, d) ? [d] : [];
            for (var w = 0, _ = 0, S = []; _ < d.length; ) {
              y.lastIndex = p ? _ : 0;
              var I,
                E = c(y, p ? d : d.slice(_));
              if (
                null === E ||
                (I = h(a(y.lastIndex + (p ? 0 : _)), d.length)) === w
              )
                _ = s(d, _, g);
              else {
                if ((S.push(d.slice(w, _)), S.length === b)) return S;
                for (var O = 1; O <= E.length - 1; O++)
                  if ((S.push(E[O]), S.length === b)) return S;
                _ = w = I;
              }
            }
            return S.push(d.slice(w)), S;
          },
        ]
      );
    });
  },
  function (e, t, n) {
    var r = n(2),
      i = n(84).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      s = r.process,
      a = r.Promise,
      c = "process" == n(24)(s);
    e.exports = function () {
      var e,
        t,
        n,
        u = function () {
          var r, i;
          for (c && (r = s.domain) && r.exit(); e; ) {
            (i = e.fn), (e = e.next);
            try {
              i();
            } catch (r) {
              throw (e ? n() : (t = void 0), r);
            }
          }
          (t = void 0), r && r.enter();
        };
      if (c)
        n = function () {
          s.nextTick(u);
        };
      else if (!o || (r.navigator && r.navigator.standalone))
        if (a && a.resolve) {
          var l = a.resolve(void 0);
          n = function () {
            l.then(u);
          };
        } else
          n = function () {
            i.call(r, u);
          };
      else {
        var h = !0,
          d = document.createTextNode("");
        new o(u).observe(d, { characterData: !0 }),
          (n = function () {
            d.data = h = !h;
          });
      }
      return function (r) {
        var i = { fn: r, next: void 0 };
        t && (t.next = i), e || ((e = i), n()), (t = i);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(114),
      i = n(38);
    e.exports = n(59)(
      "Map",
      function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        get: function (e) {
          var t = r.getEntry(i(this, "Map"), e);
          return t && t.v;
        },
        set: function (e, t) {
          return r.def(i(this, "Map"), 0 === e ? 0 : e, t);
        },
      },
      r,
      !0
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(114),
      i = n(38);
    e.exports = n(59)(
      "Set",
      function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function (e) {
          return r.def(i(this, "Set"), (e = 0 === e ? 0 : e), e);
        },
      },
      r
    );
  },
  function (e, t, n) {
    "use strict";
    var r,
      i = n(2),
      o = n(23)(0),
      s = n(12),
      a = n(28),
      c = n(94),
      u = n(115),
      l = n(5),
      h = n(38),
      d = n(38),
      f = !i.ActiveXObject && "ActiveXObject" in i,
      p = a.getWeak,
      v = Object.isExtensible,
      g = u.ufstore,
      m = function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      y = {
        get: function (e) {
          if (l(e)) {
            var t = p(e);
            return !0 === t
              ? g(h(this, "WeakMap")).get(e)
              : t
              ? t[this._i]
              : void 0;
          }
        },
        set: function (e, t) {
          return u.def(h(this, "WeakMap"), e, t);
        },
      },
      b = (e.exports = n(59)("WeakMap", m, y, u, !0, !0));
    d &&
      f &&
      (c((r = u.getConstructor(m, "WeakMap")).prototype, y),
      (a.NEED = !0),
      o(["delete", "has", "get", "set"], function (e) {
        var t = b.prototype,
          n = t[e];
        s(t, e, function (t, i) {
          if (l(t) && !v(t)) {
            this._f || (this._f = new r());
            var o = this._f[e](t, i);
            return "set" == e ? this : o;
          }
          return n.call(this, t, i);
        });
      }));
  },
  function (e, t, n) {
    "use strict";
    var r = n(115),
      i = n(38);
    n(59)(
      "WeakSet",
      function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function (e) {
          return r.def(i(this, "WeakSet"), e, !0);
        },
      },
      r,
      !1,
      !0
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(60),
      o = n(85),
      s = n(4),
      a = n(33),
      c = n(7),
      u = n(5),
      l = n(2).ArrayBuffer,
      h = n(48),
      d = o.ArrayBuffer,
      f = o.DataView,
      p = i.ABV && l.isView,
      v = d.prototype.slice,
      g = i.VIEW;
    r(r.G + r.W + r.F * (l !== d), { ArrayBuffer: d }),
      r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
        isView: function (e) {
          return (p && p(e)) || (u(e) && g in e);
        },
      }),
      r(
        r.P +
          r.U +
          r.F *
            n(3)(function () {
              return !new d(2).slice(1, void 0).byteLength;
            }),
        "ArrayBuffer",
        {
          slice: function (e, t) {
            if (void 0 !== v && void 0 === t) return v.call(s(this), e);
            for (
              var n = s(this).byteLength,
                r = a(e, n),
                i = a(void 0 === t ? n : t, n),
                o = new (h(this, d))(c(i - r)),
                u = new f(this),
                l = new f(o),
                p = 0;
              r < i;

            )
              l.setUint8(p++, u.getUint8(r++));
            return o;
          },
        }
      ),
      n(42)("ArrayBuffer");
  },
  function (e, t, n) {
    var r = n(1);
    r(r.G + r.W + r.F * !n(60).ABV, { DataView: n(85).DataView });
  },
  function (e, t, n) {
    n(26)("Int8", 1, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Uint8", 1, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)(
      "Uint8",
      1,
      function (e) {
        return function (t, n, r) {
          return e(this, t, n, r);
        };
      },
      !0
    );
  },
  function (e, t, n) {
    n(26)("Int16", 2, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Uint16", 2, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Int32", 4, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Uint32", 4, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Float32", 4, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    n(26)("Float64", 8, function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(19),
      o = n(4),
      s = (n(2).Reflect || {}).apply,
      a = Function.apply;
    r(
      r.S +
        r.F *
          !n(3)(function () {
            s(function () {});
          }),
      "Reflect",
      {
        apply: function (e, t, n) {
          var r = i(e),
            c = o(n);
          return s ? s(r, t, c) : a.call(r, t, c);
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(34),
      o = n(19),
      s = n(4),
      a = n(5),
      c = n(3),
      u = n(96),
      l = (n(2).Reflect || {}).construct,
      h = c(function () {
        function e() {}
        return !(l(function () {}, [], e) instanceof e);
      }),
      d = !c(function () {
        l(function () {});
      });
    r(r.S + r.F * (h || d), "Reflect", {
      construct: function (e, t) {
        o(e), s(t);
        var n = arguments.length < 3 ? e : o(arguments[2]);
        if (d && !h) return l(e, t, n);
        if (e == n) {
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
          }
          var r = [null];
          return r.push.apply(r, t), new (u.apply(e, r))();
        }
        var c = n.prototype,
          f = i(a(c) ? c : Object.prototype),
          p = Function.apply.call(e, f, t);
        return a(p) ? p : f;
      },
    });
  },
  function (e, t, n) {
    var r = n(10),
      i = n(1),
      o = n(4),
      s = n(27);
    i(
      i.S +
        i.F *
          n(3)(function () {
            Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
      "Reflect",
      {
        defineProperty: function (e, t, n) {
          o(e), (t = s(t, !0)), o(n);
          try {
            return r.f(e, t, n), !0;
          } catch (e) {
            return !1;
          }
        },
      }
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(21).f,
      o = n(4);
    r(r.S, "Reflect", {
      deleteProperty: function (e, t) {
        var n = i(o(e), t);
        return !(n && !n.configurable) && delete e[t];
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(4),
      o = function (e) {
        (this._t = i(e)), (this._i = 0);
        var t,
          n = (this._k = []);
        for (t in e) n.push(t);
      };
    n(103)(o, "Object", function () {
      var e,
        t = this._k;
      do {
        if (this._i >= t.length) return { value: void 0, done: !0 };
      } while (!((e = t[this._i++]) in this._t));
      return { value: e, done: !1 };
    }),
      r(r.S, "Reflect", {
        enumerate: function (e) {
          return new o(e);
        },
      });
  },
  function (e, t, n) {
    var r = n(21),
      i = n(36),
      o = n(14),
      s = n(1),
      a = n(5),
      c = n(4);
    s(s.S, "Reflect", {
      get: function e(t, n) {
        var s,
          u,
          l = arguments.length < 3 ? t : arguments[2];
        return c(t) === l
          ? t[n]
          : (s = r.f(t, n))
          ? o(s, "value")
            ? s.value
            : void 0 !== s.get
            ? s.get.call(l)
            : void 0
          : a((u = i(t)))
          ? e(u, n, l)
          : void 0;
      },
    });
  },
  function (e, t, n) {
    var r = n(21),
      i = n(1),
      o = n(4);
    i(i.S, "Reflect", {
      getOwnPropertyDescriptor: function (e, t) {
        return r.f(o(e), t);
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(36),
      o = n(4);
    r(r.S, "Reflect", {
      getPrototypeOf: function (e) {
        return i(o(e));
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Reflect", {
      has: function (e, t) {
        return t in e;
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(4),
      o = Object.isExtensible;
    r(r.S, "Reflect", {
      isExtensible: function (e) {
        return i(e), !o || o(e);
      },
    });
  },
  function (e, t, n) {
    var r = n(1);
    r(r.S, "Reflect", { ownKeys: n(117) });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(4),
      o = Object.preventExtensions;
    r(r.S, "Reflect", {
      preventExtensions: function (e) {
        i(e);
        try {
          return o && o(e), !0;
        } catch (e) {
          return !1;
        }
      },
    });
  },
  function (e, t, n) {
    var r = n(10),
      i = n(21),
      o = n(36),
      s = n(14),
      a = n(1),
      c = n(29),
      u = n(4),
      l = n(5);
    a(a.S, "Reflect", {
      set: function e(t, n, a) {
        var h,
          d,
          f = arguments.length < 4 ? t : arguments[3],
          p = i.f(u(t), n);
        if (!p) {
          if (l((d = o(t)))) return e(d, n, a, f);
          p = c(0);
        }
        if (s(p, "value")) {
          if (!1 === p.writable || !l(f)) return !1;
          if ((h = i.f(f, n))) {
            if (h.get || h.set || !1 === h.writable) return !1;
            (h.value = a), r.f(f, n, h);
          } else r.f(f, n, c(0, a));
          return !0;
        }
        return void 0 !== p.set && (p.set.call(f, a), !0);
      },
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(66);
    i &&
      r(r.S, "Reflect", {
        setPrototypeOf: function (e, t) {
          i.check(e, t);
          try {
            return i.set(e, t), !0;
          } catch (e) {
            return !1;
          }
        },
      });
  },
  function (e, t, n) {
    n(269), (e.exports = n(8).Array.includes);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(50)(!0);
    r(r.P, "Array", {
      includes: function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }),
      n(37)("includes");
  },
  function (e, t, n) {
    n(271), (e.exports = n(8).Array.flatMap);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(272),
      o = n(11),
      s = n(7),
      a = n(19),
      c = n(105);
    r(r.P, "Array", {
      flatMap: function (e) {
        var t,
          n,
          r = o(this);
        return (
          a(e),
          (t = s(r.length)),
          (n = c(r, 0)),
          i(n, r, r, t, 0, 1, e, arguments[1]),
          n
        );
      },
    }),
      n(37)("flatMap");
  },
  function (e, t, n) {
    "use strict";
    var r = n(52),
      i = n(5),
      o = n(7),
      s = n(18),
      a = n(6)("isConcatSpreadable");
    e.exports = function e(t, n, c, u, l, h, d, f) {
      for (var p, v, g = l, m = 0, y = !!d && s(d, f, 3); m < u; ) {
        if (m in c) {
          if (
            ((p = y ? y(c[m], m, n) : c[m]),
            (v = !1),
            i(p) && (v = void 0 !== (v = p[a]) ? !!v : r(p)),
            v && h > 0)
          )
            g = e(t, n, p, o(p.length), g, h - 1) - 1;
          else {
            if (g >= 9007199254740991) throw TypeError();
            t[g] = p;
          }
          g++;
        }
        m++;
      }
      return g;
    };
  },
  function (e, t, n) {
    n(274), (e.exports = n(8).String.padStart);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(118),
      o = n(58),
      s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * s, "String", {
      padStart: function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
      },
    });
  },
  function (e, t, n) {
    n(276), (e.exports = n(8).String.padEnd);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(118),
      o = n(58),
      s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * s, "String", {
      padEnd: function (e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
      },
    });
  },
  function (e, t, n) {
    n(278), (e.exports = n(8).String.trimLeft);
  },
  function (e, t, n) {
    "use strict";
    n(40)(
      "trimLeft",
      function (e) {
        return function () {
          return e(this, 1);
        };
      },
      "trimStart"
    );
  },
  function (e, t, n) {
    n(280), (e.exports = n(8).String.trimRight);
  },
  function (e, t, n) {
    "use strict";
    n(40)(
      "trimRight",
      function (e) {
        return function () {
          return e(this, 2);
        };
      },
      "trimEnd"
    );
  },
  function (e, t, n) {
    n(282), (e.exports = n(62).f("asyncIterator"));
  },
  function (e, t, n) {
    n(90)("asyncIterator");
  },
  function (e, t, n) {
    n(284), (e.exports = n(8).Object.getOwnPropertyDescriptors);
  },
  function (e, t, n) {
    var r = n(1),
      i = n(117),
      o = n(16),
      s = n(21),
      a = n(78);
    r(r.S, "Object", {
      getOwnPropertyDescriptors: function (e) {
        for (
          var t, n, r = o(e), c = s.f, u = i(r), l = {}, h = 0;
          u.length > h;

        )
          void 0 !== (n = c(r, (t = u[h++]))) && a(l, t, n);
        return l;
      },
    });
  },
  function (e, t, n) {
    n(286), (e.exports = n(8).Object.values);
  },
  function (e, t, n) {
    var r = n(1),
      i = n(119)(!1);
    r(r.S, "Object", {
      values: function (e) {
        return i(e);
      },
    });
  },
  function (e, t, n) {
    n(288), (e.exports = n(8).Object.entries);
  },
  function (e, t, n) {
    var r = n(1),
      i = n(119)(!0);
    r(r.S, "Object", {
      entries: function (e) {
        return i(e);
      },
    });
  },
  function (e, t, n) {
    "use strict";
    n(111), n(290), (e.exports = n(8).Promise.finally);
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(8),
      o = n(2),
      s = n(48),
      a = n(113);
    r(r.P + r.R, "Promise", {
      finally: function (e) {
        var t = s(this, i.Promise || o.Promise),
          n = "function" == typeof e;
        return this.then(
          n
            ? function (n) {
                return a(t, e()).then(function () {
                  return n;
                });
              }
            : e,
          n
            ? function (n) {
                return a(t, e()).then(function () {
                  throw n;
                });
              }
            : e
        );
      },
    });
  },
  function (e, t, n) {
    n(292), n(293), n(294), (e.exports = n(8));
  },
  function (e, t, n) {
    var r = n(2),
      i = n(1),
      o = n(58),
      s = [].slice,
      a = /MSIE .\./.test(o),
      c = function (e) {
        return function (t, n) {
          var r = arguments.length > 2,
            i = !!r && s.call(arguments, 2);
          return e(
            r
              ? function () {
                  ("function" == typeof t ? t : Function(t)).apply(this, i);
                }
              : t,
            n
          );
        };
      };
    i(i.G + i.B + i.F * a, {
      setTimeout: c(r.setTimeout),
      setInterval: c(r.setInterval),
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(84);
    r(r.G + r.B, { setImmediate: i.set, clearImmediate: i.clear });
  },
  function (e, t, n) {
    for (
      var r = n(81),
        i = n(32),
        o = n(12),
        s = n(2),
        a = n(15),
        c = n(41),
        u = n(6),
        l = u("iterator"),
        h = u("toStringTag"),
        d = c.Array,
        f = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        p = i(f),
        v = 0;
      v < p.length;
      v++
    ) {
      var g,
        m = p[v],
        y = f[m],
        b = s[m],
        w = b && b.prototype;
      if (w && (w[l] || a(w, l, d), w[h] || a(w, h, m), (c[m] = d), y))
        for (g in r) w[g] || o(w, g, r[g], !0);
    }
  },
  function (e, t, n) {
    var r = (function (e) {
      "use strict";
      var t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        s = r.toStringTag || "@@toStringTag";
      function a(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        a({}, "");
      } catch (e) {
        a = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function c(e, t, n, r) {
        var i = t && t.prototype instanceof h ? t : h,
          o = Object.create(i.prototype),
          s = new I(r || []);
        return (
          (o._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (i, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw o;
                return O();
              }
              for (n.method = i, n.arg = o; ; ) {
                var s = n.delegate;
                if (s) {
                  var a = w(s, n);
                  if (a) {
                    if (a === l) continue;
                    return a;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = u(e, t, n);
                if ("normal" === c.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), c.arg === l)
                  )
                    continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          })(e, n, s)),
          o
        );
      }
      function u(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = c;
      var l = {};
      function h() {}
      function d() {}
      function f() {}
      var p = {};
      a(p, i, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        g = v && v(v(E([])));
      g && g !== t && n.call(g, i) && (p = g);
      var m = (f.prototype = h.prototype = Object.create(p));
      function y(e) {
        ["next", "throw", "return"].forEach(function (t) {
          a(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function b(e, t) {
        var r;
        this._invoke = function (i, o) {
          function s() {
            return new t(function (r, s) {
              !(function r(i, o, s, a) {
                var c = u(e[i], e, o);
                if ("throw" !== c.type) {
                  var l = c.arg,
                    h = l.value;
                  return h && "object" == typeof h && n.call(h, "__await")
                    ? t.resolve(h.__await).then(
                        function (e) {
                          r("next", e, s, a);
                        },
                        function (e) {
                          r("throw", e, s, a);
                        }
                      )
                    : t.resolve(h).then(
                        function (e) {
                          (l.value = e), s(l);
                        },
                        function (e) {
                          return r("throw", e, s, a);
                        }
                      );
                }
                a(c.arg);
              })(i, o, r, s);
            });
          }
          return (r = r ? r.then(s, s) : s());
        };
      }
      function w(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              w(e, t),
              "throw" === t.method)
            )
              return l;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return l;
        }
        var r = u(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), l;
        var i = r.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              l)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            l);
      }
      function _(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function I(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(_, this),
          this.reset(!0);
      }
      function E(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: O };
      }
      function O() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = f),
        a(m, "constructor", f),
        a(f, "constructor", d),
        (d.displayName = a(f, s, "GeneratorFunction")),
        (e.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === d || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, f)
              : ((e.__proto__ = f), a(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(m)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        y(b.prototype),
        a(b.prototype, o, function () {
          return this;
        }),
        (e.AsyncIterator = b),
        (e.async = function (t, n, r, i, o) {
          void 0 === o && (o = Promise);
          var s = new b(c(t, n, r, i), o);
          return e.isGeneratorFunction(n)
            ? s
            : s.next().then(function (e) {
                return e.done ? e.value : s.next();
              });
        }),
        y(m),
        a(m, s, "Generator"),
        a(m, i, function () {
          return this;
        }),
        a(m, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = E),
        (I.prototype = {
          constructor: I,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                s = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var a = n.call(o, "catchLoc"),
                  c = n.call(o, "finallyLoc");
                if (a && c) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!c)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var s = o ? o.completion : {};
            return (
              (s.type = e),
              (s.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                : this.complete(s)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              l
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), S(n), l;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  S(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: E(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          },
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (e) {
      "object" == typeof globalThis
        ? (globalThis.regeneratorRuntime = r)
        : Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function (e, t, n) {
    n(297), (e.exports = n(120).global);
  },
  function (e, t, n) {
    var r = n(298);
    r(r.G, { global: n(86) });
  },
  function (e, t, n) {
    var r = n(86),
      i = n(120),
      o = n(299),
      s = n(301),
      a = n(308),
      c = function (e, t, n) {
        var u,
          l,
          h,
          d = e & c.F,
          f = e & c.G,
          p = e & c.S,
          v = e & c.P,
          g = e & c.B,
          m = e & c.W,
          y = f ? i : i[t] || (i[t] = {}),
          b = y.prototype,
          w = f ? r : p ? r[t] : (r[t] || {}).prototype;
        for (u in (f && (n = t), n))
          ((l = !d && w && void 0 !== w[u]) && a(y, u)) ||
            ((h = l ? w[u] : n[u]),
            (y[u] =
              f && "function" != typeof w[u]
                ? n[u]
                : g && l
                ? o(h, r)
                : m && w[u] == h
                ? (function (e) {
                    var t = function (t, n, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(h)
                : v && "function" == typeof h
                ? o(Function.call, h)
                : h),
            v &&
              (((y.virtual || (y.virtual = {}))[u] = h),
              e & c.R && b && !b[u] && s(b, u, h)));
      };
    (c.F = 1),
      (c.G = 2),
      (c.S = 4),
      (c.P = 8),
      (c.B = 16),
      (c.W = 32),
      (c.U = 64),
      (c.R = 128),
      (e.exports = c);
  },
  function (e, t, n) {
    var r = n(300);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(302),
      i = n(307);
    e.exports = n(88)
      ? function (e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(303),
      i = n(304),
      o = n(306),
      s = Object.defineProperty;
    t.f = n(88)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return s(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var r = n(87);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t, n) {
    e.exports =
      !n(88) &&
      !n(121)(function () {
        return (
          7 !=
          Object.defineProperty(n(305)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var r = n(87),
      i = n(86).document,
      o = r(i) && r(i.createElement);
    e.exports = function (e) {
      return o ? i.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var r = n(87);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    n(312), n(311);
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {},
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    class i {
      constructor(e, t, n) {
        (this.name = e),
          (this.instanceFactory = t),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      setInstantiationMode(e) {
        return (this.instantiationMode = e), this;
      }
      setMultipleInstances(e) {
        return (this.multipleInstances = e), this;
      }
      setServiceProps(e) {
        return (this.serviceProps = e), this;
      }
      setInstanceCreatedCallback(e) {
        return (this.onInstanceCreated = e), this;
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class o {
      constructor(e, t) {
        (this.name = e),
          (this.container = t),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map()),
          (this.instancesOptions = new Map()),
          (this.onInitCallbacks = new Map());
      }
      get(e) {
        const t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          const e = new r.a();
          if (
            (this.instancesDeferred.set(t, e),
            this.isInitialized(t) || this.shouldAutoInitialize())
          )
            try {
              const n = this.getOrInitializeService({ instanceIdentifier: t });
              n && e.resolve(n);
            } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise;
      }
      getImmediate(e) {
        var t;
        const n = this.normalizeInstanceIdentifier(
            null == e ? void 0 : e.identifier
          ),
          r =
            null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
        if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
          if (r) return null;
          throw Error(`Service ${this.name} is not available`);
        }
        try {
          return this.getOrInitializeService({ instanceIdentifier: n });
        } catch (e) {
          if (r) return null;
          throw e;
        }
      }
      getComponent() {
        return this.component;
      }
      setComponent(e) {
        if (e.name !== this.name)
          throw Error(
            `Mismatching Component ${e.name} for Provider ${this.name}.`
          );
        if (this.component)
          throw Error(`Component for ${this.name} has already been provided`);
        if (((this.component = e), this.shouldAutoInitialize())) {
          if (
            (function (e) {
              return "EAGER" === e.instantiationMode;
            })(
              /**
               * @license
               * Copyright 2019 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ e
            )
          )
            try {
              this.getOrInitializeService({ instanceIdentifier: "[DEFAULT]" });
            } catch (e) {}
          for (const [e, t] of this.instancesDeferred.entries()) {
            const n = this.normalizeInstanceIdentifier(e);
            try {
              const e = this.getOrInitializeService({ instanceIdentifier: n });
              t.resolve(e);
            } catch (e) {}
          }
        }
      }
      clearInstance(e = "[DEFAULT]") {
        this.instancesDeferred.delete(e),
          this.instancesOptions.delete(e),
          this.instances.delete(e);
      }
      async delete() {
        const e = Array.from(this.instances.values());
        await Promise.all([
          ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
          ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
        ]);
      }
      isComponentSet() {
        return null != this.component;
      }
      isInitialized(e = "[DEFAULT]") {
        return this.instances.has(e);
      }
      getOptions(e = "[DEFAULT]") {
        return this.instancesOptions.get(e) || {};
      }
      initialize(e = {}) {
        const { options: t = {} } = e,
          n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
        if (this.isInitialized(n))
          throw Error(`${this.name}(${n}) has already been initialized`);
        if (!this.isComponentSet())
          throw Error(`Component ${this.name} has not been registered yet`);
        const r = this.getOrInitializeService({
          instanceIdentifier: n,
          options: t,
        });
        for (const [e, t] of this.instancesDeferred.entries()) {
          n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
        }
        return r;
      }
      onInit(e, t) {
        var n;
        const r = this.normalizeInstanceIdentifier(t),
          i =
            null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n
              ? n
              : new Set();
        i.add(e), this.onInitCallbacks.set(r, i);
        const o = this.instances.get(r);
        return (
          o && e(o, r),
          () => {
            i.delete(e);
          }
        );
      }
      invokeOnInitCallbacks(e, t) {
        const n = this.onInitCallbacks.get(t);
        if (n)
          for (const r of n)
            try {
              r(e, t);
            } catch (e) {}
      }
      getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
        let n = this.instances.get(e);
        if (
          !n &&
          this.component &&
          ((n = this.component.instanceFactory(this.container, {
            instanceIdentifier: ((r = e), "[DEFAULT]" === r ? void 0 : r),
            options: t,
          })),
          this.instances.set(e, n),
          this.instancesOptions.set(e, t),
          this.invokeOnInitCallbacks(n, e),
          this.component.onInstanceCreated)
        )
          try {
            this.component.onInstanceCreated(this.container, e, n);
          } catch (e) {}
        var r;
        return n || null;
      }
      normalizeInstanceIdentifier(e = "[DEFAULT]") {
        return this.component
          ? this.component.multipleInstances
            ? e
            : "[DEFAULT]"
          : e;
      }
      shouldAutoInitialize() {
        return (
          !!this.component && "EXPLICIT" !== this.component.instantiationMode
        );
      }
    }
    class s {
      constructor(e) {
        (this.name = e), (this.providers = new Map());
      }
      addComponent(e) {
        const t = this.getProvider(e.name);
        if (t.isComponentSet())
          throw new Error(
            `Component ${e.name} has already been registered with ${this.name}`
          );
        t.setComponent(e);
      }
      addOrOverwriteComponent(e) {
        this.getProvider(e.name).isComponentSet() &&
          this.providers.delete(e.name),
          this.addComponent(e);
      }
      getProvider(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        const t = new o(e, this);
        return this.providers.set(e, t), t;
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const a = [];
    var c;
    !(function (e) {
      (e[(e.DEBUG = 0)] = "DEBUG"),
        (e[(e.VERBOSE = 1)] = "VERBOSE"),
        (e[(e.INFO = 2)] = "INFO"),
        (e[(e.WARN = 3)] = "WARN"),
        (e[(e.ERROR = 4)] = "ERROR"),
        (e[(e.SILENT = 5)] = "SILENT");
    })(c || (c = {}));
    const u = {
        debug: c.DEBUG,
        verbose: c.VERBOSE,
        info: c.INFO,
        warn: c.WARN,
        error: c.ERROR,
        silent: c.SILENT,
      },
      l = c.INFO,
      h = {
        [c.DEBUG]: "log",
        [c.VERBOSE]: "log",
        [c.INFO]: "info",
        [c.WARN]: "warn",
        [c.ERROR]: "error",
      },
      d = (e, t, ...n) => {
        if (t < e.logLevel) return;
        const r = new Date().toISOString(),
          i = h[t];
        if (!i)
          throw new Error(
            `Attempted to log a message with an invalid logType (value: ${t})`
          );
        console[i](`[${r}]  ${e.name}:`, ...n);
      };
    class f {
      constructor(e) {
        (this.name = e),
          (this._logLevel = l),
          (this._logHandler = d),
          (this._userLogHandler = null),
          a.push(this);
      }
      get logLevel() {
        return this._logLevel;
      }
      set logLevel(e) {
        if (!(e in c))
          throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
        this._logLevel = e;
      }
      setLogLevel(e) {
        this._logLevel = "string" == typeof e ? u[e] : e;
      }
      get logHandler() {
        return this._logHandler;
      }
      set logHandler(e) {
        if ("function" != typeof e)
          throw new TypeError(
            "Value assigned to `logHandler` must be a function"
          );
        this._logHandler = e;
      }
      get userLogHandler() {
        return this._userLogHandler;
      }
      set userLogHandler(e) {
        this._userLogHandler = e;
      }
      debug(...e) {
        this._userLogHandler && this._userLogHandler(this, c.DEBUG, ...e),
          this._logHandler(this, c.DEBUG, ...e);
      }
      log(...e) {
        this._userLogHandler && this._userLogHandler(this, c.VERBOSE, ...e),
          this._logHandler(this, c.VERBOSE, ...e);
      }
      info(...e) {
        this._userLogHandler && this._userLogHandler(this, c.INFO, ...e),
          this._logHandler(this, c.INFO, ...e);
      }
      warn(...e) {
        this._userLogHandler && this._userLogHandler(this, c.WARN, ...e),
          this._logHandler(this, c.WARN, ...e);
      }
      error(...e) {
        this._userLogHandler && this._userLogHandler(this, c.ERROR, ...e),
          this._logHandler(this, c.ERROR, ...e);
      }
    }
    let p, v;
    const g = new WeakMap(),
      m = new WeakMap(),
      y = new WeakMap(),
      b = new WeakMap(),
      w = new WeakMap();
    let _ = {
      get(e, t, n) {
        if (e instanceof IDBTransaction) {
          if ("done" === t) return m.get(e);
          if ("objectStoreNames" === t) return e.objectStoreNames || y.get(e);
          if ("store" === t)
            return n.objectStoreNames[1]
              ? void 0
              : n.objectStore(n.objectStoreNames[0]);
        }
        return E(e[t]);
      },
      set: (e, t, n) => ((e[t] = n), !0),
      has: (e, t) =>
        (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
        t in e,
    };
    function S(e) {
      return e !== IDBDatabase.prototype.transaction ||
        "objectStoreNames" in IDBTransaction.prototype
        ? (
            v ||
            (v = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(e)
          ? function (...t) {
              return e.apply(O(this), t), E(g.get(this));
            }
          : function (...t) {
              return E(e.apply(O(this), t));
            }
        : function (t, ...n) {
            const r = e.call(O(this), t, ...n);
            return y.set(r, t.sort ? t.sort() : [t]), E(r);
          };
    }
    function I(e) {
      return "function" == typeof e
        ? S(e)
        : (e instanceof IDBTransaction &&
            (function (e) {
              if (m.has(e)) return;
              const t = new Promise((t, n) => {
                const r = () => {
                    e.removeEventListener("complete", i),
                      e.removeEventListener("error", o),
                      e.removeEventListener("abort", o);
                  },
                  i = () => {
                    t(), r();
                  },
                  o = () => {
                    n(e.error || new DOMException("AbortError", "AbortError")),
                      r();
                  };
                e.addEventListener("complete", i),
                  e.addEventListener("error", o),
                  e.addEventListener("abort", o);
              });
              m.set(e, t);
            })(e),
          (t = e),
          (
            p ||
            (p = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          ).some((e) => t instanceof e)
            ? new Proxy(e, _)
            : e);
      var t;
    }
    function E(e) {
      if (e instanceof IDBRequest)
        return (function (e) {
          const t = new Promise((t, n) => {
            const r = () => {
                e.removeEventListener("success", i),
                  e.removeEventListener("error", o);
              },
              i = () => {
                t(E(e.result)), r();
              },
              o = () => {
                n(e.error), r();
              };
            e.addEventListener("success", i), e.addEventListener("error", o);
          });
          return (
            t
              .then((t) => {
                t instanceof IDBCursor && g.set(t, e);
              })
              .catch(() => {}),
            w.set(t, e),
            t
          );
        })(e);
      if (b.has(e)) return b.get(e);
      const t = I(e);
      return t !== e && (b.set(e, t), w.set(t, e)), t;
    }
    const O = (e) => w.get(e);
    const T = ["get", "getKey", "getAll", "getAllKeys", "count"],
      k = ["put", "add", "delete", "clear"],
      x = new Map();
    function A(e, t) {
      if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
      if (x.get(t)) return x.get(t);
      const n = t.replace(/FromIndex$/, ""),
        r = t !== n,
        i = k.includes(n);
      if (
        !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
        (!i && !T.includes(n))
      )
        return;
      const o = async function (e, ...t) {
        const o = this.transaction(e, i ? "readwrite" : "readonly");
        let s = o.store;
        return (
          r && (s = s.index(t.shift())),
          (await Promise.all([s[n](...t), i && o.done]))[0]
        );
      };
      return x.set(t, o), o;
    }
    _ = ((e) => ({
      ...e,
      get: (t, n, r) => A(t, n) || e.get(t, n, r),
      has: (t, n) => !!A(t, n) || e.has(t, n),
    }))(_);
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class P {
      constructor(e) {
        this.container = e;
      }
      getPlatformInfoString() {
        return this.container
          .getProviders()
          .map((e) => {
            if (
              (function (e) {
                const t = e.getComponent();
                return "VERSION" === (null == t ? void 0 : t.type);
              })(e)
            ) {
              const t = e.getImmediate();
              return `${t.library}/${t.version}`;
            }
            return null;
          })
          .filter((e) => e)
          .join(" ");
      }
    }
    const L = "@firebase/app",
      C = new f("@firebase/app"),
      N = {
        [L]: "fire-core",
        "@firebase/app-compat": "fire-core-compat",
        "@firebase/analytics": "fire-analytics",
        "@firebase/analytics-compat": "fire-analytics-compat",
        "@firebase/app-check": "fire-app-check",
        "@firebase/app-check-compat": "fire-app-check-compat",
        "@firebase/auth": "fire-auth",
        "@firebase/auth-compat": "fire-auth-compat",
        "@firebase/database": "fire-rtdb",
        "@firebase/database-compat": "fire-rtdb-compat",
        "@firebase/functions": "fire-fn",
        "@firebase/functions-compat": "fire-fn-compat",
        "@firebase/installations": "fire-iid",
        "@firebase/installations-compat": "fire-iid-compat",
        "@firebase/messaging": "fire-fcm",
        "@firebase/messaging-compat": "fire-fcm-compat",
        "@firebase/performance": "fire-perf",
        "@firebase/performance-compat": "fire-perf-compat",
        "@firebase/remote-config": "fire-rc",
        "@firebase/remote-config-compat": "fire-rc-compat",
        "@firebase/storage": "fire-gcs",
        "@firebase/storage-compat": "fire-gcs-compat",
        "@firebase/firestore": "fire-fst",
        "@firebase/firestore-compat": "fire-fst-compat",
        "fire-js": "fire-js",
        firebase: "fire-js-all",
      },
      R = new Map(),
      M = new Map();
    function D(e, t) {
      try {
        e.container.addComponent(t);
      } catch (n) {
        C.debug(
          `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
          n
        );
      }
    }
    function j(e) {
      const t = e.name;
      if (M.has(t))
        return (
          C.debug(`There were multiple attempts to register component ${t}.`),
          !1
        );
      M.set(t, e);
      for (const t of R.values()) D(t, e);
      return !0;
    }
    function F(e, t) {
      const n = e.container
        .getProvider("heartbeat")
        .getImmediate({ optional: !0 });
      return n && n.triggerHeartbeat(), e.container.getProvider(t);
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const B = {
        "no-app":
          "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        "bad-app-name": "Illegal App name: '{$appName}",
        "duplicate-app":
          "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "invalid-app-argument":
          "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument":
          "First argument to `onLog` must be null or a function.",
        "storage-open":
          "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
        "storage-get":
          "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
        "storage-set":
          "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
        "storage-delete":
          "Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",
      },
      U = new r.b("app", "Firebase", B);
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class q {
      constructor(e, t, n) {
        (this._isDeleted = !1),
          (this._options = Object.assign({}, e)),
          (this._config = Object.assign({}, t)),
          (this._name = t.name),
          (this._automaticDataCollectionEnabled =
            t.automaticDataCollectionEnabled),
          (this._container = n),
          this.container.addComponent(new i("app", () => this, "PUBLIC"));
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this._automaticDataCollectionEnabled;
      }
      set automaticDataCollectionEnabled(e) {
        this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
      }
      get name() {
        return this.checkDestroyed(), this._name;
      }
      get options() {
        return this.checkDestroyed(), this._options;
      }
      get config() {
        return this.checkDestroyed(), this._config;
      }
      get container() {
        return this._container;
      }
      get isDeleted() {
        return this._isDeleted;
      }
      set isDeleted(e) {
        this._isDeleted = e;
      }
      checkDestroyed() {
        if (this.isDeleted)
          throw U.create("app-deleted", { appName: this._name });
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function V(e, t, n) {
      var r;
      let o = null !== (r = N[e]) && void 0 !== r ? r : e;
      n && (o += "-" + n);
      const s = o.match(/\s|\//),
        a = t.match(/\s|\//);
      if (s || a) {
        const e = [`Unable to register library "${o}" with version "${t}":`];
        return (
          s &&
            e.push(
              `library name "${o}" contains illegal characters (whitespace or "/")`
            ),
          s && a && e.push("and"),
          a &&
            e.push(
              `version name "${t}" contains illegal characters (whitespace or "/")`
            ),
          void C.warn(e.join(" "))
        );
      }
      j(new i(o + "-version", () => ({ library: o, version: t }), "VERSION"));
    }
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const H = "firebase-heartbeat-store";
    let W = null;
    function z() {
      return (
        W ||
          (W = (function (
            e,
            t,
            { blocked: n, upgrade: r, blocking: i, terminated: o } = {}
          ) {
            const s = indexedDB.open(e, t),
              a = E(s);
            return (
              r &&
                s.addEventListener("upgradeneeded", (e) => {
                  r(E(s.result), e.oldVersion, e.newVersion, E(s.transaction));
                }),
              n && s.addEventListener("blocked", () => n()),
              a
                .then((e) => {
                  o && e.addEventListener("close", () => o()),
                    i && e.addEventListener("versionchange", () => i());
                })
                .catch(() => {}),
              a
            );
          })("firebase-heartbeat-database", 1, {
            upgrade: (e, t) => {
              switch (t) {
                case 0:
                  e.createObjectStore(H);
              }
            },
          }).catch((e) => {
            throw U.create("storage-open", { originalErrorMessage: e.message });
          })),
        W
      );
    }
    async function G(e, t) {
      var n;
      try {
        const n = (await z()).transaction(H, "readwrite"),
          r = n.objectStore(H);
        return await r.put(t, K(e)), n.done;
      } catch (e) {
        throw U.create("storage-set", {
          originalErrorMessage:
            null === (n = e) || void 0 === n ? void 0 : n.message,
        });
      }
    }
    function K(e) {
      return `${e.name}!${e.options.appId}`;
    }
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class $ {
      constructor(e) {
        (this.container = e), (this._heartbeatsCache = null);
        const t = this.container.getProvider("app").getImmediate();
        (this._storage = new Y(t)),
          (this._heartbeatsCachePromise = this._storage
            .read()
            .then((e) => ((this._heartbeatsCache = e), e)));
      }
      async triggerHeartbeat() {
        const e = this.container
            .getProvider("platform-logger")
            .getImmediate()
            .getPlatformInfoString(),
          t = J();
        if (
          (null === this._heartbeatsCache &&
            (this._heartbeatsCache = await this._heartbeatsCachePromise),
          this._heartbeatsCache.lastSentHeartbeatDate !== t &&
            !this._heartbeatsCache.heartbeats.some((e) => e.date === t))
        )
          return (
            this._heartbeatsCache.heartbeats.push({ date: t, agent: e }),
            (this._heartbeatsCache.heartbeats =
              this._heartbeatsCache.heartbeats.filter((e) => {
                const t = new Date(e.date).valueOf();
                return Date.now() - t <= 2592e6;
              })),
            this._storage.overwrite(this._heartbeatsCache)
          );
      }
      async getHeartbeatsHeader() {
        if (
          (null === this._heartbeatsCache &&
            (await this._heartbeatsCachePromise),
          null === this._heartbeatsCache ||
            0 === this._heartbeatsCache.heartbeats.length)
        )
          return "";
        const e = J(),
          { heartbeatsToSend: t, unsentEntries: n } = (function (e, t = 1024) {
            const n = [];
            let r = e.slice();
            for (const i of e) {
              const e = n.find((e) => e.agent === i.agent);
              if (e) {
                if ((e.dates.push(i.date), Z(n) > t)) {
                  e.dates.pop();
                  break;
                }
              } else if (
                (n.push({ agent: i.agent, dates: [i.date] }), Z(n) > t)
              ) {
                n.pop();
                break;
              }
              r = r.slice(1);
            }
            return { heartbeatsToSend: n, unsentEntries: r };
          })(this._heartbeatsCache.heartbeats),
          i = Object(r.e)(JSON.stringify({ version: 2, heartbeats: t }));
        return (
          (this._heartbeatsCache.lastSentHeartbeatDate = e),
          n.length > 0
            ? ((this._heartbeatsCache.heartbeats = n),
              await this._storage.overwrite(this._heartbeatsCache))
            : ((this._heartbeatsCache.heartbeats = []),
              this._storage.overwrite(this._heartbeatsCache)),
          i
        );
      }
    }
    function J() {
      return new Date().toISOString().substring(0, 10);
    }
    class Y {
      constructor(e) {
        (this.app = e),
          (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
      }
      async runIndexedDBEnvironmentCheck() {
        return (
          !!Object(r.n)() &&
          Object(r.s)()
            .then(() => !0)
            .catch(() => !1)
        );
      }
      async read() {
        if (await this._canUseIndexedDBPromise) {
          return (
            (await (async function (e) {
              var t;
              try {
                return (await z()).transaction(H).objectStore(H).get(K(e));
              } catch (e) {
                throw U.create("storage-get", {
                  originalErrorMessage:
                    null === (t = e) || void 0 === t ? void 0 : t.message,
                });
              }
            })(this.app)) || { heartbeats: [] }
          );
        }
        return { heartbeats: [] };
      }
      async overwrite(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
          const n = await this.read();
          return G(this.app, {
            lastSentHeartbeatDate:
              null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                ? t
                : n.lastSentHeartbeatDate,
            heartbeats: e.heartbeats,
          });
        }
      }
      async add(e) {
        var t;
        if (await this._canUseIndexedDBPromise) {
          const n = await this.read();
          return G(this.app, {
            lastSentHeartbeatDate:
              null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                ? t
                : n.lastSentHeartbeatDate,
            heartbeats: [...n.heartbeats, ...e.heartbeats],
          });
        }
      }
    }
    function Z(e) {
      return Object(r.e)(JSON.stringify({ version: 2, heartbeats: e })).length;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var X;
    (X = ""),
      j(new i("platform-logger", (e) => new P(e), "PRIVATE")),
      j(new i("heartbeat", (e) => new $(e), "PRIVATE")),
      V(L, "0.7.29", X),
      V(L, "0.7.29", "esm2017"),
      V("fire-js", "");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    V("firebase", "9.9.1", "app");
    function Q(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    }
    Object.create;
    Object.create;
    function ee() {
      return {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
      };
    }
    const te = ee,
      ne = new r.b("auth", "Firebase", {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
      }),
      re = new f("@firebase/auth");
    function ie(e, ...t) {
      re.logLevel <= c.ERROR && re.error("Auth (9.9.1): " + e, ...t);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function oe(e, ...t) {
      throw ce(e, ...t);
    }
    function se(e, ...t) {
      return ce(e, ...t);
    }
    function ae(e, t, n) {
      const i = Object.assign(Object.assign({}, te()), { [t]: n });
      return new r.b("auth", "Firebase", i).create(t, { appName: e.name });
    }
    function ce(e, ...t) {
      if ("string" != typeof e) {
        const n = t[0],
          r = [...t.slice(1)];
        return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
      }
      return ne.create(e, ...t);
    }
    function ue(e, t, ...n) {
      if (!e) throw ce(t, ...n);
    }
    function le(e) {
      const t = "INTERNAL ASSERTION FAILED: " + e;
      throw (ie(t), new Error(t));
    }
    function he(e, t) {
      e || le(t);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const de = new Map();
    function fe(e) {
      he(e instanceof Function, "Expected a class definition");
      let t = de.get(e);
      return t
        ? (he(t instanceof e, "Instance stored in cache mismatched with class"),
          t)
        : ((t = new e()), de.set(e, t), t);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function pe() {
      var e;
      return (
        ("undefined" != typeof self &&
          (null === (e = self.location) || void 0 === e ? void 0 : e.href)) ||
        ""
      );
    }
    function ve() {
      return "http:" === ge() || "https:" === ge();
    }
    function ge() {
      var e;
      return (
        ("undefined" != typeof self &&
          (null === (e = self.location) || void 0 === e
            ? void 0
            : e.protocol)) ||
        null
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class me {
      constructor(e, t) {
        (this.shortDelay = e),
          (this.longDelay = t),
          he(t > e, "Short delay should be less than long delay!"),
          (this.isMobile = Object(r.o)() || Object(r.p)());
      }
      get() {
        return "undefined" != typeof navigator &&
          navigator &&
          "onLine" in navigator &&
          "boolean" == typeof navigator.onLine &&
          (ve() || Object(r.k)() || "connection" in navigator) &&
          !navigator.onLine
          ? Math.min(5e3, this.shortDelay)
          : this.isMobile
          ? this.longDelay
          : this.shortDelay;
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function ye(e, t) {
      he(e.emulator, "Emulator should always be set here");
      const { url: n } = e.emulator;
      return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class be {
      static initialize(e, t, n) {
        (this.fetchImpl = e),
          t && (this.headersImpl = t),
          n && (this.responseImpl = n);
      }
      static fetch() {
        return this.fetchImpl
          ? this.fetchImpl
          : "undefined" != typeof self && "fetch" in self
          ? self.fetch
          : void le(
              "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
            );
      }
      static headers() {
        return this.headersImpl
          ? this.headersImpl
          : "undefined" != typeof self && "Headers" in self
          ? self.Headers
          : void le(
              "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
            );
      }
      static response() {
        return this.responseImpl
          ? this.responseImpl
          : "undefined" != typeof self && "Response" in self
          ? self.Response
          : void le(
              "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
            );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const we = {
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_PASSWORD: "wrong-password",
        MISSING_PASSWORD: "internal-error",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        INVALID_PENDING_TOKEN: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        MISSING_REQ_TYPE: "internal-error",
        EMAIL_NOT_FOUND: "user-not-found",
        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        INVALID_CODE: "invalid-verification-code",
        INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential",
        MISSING_SESSION_INFO: "missing-verification-id",
        SESSION_EXPIRED: "code-expired",
        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
        BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
      },
      _e = new me(3e4, 6e4);
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Se(e, t) {
      return e.tenantId && !t.tenantId
        ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
        : t;
    }
    async function Ie(e, t, n, i, o = {}) {
      return Ee(e, o, async () => {
        let o = {},
          s = {};
        i && ("GET" === t ? (s = i) : (o = { body: JSON.stringify(i) }));
        const a = Object(r.q)(Object.assign({ key: e.config.apiKey }, s)).slice(
            1
          ),
          c = await e._getAdditionalHeaders();
        return (
          (c["Content-Type"] = "application/json"),
          e.languageCode && (c["X-Firebase-Locale"] = e.languageCode),
          be.fetch()(
            Te(e, e.config.apiHost, n, a),
            Object.assign(
              { method: t, headers: c, referrerPolicy: "no-referrer" },
              o
            )
          )
        );
      });
    }
    async function Ee(e, t, n) {
      e._canInitEmulator = !1;
      const i = Object.assign(Object.assign({}, we), t);
      try {
        const t = new ke(e),
          r = await Promise.race([n(), t.promise]);
        t.clearNetworkTimeout();
        const o = await r.json();
        if ("needConfirmation" in o)
          throw xe(e, "account-exists-with-different-credential", o);
        if (r.ok && !("errorMessage" in o)) return o;
        {
          const t = r.ok ? o.errorMessage : o.error.message,
            [n, s] = t.split(" : ");
          if ("FEDERATED_USER_ID_ALREADY_LINKED" === n)
            throw xe(e, "credential-already-in-use", o);
          if ("EMAIL_EXISTS" === n) throw xe(e, "email-already-in-use", o);
          if ("USER_DISABLED" === n) throw xe(e, "user-disabled", o);
          const a = i[n] || n.toLowerCase().replace(/[_\s]+/g, "-");
          if (s) throw ae(e, a, s);
          oe(e, a);
        }
      } catch (t) {
        if (t instanceof r.c) throw t;
        oe(e, "network-request-failed");
      }
    }
    async function Oe(e, t, n, r, i = {}) {
      const o = await Ie(e, t, n, r, i);
      return (
        "mfaPendingCredential" in o &&
          oe(e, "multi-factor-auth-required", { _serverResponse: o }),
        o
      );
    }
    function Te(e, t, n, r) {
      const i = `${t}${n}?${r}`;
      return e.config.emulator
        ? ye(e.config, i)
        : `${e.config.apiScheme}://${i}`;
    }
    class ke {
      constructor(e) {
        (this.auth = e),
          (this.timer = null),
          (this.promise = new Promise((e, t) => {
            this.timer = setTimeout(
              () => t(se(this.auth, "network-request-failed")),
              _e.get()
            );
          }));
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    }
    function xe(e, t, n) {
      const r = { appName: e.name };
      n.email && (r.email = n.email),
        n.phoneNumber && (r.phoneNumber = n.phoneNumber);
      const i = se(e, t, r);
      return (i.customData._tokenResponse = n), i;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Ae(e) {
      if (e)
        try {
          const t = new Date(Number(e));
          if (!isNaN(t.getTime())) return t.toUTCString();
        } catch (e) {}
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Pe(e) {
      return 1e3 * Number(e);
    }
    function Le(e) {
      var t;
      const [n, i, o] = e.split(".");
      if (void 0 === n || void 0 === i || void 0 === o)
        return ie("JWT malformed, contained fewer than 3 sections"), null;
      try {
        const e = Object(r.d)(i);
        return e
          ? JSON.parse(e)
          : (ie("Failed to decode base64 JWT payload"), null);
      } catch (e) {
        return (
          ie(
            "Caught error parsing JWT payload as JSON",
            null === (t = e) || void 0 === t ? void 0 : t.toString()
          ),
          null
        );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    async function Ce(e, t, n = !1) {
      if (n) return t;
      try {
        return await t;
      } catch (t) {
        throw (
          (t instanceof r.c &&
            (function ({ code: e }) {
              return (
                "auth/user-disabled" === e || "auth/user-token-expired" === e
              );
            })(
              /**
               * @license
               * Copyright 2020 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ t
            ) &&
            e.auth.currentUser === e &&
            (await e.auth.signOut()),
          t)
        );
      }
    }
    class Ne {
      constructor(e) {
        (this.user = e),
          (this.isRunning = !1),
          (this.timerId = null),
          (this.errorBackoff = 3e4);
      }
      _start() {
        this.isRunning || ((this.isRunning = !0), this.schedule());
      }
      _stop() {
        this.isRunning &&
          ((this.isRunning = !1),
          null !== this.timerId && clearTimeout(this.timerId));
      }
      getInterval(e) {
        var t;
        if (e) {
          const e = this.errorBackoff;
          return (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), e;
        }
        {
          this.errorBackoff = 3e4;
          const e =
            (null !== (t = this.user.stsTokenManager.expirationTime) &&
            void 0 !== t
              ? t
              : 0) -
            Date.now() -
            3e5;
          return Math.max(0, e);
        }
      }
      schedule(e = !1) {
        if (!this.isRunning) return;
        const t = this.getInterval(e);
        this.timerId = setTimeout(async () => {
          await this.iteration();
        }, t);
      }
      async iteration() {
        var e;
        try {
          await this.user.getIdToken(!0);
        } catch (t) {
          return void (
            "auth/network-request-failed" ===
              (null === (e = t) || void 0 === e ? void 0 : e.code) &&
            this.schedule(!0)
          );
        }
        this.schedule();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class Re {
      constructor(e, t) {
        (this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
      }
      _initializeTime() {
        (this.lastSignInTime = Ae(this.lastLoginAt)),
          (this.creationTime = Ae(this.createdAt));
      }
      _copy(e) {
        (this.createdAt = e.createdAt),
          (this.lastLoginAt = e.lastLoginAt),
          this._initializeTime();
      }
      toJSON() {
        return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function Me(e) {
      var t;
      const n = e.auth,
        r = await e.getIdToken(),
        i = await Ce(
          e,
          (async function (e, t) {
            return Ie(e, "POST", "/v1/accounts:lookup", t);
          })(n, { idToken: r })
        );
      ue(null == i ? void 0 : i.users.length, n, "internal-error");
      const o = i.users[0];
      e._notifyReloadListener(o);
      const s = (
        null === (t = o.providerUserInfo) || void 0 === t ? void 0 : t.length
      )
        ? o.providerUserInfo.map((e) => {
            var { providerId: t } = e,
              n = Q(e, ["providerId"]);
            return {
              providerId: t,
              uid: n.rawId || "",
              displayName: n.displayName || null,
              email: n.email || null,
              phoneNumber: n.phoneNumber || null,
              photoURL: n.photoUrl || null,
            };
          })
        : [];
      const a =
        ((c = e.providerData),
        (u = s),
        [
          ...c.filter((e) => !u.some((t) => t.providerId === e.providerId)),
          ...u,
        ]);
      var c, u;
      const l = e.isAnonymous,
        h = !((e.email && o.passwordHash) || (null == a ? void 0 : a.length)),
        d = !!l && h,
        f = {
          uid: o.localId,
          displayName: o.displayName || null,
          photoURL: o.photoUrl || null,
          email: o.email || null,
          emailVerified: o.emailVerified || !1,
          phoneNumber: o.phoneNumber || null,
          tenantId: o.tenantId || null,
          providerData: a,
          metadata: new Re(o.createdAt, o.lastLoginAt),
          isAnonymous: d,
        };
      Object.assign(e, f);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class De {
      constructor() {
        (this.refreshToken = null),
          (this.accessToken = null),
          (this.expirationTime = null);
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
      }
      updateFromServerResponse(e) {
        ue(e.idToken, "internal-error"),
          ue(void 0 !== e.idToken, "internal-error"),
          ue(void 0 !== e.refreshToken, "internal-error");
        const t =
          "expiresIn" in e && void 0 !== e.expiresIn
            ? Number(e.expiresIn)
            : (function (e) {
                const t = Le(e);
                return (
                  ue(t, "internal-error"),
                  ue(void 0 !== t.exp, "internal-error"),
                  ue(void 0 !== t.iat, "internal-error"),
                  Number(t.exp) - Number(t.iat)
                );
              })(e.idToken);
        this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
      }
      async getToken(e, t = !1) {
        return (
          ue(!this.accessToken || this.refreshToken, e, "user-token-expired"),
          t || !this.accessToken || this.isExpired
            ? this.refreshToken
              ? (await this.refresh(e, this.refreshToken), this.accessToken)
              : null
            : this.accessToken
        );
      }
      clearRefreshToken() {
        this.refreshToken = null;
      }
      async refresh(e, t) {
        const {
          accessToken: n,
          refreshToken: i,
          expiresIn: o,
        } = await /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        (async function (e, t) {
          const n = await Ee(e, {}, async () => {
            const n = Object(r.q)({
                grant_type: "refresh_token",
                refresh_token: t,
              }).slice(1),
              { tokenApiHost: i, apiKey: o } = e.config,
              s = Te(e, i, "/v1/token", "key=" + o),
              a = await e._getAdditionalHeaders();
            return (
              (a["Content-Type"] = "application/x-www-form-urlencoded"),
              be.fetch()(s, { method: "POST", headers: a, body: n })
            );
          });
          return {
            accessToken: n.access_token,
            expiresIn: n.expires_in,
            refreshToken: n.refresh_token,
          };
        })(e, t);
        this.updateTokensAndExpiration(n, i, Number(o));
      }
      updateTokensAndExpiration(e, t, n) {
        (this.refreshToken = t || null),
          (this.accessToken = e || null),
          (this.expirationTime = Date.now() + 1e3 * n);
      }
      static fromJSON(e, t) {
        const { refreshToken: n, accessToken: r, expirationTime: i } = t,
          o = new De();
        return (
          n &&
            (ue("string" == typeof n, "internal-error", { appName: e }),
            (o.refreshToken = n)),
          r &&
            (ue("string" == typeof r, "internal-error", { appName: e }),
            (o.accessToken = r)),
          i &&
            (ue("number" == typeof i, "internal-error", { appName: e }),
            (o.expirationTime = i)),
          o
        );
      }
      toJSON() {
        return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime,
        };
      }
      _assign(e) {
        (this.accessToken = e.accessToken),
          (this.refreshToken = e.refreshToken),
          (this.expirationTime = e.expirationTime);
      }
      _clone() {
        return Object.assign(new De(), this.toJSON());
      }
      _performRefresh() {
        return le("not implemented");
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function je(e, t) {
      ue("string" == typeof e || void 0 === e, "internal-error", {
        appName: t,
      });
    }
    class Fe {
      constructor(e) {
        var { uid: t, auth: n, stsTokenManager: r } = e,
          i = Q(e, ["uid", "auth", "stsTokenManager"]);
        (this.providerId = "firebase"),
          (this.proactiveRefresh = new Ne(this)),
          (this.reloadUserInfo = null),
          (this.reloadListener = null),
          (this.uid = t),
          (this.auth = n),
          (this.stsTokenManager = r),
          (this.accessToken = r.accessToken),
          (this.displayName = i.displayName || null),
          (this.email = i.email || null),
          (this.emailVerified = i.emailVerified || !1),
          (this.phoneNumber = i.phoneNumber || null),
          (this.photoURL = i.photoURL || null),
          (this.isAnonymous = i.isAnonymous || !1),
          (this.tenantId = i.tenantId || null),
          (this.providerData = i.providerData ? [...i.providerData] : []),
          (this.metadata = new Re(
            i.createdAt || void 0,
            i.lastLoginAt || void 0
          ));
      }
      async getIdToken(e) {
        const t = await Ce(this, this.stsTokenManager.getToken(this.auth, e));
        return (
          ue(t, this.auth, "internal-error"),
          this.accessToken !== t &&
            ((this.accessToken = t),
            await this.auth._persistUserIfCurrent(this),
            this.auth._notifyListenersIfCurrent(this)),
          t
        );
      }
      getIdTokenResult(e) {
        return (async function (e, t = !1) {
          const n = Object(r.i)(e),
            i = await n.getIdToken(t),
            o = Le(i);
          ue(o && o.exp && o.auth_time && o.iat, n.auth, "internal-error");
          const s = "object" == typeof o.firebase ? o.firebase : void 0,
            a = null == s ? void 0 : s.sign_in_provider;
          return {
            claims: o,
            token: i,
            authTime: Ae(Pe(o.auth_time)),
            issuedAtTime: Ae(Pe(o.iat)),
            expirationTime: Ae(Pe(o.exp)),
            signInProvider: a || null,
            signInSecondFactor:
              (null == s ? void 0 : s.sign_in_second_factor) || null,
          };
        })(this, e);
      }
      reload() {
        return (async function (e) {
          const t = Object(r.i)(e);
          await Me(t),
            await t.auth._persistUserIfCurrent(t),
            t.auth._notifyListenersIfCurrent(t);
        })(this);
      }
      _assign(e) {
        this !== e &&
          (ue(this.uid === e.uid, this.auth, "internal-error"),
          (this.displayName = e.displayName),
          (this.photoURL = e.photoURL),
          (this.email = e.email),
          (this.emailVerified = e.emailVerified),
          (this.phoneNumber = e.phoneNumber),
          (this.isAnonymous = e.isAnonymous),
          (this.tenantId = e.tenantId),
          (this.providerData = e.providerData.map((e) => Object.assign({}, e))),
          this.metadata._copy(e.metadata),
          this.stsTokenManager._assign(e.stsTokenManager));
      }
      _clone(e) {
        return new Fe(
          Object.assign(Object.assign({}, this), {
            auth: e,
            stsTokenManager: this.stsTokenManager._clone(),
          })
        );
      }
      _onReload(e) {
        ue(!this.reloadListener, this.auth, "internal-error"),
          (this.reloadListener = e),
          this.reloadUserInfo &&
            (this._notifyReloadListener(this.reloadUserInfo),
            (this.reloadUserInfo = null));
      }
      _notifyReloadListener(e) {
        this.reloadListener
          ? this.reloadListener(e)
          : (this.reloadUserInfo = e);
      }
      _startProactiveRefresh() {
        this.proactiveRefresh._start();
      }
      _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
      }
      async _updateTokensIfNecessary(e, t = !1) {
        let n = !1;
        e.idToken &&
          e.idToken !== this.stsTokenManager.accessToken &&
          (this.stsTokenManager.updateFromServerResponse(e), (n = !0)),
          t && (await Me(this)),
          await this.auth._persistUserIfCurrent(this),
          n && this.auth._notifyListenersIfCurrent(this);
      }
      async delete() {
        const e = await this.getIdToken();
        return (
          await Ce(
            this,
            (async function (e, t) {
              return Ie(e, "POST", "/v1/accounts:delete", t);
            })(this.auth, { idToken: e })
          ),
          this.stsTokenManager.clearRefreshToken(),
          this.auth.signOut()
        );
      }
      toJSON() {
        return Object.assign(
          Object.assign(
            {
              uid: this.uid,
              email: this.email || void 0,
              emailVerified: this.emailVerified,
              displayName: this.displayName || void 0,
              isAnonymous: this.isAnonymous,
              photoURL: this.photoURL || void 0,
              phoneNumber: this.phoneNumber || void 0,
              tenantId: this.tenantId || void 0,
              providerData: this.providerData.map((e) => Object.assign({}, e)),
              stsTokenManager: this.stsTokenManager.toJSON(),
              _redirectEventId: this._redirectEventId,
            },
            this.metadata.toJSON()
          ),
          { apiKey: this.auth.config.apiKey, appName: this.auth.name }
        );
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static _fromJSON(e, t) {
        var n, r, i, o, s, a, c, u;
        const l = null !== (n = t.displayName) && void 0 !== n ? n : void 0,
          h = null !== (r = t.email) && void 0 !== r ? r : void 0,
          d = null !== (i = t.phoneNumber) && void 0 !== i ? i : void 0,
          f = null !== (o = t.photoURL) && void 0 !== o ? o : void 0,
          p = null !== (s = t.tenantId) && void 0 !== s ? s : void 0,
          v = null !== (a = t._redirectEventId) && void 0 !== a ? a : void 0,
          g = null !== (c = t.createdAt) && void 0 !== c ? c : void 0,
          m = null !== (u = t.lastLoginAt) && void 0 !== u ? u : void 0,
          {
            uid: y,
            emailVerified: b,
            isAnonymous: w,
            providerData: _,
            stsTokenManager: S,
          } = t;
        ue(y && S, e, "internal-error");
        const I = De.fromJSON(this.name, S);
        ue("string" == typeof y, e, "internal-error"),
          je(l, e.name),
          je(h, e.name),
          ue("boolean" == typeof b, e, "internal-error"),
          ue("boolean" == typeof w, e, "internal-error"),
          je(d, e.name),
          je(f, e.name),
          je(p, e.name),
          je(v, e.name),
          je(g, e.name),
          je(m, e.name);
        const E = new Fe({
          uid: y,
          auth: e,
          email: h,
          emailVerified: b,
          displayName: l,
          isAnonymous: w,
          photoURL: f,
          phoneNumber: d,
          tenantId: p,
          stsTokenManager: I,
          createdAt: g,
          lastLoginAt: m,
        });
        return (
          _ &&
            Array.isArray(_) &&
            (E.providerData = _.map((e) => Object.assign({}, e))),
          v && (E._redirectEventId = v),
          E
        );
      }
      static async _fromIdTokenResponse(e, t, n = !1) {
        const r = new De();
        r.updateFromServerResponse(t);
        const i = new Fe({
          uid: t.localId,
          auth: e,
          stsTokenManager: r,
          isAnonymous: n,
        });
        return await Me(i), i;
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class Be {
      constructor() {
        (this.type = "NONE"), (this.storage = {});
      }
      async _isAvailable() {
        return !0;
      }
      async _set(e, t) {
        this.storage[e] = t;
      }
      async _get(e) {
        const t = this.storage[e];
        return void 0 === t ? null : t;
      }
      async _remove(e) {
        delete this.storage[e];
      }
      _addListener(e, t) {}
      _removeListener(e, t) {}
    }
    Be.type = "NONE";
    const Ue = Be;
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function qe(e, t, n) {
      return `firebase:${e}:${t}:${n}`;
    }
    class Ve {
      constructor(e, t, n) {
        (this.persistence = e), (this.auth = t), (this.userKey = n);
        const { config: r, name: i } = this.auth;
        (this.fullUserKey = qe(this.userKey, r.apiKey, i)),
          (this.fullPersistenceKey = qe("persistence", r.apiKey, i)),
          (this.boundEventHandler = t._onStorageEvent.bind(t)),
          this.persistence._addListener(
            this.fullUserKey,
            this.boundEventHandler
          );
      }
      setCurrentUser(e) {
        return this.persistence._set(this.fullUserKey, e.toJSON());
      }
      async getCurrentUser() {
        const e = await this.persistence._get(this.fullUserKey);
        return e ? Fe._fromJSON(this.auth, e) : null;
      }
      removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence._set(
          this.fullPersistenceKey,
          this.persistence.type
        );
      }
      async setPersistence(e) {
        if (this.persistence === e) return;
        const t = await this.getCurrentUser();
        return (
          await this.removeCurrentUser(),
          (this.persistence = e),
          t ? this.setCurrentUser(t) : void 0
        );
      }
      delete() {
        this.persistence._removeListener(
          this.fullUserKey,
          this.boundEventHandler
        );
      }
      static async create(e, t, n = "authUser") {
        if (!t.length) return new Ve(fe(Ue), e, n);
        const r = (
          await Promise.all(
            t.map(async (e) => {
              if (await e._isAvailable()) return e;
            })
          )
        ).filter((e) => e);
        let i = r[0] || fe(Ue);
        const o = qe(n, e.config.apiKey, e.name);
        let s = null;
        for (const n of t)
          try {
            const t = await n._get(o);
            if (t) {
              const r = Fe._fromJSON(e, t);
              n !== i && (s = r), (i = n);
              break;
            }
          } catch (e) {}
        const a = r.filter((e) => e._shouldAllowMigration);
        return i._shouldAllowMigration && a.length
          ? ((i = a[0]),
            s && (await i._set(o, s.toJSON())),
            await Promise.all(
              t.map(async (e) => {
                if (e !== i)
                  try {
                    await e._remove(o);
                  } catch (e) {}
              })
            ),
            new Ve(i, e, n))
          : new Ve(i, e, n);
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function He(e) {
      const t = e.toLowerCase();
      if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
        return "Opera";
      if (Ke(t)) return "IEMobile";
      if (t.includes("msie") || t.includes("trident/")) return "IE";
      if (t.includes("edge/")) return "Edge";
      if (We(t)) return "Firefox";
      if (t.includes("silk/")) return "Silk";
      if (Je(t)) return "Blackberry";
      if (Ye(t)) return "Webos";
      if (ze(t)) return "Safari";
      if ((t.includes("chrome/") || Ge(t)) && !t.includes("edge/"))
        return "Chrome";
      if ($e(t)) return "Android";
      {
        const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
          n = e.match(t);
        if (2 === (null == n ? void 0 : n.length)) return n[1];
      }
      return "Other";
    }
    function We(e = Object(r.j)()) {
      return /firefox\//i.test(e);
    }
    function ze(e = Object(r.j)()) {
      const t = e.toLowerCase();
      return (
        t.includes("safari/") &&
        !t.includes("chrome/") &&
        !t.includes("crios/") &&
        !t.includes("android")
      );
    }
    function Ge(e = Object(r.j)()) {
      return /crios\//i.test(e);
    }
    function Ke(e = Object(r.j)()) {
      return /iemobile/i.test(e);
    }
    function $e(e = Object(r.j)()) {
      return /android/i.test(e);
    }
    function Je(e = Object(r.j)()) {
      return /blackberry/i.test(e);
    }
    function Ye(e = Object(r.j)()) {
      return /webos/i.test(e);
    }
    function Ze(e = Object(r.j)()) {
      return (
        /iphone|ipad|ipod/i.test(e) ||
        (/macintosh/i.test(e) && /mobile/i.test(e))
      );
    }
    function Xe(e = Object(r.j)()) {
      return (
        Ze(e) || $e(e) || Ye(e) || Je(e) || /windows phone/i.test(e) || Ke(e)
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Qe(e, t = []) {
      let n;
      switch (e) {
        case "Browser":
          n = He(Object(r.j)());
          break;
        case "Worker":
          n = `${He(Object(r.j)())}-${e}`;
          break;
        default:
          n = e;
      }
      return `${n}/JsCore/9.9.1/${t.length ? t.join(",") : "FirebaseCore-web"}`;
    }
    /**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class et {
      constructor(e) {
        (this.auth = e), (this.queue = []);
      }
      pushCallback(e, t) {
        const n = (t) =>
          new Promise((n, r) => {
            try {
              n(e(t));
            } catch (e) {
              r(e);
            }
          });
        (n.onAbort = t), this.queue.push(n);
        const r = this.queue.length - 1;
        return () => {
          this.queue[r] = () => Promise.resolve();
        };
      }
      async runMiddleware(e) {
        var t;
        if (this.auth.currentUser === e) return;
        const n = [];
        try {
          for (const t of this.queue)
            await t(e), t.onAbort && n.push(t.onAbort);
        } catch (e) {
          n.reverse();
          for (const e of n)
            try {
              e();
            } catch (e) {}
          throw this.auth._errorFactory.create("login-blocked", {
            originalMessage:
              null === (t = e) || void 0 === t ? void 0 : t.message,
          });
        }
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class tt {
      constructor(e, t, n) {
        (this.app = e),
          (this.heartbeatServiceProvider = t),
          (this.config = n),
          (this.currentUser = null),
          (this.emulatorConfig = null),
          (this.operations = Promise.resolve()),
          (this.authStateSubscription = new rt(this)),
          (this.idTokenSubscription = new rt(this)),
          (this.beforeStateQueue = new et(this)),
          (this.redirectUser = null),
          (this.isProactiveRefreshEnabled = !1),
          (this._canInitEmulator = !0),
          (this._isInitialized = !1),
          (this._deleted = !1),
          (this._initializationPromise = null),
          (this._popupRedirectResolver = null),
          (this._errorFactory = ne),
          (this.lastNotifiedUid = void 0),
          (this.languageCode = null),
          (this.tenantId = null),
          (this.settings = { appVerificationDisabledForTesting: !1 }),
          (this.frameworks = []),
          (this.name = e.name),
          (this.clientVersion = n.sdkClientVersion);
      }
      _initializeWithPersistence(e, t) {
        return (
          t && (this._popupRedirectResolver = fe(t)),
          (this._initializationPromise = this.queue(async () => {
            var n, r;
            if (
              !this._deleted &&
              ((this.persistenceManager = await Ve.create(this, e)),
              !this._deleted)
            ) {
              if (
                null === (n = this._popupRedirectResolver) || void 0 === n
                  ? void 0
                  : n._shouldInitProactively
              )
                try {
                  await this._popupRedirectResolver._initialize(this);
                } catch (e) {}
              await this.initializeCurrentUser(t),
                (this.lastNotifiedUid =
                  (null === (r = this.currentUser) || void 0 === r
                    ? void 0
                    : r.uid) || null),
                this._deleted || (this._isInitialized = !0);
            }
          })),
          this._initializationPromise
        );
      }
      async _onStorageEvent() {
        if (this._deleted) return;
        const e = await this.assertedPersistence.getCurrentUser();
        return this.currentUser || e
          ? this.currentUser && e && this.currentUser.uid === e.uid
            ? (this._currentUser._assign(e),
              void (await this.currentUser.getIdToken()))
            : void (await this._updateCurrentUser(e, !0))
          : void 0;
      }
      async initializeCurrentUser(e) {
        var t;
        const n = await this.assertedPersistence.getCurrentUser();
        let r = n,
          i = !1;
        if (e && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const n =
              null === (t = this.redirectUser) || void 0 === t
                ? void 0
                : t._redirectEventId,
            o = null == r ? void 0 : r._redirectEventId,
            s = await this.tryRedirectSignIn(e);
          (n && n !== o) ||
            !(null == s ? void 0 : s.user) ||
            ((r = s.user), (i = !0));
        }
        if (!r) return this.directlySetCurrentUser(null);
        if (!r._redirectEventId) {
          if (i)
            try {
              await this.beforeStateQueue.runMiddleware(r);
            } catch (e) {
              (r = n),
                this._popupRedirectResolver._overrideRedirectResult(this, () =>
                  Promise.reject(e)
                );
            }
          return r
            ? this.reloadAndSetCurrentUserOrClear(r)
            : this.directlySetCurrentUser(null);
        }
        return (
          ue(this._popupRedirectResolver, this, "argument-error"),
          await this.getOrInitRedirectPersistenceManager(),
          this.redirectUser &&
          this.redirectUser._redirectEventId === r._redirectEventId
            ? this.directlySetCurrentUser(r)
            : this.reloadAndSetCurrentUserOrClear(r)
        );
      }
      async tryRedirectSignIn(e) {
        let t = null;
        try {
          t = await this._popupRedirectResolver._completeRedirectFn(
            this,
            e,
            !0
          );
        } catch (e) {
          await this._setRedirectUser(null);
        }
        return t;
      }
      async reloadAndSetCurrentUserOrClear(e) {
        var t;
        try {
          await Me(e);
        } catch (e) {
          if (
            "auth/network-request-failed" !==
            (null === (t = e) || void 0 === t ? void 0 : t.code)
          )
            return this.directlySetCurrentUser(null);
        }
        return this.directlySetCurrentUser(e);
      }
      useDeviceLanguage() {
        this.languageCode = (function () {
          if ("undefined" == typeof navigator) return null;
          const e = navigator;
          return (e.languages && e.languages[0]) || e.language || null;
        })();
      }
      async _delete() {
        this._deleted = !0;
      }
      async updateCurrentUser(e) {
        const t = e ? Object(r.i)(e) : null;
        return (
          t &&
            ue(
              t.auth.config.apiKey === this.config.apiKey,
              this,
              "invalid-user-token"
            ),
          this._updateCurrentUser(t && t._clone(this))
        );
      }
      async _updateCurrentUser(e, t = !1) {
        if (!this._deleted)
          return (
            e && ue(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
            t || (await this.beforeStateQueue.runMiddleware(e)),
            this.queue(async () => {
              await this.directlySetCurrentUser(e), this.notifyAuthListeners();
            })
          );
      }
      async signOut() {
        return (
          await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this._popupRedirectResolver) &&
            (await this._setRedirectUser(null)),
          this._updateCurrentUser(null, !0)
        );
      }
      setPersistence(e) {
        return this.queue(async () => {
          await this.assertedPersistence.setPersistence(fe(e));
        });
      }
      _getPersistence() {
        return this.assertedPersistence.persistence.type;
      }
      _updateErrorMap(e) {
        this._errorFactory = new r.b("auth", "Firebase", e());
      }
      onAuthStateChanged(e, t, n) {
        return this.registerStateListener(this.authStateSubscription, e, t, n);
      }
      beforeAuthStateChanged(e, t) {
        return this.beforeStateQueue.pushCallback(e, t);
      }
      onIdTokenChanged(e, t, n) {
        return this.registerStateListener(this.idTokenSubscription, e, t, n);
      }
      toJSON() {
        var e;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser:
            null === (e = this._currentUser) || void 0 === e
              ? void 0
              : e.toJSON(),
        };
      }
      async _setRedirectUser(e, t) {
        const n = await this.getOrInitRedirectPersistenceManager(t);
        return null === e ? n.removeCurrentUser() : n.setCurrentUser(e);
      }
      async getOrInitRedirectPersistenceManager(e) {
        if (!this.redirectPersistenceManager) {
          const t = (e && fe(e)) || this._popupRedirectResolver;
          ue(t, this, "argument-error"),
            (this.redirectPersistenceManager = await Ve.create(
              this,
              [fe(t._redirectPersistence)],
              "redirectUser"
            )),
            (this.redirectUser =
              await this.redirectPersistenceManager.getCurrentUser());
        }
        return this.redirectPersistenceManager;
      }
      async _redirectUserForId(e) {
        var t, n;
        return (
          this._isInitialized && (await this.queue(async () => {})),
          (null === (t = this._currentUser) || void 0 === t
            ? void 0
            : t._redirectEventId) === e
            ? this._currentUser
            : (null === (n = this.redirectUser) || void 0 === n
                ? void 0
                : n._redirectEventId) === e
            ? this.redirectUser
            : null
        );
      }
      async _persistUserIfCurrent(e) {
        if (e === this.currentUser)
          return this.queue(async () => this.directlySetCurrentUser(e));
      }
      _notifyListenersIfCurrent(e) {
        e === this.currentUser && this.notifyAuthListeners();
      }
      _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
      }
      _startProactiveRefresh() {
        (this.isProactiveRefreshEnabled = !0),
          this.currentUser && this._currentUser._startProactiveRefresh();
      }
      _stopProactiveRefresh() {
        (this.isProactiveRefreshEnabled = !1),
          this.currentUser && this._currentUser._stopProactiveRefresh();
      }
      get _currentUser() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        var e, t;
        if (!this._isInitialized) return;
        this.idTokenSubscription.next(this.currentUser);
        const n =
          null !==
            (t =
              null === (e = this.currentUser) || void 0 === e
                ? void 0
                : e.uid) && void 0 !== t
            ? t
            : null;
        this.lastNotifiedUid !== n &&
          ((this.lastNotifiedUid = n),
          this.authStateSubscription.next(this.currentUser));
      }
      registerStateListener(e, t, n, r) {
        if (this._deleted) return () => {};
        const i = "function" == typeof t ? t : t.next.bind(t),
          o = this._isInitialized
            ? Promise.resolve()
            : this._initializationPromise;
        return (
          ue(o, this, "internal-error"),
          o.then(() => i(this.currentUser)),
          "function" == typeof t ? e.addObserver(t, n, r) : e.addObserver(t)
        );
      }
      async directlySetCurrentUser(e) {
        this.currentUser &&
          this.currentUser !== e &&
          (this._currentUser._stopProactiveRefresh(),
          e && this.isProactiveRefreshEnabled && e._startProactiveRefresh()),
          (this.currentUser = e),
          e
            ? await this.assertedPersistence.setCurrentUser(e)
            : await this.assertedPersistence.removeCurrentUser();
      }
      queue(e) {
        return (this.operations = this.operations.then(e, e)), this.operations;
      }
      get assertedPersistence() {
        return (
          ue(this.persistenceManager, this, "internal-error"),
          this.persistenceManager
        );
      }
      _logFramework(e) {
        e &&
          !this.frameworks.includes(e) &&
          (this.frameworks.push(e),
          this.frameworks.sort(),
          (this.clientVersion = Qe(
            this.config.clientPlatform,
            this._getFrameworks()
          )));
      }
      _getFrameworks() {
        return this.frameworks;
      }
      async _getAdditionalHeaders() {
        var e;
        const t = { "X-Client-Version": this.clientVersion };
        this.app.options.appId &&
          (t["X-Firebase-gmpid"] = this.app.options.appId);
        const n = await (null ===
          (e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) ||
        void 0 === e
          ? void 0
          : e.getHeartbeatsHeader());
        return n && (t["X-Firebase-Client"] = n), t;
      }
    }
    function nt(e) {
      return Object(r.i)(e);
    }
    class rt {
      constructor(e) {
        (this.auth = e),
          (this.observer = null),
          (this.addObserver = Object(r.f)((e) => (this.observer = e)));
      }
      get next() {
        return (
          ue(this.observer, this.auth, "internal-error"),
          this.observer.next.bind(this.observer)
        );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class it {
      constructor(e, t) {
        (this.providerId = e), (this.signInMethod = t);
      }
      toJSON() {
        return le("not implemented");
      }
      _getIdTokenResponse(e) {
        return le("not implemented");
      }
      _linkToIdToken(e, t) {
        return le("not implemented");
      }
      _getReauthenticationResolver(e) {
        return le("not implemented");
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function ot(e, t) {
      return Ie(e, "POST", "/v1/accounts:update", t);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class st extends it {
      constructor(e, t, n, r = null) {
        super("password", n),
          (this._email = e),
          (this._password = t),
          (this._tenantId = r);
      }
      static _fromEmailAndPassword(e, t) {
        return new st(e, t, "password");
      }
      static _fromEmailAndCode(e, t, n = null) {
        return new st(e, t, "emailLink", n);
      }
      toJSON() {
        return {
          email: this._email,
          password: this._password,
          signInMethod: this.signInMethod,
          tenantId: this._tenantId,
        };
      }
      static fromJSON(e) {
        const t = "string" == typeof e ? JSON.parse(e) : e;
        if (
          (null == t ? void 0 : t.email) &&
          (null == t ? void 0 : t.password)
        ) {
          if ("password" === t.signInMethod)
            return this._fromEmailAndPassword(t.email, t.password);
          if ("emailLink" === t.signInMethod)
            return this._fromEmailAndCode(t.email, t.password, t.tenantId);
        }
        return null;
      }
      async _getIdTokenResponse(e) {
        switch (this.signInMethod) {
          case "password":
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            return (async function (e, t) {
              return Oe(e, "POST", "/v1/accounts:signInWithPassword", Se(e, t));
            })(e, {
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
            });
          case "emailLink":
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            return (async function (e, t) {
              return Oe(
                e,
                "POST",
                "/v1/accounts:signInWithEmailLink",
                Se(e, t)
              );
            })(e, { email: this._email, oobCode: this._password });
          default:
            oe(e, "internal-error");
        }
      }
      async _linkToIdToken(e, t) {
        switch (this.signInMethod) {
          case "password":
            return ot(e, {
              idToken: t,
              returnSecureToken: !0,
              email: this._email,
              password: this._password,
            });
          case "emailLink":
            return (async function (e, t) {
              return Oe(
                e,
                "POST",
                "/v1/accounts:signInWithEmailLink",
                Se(e, t)
              );
            })(e, { idToken: t, email: this._email, oobCode: this._password });
          default:
            oe(e, "internal-error");
        }
      }
      _getReauthenticationResolver(e) {
        return this._getIdTokenResponse(e);
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function at(e, t) {
      return Oe(e, "POST", "/v1/accounts:signInWithIdp", Se(e, t));
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class ct extends it {
      constructor() {
        super(...arguments), (this.pendingToken = null);
      }
      static _fromParams(e) {
        const t = new ct(e.providerId, e.signInMethod);
        return (
          e.idToken || e.accessToken
            ? (e.idToken && (t.idToken = e.idToken),
              e.accessToken && (t.accessToken = e.accessToken),
              e.nonce && !e.pendingToken && (t.nonce = e.nonce),
              e.pendingToken && (t.pendingToken = e.pendingToken))
            : e.oauthToken && e.oauthTokenSecret
            ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
            : oe("argument-error"),
          t
        );
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod,
        };
      }
      static fromJSON(e) {
        const t = "string" == typeof e ? JSON.parse(e) : e,
          { providerId: n, signInMethod: r } = t,
          i = Q(t, ["providerId", "signInMethod"]);
        if (!n || !r) return null;
        const o = new ct(n, r);
        return (
          (o.idToken = i.idToken || void 0),
          (o.accessToken = i.accessToken || void 0),
          (o.secret = i.secret),
          (o.nonce = i.nonce),
          (o.pendingToken = i.pendingToken || null),
          o
        );
      }
      _getIdTokenResponse(e) {
        return at(e, this.buildRequest());
      }
      _linkToIdToken(e, t) {
        const n = this.buildRequest();
        return (n.idToken = t), at(e, n);
      }
      _getReauthenticationResolver(e) {
        const t = this.buildRequest();
        return (t.autoCreate = !1), at(e, t);
      }
      buildRequest() {
        const e = { requestUri: "http://localhost", returnSecureToken: !0 };
        if (this.pendingToken) e.pendingToken = this.pendingToken;
        else {
          const t = {};
          this.idToken && (t.id_token = this.idToken),
            this.accessToken && (t.access_token = this.accessToken),
            this.secret && (t.oauth_token_secret = this.secret),
            (t.providerId = this.providerId),
            this.nonce && !this.pendingToken && (t.nonce = this.nonce),
            (e.postBody = Object(r.q)(t));
        }
        return e;
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const ut = { USER_NOT_FOUND: "user-not-found" };
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class lt extends it {
      constructor(e) {
        super("phone", "phone"), (this.params = e);
      }
      static _fromVerification(e, t) {
        return new lt({ verificationId: e, verificationCode: t });
      }
      static _fromTokenResponse(e, t) {
        return new lt({ phoneNumber: e, temporaryProof: t });
      }
      _getIdTokenResponse(e) {
        return (async function (e, t) {
          return Oe(e, "POST", "/v1/accounts:signInWithPhoneNumber", Se(e, t));
        })(e, this._makeVerificationRequest());
      }
      _linkToIdToken(e, t) {
        return (async function (e, t) {
          const n = await Oe(
            e,
            "POST",
            "/v1/accounts:signInWithPhoneNumber",
            Se(e, t)
          );
          if (n.temporaryProof)
            throw xe(e, "account-exists-with-different-credential", n);
          return n;
        })(e, Object.assign({ idToken: t }, this._makeVerificationRequest()));
      }
      _getReauthenticationResolver(e) {
        return (async function (e, t) {
          return Oe(
            e,
            "POST",
            "/v1/accounts:signInWithPhoneNumber",
            Se(e, Object.assign(Object.assign({}, t), { operation: "REAUTH" })),
            ut
          );
        })(e, this._makeVerificationRequest());
      }
      _makeVerificationRequest() {
        const {
          temporaryProof: e,
          phoneNumber: t,
          verificationId: n,
          verificationCode: r,
        } = this.params;
        return e && t
          ? { temporaryProof: e, phoneNumber: t }
          : { sessionInfo: n, code: r };
      }
      toJSON() {
        const e = { providerId: this.providerId };
        return (
          this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber),
          this.params.temporaryProof &&
            (e.temporaryProof = this.params.temporaryProof),
          this.params.verificationCode &&
            (e.verificationCode = this.params.verificationCode),
          this.params.verificationId &&
            (e.verificationId = this.params.verificationId),
          e
        );
      }
      static fromJSON(e) {
        "string" == typeof e && (e = JSON.parse(e));
        const {
          verificationId: t,
          verificationCode: n,
          phoneNumber: r,
          temporaryProof: i,
        } = e;
        return n || t || r || i
          ? new lt({
              verificationId: t,
              verificationCode: n,
              phoneNumber: r,
              temporaryProof: i,
            })
          : null;
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class ht {
      constructor(e) {
        var t, n, i, o, s, a;
        const c = Object(r.r)(Object(r.h)(e)),
          u = null !== (t = c.apiKey) && void 0 !== t ? t : null,
          l = null !== (n = c.oobCode) && void 0 !== n ? n : null,
          h = (function (e) {
            switch (e) {
              case "recoverEmail":
                return "RECOVER_EMAIL";
              case "resetPassword":
                return "PASSWORD_RESET";
              case "signIn":
                return "EMAIL_SIGNIN";
              case "verifyEmail":
                return "VERIFY_EMAIL";
              case "verifyAndChangeEmail":
                return "VERIFY_AND_CHANGE_EMAIL";
              case "revertSecondFactorAddition":
                return "REVERT_SECOND_FACTOR_ADDITION";
              default:
                return null;
            }
          })(null !== (i = c.mode) && void 0 !== i ? i : null);
        ue(u && l && h, "argument-error"),
          (this.apiKey = u),
          (this.operation = h),
          (this.code = l),
          (this.continueUrl =
            null !== (o = c.continueUrl) && void 0 !== o ? o : null),
          (this.languageCode =
            null !== (s = c.languageCode) && void 0 !== s ? s : null),
          (this.tenantId =
            null !== (a = c.tenantId) && void 0 !== a ? a : null);
      }
      static parseLink(e) {
        const t = (function (e) {
          const t = Object(r.r)(Object(r.h)(e)).link,
            n = t ? Object(r.r)(Object(r.h)(t)).deep_link_id : null,
            i = Object(r.r)(Object(r.h)(e)).deep_link_id;
          return (
            (i ? Object(r.r)(Object(r.h)(i)).link : null) || i || n || t || e
          );
        })(e);
        try {
          return new ht(t);
        } catch (e) {
          return null;
        }
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class dt {
      constructor() {
        this.providerId = dt.PROVIDER_ID;
      }
      static credential(e, t) {
        return st._fromEmailAndPassword(e, t);
      }
      static credentialWithLink(e, t) {
        const n = ht.parseLink(t);
        return (
          ue(n, "argument-error"), st._fromEmailAndCode(e, n.code, n.tenantId)
        );
      }
    }
    (dt.PROVIDER_ID = "password"),
      (dt.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"),
      (dt.EMAIL_LINK_SIGN_IN_METHOD = "emailLink");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class ft {
      constructor(e) {
        (this.providerId = e),
          (this.defaultLanguageCode = null),
          (this.customParameters = {});
      }
      setDefaultLanguage(e) {
        this.defaultLanguageCode = e;
      }
      setCustomParameters(e) {
        return (this.customParameters = e), this;
      }
      getCustomParameters() {
        return this.customParameters;
      }
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class pt extends ft {
      constructor() {
        super(...arguments), (this.scopes = []);
      }
      addScope(e) {
        return this.scopes.includes(e) || this.scopes.push(e), this;
      }
      getScopes() {
        return [...this.scopes];
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class vt extends pt {
      constructor() {
        super("facebook.com");
      }
      static credential(e) {
        return ct._fromParams({
          providerId: vt.PROVIDER_ID,
          signInMethod: vt.FACEBOOK_SIGN_IN_METHOD,
          accessToken: e,
        });
      }
      static credentialFromResult(e) {
        return vt.credentialFromTaggedObject(e);
      }
      static credentialFromError(e) {
        return vt.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e || !("oauthAccessToken" in e)) return null;
        if (!e.oauthAccessToken) return null;
        try {
          return vt.credential(e.oauthAccessToken);
        } catch (e) {
          return null;
        }
      }
    }
    (vt.FACEBOOK_SIGN_IN_METHOD = "facebook.com"),
      (vt.PROVIDER_ID = "facebook.com");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class gt extends pt {
      constructor() {
        super("google.com"), this.addScope("profile");
      }
      static credential(e, t) {
        return ct._fromParams({
          providerId: gt.PROVIDER_ID,
          signInMethod: gt.GOOGLE_SIGN_IN_METHOD,
          idToken: e,
          accessToken: t,
        });
      }
      static credentialFromResult(e) {
        return gt.credentialFromTaggedObject(e);
      }
      static credentialFromError(e) {
        return gt.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e) return null;
        const { oauthIdToken: t, oauthAccessToken: n } = e;
        if (!t && !n) return null;
        try {
          return gt.credential(t, n);
        } catch (e) {
          return null;
        }
      }
    }
    (gt.GOOGLE_SIGN_IN_METHOD = "google.com"), (gt.PROVIDER_ID = "google.com");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class mt extends pt {
      constructor() {
        super("github.com");
      }
      static credential(e) {
        return ct._fromParams({
          providerId: mt.PROVIDER_ID,
          signInMethod: mt.GITHUB_SIGN_IN_METHOD,
          accessToken: e,
        });
      }
      static credentialFromResult(e) {
        return mt.credentialFromTaggedObject(e);
      }
      static credentialFromError(e) {
        return mt.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e || !("oauthAccessToken" in e)) return null;
        if (!e.oauthAccessToken) return null;
        try {
          return mt.credential(e.oauthAccessToken);
        } catch (e) {
          return null;
        }
      }
    }
    (mt.GITHUB_SIGN_IN_METHOD = "github.com"), (mt.PROVIDER_ID = "github.com");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class yt extends pt {
      constructor() {
        super("twitter.com");
      }
      static credential(e, t) {
        return ct._fromParams({
          providerId: yt.PROVIDER_ID,
          signInMethod: yt.TWITTER_SIGN_IN_METHOD,
          oauthToken: e,
          oauthTokenSecret: t,
        });
      }
      static credentialFromResult(e) {
        return yt.credentialFromTaggedObject(e);
      }
      static credentialFromError(e) {
        return yt.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e) return null;
        const { oauthAccessToken: t, oauthTokenSecret: n } = e;
        if (!t || !n) return null;
        try {
          return yt.credential(t, n);
        } catch (e) {
          return null;
        }
      }
    }
    (yt.TWITTER_SIGN_IN_METHOD = "twitter.com"),
      (yt.PROVIDER_ID = "twitter.com");
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class bt {
      constructor(e) {
        (this.user = e.user),
          (this.providerId = e.providerId),
          (this._tokenResponse = e._tokenResponse),
          (this.operationType = e.operationType);
      }
      static async _fromIdTokenResponse(e, t, n, r = !1) {
        const i = await Fe._fromIdTokenResponse(e, n, r),
          o = wt(n);
        return new bt({
          user: i,
          providerId: o,
          _tokenResponse: n,
          operationType: t,
        });
      }
      static async _forOperation(e, t, n) {
        await e._updateTokensIfNecessary(n, !0);
        const r = wt(n);
        return new bt({
          user: e,
          providerId: r,
          _tokenResponse: n,
          operationType: t,
        });
      }
    }
    function wt(e) {
      return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class _t extends r.c {
      constructor(e, t, n, r) {
        var i;
        super(t.code, t.message),
          (this.operationType = n),
          (this.user = r),
          Object.setPrototypeOf(this, _t.prototype),
          (this.customData = {
            appName: e.name,
            tenantId: null !== (i = e.tenantId) && void 0 !== i ? i : void 0,
            _serverResponse: t.customData._serverResponse,
            operationType: n,
          });
      }
      static _fromErrorAndOperation(e, t, n, r) {
        return new _t(e, t, n, r);
      }
    }
    function St(e, t, n, r) {
      return (
        "reauthenticate" === t
          ? n._getReauthenticationResolver(e)
          : n._getIdTokenResponse(e)
      ).catch((n) => {
        if ("auth/multi-factor-auth-required" === n.code)
          throw _t._fromErrorAndOperation(e, n, t, r);
        throw n;
      });
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function It(e, t, n = !1) {
      const r = await Ce(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
      return bt._forOperation(e, "link", r);
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    async function Et(e, t, n = !1) {
      var r;
      const { auth: i } = e;
      try {
        const r = await Ce(e, St(i, "reauthenticate", t, e), n);
        ue(r.idToken, i, "internal-error");
        const o = Le(r.idToken);
        ue(o, i, "internal-error");
        const { sub: s } = o;
        return (
          ue(e.uid === s, i, "user-mismatch"),
          bt._forOperation(e, "reauthenticate", r)
        );
      } catch (e) {
        throw (
          ("auth/user-not-found" ===
            (null === (r = e) || void 0 === r ? void 0 : r.code) &&
            oe(i, "user-mismatch"),
          e)
        );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function Ot(e, t, n = !1) {
      const r = await St(e, "signIn", t),
        i = await bt._fromIdTokenResponse(e, "signIn", r);
      return n || (await e._updateCurrentUser(i.user)), i;
    }
    new WeakMap();
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class Tt {
      constructor(e, t) {
        (this.storageRetriever = e), (this.type = t);
      }
      _isAvailable() {
        try {
          return this.storage
            ? (this.storage.setItem("__sak", "1"),
              this.storage.removeItem("__sak"),
              Promise.resolve(!0))
            : Promise.resolve(!1);
        } catch (e) {
          return Promise.resolve(!1);
        }
      }
      _set(e, t) {
        return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
      }
      _get(e) {
        const t = this.storage.getItem(e);
        return Promise.resolve(t ? JSON.parse(t) : null);
      }
      _remove(e) {
        return this.storage.removeItem(e), Promise.resolve();
      }
      get storage() {
        return this.storageRetriever();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class kt extends Tt {
      constructor() {
        super(() => window.localStorage, "LOCAL"),
          (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.safariLocalStorageNotSynced =
            (function () {
              const e = Object(r.j)();
              return ze(e) || Ze(e);
            })() &&
            (function () {
              try {
                return !(!window || window === window.top);
              } catch (e) {
                return !1;
              }
            })()),
          (this.fallbackToPolling = Xe()),
          (this._shouldAllowMigration = !0);
      }
      forAllChangedKeys(e) {
        for (const t of Object.keys(this.listeners)) {
          const n = this.storage.getItem(t),
            r = this.localCache[t];
          n !== r && e(t, r, n);
        }
      }
      onStorageEvent(e, t = !1) {
        if (!e.key)
          return void this.forAllChangedKeys((e, t, n) => {
            this.notifyListeners(e, n);
          });
        const n = e.key;
        if (
          (t ? this.detachListener() : this.stopPolling(),
          this.safariLocalStorageNotSynced)
        ) {
          const r = this.storage.getItem(n);
          if (e.newValue !== r)
            null !== e.newValue
              ? this.storage.setItem(n, e.newValue)
              : this.storage.removeItem(n);
          else if (this.localCache[n] === e.newValue && !t) return;
        }
        const i = () => {
            const e = this.storage.getItem(n);
            (t || this.localCache[n] !== e) && this.notifyListeners(n, e);
          },
          o = this.storage.getItem(n);
        Object(r.m)() &&
        10 === document.documentMode &&
        o !== e.newValue &&
        e.newValue !== e.oldValue
          ? setTimeout(i, 10)
          : i();
      }
      notifyListeners(e, t) {
        this.localCache[e] = t;
        const n = this.listeners[e];
        if (n) for (const e of Array.from(n)) e(t ? JSON.parse(t) : t);
      }
      startPolling() {
        this.stopPolling(),
          (this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((e, t, n) => {
              this.onStorageEvent(
                new StorageEvent("storage", {
                  key: e,
                  oldValue: t,
                  newValue: n,
                }),
                !0
              );
            });
          }, 1e3));
      }
      stopPolling() {
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
      }
      _addListener(e, t) {
        0 === Object.keys(this.listeners).length &&
          (this.fallbackToPolling
            ? this.startPolling()
            : this.attachListener()),
          this.listeners[e] ||
            ((this.listeners[e] = new Set()),
            (this.localCache[e] = this.storage.getItem(e))),
          this.listeners[e].add(t);
      }
      _removeListener(e, t) {
        this.listeners[e] &&
          (this.listeners[e].delete(t),
          0 === this.listeners[e].size && delete this.listeners[e]),
          0 === Object.keys(this.listeners).length &&
            (this.detachListener(), this.stopPolling());
      }
      async _set(e, t) {
        await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
      }
      async _get(e) {
        const t = await super._get(e);
        return (this.localCache[e] = JSON.stringify(t)), t;
      }
      async _remove(e) {
        await super._remove(e), delete this.localCache[e];
      }
    }
    kt.type = "LOCAL";
    const xt = kt;
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class At extends Tt {
      constructor() {
        super(() => window.sessionStorage, "SESSION");
      }
      _addListener(e, t) {}
      _removeListener(e, t) {}
    }
    At.type = "SESSION";
    const Pt = At;
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class Lt {
      constructor(e) {
        (this.eventTarget = e),
          (this.handlersMap = {}),
          (this.boundEventHandler = this.handleEvent.bind(this));
      }
      static _getInstance(e) {
        const t = this.receivers.find((t) => t.isListeningto(e));
        if (t) return t;
        const n = new Lt(e);
        return this.receivers.push(n), n;
      }
      isListeningto(e) {
        return this.eventTarget === e;
      }
      async handleEvent(e) {
        const t = e,
          { eventId: n, eventType: r, data: i } = t.data,
          o = this.handlersMap[r];
        if (!(null == o ? void 0 : o.size)) return;
        t.ports[0].postMessage({ status: "ack", eventId: n, eventType: r });
        const s = Array.from(o).map(async (e) => e(t.origin, i)),
          a = await (function (e) {
            return Promise.all(
              e.map(async (e) => {
                try {
                  return { fulfilled: !0, value: await e };
                } catch (e) {
                  return { fulfilled: !1, reason: e };
                }
              })
            );
          })(s);
        t.ports[0].postMessage({
          status: "done",
          eventId: n,
          eventType: r,
          response: a,
        });
      }
      _subscribe(e, t) {
        0 === Object.keys(this.handlersMap).length &&
          this.eventTarget.addEventListener("message", this.boundEventHandler),
          this.handlersMap[e] || (this.handlersMap[e] = new Set()),
          this.handlersMap[e].add(t);
      }
      _unsubscribe(e, t) {
        this.handlersMap[e] && t && this.handlersMap[e].delete(t),
          (t && 0 !== this.handlersMap[e].size) || delete this.handlersMap[e],
          0 === Object.keys(this.handlersMap).length &&
            this.eventTarget.removeEventListener(
              "message",
              this.boundEventHandler
            );
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Ct(e = "", t = 10) {
      let n = "";
      for (let e = 0; e < t; e++) n += Math.floor(10 * Math.random());
      return e + n;
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ Lt.receivers = [];
    class Nt {
      constructor(e) {
        (this.target = e), (this.handlers = new Set());
      }
      removeMessageHandler(e) {
        e.messageChannel &&
          (e.messageChannel.port1.removeEventListener("message", e.onMessage),
          e.messageChannel.port1.close()),
          this.handlers.delete(e);
      }
      async _send(e, t, n = 50) {
        const r =
          "undefined" != typeof MessageChannel ? new MessageChannel() : null;
        if (!r) throw new Error("connection_unavailable");
        let i, o;
        return new Promise((s, a) => {
          const c = Ct("", 20);
          r.port1.start();
          const u = setTimeout(() => {
            a(new Error("unsupported_event"));
          }, n);
          (o = {
            messageChannel: r,
            onMessage(e) {
              const t = e;
              if (t.data.eventId === c)
                switch (t.data.status) {
                  case "ack":
                    clearTimeout(u),
                      (i = setTimeout(() => {
                        a(new Error("timeout"));
                      }, 3e3));
                    break;
                  case "done":
                    clearTimeout(i), s(t.data.response);
                    break;
                  default:
                    clearTimeout(u),
                      clearTimeout(i),
                      a(new Error("invalid_response"));
                }
            },
          }),
            this.handlers.add(o),
            r.port1.addEventListener("message", o.onMessage),
            this.target.postMessage({ eventType: e, eventId: c, data: t }, [
              r.port2,
            ]);
        }).finally(() => {
          o && this.removeMessageHandler(o);
        });
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Rt() {
      return window;
    }
    /**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Mt() {
      return (
        void 0 !== Rt().WorkerGlobalScope &&
        "function" == typeof Rt().importScripts
      );
    }
    class Dt {
      constructor(e) {
        this.request = e;
      }
      toPromise() {
        return new Promise((e, t) => {
          this.request.addEventListener("success", () => {
            e(this.request.result);
          }),
            this.request.addEventListener("error", () => {
              t(this.request.error);
            });
        });
      }
    }
    function jt(e, t) {
      return e
        .transaction(["firebaseLocalStorage"], t ? "readwrite" : "readonly")
        .objectStore("firebaseLocalStorage");
    }
    function Ft() {
      const e = indexedDB.open("firebaseLocalStorageDb", 1);
      return new Promise((t, n) => {
        e.addEventListener("error", () => {
          n(e.error);
        }),
          e.addEventListener("upgradeneeded", () => {
            const t = e.result;
            try {
              t.createObjectStore("firebaseLocalStorage", {
                keyPath: "fbase_key",
              });
            } catch (e) {
              n(e);
            }
          }),
          e.addEventListener("success", async () => {
            const n = e.result;
            n.objectStoreNames.contains("firebaseLocalStorage")
              ? t(n)
              : (n.close(),
                await (function () {
                  const e = indexedDB.deleteDatabase("firebaseLocalStorageDb");
                  return new Dt(e).toPromise();
                })(),
                t(await Ft()));
          });
      });
    }
    async function Bt(e, t, n) {
      const r = jt(e, !0).put({ fbase_key: t, value: n });
      return new Dt(r).toPromise();
    }
    function Ut(e, t) {
      const n = jt(e, !0).delete(t);
      return new Dt(n).toPromise();
    }
    class qt {
      constructor() {
        (this.type = "LOCAL"),
          (this._shouldAllowMigration = !0),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.pendingWrites = 0),
          (this.receiver = null),
          (this.sender = null),
          (this.serviceWorkerReceiverAvailable = !1),
          (this.activeServiceWorker = null),
          (this._workerInitializationPromise =
            this.initializeServiceWorkerMessaging().then(
              () => {},
              () => {}
            ));
      }
      async _openDb() {
        return this.db || (this.db = await Ft()), this.db;
      }
      async _withRetries(e) {
        let t = 0;
        for (;;)
          try {
            const t = await this._openDb();
            return await e(t);
          } catch (e) {
            if (t++ > 3) throw e;
            this.db && (this.db.close(), (this.db = void 0));
          }
      }
      async initializeServiceWorkerMessaging() {
        return Mt() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        (this.receiver = Lt._getInstance(Mt() ? self : null)),
          this.receiver._subscribe("keyChanged", async (e, t) => ({
            keyProcessed: (await this._poll()).includes(t.key),
          })),
          this.receiver._subscribe("ping", async (e, t) => ["keyChanged"]);
      }
      async initializeSender() {
        var e, t;
        if (
          ((this.activeServiceWorker = await (async function () {
            if (
              !(null === navigator || void 0 === navigator
                ? void 0
                : navigator.serviceWorker)
            )
              return null;
            try {
              return (await navigator.serviceWorker.ready).active;
            } catch (e) {
              return null;
            }
          })()),
          !this.activeServiceWorker)
        )
          return;
        this.sender = new Nt(this.activeServiceWorker);
        const n = await this.sender._send("ping", {}, 800);
        n &&
          (null === (e = n[0]) || void 0 === e ? void 0 : e.fulfilled) &&
          (null === (t = n[0]) || void 0 === t
            ? void 0
            : t.value.includes("keyChanged")) &&
          (this.serviceWorkerReceiverAvailable = !0);
      }
      async notifyServiceWorker(e) {
        var t;
        if (
          this.sender &&
          this.activeServiceWorker &&
          ((null ===
            (t =
              null === navigator || void 0 === navigator
                ? void 0
                : navigator.serviceWorker) || void 0 === t
            ? void 0
            : t.controller) || null) === this.activeServiceWorker
        )
          try {
            await this.sender._send(
              "keyChanged",
              { key: e },
              this.serviceWorkerReceiverAvailable ? 800 : 50
            );
          } catch (t) {}
      }
      async _isAvailable() {
        try {
          if (!indexedDB) return !1;
          const e = await Ft();
          return await Bt(e, "__sak", "1"), await Ut(e, "__sak"), !0;
        } catch (e) {}
        return !1;
      }
      async _withPendingWrite(e) {
        this.pendingWrites++;
        try {
          await e();
        } finally {
          this.pendingWrites--;
        }
      }
      async _set(e, t) {
        return this._withPendingWrite(
          async () => (
            await this._withRetries((n) => Bt(n, e, t)),
            (this.localCache[e] = t),
            this.notifyServiceWorker(e)
          )
        );
      }
      async _get(e) {
        const t = await this._withRetries((t) =>
          (async function (e, t) {
            const n = jt(e, !1).get(t),
              r = await new Dt(n).toPromise();
            return void 0 === r ? null : r.value;
          })(t, e)
        );
        return (this.localCache[e] = t), t;
      }
      async _remove(e) {
        return this._withPendingWrite(
          async () => (
            await this._withRetries((t) => Ut(t, e)),
            delete this.localCache[e],
            this.notifyServiceWorker(e)
          )
        );
      }
      async _poll() {
        const e = await this._withRetries((e) => {
          const t = jt(e, !1).getAll();
          return new Dt(t).toPromise();
        });
        if (!e) return [];
        if (0 !== this.pendingWrites) return [];
        const t = [],
          n = new Set();
        for (const { fbase_key: r, value: i } of e)
          n.add(r),
            JSON.stringify(this.localCache[r]) !== JSON.stringify(i) &&
              (this.notifyListeners(r, i), t.push(r));
        for (const e of Object.keys(this.localCache))
          this.localCache[e] &&
            !n.has(e) &&
            (this.notifyListeners(e, null), t.push(e));
        return t;
      }
      notifyListeners(e, t) {
        this.localCache[e] = t;
        const n = this.listeners[e];
        if (n) for (const e of Array.from(n)) e(t);
      }
      startPolling() {
        this.stopPolling(),
          (this.pollTimer = setInterval(async () => this._poll(), 800));
      }
      stopPolling() {
        this.pollTimer &&
          (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      _addListener(e, t) {
        0 === Object.keys(this.listeners).length && this.startPolling(),
          this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
          this.listeners[e].add(t);
      }
      _removeListener(e, t) {
        this.listeners[e] &&
          (this.listeners[e].delete(t),
          0 === this.listeners[e].size && delete this.listeners[e]),
          0 === Object.keys(this.listeners).length && this.stopPolling();
      }
    }
    qt.type = "LOCAL";
    const Vt = qt;
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ function Ht(e) {
      return new Promise((t, n) => {
        const r = document.createElement("script");
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var i, o;
        r.setAttribute("src", e),
          (r.onload = t),
          (r.onerror = (e) => {
            const t = se("internal-error");
            (t.customData = e), n(t);
          }),
          (r.type = "text/javascript"),
          (r.charset = "UTF-8"),
          (null !==
            (o =
              null === (i = document.getElementsByTagName("head")) ||
              void 0 === i
                ? void 0
                : i[0]) && void 0 !== o
            ? o
            : document
          ).appendChild(r);
      });
    }
    function Wt(e) {
      return `__${e}${Math.floor(1e6 * Math.random())}`;
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class zt {
      constructor(e) {
        (this.auth = e), (this.counter = 1e12), (this._widgets = new Map());
      }
      render(e, t) {
        const n = this.counter;
        return (
          this._widgets.set(n, new Gt(e, this.auth.name, t || {})),
          this.counter++,
          n
        );
      }
      reset(e) {
        var t;
        const n = e || 1e12;
        null === (t = this._widgets.get(n)) || void 0 === t || t.delete(),
          this._widgets.delete(n);
      }
      getResponse(e) {
        var t;
        const n = e || 1e12;
        return (
          (null === (t = this._widgets.get(n)) || void 0 === t
            ? void 0
            : t.getResponse()) || ""
        );
      }
      async execute(e) {
        var t;
        const n = e || 1e12;
        return (
          null === (t = this._widgets.get(n)) || void 0 === t || t.execute(), ""
        );
      }
    }
    class Gt {
      constructor(e, t, n) {
        (this.params = n),
          (this.timerId = null),
          (this.deleted = !1),
          (this.responseToken = null),
          (this.clickHandler = () => {
            this.execute();
          });
        const r = "string" == typeof e ? document.getElementById(e) : e;
        ue(r, "argument-error", { appName: t }),
          (this.container = r),
          (this.isVisible = "invisible" !== this.params.size),
          this.isVisible
            ? this.execute()
            : this.container.addEventListener("click", this.clickHandler);
      }
      getResponse() {
        return this.checkIfDeleted(), this.responseToken;
      }
      delete() {
        this.checkIfDeleted(),
          (this.deleted = !0),
          this.timerId && (clearTimeout(this.timerId), (this.timerId = null)),
          this.container.removeEventListener("click", this.clickHandler);
      }
      execute() {
        this.checkIfDeleted(),
          this.timerId ||
            (this.timerId = window.setTimeout(() => {
              this.responseToken = (function (e) {
                const t = [],
                  n =
                    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                for (let r = 0; r < e; r++)
                  t.push(n.charAt(Math.floor(Math.random() * n.length)));
                return t.join("");
              })(
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */ 50
              );
              const { callback: e, "expired-callback": t } = this.params;
              if (e)
                try {
                  e(this.responseToken);
                } catch (e) {}
              this.timerId = window.setTimeout(() => {
                if (((this.timerId = null), (this.responseToken = null), t))
                  try {
                    t();
                  } catch (e) {}
                this.isVisible && this.execute();
              }, 6e4);
            }, 500));
      }
      checkIfDeleted() {
        if (this.deleted)
          throw new Error("reCAPTCHA mock was already deleted!");
      }
    }
    const Kt = Wt("rcb"),
      $t = new me(3e4, 6e4);
    class Jt {
      constructor() {
        var e;
        (this.hostLanguage = ""),
          (this.counter = 0),
          (this.librarySeparatelyLoaded = !!(null === (e = Rt().grecaptcha) ||
          void 0 === e
            ? void 0
            : e.render));
      }
      load(e, t = "") {
        return (
          ue(
            (function (e) {
              return e.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(e);
            })(t),
            e,
            "argument-error"
          ),
          this.shouldResolveImmediately(t)
            ? Promise.resolve(Rt().grecaptcha)
            : new Promise((n, i) => {
                const o = Rt().setTimeout(() => {
                  i(se(e, "network-request-failed"));
                }, $t.get());
                Rt()[Kt] = () => {
                  Rt().clearTimeout(o), delete Rt()[Kt];
                  const r = Rt().grecaptcha;
                  if (!r) return void i(se(e, "internal-error"));
                  const s = r.render;
                  (r.render = (e, t) => {
                    const n = s(e, t);
                    return this.counter++, n;
                  }),
                    (this.hostLanguage = t),
                    n(r);
                };
                Ht(
                  "https://www.google.com/recaptcha/api.js??" +
                    Object(r.q)({ onload: Kt, render: "explicit", hl: t })
                ).catch(() => {
                  clearTimeout(o), i(se(e, "internal-error"));
                });
              })
        );
      }
      clearedOneInstance() {
        this.counter--;
      }
      shouldResolveImmediately(e) {
        var t;
        return (
          !!(null === (t = Rt().grecaptcha) || void 0 === t
            ? void 0
            : t.render) &&
          (e === this.hostLanguage ||
            this.counter > 0 ||
            this.librarySeparatelyLoaded)
        );
      }
    }
    class Yt {
      async load(e) {
        return new zt(e);
      }
      clearedOneInstance() {}
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const Zt = { theme: "light", type: "image" };
    class Xt {
      constructor(e, t = Object.assign({}, Zt), n) {
        (this.parameters = t),
          (this.type = "recaptcha"),
          (this.destroyed = !1),
          (this.widgetId = null),
          (this.tokenChangeListeners = new Set()),
          (this.renderPromise = null),
          (this.recaptcha = null),
          (this.auth = nt(n)),
          (this.isInvisible = "invisible" === this.parameters.size),
          ue(
            "undefined" != typeof document,
            this.auth,
            "operation-not-supported-in-this-environment"
          );
        const r = "string" == typeof e ? document.getElementById(e) : e;
        ue(r, this.auth, "argument-error"),
          (this.container = r),
          (this.parameters.callback = this.makeTokenCallback(
            this.parameters.callback
          )),
          (this._recaptchaLoader = this.auth.settings
            .appVerificationDisabledForTesting
            ? new Yt()
            : new Jt()),
          this.validateStartingState();
      }
      async verify() {
        this.assertNotDestroyed();
        const e = await this.render(),
          t = this.getAssertedRecaptcha(),
          n = t.getResponse(e);
        return (
          n ||
          new Promise((n) => {
            const r = (e) => {
              e && (this.tokenChangeListeners.delete(r), n(e));
            };
            this.tokenChangeListeners.add(r), this.isInvisible && t.execute(e);
          })
        );
      }
      render() {
        try {
          this.assertNotDestroyed();
        } catch (e) {
          return Promise.reject(e);
        }
        return (
          this.renderPromise ||
            (this.renderPromise = this.makeRenderPromise().catch((e) => {
              throw ((this.renderPromise = null), e);
            })),
          this.renderPromise
        );
      }
      _reset() {
        this.assertNotDestroyed(),
          null !== this.widgetId &&
            this.getAssertedRecaptcha().reset(this.widgetId);
      }
      clear() {
        this.assertNotDestroyed(),
          (this.destroyed = !0),
          this._recaptchaLoader.clearedOneInstance(),
          this.isInvisible ||
            this.container.childNodes.forEach((e) => {
              this.container.removeChild(e);
            });
      }
      validateStartingState() {
        ue(!this.parameters.sitekey, this.auth, "argument-error"),
          ue(
            this.isInvisible || !this.container.hasChildNodes(),
            this.auth,
            "argument-error"
          ),
          ue(
            "undefined" != typeof document,
            this.auth,
            "operation-not-supported-in-this-environment"
          );
      }
      makeTokenCallback(e) {
        return (t) => {
          if (
            (this.tokenChangeListeners.forEach((e) => e(t)),
            "function" == typeof e)
          )
            e(t);
          else if ("string" == typeof e) {
            const n = Rt()[e];
            "function" == typeof n && n(t);
          }
        };
      }
      assertNotDestroyed() {
        ue(!this.destroyed, this.auth, "internal-error");
      }
      async makeRenderPromise() {
        if ((await this.init(), !this.widgetId)) {
          let e = this.container;
          if (!this.isInvisible) {
            const t = document.createElement("div");
            e.appendChild(t), (e = t);
          }
          this.widgetId = this.getAssertedRecaptcha().render(
            e,
            this.parameters
          );
        }
        return this.widgetId;
      }
      async init() {
        ue(ve() && !Mt(), this.auth, "internal-error"),
          await (function () {
            let e = null;
            return new Promise((t) => {
              "complete" !== document.readyState
                ? ((e = () => t()), window.addEventListener("load", e))
                : t();
            }).catch((t) => {
              throw (e && window.removeEventListener("load", e), t);
            });
          })(),
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */
          (this.recaptcha = await this._recaptchaLoader.load(
            this.auth,
            this.auth.languageCode || void 0
          ));
        const e = await /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        (async function (e) {
          return (
            (await Ie(e, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
          );
        })(this.auth);
        ue(e, this.auth, "internal-error"), (this.parameters.sitekey = e);
      }
      getAssertedRecaptcha() {
        return ue(this.recaptcha, this.auth, "internal-error"), this.recaptcha;
      }
    }
    async function Qt(e, t, n) {
      var r;
      const i = await n.verify();
      try {
        let o;
        if (
          (ue("string" == typeof i, e, "argument-error"),
          ue("recaptcha" === n.type, e, "argument-error"),
          (o = "string" == typeof t ? { phoneNumber: t } : t),
          "session" in o)
        ) {
          const t = o.session;
          if ("phoneNumber" in o) {
            ue("enroll" === t.type, e, "internal-error");
            return (
              (
                await /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                (function (e, t) {
                  return Ie(
                    e,
                    "POST",
                    "/v2/accounts/mfaEnrollment:start",
                    Se(e, t)
                  );
                })(e, {
                  idToken: t.credential,
                  phoneEnrollmentInfo: {
                    phoneNumber: o.phoneNumber,
                    recaptchaToken: i,
                  },
                })
              ).phoneSessionInfo.sessionInfo
            );
          }
          {
            ue("signin" === t.type, e, "internal-error");
            const n =
              (null === (r = o.multiFactorHint) || void 0 === r
                ? void 0
                : r.uid) || o.multiFactorUid;
            ue(n, e, "missing-multi-factor-info");
            return (
              await (function (e, t) {
                return Ie(e, "POST", "/v2/accounts/mfaSignIn:start", Se(e, t));
              })(e, {
                mfaPendingCredential: t.credential,
                mfaEnrollmentId: n,
                phoneSignInInfo: { recaptchaToken: i },
              })
            ).phoneResponseInfo.sessionInfo;
          }
        }
        {
          const { sessionInfo: t } = await (async function (e, t) {
            return Ie(e, "POST", "/v1/accounts:sendVerificationCode", Se(e, t));
          })(e, { phoneNumber: o.phoneNumber, recaptchaToken: i });
          return t;
        }
      } finally {
        n._reset();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class en {
      constructor(e) {
        (this.providerId = en.PROVIDER_ID), (this.auth = nt(e));
      }
      verifyPhoneNumber(e, t) {
        return Qt(this.auth, e, Object(r.i)(t));
      }
      static credential(e, t) {
        return lt._fromVerification(e, t);
      }
      static credentialFromResult(e) {
        const t = e;
        return en.credentialFromTaggedObject(t);
      }
      static credentialFromError(e) {
        return en.credentialFromTaggedObject(e.customData || {});
      }
      static credentialFromTaggedObject({ _tokenResponse: e }) {
        if (!e) return null;
        const { phoneNumber: t, temporaryProof: n } = e;
        return t && n ? lt._fromTokenResponse(t, n) : null;
      }
    }
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function tn(e, t) {
      return t
        ? fe(t)
        : (ue(e._popupRedirectResolver, e, "argument-error"),
          e._popupRedirectResolver);
    }
    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ (en.PROVIDER_ID = "phone"), (en.PHONE_SIGN_IN_METHOD = "phone");
    class nn extends it {
      constructor(e) {
        super("custom", "custom"), (this.params = e);
      }
      _getIdTokenResponse(e) {
        return at(e, this._buildIdpRequest());
      }
      _linkToIdToken(e, t) {
        return at(e, this._buildIdpRequest(t));
      }
      _getReauthenticationResolver(e) {
        return at(e, this._buildIdpRequest());
      }
      _buildIdpRequest(e) {
        const t = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: !0,
          returnIdpCredential: !0,
        };
        return e && (t.idToken = e), t;
      }
    }
    function rn(e) {
      return Ot(e.auth, new nn(e), e.bypassAuthState);
    }
    function on(e) {
      const { auth: t, user: n } = e;
      return ue(n, t, "internal-error"), Et(n, new nn(e), e.bypassAuthState);
    }
    async function sn(e) {
      const { auth: t, user: n } = e;
      return ue(n, t, "internal-error"), It(n, new nn(e), e.bypassAuthState);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ class an {
      constructor(e, t, n, r, i = !1) {
        (this.auth = e),
          (this.resolver = n),
          (this.user = r),
          (this.bypassAuthState = i),
          (this.pendingPromise = null),
          (this.eventManager = null),
          (this.filter = Array.isArray(t) ? t : [t]);
      }
      execute() {
        return new Promise(async (e, t) => {
          this.pendingPromise = { resolve: e, reject: t };
          try {
            (this.eventManager = await this.resolver._initialize(this.auth)),
              await this.onExecution(),
              this.eventManager.registerConsumer(this);
          } catch (e) {
            this.reject(e);
          }
        });
      }
      async onAuthEvent(e) {
        const {
          urlResponse: t,
          sessionId: n,
          postBody: r,
          tenantId: i,
          error: o,
          type: s,
        } = e;
        if (o) return void this.reject(o);
        const a = {
          auth: this.auth,
          requestUri: t,
          sessionId: n,
          tenantId: i || void 0,
          postBody: r || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState,
        };
        try {
          this.resolve(await this.getIdpTask(s)(a));
        } catch (e) {
          this.reject(e);
        }
      }
      onError(e) {
        this.reject(e);
      }
      getIdpTask(e) {
        switch (e) {
          case "signInViaPopup":
          case "signInViaRedirect":
            return rn;
          case "linkViaPopup":
          case "linkViaRedirect":
            return sn;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return on;
          default:
            oe(this.auth, "internal-error");
        }
      }
      resolve(e) {
        he(this.pendingPromise, "Pending promise was never set"),
          this.pendingPromise.resolve(e),
          this.unregisterAndCleanUp();
      }
      reject(e) {
        he(this.pendingPromise, "Pending promise was never set"),
          this.pendingPromise.reject(e),
          this.unregisterAndCleanUp();
      }
      unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this),
          (this.pendingPromise = null),
          this.cleanUp();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const cn = new me(2e3, 1e4);
    class un extends an {
      constructor(e, t, n, r, i) {
        super(e, t, r, i),
          (this.provider = n),
          (this.authWindow = null),
          (this.pollId = null),
          un.currentPopupAction && un.currentPopupAction.cancel(),
          (un.currentPopupAction = this);
      }
      async executeNotNull() {
        const e = await this.execute();
        return ue(e, this.auth, "internal-error"), e;
      }
      async onExecution() {
        he(1 === this.filter.length, "Popup operations only handle one event");
        const e = Ct();
        (this.authWindow = await this.resolver._openPopup(
          this.auth,
          this.provider,
          this.filter[0],
          e
        )),
          (this.authWindow.associatedEvent = e),
          this.resolver._originValidation(this.auth).catch((e) => {
            this.reject(e);
          }),
          this.resolver._isIframeWebStorageSupported(this.auth, (e) => {
            e || this.reject(se(this.auth, "web-storage-unsupported"));
          }),
          this.pollUserCancellation();
      }
      get eventId() {
        var e;
        return (
          (null === (e = this.authWindow) || void 0 === e
            ? void 0
            : e.associatedEvent) || null
        );
      }
      cancel() {
        this.reject(se(this.auth, "cancelled-popup-request"));
      }
      cleanUp() {
        this.authWindow && this.authWindow.close(),
          this.pollId && window.clearTimeout(this.pollId),
          (this.authWindow = null),
          (this.pollId = null),
          (un.currentPopupAction = null);
      }
      pollUserCancellation() {
        const e = () => {
          var t, n;
          (
            null ===
              (n =
                null === (t = this.authWindow) || void 0 === t
                  ? void 0
                  : t.window) || void 0 === n
              ? void 0
              : n.closed
          )
            ? (this.pollId = window.setTimeout(() => {
                (this.pollId = null),
                  this.reject(se(this.auth, "popup-closed-by-user"));
              }, 2e3))
            : (this.pollId = window.setTimeout(e, cn.get()));
        };
        e();
      }
    }
    un.currentPopupAction = null;
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const ln = new Map();
    class hn extends an {
      constructor(e, t, n = !1) {
        super(
          e,
          [
            "signInViaRedirect",
            "linkViaRedirect",
            "reauthViaRedirect",
            "unknown",
          ],
          t,
          void 0,
          n
        ),
          (this.eventId = null);
      }
      async execute() {
        let e = ln.get(this.auth._key());
        if (!e) {
          try {
            const t = (await (async function (e, t) {
              const n = pn(t),
                r = fn(e);
              if (!(await r._isAvailable())) return !1;
              const i = "true" === (await r._get(n));
              return await r._remove(n), i;
            })(this.resolver, this.auth))
              ? await super.execute()
              : null;
            e = () => Promise.resolve(t);
          } catch (t) {
            e = () => Promise.reject(t);
          }
          ln.set(this.auth._key(), e);
        }
        return (
          this.bypassAuthState ||
            ln.set(this.auth._key(), () => Promise.resolve(null)),
          e()
        );
      }
      async onAuthEvent(e) {
        if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
        if ("unknown" !== e.type) {
          if (e.eventId) {
            const t = await this.auth._redirectUserForId(e.eventId);
            if (t) return (this.user = t), super.onAuthEvent(e);
            this.resolve(null);
          }
        } else this.resolve(null);
      }
      async onExecution() {}
      cleanUp() {}
    }
    function dn(e, t) {
      ln.set(e._key(), t);
    }
    function fn(e) {
      return fe(e._redirectPersistence);
    }
    function pn(e) {
      return qe("pendingRedirect", e.config.apiKey, e.name);
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ async function vn(e, t, n = !1) {
      const r = nt(e),
        i = tn(r, t),
        o = new hn(r, i, n),
        s = await o.execute();
      return (
        s &&
          !n &&
          (delete s.user._redirectEventId,
          await r._persistUserIfCurrent(s.user),
          await r._setRedirectUser(null, t)),
        s
      );
    }
    class gn {
      constructor(e) {
        (this.auth = e),
          (this.cachedEventUids = new Set()),
          (this.consumers = new Set()),
          (this.queuedRedirectEvent = null),
          (this.hasHandledPotentialRedirect = !1),
          (this.lastProcessedEventTime = Date.now());
      }
      registerConsumer(e) {
        this.consumers.add(e),
          this.queuedRedirectEvent &&
            this.isEventForConsumer(this.queuedRedirectEvent, e) &&
            (this.sendToConsumer(this.queuedRedirectEvent, e),
            this.saveEventToCache(this.queuedRedirectEvent),
            (this.queuedRedirectEvent = null));
      }
      unregisterConsumer(e) {
        this.consumers.delete(e);
      }
      onEvent(e) {
        if (this.hasEventBeenHandled(e)) return !1;
        let t = !1;
        return (
          this.consumers.forEach((n) => {
            this.isEventForConsumer(e, n) &&
              ((t = !0), this.sendToConsumer(e, n), this.saveEventToCache(e));
          }),
          this.hasHandledPotentialRedirect ||
            !(function (e) {
              switch (e.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return yn(e);
                default:
                  return !1;
              }
            })(
              /**
               * @license
               * Copyright 2020 Google LLC
               *
               * Licensed under the Apache License, Version 2.0 (the "License");
               * you may not use this file except in compliance with the License.
               * You may obtain a copy of the License at
               *
               *   http://www.apache.org/licenses/LICENSE-2.0
               *
               * Unless required by applicable law or agreed to in writing, software
               * distributed under the License is distributed on an "AS IS" BASIS,
               * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               * See the License for the specific language governing permissions and
               * limitations under the License.
               */ e
            ) ||
            ((this.hasHandledPotentialRedirect = !0),
            t || ((this.queuedRedirectEvent = e), (t = !0))),
          t
        );
      }
      sendToConsumer(e, t) {
        var n;
        if (e.error && !yn(e)) {
          const r =
            (null === (n = e.error.code) || void 0 === n
              ? void 0
              : n.split("auth/")[1]) || "internal-error";
          t.onError(se(this.auth, r));
        } else t.onAuthEvent(e);
      }
      isEventForConsumer(e, t) {
        const n =
          null === t.eventId || (!!e.eventId && e.eventId === t.eventId);
        return t.filter.includes(e.type) && n;
      }
      hasEventBeenHandled(e) {
        return (
          Date.now() - this.lastProcessedEventTime >= 6e5 &&
            this.cachedEventUids.clear(),
          this.cachedEventUids.has(mn(e))
        );
      }
      saveEventToCache(e) {
        this.cachedEventUids.add(mn(e)),
          (this.lastProcessedEventTime = Date.now());
      }
    }
    function mn(e) {
      return [e.type, e.eventId, e.sessionId, e.tenantId]
        .filter((e) => e)
        .join("-");
    }
    function yn({ type: e, error: t }) {
      return (
        "unknown" === e &&
        "auth/no-auth-event" === (null == t ? void 0 : t.code)
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const bn = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      wn = /^https?/;
    async function _n(e) {
      if (e.config.emulator) return;
      const { authorizedDomains: t } = await (async function (e, t = {}) {
        return Ie(e, "GET", "/v1/projects", t);
      })(e);
      for (const e of t)
        try {
          if (Sn(e)) return;
        } catch (e) {}
      oe(e, "unauthorized-domain");
    }
    function Sn(e) {
      const t = pe(),
        { protocol: n, hostname: r } = new URL(t);
      if (e.startsWith("chrome-extension://")) {
        const i = new URL(e);
        return "" === i.hostname && "" === r
          ? "chrome-extension:" === n &&
              e.replace("chrome-extension://", "") ===
                t.replace("chrome-extension://", "")
          : "chrome-extension:" === n && i.hostname === r;
      }
      if (!wn.test(n)) return !1;
      if (bn.test(e)) return r === e;
      const i = e.replace(/\./g, "\\.");
      return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
    }
    /**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const In = new me(3e4, 6e4);
    function En() {
      const e = Rt().___jsl;
      if (null == e ? void 0 : e.H)
        for (const t of Object.keys(e.H))
          if (
            ((e.H[t].r = e.H[t].r || []),
            (e.H[t].L = e.H[t].L || []),
            (e.H[t].r = [...e.H[t].L]),
            e.CP)
          )
            for (let t = 0; t < e.CP.length; t++) e.CP[t] = null;
    }
    let On = null;
    function Tn(e) {
      return (
        (On =
          On ||
          (function (e) {
            return new Promise((t, n) => {
              var r, i, o;
              function s() {
                En(),
                  gapi.load("gapi.iframes", {
                    callback: () => {
                      t(gapi.iframes.getContext());
                    },
                    ontimeout: () => {
                      En(), n(se(e, "network-request-failed"));
                    },
                    timeout: In.get(),
                  });
              }
              if (
                null ===
                  (i =
                    null === (r = Rt().gapi) || void 0 === r
                      ? void 0
                      : r.iframes) || void 0 === i
                  ? void 0
                  : i.Iframe
              )
                t(gapi.iframes.getContext());
              else {
                if (
                  !(null === (o = Rt().gapi) || void 0 === o ? void 0 : o.load)
                ) {
                  const t = Wt("iframefcb");
                  return (
                    (Rt()[t] = () => {
                      gapi.load ? s() : n(se(e, "network-request-failed"));
                    }),
                    Ht("https://apis.google.com/js/api.js?onload=" + t).catch(
                      (e) => n(e)
                    )
                  );
                }
                s();
              }
            }).catch((e) => {
              throw ((On = null), e);
            });
          })(e)),
        On
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ const kn = new me(5e3, 15e3),
      xn = {
        style: {
          position: "absolute",
          top: "-100px",
          width: "1px",
          height: "1px",
        },
        "aria-hidden": "true",
        tabindex: "-1",
      },
      An = new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"],
      ]);
    function Pn(e) {
      const t = e.config;
      ue(t.authDomain, e, "auth-domain-config-required");
      const n = t.emulator
          ? ye(t, "emulator/auth/iframe")
          : `https://${e.config.authDomain}/__/auth/iframe`,
        i = { apiKey: t.apiKey, appName: e.name, v: "9.9.1" },
        o = An.get(e.config.apiHost);
      o && (i.eid = o);
      const s = e._getFrameworks();
      return (
        s.length && (i.fw = s.join(",")), `${n}?${Object(r.q)(i).slice(1)}`
      );
    }
    /**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    const Ln = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no",
    };
    class Cn {
      constructor(e) {
        (this.window = e), (this.associatedEvent = null);
      }
      close() {
        if (this.window)
          try {
            this.window.close();
          } catch (e) {}
      }
    }
    function Nn(e, t, n, i = 500, o = 600) {
      const s = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
        a = Math.max((window.screen.availWidth - i) / 2, 0).toString();
      let c = "";
      const u = Object.assign(Object.assign({}, Ln), {
          width: i.toString(),
          height: o.toString(),
          top: s,
          left: a,
        }),
        l = Object(r.j)().toLowerCase();
      n && (c = Ge(l) ? "_blank" : n),
        We(l) && ((t = t || "http://localhost"), (u.scrollbars = "yes"));
      const h = Object.entries(u).reduce((e, [t, n]) => `${e}${t}=${n},`, "");
      if (
        (function (e = Object(r.j)()) {
          var t;
          return (
            Ze(e) &&
            !!(null === (t = window.navigator) || void 0 === t
              ? void 0
              : t.standalone)
          );
        })(l) &&
        "_self" !== c
      )
        return (
          (function (e, t) {
            const n = document.createElement("a");
            (n.href = e), (n.target = t);
            const r = document.createEvent("MouseEvent");
            r.initMouseEvent(
              "click",
              !0,
              !0,
              window,
              1,
              0,
              0,
              0,
              0,
              !1,
              !1,
              !1,
              !1,
              1,
              null
            ),
              n.dispatchEvent(r);
          })(
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */ t || "",
            c
          ),
          new Cn(null)
        );
      const d = window.open(t || "", c, h);
      ue(d, e, "popup-blocked");
      try {
        d.focus();
      } catch (e) {}
      return new Cn(d);
    }
    function Rn(e, t, n, i, o, s) {
      ue(e.config.authDomain, e, "auth-domain-config-required"),
        ue(e.config.apiKey, e, "invalid-api-key");
      const a = {
        apiKey: e.config.apiKey,
        appName: e.name,
        authType: n,
        redirectUrl: i,
        v: "9.9.1",
        eventId: o,
      };
      if (t instanceof ft) {
        t.setDefaultLanguage(e.languageCode),
          (a.providerId = t.providerId || ""),
          Object(r.l)(t.getCustomParameters()) ||
            (a.customParameters = JSON.stringify(t.getCustomParameters()));
        for (const [e, t] of Object.entries(s || {})) a[e] = t;
      }
      if (t instanceof pt) {
        const e = t.getScopes().filter((e) => "" !== e);
        e.length > 0 && (a.scopes = e.join(","));
      }
      e.tenantId && (a.tid = e.tenantId);
      const c = a;
      for (const e of Object.keys(c)) void 0 === c[e] && delete c[e];
      return `${(function ({ config: e }) {
        if (!e.emulator) return `https://${e.authDomain}/__/auth/handler`;
        return ye(e, "emulator/auth/handler");
      })(
        /**
         * @license
         * Copyright 2020 Google LLC
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */ e
      )}?${Object(r.q)(c).slice(1)}`;
    }
    const Mn = class {
      constructor() {
        (this.eventManagers = {}),
          (this.iframes = {}),
          (this.originValidationPromises = {}),
          (this._redirectPersistence = Pt),
          (this._completeRedirectFn = vn),
          (this._overrideRedirectResult = dn);
      }
      async _openPopup(e, t, n, r) {
        var i;
        he(
          null === (i = this.eventManagers[e._key()]) || void 0 === i
            ? void 0
            : i.manager,
          "_initialize() not called before _openPopup()"
        );
        return Nn(e, Rn(e, t, n, pe(), r), Ct());
      }
      async _openRedirect(e, t, n, r) {
        var i;
        return (
          await this._originValidation(e),
          (i = Rn(e, t, n, pe(), r)),
          (Rt().location.href = i),
          new Promise(() => {})
        );
      }
      _initialize(e) {
        const t = e._key();
        if (this.eventManagers[t]) {
          const { manager: e, promise: n } = this.eventManagers[t];
          return e
            ? Promise.resolve(e)
            : (he(n, "If manager is not set, promise should be"), n);
        }
        const n = this.initAndGetManager(e);
        return (
          (this.eventManagers[t] = { promise: n }),
          n.catch(() => {
            delete this.eventManagers[t];
          }),
          n
        );
      }
      async initAndGetManager(e) {
        const t = await (async function (e) {
            const t = await Tn(e),
              n = Rt().gapi;
            return (
              ue(n, e, "internal-error"),
              t.open(
                {
                  where: document.body,
                  url: Pn(e),
                  messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                  attributes: xn,
                  dontclear: !0,
                },
                (t) =>
                  new Promise(async (n, r) => {
                    await t.restyle({ setHideOnLeave: !1 });
                    const i = se(e, "network-request-failed"),
                      o = Rt().setTimeout(() => {
                        r(i);
                      }, kn.get());
                    function s() {
                      Rt().clearTimeout(o), n(t);
                    }
                    t.ping(s).then(s, () => {
                      r(i);
                    });
                  })
              )
            );
          })(e),
          n = new gn(e);
        return (
          t.register(
            "authEvent",
            (t) => {
              ue(null == t ? void 0 : t.authEvent, e, "invalid-auth-event");
              return { status: n.onEvent(t.authEvent) ? "ACK" : "ERROR" };
            },
            gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
          ),
          (this.eventManagers[e._key()] = { manager: n }),
          (this.iframes[e._key()] = t),
          n
        );
      }
      _isIframeWebStorageSupported(e, t) {
        this.iframes[e._key()].send(
          "webStorageSupport",
          { type: "webStorageSupport" },
          (n) => {
            var r;
            const i =
              null === (r = null == n ? void 0 : n[0]) || void 0 === r
                ? void 0
                : r.webStorageSupport;
            void 0 !== i && t(!!i), oe(e, "internal-error");
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        );
      }
      _originValidation(e) {
        const t = e._key();
        return (
          this.originValidationPromises[t] ||
            (this.originValidationPromises[t] = _n(e)),
          this.originValidationPromises[t]
        );
      }
      get _shouldInitProactively() {
        return Xe() || ze() || Ze();
      }
    };
    var Dn;
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    class jn {
      constructor(e) {
        (this.auth = e), (this.internalListeners = new Map());
      }
      getUid() {
        var e;
        return (
          this.assertAuthConfigured(),
          (null === (e = this.auth.currentUser) || void 0 === e
            ? void 0
            : e.uid) || null
        );
      }
      async getToken(e) {
        if (
          (this.assertAuthConfigured(),
          await this.auth._initializationPromise,
          !this.auth.currentUser)
        )
          return null;
        return { accessToken: await this.auth.currentUser.getIdToken(e) };
      }
      addAuthTokenListener(e) {
        if ((this.assertAuthConfigured(), this.internalListeners.has(e)))
          return;
        const t = this.auth.onIdTokenChanged((t) => {
          var n;
          e(
            (null === (n = t) || void 0 === n
              ? void 0
              : n.stsTokenManager.accessToken) || null
          );
        });
        this.internalListeners.set(e, t), this.updateProactiveRefresh();
      }
      removeAuthTokenListener(e) {
        this.assertAuthConfigured();
        const t = this.internalListeners.get(e);
        t &&
          (this.internalListeners.delete(e),
          t(),
          this.updateProactiveRefresh());
      }
      assertAuthConfigured() {
        ue(
          this.auth._initializationPromise,
          "dependent-sdk-initialized-before-auth"
        );
      }
      updateProactiveRefresh() {
        this.internalListeners.size > 0
          ? this.auth._startProactiveRefresh()
          : this.auth._stopProactiveRefresh();
      }
    }
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    function Fn(
      e = (function (e = "[DEFAULT]") {
        const t = R.get(e);
        if (!t) throw U.create("no-app", { appName: e });
        return t;
      })()
    ) {
      const t = F(e, "auth");
      return t.isInitialized()
        ? t.getImmediate()
        : (function (e, t) {
            const n = F(e, "auth");
            if (n.isInitialized()) {
              const e = n.getImmediate(),
                i = n.getOptions();
              if (Object(r.g)(i, null != t ? t : {})) return e;
              oe(e, "already-initialized");
            }
            return n.initialize({ options: t });
          })(e, { popupRedirectResolver: Mn, persistence: [Vt, xt, Pt] });
    }
    (Dn = "Browser"),
      j(
        new i(
          "auth",
          (e, { options: t }) => {
            const n = e.getProvider("app").getImmediate(),
              r = e.getProvider("heartbeat"),
              { apiKey: i, authDomain: o } = n.options;
            return ((e, n) => {
              ue(i && !i.includes(":"), "invalid-api-key", { appName: e.name }),
                ue(!(null == o ? void 0 : o.includes(":")), "argument-error", {
                  appName: e.name,
                });
              const r = {
                  apiKey: i,
                  authDomain: o,
                  clientPlatform: Dn,
                  apiHost: "identitytoolkit.googleapis.com",
                  tokenApiHost: "securetoken.googleapis.com",
                  apiScheme: "https",
                  sdkClientVersion: Qe(Dn),
                },
                s = new tt(e, n, r);
              return (
                (function (e, t) {
                  const n = (null == t ? void 0 : t.persistence) || [],
                    r = (Array.isArray(n) ? n : [n]).map(fe);
                  (null == t ? void 0 : t.errorMap) &&
                    e._updateErrorMap(t.errorMap),
                    e._initializeWithPersistence(
                      r,
                      null == t ? void 0 : t.popupRedirectResolver
                    );
                })(s, t),
                s
              );
            })(n, r);
          },
          "PUBLIC"
        )
          .setInstantiationMode("EXPLICIT")
          .setInstanceCreatedCallback((e, t, n) => {
            e.getProvider("auth-internal").initialize();
          })
      ),
      j(
        new i(
          "auth-internal",
          (e) => ((e) => new jn(e))(nt(e.getProvider("auth").getImmediate())),
          "PRIVATE"
        ).setInstantiationMode("EXPLICIT")
      ),
      V(
        "@firebase/auth",
        "0.20.5",
        (function (e) {
          switch (e) {
            case "Node":
              return "node";
            case "ReactNative":
              return "rn";
            case "Worker":
              return "webworker";
            case "Cordova":
              return "cordova";
            default:
              return;
          }
        })(Dn)
      ),
      V("@firebase/auth", "0.20.5", "esm2017");
    var Bn =
        "\n    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M5 12H19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' /><path d='M12 5L19 12L12 19' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />\n    </svg>\n",
      Un =
        '\n    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 413.348 413.348"><path d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>\n',
      qn = {
        list: [
          { n: "Afghanistan", c: "93", i: "AF" },
          { n: "Albania", c: "355", i: "AL" },
          { n: "Algeria", c: "213", i: "DZ" },
          { n: "American Samoa", c: "1684", i: "AS" },
          { n: "Andorra", c: "376", i: "AD" },
          { n: "Angola", c: "244", i: "AO" },
          { n: "Antigua and Barbuda", c: "1268", i: "AG" },
          { n: "Argentina", c: "54", i: "AR" },
          { n: "Armenia", c: "374", i: "AM" },
          { n: "Aruba", c: "297", i: "AW" },
          { n: "Australia", c: "61", i: "AU" },
          { n: "Austria", c: "43", i: "AT" },
          { n: "Azerbaijan", c: "994", i: "AZ" },
          { n: "Bahamas", c: "1242", i: "BS" },
          { n: "Bangladesh", c: "880", i: "BD" },
          { n: "Barbados", c: "1246", i: "BB" },
          { n: "Belarus", c: "375", i: "BY" },
          { n: "Belgium", c: "32", i: "BE" },
          { n: "Belize", c: "501", i: "BZ" },
          { n: "Benin", c: "229", i: "BJ" },
          { n: "Bermuda", c: "1441", i: "BM" },
          { n: "Bhutan", c: "975", i: "BT" },
          { n: "Bolivia", c: "591", i: "BO" },
          { n: "Bosnia and Herzegovina", c: "387", i: "BA" },
          { n: "Botswana", c: "267", i: "BW" },
          { n: "Brazil", c: "55", i: "BR" },
          { n: "Brunei Darussalam", c: "673", i: "BN" },
          { n: "Bulgaria", c: "359", i: "BG" },
          { n: "Burkina Faso", c: "226", i: "BF" },
          { n: "Cambodia", c: "855", i: "KH" },
          { n: "Cameroon", c: "237", i: "CM" },
          { n: "Canada", c: "1", i: "CA" },
          { n: "Cape Verde", c: "238", i: "CV" },
          { n: "Cayman Islands", c: "1345", i: "KY" },
          { n: "Central African Republic", c: "236", i: "CF" },
          { n: "Chile", c: "56", i: "CL" },
          { n: "Colombia", c: "57", i: "CO" },
          { n: "Comoros", c: "269", i: "KM" },
          { n: "Congo", c: "242", i: "CG" },
          { n: "Cook Islands", c: "682", i: "CK" },
          { n: "Costa Rica", c: "506", i: "CR" },
          { n: "Croatia", c: "385", i: "HR" },
          { n: "Cyprus", c: "357", i: "CY" },
          { n: "Czech Republic", c: "420", i: "CZ" },
          { n: "Democratic Republic of the Congo", c: "243", i: "CD" },
          { n: "Denmark", c: "45", i: "DK" },
          { n: "Djibouti", c: "253", i: "DJ" },
          { n: "Dominica", c: "1767", i: "DM" },
          { n: "Dominican Republic", c: "1849", i: "DO" },
          { n: "Ecuador", c: "593", i: "EC" },
          { n: "Egypt", c: "20", i: "EG" },
          { n: "El Salvador", c: "503", i: "SV" },
          { n: "Equatorial Guinea", c: "240", i: "GQ" },
          { n: "Swaziland", c: "268", i: "SZ" },
          { n: "Ethiopia", c: "251", i: "ET" },
          { n: "Falkland Islands (Malvinas)", c: "500", i: "FK" },
          { n: "Faroe Islands", c: "298", i: "FO" },
          { n: "Fiji", c: "679", i: "FJ" },
          { n: "Finland", c: "358", i: "FI" },
          { n: "France", c: "33", i: "FR" },
          { n: "French Guiana", c: "594", i: "GF" },
          { n: "Gabon", c: "241", i: "GA" },
          { n: "Gambia", c: "220", i: "GM" },
          { n: "Georgia", c: "995", i: "GE" },
          { n: "Germany", c: "49", i: "DE" },
          { n: "Ghana", c: "233", i: "GH" },
          { n: "Gibraltar", c: "350", i: "GI" },
          { n: "Greece", c: "30", i: "GR" },
          { n: "Greenland", c: "299", i: "GL" },
          { n: "Grenada", c: "1473", i: "GD" },
          { n: "Guadeloupe", c: "590", i: "GP" },
          { n: "Guatemala", c: "502", i: "GT" },
          { n: "Guernsey", c: "44", i: "GG" },
          { n: "Guyana", c: "592", i: "GY" },
          { n: "Haiti", c: "509", i: "HT" },
          { n: "Honduras", c: "504", i: "HN" },
          { n: "Hong Kong", c: "852", i: "HK" },
          { n: "Hungary", c: "36", i: "HU" },
          { n: "India", c: "91", i: "IN" },
          { n: "Indonesia", c: "62", i: "ID" },
          { n: "Iraq", c: "964", i: "IQ" },
          { n: "Ireland", c: "353", i: "IE" },
          { n: "Isle of Man", c: "44", i: "IM" },
          { n: "Israel", c: "972", i: "IL" },
          { n: "Italy", c: "39", i: "IT" },
          { n: "Ivory Coast", c: "225", i: "CI" },
          { n: "Jamaica", c: "1876", i: "JM" },
          { n: "Japan", c: "81", i: "JP" },
          { n: "Jersey", c: "44", i: "JE" },
          { n: "Jordan", c: "962", i: "JO" },
          { n: "Kazakhstan", c: "77", i: "KZ" },
          { n: "Kenya", c: "254", i: "KE" },
          { n: "Korea, Republic of South Korea", c: "82", i: "KR" },
          { n: "Kuwait", c: "965", i: "KW" },
          { n: "Kyrgyzstan", c: "996", i: "KG" },
          { n: "Laos", c: "856", i: "LA" },
          { n: "Latvia", c: "371", i: "LV" },
          { n: "Lebanon", c: "961", i: "LB" },
          { n: "Lesotho", c: "266", i: "LS" },
          { n: "Libya", c: "218", i: "LY" },
          { n: "Liechtenstein", c: "423", i: "LI" },
          { n: "Lithuania", c: "370", i: "LT" },
          { n: "Luxembourg", c: "352", i: "LU" },
          { n: "Macau", c: "853", i: "MO" },
          { n: "Madagascar", c: "261", i: "MG" },
          { n: "Malawi", c: "265", i: "MW" },
          { n: "Malaysia", c: "60", i: "MY" },
          { n: "Malta", c: "356", i: "MT" },
          { n: "Mauritius", c: "230", i: "MU" },
          { n: "Mayotte", c: "262", i: "YT" },
          { n: "Mexico", c: "52", i: "MX" },
          {
            n: "Micronesia, Federated States of Micronesia",
            c: "691",
            i: "FM",
          },
          { n: "Moldova", c: "373", i: "MD" },
          { n: "Mongolia", c: "976", i: "MN" },
          { n: "Montenegro", c: "382", i: "ME" },
          { n: "Montserrat", c: "1664", i: "MS" },
          { n: "Morocco", c: "212", i: "MA" },
          { n: "Mozambique", c: "258", i: "MZ" },
          { n: "Myanmar", c: "95", i: "MM" },
          { n: "Namibia", c: "264", i: "NA" },
          { n: "Nepal", c: "977", i: "NP" },
          { n: "Netherlands", c: "31", i: "NL" },
          { n: "New Caledonia", c: "687", i: "NC" },
          { n: "New Zealand", c: "64", i: "NZ" },
          { n: "Nicaragua", c: "505", i: "NI" },
          { n: "Niger", c: "227", i: "NE" },
          { n: "Nigeria", c: "234", i: "NG" },
          { n: "Norfolk Island", c: "672", i: "NF" },
          { n: "Macedonia", c: "389", i: "MK" },
          { n: "Norway", c: "47", i: "NO" },
          { n: "Oman", c: "968", i: "OM" },
          { n: "Pakistan", c: "92", i: "PK" },
          { n: "Palestine", c: "970", i: "PS" },
          { n: "Panama", c: "507", i: "PA" },
          { n: "Papua New Guinea", c: "675", i: "PG" },
          { n: "Paraguay", c: "595", i: "PY" },
          { n: "Peru", c: "51", i: "PE" },
          { n: "Philippines", c: "63", i: "PH" },
          { n: "Poland", c: "48", i: "PL" },
          { n: "Portugal", c: "351", i: "PT" },
          { n: "Puerto Rico", c: "1939", i: "PR" },
          { n: "Qatar", c: "974", i: "QA" },
          { n: "Reunion", c: "262", i: "RE" },
          { n: "Romania", c: "40", i: "RO" },
          { n: "Russia", c: "7", i: "RU" },
          { n: "Rwanda", c: "250", i: "RW" },
          {
            n: "Saint Helena, Ascension and Tristan Da Cunha",
            c: "290",
            i: "SH",
          },
          { n: "Saint Kitts and Nevis", c: "1869", i: "KN" },
          { n: "Saint Lucia", c: "1758", i: "LC" },
          { n: "Saint Martin", c: "590", i: "MF" },
          { n: "Saint Pierre and Miquelon", c: "508", i: "PM" },
          { n: "Saint Vincent and the Grenadines", c: "1784", i: "VC" },
          { n: "Samoa", c: "685", i: "WS" },
          { n: "Sao Tome and Principe", c: "239", i: "ST" },
          { n: "Saudi Arabia", c: "966", i: "SA" },
          { n: "Senegal", c: "221", i: "SN" },
          { n: "Serbia", c: "381", i: "RS" },
          { n: "Seychelles", c: "248", i: "SC" },
          { n: "Sierra Leone", c: "232", i: "SL" },
          { n: "Singapore", c: "65", i: "SG" },
          { n: "Slovakia", c: "421", i: "SK" },
          { n: "Slovenia", c: "386", i: "SI" },
          { n: "South Africa", c: "27", i: "ZA" },
          { n: "Spain", c: "34", i: "ES" },
          { n: "Sri Lanka", c: "94", i: "LK" },
          { n: "Suriname", c: "597", i: "SR" },
          { n: "Sweden", c: "46", i: "SE" },
          { n: "Switzerland", c: "41", i: "CH" },
          { n: "Taiwan", c: "886", i: "TW" },
          { n: "Tanzania", c: "255", i: "TZ" },
          { n: "Thailand", c: "66", i: "TH" },
          { n: "Timor-Leste", c: "670", i: "TL" },
          { n: "Togo", c: "228", i: "TG" },
          { n: "Tonga", c: "676", i: "TO" },
          { n: "Trinidad and Tobago", c: "1868", i: "TT" },
          { n: "Turkey", c: "90", i: "TR" },
          { n: "Turkmenistan", c: "993", i: "TM" },
          { n: "Turks and Caicos Islands", c: "1649", i: "TC" },
          { n: "Uganda", c: "256", i: "UG" },
          { n: "Ukraine", c: "380", i: "UA" },
          { n: "United Arab Emirates", c: "971", i: "AE" },
          { n: "United Kingdom", c: "44", i: "GB" },
          { n: "United States", c: "1", i: "US" },
          { n: "Uruguay", c: "598", i: "UY" },
          { n: "Uzbekistan", c: "998", i: "UZ" },
          { n: "Venezuela", c: "58", i: "VE" },
          { n: "Vietnam", c: "84", i: "VN" },
          { n: "Virgin Islands, British", c: "1284", i: "VG" },
          { n: "Virgin Islands, U.S.", c: "1340", i: "VI" },
          { n: "Yemen", c: "967", i: "YE" },
          { n: "Zambia", c: "260", i: "ZM" },
          { n: "Zimbabwe", c: "263", i: "ZW" },
        ],
      },
      Vn = { list: [{ n: "India", c: "91", i: "IN" }] },
      Hn = simplyOtp.language,
      Wn = function (e) {
        var t =
            '<div class="country-selector-main">\n    <div class="selected-country">\n    <div class="country-flag-box">\n    <span class="country-flag {{default_country_selected}}"></span>\n    </div>\n    </div>\n    '.concat(
              '\n    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1 1L7 7L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n',
              '\n    </div>\n    <ul class="country-selector-list" aria-label="List of countries">{{countryList}}</ul>'
            ),
          n = "",
          r = qn;
        if (!e) {
          simplyOtp.settings.onlyIndia && (r = Vn);
          var i = simplyOtp.language.enableCountries.split(",");
          r.list = r.list.filter(function (e) {
            return i.includes(e.i);
          });
        }
        return (
          r.list.forEach(function (e) {
            var t =
              '<li class="" data-dial-code="{{country_code}}" data-country-code="{{iso_code}}">\n        <div class="country-flag-box">\n        <div class="country-flag {{iso_code}}"></div>\n        </div>\n        <span class="country-name">{{country_name}}</span>\n        <span class="dial-code">+{{country_code}}</span>\n        </li>';
            (t = (t = (t = t.replaceAll("{{country_code}}", e.c)).replaceAll(
              "{{iso_code}}",
              e.i.toLowerCase()
            )).replaceAll("{{country_name}}", e.n)),
              (n += t);
          }),
          (t = (t = t.replaceAll(
            "{{default_country_selected}}",
            "in"
          )).replaceAll("{{countryList}}", n))
        );
      },
      zn = function () {
        var e = Wn(!1),
          t =
            '\n    <div class="input-box-content mobile-no-inner" data-current="mobile">\n    {{country_html}}\n    <input class="olInput user-name-input" placeholder="'.concat(
              Hn.phonePlaceholder,
              '" maxlength="10" name="phone" type="number" />\n    </div>'
            );
        return (t = t.replaceAll("{{country_html}}", e));
      },
      Gn = function () {
        var e = zn(),
          t =
            '\n    <div class="input-box-content email-no-inner" data-current="email">\n    <input class="olInput user-name-input" placeholder="'.concat(
              Hn.emailPlaceholder,
              '" maxlength="" name="email" type="email" />\n    </div>'
            ),
          n = (function () {
            var e = Wn(!0),
              t =
                '\n    <div class="input-box-content whatsapp-no-inner" data-current="whatsapp">\n    {{country_html}}\n    <input class="olInput user-name-input" placeholder="'.concat(
                  Hn.whatsappPlaceholder,
                  '" maxlength="10" name="whatsapp" type="number" />\n    </div>'
                );
            return (t = t.replaceAll("{{country_html}}", e));
          })(),
          r =
            '\n    <div class="login-inputBox">\n    {{phone_html}}\n    {{email_html}}\n    {{whatsapp_html}}\n    </div>';
        return (r = (r = (r = r.replaceAll("{{phone_html}}", e)).replaceAll(
          "{{email_html}}",
          t
        )).replaceAll("{{whatsapp_html}}", n));
      },
      Kn = simplyOtp.language,
      $n = simplyOtp.language,
      Jn = function () {
        var e,
          t =
            '<div class="update-user-box step-box-wrapper hideBox">\n            <h3 class="login-header">'
              .concat(
                $n.accountTitle,
                '</h3>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input id="first-name" class="olInput update-user-first-name-input" maxlength="" name="name" type="text">\n                    <label for="first-name" class="input__label">First Name</label>\n                </div>\n            </div>\n            <span class="error-message error-fname-message hideBox">Please enter First Name</span>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input id="last-name" class="olInput update-user-last-name-input" maxlength="" name="name" type="text">\n                    <label for="last-name" class="input__label">Last Name</label>\n                </div>\n            </div>\n            <span class="error-message error-lname-message hideBox">Please enter Last Name</span>\n            <div class="login-inputBox">\n                <div class="input-box-content">\n                    <input\n                    id="email-id"\n                    class="olInput update-user-email-input"\n                    maxlength=""\n                    name="email"\n                    type="email"\n                    required\n                    >\n                    <label for="email-id" class="input__label">Email</label>\n                </div>\n            </div>\n            <span class="error-message error-email-message hideBox">Please enter a valid email</span>\n            <div class="login-inputBox">\n                {{phone_html}}\n            </div>\n            <span class="error-message-phone hideBox">Please enter a valid Phone Number</span>\n            <div class="customFieldsBox">\n                {{custom_fields}}\n            </div>\n            <input class="otp-id" name="otp_id" type="hidden">\n            <div class="update-checkbox-wrapper">\n                <input class="input-checkbox marketing-option" type="checkbox" value="1" checked="checked" name="" id="marketing" />\n                <label class="checkbox-main-label" for="marketing">'
              )
              .concat(
                $n.marketingText,
                '</p>\n            </div>\n            <div class="button-wrapper">\n                <button class="update-btn otp-btn">\n                    <span>'
              )
              .concat($n.updateBtnText, "</span>\n                    ")
              .concat(
                Bn,
                "\n                </button>\n            </div>\n        </div>"
              );
        return (t = (t = t.replaceAll("{{phone_html}}", zn())).replaceAll(
          "{{custom_fields}}",
          ((e = ""),
          simplyOtp.custom_fields.forEach(function (t) {
            var n = "";
            t.required && (n = 'required="required"');
            var r = "";
            t.pattern && (r = 'pattern ="'.concat(t.pattern, '"'));
            var i = "";
            t.patternMessage && (i = 'title ="'.concat(t.patternMessage, '"'));
            var o = "";
            t.length && (o = 'maxlength="'.concat(t.length, '"'));
            var s = "Please enter valid ".concat(t.label, ".");
            if (
              (t.patternMessage && (s = t.patternMessage), "dropdown" == t.type)
            ) {
              var a = "";
              a =
                '\n            <div class="custom_field">\n                <label>'
                  .concat(
                    t.label,
                    '</label>\n                <div class="custom_select">\n                    <select '
                  )
                  .concat(n, " name=")
                  .concat(
                    t.label,
                    '>\n                        <option value="">'
                  )
                  .concat(
                    t.placeholder,
                    '</option>\n                        {{options}}\n                    </select>\n                    <svg aria-hidden="true" focusable="false" viewBox="0 0 10 6">\n                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">\n                        </path>\n                    </svg>\n                </div>\n                <span class="errormessage error-message-'
                  )
                  .concat(t.label, ' hideBox">')
                  .concat(s, "</span>\n            </div>\n            ");
              var c = t.value.split(","),
                u = "";
              c.forEach(function (e) {
                u += "\n                    <option value="
                  .concat(e, ">\n                        ")
                  .concat(
                    e,
                    "\n                    </option>\n                "
                  );
              }),
                (e += a.replaceAll("{{options}}", u));
            } else if ("date" == t.type) {
              var l;
              (l =
                '\n            <div class="custom_field">\n                <label>'
                  .concat(
                    t.label,
                    '</label>\n                <div class="custom_input input-box-content">\n                    <input type="date" '
                  )
                  .concat(r, " ")
                  .concat(i, " ")
                  .concat(o, ' class="olInput" ')
                  .concat(n, ' name="')
                  .concat(
                    t.label,
                    '"/>\n                </div>\n                <span class="errormessage error-message-'
                  )
                  .concat(t.label, ' hideBox">')
                  .concat(s, "</span>\n            </div>\n            ")),
                (e += l);
            } else {
              var h;
              (h =
                '\n            <div class="custom_field">\n                <div class="custom_input input-box-content">\n                    <input type="text" '
                  .concat(r, " ")
                  .concat(i, " ")
                  .concat(o, ' class="olInput" ')
                  .concat(n, ' name="')
                  .concat(
                    t.label,
                    '"/>\n                    <label class="input__label">'
                  )
                  .concat(
                    t.placeholder,
                    '</label>\n                </div>\n                <span class="errormessage error-message-'
                  )
                  .concat(t.label, ' hideBox">')
                  .concat(s, "</span>\n            </div>\n            ")),
                (e += h);
            }
          }),
          e)
        ));
      };
    function Yn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Zn(e, t, n) {
      return (
        t && Yn(e.prototype, t),
        n && Yn(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function Xn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var Qn = Zn(function e(t) {
      var n = this;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        Xn(this, "getLoginComponent", function () {
          return (function () {
            var e =
                "<div class='login-box step-box-wrapper'>\n    <h3 class='login-header'>"
                  .concat(
                    Hn.loginTitle,
                    "</h3>\n    <p class='login-description'>"
                  )
                  .concat(
                    Hn.loginSubTitle,
                    "</p>\n    {{otp_type_html}}\n    <button class='send-btn otp-btn'>\n    <span>Request OTP</span>\n    "
                  )
                  .concat(
                    Bn,
                    "\n    </button>\n    \n    <div class='other-options-box'>\n    <p class='other-options-p'><span>"
                  )
                  .concat(
                    Hn.otherOptionText,
                    "</span></p>\n    <div class='other-options-wrap'>\n    \n    <div class='other-option-inner email-no-inner' data-current='email'>\n    "
                  )
                  .concat(
                    "\n    <svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M2.50016 1.1665H13.8335C14.6127 1.1665 15.2502 1.804 15.2502 2.58317V11.0832C15.2502 11.8623 14.6127 12.4998 13.8335 12.4998H2.50016C1.721 12.4998 1.0835 11.8623 1.0835 11.0832V2.58317C1.0835 1.804 1.721 1.1665 2.50016 1.1665Z' stroke='#4A4A4A' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' /><path d='M15.2502 2.58301L8.16683 7.54134L1.0835 2.58301' stroke='#4A4A4A' stroke-width='1.25' stroke-linecap='round' stroke-linejoin='round' />\n    </svg>\n",
                    "\n    <p class='text-wrap'>Email</p>\n    </div>\n    \n    <div class='other-option-inner whatsapp-no-inner' data-current='whatsapp'>\n    "
                  )
                  .concat(
                    "\n    <svg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\n        <path d='M5.12292 4.39376C5.26072 4.39745 5.41349 4.4049 5.55885 4.72755C5.65523 4.94233 5.8176 5.33775 5.94986 5.65985C6.05278 5.9105 6.13748 6.11675 6.15867 6.15897C6.2071 6.25537 6.23691 6.36661 6.17358 6.49638C6.16611 6.51169 6.15906 6.52633 6.15226 6.54042C6.10146 6.64586 6.0653 6.7209 5.97986 6.81902C5.94473 6.85935 5.90813 6.90357 5.87167 6.94763C5.80755 7.02512 5.74383 7.10211 5.68922 7.1565C5.59237 7.25284 5.49173 7.35676 5.6035 7.54957C5.71533 7.74238 6.10653 8.37652 6.68403 8.88828C7.30489 9.44102 7.84477 9.67395 8.11767 9.7917C8.17066 9.81456 8.21358 9.83308 8.24507 9.84876C8.43885 9.94516 8.55433 9.93032 8.66609 9.80055C8.77792 9.67072 9.15044 9.23684 9.28089 9.04403C9.40756 8.85122 9.53794 8.88089 9.71681 8.94762C9.89562 9.01435 10.8494 9.4816 11.0431 9.57801C11.0814 9.59707 11.1172 9.61425 11.1504 9.63017C11.2852 9.69481 11.3769 9.73875 11.4157 9.80425C11.4641 9.88581 11.4641 10.2715 11.304 10.7239C11.1401 11.1763 10.3502 11.6102 9.99248 11.6436C9.95861 11.6468 9.92491 11.6508 9.89023 11.655C9.56245 11.6947 9.14634 11.745 7.66387 11.1615C5.83715 10.4431 4.63131 8.66086 4.38752 8.30053C4.36827 8.27208 4.35502 8.25249 4.34793 8.24299L4.34381 8.23747C4.23289 8.08906 3.55433 7.18109 3.55433 6.24429C3.55433 5.348 3.99585 4.88137 4.19724 4.66853C4.21 4.65504 4.2218 4.64257 4.23246 4.63108C4.41127 4.43827 4.61995 4.39007 4.75033 4.39007C4.88078 4.39007 5.01116 4.39007 5.12292 4.39376Z' fill='#4A4A4A' /><path fill-rule='evenodd' clip-rule='evenodd' d='M0.0753723 15.0598C0.0137505 15.2835 0.217474 15.4899 0.441954 15.4313L3.91205 14.5249C5.00742 15.1182 6.24066 15.4334 7.49629 15.4334H7.5C11.6319 15.4334 15 12.0848 15 7.9686C15 5.97352 14.2212 4.09708 12.8055 2.68788C11.3897 1.27875 9.50816 0.5 7.49994 0.5C3.36814 0.5 4.77741e-07 3.84862 4.77741e-07 7.9649C-0.000469058 9.27439 0.345173 10.561 1.00223 11.6954L0.0753723 15.0598ZM2.0914 11.9955C2.17185 11.7035 2.13166 11.3914 1.97985 11.1292C1.42239 10.1667 1.12935 9.07517 1.12975 7.9649C1.12975 4.47791 3.98671 1.62975 7.49994 1.62975C9.20955 1.62975 10.8045 2.29027 12.0085 3.48861C13.2111 4.68562 13.8702 6.27386 13.8702 7.9686C13.8702 11.4555 11.0133 14.3037 7.5 14.3037H7.49629C6.42941 14.3037 5.38102 14.0358 4.45013 13.5315C4.19818 13.3951 3.90378 13.3594 3.62654 13.4318L1.54599 13.9753L2.0914 11.9955Z' fill='#4A4A4A' />\n    </svg>\n",
                    "\n    <p class='text-wrap'>Whatsapp</p>\n    </div>\n    <div class='other-option-inner mobile-no-inner' data-current='mobile'>\n    "
                  )
                  .concat(
                    "\n    <svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 202.592 202.592' style='enable-background:new 0 0 202.592 202.592;' xml:space='preserve'>\n        <g>\n            <g>\n                <path style='fill:#010002;' d='M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761\n                                    c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874\n                                    c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769\n                                    c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816\n                                    c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055\n                                    c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747\n                                    C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507\n                                    c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235\n                                    C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497\n                                    c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282\n                                    c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067\n                                    c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279\n                                    C193.5,169.446,193.31,173.537,190.683,176.164z'/>\n            </g>\n        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n    </svg>\n",
                    "\n    <p class='text-wrap'>Phone</p>\n    </div>\n    </div>\n    </div>\n    </div>"
                  ),
              t = Gn();
            return (e = e.replaceAll("{{otp_type_html}}", t));
          })();
        }),
        Xn(this, "getOtpComponent", function () {
          return '<div class="verify-box step-box-wrapper hideBox">\n            <h3 class="login-header">'
            .concat(
              Kn.otpTitle,
              '</h3>\n            <p class="verify-box-details login-description">'
            )
            .concat(
              Kn.otpSubTitle,
              ' <span>Mobile number</span></p>\n            <div class="mn-container">\n                <p class="user-details">+91 999999999</p>\n                '
            )
            .concat(
              '\n    <svg\n        class="edit-phone bi bi-pencil-fill"\n        fill="currentColor"\n        height="16"\n        viewbox="0 0 16 16"\n        width="16"\n        xmlns="http://www.w3.org/2000/svg"\n    >\n        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>\n    </svg>\n',
              '\n            </div>\n            <input class="verify-otp-id" name="olOtpId" type="hidden">\n            <input class="phoneNo" name="phoneNo" type="hidden">\n            <div class="verify-content">\n                <input type="tel" autocomplete="one-time-code" class="otp-input-main otp-input otp6" maxlength="6">\n            </div>\n            <button class="verify-btn otp-btn">\n                <span>Verify OTP</span>\n                '
            )
            .concat(
              Bn,
              '\n            </button>\n            <div class="resend-otp" id="resend-otp">\n                <p>Didn\'t Receive the OTP?</p>\n                <a class="resend-btn disabled">Resend OTP</a>\n                <p class="count-down-otp"></p>\n            </div>\n        </div>'
            );
        }),
        Xn(this, "getUpdateComponent", function () {
          return Jn();
        }),
        Xn(this, "getCustomFieldComponent", function () {}),
        Xn(this, "createLoginBox", function () {
          var e = document.getElementsByClassName("sotp-widget"),
            t = '\n        <div class="olWrapper" data-selected-country="'
              .concat(
                simplyOtp.settings.selectedCountry,
                '" style="--otp-login-btn-color:'
              )
              .concat(
                simplyOtp.settings.primaryColor,
                '">\n            <div class="ol">\n                {{popup_close}}\n                {{image_content}}\n                {{login_content}}\n                {{otp_content}}\n                {{update_content}}\n            </div>\n            <div class="small-otp-loader">\n                <div class="loader-innerDiv"></div>\n            </div>\n        </div>'
              ),
            r = "";
          simplyOtp.settings.image &&
            (r =
              '\n                <div class="login-img">\n                    <img src="'.concat(
                simplyOtp.settings.image,
                '" alt="login">\n                </div>\n            '
              ));
          var i = "";
          simplyOtp.settings.popup_enabled &&
            (i =
              '\n                <div class="simply-close-btn">\n                    '.concat(
                Un,
                "\n                </div>\n            "
              )),
            (t = (t = (t = (t = (t = t.replaceAll(
              "{{popup_close}}",
              i
            )).replaceAll("{{image_content}}", r)).replaceAll(
              "{{login_content}}",
              n.getLoginComponent()
            )).replaceAll("{{otp_content}}", n.getOtpComponent())).replaceAll(
              "{{update_content}}",
              n.getUpdateComponent()
            )),
            0 == window.simplyOtp.designMode &&
              (t = window.simplyOtp.wrapperHtml);
          for (var o = 0; o < e.length; o++) {
            var s = e[o];
            s.classList.remove("otp-loader"), (s.innerHTML = t);
          }
          if (0 != window.simplyOtp.designMode) {
            simplyOtp.language.phoneEnable
              ? (document.querySelectorAll(".login-box").forEach(function (e) {
                  e.setAttribute("data-active", "mobile");
                }),
                document
                  .querySelectorAll(
                    ".login-box .login-inputBox .mobile-no-inner"
                  )
                  .forEach(function (e) {
                    e.classList.add("active");
                  }))
              : simplyOtp.language.emailEnable
              ? (document.querySelectorAll(".login-box").forEach(function (e) {
                  e.setAttribute("data-active", "email");
                }),
                document
                  .querySelectorAll(
                    ".login-box .login-inputBox .email-no-inner"
                  )
                  .forEach(function (e) {
                    e.classList.add("active");
                  }))
              : simplyOtp.language.whatsappEnable &&
                (document.querySelectorAll(".login-box").forEach(function (e) {
                  e.setAttribute("data-active", "whatsapp");
                }),
                document
                  .querySelectorAll(
                    ".login-box .login-inputBox .whatsapp-no-inner"
                  )
                  .forEach(function (e) {
                    e.classList.add("active");
                  }));
            var a = 3;
            simplyOtp.language.phoneEnable ||
              (a--,
              document
                .querySelectorAll(".login-box .mobile-no-inner")
                .forEach(function (e) {
                  e.classList.add("hideBox"), e.classList.remove("active");
                })),
              simplyOtp.language.emailEnable ||
                (a--,
                document
                  .querySelectorAll(".login-box .email-no-inner")
                  .forEach(function (e) {
                    e.classList.add("hideBox"), e.classList.remove("active");
                  })),
              simplyOtp.language.whatsappEnable ||
                (a--,
                document
                  .querySelectorAll(".login-box .whatsapp-no-inner")
                  .forEach(function (e) {
                    e.classList.add("hideBox"), e.classList.remove("active");
                  })),
              1 == a &&
                document
                  .querySelectorAll(".other-options-p")
                  .forEach(function (e) {
                    e.classList.add("hideBox");
                  }),
              simplyOtp.otp_widgets.btn_bg_color &&
                document.querySelectorAll(".otp-btn").forEach(function (e) {
                  (e.style.color = simplyOtp.language.btn_text_color),
                    (e.style.background = simplyOtp.language.btn_bg_color);
                });
          }
        }),
        (this.parent = t),
        (window.simplyOtp = window.simplyOtp || {}),
        this.createLoginBox();
    });
    function er(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function tr(e, t, n) {
      return (
        t && er(e.prototype, t),
        n && er(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function nr(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var rr = tr(function e() {
      var t = this;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        nr(this, "setDefaultSelectedCountry", function () {
          document
            .querySelectorAll(
              "li[data-country-code='" +
                simplyOtp.settings.selectedCountry +
                "']"
            )
            .forEach(function (e) {
              return e.click();
            });
        }),
        nr(this, "createLoginForm", function () {}),
        nr(this, "clickEvents", function () {
          var e = document.querySelectorAll(".other-option-inner"),
            n = document.querySelectorAll(".country-selector-main"),
            r = document.querySelectorAll(".country-selector-list li"),
            i = document.querySelectorAll(".send-btn"),
            o = document.querySelectorAll(".edit-phone"),
            s = document.querySelectorAll(".resend-btn"),
            a = document.querySelectorAll(".verify-btn"),
            c = document.querySelectorAll(".update-btn"),
            u = document.querySelectorAll(".otp-input-main");
          document.querySelectorAll(".skip-btn").forEach(function (e) {
            e.addEventListener("click", function (n) {
              var r = e.closest(".sotp-widget");
              t.skipNowHandler(r);
            });
          }),
            c.forEach(function (e) {
              e.addEventListener("click", function (n) {
                var r = e.closest(".sotp-widget");
                if (
                  (r
                    .querySelector(".error-fname-message")
                    .classList.add("hideBox"),
                  r
                    .querySelector(".error-lname-message")
                    .classList.add("hideBox"),
                  r
                    .querySelector(".error-email-message")
                    .classList.add("hideBox"),
                  simplyOtp.language.fname_required &&
                    "" ==
                      r.querySelector(".update-user-first-name-input").value)
                )
                  return (
                    r
                      .querySelector(".error-fname-message")
                      .classList.remove("hideBox"),
                    n.preventDefault(),
                    !1
                  );
                if (
                  simplyOtp.language.lname_required &&
                  "" == r.querySelector(".update-user-last-name-input").value
                )
                  return (
                    r
                      .querySelector(".error-lname-message")
                      .classList.remove("hideBox"),
                    n.preventDefault(),
                    !1
                  );
                var i = r.querySelector(".update-user-email-input").value;
                if (
                  "" == r.querySelector(".update-user-email-input").value ||
                  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    i
                  )
                )
                  return (
                    r
                      .querySelector(".error-email-message")
                      .classList.remove("hideBox"),
                    n.preventDefault(),
                    !1
                  );
                if (
                  "" ==
                  r.querySelector('.update-user-box input[name="phone"]').value
                )
                  return (
                    r
                      .querySelector(".error-message-phone")
                      .classList.remove("hideBox"),
                    n.preventDefault(),
                    !1
                  );
                var o = !1;
                r
                  .querySelectorAll(".custom_field select")
                  .forEach(function (e) {
                    (e
                      .closest(".custom_field")
                      .querySelector(".errormessage")
                      .classList.add("hideBox"),
                    e.getAttribute("required")) &&
                      ("" != e.value ||
                        (e
                          .closest(".custom_field")
                          .querySelector(".errormessage")
                          .classList.remove("hideBox"),
                        (o = !0),
                        e.setAttribute("isvalid", "true"),
                        console.log(e.validity)));
                  }),
                  r
                    .querySelectorAll(".custom_field input")
                    .forEach(function (e) {
                      var t = e.getAttribute("required");
                      if (
                        (e
                          .closest(".custom_field")
                          .querySelector(".errormessage")
                          .classList.add("hideBox"),
                        t && "" != e.value && e.checkValidity())
                      );
                      else if (t || "" != e.value)
                        if (!t && "" != e.value && e.checkValidity());
                        else {
                          e
                            .closest(".custom_field")
                            .querySelector(".errormessage")
                            .classList.remove("hideBox"),
                            (o = !0),
                            e.setAttribute("isvalid", "true"),
                            console.log(e.validity);
                        }
                      else;
                    }),
                  o || t.updateUserHandler(r);
              });
            }),
            u.forEach(function (e) {
              e.addEventListener("input", function (t) {
                var n = e.closest(".sotp-widget"),
                  r = e.getAttribute("maxlength");
                e.value.length == r && n.querySelector(".verify-btn").click();
              });
            }),
            a.forEach(function (e) {
              e.addEventListener("click", function (n) {
                var r = e.closest(".sotp-widget");
                t.verifyOtpHandler(r);
              });
            }),
            o.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var n = e.currentTarget.closest(".sotp-widget");
                t.goBack(n);
              });
            }),
            i.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var n = e.currentTarget.closest(".sotp-widget");
                t.sendOtpHandler(n);
              });
            }),
            s.forEach(function (e) {
              e.addEventListener("click", function (n) {
                var r = e.closest(".sotp-widget");
                e.classList.contains("disabled") ||
                  (t.countDownStart(r), t.resendOtpHandler(r));
              });
            }),
            e.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var t = e.currentTarget,
                  n = t.closest(".sotp-widget"),
                  r = t.getAttribute("data-current");
                n.querySelector(".login-box").setAttribute("data-active", r),
                  n.querySelectorAll(".user-name-input").forEach(function (e) {
                    var t = e.parentElement.getAttribute("data-current");
                    r == t
                      ? e.parentElement.classList.add("active")
                      : e.parentElement.classList.remove("active");
                  });
              });
            }),
            n.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var t = e.currentTarget.parentElement.querySelector(
                  ".country-selector-list"
                );
                t && t.classList.toggle("active");
              });
            }),
            r.forEach(function (e) {
              e.addEventListener("click", function (e) {
                var t = e.currentTarget,
                  n = t.closest(".sotp-widget"),
                  r = t.closest(".input-box-content"),
                  i = r.querySelectorAll(".country-selector-list li");
                i.length > 0 &&
                  i.forEach(function (e) {
                    e.classList.remove("active");
                  });
                t.getAttribute("data-dial-code");
                var o = t.getAttribute("data-country-code");
                n.setAttribute("data-selected-country", o);
                var s = r.querySelectorAll(".selected-country .country-flag");
                s.length > 0 &&
                  s.forEach(function (e) {
                    e.className = "country-flag " + o;
                  }),
                  i.length > 0 &&
                    i.forEach(function (e) {
                      e.getAttribute("data-country-code") == o &&
                        e.classList.add("active");
                    });
                var a = r.querySelector(".country-selector-list");
                a && a.classList.remove("active");
              });
            }),
            document.addEventListener("wheel", function (e) {
              "number" === document.activeElement.type &&
                document.elementFromPoint(e.x, e.y) == document.activeElement &&
                document.activeElement.blur();
            });
        }),
        nr(this, "setInputEvent", function () {
          var e = t.events,
            n = document.querySelectorAll(".update-user-email-input"),
            r = document.querySelectorAll(".update-user-box input");
          r.length > 0 &&
            r.forEach(function (t) {
              e.forEach(function (e) {
                t.addEventListener(e, function (e) {
                  var t = e.currentTarget,
                    n = t.value;
                  n && n.length > 0
                    ? t.classList.add("is-filled")
                    : t.classList.remove("is-filled");
                });
              });
            }),
            e.forEach(function (e) {
              n.forEach(function (t) {
                t.addEventListener(e, function (e) {
                  t.closest(".sotp-widget")
                    .querySelector(".error-message")
                    .classList.add("hideBox");
                });
              });
            });
        }),
        nr(this, "skipNowHandler", function () {
          t.showLoader(parent), t.otpAction("updateEmail", parent);
        }),
        nr(this, "updateUserHandler", function (e) {
          t.showLoader(e), t.otpAction("updateEmail", e);
        }),
        nr(this, "verifyOtpHandler", function (e) {
          var n = e.querySelector(".otp-input-main"),
            r = Number(e.getAttribute("data-otp-total-attempt"));
          r++,
            e.setAttribute("data-otp-total-attempt", r),
            n.value.length < 4
              ? t.showToastBox(e, "Please enter OTP", !1)
              : (t.showLoader(e), t.otpAction("verifyOTP", e));
        }),
        nr(this, "sendOtp", function (e, n, r) {
          var i = r.querySelector(".verify-otp-id");
          r.querySelector(".verify-box").classList.remove("hideBox"),
            r.querySelector(".update-user-box").classList.add("hideBox"),
            r.querySelector(".login-box").classList.add("hideBox"),
            i.setAttribute("value", e.data.otpId),
            (t.session_otp_id = e.data.otpId);
          var o = r.querySelector(".otp-input-main");
          if (e.data.otpLength) {
            var s;
            (s = e.data.otpLength),
              o.setAttribute("maxlength", s),
              (o.className = o.className + " otp" + s);
          }
          r.setAttribute("data-resend-otp", !1),
            t.showToastBox(r, e.message, !0);
        }),
        nr(this, "countDownStart", function (e) {
          var n = t,
            r = e.querySelector(".count-down-otp"),
            i = e.querySelector(".resend-btn");
          i.classList.add("disabled"), r.classList.remove("hideBox");
          var o,
            s = simplyOtp.settings.resendTime;
          o = setInterval(function () {
            s >= 0
              ? ((r.innerHTML = s < 10 ? "00:0" + s : "00:" + s), s--)
              : (clearInterval(o),
                (s = 0),
                (r.innerHTML = "00:00"),
                i.classList.remove("disabled"),
                r.classList.add("hideBox")),
              (n.stopTimer = function () {
                o &&
                  (clearInterval(o),
                  (s = 0),
                  (r.innerHTML = "00:00"),
                  i.classList.remove("disabled"),
                  r.classList.add("hideBox"));
              });
          }, 1e3);
        }),
        nr(this, "resendOtpHandler", function (e) {
          t.showLoader(e),
            t.otpAction("resendOTP", e),
            t.manageOTPBox(e, !0),
            e.querySelector(".resend-otp").classList.add("hideBox"),
            e.setAttribute("data-resend-otp", !0);
        }),
        nr(this, "goBack", function (e) {
          t.stopTimer(e);
          var n = e.querySelector(".otp-input-main"),
            r = e.querySelector(".verify-btn");
          e.setAttribute("data-resend-otp", !1),
            e.querySelector(".resend-otp").classList.remove("hideBox"),
            n.removeAttribute("disabled"),
            r.removeAttribute("disabled"),
            e.setAttribute("data-otp-total-attempt", 0);
          t.updateActiveOption(e).activeInput;
          e.querySelector(".login-box").classList.remove("hideBox"),
            e.querySelector(".verify-box").classList.add("hideBox"),
            t.manageOTPBox(e, !0);
        }),
        nr(this, "manageOTPBox", function (e, n) {
          var r = e.querySelector(".otp-input-main"),
            i = e.querySelector(".verify-btn");
          0 == n
            ? ((r.value = ""),
              (r.disabled = !0),
              (i.disabled = !0),
              i.classList.add("hideBox"),
              t.stopTimer(e),
              e.getAttribute("data-resend-otp") && t.goBack(e))
            : (r.removeAttribute("disabled"),
              i.removeAttribute("disabled"),
              i.classList.remove("hideBox"));
        }),
        nr(this, "updateActiveOption", function (e) {
          var t = e.querySelector(".input-box-content.active .user-name-input"),
            n = t.parentElement.getAttribute("data-current");
          return { activeInput: t, activeType: n };
        }),
        nr(this, "validateUserName", function (e, t) {
          var n = "",
            r = !1;
          switch (t) {
            case "mobile":
            case "whatsapp":
              (r = !0),
                /^[0-9]{10}$/.test(e)
                  ? ((n = "Please enter valid mobile number"), (r = !0))
                  : ((n = "Please enter valid mobile number"), (r = !1));
              break;
            case "email":
              e.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
                ? (r = !0)
                : ((n = "Please enter valid email id"), (r = !1));
              break;
            default:
              (r = !1), (n = "");
          }
          return { flag: r, msg: n };
        }),
        nr(this, "fetchDomainURI", function () {
          return window.location.port.length, window.location.host;
        }),
        nr(this, "base64url", function (e) {
          return CryptoJS.enc.Base64.stringify(e)
            .replace(/=+$/, "")
            .replace(/\//g, "_");
        }),
        nr(this, "closeToastBox", function () {
          var e = document.querySelectorAll(".toast-box-wrapper");
          e.length > 0 &&
            e.forEach(function (e) {
              e.remove();
            });
        }),
        nr(this, "showToastBox", function (e, n, r, i) {
          var o = r ? "success" : "error",
            s = document.createElement("div");
          s.setAttribute("class", "toast-box-wrapper");
          var a = '<div class="toast-content">\n    <div class="toast-card '
              .concat(o, '">\n    <div class="toast-icon-wrapper">\n    ')
              .concat(
                "success" == o
                  ? '\n    <svg class="feather feather-check" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>\n'
                  : '\n    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 413.348 413.348" fill="red"><path d="M413.348 24.354L388.994 0l-182.32 182.32L24.354 0 0 24.354l182.32 182.32L0 388.994l24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/></svg>\n',
                '\n    </div>\n    <div class="toast-card-content">\n    <h6 class="toast-title">'
              )
              .concat(
                n,
                '</h6>\n    {{description}}\n    </div>\n    <span class="toast-close-icon">\n    '
              )
              .concat(Un, "\n    </span>\n    </div>\n    </div>\n    "),
            c = "";
          i && (c = '<p class="toast-description">'.concat(i, "</p>")),
            (a = a.replaceAll("{{description}}", c)),
            (s.innerHTML = a),
            t.closeToastBox();
          var u,
            l,
            h = e.querySelector(".step-box-wrapper:not(.hideBox) button");
          h && ((u = s), (l = h).parentNode.insertBefore(u, l.nextSibling)),
            s.classList.add("active");
          var d = document.querySelector(".toast-card .toast-close-icon");
          d &&
            d.addEventListener("click", function () {
              return t.closeToastBox();
            }),
            setTimeout(t.closeToastBox, 4e3);
        }),
        nr(this, "errorHandler", function (e) {
          t.showToastBox(e, "Something went wrong!", !1);
        }),
        nr(this, "requestHandler", function (e, n, r) {
          var i = "".concat(t.appUrl),
            o = simplyOtp.permanentDomain,
            s = n.data,
            a = n.action;
          fetch(i, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              shop_name: o,
              action: a,
            },
            body: s,
          })
            .then(function (e) {
              return e.json();
            })
            .then(function (t) {
              r(t, a, e);
            })
            .catch(function (n) {
              console.log(n), t.errorHandler(e), t.hideLoader(e);
            });
        }),
        nr(this, "updateEmail", function (e, n, r) {
          r.querySelector(".verify-box").classList.add("hideBox"),
            r.querySelector(".update-user-box").classList.remove("hideBox"),
            r.querySelector(".login-box").classList.add("hideBox"),
            t.performLoginAction(e.data.redirect_url);
        }),
        nr(this, "performLoginAction", function (e) {
          try {
            var n = new URL(e).searchParams
                .get("logintoken")
                .split(".")[1]
                .replace("-", "+")
                .replace("_", "/"),
              r = decodeURIComponent(
                atob(n)
                  .split("")
                  .map(function (e) {
                    return (
                      "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    );
                  })
                  .join("")
              ),
              i = JSON.parse(r);
            if (
              (document.body.dispatchEvent(new Event("sotp.login")),
              i.jti && i.iss)
            ) {
              var o = i.jti,
                s = i.iss;
              t.createLoginFormAndSubmit(o, s);
            } else window.location = e;
          } catch (t) {
            console.log(t), (window.location = e);
          }
        }),
        nr(this, "createLoginFormAndSubmit", function (e, n) {
          ((document.getElementById("otp-original-email").value = e),
          (document.getElementById("otp-original-password").value = n),
          simplyOtp.settings.goKwik && t.checkout_url.includes("checkout"))
            ? ((document.getElementById("otp-return_to").value =
                location.origin + "/account/login#ref=gokwik"),
              document.getElementsByName("checkout_url").forEach(function (e) {
                e.remove();
              }))
            : "" != t.checkout_url
            ? (document.getElementById("otp-return_to").value = t.checkout_url)
            : document.getElementById("otp-return_to") &&
              document.getElementById("otp-return_to").remove();
          document.getElementById("sotp-form").submit();
        }),
        nr(this, "resendOtp", function (e, n, r) {
          var i = r.querySelector(".verify-otp-id");
          e.data.otpId && i.setAttribute("value", e.data.otpId),
            t.showToastBox(r, e.message, !0);
        }),
        nr(this, "responseHandler", function (e, n, r) {
          t.hideLoader(r);
          var i = r.querySelector(".verify-otp-id");
          if (200 === e.status)
            "verifyOTP" == n
              ? t.verifyOtp(e, n, r)
              : "sendOTP" == n
              ? t.sendOtp(e, n, r)
              : "updateEmail" == n
              ? t.updateEmail(e, n, r)
              : "resendOTP" == n
              ? t.resendOtp(e, n, r)
              : t.showToastBox(r, e.message, !0);
          else if ("updateEmail" == n) t.showToastBox(r, e.message, !1);
          else if ("verifyOTP" != n)
            t.showToastBox(r, e.message, !0),
              e.data && e.data.otpId && i.setAttribute("value", e.data.otpId);
          else {
            (r.querySelector(".otp-input-main").value = ""),
              Number(r.getAttribute("data-otp-total-attempt")) >=
                t.totalAttemptWithSendOTP && t.manageOTPBox(r, !1),
              t.showToastBox(r, "Please enter correct OTP", !1);
          }
        }),
        nr(this, "verifyOtp", function (e, n, r) {
          r.querySelector(".verify-box").classList.add("hideBox"),
            r.querySelector(".login-box").classList.add("hideBox");
          var i = e.data.email,
            o = e.data.phone,
            s = e.data.firstName,
            a = e.data.lastName;
          if (simplyOtp.settings.onlyOTPNoLogin) {
            document.body.dispatchEvent(new Event("sotp.login"));
            var c = { email: i, phone: o, firstName: s, lastName: a };
            simplyOtp.loginEvent(c);
          } else if (e.data.multipass_url) {
            var u = { email: i, phone: o, firstName: s, lastName: a };
            document.body.dispatchEvent(new Event("sotp.login")),
              simplyOtp.loginEvent(u),
              (window.location = e.data.multipass_url);
          } else if (e.data.redirect_url) {
            var l = { email: i, phone: o, firstName: s, lastName: a };
            document.body.dispatchEvent(new Event("sotp.login")),
              simplyOtp.loginEvent(l),
              t.performLoginAction(e.data.redirect_url);
          } else {
            var h = r.querySelector(".update-user-first-name-input"),
              d = r.querySelector(".update-user-last-name-input"),
              f = r.querySelector(".update-user-email-input"),
              p = r.querySelector(".update-user-box input[name='phone']");
            ("" != o && null !== o) ||
              ((f.value = i), f.classList.add("is-filled"));
            var v = h,
              g = d;
            s && ((v.value = s), v.classList.add("is-filled")),
              a && ((g.value = a), g.classList.add("is-filled")),
              "" == o || null === o
                ? (f.disabled = !0)
                : ((p.type = "text"),
                  (p.value = o),
                  p.classList.add("is-filled"),
                  r
                    .querySelector(".update-user-box .country-selector-main")
                    .classList.add("hideBox"),
                  (p.disabled = !0)),
              (r.querySelector(".otp-id").value = t.session_otp_id);
            var m = r.querySelector(".skip-btn");
            m && m.classList.add("hideBox"),
              simplyOtp.settings.skipPage3
                ? ((f.value = i),
                  f.classList.add("is-filled"),
                  r.querySelector(".update-btn").click(),
                  t.showLoader())
                : (r
                    .querySelector(".update-user-box")
                    .classList.remove("hideBox"),
                  document.body.dispatchEvent(new Event("sotp.register")));
          }
        }),
        nr(this, "otpAction", function (e, n) {
          var r,
            i,
            o,
            s,
            a = t.updateActiveOption(n),
            c = a.activeInput.value,
            u = a.activeType,
            l = simplyOtp.permanentDomain,
            h = new URLSearchParams(window.location.search),
            d = Object.fromEntries(h.entries());
          if (
            ("email" != u && (c = t.getDialCode(n) + parseInt(c)),
            (s = d.checkout_url ? d.checkout_url : ""),
            t.settings.pageUrl && (s = t.settings.pageUrl),
            (t.checkout_url = s),
            "sendOTP" == e)
          )
            (o = {
              data: JSON.stringify({
                username: c,
                type: u,
                domain: t.fetchDomainURI(),
                recaptcha_token: t.firebaseToken,
              }),
              action: e,
            }),
              t.requestHandler(n, o, t.responseHandler),
              t.generateFireBaseToken();
          else if ("verifyOTP" == e) {
            (r = n.querySelector(".verify-otp-id").value),
              (i = n.querySelector(".otp-input-main").value),
              (o = {
                data: JSON.stringify({
                  username: c,
                  otp: i,
                  type: u,
                  otp_id: r,
                  checkout_url: s,
                  domain: t.fetchDomainURI(),
                }),
                action: e,
              }),
              t.requestHandler(n, o, t.responseHandler);
          } else if ("resendOTP" == e)
            (o = {
              data: JSON.stringify({
                username: c,
                type: u,
                domain: t.fetchDomainURI(),
                recaptcha_token: t.firebaseToken,
              }),
              action: e,
            }),
              t.requestHandler(n, o, t.responseHandler),
              t.generateFireBaseToken();
          else if ("updateEmail" == e) {
            var f = n.querySelector(".otp-id").value,
              p = n.querySelector(".update-user-first-name-input"),
              v = n.querySelector(".update-user-last-name-input"),
              g = n.querySelector(".update-user-email-input"),
              m = n.querySelector(".update-user-box input[name='phone']"),
              y = p.value,
              b = v.value,
              w = g.value,
              _ = m.value;
            if (!m.disabled) {
              var S = t.getDialCode(n);
              _ && (_ = S + _);
            }
            var I = n.querySelector(".update-user-box .marketing-option"),
              E = !0;
            I && 0 == I.checked && (E = !1);
            var O = [];
            n
              .querySelectorAll(".custom_field select, .custom_field input")
              .forEach(function (e) {
                "" !== e.value && O.push(nr({}, e.name, e.value));
              }),
              (o = {
                data: JSON.stringify({
                  otp_id: f,
                  store_url: l,
                  first_name: y,
                  last_name: b,
                  phone_no: _,
                  email: w,
                  checkout_url: s,
                  accept_email_marketing: E,
                  accept_sms_marketing: E,
                  accept_whatsapp_marketing: E,
                  domain: t.fetchDomainURI(),
                  custom_fields: O,
                }),
                action: e,
              });
            var T = { email: w, phone: _, firstName: y, lastName: b };
            document.body.dispatchEvent(new Event("sotp.register")),
              simplyOtp.signUpEvent(T),
              t.requestHandler(n, o, t.responseHandler),
              t.generateFireBaseToken();
          }
        }),
        nr(this, "showLoader", function (e) {
          var t = e.querySelector(".small-otp-loader"),
            n = e.querySelector(".loader-innerDiv");
          t && n && ((t.style.display = "block"), (n.style.display = "block"));
        }),
        nr(this, "hideLoader", function (e) {
          var t = e.querySelector(".small-otp-loader"),
            n = e.querySelector(".loader-innerDiv");
          (t.style.display = "none"), (n.style.display = "none");
        }),
        nr(this, "getDialCode", function (e) {
          var n = "",
            r = e.getAttribute("data-selected-country");
          if (
            (r || (r = t.selectedCountry),
            e.querySelector(
              '.country-selector-list li[data-country-code="'.concat(r, '"]')
            ))
          ) {
            var i = e
              .querySelector(
                '.country-selector-list li[data-country-code="'.concat(r, '"]')
              )
              .getAttribute("data-dial-code");
            i && (n = "+" + i);
          }
          return n;
        }),
        nr(this, "updateMobile", function (e, n) {
          var r = e.querySelector(".user-details"),
            i = t.getDialCode(e),
            o = n.activeInput.value;
          o.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
            ? (r.innerHTML = "".concat(o))
            : (r.innerHTML = "".concat(i, " ").concat(o));
        }),
        nr(this, "generateFireBaseToken", function (e) {
          try {
            if (window.firebaseApp) {
              t.recaptchaVerifier && t.recaptchaVerifier.clear();
              var n = Fn(window.firebaseApp),
                r = "recaptcha-container-" + t.recaptchaVerifierComponent++,
                i = document.querySelector("#recaptcha-container");
              parent || (i = document.querySelector("#recaptcha-container")),
                (i.innerHTML = "<div id='" + r + "'></div>"),
                (t.recaptchaVerifier = new Xt(
                  r,
                  {
                    size: "invisible",
                    callback: function (n) {
                      console.log("generatefireBaseToken - generated"),
                        console.log(n),
                        (t.firebaseToken = n),
                        e();
                    },
                  },
                  n
                )),
                t.recaptchaVerifier.verify();
            }
          } catch (e) {
            console.log(e);
          }
        }),
        nr(this, "sendOtpHandler", function (e) {
          console.log("error msg remain");
          var n = t.updateActiveOption(e),
            r = n.activeInput.value,
            i = "",
            o = t.validateUserName(r, n.activeType, e);
          if (!o || !o.flag) return (i = o.msg), void t.showToastBox(e, i, !1);
          t.showLoader(e),
            t.otpAction("sendOTP", e),
            t.updateMobile(e, n),
            t.showOtpBox(e, n);
        }),
        nr(this, "showOtpBox", function (e, n) {
          (e.querySelector(".otp-input-main").value = ""),
            e.querySelector(".login-box").classList.add("hideBox"),
            e.querySelector(".verify-box").classList.remove("hideBox");
          var r = e.querySelector(".verify-box-details span");
          if ((t.countDownStart(e), r)) {
            var i = "Mobile number";
            switch (n.activeType) {
              case "whatsapp":
                i = "Whatsapp number";
                break;
              case "email":
                i = "Email id";
            }
            r.textContent = i;
          }
          t.showLoader(e);
        }),
        (this.version = "5"),
        (this.appUrl =
          "https://omqkhavcch.execute-api.ap-south-1.amazonaws.com/simplyotplogin/v" +
          this.version +
          "/otp"),
        (this.checkout_url = ""),
        (this.session_otp_id = ""),
        (window.simplyOtp = window.simplyOtp || {}),
        (this.selectedCountry = null | simplyOtp.settings.selectedCountry),
        (this.events = ["paste", "keydown", "keypress", "keyup", "onchange"]),
        (this.settings = simplyOtp.settings),
        (this.firebaseToken = ""),
        (this.recaptchaVerifier = null),
        (this.recaptchaVerifierComponent = 1),
        (this.totalAttemptWithSendOTP = 2),
        this.createLoginForm(),
        this.clickEvents(),
        this.setInputEvent(),
        this.generateFireBaseToken(),
        this.setDefaultSelectedCountry();
    });
    (window.simplyOtp.initializeSimplyOtp = function () {
      new Qn(), window.simplyOtp.initializeCss();
      var e = document.getElementById("myCss"),
        t = document.querySelectorAll(".olWrapper");
      if (e && t.length > 0) {
        if (
          (t.forEach(function (e) {
            return (e.style.display = "flex");
          }),
          simplyOtp.myFirebaseApi)
        ) {
          var n = JSON.parse(simplyOtp.myFirebaseApi);
          window.firebaseApp = (function (e, t = {}) {
            if ("object" != typeof t) {
              t = { name: t };
            }
            const n = Object.assign(
                { name: "[DEFAULT]", automaticDataCollectionEnabled: !1 },
                t
              ),
              i = n.name;
            if ("string" != typeof i || !i)
              throw U.create("bad-app-name", { appName: String(i) });
            const o = R.get(i);
            if (o) {
              if (Object(r.g)(e, o.options) && Object(r.g)(n, o.config))
                return o;
              throw U.create("duplicate-app", { appName: i });
            }
            const a = new s(i);
            for (const e of M.values()) a.addComponent(e);
            const c = new q(e, n, a);
            return R.set(i, c), c;
          })(n);
        }
        new rr();
      }
    }),
      setTimeout(function () {
        window.simplyOtp.initializeSimplyOtp();
      }, 1e3);
  },
]);
