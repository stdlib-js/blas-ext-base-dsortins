// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,u=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var a,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(a=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=a):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e};var a=e,c=Number.NEGATIVE_INFINITY;function _(e){return 0===e&&1/e===c}function p(e){return e!=e}function s(e,r,t,o){var n,i,f,u,l,a,c,s;if(e<=0||0===r)return t;if(r<0&&(o*=-1),o<0){for(l=0,i=(u=(1-e)*o)+o,s=1;s<e;s++)if(p(a=t[i])){for(f=i;f>l;)t[f]=t[f+o],f+=o;t[l]=a}else{for(n=_(a),f=i-o;f<=u&&(!((c=t[f])<=a)||n&&c===a&&!1===_(c));)t[f+o]=c,f-=o;t[f+o]=a,i+=o}return t}for(l=(e-1)*o,i=(u=0)+o,s=1;s<e;s++)if(p(a=t[i])){for(f=i;f<l;)t[f]=t[f+o],f+=o;t[l]=a}else{for(n=_(a),f=i-o;f>=u&&(!((c=t[f])<=a)||n&&c===a&&!1===_(c));)t[f+o]=c,f-=o;t[f+o]=a,i+=o}return t}return a(s,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o,n){var i,f,u,l,a,c,s,d;if(e<=0||0===r)return t;if(r<0&&(n-=(e-1)*(o*=-1)),a=(l=n)+(e-1)*o,f=l+o,o<0){for(d=1;d<e;d++)if(p(c=t[f])){for(u=f;u>a;)t[u]=t[u+o],u+=o;t[a]=c}else{for(i=_(c),u=f-o;u<=l&&(!((s=t[u])<=c)||i&&s===c&&!1===_(s));)t[u+o]=s,u-=o;t[u+o]=c,f+=o}return t}for(d=1;d<e;d++)if(p(c=t[f])){for(u=f;u<a;)t[u]=t[u+o],u+=o;t[a]=c}else{for(i=_(c),u=f-o;u>=l&&(!((s=t[u])<=c)||i&&s===c&&!1===_(s));)t[u+o]=s,u-=o;t[u+o]=c,f+=o}return t}}),s},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dsortins=r();
//# sourceMappingURL=index.js.map
