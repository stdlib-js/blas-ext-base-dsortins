"use strict";var c=function(v,n){return function(){try{return n||v((n={exports:{}}).exports,n),n.exports}catch(a){throw (n=0, a)}};};var p=c(function(I,w){
var t=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/math-base-assert-is-nan/dist');function E(v,n,a,r,h){var s,f,e,l,q,i,u,o;if(v<=0||n===0)return a;if(n<0&&(r*=-1,h-=(v-1)*r),l=h,q=l+(v-1)*r,f=l+r,r<0){for(o=1;o<v;o++)if(i=a[f],j(i)){for(e=f;e>q;)a[e]=a[e+r],e+=r;a[q]=i}else{for(s=t(i),e=f-r;e<=l&&(u=a[e],!(u<=i&&!(s&&u===i&&t(u)===!1)));)a[e+r]=u,e-=r;a[e+r]=i,f+=r}return a}for(o=1;o<v;o++)if(i=a[f],j(i)){for(e=f;e<q;)a[e]=a[e+r],e+=r;a[q]=i}else{for(s=t(i),e=f-r;e>=l&&(u=a[e],!(u<=i&&!(s&&u===i&&t(u)===!1)));)a[e+r]=u,e-=r;a[e+r]=i,f+=r}return a}w.exports=E
});var b=c(function(J,m){
var O=require('@stdlib/strided-base-stride2offset/dist'),Z=p();function z(v,n,a,r){return Z(v,n,a,r,O(v,r))}m.exports=z
});var R=c(function(K,k){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=b(),B=p();A(g,"ndarray",B);k.exports=g
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=R(),y,_=D(C(__dirname,"./native.js"));F(_)?y=G:y=_;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
