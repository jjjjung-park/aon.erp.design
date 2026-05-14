"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/plugin/code.ts
  var require_code = __commonJS({
    "src/plugin/code.ts"(exports) {
      figma.showUI('<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>SheetToComponent</title>\n    <script type="module" crossorigin>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();/**\n* @vue/shared v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function Qs(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const se={},Ot=[],ze=()=>{},tr=()=>!1,_s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ws=e=>e.startsWith("onUpdate:"),pe=Object.assign,en=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},al=Object.prototype.hasOwnProperty,J=(e,t)=>al.call(e,t),F=Array.isArray,Pt=e=>rs(e)==="[object Map]",Dt=e=>rs(e)==="[object Set]",yn=e=>rs(e)==="[object Date]",k=e=>typeof e=="function",ce=e=>typeof e=="string",Je=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",sr=e=>(ee(e)||k(e))&&k(e.then)&&k(e.catch),nr=Object.prototype.toString,rs=e=>nr.call(e),cl=e=>rs(e).slice(8,-1),rr=e=>rs(e)==="[object Object]",tn=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Bt=Qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ss=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},fl=/-\\w/g,Le=Ss(e=>e.replace(fl,t=>t.slice(1).toUpperCase())),dl=/\\B([A-Z])/g,pt=Ss(e=>e.replace(dl,"-$1").toLowerCase()),lr=Ss(e=>e.charAt(0).toUpperCase()+e.slice(1)),$s=Ss(e=>e?`on${lr(e)}`:""),qe=(e,t)=>!Object.is(e,t),fs=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},ir=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},Cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let xn;const Ts=()=>xn||(xn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sn(e){if(F(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],r=ce(n)?bl(n):sn(n);if(r)for(const l in r)t[l]=r[l]}return t}else if(ce(e)||ee(e))return e}const hl=/;(?![^(]*\\))/g,pl=/:([^]+)/,gl=/\\/\\*[^]*?\\*\\//g;function bl(e){const t={};return e.replace(gl,"").split(hl).forEach(s=>{if(s){const n=s.split(pl);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function et(e){let t="";if(ce(e))t=e;else if(F(e))for(let s=0;s<e.length;s++){const n=et(e[s]);n&&(t+=n+" ")}else if(ee(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const vl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=Qs(vl);function or(e){return!!e||e===""}function yl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=kt(e[n],t[n]);return s}function kt(e,t){if(e===t)return!0;let s=yn(e),n=yn(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=Je(e),n=Je(t),s||n)return e===t;if(s=F(e),n=F(t),s||n)return s&&n?yl(e,t):!1;if(s=ee(e),n=ee(t),s||n){if(!s||!n)return!1;const r=Object.keys(e).length,l=Object.keys(t).length;if(r!==l)return!1;for(const i in e){const o=e.hasOwnProperty(i),a=t.hasOwnProperty(i);if(o&&!a||!o&&a||!kt(e[i],t[i]))return!1}}return String(e)===String(t)}function nn(e,t){return e.findIndex(s=>kt(s,t))}const ur=e=>!!(e&&e.__v_isRef===!0),te=e=>ce(e)?e:e==null?"":F(e)||ee(e)&&(e.toString===nr||!k(e.toString))?ur(e)?te(e.value):JSON.stringify(e,ar,2):String(e),ar=(e,t)=>ur(t)?ar(e,t.value):Pt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,r],l)=>(s[Rs(n,l)+" =>"]=r,s),{})}:Dt(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Rs(s))}:Je(t)?Rs(t):ee(t)&&!F(t)&&!rr(t)?String(t):t,Rs=(e,t="")=>{var s;return Je(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**\n* @vue/reactivity v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let me;class xl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=me,!t&&me&&(this.index=(me.scopes||(me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=me;try{return me=this,t()}finally{me=s}}}on(){++this._on===1&&(this.prevScope=me,me=this)}off(){if(this._on>0&&--this._on===0){if(me===this)me=this.prevScope;else{let t=me;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function _l(){return me}let re;const Ns=new WeakSet;class cr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,me&&me.active&&me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ns.has(this)&&(Ns.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_n(this),hr(this);const t=re,s=Ke;re=this,Ke=!0;try{return this.fn()}finally{pr(this),re=t,Ke=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)on(t);this.deps=this.depsTail=void 0,_n(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ns.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vs(this)&&this.run()}get dirty(){return Vs(this)}}let fr=0,Wt,qt;function dr(e,t=!1){if(e.flags|=8,t){e.next=qt,qt=e;return}e.next=Wt,Wt=e}function rn(){fr++}function ln(){if(--fr>0)return;if(qt){let t=qt;for(qt=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Wt;){let t=Wt;for(Wt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function hr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function pr(e){let t,s=e.depsTail,n=s;for(;n;){const r=n.prevDep;n.version===-1?(n===s&&(s=r),on(n),wl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=s}function Vs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(gr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function gr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Zt)||(e.globalVersion=Zt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vs(e))))return;e.flags|=2;const t=e.dep,s=re,n=Ke;re=e,Ke=!0;try{hr(e);const r=e.fn(e._value);(t.version===0||qe(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{re=s,Ke=n,pr(e),e.flags&=-3}}function on(e,t=!1){const{dep:s,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let l=s.computed.deps;l;l=l.nextDep)on(l,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function wl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Ke=!0;const br=[];function lt(){br.push(Ke),Ke=!1}function it(){const e=br.pop();Ke=e===void 0?!0:e}function _n(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=re;re=void 0;try{t()}finally{re=s}}}let Zt=0;class Sl{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class un{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!re||!Ke||re===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==re)s=this.activeLink=new Sl(re,this),re.deps?(s.prevDep=re.depsTail,re.depsTail.nextDep=s,re.depsTail=s):re.deps=re.depsTail=s,vr(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=re.depsTail,s.nextDep=void 0,re.depsTail.nextDep=s,re.depsTail=s,re.deps===s&&(re.deps=n)}return s}trigger(t){this.version++,Zt++,this.notify(t)}notify(t){rn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{ln()}}}function vr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)vr(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Us=new WeakMap,wt=Symbol(""),Bs=Symbol(""),Qt=Symbol("");function ye(e,t,s){if(Ke&&re){let n=Us.get(e);n||Us.set(e,n=new Map);let r=n.get(s);r||(n.set(s,r=new un),r.map=n,r.key=s),r.track()}}function st(e,t,s,n,r,l){const i=Us.get(e);if(!i){Zt++;return}const o=a=>{a&&a.trigger()};if(rn(),t==="clear")i.forEach(o);else{const a=F(e),h=a&&tn(s);if(a&&s==="length"){const f=Number(n);i.forEach((p,C)=>{(C==="length"||C===Qt||!Je(C)&&C>=f)&&o(p)})}else switch((s!==void 0||i.has(void 0))&&o(i.get(s)),h&&o(i.get(Qt)),t){case"add":a?h&&o(i.get("length")):(o(i.get(wt)),Pt(e)&&o(i.get(Bs)));break;case"delete":a||(o(i.get(wt)),Pt(e)&&o(i.get(Bs)));break;case"set":Pt(e)&&o(i.get(wt));break}}ln()}function At(e){const t=G(e);return t===e?t:(ye(t,"iterate",Qt),Fe(e)?t:t.map(je))}function As(e){return ye(e=G(e),"iterate",Qt),e}function Be(e,t){return ot(e)?Rt(St(e)?je(t):t):je(t)}const Cl={__proto__:null,[Symbol.iterator](){return Fs(this,Symbol.iterator,e=>Be(this,e))},concat(...e){return At(this).concat(...e.map(t=>F(t)?At(t):t))},entries(){return Fs(this,"entries",e=>(e[1]=Be(this,e[1]),e))},every(e,t){return Ze(this,"every",e,t,void 0,arguments)},filter(e,t){return Ze(this,"filter",e,t,s=>s.map(n=>Be(this,n)),arguments)},find(e,t){return Ze(this,"find",e,t,s=>Be(this,s),arguments)},findIndex(e,t){return Ze(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ze(this,"findLast",e,t,s=>Be(this,s),arguments)},findLastIndex(e,t){return Ze(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ze(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ds(this,"includes",e)},indexOf(...e){return Ds(this,"indexOf",e)},join(e){return At(this).join(e)},lastIndexOf(...e){return Ds(this,"lastIndexOf",e)},map(e,t){return Ze(this,"map",e,t,void 0,arguments)},pop(){return jt(this,"pop")},push(...e){return jt(this,"push",e)},reduce(e,...t){return wn(this,"reduce",e,t)},reduceRight(e,...t){return wn(this,"reduceRight",e,t)},shift(){return jt(this,"shift")},some(e,t){return Ze(this,"some",e,t,void 0,arguments)},splice(...e){return jt(this,"splice",e)},toReversed(){return At(this).toReversed()},toSorted(e){return At(this).toSorted(e)},toSpliced(...e){return At(this).toSpliced(...e)},unshift(...e){return jt(this,"unshift",e)},values(){return Fs(this,"values",e=>Be(this,e))}};function Fs(e,t,s){const n=As(e),r=n[t]();return n!==e&&!Fe(e)&&(r._next=r.next,r.next=()=>{const l=r._next();return l.done||(l.value=s(l.value)),l}),r}const Tl=Array.prototype;function Ze(e,t,s,n,r,l){const i=As(e),o=i!==e&&!Fe(e),a=i[t];if(a!==Tl[t]){const p=a.apply(e,l);return o?je(p):p}let h=s;i!==e&&(o?h=function(p,C){return s.call(this,Be(e,p),C,e)}:s.length>2&&(h=function(p,C){return s.call(this,p,C,e)}));const f=a.call(i,h,n);return o&&r?r(f):f}function wn(e,t,s,n){const r=As(e),l=r!==e&&!Fe(e);let i=s,o=!1;r!==e&&(l?(o=n.length===0,i=function(h,f,p){return o&&(o=!1,h=Be(e,h)),s.call(this,h,Be(e,f),p,e)}):s.length>3&&(i=function(h,f,p){return s.call(this,h,f,p,e)}));const a=r[t](i,...n);return o?Be(e,a):a}function Ds(e,t,s){const n=G(e);ye(n,"iterate",Qt);const r=n[t](...s);return(r===-1||r===!1)&&dn(s[0])?(s[0]=G(s[0]),n[t](...s)):r}function jt(e,t,s=[]){lt(),rn();const n=G(e)[t].apply(e,s);return ln(),it(),n}const Al=Qs("__proto__,__v_isRef,__isVue"),mr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Je));function Ml(e){Je(e)||(e=String(e));const t=G(this);return ye(t,"has",e),t.hasOwnProperty(e)}class yr{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const r=this._isReadonly,l=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return l;if(s==="__v_raw")return n===(r?l?kl:Sr:l?wr:_r).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const i=F(t);if(!r){let a;if(i&&(a=Cl[s]))return a;if(s==="hasOwnProperty")return Ml}const o=Reflect.get(t,s,xe(t)?t:n);if((Je(s)?mr.has(s):Al(s))||(r||ye(t,"get",s),l))return o;if(xe(o)){const a=i&&tn(s)?o:o.value;return r&&ee(a)?qs(a):a}return ee(o)?r?qs(o):cn(o):o}}class xr extends yr{constructor(t=!1){super(!1,t)}set(t,s,n,r){let l=t[s];const i=F(t)&&tn(s);if(!this._isShallow){const h=ot(l);if(!Fe(n)&&!ot(n)&&(l=G(l),n=G(n)),!i&&xe(l)&&!xe(n))return h||(l.value=n),!0}const o=i?Number(s)<t.length:J(t,s),a=Reflect.set(t,s,n,xe(t)?t:r);return t===G(r)&&(o?qe(n,l)&&st(t,"set",s,n):st(t,"add",s,n)),a}deleteProperty(t,s){const n=J(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&n&&st(t,"delete",s,void 0),r}has(t,s){const n=Reflect.has(t,s);return(!Je(s)||!mr.has(s))&&ye(t,"has",s),n}ownKeys(t){return ye(t,"iterate",F(t)?"length":wt),Reflect.ownKeys(t)}}class El extends yr{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Ol=new xr,Pl=new El,Il=new xr(!0);const Ws=e=>e,us=e=>Reflect.getPrototypeOf(e);function $l(e,t,s){return function(...n){const r=this.__v_raw,l=G(r),i=Pt(l),o=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,h=r[e](...n),f=s?Ws:t?Rt:je;return!t&&ye(l,"iterate",a?Bs:wt),pe(Object.create(h),{next(){const{value:p,done:C}=h.next();return C?{value:p,done:C}:{value:o?[f(p[0]),f(p[1])]:f(p),done:C}}})}}function as(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Rl(e,t){const s={get(r){const l=this.__v_raw,i=G(l),o=G(r);e||(qe(r,o)&&ye(i,"get",r),ye(i,"get",o));const{has:a}=us(i),h=t?Ws:e?Rt:je;if(a.call(i,r))return h(l.get(r));if(a.call(i,o))return h(l.get(o));l!==i&&l.get(r)},get size(){const r=this.__v_raw;return!e&&ye(G(r),"iterate",wt),r.size},has(r){const l=this.__v_raw,i=G(l),o=G(r);return e||(qe(r,o)&&ye(i,"has",r),ye(i,"has",o)),r===o?l.has(r):l.has(r)||l.has(o)},forEach(r,l){const i=this,o=i.__v_raw,a=G(o),h=t?Ws:e?Rt:je;return!e&&ye(a,"iterate",wt),o.forEach((f,p)=>r.call(l,h(f),h(p),i))}};return pe(s,e?{add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear")}:{add(r){const l=G(this),i=us(l),o=G(r),a=!t&&!Fe(r)&&!ot(r)?o:r;return i.has.call(l,a)||qe(r,a)&&i.has.call(l,r)||qe(o,a)&&i.has.call(l,o)||(l.add(a),st(l,"add",a,a)),this},set(r,l){!t&&!Fe(l)&&!ot(l)&&(l=G(l));const i=G(this),{has:o,get:a}=us(i);let h=o.call(i,r);h||(r=G(r),h=o.call(i,r));const f=a.call(i,r);return i.set(r,l),h?qe(l,f)&&st(i,"set",r,l):st(i,"add",r,l),this},delete(r){const l=G(this),{has:i,get:o}=us(l);let a=i.call(l,r);a||(r=G(r),a=i.call(l,r)),o&&o.call(l,r);const h=l.delete(r);return a&&st(l,"delete",r,void 0),h},clear(){const r=G(this),l=r.size!==0,i=r.clear();return l&&st(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=$l(r,e,t)}),s}function an(e,t){const s=Rl(e,t);return(n,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(J(s,r)&&r in n?s:n,r,l)}const Nl={get:an(!1,!1)},Fl={get:an(!1,!0)},Dl={get:an(!0,!1)};const _r=new WeakMap,wr=new WeakMap,Sr=new WeakMap,kl=new WeakMap;function Ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ll(cl(e))}function cn(e){return ot(e)?e:fn(e,!1,Ol,Nl,_r)}function jl(e){return fn(e,!1,Il,Fl,wr)}function qs(e){return fn(e,!0,Pl,Dl,Sr)}function fn(e,t,s,n,r){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Kl(e);if(l===0)return e;const i=r.get(e);if(i)return i;const o=new Proxy(e,l===2?n:s);return r.set(e,o),o}function St(e){return ot(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function ot(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function dn(e){return e?!!e.__v_raw:!1}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Hl(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&ir(e,"__v_skip",!0),e}const je=e=>ee(e)?cn(e):e,Rt=e=>ee(e)?qs(e):e;function xe(e){return e?e.__v_isRef===!0:!1}function oe(e){return Vl(e,!1)}function Vl(e,t){return xe(e)?e:new Ul(e,t)}class Ul{constructor(t,s){this.dep=new un,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:G(t),this._value=s?t:je(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||Fe(t)||ot(t);t=n?t:G(t),qe(t,s)&&(this._rawValue=t,this._value=n?t:je(t),this.dep.trigger())}}function Bl(e){return xe(e)?e.value:e}const Wl={get:(e,t,s)=>t==="__v_raw"?e:Bl(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const r=e[t];return xe(r)&&!xe(s)?(r.value=s,!0):Reflect.set(e,t,s,n)}};function Cr(e){return St(e)?e:new Proxy(e,Wl)}class ql{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new un(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return dr(this,!0),!0}get value(){const t=this.dep.track();return gr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function zl(e,t,s=!1){let n,r;return k(e)?n=e:(n=e.get,r=e.set),new ql(n,r,s)}const cs={},gs=new WeakMap;let _t;function Gl(e,t=!1,s=_t){if(s){let n=gs.get(s);n||gs.set(s,n=[]),n.push(e)}}function Jl(e,t,s=se){const{immediate:n,deep:r,once:l,scheduler:i,augmentJob:o,call:a}=s,h=$=>r?$:Fe($)||r===!1||r===0?nt($,1):nt($);let f,p,C,T,L=!1,N=!1;if(xe(e)?(p=()=>e.value,L=Fe(e)):St(e)?(p=()=>h(e),L=!0):F(e)?(N=!0,L=e.some($=>St($)||Fe($)),p=()=>e.map($=>{if(xe($))return $.value;if(St($))return h($);if(k($))return a?a($,2):$()})):k(e)?t?p=a?()=>a(e,2):e:p=()=>{if(C){lt();try{C()}finally{it()}}const $=_t;_t=f;try{return a?a(e,3,[T]):e(T)}finally{_t=$}}:p=ze,t&&r){const $=p,ue=r===!0?1/0:r;p=()=>nt($(),ue)}const ne=_l(),Y=()=>{f.stop(),ne&&ne.active&&en(ne.effects,f)};if(l&&t){const $=t;t=(...ue)=>{$(...ue),Y()}}let K=N?new Array(e.length).fill(cs):cs;const W=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(t){const ue=f.run();if(r||L||(N?ue.some((Te,Ie)=>qe(Te,K[Ie])):qe(ue,K))){C&&C();const Te=_t;_t=f;try{const Ie=[ue,K===cs?void 0:N&&K[0]===cs?[]:K,T];K=ue,a?a(t,3,Ie):t(...Ie)}finally{_t=Te}}}else f.run()};return o&&o(W),f=new cr(p),f.scheduler=i?()=>i(W,!1):W,T=$=>Gl($,!1,f),C=f.onStop=()=>{const $=gs.get(f);if($){if(a)a($,4);else for(const ue of $)ue();gs.delete(f)}},t?n?W(!0):K=f.run():i?i(W.bind(null,!0),!0):f.run(),Y.pause=f.pause.bind(f),Y.resume=f.resume.bind(f),Y.stop=Y,Y}function nt(e,t=1/0,s){if(t<=0||!ee(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,xe(e))nt(e.value,t,s);else if(F(e))for(let n=0;n<e.length;n++)nt(e[n],t,s);else if(Dt(e)||Pt(e))e.forEach(n=>{nt(n,t,s)});else if(rr(e)){for(const n in e)nt(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&nt(e[n],t,s)}return e}/**\n* @vue/runtime-core v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function ls(e,t,s,n){try{return n?e(...n):e()}catch(r){Ms(r,t,s)}}function Ye(e,t,s,n){if(k(e)){const r=ls(e,t,s,n);return r&&sr(r)&&r.catch(l=>{Ms(l,t,s)}),r}if(F(e)){const r=[];for(let l=0;l<e.length;l++)r.push(Ye(e[l],t,s,n));return r}}function Ms(e,t,s,n=!0){const r=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||se;if(t){let o=t.parent;const a=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,a,h)===!1)return}o=o.parent}if(l){lt(),ls(l,null,10,[e,a,h]),it();return}}Yl(e,s,r,n,i)}function Yl(e,t,s,n=!0,r=!1){if(r)throw e;console.error(e)}const Se=[];let Ue=-1;const It=[];let ft=null,Et=0;const Tr=Promise.resolve();let bs=null;function Ar(e){const t=bs||Tr;return e?t.then(this?e.bind(this):e):t}function Xl(e){let t=Ue+1,s=Se.length;for(;t<s;){const n=t+s>>>1,r=Se[n],l=es(r);l<e||l===e&&r.flags&2?t=n+1:s=n}return t}function hn(e){if(!(e.flags&1)){const t=es(e),s=Se[Se.length-1];!s||!(e.flags&2)&&t>=es(s)?Se.push(e):Se.splice(Xl(t),0,e),e.flags|=1,Mr()}}function Mr(){bs||(bs=Tr.then(Or))}function Zl(e){F(e)?It.push(...e):ft&&e.id===-1?ft.splice(Et+1,0,e):e.flags&1||(It.push(e),e.flags|=1),Mr()}function Sn(e,t,s=Ue+1){for(;s<Se.length;s++){const n=Se[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Se.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Er(e){if(It.length){const t=[...new Set(It)].sort((s,n)=>es(s)-es(n));if(It.length=0,ft){ft.push(...t);return}for(ft=t,Et=0;Et<ft.length;Et++){const s=ft[Et];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ft=null,Et=0}}const es=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Or(e){try{for(Ue=0;Ue<Se.length;Ue++){const t=Se[Ue];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ls(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ue<Se.length;Ue++){const t=Se[Ue];t&&(t.flags&=-2)}Ue=-1,Se.length=0,Er(),bs=null,(Se.length||It.length)&&Or()}}let Ne=null,Pr=null;function vs(e){const t=Ne;return Ne=e,Pr=e&&e.type.__scopeId||null,t}function Ql(e,t=Ne,s){if(!t||e._n)return e;const n=(...r)=>{n._d&&Nn(-1);const l=vs(t);let i;try{i=e(...r)}finally{vs(l),n._d&&Nn(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function Mt(e,t){if(Ne===null)return e;const s=Is(Ne),n=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[l,i,o,a=se]=t[r];l&&(k(l)&&(l={mounted:l,updated:l}),l.deep&&nt(i),n.push({dir:l,instance:s,value:i,oldValue:void 0,arg:o,modifiers:a}))}return e}function mt(e,t,s,n){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const o=r[i];l&&(o.oldValue=l[i].value);let a=o.dir[n];a&&(lt(),Ye(a,s,8,[e.el,o,e,t]),it())}}function ei(e,t){if(Ce){let s=Ce.provides;const n=Ce.parent&&Ce.parent.provides;n===s&&(s=Ce.provides=Object.create(n)),s[e]=t}}function ds(e,t,s=!1){const n=to();if(n||$t){let r=$t?$t._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&k(t)?t.call(n&&n.proxy):t}}const ti=Symbol.for("v-scx"),si=()=>ds(ti);function zt(e,t,s){return Ir(e,t,s)}function Ir(e,t,s=se){const{immediate:n,deep:r,flush:l,once:i}=s,o=pe({},s),a=t&&n||!t&&l!=="post";let h;if(ss){if(l==="sync"){const T=si();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!a){const T=()=>{};return T.stop=ze,T.resume=ze,T.pause=ze,T}}const f=Ce;o.call=(T,L,N)=>Ye(T,f,L,N);let p=!1;l==="post"?o.scheduler=T=>{Me(T,f&&f.suspense)}:l!=="sync"&&(p=!0,o.scheduler=(T,L)=>{L?T():hn(T)}),o.augmentJob=T=>{t&&(T.flags|=4),p&&(T.flags|=2,f&&(T.id=f.uid,T.i=f))};const C=Jl(e,t,o);return ss&&(h?h.push(C):a&&C()),C}function ni(e,t,s){const n=this.proxy,r=ce(e)?e.includes(".")?$r(n,e):()=>n[e]:e.bind(n,n);let l;k(t)?l=t:(l=t.handler,s=t);const i=is(this),o=Ir(r,l.bind(n),s);return i(),o}function $r(e,t){const s=t.split(".");return()=>{let n=e;for(let r=0;r<s.length&&n;r++)n=n[s[r]];return n}}const ri=Symbol("_vte"),li=e=>e.__isTeleport,ii=Symbol("_leaveCb");function pn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,pn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function oi(e,t){return k(e)?pe({name:e.name},t,{setup:e}):e}function Rr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Cn(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const ms=new WeakMap;function Gt(e,t,s,n,r=!1){if(F(e)){e.forEach((N,ne)=>Gt(N,t&&(F(t)?t[ne]:t),s,n,r));return}if(Jt(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Gt(e,t,s,n.component.subTree);return}const l=n.shapeFlag&4?Is(n.component):n.el,i=r?null:l,{i:o,r:a}=e,h=t&&t.r,f=o.refs===se?o.refs={}:o.refs,p=o.setupState,C=G(p),T=p===se?tr:N=>Cn(f,N)?!1:J(C,N),L=(N,ne)=>!(ne&&Cn(f,ne));if(h!=null&&h!==a){if(Tn(t),ce(h))f[h]=null,T(h)&&(p[h]=null);else if(xe(h)){const N=t;L(h,N.k)&&(h.value=null),N.k&&(f[N.k]=null)}}if(k(a))ls(a,o,12,[i,f]);else{const N=ce(a),ne=xe(a);if(N||ne){const Y=()=>{if(e.f){const K=N?T(a)?p[a]:f[a]:L()||!e.k?a.value:f[e.k];if(r)F(K)&&en(K,l);else if(F(K))K.includes(l)||K.push(l);else if(N)f[a]=[l],T(a)&&(p[a]=f[a]);else{const W=[l];L(a,e.k)&&(a.value=W),e.k&&(f[e.k]=W)}}else N?(f[a]=i,T(a)&&(p[a]=i)):ne&&(L(a,e.k)&&(a.value=i),e.k&&(f[e.k]=i))};if(i){const K=()=>{Y(),ms.delete(e)};K.id=-1,ms.set(e,K),Me(K,s)}else Tn(e),Y()}}}function Tn(e){const t=ms.get(e);t&&(t.flags|=8,ms.delete(e))}Ts().requestIdleCallback;Ts().cancelIdleCallback;const Jt=e=>!!e.type.__asyncLoader,Nr=e=>e.type.__isKeepAlive;function ui(e,t){Fr(e,"a",t)}function ai(e,t){Fr(e,"da",t)}function Fr(e,t,s=Ce){const n=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Es(t,n,s),s){let r=s.parent;for(;r&&r.parent;)Nr(r.parent.vnode)&&ci(n,t,s,r),r=r.parent}}function ci(e,t,s,n){const r=Es(t,e,n,!0);kr(()=>{en(n[t],r)},s)}function Es(e,t,s=Ce,n=!1){if(s){const r=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...i)=>{lt();const o=is(s),a=Ye(t,s,e,i);return o(),it(),a});return n?r.unshift(l):r.push(l),l}}const ut=e=>(t,s=Ce)=>{(!ss||e==="sp")&&Es(e,(...n)=>t(...n),s)},fi=ut("bm"),Dr=ut("m"),di=ut("bu"),hi=ut("u"),pi=ut("bum"),kr=ut("um"),gi=ut("sp"),bi=ut("rtg"),vi=ut("rtc");function mi(e,t=Ce){Es("ec",e,t)}const yi=Symbol.for("v-ndc");function yt(e,t,s,n){let r;const l=s,i=F(e);if(i||ce(e)){const o=i&&St(e);let a=!1,h=!1;o&&(a=!Fe(e),h=ot(e),e=As(e)),r=new Array(e.length);for(let f=0,p=e.length;f<p;f++)r[f]=t(a?h?Rt(je(e[f])):je(e[f]):e[f],f,void 0,l)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,l)}else if(ee(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,l));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,h=o.length;a<h;a++){const f=o[a];r[a]=t(e[f],f,a,l)}}else r=[];return r}const zs=e=>e?rl(e)?Is(e):zs(e.parent):null,Yt=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zs(e.parent),$root:e=>zs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Kr(e),$forceUpdate:e=>e.f||(e.f=()=>{hn(e.update)}),$nextTick:e=>e.n||(e.n=Ar.bind(e.proxy)),$watch:e=>ni.bind(e)}),ks=(e,t)=>e!==se&&!e.__isScriptSetup&&J(e,t),xi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:r,props:l,accessCache:i,type:o,appContext:a}=e;if(t[0]!=="$"){const C=i[t];if(C!==void 0)switch(C){case 1:return n[t];case 2:return r[t];case 4:return s[t];case 3:return l[t]}else{if(ks(n,t))return i[t]=1,n[t];if(r!==se&&J(r,t))return i[t]=2,r[t];if(J(l,t))return i[t]=3,l[t];if(s!==se&&J(s,t))return i[t]=4,s[t];Gs&&(i[t]=0)}}const h=Yt[t];let f,p;if(h)return t==="$attrs"&&ye(e.attrs,"get",""),h(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(s!==se&&J(s,t))return i[t]=4,s[t];if(p=a.config.globalProperties,J(p,t))return p[t]},set({_:e},t,s){const{data:n,setupState:r,ctx:l}=e;return ks(r,t)?(r[t]=s,!0):n!==se&&J(n,t)?(n[t]=s,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:r,props:l,type:i}},o){let a;return!!(s[o]||e!==se&&o[0]!=="$"&&J(e,o)||ks(t,o)||J(l,o)||J(n,o)||J(Yt,o)||J(r.config.globalProperties,o)||(a=i.__cssModules)&&a[o])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:J(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function An(e){return F(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Gs=!0;function _i(e){const t=Kr(e),s=e.proxy,n=e.ctx;Gs=!1,t.beforeCreate&&Mn(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:o,provide:a,inject:h,created:f,beforeMount:p,mounted:C,beforeUpdate:T,updated:L,activated:N,deactivated:ne,beforeDestroy:Y,beforeUnmount:K,destroyed:W,unmounted:$,render:ue,renderTracked:Te,renderTriggered:Ie,errorCaptured:He,serverPrefetch:$e,expose:ge,inheritAttrs:_e,components:Re,directives:De,filters:le}=t;if(h&&wi(h,n,null),i)for(const ie in i){const X=i[ie];k(X)&&(n[ie]=X.bind(s))}if(r){const ie=r.call(s,s);ee(ie)&&(e.data=cn(ie))}if(Gs=!0,l)for(const ie in l){const X=l[ie],ke=k(X)?X.bind(s,s):k(X.get)?X.get.bind(s,s):ze,Ct=!k(X)&&k(X.set)?X.set.bind(s):ze,be=Ae({get:ke,set:Ct});Object.defineProperty(n,ie,{enumerable:!0,configurable:!0,get:()=>be.value,set:Oe=>be.value=Oe})}if(o)for(const ie in o)Lr(o[ie],n,s,ie);if(a){const ie=k(a)?a.call(s):a;Reflect.ownKeys(ie).forEach(X=>{ei(X,ie[X])})}f&&Mn(f,e,"c");function de(ie,X){F(X)?X.forEach(ke=>ie(ke.bind(s))):X&&ie(X.bind(s))}if(de(fi,p),de(Dr,C),de(di,T),de(hi,L),de(ui,N),de(ai,ne),de(mi,He),de(vi,Te),de(bi,Ie),de(pi,K),de(kr,$),de(gi,$e),F(ge))if(ge.length){const ie=e.exposed||(e.exposed={});ge.forEach(X=>{Object.defineProperty(ie,X,{get:()=>s[X],set:ke=>s[X]=ke,enumerable:!0})})}else e.exposed||(e.exposed={});ue&&e.render===ze&&(e.render=ue),_e!=null&&(e.inheritAttrs=_e),Re&&(e.components=Re),De&&(e.directives=De),$e&&Rr(e)}function wi(e,t,s=ze){F(e)&&(e=Js(e));for(const n in e){const r=e[n];let l;ee(r)?"default"in r?l=ds(r.from||n,r.default,!0):l=ds(r.from||n):l=ds(r),xe(l)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[n]=l}}function Mn(e,t,s){Ye(F(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Lr(e,t,s,n){let r=n.includes(".")?$r(s,n):()=>s[n];if(ce(e)){const l=t[e];k(l)&&zt(r,l)}else if(k(e))zt(r,e.bind(s));else if(ee(e))if(F(e))e.forEach(l=>Lr(l,t,s,n));else{const l=k(e.handler)?e.handler.bind(s):t[e.handler];k(l)&&zt(r,l,e)}}function Kr(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,o=l.get(t);let a;return o?a=o:!r.length&&!s&&!n?a=t:(a={},r.length&&r.forEach(h=>ys(a,h,i,!0)),ys(a,t,i)),ee(t)&&l.set(t,a),a}function ys(e,t,s,n=!1){const{mixins:r,extends:l}=t;l&&ys(e,l,s,!0),r&&r.forEach(i=>ys(e,i,s,!0));for(const i in t)if(!(n&&i==="expose")){const o=Si[i]||s&&s[i];e[i]=o?o(e[i],t[i]):t[i]}return e}const Si={data:En,props:On,emits:On,methods:Vt,computed:Vt,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Vt,directives:Vt,watch:Ti,provide:En,inject:Ci};function En(e,t){return t?e?function(){return pe(k(e)?e.call(this,this):e,k(t)?t.call(this,this):t)}:t:e}function Ci(e,t){return Vt(Js(e),Js(t))}function Js(e){if(F(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function Vt(e,t){return e?pe(Object.create(null),e,t):t}function On(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:pe(Object.create(null),An(e),An(t??{})):t}function Ti(e,t){if(!e)return t;if(!t)return e;const s=pe(Object.create(null),e);for(const n in t)s[n]=we(e[n],t[n]);return s}function jr(){return{app:null,config:{isNativeTag:tr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ai=0;function Mi(e,t){return function(n,r=null){k(n)||(n=pe({},n)),r!=null&&!ee(r)&&(r=null);const l=jr(),i=new WeakSet,o=[];let a=!1;const h=l.app={_uid:Ai++,_component:n,_props:r,_container:null,_context:l,_instance:null,version:oo,get config(){return l.config},set config(f){},use(f,...p){return i.has(f)||(f&&k(f.install)?(i.add(f),f.install(h,...p)):k(f)&&(i.add(f),f(h,...p))),h},mixin(f){return l.mixins.includes(f)||l.mixins.push(f),h},component(f,p){return p?(l.components[f]=p,h):l.components[f]},directive(f,p){return p?(l.directives[f]=p,h):l.directives[f]},mount(f,p,C){if(!a){const T=h._ceVNode||Ge(n,r);return T.appContext=l,C===!0?C="svg":C===!1&&(C=void 0),e(T,f,C),a=!0,h._container=f,f.__vue_app__=h,Is(T.component)}},onUnmount(f){o.push(f)},unmount(){a&&(Ye(o,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,p){return l.provides[f]=p,h},runWithContext(f){const p=$t;$t=h;try{return f()}finally{$t=p}}};return h}}let $t=null;const Ei=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Le(t)}Modifiers`]||e[`${pt(t)}Modifiers`];function Oi(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||se;let r=s;const l=t.startsWith("update:"),i=l&&Ei(n,t.slice(7));i&&(i.trim&&(r=s.map(f=>ce(f)?f.trim():f)),i.number&&(r=s.map(Cs)));let o,a=n[o=$s(t)]||n[o=$s(Le(t))];!a&&l&&(a=n[o=$s(pt(t))]),a&&Ye(a,e,6,r);const h=n[o+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ye(h,e,6,r)}}const Pi=new WeakMap;function Hr(e,t,s=!1){const n=s?Pi:t.emitsCache,r=n.get(e);if(r!==void 0)return r;const l=e.emits;let i={},o=!1;if(!k(e)){const a=h=>{const f=Hr(h,t,!0);f&&(o=!0,pe(i,f))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!l&&!o?(ee(e)&&n.set(e,null),null):(F(l)?l.forEach(a=>i[a]=null):pe(i,l),ee(e)&&n.set(e,i),i)}function Os(e,t){return!e||!_s(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,pt(t))||J(e,t))}function Pn(e){const{type:t,vnode:s,proxy:n,withProxy:r,propsOptions:[l],slots:i,attrs:o,emit:a,render:h,renderCache:f,props:p,data:C,setupState:T,ctx:L,inheritAttrs:N}=e,ne=vs(e);let Y,K;try{if(s.shapeFlag&4){const $=r||n,ue=$;Y=We(h.call(ue,$,f,p,T,C,L)),K=o}else{const $=t;Y=We($.length>1?$(p,{attrs:o,slots:i,emit:a}):$(p,null)),K=t.props?o:Ii(o)}}catch($){Xt.length=0,Ms($,e,1),Y=Ge(ht)}let W=Y;if(K&&N!==!1){const $=Object.keys(K),{shapeFlag:ue}=W;$.length&&ue&7&&(l&&$.some(ws)&&(K=$i(K,l)),W=Nt(W,K,!1,!0))}return s.dirs&&(W=Nt(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(s.dirs):s.dirs),s.transition&&pn(W,s.transition),Y=W,vs(ne),Y}const Ii=e=>{let t;for(const s in e)(s==="class"||s==="style"||_s(s))&&((t||(t={}))[s]=e[s]);return t},$i=(e,t)=>{const s={};for(const n in e)(!ws(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Ri(e,t,s){const{props:n,children:r,component:l}=e,{props:i,children:o,patchFlag:a}=t,h=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?In(n,i,h):!!i;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const C=f[p];if(Vr(i,n,C)&&!Os(h,C))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===i?!1:n?i?In(n,i,h):!0:!!i;return!1}function In(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const l=n[r];if(Vr(t,e,l)&&!Os(s,l))return!0}return!1}function Vr(e,t,s){const n=e[s],r=t[s];return s==="style"&&ee(n)&&ee(r)?!kt(n,r):n!==r}function Ni({vnode:e,parent:t,suspense:s},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=n,e=r),r===e)(e=t.vnode).el=n,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=n)}const Ur={},Br=()=>Object.create(Ur),Wr=e=>Object.getPrototypeOf(e)===Ur;function Fi(e,t,s,n=!1){const r={},l=Br();e.propsDefaults=Object.create(null),qr(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);s?e.props=n?r:jl(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function Di(e,t,s,n){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,o=G(r),[a]=e.propsOptions;let h=!1;if((n||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let C=f[p];if(Os(e.emitsOptions,C))continue;const T=t[C];if(a)if(J(l,C))T!==l[C]&&(l[C]=T,h=!0);else{const L=Le(C);r[L]=Ys(a,o,L,T,e,!1)}else T!==l[C]&&(l[C]=T,h=!0)}}}else{qr(e,t,r,l)&&(h=!0);let f;for(const p in o)(!t||!J(t,p)&&((f=pt(p))===p||!J(t,f)))&&(a?s&&(s[p]!==void 0||s[f]!==void 0)&&(r[p]=Ys(a,o,p,void 0,e,!0)):delete r[p]);if(l!==o)for(const p in l)(!t||!J(t,p))&&(delete l[p],h=!0)}h&&st(e.attrs,"set","")}function qr(e,t,s,n){const[r,l]=e.propsOptions;let i=!1,o;if(t)for(let a in t){if(Bt(a))continue;const h=t[a];let f;r&&J(r,f=Le(a))?!l||!l.includes(f)?s[f]=h:(o||(o={}))[f]=h:Os(e.emitsOptions,a)||(!(a in n)||h!==n[a])&&(n[a]=h,i=!0)}if(l){const a=G(s),h=o||se;for(let f=0;f<l.length;f++){const p=l[f];s[p]=Ys(r,a,p,h[p],e,!J(h,p))}}return i}function Ys(e,t,s,n,r,l){const i=e[s];if(i!=null){const o=J(i,"default");if(o&&n===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&k(a)){const{propsDefaults:h}=r;if(s in h)n=h[s];else{const f=is(r);n=h[s]=a.call(null,t),f()}}else n=a;r.ce&&r.ce._setProp(s,n)}i[0]&&(l&&!o?n=!1:i[1]&&(n===""||n===pt(s))&&(n=!0))}return n}const ki=new WeakMap;function zr(e,t,s=!1){const n=s?ki:t.propsCache,r=n.get(e);if(r)return r;const l=e.props,i={},o=[];let a=!1;if(!k(e)){const f=p=>{a=!0;const[C,T]=zr(p,t,!0);pe(i,C),T&&o.push(...T)};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!l&&!a)return ee(e)&&n.set(e,Ot),Ot;if(F(l))for(let f=0;f<l.length;f++){const p=Le(l[f]);$n(p)&&(i[p]=se)}else if(l)for(const f in l){const p=Le(f);if($n(p)){const C=l[f],T=i[p]=F(C)||k(C)?{type:C}:pe({},C),L=T.type;let N=!1,ne=!0;if(F(L))for(let Y=0;Y<L.length;++Y){const K=L[Y],W=k(K)&&K.name;if(W==="Boolean"){N=!0;break}else W==="String"&&(ne=!1)}else N=k(L)&&L.name==="Boolean";T[0]=N,T[1]=ne,(N||J(T,"default"))&&o.push(p)}}const h=[i,o];return ee(e)&&n.set(e,h),h}function $n(e){return e[0]!=="$"&&!Bt(e)}const gn=e=>e==="_"||e==="_ctx"||e==="$stable",bn=e=>F(e)?e.map(We):[We(e)],Li=(e,t,s)=>{if(t._n)return t;const n=Ql((...r)=>bn(t(...r)),s);return n._c=!1,n},Gr=(e,t,s)=>{const n=e._ctx;for(const r in e){if(gn(r))continue;const l=e[r];if(k(l))t[r]=Li(r,l,n);else if(l!=null){const i=bn(l);t[r]=()=>i}}},Jr=(e,t)=>{const s=bn(t);e.slots.default=()=>s},Yr=(e,t,s)=>{for(const n in t)(s||!gn(n))&&(e[n]=t[n])},Ki=(e,t,s)=>{const n=e.slots=Br();if(e.vnode.shapeFlag&32){const r=t._;r?(Yr(n,t,s),s&&ir(n,"_",r,!0)):Gr(t,n)}else t&&Jr(e,t)},ji=(e,t,s)=>{const{vnode:n,slots:r}=e;let l=!0,i=se;if(n.shapeFlag&32){const o=t._;o?s&&o===1?l=!1:Yr(r,t,s):(l=!t.$stable,Gr(t,r)),i=t}else t&&(Jr(e,t),i={default:1});if(l)for(const o in r)!gn(o)&&i[o]==null&&delete r[o]},Me=Wi;function Hi(e){return Vi(e)}function Vi(e,t){const s=Ts();s.__VUE__=!0;const{insert:n,remove:r,patchProp:l,createElement:i,createText:o,createComment:a,setText:h,setElementText:f,parentNode:p,nextSibling:C,setScopeId:T=ze,insertStaticContent:L}=e,N=(u,c,g,x=null,m=null,y=null,A=void 0,S=null,w=!!c.dynamicChildren)=>{if(u===c)return;u&&!Ht(u,c)&&(x=at(u),Oe(u,m,y,!0),u=null),c.patchFlag===-2&&(w=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:M}=c;switch(v){case Ps:ne(u,c,g,x);break;case ht:Y(u,c,g,x);break;case hs:u==null&&K(c,g,x,A);break;case fe:Re(u,c,g,x,m,y,A,S,w);break;default:M&1?ue(u,c,g,x,m,y,A,S,w):M&6?De(u,c,g,x,m,y,A,S,w):(M&64||M&128)&&v.process(u,c,g,x,m,y,A,S,w,vt)}P!=null&&m?Gt(P,u&&u.ref,y,c||u,!c):P==null&&u&&u.ref!=null&&Gt(u.ref,null,y,u,!0)},ne=(u,c,g,x)=>{if(u==null)n(c.el=o(c.children),g,x);else{const m=c.el=u.el;c.children!==u.children&&h(m,c.children)}},Y=(u,c,g,x)=>{u==null?n(c.el=a(c.children||""),g,x):c.el=u.el},K=(u,c,g,x)=>{[u.el,u.anchor]=L(u.children,c,g,x,u.el,u.anchor)},W=({el:u,anchor:c},g,x)=>{let m;for(;u&&u!==c;)m=C(u),n(u,g,x),u=m;n(c,g,x)},$=({el:u,anchor:c})=>{let g;for(;u&&u!==c;)g=C(u),r(u),u=g;r(c)},ue=(u,c,g,x,m,y,A,S,w)=>{if(c.type==="svg"?A="svg":c.type==="math"&&(A="mathml"),u==null)Te(c,g,x,m,y,A,S,w);else{const v=u.el&&u.el._isVueCE?u.el:null;try{v&&v._beginPatch(),$e(u,c,m,y,A,S,w)}finally{v&&v._endPatch()}}},Te=(u,c,g,x,m,y,A,S)=>{let w,v;const{props:P,shapeFlag:M,transition:E,dirs:R}=u;if(w=u.el=i(u.type,y,P&&P.is,P),M&8?f(w,u.children):M&16&&He(u.children,w,null,x,m,Ls(u,y),A,S),R&&mt(u,null,x,"created"),Ie(w,u,u.scopeId,A,x),P){for(const z in P)z!=="value"&&!Bt(z)&&l(w,z,null,P[z],y,x);"value"in P&&l(w,"value",null,P.value,y),(v=P.onVnodeBeforeMount)&&Ve(v,x,u)}R&&mt(u,null,x,"beforeMount");const B=Ui(m,E);B&&E.beforeEnter(w),n(w,c,g),((v=P&&P.onVnodeMounted)||B||R)&&Me(()=>{try{v&&Ve(v,x,u),B&&E.enter(w),R&&mt(u,null,x,"mounted")}finally{}},m)},Ie=(u,c,g,x,m)=>{if(g&&T(u,g),x)for(let y=0;y<x.length;y++)T(u,x[y]);if(m){let y=m.subTree;if(c===y||el(y.type)&&(y.ssContent===c||y.ssFallback===c)){const A=m.vnode;Ie(u,A,A.scopeId,A.slotScopeIds,m.parent)}}},He=(u,c,g,x,m,y,A,S,w=0)=>{for(let v=w;v<u.length;v++){const P=u[v]=S?tt(u[v]):We(u[v]);N(null,P,c,g,x,m,y,A,S)}},$e=(u,c,g,x,m,y,A)=>{const S=c.el=u.el;let{patchFlag:w,dynamicChildren:v,dirs:P}=c;w|=u.patchFlag&16;const M=u.props||se,E=c.props||se;let R;if(g&&xt(g,!1),(R=E.onVnodeBeforeUpdate)&&Ve(R,g,c,u),P&&mt(c,u,g,"beforeUpdate"),g&&xt(g,!0),(M.innerHTML&&E.innerHTML==null||M.textContent&&E.textContent==null)&&f(S,""),v?ge(u.dynamicChildren,v,S,g,x,Ls(c,m),y):A||X(u,c,S,null,g,x,Ls(c,m),y,!1),w>0){if(w&16)_e(S,M,E,g,m);else if(w&2&&M.class!==E.class&&l(S,"class",null,E.class,m),w&4&&l(S,"style",M.style,E.style,m),w&8){const B=c.dynamicProps;for(let z=0;z<B.length;z++){const Z=B[z],ae=M[Z],_=E[Z];(_!==ae||Z==="value")&&l(S,Z,ae,_,m,g)}}w&1&&u.children!==c.children&&f(S,c.children)}else!A&&v==null&&_e(S,M,E,g,m);((R=E.onVnodeUpdated)||P)&&Me(()=>{R&&Ve(R,g,c,u),P&&mt(c,u,g,"updated")},x)},ge=(u,c,g,x,m,y,A)=>{for(let S=0;S<c.length;S++){const w=u[S],v=c[S],P=w.el&&(w.type===fe||!Ht(w,v)||w.shapeFlag&198)?p(w.el):g;N(w,v,P,null,x,m,y,A,!0)}},_e=(u,c,g,x,m)=>{if(c!==g){if(c!==se)for(const y in c)!Bt(y)&&!(y in g)&&l(u,y,c[y],null,m,x);for(const y in g){if(Bt(y))continue;const A=g[y],S=c[y];A!==S&&y!=="value"&&l(u,y,S,A,m,x)}"value"in g&&l(u,"value",c.value,g.value,m)}},Re=(u,c,g,x,m,y,A,S,w)=>{const v=c.el=u?u.el:o(""),P=c.anchor=u?u.anchor:o("");let{patchFlag:M,dynamicChildren:E,slotScopeIds:R}=c;R&&(S=S?S.concat(R):R),u==null?(n(v,g,x),n(P,g,x),He(c.children||[],g,P,m,y,A,S,w)):M>0&&M&64&&E&&u.dynamicChildren&&u.dynamicChildren.length===E.length?(ge(u.dynamicChildren,E,g,m,y,A,S),(c.key!=null||m&&c===m.subTree)&&Xr(u,c,!0)):X(u,c,g,P,m,y,A,S,w)},De=(u,c,g,x,m,y,A,S,w)=>{c.slotScopeIds=S,u==null?c.shapeFlag&512?m.ctx.activate(c,g,x,A,w):le(c,g,x,m,y,A,w):Ee(u,c,w)},le=(u,c,g,x,m,y,A)=>{const S=u.component=eo(u,x,m);if(Nr(u)&&(S.ctx.renderer=vt),so(S,!1,A),S.asyncDep){if(m&&m.registerDep(S,de,A),!u.el){const w=S.subTree=Ge(ht);Y(null,w,c,g),u.placeholder=w.el}}else de(S,u,c,g,m,y,A)},Ee=(u,c,g)=>{const x=c.component=u.component;if(Ri(u,c,g))if(x.asyncDep&&!x.asyncResolved){ie(x,c,g);return}else x.next=c,x.update();else c.el=u.el,x.vnode=c},de=(u,c,g,x,m,y,A)=>{const S=()=>{if(u.isMounted){let{next:M,bu:E,u:R,parent:B,vnode:z}=u;{const b=Zr(u);if(b){M&&(M.el=z.el,ie(u,M,A)),b.asyncDep.then(()=>{Me(()=>{u.isUnmounted||v()},m)});return}}let Z=M,ae;xt(u,!1),M?(M.el=z.el,ie(u,M,A)):M=z,E&&fs(E),(ae=M.props&&M.props.onVnodeBeforeUpdate)&&Ve(ae,B,M,z),xt(u,!0);const _=Pn(u),d=u.subTree;u.subTree=_,N(d,_,p(d.el),at(d),u,m,y),M.el=_.el,Z===null&&Ni(u,_.el),R&&Me(R,m),(ae=M.props&&M.props.onVnodeUpdated)&&Me(()=>Ve(ae,B,M,z),m)}else{let M;const{el:E,props:R}=c,{bm:B,m:z,parent:Z,root:ae,type:_}=u,d=Jt(c);xt(u,!1),B&&fs(B),!d&&(M=R&&R.onVnodeBeforeMount)&&Ve(M,Z,c),xt(u,!0);{ae.ce&&ae.ce._hasShadowRoot()&&ae.ce._injectChildStyle(_,u.parent?u.parent.type:void 0);const b=u.subTree=Pn(u);N(null,b,g,x,u,m,y),c.el=b.el}if(z&&Me(z,m),!d&&(M=R&&R.onVnodeMounted)){const b=c;Me(()=>Ve(M,Z,b),m)}(c.shapeFlag&256||Z&&Jt(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&Me(u.a,m),u.isMounted=!0,c=g=x=null}};u.scope.on();const w=u.effect=new cr(S);u.scope.off();const v=u.update=w.run.bind(w),P=u.job=w.runIfDirty.bind(w);P.i=u,P.id=u.uid,w.scheduler=()=>hn(P),xt(u,!0),v()},ie=(u,c,g)=>{c.component=u;const x=u.vnode.props;u.vnode=c,u.next=null,Di(u,c.props,x,g),ji(u,c.children,g),lt(),Sn(u),it()},X=(u,c,g,x,m,y,A,S,w=!1)=>{const v=u&&u.children,P=u?u.shapeFlag:0,M=c.children,{patchFlag:E,shapeFlag:R}=c;if(E>0){if(E&128){Ct(v,M,g,x,m,y,A,S,w);return}else if(E&256){ke(v,M,g,x,m,y,A,S,w);return}}R&8?(P&16&&gt(v,m,y),M!==v&&f(g,M)):P&16?R&16?Ct(v,M,g,x,m,y,A,S,w):gt(v,m,y,!0):(P&8&&f(g,""),R&16&&He(M,g,x,m,y,A,S,w))},ke=(u,c,g,x,m,y,A,S,w)=>{u=u||Ot,c=c||Ot;const v=u.length,P=c.length,M=Math.min(v,P);let E;for(E=0;E<M;E++){const R=c[E]=w?tt(c[E]):We(c[E]);N(u[E],R,g,null,m,y,A,S,w)}v>P?gt(u,m,y,!0,!1,M):He(c,g,x,m,y,A,S,w,M)},Ct=(u,c,g,x,m,y,A,S,w)=>{let v=0;const P=c.length;let M=u.length-1,E=P-1;for(;v<=M&&v<=E;){const R=u[v],B=c[v]=w?tt(c[v]):We(c[v]);if(Ht(R,B))N(R,B,g,null,m,y,A,S,w);else break;v++}for(;v<=M&&v<=E;){const R=u[M],B=c[E]=w?tt(c[E]):We(c[E]);if(Ht(R,B))N(R,B,g,null,m,y,A,S,w);else break;M--,E--}if(v>M){if(v<=E){const R=E+1,B=R<P?c[R].el:x;for(;v<=E;)N(null,c[v]=w?tt(c[v]):We(c[v]),g,B,m,y,A,S,w),v++}}else if(v>E)for(;v<=M;)Oe(u[v],m,y,!0),v++;else{const R=v,B=v,z=new Map;for(v=B;v<=E;v++){const D=c[v]=w?tt(c[v]):We(c[v]);D.key!=null&&z.set(D.key,v)}let Z,ae=0;const _=E-B+1;let d=!1,b=0;const I=new Array(_);for(v=0;v<_;v++)I[v]=0;for(v=R;v<=M;v++){const D=u[v];if(ae>=_){Oe(D,m,y,!0);continue}let V;if(D.key!=null)V=z.get(D.key);else for(Z=B;Z<=E;Z++)if(I[Z-B]===0&&Ht(D,c[Z])){V=Z;break}V===void 0?Oe(D,m,y,!0):(I[V-B]=v+1,V>=b?b=V:d=!0,N(D,c[V],g,null,m,y,A,S,w),ae++)}const H=d?Bi(I):Ot;for(Z=H.length-1,v=_-1;v>=0;v--){const D=B+v,V=c[D],q=c[D+1],Q=D+1<P?q.el||Qr(q):x;I[v]===0?N(null,V,g,Q,m,y,A,S,w):d&&(Z<0||v!==H[Z]?be(V,g,Q,2):Z--)}}},be=(u,c,g,x,m=null)=>{const{el:y,type:A,transition:S,children:w,shapeFlag:v}=u;if(v&6){be(u.component.subTree,c,g,x);return}if(v&128){u.suspense.move(c,g,x);return}if(v&64){A.move(u,c,g,vt);return}if(A===fe){n(y,c,g);for(let M=0;M<w.length;M++)be(w[M],c,g,x);n(u.anchor,c,g);return}if(A===hs){W(u,c,g);return}if(x!==2&&v&1&&S)if(x===0)S.beforeEnter(y),n(y,c,g),Me(()=>S.enter(y),m);else{const{leave:M,delayLeave:E,afterLeave:R}=S,B=()=>{u.ctx.isUnmounted?r(y):n(y,c,g)},z=()=>{y._isLeaving&&y[ii](!0),M(y,()=>{B(),R&&R()})};E?E(y,B,z):z()}else n(y,c,g)},Oe=(u,c,g,x=!1,m=!1)=>{const{type:y,props:A,ref:S,children:w,dynamicChildren:v,shapeFlag:P,patchFlag:M,dirs:E,cacheIndex:R,memo:B}=u;if(M===-2&&(m=!1),S!=null&&(lt(),Gt(S,null,g,u,!0),it()),R!=null&&(c.renderCache[R]=void 0),P&256){c.ctx.deactivate(u);return}const z=P&1&&E,Z=!Jt(u);let ae;if(Z&&(ae=A&&A.onVnodeBeforeUnmount)&&Ve(ae,c,u),P&6)os(u.component,g,x);else{if(P&128){u.suspense.unmount(g,x);return}z&&mt(u,null,c,"beforeUnmount"),P&64?u.type.remove(u,c,g,vt,x):v&&!v.hasOnce&&(y!==fe||M>0&&M&64)?gt(v,c,g,!1,!0):(y===fe&&M&384||!m&&P&16)&&gt(w,c,g),x&&Lt(u)}const _=B!=null&&R==null;(Z&&(ae=A&&A.onVnodeUnmounted)||z||_)&&Me(()=>{ae&&Ve(ae,c,u),z&&mt(u,null,c,"unmounted"),_&&(u.el=null)},g)},Lt=u=>{const{type:c,el:g,anchor:x,transition:m}=u;if(c===fe){Xe(g,x);return}if(c===hs){$(u);return}const y=()=>{r(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:A,delayLeave:S}=m,w=()=>A(g,y);S?S(u.el,y,w):w()}else y()},Xe=(u,c)=>{let g;for(;u!==c;)g=C(u),r(u),u=g;r(c)},os=(u,c,g)=>{const{bum:x,scope:m,job:y,subTree:A,um:S,m:w,a:v}=u;Rn(w),Rn(v),x&&fs(x),m.stop(),y&&(y.flags|=8,Oe(A,u,c,g)),S&&Me(S,c),Me(()=>{u.isUnmounted=!0},c)},gt=(u,c,g,x=!1,m=!1,y=0)=>{for(let A=y;A<u.length;A++)Oe(u[A],c,g,x,m)},at=u=>{if(u.shapeFlag&6)return at(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const c=C(u.anchor||u.el),g=c&&c[ri];return g?C(g):c};let Kt=!1;const bt=(u,c,g)=>{let x;u==null?c._vnode&&(Oe(c._vnode,null,null,!0),x=c._vnode.component):N(c._vnode||null,u,c,null,null,null,g),c._vnode=u,Kt||(Kt=!0,Sn(x),Er(),Kt=!1)},vt={p:N,um:Oe,m:be,r:Lt,mt:le,mc:He,pc:X,pbc:ge,n:at,o:e};return{render:bt,hydrate:void 0,createApp:Mi(bt)}}function Ls({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function xt({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ui(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xr(e,t,s=!1){const n=e.children,r=t.children;if(F(n)&&F(r))for(let l=0;l<n.length;l++){const i=n[l];let o=r[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[l]=tt(r[l]),o.el=i.el),!s&&o.patchFlag!==-2&&Xr(i,o)),o.type===Ps&&(o.patchFlag===-1&&(o=r[l]=tt(o)),o.el=i.el),o.type===ht&&!o.el&&(o.el=i.el)}}function Bi(e){const t=e.slice(),s=[0];let n,r,l,i,o;const a=e.length;for(n=0;n<a;n++){const h=e[n];if(h!==0){if(r=s[s.length-1],e[r]<h){t[n]=r,s.push(n);continue}for(l=0,i=s.length-1;l<i;)o=l+i>>1,e[s[o]]<h?l=o+1:i=o;h<e[s[l]]&&(l>0&&(t[n]=s[l-1]),s[l]=n)}}for(l=s.length,i=s[l-1];l-- >0;)s[l]=i,i=t[i];return s}function Zr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zr(t)}function Rn(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Qr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Qr(t.subTree):null}const el=e=>e.__isSuspense;function Wi(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Zl(e)}const fe=Symbol.for("v-fgt"),Ps=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),hs=Symbol.for("v-stc"),Xt=[];let Pe=null;function j(e=!1){Xt.push(Pe=e?null:[])}function qi(){Xt.pop(),Pe=Xt[Xt.length-1]||null}let ts=1;function Nn(e,t=!1){ts+=e,e<0&&Pe&&t&&(Pe.hasOnce=!0)}function tl(e){return e.dynamicChildren=ts>0?Pe||Ot:null,qi(),ts>0&&Pe&&Pe.push(e),e}function U(e,t,s,n,r,l){return tl(O(e,t,s,n,r,l,!0))}function zi(e,t,s,n,r){return tl(Ge(e,t,s,n,r,!0))}function sl(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const nl=({key:e})=>e??null,ps=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||xe(e)||k(e)?{i:Ne,r:e,k:t,f:!!s}:e:null);function O(e,t=null,s=null,n=0,r=null,l=e===fe?0:1,i=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nl(t),ref:t&&ps(t),scopeId:Pr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ne};return o?(vn(a,s),l&128&&e.normalize(a)):s&&(a.shapeFlag|=ce(s)?8:16),ts>0&&!i&&Pe&&(a.patchFlag>0||l&6)&&a.patchFlag!==32&&Pe.push(a),a}const Ge=Gi;function Gi(e,t=null,s=null,n=0,r=null,l=!1){if((!e||e===yi)&&(e=ht),sl(e)){const o=Nt(e,t,!0);return s&&vn(o,s),ts>0&&!l&&Pe&&(o.shapeFlag&6?Pe[Pe.indexOf(e)]=o:Pe.push(o)),o.patchFlag=-2,o}if(io(e)&&(e=e.__vccOpts),t){t=Ji(t);let{class:o,style:a}=t;o&&!ce(o)&&(t.class=et(o)),ee(a)&&(dn(a)&&!F(a)&&(a=pe({},a)),t.style=sn(a))}const i=ce(e)?1:el(e)?128:li(e)?64:ee(e)?4:k(e)?2:0;return O(e,t,s,n,r,i,l,!0)}function Ji(e){return e?dn(e)||Wr(e)?pe({},e):e:null}function Nt(e,t,s=!1,n=!1){const{props:r,ref:l,patchFlag:i,children:o,transition:a}=e,h=t?Xi(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&nl(h),ref:t&&t.ref?s&&l?F(l)?l.concat(ps(t)):[l,ps(t)]:ps(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&pn(f,a.clone(f)),f}function ct(e=" ",t=0){return Ge(Ps,null,e,t)}function Yi(e,t){const s=Ge(hs,null,e);return s.staticCount=t,s}function he(e="",t=!1){return t?(j(),zi(ht,null,e)):Ge(ht,null,e)}function We(e){return e==null||typeof e=="boolean"?Ge(ht):F(e)?Ge(fe,null,e.slice()):sl(e)?tt(e):Ge(Ps,null,String(e))}function tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nt(e)}function vn(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(F(t))s=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),vn(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!Wr(t)?t._ctx=Ne:r===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else k(t)?(t={default:t,_ctx:Ne},s=32):(t=String(t),n&64?(s=16,t=[ct(t)]):s=8);e.children=t,e.shapeFlag|=s}function Xi(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=et([t.class,n.class]));else if(r==="style")t.style=sn([t.style,n.style]);else if(_s(r)){const l=t[r],i=n[r];i&&l!==i&&!(F(l)&&l.includes(i))?t[r]=l?[].concat(l,i):i:i==null&&l==null&&!ws(r)&&(t[r]=i)}else r!==""&&(t[r]=n[r])}return t}function Ve(e,t,s,n=null){Ye(e,t,7,[s,n])}const Zi=jr();let Qi=0;function eo(e,t,s){const n=e.type,r=(t?t.appContext:e.appContext)||Zi,l={uid:Qi++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zr(n,r),emitsOptions:Hr(n,r),emit:null,emitted:null,propsDefaults:se,inheritAttrs:n.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Oi.bind(null,l),e.ce&&e.ce(l),l}let Ce=null;const to=()=>Ce||Ne;let xs,Xs;{const e=Ts(),t=(s,n)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(n),l=>{r.length>1?r.forEach(i=>i(l)):r[0](l)}};xs=t("__VUE_INSTANCE_SETTERS__",s=>Ce=s),Xs=t("__VUE_SSR_SETTERS__",s=>ss=s)}const is=e=>{const t=Ce;return xs(e),e.scope.on(),()=>{e.scope.off(),xs(t)}},Fn=()=>{Ce&&Ce.scope.off(),xs(null)};function rl(e){return e.vnode.shapeFlag&4}let ss=!1;function so(e,t=!1,s=!1){t&&Xs(t);const{props:n,children:r}=e.vnode,l=rl(e);Fi(e,n,l,t),Ki(e,r,s||t);const i=l?no(e,t):void 0;return t&&Xs(!1),i}function no(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xi);const{setup:n}=s;if(n){lt();const r=e.setupContext=n.length>1?lo(e):null,l=is(e),i=ls(n,e,0,[e.props,r]),o=sr(i);if(it(),l(),(o||e.sp)&&!Jt(e)&&Rr(e),o){if(i.then(Fn,Fn),t)return i.then(a=>{Dn(e,a)}).catch(a=>{Ms(a,e,0)});e.asyncDep=i}else Dn(e,i)}else ll(e)}function Dn(e,t,s){k(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=Cr(t)),ll(e)}function ll(e,t,s){const n=e.type;e.render||(e.render=n.render||ze);{const r=is(e);lt();try{_i(e)}finally{it(),r()}}}const ro={get(e,t){return ye(e,"get",""),e[t]}};function lo(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,ro),slots:e.slots,emit:e.emit,expose:t}}function Is(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Cr(Hl(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Yt)return Yt[s](e)},has(t,s){return s in t||s in Yt}})):e.proxy}function io(e){return k(e)&&"__vccOpts"in e}const Ae=(e,t)=>zl(e,t,ss),oo="3.5.33";/**\n* @vue/runtime-dom v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let Zs;const kn=typeof window<"u"&&window.trustedTypes;if(kn)try{Zs=kn.createPolicy("vue",{createHTML:e=>e})}catch{}const il=Zs?e=>Zs.createHTML(e):e=>e,uo="http://www.w3.org/2000/svg",ao="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,Ln=Qe&&Qe.createElement("template"),co={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const r=t==="svg"?Qe.createElementNS(uo,e):t==="mathml"?Qe.createElementNS(ao,e):s?Qe.createElement(e,{is:s}):Qe.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,r,l){const i=s?s.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{Ln.innerHTML=il(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Ln.content;if(n==="svg"||n==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},fo=Symbol("_vtc");function ho(e,t,s){const n=e[fo];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Kn=Symbol("_vod"),po=Symbol("_vsh"),go=Symbol(""),bo=/(?:^|;)\\s*display\\s*:/;function vo(e,t,s){const n=e.style,r=ce(s);let l=!1;if(s&&!r){if(t)if(ce(t))for(const i of t.split(";")){const o=i.slice(0,i.indexOf(":")).trim();s[o]==null&&Ut(n,o,"")}else for(const i in t)s[i]==null&&Ut(n,i,"");for(const i in s){i==="display"&&(l=!0);const o=s[i];o!=null?yo(e,i,!ce(t)&&t?t[i]:void 0,o)||Ut(n,i,o):Ut(n,i,"")}}else if(r){if(t!==s){const i=n[go];i&&(s+=";"+i),n.cssText=s,l=bo.test(s)}}else t&&e.removeAttribute("style");Kn in e&&(e[Kn]=l?n.display:"",e[po]&&(n.display="none"))}const jn=/\\s*!important$/;function Ut(e,t,s){if(F(s))s.forEach(n=>Ut(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=mo(e,t);jn.test(s)?e.setProperty(pt(n),s.replace(jn,""),"important"):e[n]=s}}const Hn=["Webkit","Moz","ms"],Ks={};function mo(e,t){const s=Ks[t];if(s)return s;let n=Le(t);if(n!=="filter"&&n in e)return Ks[t]=n;n=lr(n);for(let r=0;r<Hn.length;r++){const l=Hn[r]+n;if(l in e)return Ks[t]=l}return t}function yo(e,t,s,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ce(n)&&s===n}const Vn="http://www.w3.org/1999/xlink";function Un(e,t,s,n,r,l=ml(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Vn,t.slice(6,t.length)):e.setAttributeNS(Vn,t,s):s==null||l&&!or(s)?e.removeAttribute(t):e.setAttribute(t,l?"":Je(s)?String(s):s)}function Bn(e,t,s,n,r){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?il(s):s);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?e.getAttribute("value")||"":e.value,a=s==null?e.type==="checkbox"?"on":"":String(s);(o!==a||!("_value"in e))&&(e.value=a),s==null&&e.removeAttribute(t),e._value=s;return}let i=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=or(s):s==null&&o==="string"?(s="",i=!0):o==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(r||t)}function dt(e,t,s,n){e.addEventListener(t,s,n)}function xo(e,t,s,n){e.removeEventListener(t,s,n)}const Wn=Symbol("_vei");function _o(e,t,s,n,r=null){const l=e[Wn]||(e[Wn]={}),i=l[t];if(n&&i)i.value=n;else{const[o,a]=wo(t);if(n){const h=l[t]=To(n,r);dt(e,o,h,a)}else i&&(xo(e,o,i,a),l[t]=void 0)}}const qn=/(?:Once|Passive|Capture)$/;function wo(e){let t;if(qn.test(e)){t={};let n;for(;n=e.match(qn);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pt(e.slice(2)),t]}let js=0;const So=Promise.resolve(),Co=()=>js||(So.then(()=>js=0),js=Date.now());function To(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;Ye(Ao(n,s.value),t,5,[n])};return s.value=e,s.attached=Co(),s}function Ao(e,t){if(F(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const zn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mo=(e,t,s,n,r,l)=>{const i=r==="svg";t==="class"?ho(e,n,i):t==="style"?vo(e,s,n):_s(t)?ws(t)||_o(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Eo(e,t,n,i))?(Bn(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Un(e,t,n,i,l,t!=="value")):e._isVueCE&&(Oo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ce(n)))?Bn(e,Le(t),n,l,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Un(e,t,n,i))};function Eo(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&zn(t)&&k(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return zn(t)&&ce(s)?!1:t in e}function Oo(e,t){const s=e._def.props;if(!s)return!1;const n=Le(t);return Array.isArray(s)?s.some(r=>Le(r)===n):Object.keys(s).some(r=>Le(r)===n)}const Ft=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?s=>fs(t,s):t};function Po(e){e.target.composing=!0}function Gn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const rt=Symbol("_assign");function Jn(e,t,s){return t&&(e=e.trim()),s&&(e=Cs(e)),e}const Hs={created(e,{modifiers:{lazy:t,trim:s,number:n}},r){e[rt]=Ft(r);const l=n||r.props&&r.props.type==="number";dt(e,t?"change":"input",i=>{i.target.composing||e[rt](Jn(e.value,s,l))}),(s||l)&&dt(e,"change",()=>{e.value=Jn(e.value,s,l)}),t||(dt(e,"compositionstart",Po),dt(e,"compositionend",Gn),dt(e,"change",Gn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:n,trim:r,number:l}},i){if(e[rt]=Ft(i),e.composing)return;const o=(l||e.type==="number")&&!/^0\\d/.test(e.value)?Cs(e.value):e.value,a=t??"";if(o===a)return;const h=e.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===e&&e.type!=="range"&&(n&&t===s||r&&e.value.trim()===a)||(e.value=a)}},Io={deep:!0,created(e,t,s){e[rt]=Ft(s),dt(e,"change",()=>{const n=e._modelValue,r=ns(e),l=e.checked,i=e[rt];if(F(n)){const o=nn(n,r),a=o!==-1;if(l&&!a)i(n.concat(r));else if(!l&&a){const h=[...n];h.splice(o,1),i(h)}}else if(Dt(n)){const o=new Set(n);l?o.add(r):o.delete(r),i(o)}else i(ol(e,l))})},mounted:Yn,beforeUpdate(e,t,s){e[rt]=Ft(s),Yn(e,t,s)}};function Yn(e,{value:t,oldValue:s},n){e._modelValue=t;let r;if(F(t))r=nn(t,n.props.value)>-1;else if(Dt(t))r=t.has(n.props.value);else{if(t===s)return;r=kt(t,ol(e,!0))}e.checked!==r&&(e.checked=r)}const Xn={deep:!0,created(e,{value:t,modifiers:{number:s}},n){const r=Dt(t);dt(e,"change",()=>{const l=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>s?Cs(ns(i)):ns(i));e[rt](e.multiple?r?new Set(l):l:l[0]),e._assigning=!0,Ar(()=>{e._assigning=!1})}),e[rt]=Ft(n)},mounted(e,{value:t}){Zn(e,t)},beforeUpdate(e,t,s){e[rt]=Ft(s)},updated(e,{value:t}){e._assigning||Zn(e,t)}};function Zn(e,t){const s=e.multiple,n=F(t);if(!(s&&!n&&!Dt(t))){for(let r=0,l=e.options.length;r<l;r++){const i=e.options[r],o=ns(i);if(s)if(n){const a=typeof o;a==="string"||a==="number"?i.selected=t.some(h=>String(h)===String(o)):i.selected=nn(t,o)>-1}else i.selected=t.has(o);else if(kt(ns(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ns(e){return"_value"in e?e._value:e.value}function ol(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const $o=["ctrl","shift","alt","meta"],Ro={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>$o.some(s=>e[`${s}Key`]&&!t.includes(s))},Qn=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((r,...l)=>{for(let i=0;i<t.length;i++){const o=Ro[t[i]];if(o&&o(r,t))return}return e(r,...l)}))},No={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fo=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(r=>{if(!("key"in r))return;const l=pt(r.key);if(t.some(i=>i===l||No[i]===l))return e(r)}))},Do=pe({patchProp:Mo},co);let er;function ko(){return er||(er=Hi(Do))}const Lo=((...e)=>{const t=ko().createApp(...e),{mount:s}=t;return t.mount=n=>{const r=jo(n);if(!r)return;const l=t._component;!k(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=s(r,!1,Ko(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t});function Ko(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function jo(e){return ce(e)?document.querySelector(e):e}const Ho={class:"flex flex-col h-screen bg-white text-[13px] font-sans select-none"},Vo={class:"flex-1 overflow-y-auto p-4 space-y-4"},Uo={class:"space-y-2"},Bo={class:"flex items-center gap-2"},Wo=["value"],qo=["disabled"],zo=["disabled"],Go={key:1,class:"flex items-center gap-2 text-xs text-gray-600 cursor-pointer w-fit"},Jo={class:"flex flex-col gap-1"},Yo=["disabled"],Xo=["value"],Zo={class:"space-y-2 pt-3 border-t border-gray-100"},Qo={class:"flex gap-2"},eu=["onKeydown"],tu=["disabled"],su={key:0,class:"space-y-2"},nu={class:"flex items-center justify-between"},ru={class:"text-xs text-gray-600"},lu={class:"flex items-center gap-2"},iu={class:"max-h-60 overflow-auto border border-gray-200 rounded-lg"},ou=["checked","disabled","onChange"],uu={class:"min-w-0 flex-1"},au={class:"flex items-center gap-1.5 truncate"},cu={class:"text-[11px] text-gray-400 font-normal shrink-0"},fu={key:0,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-orange-500 text-white leading-none"},du={key:1,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-blue-500 text-white leading-none"},hu={key:2,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-gray-400 text-white leading-none"},pu={key:0,class:"text-[11px] text-gray-400 truncate"},gu={class:"min-w-0 flex-1"},bu={class:"flex items-center gap-1.5 truncate"},vu={class:"text-[12px] font-semibold text-gray-400 truncate line-through"},mu={class:"text-[11px] text-gray-400 font-normal shrink-0"},yu={class:"text-[11px] text-gray-400 truncate"},xu={key:0,class:"flex flex-wrap gap-1 pt-1"},_u=["onClick"],wu={class:"space-y-2 pt-3 border-t border-gray-100"},Su={class:"text-[12px] font-semibold text-blue-800 truncate"},Cu={class:"text-[11px] text-blue-600 mt-0.5"},Tu={key:0,class:"mt-2 text-[11px] text-amber-800 leading-relaxed"},Au={key:1,class:"text-[12px] text-gray-500"},Mu={key:0,class:"text-xs text-gray-500"},Eu={key:1,class:"text-xs text-red-600"},Ou={class:"px-4 py-3 border-t border-gray-200"},Pu={key:0,class:"text-xs text-red-600 mb-2"},Iu={class:"flex gap-2"},$u={key:0,class:"relative flex-1 group"},Ru=["disabled"],Nu={key:0,class:"pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 w-max max-w-[200px] text-center rounded bg-gray-800 px-2 py-1 text-[11px] text-white z-10"},Fu=["disabled"],Du=oi({__name:"App",setup(e){const t=oe(""),s=oe(""),n=oe(!1),r=Ae(()=>!s.value.trim()||n.value),l=oe([]),i=oe("manual"),o=oe(""),a=oe([]),h=oe(""),f=oe(""),p=oe([]),C=oe([]),T=oe(new Set),L=oe(null),N=oe(null),ne=oe(!1);let Y=null;const K=oe([]),W=Ae(()=>new Set(K.value.map(_=>`${_.tabTitle}::${_.rowNumber}`))),$=oe([]),ue=Ae(()=>new Set($.value.map(_=>`${_.tabTitle}::${_.rowNumber}`))),Te=oe([]),Ie=Ae(()=>{const _=new Set(Te.value.map(d=>`${d.tabTitle}::${d.rowNumber}`));for(const d of p.value)d.strikethrough&&_.add(`${d.tabTitle}::${d.rowNumber}`);return _}),He=Ae(()=>Te.value.map(_=>({tabTitle:_.tabTitle,rowNumber:_.rowNumber,name:"",type:"STRING",label:_.label,value:_.value,description:""}))),$e=oe(!1),ge=oe(!1),_e=oe(!1),Re=oe(!1),De=oe(!1),le=oe(""),Ee=oe("");function de(_){return String(_??"").trim().toLowerCase().replace(/[#()[\\]{}]/g," ").replace(/[_\\-\\s]+/g,"")}function ie(_,d){const b=_??"",I=d??"",H=b.length,D=I.length;if(H===0)return D;if(D===0)return H;const V=new Array(D+1);for(let q=0;q<=D;q+=1)V[q]=q;for(let q=1;q<=H;q+=1){let Q=V[0];V[0]=q;for(let ve=1;ve<=D;ve+=1){const Tt=V[ve],ul=b[q-1]===I[ve-1]?0:1;V[ve]=Math.min(V[ve]+1,V[ve-1]+1,Q+ul),Q=Tt}}return V[D]}function X(_,d){const b=de(_),I=de(d);if(!b||!I)return 0;if(b===I)return 1;if(b.includes(I)||I.includes(b))return .92;const H=ie(b,I),D=Math.max(b.length,I.length);return D===0?0:1-H/D}function ke(_,d,b,I=.6){let H="",D=0;for(const V of _){if(b.has(V))continue;let q=0;for(const Q of d)q=Math.max(q,X(V,Q));q>D&&(D=q,H=V)}return H&&D>=I?H:""}function Ct(){var D,V;const _=((V=(D=L.value)==null?void 0:D.textProperties)==null?void 0:V.map(q=>q.name))??[];if(_.length===0)return;const d=new Set,b=ke(_,["label","title","name","key","header"],d,.55);b&&d.add(b);const I=ke(_,["value","content","text","body"],d,.55);I&&d.add(I);const H=ke(_,["description","desc","helper","hint","subtitle","note"],d,.55);H&&d.add(H)}function be(_){return`${_.tabTitle}::${_.rowNumber}::${_.name}::${_.label}`}function Oe(_,d){const b=d.split(",").map(Q=>Q.trim().toLowerCase().normalize("NFC")).filter(Q=>Q.length>=2);if(b.length===0)return[{text:_,match:!1}];const I=_.toLowerCase().normalize("NFC"),H=[];for(const Q of b){let ve=0;for(;ve<I.length;){const Tt=I.indexOf(Q,ve);if(Tt===-1)break;H.push({start:Tt,end:Tt+Q.length}),ve=Tt+Q.length}}if(H.length===0)return[{text:_,match:!1}];H.sort((Q,ve)=>Q.start-ve.start);const D=[];for(const Q of H)D.length===0||Q.start>=D[D.length-1].end?D.push({...Q}):D[D.length-1].end=Math.max(D[D.length-1].end,Q.end);const V=[];let q=0;for(const{start:Q,end:ve}of D)q<Q&&V.push({text:_.slice(q,Q),match:!1}),V.push({text:_.slice(Q,ve),match:!0}),q=ve;return q<_.length&&V.push({text:_.slice(q),match:!1}),V}function Lt(_){return _.map(d=>({tabTitle:d.tabTitle,rowNumber:d.rowNumber,name:d.name,type:d.type,label:d.label,value:d.value,description:d.description}))}function Xe(){Y&&clearTimeout(Y),Y=setTimeout(()=>{if(Y=null,!t.value.trim()){N.value=null,ne.value=!1;return}if(!L.value||p.value.length===0){N.value=null,ne.value=!1;return}parent.postMessage({pluginMessage:{type:"sheet-diff-request",url:t.value,currentRows:Lt(p.value)}},"*")},120)}function os(){parent.postMessage({pluginMessage:{type:"get-selection"}},"*")}function gt(){i.value="manual",t.value="",n.value=!1,a.value=[],h.value="",f.value="",p.value=[],C.value=[],T.value=new Set,o.value="",Ee.value="",le.value="\uC791\uC5C5 \uC601\uC5ED\uC744 \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.",$e.value=!1,Re.value=!1,ge.value=!1,_e.value=!1,N.value=null,ne.value=!1,K.value=[],os()}function at(){a.value=[],h.value="",p.value=[],C.value=[],T.value=new Set,f.value="",o.value="",le.value="",Ee.value="",N.value=null,ne.value=!1,K.value=[]}function Kt(){if(i.value==="manual"){at();return}t.value=i.value,at()}let bt=null;zt(t,(_,d)=>{i.value==="manual"&&d!==void 0&&(bt&&clearTimeout(bt),bt=setTimeout(()=>{bt=null,at()},450))});const vt=Ae(()=>{if($e.value)return"\uD638\uCD9C \uC911...";const _=t.value.trim();return _&&o.value===_&&a.value.length>0?"\uC2DC\uD2B8 \uD638\uCD9C":"\uD638\uCD9C\uD558\uAE30"});function mn(){parent.postMessage({pluginMessage:{type:"clear-recent-urls"}},"*")}function u(){Ee.value="",le.value="",o.value="",a.value=[],h.value="",p.value=[],C.value=[],T.value=new Set,$e.value=!0,parent.postMessage({pluginMessage:{type:"list-tabs",url:t.value,apiKey:s.value}},"*")}function c(){if(!(!t.value.trim()||!s.value.trim())){if(Ee.value="",le.value="",!h.value){p.value=C.value.length?[...C.value]:[],T.value=new Set,le.value=C.value.length?`\uC804\uCCB4 \uD0ED ${C.value.length}\uAC1C \uD589`:"\uC2DC\uD2B8 \uD638\uCD9C \uD6C4 \uC804\uCCB4 \uD0ED \uBAA9\uB85D\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.";return}Re.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:h.value}},"*")}}function g(){if(Ee.value="",le.value="",f.value.split(",").map(d=>d.trim()).filter(d=>d.length>=2).length===0){T.value=new Set,h.value?(Re.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:h.value}},"*")):C.value.length>0&&(p.value=[...C.value],le.value=`\uC804\uCCB4 ${C.value.length}\uAC1C \uD589`);return}ge.value=!0,parent.postMessage({pluginMessage:{type:"search",url:t.value,apiKey:s.value,keyword:f.value,tabTitle:h.value||void 0}},"*")}function x(){if(ge.value||Re.value||!t.value.trim()||!s.value.trim())return;const _=f.value.trim();_&&_.length<2||(_||C.value.length>0||h.value)&&g()}function m(_){const d=be(_),b=new Set(T.value);b.has(d)?b.delete(d):b.add(d),T.value=b}function y(){const _=W.value;T.value=new Set(p.value.filter(d=>_.has(`${d.tabTitle}::${d.rowNumber}`)).map(be))}function A(){const _=ue.value;T.value=new Set(p.value.filter(d=>_.has(`${d.tabTitle}::${d.rowNumber}`)).map(be))}function S(){T.value=new Set(p.value.map(be))}function w(){T.value=new Set}const v=Ae(()=>{const _=T.value;return p.value.filter(d=>_.has(be(d)))}),P=Ae(()=>{if(v.value.length===0)return!1;const _=W.value;return v.value.every(d=>_.has(`${d.tabTitle}::${d.rowNumber}`))}),M=Ae(()=>{var _;return((_=L.value)==null?void 0:_.hasMappableSheetProps)===!0}),E=Ae(()=>L.value?!M.value:!1),R=Ae(()=>{const _=new Map;for(const b of v.value){const I=String(b.label??"").trim(),H=I.length===0?"\\0empty":I;_.set(H,(_.get(H)??0)+1)}const d=[];for(const[b,I]of _)I<2||d.push(b==="\\0empty"?"(\uBE48 label)":b);return d}),B=Ae(()=>R.value.length>0),z=Ae(()=>!(P.value||!L.value||v.value.length===0||!M.value));function Z(){if(T.value.size===0)return;const _=new Set(v.value.map(b=>`${b.tabTitle}::${b.rowNumber}`)),d=K.value.filter(b=>_.has(`${b.tabTitle}::${b.rowNumber}`)).map(b=>({oldLabel:b.oldLabel,newLabel:b.newLabel,tabTitle:b.tabTitle,rowNumber:b.rowNumber,value:b.value}));if(d.length===0){le.value="\uC120\uD0DD\uD55C \uD589 \uC911 \uBCC0\uACBD\uB41C label\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";return}De.value=!0,Ee.value="",le.value="",parent.postMessage({pluginMessage:{type:"sync-value-changes",valueChangedItems:[],labelChangedItems:d,url:t.value}},"*")}function ae(){Ee.value="",le.value="",_e.value=!0;const _=v.value.map(d=>({tabTitle:d.tabTitle,rowNumber:d.rowNumber,name:d.name,type:d.type,label:d.label,value:d.value,description:d.description}));parent.postMessage({pluginMessage:{type:"connect-and-generate",url:t.value,apiKey:s.value,keywordRows:_,snapshotRows:Lt(p.value),tabScope:h.value||void 0}},"*")}return zt([p,L,t],()=>Xe(),{deep:!0}),Dr(()=>{os(),parent.postMessage({pluginMessage:{type:"get-settings"}},"*"),window.onmessage=_=>{var b;const d=(b=_.data)==null?void 0:b.pluginMessage;if(d){if(d.type==="settings"){s.value=typeof d.apiKey=="string"?d.apiKey:"",l.value=Array.isArray(d.recentSheets)?d.recentSheets:[];return}if(d.type==="selection"){L.value=d.selection??null,Ct(),Xe();return}if(d.type==="sheet-diff"){N.value={hasSnapshot:d.hasSnapshot===!0,sameSpreadsheet:d.sameSpreadsheet===!0,added:Array.isArray(d.added)?d.added:[],deleted:Array.isArray(d.deleted)?d.deleted:[],valueChanged:Array.isArray(d.valueChanged)?d.valueChanged:[],labelChanged:Array.isArray(d.labelChanged)?d.labelChanged:[]},ne.value=!1;return}if(d.type==="tabs"){$e.value=!1,a.value=Array.isArray(d.tabs)?d.tabs:[];const I=Array.isArray(d.rows)?d.rows:[];C.value=I,p.value=[...I],T.value=new Set,o.value=t.value.trim();const H=Array.isArray(d.labelChanged)?d.labelChanged:[];if(K.value=H,$.value=Array.isArray(d.labelAdded)?d.labelAdded:[],Te.value=Array.isArray(d.labelDeleted)?d.labelDeleted:[],a.value.length===0)le.value="\uD0ED\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.";else if(I.length===0)le.value=`\uD0ED ${a.value.length}\uAC1C\uB97C \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. (\uD589 \uB370\uC774\uD130 \uC5C6\uC74C \uB610\uB294 \uC77C\uBD80 \uD0ED\uB9CC \uC77D\uC74C)`;else{const D=W.value.size,V=ue.value.size,q=Ie.value.size,Q=[D>0?`\u26A0\uFE0F label \uBCC0\uACBD ${D}\uAC74 \uAC10\uC9C0`:"",V>0?`\u{1F195} \uC2E0\uADDC ${V}\uAC74 \uAC10\uC9C0`:"",q>0?`\u{1F5D1}\uFE0F \uC0AD\uC81C ${q}\uAC74 \uAC10\uC9C0`:""].filter(Boolean).join(" \xB7 ");le.value=Q?`\uD0ED ${a.value.length}\uAC1C \xB7 ${I.length}\uAC1C \uD589 \uBD88\uB7EC\uC634 \xB7 ${Q}`:`\uD0ED ${a.value.length}\uAC1C \xB7 \uC804\uCCB4 ${I.length}\uAC1C \uD589(label/value \uB4F1)\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`}Xe();return}if(d.type==="tab-rows"){Re.value=!1,p.value=Array.isArray(d.rows)?d.rows:[],T.value=new Set;const I=Array.isArray(d.labelChanged)?d.labelChanged:[];K.value=I,$.value=Array.isArray(d.labelAdded)?d.labelAdded:[],Te.value=Array.isArray(d.labelDeleted)?d.labelDeleted:[];const H=I.length,D=$.value.length,V=Te.value.length,q=[H>0?`\u26A0\uFE0F label \uBCC0\uACBD ${H}\uAC74 \uAC10\uC9C0`:"",D>0?`\u{1F195} \uC2E0\uADDC ${D}\uAC74 \uAC10\uC9C0`:"",V>0?`\u{1F5D1}\uFE0F \uC0AD\uC81C ${V}\uAC74 \uAC10\uC9C0`:""].filter(Boolean).join(" \xB7 ");le.value=p.value.length?`${d.tabTitle} \uD0ED\uC5D0\uC11C ${p.value.length}\uAC1C \uD56D\uBAA9\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`+(q?` \xB7 ${q}`:""):`${d.tabTitle} \uD0ED\uC5D0 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`,Xe();return}if(d.type==="search-results"){ge.value=!1,p.value=Array.isArray(d.rows)?d.rows:[],T.value=new Set,le.value=p.value.length?`\uAC80\uC0C9 \uACB0\uACFC ${p.value.length}\uAC1C`:"\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",Xe();return}if(d.type==="sync-done"){De.value=!1;const I=typeof d.updated=="number"?d.updated:0;le.value=I>0?`${I}\uAC1C \uC778\uC2A4\uD134\uC2A4 \uB3D9\uAE30\uD654 \uC644\uB8CC`:"\uB3D9\uAE30\uD654\uD560 \uC778\uC2A4\uD134\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",Xe();return}if(d.type==="done"){_e.value=!1;const I=typeof d.appliedInPlace=="number"?d.appliedInPlace:0,H=typeof d.created=="number"?d.created:0;I>0&&H>0?le.value=`${I}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4 \uAC31\uC2E0 \xB7 ${H}\uAC1C \uBCF5\uC81C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`:I>0&&H===0?le.value=`${I}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0 \uC644\uB8CC (\uBCF5\uC81C \uC5C6\uC74C)`:le.value=`${H}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`,Xe();return}d.type==="error"&&($e.value=!1,Re.value=!1,ge.value=!1,_e.value=!1,De.value=!1,Ee.value=d.message??"\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}}}),(_,d)=>(j(),U("div",Ho,[O("header",{class:"px-4 py-3 border-b border-gray-200 flex items-center justify-between"},[d[6]||(d[6]=O("span",{class:"font-semibold text-gray-900"},"SheetToComponent",-1)),O("button",{class:"text-[12px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:gt,title:"\uC2DC\uD2B8\xB7\uAC80\uC0C9\xB7\uD589 \uC120\uD0DD \uB4F1 \uC791\uC5C5 \uC601\uC5ED\uC744 \uBE44\uC6C1\uB2C8\uB2E4. API \uD0A4\xB7\uCD5C\uADFC URL\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4."}," \uCD08\uAE30\uD654 ")]),O("main",Vo,[O("section",Uo,[d[12]||(d[12]=O("div",{class:"text-[13px] font-bold text-gray-900"},[ct("1) \uC2DC\uD2B8 \uD638\uCD9C "),O("span",{class:"text-red-500"},"*")],-1)),d[13]||(d[13]=O("p",{class:"text-[10px] text-gray-500 leading-relaxed"}," \uC2DC\uD2B8 \uD638\uCD9C \uC2DC \uD0ED \uBAA9\uB85D\uACFC \uD568\uAED8 \uC804\uCCB4 \uD0ED\uC758 label/value \uD589\uC744 \uD55C \uBC88\uC5D0 \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uD0ED \uBC94\uC704\uC5D0\uC11C \uD2B9\uC815 \uD0ED\uB9CC \uACE0\uB974\uBA74 \uD574\uB2F9 \uD0ED\uB9CC \uB2E4\uC2DC \uC870\uD68C\uD569\uB2C8\uB2E4. ",-1)),O("div",Bo,[Mt(O("select",{"onUpdate:modelValue":d[0]||(d[0]=b=>i.value=b),class:"flex-1 min-w-0 text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500",onChange:Kt},[d[7]||(d[7]=O("option",{value:"manual"},"\uC9C1\uC811\uC785\uB825",-1)),(j(!0),U(fe,null,yt(l.value,b=>(j(),U("option",{key:b.url,value:b.url},te(b.title),9,Wo))),128))],544),[[Xn,i.value]]),O("button",{type:"button",class:"shrink-0 px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:$e.value||!t.value.trim()||!s.value.trim(),onClick:u},te(vt.value),9,qo),O("button",{type:"button",class:"px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400",disabled:$e.value||ge.value||_e.value||l.value.length===0,onClick:mn,title:"\uCD5C\uADFC \uC2DC\uD2B8 \uBAA9\uB85D \uBE44\uC6B0\uAE30"}," \uBAA9\uB85D \uBE44\uC6B0\uAE30 ",8,zo)]),i.value==="manual"?Mt((j(),U("input",{key:0,"onUpdate:modelValue":d[1]||(d[1]=b=>t.value=b),type:"text",placeholder:"https://docs.google.com/spreadsheets/d/...",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[Hs,t.value]]):he("",!0),s.value.trim()?(j(),U("label",Go,[Mt(O("input",{"onUpdate:modelValue":d[2]||(d[2]=b=>n.value=b),type:"checkbox",class:"shrink-0"},null,512),[[Io,n.value]]),d[8]||(d[8]=ct(" API \uD0A4 \uBCC0\uACBD ",-1))])):he("",!0),r.value?Mt((j(),U("input",{key:2,"onUpdate:modelValue":d[3]||(d[3]=b=>s.value=b),type:"password",placeholder:"Google API Key (AIza...)",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[Hs,s.value]]):he("",!0),O("div",Jo,[d[10]||(d[10]=O("label",{class:"text-[11px] font-medium text-gray-400"},"\uD0ED \uBC94\uC704",-1)),Mt(O("select",{"onUpdate:modelValue":d[4]||(d[4]=b=>h.value=b),class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",disabled:a.value.length===0,onChange:c},[d[9]||(d[9]=O("option",{value:""},"\uC804\uCCB4 \uD0ED",-1)),(j(!0),U(fe,null,yt(a.value,b=>(j(),U("option",{key:b.sheetId,value:b.title},te(b.title),9,Xo))),128))],40,Yo),[[Xn,h.value]]),d[11]||(d[11]=O("p",{class:"text-[10px] text-gray-500"},"\uD2B9\uC815 \uD0ED\uB9CC \uC120\uD0DD\uD558\uBA74 \uADF8 \uD0ED \uD589\uB9CC \uB2E4\uC2DC \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uC804\uCCB4 \uD0ED\uC73C\uB85C \uB3CC\uB9AC\uBA74 \uC2DC\uD2B8 \uD638\uCD9C \uB54C \uBAA8\uC544 \uB454 \uC804\uCCB4 \uD589 \uBAA9\uB85D\uC744 \uB2E4\uC2DC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.",-1))])]),O("section",Zo,[d[17]||(d[17]=O("div",{class:"text-[13px] font-bold text-gray-900"},"2) \uD0A4\uC6CC\uB4DC \uAC80\uC0C9",-1)),O("div",Qo,[Mt(O("input",{"onUpdate:modelValue":d[5]||(d[5]=b=>f.value=b),type:"text",placeholder:"\uB450 \uAE00\uC790 \uC774\uC0C1 \uC785\uB825",class:"flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",onKeydown:Fo(Qn(x,["prevent"]),["enter"])},null,40,eu),[[Hs,f.value]]),O("button",{class:"px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:ge.value||Re.value||!t.value.trim()||!s.value.trim()||!f.value.trim()&&C.value.length===0&&!h.value||f.value.trim().length<2,onClick:g},te(ge.value?"\uAC80\uC0C9 \uC911...":"\uAC80\uC0C9"),9,tu)]),p.value.length?(j(),U("div",su,[O("div",nu,[O("div",ru," \uACB0\uACFC "+te(p.value.length)+"\uAC1C / \uC120\uD0DD "+te(T.value.size)+"\uAC1C ",1),O("div",lu,[K.value.length>0?(j(),U("button",{key:0,class:"text-[11px] px-2 py-1 rounded border border-orange-400 text-orange-700 bg-orange-50 hover:bg-orange-100",onClick:y}," \uC218\uC815\uAC74 \uC120\uD0DD ")):he("",!0),$.value.length>0?(j(),U("button",{key:1,class:"text-[11px] px-2 py-1 rounded border border-blue-400 text-blue-700 bg-blue-50 hover:bg-blue-100",onClick:A}," \uC2E0\uADDC \uC120\uD0DD ")):he("",!0),O("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:S}," \uC804\uCCB4\uC120\uD0DD "),O("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:w}," \uC120\uD0DD\uD574\uC81C ")])]),O("div",iu,[(j(!0),U(fe,null,yt(p.value,b=>(j(),U("label",{key:be(b),class:et(["flex items-start gap-2 px-3 py-2 border-b border-gray-100 last:border-b-0",b.strikethrough?"bg-gray-50 opacity-60 cursor-default":"hover:bg-gray-50",!b.strikethrough&&W.value.has(`${b.tabTitle}::${b.rowNumber}`)?"bg-orange-50":""])},[O("input",{type:"checkbox",class:"mt-1",checked:T.value.has(be(b)),disabled:b.strikethrough,onChange:I=>!b.strikethrough&&m(b)},null,40,ou),O("div",uu,[O("div",au,[O("span",{class:et(["text-[12px] font-semibold truncate",b.strikethrough?"text-gray-400 line-through":"text-gray-800"])},[f.value.trim()&&!b.strikethrough?(j(!0),U(fe,{key:0},yt(Oe(b.label||b.name||"(no label)",f.value),(I,H)=>(j(),U("span",{key:H,class:et(I.match?"text-blue-500":"")},te(I.text),3))),128)):(j(),U(fe,{key:1},[ct(te(b.label||b.name||"(no label)"),1)],64))],2),O("span",cu,"("+te(b.tabTitle)+" / "+te(b.rowNumber)+"\uD589)",1),!b.strikethrough&&W.value.has(`${b.tabTitle}::${b.rowNumber}`)?(j(),U("span",fu,"label \uBCC0\uACBD")):he("",!0),!b.strikethrough&&ue.value.has(`${b.tabTitle}::${b.rowNumber}`)?(j(),U("span",du,"\uC2E0\uADDC")):he("",!0),b.strikethrough?(j(),U("span",hu,"\uC0AD\uC81C\uB428")):he("",!0)]),O("div",{class:et(["text-[11px] truncate",b.strikethrough?"text-gray-400":"text-gray-500"])},[d[14]||(d[14]=ct("value: ",-1)),f.value.trim()&&!b.strikethrough?(j(!0),U(fe,{key:0},yt(Oe(b.value,f.value),(I,H)=>(j(),U("span",{key:H,class:et(I.match?"text-blue-500":"")},te(I.text),3))),128)):(j(),U(fe,{key:1},[ct(te(b.value),1)],64))],2),b.description&&!b.strikethrough?(j(),U("div",pu,"desc: "+te(b.description),1)):he("",!0)])],2))),128)),(j(!0),U(fe,null,yt(He.value,b=>(j(),U("div",{key:`deleted::${b.tabTitle}::${b.rowNumber}`,class:"flex items-start gap-2 px-3 py-2 border-b border-gray-100 last:border-b-0 bg-gray-50 opacity-60"},[d[16]||(d[16]=O("input",{type:"checkbox",class:"mt-1",disabled:""},null,-1)),O("div",gu,[O("div",bu,[O("span",vu,te(b.label||"(no label)"),1),O("span",mu,"("+te(b.tabTitle)+" / "+te(b.rowNumber)+"\uD589)",1),d[15]||(d[15]=O("span",{class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-gray-400 text-white leading-none"},"\uC0AD\uC81C\uB428",-1))]),O("div",yu,"value: "+te(b.value),1)])]))),128))]),v.value.length>0?(j(),U("div",xu,[(j(!0),U(fe,null,yt(v.value,b=>(j(),U("span",{key:be(b),class:"inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200"},[ct(te(b.label||b.name||"(no label)")+" ",1),O("button",{type:"button",class:"text-gray-400 hover:text-gray-600 leading-none",onClick:Qn(I=>m(b),["prevent"])},"\u2715",8,_u)]))),128))])):he("",!0)])):he("",!0)]),O("section",wu,[d[18]||(d[18]=O("div",{class:"text-[13px] font-bold text-gray-900"},[ct("3) \uC5F0\uACB0 \uB300\uC0C1 "),O("span",{class:"text-red-500"},"*")],-1)),O("div",{class:et(["p-3 rounded-lg border",L.value?"bg-blue-50 border-blue-200":"bg-gray-50 border-gray-200"])},[L.value?(j(),U(fe,{key:0},[O("div",Su,te(L.value.name),1),O("div",Cu,te(L.value.kind)+" / TEXT \uD504\uB85C\uD37C\uD2F0 "+te(L.value.textProperties.length)+"\uAC1C ",1),R.value.length>0?(j(),U("p",Tu," \uC911\uBCF5\uB41C label\uBA85\uC774 \uC788\uC2B5\uB2C8\uB2E4 : "+te(R.value.join(", ")),1)):he("",!0)],64)):(j(),U("div",Au," \uC778\uC2A4\uD134\uC2A4(\uB610\uB294 \uC778\uC2A4\uD134\uC2A4\uB97C \uD3EC\uD568\uD55C \uB808\uC774\uC5B4)\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694. "))],2),d[19]||(d[19]=Yi(\'<div class="text-[12px] text-gray-600 border-1 border-sky-200 bg-sky-50 rounded-lg p-3"><div class="text-[11px] font-medium text-gray-400 mb-1">\uC790\uB3D9 \uC5F0\uACB0 \uADDC\uCE59</div><div class="text-[11px] text-gray-500 leading-5"> \uC120\uD0DD\uD55C \uB808\uC774\uC5B4\uC758 TEXT \uD504\uB85C\uD37C\uD2F0 \uC911 <code class="text-[10px] bg-sky-200/50 px-1 rounded">label</code>, <code class="text-[10px] bg-sky-200/50 px-1 rounded">value</code>, <code class="text-[10px] bg-sky-200/50 px-1 rounded">description</code> \uC774 \uC874\uC7AC\uD558\uBA74 \uAC01\uAC01 \uC2DC\uD2B8\uC758 \uAC12\uC73C\uB85C \uC790\uB3D9 \uC5F0\uACB0\uD569\uB2C8\uB2E4. (2\uAC1C \uC774\uC0C1 \uC788\uC5B4\uB3C4 \uAC01\uAC01 \uC5F0\uACB0) </div></div>\',1))]),le.value?(j(),U("p",Mu,te(le.value),1)):he("",!0),Ee.value?(j(),U("p",Eu,te(Ee.value),1)):he("",!0)]),O("footer",Ou,[E.value?(j(),U("p",Pu," \uC77C\uCE58\uD558\uB294 \uD504\uB85C\uD37C\uD2F0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 ")):he("",!0),O("div",Iu,[!P.value||_e.value?(j(),U("div",$u,[O("button",{class:"w-full py-2.5 rounded-lg font-semibold text-[13px] transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:!z.value||_e.value,onClick:ae},te(_e.value?"\uC0DD\uC131/\uC5F0\uACB0 \uC911...":B.value?`${T.value.size}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0`:`${T.value.size}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0`),9,Ru),!z.value&&!_e.value&&v.value.length>0?(j(),U("div",Nu," \uC778\uC2A4\uD134\uC2A4 \uB610\uB294 \uC778\uC2A4\uD134\uC2A4\uB97C \uD3EC\uD568\uD55C \uB808\uC774\uC5B4\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694 ")):he("",!0)])):he("",!0),P.value||De.value?(j(),U("button",{key:1,class:"flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors border-1 border-gray-900 bg-white text-gray-900 hover:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:bg-white",disabled:De.value,onClick:Z},te(De.value?"\uB3D9\uAE30\uD654 \uC911...":`\u26A1 ${T.value.size}\uAC1C \uB3D9\uAE30\uD654`),9,Fu)):he("",!0)])])]))}});Lo(Du).mount("#app");<\/script>\n    <style rel="stylesheet" crossorigin>/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-400:oklch(75% .183 55.934);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-800:oklch(47% .157 37.304);--color-orange-900:oklch(40.8% .123 38.172);--color-orange-950:oklch(26.6% .079 36.259);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-200:oklch(92.4% .12 95.746);--color-amber-300:oklch(87.9% .169 91.605);--color-amber-800:oklch(47.3% .137 46.201);--color-amber-900:oklch(41.4% .112 45.904);--color-amber-950:oklch(27.9% .077 45.635);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-700:oklch(50% .134 242.749);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--leading-snug:1.375;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.bottom-full{bottom:100%}.left-1{left:calc(var(--spacing) * 1)}.left-1\\/2{left:50%}.z-10{z-index:10}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-screen{height:100vh}.max-h-24{max-height:calc(var(--spacing) * 24)}.max-h-28{max-height:calc(var(--spacing) * 28)}.max-h-32{max-height:calc(var(--spacing) * 32)}.max-h-36{max-height:calc(var(--spacing) * 36)}.max-h-44{max-height:calc(var(--spacing) * 44)}.max-h-50{max-height:calc(var(--spacing) * 50)}.max-h-60{max-height:calc(var(--spacing) * 60)}.w-fit{width:fit-content}.w-full{width:100%}.w-max{width:max-content}.max-w-\\[200px\\]{max-width:200px}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-x-1{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-amber-200{border-color:var(--color-amber-200)}.border-amber-300{border-color:var(--color-amber-300)}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-900{border-color:var(--color-blue-900)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-orange-300{border-color:var(--color-orange-300)}.border-orange-400{border-color:var(--color-orange-400)}.border-orange-500{border-color:var(--color-orange-500)}.border-sky-100{border-color:var(--color-sky-100)}.border-sky-200{border-color:var(--color-sky-200)}.bg-amber-50{background-color:var(--color-amber-50)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-orange-50{background-color:var(--color-orange-50)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-sky-100{background-color:var(--color-sky-100)}.bg-sky-200{background-color:var(--color-sky-200)}.bg-sky-200\\/50{background-color:#b8e6fe80}@supports (color:color-mix(in lab,red,red)){.bg-sky-200\\/50{background-color:color-mix(in oklab,var(--color-sky-200) 50%,transparent)}}.bg-white{background-color:var(--color-white)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pl-1{padding-left:calc(var(--spacing) * 1)}.text-center{text-align:center}.font-sans{font-family:var(--font-sans)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-amber-800{color:var(--color-amber-800)}.text-amber-900{color:var(--color-amber-900)}.text-amber-950{color:var(--color-amber-950)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-orange-700{color:var(--color-orange-700)}.text-orange-800{color:var(--color-orange-800)}.text-orange-900{color:var(--color-orange-900)}.text-orange-950{color:var(--color-orange-950)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-sky-700{color:var(--color-sky-700)}.text-sky-900{color:var(--color-sky-900)}.text-sky-950{color:var(--color-sky-950)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.line-through{text-decoration-line:line-through}.opacity-60{opacity:.6}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-orange-200{--tw-ring-color:var(--color-orange-200)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media(hover:hover){.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-orange-100:hover{background-color:var(--color-orange-100)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:border-gray-300:disabled{border-color:var(--color-gray-300)}.disabled\\:bg-gray-100:disabled{background-color:var(--color-gray-100)}.disabled\\:bg-gray-300:disabled{background-color:var(--color-gray-300)}.disabled\\:bg-white:disabled{background-color:var(--color-white)}.disabled\\:text-gray-400:disabled{color:var(--color-gray-400)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}</style>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n</html>\n', { width: 460, height: 960, title: "SheetToComponent" });
      var STORAGE_KEYS = {
        apiKey: "SheetToComponent.apiKey",
        recentSheets: "SheetToComponent.recentSheets",
        /** 구버전 string[] — 읽기만 하고 마이그레이션 후 저장 시 제거 */
        recentUrlsLegacy: "SheetToComponent.recentUrls"
      };
      function fallbackSheetTitle(url) {
        const id = parseSpreadsheetId(url);
        if (id) return `\uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8 (${id.slice(0, 8)}\u2026)`;
        const u = url.trim();
        return u.length > 36 ? `${u.slice(0, 20)}\u2026${u.slice(-12)}` : u || "\uC2DC\uD2B8";
      }
      function readSettings() {
        return __async(this, null, function* () {
          const apiKey = yield figma.clientStorage.getAsync(STORAGE_KEYS.apiKey);
          const rawSheets = yield figma.clientStorage.getAsync(STORAGE_KEYS.recentSheets);
          const legacyUrls = yield figma.clientStorage.getAsync(STORAGE_KEYS.recentUrlsLegacy);
          let recentSheets = [];
          if (Array.isArray(rawSheets)) {
            for (const x of rawSheets) {
              if (!x || typeof x.url !== "string") continue;
              const url = String(x.url).trim();
              if (!url) continue;
              const t = typeof x.title === "string" ? String(x.title).trim() : "";
              recentSheets.push({ url, title: t || fallbackSheetTitle(url) });
            }
          } else if (Array.isArray(legacyUrls)) {
            recentSheets = legacyUrls.filter((u) => typeof u === "string" && u.trim().length > 0).map((url) => ({ url: url.trim(), title: fallbackSheetTitle(url.trim()) }));
          }
          return {
            apiKey: typeof apiKey === "string" ? apiKey : "",
            recentSheets: recentSheets.slice(0, 10)
          };
        });
      }
      function writeSettings(patch) {
        return __async(this, null, function* () {
          var _a, _b;
          const current = yield readSettings();
          const next = {
            apiKey: (_a = patch.apiKey) != null ? _a : current.apiKey,
            recentSheets: (_b = patch.recentSheets) != null ? _b : current.recentSheets
          };
          yield figma.clientStorage.setAsync(STORAGE_KEYS.apiKey, next.apiKey);
          yield figma.clientStorage.setAsync(STORAGE_KEYS.recentSheets, next.recentSheets);
          yield figma.clientStorage.setAsync(STORAGE_KEYS.recentUrlsLegacy, []);
        });
      }
      function addRecentSheet(list, url, title) {
        const u = url.trim();
        if (!u) return list;
        const t = title.trim() || fallbackSheetTitle(u);
        const deduped = [{ url: u, title: t }, ...list.filter((x) => x.url.trim() !== u)];
        return deduped.slice(0, 10);
      }
      function fetchSpreadsheetTitle(spreadsheetId, apiKey) {
        return __async(this, null, function* () {
          var _a, _b;
          const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}?fields=properties(title)&key=${encodeURIComponent(apiKey)}`;
          const res = yield fetch(url);
          if (!res.ok) return "";
          const data = yield res.json();
          return String((_b = (_a = data == null ? void 0 : data.properties) == null ? void 0 : _a.title) != null ? _b : "").trim();
        });
      }
      function upsertRecentSheet(prev, sheetUrl, apiKey) {
        return __async(this, null, function* () {
          var _a, _b;
          const id = parseSpreadsheetId(sheetUrl);
          if (!id) return prev;
          let title = "";
          try {
            title = yield fetchSpreadsheetTitle(id, apiKey);
          } catch (e) {
            title = "";
          }
          if (!title) {
            title = (_b = (_a = prev.find((x) => x.url.trim() === sheetUrl.trim())) == null ? void 0 : _a.title) != null ? _b : fallbackSheetTitle(sheetUrl);
          }
          return addRecentSheet(prev, sheetUrl, title);
        });
      }
      function postSettingsToUi() {
        return __async(this, null, function* () {
          figma.ui.postMessage(__spreadValues({ type: "settings" }, yield readSettings()));
        });
      }
      var SHEET_SNAPSHOT_PLUGIN_KEY = "SheetToComponent.sheetMatchSnapshotV1";
      var CLONE_SOURCE_PLUGIN_KEY = "SheetToComponent.cloneSourceId";
      function labelKeyForDiff(rawLabel) {
        const t = String(rawLabel != null ? rawLabel : "").trim();
        return t.length === 0 ? "\0empty" : t;
      }
      function labelDisplayFromKey(key) {
        return key === "\0empty" ? "(\uBE48 label)" : key;
      }
      function indexRowsByLabelKey(rows) {
        const m = /* @__PURE__ */ new Map();
        for (const r of rows) {
          m.set(labelKeyForDiff(r.label), r);
        }
        return m;
      }
      function rowToDiffItem(row, previousValue) {
        const key = labelKeyForDiff(row.label);
        return __spreadValues({
          label: labelDisplayFromKey(key),
          tabTitle: row.tabTitle,
          rowNumber: row.rowNumber,
          name: row.name,
          value: row.value
        }, previousValue !== void 0 ? { previousValue } : {});
      }
      function computeSheetLabelDiff(prevRows, currRows) {
        var _a, _b;
        const P = indexRowsByLabelKey(prevRows);
        const C = indexRowsByLabelKey(currRows);
        const added = [];
        const deleted = [];
        const valueChanged = [];
        for (const [key, row] of C) {
          if (!P.has(key)) {
            added.push(rowToDiffItem(row));
          } else {
            const pRow = P.get(key);
            if (String((_a = pRow.value) != null ? _a : "").trim() !== String((_b = row.value) != null ? _b : "").trim()) {
              valueChanged.push(rowToDiffItem(row, pRow.value));
            }
          }
        }
        for (const [key, row] of P) {
          if (!C.has(key)) {
            deleted.push(rowToDiffItem(row));
          }
        }
        return { added, deleted, valueChanged };
      }
      function computeLabelChanges(prevRows, currRows) {
        const prevIndex = /* @__PURE__ */ new Map();
        for (const r of prevRows) {
          prevIndex.set(`${r.tabTitle}::${r.rowNumber}`, r);
        }
        const result = [];
        for (const curr of currRows) {
          const prev = prevIndex.get(`${curr.tabTitle}::${curr.rowNumber}`);
          if (prev && prev.label.trim() !== curr.label.trim()) {
            result.push({
              oldLabel: prev.label.trim(),
              newLabel: curr.label.trim(),
              tabTitle: curr.tabTitle,
              rowNumber: curr.rowNumber,
              value: curr.value
            });
          }
        }
        return result;
      }
      function computeNewLabels(prevRows, currRows) {
        const prevKeys = new Set(prevRows.map((r) => `${r.tabTitle}::${r.rowNumber}`));
        return currRows.filter((r) => !prevKeys.has(`${r.tabTitle}::${r.rowNumber}`)).map((r) => ({ tabTitle: r.tabTitle, rowNumber: r.rowNumber, label: r.label, value: r.value }));
      }
      function detectNewLabelsFromPage(spreadsheetId, currentRows) {
        const pageSnap = findAnySnapshotOnPage(figma.currentPage, spreadsheetId);
        if (!pageSnap) return [];
        return computeNewLabels(pageSnap.snapshot.rows, currentRows);
      }
      function computeDeletedLabels(prevRows, currRows) {
        const currKeys = new Set(currRows.map((r) => `${r.tabTitle}::${r.rowNumber}`));
        return prevRows.filter((r) => !currKeys.has(`${r.tabTitle}::${r.rowNumber}`)).map((r) => ({ tabTitle: r.tabTitle, rowNumber: r.rowNumber, label: r.label, value: r.value }));
      }
      function detectDeletedLabelsFromPage(spreadsheetId, currentRows) {
        const pageSnap = findAnySnapshotOnPage(figma.currentPage, spreadsheetId);
        if (!pageSnap) return [];
        return computeDeletedLabels(pageSnap.snapshot.rows, currentRows);
      }
      function readSheetSnapshotFromNode(root) {
        if (!("getPluginData" in root) || typeof root.getPluginData !== "function") {
          return null;
        }
        const raw = root.getPluginData(SHEET_SNAPSHOT_PLUGIN_KEY);
        if (!raw || !raw.trim()) return null;
        try {
          const data = JSON.parse(raw);
          if (!data || typeof data.spreadsheetId !== "string" || !Array.isArray(data.rows)) return null;
          if (data.v !== 1 && data.v !== 2) return null;
          return {
            spreadsheetId: data.spreadsheetId,
            capturedAt: data.capturedAt,
            rows: data.rows,
            labelToNodeIds: data.v === 2 ? data.labelToNodeIds : {}
          };
        } catch (e) {
          return null;
        }
      }
      function findSnapshotNode(node) {
        const direct = readSheetSnapshotFromNode(node);
        if (direct) return { node, snapshot: direct };
        let parent = node.parent;
        while (parent && parent.type !== "PAGE" && parent.type !== "DOCUMENT") {
          const parentSnap = readSheetSnapshotFromNode(parent);
          if (parentSnap) return { node: parent, snapshot: parentSnap };
          parent = parent.parent;
        }
        if ("getPluginData" in node && typeof node.getPluginData === "function") {
          const sourceId = node.getPluginData(CLONE_SOURCE_PLUGIN_KEY);
          if (sourceId) {
            const sourceNode = figma.getNodeById(sourceId);
            if (sourceNode && !sourceNode.removed && sourceNode.type !== "DOCUMENT" && sourceNode.type !== "PAGE") {
              const sourceSnap = readSheetSnapshotFromNode(sourceNode);
              if (sourceSnap) return { node: sourceNode, snapshot: sourceSnap };
            }
          }
        }
        return null;
      }
      function writeSheetSnapshotOnSelection(root, spreadsheetId, rows, labelToNodeIds = {}) {
        if (!("setPluginData" in root) || typeof root.setPluginData !== "function") {
          return;
        }
        const payload = {
          v: 2,
          spreadsheetId,
          capturedAt: (/* @__PURE__ */ new Date()).toISOString(),
          rows: rows.map((r) => __spreadValues({}, r)),
          labelToNodeIds
        };
        try {
          ;
          root.setPluginData(
            SHEET_SNAPSHOT_PLUGIN_KEY,
            JSON.stringify(payload)
          );
        } catch (e) {
        }
      }
      function postSheetDiffToUi(hasSnapshot, sameSpreadsheet, prevRows, currRows) {
        const labelChanged = hasSnapshot && sameSpreadsheet ? computeLabelChanges(prevRows, currRows) : [];
        const changedOldLabels = new Set(labelChanged.map((it) => it.oldLabel));
        const changedNewLabels = new Set(labelChanged.map((it) => it.newLabel));
        const { added, deleted, valueChanged } = hasSnapshot && sameSpreadsheet ? computeSheetLabelDiff(prevRows, currRows) : { added: [], deleted: [], valueChanged: [] };
        figma.ui.postMessage({
          type: "sheet-diff",
          hasSnapshot,
          sameSpreadsheet,
          // labelChanged로 이미 감지된 항목은 added/deleted에서 제거해 중복 표시 방지
          added: added.filter((it) => !changedNewLabels.has(it.label)),
          deleted: deleted.filter((it) => !changedOldLabels.has(it.label)),
          valueChanged,
          labelChanged
        });
      }
      function normalizeSheetHeaderCell(v) {
        return String(v != null ? v : "").replace(/^\uFEFF/, "").trim().toLowerCase();
      }
      function findSheetColumnIndex(headerRow, ...allowedNames) {
        const allowed = new Set(allowedNames.map((s) => s.trim().toLowerCase()));
        for (let i = 0; i < headerRow.length; i++) {
          const key = normalizeSheetHeaderCell(headerRow[i]);
          if (allowed.has(key)) return i;
        }
        return -1;
      }
      function parseSpreadsheetId(url) {
        var _a;
        const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
        return (_a = match == null ? void 0 : match[1]) != null ? _a : null;
      }
      function fetchSheetTabs(spreadsheetId, apiKey) {
        return __async(this, null, function* () {
          const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}?fields=sheets(properties(sheetId,title,index))&key=${encodeURIComponent(apiKey)}`;
          const res = yield fetch(url);
          if (!res.ok) throw new Error("\uD0ED \uBAA9\uB85D\uC744 \uAC00\uC838\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. API Key/\uAD8C\uD55C/\uB3C4\uBA54\uC778 \uD5C8\uC6A9\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.");
          const data = yield res.json();
          const sheets = Array.isArray(data == null ? void 0 : data.sheets) ? data.sheets : [];
          return sheets.map((s) => s == null ? void 0 : s.properties).filter(Boolean).map((p) => ({ sheetId: Number(p.sheetId), title: String(p.title) }));
        });
      }
      function fetchSheetRowsByTabTitle(spreadsheetId, apiKey, tabTitle) {
        return __async(this, null, function* () {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i;
          const range = `${tabTitle}!A:E`;
          const fields = "sheets.data.rowData.values(userEnteredValue,userEnteredFormat.textFormat.strikethrough)";
          const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}?includeGridData=true&ranges=${encodeURIComponent(range)}&fields=${encodeURIComponent(fields)}&key=${encodeURIComponent(apiKey)}`;
          const res = yield fetch(url);
          if (!res.ok) throw new Error("\uC2DC\uD2B8 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. URL/\uD0ED \uC774\uB984/\uAD8C\uD55C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.");
          const data = yield res.json();
          const rowData = (_e = (_d = (_c = (_b = (_a = data == null ? void 0 : data.sheets) == null ? void 0 : _a[0]) == null ? void 0 : _b.data) == null ? void 0 : _c[0]) == null ? void 0 : _d.rowData) != null ? _e : [];
          if (rowData.length === 0) return [];
          function cellStr(cell) {
            var _a2, _b2, _c2;
            const v = cell == null ? void 0 : cell.userEnteredValue;
            if (!v) return "";
            if ("stringValue" in v) return String((_a2 = v.stringValue) != null ? _a2 : "").normalize("NFC");
            if ("numberValue" in v) return String((_b2 = v.numberValue) != null ? _b2 : "");
            if ("boolValue" in v) return String((_c2 = v.boolValue) != null ? _c2 : "");
            return "";
          }
          const headerCells = (_g = (_f = rowData[0]) == null ? void 0 : _f.values) != null ? _g : [];
          const headerRow = headerCells.map(cellStr);
          const nameIndex = findSheetColumnIndex(headerRow, "name");
          const typeIndex = findSheetColumnIndex(headerRow, "type");
          const labelIndex = findSheetColumnIndex(headerRow, "label");
          const valueIndex = findSheetColumnIndex(headerRow, "value");
          const descIndex = findSheetColumnIndex(headerRow, "description");
          if (nameIndex < 0 || typeIndex < 0 || labelIndex < 0 || valueIndex < 0) {
            throw new Error("\uCCAB \uBC88\uC9F8 \uD589\uC5D0\uC11C name, type, label, value \uD5E4\uB354\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. (\uC5F4 \uC774\uB984\uC740 \uB300\uC18C\uBB38\uC790 \uAD6C\uBD84 \uC5C6\uC74C)");
          }
          const result = [];
          let rowCount = 0;
          for (let i = 1; i < rowData.length; i++) {
            const cells = (_i = (_h = rowData[i]) == null ? void 0 : _h.values) != null ? _i : [];
            const name = cellStr(cells[nameIndex]).trim();
            const type = cellStr(cells[typeIndex]).trim();
            const label = cellStr(cells[labelIndex]).trim();
            const value = cellStr(cells[valueIndex]).trim();
            const description = descIndex >= 0 ? cellStr(cells[descIndex]).trim() : "";
            if (!name && !label) continue;
            const strikethrough = cells.some(
              (cell) => {
                var _a2, _b2;
                return ((_b2 = (_a2 = cell == null ? void 0 : cell.userEnteredFormat) == null ? void 0 : _a2.textFormat) == null ? void 0 : _b2.strikethrough) === true;
              }
            );
            rowCount++;
            result.push({
              tabTitle,
              rowNumber: rowCount + 1,
              // 기존 방식과 동일: 헤더=1행, 첫 데이터=2행
              name,
              type,
              label,
              value,
              description,
              strikethrough
            });
          }
          return result;
        });
      }
      function fetchAllTabRows(spreadsheetId, apiKey, tabs) {
        return __async(this, null, function* () {
          const out = [];
          for (const t of tabs) {
            try {
              const tabRows = yield fetchSheetRowsByTabTitle(spreadsheetId, apiKey, t.title);
              out.push(...tabRows);
            } catch (e) {
            }
          }
          return out;
        });
      }
      function getDuplicatedSheetLabels(rows) {
        var _a, _b;
        const counts = /* @__PURE__ */ new Map();
        for (const r of rows) {
          const raw = String((_a = r.label) != null ? _a : "").trim();
          const key = raw.length === 0 ? "\0empty" : raw;
          counts.set(key, ((_b = counts.get(key)) != null ? _b : 0) + 1);
        }
        const out = [];
        for (const [key, c] of counts) {
          if (c < 2) continue;
          out.push(key === "\0empty" ? "(\uBE48 label)" : key);
        }
        return out;
      }
      function hasDuplicateSheetLabels(rows) {
        return getDuplicatedSheetLabels(rows).length > 0;
      }
      function rowMatchesKeyword(row, keyword) {
        const keywords = keyword.split(",").map((k) => k.trim().toLowerCase().normalize("NFC")).filter((k) => k.length >= 2);
        if (keywords.length === 0) return false;
        const hay = [row.label, row.value].join(" ").toLowerCase().normalize("NFC");
        return keywords.some((k) => hay.includes(k));
      }
      function normalizePropKeyBase(s) {
        return String(s != null ? s : "").split("#")[0].trim().toLowerCase();
      }
      function resolveKeyByBaseName(componentProperties, baseName) {
        const want = baseName.toLowerCase();
        return Object.keys(componentProperties).find((k) => normalizePropKeyBase(k) === want);
      }
      function propBindingIsText(props, key) {
        const entry = props[key];
        return (entry == null ? void 0 : entry.type) === "TEXT";
      }
      function safeComponentProperties(inst) {
        var _a;
        try {
          return (_a = inst.componentProperties) != null ? _a : null;
        } catch (e) {
          return null;
        }
      }
      function hasMappableTextSheetPropsInTarget(t) {
        const props = t.type === "INSTANCE" ? safeComponentProperties(t) : t.componentPropertyDefinitions;
        if (!props) return false;
        const cp = props;
        for (const base of ["label", "value", "description"]) {
          const key = resolveKeyByBaseName(cp, base);
          if (key && propBindingIsText(props, key)) return true;
        }
        return false;
      }
      function collectInstanceOrComponentDescendants(root) {
        const dfsOut = [];
        function visitDfs(n) {
          if (n.removed) return;
          if (n.type === "INSTANCE" || n.type === "COMPONENT") {
            dfsOut.push(n);
          }
          if ("children" in n) {
            for (const child of n.children) {
              visitDfs(child);
            }
          }
        }
        visitDfs(root);
        const rootWithFind = root;
        if (typeof rootWithFind.findAll !== "function") return dfsOut;
        try {
          const found = rootWithFind.findAll((n) => n.type === "INSTANCE" || n.type === "COMPONENT");
          const seen = new Set(dfsOut.map((x) => x.id));
          const merged = [...dfsOut];
          for (const n of found) {
            if (n.removed) continue;
            if (n.type !== "INSTANCE" && n.type !== "COMPONENT") continue;
            if (seen.has(n.id)) continue;
            seen.add(n.id);
            merged.push(n);
          }
          return merged;
        } catch (e) {
          return dfsOut;
        }
      }
      function selectionHasAnyMatchingSheetProps(selection) {
        for (const t of collectInstanceOrComponentDescendants(selection)) {
          if (hasMappableTextSheetPropsInTarget(t)) return true;
        }
        return false;
      }
      function collectApplicableInstancesInOrder(root) {
        return collectInstanceOrComponentDescendants(root).filter(
          (t) => t.type === "INSTANCE" && hasMappableTextSheetPropsInTarget(t)
        );
      }
      function extractTextPropNames(targets) {
        const out = [];
        const seenBase = /* @__PURE__ */ new Set();
        for (const t of targets) {
          const props = t.type === "INSTANCE" ? safeComponentProperties(t) : t.componentPropertyDefinitions;
          if (!props) continue;
          for (const propName of Object.keys(props)) {
            const def = props[propName];
            if (!def || def.type !== "TEXT") continue;
            const base = normalizePropKeyBase(propName);
            if (seenBase.has(base)) continue;
            seenBase.add(base);
            out.push({ name: propName.split("#")[0] });
          }
        }
        return out;
      }
      function getSelectionInfo() {
        const selection = figma.currentPage.selection[0];
        if (!selection) return null;
        const targets = collectInstanceOrComponentDescendants(selection);
        const hasMappableSheetProps = targets.some((t) => hasMappableTextSheetPropsInTarget(t));
        const kind = selection.type === "INSTANCE" ? "INSTANCE" : selection.type === "COMPONENT" ? "COMPONENT" : "children" in selection ? "CONTAINER" : "UNSUPPORTED";
        return {
          nodeId: selection.id,
          name: selection.name,
          kind,
          textProperties: extractTextPropNames(targets),
          hasMappableSheetProps
        };
      }
      function applyRowToInstance(inst, row) {
        const props = safeComponentProperties(inst);
        if (!props) return;
        const updates = {};
        const labelKey = resolveKeyByBaseName(props, "label");
        const valueKey = resolveKeyByBaseName(props, "value");
        const descKey = resolveKeyByBaseName(props, "description");
        if (labelKey && propBindingIsText(props, labelKey)) {
          updates[labelKey] = row.label;
        }
        if (valueKey && propBindingIsText(props, valueKey)) {
          updates[valueKey] = row.value;
        }
        if (descKey && propBindingIsText(props, descKey)) {
          updates[descKey] = row.description;
        }
        if (Object.keys(updates).length > 0) {
          inst.setProperties(updates);
        }
      }
      function applyRowToSelectionClone(clone, row) {
        for (const t of collectInstanceOrComponentDescendants(clone)) {
          if (t.type === "INSTANCE") applyRowToInstance(t, row);
        }
      }
      function syncLabelOnPage(page, oldLabel, newLabel) {
        const target = String(oldLabel != null ? oldLabel : "").trim();
        const replacement = String(newLabel != null ? newLabel : "").trim();
        if (!target || !replacement || target === replacement) return 0;
        let updated = 0;
        const processed = /* @__PURE__ */ new Set();
        function visit(node) {
          var _a;
          if (node.removed) return;
          if (node.type === "INSTANCE") {
            const inst = node;
            const props = safeComponentProperties(inst);
            if (props && !processed.has(inst.id)) {
              const labelKey = resolveKeyByBaseName(props, "label");
              if (labelKey && propBindingIsText(props, labelKey)) {
                const current = String((_a = props[labelKey].value) != null ? _a : "").trim();
                if (current === target) {
                  processed.add(inst.id);
                  inst.setProperties({ [labelKey]: replacement });
                  updated++;
                  return;
                }
              }
            }
          }
          if ("children" in node) {
            for (const child of node.children) visit(child);
          }
        }
        for (const child of page.children) visit(child);
        return updated;
      }
      function detectLabelChangesFromPage(spreadsheetId, currentRows) {
        const pageSnap = findAnySnapshotOnPage(figma.currentPage, spreadsheetId);
        if (!pageSnap) return [];
        return computeLabelChanges(pageSnap.snapshot.rows, currentRows);
      }
      function findAnySnapshotOnPage(page, spreadsheetId) {
        function visit(node) {
          if (node.removed) return null;
          const snap = readSheetSnapshotFromNode(node);
          if (snap) {
            if (!spreadsheetId || snap.spreadsheetId === spreadsheetId) {
              return { node, snapshot: snap };
            }
          }
          if ("children" in node) {
            for (const child of node.children) {
              const result = visit(child);
              if (result) return result;
            }
          }
          return null;
        }
        for (const child of page.children) {
          const result = visit(child);
          if (result) return result;
        }
        return null;
      }
      function sendSelection() {
        const info = getSelectionInfo();
        const out = { type: "selection", selection: info };
        figma.ui.postMessage(out);
      }
      function getCloneContext(selection) {
        let anchor = selection;
        let p = selection.parent;
        while (p) {
          if (p.type === "PAGE" || p.type === "DOCUMENT") {
            return { cloneParent: figma.currentPage, anchor };
          }
          const isInstance = p.type === "INSTANCE";
          const insideInstance = (() => {
            let a = p.parent;
            while (a && a.type !== "PAGE" && a.type !== "DOCUMENT") {
              if (a.type === "INSTANCE") return true;
              a = a.parent;
            }
            return false;
          })();
          if (!isInstance && !insideInstance && "children" in p) {
            return { cloneParent: p, anchor };
          }
          anchor = p;
          p = p.parent;
        }
        return { cloneParent: figma.currentPage, anchor };
      }
      figma.on("selectionchange", sendSelection);
      setTimeout(sendSelection, 100);
      figma.ui.onmessage = (msg) => __async(null, null, function* () {
        var _a, _b, _c, _d, _e, _f;
        try {
          if (msg.type === "close") {
            figma.closePlugin();
            return;
          }
          if (msg.type === "get-selection") {
            sendSelection();
            return;
          }
          if (msg.type === "get-settings") {
            const settings = yield readSettings();
            figma.ui.postMessage(__spreadValues({ type: "settings" }, settings));
            return;
          }
          if (msg.type === "clear-recent-urls") {
            yield writeSettings({ recentSheets: [] });
            yield postSettingsToUi();
            return;
          }
          if (msg.type === "list-tabs") {
            const spreadsheetId = parseSpreadsheetId(msg.url);
            if (!spreadsheetId) throw new Error("\uC720\uD6A8\uD55C \uAD6C\uAE00 \uC2DC\uD2B8 URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
            if (!msg.apiKey.trim()) throw new Error("Google API Key\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
            const tabs = yield fetchSheetTabs(spreadsheetId, msg.apiKey);
            const rows = yield fetchAllTabRows(spreadsheetId, msg.apiKey, tabs);
            const prev = yield readSettings();
            const recentSheets = yield upsertRecentSheet(prev.recentSheets, msg.url, msg.apiKey);
            yield writeSettings({
              apiKey: msg.apiKey,
              recentSheets
            });
            const labelChanged = detectLabelChangesFromPage(spreadsheetId, rows);
            const labelAdded = detectNewLabelsFromPage(spreadsheetId, rows);
            const labelDeleted = detectDeletedLabelsFromPage(spreadsheetId, rows);
            figma.ui.postMessage({ type: "tabs", tabs, rows, labelChanged, labelAdded, labelDeleted });
            yield postSettingsToUi();
            return;
          }
          if (msg.type === "load-tab-rows") {
            const spreadsheetId = parseSpreadsheetId(msg.url);
            if (!spreadsheetId) throw new Error("\uC720\uD6A8\uD55C \uAD6C\uAE00 \uC2DC\uD2B8 URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
            if (!msg.apiKey.trim()) throw new Error("Google API Key\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
            if (!msg.tabTitle.trim()) throw new Error("\uD0ED\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");
            const prev = yield readSettings();
            const recentSheets = yield upsertRecentSheet(prev.recentSheets, msg.url, msg.apiKey);
            yield writeSettings({
              apiKey: msg.apiKey,
              recentSheets
            });
            const rows = yield fetchSheetRowsByTabTitle(spreadsheetId, msg.apiKey, msg.tabTitle.trim());
            const labelChanged = detectLabelChangesFromPage(spreadsheetId, rows);
            const labelAdded = detectNewLabelsFromPage(spreadsheetId, rows);
            const labelDeleted = detectDeletedLabelsFromPage(spreadsheetId, rows);
            figma.ui.postMessage({ type: "tab-rows", tabTitle: msg.tabTitle.trim(), rows, labelChanged, labelAdded, labelDeleted });
            yield postSettingsToUi();
            return;
          }
          if (msg.type === "search") {
            const spreadsheetId = parseSpreadsheetId(msg.url);
            if (!spreadsheetId) throw new Error("\uC720\uD6A8\uD55C \uAD6C\uAE00 \uC2DC\uD2B8 URL\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.");
            if (!msg.apiKey.trim()) throw new Error("Google API Key\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
            const keyword = msg.keyword.trim();
            if (!keyword) throw new Error("\uAC80\uC0C9 \uD0A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.");
            const prev = yield readSettings();
            const recentSheets = yield upsertRecentSheet(prev.recentSheets, msg.url, msg.apiKey);
            yield writeSettings({
              apiKey: msg.apiKey,
              recentSheets
            });
            let tabs = [];
            if (msg.tabTitle && msg.tabTitle.trim()) {
              tabs = [{ sheetId: -1, title: msg.tabTitle.trim() }];
            } else {
              tabs = yield fetchSheetTabs(spreadsheetId, msg.apiKey);
            }
            const rows = [];
            for (const t of tabs) {
              const tabRows = yield fetchSheetRowsByTabTitle(spreadsheetId, msg.apiKey, t.title);
              for (const r of tabRows) {
                if (rowMatchesKeyword(r, keyword)) rows.push(r);
              }
            }
            figma.ui.postMessage({ type: "search-results", keyword, rows });
            yield postSettingsToUi();
            return;
          }
          if (msg.type === "sheet-diff-request") {
            const sel = figma.currentPage.selection[0];
            const sheetId = parseSpreadsheetId(msg.url);
            if (!sel || !sheetId || !Array.isArray(msg.currentRows)) {
              postSheetDiffToUi(false, false, [], []);
              return;
            }
            const found = findSnapshotNode(sel);
            if (!found) {
              postSheetDiffToUi(false, false, [], msg.currentRows);
              return;
            }
            const same = found.snapshot.spreadsheetId === sheetId;
            postSheetDiffToUi(true, same, found.snapshot.rows, msg.currentRows);
            return;
          }
          if (msg.type === "connect-and-generate") {
            const selection = figma.currentPage.selection[0];
            if (!selection) throw new Error("\uC778\uC2A4\uD134\uC2A4(\uB610\uB294 \uB808\uC774\uC5B4)\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");
            if (!Array.isArray(msg.keywordRows) || msg.keywordRows.length === 0) {
              throw new Error("\uC5F0\uACB0\uD560 \uD0A4\uC6CC\uB4DC\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.");
            }
            if (!Array.isArray(msg.snapshotRows)) {
              throw new Error("\uC2DC\uD2B8 \uBAA9\uB85D \uC2A4\uB0C5\uC0F7\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC2DC\uD2B8\uB97C \uB2E4\uC2DC \uBD88\uB7EC\uC628 \uB4A4 \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.");
            }
            if (!selectionHasAnyMatchingSheetProps(selection)) {
              throw new Error("\uC77C\uCE58\uD558\uB294 \uD504\uB85C\uD37C\uD2F0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4");
            }
            const spreadsheetId = parseSpreadsheetId(msg.url);
            const prev = yield readSettings();
            const recentSheets = yield upsertRecentSheet(prev.recentSheets, msg.url, msg.apiKey);
            yield writeSettings({
              apiKey: msg.apiKey,
              recentSheets
            });
            if (hasDuplicateSheetLabels(msg.keywordRows)) {
              const targets = collectApplicableInstancesInOrder(selection);
              if (msg.keywordRows.length > targets.length) {
                throw new Error(
                  `\uC911\uBCF5 label \uC801\uC6A9 \uC2DC \uC0C8 \uBCF5\uC81C \uC5C6\uC774 \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0\uB9CC \uAC12\uC744 \uB123\uC2B5\uB2C8\uB2E4. \uB9E4\uD551 \uAC00\uB2A5\uD55C \uC778\uC2A4\uD134\uC2A4\uB294 ${targets.length}\uAC1C\uC778\uB370 \uC120\uD0DD\uD55C \uD589\uC740 ${msg.keywordRows.length}\uAC1C\uC785\uB2C8\uB2E4.`
                );
              }
              const inPlaceLabelToNodeIds = {};
              for (let i = 0; i < msg.keywordRows.length; i += 1) {
                applyRowToInstance(targets[i], msg.keywordRows[i]);
                const key = labelKeyForDiff(msg.keywordRows[i].label);
                inPlaceLabelToNodeIds[key] = [...(_a = inPlaceLabelToNodeIds[key]) != null ? _a : [], targets[i].id];
              }
              const applied = targets.slice(0, msg.keywordRows.length);
              if (spreadsheetId) {
                writeSheetSnapshotOnSelection(selection, spreadsheetId, msg.snapshotRows, inPlaceLabelToNodeIds);
              }
              figma.currentPage.selection = applied;
              figma.viewport.scrollAndZoomIntoView(applied);
              figma.notify(`\u2705 ${applied.length}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0 (\uC911\uBCF5 label \u2014 \uBCF5\uC81C \uC5C6\uC74C)`);
              figma.ui.postMessage({
                type: "done",
                created: 0,
                appliedInPlace: applied.length
              });
              yield postSettingsToUi();
              return;
            }
            const generated = [];
            const cloneLabelToNodeIds = {};
            const { cloneParent, anchor } = getCloneContext(selection);
            const selectionIndex = cloneParent.children.findIndex((c) => c.id === anchor.id);
            const parentLayoutMode = "layoutMode" in cloneParent ? cloneParent.layoutMode : "NONE";
            const isOnPage = cloneParent.type === "PAGE";
            const manualLayout = isOnPage ? "below" : msg.generateLayout === "right" ? "right" : "below";
            const anchorNode = anchor;
            let currentX = anchorNode.x + anchorNode.width;
            let currentY = anchorNode.y + anchorNode.height;
            for (let i = 0; i < msg.keywordRows.length; i++) {
              const row = msg.keywordRows[i];
              const clone = selection.clone();
              if (selectionIndex >= 0) {
                cloneParent.insertChild(selectionIndex + 1 + i, clone);
              } else {
                cloneParent.appendChild(clone);
              }
              if (parentLayoutMode === "NONE") {
                if (manualLayout === "right") {
                  clone.x = currentX;
                  clone.y = anchorNode.y;
                  currentX += clone.width;
                } else {
                  clone.x = anchorNode.x;
                  clone.y = currentY;
                  currentY += clone.height;
                }
              }
              applyRowToSelectionClone(clone, row);
              generated.push(clone);
              const key = labelKeyForDiff(row.label);
              cloneLabelToNodeIds[key] = [...(_b = cloneLabelToNodeIds[key]) != null ? _b : [], clone.id];
              if ("setPluginData" in clone) clone.setPluginData(CLONE_SOURCE_PLUGIN_KEY, selection.id);
            }
            if (spreadsheetId) {
              writeSheetSnapshotOnSelection(selection, spreadsheetId, msg.snapshotRows, cloneLabelToNodeIds);
            }
            figma.currentPage.selection = generated;
            figma.viewport.scrollAndZoomIntoView(generated);
            const created = msg.keywordRows.length;
            figma.notify(`\u2705 ${created}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC!`);
            figma.ui.postMessage({ type: "done", created, appliedInPlace: 0 });
            yield postSettingsToUi();
            return;
          }
          if (msg.type === "sync-value-changes") {
            const hasValueChanges = Array.isArray(msg.valueChangedItems) && msg.valueChangedItems.length > 0;
            const hasLabelChanges = Array.isArray(msg.labelChangedItems) && msg.labelChangedItems.length > 0;
            if (!hasValueChanges && !hasLabelChanges) {
              throw new Error("\uB3D9\uAE30\uD654\uD560 \uBCC0\uACBD \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.");
            }
            let updated = 0;
            for (const labelItem of (_c = msg.labelChangedItems) != null ? _c : []) {
              const cnt = syncLabelOnPage(figma.currentPage, labelItem.oldLabel, labelItem.newLabel);
              updated += cnt;
              if (cnt === 0) {
                let dbgVisit2 = function(node) {
                  var _a2;
                  if (node.removed) return;
                  if (node.type === "INSTANCE") {
                    const p = safeComponentProperties(node);
                    if (p) {
                      const lk = resolveKeyByBaseName(p, "label");
                      if (lk) samples.push(String((_a2 = p[lk].value) != null ? _a2 : ""));
                    }
                  }
                  if ("children" in node && samples.length < 10) {
                    for (const c of node.children) dbgVisit2(c);
                  }
                };
                var dbgVisit = dbgVisit2;
                const samples = [];
                for (const c of figma.currentPage.children) {
                  if (samples.length < 10) dbgVisit2(c);
                }
                figma.notify(
                  `[\uB514\uBC84\uADF8] \uCC3E\uB294 label: "${labelItem.oldLabel}" / \uD398\uC774\uC9C0 label \uC0D8\uD50C(${samples.length}): ${samples.slice(0, 5).join(" | ") || "\uC5C6\uC74C"}`,
                  { timeout: 1e4 }
                );
              }
            }
            if (Array.isArray(msg.valueChangedItems) && msg.valueChangedItems.length > 0) {
              const syncSpreadsheetIdForValue = msg.url ? (_d = parseSpreadsheetId(msg.url)) != null ? _d : void 0 : void 0;
              const found = findAnySnapshotOnPage(figma.currentPage, syncSpreadsheetIdForValue);
              if (found) {
                const snapByKey = /* @__PURE__ */ new Map();
                for (const r of found.snapshot.rows) {
                  snapByKey.set(`${r.tabTitle}::${r.rowNumber}`, r);
                }
                for (const item of msg.valueChangedItems) {
                  const snapRow = snapByKey.get(`${item.tabTitle}::${item.rowNumber}`);
                  const labelChanged = snapRow && snapRow.label.trim() !== item.label.trim();
                  if (labelChanged) {
                    updated += syncLabelOnPage(figma.currentPage, snapRow.label.trim(), item.label.trim());
                  }
                }
              }
            }
            {
              const syncSpreadsheetId = msg.url ? (_e = parseSpreadsheetId(msg.url)) != null ? _e : void 0 : void 0;
              const found = findAnySnapshotOnPage(figma.currentPage, syncSpreadsheetId);
              if (found) {
                let updatedRows = found.snapshot.rows.map((r) => __spreadValues({}, r));
                let updatedLabelToNodeIds = __spreadValues({}, found.snapshot.labelToNodeIds);
                if (Array.isArray(msg.valueChangedItems) && msg.valueChangedItems.length > 0) {
                  const snapByKey = /* @__PURE__ */ new Map();
                  updatedRows.forEach((r, i) => snapByKey.set(`${r.tabTitle}::${r.rowNumber}`, i));
                  for (const item of msg.valueChangedItems) {
                    const idx = snapByKey.get(`${item.tabTitle}::${item.rowNumber}`);
                    if (idx !== void 0 && updatedRows[idx].label.trim() !== item.label.trim()) {
                      const oldKey = labelKeyForDiff(updatedRows[idx].label);
                      const newKey = labelKeyForDiff(item.label);
                      updatedRows[idx] = __spreadProps(__spreadValues({}, updatedRows[idx]), { label: item.label });
                      if (oldKey !== newKey && updatedLabelToNodeIds[oldKey] !== void 0) {
                        updatedLabelToNodeIds[newKey] = updatedLabelToNodeIds[oldKey];
                        delete updatedLabelToNodeIds[oldKey];
                      }
                    }
                  }
                }
                for (const item of (_f = msg.labelChangedItems) != null ? _f : []) {
                  const idx = updatedRows.findIndex((r) => r.tabTitle === item.tabTitle && r.rowNumber === item.rowNumber);
                  if (idx >= 0) updatedRows[idx] = __spreadProps(__spreadValues({}, updatedRows[idx]), { label: item.newLabel });
                  const oldKey = labelKeyForDiff(item.oldLabel);
                  const newKey = labelKeyForDiff(item.newLabel);
                  if (updatedLabelToNodeIds[oldKey] !== void 0) {
                    updatedLabelToNodeIds[newKey] = updatedLabelToNodeIds[oldKey];
                    delete updatedLabelToNodeIds[oldKey];
                  }
                }
                writeSheetSnapshotOnSelection(found.node, found.snapshot.spreadsheetId, updatedRows, updatedLabelToNodeIds);
              }
            }
            figma.notify(updated > 0 ? `\u2705 ${updated}\uAC1C \uC778\uC2A4\uD134\uC2A4 \uB3D9\uAE30\uD654 \uC644\uB8CC` : "\uB3D9\uAE30\uD654\uD560 \uC778\uC2A4\uD134\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
            figma.ui.postMessage({ type: "sync-done", updated });
            return;
          }
        } catch (error) {
          const message = error instanceof Error ? error.message : "\uC54C \uC218 \uC5C6\uB294 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.";
          figma.notify(message, { error: true });
          figma.ui.postMessage({ type: "error", message });
        }
      });
    }
  });
  require_code();
})();
