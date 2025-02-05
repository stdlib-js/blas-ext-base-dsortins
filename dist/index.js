"use strict";var c=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var p=c(function(I,w){
var t=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/math-base-assert-is-nan/dist');function E(v,u,a,r,h){var s,f,e,l,q,i,n,o;if(v<=0||u===0)return a;if(u<0&&(r*=-1,h-=(v-1)*r),l=h,q=l+(v-1)*r,f=l+r,r<0){for(o=1;o<v;o++)if(i=a[f],j(i)){for(e=f;e>q;)a[e]=a[e+r],e+=r;a[q]=i}else{for(s=t(i),e=f-r;e<=l&&(n=a[e],!(n<=i&&!(s&&n===i&&t(n)===!1)));)a[e+r]=n,e-=r;a[e+r]=i,f+=r}return a}for(o=1;o<v;o++)if(i=a[f],j(i)){for(e=f;e<q;)a[e]=a[e+r],e+=r;a[q]=i}else{for(s=t(i),e=f-r;e>=l&&(n=a[e],!(n<=i&&!(s&&n===i&&t(n)===!1)));)a[e+r]=n,e-=r;a[e+r]=i,f+=r}return a}w.exports=E
});var b=c(function(J,m){
var O=require('@stdlib/strided-base-stride2offset/dist'),Z=p();function z(v,u,a,r){return Z(v,u,a,r,O(v,r))}m.exports=z
});var R=c(function(K,k){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=b(),B=p();A(g,"ndarray",B);k.exports=g
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=R(),y,_=D(C(__dirname,"./native.js"));F(_)?y=G:y=_;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
