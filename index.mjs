// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";function t(r,t,n,f){var i,o,a,d,m,l,u,j;if(r<=0||0===t)return n;if(t<0&&(f*=-1),f<0){for(m=0,o=(d=(1-r)*f)+f,j=1;j<r;j++)if(l=n[o],s(l)){for(a=o;a>m;)n[a]=n[a+f],a+=f;n[m]=l}else{for(i=e(l),a=o-f;a<=d&&(!((u=n[a])<=l)||i&&u===l&&!1===e(u));)n[a+f]=u,a-=f;n[a+f]=l,o+=f}return n}for(m=(r-1)*f,o=(d=0)+f,j=1;j<r;j++)if(l=n[o],s(l)){for(a=o;a<m;)n[a]=n[a+f],a+=f;n[m]=l}else{for(i=e(l),a=o-f;a>=d&&(!((u=n[a])<=l)||i&&u===l&&!1===e(u));)n[a+f]=u,a-=f;n[a+f]=l,o+=f}return n}function n(r,t,n,f,i){var o,a,d,m,l,u,j,p;if(r<=0||0===t)return n;if(t<0&&(i-=(r-1)*(f*=-1)),l=(m=i)+(r-1)*f,a=m+f,f<0){for(p=1;p<r;p++)if(u=n[a],s(u)){for(d=a;d>l;)n[d]=n[d+f],d+=f;n[l]=u}else{for(o=e(u),d=a-f;d<=m&&(!((j=n[d])<=u)||o&&j===u&&!1===e(j));)n[d+f]=j,d-=f;n[d+f]=u,a+=f}return n}for(p=1;p<r;p++)if(u=n[a],s(u)){for(d=a;d<l;)n[d]=n[d+f],d+=f;n[l]=u}else{for(o=e(u),d=a-f;d>=m&&(!((j=n[d])<=u)||o&&j===u&&!1===e(j));)n[d+f]=j,d-=f;n[d+f]=u,a+=f}return n}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
