(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[965],{2467:function(t,e,n){t=n.nmd(t);var r="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",a="[object Array]",u="[object Boolean]",s="[object Date]",c="[object Error]",l="[object Function]",f="[object Map]",p="[object Number]",d="[object Object]",h="[object Promise]",v="[object RegExp]",y="[object Set]",b="[object String]",_="[object Symbol]",g="[object WeakMap]",w="[object ArrayBuffer]",m="[object DataView]",j=/^\[object .+?Constructor\]$/,O=/^(?:0|[1-9]\d*)$/,E={};E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E[o]=E[a]=E[w]=E[u]=E[m]=E[s]=E[c]=E[l]=E[f]=E[p]=E[d]=E[v]=E[y]=E[b]=E[g]=!1;var x="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,k="object"==typeof self&&self&&self.Object===Object&&self,T=x||k||Function("return this")(),z=e&&!e.nodeType&&e,P=z&&t&&!t.nodeType&&t,S=P&&P.exports===z,L=S&&x.process,A=function(){try{return L&&L.binding&&L.binding("util")}catch(t){}}(),D=A&&A.isTypedArray;function M(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function C(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function I(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var N,U,F=Array.prototype,$=Function.prototype,B=Object.prototype,R=T["__core-js_shared__"],W=$.toString,X=B.hasOwnProperty,V=function(){var t=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Y=B.toString,G=RegExp("^"+W.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Z=S?T.Buffer:void 0,q=T.Symbol,H=T.Uint8Array,J=B.propertyIsEnumerable,K=F.splice,Q=q?q.toStringTag:void 0,tt=Object.getOwnPropertySymbols,et=Z?Z.isBuffer:void 0,nt=(N=Object.keys,U=Object,function(t){return N(U(t))}),rt=Lt(T,"DataView"),it=Lt(T,"Map"),ot=Lt(T,"Promise"),at=Lt(T,"Set"),ut=Lt(T,"WeakMap"),st=Lt(Object,"create"),ct=Ct(rt),lt=Ct(it),ft=Ct(ot),pt=Ct(at),dt=Ct(ut),ht=q?q.prototype:void 0,vt=ht?ht.valueOf:void 0;function yt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function bt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function _t(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function gt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new _t;++e<n;)this.add(t[e])}function wt(t){var e=this.__data__=new bt(t);this.size=e.size}function mt(t,e){var n=Ut(t),r=!n&&Nt(t),i=!n&&!r&&Ft(t),o=!n&&!r&&!i&&Xt(t),a=n||r||i||o,u=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],s=u.length;for(var c in t)!e&&!X.call(t,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Mt(c,s))||u.push(c);return u}function jt(t,e){for(var n=t.length;n--;)if(It(t[n][0],e))return n;return-1}function Ot(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Q&&Q in Object(t)?function(t){var e=X.call(t,Q),n=t[Q];try{t[Q]=void 0;var r=!0}catch(o){}var i=Y.call(t);r&&(e?t[Q]=n:delete t[Q]);return i}(t):function(t){return Y.call(t)}(t)}function Et(t){return Wt(t)&&Ot(t)==o}function xt(t,e,n,r,i){return t===e||(null==t||null==e||!Wt(t)&&!Wt(e)?t!==t&&e!==e:function(t,e,n,r,i,l){var h=Ut(t),g=Ut(e),j=h?a:Dt(t),O=g?a:Dt(e),E=(j=j==o?d:j)==d,x=(O=O==o?d:O)==d,k=j==O;if(k&&Ft(t)){if(!Ft(e))return!1;h=!0,E=!1}if(k&&!E)return l||(l=new wt),h||Xt(t)?zt(t,e,n,r,i,l):function(t,e,n,r,i,o,a){switch(n){case m:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case w:return!(t.byteLength!=e.byteLength||!o(new H(t),new H(e)));case u:case s:case p:return It(+t,+e);case c:return t.name==e.name&&t.message==e.message;case v:case b:return t==e+"";case f:var l=C;case y:var d=1&r;if(l||(l=I),t.size!=e.size&&!d)return!1;var h=a.get(t);if(h)return h==e;r|=2,a.set(t,e);var g=zt(l(t),l(e),r,i,o,a);return a.delete(t),g;case _:if(vt)return vt.call(t)==vt.call(e)}return!1}(t,e,j,n,r,i,l);if(!(1&n)){var T=E&&X.call(t,"__wrapped__"),z=x&&X.call(e,"__wrapped__");if(T||z){var P=T?t.value():t,S=z?e.value():e;return l||(l=new wt),i(P,S,n,r,l)}}if(!k)return!1;return l||(l=new wt),function(t,e,n,r,i,o){var a=1&n,u=Pt(t),s=u.length,c=Pt(e).length;if(s!=c&&!a)return!1;var l=s;for(;l--;){var f=u[l];if(!(a?f in e:X.call(e,f)))return!1}var p=o.get(t);if(p&&o.get(e))return p==e;var d=!0;o.set(t,e),o.set(e,t);var h=a;for(;++l<s;){var v=t[f=u[l]],y=e[f];if(r)var b=a?r(y,v,f,e,t,o):r(v,y,f,t,e,o);if(!(void 0===b?v===y||i(v,y,n,r,o):b)){d=!1;break}h||(h="constructor"==f)}if(d&&!h){var _=t.constructor,g=e.constructor;_==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof g&&g instanceof g||(d=!1)}return o.delete(t),o.delete(e),d}(t,e,n,r,i,l)}(t,e,n,r,xt,i))}function kt(t){return!(!Rt(t)||function(t){return!!V&&V in t}(t))&&($t(t)?G:j).test(Ct(t))}function Tt(t){if(!function(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||B;return t===n}(t))return nt(t);var e=[];for(var n in Object(t))X.call(t,n)&&"constructor"!=n&&e.push(n);return e}function zt(t,e,n,r,i,o){var a=1&n,u=t.length,s=e.length;if(u!=s&&!(a&&s>u))return!1;var c=o.get(t);if(c&&o.get(e))return c==e;var l=-1,f=!0,p=2&n?new gt:void 0;for(o.set(t,e),o.set(e,t);++l<u;){var d=t[l],h=e[l];if(r)var v=a?r(h,d,l,e,t,o):r(d,h,l,t,e,o);if(void 0!==v){if(v)continue;f=!1;break}if(p){if(!M(e,(function(t,e){if(a=e,!p.has(a)&&(d===t||i(d,t,n,r,o)))return p.push(e);var a}))){f=!1;break}}else if(d!==h&&!i(d,h,n,r,o)){f=!1;break}}return o.delete(t),o.delete(e),f}function Pt(t){return function(t,e,n){var r=e(t);return Ut(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Vt,At)}function St(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function Lt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return kt(n)?n:void 0}yt.prototype.clear=function(){this.__data__=st?st(null):{},this.size=0},yt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yt.prototype.get=function(t){var e=this.__data__;if(st){var n=e[t];return n===r?void 0:n}return X.call(e,t)?e[t]:void 0},yt.prototype.has=function(t){var e=this.__data__;return st?void 0!==e[t]:X.call(e,t)},yt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=st&&void 0===e?r:e,this},bt.prototype.clear=function(){this.__data__=[],this.size=0},bt.prototype.delete=function(t){var e=this.__data__,n=jt(e,t);return!(n<0)&&(n==e.length-1?e.pop():K.call(e,n,1),--this.size,!0)},bt.prototype.get=function(t){var e=this.__data__,n=jt(e,t);return n<0?void 0:e[n][1]},bt.prototype.has=function(t){return jt(this.__data__,t)>-1},bt.prototype.set=function(t,e){var n=this.__data__,r=jt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},_t.prototype.clear=function(){this.size=0,this.__data__={hash:new yt,map:new(it||bt),string:new yt}},_t.prototype.delete=function(t){var e=St(this,t).delete(t);return this.size-=e?1:0,e},_t.prototype.get=function(t){return St(this,t).get(t)},_t.prototype.has=function(t){return St(this,t).has(t)},_t.prototype.set=function(t,e){var n=St(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},gt.prototype.add=gt.prototype.push=function(t){return this.__data__.set(t,r),this},gt.prototype.has=function(t){return this.__data__.has(t)},wt.prototype.clear=function(){this.__data__=new bt,this.size=0},wt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},wt.prototype.get=function(t){return this.__data__.get(t)},wt.prototype.has=function(t){return this.__data__.has(t)},wt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof bt){var r=n.__data__;if(!it||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new _t(r)}return n.set(t,e),this.size=n.size,this};var At=tt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}(tt(t),(function(e){return J.call(t,e)})))}:function(){return[]},Dt=Ot;function Mt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||O.test(t))&&t>-1&&t%1==0&&t<e}function Ct(t){if(null!=t){try{return W.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function It(t,e){return t===e||t!==t&&e!==e}(rt&&Dt(new rt(new ArrayBuffer(1)))!=m||it&&Dt(new it)!=f||ot&&Dt(ot.resolve())!=h||at&&Dt(new at)!=y||ut&&Dt(new ut)!=g)&&(Dt=function(t){var e=Ot(t),n=e==d?t.constructor:void 0,r=n?Ct(n):"";if(r)switch(r){case ct:return m;case lt:return f;case ft:return h;case pt:return y;case dt:return g}return e});var Nt=Et(function(){return arguments}())?Et:function(t){return Wt(t)&&X.call(t,"callee")&&!J.call(t,"callee")},Ut=Array.isArray;var Ft=et||function(){return!1};function $t(t){if(!Rt(t))return!1;var e=Ot(t);return e==l||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Bt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function Rt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Wt(t){return null!=t&&"object"==typeof t}var Xt=D?function(t){return function(e){return t(e)}}(D):function(t){return Wt(t)&&Bt(t.length)&&!!E[Ot(t)]};function Vt(t){return null!=(e=t)&&Bt(e.length)&&!$t(e)?mt(t):Tt(t);var e}t.exports=function(t,e){return xt(t,e)}},4965:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(2007)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(2791)),o=u(n(412)),a=u(n(2467));function u(t){return t&&t.__esModule?t:{default:t}}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){function e(){return c(this,e),f(this,p(e).apply(this,arguments))}var n,r,u;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,r=[{key:"componentDidMount",value:function(){this.swipe=(0,o.default)(this.containerEl,this.props.swipeOptions)}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.childCount,r=e.swipeOptions;(t.childCount!==n||!(0,a.default)(t.swipeOptions,r))&&(this.swipe.kill(),this.swipe=(0,o.default)(this.containerEl,this.props.swipeOptions))}},{key:"componentWillUnmount",value:function(){this.swipe.kill(),this.swipe=void 0}},{key:"next",value:function(){this.swipe.next()}},{key:"prev",value:function(){this.swipe.prev()}},{key:"slide",value:function(){var t;(t=this.swipe).slide.apply(t,arguments)}},{key:"getPos",value:function(){return this.swipe.getPos()}},{key:"getNumSlides",value:function(){return this.swipe.getNumSlides()}},{key:"render",value:function(){var t=this,e=this.props,n=e.id,r=e.className,o=e.style,a=e.children;return i.default.createElement("div",{id:n,ref:function(e){return t.containerEl=e},className:"react-swipe-container ".concat(r),style:o.container},i.default.createElement("div",{style:o.wrapper},i.default.Children.map(a,(function(t){if(!t)return null;var e=t.props.style?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){h(t,e,n[e])}))}return t}({},o.child,t.props.style):o.child;return i.default.cloneElement(t,{style:e})}))))}}],r&&l(n.prototype,r),u&&l(n,u),e}(i.Component);h(v,"propTypes",{swipeOptions:r.default.shape({startSlide:r.default.number,speed:r.default.number,auto:r.default.number,continuous:r.default.bool,disableScroll:r.default.bool,stopPropagation:r.default.bool,swiping:r.default.func,callback:r.default.func,transitionEnd:r.default.func}),style:r.default.shape({container:r.default.object,wrapper:r.default.object,child:r.default.object}),id:r.default.string,className:r.default.string,childCount:r.default.number}),h(v,"defaultProps",{swipeOptions:{},style:{container:{overflow:"hidden",visibility:"hidden",position:"relative"},wrapper:{overflow:"hidden",position:"relative"},child:{float:"left",width:"100%",position:"relative",transitionProperty:"transform"}},className:"",childCount:0});var y=v;e.default=y,t.exports=e.default},412:function(t){var e,n;e=this,n=function(){"use strict";return function(t,e){var n=function(){},r=function(t){setTimeout(t||n,0)},i=!!window.addEventListener,o="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,a=function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(document.createElement("swipe"));if(t){var u,s,c,l,f=t.children[0];e=e||{};var p,d,h=parseInt(e.startSlide,10)||0,v=e.speed||300,y=parseInt(e.widthOfSiblingSlidePreview,10)||0,b=e.continuous=void 0===e.continuous||e.continuous,_=e.auto||0,g={},w={},m={handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":r(this.end(t));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":r(this.transitionEnd(t));break;case"resize":r(j)}e.stopPropagation&&t.stopPropagation()},start:function(t){var e=t.touches[0];g={x:e.pageX,y:e.pageY,time:+new Date},d=void 0,w={},f.addEventListener("touchmove",this,!1),f.addEventListener("touchend",this,!1)},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale)&&!e.disableScroll){var n=t.touches[0];w={x:n.pageX-g.x,y:n.pageY-g.y},"undefined"==typeof d&&(d=!!(d||Math.abs(w.x)<Math.abs(w.y))),d||(t.preventDefault(),P(),b?(T(E(h-1),w.x+s[E(h-1)],0),T(h,w.x+s[h],0),T(E(h+1),w.x+s[E(h+1)],0)):(w.x=w.x/(!h&&w.x>0||h==u.length-1&&w.x<0?Math.abs(w.x)/c+1:1),T(h-1,w.x+s[h-1],0),T(h,w.x+s[h],0),T(h+1,w.x+s[h+1],0)),e.swiping&&e.swiping(-w.x/c))}},end:function(t){var n=+new Date-g.time,r=Number(n)<250&&Math.abs(w.x)>20||Math.abs(w.x)>c/2,i=!h&&w.x>0||h==u.length-1&&w.x<0;b&&(i=!1);var o=w.x<0;d||(r&&!i?(o?(b?(k(E(h-1),-c,0),k(E(h+2),c,0)):k(h-1,-c,0),k(h,s[h]-c,v),k(E(h+1),s[E(h+1)]-c,v),h=E(h+1)):(b?(k(E(h+1),c,0),k(E(h-2),-c,0)):k(h+1,c,0),k(h,s[h]+c,v),k(E(h-1),s[E(h-1)]+c,v),h=E(h-1)),e.callback&&e.callback(h,u[h])):b?(k(E(h-1),-c,v),k(h,0,v),k(E(h+1),c,v)):(k(h-1,-c,v),k(h,0,v),k(h+1,c,v))),f.removeEventListener("touchmove",m,!1),f.removeEventListener("touchend",m,!1),f.removeEventListener("touchforcechange",(function(){}),!1)},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==h&&(_&&z(),e.transitionEnd&&e.transitionEnd.call(t,h,u[h]))}};return j(),_&&z(),i?(o&&(f.addEventListener("touchstart",m,!1),f.addEventListener("touchforcechange",(function(){}),!1)),a&&(f.addEventListener("webkitTransitionEnd",m,!1),f.addEventListener("msTransitionEnd",m,!1),f.addEventListener("oTransitionEnd",m,!1),f.addEventListener("otransitionend",m,!1),f.addEventListener("transitionend",m,!1)),window.addEventListener("resize",m,!1)):window.onresize=function(){j()},{setup:function(){j()},slide:function(t,e){P(),x(t,e)},prev:function(){P(),(b||h)&&x(h-1)},next:function(){P(),O()},stop:function(){P()},getPos:function(){return h},getNumSlides:function(){return l},kill:function(){P(),f.style.width="",f.style.left="";for(var t=u.length;t--;){var e=u[t];e.style.width="",e.style.left="",a&&T(t,0,0)}i?(f.removeEventListener("touchstart",m,!1),f.removeEventListener("webkitTransitionEnd",m,!1),f.removeEventListener("msTransitionEnd",m,!1),f.removeEventListener("oTransitionEnd",m,!1),f.removeEventListener("otransitionend",m,!1),f.removeEventListener("transitionend",m,!1),window.removeEventListener("resize",m,!1)):window.onresize=null}}}function j(){u=f.children,l=u.length,b=!(u.length<2)&&e.continuous,s=new Array(u.length),c=Math.round(t.getBoundingClientRect().width||t.offsetWidth)-2*y,f.style.width=u.length*c+"px";for(var n=u.length;n--;){var r=u[n];r.style.width=c+"px",r.setAttribute("data-index",n),a&&(r.style.left=n*-c+y+"px",k(n,h>n?-c:h<n?c:0,0))}b&&a&&(k(E(h-1),-c,0),k(E(h+1),c,0)),a||(f.style.left=h*-c+y+"px"),t.style.visibility="visible"}function O(){(b||h<u.length-1)&&x(h+1)}function E(t){return(u.length+t%u.length)%u.length}function x(t,n){if(h!=t){if(a){var i=Math.abs(h-t)/(h-t);if(b){var o=i;(i=-s[E(t)]/c)!==o&&(t=-i*u.length+t)}for(var l=Math.abs(h-t)-1;l--;)k(E((t>h?t:h)-l-1),c*i,0);t=E(t),k(h,c*i,n||v),k(t,0,n||v),b&&k(E(t-i),-c*i,0)}else t=E(t),function(t,n,r){if(r)var i=+new Date,o=setInterval((function(){var a=+new Date-i;if(a>r)return f.style.left=n+"px",_&&z(),e.transitionEnd&&e.transitionEnd.call(event,h,u[h]),void clearInterval(o);f.style.left=(n-t)*(Math.floor(a/r*100)/100)+t+"px"}),4);else f.style.left=n+"px"}(h*-c,t*-c,n||v);h=t,r(e.callback&&e.callback(h,u[h]))}}function k(t,e,n){T(t,e,n),s[t]=e}function T(t,e,n){var r=u[t],i=r&&r.style;i&&(i.webkitTransitionDuration=i.MozTransitionDuration=i.msTransitionDuration=i.OTransitionDuration=i.transitionDuration=n+"ms",i.webkitTransform="translate("+e+"px,0)translateZ(0)",i.msTransform=i.MozTransform=i.OTransform="translateX("+e+"px)")}function z(){clearTimeout(p),p=setTimeout(O,_)}function P(){_=0,clearTimeout(p)}}},t.exports?t.exports=n():e.Swipe=n()}}]);
//# sourceMappingURL=965.a497c27e.chunk.js.map