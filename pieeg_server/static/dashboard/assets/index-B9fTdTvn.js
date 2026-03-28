(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Bv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Rd={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function Ey(){if(d_)return ko;d_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var h_;function Ty(){return h_||(h_=1,Rd.exports=Ey()),Rd.exports}var L=Ty(),Cd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function Ay(){if(p_)return de;p_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,v={};function x(F,X,et){this.props=F,this.context=X,this.refs=v,this.updater=et||b}x.prototype.isReactComponent={},x.prototype.setState=function(F,X){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,X,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function A(){}A.prototype=x.prototype;function U(F,X,et){this.props=F,this.context=X,this.refs=v,this.updater=et||b}var D=U.prototype=new A;D.constructor=U,R(D,x.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(F,X,et){var xt=et.ref;return{$$typeof:r,type:F,key:X,ref:xt!==void 0?xt:null,props:et}}function ht(F,X){return O(F.type,X,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function Q(F){var X={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(et){return X[et]})}var Y=/\/+/g;function at(F,X){return typeof F=="object"&&F!==null&&F.key!=null?Q(""+F.key):X.toString(36)}function tt(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(I,I):(F.status="pending",F.then(function(X){F.status==="pending"&&(F.status="fulfilled",F.value=X)},function(X){F.status==="pending"&&(F.status="rejected",F.reason=X)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function N(F,X,et,xt,Mt){var Z=typeof F;(Z==="undefined"||Z==="boolean")&&(F=null);var V=!1;if(F===null)V=!0;else switch(Z){case"bigint":case"string":case"number":V=!0;break;case"object":switch(F.$$typeof){case r:case t:V=!0;break;case _:return V=F._init,N(V(F._payload),X,et,xt,Mt)}}if(V)return Mt=Mt(F),V=xt===""?"."+at(F,0):xt,G(Mt)?(et="",V!=null&&(et=V.replace(Y,"$&/")+"/"),N(Mt,X,et,"",function(Ut){return Ut})):Mt!=null&&(H(Mt)&&(Mt=ht(Mt,et+(Mt.key==null||F&&F.key===Mt.key?"":(""+Mt.key).replace(Y,"$&/")+"/")+V)),X.push(Mt)),1;V=0;var dt=xt===""?".":xt+":";if(G(F))for(var Et=0;Et<F.length;Et++)xt=F[Et],Z=dt+at(xt,Et),V+=N(xt,X,et,Z,Mt);else if(Et=M(F),typeof Et=="function")for(F=Et.call(F),Et=0;!(xt=F.next()).done;)xt=xt.value,Z=dt+at(xt,Et++),V+=N(xt,X,et,Z,Mt);else if(Z==="object"){if(typeof F.then=="function")return N(tt(F),X,et,xt,Mt);throw X=String(F),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return V}function B(F,X,et){if(F==null)return F;var xt=[],Mt=0;return N(F,xt,"","",function(Z){return X.call(et,Z,Mt++)}),xt}function k(F){if(F._status===-1){var X=F._result;X=X(),X.then(function(et){(F._status===0||F._status===-1)&&(F._status=1,F._result=et)},function(et){(F._status===0||F._status===-1)&&(F._status=2,F._result=et)}),F._status===-1&&(F._status=0,F._result=X)}if(F._status===1)return F._result.default;throw F._result}var nt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},_t={map:B,forEach:function(F,X,et){B(F,function(){X.apply(this,arguments)},et)},count:function(F){var X=0;return B(F,function(){X++}),X},toArray:function(F){return B(F,function(X){return X})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return de.Activity=S,de.Children=_t,de.Component=x,de.Fragment=i,de.Profiler=l,de.PureComponent=U,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,de.__COMPILER_RUNTIME={__proto__:null,c:function(F){return z.H.useMemoCache(F)}},de.cache=function(F){return function(){return F.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(F,X,et){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var xt=R({},F.props),Mt=F.key;if(X!=null)for(Z in X.key!==void 0&&(Mt=""+X.key),X)!T.call(X,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&X.ref===void 0||(xt[Z]=X[Z]);var Z=arguments.length-2;if(Z===1)xt.children=et;else if(1<Z){for(var V=Array(Z),dt=0;dt<Z;dt++)V[dt]=arguments[dt+2];xt.children=V}return O(F.type,Mt,xt)},de.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},de.createElement=function(F,X,et){var xt,Mt={},Z=null;if(X!=null)for(xt in X.key!==void 0&&(Z=""+X.key),X)T.call(X,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Mt[xt]=X[xt]);var V=arguments.length-2;if(V===1)Mt.children=et;else if(1<V){for(var dt=Array(V),Et=0;Et<V;Et++)dt[Et]=arguments[Et+2];Mt.children=dt}if(F&&F.defaultProps)for(xt in V=F.defaultProps,V)Mt[xt]===void 0&&(Mt[xt]=V[xt]);return O(F,Z,Mt)},de.createRef=function(){return{current:null}},de.forwardRef=function(F){return{$$typeof:p,render:F}},de.isValidElement=H,de.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:k}},de.memo=function(F,X){return{$$typeof:h,type:F,compare:X===void 0?null:X}},de.startTransition=function(F){var X=z.T,et={};z.T=et;try{var xt=F(),Mt=z.S;Mt!==null&&Mt(et,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(I,nt)}catch(Z){nt(Z)}finally{X!==null&&et.types!==null&&(X.types=et.types),z.T=X}},de.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},de.use=function(F){return z.H.use(F)},de.useActionState=function(F,X,et){return z.H.useActionState(F,X,et)},de.useCallback=function(F,X){return z.H.useCallback(F,X)},de.useContext=function(F){return z.H.useContext(F)},de.useDebugValue=function(){},de.useDeferredValue=function(F,X){return z.H.useDeferredValue(F,X)},de.useEffect=function(F,X){return z.H.useEffect(F,X)},de.useEffectEvent=function(F){return z.H.useEffectEvent(F)},de.useId=function(){return z.H.useId()},de.useImperativeHandle=function(F,X,et){return z.H.useImperativeHandle(F,X,et)},de.useInsertionEffect=function(F,X){return z.H.useInsertionEffect(F,X)},de.useLayoutEffect=function(F,X){return z.H.useLayoutEffect(F,X)},de.useMemo=function(F,X){return z.H.useMemo(F,X)},de.useOptimistic=function(F,X){return z.H.useOptimistic(F,X)},de.useReducer=function(F,X,et){return z.H.useReducer(F,X,et)},de.useRef=function(F){return z.H.useRef(F)},de.useState=function(F){return z.H.useState(F)},de.useSyncExternalStore=function(F,X,et){return z.H.useSyncExternalStore(F,X,et)},de.useTransition=function(){return z.H.useTransition()},de.version="19.2.4",de}var m_;function _p(){return m_||(m_=1,Cd.exports=Ay()),Cd.exports}var ft=_p();const Ry=Bv(ft);var wd={exports:{}},Xo={},Dd={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function Cy(){return g_||(g_=1,(function(r){function t(N,B){var k=N.length;N.push(B);t:for(;0<k;){var nt=k-1>>>1,_t=N[nt];if(0<l(_t,B))N[nt]=B,N[k]=_t,k=nt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var B=N[0],k=N.pop();if(k!==B){N[0]=k;t:for(var nt=0,_t=N.length,F=_t>>>1;nt<F;){var X=2*(nt+1)-1,et=N[X],xt=X+1,Mt=N[xt];if(0>l(et,k))xt<_t&&0>l(Mt,et)?(N[nt]=Mt,N[xt]=k,nt=xt):(N[nt]=et,N[X]=k,nt=X);else if(xt<_t&&0>l(Mt,k))N[nt]=Mt,N[xt]=k,nt=xt;else break t}}return B}function l(N,B){var k=N.sortIndex-B.sortIndex;return k!==0?k:N.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],_=1,S=null,g=3,M=!1,b=!1,R=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var B=i(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=N)s(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function G(N){if(R=!1,D(N),!b)if(i(m)!==null)b=!0,I||(I=!0,Q());else{var B=i(h);B!==null&&tt(G,B.startTime-N)}}var I=!1,z=-1,T=5,O=-1;function ht(){return v?!0:!(r.unstable_now()-O<T)}function H(){if(v=!1,I){var N=r.unstable_now();O=N;var B=!0;try{t:{b=!1,R&&(R=!1,A(z),z=-1),M=!0;var k=g;try{e:{for(D(N),S=i(m);S!==null&&!(S.expirationTime>N&&ht());){var nt=S.callback;if(typeof nt=="function"){S.callback=null,g=S.priorityLevel;var _t=nt(S.expirationTime<=N);if(N=r.unstable_now(),typeof _t=="function"){S.callback=_t,D(N),B=!0;break e}S===i(m)&&s(m),D(N)}else s(m);S=i(m)}if(S!==null)B=!0;else{var F=i(h);F!==null&&tt(G,F.startTime-N),B=!1}}break t}finally{S=null,g=k,M=!1}B=void 0}}finally{B?Q():I=!1}}}var Q;if(typeof U=="function")Q=function(){U(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,at=Y.port2;Y.port1.onmessage=H,Q=function(){at.postMessage(null)}}else Q=function(){x(H,0)};function tt(N,B){z=x(function(){N(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(N){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var k=g;g=B;try{return N()}finally{g=k}},r.unstable_requestPaint=function(){v=!0},r.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=g;g=N;try{return B()}finally{g=k}},r.unstable_scheduleCallback=function(N,B,k){var nt=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?nt+k:nt):k=nt,N){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=k+_t,N={id:_++,callback:B,priorityLevel:N,startTime:k,expirationTime:_t,sortIndex:-1},k>nt?(N.sortIndex=k,t(h,N),i(m)===null&&N===i(h)&&(R?(A(z),z=-1):R=!0,tt(G,k-nt))):(N.sortIndex=_t,t(m,N),b||M||(b=!0,I||(I=!0,Q()))),N},r.unstable_shouldYield=ht,r.unstable_wrapCallback=function(N){var B=g;return function(){var k=g;g=B;try{return N.apply(this,arguments)}finally{g=k}}}})(Nd)),Nd}var __;function wy(){return __||(__=1,Dd.exports=Cy()),Dd.exports}var Ud={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function Dy(){if(v_)return Rn;v_=1;var r=_p();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,_)},Rn.flushSync=function(m){var h=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=_,s.d.f()}},Rn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,S=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Rn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,S=p(_,h.crossOrigin);s.d.L(m,_,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,h){return m(h)},Rn.useFormState=function(m,h,_){return d.H.useFormState(m,h,_)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var x_;function Ny(){if(x_)return Ud.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ud.exports=Dy(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Uy(){if(S_)return Xo;S_=1;var r=wy(),t=_p(),i=Ny();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,C=u.child;C;){if(C===a){y=!0,a=u,o=f;break}if(C===o){y=!0,o=u,a=f;break}C=C.sibling}if(!y){for(C=f.child;C;){if(C===a){y=!0,a=f,o=u;break}if(C===o){y=!0,o=f,a=u;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case v:return"StrictMode";case G:return"Suspense";case I:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:at(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return at(e(n))}catch{}}return null}var tt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},nt=[],_t=-1;function F(e){return{current:e}}function X(e){0>_t||(e.current=nt[_t],nt[_t]=null,_t--)}function et(e,n){_t++,nt[_t]=e.current,e.current=n}var xt=F(null),Mt=F(null),Z=F(null),V=F(null);function dt(e,n){switch(et(Z,n),et(Mt,e),et(xt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Pg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Pg(n),e=Fg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(xt),et(xt,e)}function Et(){X(xt),X(Mt),X(Z)}function Ut(e){e.memoizedState!==null&&et(V,e);var n=xt.current,a=Fg(n,e.type);n!==a&&(et(Mt,e),et(xt,a))}function Dt(e){Mt.current===e&&(X(xt),X(Mt)),V.current===e&&(X(V),Io._currentValue=k)}var ie,Gt;function Vt(e){if(ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ie=n&&n[1]||"",Gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+Gt}var re=!1;function qt(e,n){if(!e||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(mt){var ut=mt}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(mt){ut=mt}e.call(Tt.prototype)}}else{try{throw Error()}catch(mt){ut=mt}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(mt){if(mt&&ut&&typeof mt.stack=="string")return[mt.stack,ut.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],C=f[1];if(y&&C){var W=y.split(`
`),lt=C.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<lt.length&&!lt[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===lt.length)for(o=W.length-1,u=lt.length-1;1<=o&&0<=u&&W[o]!==lt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==lt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==lt[u]){var yt=`
`+W[o].replace(" at new "," at ");return e.displayName&&yt.includes("<anonymous>")&&(yt=yt.replace("<anonymous>",e.displayName)),yt}while(1<=o&&0<=u);break}}}finally{re=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Vt(a):""}function he(e,n){switch(e.tag){case 26:case 27:case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return e.child!==n&&n!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return qt(e.type,!1);case 11:return qt(e.type.render,!1);case 1:return qt(e.type,!0);case 31:return Vt("Activity");default:return""}}function j(e){try{var n="",a=null;do n+=he(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Te=Object.prototype.hasOwnProperty,me=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,P=r.unstable_requestPaint,E=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,St=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,gt=r.unstable_NormalPriority,Ft=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,te=r.log,ee=r.unstable_setDisableYieldValue,Rt=null,Ct=null;function Ht(e){if(typeof te=="function"&&ee(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Rt,e)}catch{}}var Bt=Math.clz32?Math.clz32:J,kt=Math.log,ge=Math.LN2;function J(e){return e>>>=0,e===0?32:31-(kt(e)/ge|0)|0}var Ot=256,Nt=262144,Xt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=wt(o):(y&=C,y!==0?u=wt(y):a||(a=C&~e,a!==0&&(u=wt(a))))):(C=o&~f,C!==0?u=wt(C):y!==0?u=wt(y):a||(a=o&~e,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Yt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Xt;return Xt<<=1,(Xt&62914560)===0&&(Xt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,W=e.expirationTimes,lt=e.hiddenUpdates;for(a=y&~a;0<a;){var yt=31-Bt(a),Tt=1<<yt;C[yt]=0,W[yt]=-1;var ut=lt[yt];if(ut!==null)for(lt[yt]=null,yt=0;yt<ut.length;yt++){var mt=ut[yt];mt!==null&&(mt.lane&=-536870913)}a&=~Tt}o!==0&&$r(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function $r(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Gs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ml(e,n){var a=n&-n;return a=(a&42)!==0?1:Vs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ui(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:s_(e.type))}function Xs(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var yi=Math.random().toString(36).slice(2),rn="__reactFiber$"+yi,pn="__reactProps$"+yi,Zi="__reactContainer$"+yi,Ta="__reactEvents$"+yi,gl="__reactListeners$"+yi,_l="__reactHandles$"+yi,vl="__reactResources$"+yi,os="__reactMarker$"+yi;function to(e){delete e[rn],delete e[pn],delete e[Ta],delete e[gl],delete e[_l]}function Aa(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Zi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=kg(e);e!==null;){if(a=e[rn])return a;e=kg(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[rn]||e[Zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ls(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function w(e){var n=e[vl];return n||(n=e[vl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function K(e){e[os]=!0}var pt=new Set,ct={};function st(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(ct[e]=n,e=0;e<n.length;e++)pt.add(n[e])}var jt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zt={},Jt={};function ne(e){return Te.call(Jt,e)?!0:Te.call(zt,e)?!1:jt.test(e)?Jt[e]=!0:(zt[e]=!0,!1)}function oe(e,n,a){if(ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fn=/[\n"\\]/g;function ue(e){return e.replace(Fn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bn(e,n,a,o,u,f,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Mi(e,y,_e(n)):a!=null?Mi(e,y,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+_e(C):e.removeAttribute("name")}function Zn(e,n,a,o,u,f,y,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Oe(e)}function Mi(e,n,a){n==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Kn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function on(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bi(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ln.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ki(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&bi(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&bi(e,f,n[f])}function Ws(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return yx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var bu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,qs=null;function Op(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Bn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(s(90));Bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&mn(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Kn(e,!!a.multiple,n,!1)}}}var Tu=!1;function Pp(e,n,a){if(Tu)return e(n,a);Tu=!0;try{var o=e(n);return o}finally{if(Tu=!1,(js!==null||qs!==null)&&(rc(),js&&(n=js,e=qs,qs=js=null,Op(n),e)))for(n=0;n<e.length;n++)Op(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Ji)try{var no={};Object.defineProperty(no,"passive",{get:function(){Au=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Au=!1}var Ca=null,Ru=null,Sl=null;function Fp(){if(Sl)return Sl;var e,n=Ru,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return Sl=u.slice(e,1<o?1-o:void 0)}function yl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ml(){return!0}function Bp(){return!1}function Vn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ml:Bp,this.isPropagationStopped=Bp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Vn(cs),io=S({},cs,{view:0,detail:0}),Mx=Vn(io),Cu,wu,ao,El=S({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(Cu=e.screenX-ao.screenX,wu=e.screenY-ao.screenY):wu=Cu=0,ao=e),Cu)},movementY:function(e){return"movementY"in e?e.movementY:wu}}),zp=Vn(El),bx=S({},El,{dataTransfer:0}),Ex=Vn(bx),Tx=S({},io,{relatedTarget:0}),Du=Vn(Tx),Ax=S({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=Vn(Ax),Cx=S({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wx=Vn(Cx),Dx=S({},cs,{data:0}),Ip=Vn(Dx),Nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ox(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lx[e])?!!n[e]:!1}function Nu(){return Ox}var Px=S({},io,{key:function(e){if(e.key){var n=Nx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fx=Vn(Px),Bx=S({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Vn(Bx),zx=S({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),Ix=Vn(zx),Hx=S({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=Vn(Hx),Vx=S({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=Vn(Vx),Xx=S({},cs,{newState:0,oldState:0}),Wx=Vn(Xx),jx=[9,13,27,32],Uu=Ji&&"CompositionEvent"in window,so=null;Ji&&"documentMode"in document&&(so=document.documentMode);var qx=Ji&&"TextEvent"in window&&!so,Gp=Ji&&(!Uu||so&&8<so&&11>=so),Vp=" ",kp=!1;function Xp(e,n){switch(e){case"keyup":return jx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Yx(e,n){switch(e){case"compositionend":return Wp(n);case"keypress":return n.which!==32?null:(kp=!0,Vp);case"textInput":return e=n.data,e===Vp&&kp?null:e;default:return null}}function Zx(e,n){if(Ys)return e==="compositionend"||!Uu&&Xp(e,n)?(e=Fp(),Sl=Ru=Ca=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gp&&n.locale!=="ko"?null:n.data;default:return null}}var Kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kx[e.type]:n==="textarea"}function qp(e,n,a,o){js?qs?qs.push(o):qs=[o]:js=o,n=hc(n,"onChange"),0<n.length&&(a=new bl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function Qx(e){wg(e,0)}function Tl(e){var n=ls(e);if(mn(n))return e}function Yp(e,n){if(e==="change")return n}var Zp=!1;if(Ji){var Lu;if(Ji){var Ou="oninput"in document;if(!Ou){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Ou=typeof Kp.oninput=="function"}Lu=Ou}else Lu=!1;Zp=Lu&&(!document.documentMode||9<document.documentMode)}function Qp(){ro&&(ro.detachEvent("onpropertychange",Jp),oo=ro=null)}function Jp(e){if(e.propertyName==="value"&&Tl(oo)){var n=[];qp(n,oo,e,Eu(e)),Pp(Qx,n)}}function Jx(e,n,a){e==="focusin"?(Qp(),ro=n,oo=a,ro.attachEvent("onpropertychange",Jp)):e==="focusout"&&Qp()}function $x(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(oo)}function tS(e,n){if(e==="click")return Tl(n)}function eS(e,n){if(e==="input"||e==="change")return Tl(n)}function nS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:nS;function lo(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Te.call(n,u)||!Qn(e[u],n[u]))return!1}return!0}function $p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tm(e,n){var a=$p(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=$p(a)}}function em(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?em(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function nm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qt(e.document)}return n}function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var iS=Ji&&"documentMode"in document&&11>=document.documentMode,Zs=null,Fu=null,co=null,Bu=!1;function im(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||Zs==null||Zs!==Qt(o)||(o=Zs,"selectionStart"in o&&Pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=hc(Fu,"onSelect"),0<o.length&&(n=new bl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Zs)))}function us(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ks={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},zu={},am={};Ji&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function fs(e){if(zu[e])return zu[e];if(!Ks[e])return e;var n=Ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in am)return zu[e]=n[a];return e}var sm=fs("animationend"),rm=fs("animationiteration"),om=fs("animationstart"),aS=fs("transitionrun"),sS=fs("transitionstart"),rS=fs("transitioncancel"),lm=fs("transitionend"),cm=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function Ei(e,n){cm.set(e,n),st(n,[e])}var Al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Qs=0,Hu=0;function Rl(){for(var e=Qs,n=Hu=Qs=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&um(a,u,f)}}function Cl(e,n,a,o){ci[Qs++]=e,ci[Qs++]=n,ci[Qs++]=a,ci[Qs++]=o,Hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gu(e,n,a,o){return Cl(e,n,a,o),wl(e)}function ds(e,n){return Cl(e,null,null,n),wl(e)}function um(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function wl(e){if(50<Uo)throw Uo=0,Qf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Js={};function oS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,o){return new oS(e,n,a,o)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Dl(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")Vu(e)&&(y=1);else if(typeof e=="string")y=dy(e,a,xt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=Jn(31,a,n,u),e.elementType=O,e.lanes=f,e;case R:return hs(a.children,u,f,n);case v:y=8,u|=24;break;case x:return e=Jn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case G:return e=Jn(13,a,n,u),e.elementType=G,e.lanes=f,e;case I:return e=Jn(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case A:y=9;break t;case D:y=11;break t;case z:y=14;break t;case T:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Jn(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function hs(e,n,a,o){return e=Jn(7,e,o,n),e.lanes=a,e}function ku(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function dm(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Xu(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var hm=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=hm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:j(n)},hm.set(e,n),n)}return{value:e,source:n,stack:j(n)}}var $s=[],tr=0,Nl=null,uo=0,fi=[],di=0,wa=null,Li=1,Oi="";function ta(e,n){$s[tr++]=uo,$s[tr++]=Nl,Nl=e,uo=n}function pm(e,n,a){fi[di++]=Li,fi[di++]=Oi,fi[di++]=wa,wa=e;var o=Li;e=Oi;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var f=32-Bt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Li=1<<32-Bt(n)+u|a<<u|o,Oi=f+e}else Li=1<<f|a<<u|o,Oi=e}function Wu(e){e.return!==null&&(ta(e,1),pm(e,1,0))}function ju(e){for(;e===Nl;)Nl=$s[--tr],$s[tr]=null,uo=$s[--tr],$s[tr]=null;for(;e===wa;)wa=fi[--di],fi[di]=null,Oi=fi[--di],fi[di]=null,Li=fi[--di],fi[di]=null}function mm(e,n){fi[di++]=Li,fi[di++]=Oi,fi[di++]=wa,Li=n.id,Oi=n.overflow,wa=e}var yn=null,Ye=null,we=!1,Da=null,hi=!1,qu=Error(s(519));function Na(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(ui(n,e)),qu}function gm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[pn]=o,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)be(Oo[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),on(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Lg(n.textContent,a)?(o.popover!=null&&(be("beforetoggle",n),be("toggle",n)),o.onScroll!=null&&be("scroll",n),o.onScrollEnd!=null&&be("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Na(e,!0)}function _m(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:yn=yn.return}}function er(e){if(e!==yn)return!1;if(!we)return _m(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||dd(e.type,e.memoizedProps)),a=!a),a&&Ye&&Na(e),_m(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=Vg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=Vg(e)}else n===27?(n=Ye,Wa(e.type)?(e=_d,_d=null,Ye=e):Ye=n):Ye=yn?mi(e.stateNode.nextSibling):null;return!0}function ps(){Ye=yn=null,we=!1}function Yu(){var e=Da;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Da=null),e}function fo(e){Da===null?Da=[e]:Da.push(e)}var Zu=F(null),ms=null,ea=null;function Ua(e,n,a){et(Zu,n._currentValue),n._currentValue=a}function na(e){e._currentValue=Zu.current,X(Zu)}function Ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=u;for(var W=0;W<n.length;W++)if(C.context===n[W]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Ku(f.return,a,e),o||(y=null);break t}f=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Ku(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function nr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=u.type;Qn(u.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(u===V.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Qu(n,e,a,o),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gs(e){ms=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return vm(ms,e)}function Ll(e,n){return ms===null&&gs(e),vm(e,n)}function vm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var lS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cS=r.unstable_scheduleCallback,uS=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new lS,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&cS(uS,function(){e.controller.abort()})}var po=null,$u=0,ir=0,ar=null;function fS(e,n){if(po===null){var a=po=[];$u=0,ir=id(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(xm,xm),n}function xm(){if(--$u===0&&po!==null){ar!==null&&(ar.status="fulfilled");var e=po;po=null,ir=0,ar=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function dS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Sm=N.S;N.S=function(e,n){ig=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fS(e,n),Sm!==null&&Sm(e,n)};var _s=F(null);function tf(){var e=_s.current;return e!==null?e:qe.pooledCache}function Ol(e,n){n===null?et(_s,_s.current):et(_s,n.pool)}function ym(){var e=tf();return e===null?null:{parent:cn._currentValue,pool:e}}var sr=Error(s(460)),ef=Error(s(474)),Pl=Error(s(542)),Fl={then:function(){}};function Mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tm(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Tm(e),e}throw xs=n,sr}}function vs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,sr):a}}var xs=null;function Em(){if(xs===null)throw Error(s(459));var e=xs;return xs=null,e}function Tm(e){if(e===sr||e===Pl)throw Error(s(483))}var rr=null,mo=0;function Bl(e){var n=mo;return mo+=1,rr===null&&(rr=[]),bm(rr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function zl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Am(e){function n(it,q){if(e){var ot=it.deletions;ot===null?(it.deletions=[q],it.flags|=16):ot.push(q)}}function a(it,q){if(!e)return null;for(;q!==null;)n(it,q),q=q.sibling;return null}function o(it){for(var q=new Map;it!==null;)it.key!==null?q.set(it.key,it):q.set(it.index,it),it=it.sibling;return q}function u(it,q){return it=$i(it,q),it.index=0,it.sibling=null,it}function f(it,q,ot){return it.index=ot,e?(ot=it.alternate,ot!==null?(ot=ot.index,ot<q?(it.flags|=67108866,q):ot):(it.flags|=67108866,q)):(it.flags|=1048576,q)}function y(it){return e&&it.alternate===null&&(it.flags|=67108866),it}function C(it,q,ot,bt){return q===null||q.tag!==6?(q=ku(ot,it.mode,bt),q.return=it,q):(q=u(q,ot),q.return=it,q)}function W(it,q,ot,bt){var ae=ot.type;return ae===R?yt(it,q,ot.props.children,bt,ot.key):q!==null&&(q.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&vs(ae)===q.type)?(q=u(q,ot.props),go(q,ot),q.return=it,q):(q=Dl(ot.type,ot.key,ot.props,null,it.mode,bt),go(q,ot),q.return=it,q)}function lt(it,q,ot,bt){return q===null||q.tag!==4||q.stateNode.containerInfo!==ot.containerInfo||q.stateNode.implementation!==ot.implementation?(q=Xu(ot,it.mode,bt),q.return=it,q):(q=u(q,ot.children||[]),q.return=it,q)}function yt(it,q,ot,bt,ae){return q===null||q.tag!==7?(q=hs(ot,it.mode,bt,ae),q.return=it,q):(q=u(q,ot),q.return=it,q)}function Tt(it,q,ot){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=ku(""+q,it.mode,ot),q.return=it,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return ot=Dl(q.type,q.key,q.props,null,it.mode,ot),go(ot,q),ot.return=it,ot;case b:return q=Xu(q,it.mode,ot),q.return=it,q;case T:return q=vs(q),Tt(it,q,ot)}if(tt(q)||Q(q))return q=hs(q,it.mode,ot,null),q.return=it,q;if(typeof q.then=="function")return Tt(it,Bl(q),ot);if(q.$$typeof===U)return Tt(it,Ll(it,q),ot);zl(it,q)}return null}function ut(it,q,ot,bt){var ae=q!==null?q.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return ae!==null?null:C(it,q,""+ot,bt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case M:return ot.key===ae?W(it,q,ot,bt):null;case b:return ot.key===ae?lt(it,q,ot,bt):null;case T:return ot=vs(ot),ut(it,q,ot,bt)}if(tt(ot)||Q(ot))return ae!==null?null:yt(it,q,ot,bt,null);if(typeof ot.then=="function")return ut(it,q,Bl(ot),bt);if(ot.$$typeof===U)return ut(it,q,Ll(it,ot),bt);zl(it,ot)}return null}function mt(it,q,ot,bt,ae){if(typeof bt=="string"&&bt!==""||typeof bt=="number"||typeof bt=="bigint")return it=it.get(ot)||null,C(q,it,""+bt,ae);if(typeof bt=="object"&&bt!==null){switch(bt.$$typeof){case M:return it=it.get(bt.key===null?ot:bt.key)||null,W(q,it,bt,ae);case b:return it=it.get(bt.key===null?ot:bt.key)||null,lt(q,it,bt,ae);case T:return bt=vs(bt),mt(it,q,ot,bt,ae)}if(tt(bt)||Q(bt))return it=it.get(ot)||null,yt(q,it,bt,ae,null);if(typeof bt.then=="function")return mt(it,q,ot,Bl(bt),ae);if(bt.$$typeof===U)return mt(it,q,ot,Ll(q,bt),ae);zl(q,bt)}return null}function Kt(it,q,ot,bt){for(var ae=null,Pe=null,$t=q,ve=q=0,Ce=null;$t!==null&&ve<ot.length;ve++){$t.index>ve?(Ce=$t,$t=null):Ce=$t.sibling;var Fe=ut(it,$t,ot[ve],bt);if(Fe===null){$t===null&&($t=Ce);break}e&&$t&&Fe.alternate===null&&n(it,$t),q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe,$t=Ce}if(ve===ot.length)return a(it,$t),we&&ta(it,ve),ae;if($t===null){for(;ve<ot.length;ve++)$t=Tt(it,ot[ve],bt),$t!==null&&(q=f($t,q,ve),Pe===null?ae=$t:Pe.sibling=$t,Pe=$t);return we&&ta(it,ve),ae}for($t=o($t);ve<ot.length;ve++)Ce=mt($t,it,ve,ot[ve],bt),Ce!==null&&(e&&Ce.alternate!==null&&$t.delete(Ce.key===null?ve:Ce.key),q=f(Ce,q,ve),Pe===null?ae=Ce:Pe.sibling=Ce,Pe=Ce);return e&&$t.forEach(function(Ka){return n(it,Ka)}),we&&ta(it,ve),ae}function se(it,q,ot,bt){if(ot==null)throw Error(s(151));for(var ae=null,Pe=null,$t=q,ve=q=0,Ce=null,Fe=ot.next();$t!==null&&!Fe.done;ve++,Fe=ot.next()){$t.index>ve?(Ce=$t,$t=null):Ce=$t.sibling;var Ka=ut(it,$t,Fe.value,bt);if(Ka===null){$t===null&&($t=Ce);break}e&&$t&&Ka.alternate===null&&n(it,$t),q=f(Ka,q,ve),Pe===null?ae=Ka:Pe.sibling=Ka,Pe=Ka,$t=Ce}if(Fe.done)return a(it,$t),we&&ta(it,ve),ae;if($t===null){for(;!Fe.done;ve++,Fe=ot.next())Fe=Tt(it,Fe.value,bt),Fe!==null&&(q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe);return we&&ta(it,ve),ae}for($t=o($t);!Fe.done;ve++,Fe=ot.next())Fe=mt($t,it,ve,Fe.value,bt),Fe!==null&&(e&&Fe.alternate!==null&&$t.delete(Fe.key===null?ve:Fe.key),q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe);return e&&$t.forEach(function(by){return n(it,by)}),we&&ta(it,ve),ae}function We(it,q,ot,bt){if(typeof ot=="object"&&ot!==null&&ot.type===R&&ot.key===null&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case M:t:{for(var ae=ot.key;q!==null;){if(q.key===ae){if(ae=ot.type,ae===R){if(q.tag===7){a(it,q.sibling),bt=u(q,ot.props.children),bt.return=it,it=bt;break t}}else if(q.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&vs(ae)===q.type){a(it,q.sibling),bt=u(q,ot.props),go(bt,ot),bt.return=it,it=bt;break t}a(it,q);break}else n(it,q);q=q.sibling}ot.type===R?(bt=hs(ot.props.children,it.mode,bt,ot.key),bt.return=it,it=bt):(bt=Dl(ot.type,ot.key,ot.props,null,it.mode,bt),go(bt,ot),bt.return=it,it=bt)}return y(it);case b:t:{for(ae=ot.key;q!==null;){if(q.key===ae)if(q.tag===4&&q.stateNode.containerInfo===ot.containerInfo&&q.stateNode.implementation===ot.implementation){a(it,q.sibling),bt=u(q,ot.children||[]),bt.return=it,it=bt;break t}else{a(it,q);break}else n(it,q);q=q.sibling}bt=Xu(ot,it.mode,bt),bt.return=it,it=bt}return y(it);case T:return ot=vs(ot),We(it,q,ot,bt)}if(tt(ot))return Kt(it,q,ot,bt);if(Q(ot)){if(ae=Q(ot),typeof ae!="function")throw Error(s(150));return ot=ae.call(ot),se(it,q,ot,bt)}if(typeof ot.then=="function")return We(it,q,Bl(ot),bt);if(ot.$$typeof===U)return We(it,q,Ll(it,ot),bt);zl(it,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,q!==null&&q.tag===6?(a(it,q.sibling),bt=u(q,ot),bt.return=it,it=bt):(a(it,q),bt=ku(ot,it.mode,bt),bt.return=it,it=bt),y(it)):a(it,q)}return function(it,q,ot,bt){try{mo=0;var ae=We(it,q,ot,bt);return rr=null,ae}catch($t){if($t===sr||$t===Pl)throw $t;var Pe=Jn(29,$t,null,it.mode);return Pe.lanes=bt,Pe.return=it,Pe}finally{}}}var Ss=Am(!0),Rm=Am(!1),La=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=wl(e),um(e,null,a),n}return Cl(e,o,n,a),wl(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gs(e,a)}}function sf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var rf=!1;function vo(){if(rf){var e=ar;if(e!==null)throw e}}function xo(e,n,a,o){rf=!1;var u=e.updateQueue;La=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var W=C,lt=W.next;W.next=null,y===null?f=lt:y.next=lt,y=W;var yt=e.alternate;yt!==null&&(yt=yt.updateQueue,C=yt.lastBaseUpdate,C!==y&&(C===null?yt.firstBaseUpdate=lt:C.next=lt,yt.lastBaseUpdate=W))}if(f!==null){var Tt=u.baseState;y=0,yt=lt=W=null,C=f;do{var ut=C.lane&-536870913,mt=ut!==C.lane;if(mt?(Re&ut)===ut:(o&ut)===ut){ut!==0&&ut===ir&&(rf=!0),yt!==null&&(yt=yt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Kt=e,se=C;ut=n;var We=a;switch(se.tag){case 1:if(Kt=se.payload,typeof Kt=="function"){Tt=Kt.call(We,Tt,ut);break t}Tt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=se.payload,ut=typeof Kt=="function"?Kt.call(We,Tt,ut):Kt,ut==null)break t;Tt=S({},Tt,ut);break t;case 2:La=!0}}ut=C.callback,ut!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[ut]:mt.push(ut))}else mt={lane:ut,tag:C.tag,payload:C.payload,callback:C.callback,next:null},yt===null?(lt=yt=mt,W=Tt):yt=yt.next=mt,y|=ut;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;mt=C,C=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);yt===null&&(W=Tt),u.baseState=W,u.firstBaseUpdate=lt,u.lastBaseUpdate=yt,f===null&&(u.shared.lanes=0),Ha|=y,e.lanes=y,e.memoizedState=Tt}}function Cm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function wm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cm(a[e],n)}var or=F(null),Il=F(0);function Dm(e,n){e=fa,et(Il,e),et(or,n),fa=e|n.baseLanes}function of(){et(Il,fa),et(or,or.current)}function lf(){fa=Il.current,X(or),X(Il)}var $n=F(null),pi=null;function Fa(e){var n=e.alternate;et(an,an.current&1),et($n,e),pi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(pi=e)}function cf(e){et(an,an.current),et($n,e),pi===null&&(pi=e)}function Nm(e){e.tag===22?(et(an,an.current),et($n,e),pi===null&&(pi=e)):Ba()}function Ba(){et(an,an.current),et($n,$n.current)}function ti(e){X($n),pi===e&&(pi=null),X(an)}var an=F(0);function Hl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||md(a)||gd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,pe=null,ke=null,un=null,Gl=!1,lr=!1,ys=!1,Vl=0,So=0,cr=null,hS=0;function tn(){throw Error(s(321))}function uf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Qn(e[a],n[a]))return!1;return!0}function ff(e,n,a,o,u,f){return ia=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?p0:Af,ys=!1,f=a(o,u),ys=!1,lr&&(f=Lm(n,a,o,u)),Um(e),f}function Um(e){N.H=bo;var n=ke!==null&&ke.next!==null;if(ia=0,un=ke=pe=null,Gl=!1,So=0,cr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Ul(e)&&(fn=!0))}function Lm(e,n,a,o){pe=e;var u=0;do{if(lr&&(cr=null),So=0,lr=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=m0,f=n(a,o)}while(lr);return f}function pS(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),n}function df(){var e=Vl!==0;return Vl=0,e}function hf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(Gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Gl=!1}ia=0,un=ke=pe=null,lr=!1,So=Vl=0,cr=null}function In(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pe.memoizedState=un=e:un=un.next=e,un}function sn(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=un===null?pe.memoizedState:un.next;if(n!==null)un=n,ke=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?pe.memoizedState=un=e:un=un.next=e}return un}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=So;return So+=1,cr===null&&(cr=[]),e=bm(cr,e,n),n=pe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?p0:Af),e}function Xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===U)return Mn(e)}throw Error(s(438,String(e)))}function mf(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=kl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ht;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Wl(e){var n=sn();return gf(n,ke,e)}function gf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=y=null,W=null,lt=n,yt=!1;do{var Tt=lt.lane&-536870913;if(Tt!==lt.lane?(Re&Tt)===Tt:(ia&Tt)===Tt){var ut=lt.revertLane;if(ut===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),Tt===ir&&(yt=!0);else if((ia&ut)===ut){lt=lt.next,ut===ir&&(yt=!0);continue}else Tt={lane:0,revertLane:lt.revertLane,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},W===null?(C=W=Tt,y=f):W=W.next=Tt,pe.lanes|=ut,Ha|=ut;Tt=lt.action,ys&&a(f,Tt),f=lt.hasEagerState?lt.eagerState:a(f,Tt)}else ut={lane:Tt,revertLane:lt.revertLane,gesture:lt.gesture,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},W===null?(C=W=ut,y=f):W=W.next=ut,pe.lanes|=Tt,Ha|=Tt;lt=lt.next}while(lt!==null&&lt!==n);if(W===null?y=f:W.next=C,!Qn(f,e.memoizedState)&&(fn=!0,yt&&(a=ar,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=W,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _f(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);Qn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Om(e,n,a){var o=pe,u=sn(),f=we;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!Qn((ke||u).memoizedState,a);if(y&&(u.memoizedState=a,fn=!0),u=u.queue,Sf(Bm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ur(9,{destroy:void 0},Fm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(ia&127)!==0||Pm(o,n,a)}return a}function Pm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=kl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Fm(e,n,a,o){n.value=a,n.getSnapshot=o,zm(n)&&Im(e)}function Bm(e,n,a){return a(function(){zm(n)&&Im(e)})}function zm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Qn(e,a)}catch{return!0}}function Im(e){var n=ds(e,2);n!==null&&qn(n,e,2)}function vf(e){var n=In();if(typeof e=="function"){var a=e;if(e=a(),ys){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function Hm(e,n,a,o){return e.baseState=a,gf(e,ke,typeof o=="function"?o:aa)}function mS(e,n,a,o,u){if(Yl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Gm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=N.T,y={};N.T=y;try{var C=a(u,o),W=N.S;W!==null&&W(y,C),Vm(e,n,C)}catch(lt){xf(e,n,lt)}finally{f!==null&&y.types!==null&&(f.types=y.types),N.T=f}}else try{f=a(u,o),Vm(e,n,f)}catch(lt){xf(e,n,lt)}}function Vm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){km(e,n,o)},function(o){return xf(e,n,o)}):km(e,n,a)}function km(e,n,a){n.status="fulfilled",n.value=a,Xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Gm(e,a)))}function xf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Xm(n),n=n.next;while(n!==o)}e.action=null}function Xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Wm(e,n){return n}function jm(e,n){if(we){var a=qe.formState;if(a!==null){t:{var o=pe;if(we){if(Ye){e:{for(var u=Ye,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=mi(u.nextSibling),o=u.data==="F!";break t}}Na(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wm,lastRenderedState:n},a.queue=o,a=f0.bind(null,pe,o),o.dispatch=a,o=vf(!1),f=Tf.bind(null,pe,!1,o.queue),o=In(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=mS.bind(null,pe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function qm(e){var n=sn();return Ym(n,ke,e)}function Ym(e,n,a){if(n=gf(e,n,Wm)[0],e=Wl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(y){throw y===sr?Pl:y}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,ur(9,{destroy:void 0},gS.bind(null,u,a),null)),[o,f,e]}function gS(e,n){e.action=n}function Zm(e){var n=sn(),a=ke;if(a!==null)return Ym(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ur(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=kl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Km(){return sn().memoizedState}function jl(e,n,a,o){var u=In();pe.flags|=e,u.memoizedState=ur(1|n,{destroy:void 0},a,o===void 0?null:o)}function ql(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&uf(o,ke.memoizedState.deps)?u.memoizedState=ur(n,f,a,o):(pe.flags|=e,u.memoizedState=ur(1|n,f,a,o))}function Qm(e,n){jl(8390656,8,e,n)}function Sf(e,n){ql(2048,8,e,n)}function _S(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=kl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Jm(e){var n=sn().memoizedState;return _S({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $m(e,n){return ql(4,2,e,n)}function t0(e,n){return ql(4,4,e,n)}function e0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function n0(e,n,a){a=a!=null?a.concat([e]):null,ql(4,4,e0.bind(null,n,e),a)}function yf(){}function i0(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function a0(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=e(),ys){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function Mf(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=sg(),pe.lanes|=e,Ha|=e,a)}function s0(e,n,a,o){return Qn(a,n)?a:or.current!==null?(e=Mf(e,a,o),Qn(e,n)||(fn=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Re&261930)===0?(fn=!0,e.memoizedState=a):(e=sg(),pe.lanes|=e,Ha|=e,n)}function r0(e,n,a,o,u){var f=B.p;B.p=f!==0&&8>f?f:8;var y=N.T,C={};N.T=C,Tf(e,!1,n,a);try{var W=u(),lt=N.S;if(lt!==null&&lt(C,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var yt=dS(W,o);Mo(e,n,yt,ii(e))}else Mo(e,n,o,ii(e))}catch(Tt){Mo(e,n,{then:function(){},status:"rejected",reason:Tt},ii())}finally{B.p=f,y!==null&&C.types!==null&&(y.types=C.types),N.T=y}}function vS(){}function bf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=o0(e).queue;r0(e,u,n,k,a===null?vS:function(){return l0(e),a(o)})}function o0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function l0(e){var n=o0(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},ii())}function Ef(){return Mn(Io)}function c0(){return sn().memoizedState}function u0(){return sn().memoizedState}function xS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Oa(a);var o=Pa(n,e,a);o!==null&&(qn(o,n,a),_o(o,n,a)),n={cache:Ju()},e.payload=n;return}n=n.return}}function SS(e,n,a){var o=ii();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(e)?d0(n,a):(a=Gu(e,n,a,o),a!==null&&(qn(a,e,o),h0(a,n,o)))}function f0(e,n,a){var o=ii();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))d0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,C=f(y,a);if(u.hasEagerState=!0,u.eagerState=C,Qn(C,y))return Cl(e,n,u,0),qe===null&&Rl(),!1}catch{}finally{}if(a=Gu(e,n,u,o),a!==null)return qn(a,e,o),h0(a,n,o),!0}return!1}function Tf(e,n,a,o){if(o={lane:2,revertLane:id(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yl(e)){if(n)throw Error(s(479))}else n=Gu(e,a,o,2),n!==null&&qn(n,e,2)}function Yl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function d0(e,n){lr=Gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function h0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gs(e,a)}}var bo={readContext:Mn,use:Xl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};bo.useEffectEvent=tn;var p0={readContext:Mn,use:Xl,useCallback:function(e,n){return In().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Qm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,jl(4194308,4,e0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return jl(4194308,4,e,n)},useInsertionEffect:function(e,n){jl(4,2,e,n)},useMemo:function(e,n){var a=In();n=n===void 0?null:n;var o=e();if(ys){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=In();if(a!==void 0){var u=a(n);if(ys){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=SS.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=In();return e={current:e},n.memoizedState=e},useState:function(e){e=vf(e);var n=e.queue,a=f0.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:yf,useDeferredValue:function(e,n){var a=In();return Mf(a,e,n)},useTransition:function(){var e=vf(!1);return e=r0.bind(null,pe,e.queue,!0,!1),In().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=In();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Re&127)!==0||Pm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Qm(Bm.bind(null,o,f,e),[e]),o.flags|=2048,ur(9,{destroy:void 0},Fm.bind(null,o,f,a,n),null),a},useId:function(){var e=In(),n=qe.identifierPrefix;if(we){var a=Oi,o=Li;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ef,useFormState:jm,useActionState:jm,useOptimistic:function(e){var n=In();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return In().memoizedState=xS.bind(null,pe)},useEffectEvent:function(e){var n=In(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:Mn,use:Xl,useCallback:i0,useContext:Mn,useEffect:Sf,useImperativeHandle:n0,useInsertionEffect:$m,useLayoutEffect:t0,useMemo:a0,useReducer:Wl,useRef:Km,useState:function(){return Wl(aa)},useDebugValue:yf,useDeferredValue:function(e,n){var a=sn();return s0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Wl(aa)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Om,useId:c0,useHostTransitionStatus:Ef,useFormState:qm,useActionState:qm,useOptimistic:function(e,n){var a=sn();return Hm(a,ke,e,n)},useMemoCache:mf,useCacheRefresh:u0};Af.useEffectEvent=Jm;var m0={readContext:Mn,use:Xl,useCallback:i0,useContext:Mn,useEffect:Sf,useImperativeHandle:n0,useInsertionEffect:$m,useLayoutEffect:t0,useMemo:a0,useReducer:_f,useRef:Km,useState:function(){return _f(aa)},useDebugValue:yf,useDeferredValue:function(e,n){var a=sn();return ke===null?Mf(a,e,n):s0(a,ke.memoizedState,e,n)},useTransition:function(){var e=_f(aa)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:Om,useId:c0,useHostTransitionStatus:Ef,useFormState:Zm,useActionState:Zm,useOptimistic:function(e,n){var a=sn();return ke!==null?Hm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:u0};m0.useEffectEvent=Jm;function Rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,o),n!==null&&(qn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(e,u,o),n!==null&&(qn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(e,o,a),n!==null&&(qn(n,e,a),_o(n,e,a))}};function g0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,f):!0}function _0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Cf.enqueueReplaceState(n,n.state,null)}function Ms(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function v0(e){Al(e)}function x0(e){console.error(e)}function S0(e){Al(e)}function Zl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function y0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function wf(e,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(e,n)},a}function M0(e){return e=Oa(e),e.tag=3,e}function b0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){y0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){y0(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function yS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?oc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Fl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),td(e,o,u)),!1;case 22:return a.flags|=65536,o===Fl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),td(e,o,u)),!1}throw Error(s(435,a.tag))}return td(e,o,u),oc(),!1}if(we)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==qu&&(e=Error(s(422),{cause:o}),fo(ui(e,a)))):(o!==qu&&(n=Error(s(423),{cause:o}),fo(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ui(o,a),u=wf(e.stateNode,o,u),sf(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:o});if(f=ui(f,a),No===null?No=[f]:No.push(f),en!==4&&(en=2),n===null)return!0;o=ui(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=wf(a.stateNode,o,e),sf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=M0(u),b0(u,e,a,o),sf(a,u),!1}a=a.return}while(a!==null);return!1}var Df=Error(s(461)),fn=!1;function bn(e,n,a,o){n.child=e===null?Rm(n,null,a,o):Ss(n,e.child,a,o)}function E0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return gs(n),o=ff(e,n,a,y,f,u),C=df(),e!==null&&!fn?(hf(e,n,u),sa(e,n,u)):(we&&C&&Wu(n),n.flags|=1,bn(e,n,o,u),n.child)}function T0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,A0(e,n,f,o,u)):(e=Dl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!zf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(y,o)&&e.ref===n.ref)return sa(e,n,u)}return n.flags|=1,e=$i(f,o),e.ref=n.ref,e.return=n,n.child=e}function A0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(lo(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,zf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,sa(e,n,u)}return Nf(e,n,a,o,u)}function R0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return C0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ol(n,f!==null?f.cachePool:null),f!==null?Dm(n,f):of(),Nm(n);else return o=n.lanes=536870912,C0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ol(n,f.cachePool),Dm(n,f),Ba(),n.memoizedState=null):(e!==null&&Ol(n,null),of(),Ba());return bn(e,n,u,a),n.child}function Eo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function C0(e,n,a,o,u){var f=tf();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Ol(n,null),of(),Nm(n),e!==null&&nr(e,n,o,!0),n.childLanes=u,null}function Kl(e,n){return n=Jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function w0(e,n,a){return Ss(n,e.child,null,a),e=Kl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function MS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=Kl(n,o),n.lanes=536870912,Eo(null,e);if(cf(n),(e=Ye)?(e=Gg(e,hi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=dm(e),a.return=n,n.child=a,yn=n,Ye=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return Kl(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=w0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||nr(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=qe,o!==null&&(y=ml(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,ds(e,y),qn(o,e,y),Df;oc(),n=w0(e,n,a)}else e=f.treeContext,Ye=mi(y.nextSibling),yn=n,we=!0,Da=null,hi=!1,e!==null&&mm(n,e),n=Kl(n,o),n.flags|=4096;return n}return e=$i(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Nf(e,n,a,o,u){return gs(n),a=ff(e,n,a,o,void 0,u),o=df(),e!==null&&!fn?(hf(e,n,u),sa(e,n,u)):(we&&o&&Wu(n),n.flags|=1,bn(e,n,a,u),n.child)}function D0(e,n,a,o,u,f){return gs(n),n.updateQueue=null,a=Lm(n,o,a,u),Um(e),o=df(),e!==null&&!fn?(hf(e,n,f),sa(e,n,f)):(we&&o&&Wu(n),n.flags|=1,bn(e,n,a,f),n.child)}function N0(e,n,a,o,u){if(gs(n),n.stateNode===null){var f=Js,y=a.contextType;typeof y=="object"&&y!==null&&(f=Mn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},nf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Mn(y):Js,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Rf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Cf.enqueueReplaceState(f,f.state,null),xo(n,o,f,u),vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,W=Ms(a,C);f.props=W;var lt=f.context,yt=a.contextType;y=Js,typeof yt=="object"&&yt!==null&&(y=Mn(yt));var Tt=a.getDerivedStateFromProps;yt=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,yt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||lt!==y)&&_0(n,f,o,y),La=!1;var ut=n.memoizedState;f.state=ut,xo(n,o,f,u),vo(),lt=n.memoizedState,C||ut!==lt||La?(typeof Tt=="function"&&(Rf(n,a,Tt,o),lt=n.memoizedState),(W=La||g0(n,a,W,o,ut,lt,y))?(yt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=y,o=W):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,af(e,n),y=n.memoizedProps,yt=Ms(a,y),f.props=yt,Tt=n.pendingProps,ut=f.context,lt=a.contextType,W=Js,typeof lt=="object"&&lt!==null&&(W=Mn(lt)),C=a.getDerivedStateFromProps,(lt=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Tt||ut!==W)&&_0(n,f,o,W),La=!1,ut=n.memoizedState,f.state=ut,xo(n,o,f,u),vo();var mt=n.memoizedState;y!==Tt||ut!==mt||La||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof C=="function"&&(Rf(n,a,C,o),mt=n.memoizedState),(yt=La||g0(n,a,yt,o,ut,mt,W)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(lt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,mt,W),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,mt,W)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=mt),f.props=o,f.state=mt,f.context=W,o=yt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ql(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ss(n,e.child,null,u),n.child=Ss(n,null,a,u)):bn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=sa(e,n,u),e}function U0(e,n,a,o){return ps(),n.flags|=256,bn(e,n,a,o),n.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(e){return{baseLanes:e,cachePool:ym()}}function Of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function L0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Fa(n):Ba(),(e=Ye)?(e=Gg(e,hi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=dm(e),a.return=n,n.child=a,yn=n,Ye=null)):e=null,e===null)throw Na(n);return gd(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ba(),u=n.mode,C=Jl({mode:"hidden",children:C},u),o=hs(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Lf(a),o.childLanes=Of(e,y,a),n.memoizedState=Uf,Eo(null,o)):(Fa(n),Pf(n,C))}var W=e.memoizedState;if(W!==null&&(C=W.dehydrated,C!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=Ff(e,n,a)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,n=null):(Ba(),C=o.fallback,u=n.mode,o=Jl({mode:"visible",children:o.children},u),C=hs(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ss(n,e.child,null,a),o=n.child,o.memoizedState=Lf(a),o.childLanes=Of(e,y,a),n.memoizedState=Uf,n=Eo(null,o));else if(Fa(n),gd(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var lt=y.dgst;y=lt,o=Error(s(419)),o.stack="",o.digest=y,fo({value:o,source:null,stack:null}),n=Ff(e,n,a)}else if(fn||nr(e,n,a,!1),y=(a&e.childLanes)!==0,fn||y){if(y=qe,y!==null&&(o=ml(y,a),o!==0&&o!==W.retryLane))throw W.retryLane=o,ds(e,o),qn(y,e,o),Df;md(C)||oc(),n=Ff(e,n,a)}else md(C)?(n.flags|=192,n.child=e.child,n=null):(e=W.treeContext,Ye=mi(C.nextSibling),yn=n,we=!0,Da=null,hi=!1,e!==null&&mm(n,e),n=Pf(n,o.children),n.flags|=4096);return n}return u?(Ba(),C=o.fallback,u=n.mode,W=e.child,lt=W.sibling,o=$i(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,lt!==null?C=$i(lt,C):(C=hs(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Eo(null,o),o=n.child,C=e.child.memoizedState,C===null?C=Lf(a):(u=C.cachePool,u!==null?(W=cn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=ym(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Of(e,y,a),n.memoizedState=Uf,Eo(e.child,o)):(Fa(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Pf(e,n){return n=Jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Jl(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Ff(e,n,a){return Ss(n,e.child,null,a),e=Pf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function O0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ku(e.return,n,a)}function Bf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function P0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=an.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,et(an,y),bn(e,n,o,a),o=we?uo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&O0(e,a,n);else if(e.tag===19)O0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Hl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Hl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Bf(n,!0,a,null,f,o);break;case"together":Bf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function zf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function bS(e,n,a){switch(n.tag){case 3:dt(n,n.stateNode.containerInfo),Ua(n,cn,e.memoizedState.cache),ps();break;case 27:case 5:Ut(n);break;case 4:dt(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?L0(e,n,a):(Fa(n),e=sa(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(nr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return P0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),et(an,an.current),o)break;return null;case 22:return n.lanes=0,R0(e,n,a,n.pendingProps);case 24:Ua(n,cn,e.memoizedState.cache)}return sa(e,n,a)}function F0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!zf(e,a)&&(n.flags&128)===0)return fn=!1,bS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,we&&(n.flags&1048576)!==0&&pm(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=vs(n.elementType),n.type=e,typeof e=="function")Vu(e)?(o=Ms(e,o),n.tag=1,n=N0(null,n,e,o,a)):(n.tag=0,n=Nf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=E0(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=T0(null,n,e,o,a);break t}}throw n=at(e)||e,Error(s(306,n,""))}}return n;case 0:return Nf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ms(o,n.pendingProps),N0(e,n,o,u,a);case 3:t:{if(dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,af(e,n),xo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ua(n,cn,o),o!==f.cache&&Qu(n,[cn],a,!0),vo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=U0(e,n,o,a);break t}else if(o!==u){u=ui(Error(s(424)),n),fo(u),n=U0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=mi(e.firstChild),yn=n,we=!0,Da=null,hi=!0,a=Rm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ps(),o===u){n=sa(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Ql(e,n),e===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=pc(Z.current).createElement(a),o[rn]=n,o[pn]=e,En(o,a,e),K(o),n.stateNode=o):n.memoizedState=qg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ut(n),e===null&&we&&(o=n.stateNode=Xg(n.type,n.pendingProps,Z.current),yn=n,hi=!0,u=Ye,Wa(n.type)?(_d=u,Ye=mi(o.firstChild)):Ye=u),bn(e,n,n.pendingProps.children,a),Ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Ye)&&(o=$S(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,yn=n,Ye=mi(o.firstChild),hi=!1,u=!0):u=!1),u||Na(n)),Ut(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,dd(u,f)?o=null:y!==null&&dd(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(e,n,pS,null,null,a),Io._currentValue=u),Ql(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Ye)&&(a=ty(a,n.pendingProps,hi),a!==null?(n.stateNode=a,yn=n,Ye=null,e=!0):e=!1),e||Na(n)),null;case 13:return L0(e,n,a);case 4:return dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ss(n,null,o,a):bn(e,n,o,a),n.child;case 11:return E0(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,gs(n),u=Mn(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return T0(e,n,n.type,n.pendingProps,a);case 15:return A0(e,n,n.type,n.pendingProps,a);case 19:return P0(e,n,a);case 31:return MS(e,n,a);case 22:return R0(e,n,a,n.pendingProps);case 24:return gs(n),o=Mn(cn),e===null?(u=tf(),u===null&&(u=qe,f=Ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},nf(n),Ua(n,cn,u)):((e.lanes&a)!==0&&(af(e,n),xo(n,null,null,a),vo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,cn,o)):(o=f.cache,Ua(n,cn,o),o!==u.cache&&Qu(n,[cn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(e){e.flags|=4}function If(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(cg())e.flags|=8192;else throw xs=Fl,ef}else e.flags&=-16777217}function B0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jg(n))if(cg())e.flags|=8192;else throw xs=Fl,ef}function $l(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,pr|=n)}function To(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function ES(e,n,a){var o=n.pendingProps;switch(ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(cn),Et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(er(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?(Ze(n),B0(n,f)):(Ze(n),If(n,u,null,o,a))):f?f!==e.memoizedState?(ra(n),Ze(n),B0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(n),Ze(n),If(n,u,e,o,a)),null;case 27:if(Dt(n),a=Z.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=xt.current,er(n)?gm(n):(e=Xg(u,o,a),n.stateNode=e,ra(n))}return Ze(n),null;case 5:if(Dt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=xt.current,er(n))gm(n);else{var y=pc(Z.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[rn]=n,f[pn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(En(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ra(n)}}return Ze(n),If(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,er(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=yn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Lg(e.nodeValue,a)),e||Na(n,!0)}else e=pc(e).createTextNode(o),e[rn]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=er(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=er(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),$l(n,n.updateQueue),Ze(n),null);case 4:return Et(),e===null&&od(n.stateNode.containerInfo),Ze(n),null;case 10:return na(n.type),Ze(n),null;case 19:if(X(an),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)To(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Hl(e),f!==null){for(n.flags|=128,To(o,!1),e=f.updateQueue,n.updateQueue=e,$l(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)fm(a,e),a=a.sibling;return et(an,an.current&1|2),we&&ta(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>ac&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(e=Hl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,$l(n,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!we)return Ze(n),null}else 2*E()-o.renderingStartTime>ac&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=an.current,et(an,u?a&1|2:a&1),we&&ta(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ti(n),lf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&$l(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&X(_s),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function TS(e,n){switch(ju(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(cn),Et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Dt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(an),null;case 4:return Et(),null;case 10:return na(n.type),null;case 22:case 23:return ti(n),lf(),e!==null&&X(_s),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(cn),null;case 25:return null;default:return null}}function z0(e,n){switch(ju(n),n.tag){case 3:na(cn),Et();break;case 26:case 27:case 5:Dt(n);break;case 4:Et();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:X(an);break;case 10:na(n.type);break;case 22:case 23:ti(n),lf(),e!==null&&X(_s);break;case 24:na(cn)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(C){Ge(n,n.return,C)}}function za(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var W=a,lt=C;try{lt()}catch(yt){Ge(u,W,yt)}}}o=o.next}while(o!==f)}}catch(yt){Ge(n,n.return,yt)}}function I0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{wm(n,a)}catch(o){Ge(e,e.return,o)}}}function H0(e,n,a){a.props=Ms(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Pi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function G0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Hf(e,n,a){try{var o=e.stateNode;qS(o,e.type,a,n),o[pn]=n}catch(u){Ge(e,e.return,u)}}function V0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||V0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vf(e,n,a),e=e.sibling;e!==null;)Vf(e,n,a),e=e.sibling}function tc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,n,a),e=e.sibling;e!==null;)tc(e,n,a),e=e.sibling}function k0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[rn]=e,n[pn]=a}catch(f){Ge(e,e.return,f)}}var oa=!1,dn=!1,kf=!1,X0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function AS(e,n){if(e=e.containerInfo,ud=yc,e=nm(e),Pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,C=-1,W=-1,lt=0,yt=0,Tt=e,ut=null;e:for(;;){for(var mt;Tt!==a||u!==0&&Tt.nodeType!==3||(C=y+u),Tt!==f||o!==0&&Tt.nodeType!==3||(W=y+o),Tt.nodeType===3&&(y+=Tt.nodeValue.length),(mt=Tt.firstChild)!==null;)ut=Tt,Tt=mt;for(;;){if(Tt===e)break e;if(ut===a&&++lt===u&&(C=y),ut===f&&++yt===o&&(W=y),(mt=Tt.nextSibling)!==null)break;Tt=ut,ut=Tt.parentNode}Tt=mt}a=C===-1||W===-1?null:{start:C,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(fd={focusedElem:e,selectionRange:a},yc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Kt=Ms(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ge(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)pd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function W0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),o&4&&Ao(5,a);break;case 1:if(ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var u=Ms(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&I0(a),o&512&&Ro(a,a.return);break;case 3:if(ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{wm(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&o&4&&k0(a);case 26:case 5:ca(e,a),n===null&&o&4&&G0(a),o&512&&Ro(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),o&4&&Y0(e,a);break;case 13:ca(e,a),o&4&&Z0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=PS.bind(null,a),ey(e,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||dn,u=oa;var f=dn;oa=o,(dn=n)&&!f?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=u,dn=f}break;case 30:break;default:ca(e,a)}}function j0(e){var n=e.alternate;n!==null&&(e.alternate=null,j0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&to(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,kn=!1;function la(e,n,a){for(a=a.child;a!==null;)q0(e,n,a),a=a.sibling}function q0(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:dn||Pi(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Pi(a,n);var o=$e,u=kn;Wa(a.type)&&($e=a.stateNode,kn=!1),la(e,n,a),Fo(a.stateNode),$e=o,kn=u;break;case 5:dn||Pi(a,n);case 6:if(o=$e,u=kn,$e=null,la(e,n,a),$e=o,kn=u,$e!==null)if(kn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(kn?(e=$e,Ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mr(e)):Ig($e,a.stateNode));break;case 4:o=$e,u=kn,$e=a.stateNode.containerInfo,kn=!0,la(e,n,a),$e=o,kn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),dn||za(4,a,n),la(e,n,a);break;case 1:dn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&H0(a,n,o)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,la(e,n,a),dn=o;break;default:la(e,n,a)}}function Y0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(a){Ge(n,n.return,a)}}}function Z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(a){Ge(n,n.return,a)}}function RS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new X0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new X0),n;default:throw Error(s(435,e.tag))}}function ec(e,n){var a=RS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=FS.bind(null,e,o);o.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(Wa(C.type)){$e=C.stateNode,kn=!1;break t}break;case 5:$e=C.stateNode,kn=!1;break t;case 3:case 4:$e=C.stateNode.containerInfo,kn=!0;break t}C=C.return}if($e===null)throw Error(s(160));q0(f,y,u),$e=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)K0(n,e),n=n.sibling}var Ti=null;function K0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(za(3,e,e.return),Ao(3,e),za(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(dn||a===null||Pi(a,a.return)),o&64&&oa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Xn(n,e),Wn(e),o&512&&(dn||a===null||Pi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[os]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,o,a),f[rn]=e,K(f),o=f;break t;case"link":var y=Kg("link","href",u).get(o+(a.href||""));if(y){for(var C=0;C<y.length;C++)if(f=y[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(C,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;case"meta":if(y=Kg("meta","content",u).get(o+(a.content||""))){for(C=0;C<y.length;C++)if(f=y[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(C,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=e,K(f),o=f}e.stateNode=o}else Qg(u,e.type,e.stateNode);else e.stateNode=Zg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Qg(u,e.type,e.stateNode):Zg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(dn||a===null||Pi(a,a.return)),a!==null&&o&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(dn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Kt){Ge(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){Ge(e,e.return,Kt)}}break;case 3:if(_c=null,u=Ti,Ti=mc(n.containerInfo),Xn(n,e),Ti=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(Kt){Ge(e,e.return,Kt)}kf&&(kf=!1,Q0(e));break;case 4:o=Ti,Ti=mc(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ti=o;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 22:u=e.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,lt=oa,yt=dn;if(oa=lt||u,dn=yt||W,Xn(n,e),dn=yt,oa=lt,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||oa||dn||bs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(f=W.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=W.stateNode;var Tt=W.memoizedProps.style,ut=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;C.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(Kt){Ge(W,W.return,Kt)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(Kt){Ge(W,W.return,Kt)}}}else if(n.tag===18){if(a===null){W=n;try{var mt=W.stateNode;u?Hg(mt,!0):Hg(W.stateNode,!1)}catch(Kt){Ge(W,W.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ec(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(V0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Gf(e);tc(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(zn(y,""),a.flags&=-33);var C=Gf(e);tc(e,C,y);break;case 3:case 4:var W=a.stateNode.containerInfo,lt=Gf(e);Vf(e,lt,W);break;default:throw Error(s(161))}}catch(yt){Ge(e,e.return,yt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Q0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)W0(e,n.alternate,n),n=n.sibling}function bs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),bs(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&H0(n,n.return,a),bs(n);break;case 27:Fo(n.stateNode);case 26:case 5:Pi(n,n.return),bs(n);break;case 22:n.memoizedState===null&&bs(n);break;case 30:bs(n);break;default:bs(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),Ao(4,f);break;case 1:if(ua(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){Ge(o,o.return,lt)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)Cm(W[u],C)}catch(lt){Ge(o,o.return,lt)}}a&&y&64&&I0(f),Ro(f,f.return);break;case 27:k0(f);case 26:case 5:ua(u,f,a),a&&o===null&&y&4&&G0(f),Ro(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&y&4&&Y0(u,f);break;case 13:ua(u,f,a),a&&y&4&&Z0(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),Ro(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function Xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ai(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)J0(e,n,a,o),n=n.sibling}function J0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ai(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,C=f.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){Ge(n,n.return,W)}}else Ai(e,n,a,o);break;case 31:Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(e,n,a,o):Co(e,n):f._visibility&2?Ai(e,n,a,o):(f._visibility|=2,fr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Xf(y,n);break;case 24:Ai(e,n,a,o),u&2048&&Wf(n.alternate,n);break;default:Ai(e,n,a,o)}}function fr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,C=a,W=o,lt=y.flags;switch(y.tag){case 0:case 11:case 15:fr(f,y,C,W,u),Ao(8,y);break;case 23:break;case 22:var yt=y.stateNode;y.memoizedState!==null?yt._visibility&2?fr(f,y,C,W,u):Co(f,y):(yt._visibility|=2,fr(f,y,C,W,u)),u&&lt&2048&&Xf(y.alternate,y);break;case 24:fr(f,y,C,W,u),u&&lt&2048&&Wf(y.alternate,y);break;default:fr(f,y,C,W,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Xf(o.alternate,o);break;case 24:Co(a,o),u&2048&&Wf(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function dr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)$0(e,n,a),e=e.sibling}function $0(e,n,a){switch(e.tag){case 26:dr(e,n,a),e.flags&wo&&e.memoizedState!==null&&hy(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:dr(e,n,a);break;case 3:case 4:var o=Ti;Ti=mc(e.stateNode.containerInfo),dr(e,n,a),Ti=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,dr(e,n,a),wo=o):dr(e,n,a));break;default:dr(e,n,a)}}function tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,ng(o,e)}tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)eg(e),e=e.sibling}function eg(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&za(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,nc(e)):Do(e);break;default:Do(e)}}function nc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,ng(o,e)}tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:za(8,n,n.return),nc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,nc(n));break;default:nc(n)}e=e.sibling}}function ng(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(j0(o),o===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var CS={getCacheForType:function(e){var n=Mn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(cn).controller.signal}},wS=typeof WeakMap=="function"?WeakMap:Map,Be=0,qe=null,Me=null,Re=0,He=0,ei=null,Ia=!1,hr=!1,jf=!1,fa=0,en=0,Ha=0,Es=0,qf=0,ni=0,pr=0,No=null,jn=null,Yf=!1,ic=0,ig=0,ac=1/0,sc=null,Ga=null,gn=0,Va=null,mr=null,da=0,Zf=0,Kf=null,ag=null,Uo=0,Qf=null;function ii(){return(Be&2)!==0&&Re!==0?Re&-Re:N.T!==null?id():Ui()}function sg(){if(ni===0)if((Re&536870912)===0||we){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function qn(e,n,a){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(gr(e,0),ka(e,Re,ni,!1)),Pn(e,a),((Be&2)===0||e!==qe)&&(e===qe&&((Be&2)===0&&(Es|=a),en===4&&ka(e,Re,ni,!1)),Fi(e))}function rg(e,n,a){if((Be&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Yt(e,n),u=o?US(e,n):$f(e,n,!0),f=o;do{if(u===0){hr&&!o&&ka(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!DS(a)){u=$f(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var C=e;u=No;var W=C.current.memoizedState.isDehydrated;if(W&&(gr(C,y).flags|=256),y=$f(C,y,!1),y!==2){if(jf&&!W){C.errorRecoveryDisabledLanes|=f,Es|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){gr(e,0),ka(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ni,!Ia);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ic+300-E(),10<u)){if(ka(o,n,ni,!Ia),vt(o,0,!0)!==0)break t;da=n,o.timeoutHandle=Bg(og.bind(null,o,a,jn,sc,Yf,n,ni,Es,pr,Ia,f,"Throttled",-0,0),u);break t}og(o,a,jn,sc,Yf,n,ni,Es,pr,Ia,f,null,-0,0)}}break}while(!0);Fi(e)}function og(e,n,a,o,u,f,y,C,W,lt,yt,Tt,ut,mt){if(e.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},$0(n,f,Tt);var Kt=(f&62914560)===f?ic-E():(f&4194048)===f?ig-E():0;if(Kt=py(Tt,Kt),Kt!==null){da=f,e.cancelPendingCommit=Kt(mg.bind(null,e,n,f,a,o,u,y,C,W,yt,Tt,null,ut,mt)),ka(e,f,y,!lt);return}}mg(e,n,f,a,o,u,y,C,W)}function DS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(e,n,a,o){n&=~qf,n&=~Es,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Bt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&$r(e,a,n)}function rc(){return(Be&6)===0?(Lo(0),!1):!0}function Jf(){if(Me!==null){if(He===0)var e=Me.return;else e=Me,ea=ms=null,pf(e),rr=null,mo=0,e=Me;for(;e!==null;)z0(e.alternate,e),e=e.return;Me=null}}function gr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,KS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Jf(),qe=e,Me=a=$i(e.current,null),Re=n,He=0,ei=null,Ia=!1,hr=Yt(e,n),jf=!1,pr=ni=qf=Es=Ha=en=0,jn=No=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),f=1<<u;n|=e[u],o&=~f}return fa=n,Rl(),a}function lg(e,n){pe=null,N.H=bo,n===sr||n===Pl?(n=Em(),He=3):n===ef?(n=Em(),He=4):He=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,Me===null&&(en=1,Zl(e,ui(n,e.current)))}function cg(){var e=$n.current;return e===null?!0:(Re&4194048)===Re?pi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===pi:!1}function ug(){var e=N.H;return N.H=bo,e===null?bo:e}function fg(){var e=N.A;return N.A=CS,e}function oc(){en=4,Ia||(Re&4194048)!==Re&&$n.current!==null||(hr=!0),(Ha&134217727)===0&&(Es&134217727)===0||qe===null||ka(qe,Re,ni,!1)}function $f(e,n,a){var o=Be;Be|=2;var u=ug(),f=fg();(qe!==e||Re!==n)&&(sc=null,gr(e,n)),n=!1;var y=en;t:do try{if(He!==0&&Me!==null){var C=Me,W=ei;switch(He){case 8:Jf(),y=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var lt=He;if(He=0,ei=null,_r(e,C,W,lt),a&&hr){y=0;break t}break;default:lt=He,He=0,ei=null,_r(e,C,W,lt)}}NS(),y=en;break}catch(yt){lg(e,yt)}while(!0);return n&&e.shellSuspendCounter++,ea=ms=null,Be=o,N.H=u,N.A=f,Me===null&&(qe=null,Re=0,Rl()),y}function NS(){for(;Me!==null;)dg(Me)}function US(e,n){var a=Be;Be|=2;var o=ug(),u=fg();qe!==e||Re!==n?(sc=null,ac=E()+500,gr(e,n)):hr=Yt(e,n);t:do try{if(He!==0&&Me!==null){n=Me;var f=ei;e:switch(He){case 1:He=0,ei=null,_r(e,n,f,1);break;case 2:case 9:if(Mm(f)){He=0,ei=null,hg(n);break}n=function(){He!==2&&He!==9||qe!==e||(He=7),Fi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Mm(f)?(He=0,ei=null,hg(n)):(He=0,ei=null,_r(e,n,f,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var C=Me;if(y?Jg(y):C.stateNode.complete){He=0,ei=null;var W=C.sibling;if(W!==null)Me=W;else{var lt=C.return;lt!==null?(Me=lt,lc(lt)):Me=null}break e}}He=0,ei=null,_r(e,n,f,5);break;case 6:He=0,ei=null,_r(e,n,f,6);break;case 8:Jf(),en=6;break t;default:throw Error(s(462))}}LS();break}catch(yt){lg(e,yt)}while(!0);return ea=ms=null,N.H=o,N.A=u,Be=a,Me!==null?0:(qe=null,Re=0,Rl(),en)}function LS(){for(;Me!==null&&!Wt();)dg(Me)}function dg(e){var n=F0(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?lc(e):Me=n}function hg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=D0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=D0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:pf(n);default:z0(a,n),n=Me=fm(n,fa),n=F0(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?lc(e):Me=n}function _r(e,n,a,o){ea=ms=null,pf(n),rr=null,mo=0;var u=n.return;try{if(yS(e,u,n,a,Re)){en=1,Zl(e,ui(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;en=1,Zl(e,ui(a,e.current)),Me=null;return}n.flags&32768?(we||o===1?e=!0:hr||(Re&536870912)!==0?e=!1:(Ia=e=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),pg(n,e)):lc(n)}function lc(e){var n=e;do{if((n.flags&32768)!==0){pg(n,Ia);return}e=n.return;var a=ES(n.alternate,n,fa);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);en===0&&(en=5)}function pg(e,n){do{var a=TS(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);en=6,Me=null}function mg(e,n,a,o,u,f,y,C,W){e.cancelPendingCommit=null;do cc();while(gn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Hu,Si(e,a,f,y,C,W),e===qe&&(Me=qe=null,Re=0),mr=n,Va=e,da=a,Zf=f,Kf=u,ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,BS(gt,function(){return Sg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=B.p,B.p=2,y=Be,Be|=4;try{AS(e,n,a)}finally{Be=y,B.p=u,N.T=o}}gn=1,gg(),_g(),vg()}}function gg(){if(gn===1){gn=0;var e=Va,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=B.p;B.p=2;var u=Be;Be|=4;try{K0(n,e);var f=fd,y=nm(e.containerInfo),C=f.focusedElem,W=f.selectionRange;if(y!==C&&C&&C.ownerDocument&&em(C.ownerDocument.documentElement,C)){if(W!==null&&Pu(C)){var lt=W.start,yt=W.end;if(yt===void 0&&(yt=lt),"selectionStart"in C)C.selectionStart=lt,C.selectionEnd=Math.min(yt,C.value.length);else{var Tt=C.ownerDocument||document,ut=Tt&&Tt.defaultView||window;if(ut.getSelection){var mt=ut.getSelection(),Kt=C.textContent.length,se=Math.min(W.start,Kt),We=W.end===void 0?se:Math.min(W.end,Kt);!mt.extend&&se>We&&(y=We,We=se,se=y);var it=tm(C,se),q=tm(C,We);if(it&&q&&(mt.rangeCount!==1||mt.anchorNode!==it.node||mt.anchorOffset!==it.offset||mt.focusNode!==q.node||mt.focusOffset!==q.offset)){var ot=Tt.createRange();ot.setStart(it.node,it.offset),mt.removeAllRanges(),se>We?(mt.addRange(ot),mt.extend(q.node,q.offset)):(ot.setEnd(q.node,q.offset),mt.addRange(ot))}}}}for(Tt=[],mt=C;mt=mt.parentNode;)mt.nodeType===1&&Tt.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Tt.length;C++){var bt=Tt[C];bt.element.scrollLeft=bt.left,bt.element.scrollTop=bt.top}}yc=!!ud,fd=ud=null}finally{Be=u,B.p=o,N.T=a}}e.current=n,gn=2}}function _g(){if(gn===2){gn=0;var e=Va,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=B.p;B.p=2;var u=Be;Be|=4;try{W0(e,n.alternate,n)}finally{Be=u,B.p=o,N.T=a}}gn=3}}function vg(){if(gn===4||gn===3){gn=0,P();var e=Va,n=mr,a=da,o=ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,mr=Va=null,xg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),ks(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=B.p,B.p=2,N.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var C=o[y];f(C.value,{componentStack:C.stack})}}finally{N.T=n,B.p=u}}(da&3)!==0&&cc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Qf?Uo++:(Uo=0,Qf=e):Uo=0,Lo(0)}}function xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function cc(){return gg(),_g(),vg(),Sg()}function Sg(){if(gn!==5)return!1;var e=Va,n=Zf;Zf=0;var a=ks(da),o=N.T,u=B.p;try{B.p=32>a?32:a,N.T=null,a=Kf,Kf=null;var f=Va,y=da;if(gn=0,mr=Va=null,da=0,(Be&6)!==0)throw Error(s(331));var C=Be;if(Be|=4,eg(f.current),J0(f,f.current,y,a),Be=C,Lo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Rt,f)}catch{}return!0}finally{B.p=u,N.T=o,xg(e,n)}}function yg(e,n,a){n=ui(a,n),n=wf(e.stateNode,n,2),e=Pa(e,n,2),e!==null&&(Pn(e,2),Fi(e))}function Ge(e,n,a){if(e.tag===3)yg(e,e,a);else for(;n!==null;){if(n.tag===3){yg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=ui(a,e),a=M0(2),o=Pa(n,a,2),o!==null&&(b0(a,o,n,e),Pn(o,2),Fi(o));break}}n=n.return}}function td(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(jf=!0,u.add(a),e=OS.bind(null,e,n,a),n.then(e,e))}function OS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Re&a)===a&&(en===4||en===3&&(Re&62914560)===Re&&300>E()-ic?(Be&2)===0&&gr(e,0):qf|=a,pr===Re&&(pr=0)),Fi(e)}function Mg(e,n){n===0&&(n=Ie()),e=ds(e,n),e!==null&&(Pn(e,n),Fi(e))}function PS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(e,a)}function FS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Mg(e,a)}function BS(e,n){return me(e,n)}var uc=null,vr=null,ed=!1,fc=!1,nd=!1,Xa=0;function Fi(e){e!==vr&&e.next===null&&(vr===null?uc=vr=e:vr=vr.next=e),fc=!0,ed||(ed=!0,IS())}function Lo(e,n){if(!nd&&fc){nd=!0;do for(var a=!1,o=uc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Bt(42|e)+1)-1,f&=u&~(y&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ag(o,f))}else f=Re,f=vt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Yt(o,f)||(a=!0,Ag(o,f));o=o.next}while(a);nd=!1}}function zS(){bg()}function bg(){fc=ed=!1;var e=0;Xa!==0&&ZS()&&(e=Xa);for(var n=E(),a=null,o=uc;o!==null;){var u=o.next,f=Eg(o,n);f===0?(o.next=null,a===null?uc=u:a.next=u,u===null&&(vr=a)):(a=o,(e!==0||(f&3)!==0)&&(fc=!0)),o=u}gn!==0&&gn!==5||Lo(e),Xa!==0&&(Xa=0)}function Eg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Bt(f),C=1<<y,W=u[y];W===-1?((C&a)===0||(C&o)!==0)&&(u[y]=ce(C,n)):W<=n&&(e.expiredLanes|=C),f&=~C}if(n=qe,a=Re,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),ks(a)){case 2:case 8:a=At;break;case 32:a=gt;break;case 268435456:a=Lt;break;default:a=gt}return o=Tg.bind(null,e),a=me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function Tg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(cc()&&e.callbackNode!==a)return null;var o=Re;return o=vt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(rg(e,o,n),Eg(e,E()),e.callbackNode!=null&&e.callbackNode===a?Tg.bind(null,e):null)}function Ag(e,n){if(cc())return null;rg(e,n,!0)}function IS(){QS(function(){(Be&6)!==0?me(St,zS):bg()})}function id(){if(Xa===0){var e=ir;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Xa=e}return Xa}function Rg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(""+e)}function Cg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function HS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Rg((u[pn]||null).action),y=o.submitter;y&&(n=(n=y[pn]||null)?Rg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var C=new bl("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var W=y?Cg(u,y):new FormData(u);bf(a,{pending:!0,data:W,method:u.method,action:f},null,W)}}else typeof f=="function"&&(C.preventDefault(),W=y?Cg(u,y):new FormData(u),bf(a,{pending:!0,data:W,method:u.method,action:f},f,W))},currentTarget:u}]})}}for(var ad=0;ad<Iu.length;ad++){var sd=Iu[ad],GS=sd.toLowerCase(),VS=sd[0].toUpperCase()+sd.slice(1);Ei(GS,"on"+VS)}Ei(sm,"onAnimationEnd"),Ei(rm,"onAnimationIteration"),Ei(om,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(aS,"onTransitionRun"),Ei(sS,"onTransitionStart"),Ei(rS,"onTransitionCancel"),Ei(lm,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function wg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],W=C.instance,lt=C.currentTarget;if(C=C.listener,W!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=lt;try{f(u)}catch(yt){Al(yt)}u.currentTarget=null,f=W}else for(y=0;y<o.length;y++){if(C=o[y],W=C.instance,lt=C.currentTarget,C=C.listener,W!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=lt;try{f(u)}catch(yt){Al(yt)}u.currentTarget=null,f=W}}}}function be(e,n){var a=n[Ta];a===void 0&&(a=n[Ta]=new Set);var o=e+"__bubble";a.has(o)||(Dg(n,e,2,!1),a.add(o))}function rd(e,n,a){var o=0;n&&(o|=4),Dg(a,e,o,n)}var dc="_reactListening"+Math.random().toString(36).slice(2);function od(e){if(!e[dc]){e[dc]=!0,pt.forEach(function(a){a!=="selectionchange"&&(kS.has(a)||rd(a,!1,e),rd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dc]||(n[dc]=!0,rd("selectionchange",!1,n))}}function Dg(e,n,a,o){switch(s_(n)){case 2:var u=_y;break;case 8:u=vy;break;default:u=Md}a=u.bind(null,n,a,e),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ld(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var W=y.tag;if((W===3||W===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=Aa(C),y===null)return;if(W=y.tag,W===5||W===6||W===26||W===27){o=f=y;continue t}C=C.parentNode}}o=o.return}Pp(function(){var lt=f,yt=Eu(a),Tt=[];t:{var ut=cm.get(e);if(ut!==void 0){var mt=bl,Kt=e;switch(e){case"keypress":if(yl(a)===0)break t;case"keydown":case"keyup":mt=Fx;break;case"focusin":Kt="focus",mt=Du;break;case"focusout":Kt="blur",mt=Du;break;case"beforeblur":case"afterblur":mt=Du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=Ix;break;case sm:case rm:case om:mt=Rx;break;case lm:mt=Gx;break;case"scroll":case"scrollend":mt=Mx;break;case"wheel":mt=kx;break;case"copy":case"cut":case"paste":mt=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=Hp;break;case"toggle":case"beforetoggle":mt=Wx}var se=(n&4)!==0,We=!se&&(e==="scroll"||e==="scrollend"),it=se?ut!==null?ut+"Capture":null:ut;se=[];for(var q=lt,ot;q!==null;){var bt=q;if(ot=bt.stateNode,bt=bt.tag,bt!==5&&bt!==26&&bt!==27||ot===null||it===null||(bt=eo(q,it),bt!=null&&se.push(Po(q,bt,ot))),We)break;q=q.return}0<se.length&&(ut=new mt(ut,Kt,null,a,yt),Tt.push({event:ut,listeners:se}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",mt=e==="mouseout"||e==="pointerout",ut&&a!==bu&&(Kt=a.relatedTarget||a.fromElement)&&(Aa(Kt)||Kt[Zi]))break t;if((mt||ut)&&(ut=yt.window===yt?yt:(ut=yt.ownerDocument)?ut.defaultView||ut.parentWindow:window,mt?(Kt=a.relatedTarget||a.toElement,mt=lt,Kt=Kt?Aa(Kt):null,Kt!==null&&(We=c(Kt),se=Kt.tag,Kt!==We||se!==5&&se!==27&&se!==6)&&(Kt=null)):(mt=null,Kt=lt),mt!==Kt)){if(se=zp,bt="onMouseLeave",it="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(se=Hp,bt="onPointerLeave",it="onPointerEnter",q="pointer"),We=mt==null?ut:ls(mt),ot=Kt==null?ut:ls(Kt),ut=new se(bt,q+"leave",mt,a,yt),ut.target=We,ut.relatedTarget=ot,bt=null,Aa(yt)===lt&&(se=new se(it,q+"enter",Kt,a,yt),se.target=ot,se.relatedTarget=We,bt=se),We=bt,mt&&Kt)e:{for(se=XS,it=mt,q=Kt,ot=0,bt=it;bt;bt=se(bt))ot++;bt=0;for(var ae=q;ae;ae=se(ae))bt++;for(;0<ot-bt;)it=se(it),ot--;for(;0<bt-ot;)q=se(q),bt--;for(;ot--;){if(it===q||q!==null&&it===q.alternate){se=it;break e}it=se(it),q=se(q)}se=null}else se=null;mt!==null&&Ng(Tt,ut,mt,se,!1),Kt!==null&&We!==null&&Ng(Tt,We,Kt,se,!0)}}t:{if(ut=lt?ls(lt):window,mt=ut.nodeName&&ut.nodeName.toLowerCase(),mt==="select"||mt==="input"&&ut.type==="file")var Pe=Yp;else if(jp(ut))if(Zp)Pe=eS;else{Pe=$x;var $t=Jx}else mt=ut.nodeName,!mt||mt.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?lt&&Ws(lt.elementType)&&(Pe=Yp):Pe=tS;if(Pe&&(Pe=Pe(e,lt))){qp(Tt,Pe,a,yt);break t}$t&&$t(e,ut,lt),e==="focusout"&&lt&&ut.type==="number"&&lt.memoizedProps.value!=null&&Mi(ut,"number",ut.value)}switch($t=lt?ls(lt):window,e){case"focusin":(jp($t)||$t.contentEditable==="true")&&(Zs=$t,Fu=lt,co=null);break;case"focusout":co=Fu=Zs=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,im(Tt,a,yt);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":im(Tt,a,yt)}var ve;if(Uu)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Ys?Xp(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Gp&&a.locale!=="ko"&&(Ys||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ys&&(ve=Fp()):(Ca=yt,Ru="value"in Ca?Ca.value:Ca.textContent,Ys=!0)),$t=hc(lt,Ce),0<$t.length&&(Ce=new Ip(Ce,e,null,a,yt),Tt.push({event:Ce,listeners:$t}),ve?Ce.data=ve:(ve=Wp(a),ve!==null&&(Ce.data=ve)))),(ve=qx?Yx(e,a):Zx(e,a))&&(Ce=hc(lt,"onBeforeInput"),0<Ce.length&&($t=new Ip("onBeforeInput","beforeinput",null,a,yt),Tt.push({event:$t,listeners:Ce}),$t.data=ve)),HS(Tt,e,lt,a,yt)}wg(Tt,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function hc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,f)),u=eo(e,n),u!=null&&o.push(Po(e,u,f))),e.tag===3)return o;e=e.return}return[]}function XS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ng(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var C=a,W=C.alternate,lt=C.stateNode;if(C=C.tag,W!==null&&W===o)break;C!==5&&C!==26&&C!==27||lt===null||(W=lt,u?(lt=eo(a,f),lt!=null&&y.unshift(Po(a,lt,W))):u||(lt=eo(a,f),lt!=null&&y.push(Po(a,lt,W)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var WS=/\r\n?/g,jS=/\u0000|\uFFFD/g;function Ug(e){return(typeof e=="string"?e:""+e).replace(WS,`
`).replace(jS,"")}function Lg(e,n){return n=Ug(n),Ug(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":fe(e,"class",o);break;case"tabIndex":fe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":fe(e,a,o);break;case"style":Ki(e,o,f);break;case"data":if(n!=="object"){fe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=xl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":be("beforetoggle",e),be("toggle",e),oe(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sx.get(a)||a,oe(e,a,o))}}function cd(e,n,a,o,u,f){switch(a){case"style":Ki(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):oe(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,y,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var C=f=y=u=null,W=null,lt=null;for(o in a)if(a.hasOwnProperty(o)){var yt=a[o];if(yt!=null)switch(o){case"name":u=yt;break;case"type":y=yt;break;case"checked":W=yt;break;case"defaultChecked":lt=yt;break;case"value":f=yt;break;case"defaultValue":C=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,yt,a,null)}}Zn(e,f,C,W,lt,y,u,!1);return;case"select":be("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:Xe(e,n,u,C,a,null)}n=f,a=y,e.multiple=!!o,n!=null?Kn(e,!!o,n,!1):a!=null&&Kn(e,!!o,a,!0);return;case"textarea":be("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Xe(e,n,y,C,a,null)}on(e,o,u,f);return;case"option":for(W in a)if(a.hasOwnProperty(W)&&(o=a[W],o!=null))switch(W){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,W,o,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)be(Oo[o],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in a)if(a.hasOwnProperty(lt)&&(o=a[lt],o!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,lt,o,a,null)}return;default:if(Ws(n)){for(yt in a)a.hasOwnProperty(yt)&&(o=a[yt],o!==void 0&&cd(e,n,yt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Xe(e,n,C,o,a,null))}function qS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,C=null,W=null,lt=null,yt=null;for(mt in a){var Tt=a[mt];if(a.hasOwnProperty(mt)&&Tt!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":W=Tt;default:o.hasOwnProperty(mt)||Xe(e,n,mt,null,o,Tt)}}for(var ut in o){var mt=o[ut];if(Tt=a[ut],o.hasOwnProperty(ut)&&(mt!=null||Tt!=null))switch(ut){case"type":f=mt;break;case"name":u=mt;break;case"checked":lt=mt;break;case"defaultChecked":yt=mt;break;case"value":y=mt;break;case"defaultValue":C=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:mt!==Tt&&Xe(e,n,ut,mt,o,Tt)}}Bn(e,y,C,W,lt,yt,f,u);return;case"select":mt=y=C=ut=null;for(f in a)if(W=a[f],a.hasOwnProperty(f)&&W!=null)switch(f){case"value":break;case"multiple":mt=W;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,W)}for(u in o)if(f=o[u],W=a[u],o.hasOwnProperty(u)&&(f!=null||W!=null))switch(u){case"value":ut=f;break;case"defaultValue":C=f;break;case"multiple":y=f;default:f!==W&&Xe(e,n,u,f,o,W)}n=C,a=y,o=mt,ut!=null?Kn(e,!!a,ut,!1):!!o!=!!a&&(n!=null?Kn(e,!!a,n,!0):Kn(e,!!a,a?[]:"",!1));return;case"textarea":mt=ut=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xe(e,n,C,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ut=u;break;case"defaultValue":mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,y,u,o,f)}ze(e,ut,mt);return;case"option":for(var Kt in a)if(ut=a[Kt],a.hasOwnProperty(Kt)&&ut!=null&&!o.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:Xe(e,n,Kt,null,o,ut)}for(W in o)if(ut=o[W],mt=a[W],o.hasOwnProperty(W)&&ut!==mt&&(ut!=null||mt!=null))switch(W){case"selected":e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:Xe(e,n,W,ut,o,mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ut=a[se],a.hasOwnProperty(se)&&ut!=null&&!o.hasOwnProperty(se)&&Xe(e,n,se,null,o,ut);for(lt in o)if(ut=o[lt],mt=a[lt],o.hasOwnProperty(lt)&&ut!==mt&&(ut!=null||mt!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Xe(e,n,lt,ut,o,mt)}return;default:if(Ws(n)){for(var We in a)ut=a[We],a.hasOwnProperty(We)&&ut!==void 0&&!o.hasOwnProperty(We)&&cd(e,n,We,void 0,o,ut);for(yt in o)ut=o[yt],mt=a[yt],!o.hasOwnProperty(yt)||ut===mt||ut===void 0&&mt===void 0||cd(e,n,yt,ut,o,mt);return}}for(var it in a)ut=a[it],a.hasOwnProperty(it)&&ut!=null&&!o.hasOwnProperty(it)&&Xe(e,n,it,null,o,ut);for(Tt in o)ut=o[Tt],mt=a[Tt],!o.hasOwnProperty(Tt)||ut===mt||ut==null&&mt==null||Xe(e,n,Tt,ut,o,mt)}function Og(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function YS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,C=u.duration;if(f&&C&&Og(y)){for(y=0,C=u.responseEnd,o+=1;o<a.length;o++){var W=a[o],lt=W.startTime;if(lt>C)break;var yt=W.transferSize,Tt=W.initiatorType;yt&&Og(Tt)&&(W=W.responseEnd,y+=yt*(W<C?1:(C-lt)/(W-lt)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ud=null,fd=null;function pc(e){return e.nodeType===9?e:e.ownerDocument}function Pg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function dd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function ZS(){var e=window.event;return e&&e.type==="popstate"?e===hd?!1:(hd=e,!0):(hd=null,!1)}var Bg=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,zg=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof zg<"u"?function(e){return zg.resolve(null).then(e).catch(JS)}:Bg;function JS(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function Ig(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,C=f.nodeName;f[os]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Fo(e.ownerDocument.body);a=u}while(a);Mr(n)}function Hg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function pd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pd(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $S(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[os])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function ty(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Gg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function md(e){return e.data==="$?"||e.data==="$~"}function gd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ey(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _d=null;function Vg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Xg(e,n,a){switch(n=pc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Fo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);to(e)}var gi=new Map,Wg=new Set;function mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=B.d;B.d={f:ny,r:iy,D:ay,C:sy,L:ry,m:oy,X:cy,S:ly,M:uy};function ny(){var e=ha.f(),n=rc();return e||n}function iy(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?l0(n):ha.r(e)}var xr=typeof document>"u"?null:document;function jg(e,n,a){var o=xr;if(o&&typeof n=="string"&&n){var u=ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Wg.has(u)||(Wg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),K(n),o.head.appendChild(n)))}}function ay(e){ha.D(e),jg("dns-prefetch",e,null)}function sy(e,n){ha.C(e,n),jg("preconnect",e,n)}function ry(e,n,a){ha.L(e,n,a);var o=xr;if(o&&e&&n){var u='link[rel="preload"][as="'+ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ue(a.imageSizes)+'"]')):u+='[href="'+ue(e)+'"]';var f=u;switch(n){case"style":f=Sr(e);break;case"script":f=yr(e)}gi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(f))||n==="script"&&o.querySelector(zo(f))||(n=o.createElement("link"),En(n,"link",e),K(n),o.head.appendChild(n)))}}function oy(e,n){ha.m(e,n);var a=xr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ue(o)+'"][href="'+ue(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=yr(e)}if(!gi.has(f)&&(e=S({rel:"modulepreload",href:e},n),gi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}o=a.createElement("link"),En(o,"link",e),K(o),a.head.appendChild(o)}}}function ly(e,n,a){ha.S(e,n,a);var o=xr;if(o&&e){var u=w(o).hoistableStyles,f=Sr(e);n=n||"default";var y=u.get(f);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Bo(f)))C.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(f))&&vd(e,a);var W=y=o.createElement("link");K(W),En(W,"link",e),W._p=new Promise(function(lt,yt){W.onload=lt,W.onerror=yt}),W.addEventListener("load",function(){C.loading|=1}),W.addEventListener("error",function(){C.loading|=2}),C.loading|=4,gc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(f,y)}}}function cy(e,n){ha.X(e,n);var a=xr;if(a&&e){var o=w(a).hoistableScripts,u=yr(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=S({src:e,async:!0},n),(n=gi.get(u))&&xd(e,n),f=a.createElement("script"),K(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function uy(e,n){ha.M(e,n);var a=xr;if(a&&e){var o=w(a).hoistableScripts,u=yr(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&xd(e,n),f=a.createElement("script"),K(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function qg(e,n,a,o){var u=(u=Z.current)?mc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var f=w(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Bo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),f||fy(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+ue(e)+'"'}function Bo(e){return'link[rel="stylesheet"]['+e+"]"}function Yg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function fy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),K(n),e.head.appendChild(n))}function yr(e){return'[src="'+ue(e)+'"]'}function zo(e){return"script[async]"+e}function Zg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ue(a.href)+'"]');if(o)return n.instance=o,K(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),K(o),En(o,"style",u),gc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Sr(a.href);var f=e.querySelector(Bo(u));if(f)return n.state.loading|=4,n.instance=f,K(f),f;o=Yg(a),(u=gi.get(u))&&vd(o,u),f=(e.ownerDocument||e).createElement("link"),K(f);var y=f;return y._p=new Promise(function(C,W){y.onload=C,y.onerror=W}),En(f,"link",o),n.state.loading|=4,gc(f,a.precedence,e),n.instance=f;case"script":return f=yr(a.src),(u=e.querySelector(zo(f)))?(n.instance=u,K(u),u):(o=a,(u=gi.get(f))&&(o=S({},a),xd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),K(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,gc(o,a.precedence,e));return n.instance}function gc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function vd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function xd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var _c=null;function Kg(e,n,a){if(_c===null){var o=new Map,u=_c=new Map;u.set(a,o)}else u=_c,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[os]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var C=o.get(y);C?C.push(f):o.set(y,[f])}}return o}function Qg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function dy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),f=n.querySelector(Bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=vc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,K(f);return}f=n.ownerDocument||n,o=Yg(o),(u=gi.get(u))&&vd(o,u),f=f.createElement("link"),K(f);var y=f;y._p=new Promise(function(C,W){y.onload=C,y.onerror=W}),En(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=vc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Sd=0;function py(e,n){return e.stylesheets&&e.count===0&&Sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Sd===0&&(Sd=62500*YS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Sd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xc=null;function Sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xc=new Map,n.forEach(my,e),xc=null,vc.call(e))}function my(e,n){if(!(n.state.loading&4)){var a=xc.get(e);if(a)var o=a.get(null);else{a=new Map,xc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=vc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Io={$$typeof:U,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function gy(e,n,a,o,u,f,y,C,W){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function $g(e,n,a,o,u,f,y,C,W,lt,yt,Tt){return e=new gy(e,n,a,y,W,lt,yt,Tt,C),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=Ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},nf(f),e}function t_(e){return e?(e=Js,e):Js}function e_(e,n,a,o,u,f){u=t_(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(e,o,n),a!==null&&(qn(a,e,n),_o(a,e,n))}function n_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function yd(e,n){n_(e,n),(e=e.alternate)&&n_(e,n)}function i_(e){if(e.tag===13||e.tag===31){var n=ds(e,67108864);n!==null&&qn(n,e,67108864),yd(e,67108864)}}function a_(e){if(e.tag===13||e.tag===31){var n=ii();n=Vs(n);var a=ds(e,n);a!==null&&qn(a,e,n),yd(e,n)}}var yc=!0;function _y(e,n,a,o){var u=N.T;N.T=null;var f=B.p;try{B.p=2,Md(e,n,a,o)}finally{B.p=f,N.T=u}}function vy(e,n,a,o){var u=N.T;N.T=null;var f=B.p;try{B.p=8,Md(e,n,a,o)}finally{B.p=f,N.T=u}}function Md(e,n,a,o){if(yc){var u=bd(o);if(u===null)ld(e,n,o,Mc,a),r_(e,o);else if(Sy(u,e,n,a,o))o.stopPropagation();else if(r_(e,o),n&4&&-1<xy.indexOf(e)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=wt(f.pendingLanes);if(y!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var W=1<<31-Bt(y);C.entanglements[1]|=W,y&=~W}Fi(f),(Be&6)===0&&(ac=E()+500,Lo(0))}}break;case 31:case 13:C=ds(f,2),C!==null&&qn(C,f,2),rc(),yd(f,2)}if(f=bd(o),f===null&&ld(e,n,o,Mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ld(e,n,o,null,a)}}function bd(e){return e=Eu(e),Ed(e)}var Mc=null;function Ed(e){if(Mc=null,e=Aa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Mc=e,null}function s_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case St:return 2;case At:return 8;case gt:case Ft:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Td=!1,ja=null,qa=null,Ya=null,Ho=new Map,Go=new Map,Za=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function r_(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&i_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Sy(e,n,a,o,u){switch(n){case"focusin":return ja=Vo(ja,e,n,a,o,u),!0;case"dragenter":return qa=Vo(qa,e,n,a,o,u),!0;case"mouseover":return Ya=Vo(Ya,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,Vo(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Vo(Go.get(f)||null,e,n,a,o,u)),!0}return!1}function o_(e){var n=Aa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){a_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){a_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=bd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);bu=o,a.target.dispatchEvent(o),bu=null}else return n=Ra(a),n!==null&&i_(n),e.blockedOn=a,!1;n.shift()}return!0}function l_(e,n,a){bc(e)&&a.delete(n)}function yy(){Td=!1,ja!==null&&bc(ja)&&(ja=null),qa!==null&&bc(qa)&&(qa=null),Ya!==null&&bc(Ya)&&(Ya=null),Ho.forEach(l_),Go.forEach(l_)}function Ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Td||(Td=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,yy)))}var Tc=null;function c_(e){Tc!==e&&(Tc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tc===e&&(Tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Ed(o||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,bf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mr(e){function n(W){return Ec(W,e)}ja!==null&&Ec(ja,e),qa!==null&&Ec(qa,e),Ya!==null&&Ec(Ya,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)o_(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[pn]||null;if(typeof f=="function")y||c_(a);else if(y){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[pn]||null)C=y.formAction;else if(Ed(u)!==null)continue}else C=y.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),c_(a)}}}function u_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ad(e){this._internalRoot=e}Ac.prototype.render=Ad.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ii();e_(a,o,e,n,null,null)},Ac.prototype.unmount=Ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e_(e.current,2,null,e,null,null),rc(),n[Zi]=null}};function Ac(e){this._internalRoot=e}Ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ui();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&o_(e)}};var f_=t.version;if(f_!=="19.2.4")throw Error(s(527,f_,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var My={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{Rt=Rc.inject(My),Ct=Rc}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=v0,f=x0,y=S0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=$g(e,1,!1,null,null,a,o,null,u,f,y,u_),e[Zi]=n.current,od(e),new Ad(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=v0,y=x0,C=S0,W=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(W=a.formState)),n=$g(e,1,!0,n,a??null,o,u,W,f,y,C,u_),n.context=t_(null),a=n.current,o=ii(),o=Vs(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Pn(n,a),Fi(n),e[Zi]=n.current,od(e),new Ac(n)},Xo.version="19.2.4",Xo}var y_;function Ly(){if(y_)return wd.exports;y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wd.exports=Uy(),wd.exports}var Oy=Ly();const Py=Bv(Oy),Ld=16,Fy=250,By=500;function zy(r=4){const[t,i]=ft.useState(!1),[s,l]=ft.useState(0),[c,d]=ft.useState(0),[p,m]=ft.useState(!1),[h,_]=ft.useState(0),[S,g]=ft.useState(null),M=ft.useRef(null),b=ft.useRef(null),R=ft.useRef(null),v=ft.useRef(null),x=ft.useRef(0),A=ft.useRef(0),U=ft.useRef([]),D=ft.useRef(!1),G=ft.useRef(0),I=ft.useRef(0),z=ft.useRef(0),T=Fy*r;z.current=T,(!v.current||v.current[0].length!==T)&&(v.current=Array.from({length:Ld},()=>new Float32Array(T)),x.current=0,A.current=0),ft.useEffect(()=>(p?(M.current=Date.now(),_(0),clearInterval(b.current),b.current=setInterval(()=>{_(Math.floor((Date.now()-M.current)/1e3))},500)):(clearInterval(b.current),M.current=null),()=>clearInterval(b.current)),[p]);const O=ft.useCallback(Y=>{D.current=Y,Y||(x.current=0,A.current=0)},[]),ht=ft.useCallback(Y=>{const at=R.current;at&&at.readyState===WebSocket.OPEN&&at.send(JSON.stringify(Y))},[]);ft.useEffect(()=>{const Y=location.hostname||"localhost",at=parseInt(location.port||"1617")-1,N=`${location.protocol==="https:"?"wss":"ws"}://${Y}:${at}`,B="/auth/ws-token";async function k(){try{const _t=await fetch(B,{credentials:"include"});return _t.ok&&(await _t.json()).token||null}catch{return null}}async function nt(){const _t=await k(),F=_t?`${N}?token=${encodeURIComponent(_t)}`:N,X=new WebSocket(F);R.current=X,X.onopen=()=>i(!0),X.onclose=()=>{i(!1),setTimeout(nt,2e3)},X.onerror=()=>X.close(),X.onmessage=et=>{const xt=JSON.parse(et.data);if(xt.record_status){const Dt=xt.record_status;if(m(Dt.recording),Dt.stopped){const ie=location.port||"1617";g({filename:Dt.stopped.filename,frames:Dt.stopped.frames,duration:Dt.stopped.duration,path:Dt.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${ie}/recordings/${Dt.stopped.filename}`})}}if(xt.status||D.current)return;const Mt=xt.channels;if(!Mt||Mt.length!==Ld)return;const Z=v.current,V=z.current,dt=x.current;for(let Dt=0;Dt<Ld;Dt++)Z[Dt][dt]=Mt[Dt];x.current=(dt+1)%V,A.current<V&&A.current++,G.current++;const Et=xt.t;U.current.push(Et);const Ut=performance.now();if(Ut-I.current>By){I.current=Ut,l(G.current);const Dt=U.current,ie=Et-2;let Gt=0;for(;Gt<Dt.length&&Dt[Gt]<ie;)Gt++;if(Gt>0&&Dt.splice(0,Gt),Dt.length>1){const Vt=Dt[Dt.length-1]-Dt[0];Vt>0&&d(Math.round((Dt.length-1)/Vt))}}}}return nt(),()=>{const _t=R.current;_t&&_t.close()}},[]);const H=ft.useCallback(()=>g(null),[]),Q=ft.useMemo(()=>({buffers:v,writeIndex:x,samplesInBuffer:A,bufferSize:T,gridSuspended:!1}),[]);return Q.bufferSize=T,{connected:t,sampleCount:s,hz:c,recording:p,recordElapsed:h,recordResult:S,data:Q,dismissRecordResult:H,setPaused:O,sendCommand:ht}}function Od({children:r}){const[t,i]=ft.useState("checking"),[s,l]=ft.useState(""),[c,d]=ft.useState("");ft.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const _=await h.json();i(_.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),d("");try{const _=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();_.ok?i("ok"):(d(_.error||"Invalid code"),l(""))}catch{d("Server unreachable")}}return t==="checking"?null:t==="ok"?r:L.jsx("div",{className:"auth-overlay",children:L.jsxs("div",{className:"auth-card",children:[L.jsxs("h1",{children:["Pi",L.jsx("span",{children:"EEG"}),"-16"]}),L.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),L.jsxs("form",{onSubmit:p,children:[L.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),L.jsx("br",{}),L.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&L.jsx("p",{className:"auth-error",children:c})]})]})})}const Iy="rgba(48,54,61,0.4)",Hy="rgba(88,166,255,0.15)",Gy=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Vy={high:1500,medium:800,low:400},M_=14,b_=20,E_=2;function ky(r,t,i,s,l,c,d,p,m,h){r.clearRect(0,0,t,i);const _=i/2,S=i/4;r.beginPath();for(let U=S;U<i;U+=S)r.moveTo(0,U),r.lineTo(t,U);if(r.strokeStyle=Iy,r.lineWidth=.5,r.stroke(),r.beginPath(),r.moveTo(0,_),r.lineTo(t,_),r.strokeStyle=Hy,r.lineWidth=1,r.stroke(),l<2)return;const g=Vy[h]||1500,M=l>g?Math.floor(l/g):1,b=i/2,R=t/(d-1),v=b/p;if(h!=="low"){r.beginPath();let U=0;for(let D=0;D<l;D+=M){const G=(c-l+D+d)%d,I=D*R,z=_-s[G]*v;D===0?(r.moveTo(I,z),U=I):r.lineTo(I,z)}r.lineTo((l-1)*R,i),r.lineTo(U,i),r.closePath(),r.fillStyle=m+"10",r.fill()}r.strokeStyle=m,r.lineWidth=h==="low"?1:1.3,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let U=0;U<l;U+=M){const D=(c-l+U+d)%d,G=U*R,I=_-s[D]*v;U===0?r.moveTo(G,I):r.lineTo(G,I)}r.stroke();let x=0;const A=Math.min(l,250);for(let U=l-A;U<l;U++){const D=(c-l+U+d)%d;x+=s[D]*s[D]}return Math.sqrt(x/A)}const Xy=ft.memo(function({chIdx:t,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:d=!0}){const p=ft.useRef(null),m=ft.useRef(0),h=ft.useRef(0),_=ft.useRef(null),S=ft.useRef({w:0,h:0,pw:0,ph:0}),g=ft.useRef(!0),M=ft.useRef("high"),b=ft.useRef([]),R=ft.useRef(-1),v=ft.useRef(0),x=ft.useRef(0);return ft.useEffect(()=>{if(!d)return;const A=p.current;if(!A)return;const U=new ResizeObserver(D=>{const G=D[0];if(!G)return;const I=window.devicePixelRatio||1,{width:z,height:T}=G.contentRect,O=l?Math.min(I,2):1;S.current={w:z,h:T,pw:Math.round(z*O),ph:Math.round(T*O),dpr:O},g.current=!0});return U.observe(A),()=>U.disconnect()},[d,l]),ft.useEffect(()=>{if(!d)return;const A=p.current;if(!A)return;const U=A.getContext("2d",{alpha:!1});R.current=-1,x.current=0;const D=t%E_,G=()=>{x.current++;const{w:I,h:z,pw:T,ph:O,dpr:ht}=S.current;if(I===0||z===0){m.current=requestAnimationFrame(G);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(G);return}if(!l&&x.current%E_!==D){m.current=requestAnimationFrame(G);return}const H=i.writeIndex.current;if(H===R.current){m.current=requestAnimationFrame(G);return}R.current=H;const Q=performance.now();g.current&&(g.current=!1,A.width=T,A.height=O,U.setTransform(ht,0,0,ht,0,0)),U.fillStyle="#0d1117",U.fillRect(0,0,I,z);const Y=ky(U,I,z,i.buffers.current[t],i.samplesInBuffer.current,H,i.bufferSize,s,Gy[t],M.current);if(v.current++,Y!==void 0&&(v.current&1)===0&&(h.current=Y,_.current)){const N=Y/s;_.current.style.borderLeftColor=N>.8?"#f85149":N>.4?"#d29922":"#3fb950"}const at=performance.now()-Q,tt=b.current;if(tt.push(at),tt.length>b_&&tt.shift(),tt.length===b_){let N=0;for(let k=0;k<tt.length;k++)N+=tt[k];const B=N/tt.length;B>M_&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":B<M_*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(G)};return m.current=requestAnimationFrame(G),()=>cancelAnimationFrame(m.current)},[t,i,s,d]),d?L.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[L.jsxs("div",{className:"channel-label",ref:_,children:["Ch ",t+1]}),L.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})]}):L.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[L.jsxs("div",{className:"channel-label",children:["Ch ",t+1]}),L.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:Wy,cos:T_,sin:jy}=Math,A_=2*Wy,Dn=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class rl{constructor(t,i){if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-T_(A_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=rl._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=rl._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-A_*p/t;this._twRe[p]=T_(m),this._twIm[p]=jy(m)}let d=0;for(let p=0;p<t;p++)d+=this._window[p]*this._window[p];this._norm=2/(i*d)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:d,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let v=0;v<s;v++)m[v]=t[i+v]*l[v];this._fft(m,h);const _=(s>>1)+1,S=new Float64Array(_);let g=0,M=0,b=0;for(let v=0;v<_;v++){const x=m[v]*m[v]+h[v]*h[v],A=v===0||v===_-1?.5:1;S[v]=x*p*A,M+=S[v]*d,S[v]>g&&(g=S[v],b=v)}const R={};for(const v of Dn){let x=0;for(let A=0;A<_;A++)c[A]>=v.low&&c[A]<v.high&&(x+=S[A]*d);R[v.name]=x}return{frequencies:c,psd:S,bandPowers:R,dominantFrequency:c[b],totalPower:M}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,d=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)d[m]=t[(p+m)%c];return this.analyse(d,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:d}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let _=0;_<s;_+=p)for(let S=0;S<m;S++){const g=S*h,M=c[g],b=d[g],R=_+S,v=R+m,x=M*t[v]-b*i[v],A=M*i[v]+b*t[v];t[v]=t[R]-x,i[v]=i[R]-A,t[R]+=x,i[R]+=A}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Vr=250,Wo=256,R_=8,C_=.25,Pd=15,qy=60,Ri=40,Yy=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"];function Zy(r,t,i,s,l,c,d,p,m){r.clearRect(0,0,t,i);const h={l:52,r:12,t:8,b:28},_=t-h.l-h.r,S=i-h.t-h.b,g=h.t+S/2;r.fillStyle="#0d1117",r.fillRect(0,0,t,i),r.strokeStyle="rgba(48,54,61,0.5)",r.lineWidth=.5;const M=[-p,-p/2,0,p/2,p];r.font="9px monospace",r.fillStyle="#8b949e",r.textAlign="right";for(const N of M){const B=g-N/p*(S/2);r.beginPath(),r.moveTo(h.l,B),r.lineTo(t-h.r,B),r.stroke(),r.fillText(`${N>0?"+":""}${N}`,h.l-6,B+3)}r.textAlign="center",r.fillStyle="#8b949e";const b=d/Vr;for(let N=0;N<=b;N+=1){const B=h.l+N/b*_;r.beginPath(),r.moveTo(B,h.t),r.lineTo(B,h.t+S),r.strokeStyle="rgba(48,54,61,0.3)",r.stroke(),r.fillText(`${N}s`,B,i-6)}if(r.beginPath(),r.moveTo(h.l,g),r.lineTo(t-h.r,g),r.strokeStyle="rgba(88,166,255,0.2)",r.lineWidth=1,r.stroke(),l<2)return{};const R=S/2,v=_/(d-1),x=R/p;r.beginPath();let A=h.l;for(let N=0;N<l;N++){const B=(c-l+N+d)%d,k=h.l+N*v,nt=g-s[B]*x;N===0?(r.moveTo(k,nt),A=k):r.lineTo(k,nt)}r.lineTo(h.l+(l-1)*v,g+R),r.lineTo(A,g+R),r.closePath(),r.fillStyle=m+"0a",r.fill(),r.strokeStyle=m,r.lineWidth=1.5,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let N=0;N<l;N++){const B=(c-l+N+d)%d,k=h.l+N*v,nt=g-s[B]*x;N===0?r.moveTo(k,nt):r.lineTo(k,nt)}r.stroke();const U=h.l+(l-1)*v;r.beginPath(),r.moveTo(U,h.t),r.lineTo(U,h.t+S),r.strokeStyle=m+"40",r.lineWidth=1,r.setLineDash([3,3]),r.stroke(),r.setLineDash([]);const D=(c-1+d)%d,G=s[D];r.fillStyle=m,r.font="bold 11px monospace",r.textAlign="left",r.fillText(`${G.toFixed(1)} µV`,U+6,h.t+14),r.save(),r.translate(12,g),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="9px monospace",r.fillText("µV",0,0),r.restore();let I=0,z=0,T=1/0,O=-1/0,ht=0,H=null;const Q=Math.min(l,Vr*2);for(let N=l-Q;N<l;N++){const B=(c-l+N+d)%d,k=s[B];I+=k,z+=k*k,k<T&&(T=k),k>O&&(O=k),H!==null&&(H>=0&&k<0||H<0&&k>=0)&&ht++,H=k}const Y=I/Q,at=Math.sqrt(z/Q),tt=O-T;return{mean:Y,rms:at,pp:tt,min:T,max:O,zeroCross:ht,latestVal:G,statCount:Q}}function Ky(r,t,i,s,l,c,d,p){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const m={l:44,r:10,t:20,b:24},h=t-m.l-m.r,_=i-m.t-m.b,S=l[1],g=Math.min(Math.ceil(c/S),s.length-1);let M=1e-30;for(let b=1;b<=g;b++)s[b]>M&&(M=s[b]);for(const b of Dn){if(b.low>=c)continue;const R=m.l+Math.max(b.low,0)/c*h,v=m.l+Math.min(b.high,c)/c*h,x=p===b.name;r.fillStyle=b.color+(x?"20":"0a"),r.fillRect(R,m.t,v-R,_),r.fillStyle=b.color+(x?"bb":"55"),r.font="8px monospace",r.textAlign="center",r.fillText(b.label.split(" ")[0],(R+v)/2,m.t+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let b=1;b<4;b++){const R=m.t+b/4*_;r.beginPath(),r.moveTo(m.l,R),r.lineTo(m.l+h,R),r.stroke()}r.beginPath();for(let b=1;b<=g;b++){const R=m.l+l[b]/c*h,v=10*Math.log10((s[b]||1e-30)/M),x=Math.max(0,(v+60)/60),A=m.t+_-Math.min(1,x)*_;b===1?r.moveTo(R,A):r.lineTo(R,A)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(m.l+l[g]/c*h,m.t+_),r.lineTo(m.l+l[1]/c*h,m.t+_),r.closePath(),r.fillStyle="rgba(88,166,255,0.08)",r.fill(),r.fillStyle="#8b949e",r.font="9px monospace",r.textAlign="center";for(let b=0;b<=c;b+=10)r.fillText(`${b}`,m.l+b/c*h,i-6);r.fillText("Hz",m.l+h+2,i-6),r.save(),r.translate(10,m.t+_/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="8px monospace",r.fillText("dB",0,0),r.restore(),r.textAlign="right",r.font="8px monospace",r.fillStyle="#6e7681";for(const b of[0,-20,-40,-60]){const R=m.t+_-(b+60)/60*_;r.fillText(`${b}`,m.l-4,R+3)}}function Qy(r,t,i,s){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const l={l:10,r:10,t:6,b:4},c=Math.min(16,(i-l.t-l.b-(Dn.length-1)*4)/Dn.length),d=Math.max(...Dn.map(m=>s[m.name]||0),1e-6),p=Dn.reduce((m,h)=>m+(s[h.name]||0),0)||1e-6;Dn.forEach((m,h)=>{const _=s[m.name]||0,S=_/d,g=(_/p*100).toFixed(1),M=l.t+h*(c+4),b=t-l.l-l.r-82;r.fillStyle=m.color,r.font="bold 9px monospace",r.textAlign="left",r.fillText(m.label.charAt(0),l.l,M+c-3);const R=l.l+14;r.fillStyle="rgba(48,54,61,0.5)",r.beginPath(),r.roundRect(R,M,b,c,3),r.fill(),S>0&&(r.fillStyle=m.color+"cc",r.beginPath(),r.roundRect(R,M,Math.max(4,b*S),c,3),r.fill()),r.fillStyle="#e6edf3",r.font="9px monospace",r.textAlign="right",r.fillText(`${g}%`,t-l.r,M+c-3)})}function Jy(r,t,i,s,l,c,d,p){if(r.fillStyle="#0d1117",r.fillRect(0,0,t,i),l<10)return;const m={l:8,r:8,t:6,b:20},h=t-m.l-m.r,_=i-m.t-m.b,S=new Float32Array(Ri),g=2*p/Ri,M=Math.min(l,Vr*2);for(let v=l-M;v<l;v++){const x=(c-l+v+d)%d,A=s[x],U=Math.floor((A+p)/g);U>=0&&U<Ri&&S[U]++}let b=0;for(let v=0;v<Ri;v++)S[v]>b&&(b=S[v]);if(b===0)return;const R=h/Ri;for(let v=0;v<Ri;v++){const x=S[v]/b*_,A=m.l+v*R,U=m.t+_-x,D=Math.abs(v-Ri/2)/(Ri/2),G=Math.floor(88+D*160),I=Math.floor(166-D*120),z=Math.floor(255-D*200);r.fillStyle=`rgba(${G},${I},${z},0.6)`,r.fillRect(A+.5,U,R-1,x)}r.fillStyle="#6e7681",r.font="8px monospace",r.textAlign="center",r.fillText(`-${p}`,m.l+R,i-4),r.fillText("0",m.l+h/2,i-4),r.fillText(`+${p}`,t-m.r-R,i-4),r.strokeStyle="rgba(88,166,255,0.3)",r.lineWidth=1,r.beginPath();for(let v=0;v<Ri;v++){const x=m.l+(v+.5)*R,A=(v-Ri/2)/(Ri/4),U=Math.exp(-.5*A*A),D=m.t+_-U*_*.85;v===0?r.moveTo(x,D):r.lineTo(x,D)}r.stroke()}const $y=ft.memo(function({chIdx:t,eegData:i,yRange:s,onClose:l}){const c=ft.useRef(null),d=ft.useRef(null),p=ft.useRef(null),m=ft.useRef(null),h=ft.useRef(0),_=ft.useRef(0),S=ft.useRef(null),[g,M]=ft.useState(null),[b,R]=ft.useState({}),[v,x]=ft.useState({band:"",freq:0}),[A,U]=ft.useState(null),D=ft.useMemo(()=>new rl(Wo,Vr),[]),G=Yy[t],I=ft.useRef({trace:{w:0,h:0},spectrum:{w:0,h:0},band:{w:0,h:0},hist:{w:0,h:0}}),z=ft.useRef({trace:!0,spectrum:!0,band:!0,hist:!0});ft.useEffect(()=>{const H={trace:c.current,spectrum:d.current,band:p.current,hist:m.current},Q={},Y=[];for(const[k,nt]of Object.entries(H)){if(!nt)continue;Q[k]=nt.getContext("2d",{alpha:!1});const _t=new ResizeObserver(F=>{const X=F[0];if(!X)return;const et=Math.min(window.devicePixelRatio||1,2),{width:xt,height:Mt}=X.contentRect,Z=Math.round(xt*et),V=Math.round(Mt*et);I.current[k]={w:xt,h:Mt,pw:Z,ph:V,dpr:et},z.current[k]=!0});_t.observe(nt),Y.push(_t)}let at=null,tt={},N={band:"",freq:0};const B=()=>{_.current++;for(const[X,et]of Object.entries(H)){if(!et||!z.current[X])continue;const{pw:xt,ph:Mt,dpr:Z}=I.current[X];xt===0||Mt===0||(et.width=xt,et.height=Mt,Q[X].setTransform(Z,0,0,Z,0,0),z.current[X]=!1)}const k=i.buffers.current,nt=i.writeIndex.current,_t=i.samplesInBuffer.current,F=i.bufferSize;if(Q.trace){const{w:X,h:et}=I.current.trace;if(X>0&&et>0){const xt=Zy(Q.trace,X,et,k[t],_t,nt,F,s,G);xt.rms!==void 0&&_.current%Pd===0&&(at=xt)}}if(_.current%R_===0&&_t>=Wo){const X=D.analyseRing(k[t],nt,_t);if(X){if(!S.current||S.current.length!==X.psd.length)S.current=new Float64Array(X.psd);else{const Mt=S.current,Z=X.psd;for(let V=0;V<Mt.length;V++)Mt[V]=Mt[V]*(1-C_)+Z[V]*C_}tt=X.bandPowers;let et="",xt=0;for(const Mt of Dn)(X.bandPowers[Mt.name]||0)>xt&&(xt=X.bandPowers[Mt.name],et=Mt.name);N={band:et,freq:X.dominantFrequency}}}if(Q.spectrum&&S.current){const{w:X,h:et}=I.current.spectrum;X>0&&et>0&&Ky(Q.spectrum,X,et,S.current,D._frequencies,qy,tt,A)}if(Q.band&&_.current%R_===0){const{w:X,h:et}=I.current.band;X>0&&et>0&&Qy(Q.band,X,et,tt)}if(Q.hist&&_.current%Pd===0){const{w:X,h:et}=I.current.hist;X>0&&et>0&&Jy(Q.hist,X,et,k[t],_t,nt,F,s)}_.current%Pd===0&&(at&&M(at),tt&&R(tt),x(X=>X.band===N.band&&X.freq===N.freq?X:N)),h.current=requestAnimationFrame(B)};return h.current=requestAnimationFrame(B),()=>{cancelAnimationFrame(h.current),Y.forEach(k=>k.disconnect())}},[t,i,s,G,D,A]);const T=Dn.find(H=>H.name===v.band),O=(T==null?void 0:T.color)||"#8b949e",ht=Dn.reduce((H,Q)=>H+(b[Q.name]||0),0);return L.jsx("div",{className:"detail-overlay",onClick:l,children:L.jsxs("div",{className:"detail-panel",onClick:H=>H.stopPropagation(),children:[L.jsxs("div",{className:"detail-header",children:[L.jsxs("div",{className:"detail-title-group",children:[L.jsxs("span",{className:"detail-ch-badge",style:{borderColor:G,color:G},children:["Ch ",t+1]}),L.jsx("span",{className:"detail-title",children:"Channel Analysis"}),L.jsx("span",{className:"detail-subtitle",children:"Real-time single-channel deep inspection"})]}),L.jsxs("div",{className:"detail-header-stats",children:[v.band&&L.jsxs("span",{className:"detail-dominant",style:{color:O},children:[L.jsx("span",{className:"detail-dominant-label",children:"Dominant"}),L.jsx("span",{className:"detail-dominant-band",children:(T==null?void 0:T.label)||v.band}),L.jsxs("span",{className:"detail-dominant-freq",children:[v.freq.toFixed(1)," Hz"]})]}),g&&L.jsxs("span",{className:"detail-rms-badge",children:["RMS ",g.rms.toFixed(1)," µV"]})]}),L.jsx("button",{className:"detail-close",onClick:l,children:L.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:L.jsx("path",{d:"M4 4L14 14M14 4L4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),L.jsxs("div",{className:"detail-body",children:[L.jsxs("div",{className:"detail-trace-section",children:[L.jsxs("div",{className:"detail-section-head",children:[L.jsx("span",{className:"detail-section-title",children:"Time Domain"}),L.jsxs("span",{className:"detail-section-meta",children:[Vr," Hz · ±",s," µV"]})]}),L.jsx("div",{className:"detail-trace-canvas-wrap",children:L.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-analysis",children:[L.jsxs("div",{className:"detail-card",children:[L.jsxs("div",{className:"detail-card-head",children:[L.jsx("span",{className:"detail-card-title",children:"Power Spectrum"}),L.jsxs("span",{className:"detail-card-meta",children:[Wo,"pt FFT · ",(Vr/Wo).toFixed(1)," Hz/bin"]})]}),L.jsx("div",{className:"detail-card-canvas",children:L.jsx("canvas",{ref:d,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-card",children:[L.jsxs("div",{className:"detail-card-head",children:[L.jsx("span",{className:"detail-card-title",children:"Band Power Distribution"}),L.jsx("span",{className:"detail-card-meta",children:ht>0?`${ht.toFixed(2)} µV²/Hz total`:"—"})]}),L.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:L.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})}),L.jsx("div",{className:"detail-band-legend",children:Dn.map(H=>L.jsxs("button",{className:`detail-band-btn${A===H.name?" active":""}`,style:{"--band-color":H.color},onClick:()=>U(Q=>Q===H.name?null:H.name),children:[L.jsx("span",{className:"detail-band-dot"}),H.label.split(" ")[0]]},H.name))})]}),L.jsxs("div",{className:"detail-bottom-row",children:[L.jsxs("div",{className:"detail-card detail-card-half",children:[L.jsx("div",{className:"detail-card-head",children:L.jsx("span",{className:"detail-card-title",children:"Amplitude Distribution"})}),L.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:L.jsx("canvas",{ref:m,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-card detail-card-half detail-stats-card",children:[L.jsx("div",{className:"detail-card-head",children:L.jsx("span",{className:"detail-card-title",children:"Signal Metrics"})}),L.jsxs("div",{className:"detail-stats-grid",children:[L.jsx(Ts,{label:"RMS",value:g==null?void 0:g.rms,unit:"µV",precision:2}),L.jsx(Ts,{label:"Peak-Peak",value:g==null?void 0:g.pp,unit:"µV",precision:1}),L.jsx(Ts,{label:"Mean",value:g==null?void 0:g.mean,unit:"µV",precision:2}),L.jsx(Ts,{label:"Min",value:g==null?void 0:g.min,unit:"µV",precision:1}),L.jsx(Ts,{label:"Max",value:g==null?void 0:g.max,unit:"µV",precision:1}),L.jsx(Ts,{label:"Zero-X",value:g==null?void 0:g.zeroCross,unit:"/2s",precision:0}),L.jsx(Ts,{label:"Live",value:g==null?void 0:g.latestVal,unit:"µV",precision:1,highlight:!0})]})]})]})]})]}),L.jsxs("div",{className:"detail-footer",children:[L.jsxs("span",{children:[Wo,"-pt Hanning · Cooley-Tukey radix-2"]}),L.jsxs("span",{className:"detail-footer-keys",children:[L.jsx("kbd",{children:"Esc"})," Close"]}),L.jsx("span",{children:"Not a medical device"})]})]})})});function Ts({label:r,value:t,unit:i,precision:s=2,highlight:l}){const c=t!=null?s===0?Math.round(t):t.toFixed(s):"—";return L.jsxs("div",{className:`detail-stat-row${l?" highlight":""}`,children:[L.jsx("span",{className:"detail-stat-label",children:r}),L.jsx("span",{className:"detail-stat-value",children:c}),L.jsx("span",{className:"detail-stat-unit",children:i})]})}const Fd=16,As=256,Bd=250,tM=60,eM=12,w_=.3,nM=350;function iM(r,t,i,s,l,c,d,p){const h=t-16,_=24,S=i-24,g=h-48,M=S-_,b=l[1],R=Math.min(Math.ceil(c/b),s.length-1);let v=1e-30;for(let x=1;x<=R;x++)s[x]>v&&(v=s[x]);for(const x of Dn){if(x.low>=c)continue;const A=48+Math.max(x.low,0)/c*g,U=48+Math.min(x.high,c)/c*g,D=p===x.name;r.fillStyle=x.color+(D?"28":"12"),r.fillRect(A,_,U-A,M),r.fillStyle=x.color+(D?"cc":"66"),r.font="9px monospace",r.textAlign="center",r.fillText(x.name,(A+U)/2,_+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let x=1;x<5;x++){const A=_+x/5*M;r.beginPath(),r.moveTo(48,A),r.lineTo(h,A),r.stroke()}for(const x of[4,8,13,30,50]){if(x>c)continue;const A=48+x/c*g;r.beginPath(),r.moveTo(A,_),r.lineTo(A,S),r.stroke()}r.beginPath();for(let x=1;x<=R;x++){const A=48+l[x]/c*g;let U;if(d){const G=10*Math.log10((s[x]||1e-30)/v);U=Math.max(0,(G+60)/60)}else U=s[x]/v;const D=S-Math.min(1,U)*M;x===1?r.moveTo(A,D):r.lineTo(A,D)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(48+l[R]/c*g,S),r.lineTo(48+l[1]/c*g,S),r.closePath(),r.fillStyle="rgba(88,166,255,0.07)",r.fill(),r.fillStyle="#8b949e",r.font="10px monospace",r.textAlign="center";for(let x=0;x<=c;x+=10)r.fillText(`${x}`,48+x/c*g,S+14);if(r.fillText("Hz",h+2,S+14),r.save(),r.translate(11,_+M/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillText(d?"dB":"µV²/Hz",0,0),r.restore(),r.textAlign="right",r.font="9px monospace",d)for(const x of[0,-20,-40,-60]){const A=S-(x+60)/60*M;r.fillText(`${x}`,44,A+3)}}const aM=ft.memo(function({eegData:t}){var Q;const i=ft.useRef(null),s=ft.useRef(0),l=ft.useRef(0),c=ft.useRef(null),d=ft.useRef(0),p=ft.useRef(null),m=ft.useRef({}),h=ft.useRef(window.devicePixelRatio||1),_=ft.useRef({w:0,h:0,pw:0,ph:0}),S=ft.useRef(!0),[g,M]=ft.useState(0),[b,R]=ft.useState(!0),[v,x]=ft.useState(!1),[A,U]=ft.useState(null),[D,G]=ft.useState({}),[I,z]=ft.useState({band:"",freq:0}),T=ft.useMemo(()=>new rl(As,Bd),[]);p.current||(p.current=new Float64Array(As)),ft.useEffect(()=>{const Y=i.current;if(!Y)return;const at=Y.getContext("2d",{alpha:!1}),tt=new ResizeObserver(B=>{const k=B[0];if(!k)return;const nt=window.devicePixelRatio||1;h.current=nt;const{width:_t,height:F}=k.contentRect;_.current={w:_t,h:F,pw:Math.round(_t*nt),ph:Math.round(F*nt)},S.current=!0});tt.observe(Y);const N=()=>{const{w:B,h:k,pw:nt,ph:_t}=_.current;if(B===0||k===0){s.current=requestAnimationFrame(N);return}if(S.current&&(S.current=!1,Y.width=nt,Y.height=_t),at.setTransform(h.current,0,0,h.current,0,0),at.fillStyle="#0d1117",at.fillRect(0,0,B,k),l.current++,!v&&l.current%eM===0){const X=t.buffers.current,et=t.writeIndex.current,xt=t.samplesInBuffer.current;if(X&&xt>=As){let Mt;if(g===-1){const Z=p.current,V=t.bufferSize,dt=(et-As+V)%V;for(let Et=0;Et<As;Et++){let Ut=0;const Dt=(dt+Et)%V;for(let ie=0;ie<Fd;ie++)Ut+=X[ie][Dt];Z[Et]=Ut/Fd}Mt=T.analyse(Z,0)}else Mt=T.analyseRing(X[g],et,xt);if(Mt){if(!c.current||c.current.length!==Mt.psd.length)c.current=new Float64Array(Mt.psd);else{const V=c.current,dt=Mt.psd;for(let Et=0;Et<V.length;Et++)V[Et]=V[Et]*(1-w_)+dt[Et]*w_}const Z=performance.now();if(Z-d.current>nM){d.current=Z,m.current=Mt.bandPowers,G(Mt.bandPowers);let V="",dt=0;for(const Et of Dn)(Mt.bandPowers[Et.name]||0)>dt&&(dt=Mt.bandPowers[Et.name],V=Et.name);z(Et=>Et.band===V&&Et.freq===Mt.dominantFrequency?Et:{band:V,freq:Mt.dominantFrequency})}}}}const F=c.current;!F||F.length===0?(at.fillStyle="#4b5563",at.font="13px monospace",at.textAlign="center",at.fillText("Collecting samples…",B/2,k/2)):iM(at,B,k,F,T._frequencies,tM,b,A),s.current=requestAnimationFrame(N)};return s.current=requestAnimationFrame(N),()=>{cancelAnimationFrame(s.current),tt.disconnect()}},[t,g,b,v,A,T]);const O=Math.max(...Dn.map(Y=>D[Y.name]||0),1e-6),ht=g===-1?"Avg":`Ch ${g+1}`,H=((Q=Dn.find(Y=>Y.name===I.band))==null?void 0:Q.color)||"#8b949e";return L.jsxs("div",{className:"spectral-panel",children:[L.jsxs("div",{className:"spectral-toolbar",children:[L.jsxs("span",{className:"spectral-title",children:["Spectral Analysis"," ",L.jsxs("small",{style:{color:"var(--text-dim)",fontWeight:400},children:["— ",ht]})]}),L.jsxs("div",{className:"spectral-channels",children:[L.jsx("button",{className:`sp-ch${g===-1?" active":""}`,onClick:()=>M(-1),children:"Avg"}),Array.from({length:Fd},(Y,at)=>L.jsx("button",{className:`sp-ch${g===at?" active":""}`,onClick:()=>M(at),children:at+1},at))]}),L.jsxs("div",{className:"spectral-ctrls",children:[L.jsx("button",{className:`btn${b?" active":""}`,onClick:()=>R(Y=>!Y),children:b?"Log":"Lin"}),L.jsx("button",{className:`btn${v?" active":""}`,onClick:()=>x(Y=>!Y),children:v?"▶":"⏸"})]})]}),L.jsxs("div",{className:"spectral-canvas-wrap",children:[L.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),v&&L.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),L.jsx("div",{className:"spectral-bands",children:Dn.map(Y=>{const at=D[Y.name]||0,tt=O>0?at/O*100:0,N=A===Y.name;return L.jsxs("div",{className:`sp-band${N?" selected":""}`,onClick:()=>U(N?null:Y.name),children:[L.jsxs("div",{className:"sp-band-head",children:[L.jsx("span",{className:"sp-band-dot",style:{background:Y.color}}),L.jsx("span",{className:"sp-band-name",style:{color:Y.color},children:Y.label}),L.jsxs("span",{className:"sp-band-hz",children:[Y.low,"–",Y.high," Hz"]})]}),L.jsx("div",{className:"sp-band-track",children:L.jsx("div",{className:"sp-band-fill",style:{width:`${tt}%`,background:Y.color}})}),L.jsx("span",{className:"sp-band-val",children:at<.01?at.toExponential(1):at.toFixed(2)})]},Y.name)})}),L.jsxs("div",{className:"spectral-footer",children:[L.jsxs("span",{children:["Dominant:"," ",L.jsx("strong",{style:{color:H},children:I.band})," ","(",I.freq.toFixed(1)," Hz)"]}),L.jsxs("span",{children:[As," pt · ",Bd," Hz ·"," ",(Bd/As).toFixed(1)," Hz/bin"]})]})]})}),sM=ft.memo(function(){const[t,i]=ft.useState(!1),[s,l]=ft.useState(0),[c,d]=ft.useState(0),[p,m]=ft.useState(0),h=ft.useRef(0),_=ft.useRef(performance.now()),S=ft.useRef(0);return ft.useEffect(()=>{const g=M=>{(M.key==="p"||M.key==="P")&&i(b=>!b)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),ft.useEffect(()=>{if(!t)return;const g=()=>{h.current++;const M=performance.now(),b=M-_.current;b>=1e3&&(l(Math.round(h.current*(1e3/b))),d(Math.round(b/h.current*100)/100),performance.memory&&m(Math.round(performance.memory.usedJSHeapSize/1048576)),h.current=0,_.current=M),S.current=requestAnimationFrame(g)};return S.current=requestAnimationFrame(g),()=>cancelAnimationFrame(S.current)},[t]),t?L.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[L.jsxs("div",{children:["FPS: ",s]}),L.jsxs("div",{children:["Frame: ",c,"ms"]}),L.jsxs("div",{children:["Memory: ",p,"MB"]}),L.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function rM({onSelect:r,onBack:t}){const[i,s]=ft.useState([]),[l,c]=ft.useState(!0);ft.useEffect(()=>{d()},[]);async function d(){try{const _=await(await fetch("/api/recordings")).json();s(_.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return L.jsxs("div",{className:"session-list",children:[L.jsxs("header",{className:"session-header",children:[L.jsx("h2",{children:"Saved Sessions"}),L.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&L.jsx("div",{className:"list-loading",children:L.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&L.jsx("div",{className:"list-empty",children:L.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&L.jsx("div",{className:"list-container",children:L.jsxs("table",{className:"recordings-table",children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"Filename"}),L.jsx("th",{children:"Size"}),L.jsx("th",{children:"Date & Time"}),L.jsx("th",{children:"Action"})]})}),L.jsx("tbody",{children:i.map(h=>L.jsxs("tr",{children:[L.jsx("td",{className:"filename",children:h.filename}),L.jsx("td",{className:"size",children:m(h.size)}),L.jsx("td",{className:"mtime",children:p(h.mtime)}),L.jsx("td",{className:"action",children:L.jsx("button",{className:"btn btn-open",onClick:()=>r(h.filename),children:"Open"})})]},h.filename))})]})}),L.jsx("style",{children:`
        .session-list {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 20px;
          background: var(--bg);
        }

        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 15px;
        }

        .session-header h2 {
          margin: 0;
          color: var(--text);
          font-size: 20px;
        }

        .btn-back {
          padding: 8px 16px;
          background: var(--border);
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          transition: background 0.2s;
        }

        .btn-back:hover {
          background: var(--accent);
          border-color: var(--accent);
        }

        .list-loading,
        .list-empty {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          color: var(--dim);
          font-size: 14px;
        }

        .list-container {
          flex: 1;
          overflow-y: auto;
        }

        .recordings-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .recordings-table thead {
          position: sticky;
          top: 0;
          background: var(--surface);
          z-index: 1;
        }

        .recordings-table th {
          padding: 12px;
          text-align: left;
          color: var(--text-dim);
          font-weight: 600;
          border-bottom: 1px solid var(--border);
        }

        .recordings-table td {
          padding: 12px;
          border-bottom: 1px solid var(--border);
          color: var(--text);
        }

        .recordings-table tbody tr:hover {
          background: var(--surface);
        }

        .filename {
          font-family: monospace;
          font-size: 12px;
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .size {
          text-align: right;
          color: var(--dim);
          font-family: monospace;
        }

        .mtime {
          color: var(--dim);
          font-family: monospace;
          font-size: 12px;
        }

        .btn-open {
          padding: 6px 12px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .btn-open:hover {
          opacity: 0.8;
        }
      `})]})}const Cc=16,Rs=250,oM=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],lM="rgba(48,54,61,0.4)",cM="rgba(88,166,255,0.12)",uM="rgba(88,166,255,0.6)",fM="#0d1117",dM=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],hM=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function pM({filename:r,onBack:t}){const[i,s]=ft.useState(!0),[l,c]=ft.useState(null),[d,p]=ft.useState(!1),[m,h]=ft.useState(0),[_,S]=ft.useState(1),[g,M]=ft.useState(100),[b,R]=ft.useState(4),[v,x]=ft.useState([]),[A,U]=ft.useState(""),[D,G]=ft.useState(!1),I=ft.useRef(null),z=ft.useRef(0),T=ft.useRef(0),O=ft.useRef(null),ht=ft.useRef(0),H=ft.useRef(0),Q=ft.useRef(!1),Y=ft.useRef(1),at=ft.useRef(100),tt=ft.useRef(4),N=ft.useRef(window.devicePixelRatio||1),B=ft.useRef({w:0,h:0});Q.current=d,Y.current=_,at.current=g,tt.current=b,T.current=m;const k=z.current,nt=k/Rs,_t=m/Rs;ft.useEffect(()=>{let V=!1;async function dt(){s(!0),c(null);try{const Et=await fetch(`/api/recordings/data/${encodeURIComponent(r)}`);if(!Et.ok)throw new Error(`HTTP ${Et.status}`);const Ut=await Et.json();if(Ut.error)throw new Error(Ut.error);const ie=(Ut.data||[]).slice(1),Gt=ie.length;if(Gt===0)throw new Error("Empty recording");const Vt=Array.from({length:Cc},()=>new Float32Array(Gt));for(let re=0;re<Gt;re++){const qt=ie[re].split(",");for(let he=0;he<Cc;he++)Vt[he][re]=parseFloat(qt[he+1])||0}V||(I.current=Vt,z.current=Gt,h(0),s(!1))}catch(Et){V||(c(Et.message),s(!1))}}return dt(),()=>{V=!0}},[r]),ft.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`).then(V=>V.json()).then(V=>x(V.annotations||[])).catch(()=>{})},[r]),ft.useEffect(()=>{const V=O.current;if(!V||i||l)return;const dt=V.getContext("2d",{alpha:!1}),Et=Ut=>{if(Q.current&&H.current>0){const j=(Ut-H.current)/1e3*Rs*Y.current;let Te=T.current+j;Te>=z.current&&(Te=z.current-1,p(!1)),T.current=Te,h(Te)}H.current=Ut;const Dt=N.current,ie=V.getBoundingClientRect(),Gt=ie.width,Vt=ie.height,re=Math.round(Gt*Dt),qt=Math.round(Vt*Dt);(B.current.w!==re||B.current.h!==qt)&&(B.current={w:re,h:qt},V.width=re,V.height=qt,dt.setTransform(Dt,0,0,Dt,0,0)),F(dt,Gt,Vt),ht.current=requestAnimationFrame(Et)};return H.current=0,ht.current=requestAnimationFrame(Et),()=>cancelAnimationFrame(ht.current)},[i,l]);function F(V,dt,Et){const Ut=I.current;if(!Ut)return;V.fillStyle=fM,V.fillRect(0,0,dt,Et);const Dt=z.current,ie=T.current,Gt=tt.current*Rs,Vt=at.current,re=Math.floor(Gt/2);let qt=Math.floor(ie)-re,he=qt+Gt;qt<0&&(qt=0,he=Gt),he>Dt&&(he=Dt,qt=Math.max(0,Dt-Gt));const j=Et/Cc;for(let P=0;P<Cc;P++){const E=P*j,$=E+j/2,St=j/2;P>0&&(V.strokeStyle=lM,V.lineWidth=.5,V.beginPath(),V.moveTo(0,E),V.lineTo(dt,E),V.stroke()),V.strokeStyle=cM,V.lineWidth=.5,V.beginPath(),V.moveTo(0,$),V.lineTo(dt,$),V.stroke(),V.fillStyle="rgba(230,237,243,0.4)",V.font="10px monospace",V.fillText(`Ch ${P+1}`,4,E+12);const At=Ut[P],gt=he-qt;if(gt<2)continue;const Ft=gt>2e3?Math.floor(gt/2e3):1,Lt=dt/(gt-1),te=St*.85/Vt;V.strokeStyle=oM[P],V.lineWidth=1.2,V.lineJoin="round",V.beginPath();for(let ee=0;ee<gt;ee+=Ft){const Rt=ee*Lt,Ct=$-At[qt+ee]*te;ee===0?V.moveTo(Rt,Ct):V.lineTo(Rt,Ct)}V.stroke()}const Te=Math.floor(ie)>=qt&&Math.floor(ie)<=he?(Math.floor(ie)-qt)/(he-qt)*dt:dt/2;V.strokeStyle=uM,V.lineWidth=1.5,V.setLineDash([4,3]),V.beginPath(),V.moveTo(Te,0),V.lineTo(Te,Et),V.stroke(),V.setLineDash([]),V.fillStyle="rgba(230,237,243,0.3)",V.font="10px monospace";const me=qt/Rs,Ae=he/Rs,Wt=Math.min(10,Math.floor(dt/80));for(let P=0;P<=Wt;P++){const E=me+(Ae-me)*(P/Wt),$=P/Wt*dt;V.fillText(Z(E),$+2,Et-4)}}const X=ft.useCallback(async V=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:V})})}catch{}},[r]);function et(){if(!A.trim())return;const V=Math.floor(m)/Rs,dt={id:Date.now(),frame:Math.floor(m),time:V,text:A,timestamp:new Date().toISOString()},Et=[...v,dt];x(Et),X(Et),U(""),G(!1)}function xt(V){const dt=v.filter(Et=>Et.id!==V);x(dt),X(dt)}function Mt(V){h(V.frame),T.current=V.frame,p(!1)}function Z(V){const dt=Math.floor(V/60),Et=Math.floor(V%60),Ut=Math.floor(V%1*100);return`${String(dt).padStart(2,"0")}:${String(Et).padStart(2,"0")}.${String(Ut).padStart(2,"0")}`}return i?L.jsxs("div",{className:"sv-root sv-center",children:[L.jsx("p",{children:"Loading recording..."}),L.jsx("style",{children:zd})]}):l?L.jsxs("div",{className:"sv-root sv-center",children:[L.jsxs("p",{children:["Error: ",l]}),L.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),L.jsx("style",{children:zd})]}):L.jsxs("div",{className:"sv-root",children:[L.jsxs("header",{className:"sv-header",children:[L.jsxs("div",{className:"sv-title",children:[L.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),L.jsx("h2",{children:r}),L.jsxs("span",{className:"sv-meta",children:[k.toLocaleString()," frames · ",Z(nt)]})]}),L.jsxs("div",{className:"sv-controls",children:[L.jsx("button",{className:`sv-btn${d?" active":""}`,onClick:()=>{d||(H.current=0),p(!d)},children:d?"⏸ Pause":"▶ Play"}),L.jsx("button",{className:"sv-btn",onClick:()=>{h(0),T.current=0,p(!1)},children:"⏮ Rewind"}),L.jsxs("select",{value:_,onChange:V=>S(parseFloat(V.target.value)),className:"sv-select",children:[L.jsx("option",{value:.25,children:"0.25x"}),L.jsx("option",{value:.5,children:"0.5x"}),L.jsx("option",{value:1,children:"1x"}),L.jsx("option",{value:1.5,children:"1.5x"}),L.jsx("option",{value:2,children:"2x"}),L.jsx("option",{value:4,children:"4x"})]}),L.jsx("div",{className:"sv-sep"}),L.jsx("label",{className:"sv-label",children:"Window"}),L.jsx("select",{value:b,onChange:V=>R(parseInt(V.target.value)),className:"sv-select",children:hM.map(V=>L.jsx("option",{value:V.value,children:V.label},V.value))}),L.jsx("label",{className:"sv-label",children:"Scale"}),L.jsx("select",{value:g,onChange:V=>M(parseInt(V.target.value)),className:"sv-select",children:dM.map(V=>L.jsx("option",{value:V.value,children:V.label},V.value))})]})]}),L.jsxs("div",{className:"sv-timeline",children:[L.jsx("span",{className:"sv-time",children:Z(_t)}),L.jsx("input",{type:"range",min:"0",max:k-1,value:Math.floor(m),onChange:V=>{const dt=parseInt(V.target.value);h(dt),T.current=dt,p(!1),H.current=0},className:"sv-slider"}),L.jsx("span",{className:"sv-time",children:Z(nt)})]}),L.jsxs("div",{className:"sv-content",children:[L.jsx("div",{className:"sv-canvas-wrap",children:L.jsx("canvas",{ref:O,style:{display:"block",width:"100%",height:"100%"}})}),L.jsxs("div",{className:"sv-annotations",children:[L.jsxs("div",{className:"sv-anno-header",children:[L.jsx("h3",{children:"Annotations"}),L.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>G(!D),children:D?"Cancel":"+ Add"})]}),D&&L.jsxs("div",{className:"sv-anno-form",children:[L.jsx("textarea",{value:A,onChange:V=>U(V.target.value),placeholder:"Annotation at current position...",onKeyDown:V=>{V.key==="Enter"&&V.ctrlKey&&et()}}),L.jsx("button",{className:"sv-btn sv-btn-primary",onClick:et,children:"Add"})]}),L.jsx("div",{className:"sv-anno-list",children:v.length===0?L.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):v.map(V=>L.jsxs("div",{className:"sv-anno-item",onClick:()=>Mt(V),children:[L.jsx("span",{className:"sv-anno-time",children:Z(V.time)}),L.jsx("span",{className:"sv-anno-text",children:V.text}),L.jsx("button",{className:"sv-anno-del",onClick:dt=>{dt.stopPropagation(),xt(V.id)},children:"✕"})]},V.id))})]})]}),L.jsx("style",{children:zd})]})}const zd=`
  .sv-root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #0d1117;
    color: #e6edf3;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .sv-center {
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 14px;
    color: #8b949e;
  }

  .sv-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 1px solid #30363d;
    flex-wrap: wrap;
    gap: 10px;
  }
  .sv-title {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .sv-title h2 {
    margin: 0;
    font-size: 14px;
    font-family: monospace;
    color: #58a6ff;
  }
  .sv-meta {
    font-size: 11px;
    color: #8b949e;
    font-family: monospace;
  }
  .sv-controls {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .sv-sep {
    width: 1px;
    height: 20px;
    background: #30363d;
    margin: 0 4px;
  }
  .sv-label {
    font-size: 11px;
    color: #8b949e;
  }

  .sv-btn {
    padding: 6px 12px;
    background: #21262d;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.15s;
  }
  .sv-btn:hover { background: #30363d; }
  .sv-btn.active { background: #58a6ff; border-color: #58a6ff; color: #fff; }
  .sv-btn-sm { padding: 3px 8px; font-size: 11px; }
  .sv-btn-primary { background: #58a6ff; border-color: #58a6ff; color: #fff; }
  .sv-btn-primary:hover { opacity: 0.85; }

  .sv-select {
    padding: 5px 8px;
    background: #21262d;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    font-size: 12px;
  }

  .sv-timeline {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border-bottom: 1px solid #30363d;
  }
  .sv-time {
    font-size: 12px;
    font-family: monospace;
    color: #8b949e;
    min-width: 64px;
  }
  .sv-slider {
    flex: 1;
    height: 6px;
    border-radius: 3px;
    background: #30363d;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
  }
  .sv-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #58a6ff;
    cursor: pointer;
  }
  .sv-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #58a6ff;
    border: none;
    cursor: pointer;
  }

  .sv-content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  .sv-canvas-wrap {
    flex: 1;
    min-width: 0;
    position: relative;
  }

  .sv-annotations {
    width: 260px;
    border-left: 1px solid #30363d;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: hidden;
  }
  .sv-anno-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sv-anno-header h3 {
    margin: 0;
    font-size: 12px;
    color: #8b949e;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .sv-anno-form {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 8px;
  }
  .sv-anno-form textarea {
    width: 100%;
    padding: 6px 8px;
    background: #0d1117;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    font-size: 12px;
    font-family: inherit;
    resize: vertical;
    min-height: 50px;
  }
  .sv-anno-form textarea:focus {
    outline: none;
    border-color: #58a6ff;
  }
  .sv-anno-list {
    flex: 1;
    overflow-y: auto;
  }
  .sv-anno-empty {
    color: #8b949e;
    text-align: center;
    padding: 16px 0;
    font-size: 12px;
    margin: 0;
  }
  .sv-anno-item {
    display: flex;
    gap: 6px;
    padding: 8px;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 4px;
    margin-bottom: 6px;
    cursor: pointer;
    transition: border-color 0.15s;
    align-items: flex-start;
  }
  .sv-anno-item:hover { border-color: #58a6ff; }
  .sv-anno-time {
    color: #58a6ff;
    font-weight: 600;
    font-family: monospace;
    font-size: 10px;
    min-width: 52px;
    padding-top: 1px;
  }
  .sv-anno-text {
    flex: 1;
    font-size: 11px;
    line-height: 1.3;
    word-break: break-word;
  }
  .sv-anno-del {
    background: none;
    border: none;
    color: #f85149;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    opacity: 0.5;
    transition: opacity 0.15s;
  }
  .sv-anno-del:hover { opacity: 1; }

  @media (max-width: 900px) {
    .sv-annotations { width: 200px; }
  }
  @media (max-width: 640px) {
    .sv-content { flex-direction: column; }
    .sv-canvas-wrap { min-height: 300px; }
    .sv-annotations { width: 100%; border-left: none; border-top: 1px solid #30363d; max-height: 200px; }
  }
`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vp="183",mM=0,D_=1,gM=2,ru=1,_M=2,al=3,rs=0,Yn=1,Hi=2,Sa=0,kr=1,N_=2,U_=3,L_=4,vM=5,Ps=100,xM=101,SM=102,yM=103,MM=104,bM=200,EM=201,TM=202,AM=203,Mh=204,bh=205,RM=206,CM=207,wM=208,DM=209,NM=210,UM=211,LM=212,OM=213,PM=214,Eh=0,Th=1,Ah=2,Wr=3,Rh=4,Ch=5,wh=6,Dh=7,zv=0,FM=1,BM=2,Xi=0,Iv=1,Hv=2,Gv=3,xp=4,Vv=5,kv=6,Xv=7,Wv=300,Is=301,jr=302,Id=303,Hd=304,Su=306,Nh=1e3,xa=1001,Uh=1002,Tn=1003,zM=1004,wc=1005,Un=1006,Gd=1007,Bs=1008,oi=1009,jv=1010,qv=1011,ol=1012,Sp=1013,ji=1014,Vi=1015,Ma=1016,yp=1017,Mp=1018,ll=1020,Yv=35902,Zv=35899,Kv=1021,Qv=1022,Ni=1023,ba=1026,zs=1027,Jv=1028,bp=1029,qr=1030,Ep=1031,Tp=1033,ou=33776,lu=33777,cu=33778,uu=33779,Lh=35840,Oh=35841,Ph=35842,Fh=35843,Bh=36196,zh=37492,Ih=37496,Hh=37488,Gh=37489,Vh=37490,kh=37491,Xh=37808,Wh=37809,jh=37810,qh=37811,Yh=37812,Zh=37813,Kh=37814,Qh=37815,Jh=37816,$h=37817,tp=37818,ep=37819,np=37820,ip=37821,ap=36492,sp=36494,rp=36495,op=36283,lp=36284,cp=36285,up=36286,IM=3200,HM=0,GM=1,is="",vi="srgb",Yr="srgb-linear",hu="linear",Ve="srgb",br=7680,O_=519,VM=512,kM=513,XM=514,Ap=515,WM=516,jM=517,Rp=518,qM=519,fp=35044,P_="300 es",ki=2e3,cl=2001;function YM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function pu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ZM(){const r=pu("canvas");return r.style.display="block",r}const F_={};function mu(...r){const t="THREE."+r.shift();console.log(t,...r)}function $v(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function le(...r){r=$v(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=$v(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function gu(...r){const t=r.join(" ");t in F_||(F_[t]=!0,le(...r))}function KM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const QM={[Eh]:Th,[Ah]:wh,[Rh]:Dh,[Wr]:Ch,[Th]:Eh,[wh]:Ah,[Dh]:Rh,[Ch]:Wr};class Kr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=Math.PI/180,dp=180/Math.PI;function ss(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function De(r,t,i){return Math.max(t,Math.min(i,r))}function JM(r,t){return(r%t+t)%t}function kd(r,t,i){return(1-i)*r+i*t}function Gi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],_=s[l+2],S=s[l+3],g=c[d+0],M=c[d+1],b=c[d+2],R=c[d+3];if(S!==R||m!==g||h!==M||_!==b){let v=m*g+h*M+_*b+S*R;v<0&&(g=-g,M=-M,b=-b,R=-R,v=-v);let x=1-p;if(v<.9995){const A=Math.acos(v),U=Math.sin(A);x=Math.sin(x*A)/U,p=Math.sin(p*A)/U,m=m*x+g*p,h=h*x+M*p,_=_*x+b*p,S=S*x+R*p}else{m=m*x+g*p,h=h*x+M*p,_=_*x+b*p,S=S*x+R*p;const A=1/Math.sqrt(m*m+h*h+_*_+S*S);m*=A,h*=A,_*=A,S*=A}}t[i]=m,t[i+1]=h,t[i+2]=_,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],_=s[l+3],S=c[d],g=c[d+1],M=c[d+2],b=c[d+3];return t[i]=p*b+_*S+m*M-h*g,t[i+1]=m*b+_*g+h*S-p*M,t[i+2]=h*b+_*M+p*g-m*S,t[i+3]=_*b-p*S-m*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),_=p(l/2),S=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*_*S+h*M*b,this._y=h*M*S-g*_*b,this._z=h*_*b+g*M*S,this._w=h*_*S-g*M*b;break;case"YXZ":this._x=g*_*S+h*M*b,this._y=h*M*S-g*_*b,this._z=h*_*b-g*M*S,this._w=h*_*S+g*M*b;break;case"ZXY":this._x=g*_*S-h*M*b,this._y=h*M*S+g*_*b,this._z=h*_*b+g*M*S,this._w=h*_*S-g*M*b;break;case"ZYX":this._x=g*_*S-h*M*b,this._y=h*M*S+g*_*b,this._z=h*_*b-g*M*S,this._w=h*_*S+g*M*b;break;case"YZX":this._x=g*_*S+h*M*b,this._y=h*M*S+g*_*b,this._z=h*_*b-g*M*S,this._w=h*_*S-g*M*b;break;case"XZY":this._x=g*_*S-h*M*b,this._y=h*M*S-g*_*b,this._z=h*_*b+g*M*S,this._w=h*_*S+g*M*b;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],_=i[6],S=i[10],g=s+p+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>S){const M=2*Math.sqrt(1+s-p-S);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>S){const M=2*Math.sqrt(1+p-s-S);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+S-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=s*_+d*p+l*h-c*m,this._y=l*_+d*m+c*p-s*h,this._z=c*_+d*h+s*m-l*p,this._w=d*_-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,s=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(B_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(B_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),_=2*(p*i-c*l),S=2*(c*s-d*i);return this.x=i+m*h+d*S-p*_,this.y=s+m*_+p*h-c*S,this.z=l+m*S+c*_-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Xd.copy(this).projectOnVector(t),this.sub(Xd)}reflect(t){return this.sub(Xd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new rt,B_=new Qr;class xe{constructor(t,i,s,l,c,d,p,m,h){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],_=s[4],S=s[7],g=s[2],M=s[5],b=s[8],R=l[0],v=l[3],x=l[6],A=l[1],U=l[4],D=l[7],G=l[2],I=l[5],z=l[8];return c[0]=d*R+p*A+m*G,c[3]=d*v+p*U+m*I,c[6]=d*x+p*D+m*z,c[1]=h*R+_*A+S*G,c[4]=h*v+_*U+S*I,c[7]=h*x+_*D+S*z,c[2]=g*R+M*A+b*G,c[5]=g*v+M*U+b*I,c[8]=g*x+M*D+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8];return i*d*_-i*p*h-s*c*_+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8],S=_*d-p*h,g=p*m-_*c,M=h*c-d*m,b=i*S+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=S*R,t[1]=(l*h-_*s)*R,t[2]=(p*s-l*d)*R,t[3]=g*R,t[4]=(_*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=M*R,t[7]=(s*m-h*i)*R,t[8]=(d*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Wd.makeScale(t,i)),this}rotate(t){return this.premultiply(Wd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Wd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new xe,z_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $M(){const r={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ve&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===is?hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return gu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return gu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Yr]:{primaries:t,whitePoint:s,transfer:hu,toXYZ:z_,fromXYZ:I_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:z_,fromXYZ:I_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),r}const Le=$M();function ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class tb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=pu("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=pu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ya(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ya(i[s]/255)*255):i[s]=ya(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eb=0;class Cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(jd(l[d].image)):c.push(jd(l[d]))}else c=jd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function jd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let nb=0;const qd=new rt;class Ln extends Kr{constructor(t=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,s=xa,l=xa,c=Un,d=Bs,p=Ni,m=oi,h=Ln.DEFAULT_ANISOTROPY,_=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=ss(),this.name="",this.source=new Cp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nh:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nh:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Wv;Ln.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],_=m[4],S=m[8],g=m[1],M=m[5],b=m[9],R=m[2],v=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(S-R)<.01&&Math.abs(b-v)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+R)<.1&&Math.abs(b+v)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,D=(M+1)/2,G=(x+1)/2,I=(_+g)/4,z=(S+R)/4,T=(b+v)/4;return U>D&&U>G?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=z/s):D>G?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=I/l,c=T/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=z/c,l=T/c),this.set(s,l,c,i),this}let A=Math.sqrt((v-b)*(v-b)+(S-R)*(S-R)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(v-b)/A,this.y=(S-R)/A,this.z=(g-_)/A,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ib extends Kr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Ln(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Cp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends ib{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class tx extends Ln{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ab extends Ln{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,s,l,c,d,p,m,h,_,S,g,M,b,R,v){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,_,S,g,M,b,R,v)}set(t,i,s,l,c,d,p,m,h,_,S,g,M,b,R,v){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=_,x[10]=S,x[14]=g,x[3]=M,x[7]=b,x[11]=R,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Tr.setFromMatrixColumn(t,0).length(),c=1/Tr.setFromMatrixColumn(t,1).length(),d=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const g=d*_,M=d*S,b=p*_,R=p*S;i[0]=m*_,i[4]=-m*S,i[8]=h,i[1]=M+b*h,i[5]=g-R*h,i[9]=-p*m,i[2]=R-g*h,i[6]=b+M*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*_,M=m*S,b=h*_,R=h*S;i[0]=g+R*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*S,i[5]=d*_,i[9]=-p,i[2]=M*p-b,i[6]=R+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*_,M=m*S,b=h*_,R=h*S;i[0]=g-R*p,i[4]=-d*S,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*_,i[9]=R-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*_,M=d*S,b=p*_,R=p*S;i[0]=m*_,i[4]=b*h-M,i[8]=g*h+R,i[1]=m*S,i[5]=R*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,M=d*h,b=p*m,R=p*h;i[0]=m*_,i[4]=R-g*S,i[8]=b*S+M,i[1]=S,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=M*S+b,i[10]=g-R*S}else if(t.order==="XZY"){const g=d*m,M=d*h,b=p*m,R=p*h;i[0]=m*_,i[4]=-S,i[8]=h*_,i[1]=g*S+R,i[5]=d*_,i[9]=M*S-b,i[2]=b*S-M,i[6]=p*_,i[10]=R*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sb,t,rb)}lookAt(t,i,s){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Qa.crossVectors(s,ai),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Qa.crossVectors(s,ai)),Qa.normalize(),Dc.crossVectors(ai,Qa),l[0]=Qa.x,l[4]=Dc.x,l[8]=ai.x,l[1]=Qa.y,l[5]=Dc.y,l[9]=ai.y,l[2]=Qa.z,l[6]=Dc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],_=s[1],S=s[5],g=s[9],M=s[13],b=s[2],R=s[6],v=s[10],x=s[14],A=s[3],U=s[7],D=s[11],G=s[15],I=l[0],z=l[4],T=l[8],O=l[12],ht=l[1],H=l[5],Q=l[9],Y=l[13],at=l[2],tt=l[6],N=l[10],B=l[14],k=l[3],nt=l[7],_t=l[11],F=l[15];return c[0]=d*I+p*ht+m*at+h*k,c[4]=d*z+p*H+m*tt+h*nt,c[8]=d*T+p*Q+m*N+h*_t,c[12]=d*O+p*Y+m*B+h*F,c[1]=_*I+S*ht+g*at+M*k,c[5]=_*z+S*H+g*tt+M*nt,c[9]=_*T+S*Q+g*N+M*_t,c[13]=_*O+S*Y+g*B+M*F,c[2]=b*I+R*ht+v*at+x*k,c[6]=b*z+R*H+v*tt+x*nt,c[10]=b*T+R*Q+v*N+x*_t,c[14]=b*O+R*Y+v*B+x*F,c[3]=A*I+U*ht+D*at+G*k,c[7]=A*z+U*H+D*tt+G*nt,c[11]=A*T+U*Q+D*N+G*_t,c[15]=A*O+U*Y+D*B+G*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],_=t[2],S=t[6],g=t[10],M=t[14],b=t[3],R=t[7],v=t[11],x=t[15],A=m*M-h*g,U=p*M-h*S,D=p*g-m*S,G=d*M-h*_,I=d*g-m*_,z=d*S-p*_;return i*(R*A-v*U+x*D)-s*(b*A-v*G+x*I)+l*(b*U-R*G+x*z)-c*(b*D-R*I+v*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8],S=t[9],g=t[10],M=t[11],b=t[12],R=t[13],v=t[14],x=t[15],A=i*p-s*d,U=i*m-l*d,D=i*h-c*d,G=s*m-l*p,I=s*h-c*p,z=l*h-c*m,T=_*R-S*b,O=_*v-g*b,ht=_*x-M*b,H=S*v-g*R,Q=S*x-M*R,Y=g*x-M*v,at=A*Y-U*Q+D*H+G*ht-I*O+z*T;if(at===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/at;return t[0]=(p*Y-m*Q+h*H)*tt,t[1]=(l*Q-s*Y-c*H)*tt,t[2]=(R*z-v*I+x*G)*tt,t[3]=(g*I-S*z-M*G)*tt,t[4]=(m*ht-d*Y-h*O)*tt,t[5]=(i*Y-l*ht+c*O)*tt,t[6]=(v*D-b*z-x*U)*tt,t[7]=(_*z-g*D+M*U)*tt,t[8]=(d*Q-p*ht+h*T)*tt,t[9]=(s*ht-i*Q-c*T)*tt,t[10]=(b*I-R*D+x*A)*tt,t[11]=(S*D-_*I-M*A)*tt,t[12]=(p*O-d*H-m*T)*tt,t[13]=(i*H-s*O+l*T)*tt,t[14]=(R*U-b*G-v*A)*tt,t[15]=(_*G-S*U+g*A)*tt,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,_=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+s,_*m-l*d,0,h*m-l*p,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,_=d+d,S=p+p,g=c*h,M=c*_,b=c*S,R=d*_,v=d*S,x=p*S,A=m*h,U=m*_,D=m*S,G=s.x,I=s.y,z=s.z;return l[0]=(1-(R+x))*G,l[1]=(M+D)*G,l[2]=(b-U)*G,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(g+x))*I,l[6]=(v+A)*I,l[7]=0,l[8]=(b+U)*z,l[9]=(v-A)*z,l[10]=(1-(g+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Tr.set(l[0],l[1],l[2]).length();const p=Tr.set(l[4],l[5],l[6]).length(),m=Tr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ci.copy(this);const h=1/d,_=1/p,S=1/m;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=_,Ci.elements[5]*=_,Ci.elements[6]*=_,Ci.elements[8]*=S,Ci.elements[9]*=S,Ci.elements[10]*=S,i.setFromRotationMatrix(Ci),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=ki,m=!1){const h=this.elements,_=2*c/(i-t),S=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,R;if(m)b=c/(d-c),R=d*c/(d-c);else if(p===ki)b=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(p===cl)b=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=ki,m=!1){const h=this.elements,_=2/(i-t),S=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,R;if(m)b=1/(d-c),R=d/(d-c);else if(p===ki)b=-2/(d-c),R=-(d+c)/(d-c);else if(p===cl)b=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Tr=new rt,Ci=new Ke,sb=new rt(0,0,0),rb=new rt(1,1,1),Qa=new rt,Dc=new rt,ai=new rt,H_=new Ke,G_=new Qr;class Ea{constructor(t=0,i=0,s=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],_=l[9],S=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return H_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(H_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return G_.setFromEuler(this),this.setFromQuaternion(G_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class ex{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ob=0;const V_=new rt,Ar=new Qr,pa=new Ke,Nc=new rt,jo=new rt,lb=new rt,cb=new Qr,k_=new rt(1,0,0),X_=new rt(0,1,0),W_=new rt(0,0,1),j_={type:"added"},ub={type:"removed"},Rr={type:"childadded",child:null},Yd={type:"childremoved",child:null};class An extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new rt,i=new Ea,s=new Qr,l=new rt(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ex,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(k_,t)}rotateY(t){return this.rotateOnAxis(X_,t)}rotateZ(t){return this.rotateOnAxis(W_,t)}translateOnAxis(t,i){return V_.copy(t).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(k_,t)}translateY(t){return this.translateOnAxis(X_,t)}translateZ(t){return this.translateOnAxis(W_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Nc.copy(t):Nc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(jo,Nc,this.up):pa.lookAt(Nc,jo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(pa),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(j_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ub),Yd.child=t,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(j_),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,lb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,cb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const S=m[h];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),_=d(t.images),S=d(t.shapes),g=d(t.skeletons),M=d(t.animations),b=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new rt(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uc extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const R of t.hand.values()){const v=i.getJointPose(R,s),x=this._getHandJoint(h,R);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const _=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=_.position.distanceTo(S.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Uc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Kd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=JM(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Kd(d,c,t+1/3),this.g=Kd(d,c,t),this.b=Kd(d,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=vi){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=vi){const s=nx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vi){return Le.workingToColorSpace(wn.copy(this),t),Math.round(De(wn.r*255,0,255))*65536+Math.round(De(wn.g*255,0,255))*256+Math.round(De(wn.b*255,0,255))}getHexString(t=vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const _=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=_<=.5?S/(d+p):S/(2-d-p),d){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=h,t.l=_,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=vi){Le.workingToColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,l=wn.b;return t!==vi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(Lc);const s=kd(Ja.h,Lc.h,i),l=kd(Ja.s,Lc.s,i),c=kd(Ja.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new ye;ye.NAMES=nx;class wp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new wp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class db extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new rt,ma=new rt,Qd=new rt,ga=new rt,Cr=new rt,wr=new rt,q_=new rt,Jd=new rt,$d=new rt,th=new rt,eh=new nn,nh=new nn,ih=new nn;class xi{constructor(t=new rt,i=new rt,s=new rt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),wi.subVectors(t,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){wi.subVectors(l,i),ma.subVectors(s,i),Qd.subVectors(t,i);const d=wi.dot(wi),p=wi.dot(ma),m=wi.dot(Qd),h=ma.dot(ma),_=ma.dot(Qd),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,M=(h*m-p*_)*g,b=(d*_-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(d,ga.y),m.addScaledVector(p,ga.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,i),nh.fromBufferAttribute(t,s),ih.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(eh,c.x),d.addScaledVector(nh,c.y),d.addScaledVector(ih,c.z),d}static isFrontFacing(t,i,s,l){return wi.subVectors(s,i),ma.subVectors(t,i),wi.cross(ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),wi.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return xi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;Cr.subVectors(l,s),wr.subVectors(c,s),Jd.subVectors(t,s);const m=Cr.dot(Jd),h=wr.dot(Jd);if(m<=0&&h<=0)return i.copy(s);$d.subVectors(t,l);const _=Cr.dot($d),S=wr.dot($d);if(_>=0&&S<=_)return i.copy(l);const g=m*S-_*h;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(Cr,d);th.subVectors(t,c);const M=Cr.dot(th),b=wr.dot(th);if(b>=0&&M<=b)return i.copy(c);const R=M*h-m*b;if(R<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(wr,p);const v=_*b-M*S;if(v<=0&&S-_>=0&&M-b>=0)return q_.subVectors(c,l),p=(S-_)/(S-_+(M-b)),i.copy(l).addScaledVector(q_,p);const x=1/(v+R+g);return d=R*x,p=g*x,i.copy(s).addScaledVector(Cr,d).addScaledVector(wr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fl{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Oc.copy(s.boundingBox)),Oc.applyMatrix4(t.matrixWorld),this.union(Oc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Pc.subVectors(this.max,qo),Dr.subVectors(t.a,qo),Nr.subVectors(t.b,qo),Ur.subVectors(t.c,qo),$a.subVectors(Nr,Dr),ts.subVectors(Ur,Nr),Cs.subVectors(Dr,Ur);let i=[0,-$a.z,$a.y,0,-ts.z,ts.y,0,-Cs.z,Cs.y,$a.z,0,-$a.x,ts.z,0,-ts.x,Cs.z,0,-Cs.x,-$a.y,$a.x,0,-ts.y,ts.x,0,-Cs.y,Cs.x,0];return!ah(i,Dr,Nr,Ur,Pc)||(i=[1,0,0,0,1,0,0,0,1],!ah(i,Dr,Nr,Ur,Pc))?!1:(Fc.crossVectors($a,ts),i=[Fc.x,Fc.y,Fc.z],ah(i,Dr,Nr,Ur,Pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_a),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _a=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Di=new rt,Oc=new fl,Dr=new rt,Nr=new rt,Ur=new rt,$a=new rt,ts=new rt,Cs=new rt,qo=new rt,Pc=new rt,Fc=new rt,ws=new rt;function ah(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){ws.fromArray(r,c);const p=l.x*Math.abs(ws.x)+l.y*Math.abs(ws.y)+l.z*Math.abs(ws.z),m=t.dot(ws),h=i.dot(ws),_=s.dot(ws);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const hn=new rt,Bc=new Ee;let hb=0;class Nn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=fp,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(t),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=je(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Gi(i,this.array)),i}setX(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Gi(i,this.array)),i}setY(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Gi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Gi(i,this.array)),i}setW(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),c=je(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fp&&(t.usage=this.usage),t}}class ix extends Nn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ax extends Nn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class li extends Nn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const pb=new fl,Yo=new rt,sh=new rt;class dl{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):pb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(sh)),this.expandByPoint(Yo.copy(t.center).sub(sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mb=0;const _i=new Ke,rh=new An,Lr=new rt,si=new fl,Zo=new fl,Sn=new rt;class On extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(YM(t)?ax:ix)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,s){return _i.makeTranslation(t,i,s),this.applyMatrix4(_i),this}scale(t,i,s){return _i.makeScale(t,i,s),this.applyMatrix4(_i),this}lookAt(t){return rh.lookAt(t),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new li(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Zo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(si.min,Zo.min),si.expandByPoint(Sn),Sn.addVectors(si.max,Zo.max),si.expandByPoint(Sn)):(si.expandByPoint(Zo.min),si.expandByPoint(Zo.max))}si.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)Sn.fromBufferAttribute(p,h),m&&(Lr.fromBufferAttribute(t,h),Sn.add(Lr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new rt,m[T]=new rt;const h=new rt,_=new rt,S=new rt,g=new Ee,M=new Ee,b=new Ee,R=new rt,v=new rt;function x(T,O,ht){h.fromBufferAttribute(s,T),_.fromBufferAttribute(s,O),S.fromBufferAttribute(s,ht),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,O),b.fromBufferAttribute(c,ht),_.sub(h),S.sub(h),M.sub(g),b.sub(g);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(S,-M.y).multiplyScalar(H),v.copy(S).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(H),p[T].add(R),p[O].add(R),p[ht].add(R),m[T].add(v),m[O].add(v),m[ht].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,O=A.length;T<O;++T){const ht=A[T],H=ht.start,Q=ht.count;for(let Y=H,at=H+Q;Y<at;Y+=3)x(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const U=new rt,D=new rt,G=new rt,I=new rt;function z(T){G.fromBufferAttribute(l,T),I.copy(G);const O=p[T];U.copy(O),U.sub(G.multiplyScalar(G.dot(O))).normalize(),D.crossVectors(I,O);const H=D.dot(m[T])<0?-1:1;d.setXYZW(T,U.x,U.y,U.z,H)}for(let T=0,O=A.length;T<O;++T){const ht=A[T],H=ht.start,Q=ht.count;for(let Y=H,at=H+Q;Y<at;Y+=3)z(t.getX(Y+0)),z(t.getX(Y+1)),z(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Nn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new rt,c=new rt,d=new rt,p=new rt,m=new rt,h=new rt,_=new rt,S=new rt;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),R=t.getX(g+1),v=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,v),_.subVectors(d,c),S.subVectors(l,c),_.cross(S),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),h.fromBufferAttribute(s,v),p.add(_),m.add(_),h.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(v,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,c),S.subVectors(l,c),_.cross(S),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(p,m){const h=p.array,_=p.itemSize,S=p.normalized,g=new h.constructor(m.length*_);let M=0,b=0;for(let R=0,v=m.length;R<v;R++){p.isInterleavedBufferAttribute?M=m[R]*p.data.stride+p.offset:M=m[R]*_;for(let x=0;x<_;x++)g[b++]=h[M++]}return new Nn(g,_,S)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new On,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,S=h.length;_<S;_++){const g=h[_],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let S=0,g=h.length;S<g;S++){const M=h[S];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=t.morphAttributes;for(const h in c){const _=[],S=c[h];for(let g=0,M=S.length;g<M;g++)_.push(S[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,_=d.length;h<_;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gb{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=fp,this.updateRanges=[],this.version=0,this.uuid=ss()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ss()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ss()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new rt;class _u{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.applyMatrix4(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.applyNormalMatrix(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Hn.fromBufferAttribute(this,i),Hn.transformDirection(t),this.setXYZ(i,Hn.x,Hn.y,Hn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Gi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=je(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Gi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Gi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Gi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Gi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),c=je(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){mu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Nn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _u(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let _b=0;class Hs extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=kr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=bh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Mh&&(s.blendSrc=this.blendSrc),this.blendDst!==bh&&(s.blendDst=this.blendDst),this.blendEquation!==Ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(s.stencilFail=this.stencilFail),this.stencilZFail!==br&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sx extends Hs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Or;const Ko=new rt,Pr=new rt,Fr=new rt,Br=new Ee,Qo=new Ee,rx=new Ke,zc=new rt,Jo=new rt,Ic=new rt,Y_=new Ee,oh=new Ee,Z_=new Ee;class vb extends An{constructor(t=new sx){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new On;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new gb(i,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new _u(s,3,0,!1)),Or.setAttribute("uv",new _u(s,2,3,!1))}this.geometry=Or,this.material=t,this.center=new Ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pr.setFromMatrixScale(this.matrixWorld),rx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pr.multiplyScalar(-Fr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Hc(zc.set(-.5,-.5,0),Fr,d,Pr,l,c),Hc(Jo.set(.5,-.5,0),Fr,d,Pr,l,c),Hc(Ic.set(.5,.5,0),Fr,d,Pr,l,c),Y_.set(0,0),oh.set(1,0),Z_.set(1,1);let p=t.ray.intersectTriangle(zc,Jo,Ic,!1,Ko);if(p===null&&(Hc(Jo.set(-.5,.5,0),Fr,d,Pr,l,c),oh.set(0,1),p=t.ray.intersectTriangle(zc,Ic,Jo,!1,Ko),p===null))return;const m=t.ray.origin.distanceTo(Ko);m<t.near||m>t.far||i.push({distance:m,point:Ko.clone(),uv:xi.getInterpolation(Ko,zc,Jo,Ic,Y_,oh,Z_,new Ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hc(r,t,i,s,l,c){Br.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(Qo.x=c*Br.x-l*Br.y,Qo.y=l*Br.x+c*Br.y):Qo.copy(Br),r.copy(t),r.x+=Qo.x,r.y+=Qo.y,r.applyMatrix4(rx)}const va=new rt,lh=new rt,Gc=new rt,es=new rt,ch=new rt,Vc=new rt,uh=new rt;class Dp{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,va)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=va.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lh.copy(t).add(i).multiplyScalar(.5),Gc.copy(i).sub(t).normalize(),es.copy(this.origin).sub(lh);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Gc),p=es.dot(this.direction),m=-es.dot(Gc),h=es.lengthSq(),_=Math.abs(1-d*d);let S,g,M,b;if(_>0)if(S=d*m-p,g=d*p-m,b=c*_,S>=0)if(g>=-b)if(g<=b){const R=1/_;S*=R,g*=R,M=S*(S+d*g+2*p)+g*(d*S+g+2*m)+h}else g=c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;else g=-c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;else g<=-b?(S=Math.max(0,-(-d*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+h):g<=b?(S=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(S=Math.max(0,-(d*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+h);else g=d>0?-c:c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(lh).addScaledVector(Gc,g),M}intersectSphere(t,i){va.subVectors(t.center,this.origin);const s=va.dot(this.direction),l=va.dot(va)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),_>=0?(c=(t.min.y-g.y)*_,d=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,d=(t.min.y-g.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(p=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,va)!==null}intersectTriangle(t,i,s,l,c){ch.subVectors(i,t),Vc.subVectors(s,t),uh.crossVectors(ch,Vc);let d=this.direction.dot(uh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;es.subVectors(this.origin,t);const m=p*this.direction.dot(Vc.crossVectors(es,Vc));if(m<0)return null;const h=p*this.direction.dot(ch.cross(es));if(h<0||m+h>d)return null;const _=-p*es.dot(uh);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Np extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const K_=new Ke,Ds=new Dp,kc=new dl,Q_=new rt,Xc=new rt,Wc=new rt,jc=new rt,fh=new rt,qc=new rt,J_=new rt,Yc=new rt;class qi extends An{constructor(t=new On,i=new Np){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],S=c[m];_!==0&&(fh.fromBufferAttribute(S,t),d?qc.addScaledVector(fh,_):qc.addScaledVector(fh.sub(i),_))}i.add(qc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(c),Ds.copy(t.ray).recast(t.near),!(kc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(kc,Q_)===null||Ds.origin.distanceToSquared(Q_)>(t.far-t.near)**2))&&(K_.copy(c).invert(),Ds.copy(t.ray).applyMatrix4(K_),!(s.boundingBox!==null&&Ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,R=g.length;b<R;b++){const v=g[b],x=d[v.materialIndex],A=Math.max(v.start,M.start),U=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let D=A,G=U;D<G;D+=3){const I=p.getX(D),z=p.getX(D+1),T=p.getX(D+2);l=Zc(this,x,t,s,h,_,S,I,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=b,x=R;v<x;v+=3){const A=p.getX(v),U=p.getX(v+1),D=p.getX(v+2);l=Zc(this,d,t,s,h,_,S,A,U,D),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,R=g.length;b<R;b++){const v=g[b],x=d[v.materialIndex],A=Math.max(v.start,M.start),U=Math.min(m.count,Math.min(v.start+v.count,M.start+M.count));for(let D=A,G=U;D<G;D+=3){const I=D,z=D+1,T=D+2;l=Zc(this,x,t,s,h,_,S,I,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let v=b,x=R;v<x;v+=3){const A=v,U=v+1,D=v+2;l=Zc(this,d,t,s,h,_,S,A,U,D),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function xb(r,t,i,s,l,c,d,p){let m;if(t.side===Yn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===rs,p),m===null)return null;Yc.copy(p),Yc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Yc);return h<i.near||h>i.far?null:{distance:h,point:Yc.clone(),object:r}}function Zc(r,t,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Xc),r.getVertexPosition(m,Wc),r.getVertexPosition(h,jc);const _=xb(r,t,i,s,Xc,Wc,jc,J_);if(_){const S=new rt;xi.getBarycoord(J_,Xc,Wc,jc,S),l&&(_.uv=xi.getInterpolatedAttribute(l,p,m,h,S,new Ee)),c&&(_.uv1=xi.getInterpolatedAttribute(c,p,m,h,S,new Ee)),d&&(_.normal=xi.getInterpolatedAttribute(d,p,m,h,S,new rt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new rt,materialIndex:0};xi.getNormal(Xc,Wc,jc,g.normal),_.face=g,_.barycoord=S}return _}class Sb extends Ln{constructor(t=null,i=1,s=1,l,c,d,p,m,h=Tn,_=Tn,S,g){super(null,d,p,m,h,_,l,c,S,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dh=new rt,yb=new rt,Mb=new xe;class Os{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=dh.subVectors(s,i).cross(yb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(dh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Mb.getNormalMatrix(t),l=this.coplanarPoint(dh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new dl,bb=new Ee(.5,.5),Kc=new rt;class Up{constructor(t=new Os,i=new Os,s=new Os,l=new Os,c=new Os,d=new Os){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],_=c[4],S=c[5],g=c[6],M=c[7],b=c[8],R=c[9],v=c[10],x=c[11],A=c[12],U=c[13],D=c[14],G=c[15];if(l[0].setComponents(h-d,M-_,x-b,G-A).normalize(),l[1].setComponents(h+d,M+_,x+b,G+A).normalize(),l[2].setComponents(h+p,M+S,x+R,G+U).normalize(),l[3].setComponents(h-p,M-S,x-R,G-U).normalize(),s)l[4].setComponents(m,g,v,D).normalize(),l[5].setComponents(h-m,M-g,x-v,G-D).normalize();else if(l[4].setComponents(h-m,M-g,x-v,G-D).normalize(),i===ki)l[5].setComponents(h+m,M+g,x+v,G+D).normalize();else if(i===cl)l[5].setComponents(m,g,v,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);const i=bb.distanceTo(t.center);return Ns.radius=.7071067811865476+i,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Kc.x=l.normal.x>0?t.max.x:t.min.x,Kc.y=l.normal.y>0?t.max.y:t.min.y,Kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lp extends Hs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vu=new rt,xu=new rt,$_=new Ke,$o=new Dp,Qc=new dl,hh=new rt,tv=new rt;class ox extends An{constructor(t=new On,i=new Lp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)vu.fromBufferAttribute(i,l-1),xu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=vu.distanceTo(xu);t.setAttribute("lineDistance",new li(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Qc.copy(s.boundingSphere),Qc.applyMatrix4(l),Qc.radius+=c,t.ray.intersectsSphere(Qc)===!1)return;$_.copy(l).invert(),$o.copy(t.ray).applyMatrix4($_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const M=Math.max(0,d.start),b=Math.min(_.count,d.start+d.count);for(let R=M,v=b-1;R<v;R+=h){const x=_.getX(R),A=_.getX(R+1),U=Jc(this,t,$o,m,x,A,R);U&&i.push(U)}if(this.isLineLoop){const R=_.getX(b-1),v=_.getX(M),x=Jc(this,t,$o,m,R,v,b-1);x&&i.push(x)}}else{const M=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let R=M,v=b-1;R<v;R+=h){const x=Jc(this,t,$o,m,R,R+1,R);x&&i.push(x)}if(this.isLineLoop){const R=Jc(this,t,$o,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Jc(r,t,i,s,l,c,d){const p=r.geometry.attributes.position;if(vu.fromBufferAttribute(p,l),xu.fromBufferAttribute(p,c),i.distanceSqToSegment(vu,xu,hh,tv)>s)return;hh.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(hh);if(!(h<t.near||h>t.far))return{distance:h,point:tv.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const ev=new rt,nv=new rt;class Eb extends ox{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)ev.fromBufferAttribute(i,l),nv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+ev.distanceTo(nv);t.setAttribute("lineDistance",new li(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hp extends Hs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const iv=new Ke,pp=new Dp,$c=new dl,tu=new rt;class av extends An{constructor(t=new On,i=new hp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,t.ray.intersectsSphere($c)===!1)return;iv.copy(l).invert(),pp.copy(t.ray).applyMatrix4(iv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,S=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let b=g,R=M;b<R;b++){const v=h.getX(b);tu.fromBufferAttribute(S,v),sv(tu,v,m,l,t,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(S.count,d.start+d.count);for(let b=g,R=M;b<R;b++)tu.fromBufferAttribute(S,b),sv(tu,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function sv(r,t,i,s,l,c,d){const p=pp.distanceSqToPoint(r);if(p<i){const m=new rt;pp.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class lx extends Ln{constructor(t=[],i=Is,s,l,c,d,p,m,h,_){super(t,i,s,l,c,d,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tb extends Ln{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ul extends Ln{constructor(t,i,s=ji,l,c,d,p=Tn,m=Tn,h,_=ba,S=1){if(_!==ba&&_!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:S};super(g,l,c,d,p,m,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ab extends ul{constructor(t,i=ji,s=Is,l,c,d=Tn,p=Tn,m,h=ba){const _={width:t,height:t,depth:1},S=[_,_,_,_,_,_];super(t,t,i,s,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cx extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hl extends On{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],_=[],S=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new li(h,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(S,2));function b(R,v,x,A,U,D,G,I,z,T,O){const ht=D/z,H=G/T,Q=D/2,Y=G/2,at=I/2,tt=z+1,N=T+1;let B=0,k=0;const nt=new rt;for(let _t=0;_t<N;_t++){const F=_t*H-Y;for(let X=0;X<tt;X++){const et=X*ht-Q;nt[R]=et*A,nt[v]=F*U,nt[x]=at,h.push(nt.x,nt.y,nt.z),nt[R]=0,nt[v]=0,nt[x]=I>0?1:-1,_.push(nt.x,nt.y,nt.z),S.push(X/z),S.push(1-_t/T),B+=1}}for(let _t=0;_t<T;_t++)for(let F=0;F<z;F++){const X=g+F+tt*_t,et=g+F+tt*(_t+1),xt=g+(F+1)+tt*(_t+1),Mt=g+(F+1)+tt*_t;m.push(X,et,Mt),m.push(et,xt,Mt),k+=6}p.addGroup(M,k,O),M+=k,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class pl extends On{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,_=m+1,S=t/p,g=i/m,M=[],b=[],R=[],v=[];for(let x=0;x<_;x++){const A=x*g-d;for(let U=0;U<h;U++){const D=U*S-c;b.push(D,-A,0),R.push(0,0,1),v.push(U/p),v.push(1-x/m)}}for(let x=0;x<m;x++)for(let A=0;A<p;A++){const U=A+h*x,D=A+h*(x+1),G=A+1+h*(x+1),I=A+1+h*x;M.push(U,D,I),M.push(D,G,I)}this.setIndex(M),this.setAttribute("position",new li(b,3)),this.setAttribute("normal",new li(R,3)),this.setAttribute("uv",new li(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.widthSegments,t.heightSegments)}}function Zr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)t[l]=s[l]}return t}function Rb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ux(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Cb={clone:Zr,merge:Gn};var wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wb,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=Rb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Nb extends Yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ub extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lb extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fx extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ph=new Ke,rv=new rt,ov=new rt;class Ob{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;rv.setFromMatrixPosition(t.matrixWorld),i.position.copy(rv),ov.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ov),i.updateMatrixWorld(),ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===cl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const eu=new rt,nu=new Qr,Bi=new rt;class dx extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(eu,nu,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,nu,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(eu,nu,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,nu,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new rt,lv=new Ee,cv=new Ee;class ri extends dx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=dp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dp*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,i){return this.getViewBounds(t,lv,cv),i.subVectors(cv,lv)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Vd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Pb extends Ob{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0}}class Fb extends fx{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Pb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class hx extends dx{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Bb extends fx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const zr=-90,Ir=1;class zb extends An{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(zr,Ir,t,i);l.layers=this.layers,this.add(l);const c=new ri(zr,Ir,t,i);c.layers=this.layers,this.add(c);const d=new ri(zr,Ir,t,i);d.layers=this.layers,this.add(d);const p=new ri(zr,Ir,t,i);p.layers=this.layers,this.add(p);const m=new ri(zr,Ir,t,i);m.layers=this.layers,this.add(m);const h=new ri(zr,Ir,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===cl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,_]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(S,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Ib extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,le("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class Gb extends Eb{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const c=i/2,d=t/i,p=t/2,m=[],h=[];for(let g=0,M=0,b=-p;g<=i;g++,b+=d){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const R=g===c?s:l;R.toArray(h,M),M+=3,R.toArray(h,M),M+=3,R.toArray(h,M),M+=3,R.toArray(h,M),M+=3}const _=new On;_.setAttribute("position",new li(m,3)),_.setAttribute("color",new li(h,3));const S=new Lp({vertexColors:!0,toneMapped:!1});super(_,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function uv(r,t,i,s){const l=Vb(s);switch(i){case Kv:return r*t;case Jv:return r*t/l.components*l.byteLength;case bp:return r*t/l.components*l.byteLength;case qr:return r*t*2/l.components*l.byteLength;case Ep:return r*t*2/l.components*l.byteLength;case Qv:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case Tp:return r*t*4/l.components*l.byteLength;case ou:case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cu:case uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Oh:case Fh:return Math.max(r,16)*Math.max(t,8)/4;case Lh:case Ph:return Math.max(r,8)*Math.max(t,8)/2;case Bh:case zh:case Hh:case Gh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ih:case Vh:case kh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case jh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case qh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case tp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case np:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ip:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ap:case sp:case rp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case op:case lp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case cp:case up:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Vb(r){switch(r){case oi:case jv:return{byteLength:1,components:1};case ol:case qv:case Ma:return{byteLength:2,components:1};case yp:case Mp:return{byteLength:2,components:4};case ji:case Sp:case Vi:return{byteLength:4,components:1};case Yv:case Zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vp}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function px(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function kb(r){const t=new WeakMap;function i(p,m){const h=p.array,_=p.usage,S=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,_),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const _=m.array,S=m.updateRanges;if(r.bindBuffer(h,p),S.length===0)r.bufferSubData(h,0,_);else{S.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<S.length;M++){const b=S[g],R=S[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++g,S[g]=R)}S.length=g+1;for(let M=0,b=S.length;M<b;M++){const R=S[M];r.bufferSubData(h,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",yE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$E=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:Xb,alphahash_pars_fragment:Wb,alphamap_fragment:jb,alphamap_pars_fragment:qb,alphatest_fragment:Yb,alphatest_pars_fragment:Zb,aomap_fragment:Kb,aomap_pars_fragment:Qb,batching_pars_vertex:Jb,batching_vertex:$b,begin_vertex:tE,beginnormal_vertex:eE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:aE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:dE,common:hE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:xE,colorspace_fragment:SE,colorspace_pars_fragment:yE,envmap_fragment:ME,envmap_common_pars_fragment:bE,envmap_pars_fragment:EE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:FE,envmap_vertex:AE,fog_vertex:RE,fog_pars_vertex:CE,fog_fragment:wE,fog_pars_fragment:DE,gradientmap_pars_fragment:NE,lightmap_pars_fragment:UE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:OE,lights_pars_begin:PE,lights_toon_fragment:BE,lights_toon_pars_fragment:zE,lights_phong_fragment:IE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:VE,lights_fragment_begin:kE,lights_fragment_maps:XE,lights_fragment_end:WE,logdepthbuf_fragment:jE,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:ZE,map_fragment:KE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:$E,metalnessmap_fragment:t1,metalnessmap_pars_fragment:e1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:a1,morphtarget_pars_vertex:s1,morphtarget_vertex:r1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:f1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:_1,packing:v1,premultiplied_alpha_fragment:x1,project_vertex:S1,dithering_fragment:y1,dithering_pars_fragment:M1,roughnessmap_fragment:b1,roughnessmap_pars_fragment:E1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:A1,shadowmap_vertex:R1,shadowmask_pars_fragment:C1,skinbase_vertex:w1,skinning_pars_vertex:D1,skinning_vertex:N1,skinnormal_vertex:U1,specularmap_fragment:L1,specularmap_pars_fragment:O1,tonemapping_fragment:P1,tonemapping_pars_fragment:F1,transmission_fragment:B1,transmission_pars_fragment:z1,uv_pars_fragment:I1,uv_pars_vertex:H1,uv_vertex:G1,worldpos_vertex:V1,background_vert:k1,background_frag:X1,backgroundCube_vert:W1,backgroundCube_frag:j1,cube_vert:q1,cube_frag:Y1,depth_vert:Z1,depth_frag:K1,distance_vert:Q1,distance_frag:J1,equirect_vert:$1,equirect_frag:tT,linedashed_vert:eT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:aT,meshlambert_vert:sT,meshlambert_frag:rT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:dT,meshphysical_vert:hT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:xT,shadow_frag:ST,sprite_vert:yT,sprite_frag:MT},It={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Ii={basic:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Gn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Gn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Gn([It.points,It.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Gn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Gn([It.common,It.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Gn([It.sprite,It.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Gn([It.common,It.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Gn([It.lights,It.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Ii.physical={uniforms:Gn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const iu={r:0,b:0,g:0},Us=new Ea,bT=new Ke;function ET(r,t,i,s,l,c){const d=new ye(0);let p=l===!0?0:1,m,h,_=null,S=0,g=null;function M(A){let U=A.isScene===!0?A.background:null;if(U&&U.isTexture){const D=A.backgroundBlurriness>0;U=t.get(U,D)}return U}function b(A){let U=!1;const D=M(A);D===null?v(d,p):D&&D.isColor&&(v(D,1),U=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(A,U){const D=M(U);D&&(D.isCubeTexture||D.mapping===Su)?(h===void 0&&(h=new qi(new hl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Zr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Us.copy(U.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bT.makeRotationFromEuler(Us)),h.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,(_!==D||S!==D.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,_=D,S=D.version,g=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new qi(new pl(2,2),new Yi({name:"BackgroundMaterial",uniforms:Zr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||S!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,S=D.version,g=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function v(A,U){A.getRGB(iu,ux(r)),i.buffers.color.setClear(iu.r,iu.g,iu.b,U,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,U=1){d.set(A),p=U,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,v(d,p)},render:b,addToRenderList:R,dispose:x}}function TT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(H,Q,Y,at,tt){let N=!1;const B=S(H,at,Y,Q);c!==B&&(c=B,h(c.object)),N=M(H,at,Y,tt),N&&b(H,at,Y,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(N||d)&&(d=!1,D(H,Q,Y,at),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function _(H){return r.deleteVertexArray(H)}function S(H,Q,Y,at){const tt=at.wireframe===!0;let N=s[Q.id];N===void 0&&(N={},s[Q.id]=N);const B=H.isInstancedMesh===!0?H.id:0;let k=N[B];k===void 0&&(k={},N[B]=k);let nt=k[Y.id];nt===void 0&&(nt={},k[Y.id]=nt);let _t=nt[tt];return _t===void 0&&(_t=g(m()),nt[tt]=_t),_t}function g(H){const Q=[],Y=[],at=[];for(let tt=0;tt<i;tt++)Q[tt]=0,Y[tt]=0,at[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:Y,attributeDivisors:at,object:H,attributes:{},index:null}}function M(H,Q,Y,at){const tt=c.attributes,N=Q.attributes;let B=0;const k=Y.getAttributes();for(const nt in k)if(k[nt].location>=0){const F=tt[nt];let X=N[nt];if(X===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(X=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(X=H.instanceColor)),F===void 0||F.attribute!==X||X&&F.data!==X.data)return!0;B++}return c.attributesNum!==B||c.index!==at}function b(H,Q,Y,at){const tt={},N=Q.attributes;let B=0;const k=Y.getAttributes();for(const nt in k)if(k[nt].location>=0){let F=N[nt];F===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(F=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(F=H.instanceColor));const X={};X.attribute=F,F&&F.data&&(X.data=F.data),tt[nt]=X,B++}c.attributes=tt,c.attributesNum=B,c.index=at}function R(){const H=c.newAttributes;for(let Q=0,Y=H.length;Q<Y;Q++)H[Q]=0}function v(H){x(H,0)}function x(H,Q){const Y=c.newAttributes,at=c.enabledAttributes,tt=c.attributeDivisors;Y[H]=1,at[H]===0&&(r.enableVertexAttribArray(H),at[H]=1),tt[H]!==Q&&(r.vertexAttribDivisor(H,Q),tt[H]=Q)}function A(){const H=c.newAttributes,Q=c.enabledAttributes;for(let Y=0,at=Q.length;Y<at;Y++)Q[Y]!==H[Y]&&(r.disableVertexAttribArray(Y),Q[Y]=0)}function U(H,Q,Y,at,tt,N,B){B===!0?r.vertexAttribIPointer(H,Q,Y,tt,N):r.vertexAttribPointer(H,Q,Y,at,tt,N)}function D(H,Q,Y,at){R();const tt=at.attributes,N=Y.getAttributes(),B=Q.defaultAttributeValues;for(const k in N){const nt=N[k];if(nt.location>=0){let _t=tt[k];if(_t===void 0&&(k==="instanceMatrix"&&H.instanceMatrix&&(_t=H.instanceMatrix),k==="instanceColor"&&H.instanceColor&&(_t=H.instanceColor)),_t!==void 0){const F=_t.normalized,X=_t.itemSize,et=t.get(_t);if(et===void 0)continue;const xt=et.buffer,Mt=et.type,Z=et.bytesPerElement,V=Mt===r.INT||Mt===r.UNSIGNED_INT||_t.gpuType===Sp;if(_t.isInterleavedBufferAttribute){const dt=_t.data,Et=dt.stride,Ut=_t.offset;if(dt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<nt.locationSize;Dt++)x(nt.location+Dt,dt.meshPerAttribute);H.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Dt=0;Dt<nt.locationSize;Dt++)v(nt.location+Dt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let Dt=0;Dt<nt.locationSize;Dt++)U(nt.location+Dt,X/nt.locationSize,Mt,F,Et*Z,(Ut+X/nt.locationSize*Dt)*Z,V)}else{if(_t.isInstancedBufferAttribute){for(let dt=0;dt<nt.locationSize;dt++)x(nt.location+dt,_t.meshPerAttribute);H.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let dt=0;dt<nt.locationSize;dt++)v(nt.location+dt);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let dt=0;dt<nt.locationSize;dt++)U(nt.location+dt,X/nt.locationSize,Mt,F,X*Z,X/nt.locationSize*dt*Z,V)}}else if(B!==void 0){const F=B[k];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(nt.location,F);break;case 3:r.vertexAttrib3fv(nt.location,F);break;case 4:r.vertexAttrib4fv(nt.location,F);break;default:r.vertexAttrib1fv(nt.location,F)}}}}A()}function G(){O();for(const H in s){const Q=s[H];for(const Y in Q){const at=Q[Y];for(const tt in at){const N=at[tt];for(const B in N)_(N[B].object),delete N[B];delete at[tt]}}delete s[H]}}function I(H){if(s[H.id]===void 0)return;const Q=s[H.id];for(const Y in Q){const at=Q[Y];for(const tt in at){const N=at[tt];for(const B in N)_(N[B].object),delete N[B];delete at[tt]}}delete s[H.id]}function z(H){for(const Q in s){const Y=s[Q];for(const at in Y){const tt=Y[at];if(tt[H.id]===void 0)continue;const N=tt[H.id];for(const B in N)_(N[B].object),delete N[B];delete tt[H.id]}}}function T(H){for(const Q in s){const Y=s[Q],at=H.isInstancedMesh===!0?H.id:0,tt=Y[at];if(tt!==void 0){for(const N in tt){const B=tt[N];for(const k in B)_(B[k].object),delete B[k];delete tt[N]}delete Y[at],Object.keys(Y).length===0&&delete s[Q]}}}function O(){ht(),d=!0,c!==l&&(c=l,h(c.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:ht,dispose:G,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:v,disableUnusedAttributes:A}}function AT(r,t,i){let s;function l(h){s=h}function c(h,_){r.drawArrays(s,h,_),i.update(_,s,1)}function d(h,_,S){S!==0&&(r.drawArraysInstanced(s,h,_,S),i.update(_,s,S))}function p(h,_,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,_,0,S);let M=0;for(let b=0;b<S;b++)M+=_[b];i.update(M,s,1)}function m(h,_,S,g){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],_[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,_,0,g,0,S);let b=0;for(let R=0;R<S;R++)b+=_[R]*g[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function RT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ni&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==oi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Vi&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(le("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:A,maxVaryings:U,maxFragmentUniforms:D,maxSamples:G,samples:I}}function CT(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Os,p=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||s!==0||l;return l=g,s=S.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=_(S,g,0)},this.setState=function(S,g,M){const b=S.clippingPlanes,R=S.clipIntersection,v=S.clipShadows,x=r.get(S);if(!l||b===null||b.length===0||c&&!v)c?_(null):h();else{const A=c?0:s,U=A*4;let D=x.clippingState||null;m.value=D,D=_(b,g,U,M);for(let G=0;G!==U;++G)D[G]=i[G];x.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(S,g,M,b){const R=S!==null?S.length:0;let v=null;if(R!==0){if(v=m.value,b!==!0||v===null){const x=M+R*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(v===null||v.length<x)&&(v=new Float32Array(x));for(let U=0,D=M;U!==R;++U,D+=4)d.copy(S[U]).applyMatrix4(A,p),d.normal.toArray(v,D),v[D+3]=d.constant}m.value=v,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,v}}const as=4,fv=[.125,.215,.35,.446,.526,.582],Fs=20,wT=256,tl=new hx,dv=new ye;let mh=null,gh=0,_h=0,vh=!1;const DT=new rt;class hv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=DT}=c;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ma,format:Ni,colorSpace:Yr,depthBuffer:!1},l=pv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NT(c)),this._blurMaterial=LT(c,t,i),this._ggxMaterial=UT(c,t,i)}return l}_compileMaterial(t){const i=new qi(new On,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,c){const m=new ri(90,1,i,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(dv),S.toneMapping=Xi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new hl,new Np({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,v=R.material;let x=!1;const A=t.background;A?A.isColor&&(v.color.copy(A),t.background=null,x=!0):(v.color.copy(dv),x=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):D===1?(m.up.set(0,0,h[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const G=this._cubeSize;Hr(l,D*G,U>2?G:0,G,G),S.setRenderTarget(l),x&&S.render(R,m),S.render(t,m)}S.toneMapping=M,S.autoClear=g,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Is||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-_*_),g=0+h*1.25,M=S*g,{_lodMax:b}=this,R=this._sizeLods[s],v=3*R*(s>b-as?s-b+as:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Hr(c,v,x,3*R,2*R),l.setRenderTarget(c),l.render(p,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Hr(t,v,x,3*R,2*R),l.setRenderTarget(t),l.render(p,tl)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const _=3,S=this._lodMeshes[l];S.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Fs-1),R=c/b,v=isFinite(c)?1+Math.floor(_*R):Fs;v>Fs&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Fs}`);const x=[];let A=0;for(let z=0;z<Fs;++z){const T=z/R,O=Math.exp(-T*T/2);x.push(O),z===0?A+=O:z<v&&(A+=2*O)}for(let z=0;z<x.length;z++)x[z]=x[z]/A;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:U}=this;g.dTheta.value=b,g.mipInt.value=U-s;const D=this._sizeLods[l],G=3*D*(l>U-as?l-U+as:0),I=4*(this._cubeSize-D);Hr(i,G,I,3*D,2*D),m.setRenderTarget(i),m.render(S,tl)}}function NT(r){const t=[],i=[],s=[];let l=r;const c=r-as+1+fv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>r-as?m=fv[d-r+as-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,S=1+h,g=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,b=6,R=3,v=2,x=1,A=new Float32Array(R*b*M),U=new Float32Array(v*b*M),D=new Float32Array(x*b*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,T=I>2?0:-1,O=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];A.set(O,R*b*I),U.set(g,v*b*I);const ht=[I,I,I,I,I,I];D.set(ht,x*b*I)}const G=new On;G.setAttribute("position",new Nn(A,R)),G.setAttribute("uv",new Nn(U,v)),G.setAttribute("faceIndex",new Nn(D,x)),s.push(new qi(G,null)),l>as&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function pv(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=Su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function UT(r,t,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function LT(r,t,i){const s=new Float32Array(Fs),l=new rt(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function mv(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function gv(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function yu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class mx extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new lx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new hl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:Sa});c.uniforms.tEquirect.value=i;const d=new qi(l,c),p=i.minFilter;return i.minFilter===Bs&&(i.minFilter=Un),new zb(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function OT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Id||M===Hd)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const R=new mx(b.height);return R.fromEquirectangularTexture(r,g),t.set(g,R),g.addEventListener("dispose",h),p(R.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===Id||M===Hd,R=M===Is||M===jr;if(b||R){let v=i.get(g);const x=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new hv(r)),v=b?s.fromEquirectangular(g,v):s.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,i.set(g,v),v.texture;if(v!==void 0)return v.texture;{const A=g.image;return b&&A&&A.height>0||R&&A&&m(A)?(s===null&&(s=new hv(r)),v=b?s.fromEquirectangular(g):s.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,i.set(g,v),g.addEventListener("dispose",_),v.texture):null}}}return g}function p(g,M){return M===Id?g.mapping=Is:M===Hd&&(g.mapping=jr),g}function m(g){let M=0;const b=6;for(let R=0;R<b;R++)g[R]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function PT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gu("WebGLRenderer: "+s+" extension not supported."),l}}}function FT(r,t,i,s){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function h(S){const g=[],M=S.index,b=S.attributes.position;let R=0;if(b===void 0)return;if(M!==null){const A=M.array;R=M.version;for(let U=0,D=A.length;U<D;U+=3){const G=A[U+0],I=A[U+1],z=A[U+2];g.push(G,I,I,z,z,G)}}else{const A=b.array;R=b.version;for(let U=0,D=A.length/3-1;U<D;U+=3){const G=U+0,I=U+1,z=U+2;g.push(G,I,I,z,z,G)}}const v=new(b.count>=65535?ax:ix)(g,1);v.version=R;const x=c.get(S);x&&t.remove(x),c.set(S,v)}function _(S){const g=c.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:_}}function BT(r,t,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,M){r.drawElements(s,M,c,g*d),i.update(M,s,1)}function h(g,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,g*d,b),i.update(M,s,b))}function _(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let v=0;for(let x=0;x<b;x++)v+=M[x];i.update(v,s,1)}function S(g,M,b,R){if(b===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<g.length;x++)h(g[x]/d,M[x],R[x]);else{v.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,R,0,b);let x=0;for(let A=0;A<b;A++)x+=M[A]*R[A];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function zT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ue("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function IT(r,t,i){const s=new WeakMap,l=new nn;function c(d,p,m){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let ht=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ht)};var M=ht;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,v=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),v===!0&&(D=3);let G=p.attributes.position.count*D,I=1;G>t.maxTextureSize&&(I=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*I*4*S),T=new tx(z,G,I,S);T.type=Vi,T.needsUpdate=!0;const O=D*4;for(let H=0;H<S;H++){const Q=x[H],Y=A[H],at=U[H],tt=G*I*4*H;for(let N=0;N<Q.count;N++){const B=N*O;b===!0&&(l.fromBufferAttribute(Q,N),z[tt+B+0]=l.x,z[tt+B+1]=l.y,z[tt+B+2]=l.z,z[tt+B+3]=0),R===!0&&(l.fromBufferAttribute(Y,N),z[tt+B+4]=l.x,z[tt+B+5]=l.y,z[tt+B+6]=l.z,z[tt+B+7]=0),v===!0&&(l.fromBufferAttribute(at,N),z[tt+B+8]=l.x,z[tt+B+9]=l.y,z[tt+B+10]=l.z,z[tt+B+11]=at.itemSize===4?l.w:1)}}g={count:S,texture:T,size:new Ee(G,I)},s.set(p,g),p.addEventListener("dispose",ht)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let b=0;for(let v=0;v<h.length;v++)b+=h[v];const R=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function HT(r,t,i,s,l){let c=new WeakMap;function d(h){const _=l.render.frame,S=h.geometry,g=t.get(h,S);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const GT={[Iv]:"LINEAR_TONE_MAPPING",[Hv]:"REINHARD_TONE_MAPPING",[Gv]:"CINEON_TONE_MAPPING",[xp]:"ACES_FILMIC_TONE_MAPPING",[kv]:"AGX_TONE_MAPPING",[Xv]:"NEUTRAL_TONE_MAPPING",[Vv]:"CUSTOM_TONE_MAPPING"};function VT(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Wi(t,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),p=new On;p.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new li([0,2,0,0,2,0],2));const m=new Nb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new qi(p,m),_=new hx(-1,1,1,-1,0,1);let S=null,g=null,M=!1,b,R=null,v=[],x=!1;this.setSize=function(A,U){c.setSize(A,U),d.setSize(A,U);for(let D=0;D<v.length;D++){const G=v[D];G.setSize&&G.setSize(A,U)}},this.setEffects=function(A){v=A,x=v.length>0&&v[0].isRenderPass===!0;const U=c.width,D=c.height;for(let G=0;G<v.length;G++){const I=v[G];I.setSize&&I.setSize(U,D)}},this.begin=function(A,U){if(M||A.toneMapping===Xi&&v.length===0)return!1;if(R=U,U!==null){const D=U.width,G=U.height;(c.width!==D||c.height!==G)&&this.setSize(D,G)}return x===!1&&A.setRenderTarget(c),b=A.toneMapping,A.toneMapping=Xi,!0},this.hasRenderPass=function(){return x},this.end=function(A,U){A.toneMapping=b,M=!0;let D=c,G=d;for(let I=0;I<v.length;I++){const z=v[I];if(z.enabled!==!1&&(z.render(A,G,D,U),z.needsSwap!==!1)){const T=D;D=G,G=T}}if(S!==A.outputColorSpace||g!==A.toneMapping){S=A.outputColorSpace,g=A.toneMapping,m.defines={},Le.getTransfer(S)===Ve&&(m.defines.SRGB_TRANSFER="");const I=GT[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(R),A.render(h,_),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const gx=new Ln,mp=new ul(1,1),_x=new tx,vx=new ab,xx=new lx,_v=[],vv=[],xv=new Float32Array(16),Sv=new Float32Array(9),yv=new Float32Array(4);function Jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=_v[l];if(c===void 0&&(c=new Float32Array(l),_v[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,r[d].toArray(c,p)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Mu(r,t){let i=vv[t];i===void 0&&(i=new Int32Array(t),vv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function kT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function XT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function qT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;yv.set(s),r.uniformMatrix2fv(this.addr,!1,yv),vn(i,s)}}function YT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Sv.set(s),r.uniformMatrix3fv(this.addr,!1,Sv),vn(i,s)}}function ZT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;xv.set(s),r.uniformMatrix4fv(this.addr,!1,xv),vn(i,s)}}function KT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function JT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function $T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function tA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function eA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function nA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function aA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(mp.compareFunction=i.isReversedDepthBuffer()?Rp:Ap,c=mp):c=gx,i.setTexture2D(t||c,l)}function sA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||vx,l)}function rA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||xx,l)}function oA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_x,l)}function lA(r){switch(r){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return jT;case 35674:return qT;case 35675:return YT;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return $T;case 5125:return tA;case 36294:return eA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return oA}}function cA(r,t){r.uniform1fv(this.addr,t)}function uA(r,t){const i=Jr(t,this.size,2);r.uniform2fv(this.addr,i)}function fA(r,t){const i=Jr(t,this.size,3);r.uniform3fv(this.addr,i)}function dA(r,t){const i=Jr(t,this.size,4);r.uniform4fv(this.addr,i)}function hA(r,t){const i=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function pA(r,t){const i=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function mA(r,t){const i=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function gA(r,t){r.uniform1iv(this.addr,t)}function _A(r,t){r.uniform2iv(this.addr,t)}function vA(r,t){r.uniform3iv(this.addr,t)}function xA(r,t){r.uniform4iv(this.addr,t)}function SA(r,t){r.uniform1uiv(this.addr,t)}function yA(r,t){r.uniform2uiv(this.addr,t)}function MA(r,t){r.uniform3uiv(this.addr,t)}function bA(r,t){r.uniform4uiv(this.addr,t)}function EA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=mp:d=gx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function TA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||vx,c[d])}function AA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||xx,c[d])}function RA(r,t,i){const s=this.cache,l=t.length,c=Mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||_x,c[d])}function CA(r){switch(r){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return dA;case 35674:return hA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return yA;case 36295:return MA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}class wA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=lA(i.type)}}class DA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=CA(i.type)}}class NA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function Mv(r,t){r.seq.push(t),r.map[t.id]=t}function UA(r,t,i){const s=r.name,l=s.length;for(xh.lastIndex=0;;){const c=xh.exec(s),d=xh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Mv(i,h===void 0?new wA(p,r,t):new DA(p,r,t));break}else{let S=i.map[p];S===void 0&&(S=new NA(p),Mv(i,S)),i=S}}}class fu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);UA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function bv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const LA=37297;let OA=0;function PA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const Ev=new xe;function FA(r){Le._getMatrix(Ev,Le.workingColorSpace,r);const t=`mat3( ${Ev.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case hu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Tv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+PA(r.getShaderSource(t),p)}else return c}function BA(r,t){const i=FA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const zA={[Iv]:"Linear",[Hv]:"Reinhard",[Gv]:"Cineon",[xp]:"ACESFilmic",[kv]:"AgX",[Xv]:"Neutral",[Vv]:"Custom"};function IA(r,t){const i=zA[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const au=new rt;function HA(){Le.getLuminanceCoefficients(au);const r=au.x.toFixed(4),t=au.y.toFixed(4),i=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function VA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function kA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:p}}return i}function sl(r){return r!==""}function Av(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(r){return r.replace(XA,jA)}const WA=new Map;function jA(r,t){let i=Se[t];if(i===void 0){const s=WA.get(t);if(s!==void 0)i=Se[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return gp(i)}const qA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(r){return r.replace(qA,YA)}function YA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function wv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ZA={[ru]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function KA(r){return ZA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QA={[Is]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[Su]:"ENVMAP_TYPE_CUBE_UV"};function JA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":QA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const $A={[jr]:"ENVMAP_MODE_REFRACTION"};function tR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":$A[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eR={[zv]:"ENVMAP_BLENDING_MULTIPLY",[FM]:"ENVMAP_BLENDING_MIX",[BM]:"ENVMAP_BLENDING_ADD"};function nR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":eR[r.combine]||"ENVMAP_BLENDING_NONE"}function iR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function aR(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=KA(i),h=JA(i),_=tR(i),S=nR(i),g=iR(i),M=GA(i),b=VA(c),R=l.createProgram();let v,x,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(sl).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(sl).join(`
`),x.length>0&&(x+=`
`)):(v=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),x=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?Se.tonemapping_pars_fragment:"",i.toneMapping!==Xi?IA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,BA("linearToOutputTexel",i.outputColorSpace),HA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),d=gp(d),d=Av(d,i),d=Rv(d,i),p=gp(p),p=Av(p,i),p=Rv(p,i),d=Cv(d),p=Cv(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",i.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=A+v+d,D=A+x+p,G=bv(l,l.VERTEX_SHADER,U),I=bv(l,l.FRAGMENT_SHADER,D);l.attachShader(R,G),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(H){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(R)||"",Y=l.getShaderInfoLog(G)||"",at=l.getShaderInfoLog(I)||"",tt=Q.trim(),N=Y.trim(),B=at.trim();let k=!0,nt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,G,I);else{const _t=Tv(l,G,"vertex"),F=Tv(l,I,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+tt+`
`+_t+`
`+F)}else tt!==""?le("WebGLProgram: Program Info Log:",tt):(N===""||B==="")&&(nt=!1);nt&&(H.diagnostics={runnable:k,programLog:tt,vertexShader:{log:N,prefix:v},fragmentShader:{log:B,prefix:x}})}l.deleteShader(G),l.deleteShader(I),T=new fu(l,R),O=kA(l,R)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(R,LA)),ht},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=OA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=I,this}let sR=0;class rR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new oR(t),i.set(t,s)),s}}class oR{constructor(t){this.id=sR++,this.code=t,this.usedTimes=0}}function lR(r,t,i,s,l,c){const d=new ex,p=new rR,m=new Set,h=[],_=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,O,ht,H,Q){const Y=H.fog,at=Q.geometry,tt=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||tt,N),k=B&&B.mapping===Su?B.image.height:null,nt=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&le("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const _t=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,F=_t!==void 0?_t.length:0;let X=0;at.morphAttributes.position!==void 0&&(X=1),at.morphAttributes.normal!==void 0&&(X=2),at.morphAttributes.color!==void 0&&(X=3);let et,xt,Mt,Z;if(nt){const Ne=Ii[nt];et=Ne.vertexShader,xt=Ne.fragmentShader}else et=T.vertexShader,xt=T.fragmentShader,p.update(T),Mt=p.getVertexShaderID(T),Z=p.getFragmentShaderID(T);const V=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),Et=Q.isInstancedMesh===!0,Ut=Q.isBatchedMesh===!0,Dt=!!T.map,ie=!!T.matcap,Gt=!!B,Vt=!!T.aoMap,re=!!T.lightMap,qt=!!T.bumpMap,he=!!T.normalMap,j=!!T.displacementMap,Te=!!T.emissiveMap,me=!!T.metalnessMap,Ae=!!T.roughnessMap,Wt=T.anisotropy>0,P=T.clearcoat>0,E=T.dispersion>0,$=T.iridescence>0,St=T.sheen>0,At=T.transmission>0,gt=Wt&&!!T.anisotropyMap,Ft=P&&!!T.clearcoatMap,Lt=P&&!!T.clearcoatNormalMap,te=P&&!!T.clearcoatRoughnessMap,ee=$&&!!T.iridescenceMap,Rt=$&&!!T.iridescenceThicknessMap,Ct=St&&!!T.sheenColorMap,Ht=St&&!!T.sheenRoughnessMap,Bt=!!T.specularMap,kt=!!T.specularColorMap,ge=!!T.specularIntensityMap,J=At&&!!T.transmissionMap,Ot=At&&!!T.thicknessMap,Nt=!!T.gradientMap,Xt=!!T.alphaMap,wt=T.alphaTest>0,vt=!!T.alphaHash,Yt=!!T.extensions;let ce=Xi;T.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Ie={shaderID:nt,shaderType:T.type,shaderName:T.name,vertexShader:et,fragmentShader:xt,defines:T.defines,customVertexShaderID:Mt,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ut,batchingColor:Ut&&Q._colorsTexture!==null,instancing:Et,instancingColor:Et&&Q.instanceColor!==null,instancingMorph:Et&&Q.morphTexture!==null,outputColorSpace:V===null?r.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Yr,alphaToCoverage:!!T.alphaToCoverage,map:Dt,matcap:ie,envMap:Gt,envMapMode:Gt&&B.mapping,envMapCubeUVHeight:k,aoMap:Vt,lightMap:re,bumpMap:qt,normalMap:he,displacementMap:j,emissiveMap:Te,normalMapObjectSpace:he&&T.normalMapType===GM,normalMapTangentSpace:he&&T.normalMapType===HM,metalnessMap:me,roughnessMap:Ae,anisotropy:Wt,anisotropyMap:gt,clearcoat:P,clearcoatMap:Ft,clearcoatNormalMap:Lt,clearcoatRoughnessMap:te,dispersion:E,iridescence:$,iridescenceMap:ee,iridescenceThicknessMap:Rt,sheen:St,sheenColorMap:Ct,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:kt,specularIntensityMap:ge,transmission:At,transmissionMap:J,thicknessMap:Ot,gradientMap:Nt,opaque:T.transparent===!1&&T.blending===kr&&T.alphaToCoverage===!1,alphaMap:Xt,alphaTest:wt,alphaHash:vt,combine:T.combine,mapUv:Dt&&b(T.map.channel),aoMapUv:Vt&&b(T.aoMap.channel),lightMapUv:re&&b(T.lightMap.channel),bumpMapUv:qt&&b(T.bumpMap.channel),normalMapUv:he&&b(T.normalMap.channel),displacementMapUv:j&&b(T.displacementMap.channel),emissiveMapUv:Te&&b(T.emissiveMap.channel),metalnessMapUv:me&&b(T.metalnessMap.channel),roughnessMapUv:Ae&&b(T.roughnessMap.channel),anisotropyMapUv:gt&&b(T.anisotropyMap.channel),clearcoatMapUv:Ft&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(T.sheenRoughnessMap.channel),specularMapUv:Bt&&b(T.specularMap.channel),specularColorMapUv:kt&&b(T.specularColorMap.channel),specularIntensityMapUv:ge&&b(T.specularIntensityMap.channel),transmissionMapUv:J&&b(T.transmissionMap.channel),thicknessMapUv:Ot&&b(T.thicknessMap.channel),alphaMapUv:Xt&&b(T.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(he||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!at.attributes.uv&&(Dt||Xt),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||at.attributes.normal===void 0&&he===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:dt,skinning:Q.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&ht.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:Dt&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:Te&&T.emissiveMap.isVideoTexture===!0&&Le.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Hi,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function v(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)O.push(ht),O.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(x(O,T),A(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function x(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function A(T,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),T.push(d.mask)}function U(T){const O=M[T.type];let ht;if(O){const H=Ii[O];ht=Cb.clone(H.uniforms)}else ht=T.uniforms;return ht}function D(T,O){let ht=_.get(O);return ht!==void 0?++ht.usedTimes:(ht=new aR(r,O,T,l),h.push(ht),_.set(O,ht)),ht}function G(T){if(--T.usedTimes===0){const O=h.indexOf(T);h[O]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function I(T){p.remove(T)}function z(){p.dispose()}return{getParameters:R,getProgramCacheKey:v,getUniforms:U,acquireProgram:D,releaseProgram:G,releaseShaderCache:I,programs:h,dispose:z}}function cR(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function uR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Dv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Nv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,R,v,x){let A=r[t];return A===void 0?(A={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:x},r[t]=A):(A.id=g.id,A.object=g,A.geometry=M,A.material=b,A.materialVariant=d(g),A.groupOrder=R,A.renderOrder=g.renderOrder,A.z=v,A.group=x),t++,A}function m(g,M,b,R,v,x){const A=p(g,M,b,R,v,x);b.transmission>0?s.push(A):b.transparent===!0?l.push(A):i.push(A)}function h(g,M,b,R,v,x){const A=p(g,M,b,R,v,x);b.transmission>0?s.unshift(A):b.transparent===!0?l.unshift(A):i.unshift(A)}function _(g,M){i.length>1&&i.sort(g||uR),s.length>1&&s.sort(M||Dv),l.length>1&&l.sort(M||Dv)}function S(){for(let g=t,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:S,sort:_}}function fR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new Nv,r.set(s,[d])):l>=c.length?(d=new Nv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function dR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new ye};break;case"SpotLight":i={position:new rt,direction:new rt,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return r[t.id]=i,i}}}function hR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let pR=0;function mR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function gR(r){const t=new dR,i=hR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new rt);const l=new rt,c=new Ke,d=new Ke;function p(h){let _=0,S=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let M=0,b=0,R=0,v=0,x=0,A=0,U=0,D=0,G=0,I=0,z=0;h.sort(mR);for(let O=0,ht=h.length;O<ht;O++){const H=h[O],Q=H.color,Y=H.intensity,at=H.distance;let tt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===qr?tt=H.shadow.map.texture:tt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=Q.r*Y,S+=Q.g*Y,g+=Q.b*Y;else if(H.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(H.sh.coefficients[N],Y);z++}else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,k=i.get(H);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,s.directionalShadow[M]=k,s.directionalShadowMap[M]=tt,s.directionalShadowMatrix[M]=H.shadow.matrix,A++}s.directional[M]=N,M++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(Q).multiplyScalar(Y),N.distance=at,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,s.spot[R]=N;const B=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,B.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[R]=B.matrix,H.castShadow){const k=i.get(H);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,s.spotShadow[R]=k,s.spotShadowMap[R]=tt,D++}R++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(Q).multiplyScalar(Y),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),s.rectArea[v]=N,v++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const B=H.shadow,k=i.get(H);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,s.pointShadow[b]=k,s.pointShadowMap[b]=tt,s.pointShadowMatrix[b]=H.shadow.matrix,U++}s.point[b]=N,b++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(Y),N.groundColor.copy(H.groundColor).multiplyScalar(Y),s.hemi[x]=N,x++}}v>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=S,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==R||T.rectAreaLength!==v||T.hemiLength!==x||T.numDirectionalShadows!==A||T.numPointShadows!==U||T.numSpotShadows!==D||T.numSpotMaps!==G||T.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=v,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+G-I,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,T.directionalLength=M,T.pointLength=b,T.spotLength=R,T.rectAreaLength=v,T.hemiLength=x,T.numDirectionalShadows=A,T.numPointShadows=U,T.numSpotShadows=D,T.numSpotMaps=G,T.numLightProbes=z,s.version=pR++)}function m(h,_){let S=0,g=0,M=0,b=0,R=0;const v=_.matrixWorldInverse;for(let x=0,A=h.length;x<A;x++){const U=h[x];if(U.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(v),S++}else if(U.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(v),M++}else if(U.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(v),d.identity(),c.copy(U.matrixWorld),c.premultiply(v),d.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(v),g++}else if(U.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(v),R++}}}return{setup:p,setupView:m,state:s}}function Uv(r){const t=new gR(r),i=[],s=[];function l(_){h.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function p(){t.setup(i)}function m(_){t.setupView(i,_)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function _R(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Uv(r),t.set(l,[p])):c>=d.length?(p=new Uv(r),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const vR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SR=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],yR=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],Lv=new Ke,el=new rt,Sh=new rt;function MR(r,t,i){let s=new Up;const l=new Ee,c=new Ee,d=new nn,p=new Ub,m=new Lb,h={},_=i.maxTextureSize,S={[rs]:Yn,[Yn]:rs,[Hi]:Hi},g=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:vR,fragmentShader:xR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new On;b.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new qi(b,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let x=this.type;this.render=function(I,z,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===_M&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ru);const O=r.getRenderTarget(),ht=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(Sa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=x!==this.type;Y&&z.traverse(function(at){at.material&&(Array.isArray(at.material)?at.material.forEach(tt=>tt.needsUpdate=!0):at.material.needsUpdate=!0)});for(let at=0,tt=I.length;at<tt;at++){const N=I[at],B=N.shadow;if(B===void 0){le("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const k=B.getFrameExtents();l.multiply(k),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/k.x),l.x=c.x*k.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/k.y),l.y=c.y*k.y,B.mapSize.y=c.y));const nt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=nt,B.map===null||Y===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===al){if(N.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Wi(l.x,l.y,{format:qr,type:Ma,minFilter:Un,magFilter:Un,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new ul(l.x,l.y,Vi),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=ba,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn}else N.isPointLight?(B.map=new mx(l.x),B.map.depthTexture=new Ab(l.x,ji)):(B.map=new Wi(l.x,l.y),B.map.depthTexture=new ul(l.x,l.y,ji)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=ba,this.type===ru?(B.map.depthTexture.compareFunction=nt?Rp:Ap,B.map.depthTexture.minFilter=Un,B.map.depthTexture.magFilter=Un):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn);B.camera.updateProjectionMatrix()}const _t=B.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<_t;F++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,F),r.clear();else{F===0&&(r.setRenderTarget(B.map),r.clear());const X=B.getViewport(F);d.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),Q.viewport(d)}if(N.isPointLight){const X=B.camera,et=B.matrix,xt=N.distance||X.far;xt!==X.far&&(X.far=xt,X.updateProjectionMatrix()),el.setFromMatrixPosition(N.matrixWorld),X.position.copy(el),Sh.copy(X.position),Sh.add(SR[F]),X.up.copy(yR[F]),X.lookAt(Sh),X.updateMatrixWorld(),et.makeTranslation(-el.x,-el.y,-el.z),Lv.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Lv,X.coordinateSystem,X.reversedDepth)}else B.updateMatrices(N);s=B.getFrustum(),D(z,T,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===al&&A(B,T),B.needsUpdate=!1}x=this.type,v.needsUpdate=!1,r.setRenderTarget(O,ht,H)};function A(I,z){const T=t.update(R);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Wi(l.x,l.y,{format:qr,type:Ma})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(z,null,T,g,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(z,null,T,M,R,null)}function U(I,z,T,O){let ht=null;const H=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)ht=H;else if(ht=T.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=ht.uuid,Y=z.uuid;let at=h[Q];at===void 0&&(at={},h[Q]=at);let tt=at[Y];tt===void 0&&(tt=ht.clone(),at[Y]=tt,z.addEventListener("dispose",G)),ht=tt}if(ht.visible=z.visible,ht.wireframe=z.wireframe,O===al?ht.side=z.shadowSide!==null?z.shadowSide:z.side:ht.side=z.shadowSide!==null?z.shadowSide:S[z.side],ht.alphaMap=z.alphaMap,ht.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,ht.map=z.map,ht.clipShadows=z.clipShadows,ht.clippingPlanes=z.clippingPlanes,ht.clipIntersection=z.clipIntersection,ht.displacementMap=z.displacementMap,ht.displacementScale=z.displacementScale,ht.displacementBias=z.displacementBias,ht.wireframeLinewidth=z.wireframeLinewidth,ht.linewidth=z.linewidth,T.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const Q=r.properties.get(ht);Q.light=T}return ht}function D(I,z,T,O,ht){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ht===al)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const Y=t.update(I),at=I.material;if(Array.isArray(at)){const tt=Y.groups;for(let N=0,B=tt.length;N<B;N++){const k=tt[N],nt=at[k.materialIndex];if(nt&&nt.visible){const _t=U(I,nt,O,ht);I.onBeforeShadow(r,I,z,T,Y,_t,k),r.renderBufferDirect(T,null,Y,_t,I,k),I.onAfterShadow(r,I,z,T,Y,_t,k)}}}else if(at.visible){const tt=U(I,at,O,ht);I.onBeforeShadow(r,I,z,T,Y,tt,null),r.renderBufferDirect(T,null,Y,tt,I,null),I.onAfterShadow(r,I,z,T,Y,tt,null)}}const Q=I.children;for(let Y=0,at=Q.length;Y<at;Y++)D(Q[Y],z,T,O,ht)}function G(I){I.target.removeEventListener("dispose",G);for(const T in h){const O=h[T],ht=I.target.uuid;ht in O&&(O[ht].dispose(),delete O[ht])}}}function bR(r,t){function i(){let J=!1;const Ot=new nn;let Nt=null;const Xt=new nn(0,0,0,0);return{setMask:function(wt){Nt!==wt&&!J&&(r.colorMask(wt,wt,wt,wt),Nt=wt)},setLocked:function(wt){J=wt},setClear:function(wt,vt,Yt,ce,Ie){Ie===!0&&(wt*=ce,vt*=ce,Yt*=ce),Ot.set(wt,vt,Yt,ce),Xt.equals(Ot)===!1&&(r.clearColor(wt,vt,Yt,ce),Xt.copy(Ot))},reset:function(){J=!1,Nt=null,Xt.set(-1,0,0,0)}}}function s(){let J=!1,Ot=!1,Nt=null,Xt=null,wt=null;return{setReversed:function(vt){if(Ot!==vt){const Yt=t.get("EXT_clip_control");vt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Ot=vt;const ce=wt;wt=null,this.setClear(ce)}},getReversed:function(){return Ot},setTest:function(vt){vt?V(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(vt){Nt!==vt&&!J&&(r.depthMask(vt),Nt=vt)},setFunc:function(vt){if(Ot&&(vt=QM[vt]),Xt!==vt){switch(vt){case Eh:r.depthFunc(r.NEVER);break;case Th:r.depthFunc(r.ALWAYS);break;case Ah:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case Rh:r.depthFunc(r.EQUAL);break;case Ch:r.depthFunc(r.GEQUAL);break;case wh:r.depthFunc(r.GREATER);break;case Dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Xt=vt}},setLocked:function(vt){J=vt},setClear:function(vt){wt!==vt&&(wt=vt,Ot&&(vt=1-vt),r.clearDepth(vt))},reset:function(){J=!1,Nt=null,Xt=null,wt=null,Ot=!1}}}function l(){let J=!1,Ot=null,Nt=null,Xt=null,wt=null,vt=null,Yt=null,ce=null,Ie=null;return{setTest:function(Ne){J||(Ne?V(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(Ne){Ot!==Ne&&!J&&(r.stencilMask(Ne),Ot=Ne)},setFunc:function(Ne,Pn,Si){(Nt!==Ne||Xt!==Pn||wt!==Si)&&(r.stencilFunc(Ne,Pn,Si),Nt=Ne,Xt=Pn,wt=Si)},setOp:function(Ne,Pn,Si){(vt!==Ne||Yt!==Pn||ce!==Si)&&(r.stencilOp(Ne,Pn,Si),vt=Ne,Yt=Pn,ce=Si)},setLocked:function(Ne){J=Ne},setClear:function(Ne){Ie!==Ne&&(r.clearStencil(Ne),Ie=Ne)},reset:function(){J=!1,Ot=null,Nt=null,Xt=null,wt=null,vt=null,Yt=null,ce=null,Ie=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let _={},S={},g=new WeakMap,M=[],b=null,R=!1,v=null,x=null,A=null,U=null,D=null,G=null,I=null,z=new ye(0,0,0),T=0,O=!1,ht=null,H=null,Q=null,Y=null,at=null;const tt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=B>=1):k.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=B>=2);let nt=null,_t={};const F=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),et=new nn().fromArray(F),xt=new nn().fromArray(X);function Mt(J,Ot,Nt,Xt){const wt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(J,vt),r.texParameteri(J,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(J,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Yt=0;Yt<Nt;Yt++)J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?r.texImage3D(Ot,0,r.RGBA,1,1,Xt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(Ot+Yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return vt}const Z={};Z[r.TEXTURE_2D]=Mt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),V(r.DEPTH_TEST),d.setFunc(Wr),qt(!1),he(D_),V(r.CULL_FACE),Vt(Sa);function V(J){_[J]!==!0&&(r.enable(J),_[J]=!0)}function dt(J){_[J]!==!1&&(r.disable(J),_[J]=!1)}function Et(J,Ot){return S[J]!==Ot?(r.bindFramebuffer(J,Ot),S[J]=Ot,J===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Ot),J===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Ut(J,Ot){let Nt=M,Xt=!1;if(J){Nt=g.get(Ot),Nt===void 0&&(Nt=[],g.set(Ot,Nt));const wt=J.textures;if(Nt.length!==wt.length||Nt[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Yt=wt.length;vt<Yt;vt++)Nt[vt]=r.COLOR_ATTACHMENT0+vt;Nt.length=wt.length,Xt=!0}}else Nt[0]!==r.BACK&&(Nt[0]=r.BACK,Xt=!0);Xt&&r.drawBuffers(Nt)}function Dt(J){return b!==J?(r.useProgram(J),b=J,!0):!1}const ie={[Ps]:r.FUNC_ADD,[xM]:r.FUNC_SUBTRACT,[SM]:r.FUNC_REVERSE_SUBTRACT};ie[yM]=r.MIN,ie[MM]=r.MAX;const Gt={[bM]:r.ZERO,[EM]:r.ONE,[TM]:r.SRC_COLOR,[Mh]:r.SRC_ALPHA,[NM]:r.SRC_ALPHA_SATURATE,[wM]:r.DST_COLOR,[RM]:r.DST_ALPHA,[AM]:r.ONE_MINUS_SRC_COLOR,[bh]:r.ONE_MINUS_SRC_ALPHA,[DM]:r.ONE_MINUS_DST_COLOR,[CM]:r.ONE_MINUS_DST_ALPHA,[UM]:r.CONSTANT_COLOR,[LM]:r.ONE_MINUS_CONSTANT_COLOR,[OM]:r.CONSTANT_ALPHA,[PM]:r.ONE_MINUS_CONSTANT_ALPHA};function Vt(J,Ot,Nt,Xt,wt,vt,Yt,ce,Ie,Ne){if(J===Sa){R===!0&&(dt(r.BLEND),R=!1);return}if(R===!1&&(V(r.BLEND),R=!0),J!==vM){if(J!==v||Ne!==O){if((x!==Ps||D!==Ps)&&(r.blendEquation(r.FUNC_ADD),x=Ps,D=Ps),Ne)switch(J){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case N_:r.blendFunc(r.ONE,r.ONE);break;case U_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case L_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",J);break}else switch(J){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case N_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case U_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",J);break}A=null,U=null,G=null,I=null,z.set(0,0,0),T=0,v=J,O=Ne}return}wt=wt||Ot,vt=vt||Nt,Yt=Yt||Xt,(Ot!==x||wt!==D)&&(r.blendEquationSeparate(ie[Ot],ie[wt]),x=Ot,D=wt),(Nt!==A||Xt!==U||vt!==G||Yt!==I)&&(r.blendFuncSeparate(Gt[Nt],Gt[Xt],Gt[vt],Gt[Yt]),A=Nt,U=Xt,G=vt,I=Yt),(ce.equals(z)===!1||Ie!==T)&&(r.blendColor(ce.r,ce.g,ce.b,Ie),z.copy(ce),T=Ie),v=J,O=!1}function re(J,Ot){J.side===Hi?dt(r.CULL_FACE):V(r.CULL_FACE);let Nt=J.side===Yn;Ot&&(Nt=!Nt),qt(Nt),J.blending===kr&&J.transparent===!1?Vt(Sa):Vt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),c.setMask(J.colorWrite);const Xt=J.stencilWrite;p.setTest(Xt),Xt&&(p.setMask(J.stencilWriteMask),p.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),p.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Te(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?V(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(J){ht!==J&&(J?r.frontFace(r.CW):r.frontFace(r.CCW),ht=J)}function he(J){J!==mM?(V(r.CULL_FACE),J!==H&&(J===D_?r.cullFace(r.BACK):J===gM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),H=J}function j(J){J!==Q&&(N&&r.lineWidth(J),Q=J)}function Te(J,Ot,Nt){J?(V(r.POLYGON_OFFSET_FILL),(Y!==Ot||at!==Nt)&&(Y=Ot,at=Nt,d.getReversed()&&(Ot=-Ot),r.polygonOffset(Ot,Nt))):dt(r.POLYGON_OFFSET_FILL)}function me(J){J?V(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function Ae(J){J===void 0&&(J=r.TEXTURE0+tt-1),nt!==J&&(r.activeTexture(J),nt=J)}function Wt(J,Ot,Nt){Nt===void 0&&(nt===null?Nt=r.TEXTURE0+tt-1:Nt=nt);let Xt=_t[Nt];Xt===void 0&&(Xt={type:void 0,texture:void 0},_t[Nt]=Xt),(Xt.type!==J||Xt.texture!==Ot)&&(nt!==Nt&&(r.activeTexture(Nt),nt=Nt),r.bindTexture(J,Ot||Z[J]),Xt.type=J,Xt.texture=Ot)}function P(){const J=_t[nt];J!==void 0&&J.type!==void 0&&(r.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function St(){try{r.texSubImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function At(){try{r.texSubImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function gt(){try{r.compressedTexSubImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Ft(){try{r.compressedTexSubImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Lt(){try{r.texStorage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function te(){try{r.texStorage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function ee(){try{r.texImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Rt(){try{r.texImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Ct(J){et.equals(J)===!1&&(r.scissor(J.x,J.y,J.z,J.w),et.copy(J))}function Ht(J){xt.equals(J)===!1&&(r.viewport(J.x,J.y,J.z,J.w),xt.copy(J))}function Bt(J,Ot){let Nt=h.get(Ot);Nt===void 0&&(Nt=new WeakMap,h.set(Ot,Nt));let Xt=Nt.get(J);Xt===void 0&&(Xt=r.getUniformBlockIndex(Ot,J.name),Nt.set(J,Xt))}function kt(J,Ot){const Xt=h.get(Ot).get(J);m.get(Ot)!==Xt&&(r.uniformBlockBinding(Ot,Xt,J.__bindingPointIndex),m.set(Ot,Xt))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},nt=null,_t={},S={},g=new WeakMap,M=[],b=null,R=!1,v=null,x=null,A=null,U=null,D=null,G=null,I=null,z=new ye(0,0,0),T=0,O=!1,ht=null,H=null,Q=null,Y=null,at=null,et.set(0,0,r.canvas.width,r.canvas.height),xt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:V,disable:dt,bindFramebuffer:Et,drawBuffers:Ut,useProgram:Dt,setBlending:Vt,setMaterial:re,setFlipSided:qt,setCullFace:he,setLineWidth:j,setPolygonOffset:Te,setScissorTest:me,activeTexture:Ae,bindTexture:Wt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:ee,texImage3D:Rt,updateUBOMapping:Bt,uniformBlockBinding:kt,texStorage2D:Lt,texStorage3D:te,texSubImage2D:St,texSubImage3D:At,compressedTexSubImage2D:gt,compressedTexSubImage3D:Ft,scissor:Ct,viewport:Ht,reset:ge}}function ER(r,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,_=new WeakMap;let S;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,E){return M?new OffscreenCanvas(P,E):pu("canvas")}function R(P,E,$){let St=1;const At=Wt(P);if((At.width>$||At.height>$)&&(St=$/Math.max(At.width,At.height)),St<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const gt=Math.floor(St*At.width),Ft=Math.floor(St*At.height);S===void 0&&(S=b(gt,Ft));const Lt=E?b(gt,Ft):S;return Lt.width=gt,Lt.height=Ft,Lt.getContext("2d").drawImage(P,0,0,gt,Ft),le("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+gt+"x"+Ft+")."),Lt}else return"data"in P&&le("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),P;return P}function v(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(P,E,$,St,At=!1){if(P!==null){if(r[P]!==void 0)return r[P];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let gt=E;if(E===r.RED&&($===r.FLOAT&&(gt=r.R32F),$===r.HALF_FLOAT&&(gt=r.R16F),$===r.UNSIGNED_BYTE&&(gt=r.R8)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(gt=r.R8UI),$===r.UNSIGNED_SHORT&&(gt=r.R16UI),$===r.UNSIGNED_INT&&(gt=r.R32UI),$===r.BYTE&&(gt=r.R8I),$===r.SHORT&&(gt=r.R16I),$===r.INT&&(gt=r.R32I)),E===r.RG&&($===r.FLOAT&&(gt=r.RG32F),$===r.HALF_FLOAT&&(gt=r.RG16F),$===r.UNSIGNED_BYTE&&(gt=r.RG8)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(gt=r.RG8UI),$===r.UNSIGNED_SHORT&&(gt=r.RG16UI),$===r.UNSIGNED_INT&&(gt=r.RG32UI),$===r.BYTE&&(gt=r.RG8I),$===r.SHORT&&(gt=r.RG16I),$===r.INT&&(gt=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(gt=r.RGB8UI),$===r.UNSIGNED_SHORT&&(gt=r.RGB16UI),$===r.UNSIGNED_INT&&(gt=r.RGB32UI),$===r.BYTE&&(gt=r.RGB8I),$===r.SHORT&&(gt=r.RGB16I),$===r.INT&&(gt=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(gt=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(gt=r.RGBA16UI),$===r.UNSIGNED_INT&&(gt=r.RGBA32UI),$===r.BYTE&&(gt=r.RGBA8I),$===r.SHORT&&(gt=r.RGBA16I),$===r.INT&&(gt=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(gt=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(gt=r.R11F_G11F_B10F)),E===r.RGBA){const Ft=At?hu:Le.getTransfer(St);$===r.FLOAT&&(gt=r.RGBA32F),$===r.HALF_FLOAT&&(gt=r.RGBA16F),$===r.UNSIGNED_BYTE&&(gt=Ft===Ve?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(gt=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(gt=r.RGB5_A1)}return(gt===r.R16F||gt===r.R32F||gt===r.RG16F||gt===r.RG32F||gt===r.RGBA16F||gt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function D(P,E){let $;return P?E===null||E===ji||E===ll?$=r.DEPTH24_STENCIL8:E===Vi?$=r.DEPTH32F_STENCIL8:E===ol&&($=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===ll?$=r.DEPTH_COMPONENT24:E===Vi?$=r.DEPTH_COMPONENT32F:E===ol&&($=r.DEPTH_COMPONENT16),$}function G(P,E){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function I(P){const E=P.target;E.removeEventListener("dispose",I),T(E),E.isVideoTexture&&_.delete(E)}function z(P){const E=P.target;E.removeEventListener("dispose",z),ht(E)}function T(P){const E=s.get(P);if(E.__webglInit===void 0)return;const $=P.source,St=g.get($);if(St){const At=St[E.__cacheKey];At.usedTimes--,At.usedTimes===0&&O(P),Object.keys(St).length===0&&g.delete($)}s.remove(P)}function O(P){const E=s.get(P);r.deleteTexture(E.__webglTexture);const $=P.source,St=g.get($);delete St[E.__cacheKey],d.memory.textures--}function ht(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(E.__webglFramebuffer[St]))for(let At=0;At<E.__webglFramebuffer[St].length;At++)r.deleteFramebuffer(E.__webglFramebuffer[St][At]);else r.deleteFramebuffer(E.__webglFramebuffer[St]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[St])}else{if(Array.isArray(E.__webglFramebuffer))for(let St=0;St<E.__webglFramebuffer.length;St++)r.deleteFramebuffer(E.__webglFramebuffer[St]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let St=0;St<E.__webglColorRenderbuffer.length;St++)E.__webglColorRenderbuffer[St]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[St]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=P.textures;for(let St=0,At=$.length;St<At;St++){const gt=s.get($[St]);gt.__webglTexture&&(r.deleteTexture(gt.__webglTexture),d.memory.textures--),s.remove($[St])}s.remove(P)}let H=0;function Q(){H=0}function Y(){const P=H;return P>=l.maxTextures&&le("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function at(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function tt(P,E){const $=s.get(P);if(P.isVideoTexture&&me(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const St=P.image;if(St===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,P,E);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function N(P,E){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Z($,P,E);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function B(P,E){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Z($,P,E);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function k(P,E){const $=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){V($,P,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}const nt={[Nh]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[Uh]:r.MIRRORED_REPEAT},_t={[Tn]:r.NEAREST,[zM]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[Gd]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},F={[VM]:r.NEVER,[qM]:r.ALWAYS,[kM]:r.LESS,[Ap]:r.LEQUAL,[XM]:r.EQUAL,[Rp]:r.GEQUAL,[WM]:r.GREATER,[jM]:r.NOTEQUAL};function X(P,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===Gd||E.magFilter===wc||E.magFilter===Bs||E.minFilter===Un||E.minFilter===Gd||E.minFilter===wc||E.minFilter===Bs)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,nt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,nt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,nt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,_t[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,_t[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==wc&&E.minFilter!==Bs||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function et(P,E){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I));const St=E.source;let At=g.get(St);At===void 0&&(At={},g.set(St,At));const gt=at(E);if(gt!==P.__cacheKey){At[gt]===void 0&&(At[gt]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,$=!0),At[gt].usedTimes++;const Ft=At[P.__cacheKey];Ft!==void 0&&(At[P.__cacheKey].usedTimes--,Ft.usedTimes===0&&O(E)),P.__cacheKey=gt,P.__webglTexture=At[gt].texture}return $}function xt(P,E,$){return Math.floor(Math.floor(P/$)/E)}function Mt(P,E,$,St){const gt=P.updateRanges;if(gt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,St,E.data);else{gt.sort((Rt,Ct)=>Rt.start-Ct.start);let Ft=0;for(let Rt=1;Rt<gt.length;Rt++){const Ct=gt[Ft],Ht=gt[Rt],Bt=Ct.start+Ct.count,kt=xt(Ht.start,E.width,4),ge=xt(Ct.start,E.width,4);Ht.start<=Bt+1&&kt===ge&&xt(Ht.start+Ht.count-1,E.width,4)===kt?Ct.count=Math.max(Ct.count,Ht.start+Ht.count-Ct.start):(++Ft,gt[Ft]=Ht)}gt.length=Ft+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),te=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Rt=0,Ct=gt.length;Rt<Ct;Rt++){const Ht=gt[Rt],Bt=Math.floor(Ht.start/4),kt=Math.ceil(Ht.count/4),ge=Bt%E.width,J=Math.floor(Bt/E.width),Ot=kt,Nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,J),i.texSubImage2D(r.TEXTURE_2D,0,ge,J,Ot,Nt,$,St,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,te),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function Z(P,E,$){let St=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(St=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(St=r.TEXTURE_3D);const At=et(P,E),gt=E.source;i.bindTexture(St,P.__webglTexture,r.TEXTURE0+$);const Ft=s.get(gt);if(gt.version!==Ft.__version||At===!0){i.activeTexture(r.TEXTURE0+$);const Lt=Le.getPrimaries(Le.workingColorSpace),te=E.colorSpace===is?null:Le.getPrimaries(E.colorSpace),ee=E.colorSpace===is||Lt===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Rt=R(E.image,!1,l.maxTextureSize);Rt=Ae(E,Rt);const Ct=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let Bt=U(E.internalFormat,Ct,Ht,E.colorSpace,E.isVideoTexture);X(St,E);let kt;const ge=E.mipmaps,J=E.isVideoTexture!==!0,Ot=Ft.__version===void 0||At===!0,Nt=gt.dataReady,Xt=G(E,Rt);if(E.isDepthTexture)Bt=D(E.format===zs,E.type),Ot&&(J?i.texStorage2D(r.TEXTURE_2D,1,Bt,Rt.width,Rt.height):i.texImage2D(r.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Ct,Ht,null));else if(E.isDataTexture)if(ge.length>0){J&&Ot&&i.texStorage2D(r.TEXTURE_2D,Xt,Bt,ge[0].width,ge[0].height);for(let wt=0,vt=ge.length;wt<vt;wt++)kt=ge[wt],J?Nt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,kt.width,kt.height,Ct,Ht,kt.data):i.texImage2D(r.TEXTURE_2D,wt,Bt,kt.width,kt.height,0,Ct,Ht,kt.data);E.generateMipmaps=!1}else J?(Ot&&i.texStorage2D(r.TEXTURE_2D,Xt,Bt,Rt.width,Rt.height),Nt&&Mt(E,Rt,Ct,Ht)):i.texImage2D(r.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Ct,Ht,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){J&&Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Xt,Bt,ge[0].width,ge[0].height,Rt.depth);for(let wt=0,vt=ge.length;wt<vt;wt++)if(kt=ge[wt],E.format!==Ni)if(Ct!==null)if(J){if(Nt)if(E.layerUpdates.size>0){const Yt=uv(kt.width,kt.height,E.format,E.type);for(const ce of E.layerUpdates){const Ie=kt.data.subarray(ce*Yt/kt.data.BYTES_PER_ELEMENT,(ce+1)*Yt/kt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,ce,kt.width,kt.height,1,Ct,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,0,kt.width,kt.height,Rt.depth,Ct,kt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,wt,Bt,kt.width,kt.height,Rt.depth,0,kt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Nt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,wt,0,0,0,kt.width,kt.height,Rt.depth,Ct,Ht,kt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,wt,Bt,kt.width,kt.height,Rt.depth,0,Ct,Ht,kt.data)}else{J&&Ot&&i.texStorage2D(r.TEXTURE_2D,Xt,Bt,ge[0].width,ge[0].height);for(let wt=0,vt=ge.length;wt<vt;wt++)kt=ge[wt],E.format!==Ni?Ct!==null?J?Nt&&i.compressedTexSubImage2D(r.TEXTURE_2D,wt,0,0,kt.width,kt.height,Ct,kt.data):i.compressedTexImage2D(r.TEXTURE_2D,wt,Bt,kt.width,kt.height,0,kt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Nt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,kt.width,kt.height,Ct,Ht,kt.data):i.texImage2D(r.TEXTURE_2D,wt,Bt,kt.width,kt.height,0,Ct,Ht,kt.data)}else if(E.isDataArrayTexture)if(J){if(Ot&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Xt,Bt,Rt.width,Rt.height,Rt.depth),Nt)if(E.layerUpdates.size>0){const wt=uv(Rt.width,Rt.height,E.format,E.type);for(const vt of E.layerUpdates){const Yt=Rt.data.subarray(vt*wt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*wt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,Ct,Ht,Yt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ct,Ht,Rt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,Rt.width,Rt.height,Rt.depth,0,Ct,Ht,Rt.data);else if(E.isData3DTexture)J?(Ot&&i.texStorage3D(r.TEXTURE_3D,Xt,Bt,Rt.width,Rt.height,Rt.depth),Nt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ct,Ht,Rt.data)):i.texImage3D(r.TEXTURE_3D,0,Bt,Rt.width,Rt.height,Rt.depth,0,Ct,Ht,Rt.data);else if(E.isFramebufferTexture){if(Ot)if(J)i.texStorage2D(r.TEXTURE_2D,Xt,Bt,Rt.width,Rt.height);else{let wt=Rt.width,vt=Rt.height;for(let Yt=0;Yt<Xt;Yt++)i.texImage2D(r.TEXTURE_2D,Yt,Bt,wt,vt,0,Ct,Ht,null),wt>>=1,vt>>=1}}else if(ge.length>0){if(J&&Ot){const wt=Wt(ge[0]);i.texStorage2D(r.TEXTURE_2D,Xt,Bt,wt.width,wt.height)}for(let wt=0,vt=ge.length;wt<vt;wt++)kt=ge[wt],J?Nt&&i.texSubImage2D(r.TEXTURE_2D,wt,0,0,Ct,Ht,kt):i.texImage2D(r.TEXTURE_2D,wt,Bt,Ct,Ht,kt);E.generateMipmaps=!1}else if(J){if(Ot){const wt=Wt(Rt);i.texStorage2D(r.TEXTURE_2D,Xt,Bt,wt.width,wt.height)}Nt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Ht,Rt)}else i.texImage2D(r.TEXTURE_2D,0,Bt,Ct,Ht,Rt);v(E)&&x(St),Ft.__version=gt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function V(P,E,$){if(E.image.length!==6)return;const St=et(P,E),At=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+$);const gt=s.get(At);if(At.version!==gt.__version||St===!0){i.activeTexture(r.TEXTURE0+$);const Ft=Le.getPrimaries(Le.workingColorSpace),Lt=E.colorSpace===is?null:Le.getPrimaries(E.colorSpace),te=E.colorSpace===is||Ft===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let vt=0;vt<6;vt++)!ee&&!Rt?Ct[vt]=R(E.image[vt],!0,l.maxCubemapSize):Ct[vt]=Rt?E.image[vt].image:E.image[vt],Ct[vt]=Ae(E,Ct[vt]);const Ht=Ct[0],Bt=c.convert(E.format,E.colorSpace),kt=c.convert(E.type),ge=U(E.internalFormat,Bt,kt,E.colorSpace),J=E.isVideoTexture!==!0,Ot=gt.__version===void 0||St===!0,Nt=At.dataReady;let Xt=G(E,Ht);X(r.TEXTURE_CUBE_MAP,E);let wt;if(ee){J&&Ot&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,ge,Ht.width,Ht.height);for(let vt=0;vt<6;vt++){wt=Ct[vt].mipmaps;for(let Yt=0;Yt<wt.length;Yt++){const ce=wt[Yt];E.format!==Ni?Bt!==null?J?Nt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,0,0,ce.width,ce.height,Bt,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,ge,ce.width,ce.height,0,ce.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,0,0,ce.width,ce.height,Bt,kt,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt,ge,ce.width,ce.height,0,Bt,kt,ce.data)}}}else{if(wt=E.mipmaps,J&&Ot){wt.length>0&&Xt++;const vt=Wt(Ct[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,ge,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Rt){J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ct[vt].width,Ct[vt].height,Bt,kt,Ct[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ge,Ct[vt].width,Ct[vt].height,0,Bt,kt,Ct[vt].data);for(let Yt=0;Yt<wt.length;Yt++){const Ie=wt[Yt].image[vt].image;J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,0,0,Ie.width,Ie.height,Bt,kt,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,ge,Ie.width,Ie.height,0,Bt,kt,Ie.data)}}else{J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt,kt,Ct[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ge,Bt,kt,Ct[vt]);for(let Yt=0;Yt<wt.length;Yt++){const ce=wt[Yt];J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,0,0,Bt,kt,ce.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Yt+1,ge,Bt,kt,ce.image[vt])}}}v(E)&&x(r.TEXTURE_CUBE_MAP),gt.__version=At.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function dt(P,E,$,St,At,gt){const Ft=c.convert($.format,$.colorSpace),Lt=c.convert($.type),te=U($.internalFormat,Ft,Lt,$.colorSpace),ee=s.get(E),Rt=s.get($);if(Rt.__renderTarget=E,!ee.__hasExternalTextures){const Ct=Math.max(1,E.width>>gt),Ht=Math.max(1,E.height>>gt);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,gt,te,Ct,Ht,E.depth,0,Ft,Lt,null):i.texImage2D(At,gt,te,Ct,Ht,0,Ft,Lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Te(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,St,At,Rt.__webglTexture,0,j(E)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,St,At,Rt.__webglTexture,gt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(P,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const St=E.depthTexture,At=St&&St.isDepthTexture?St.type:null,gt=D(E.stencilBuffer,At),Ft=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Te(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(E),gt,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(E),gt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,gt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,P)}else{const St=E.textures;for(let At=0;At<St.length;At++){const gt=St[At],Ft=c.convert(gt.format,gt.colorSpace),Lt=c.convert(gt.type),te=U(gt.internalFormat,Ft,Lt,gt.colorSpace);Te(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(E),te,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(E),te,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(P,E,$){const St=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(E.depthTexture);if(At.__renderTarget=E,(!At.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),St){if(At.__webglInit===void 0&&(At.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),X(r.TEXTURE_CUBE_MAP,E.depthTexture);const ee=c.convert(E.depthTexture.format),Rt=c.convert(E.depthTexture.type);let Ct;E.depthTexture.format===ba?Ct=r.DEPTH_COMPONENT24:E.depthTexture.format===zs&&(Ct=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Ct,E.width,E.height,0,ee,Rt,null)}}else tt(E.depthTexture,0);const gt=At.__webglTexture,Ft=j(E),Lt=St?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,te=E.depthTexture.format===zs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===ba)Te(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Lt,gt,0,Ft):r.framebufferTexture2D(r.FRAMEBUFFER,te,Lt,gt,0);else if(E.depthTexture.format===zs)Te(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Lt,gt,0,Ft):r.framebufferTexture2D(r.FRAMEBUFFER,te,Lt,gt,0);else throw new Error("Unknown depthTexture format")}function Dt(P){const E=s.get(P),$=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const St=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),St){const At=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,St.removeEventListener("dispose",At)};St.addEventListener("dispose",At),E.__depthDisposeCallback=At}E.__boundDepthTexture=St}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let St=0;St<6;St++)Ut(E.__webglFramebuffer[St],P,St);else{const St=P.texture.mipmaps;St&&St.length>0?Ut(E.__webglFramebuffer[0],P,0):Ut(E.__webglFramebuffer,P,0)}else if($){E.__webglDepthbuffer=[];for(let St=0;St<6;St++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[St]),E.__webglDepthbuffer[St]===void 0)E.__webglDepthbuffer[St]=r.createRenderbuffer(),Et(E.__webglDepthbuffer[St],P,!1);else{const At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer[St];r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,gt)}}else{const St=P.texture.mipmaps;if(St&&St.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Et(E.__webglDepthbuffer,P,!1);else{const At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,gt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,gt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ie(P,E,$){const St=s.get(P);E!==void 0&&dt(St.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&Dt(P)}function Gt(P){const E=P.texture,$=s.get(P),St=s.get(E);P.addEventListener("dispose",z);const At=P.textures,gt=P.isWebGLCubeRenderTarget===!0,Ft=At.length>1;if(Ft||(St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture()),St.__version=E.version,d.memory.textures++),gt){$.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Lt]=[];for(let te=0;te<E.mipmaps.length;te++)$.__webglFramebuffer[Lt][te]=r.createFramebuffer()}else $.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)$.__webglFramebuffer[Lt]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let Lt=0,te=At.length;Lt<te;Lt++){const ee=s.get(At[Lt]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&Te(P)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Lt=0;Lt<At.length;Lt++){const te=At[Lt];$.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Lt]);const ee=c.convert(te.format,te.colorSpace),Rt=c.convert(te.type),Ct=U(te.internalFormat,ee,Rt,te.colorSpace,P.isXRRenderTarget===!0),Ht=j(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Ct,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,$.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Et($.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(gt){i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),X(r.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)dt($.__webglFramebuffer[Lt][te],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,te);else dt($.__webglFramebuffer[Lt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);v(E)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Lt=0,te=At.length;Lt<te;Lt++){const ee=At[Lt],Rt=s.get(ee);let Ct=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ct=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Rt.__webglTexture),X(Ct,ee),dt($.__webglFramebuffer,P,ee,r.COLOR_ATTACHMENT0+Lt,Ct,0),v(ee)&&x(Ct)}i.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Lt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,St.__webglTexture),X(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)dt($.__webglFramebuffer[te],P,E,r.COLOR_ATTACHMENT0,Lt,te);else dt($.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,Lt,0);v(E)&&x(Lt),i.unbindTexture()}P.depthBuffer&&Dt(P)}function Vt(P){const E=P.textures;for(let $=0,St=E.length;$<St;$++){const At=E[$];if(v(At)){const gt=A(P),Ft=s.get(At).__webglTexture;i.bindTexture(gt,Ft),x(gt),i.unbindTexture()}}}const re=[],qt=[];function he(P){if(P.samples>0){if(Te(P)===!1){const E=P.textures,$=P.width,St=P.height;let At=r.COLOR_BUFFER_BIT;const gt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=s.get(P),Lt=E.length>1;if(Lt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const te=P.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[ee]);const Rt=s.get(E[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,$,St,0,0,$,St,At,r.NEAREST),m===!0&&(re.length=0,qt.length=0,re.push(r.COLOR_ATTACHMENT0+ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(gt),qt.push(gt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[ee]);const Rt=s.get(E[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Rt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function j(P){return Math.min(l.maxSamples,P.samples)}function Te(P){const E=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function me(P){const E=d.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function Ae(P,E){const $=P.colorSpace,St=P.format,At=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Yr&&$!==is&&(Le.getTransfer($)===Ve?(St!==Ni||At!==oi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",$)),E}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=Q,this.setTexture2D=tt,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=k,this.rebindTextures=ie,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function TR(r,t){function i(s,l=is){let c;const d=Le.getTransfer(l);if(s===oi)return r.UNSIGNED_BYTE;if(s===yp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Mp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Yv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Zv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===jv)return r.BYTE;if(s===qv)return r.SHORT;if(s===ol)return r.UNSIGNED_SHORT;if(s===Sp)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===Kv)return r.ALPHA;if(s===Qv)return r.RGB;if(s===Ni)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===zs)return r.DEPTH_STENCIL;if(s===Jv)return r.RED;if(s===bp)return r.RED_INTEGER;if(s===qr)return r.RG;if(s===Ep)return r.RG_INTEGER;if(s===Tp)return r.RGBA_INTEGER;if(s===ou||s===lu||s===cu||s===uu)if(d===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lh||s===Oh||s===Ph||s===Fh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Oh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ph)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bh||s===zh||s===Ih||s===Hh||s===Gh||s===Vh||s===kh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Bh||s===zh)return d===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ih)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Hh)return c.COMPRESSED_R11_EAC;if(s===Gh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Vh)return c.COMPRESSED_RG11_EAC;if(s===kh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Xh||s===Wh||s===jh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===tp||s===ep||s===np||s===ip)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Xh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$h)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tp)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ep)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===np)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ip)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ap||s===sp||s===rp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===ap)return d===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===op||s===lp||s===cp||s===up)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===op)return c.COMPRESSED_RED_RGTC1_EXT;if(s===lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===up)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ll?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const AR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new cx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Yi({vertexShader:AR,fragmentShader:RR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qi(new pl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wR extends Kr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,_=null,S=null,g=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",v=new CR,x={},A=i.getContextAttributes();let U=null,D=null;const G=[],I=[],z=new Ee;let T=null;const O=new ri;O.viewport=new nn;const ht=new ri;ht.viewport=new nn;const H=[O,ht],Q=new Ib;let Y=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getGripSpace()},this.getHand=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getHandSpace()};function tt(Z){const V=I.indexOf(Z.inputSource);if(V===-1)return;const dt=G[V];dt!==void 0&&(dt.update(Z.inputSource,Z.frame,h||d),dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",B);for(let Z=0;Z<G.length;Z++){const V=I[Z];V!==null&&(I[Z]=null,G[Z].disconnect(V))}Y=null,at=null,v.reset();for(const Z in x)delete x[Z];t.setRenderTarget(U),M=null,g=null,S=null,l=null,D=null,Mt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){p=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",N),l.addEventListener("inputsourceschange",B),A.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Et=null,Ut=null;A.depth&&(Ut=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=A.stencil?zs:ba,Et=A.stencil?ll:ji);const Dt={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(Dt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Wi(g.textureWidth,g.textureHeight,{format:Ni,type:oi,depthTexture:new ul(g.textureWidth,g.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const dt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Mt.setContext(l),Mt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(Z){for(let V=0;V<Z.removed.length;V++){const dt=Z.removed[V],Et=I.indexOf(dt);Et>=0&&(I[Et]=null,G[Et].disconnect(dt))}for(let V=0;V<Z.added.length;V++){const dt=Z.added[V];let Et=I.indexOf(dt);if(Et===-1){for(let Dt=0;Dt<G.length;Dt++)if(Dt>=I.length){I.push(dt),Et=Dt;break}else if(I[Dt]===null){I[Dt]=dt,Et=Dt;break}if(Et===-1)break}const Ut=G[Et];Ut&&Ut.connect(dt)}}const k=new rt,nt=new rt;function _t(Z,V,dt){k.setFromMatrixPosition(V.matrixWorld),nt.setFromMatrixPosition(dt.matrixWorld);const Et=k.distanceTo(nt),Ut=V.projectionMatrix.elements,Dt=dt.projectionMatrix.elements,ie=Ut[14]/(Ut[10]-1),Gt=Ut[14]/(Ut[10]+1),Vt=(Ut[9]+1)/Ut[5],re=(Ut[9]-1)/Ut[5],qt=(Ut[8]-1)/Ut[0],he=(Dt[8]+1)/Dt[0],j=ie*qt,Te=ie*he,me=Et/(-qt+he),Ae=me*-qt;if(V.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ut[10]===-1)Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Wt=ie+me,P=Gt+me,E=j-Ae,$=Te+(Et-Ae),St=Vt*Gt/P*Wt,At=re*Gt/P*Wt;Z.projectionMatrix.makePerspective(E,$,St,At,Wt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function F(Z,V){V===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(V.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let V=Z.near,dt=Z.far;v.texture!==null&&(v.depthNear>0&&(V=v.depthNear),v.depthFar>0&&(dt=v.depthFar)),Q.near=ht.near=O.near=V,Q.far=ht.far=O.far=dt,(Y!==Q.near||at!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),Y=Q.near,at=Q.far),Q.layers.mask=Z.layers.mask|6,O.layers.mask=Q.layers.mask&-5,ht.layers.mask=Q.layers.mask&-3;const Et=Z.parent,Ut=Q.cameras;F(Q,Et);for(let Dt=0;Dt<Ut.length;Dt++)F(Ut[Dt],Et);Ut.length===2?_t(Q,O,ht):Q.projectionMatrix.copy(O.projectionMatrix),X(Z,Q,Et)};function X(Z,V,dt){dt===null?Z.matrix.copy(V.matrixWorld):(Z.matrix.copy(dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(V.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=dp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Q)},this.getCameraTexture=function(Z){return x[Z]};let et=null;function xt(Z,V){if(_=V.getViewerPose(h||d),b=V,_!==null){const dt=_.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let Et=!1;dt.length!==Q.cameras.length&&(Q.cameras.length=0,Et=!0);for(let Gt=0;Gt<dt.length;Gt++){const Vt=dt[Gt];let re=null;if(M!==null)re=M.getViewport(Vt);else{const he=S.getViewSubImage(g,Vt);re=he.viewport,Gt===0&&(t.setRenderTargetTextures(D,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(D))}let qt=H[Gt];qt===void 0&&(qt=new ri,qt.layers.enable(Gt),qt.viewport=new nn,H[Gt]=qt),qt.matrix.fromArray(Vt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Vt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(re.x,re.y,re.width,re.height),Gt===0&&(Q.matrix.copy(qt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Et===!0&&Q.cameras.push(qt)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){S=s.getBinding();const Gt=S.getDepthInformation(dt[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(Gt,l.renderState)}if(Ut&&Ut.includes("camera-access")&&R){t.state.unbindTexture(),S=s.getBinding();for(let Gt=0;Gt<dt.length;Gt++){const Vt=dt[Gt].camera;if(Vt){let re=x[Vt];re||(re=new cx,x[Vt]=re);const qt=S.getCameraImage(Vt);re.sourceTexture=qt}}}}for(let dt=0;dt<G.length;dt++){const Et=I[dt],Ut=G[dt];Et!==null&&Ut!==void 0&&Ut.update(Et,V,h||d)}et&&et(Z,V),V.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:V}),b=null}const Mt=new px;Mt.setAnimationLoop(xt),this.setAnimationLoop=function(Z){et=Z},this.dispose=function(){}}}const Ls=new Ea,DR=new Ke;function NR(r,t){function i(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function s(v,x){x.color.getRGB(v.fogColor.value,ux(r)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function l(v,x,A,U,D){x.isMeshBasicMaterial?c(v,x):x.isMeshLambertMaterial?(c(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(v,x),S(v,x)):x.isMeshPhongMaterial?(c(v,x),_(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(v,x),g(v,x),x.isMeshPhysicalMaterial&&M(v,x,D)):x.isMeshMatcapMaterial?(c(v,x),b(v,x)):x.isMeshDepthMaterial?c(v,x):x.isMeshDistanceMaterial?(c(v,x),R(v,x)):x.isMeshNormalMaterial?c(v,x):x.isLineBasicMaterial?(d(v,x),x.isLineDashedMaterial&&p(v,x)):x.isPointsMaterial?m(v,x,A,U):x.isSpriteMaterial?h(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,i(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,i(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Yn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,i(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Yn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,i(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,i(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const A=t.get(x),U=A.envMap,D=A.envMapRotation;U&&(v.envMap.value=U,Ls.copy(D),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),v.envMapRotation.value.setFromMatrix4(DR.makeRotationFromEuler(Ls)),v.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,v.aoMapTransform))}function d(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,i(x.map,v.mapTransform))}function p(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function m(v,x,A,U){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*A,v.scale.value=U*.5,x.map&&(v.map.value=x.map,i(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function h(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,i(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function _(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function S(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function g(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function M(v,x,A){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,x){x.matcap&&(v.matcap.value=x.matcap)}function R(v,x){const A=t.get(x).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function UR(r,t,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,U){const D=U.program;s.uniformBlockBinding(A,D)}function h(A,U){let D=l[A.id];D===void 0&&(b(A),D=_(A),l[A.id]=D,A.addEventListener("dispose",v));const G=U.program;s.updateUBOMapping(A,G);const I=t.render.frame;c[A.id]!==I&&(g(A),c[A.id]=I)}function _(A){const U=S();A.__bindingPointIndex=U;const D=r.createBuffer(),G=A.__size,I=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,G,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function S(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const U=l[A.id],D=A.uniforms,G=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,z=D.length;I<z;I++){const T=Array.isArray(D[I])?D[I]:[D[I]];for(let O=0,ht=T.length;O<ht;O++){const H=T[O];if(M(H,I,O,G)===!0){const Q=H.__offset,Y=Array.isArray(H.value)?H.value:[H.value];let at=0;for(let tt=0;tt<Y.length;tt++){const N=Y[tt],B=R(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,Q+at,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,at),at+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(A,U,D,G){const I=A.value,z=U+"_"+D;if(G[z]===void 0)return typeof I=="number"||typeof I=="boolean"?G[z]=I:G[z]=I.clone(),!0;{const T=G[z];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return G[z]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function b(A){const U=A.uniforms;let D=0;const G=16;for(let z=0,T=U.length;z<T;z++){const O=Array.isArray(U[z])?U[z]:[U[z]];for(let ht=0,H=O.length;ht<H;ht++){const Q=O[ht],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let at=0,tt=Y.length;at<tt;at++){const N=Y[at],B=R(N),k=D%G,nt=k%B.boundary,_t=k+nt;D+=nt,_t!==0&&G-_t<B.storage&&(D+=G-_t),Q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=B.storage}}}const I=D%G;return I>0&&(D+=G-I),A.__size=D,A.__cache={},this}function R(A){const U={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(U.boundary=4,U.storage=4):A.isVector2?(U.boundary=8,U.storage=8):A.isVector3||A.isColor?(U.boundary=16,U.storage=12):A.isVector4?(U.boundary=16,U.storage=16):A.isMatrix3?(U.boundary=48,U.storage=48):A.isMatrix4?(U.boundary=64,U.storage=64):A.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",A),U}function v(A){const U=A.target;U.removeEventListener("dispose",v);const D=d.indexOf(U.__bindingPointIndex);d.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const A in l)r.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:h,dispose:x}}const LR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function OR(){return zi===null&&(zi=new Sb(LR,16,16,qr,Ma),zi.name="DFG_LUT",zi.minFilter=Un,zi.magFilter=Un,zi.wrapS=xa,zi.wrapT=xa,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class PR{constructor(t={}){const{canvas:i=ZM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=oi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const R=M,v=new Set([Tp,Ep,bp]),x=new Set([oi,ji,ol,ll,yp,Mp]),A=new Uint32Array(4),U=new Int32Array(4);let D=null,G=null;const I=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let ht=!1;this._outputColorSpace=vi;let H=0,Q=0,Y=null,at=-1,tt=null;const N=new nn,B=new nn;let k=null;const nt=new ye(0);let _t=0,F=i.width,X=i.height,et=1,xt=null,Mt=null;const Z=new nn(0,0,F,X),V=new nn(0,0,F,X);let dt=!1;const Et=new Up;let Ut=!1,Dt=!1;const ie=new Ke,Gt=new rt,Vt=new nn,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function he(){return Y===null?et:1}let j=s;function Te(w,K){return i.getContext(w,K)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${vp}`),i.addEventListener("webglcontextlost",Yt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),j===null){const K="webgl2";if(j=Te(K,w),j===null)throw Te(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ue("WebGLRenderer: "+w.message),w}let me,Ae,Wt,P,E,$,St,At,gt,Ft,Lt,te,ee,Rt,Ct,Ht,Bt,kt,ge,J,Ot,Nt,Xt;function wt(){me=new PT(j),me.init(),Ot=new TR(j,me),Ae=new RT(j,me,t,Ot),Wt=new bR(j,me),Ae.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),P=new zT(j),E=new cR,$=new ER(j,me,Wt,E,Ae,Ot,P),St=new OT(O),At=new kb(j),Nt=new TT(j,At),gt=new FT(j,At,P,Nt),Ft=new HT(j,gt,At,Nt,P),kt=new IT(j,Ae,$),Ct=new CT(E),Lt=new lR(O,St,me,Ae,Nt,Ct),te=new NR(O,E),ee=new fR,Rt=new _R(me),Bt=new ET(O,St,Wt,Ft,b,m),Ht=new MR(O,Ft,Ae),Xt=new UR(j,P,Ae,Wt),ge=new AT(j,me,P),J=new BT(j,me,P),P.programs=Lt.programs,O.capabilities=Ae,O.extensions=me,O.properties=E,O.renderLists=ee,O.shadowMap=Ht,O.state=Wt,O.info=P}wt(),R!==oi&&(T=new VT(R,i.width,i.height,l,c));const vt=new wR(O,j);this.xr=vt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(F,X,!1))},this.getSize=function(w){return w.set(F,X)},this.setSize=function(w,K,pt=!0){if(vt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,X=K,i.width=Math.floor(w*et),i.height=Math.floor(K*et),pt===!0&&(i.style.width=w+"px",i.style.height=K+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(F*et,X*et).floor()},this.setDrawingBufferSize=function(w,K,pt){F=w,X=K,et=pt,i.width=Math.floor(w*pt),i.height=Math.floor(K*pt),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(R===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,K,pt,ct){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,K,pt,ct),Wt.viewport(N.copy(Z).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(V)},this.setScissor=function(w,K,pt,ct){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,K,pt,ct),Wt.scissor(B.copy(V).multiplyScalar(et).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(w){Wt.setScissorTest(dt=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,pt=!0){let ct=0;if(w){let st=!1;if(Y!==null){const Pt=Y.texture.format;st=v.has(Pt)}if(st){const Pt=Y.texture.type,jt=x.has(Pt),zt=Bt.getClearColor(),Jt=Bt.getClearAlpha(),ne=zt.r,oe=zt.g,fe=zt.b;jt?(A[0]=ne,A[1]=oe,A[2]=fe,A[3]=Jt,j.clearBufferuiv(j.COLOR,0,A)):(U[0]=ne,U[1]=oe,U[2]=fe,U[3]=Jt,j.clearBufferiv(j.COLOR,0,U))}else ct|=j.COLOR_BUFFER_BIT}K&&(ct|=j.DEPTH_BUFFER_BIT),pt&&(ct|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&j.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Yt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Bt.dispose(),ee.dispose(),Rt.dispose(),E.dispose(),St.dispose(),Ft.dispose(),Nt.dispose(),Xt.dispose(),Lt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Vs),vt.removeEventListener("sessionend",ks),Ui.stop()};function Yt(w){w.preventDefault(),mu("WebGLRenderer: Context Lost."),ht=!0}function ce(){mu("WebGLRenderer: Context Restored."),ht=!1;const w=P.autoReset,K=Ht.enabled,pt=Ht.autoUpdate,ct=Ht.needsUpdate,st=Ht.type;wt(),P.autoReset=w,Ht.enabled=K,Ht.autoUpdate=pt,Ht.needsUpdate=ct,Ht.type=st}function Ie(w){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const K=w.target;K.removeEventListener("dispose",Ne),Pn(K)}function Pn(w){Si(w),E.remove(w)}function Si(w){const K=E.get(w).programs;K!==void 0&&(K.forEach(function(pt){Lt.releaseProgram(pt)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,pt,ct,st,Pt){K===null&&(K=re);const jt=st.isMesh&&st.matrixWorld.determinant()<0,zt=vl(w,K,pt,ct,st);Wt.setMaterial(ct,jt);let Jt=pt.index,ne=1;if(ct.wireframe===!0){if(Jt=gt.getWireframeAttribute(pt),Jt===void 0)return;ne=2}const oe=pt.drawRange,fe=pt.attributes.position;let Zt=oe.start*ne,_e=(oe.start+oe.count)*ne;Pt!==null&&(Zt=Math.max(Zt,Pt.start*ne),_e=Math.min(_e,(Pt.start+Pt.count)*ne)),Jt!==null?(Zt=Math.max(Zt,0),_e=Math.min(_e,Jt.count)):fe!=null&&(Zt=Math.max(Zt,0),_e=Math.min(_e,fe.count));const Qe=_e-Zt;if(Qe<0||Qe===1/0)return;Nt.setup(st,ct,zt,pt,Jt);let Je,Oe=ge;if(Jt!==null&&(Je=At.get(Jt),Oe=J,Oe.setIndex(Je)),st.isMesh)ct.wireframe===!0?(Wt.setLineWidth(ct.wireframeLinewidth*he()),Oe.setMode(j.LINES)):Oe.setMode(j.TRIANGLES);else if(st.isLine){let mn=ct.linewidth;mn===void 0&&(mn=1),Wt.setLineWidth(mn*he()),st.isLineSegments?Oe.setMode(j.LINES):st.isLineLoop?Oe.setMode(j.LINE_LOOP):Oe.setMode(j.LINE_STRIP)}else st.isPoints?Oe.setMode(j.POINTS):st.isSprite&&Oe.setMode(j.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)gu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const mn=st._multiDrawStarts,Qt=st._multiDrawCounts,Fn=st._multiDrawCount,ue=Jt?At.get(Jt).bytesPerElement:1,Bn=E.get(ct).currentProgram.getUniforms();for(let Zn=0;Zn<Fn;Zn++)Bn.setValue(j,"_gl_DrawID",Zn),Oe.render(mn[Zn]/ue,Qt[Zn])}else if(st.isInstancedMesh)Oe.renderInstances(Zt,Qe,st.count);else if(pt.isInstancedBufferGeometry){const mn=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,Qt=Math.min(pt.instanceCount,mn);Oe.renderInstances(Zt,Qe,Qt)}else Oe.render(Zt,Qe)};function $r(w,K,pt){w.transparent===!0&&w.side===Hi&&w.forceSinglePass===!1?(w.side=Yn,w.needsUpdate=!0,Ta(w,K,pt),w.side=rs,w.needsUpdate=!0,Ta(w,K,pt),w.side=Hi):Ta(w,K,pt)}this.compile=function(w,K,pt=null){pt===null&&(pt=w),G=Rt.get(pt),G.init(K),z.push(G),pt.traverseVisible(function(st){st.isLight&&st.layers.test(K.layers)&&(G.pushLight(st),st.castShadow&&G.pushShadow(st))}),w!==pt&&w.traverseVisible(function(st){st.isLight&&st.layers.test(K.layers)&&(G.pushLight(st),st.castShadow&&G.pushShadow(st))}),G.setupLights();const ct=new Set;return w.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Pt=st.material;if(Pt)if(Array.isArray(Pt))for(let jt=0;jt<Pt.length;jt++){const zt=Pt[jt];$r(zt,pt,st),ct.add(zt)}else $r(Pt,pt,st),ct.add(Pt)}),G=z.pop(),ct},this.compileAsync=function(w,K,pt=null){const ct=this.compile(w,K,pt);return new Promise(st=>{function Pt(){if(ct.forEach(function(jt){E.get(jt).currentProgram.isReady()&&ct.delete(jt)}),ct.size===0){st(w);return}setTimeout(Pt,10)}me.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Gs=null;function ml(w){Gs&&Gs(w)}function Vs(){Ui.stop()}function ks(){Ui.start()}const Ui=new px;Ui.setAnimationLoop(ml),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(w){Gs=w,vt.setAnimationLoop(w),w===null?Ui.stop():Ui.start()},vt.addEventListener("sessionstart",Vs),vt.addEventListener("sessionend",ks),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const pt=vt.enabled===!0&&vt.isPresenting===!0,ct=T!==null&&(Y===null||pt)&&T.begin(O,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(K),K=vt.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,K,Y),G=Rt.get(w,z.length),G.init(K),z.push(G),ie.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Et.setFromProjectionMatrix(ie,ki,K.reversedDepth),Dt=this.localClippingEnabled,Ut=Ct.init(this.clippingPlanes,Dt),D=ee.get(w,I.length),D.init(),I.push(D),vt.enabled===!0&&vt.isPresenting===!0){const jt=O.xr.getDepthSensingMesh();jt!==null&&Xs(jt,K,-1/0,O.sortObjects)}Xs(w,K,0,O.sortObjects),D.finish(),O.sortObjects===!0&&D.sort(xt,Mt),qt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,qt&&Bt.addToRenderList(D,w),this.info.render.frame++,Ut===!0&&Ct.beginShadows();const st=G.state.shadowsArray;if(Ht.render(st,w,K),Ut===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct&&T.hasRenderPass())===!1){const jt=D.opaque,zt=D.transmissive;if(G.setupLights(),K.isArrayCamera){const Jt=K.cameras;if(zt.length>0)for(let ne=0,oe=Jt.length;ne<oe;ne++){const fe=Jt[ne];rn(jt,zt,w,fe)}qt&&Bt.render(w);for(let ne=0,oe=Jt.length;ne<oe;ne++){const fe=Jt[ne];yi(D,w,fe,fe.viewport)}}else zt.length>0&&rn(jt,zt,w,K),qt&&Bt.render(w),yi(D,w,K)}Y!==null&&Q===0&&($.updateMultisampleRenderTarget(Y),$.updateRenderTargetMipmap(Y)),ct&&T.end(O),w.isScene===!0&&w.onAfterRender(O,w,K),Nt.resetDefaultState(),at=-1,tt=null,z.pop(),z.length>0?(G=z[z.length-1],Ut===!0&&Ct.setGlobalState(O.clippingPlanes,G.state.camera)):G=null,I.pop(),I.length>0?D=I[I.length-1]:D=null};function Xs(w,K,pt,ct){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)pt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)G.pushLight(w),w.castShadow&&G.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Et.intersectsSprite(w)){ct&&Vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);const jt=Ft.update(w),zt=w.material;zt.visible&&D.push(w,jt,zt,pt,Vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Et.intersectsObject(w))){const jt=Ft.update(w),zt=w.material;if(ct&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Vt.copy(w.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Vt.copy(jt.boundingSphere.center)),Vt.applyMatrix4(w.matrixWorld).applyMatrix4(ie)),Array.isArray(zt)){const Jt=jt.groups;for(let ne=0,oe=Jt.length;ne<oe;ne++){const fe=Jt[ne],Zt=zt[fe.materialIndex];Zt&&Zt.visible&&D.push(w,jt,Zt,pt,Vt.z,fe)}}else zt.visible&&D.push(w,jt,zt,pt,Vt.z,null)}}const Pt=w.children;for(let jt=0,zt=Pt.length;jt<zt;jt++)Xs(Pt[jt],K,pt,ct)}function yi(w,K,pt,ct){const{opaque:st,transmissive:Pt,transparent:jt}=w;G.setupLightsView(pt),Ut===!0&&Ct.setGlobalState(O.clippingPlanes,pt),ct&&Wt.viewport(N.copy(ct)),st.length>0&&pn(st,K,pt),Pt.length>0&&pn(Pt,K,pt),jt.length>0&&pn(jt,K,pt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function rn(w,K,pt,ct){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[ct.id]===void 0){const Zt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[ct.id]=new Wi(1,1,{generateMipmaps:!0,type:Zt?Ma:oi,minFilter:Bs,samples:Math.max(4,Ae.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Pt=G.state.transmissionRenderTarget[ct.id],jt=ct.viewport||N;Pt.setSize(jt.z*O.transmissionResolutionScale,jt.w*O.transmissionResolutionScale);const zt=O.getRenderTarget(),Jt=O.getActiveCubeFace(),ne=O.getActiveMipmapLevel();O.setRenderTarget(Pt),O.getClearColor(nt),_t=O.getClearAlpha(),_t<1&&O.setClearColor(16777215,.5),O.clear(),qt&&Bt.render(pt);const oe=O.toneMapping;O.toneMapping=Xi;const fe=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),G.setupLightsView(ct),Ut===!0&&Ct.setGlobalState(O.clippingPlanes,ct),pn(w,pt,ct),$.updateMultisampleRenderTarget(Pt),$.updateRenderTargetMipmap(Pt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let _e=0,Qe=K.length;_e<Qe;_e++){const Je=K[_e],{object:Oe,geometry:mn,material:Qt,group:Fn}=Je;if(Qt.side===Hi&&Oe.layers.test(ct.layers)){const ue=Qt.side;Qt.side=Yn,Qt.needsUpdate=!0,Zi(Oe,pt,ct,mn,Qt,Fn),Qt.side=ue,Qt.needsUpdate=!0,Zt=!0}}Zt===!0&&($.updateMultisampleRenderTarget(Pt),$.updateRenderTargetMipmap(Pt))}O.setRenderTarget(zt,Jt,ne),O.setClearColor(nt,_t),fe!==void 0&&(ct.viewport=fe),O.toneMapping=oe}function pn(w,K,pt){const ct=K.isScene===!0?K.overrideMaterial:null;for(let st=0,Pt=w.length;st<Pt;st++){const jt=w[st],{object:zt,geometry:Jt,group:ne}=jt;let oe=jt.material;oe.allowOverride===!0&&ct!==null&&(oe=ct),zt.layers.test(pt.layers)&&Zi(zt,K,pt,Jt,oe,ne)}}function Zi(w,K,pt,ct,st,Pt){w.onBeforeRender(O,K,pt,ct,st,Pt),w.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),st.onBeforeRender(O,K,pt,ct,w,Pt),st.transparent===!0&&st.side===Hi&&st.forceSinglePass===!1?(st.side=Yn,st.needsUpdate=!0,O.renderBufferDirect(pt,K,ct,st,w,Pt),st.side=rs,st.needsUpdate=!0,O.renderBufferDirect(pt,K,ct,st,w,Pt),st.side=Hi):O.renderBufferDirect(pt,K,ct,st,w,Pt),w.onAfterRender(O,K,pt,ct,st,Pt)}function Ta(w,K,pt){K.isScene!==!0&&(K=re);const ct=E.get(w),st=G.state.lights,Pt=G.state.shadowsArray,jt=st.state.version,zt=Lt.getParameters(w,st.state,Pt,K,pt),Jt=Lt.getProgramCacheKey(zt);let ne=ct.programs;ct.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?K.environment:null,ct.fog=K.fog;const oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ct.envMap=St.get(w.envMap||ct.environment,oe),ct.envMapRotation=ct.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,ne===void 0&&(w.addEventListener("dispose",Ne),ne=new Map,ct.programs=ne);let fe=ne.get(Jt);if(fe!==void 0){if(ct.currentProgram===fe&&ct.lightsStateVersion===jt)return _l(w,zt),fe}else zt.uniforms=Lt.getUniforms(w),w.onBeforeCompile(zt,O),fe=Lt.acquireProgram(zt,Jt),ne.set(Jt,fe),ct.uniforms=zt.uniforms;const Zt=ct.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Ct.uniform),_l(w,zt),ct.needsLights=to(w),ct.lightsStateVersion=jt,ct.needsLights&&(Zt.ambientLightColor.value=st.state.ambient,Zt.lightProbe.value=st.state.probe,Zt.directionalLights.value=st.state.directional,Zt.directionalLightShadows.value=st.state.directionalShadow,Zt.spotLights.value=st.state.spot,Zt.spotLightShadows.value=st.state.spotShadow,Zt.rectAreaLights.value=st.state.rectArea,Zt.ltc_1.value=st.state.rectAreaLTC1,Zt.ltc_2.value=st.state.rectAreaLTC2,Zt.pointLights.value=st.state.point,Zt.pointLightShadows.value=st.state.pointShadow,Zt.hemisphereLights.value=st.state.hemi,Zt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Zt.spotLightMatrix.value=st.state.spotLightMatrix,Zt.spotLightMap.value=st.state.spotLightMap,Zt.pointShadowMatrix.value=st.state.pointShadowMatrix),ct.currentProgram=fe,ct.uniformsList=null,fe}function gl(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=fu.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function _l(w,K){const pt=E.get(w);pt.outputColorSpace=K.outputColorSpace,pt.batching=K.batching,pt.batchingColor=K.batchingColor,pt.instancing=K.instancing,pt.instancingColor=K.instancingColor,pt.instancingMorph=K.instancingMorph,pt.skinning=K.skinning,pt.morphTargets=K.morphTargets,pt.morphNormals=K.morphNormals,pt.morphColors=K.morphColors,pt.morphTargetsCount=K.morphTargetsCount,pt.numClippingPlanes=K.numClippingPlanes,pt.numIntersection=K.numClipIntersection,pt.vertexAlphas=K.vertexAlphas,pt.vertexTangents=K.vertexTangents,pt.toneMapping=K.toneMapping}function vl(w,K,pt,ct,st){K.isScene!==!0&&(K=re),$.resetTextureUnits();const Pt=K.fog,jt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?K.environment:null,zt=Y===null?O.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Yr,Jt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,ne=St.get(ct.envMap||jt,Jt),oe=ct.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,fe=!!pt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Zt=!!pt.morphAttributes.position,_e=!!pt.morphAttributes.normal,Qe=!!pt.morphAttributes.color;let Je=Xi;ct.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Je=O.toneMapping);const Oe=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,mn=Oe!==void 0?Oe.length:0,Qt=E.get(ct),Fn=G.state.lights;if(Ut===!0&&(Dt===!0||w!==tt)){const ln=w===tt&&ct.id===at;Ct.setState(ct,w,ln)}let ue=!1;ct.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Fn.state.version||Qt.outputColorSpace!==zt||st.isBatchedMesh&&Qt.batching===!1||!st.isBatchedMesh&&Qt.batching===!0||st.isBatchedMesh&&Qt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Qt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Qt.instancing===!1||!st.isInstancedMesh&&Qt.instancing===!0||st.isSkinnedMesh&&Qt.skinning===!1||!st.isSkinnedMesh&&Qt.skinning===!0||st.isInstancedMesh&&Qt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Qt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Qt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Qt.instancingMorph===!1&&st.morphTexture!==null||Qt.envMap!==ne||ct.fog===!0&&Qt.fog!==Pt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ct.numPlanes||Qt.numIntersection!==Ct.numIntersection)||Qt.vertexAlphas!==oe||Qt.vertexTangents!==fe||Qt.morphTargets!==Zt||Qt.morphNormals!==_e||Qt.morphColors!==Qe||Qt.toneMapping!==Je||Qt.morphTargetsCount!==mn)&&(ue=!0):(ue=!0,Qt.__version=ct.version);let Bn=Qt.currentProgram;ue===!0&&(Bn=Ta(ct,K,st));let Zn=!1,Mi=!1,Kn=!1;const ze=Bn.getUniforms(),on=Qt.uniforms;if(Wt.useProgram(Bn.program)&&(Zn=!0,Mi=!0,Kn=!0),ct.id!==at&&(at=ct.id,Mi=!0),Zn||tt!==w){Wt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ze.setValue(j,"projectionMatrix",w.projectionMatrix),ze.setValue(j,"viewMatrix",w.matrixWorldInverse);const bi=ze.map.cameraPosition;bi!==void 0&&bi.setValue(j,Gt.setFromMatrixPosition(w.matrixWorld)),Ae.logarithmicDepthBuffer&&ze.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ze.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),tt!==w&&(tt=w,Mi=!0,Kn=!0)}if(Qt.needsLights&&(Fn.state.directionalShadowMap.length>0&&ze.setValue(j,"directionalShadowMap",Fn.state.directionalShadowMap,$),Fn.state.spotShadowMap.length>0&&ze.setValue(j,"spotShadowMap",Fn.state.spotShadowMap,$),Fn.state.pointShadowMap.length>0&&ze.setValue(j,"pointShadowMap",Fn.state.pointShadowMap,$)),st.isSkinnedMesh){ze.setOptional(j,st,"bindMatrix"),ze.setOptional(j,st,"bindMatrixInverse");const ln=st.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ze.setValue(j,"boneTexture",ln.boneTexture,$))}st.isBatchedMesh&&(ze.setOptional(j,st,"batchingTexture"),ze.setValue(j,"batchingTexture",st._matricesTexture,$),ze.setOptional(j,st,"batchingIdTexture"),ze.setValue(j,"batchingIdTexture",st._indirectTexture,$),ze.setOptional(j,st,"batchingColorTexture"),st._colorsTexture!==null&&ze.setValue(j,"batchingColorTexture",st._colorsTexture,$));const zn=pt.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&kt.update(st,pt,Bn),(Mi||Qt.receiveShadow!==st.receiveShadow)&&(Qt.receiveShadow=st.receiveShadow,ze.setValue(j,"receiveShadow",st.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&K.environment!==null&&(on.envMapIntensity.value=K.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=OR()),Mi&&(ze.setValue(j,"toneMappingExposure",O.toneMappingExposure),Qt.needsLights&&os(on,Kn),Pt&&ct.fog===!0&&te.refreshFogUniforms(on,Pt),te.refreshMaterialUniforms(on,ct,et,X,G.state.transmissionRenderTarget[w.id]),fu.upload(j,gl(Qt),on,$)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(fu.upload(j,gl(Qt),on,$),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ze.setValue(j,"center",st.center),ze.setValue(j,"modelViewMatrix",st.modelViewMatrix),ze.setValue(j,"normalMatrix",st.normalMatrix),ze.setValue(j,"modelMatrix",st.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const ln=ct.uniformsGroups;for(let bi=0,Ki=ln.length;bi<Ki;bi++){const Ws=ln[bi];Xt.update(Ws,Bn),Xt.bind(Ws,Bn)}}return Bn}function os(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function to(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,K,pt){const ct=E.get(w);ct.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=K,E.get(w.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:pt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const pt=E.get(w);pt.__webglFramebuffer=K,pt.__useDefaultFramebuffer=K===void 0};const Aa=j.createFramebuffer();this.setRenderTarget=function(w,K=0,pt=0){Y=w,H=K,Q=pt;let ct=null,st=!1,Pt=!1;if(w){const zt=E.get(w);if(zt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(j.FRAMEBUFFER,zt.__webglFramebuffer),N.copy(w.viewport),B.copy(w.scissor),k=w.scissorTest,Wt.viewport(N),Wt.scissor(B),Wt.setScissorTest(k),at=-1;return}else if(zt.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(zt.__hasExternalTextures)$.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const oe=w.depthTexture;if(zt.__boundDepthTexture!==oe){if(oe!==null&&E.has(oe)&&(w.width!==oe.image.width||w.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}const Jt=w.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);const ne=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[K])?ct=ne[K][pt]:ct=ne[K],st=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?ct=E.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?ct=ne[pt]:ct=ne,N.copy(w.viewport),B.copy(w.scissor),k=w.scissorTest}else N.copy(Z).multiplyScalar(et).floor(),B.copy(V).multiplyScalar(et).floor(),k=dt;if(pt!==0&&(ct=Aa),Wt.bindFramebuffer(j.FRAMEBUFFER,ct)&&Wt.drawBuffers(w,ct),Wt.viewport(N),Wt.scissor(B),Wt.setScissorTest(k),st){const zt=E.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,zt.__webglTexture,pt)}else if(Pt){const zt=K;for(let Jt=0;Jt<w.textures.length;Jt++){const ne=E.get(w.textures[Jt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Jt,ne.__webglTexture,pt,zt)}}else if(w!==null&&pt!==0){const zt=E.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,zt.__webglTexture,pt)}at=-1},this.readRenderTargetPixels=function(w,K,pt,ct,st,Pt,jt,zt=0){if(!(w&&w.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt){Wt.bindFramebuffer(j.FRAMEBUFFER,Jt);try{const ne=w.textures[zt],oe=ne.format,fe=ne.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+zt),!Ae.textureFormatReadable(oe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(fe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ct&&pt>=0&&pt<=w.height-st&&j.readPixels(K,pt,ct,st,Ot.convert(oe),Ot.convert(fe),Pt)}finally{const ne=Y!==null?E.get(Y).__webglFramebuffer:null;Wt.bindFramebuffer(j.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(w,K,pt,ct,st,Pt,jt,zt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt)if(K>=0&&K<=w.width-ct&&pt>=0&&pt<=w.height-st){Wt.bindFramebuffer(j.FRAMEBUFFER,Jt);const ne=w.textures[zt],oe=ne.format,fe=ne.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+zt),!Ae.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Zt),j.bufferData(j.PIXEL_PACK_BUFFER,Pt.byteLength,j.STREAM_READ),j.readPixels(K,pt,ct,st,Ot.convert(oe),Ot.convert(fe),0);const _e=Y!==null?E.get(Y).__webglFramebuffer:null;Wt.bindFramebuffer(j.FRAMEBUFFER,_e);const Qe=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await KM(j,Qe,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Zt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Pt),j.deleteBuffer(Zt),j.deleteSync(Qe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,pt=0){const ct=Math.pow(2,-pt),st=Math.floor(w.image.width*ct),Pt=Math.floor(w.image.height*ct),jt=K!==null?K.x:0,zt=K!==null?K.y:0;$.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,pt,0,0,jt,zt,st,Pt),Wt.unbindTexture()};const Ra=j.createFramebuffer(),ls=j.createFramebuffer();this.copyTextureToTexture=function(w,K,pt=null,ct=null,st=0,Pt=0){let jt,zt,Jt,ne,oe,fe,Zt,_e,Qe;const Je=w.isCompressedTexture?w.mipmaps[Pt]:w.image;if(pt!==null)jt=pt.max.x-pt.min.x,zt=pt.max.y-pt.min.y,Jt=pt.isBox3?pt.max.z-pt.min.z:1,ne=pt.min.x,oe=pt.min.y,fe=pt.isBox3?pt.min.z:0;else{const on=Math.pow(2,-st);jt=Math.floor(Je.width*on),zt=Math.floor(Je.height*on),w.isDataArrayTexture?Jt=Je.depth:w.isData3DTexture?Jt=Math.floor(Je.depth*on):Jt=1,ne=0,oe=0,fe=0}ct!==null?(Zt=ct.x,_e=ct.y,Qe=ct.z):(Zt=0,_e=0,Qe=0);const Oe=Ot.convert(K.format),mn=Ot.convert(K.type);let Qt;K.isData3DTexture?($.setTexture3D(K,0),Qt=j.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?($.setTexture2DArray(K,0),Qt=j.TEXTURE_2D_ARRAY):($.setTexture2D(K,0),Qt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);const Fn=j.getParameter(j.UNPACK_ROW_LENGTH),ue=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Bn=j.getParameter(j.UNPACK_SKIP_PIXELS),Zn=j.getParameter(j.UNPACK_SKIP_ROWS),Mi=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Je.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Je.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ne),j.pixelStorei(j.UNPACK_SKIP_ROWS,oe),j.pixelStorei(j.UNPACK_SKIP_IMAGES,fe);const Kn=w.isDataArrayTexture||w.isData3DTexture,ze=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const on=E.get(w),zn=E.get(K),ln=E.get(on.__renderTarget),bi=E.get(zn.__renderTarget);Wt.bindFramebuffer(j.READ_FRAMEBUFFER,ln.__webglFramebuffer),Wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ki=0;Ki<Jt;Ki++)Kn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(w).__webglTexture,st,fe+Ki),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(K).__webglTexture,Pt,Qe+Ki)),j.blitFramebuffer(ne,oe,jt,zt,Zt,_e,jt,zt,j.DEPTH_BUFFER_BIT,j.NEAREST);Wt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(st!==0||w.isRenderTargetTexture||E.has(w)){const on=E.get(w),zn=E.get(K);Wt.bindFramebuffer(j.READ_FRAMEBUFFER,Ra),Wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,ls);for(let ln=0;ln<Jt;ln++)Kn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,on.__webglTexture,st,fe+ln):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,on.__webglTexture,st),ze?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,zn.__webglTexture,Pt,Qe+ln):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,zn.__webglTexture,Pt),st!==0?j.blitFramebuffer(ne,oe,jt,zt,Zt,_e,jt,zt,j.COLOR_BUFFER_BIT,j.NEAREST):ze?j.copyTexSubImage3D(Qt,Pt,Zt,_e,Qe+ln,ne,oe,jt,zt):j.copyTexSubImage2D(Qt,Pt,Zt,_e,ne,oe,jt,zt);Wt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else ze?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Qt,Pt,Zt,_e,Qe,jt,zt,Jt,Oe,mn,Je.data):K.isCompressedArrayTexture?j.compressedTexSubImage3D(Qt,Pt,Zt,_e,Qe,jt,zt,Jt,Oe,Je.data):j.texSubImage3D(Qt,Pt,Zt,_e,Qe,jt,zt,Jt,Oe,mn,Je):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Pt,Zt,_e,jt,zt,Oe,mn,Je.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Pt,Zt,_e,Je.width,Je.height,Oe,Je.data):j.texSubImage2D(j.TEXTURE_2D,Pt,Zt,_e,jt,zt,Oe,mn,Je);j.pixelStorei(j.UNPACK_ROW_LENGTH,Fn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ue),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Bn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Zn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Mi),Pt===0&&K.generateMipmaps&&j.generateMipmap(Qt),Wt.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),Wt.unbindTexture()},this.resetState=function(){H=0,Q=0,Y=null,Wt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const su=16,nl=400,FR=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Gr=3,Ov=Math.PI*.75,Pv=2.6,yh=1.4,il=1.8;function BR({eegData:r,yScale:t,onExit:i}){const s=ft.useRef(null),l=ft.useRef(null),c=ft.useRef(null),d=ft.useRef(null),p=ft.useRef([]),m=ft.useRef(null),h=ft.useRef(null),_=ft.useRef(!1),S=ft.useRef(new Hb),g=ft.useRef(r),M=ft.useRef(t),b=ft.useRef(i);g.current=r,M.current=t,b.current=i;const R=ft.useCallback(()=>{if(_.current)return;_.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const v=l.current;v&&(v.xr.enabled=!1,v.setAnimationLoop(null),v.dispose(),l.current=null),p.current=[]},[]);return ft.useEffect(()=>{const v=s.current;if(!v)return;_.current=!1;const x=S.current;x.start();const A=new db;A.background=new ye(198159),A.fog=new wp(198159,.07),c.current=A;const U=new ri(80,window.innerWidth/window.innerHeight,.05,60);U.position.set(0,yh,0),d.current=U;const D=new PR({antialias:!0,alpha:!1});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(window.innerWidth,window.innerHeight),D.xr.enabled=!0,D.toneMapping=xp,D.toneMappingExposure=1.2,v.appendChild(D.domElement),l.current=D;const G=new Bb(1122884,.8);A.add(G);const I=new Fb(4491519,1.5,25);I.position.set(0,yh+1,0),A.add(I);const z=1500,T=new Float32Array(z*3),O=new Float32Array(z*3);for(let et=0;et<z;et++){const xt=10+Math.random()*15,Mt=Math.random()*Math.PI*2,Z=Math.acos(2*Math.random()-1);T[et*3]=xt*Math.sin(Z)*Math.cos(Mt),T[et*3+1]=xt*Math.sin(Z)*Math.sin(Mt),T[et*3+2]=xt*Math.cos(Z),O[et*3]=.7+Math.random()*.3,O[et*3+1]=.75+Math.random()*.25,O[et*3+2]=.85+Math.random()*.15}const ht=new On;ht.setAttribute("position",new Nn(T,3)),ht.setAttribute("color",new Nn(O,3));const H=new hp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),Q=new av(ht,H);A.add(Q);const at=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:et,center:xt,count:Mt,spread:Z})=>{const V=new Float32Array(Mt*3);for(let Dt=0;Dt<Mt;Dt++)V[Dt*3]=xt[0]+(Math.random()-.5)*Z,V[Dt*3+1]=xt[1]+(Math.random()-.5)*Z,V[Dt*3+2]=xt[2]+(Math.random()-.5)*Z;const dt=new On;dt.setAttribute("position",new Nn(V,3));const Et=new hp({color:et,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),Ut=new av(dt,Et);return A.add(Ut),Ut}),tt=[],N=new ye;for(let et=0;et<su;et++){const xt=et/(su-1),Mt=-Ov/2+xt*Ov,Z=yh+Pv/2-xt*Pv,V=FR[et],dt=new Float32Array(nl*3),Et=new Float32Array(nl*3),Ut=new On;Ut.setAttribute("position",new Nn(dt,3)),Ut.setAttribute("color",new Nn(Et,3)),Ut.setDrawRange(0,0);const Dt=new Lp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),ie=new ox(Ut,Dt);A.add(ie);const Gt=document.createElement("canvas");Gt.width=128,Gt.height=48;const Vt=Gt.getContext("2d");Vt.clearRect(0,0,128,48),N.setHSL(V,.9,.7),Vt.font="bold 28px monospace",Vt.fillStyle=`#${N.getHexString()}`,Vt.textAlign="center",Vt.textBaseline="middle",Vt.fillText(`Ch ${et+1}`,64,24);const re=new Tb(Gt),qt=new sx({map:re,transparent:!0,opacity:.65}),he=new vb(qt);he.scale.set(.4,.15,1);const j=Math.sin(Mt)*(Gr+.05),Te=-Math.cos(Mt)*(Gr+.05),me=j-Math.cos(Mt)*(il/2),Ae=Te+Math.sin(Mt)*(il/2);he.position.set(me-Math.cos(Mt)*.3,Z,Ae+Math.sin(Mt)*.3),A.add(he);const Wt=new pl(il+.3,.14),P=new Np({color:new ye().setHSL(V,1,.55),transparent:!0,opacity:.05,side:Hi,depthWrite:!1}),E=new qi(Wt,P);E.position.set(Math.sin(Mt)*Gr,Z,-Math.cos(Mt)*Gr),E.rotation.y=Mt,A.add(E),tt.push({line:ie,geometry:Ut,positions:dt,colors:Et,angle:Mt,yPos:Z,glowPlane:E,baseHue:V})}p.current=tt;const B=new Gb(12,24,660784,396830);A.add(B);function k(et){const xt=g.current,Mt=xt.buffers.current;if(!Mt)return;const Z=xt.samplesInBuffer.current,V=xt.writeIndex.current,dt=xt.bufferSize;if(Z<2)return;const Et=Z>nl?Math.floor(Z/nl):1,Ut=Math.min(nl,Math.ceil(Z/Et)),Dt=M.current||100;for(let ie=0;ie<su;ie++){const{positions:Gt,colors:Vt,geometry:re,angle:qt,yPos:he,glowPlane:j,baseHue:Te}=tt[ie],me=Mt[ie],Ae=Math.sin(qt)*Gr,Wt=-Math.cos(qt)*Gr,P=-Math.cos(qt),E=-Math.sin(qt),$=(Te+Math.sin(et*.08+ie*.4)*.08+1)%1,St=.85+Math.sin(et*.15+ie)*.1;let At=0;for(let Ft=0;Ft<Ut;Ft++){const Lt=Ft*Et,te=(V-Z+Lt+dt)%dt,ee=Ft/Math.max(1,Ut-1),Rt=me[te]/Dt;At+=Rt*Rt,Gt[Ft*3]=Ae+P*(ee-.5)*il,Gt[Ft*3+1]=he+Rt*.14,Gt[Ft*3+2]=Wt+E*(ee-.5)*il;const Ct=Math.sin(ee*Math.PI),Ht=.35+Math.min(Math.abs(Rt)*3,1)*.65,Bt=Math.min(.95,.5*Ct+Ht*.5);N.setHSL($,St,Bt),Vt[Ft*3]=N.r,Vt[Ft*3+1]=N.g,Vt[Ft*3+2]=N.b}re.attributes.position.needsUpdate=!0,re.attributes.color.needsUpdate=!0,re.setDrawRange(0,Ut);const gt=Math.sqrt(At/Math.max(1,Ut));j.material.opacity=Math.min(.2,.03+gt*.9)}G.intensity=.6+Math.sin(et*.5)*.15,I.intensity=1.2+Math.sin(et*.3)*.4,Q.rotation.y=et*.005,Q.rotation.x=Math.sin(et*.003)*.02,at.forEach((ie,Gt)=>{ie.material.opacity=.1+Math.sin(et*.2+Gt*2.1)*.06,ie.rotation.y=et*.003*(Gt%2===0?1:-1)})}let nt=null;async function _t(){if(navigator.xr)for(const et of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(et)){nt=et;break}}catch{}if(nt&&nt!=="inline")try{const et=await navigator.xr.requestSession(nt,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=et,D.xr.setSession(et),et.addEventListener("end",()=>{m.current=null,b.current()}),D.setAnimationLoop(()=>{k(x.getElapsedTime()),D.render(A,U)});return}catch{}F()}function F(){let et=!1,xt=0,Mt=0,Z=0,V=0,dt=!0;const Et=D.domElement,Ut=Vt=>{et=!0,dt=!1,xt=Vt.clientX,Mt=Vt.clientY},Dt=()=>{et=!1},ie=Vt=>{et&&(Z-=(Vt.clientX-xt)*.003,V-=(Vt.clientY-Mt)*.003,V=Math.max(-Math.PI/3,Math.min(Math.PI/3,V)),xt=Vt.clientX,Mt=Vt.clientY)};Et.addEventListener("pointerdown",Ut),Et.addEventListener("pointerup",Dt),Et.addEventListener("pointermove",ie);function Gt(){const Vt=x.getElapsedTime();dt&&(Z=Vt*.04),U.rotation.order="YXZ",U.rotation.y=Z,U.rotation.x=V,k(Vt),D.render(A,U),h.current=requestAnimationFrame(Gt)}h.current=requestAnimationFrame(Gt)}_t();function X(){l.current&&(U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",X),()=>{window.removeEventListener("resize",X),R(),v.contains(D.domElement)&&v.removeChild(D.domElement)}},[]),L.jsxs("div",{className:"xr-overlay",children:[L.jsx("div",{className:"xr-container",ref:s}),L.jsxs("div",{className:"xr-hud",children:[L.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{R(),b.current()},children:"✕ Exit XR"}),L.jsxs("div",{className:"xr-info",children:[L.jsx("span",{className:"xr-badge",children:"WebXR"}),L.jsxs("span",{children:[su," channels · ±",t," µV"]})]})]})]})}function zR(){const[r,t]=ft.useState(null),[i,s]=ft.useState("idle"),[l,c]=ft.useState(""),[d,p]=ft.useState(!1);if(ft.useEffect(()=>{s("checking"),fetch("/api/update/check").then(_=>_.json()).then(_=>{if(_.error){s("idle");return}t(_),s("idle")}).catch(()=>s("idle"))},[]),d||!(r!=null&&r.update_available)||i==="checking")return null;function m(){s("updating"),c(""),fetch("/api/update/apply",{method:"POST"}).then(_=>_.json()).then(_=>{_.ok?(s("done"),c(_.restart_required?"Update installed! Restart the server to use the new version.":"Update installed!")):(s("error"),c(_.message||"Update failed."))}).catch(_=>{s("error"),c("Network error: "+_.message)})}const h=r.install_method==="git"?"git pull":"pip upgrade";return L.jsx("div",{className:"update-banner",children:L.jsxs("div",{className:"update-banner-content",children:[i==="idle"&&L.jsxs(L.Fragment,{children:[L.jsxs("span",{className:"update-banner-text",children:["Update available: ",L.jsx("strong",{children:r.current_version})," → ",L.jsx("strong",{children:r.latest_version}),L.jsxs("span",{className:"update-method",children:["(",h,")"]})]}),L.jsx("button",{className:"btn update-btn",onClick:m,children:"Update Now"}),L.jsx("button",{className:"update-dismiss",onClick:()=>p(!0),title:"Dismiss",children:"✕"})]}),i==="updating"&&L.jsxs("span",{className:"update-banner-text",children:[L.jsx("span",{className:"update-spinner"})," Updating…"]}),i==="done"&&L.jsxs(L.Fragment,{children:[L.jsx("span",{className:"update-banner-text update-success",children:l}),L.jsx("button",{className:"update-dismiss",onClick:()=>p(!0),title:"Dismiss",children:"✕"})]}),i==="error"&&L.jsxs(L.Fragment,{children:[L.jsx("span",{className:"update-banner-text update-error",children:l}),L.jsx("button",{className:"btn update-btn",onClick:m,children:"Retry"}),L.jsx("button",{className:"update-dismiss",onClick:()=>p(!0),title:"Dismiss",children:"✕"})]})]})})}const du=16,Fv=new Set(Array.from({length:du},(r,t)=>t)),IR=new Set([0,1,2,3]),HR=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],GR=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function VR(){const[r,t]=ft.useState("live"),[i,s]=ft.useState(null),[l,c]=ft.useState(!1),[d,p]=ft.useState(!0),[m,h]=ft.useState(!1),[_,S]=ft.useState(1),[g,M]=ft.useState(40),[b,R]=ft.useState(4),[v,x]=ft.useState(100),[A,U]=ft.useState(null),[D,G]=ft.useState(!1),[I,z]=ft.useState(()=>window.innerWidth<768?new Set(IR):new Set(Fv)),T=zy(b),O=ft.useRef(I);O.current=I;const ht=ft.useCallback(k=>{z(nt=>{const _t=new Set(nt);return _t.has(k)?_t.delete(k):_t.add(k),_t})},[]),H=ft.useCallback(k=>{z(k?new Set(Fv):new Set)},[]);function Q(){const k=!l;c(k),T.setPaused(k)}function Y(){const k=!m;h(k),T.sendCommand({cmd:"set_filter",enabled:k,lowcut:parseFloat(_)||1,highcut:parseFloat(g)||40})}function at(){T.sendCommand({cmd:T.recording?"stop_record":"start_record"})}function tt(k){const nt=Math.floor(k/60),_t=Math.floor(k%60);return`${String(nt).padStart(2,"0")}:${String(_t).padStart(2,"0")}`}function N(k,nt){m&&T.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(k)||1,highcut:parseFloat(nt)||40})}const B=ft.useCallback(k=>{if(!O.current.has(k)){z(nt=>{const _t=new Set(nt);return _t.add(k),_t});return}U(nt=>nt===k?null:k)},[]);return ft.useEffect(()=>{function k(nt){if(!(nt.target.tagName==="INPUT"||nt.target.tagName==="SELECT"||nt.target.tagName==="TEXTAREA")){if(r!=="live"){nt.code==="Escape"&&(r==="playback"?(t("sessions"),s(null)):r==="sessions"&&t("live"));return}switch(nt.code){case"Space":nt.preventDefault(),Q();break;case"KeyR":at();break;case"KeyF":p(_t=>!_t);break;case"KeyV":G(_t=>!_t);break;case"Escape":D?G(!1):A!==null?U(null):T.recordResult&&T.dismissRecordResult();break}}}return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[A,T.recordResult,r]),r==="playback"&&i?L.jsx(Od,{children:L.jsx(pM,{filename:i,onBack:()=>{t("sessions"),s(null)}})}):r==="sessions"?L.jsx(Od,{children:L.jsx(rM,{onSelect:k=>{s(k),t("playback")},onBack:()=>t("live")})}):(T.data.gridSuspended=A!==null&&I.has(A),L.jsxs(Od,{children:[L.jsx(zR,{}),L.jsxs("header",{className:"header",children:[L.jsxs("h1",{children:["Pi",L.jsx("span",{children:"EEG"}),"-16"," ",L.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),L.jsxs("div",{className:"status-bar",children:[L.jsxs("span",{children:[L.jsx("span",{className:`status-dot${T.connected?" connected":""}`}),T.connected?" Connected":" Disconnected"]}),L.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"⏸ PAUSED":"● LIVE"}),L.jsx("span",{children:T.hz?`${T.hz} Hz`:"— Hz"}),L.jsxs("span",{children:[T.sampleCount.toLocaleString()," samples"]})]})]}),L.jsxs("div",{className:"controls",children:[L.jsx("button",{className:`btn${l?" active":""}`,onClick:Q,children:l?"▶ Resume":"⏸ Pause"}),L.jsxs("button",{className:`btn btn-record${T.recording?" recording":""}`,onClick:at,children:[L.jsx("span",{className:"rec-dot"}),T.recording?`⏹ Stop ${tt(T.recordElapsed)}`:"⏺ Record"]}),L.jsxs("button",{className:`btn${m?" active":""}`,onClick:Y,children:["Filter: ",m?"ON":"OFF"]}),L.jsxs("button",{className:`btn${d?" active":""}`,onClick:()=>p(k=>!k),children:["FFT ",d?"ON":"OFF"]}),L.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),L.jsx("button",{className:"btn btn-xr",onClick:()=>G(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),L.jsx("div",{className:"sep"}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Low"}),L.jsx("input",{type:"number",value:_,min:.1,max:50,step:.5,onChange:k=>{S(k.target.value),N(k.target.value,g)}})," ","Hz"]}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"High"}),L.jsx("input",{type:"number",value:g,min:1,max:125,step:1,onChange:k=>{M(k.target.value),N(_,k.target.value)}})," ","Hz"]}),L.jsx("div",{className:"sep"}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Time window"}),L.jsx("select",{value:b,onChange:k=>R(parseInt(k.target.value)),children:GR.map(k=>L.jsx("option",{value:k.value,children:k.label},k.value))})]}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Scale"}),L.jsx("select",{value:v,onChange:k=>x(parseInt(k.target.value)),children:HR.map(k=>L.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),L.jsxs("div",{className:"channel-selector",children:[L.jsx("span",{className:"cs-label",children:"Channels"}),L.jsx("button",{className:"cs-toggle",onClick:()=>H(!0),children:"All"}),L.jsx("button",{className:"cs-toggle",onClick:()=>H(!1),children:"None"}),L.jsx("div",{className:"cs-grid",children:Array.from({length:du},(k,nt)=>L.jsx("button",{className:`cs-ch${I.has(nt)?" on":""}`,onClick:()=>ht(nt),children:nt+1},nt))}),L.jsxs("span",{className:"cs-count",children:[I.size,"/",du]})]}),L.jsxs("div",{className:`main-area${d?" with-fft":""}`,children:[A!==null&&I.has(A)&&L.jsx($y,{chIdx:A,eegData:T.data,yRange:v,onClose:()=>U(null)}),L.jsx("div",{className:"grid",children:Array.from({length:du},(k,nt)=>L.jsx(Xy,{chIdx:nt,eegData:T.data,yRange:v,active:I.has(nt),onToggleExpand:()=>B(nt)},nt))}),d&&L.jsx(aM,{eegData:T.data})]}),T.recordResult&&L.jsx("div",{className:"modal-overlay",children:L.jsxs("div",{className:"modal-card",children:[L.jsx("h2",{children:"Recording Complete"}),L.jsxs("div",{className:"modal-details",children:[L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"File"}),L.jsx("span",{className:"modal-value",children:T.recordResult.filename})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Duration"}),L.jsx("span",{className:"modal-value",children:tt(T.recordResult.duration)})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Frames"}),L.jsx("span",{className:"modal-value",children:T.recordResult.frames.toLocaleString()})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Saved to"}),L.jsx("span",{className:"modal-value modal-path",children:T.recordResult.path})]})]}),L.jsxs("div",{className:"modal-actions",children:[L.jsx("a",{className:"btn modal-btn-download",href:T.recordResult.downloadUrl,download:!0,children:"Download CSV"}),L.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const k=T.recordResult.filename;T.dismissRecordResult(),s(k),t("playback")},children:"View Session"}),L.jsx("button",{className:"btn modal-btn-dismiss",onClick:T.dismissRecordResult,children:"Dismiss"})]})]})}),D&&L.jsx(BR,{eegData:T.data,yScale:v,onExit:()=>G(!1)}),L.jsx(sM,{}),L.jsxs("footer",{className:"footer",children:[L.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),L.jsxs("span",{className:"kbd-hints",children:[L.jsx("kbd",{children:"Space"})," Pause ",L.jsx("kbd",{children:"R"})," Record ",L.jsx("kbd",{children:"F"})," FFT ",L.jsx("kbd",{children:"V"})," XR ",L.jsx("kbd",{children:"Esc"})," Close ",L.jsx("kbd",{children:"P"})," Perf"]}),L.jsx("span",{children:"Battery powered only · Not a medical device"})]})]}))}Py.createRoot(document.getElementById("root")).render(L.jsx(Ry.StrictMode,{children:L.jsx(VR,{})}));
