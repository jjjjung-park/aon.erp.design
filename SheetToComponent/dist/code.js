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
      figma.showUI('<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>SheetToComponent</title>\n    <script type="module" crossorigin>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();/**\n* @vue/shared v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function Ys(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const X={},St=[],Ke=()=>{},Qn=()=>!1,vs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),bs=e=>e.startsWith("onUpdate:"),ae=Object.assign,Xs=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},il=Object.prototype.hasOwnProperty,q=(e,t)=>il.call(e,t),F=Array.isArray,Ct=e=>Zt(e)==="[object Map]",Pt=e=>Zt(e)==="[object Set]",bn=e=>Zt(e)==="[object Date]",D=e=>typeof e=="function",ie=e=>typeof e=="string",je=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",er=e=>(Y(e)||D(e))&&D(e.then)&&D(e.catch),tr=Object.prototype.toString,Zt=e=>tr.call(e),ol=e=>Zt(e).slice(8,-1),sr=e=>Zt(e)==="[object Object]",Zs=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=Ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ms=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},ul=/-\\w/g,Ee=ms(e=>e.replace(ul,t=>t.slice(1).toUpperCase())),cl=/\\B([A-Z])/g,nt=ms(e=>e.replace(cl,"-$1").toLowerCase()),nr=ms(e=>e.charAt(0).toUpperCase()+e.slice(1)),Os=ms(e=>e?`on${nr(e)}`:""),De=(e,t)=>!Object.is(e,t),is=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},rr=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},ys=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let mn;const _s=()=>mn||(mn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qs(e){if(F(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],r=ie(n)?pl(n):Qs(n);if(r)for(const l in r)t[l]=r[l]}return t}else if(ie(e)||Y(e))return e}const al=/;(?![^(]*\\))/g,fl=/:([^]+)/,dl=/\\/\\*[^]*?\\*\\//g;function pl(e){const t={};return e.replace(dl,"").split(al).forEach(s=>{if(s){const n=s.split(fl);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ft(e){let t="";if(ie(e))t=e;else if(F(e))for(let s=0;s<e.length;s++){const n=ft(e[s]);n&&(t+=n+" ")}else if(Y(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gl=Ys(hl);function lr(e){return!!e||e===""}function vl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=It(e[n],t[n]);return s}function It(e,t){if(e===t)return!0;let s=bn(e),n=bn(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=je(e),n=je(t),s||n)return e===t;if(s=F(e),n=F(t),s||n)return s&&n?vl(e,t):!1;if(s=Y(e),n=Y(t),s||n){if(!s||!n)return!1;const r=Object.keys(e).length,l=Object.keys(t).length;if(r!==l)return!1;for(const i in e){const o=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(o&&!c||!o&&c||!It(e[i],t[i]))return!1}}return String(e)===String(t)}function en(e,t){return e.findIndex(s=>It(s,t))}const ir=e=>!!(e&&e.__v_isRef===!0),re=e=>ie(e)?e:e==null?"":F(e)||Y(e)&&(e.toString===tr||!D(e.toString))?ir(e)?re(e.value):JSON.stringify(e,or,2):String(e),or=(e,t)=>ir(t)?or(e,t.value):Ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,r],l)=>(s[Ps(n,l)+" =>"]=r,s),{})}:Pt(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Ps(s))}:je(t)?Ps(t):Y(t)&&!F(t)&&!sr(t)?String(t):t,Ps=(e,t="")=>{var s;return je(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**\n* @vue/reactivity v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let de;class bl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=de,!t&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=de;try{return de=this,t()}finally{de=s}}}on(){++this._on===1&&(this.prevScope=de,de=this)}off(){if(this._on>0&&--this._on===0){if(de===this)de=this.prevScope;else{let t=de;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ml(){return de}let te;const Is=new WeakSet;class ur{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,de&&de.active&&de.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Is.has(this)&&(Is.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ar(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yn(this),fr(this);const t=te,s=Oe;te=this,Oe=!0;try{return this.fn()}finally{dr(this),te=t,Oe=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)nn(t);this.deps=this.depsTail=void 0,yn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Is.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){js(this)&&this.run()}get dirty(){return js(this)}}let cr=0,jt,Ht;function ar(e,t=!1){if(e.flags|=8,t){e.next=Ht,Ht=e;return}e.next=jt,jt=e}function tn(){cr++}function sn(){if(--cr>0)return;if(Ht){let t=Ht;for(Ht=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;jt;){let t=jt;for(jt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function fr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function dr(e){let t,s=e.depsTail,n=s;for(;n;){const r=n.prevDep;n.version===-1?(n===s&&(s=r),nn(n),yl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=s}function js(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function pr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qt)||(e.globalVersion=qt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!js(e))))return;e.flags|=2;const t=e.dep,s=te,n=Oe;te=e,Oe=!0;try{fr(e);const r=e.fn(e._value);(t.version===0||De(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{te=s,Oe=n,dr(e),e.flags&=-3}}function nn(e,t=!1){const{dep:s,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let l=s.computed.deps;l;l=l.nextDep)nn(l,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function yl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Oe=!0;const hr=[];function Je(){hr.push(Oe),Oe=!1}function Ye(){const e=hr.pop();Oe=e===void 0?!0:e}function yn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=te;te=void 0;try{t()}finally{te=s}}}let qt=0;class _l{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!te||!Oe||te===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==te)s=this.activeLink=new _l(te,this),te.deps?(s.prevDep=te.depsTail,te.depsTail.nextDep=s,te.depsTail=s):te.deps=te.depsTail=s,gr(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=te.depsTail,s.nextDep=void 0,te.depsTail.nextDep=s,te.depsTail=s,te.deps===s&&(te.deps=n)}return s}trigger(t){this.version++,qt++,this.notify(t)}notify(t){tn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{sn()}}}function gr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)gr(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Hs=new WeakMap,dt=Symbol(""),Vs=Symbol(""),Gt=Symbol("");function pe(e,t,s){if(Oe&&te){let n=Hs.get(e);n||Hs.set(e,n=new Map);let r=n.get(s);r||(n.set(s,r=new rn),r.map=n,r.key=s),r.track()}}function qe(e,t,s,n,r,l){const i=Hs.get(e);if(!i){qt++;return}const o=c=>{c&&c.trigger()};if(tn(),t==="clear")i.forEach(o);else{const c=F(e),p=c&&Zs(s);if(c&&s==="length"){const d=Number(n);i.forEach((h,C)=>{(C==="length"||C===Gt||!je(C)&&C>=d)&&o(h)})}else switch((s!==void 0||i.has(void 0))&&o(i.get(s)),p&&o(i.get(Gt)),t){case"add":c?p&&o(i.get("length")):(o(i.get(dt)),Ct(e)&&o(i.get(Vs)));break;case"delete":c||(o(i.get(dt)),Ct(e)&&o(i.get(Vs)));break;case"set":Ct(e)&&o(i.get(dt));break}}sn()}function mt(e){const t=W(e);return t===e?t:(pe(t,"iterate",Gt),Ae(e)?t:t.map(Pe))}function xs(e){return pe(e=W(e),"iterate",Gt),e}function Fe(e,t){return Xe(e)?Mt(pt(e)?Pe(t):t):Pe(t)}const xl={__proto__:null,[Symbol.iterator](){return Rs(this,Symbol.iterator,e=>Fe(this,e))},concat(...e){return mt(this).concat(...e.map(t=>F(t)?mt(t):t))},entries(){return Rs(this,"entries",e=>(e[1]=Fe(this,e[1]),e))},every(e,t){return ke(this,"every",e,t,void 0,arguments)},filter(e,t){return ke(this,"filter",e,t,s=>s.map(n=>Fe(this,n)),arguments)},find(e,t){return ke(this,"find",e,t,s=>Fe(this,s),arguments)},findIndex(e,t){return ke(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ke(this,"findLast",e,t,s=>Fe(this,s),arguments)},findLastIndex(e,t){return ke(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ke(this,"forEach",e,t,void 0,arguments)},includes(...e){return $s(this,"includes",e)},indexOf(...e){return $s(this,"indexOf",e)},join(e){return mt(this).join(e)},lastIndexOf(...e){return $s(this,"lastIndexOf",e)},map(e,t){return ke(this,"map",e,t,void 0,arguments)},pop(){return Ft(this,"pop")},push(...e){return Ft(this,"push",e)},reduce(e,...t){return _n(this,"reduce",e,t)},reduceRight(e,...t){return _n(this,"reduceRight",e,t)},shift(){return Ft(this,"shift")},some(e,t){return ke(this,"some",e,t,void 0,arguments)},splice(...e){return Ft(this,"splice",e)},toReversed(){return mt(this).toReversed()},toSorted(e){return mt(this).toSorted(e)},toSpliced(...e){return mt(this).toSpliced(...e)},unshift(...e){return Ft(this,"unshift",e)},values(){return Rs(this,"values",e=>Fe(this,e))}};function Rs(e,t,s){const n=xs(e),r=n[t]();return n!==e&&!Ae(e)&&(r._next=r.next,r.next=()=>{const l=r._next();return l.done||(l.value=s(l.value)),l}),r}const wl=Array.prototype;function ke(e,t,s,n,r,l){const i=xs(e),o=i!==e&&!Ae(e),c=i[t];if(c!==wl[t]){const h=c.apply(e,l);return o?Pe(h):h}let p=s;i!==e&&(o?p=function(h,C){return s.call(this,Fe(e,h),C,e)}:s.length>2&&(p=function(h,C){return s.call(this,h,C,e)}));const d=c.call(i,p,n);return o&&r?r(d):d}function _n(e,t,s,n){const r=xs(e),l=r!==e&&!Ae(e);let i=s,o=!1;r!==e&&(l?(o=n.length===0,i=function(p,d,h){return o&&(o=!1,p=Fe(e,p)),s.call(this,p,Fe(e,d),h,e)}):s.length>3&&(i=function(p,d,h){return s.call(this,p,d,h,e)}));const c=r[t](i,...n);return o?Fe(e,c):c}function $s(e,t,s){const n=W(e);pe(n,"iterate",Gt);const r=n[t](...s);return(r===-1||r===!1)&&cn(s[0])?(s[0]=W(s[0]),n[t](...s)):r}function Ft(e,t,s=[]){Je(),tn();const n=W(e)[t].apply(e,s);return sn(),Ye(),n}const Sl=Ys("__proto__,__v_isRef,__isVue"),vr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(je));function Cl(e){je(e)||(e=String(e));const t=W(this);return pe(t,"has",e),t.hasOwnProperty(e)}class br{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const r=this._isReadonly,l=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return l;if(s==="__v_raw")return n===(r?l?Fl:xr:l?_r:yr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const i=F(t);if(!r){let c;if(i&&(c=xl[s]))return c;if(s==="hasOwnProperty")return Cl}const o=Reflect.get(t,s,he(t)?t:n);if((je(s)?vr.has(s):Sl(s))||(r||pe(t,"get",s),l))return o;if(he(o)){const c=i&&Zs(s)?o:o.value;return r&&Y(c)?ks(c):c}return Y(o)?r?ks(o):on(o):o}}class mr extends br{constructor(t=!1){super(!1,t)}set(t,s,n,r){let l=t[s];const i=F(t)&&Zs(s);if(!this._isShallow){const p=Xe(l);if(!Ae(n)&&!Xe(n)&&(l=W(l),n=W(n)),!i&&he(l)&&!he(n))return p||(l.value=n),!0}const o=i?Number(s)<t.length:q(t,s),c=Reflect.set(t,s,n,he(t)?t:r);return t===W(r)&&(o?De(n,l)&&qe(t,"set",s,n):qe(t,"add",s,n)),c}deleteProperty(t,s){const n=q(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&n&&qe(t,"delete",s,void 0),r}has(t,s){const n=Reflect.has(t,s);return(!je(s)||!vr.has(s))&&pe(t,"has",s),n}ownKeys(t){return pe(t,"iterate",F(t)?"length":dt),Reflect.ownKeys(t)}}class Tl extends br{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Al=new mr,Ml=new Tl,El=new mr(!0);const Us=e=>e,ns=e=>Reflect.getPrototypeOf(e);function Ol(e,t,s){return function(...n){const r=this.__v_raw,l=W(r),i=Ct(l),o=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,p=r[e](...n),d=s?Us:t?Mt:Pe;return!t&&pe(l,"iterate",c?Vs:dt),ae(Object.create(p),{next(){const{value:h,done:C}=p.next();return C?{value:h,done:C}:{value:o?[d(h[0]),d(h[1])]:d(h),done:C}}})}}function rs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Pl(e,t){const s={get(r){const l=this.__v_raw,i=W(l),o=W(r);e||(De(r,o)&&pe(i,"get",r),pe(i,"get",o));const{has:c}=ns(i),p=t?Us:e?Mt:Pe;if(c.call(i,r))return p(l.get(r));if(c.call(i,o))return p(l.get(o));l!==i&&l.get(r)},get size(){const r=this.__v_raw;return!e&&pe(W(r),"iterate",dt),r.size},has(r){const l=this.__v_raw,i=W(l),o=W(r);return e||(De(r,o)&&pe(i,"has",r),pe(i,"has",o)),r===o?l.has(r):l.has(r)||l.has(o)},forEach(r,l){const i=this,o=i.__v_raw,c=W(o),p=t?Us:e?Mt:Pe;return!e&&pe(c,"iterate",dt),o.forEach((d,h)=>r.call(l,p(d),p(h),i))}};return ae(s,e?{add:rs("add"),set:rs("set"),delete:rs("delete"),clear:rs("clear")}:{add(r){const l=W(this),i=ns(l),o=W(r),c=!t&&!Ae(r)&&!Xe(r)?o:r;return i.has.call(l,c)||De(r,c)&&i.has.call(l,r)||De(o,c)&&i.has.call(l,o)||(l.add(c),qe(l,"add",c,c)),this},set(r,l){!t&&!Ae(l)&&!Xe(l)&&(l=W(l));const i=W(this),{has:o,get:c}=ns(i);let p=o.call(i,r);p||(r=W(r),p=o.call(i,r));const d=c.call(i,r);return i.set(r,l),p?De(l,d)&&qe(i,"set",r,l):qe(i,"add",r,l),this},delete(r){const l=W(this),{has:i,get:o}=ns(l);let c=i.call(l,r);c||(r=W(r),c=i.call(l,r)),o&&o.call(l,r);const p=l.delete(r);return c&&qe(l,"delete",r,void 0),p},clear(){const r=W(this),l=r.size!==0,i=r.clear();return l&&qe(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=Ol(r,e,t)}),s}function ln(e,t){const s=Pl(e,t);return(n,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(q(s,r)&&r in n?s:n,r,l)}const Il={get:ln(!1,!1)},Rl={get:ln(!1,!0)},$l={get:ln(!0,!1)};const yr=new WeakMap,_r=new WeakMap,xr=new WeakMap,Fl=new WeakMap;function Nl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dl(e){return e.__v_skip||!Object.isExtensible(e)?0:Nl(ol(e))}function on(e){return Xe(e)?e:un(e,!1,Al,Il,yr)}function Kl(e){return un(e,!1,El,Rl,_r)}function ks(e){return un(e,!0,Ml,$l,xr)}function un(e,t,s,n,r){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Dl(e);if(l===0)return e;const i=r.get(e);if(i)return i;const o=new Proxy(e,l===2?n:s);return r.set(e,o),o}function pt(e){return Xe(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Xe(e){return!!(e&&e.__v_isReadonly)}function Ae(e){return!!(e&&e.__v_isShallow)}function cn(e){return e?!!e.__v_raw:!1}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Ll(e){return!q(e,"__v_skip")&&Object.isExtensible(e)&&rr(e,"__v_skip",!0),e}const Pe=e=>Y(e)?on(e):e,Mt=e=>Y(e)?ks(e):e;function he(e){return e?e.__v_isRef===!0:!1}function ne(e){return jl(e,!1)}function jl(e,t){return he(e)?e:new Hl(e,t)}class Hl{constructor(t,s){this.dep=new rn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:W(t),this._value=s?t:Pe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||Ae(t)||Xe(t);t=n?t:W(t),De(t,s)&&(this._rawValue=t,this._value=n?t:Pe(t),this.dep.trigger())}}function Vl(e){return he(e)?e.value:e}const Ul={get:(e,t,s)=>t==="__v_raw"?e:Vl(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const r=e[t];return he(r)&&!he(s)?(r.value=s,!0):Reflect.set(e,t,s,n)}};function wr(e){return pt(e)?e:new Proxy(e,Ul)}class kl{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new rn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&te!==this)return ar(this,!0),!0}get value(){const t=this.dep.track();return pr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bl(e,t,s=!1){let n,r;return D(e)?n=e:(n=e.get,r=e.set),new kl(n,r,s)}const ls={},as=new WeakMap;let at;function Wl(e,t=!1,s=at){if(s){let n=as.get(s);n||as.set(s,n=[]),n.push(e)}}function ql(e,t,s=X){const{immediate:n,deep:r,once:l,scheduler:i,augmentJob:o,call:c}=s,p=P=>r?P:Ae(P)||r===!1||r===0?Ge(P,1):Ge(P);let d,h,C,T,K=!1,$=!1;if(he(e)?(h=()=>e.value,K=Ae(e)):pt(e)?(h=()=>p(e),K=!0):F(e)?($=!0,K=e.some(P=>pt(P)||Ae(P)),h=()=>e.map(P=>{if(he(P))return P.value;if(pt(P))return p(P);if(D(P))return c?c(P,2):P()})):D(e)?t?h=c?()=>c(e,2):e:h=()=>{if(C){Je();try{C()}finally{Ye()}}const P=at;at=d;try{return c?c(e,3,[T]):e(T)}finally{at=P}}:h=Ke,t&&r){const P=h,J=r===!0?1/0:r;h=()=>Ge(P(),J)}const Z=ml(),G=()=>{d.stop(),Z&&Z.active&&Xs(Z.effects,d)};if(l&&t){const P=t;t=(...J)=>{P(...J),G()}}let L=$?new Array(e.length).fill(ls):ls;const V=P=>{if(!(!(d.flags&1)||!d.dirty&&!P))if(t){const J=d.run();if(r||K||($?J.some((fe,oe)=>De(fe,L[oe])):De(J,L))){C&&C();const fe=at;at=d;try{const oe=[J,L===ls?void 0:$&&L[0]===ls?[]:L,T];L=J,c?c(t,3,oe):t(...oe)}finally{at=fe}}}else d.run()};return o&&o(V),d=new ur(h),d.scheduler=i?()=>i(V,!1):V,T=P=>Wl(P,!1,d),C=d.onStop=()=>{const P=as.get(d);if(P){if(c)c(P,4);else for(const J of P)J();as.delete(d)}},t?n?V(!0):L=d.run():i?i(V.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function Ge(e,t=1/0,s){if(t<=0||!Y(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,he(e))Ge(e.value,t,s);else if(F(e))for(let n=0;n<e.length;n++)Ge(e[n],t,s);else if(Pt(e)||Ct(e))e.forEach(n=>{Ge(n,t,s)});else if(sr(e)){for(const n in e)Ge(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ge(e[n],t,s)}return e}/**\n* @vue/runtime-core v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function Qt(e,t,s,n){try{return n?e(...n):e()}catch(r){ws(r,t,s)}}function He(e,t,s,n){if(D(e)){const r=Qt(e,t,s,n);return r&&er(r)&&r.catch(l=>{ws(l,t,s)}),r}if(F(e)){const r=[];for(let l=0;l<e.length;l++)r.push(He(e[l],t,s,n));return r}}function ws(e,t,s,n=!0){const r=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||X;if(t){let o=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const d=o.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](e,c,p)===!1)return}o=o.parent}if(l){Je(),Qt(l,null,10,[e,c,p]),Ye();return}}Gl(e,s,r,n,i)}function Gl(e,t,s,n=!0,r=!1){if(r)throw e;console.error(e)}const ye=[];let $e=-1;const Tt=[];let et=null,xt=0;const Sr=Promise.resolve();let fs=null;function Cr(e){const t=fs||Sr;return e?t.then(this?e.bind(this):e):t}function zl(e){let t=$e+1,s=ye.length;for(;t<s;){const n=t+s>>>1,r=ye[n],l=zt(r);l<e||l===e&&r.flags&2?t=n+1:s=n}return t}function an(e){if(!(e.flags&1)){const t=zt(e),s=ye[ye.length-1];!s||!(e.flags&2)&&t>=zt(s)?ye.push(e):ye.splice(zl(t),0,e),e.flags|=1,Tr()}}function Tr(){fs||(fs=Sr.then(Mr))}function Jl(e){F(e)?Tt.push(...e):et&&e.id===-1?et.splice(xt+1,0,e):e.flags&1||(Tt.push(e),e.flags|=1),Tr()}function xn(e,t,s=$e+1){for(;s<ye.length;s++){const n=ye[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ye.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Ar(e){if(Tt.length){const t=[...new Set(Tt)].sort((s,n)=>zt(s)-zt(n));if(Tt.length=0,et){et.push(...t);return}for(et=t,xt=0;xt<et.length;xt++){const s=et[xt];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}et=null,xt=0}}const zt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Mr(e){try{for($e=0;$e<ye.length;$e++){const t=ye[$e];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Qt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$e<ye.length;$e++){const t=ye[$e];t&&(t.flags&=-2)}$e=-1,ye.length=0,Ar(),fs=null,(ye.length||Tt.length)&&Mr()}}let Te=null,Er=null;function ds(e){const t=Te;return Te=e,Er=e&&e.type.__scopeId||null,t}function Yl(e,t=Te,s){if(!t||e._n)return e;const n=(...r)=>{n._d&&Rn(-1);const l=ds(t);let i;try{i=e(...r)}finally{ds(l),n._d&&Rn(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function yt(e,t){if(Te===null)return e;const s=As(Te),n=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[l,i,o,c=X]=t[r];l&&(D(l)&&(l={mounted:l,updated:l}),l.deep&&Ge(i),n.push({dir:l,instance:s,value:i,oldValue:void 0,arg:o,modifiers:c}))}return e}function ut(e,t,s,n){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const o=r[i];l&&(o.oldValue=l[i].value);let c=o.dir[n];c&&(Je(),He(c,s,8,[e.el,o,e,t]),Ye())}}function Xl(e,t){if(_e){let s=_e.provides;const n=_e.parent&&_e.parent.provides;n===s&&(s=_e.provides=Object.create(n)),s[e]=t}}function os(e,t,s=!1){const n=Zi();if(n||At){let r=At?At._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&D(t)?t.call(n&&n.proxy):t}}const Zl=Symbol.for("v-scx"),Ql=()=>os(Zl);function Vt(e,t,s){return Or(e,t,s)}function Or(e,t,s=X){const{immediate:n,deep:r,flush:l,once:i}=s,o=ae({},s),c=t&&n||!t&&l!=="post";let p;if(Yt){if(l==="sync"){const T=Ql();p=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=Ke,T.resume=Ke,T.pause=Ke,T}}const d=_e;o.call=(T,K,$)=>He(T,d,K,$);let h=!1;l==="post"?o.scheduler=T=>{we(T,d&&d.suspense)}:l!=="sync"&&(h=!0,o.scheduler=(T,K)=>{K?T():an(T)}),o.augmentJob=T=>{t&&(T.flags|=4),h&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const C=ql(e,t,o);return Yt&&(p?p.push(C):c&&C()),C}function ei(e,t,s){const n=this.proxy,r=ie(e)?e.includes(".")?Pr(n,e):()=>n[e]:e.bind(n,n);let l;D(t)?l=t:(l=t.handler,s=t);const i=es(this),o=Or(r,l.bind(n),s);return i(),o}function Pr(e,t){const s=t.split(".");return()=>{let n=e;for(let r=0;r<s.length&&n;r++)n=n[s[r]];return n}}const ti=Symbol("_vte"),si=e=>e.__isTeleport,ni=Symbol("_leaveCb");function fn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,fn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ri(e,t){return D(e)?ae({name:e.name},t,{setup:e}):e}function Ir(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function wn(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const ps=new WeakMap;function Ut(e,t,s,n,r=!1){if(F(e)){e.forEach(($,Z)=>Ut($,t&&(F(t)?t[Z]:t),s,n,r));return}if(kt(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ut(e,t,s,n.component.subTree);return}const l=n.shapeFlag&4?As(n.component):n.el,i=r?null:l,{i:o,r:c}=e,p=t&&t.r,d=o.refs===X?o.refs={}:o.refs,h=o.setupState,C=W(h),T=h===X?Qn:$=>wn(d,$)?!1:q(C,$),K=($,Z)=>!(Z&&wn(d,Z));if(p!=null&&p!==c){if(Sn(t),ie(p))d[p]=null,T(p)&&(h[p]=null);else if(he(p)){const $=t;K(p,$.k)&&(p.value=null),$.k&&(d[$.k]=null)}}if(D(c))Qt(c,o,12,[i,d]);else{const $=ie(c),Z=he(c);if($||Z){const G=()=>{if(e.f){const L=$?T(c)?h[c]:d[c]:K()||!e.k?c.value:d[e.k];if(r)F(L)&&Xs(L,l);else if(F(L))L.includes(l)||L.push(l);else if($)d[c]=[l],T(c)&&(h[c]=d[c]);else{const V=[l];K(c,e.k)&&(c.value=V),e.k&&(d[e.k]=V)}}else $?(d[c]=i,T(c)&&(h[c]=i)):Z&&(K(c,e.k)&&(c.value=i),e.k&&(d[e.k]=i))};if(i){const L=()=>{G(),ps.delete(e)};L.id=-1,ps.set(e,L),we(L,s)}else Sn(e),G()}}}function Sn(e){const t=ps.get(e);t&&(t.flags|=8,ps.delete(e))}_s().requestIdleCallback;_s().cancelIdleCallback;const kt=e=>!!e.type.__asyncLoader,Rr=e=>e.type.__isKeepAlive;function li(e,t){$r(e,"a",t)}function ii(e,t){$r(e,"da",t)}function $r(e,t,s=_e){const n=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ss(t,n,s),s){let r=s.parent;for(;r&&r.parent;)Rr(r.parent.vnode)&&oi(n,t,s,r),r=r.parent}}function oi(e,t,s,n){const r=Ss(t,e,n,!0);Nr(()=>{Xs(n[t],r)},s)}function Ss(e,t,s=_e,n=!1){if(s){const r=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...i)=>{Je();const o=es(s),c=He(t,s,e,i);return o(),Ye(),c});return n?r.unshift(l):r.push(l),l}}const Ze=e=>(t,s=_e)=>{(!Yt||e==="sp")&&Ss(e,(...n)=>t(...n),s)},ui=Ze("bm"),Fr=Ze("m"),ci=Ze("bu"),ai=Ze("u"),fi=Ze("bum"),Nr=Ze("um"),di=Ze("sp"),pi=Ze("rtg"),hi=Ze("rtc");function gi(e,t=_e){Ss("ec",e,t)}const vi=Symbol.for("v-ndc");function _t(e,t,s,n){let r;const l=s,i=F(e);if(i||ie(e)){const o=i&&pt(e);let c=!1,p=!1;o&&(c=!Ae(e),p=Xe(e),e=xs(e)),r=new Array(e.length);for(let d=0,h=e.length;d<h;d++)r[d]=t(c?p?Mt(Pe(e[d])):Pe(e[d]):e[d],d,void 0,l)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,l)}else if(Y(e))if(e[Symbol.iterator])r=Array.from(e,(o,c)=>t(o,c,void 0,l));else{const o=Object.keys(e);r=new Array(o.length);for(let c=0,p=o.length;c<p;c++){const d=o[c];r[c]=t(e[d],d,c,l)}}else r=[];return r}const Bs=e=>e?sl(e)?As(e):Bs(e.parent):null,Bt=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bs(e.parent),$root:e=>Bs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Kr(e),$forceUpdate:e=>e.f||(e.f=()=>{an(e.update)}),$nextTick:e=>e.n||(e.n=Cr.bind(e.proxy)),$watch:e=>ei.bind(e)}),Fs=(e,t)=>e!==X&&!e.__isScriptSetup&&q(e,t),bi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:r,props:l,accessCache:i,type:o,appContext:c}=e;if(t[0]!=="$"){const C=i[t];if(C!==void 0)switch(C){case 1:return n[t];case 2:return r[t];case 4:return s[t];case 3:return l[t]}else{if(Fs(n,t))return i[t]=1,n[t];if(r!==X&&q(r,t))return i[t]=2,r[t];if(q(l,t))return i[t]=3,l[t];if(s!==X&&q(s,t))return i[t]=4,s[t];Ws&&(i[t]=0)}}const p=Bt[t];let d,h;if(p)return t==="$attrs"&&pe(e.attrs,"get",""),p(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(s!==X&&q(s,t))return i[t]=4,s[t];if(h=c.config.globalProperties,q(h,t))return h[t]},set({_:e},t,s){const{data:n,setupState:r,ctx:l}=e;return Fs(r,t)?(r[t]=s,!0):n!==X&&q(n,t)?(n[t]=s,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:r,props:l,type:i}},o){let c;return!!(s[o]||e!==X&&o[0]!=="$"&&q(e,o)||Fs(t,o)||q(l,o)||q(n,o)||q(Bt,o)||q(r.config.globalProperties,o)||(c=i.__cssModules)&&c[o])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:q(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Cn(e){return F(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Ws=!0;function mi(e){const t=Kr(e),s=e.proxy,n=e.ctx;Ws=!1,t.beforeCreate&&Tn(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:o,provide:c,inject:p,created:d,beforeMount:h,mounted:C,beforeUpdate:T,updated:K,activated:$,deactivated:Z,beforeDestroy:G,beforeUnmount:L,destroyed:V,unmounted:P,render:J,renderTracked:fe,renderTriggered:oe,errorCaptured:ge,serverPrefetch:Q,expose:ue,inheritAttrs:Qe,components:ht,directives:gt,filters:rt}=t;if(p&&yi(p,n,null),i)for(const ee in i){const z=i[ee];D(z)&&(n[ee]=z.bind(s))}if(r){const ee=r.call(s,s);Y(ee)&&(e.data=on(ee))}if(Ws=!0,l)for(const ee in l){const z=l[ee],ve=D(z)?z.bind(s,s):D(z.get)?z.get.bind(s,s):Ke,lt=!D(z)&&D(z.set)?z.set.bind(s):Ke,Ve=Me({get:ve,set:lt});Object.defineProperty(n,ee,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:xe=>Ve.value=xe})}if(o)for(const ee in o)Dr(o[ee],n,s,ee);if(c){const ee=D(c)?c.call(s):c;Reflect.ownKeys(ee).forEach(z=>{Xl(z,ee[z])})}d&&Tn(d,e,"c");function se(ee,z){F(z)?z.forEach(ve=>ee(ve.bind(s))):z&&ee(z.bind(s))}if(se(ui,h),se(Fr,C),se(ci,T),se(ai,K),se(li,$),se(ii,Z),se(gi,ge),se(hi,fe),se(pi,oe),se(fi,L),se(Nr,P),se(di,Q),F(ue))if(ue.length){const ee=e.exposed||(e.exposed={});ue.forEach(z=>{Object.defineProperty(ee,z,{get:()=>s[z],set:ve=>s[z]=ve,enumerable:!0})})}else e.exposed||(e.exposed={});J&&e.render===Ke&&(e.render=J),Qe!=null&&(e.inheritAttrs=Qe),ht&&(e.components=ht),gt&&(e.directives=gt),Q&&Ir(e)}function yi(e,t,s=Ke){F(e)&&(e=qs(e));for(const n in e){const r=e[n];let l;Y(r)?"default"in r?l=os(r.from||n,r.default,!0):l=os(r.from||n):l=os(r),he(l)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[n]=l}}function Tn(e,t,s){He(F(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Dr(e,t,s,n){let r=n.includes(".")?Pr(s,n):()=>s[n];if(ie(e)){const l=t[e];D(l)&&Vt(r,l)}else if(D(e))Vt(r,e.bind(s));else if(Y(e))if(F(e))e.forEach(l=>Dr(l,t,s,n));else{const l=D(e.handler)?e.handler.bind(s):t[e.handler];D(l)&&Vt(r,l,e)}}function Kr(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,o=l.get(t);let c;return o?c=o:!r.length&&!s&&!n?c=t:(c={},r.length&&r.forEach(p=>hs(c,p,i,!0)),hs(c,t,i)),Y(t)&&l.set(t,c),c}function hs(e,t,s,n=!1){const{mixins:r,extends:l}=t;l&&hs(e,l,s,!0),r&&r.forEach(i=>hs(e,i,s,!0));for(const i in t)if(!(n&&i==="expose")){const o=_i[i]||s&&s[i];e[i]=o?o(e[i],t[i]):t[i]}return e}const _i={data:An,props:Mn,emits:Mn,methods:Dt,computed:Dt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:Dt,directives:Dt,watch:wi,provide:An,inject:xi};function An(e,t){return t?e?function(){return ae(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function xi(e,t){return Dt(qs(e),qs(t))}function qs(e){if(F(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?ae(Object.create(null),e,t):t}function Mn(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ae(Object.create(null),Cn(e),Cn(t??{})):t}function wi(e,t){if(!e)return t;if(!t)return e;const s=ae(Object.create(null),e);for(const n in t)s[n]=me(e[n],t[n]);return s}function Lr(){return{app:null,config:{isNativeTag:Qn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Si=0;function Ci(e,t){return function(n,r=null){D(n)||(n=ae({},n)),r!=null&&!Y(r)&&(r=null);const l=Lr(),i=new WeakSet,o=[];let c=!1;const p=l.app={_uid:Si++,_component:n,_props:r,_container:null,_context:l,_instance:null,version:ro,get config(){return l.config},set config(d){},use(d,...h){return i.has(d)||(d&&D(d.install)?(i.add(d),d.install(p,...h)):D(d)&&(i.add(d),d(p,...h))),p},mixin(d){return l.mixins.includes(d)||l.mixins.push(d),p},component(d,h){return h?(l.components[d]=h,p):l.components[d]},directive(d,h){return h?(l.directives[d]=h,p):l.directives[d]},mount(d,h,C){if(!c){const T=p._ceVNode||Le(n,r);return T.appContext=l,C===!0?C="svg":C===!1&&(C=void 0),e(T,d,C),c=!0,p._container=d,d.__vue_app__=p,As(T.component)}},onUnmount(d){o.push(d)},unmount(){c&&(He(o,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(d,h){return l.provides[d]=h,p},runWithContext(d){const h=At;At=p;try{return d()}finally{At=h}}};return p}}let At=null;const Ti=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ee(t)}Modifiers`]||e[`${nt(t)}Modifiers`];function Ai(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||X;let r=s;const l=t.startsWith("update:"),i=l&&Ti(n,t.slice(7));i&&(i.trim&&(r=s.map(d=>ie(d)?d.trim():d)),i.number&&(r=s.map(ys)));let o,c=n[o=Os(t)]||n[o=Os(Ee(t))];!c&&l&&(c=n[o=Os(nt(t))]),c&&He(c,e,6,r);const p=n[o+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,He(p,e,6,r)}}const Mi=new WeakMap;function jr(e,t,s=!1){const n=s?Mi:t.emitsCache,r=n.get(e);if(r!==void 0)return r;const l=e.emits;let i={},o=!1;if(!D(e)){const c=p=>{const d=jr(p,t,!0);d&&(o=!0,ae(i,d))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!o?(Y(e)&&n.set(e,null),null):(F(l)?l.forEach(c=>i[c]=null):ae(i,l),Y(e)&&n.set(e,i),i)}function Cs(e,t){return!e||!vs(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,nt(t))||q(e,t))}function En(e){const{type:t,vnode:s,proxy:n,withProxy:r,propsOptions:[l],slots:i,attrs:o,emit:c,render:p,renderCache:d,props:h,data:C,setupState:T,ctx:K,inheritAttrs:$}=e,Z=ds(e);let G,L;try{if(s.shapeFlag&4){const P=r||n,J=P;G=Ne(p.call(J,P,d,h,T,C,K)),L=o}else{const P=t;G=Ne(P.length>1?P(h,{attrs:o,slots:i,emit:c}):P(h,null)),L=t.props?o:Ei(o)}}catch(P){Wt.length=0,ws(P,e,1),G=Le(st)}let V=G;if(L&&$!==!1){const P=Object.keys(L),{shapeFlag:J}=V;P.length&&J&7&&(l&&P.some(bs)&&(L=Oi(L,l)),V=Et(V,L,!1,!0))}return s.dirs&&(V=Et(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(s.dirs):s.dirs),s.transition&&fn(V,s.transition),G=V,ds(Z),G}const Ei=e=>{let t;for(const s in e)(s==="class"||s==="style"||vs(s))&&((t||(t={}))[s]=e[s]);return t},Oi=(e,t)=>{const s={};for(const n in e)(!bs(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Pi(e,t,s){const{props:n,children:r,component:l}=e,{props:i,children:o,patchFlag:c}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return n?On(n,i,p):!!i;if(c&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const C=d[h];if(Hr(i,n,C)&&!Cs(p,C))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===i?!1:n?i?On(n,i,p):!0:!!i;return!1}function On(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const l=n[r];if(Hr(t,e,l)&&!Cs(s,l))return!0}return!1}function Hr(e,t,s){const n=e[s],r=t[s];return s==="style"&&Y(n)&&Y(r)?!It(n,r):n!==r}function Ii({vnode:e,parent:t,suspense:s},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=n,e=r),r===e)(e=t.vnode).el=n,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=n)}const Vr={},Ur=()=>Object.create(Vr),kr=e=>Object.getPrototypeOf(e)===Vr;function Ri(e,t,s,n=!1){const r={},l=Ur();e.propsDefaults=Object.create(null),Br(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);s?e.props=n?r:Kl(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function $i(e,t,s,n){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,o=W(r),[c]=e.propsOptions;let p=!1;if((n||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let C=d[h];if(Cs(e.emitsOptions,C))continue;const T=t[C];if(c)if(q(l,C))T!==l[C]&&(l[C]=T,p=!0);else{const K=Ee(C);r[K]=Gs(c,o,K,T,e,!1)}else T!==l[C]&&(l[C]=T,p=!0)}}}else{Br(e,t,r,l)&&(p=!0);let d;for(const h in o)(!t||!q(t,h)&&((d=nt(h))===h||!q(t,d)))&&(c?s&&(s[h]!==void 0||s[d]!==void 0)&&(r[h]=Gs(c,o,h,void 0,e,!0)):delete r[h]);if(l!==o)for(const h in l)(!t||!q(t,h))&&(delete l[h],p=!0)}p&&qe(e.attrs,"set","")}function Br(e,t,s,n){const[r,l]=e.propsOptions;let i=!1,o;if(t)for(let c in t){if(Lt(c))continue;const p=t[c];let d;r&&q(r,d=Ee(c))?!l||!l.includes(d)?s[d]=p:(o||(o={}))[d]=p:Cs(e.emitsOptions,c)||(!(c in n)||p!==n[c])&&(n[c]=p,i=!0)}if(l){const c=W(s),p=o||X;for(let d=0;d<l.length;d++){const h=l[d];s[h]=Gs(r,c,h,p[h],e,!q(p,h))}}return i}function Gs(e,t,s,n,r,l){const i=e[s];if(i!=null){const o=q(i,"default");if(o&&n===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&D(c)){const{propsDefaults:p}=r;if(s in p)n=p[s];else{const d=es(r);n=p[s]=c.call(null,t),d()}}else n=c;r.ce&&r.ce._setProp(s,n)}i[0]&&(l&&!o?n=!1:i[1]&&(n===""||n===nt(s))&&(n=!0))}return n}const Fi=new WeakMap;function Wr(e,t,s=!1){const n=s?Fi:t.propsCache,r=n.get(e);if(r)return r;const l=e.props,i={},o=[];let c=!1;if(!D(e)){const d=h=>{c=!0;const[C,T]=Wr(h,t,!0);ae(i,C),T&&o.push(...T)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!c)return Y(e)&&n.set(e,St),St;if(F(l))for(let d=0;d<l.length;d++){const h=Ee(l[d]);Pn(h)&&(i[h]=X)}else if(l)for(const d in l){const h=Ee(d);if(Pn(h)){const C=l[d],T=i[h]=F(C)||D(C)?{type:C}:ae({},C),K=T.type;let $=!1,Z=!0;if(F(K))for(let G=0;G<K.length;++G){const L=K[G],V=D(L)&&L.name;if(V==="Boolean"){$=!0;break}else V==="String"&&(Z=!1)}else $=D(K)&&K.name==="Boolean";T[0]=$,T[1]=Z,($||q(T,"default"))&&o.push(h)}}const p=[i,o];return Y(e)&&n.set(e,p),p}function Pn(e){return e[0]!=="$"&&!Lt(e)}const dn=e=>e==="_"||e==="_ctx"||e==="$stable",pn=e=>F(e)?e.map(Ne):[Ne(e)],Ni=(e,t,s)=>{if(t._n)return t;const n=Yl((...r)=>pn(t(...r)),s);return n._c=!1,n},qr=(e,t,s)=>{const n=e._ctx;for(const r in e){if(dn(r))continue;const l=e[r];if(D(l))t[r]=Ni(r,l,n);else if(l!=null){const i=pn(l);t[r]=()=>i}}},Gr=(e,t)=>{const s=pn(t);e.slots.default=()=>s},zr=(e,t,s)=>{for(const n in t)(s||!dn(n))&&(e[n]=t[n])},Di=(e,t,s)=>{const n=e.slots=Ur();if(e.vnode.shapeFlag&32){const r=t._;r?(zr(n,t,s),s&&rr(n,"_",r,!0)):qr(t,n)}else t&&Gr(e,t)},Ki=(e,t,s)=>{const{vnode:n,slots:r}=e;let l=!0,i=X;if(n.shapeFlag&32){const o=t._;o?s&&o===1?l=!1:zr(r,t,s):(l=!t.$stable,qr(t,r)),i=t}else t&&(Gr(e,t),i={default:1});if(l)for(const o in r)!dn(o)&&i[o]==null&&delete r[o]},we=Ui;function Li(e){return ji(e)}function ji(e,t){const s=_s();s.__VUE__=!0;const{insert:n,remove:r,patchProp:l,createElement:i,createText:o,createComment:c,setText:p,setElementText:d,parentNode:h,nextSibling:C,setScopeId:T=Ke,insertStaticContent:K}=e,$=(u,a,g,m=null,y=null,_=null,A=void 0,S=null,w=!!a.dynamicChildren)=>{if(u===a)return;u&&!Nt(u,a)&&(m=bt(u),xe(u,y,_,!0),u=null),a.patchFlag===-2&&(w=!1,a.dynamicChildren=null);const{type:x,ref:I,shapeFlag:E}=a;switch(x){case Ts:Z(u,a,g,m);break;case st:G(u,a,g,m);break;case us:u==null&&L(a,g,m,A);break;case ce:ht(u,a,g,m,y,_,A,S,w);break;default:E&1?J(u,a,g,m,y,_,A,S,w):E&6?gt(u,a,g,m,y,_,A,S,w):(E&64||E&128)&&x.process(u,a,g,m,y,_,A,S,w,ot)}I!=null&&y?Ut(I,u&&u.ref,_,a||u,!a):I==null&&u&&u.ref!=null&&Ut(u.ref,null,_,u,!0)},Z=(u,a,g,m)=>{if(u==null)n(a.el=o(a.children),g,m);else{const y=a.el=u.el;a.children!==u.children&&p(y,a.children)}},G=(u,a,g,m)=>{u==null?n(a.el=c(a.children||""),g,m):a.el=u.el},L=(u,a,g,m)=>{[u.el,u.anchor]=K(u.children,a,g,m,u.el,u.anchor)},V=({el:u,anchor:a},g,m)=>{let y;for(;u&&u!==a;)y=C(u),n(u,g,m),u=y;n(a,g,m)},P=({el:u,anchor:a})=>{let g;for(;u&&u!==a;)g=C(u),r(u),u=g;r(a)},J=(u,a,g,m,y,_,A,S,w)=>{if(a.type==="svg"?A="svg":a.type==="math"&&(A="mathml"),u==null)fe(a,g,m,y,_,A,S,w);else{const x=u.el&&u.el._isVueCE?u.el:null;try{x&&x._beginPatch(),Q(u,a,y,_,A,S,w)}finally{x&&x._endPatch()}}},fe=(u,a,g,m,y,_,A,S)=>{let w,x;const{props:I,shapeFlag:E,transition:b,dirs:f}=u;if(w=u.el=i(u.type,_,I&&I.is,I),E&8?d(w,u.children):E&16&&ge(u.children,w,null,m,y,Ns(u,_),A,S),f&&ut(u,null,m,"created"),oe(w,u,u.scopeId,A,m),I){for(const M in I)M!=="value"&&!Lt(M)&&l(w,M,null,I[M],_,m);"value"in I&&l(w,"value",null,I.value,_),(x=I.onVnodeBeforeMount)&&Re(x,m,u)}f&&ut(u,null,m,"beforeMount");const v=Hi(y,b);v&&b.beforeEnter(w),n(w,a,g),((x=I&&I.onVnodeMounted)||v||f)&&we(()=>{try{x&&Re(x,m,u),v&&b.enter(w),f&&ut(u,null,m,"mounted")}finally{}},y)},oe=(u,a,g,m,y)=>{if(g&&T(u,g),m)for(let _=0;_<m.length;_++)T(u,m[_]);if(y){let _=y.subTree;if(a===_||Zr(_.type)&&(_.ssContent===a||_.ssFallback===a)){const A=y.vnode;oe(u,A,A.scopeId,A.slotScopeIds,y.parent)}}},ge=(u,a,g,m,y,_,A,S,w=0)=>{for(let x=w;x<u.length;x++){const I=u[x]=S?We(u[x]):Ne(u[x]);$(null,I,a,g,m,y,_,A,S)}},Q=(u,a,g,m,y,_,A)=>{const S=a.el=u.el;let{patchFlag:w,dynamicChildren:x,dirs:I}=a;w|=u.patchFlag&16;const E=u.props||X,b=a.props||X;let f;if(g&&ct(g,!1),(f=b.onVnodeBeforeUpdate)&&Re(f,g,a,u),I&&ut(a,u,g,"beforeUpdate"),g&&ct(g,!0),(E.innerHTML&&b.innerHTML==null||E.textContent&&b.textContent==null)&&d(S,""),x?ue(u.dynamicChildren,x,S,g,m,Ns(a,y),_):A||z(u,a,S,null,g,m,Ns(a,y),_,!1),w>0){if(w&16)Qe(S,E,b,g,y);else if(w&2&&E.class!==b.class&&l(S,"class",null,b.class,y),w&4&&l(S,"style",E.style,b.style,y),w&8){const v=a.dynamicProps;for(let M=0;M<v.length;M++){const O=v[M],R=E[O],j=b[O];(j!==R||O==="value")&&l(S,O,R,j,y,g)}}w&1&&u.children!==a.children&&d(S,a.children)}else!A&&x==null&&Qe(S,E,b,g,y);((f=b.onVnodeUpdated)||I)&&we(()=>{f&&Re(f,g,a,u),I&&ut(a,u,g,"updated")},m)},ue=(u,a,g,m,y,_,A)=>{for(let S=0;S<a.length;S++){const w=u[S],x=a[S],I=w.el&&(w.type===ce||!Nt(w,x)||w.shapeFlag&198)?h(w.el):g;$(w,x,I,null,m,y,_,A,!0)}},Qe=(u,a,g,m,y)=>{if(a!==g){if(a!==X)for(const _ in a)!Lt(_)&&!(_ in g)&&l(u,_,a[_],null,y,m);for(const _ in g){if(Lt(_))continue;const A=g[_],S=a[_];A!==S&&_!=="value"&&l(u,_,S,A,y,m)}"value"in g&&l(u,"value",a.value,g.value,y)}},ht=(u,a,g,m,y,_,A,S,w)=>{const x=a.el=u?u.el:o(""),I=a.anchor=u?u.anchor:o("");let{patchFlag:E,dynamicChildren:b,slotScopeIds:f}=a;f&&(S=S?S.concat(f):f),u==null?(n(x,g,m),n(I,g,m),ge(a.children||[],g,I,y,_,A,S,w)):E>0&&E&64&&b&&u.dynamicChildren&&u.dynamicChildren.length===b.length?(ue(u.dynamicChildren,b,g,y,_,A,S),(a.key!=null||y&&a===y.subTree)&&Jr(u,a,!0)):z(u,a,g,I,y,_,A,S,w)},gt=(u,a,g,m,y,_,A,S,w)=>{a.slotScopeIds=S,u==null?a.shapeFlag&512?y.ctx.activate(a,g,m,A,w):rt(a,g,m,y,_,A,w):ts(u,a,w)},rt=(u,a,g,m,y,_,A)=>{const S=u.component=Xi(u,m,y);if(Rr(u)&&(S.ctx.renderer=ot),Qi(S,!1,A),S.asyncDep){if(y&&y.registerDep(S,se,A),!u.el){const w=S.subTree=Le(st);G(null,w,a,g),u.placeholder=w.el}}else se(S,u,a,g,y,_,A)},ts=(u,a,g)=>{const m=a.component=u.component;if(Pi(u,a,g))if(m.asyncDep&&!m.asyncResolved){ee(m,a,g);return}else m.next=a,m.update();else a.el=u.el,m.vnode=a},se=(u,a,g,m,y,_,A)=>{const S=()=>{if(u.isMounted){let{next:E,bu:b,u:f,parent:v,vnode:M}=u;{const U=Yr(u);if(U){E&&(E.el=M.el,ee(u,E,A)),U.asyncDep.then(()=>{we(()=>{u.isUnmounted||x()},y)});return}}let O=E,R;ct(u,!1),E?(E.el=M.el,ee(u,E,A)):E=M,b&&is(b),(R=E.props&&E.props.onVnodeBeforeUpdate)&&Re(R,v,E,M),ct(u,!0);const j=En(u),H=u.subTree;u.subTree=j,$(H,j,h(H.el),bt(H),u,y,_),E.el=j.el,O===null&&Ii(u,j.el),f&&we(f,y),(R=E.props&&E.props.onVnodeUpdated)&&we(()=>Re(R,v,E,M),y)}else{let E;const{el:b,props:f}=a,{bm:v,m:M,parent:O,root:R,type:j}=u,H=kt(a);ct(u,!1),v&&is(v),!H&&(E=f&&f.onVnodeBeforeMount)&&Re(E,O,a),ct(u,!0);{R.ce&&R.ce._hasShadowRoot()&&R.ce._injectChildStyle(j,u.parent?u.parent.type:void 0);const U=u.subTree=En(u);$(null,U,g,m,u,y,_),a.el=U.el}if(M&&we(M,y),!H&&(E=f&&f.onVnodeMounted)){const U=a;we(()=>Re(E,O,U),y)}(a.shapeFlag&256||O&&kt(O.vnode)&&O.vnode.shapeFlag&256)&&u.a&&we(u.a,y),u.isMounted=!0,a=g=m=null}};u.scope.on();const w=u.effect=new ur(S);u.scope.off();const x=u.update=w.run.bind(w),I=u.job=w.runIfDirty.bind(w);I.i=u,I.id=u.uid,w.scheduler=()=>an(I),ct(u,!0),x()},ee=(u,a,g)=>{a.component=u;const m=u.vnode.props;u.vnode=a,u.next=null,$i(u,a.props,m,g),Ki(u,a.children,g),Je(),xn(u),Ye()},z=(u,a,g,m,y,_,A,S,w=!1)=>{const x=u&&u.children,I=u?u.shapeFlag:0,E=a.children,{patchFlag:b,shapeFlag:f}=a;if(b>0){if(b&128){lt(x,E,g,m,y,_,A,S,w);return}else if(b&256){ve(x,E,g,m,y,_,A,S,w);return}}f&8?(I&16&&it(x,y,_),E!==x&&d(g,E)):I&16?f&16?lt(x,E,g,m,y,_,A,S,w):it(x,y,_,!0):(I&8&&d(g,""),f&16&&ge(E,g,m,y,_,A,S,w))},ve=(u,a,g,m,y,_,A,S,w)=>{u=u||St,a=a||St;const x=u.length,I=a.length,E=Math.min(x,I);let b;for(b=0;b<E;b++){const f=a[b]=w?We(a[b]):Ne(a[b]);$(u[b],f,g,null,y,_,A,S,w)}x>I?it(u,y,_,!0,!1,E):ge(a,g,m,y,_,A,S,w,E)},lt=(u,a,g,m,y,_,A,S,w)=>{let x=0;const I=a.length;let E=u.length-1,b=I-1;for(;x<=E&&x<=b;){const f=u[x],v=a[x]=w?We(a[x]):Ne(a[x]);if(Nt(f,v))$(f,v,g,null,y,_,A,S,w);else break;x++}for(;x<=E&&x<=b;){const f=u[E],v=a[b]=w?We(a[b]):Ne(a[b]);if(Nt(f,v))$(f,v,g,null,y,_,A,S,w);else break;E--,b--}if(x>E){if(x<=b){const f=b+1,v=f<I?a[f].el:m;for(;x<=b;)$(null,a[x]=w?We(a[x]):Ne(a[x]),g,v,y,_,A,S,w),x++}}else if(x>b)for(;x<=E;)xe(u[x],y,_,!0),x++;else{const f=x,v=x,M=new Map;for(x=v;x<=b;x++){const be=a[x]=w?We(a[x]):Ne(a[x]);be.key!=null&&M.set(be.key,x)}let O,R=0;const j=b-v+1;let H=!1,U=0;const le=new Array(j);for(x=0;x<j;x++)le[x]=0;for(x=f;x<=E;x++){const be=u[x];if(R>=j){xe(be,y,_,!0);continue}let Ie;if(be.key!=null)Ie=M.get(be.key);else for(O=v;O<=b;O++)if(le[O-v]===0&&Nt(be,a[O])){Ie=O;break}Ie===void 0?xe(be,y,_,!0):(le[Ie-v]=x+1,Ie>=U?U=Ie:H=!0,$(be,a[Ie],g,null,y,_,A,S,w),R++)}const Ue=H?Vi(le):St;for(O=Ue.length-1,x=j-1;x>=0;x--){const be=v+x,Ie=a[be],gn=a[be+1],vn=be+1<I?gn.el||Xr(gn):m;le[x]===0?$(null,Ie,g,vn,y,_,A,S,w):H&&(O<0||x!==Ue[O]?Ve(Ie,g,vn,2):O--)}}},Ve=(u,a,g,m,y=null)=>{const{el:_,type:A,transition:S,children:w,shapeFlag:x}=u;if(x&6){Ve(u.component.subTree,a,g,m);return}if(x&128){u.suspense.move(a,g,m);return}if(x&64){A.move(u,a,g,ot);return}if(A===ce){n(_,a,g);for(let E=0;E<w.length;E++)Ve(w[E],a,g,m);n(u.anchor,a,g);return}if(A===us){V(u,a,g);return}if(m!==2&&x&1&&S)if(m===0)S.beforeEnter(_),n(_,a,g),we(()=>S.enter(_),y);else{const{leave:E,delayLeave:b,afterLeave:f}=S,v=()=>{u.ctx.isUnmounted?r(_):n(_,a,g)},M=()=>{_._isLeaving&&_[ni](!0),E(_,()=>{v(),f&&f()})};b?b(_,v,M):M()}else n(_,a,g)},xe=(u,a,g,m=!1,y=!1)=>{const{type:_,props:A,ref:S,children:w,dynamicChildren:x,shapeFlag:I,patchFlag:E,dirs:b,cacheIndex:f,memo:v}=u;if(E===-2&&(y=!1),S!=null&&(Je(),Ut(S,null,g,u,!0),Ye()),f!=null&&(a.renderCache[f]=void 0),I&256){a.ctx.deactivate(u);return}const M=I&1&&b,O=!kt(u);let R;if(O&&(R=A&&A.onVnodeBeforeUnmount)&&Re(R,a,u),I&6)Ms(u.component,g,m);else{if(I&128){u.suspense.unmount(g,m);return}M&&ut(u,null,a,"beforeUnmount"),I&64?u.type.remove(u,a,g,ot,m):x&&!x.hasOnce&&(_!==ce||E>0&&E&64)?it(x,a,g,!1,!0):(_===ce&&E&384||!y&&I&16)&&it(w,a,g),m&&ss(u)}const j=v!=null&&f==null;(O&&(R=A&&A.onVnodeUnmounted)||M||j)&&we(()=>{R&&Re(R,a,u),M&&ut(u,null,a,"unmounted"),j&&(u.el=null)},g)},ss=u=>{const{type:a,el:g,anchor:m,transition:y}=u;if(a===ce){vt(g,m);return}if(a===us){P(u);return}const _=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:S}=y,w=()=>A(g,_);S?S(u.el,_,w):w()}else _()},vt=(u,a)=>{let g;for(;u!==a;)g=C(u),r(u),u=g;r(a)},Ms=(u,a,g)=>{const{bum:m,scope:y,job:_,subTree:A,um:S,m:w,a:x}=u;In(w),In(x),m&&is(m),y.stop(),_&&(_.flags|=8,xe(A,u,a,g)),S&&we(S,a),we(()=>{u.isUnmounted=!0},a)},it=(u,a,g,m=!1,y=!1,_=0)=>{for(let A=_;A<u.length;A++)xe(u[A],a,g,m,y)},bt=u=>{if(u.shapeFlag&6)return bt(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const a=C(u.anchor||u.el),g=a&&a[ti];return g?C(g):a};let Rt=!1;const $t=(u,a,g)=>{let m;u==null?a._vnode&&(xe(a._vnode,null,null,!0),m=a._vnode.component):$(a._vnode||null,u,a,null,null,null,g),a._vnode=u,Rt||(Rt=!0,xn(m),Ar(),Rt=!1)},ot={p:$,um:xe,m:Ve,r:ss,mt:rt,mc:ge,pc:z,pbc:ue,n:bt,o:e};return{render:$t,hydrate:void 0,createApp:Ci($t)}}function Ns({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ct({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Jr(e,t,s=!1){const n=e.children,r=t.children;if(F(n)&&F(r))for(let l=0;l<n.length;l++){const i=n[l];let o=r[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[l]=We(r[l]),o.el=i.el),!s&&o.patchFlag!==-2&&Jr(i,o)),o.type===Ts&&(o.patchFlag===-1&&(o=r[l]=We(o)),o.el=i.el),o.type===st&&!o.el&&(o.el=i.el)}}function Vi(e){const t=e.slice(),s=[0];let n,r,l,i,o;const c=e.length;for(n=0;n<c;n++){const p=e[n];if(p!==0){if(r=s[s.length-1],e[r]<p){t[n]=r,s.push(n);continue}for(l=0,i=s.length-1;l<i;)o=l+i>>1,e[s[o]]<p?l=o+1:i=o;p<e[s[l]]&&(l>0&&(t[n]=s[l-1]),s[l]=n)}}for(l=s.length,i=s[l-1];l-- >0;)s[l]=i,i=t[i];return s}function Yr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Yr(t)}function In(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Xr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Xr(t.subTree):null}const Zr=e=>e.__isSuspense;function Ui(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Jl(e)}const ce=Symbol.for("v-fgt"),Ts=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),us=Symbol.for("v-stc"),Wt=[];let Ce=null;function k(e=!1){Wt.push(Ce=e?null:[])}function ki(){Wt.pop(),Ce=Wt[Wt.length-1]||null}let Jt=1;function Rn(e,t=!1){Jt+=e,e<0&&Ce&&t&&(Ce.hasOnce=!0)}function Qr(e){return e.dynamicChildren=Jt>0?Ce||St:null,ki(),Jt>0&&Ce&&Ce.push(e),e}function B(e,t,s,n,r,l){return Qr(N(e,t,s,n,r,l,!0))}function Bi(e,t,s,n,r){return Qr(Le(e,t,s,n,r,!0))}function el(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}const tl=({key:e})=>e??null,cs=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||he(e)||D(e)?{i:Te,r:e,k:t,f:!!s}:e:null);function N(e,t=null,s=null,n=0,r=null,l=e===ce?0:1,i=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tl(t),ref:t&&cs(t),scopeId:Er,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Te};return o?(hn(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=ie(s)?8:16),Jt>0&&!i&&Ce&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Ce.push(c),c}const Le=Wi;function Wi(e,t=null,s=null,n=0,r=null,l=!1){if((!e||e===vi)&&(e=st),el(e)){const o=Et(e,t,!0);return s&&hn(o,s),Jt>0&&!l&&Ce&&(o.shapeFlag&6?Ce[Ce.indexOf(e)]=o:Ce.push(o)),o.patchFlag=-2,o}if(no(e)&&(e=e.__vccOpts),t){t=qi(t);let{class:o,style:c}=t;o&&!ie(o)&&(t.class=ft(o)),Y(c)&&(cn(c)&&!F(c)&&(c=ae({},c)),t.style=Qs(c))}const i=ie(e)?1:Zr(e)?128:si(e)?64:Y(e)?4:D(e)?2:0;return N(e,t,s,n,r,i,l,!0)}function qi(e){return e?cn(e)||kr(e)?ae({},e):e:null}function Et(e,t,s=!1,n=!1){const{props:r,ref:l,patchFlag:i,children:o,transition:c}=e,p=t?zi(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&tl(p),ref:t&&t.ref?s&&l?F(l)?l.concat(cs(t)):[l,cs(t)]:cs(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&fn(d,c.clone(d)),d}function wt(e=" ",t=0){return Le(Ts,null,e,t)}function Gi(e,t){const s=Le(us,null,e);return s.staticCount=t,s}function Se(e="",t=!1){return t?(k(),Bi(st,null,e)):Le(st,null,e)}function Ne(e){return e==null||typeof e=="boolean"?Le(st):F(e)?Le(ce,null,e.slice()):el(e)?We(e):Le(Ts,null,String(e))}function We(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function hn(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(F(t))s=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),hn(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!kr(t)?t._ctx=Te:r===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:Te},s=32):(t=String(t),n&64?(s=16,t=[wt(t)]):s=8);e.children=t,e.shapeFlag|=s}function zi(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=ft([t.class,n.class]));else if(r==="style")t.style=Qs([t.style,n.style]);else if(vs(r)){const l=t[r],i=n[r];i&&l!==i&&!(F(l)&&l.includes(i))?t[r]=l?[].concat(l,i):i:i==null&&l==null&&!bs(r)&&(t[r]=i)}else r!==""&&(t[r]=n[r])}return t}function Re(e,t,s,n=null){He(e,t,7,[s,n])}const Ji=Lr();let Yi=0;function Xi(e,t,s){const n=e.type,r=(t?t.appContext:e.appContext)||Ji,l={uid:Yi++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wr(n,r),emitsOptions:jr(n,r),emit:null,emitted:null,propsDefaults:X,inheritAttrs:n.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Ai.bind(null,l),e.ce&&e.ce(l),l}let _e=null;const Zi=()=>_e||Te;let gs,zs;{const e=_s(),t=(s,n)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(n),l=>{r.length>1?r.forEach(i=>i(l)):r[0](l)}};gs=t("__VUE_INSTANCE_SETTERS__",s=>_e=s),zs=t("__VUE_SSR_SETTERS__",s=>Yt=s)}const es=e=>{const t=_e;return gs(e),e.scope.on(),()=>{e.scope.off(),gs(t)}},$n=()=>{_e&&_e.scope.off(),gs(null)};function sl(e){return e.vnode.shapeFlag&4}let Yt=!1;function Qi(e,t=!1,s=!1){t&&zs(t);const{props:n,children:r}=e.vnode,l=sl(e);Ri(e,n,l,t),Di(e,r,s||t);const i=l?eo(e,t):void 0;return t&&zs(!1),i}function eo(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bi);const{setup:n}=s;if(n){Je();const r=e.setupContext=n.length>1?so(e):null,l=es(e),i=Qt(n,e,0,[e.props,r]),o=er(i);if(Ye(),l(),(o||e.sp)&&!kt(e)&&Ir(e),o){if(i.then($n,$n),t)return i.then(c=>{Fn(e,c)}).catch(c=>{ws(c,e,0)});e.asyncDep=i}else Fn(e,i)}else nl(e)}function Fn(e,t,s){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=wr(t)),nl(e)}function nl(e,t,s){const n=e.type;e.render||(e.render=n.render||Ke);{const r=es(e);Je();try{mi(e)}finally{Ye(),r()}}}const to={get(e,t){return pe(e,"get",""),e[t]}};function so(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,to),slots:e.slots,emit:e.emit,expose:t}}function As(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wr(Ll(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Bt)return Bt[s](e)},has(t,s){return s in t||s in Bt}})):e.proxy}function no(e){return D(e)&&"__vccOpts"in e}const Me=(e,t)=>Bl(e,t,Yt),ro="3.5.33";/**\n* @vue/runtime-dom v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let Js;const Nn=typeof window<"u"&&window.trustedTypes;if(Nn)try{Js=Nn.createPolicy("vue",{createHTML:e=>e})}catch{}const rl=Js?e=>Js.createHTML(e):e=>e,lo="http://www.w3.org/2000/svg",io="http://www.w3.org/1998/Math/MathML",Be=typeof document<"u"?document:null,Dn=Be&&Be.createElement("template"),oo={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const r=t==="svg"?Be.createElementNS(lo,e):t==="mathml"?Be.createElementNS(io,e):s?Be.createElement(e,{is:s}):Be.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Be.createTextNode(e),createComment:e=>Be.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Be.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,r,l){const i=s?s.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{Dn.innerHTML=rl(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Dn.content;if(n==="svg"||n==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},uo=Symbol("_vtc");function co(e,t,s){const n=e[uo];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Kn=Symbol("_vod"),ao=Symbol("_vsh"),fo=Symbol(""),po=/(?:^|;)\\s*display\\s*:/;function ho(e,t,s){const n=e.style,r=ie(s);let l=!1;if(s&&!r){if(t)if(ie(t))for(const i of t.split(";")){const o=i.slice(0,i.indexOf(":")).trim();s[o]==null&&Kt(n,o,"")}else for(const i in t)s[i]==null&&Kt(n,i,"");for(const i in s){i==="display"&&(l=!0);const o=s[i];o!=null?vo(e,i,!ie(t)&&t?t[i]:void 0,o)||Kt(n,i,o):Kt(n,i,"")}}else if(r){if(t!==s){const i=n[fo];i&&(s+=";"+i),n.cssText=s,l=po.test(s)}}else t&&e.removeAttribute("style");Kn in e&&(e[Kn]=l?n.display:"",e[ao]&&(n.display="none"))}const Ln=/\\s*!important$/;function Kt(e,t,s){if(F(s))s.forEach(n=>Kt(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=go(e,t);Ln.test(s)?e.setProperty(nt(n),s.replace(Ln,""),"important"):e[n]=s}}const jn=["Webkit","Moz","ms"],Ds={};function go(e,t){const s=Ds[t];if(s)return s;let n=Ee(t);if(n!=="filter"&&n in e)return Ds[t]=n;n=nr(n);for(let r=0;r<jn.length;r++){const l=jn[r]+n;if(l in e)return Ds[t]=l}return t}function vo(e,t,s,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ie(n)&&s===n}const Hn="http://www.w3.org/1999/xlink";function Vn(e,t,s,n,r,l=gl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Hn,t.slice(6,t.length)):e.setAttributeNS(Hn,t,s):s==null||l&&!lr(s)?e.removeAttribute(t):e.setAttribute(t,l?"":je(s)?String(s):s)}function Un(e,t,s,n,r){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?rl(s):s);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?e.getAttribute("value")||"":e.value,c=s==null?e.type==="checkbox"?"on":"":String(s);(o!==c||!("_value"in e))&&(e.value=c),s==null&&e.removeAttribute(t),e._value=s;return}let i=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=lr(s):s==null&&o==="string"?(s="",i=!0):o==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(r||t)}function tt(e,t,s,n){e.addEventListener(t,s,n)}function bo(e,t,s,n){e.removeEventListener(t,s,n)}const kn=Symbol("_vei");function mo(e,t,s,n,r=null){const l=e[kn]||(e[kn]={}),i=l[t];if(n&&i)i.value=n;else{const[o,c]=yo(t);if(n){const p=l[t]=wo(n,r);tt(e,o,p,c)}else i&&(bo(e,o,i,c),l[t]=void 0)}}const Bn=/(?:Once|Passive|Capture)$/;function yo(e){let t;if(Bn.test(e)){t={};let n;for(;n=e.match(Bn);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):nt(e.slice(2)),t]}let Ks=0;const _o=Promise.resolve(),xo=()=>Ks||(_o.then(()=>Ks=0),Ks=Date.now());function wo(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;He(So(n,s.value),t,5,[n])};return s.value=e,s.attached=xo(),s}function So(e,t){if(F(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Wn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Co=(e,t,s,n,r,l)=>{const i=r==="svg";t==="class"?co(e,n,i):t==="style"?ho(e,s,n):vs(t)?bs(t)||mo(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):To(e,t,n,i))?(Un(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Vn(e,t,n,i,l,t!=="value")):e._isVueCE&&(Ao(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ie(n)))?Un(e,Ee(t),n,l,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Vn(e,t,n,i))};function To(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wn(t)&&D(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wn(t)&&ie(s)?!1:t in e}function Ao(e,t){const s=e._def.props;if(!s)return!1;const n=Ee(t);return Array.isArray(s)?s.some(r=>Ee(r)===n):Object.keys(s).some(r=>Ee(r)===n)}const Ot=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?s=>is(t,s):t};function Mo(e){e.target.composing=!0}function qn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ze=Symbol("_assign");function Gn(e,t,s){return t&&(e=e.trim()),s&&(e=ys(e)),e}const Ls={created(e,{modifiers:{lazy:t,trim:s,number:n}},r){e[ze]=Ot(r);const l=n||r.props&&r.props.type==="number";tt(e,t?"change":"input",i=>{i.target.composing||e[ze](Gn(e.value,s,l))}),(s||l)&&tt(e,"change",()=>{e.value=Gn(e.value,s,l)}),t||(tt(e,"compositionstart",Mo),tt(e,"compositionend",qn),tt(e,"change",qn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:n,trim:r,number:l}},i){if(e[ze]=Ot(i),e.composing)return;const o=(l||e.type==="number")&&!/^0\\d/.test(e.value)?ys(e.value):e.value,c=t??"";if(o===c)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(n&&t===s||r&&e.value.trim()===c)||(e.value=c)}},Eo={deep:!0,created(e,t,s){e[ze]=Ot(s),tt(e,"change",()=>{const n=e._modelValue,r=Xt(e),l=e.checked,i=e[ze];if(F(n)){const o=en(n,r),c=o!==-1;if(l&&!c)i(n.concat(r));else if(!l&&c){const p=[...n];p.splice(o,1),i(p)}}else if(Pt(n)){const o=new Set(n);l?o.add(r):o.delete(r),i(o)}else i(ll(e,l))})},mounted:zn,beforeUpdate(e,t,s){e[ze]=Ot(s),zn(e,t,s)}};function zn(e,{value:t,oldValue:s},n){e._modelValue=t;let r;if(F(t))r=en(t,n.props.value)>-1;else if(Pt(t))r=t.has(n.props.value);else{if(t===s)return;r=It(t,ll(e,!0))}e.checked!==r&&(e.checked=r)}const Jn={deep:!0,created(e,{value:t,modifiers:{number:s}},n){const r=Pt(t);tt(e,"change",()=>{const l=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>s?ys(Xt(i)):Xt(i));e[ze](e.multiple?r?new Set(l):l:l[0]),e._assigning=!0,Cr(()=>{e._assigning=!1})}),e[ze]=Ot(n)},mounted(e,{value:t}){Yn(e,t)},beforeUpdate(e,t,s){e[ze]=Ot(s)},updated(e,{value:t}){e._assigning||Yn(e,t)}};function Yn(e,t){const s=e.multiple,n=F(t);if(!(s&&!n&&!Pt(t))){for(let r=0,l=e.options.length;r<l;r++){const i=e.options[r],o=Xt(i);if(s)if(n){const c=typeof o;c==="string"||c==="number"?i.selected=t.some(p=>String(p)===String(o)):i.selected=en(t,o)>-1}else i.selected=t.has(o);else if(It(Xt(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Xt(e){return"_value"in e?e._value:e.value}function ll(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Oo=["ctrl","shift","alt","meta"],Po={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Oo.some(s=>e[`${s}Key`]&&!t.includes(s))},Xn=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((r,...l)=>{for(let i=0;i<t.length;i++){const o=Po[t[i]];if(o&&o(r,t))return}return e(r,...l)}))},Io={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ro=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(r=>{if(!("key"in r))return;const l=nt(r.key);if(t.some(i=>i===l||Io[i]===l))return e(r)}))},$o=ae({patchProp:Co},oo);let Zn;function Fo(){return Zn||(Zn=Li($o))}const No=((...e)=>{const t=Fo().createApp(...e),{mount:s}=t;return t.mount=n=>{const r=Ko(n);if(!r)return;const l=t._component;!D(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=s(r,!1,Do(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t});function Do(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ko(e){return ie(e)?document.querySelector(e):e}const Lo={class:"flex flex-col h-screen bg-white text-[13px] font-sans select-none"},jo={class:"flex-1 overflow-y-auto p-4 space-y-4"},Ho={class:"space-y-2"},Vo={class:"flex items-center gap-2"},Uo=["value"],ko=["disabled"],Bo=["disabled"],Wo={key:1,class:"flex items-center gap-2 text-xs text-gray-600 cursor-pointer w-fit"},qo={class:"flex flex-col gap-1"},Go=["disabled"],zo=["value"],Jo={class:"space-y-2 pt-3 border-t border-gray-100"},Yo={class:"flex gap-2"},Xo=["onKeydown"],Zo=["disabled"],Qo={key:0,class:"space-y-2"},eu={class:"flex items-center justify-between"},tu={class:"text-xs text-gray-600"},su={class:"flex items-center gap-2"},nu={class:"max-h-60 overflow-auto border border-gray-200 rounded-lg"},ru=["checked","onChange"],lu={class:"min-w-0 flex-1"},iu={class:"flex items-center gap-1.5 truncate"},ou={class:"text-[12px] font-semibold text-gray-800 truncate"},uu={class:"text-[11px] text-gray-400 font-normal shrink-0"},cu={key:0,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-orange-500 text-white leading-none"},au={class:"text-[11px] text-gray-500 truncate"},fu={key:0,class:"text-[11px] text-gray-400 truncate"},du={key:0,class:"flex flex-wrap gap-1 pt-1"},pu=["onClick"],hu={class:"space-y-2 pt-3 border-t border-gray-100"},gu={class:"text-[12px] font-semibold text-blue-800 truncate"},vu={class:"text-[11px] text-blue-600 mt-0.5"},bu={key:0,class:"mt-2 text-[11px] text-amber-800 leading-relaxed"},mu={key:1,class:"text-[12px] text-gray-500"},yu={key:0,class:"text-xs text-gray-500"},_u={key:1,class:"text-xs text-red-600"},xu={class:"px-4 py-3 border-t border-gray-200"},wu={key:0,class:"text-xs text-red-600 mb-2"},Su={class:"flex gap-2"},Cu=["disabled"],Tu=["disabled"],Au=ri({__name:"App",setup(e){const t=ne(""),s=ne(""),n=ne(!1),r=Me(()=>!s.value.trim()||n.value),l=ne([]),i=ne("manual"),o=ne(""),c=ne([]),p=ne(""),d=ne(""),h=ne([]),C=ne([]),T=ne(new Set),K=ne(null),$=ne(null),Z=ne(!1);let G=null;const L=ne([]),V=Me(()=>new Set(L.value.map(b=>`${b.tabTitle}::${b.rowNumber}`))),P=ne(!1),J=ne(!1),fe=ne(!1),oe=ne(!1),ge=ne(!1),Q=ne(""),ue=ne("");function Qe(b){return String(b??"").trim().toLowerCase().replace(/[#()[\\]{}]/g," ").replace(/[_\\-\\s]+/g,"")}function ht(b,f){const v=b??"",M=f??"",O=v.length,R=M.length;if(O===0)return R;if(R===0)return O;const j=new Array(R+1);for(let H=0;H<=R;H+=1)j[H]=H;for(let H=1;H<=O;H+=1){let U=j[0];j[0]=H;for(let le=1;le<=R;le+=1){const Ue=j[le],be=v[H-1]===M[le-1]?0:1;j[le]=Math.min(j[le]+1,j[le-1]+1,U+be),U=Ue}}return j[R]}function gt(b,f){const v=Qe(b),M=Qe(f);if(!v||!M)return 0;if(v===M)return 1;if(v.includes(M)||M.includes(v))return .92;const O=ht(v,M),R=Math.max(v.length,M.length);return R===0?0:1-O/R}function rt(b,f,v,M=.6){let O="",R=0;for(const j of b){if(v.has(j))continue;let H=0;for(const U of f)H=Math.max(H,gt(j,U));H>R&&(R=H,O=j)}return O&&R>=M?O:""}function ts(){var R,j;const b=((j=(R=K.value)==null?void 0:R.textProperties)==null?void 0:j.map(H=>H.name))??[];if(b.length===0)return;const f=new Set,v=rt(b,["label","title","name","key","header"],f,.55);v&&f.add(v);const M=rt(b,["value","content","text","body"],f,.55);M&&f.add(M);const O=rt(b,["description","desc","helper","hint","subtitle","note"],f,.55);O&&f.add(O)}function se(b){return`${b.tabTitle}::${b.rowNumber}::${b.name}::${b.label}`}function ee(b,f){const v=f.split(",").map(U=>U.trim().toLowerCase()).filter(Boolean);if(v.length===0)return[{text:b,match:!1}];const M=b.toLowerCase(),O=[];for(const U of v){let le=0;for(;le<M.length;){const Ue=M.indexOf(U,le);if(Ue===-1)break;O.push({start:Ue,end:Ue+U.length}),le=Ue+U.length}}if(O.length===0)return[{text:b,match:!1}];O.sort((U,le)=>U.start-le.start);const R=[];for(const U of O)R.length===0||U.start>=R[R.length-1].end?R.push({...U}):R[R.length-1].end=Math.max(R[R.length-1].end,U.end);const j=[];let H=0;for(const{start:U,end:le}of R)H<U&&j.push({text:b.slice(H,U),match:!1}),j.push({text:b.slice(U,le),match:!0}),H=le;return H<b.length&&j.push({text:b.slice(H),match:!1}),j}function z(b){return b.map(f=>({tabTitle:f.tabTitle,rowNumber:f.rowNumber,name:f.name,type:f.type,label:f.label,value:f.value,description:f.description}))}function ve(){G&&clearTimeout(G),G=setTimeout(()=>{if(G=null,!t.value.trim()){$.value=null,Z.value=!1;return}if(!K.value||h.value.length===0){$.value=null,Z.value=!1;return}parent.postMessage({pluginMessage:{type:"sheet-diff-request",url:t.value,currentRows:z(h.value)}},"*")},120)}function lt(){parent.postMessage({pluginMessage:{type:"get-selection"}},"*")}function Ve(){i.value="manual",t.value="",n.value=!1,c.value=[],p.value="",d.value="",h.value=[],C.value=[],T.value=new Set,o.value="",ue.value="",Q.value="\uC791\uC5C5 \uC601\uC5ED\uC744 \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.",P.value=!1,oe.value=!1,J.value=!1,fe.value=!1,$.value=null,Z.value=!1,L.value=[],lt()}function xe(){c.value=[],p.value="",h.value=[],C.value=[],T.value=new Set,d.value="",o.value="",Q.value="",ue.value="",$.value=null,Z.value=!1,L.value=[]}function ss(){if(i.value==="manual"){xe();return}t.value=i.value,xe()}let vt=null;Vt(t,(b,f)=>{i.value==="manual"&&f!==void 0&&(vt&&clearTimeout(vt),vt=setTimeout(()=>{vt=null,xe()},450))});const Ms=Me(()=>{if(P.value)return"\uD638\uCD9C \uC911...";const b=t.value.trim();return b&&o.value===b&&c.value.length>0?"\uC2DC\uD2B8 \uD638\uCD9C":"\uD638\uCD9C\uD558\uAE30"});function it(){parent.postMessage({pluginMessage:{type:"clear-recent-urls"}},"*")}function bt(){ue.value="",Q.value="",o.value="",c.value=[],p.value="",h.value=[],C.value=[],T.value=new Set,P.value=!0,parent.postMessage({pluginMessage:{type:"list-tabs",url:t.value,apiKey:s.value}},"*")}function Rt(){if(!(!t.value.trim()||!s.value.trim())){if(ue.value="",Q.value="",!p.value){h.value=C.value.length?[...C.value]:[],T.value=new Set,Q.value=C.value.length?`\uC804\uCCB4 \uD0ED ${C.value.length}\uAC1C \uD589`:"\uC2DC\uD2B8 \uD638\uCD9C \uD6C4 \uC804\uCCB4 \uD0ED \uBAA9\uB85D\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.";return}oe.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:p.value}},"*")}}function $t(){if(ue.value="",Q.value="",d.value.split(",").map(f=>f.trim()).filter(Boolean).length===0){T.value=new Set,p.value?(oe.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:p.value}},"*")):C.value.length>0&&(h.value=[...C.value],Q.value=`\uC804\uCCB4 ${C.value.length}\uAC1C \uD589`);return}J.value=!0,parent.postMessage({pluginMessage:{type:"search",url:t.value,apiKey:s.value,keyword:d.value,tabTitle:p.value||void 0}},"*")}function ot(){J.value||oe.value||!t.value.trim()||!s.value.trim()||(d.value.trim()||C.value.length>0||p.value)&&$t()}function Es(b){const f=se(b),v=new Set(T.value);v.has(f)?v.delete(f):v.add(f),T.value=v}function u(){const b=V.value;T.value=new Set(h.value.filter(f=>b.has(`${f.tabTitle}::${f.rowNumber}`)).map(se))}function a(){T.value=new Set(h.value.map(se))}function g(){T.value=new Set}const m=Me(()=>{const b=T.value;return h.value.filter(f=>b.has(se(f)))}),y=Me(()=>{if(L.value.length===0)return!1;const b=V.value;return m.value.some(f=>b.has(`${f.tabTitle}::${f.rowNumber}`))}),_=Me(()=>{var b;return((b=K.value)==null?void 0:b.hasMappableSheetProps)===!0}),A=Me(()=>K.value?!_.value:!1),S=Me(()=>{const b=new Map;for(const v of m.value){const M=String(v.label??"").trim(),O=M.length===0?"\\0empty":M;b.set(O,(b.get(O)??0)+1)}const f=[];for(const[v,M]of b)M<2||f.push(v==="\\0empty"?"(\uBE48 label)":v);return f}),w=Me(()=>S.value.length>0),x=Me(()=>!(!K.value||m.value.length===0||!_.value));function I(){if(T.value.size===0)return;const b=new Set(m.value.map(v=>`${v.tabTitle}::${v.rowNumber}`)),f=L.value.filter(v=>b.has(`${v.tabTitle}::${v.rowNumber}`)).map(v=>({oldLabel:v.oldLabel,newLabel:v.newLabel,tabTitle:v.tabTitle,rowNumber:v.rowNumber,value:v.value}));if(f.length===0){Q.value="\uC120\uD0DD\uD55C \uD589 \uC911 \uBCC0\uACBD\uB41C label\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";return}ge.value=!0,ue.value="",Q.value="",parent.postMessage({pluginMessage:{type:"sync-value-changes",valueChangedItems:[],labelChangedItems:f,url:t.value}},"*")}function E(){ue.value="",Q.value="",fe.value=!0;const b=m.value.map(f=>({tabTitle:f.tabTitle,rowNumber:f.rowNumber,name:f.name,type:f.type,label:f.label,value:f.value,description:f.description}));parent.postMessage({pluginMessage:{type:"connect-and-generate",url:t.value,apiKey:s.value,keywordRows:b,snapshotRows:z(h.value),tabScope:p.value||void 0}},"*")}return Vt([h,K,t],()=>ve(),{deep:!0}),Fr(()=>{lt(),parent.postMessage({pluginMessage:{type:"get-settings"}},"*"),window.onmessage=b=>{var v;const f=(v=b.data)==null?void 0:v.pluginMessage;if(f){if(f.type==="settings"){s.value=typeof f.apiKey=="string"?f.apiKey:"",l.value=Array.isArray(f.recentSheets)?f.recentSheets:[];return}if(f.type==="selection"){K.value=f.selection??null,ts(),ve();return}if(f.type==="sheet-diff"){$.value={hasSnapshot:f.hasSnapshot===!0,sameSpreadsheet:f.sameSpreadsheet===!0,added:Array.isArray(f.added)?f.added:[],deleted:Array.isArray(f.deleted)?f.deleted:[],valueChanged:Array.isArray(f.valueChanged)?f.valueChanged:[],labelChanged:Array.isArray(f.labelChanged)?f.labelChanged:[]},Z.value=!1;return}if(f.type==="tabs"){P.value=!1,c.value=Array.isArray(f.tabs)?f.tabs:[];const M=Array.isArray(f.rows)?f.rows:[];C.value=M,h.value=[...M],T.value=new Set,o.value=t.value.trim();const O=Array.isArray(f.labelChanged)?f.labelChanged:[];if(L.value=O,c.value.length===0)Q.value="\uD0ED\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.";else if(M.length===0)Q.value=`\uD0ED ${c.value.length}\uAC1C\uB97C \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. (\uD589 \uB370\uC774\uD130 \uC5C6\uC74C \uB610\uB294 \uC77C\uBD80 \uD0ED\uB9CC \uC77D\uC74C)`;else{const R=V.value.size;Q.value=R>0?`\uD0ED ${c.value.length}\uAC1C \xB7 ${M.length}\uAC1C \uD589 \uBD88\uB7EC\uC634 \xB7 \u26A0\uFE0F label \uBCC0\uACBD ${R}\uAC74 \uAC10\uC9C0`:`\uD0ED ${c.value.length}\uAC1C \xB7 \uC804\uCCB4 ${M.length}\uAC1C \uD589(label/value \uB4F1)\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`}ve();return}if(f.type==="tab-rows"){oe.value=!1,h.value=Array.isArray(f.rows)?f.rows:[],T.value=new Set;const M=Array.isArray(f.labelChanged)?f.labelChanged:[];L.value=M;const O=M.length;Q.value=h.value.length?`${f.tabTitle} \uD0ED\uC5D0\uC11C ${h.value.length}\uAC1C \uD56D\uBAA9\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`+(O>0?` \xB7 \u26A0\uFE0F label \uBCC0\uACBD ${O}\uAC74 \uAC10\uC9C0`:""):`${f.tabTitle} \uD0ED\uC5D0 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`,ve();return}if(f.type==="search-results"){J.value=!1,h.value=Array.isArray(f.rows)?f.rows:[],T.value=new Set,Q.value=h.value.length?`\uAC80\uC0C9 \uACB0\uACFC ${h.value.length}\uAC1C`:"\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",ve();return}if(f.type==="sync-done"){ge.value=!1;const M=typeof f.updated=="number"?f.updated:0;Q.value=M>0?`${M}\uAC1C \uC778\uC2A4\uD134\uC2A4 \uB3D9\uAE30\uD654 \uC644\uB8CC`:"\uB3D9\uAE30\uD654\uD560 \uC778\uC2A4\uD134\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",ve();return}if(f.type==="done"){fe.value=!1;const M=typeof f.appliedInPlace=="number"?f.appliedInPlace:0,O=typeof f.created=="number"?f.created:0;M>0&&O>0?Q.value=`${M}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4 \uAC31\uC2E0 \xB7 ${O}\uAC1C \uBCF5\uC81C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`:M>0&&O===0?Q.value=`${M}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0 \uC644\uB8CC (\uBCF5\uC81C \uC5C6\uC74C)`:Q.value=`${O}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`,ve();return}f.type==="error"&&(P.value=!1,oe.value=!1,J.value=!1,fe.value=!1,ge.value=!1,ue.value=f.message??"\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}}}),(b,f)=>(k(),B("div",Lo,[N("header",{class:"px-4 py-3 border-b border-gray-200 flex items-center justify-between"},[f[6]||(f[6]=N("span",{class:"font-semibold text-gray-900"},"SheetToComponent",-1)),N("button",{class:"text-[12px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:Ve,title:"\uC2DC\uD2B8\xB7\uAC80\uC0C9\xB7\uD589 \uC120\uD0DD \uB4F1 \uC791\uC5C5 \uC601\uC5ED\uC744 \uBE44\uC6C1\uB2C8\uB2E4. API \uD0A4\xB7\uCD5C\uADFC URL\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4."}," \uCD08\uAE30\uD654 ")]),N("main",jo,[N("section",Ho,[f[12]||(f[12]=N("div",{class:"text-[11px] font-semibold text-gray-500 uppercase tracking-wide"},"1) \uC2DC\uD2B8 \uD638\uCD9C",-1)),f[13]||(f[13]=N("p",{class:"text-[10px] text-gray-500 leading-relaxed"}," \uC2DC\uD2B8 \uD638\uCD9C \uC2DC \uD0ED \uBAA9\uB85D\uACFC \uD568\uAED8 \uC804\uCCB4 \uD0ED\uC758 label/value \uD589\uC744 \uD55C \uBC88\uC5D0 \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uD0ED \uBC94\uC704\uC5D0\uC11C \uD2B9\uC815 \uD0ED\uB9CC \uACE0\uB974\uBA74 \uD574\uB2F9 \uD0ED\uB9CC \uB2E4\uC2DC \uC870\uD68C\uD569\uB2C8\uB2E4. ",-1)),N("div",Vo,[yt(N("select",{"onUpdate:modelValue":f[0]||(f[0]=v=>i.value=v),class:"flex-1 min-w-0 text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500",onChange:ss},[f[7]||(f[7]=N("option",{value:"manual"},"\uC9C1\uC811\uC785\uB825",-1)),(k(!0),B(ce,null,_t(l.value,v=>(k(),B("option",{key:v.url,value:v.url},re(v.title),9,Uo))),128))],544),[[Jn,i.value]]),N("button",{type:"button",class:"shrink-0 px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:P.value||!t.value.trim()||!s.value.trim(),onClick:bt},re(Ms.value),9,ko),N("button",{type:"button",class:"px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400",disabled:P.value||J.value||fe.value||l.value.length===0,onClick:it,title:"\uCD5C\uADFC \uC2DC\uD2B8 \uBAA9\uB85D \uBE44\uC6B0\uAE30"}," \uBAA9\uB85D \uBE44\uC6B0\uAE30 ",8,Bo)]),i.value==="manual"?yt((k(),B("input",{key:0,"onUpdate:modelValue":f[1]||(f[1]=v=>t.value=v),type:"text",placeholder:"https://docs.google.com/spreadsheets/d/...",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[Ls,t.value]]):Se("",!0),s.value.trim()?(k(),B("label",Wo,[yt(N("input",{"onUpdate:modelValue":f[2]||(f[2]=v=>n.value=v),type:"checkbox",class:"shrink-0"},null,512),[[Eo,n.value]]),f[8]||(f[8]=wt(" API \uD0A4 \uBCC0\uACBD ",-1))])):Se("",!0),r.value?yt((k(),B("input",{key:2,"onUpdate:modelValue":f[3]||(f[3]=v=>s.value=v),type:"password",placeholder:"Google API Key (AIza...)",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[Ls,s.value]]):Se("",!0),N("div",qo,[f[10]||(f[10]=N("label",{class:"text-xs font-medium text-gray-700"},"\uD0ED \uBC94\uC704",-1)),yt(N("select",{"onUpdate:modelValue":f[4]||(f[4]=v=>p.value=v),class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",disabled:c.value.length===0,onChange:Rt},[f[9]||(f[9]=N("option",{value:""},"\uC804\uCCB4 \uD0ED",-1)),(k(!0),B(ce,null,_t(c.value,v=>(k(),B("option",{key:v.sheetId,value:v.title},re(v.title),9,zo))),128))],40,Go),[[Jn,p.value]]),f[11]||(f[11]=N("p",{class:"text-[10px] text-gray-500"},"\uD2B9\uC815 \uD0ED\uB9CC \uC120\uD0DD\uD558\uBA74 \uADF8 \uD0ED \uD589\uB9CC \uB2E4\uC2DC \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uC804\uCCB4 \uD0ED\uC73C\uB85C \uB3CC\uB9AC\uBA74 \uC2DC\uD2B8 \uD638\uCD9C \uB54C \uBAA8\uC544 \uB454 \uC804\uCCB4 \uD589 \uBAA9\uB85D\uC744 \uB2E4\uC2DC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.",-1))])]),N("section",Jo,[f[15]||(f[15]=N("div",{class:"text-[11px] font-semibold text-gray-500 uppercase tracking-wide"},"2) \uD0A4\uC6CC\uB4DC \uAC80\uC0C9",-1)),N("div",Yo,[yt(N("input",{"onUpdate:modelValue":f[5]||(f[5]=v=>d.value=v),type:"text",placeholder:"name/type/label/value/description\uC5D0\uC11C \uAC80\uC0C9",class:"flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",onKeydown:Ro(Xn(ot,["prevent"]),["enter"])},null,40,Xo),[[Ls,d.value]]),N("button",{class:"px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:J.value||oe.value||!t.value.trim()||!s.value.trim()||!d.value.trim()&&C.value.length===0&&!p.value,onClick:$t},re(J.value?"\uAC80\uC0C9 \uC911...":"\uAC80\uC0C9"),9,Zo)]),h.value.length?(k(),B("div",Qo,[N("div",eu,[N("div",tu," \uACB0\uACFC "+re(h.value.length)+"\uAC1C / \uC120\uD0DD "+re(T.value.size)+"\uAC1C ",1),N("div",su,[L.value.length>0?(k(),B("button",{key:0,class:"text-[11px] px-2 py-1 rounded border border-orange-400 text-orange-700 bg-orange-50 hover:bg-orange-100",onClick:u}," \uC218\uC815\uAC74 \uC120\uD0DD ")):Se("",!0),N("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:a}," \uC804\uCCB4\uC120\uD0DD "),N("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:g}," \uC120\uD0DD\uD574\uC81C ")])]),N("div",nu,[(k(!0),B(ce,null,_t(h.value,v=>(k(),B("label",{key:se(v),class:ft(["flex items-start gap-2 px-3 py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50",V.value.has(`${v.tabTitle}::${v.rowNumber}`)?"bg-orange-50":""])},[N("input",{type:"checkbox",class:"mt-1",checked:T.value.has(se(v)),onChange:M=>Es(v)},null,40,ru),N("div",lu,[N("div",iu,[N("span",ou,[d.value.trim()?(k(!0),B(ce,{key:0},_t(ee(v.label||v.name||"(no label)",d.value),(M,O)=>(k(),B("span",{key:O,class:ft(M.match?"text-blue-500":"")},re(M.text),3))),128)):(k(),B(ce,{key:1},[wt(re(v.label||v.name||"(no label)"),1)],64))]),N("span",uu,"("+re(v.tabTitle)+" / "+re(v.rowNumber)+"\uD589)",1),V.value.has(`${v.tabTitle}::${v.rowNumber}`)?(k(),B("span",cu,"label \uBCC0\uACBD")):Se("",!0)]),N("div",au,[f[14]||(f[14]=wt("value: ",-1)),d.value.trim()?(k(!0),B(ce,{key:0},_t(ee(v.value,d.value),(M,O)=>(k(),B("span",{key:O,class:ft(M.match?"text-blue-500":"")},re(M.text),3))),128)):(k(),B(ce,{key:1},[wt(re(v.value),1)],64))]),v.description?(k(),B("div",fu,"desc: "+re(v.description),1)):Se("",!0)])],2))),128))]),m.value.length>0?(k(),B("div",du,[(k(!0),B(ce,null,_t(m.value,v=>(k(),B("span",{key:se(v),class:"inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200"},[wt(re(v.label||v.name||"(no label)")+" ",1),N("button",{type:"button",class:"text-gray-400 hover:text-gray-600 leading-none",onClick:Xn(M=>Es(v),["prevent"])},"\u2715",8,pu)]))),128))])):Se("",!0)])):Se("",!0)]),N("section",hu,[f[16]||(f[16]=N("div",{class:"text-[11px] font-semibold text-gray-500 uppercase tracking-wide"},"3) \uC5F0\uACB0 \uB300\uC0C1(\uC120\uD0DD)",-1)),N("div",{class:ft(["p-3 rounded-lg border",K.value?"bg-blue-50 border-blue-200":"bg-gray-50 border-gray-200"])},[K.value?(k(),B(ce,{key:0},[N("div",gu,re(K.value.name),1),N("div",vu,re(K.value.kind)+" / TEXT \uD504\uB85C\uD37C\uD2F0 "+re(K.value.textProperties.length)+"\uAC1C ",1),S.value.length>0?(k(),B("p",bu," \uC911\uBCF5\uB41C label\uBA85\uC774 \uC788\uC2B5\uB2C8\uB2E4 : "+re(S.value.join(", ")),1)):Se("",!0)],64)):(k(),B("div",mu," \uC778\uC2A4\uD134\uC2A4(\uB610\uB294 \uC778\uC2A4\uD134\uC2A4\uB97C \uD3EC\uD568\uD55C \uB808\uC774\uC5B4)\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694. "))],2),f[17]||(f[17]=Gi(\'<div class="text-[12px] text-gray-600"><div class="font-semibold text-gray-700 mb-1">\uC790\uB3D9 \uC5F0\uACB0 \uADDC\uCE59</div><div class="text-[11px] text-gray-500 leading-5"> \uC120\uD0DD\uD55C \uCEE8\uD14C\uC774\uB108/\uC778\uC2A4\uD134\uC2A4 \uB0B4\uBD80 \uC778\uC2A4\uD134\uC2A4\uC758 TEXT \uD504\uB85C\uD37C\uD2F0 \uC911 <code class="text-[10px] bg-gray-100 px-1 rounded">label</code>, <code class="text-[10px] bg-gray-100 px-1 rounded">value</code>, <code class="text-[10px] bg-gray-100 px-1 rounded">description</code> \uC774 \uC874\uC7AC\uD558\uBA74 \uAC01\uAC01 \uC2DC\uD2B8\uC758 \uAC12\uC73C\uB85C \uC790\uB3D9 \uC5F0\uACB0\uD569\uB2C8\uB2E4. (2\uAC1C \uC774\uC0C1 \uC788\uC5B4\uB3C4 \uAC01\uAC01 \uC5F0\uACB0) </div></div>\',1))]),Q.value?(k(),B("p",yu,re(Q.value),1)):Se("",!0),ue.value?(k(),B("p",_u,re(ue.value),1)):Se("",!0)]),N("footer",xu,[A.value?(k(),B("p",wu," \uC77C\uCE58\uD558\uB294 \uD504\uB85C\uD37C\uD2F0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 ")):Se("",!0),N("div",Su,[N("button",{class:"flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:!x.value||fe.value,onClick:E},re(fe.value?"\uC0DD\uC131/\uC5F0\uACB0 \uC911...":w.value?`${T.value.size}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0`:`${T.value.size}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0`),9,Cu),y.value||ge.value?(k(),B("button",{key:0,class:"flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400",disabled:ge.value,onClick:I},re(ge.value?"\uB3D9\uAE30\uD654 \uC911...":`\u26A1 ${T.value.size}\uAC1C \uB3D9\uAE30\uD654`),9,Tu)):Se("",!0)])])]))}});No(Au).mount("#app");<\/script>\n    <style rel="stylesheet" crossorigin>/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-600:oklch(57.7% .245 27.325);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-400:oklch(75% .183 55.934);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-800:oklch(47% .157 37.304);--color-orange-900:oklch(40.8% .123 38.172);--color-orange-950:oklch(26.6% .079 36.259);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-200:oklch(92.4% .12 95.746);--color-amber-300:oklch(87.9% .169 91.605);--color-amber-800:oklch(47.3% .137 46.201);--color-amber-900:oklch(41.4% .112 45.904);--color-amber-950:oklch(27.9% .077 45.635);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-700:oklch(50% .134 242.749);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-blue-50:oklch(97% .014 254.604);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--leading-snug:1.375;--leading-relaxed:1.625;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.h-screen{height:100vh}.max-h-24{max-height:calc(var(--spacing) * 24)}.max-h-28{max-height:calc(var(--spacing) * 28)}.max-h-32{max-height:calc(var(--spacing) * 32)}.max-h-36{max-height:calc(var(--spacing) * 36)}.max-h-44{max-height:calc(var(--spacing) * 44)}.max-h-50{max-height:calc(var(--spacing) * 50)}.max-h-60{max-height:calc(var(--spacing) * 60)}.w-fit{width:fit-content}.w-full{width:100%}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-amber-200{border-color:var(--color-amber-200)}.border-amber-300{border-color:var(--color-amber-300)}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-orange-300{border-color:var(--color-orange-300)}.border-orange-400{border-color:var(--color-orange-400)}.border-orange-500{border-color:var(--color-orange-500)}.border-sky-200{border-color:var(--color-sky-200)}.bg-amber-50{background-color:var(--color-amber-50)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-orange-50{background-color:var(--color-orange-50)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-white{background-color:var(--color-white)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pl-1{padding-left:calc(var(--spacing) * 1)}.font-sans{font-family:var(--font-sans)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.text-amber-800{color:var(--color-amber-800)}.text-amber-900{color:var(--color-amber-900)}.text-amber-950{color:var(--color-amber-950)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-orange-700{color:var(--color-orange-700)}.text-orange-800{color:var(--color-orange-800)}.text-orange-900{color:var(--color-orange-900)}.text-orange-950{color:var(--color-orange-950)}.text-red-600{color:var(--color-red-600)}.text-sky-700{color:var(--color-sky-700)}.text-sky-900{color:var(--color-sky-900)}.text-sky-950{color:var(--color-sky-950)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-orange-200{--tw-ring-color:var(--color-orange-200)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media(hover:hover){.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-orange-100:hover{background-color:var(--color-orange-100)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-gray-100:disabled{background-color:var(--color-gray-100)}.disabled\\:bg-gray-300:disabled{background-color:var(--color-gray-300)}.disabled\\:text-gray-400:disabled{color:var(--color-gray-400)}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}</style>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n</html>\n', { width: 460, height: 960, title: "SheetToComponent" });
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
      function parseRowsFromValues(values, tabTitle) {
        if (!values.length) return [];
        const headerRow = values[0];
        const nameIndex = findSheetColumnIndex(headerRow, "name");
        const typeIndex = findSheetColumnIndex(headerRow, "type");
        const labelIndex = findSheetColumnIndex(headerRow, "label");
        const valueIndex = findSheetColumnIndex(headerRow, "value");
        const descIndex = findSheetColumnIndex(headerRow, "description");
        if (nameIndex < 0 || typeIndex < 0 || labelIndex < 0 || valueIndex < 0) {
          throw new Error(
            "\uCCAB \uBC88\uC9F8 \uD589\uC5D0\uC11C name, type, label, value \uD5E4\uB354\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. (\uC5F4 \uC774\uB984\uC740 \uB300\uC18C\uBB38\uC790 \uAD6C\uBD84 \uC5C6\uC74C)"
          );
        }
        return values.slice(1).map((row) => {
          var _a, _b, _c, _d, _e;
          return {
            name: String((_a = row[nameIndex]) != null ? _a : "").trim(),
            type: String((_b = row[typeIndex]) != null ? _b : "").trim(),
            label: String((_c = row[labelIndex]) != null ? _c : "").trim(),
            value: String((_d = row[valueIndex]) != null ? _d : "").trim(),
            description: descIndex >= 0 ? String((_e = row[descIndex]) != null ? _e : "").trim() : ""
          };
        }).filter((r) => r.name.length > 0 || r.label.length > 0);
      }
      function fetchSheetRowsByTabTitle(spreadsheetId, apiKey, tabTitle) {
        return __async(this, null, function* () {
          const range = `${tabTitle}!A:E`;
          const url = `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(range)}?valueRenderOption=UNFORMATTED_VALUE&key=${encodeURIComponent(apiKey)}`;
          const res = yield fetch(url);
          if (!res.ok) throw new Error("\uC2DC\uD2B8 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. URL/\uD0ED \uC774\uB984/\uAD8C\uD55C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694.");
          const data = yield res.json();
          const values = Array.isArray(data == null ? void 0 : data.values) ? data.values : [];
          const str = values.map((r) => r.map((v) => String(v != null ? v : "")));
          const parsed = parseRowsFromValues(str, tabTitle);
          return parsed.map((r, idx) => __spreadValues({
            tabTitle,
            rowNumber: idx + 2
          }, r));
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
        const keywords = keyword.split(",").map((k) => k.trim().toLowerCase()).filter(Boolean);
        if (keywords.length === 0) return false;
        const hay = [row.label, row.value].join(" ").toLowerCase();
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
            figma.ui.postMessage({ type: "tabs", tabs, rows, labelChanged });
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
            figma.ui.postMessage({ type: "tab-rows", tabTitle: msg.tabTitle.trim(), rows, labelChanged });
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
