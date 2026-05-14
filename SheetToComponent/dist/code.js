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
      figma.showUI('<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>SheetToComponent</title>\n    <script type="module" crossorigin>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();/**\n* @vue/shared v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function Zs(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const te={},wt=[],ke=()=>{},Qn=()=>!1,ms=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ys=e=>e.startsWith("onUpdate:"),de=Object.assign,Qs=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},il=Object.prototype.hasOwnProperty,J=(e,t)=>il.call(e,t),N=Array.isArray,St=e=>Zt(e)==="[object Map]",Ot=e=>Zt(e)==="[object Set]",vn=e=>Zt(e)==="[object Date]",K=e=>typeof e=="function",ue=e=>typeof e=="string",Be=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",er=e=>(Z(e)||K(e))&&K(e.then)&&K(e.catch),tr=Object.prototype.toString,Zt=e=>tr.call(e),ol=e=>Zt(e).slice(8,-1),sr=e=>Zt(e)==="[object Object]",en=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kt=Zs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_s=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},ul=/-\\w/g,Re=_s(e=>e.replace(ul,t=>t.slice(1).toUpperCase())),cl=/\\B([A-Z])/g,it=_s(e=>e.replace(cl,"-$1").toLowerCase()),nr=_s(e=>e.charAt(0).toUpperCase()+e.slice(1)),Is=_s(e=>e?`on${nr(e)}`:""),Ve=(e,t)=>!Object.is(e,t),us=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},rr=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let mn;const ws=()=>mn||(mn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(e){if(N(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],r=ue(n)?pl(n):tn(n);if(r)for(const l in r)t[l]=r[l]}return t}else if(ue(e)||Z(e))return e}const al=/;(?![^(]*\\))/g,fl=/:([^]+)/,dl=/\\/\\*[^]*?\\*\\//g;function pl(e){const t={};return e.replace(dl,"").split(al).forEach(s=>{if(s){const n=s.split(fl);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function pt(e){let t="";if(ue(e))t=e;else if(N(e))for(let s=0;s<e.length;s++){const n=pt(e[s]);n&&(t+=n+" ")}else if(Z(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gl=Zs(hl);function lr(e){return!!e||e===""}function bl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=Pt(e[n],t[n]);return s}function Pt(e,t){if(e===t)return!0;let s=vn(e),n=vn(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=Be(e),n=Be(t),s||n)return e===t;if(s=N(e),n=N(t),s||n)return s&&n?bl(e,t):!1;if(s=Z(e),n=Z(t),s||n){if(!s||!n)return!1;const r=Object.keys(e).length,l=Object.keys(t).length;if(r!==l)return!1;for(const i in e){const o=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(o&&!c||!o&&c||!Pt(e[i],t[i]))return!1}}return String(e)===String(t)}function sn(e,t){return e.findIndex(s=>Pt(s,t))}const ir=e=>!!(e&&e.__v_isRef===!0),oe=e=>ue(e)?e:e==null?"":N(e)||Z(e)&&(e.toString===tr||!K(e.toString))?ir(e)?oe(e.value):JSON.stringify(e,or,2):String(e),or=(e,t)=>ir(t)?or(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,r],l)=>(s[Rs(n,l)+" =>"]=r,s),{})}:Ot(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Rs(s))}:Be(t)?Rs(t):Z(t)&&!N(t)&&!sr(t)?String(t):t,Rs=(e,t="")=>{var s;return Be(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**\n* @vue/reactivity v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let ge;class vl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ge,!t&&ge&&(this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=ge;try{return ge=this,t()}finally{ge=s}}}on(){++this._on===1&&(this.prevScope=ge,ge=this)}off(){if(this._on>0&&--this._on===0){if(ge===this)ge=this.prevScope;else{let t=ge;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ml(){return ge}let ne;const $s=new WeakSet;class ur{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ge&&ge.active&&ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$s.has(this)&&($s.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ar(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yn(this),fr(this);const t=ne,s=$e;ne=this,$e=!0;try{return this.fn()}finally{dr(this),ne=t,$e=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ln(t);this.deps=this.depsTail=void 0,yn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$s.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vs(this)&&this.run()}get dirty(){return Vs(this)}}let cr=0,jt,Ht;function ar(e,t=!1){if(e.flags|=8,t){e.next=Ht,Ht=e;return}e.next=jt,jt=e}function nn(){cr++}function rn(){if(--cr>0)return;if(Ht){let t=Ht;for(Ht=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;jt;){let t=jt;for(jt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function fr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function dr(e){let t,s=e.depsTail,n=s;for(;n;){const r=n.prevDep;n.version===-1?(n===s&&(s=r),ln(n),yl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=s}function Vs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function pr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qt)||(e.globalVersion=qt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vs(e))))return;e.flags|=2;const t=e.dep,s=ne,n=$e;ne=e,$e=!0;try{fr(e);const r=e.fn(e._value);(t.version===0||Ve(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ne=s,$e=n,dr(e),e.flags&=-3}}function ln(e,t=!1){const{dep:s,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let l=s.computed.deps;l;l=l.nextDep)ln(l,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function yl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let $e=!0;const hr=[];function Qe(){hr.push($e),$e=!1}function et(){const e=hr.pop();$e=e===void 0?!0:e}function yn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=ne;ne=void 0;try{t()}finally{ne=s}}}let qt=0;class _l{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class on{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!$e||ne===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==ne)s=this.activeLink=new _l(ne,this),ne.deps?(s.prevDep=ne.depsTail,ne.depsTail.nextDep=s,ne.depsTail=s):ne.deps=ne.depsTail=s,gr(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=ne.depsTail,s.nextDep=void 0,ne.depsTail.nextDep=s,ne.depsTail=s,ne.deps===s&&(ne.deps=n)}return s}trigger(t){this.version++,qt++,this.notify(t)}notify(t){nn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{rn()}}}function gr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)gr(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const ks=new WeakMap,ht=Symbol(""),Us=Symbol(""),Gt=Symbol("");function be(e,t,s){if($e&&ne){let n=ks.get(e);n||ks.set(e,n=new Map);let r=n.get(s);r||(n.set(s,r=new on),r.map=n,r.key=s),r.track()}}function Ye(e,t,s,n,r,l){const i=ks.get(e);if(!i){qt++;return}const o=c=>{c&&c.trigger()};if(nn(),t==="clear")i.forEach(o);else{const c=N(e),p=c&&en(s);if(c&&s==="length"){const f=Number(n);i.forEach((h,T)=>{(T==="length"||T===Gt||!Be(T)&&T>=f)&&o(h)})}else switch((s!==void 0||i.has(void 0))&&o(i.get(s)),p&&o(i.get(Gt)),t){case"add":c?p&&o(i.get("length")):(o(i.get(ht)),St(e)&&o(i.get(Us)));break;case"delete":c||(o(i.get(ht)),St(e)&&o(i.get(Us)));break;case"set":St(e)&&o(i.get(ht));break}}rn()}function vt(e){const t=z(e);return t===e?t:(be(t,"iterate",Gt),Ie(e)?t:t.map(Ne))}function Ss(e){return be(e=z(e),"iterate",Gt),e}function je(e,t){return tt(e)?At(gt(e)?Ne(t):t):Ne(t)}const xl={__proto__:null,[Symbol.iterator](){return Ns(this,Symbol.iterator,e=>je(this,e))},concat(...e){return vt(this).concat(...e.map(t=>N(t)?vt(t):t))},entries(){return Ns(this,"entries",e=>(e[1]=je(this,e[1]),e))},every(e,t){return Ge(this,"every",e,t,void 0,arguments)},filter(e,t){return Ge(this,"filter",e,t,s=>s.map(n=>je(this,n)),arguments)},find(e,t){return Ge(this,"find",e,t,s=>je(this,s),arguments)},findIndex(e,t){return Ge(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ge(this,"findLast",e,t,s=>je(this,s),arguments)},findLastIndex(e,t){return Ge(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ge(this,"forEach",e,t,void 0,arguments)},includes(...e){return Fs(this,"includes",e)},indexOf(...e){return Fs(this,"indexOf",e)},join(e){return vt(this).join(e)},lastIndexOf(...e){return Fs(this,"lastIndexOf",e)},map(e,t){return Ge(this,"map",e,t,void 0,arguments)},pop(){return Nt(this,"pop")},push(...e){return Nt(this,"push",e)},reduce(e,...t){return _n(this,"reduce",e,t)},reduceRight(e,...t){return _n(this,"reduceRight",e,t)},shift(){return Nt(this,"shift")},some(e,t){return Ge(this,"some",e,t,void 0,arguments)},splice(...e){return Nt(this,"splice",e)},toReversed(){return vt(this).toReversed()},toSorted(e){return vt(this).toSorted(e)},toSpliced(...e){return vt(this).toSpliced(...e)},unshift(...e){return Nt(this,"unshift",e)},values(){return Ns(this,"values",e=>je(this,e))}};function Ns(e,t,s){const n=Ss(e),r=n[t]();return n!==e&&!Ie(e)&&(r._next=r.next,r.next=()=>{const l=r._next();return l.done||(l.value=s(l.value)),l}),r}const wl=Array.prototype;function Ge(e,t,s,n,r,l){const i=Ss(e),o=i!==e&&!Ie(e),c=i[t];if(c!==wl[t]){const h=c.apply(e,l);return o?Ne(h):h}let p=s;i!==e&&(o?p=function(h,T){return s.call(this,je(e,h),T,e)}:s.length>2&&(p=function(h,T){return s.call(this,h,T,e)}));const f=c.call(i,p,n);return o&&r?r(f):f}function _n(e,t,s,n){const r=Ss(e),l=r!==e&&!Ie(e);let i=s,o=!1;r!==e&&(l?(o=n.length===0,i=function(p,f,h){return o&&(o=!1,p=je(e,p)),s.call(this,p,je(e,f),h,e)}):s.length>3&&(i=function(p,f,h){return s.call(this,p,f,h,e)}));const c=r[t](i,...n);return o?je(e,c):c}function Fs(e,t,s){const n=z(e);be(n,"iterate",Gt);const r=n[t](...s);return(r===-1||r===!1)&&fn(s[0])?(s[0]=z(s[0]),n[t](...s)):r}function Nt(e,t,s=[]){Qe(),nn();const n=z(e)[t].apply(e,s);return rn(),et(),n}const Sl=Zs("__proto__,__v_isRef,__isVue"),br=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Be));function Cl(e){Be(e)||(e=String(e));const t=z(this);return be(t,"has",e),t.hasOwnProperty(e)}class vr{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const r=this._isReadonly,l=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return l;if(s==="__v_raw")return n===(r?l?Nl:xr:l?_r:yr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const i=N(t);if(!r){let c;if(i&&(c=xl[s]))return c;if(s==="hasOwnProperty")return Cl}const o=Reflect.get(t,s,ve(t)?t:n);if((Be(s)?br.has(s):Sl(s))||(r||be(t,"get",s),l))return o;if(ve(o)){const c=i&&en(s)?o:o.value;return r&&Z(c)?Ws(c):c}return Z(o)?r?Ws(o):cn(o):o}}class mr extends vr{constructor(t=!1){super(!1,t)}set(t,s,n,r){let l=t[s];const i=N(t)&&en(s);if(!this._isShallow){const p=tt(l);if(!Ie(n)&&!tt(n)&&(l=z(l),n=z(n)),!i&&ve(l)&&!ve(n))return p||(l.value=n),!0}const o=i?Number(s)<t.length:J(t,s),c=Reflect.set(t,s,n,ve(t)?t:r);return t===z(r)&&(o?Ve(n,l)&&Ye(t,"set",s,n):Ye(t,"add",s,n)),c}deleteProperty(t,s){const n=J(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&n&&Ye(t,"delete",s,void 0),r}has(t,s){const n=Reflect.has(t,s);return(!Be(s)||!br.has(s))&&be(t,"has",s),n}ownKeys(t){return be(t,"iterate",N(t)?"length":ht),Reflect.ownKeys(t)}}class Tl extends vr{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Al=new mr,Ml=new Tl,El=new mr(!0);const Bs=e=>e,ls=e=>Reflect.getPrototypeOf(e);function Ol(e,t,s){return function(...n){const r=this.__v_raw,l=z(r),i=St(l),o=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,p=r[e](...n),f=s?Bs:t?At:Ne;return!t&&be(l,"iterate",c?Us:ht),de(Object.create(p),{next(){const{value:h,done:T}=p.next();return T?{value:h,done:T}:{value:o?[f(h[0]),f(h[1])]:f(h),done:T}}})}}function is(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Pl(e,t){const s={get(r){const l=this.__v_raw,i=z(l),o=z(r);e||(Ve(r,o)&&be(i,"get",r),be(i,"get",o));const{has:c}=ls(i),p=t?Bs:e?At:Ne;if(c.call(i,r))return p(l.get(r));if(c.call(i,o))return p(l.get(o));l!==i&&l.get(r)},get size(){const r=this.__v_raw;return!e&&be(z(r),"iterate",ht),r.size},has(r){const l=this.__v_raw,i=z(l),o=z(r);return e||(Ve(r,o)&&be(i,"has",r),be(i,"has",o)),r===o?l.has(r):l.has(r)||l.has(o)},forEach(r,l){const i=this,o=i.__v_raw,c=z(o),p=t?Bs:e?At:Ne;return!e&&be(c,"iterate",ht),o.forEach((f,h)=>r.call(l,p(f),p(h),i))}};return de(s,e?{add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear")}:{add(r){const l=z(this),i=ls(l),o=z(r),c=!t&&!Ie(r)&&!tt(r)?o:r;return i.has.call(l,c)||Ve(r,c)&&i.has.call(l,r)||Ve(o,c)&&i.has.call(l,o)||(l.add(c),Ye(l,"add",c,c)),this},set(r,l){!t&&!Ie(l)&&!tt(l)&&(l=z(l));const i=z(this),{has:o,get:c}=ls(i);let p=o.call(i,r);p||(r=z(r),p=o.call(i,r));const f=c.call(i,r);return i.set(r,l),p?Ve(l,f)&&Ye(i,"set",r,l):Ye(i,"add",r,l),this},delete(r){const l=z(this),{has:i,get:o}=ls(l);let c=i.call(l,r);c||(r=z(r),c=i.call(l,r)),o&&o.call(l,r);const p=l.delete(r);return c&&Ye(l,"delete",r,void 0),p},clear(){const r=z(this),l=r.size!==0,i=r.clear();return l&&Ye(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=Ol(r,e,t)}),s}function un(e,t){const s=Pl(e,t);return(n,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(J(s,r)&&r in n?s:n,r,l)}const Il={get:un(!1,!1)},Rl={get:un(!1,!0)},$l={get:un(!0,!1)};const yr=new WeakMap,_r=new WeakMap,xr=new WeakMap,Nl=new WeakMap;function Fl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dl(e){return e.__v_skip||!Object.isExtensible(e)?0:Fl(ol(e))}function cn(e){return tt(e)?e:an(e,!1,Al,Il,yr)}function Ll(e){return an(e,!1,El,Rl,_r)}function Ws(e){return an(e,!0,Ml,$l,xr)}function an(e,t,s,n,r){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Dl(e);if(l===0)return e;const i=r.get(e);if(i)return i;const o=new Proxy(e,l===2?n:s);return r.set(e,o),o}function gt(e){return tt(e)?gt(e.__v_raw):!!(e&&e.__v_isReactive)}function tt(e){return!!(e&&e.__v_isReadonly)}function Ie(e){return!!(e&&e.__v_isShallow)}function fn(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function Kl(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&rr(e,"__v_skip",!0),e}const Ne=e=>Z(e)?cn(e):e,At=e=>Z(e)?Ws(e):e;function ve(e){return e?e.__v_isRef===!0:!1}function le(e){return jl(e,!1)}function jl(e,t){return ve(e)?e:new Hl(e,t)}class Hl{constructor(t,s){this.dep=new on,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:z(t),this._value=s?t:Ne(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||Ie(t)||tt(t);t=n?t:z(t),Ve(t,s)&&(this._rawValue=t,this._value=n?t:Ne(t),this.dep.trigger())}}function Vl(e){return ve(e)?e.value:e}const kl={get:(e,t,s)=>t==="__v_raw"?e:Vl(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const r=e[t];return ve(r)&&!ve(s)?(r.value=s,!0):Reflect.set(e,t,s,n)}};function wr(e){return gt(e)?e:new Proxy(e,kl)}class Ul{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new on(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return ar(this,!0),!0}get value(){const t=this.dep.track();return pr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bl(e,t,s=!1){let n,r;return K(e)?n=e:(n=e.get,r=e.set),new Ul(n,r,s)}const os={},ds=new WeakMap;let dt;function Wl(e,t=!1,s=dt){if(s){let n=ds.get(s);n||ds.set(s,n=[]),n.push(e)}}function ql(e,t,s=te){const{immediate:n,deep:r,once:l,scheduler:i,augmentJob:o,call:c}=s,p=I=>r?I:Ie(I)||r===!1||r===0?Xe(I,1):Xe(I);let f,h,T,A,j=!1,R=!1;if(ve(e)?(h=()=>e.value,j=Ie(e)):gt(e)?(h=()=>p(e),j=!0):N(e)?(R=!0,j=e.some(I=>gt(I)||Ie(I)),h=()=>e.map(I=>{if(ve(I))return I.value;if(gt(I))return p(I);if(K(I))return c?c(I,2):I()})):K(e)?t?h=c?()=>c(e,2):e:h=()=>{if(T){Qe();try{T()}finally{et()}}const I=dt;dt=f;try{return c?c(e,3,[A]):e(A)}finally{dt=I}}:h=ke,t&&r){const I=h,ie=r===!0?1/0:r;h=()=>Xe(I(),ie)}const se=ml(),Y=()=>{f.stop(),se&&se.active&&Qs(se.effects,f)};if(l&&t){const I=t;t=(...ie)=>{I(...ie),Y()}}let H=R?new Array(e.length).fill(os):os;const G=I=>{if(!(!(f.flags&1)||!f.dirty&&!I))if(t){const ie=f.run();if(r||j||(R?ie.some((pe,ce)=>Ve(pe,H[ce])):Ve(ie,H))){T&&T();const pe=dt;dt=f;try{const ce=[ie,H===os?void 0:R&&H[0]===os?[]:H,A];H=ie,c?c(t,3,ce):t(...ce)}finally{dt=pe}}}else f.run()};return o&&o(G),f=new ur(h),f.scheduler=i?()=>i(G,!1):G,A=I=>Wl(I,!1,f),T=f.onStop=()=>{const I=ds.get(f);if(I){if(c)c(I,4);else for(const ie of I)ie();ds.delete(f)}},t?n?G(!0):H=f.run():i?i(G.bind(null,!0),!0):f.run(),Y.pause=f.pause.bind(f),Y.resume=f.resume.bind(f),Y.stop=Y,Y}function Xe(e,t=1/0,s){if(t<=0||!Z(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,ve(e))Xe(e.value,t,s);else if(N(e))for(let n=0;n<e.length;n++)Xe(e[n],t,s);else if(Ot(e)||St(e))e.forEach(n=>{Xe(n,t,s)});else if(sr(e)){for(const n in e)Xe(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Xe(e[n],t,s)}return e}/**\n* @vue/runtime-core v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function Qt(e,t,s,n){try{return n?e(...n):e()}catch(r){Cs(r,t,s)}}function We(e,t,s,n){if(K(e)){const r=Qt(e,t,s,n);return r&&er(r)&&r.catch(l=>{Cs(l,t,s)}),r}if(N(e)){const r=[];for(let l=0;l<e.length;l++)r.push(We(e[l],t,s,n));return r}}function Cs(e,t,s,n=!0){const r=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||te;if(t){let o=t.parent;const c=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const f=o.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,c,p)===!1)return}o=o.parent}if(l){Qe(),Qt(l,null,10,[e,c,p]),et();return}}Gl(e,s,r,n,i)}function Gl(e,t,s,n=!0,r=!1){if(r)throw e;console.error(e)}const we=[];let Ke=-1;const Ct=[];let nt=null,_t=0;const Sr=Promise.resolve();let ps=null;function Cr(e){const t=ps||Sr;return e?t.then(this?e.bind(this):e):t}function zl(e){let t=Ke+1,s=we.length;for(;t<s;){const n=t+s>>>1,r=we[n],l=zt(r);l<e||l===e&&r.flags&2?t=n+1:s=n}return t}function dn(e){if(!(e.flags&1)){const t=zt(e),s=we[we.length-1];!s||!(e.flags&2)&&t>=zt(s)?we.push(e):we.splice(zl(t),0,e),e.flags|=1,Tr()}}function Tr(){ps||(ps=Sr.then(Mr))}function Jl(e){N(e)?Ct.push(...e):nt&&e.id===-1?nt.splice(_t+1,0,e):e.flags&1||(Ct.push(e),e.flags|=1),Tr()}function xn(e,t,s=Ke+1){for(;s<we.length;s++){const n=we[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;we.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Ar(e){if(Ct.length){const t=[...new Set(Ct)].sort((s,n)=>zt(s)-zt(n));if(Ct.length=0,nt){nt.push(...t);return}for(nt=t,_t=0;_t<nt.length;_t++){const s=nt[_t];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}nt=null,_t=0}}const zt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Mr(e){try{for(Ke=0;Ke<we.length;Ke++){const t=we[Ke];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Qt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ke<we.length;Ke++){const t=we[Ke];t&&(t.flags&=-2)}Ke=-1,we.length=0,Ar(),ps=null,(we.length||Ct.length)&&Mr()}}let Pe=null,Er=null;function hs(e){const t=Pe;return Pe=e,Er=e&&e.type.__scopeId||null,t}function Yl(e,t=Pe,s){if(!t||e._n)return e;const n=(...r)=>{n._d&&Rn(-1);const l=hs(t);let i;try{i=e(...r)}finally{hs(l),n._d&&Rn(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function mt(e,t){if(Pe===null)return e;const s=Es(Pe),n=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[l,i,o,c=te]=t[r];l&&(K(l)&&(l={mounted:l,updated:l}),l.deep&&Xe(i),n.push({dir:l,instance:s,value:i,oldValue:void 0,arg:o,modifiers:c}))}return e}function at(e,t,s,n){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const o=r[i];l&&(o.oldValue=l[i].value);let c=o.dir[n];c&&(Qe(),We(c,s,8,[e.el,o,e,t]),et())}}function Xl(e,t){if(Se){let s=Se.provides;const n=Se.parent&&Se.parent.provides;n===s&&(s=Se.provides=Object.create(n)),s[e]=t}}function cs(e,t,s=!1){const n=Zi();if(n||Tt){let r=Tt?Tt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&K(t)?t.call(n&&n.proxy):t}}const Zl=Symbol.for("v-scx"),Ql=()=>cs(Zl);function Vt(e,t,s){return Or(e,t,s)}function Or(e,t,s=te){const{immediate:n,deep:r,flush:l,once:i}=s,o=de({},s),c=t&&n||!t&&l!=="post";let p;if(Yt){if(l==="sync"){const A=Ql();p=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=ke,A.resume=ke,A.pause=ke,A}}const f=Se;o.call=(A,j,R)=>We(A,f,j,R);let h=!1;l==="post"?o.scheduler=A=>{Te(A,f&&f.suspense)}:l!=="sync"&&(h=!0,o.scheduler=(A,j)=>{j?A():dn(A)}),o.augmentJob=A=>{t&&(A.flags|=4),h&&(A.flags|=2,f&&(A.id=f.uid,A.i=f))};const T=ql(e,t,o);return Yt&&(p?p.push(T):c&&T()),T}function ei(e,t,s){const n=this.proxy,r=ue(e)?e.includes(".")?Pr(n,e):()=>n[e]:e.bind(n,n);let l;K(t)?l=t:(l=t.handler,s=t);const i=es(this),o=Or(r,l.bind(n),s);return i(),o}function Pr(e,t){const s=t.split(".");return()=>{let n=e;for(let r=0;r<s.length&&n;r++)n=n[s[r]];return n}}const ti=Symbol("_vte"),si=e=>e.__isTeleport,ni=Symbol("_leaveCb");function pn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,pn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ri(e,t){return K(e)?de({name:e.name},t,{setup:e}):e}function Ir(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function wn(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const gs=new WeakMap;function kt(e,t,s,n,r=!1){if(N(e)){e.forEach((R,se)=>kt(R,t&&(N(t)?t[se]:t),s,n,r));return}if(Ut(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&kt(e,t,s,n.component.subTree);return}const l=n.shapeFlag&4?Es(n.component):n.el,i=r?null:l,{i:o,r:c}=e,p=t&&t.r,f=o.refs===te?o.refs={}:o.refs,h=o.setupState,T=z(h),A=h===te?Qn:R=>wn(f,R)?!1:J(T,R),j=(R,se)=>!(se&&wn(f,se));if(p!=null&&p!==c){if(Sn(t),ue(p))f[p]=null,A(p)&&(h[p]=null);else if(ve(p)){const R=t;j(p,R.k)&&(p.value=null),R.k&&(f[R.k]=null)}}if(K(c))Qt(c,o,12,[i,f]);else{const R=ue(c),se=ve(c);if(R||se){const Y=()=>{if(e.f){const H=R?A(c)?h[c]:f[c]:j()||!e.k?c.value:f[e.k];if(r)N(H)&&Qs(H,l);else if(N(H))H.includes(l)||H.push(l);else if(R)f[c]=[l],A(c)&&(h[c]=f[c]);else{const G=[l];j(c,e.k)&&(c.value=G),e.k&&(f[e.k]=G)}}else R?(f[c]=i,A(c)&&(h[c]=i)):se&&(j(c,e.k)&&(c.value=i),e.k&&(f[e.k]=i))};if(i){const H=()=>{Y(),gs.delete(e)};H.id=-1,gs.set(e,H),Te(H,s)}else Sn(e),Y()}}}function Sn(e){const t=gs.get(e);t&&(t.flags|=8,gs.delete(e))}ws().requestIdleCallback;ws().cancelIdleCallback;const Ut=e=>!!e.type.__asyncLoader,Rr=e=>e.type.__isKeepAlive;function li(e,t){$r(e,"a",t)}function ii(e,t){$r(e,"da",t)}function $r(e,t,s=Se){const n=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ts(t,n,s),s){let r=s.parent;for(;r&&r.parent;)Rr(r.parent.vnode)&&oi(n,t,s,r),r=r.parent}}function oi(e,t,s,n){const r=Ts(t,e,n,!0);Fr(()=>{Qs(n[t],r)},s)}function Ts(e,t,s=Se,n=!1){if(s){const r=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...i)=>{Qe();const o=es(s),c=We(t,s,e,i);return o(),et(),c});return n?r.unshift(l):r.push(l),l}}const st=e=>(t,s=Se)=>{(!Yt||e==="sp")&&Ts(e,(...n)=>t(...n),s)},ui=st("bm"),Nr=st("m"),ci=st("bu"),ai=st("u"),fi=st("bum"),Fr=st("um"),di=st("sp"),pi=st("rtg"),hi=st("rtc");function gi(e,t=Se){Ts("ec",e,t)}const bi=Symbol.for("v-ndc");function yt(e,t,s,n){let r;const l=s,i=N(e);if(i||ue(e)){const o=i&&gt(e);let c=!1,p=!1;o&&(c=!Ie(e),p=tt(e),e=Ss(e)),r=new Array(e.length);for(let f=0,h=e.length;f<h;f++)r[f]=t(c?p?At(Ne(e[f])):Ne(e[f]):e[f],f,void 0,l)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,l)}else if(Z(e))if(e[Symbol.iterator])r=Array.from(e,(o,c)=>t(o,c,void 0,l));else{const o=Object.keys(e);r=new Array(o.length);for(let c=0,p=o.length;c<p;c++){const f=o[c];r[c]=t(e[f],f,c,l)}}else r=[];return r}const qs=e=>e?sl(e)?Es(e):qs(e.parent):null,Bt=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qs(e.parent),$root:e=>qs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Lr(e),$forceUpdate:e=>e.f||(e.f=()=>{dn(e.update)}),$nextTick:e=>e.n||(e.n=Cr.bind(e.proxy)),$watch:e=>ei.bind(e)}),Ds=(e,t)=>e!==te&&!e.__isScriptSetup&&J(e,t),vi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:r,props:l,accessCache:i,type:o,appContext:c}=e;if(t[0]!=="$"){const T=i[t];if(T!==void 0)switch(T){case 1:return n[t];case 2:return r[t];case 4:return s[t];case 3:return l[t]}else{if(Ds(n,t))return i[t]=1,n[t];if(r!==te&&J(r,t))return i[t]=2,r[t];if(J(l,t))return i[t]=3,l[t];if(s!==te&&J(s,t))return i[t]=4,s[t];Gs&&(i[t]=0)}}const p=Bt[t];let f,h;if(p)return t==="$attrs"&&be(e.attrs,"get",""),p(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(s!==te&&J(s,t))return i[t]=4,s[t];if(h=c.config.globalProperties,J(h,t))return h[t]},set({_:e},t,s){const{data:n,setupState:r,ctx:l}=e;return Ds(r,t)?(r[t]=s,!0):n!==te&&J(n,t)?(n[t]=s,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:r,props:l,type:i}},o){let c;return!!(s[o]||e!==te&&o[0]!=="$"&&J(e,o)||Ds(t,o)||J(l,o)||J(n,o)||J(Bt,o)||J(r.config.globalProperties,o)||(c=i.__cssModules)&&c[o])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:J(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Cn(e){return N(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Gs=!0;function mi(e){const t=Lr(e),s=e.proxy,n=e.ctx;Gs=!1,t.beforeCreate&&Tn(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:o,provide:c,inject:p,created:f,beforeMount:h,mounted:T,beforeUpdate:A,updated:j,activated:R,deactivated:se,beforeDestroy:Y,beforeUnmount:H,destroyed:G,unmounted:I,render:ie,renderTracked:pe,renderTriggered:ce,errorCaptured:he,serverPrefetch:Ee,expose:Ce,inheritAttrs:Q,components:me,directives:ot,filters:It}=t;if(p&&yi(p,n,null),i)for(const re in i){const V=i[re];K(V)&&(n[re]=V.bind(s))}if(r){const re=r.call(s,s);Z(re)&&(e.data=cn(re))}if(Gs=!0,l)for(const re in l){const V=l[re],Fe=K(V)?V.bind(s,s):K(V.get)?V.get.bind(s,s):ke,ut=!K(V)&&K(V.set)?V.set.bind(s):ke,ye=Oe({get:Fe,set:ut});Object.defineProperty(n,re,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ae=>ye.value=Ae})}if(o)for(const re in o)Dr(o[re],n,s,re);if(c){const re=K(c)?c.call(s):c;Reflect.ownKeys(re).forEach(V=>{Xl(V,re[V])})}f&&Tn(f,e,"c");function ae(re,V){N(V)?V.forEach(Fe=>re(Fe.bind(s))):V&&re(V.bind(s))}if(ae(ui,h),ae(Nr,T),ae(ci,A),ae(ai,j),ae(li,R),ae(ii,se),ae(gi,he),ae(hi,pe),ae(pi,ce),ae(fi,H),ae(Fr,I),ae(di,Ee),N(Ce))if(Ce.length){const re=e.exposed||(e.exposed={});Ce.forEach(V=>{Object.defineProperty(re,V,{get:()=>s[V],set:Fe=>s[V]=Fe,enumerable:!0})})}else e.exposed||(e.exposed={});ie&&e.render===ke&&(e.render=ie),Q!=null&&(e.inheritAttrs=Q),me&&(e.components=me),ot&&(e.directives=ot),Ee&&Ir(e)}function yi(e,t,s=ke){N(e)&&(e=zs(e));for(const n in e){const r=e[n];let l;Z(r)?"default"in r?l=cs(r.from||n,r.default,!0):l=cs(r.from||n):l=cs(r),ve(l)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[n]=l}}function Tn(e,t,s){We(N(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Dr(e,t,s,n){let r=n.includes(".")?Pr(s,n):()=>s[n];if(ue(e)){const l=t[e];K(l)&&Vt(r,l)}else if(K(e))Vt(r,e.bind(s));else if(Z(e))if(N(e))e.forEach(l=>Dr(l,t,s,n));else{const l=K(e.handler)?e.handler.bind(s):t[e.handler];K(l)&&Vt(r,l,e)}}function Lr(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,o=l.get(t);let c;return o?c=o:!r.length&&!s&&!n?c=t:(c={},r.length&&r.forEach(p=>bs(c,p,i,!0)),bs(c,t,i)),Z(t)&&l.set(t,c),c}function bs(e,t,s,n=!1){const{mixins:r,extends:l}=t;l&&bs(e,l,s,!0),r&&r.forEach(i=>bs(e,i,s,!0));for(const i in t)if(!(n&&i==="expose")){const o=_i[i]||s&&s[i];e[i]=o?o(e[i],t[i]):t[i]}return e}const _i={data:An,props:Mn,emits:Mn,methods:Dt,computed:Dt,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:Dt,directives:Dt,watch:wi,provide:An,inject:xi};function An(e,t){return t?e?function(){return de(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function xi(e,t){return Dt(zs(e),zs(t))}function zs(e){if(N(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?de(Object.create(null),e,t):t}function Mn(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:de(Object.create(null),Cn(e),Cn(t??{})):t}function wi(e,t){if(!e)return t;if(!t)return e;const s=de(Object.create(null),e);for(const n in t)s[n]=xe(e[n],t[n]);return s}function Kr(){return{app:null,config:{isNativeTag:Qn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Si=0;function Ci(e,t){return function(n,r=null){K(n)||(n=de({},n)),r!=null&&!Z(r)&&(r=null);const l=Kr(),i=new WeakSet,o=[];let c=!1;const p=l.app={_uid:Si++,_component:n,_props:r,_container:null,_context:l,_instance:null,version:ro,get config(){return l.config},set config(f){},use(f,...h){return i.has(f)||(f&&K(f.install)?(i.add(f),f.install(p,...h)):K(f)&&(i.add(f),f(p,...h))),p},mixin(f){return l.mixins.includes(f)||l.mixins.push(f),p},component(f,h){return h?(l.components[f]=h,p):l.components[f]},directive(f,h){return h?(l.directives[f]=h,p):l.directives[f]},mount(f,h,T){if(!c){const A=p._ceVNode||Ue(n,r);return A.appContext=l,T===!0?T="svg":T===!1&&(T=void 0),e(A,f,T),c=!0,p._container=f,f.__vue_app__=p,Es(A.component)}},onUnmount(f){o.push(f)},unmount(){c&&(We(o,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(f,h){return l.provides[f]=h,p},runWithContext(f){const h=Tt;Tt=p;try{return f()}finally{Tt=h}}};return p}}let Tt=null;const Ti=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Re(t)}Modifiers`]||e[`${it(t)}Modifiers`];function Ai(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||te;let r=s;const l=t.startsWith("update:"),i=l&&Ti(n,t.slice(7));i&&(i.trim&&(r=s.map(f=>ue(f)?f.trim():f)),i.number&&(r=s.map(xs)));let o,c=n[o=Is(t)]||n[o=Is(Re(t))];!c&&l&&(c=n[o=Is(it(t))]),c&&We(c,e,6,r);const p=n[o+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,We(p,e,6,r)}}const Mi=new WeakMap;function jr(e,t,s=!1){const n=s?Mi:t.emitsCache,r=n.get(e);if(r!==void 0)return r;const l=e.emits;let i={},o=!1;if(!K(e)){const c=p=>{const f=jr(p,t,!0);f&&(o=!0,de(i,f))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!o?(Z(e)&&n.set(e,null),null):(N(l)?l.forEach(c=>i[c]=null):de(i,l),Z(e)&&n.set(e,i),i)}function As(e,t){return!e||!ms(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,it(t))||J(e,t))}function En(e){const{type:t,vnode:s,proxy:n,withProxy:r,propsOptions:[l],slots:i,attrs:o,emit:c,render:p,renderCache:f,props:h,data:T,setupState:A,ctx:j,inheritAttrs:R}=e,se=hs(e);let Y,H;try{if(s.shapeFlag&4){const I=r||n,ie=I;Y=He(p.call(ie,I,f,h,A,T,j)),H=o}else{const I=t;Y=He(I.length>1?I(h,{attrs:o,slots:i,emit:c}):I(h,null)),H=t.props?o:Ei(o)}}catch(I){Wt.length=0,Cs(I,e,1),Y=Ue(lt)}let G=Y;if(H&&R!==!1){const I=Object.keys(H),{shapeFlag:ie}=G;I.length&&ie&7&&(l&&I.some(ys)&&(H=Oi(H,l)),G=Mt(G,H,!1,!0))}return s.dirs&&(G=Mt(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(s.dirs):s.dirs),s.transition&&pn(G,s.transition),Y=G,hs(se),Y}const Ei=e=>{let t;for(const s in e)(s==="class"||s==="style"||ms(s))&&((t||(t={}))[s]=e[s]);return t},Oi=(e,t)=>{const s={};for(const n in e)(!ys(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Pi(e,t,s){const{props:n,children:r,component:l}=e,{props:i,children:o,patchFlag:c}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return n?On(n,i,p):!!i;if(c&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const T=f[h];if(Hr(i,n,T)&&!As(p,T))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===i?!1:n?i?On(n,i,p):!0:!!i;return!1}function On(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const l=n[r];if(Hr(t,e,l)&&!As(s,l))return!0}return!1}function Hr(e,t,s){const n=e[s],r=t[s];return s==="style"&&Z(n)&&Z(r)?!Pt(n,r):n!==r}function Ii({vnode:e,parent:t,suspense:s},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=n,e=r),r===e)(e=t.vnode).el=n,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=n)}const Vr={},kr=()=>Object.create(Vr),Ur=e=>Object.getPrototypeOf(e)===Vr;function Ri(e,t,s,n=!1){const r={},l=kr();e.propsDefaults=Object.create(null),Br(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);s?e.props=n?r:Ll(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function $i(e,t,s,n){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,o=z(r),[c]=e.propsOptions;let p=!1;if((n||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let T=f[h];if(As(e.emitsOptions,T))continue;const A=t[T];if(c)if(J(l,T))A!==l[T]&&(l[T]=A,p=!0);else{const j=Re(T);r[j]=Js(c,o,j,A,e,!1)}else A!==l[T]&&(l[T]=A,p=!0)}}}else{Br(e,t,r,l)&&(p=!0);let f;for(const h in o)(!t||!J(t,h)&&((f=it(h))===h||!J(t,f)))&&(c?s&&(s[h]!==void 0||s[f]!==void 0)&&(r[h]=Js(c,o,h,void 0,e,!0)):delete r[h]);if(l!==o)for(const h in l)(!t||!J(t,h))&&(delete l[h],p=!0)}p&&Ye(e.attrs,"set","")}function Br(e,t,s,n){const[r,l]=e.propsOptions;let i=!1,o;if(t)for(let c in t){if(Kt(c))continue;const p=t[c];let f;r&&J(r,f=Re(c))?!l||!l.includes(f)?s[f]=p:(o||(o={}))[f]=p:As(e.emitsOptions,c)||(!(c in n)||p!==n[c])&&(n[c]=p,i=!0)}if(l){const c=z(s),p=o||te;for(let f=0;f<l.length;f++){const h=l[f];s[h]=Js(r,c,h,p[h],e,!J(p,h))}}return i}function Js(e,t,s,n,r,l){const i=e[s];if(i!=null){const o=J(i,"default");if(o&&n===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&K(c)){const{propsDefaults:p}=r;if(s in p)n=p[s];else{const f=es(r);n=p[s]=c.call(null,t),f()}}else n=c;r.ce&&r.ce._setProp(s,n)}i[0]&&(l&&!o?n=!1:i[1]&&(n===""||n===it(s))&&(n=!0))}return n}const Ni=new WeakMap;function Wr(e,t,s=!1){const n=s?Ni:t.propsCache,r=n.get(e);if(r)return r;const l=e.props,i={},o=[];let c=!1;if(!K(e)){const f=h=>{c=!0;const[T,A]=Wr(h,t,!0);de(i,T),A&&o.push(...A)};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!l&&!c)return Z(e)&&n.set(e,wt),wt;if(N(l))for(let f=0;f<l.length;f++){const h=Re(l[f]);Pn(h)&&(i[h]=te)}else if(l)for(const f in l){const h=Re(f);if(Pn(h)){const T=l[f],A=i[h]=N(T)||K(T)?{type:T}:de({},T),j=A.type;let R=!1,se=!0;if(N(j))for(let Y=0;Y<j.length;++Y){const H=j[Y],G=K(H)&&H.name;if(G==="Boolean"){R=!0;break}else G==="String"&&(se=!1)}else R=K(j)&&j.name==="Boolean";A[0]=R,A[1]=se,(R||J(A,"default"))&&o.push(h)}}const p=[i,o];return Z(e)&&n.set(e,p),p}function Pn(e){return e[0]!=="$"&&!Kt(e)}const hn=e=>e==="_"||e==="_ctx"||e==="$stable",gn=e=>N(e)?e.map(He):[He(e)],Fi=(e,t,s)=>{if(t._n)return t;const n=Yl((...r)=>gn(t(...r)),s);return n._c=!1,n},qr=(e,t,s)=>{const n=e._ctx;for(const r in e){if(hn(r))continue;const l=e[r];if(K(l))t[r]=Fi(r,l,n);else if(l!=null){const i=gn(l);t[r]=()=>i}}},Gr=(e,t)=>{const s=gn(t);e.slots.default=()=>s},zr=(e,t,s)=>{for(const n in t)(s||!hn(n))&&(e[n]=t[n])},Di=(e,t,s)=>{const n=e.slots=kr();if(e.vnode.shapeFlag&32){const r=t._;r?(zr(n,t,s),s&&rr(n,"_",r,!0)):qr(t,n)}else t&&Gr(e,t)},Li=(e,t,s)=>{const{vnode:n,slots:r}=e;let l=!0,i=te;if(n.shapeFlag&32){const o=t._;o?s&&o===1?l=!1:zr(r,t,s):(l=!t.$stable,qr(t,r)),i=t}else t&&(Gr(e,t),i={default:1});if(l)for(const o in r)!hn(o)&&i[o]==null&&delete r[o]},Te=ki;function Ki(e){return ji(e)}function ji(e,t){const s=ws();s.__VUE__=!0;const{insert:n,remove:r,patchProp:l,createElement:i,createText:o,createComment:c,setText:p,setElementText:f,parentNode:h,nextSibling:T,setScopeId:A=ke,insertStaticContent:j}=e,R=(u,a,g,_=null,v=null,m=null,S=void 0,C=null,w=!!a.dynamicChildren)=>{if(u===a)return;u&&!Ft(u,a)&&(_=bt(u),Ae(u,v,m,!0),u=null),a.patchFlag===-2&&(w=!1,a.dynamicChildren=null);const{type:y,ref:P,shapeFlag:M}=a;switch(y){case Ms:se(u,a,g,_);break;case lt:Y(u,a,g,_);break;case as:u==null&&H(a,g,_,S);break;case fe:me(u,a,g,_,v,m,S,C,w);break;default:M&1?ie(u,a,g,_,v,m,S,C,w):M&6?ot(u,a,g,_,v,m,S,C,w):(M&64||M&128)&&y.process(u,a,g,_,v,m,S,C,w,ct)}P!=null&&v?kt(P,u&&u.ref,m,a||u,!a):P==null&&u&&u.ref!=null&&kt(u.ref,null,m,u,!0)},se=(u,a,g,_)=>{if(u==null)n(a.el=o(a.children),g,_);else{const v=a.el=u.el;a.children!==u.children&&p(v,a.children)}},Y=(u,a,g,_)=>{u==null?n(a.el=c(a.children||""),g,_):a.el=u.el},H=(u,a,g,_)=>{[u.el,u.anchor]=j(u.children,a,g,_,u.el,u.anchor)},G=({el:u,anchor:a},g,_)=>{let v;for(;u&&u!==a;)v=T(u),n(u,g,_),u=v;n(a,g,_)},I=({el:u,anchor:a})=>{let g;for(;u&&u!==a;)g=T(u),r(u),u=g;r(a)},ie=(u,a,g,_,v,m,S,C,w)=>{if(a.type==="svg"?S="svg":a.type==="math"&&(S="mathml"),u==null)pe(a,g,_,v,m,S,C,w);else{const y=u.el&&u.el._isVueCE?u.el:null;try{y&&y._beginPatch(),Ee(u,a,v,m,S,C,w)}finally{y&&y._endPatch()}}},pe=(u,a,g,_,v,m,S,C)=>{let w,y;const{props:P,shapeFlag:M,transition:O,dirs:$}=u;if(w=u.el=i(u.type,m,P&&P.is,P),M&8?f(w,u.children):M&16&&he(u.children,w,null,_,v,Ls(u,m),S,C),$&&at(u,null,_,"created"),ce(w,u,u.scopeId,S,_),P){for(const x in P)x!=="value"&&!Kt(x)&&l(w,x,null,P[x],m,_);"value"in P&&l(w,"value",null,P.value,m),(y=P.onVnodeBeforeMount)&&Le(y,_,u)}$&&at(u,null,_,"beforeMount");const k=Hi(v,O);k&&O.beforeEnter(w),n(w,a,g),((y=P&&P.onVnodeMounted)||k||$)&&Te(()=>{try{y&&Le(y,_,u),k&&O.enter(w),$&&at(u,null,_,"mounted")}finally{}},v)},ce=(u,a,g,_,v)=>{if(g&&A(u,g),_)for(let m=0;m<_.length;m++)A(u,_[m]);if(v){let m=v.subTree;if(a===m||Zr(m.type)&&(m.ssContent===a||m.ssFallback===a)){const S=v.vnode;ce(u,S,S.scopeId,S.slotScopeIds,v.parent)}}},he=(u,a,g,_,v,m,S,C,w=0)=>{for(let y=w;y<u.length;y++){const P=u[y]=C?Je(u[y]):He(u[y]);R(null,P,a,g,_,v,m,S,C)}},Ee=(u,a,g,_,v,m,S)=>{const C=a.el=u.el;let{patchFlag:w,dynamicChildren:y,dirs:P}=a;w|=u.patchFlag&16;const M=u.props||te,O=a.props||te;let $;if(g&&ft(g,!1),($=O.onVnodeBeforeUpdate)&&Le($,g,a,u),P&&at(a,u,g,"beforeUpdate"),g&&ft(g,!0),(M.innerHTML&&O.innerHTML==null||M.textContent&&O.textContent==null)&&f(C,""),y?Ce(u.dynamicChildren,y,C,g,_,Ls(a,v),m):S||V(u,a,C,null,g,_,Ls(a,v),m,!1),w>0){if(w&16)Q(C,M,O,g,v);else if(w&2&&M.class!==O.class&&l(C,"class",null,O.class,v),w&4&&l(C,"style",M.style,O.style,v),w&8){const k=a.dynamicProps;for(let x=0;x<k.length;x++){const d=k[x],b=M[d],E=O[d];(E!==b||d==="value")&&l(C,d,b,E,v,g)}}w&1&&u.children!==a.children&&f(C,a.children)}else!S&&y==null&&Q(C,M,O,g,v);(($=O.onVnodeUpdated)||P)&&Te(()=>{$&&Le($,g,a,u),P&&at(a,u,g,"updated")},_)},Ce=(u,a,g,_,v,m,S)=>{for(let C=0;C<a.length;C++){const w=u[C],y=a[C],P=w.el&&(w.type===fe||!Ft(w,y)||w.shapeFlag&198)?h(w.el):g;R(w,y,P,null,_,v,m,S,!0)}},Q=(u,a,g,_,v)=>{if(a!==g){if(a!==te)for(const m in a)!Kt(m)&&!(m in g)&&l(u,m,a[m],null,v,_);for(const m in g){if(Kt(m))continue;const S=g[m],C=a[m];S!==C&&m!=="value"&&l(u,m,C,S,v,_)}"value"in g&&l(u,"value",a.value,g.value,v)}},me=(u,a,g,_,v,m,S,C,w)=>{const y=a.el=u?u.el:o(""),P=a.anchor=u?u.anchor:o("");let{patchFlag:M,dynamicChildren:O,slotScopeIds:$}=a;$&&(C=C?C.concat($):$),u==null?(n(y,g,_),n(P,g,_),he(a.children||[],g,P,v,m,S,C,w)):M>0&&M&64&&O&&u.dynamicChildren&&u.dynamicChildren.length===O.length?(Ce(u.dynamicChildren,O,g,v,m,S,C),(a.key!=null||v&&a===v.subTree)&&Jr(u,a,!0)):V(u,a,g,P,v,m,S,C,w)},ot=(u,a,g,_,v,m,S,C,w)=>{a.slotScopeIds=C,u==null?a.shapeFlag&512?v.ctx.activate(a,g,_,S,w):It(a,g,_,v,m,S,w):ts(u,a,w)},It=(u,a,g,_,v,m,S)=>{const C=u.component=Xi(u,_,v);if(Rr(u)&&(C.ctx.renderer=ct),Qi(C,!1,S),C.asyncDep){if(v&&v.registerDep(C,ae,S),!u.el){const w=C.subTree=Ue(lt);Y(null,w,a,g),u.placeholder=w.el}}else ae(C,u,a,g,v,m,S)},ts=(u,a,g)=>{const _=a.component=u.component;if(Pi(u,a,g))if(_.asyncDep&&!_.asyncResolved){re(_,a,g);return}else _.next=a,_.update();else a.el=u.el,_.vnode=a},ae=(u,a,g,_,v,m,S)=>{const C=()=>{if(u.isMounted){let{next:M,bu:O,u:$,parent:k,vnode:x}=u;{const L=Yr(u);if(L){M&&(M.el=x.el,re(u,M,S)),L.asyncDep.then(()=>{Te(()=>{u.isUnmounted||y()},v)});return}}let d=M,b;ft(u,!1),M?(M.el=x.el,re(u,M,S)):M=x,O&&us(O),(b=M.props&&M.props.onVnodeBeforeUpdate)&&Le(b,k,M,x),ft(u,!0);const E=En(u),D=u.subTree;u.subTree=E,R(D,E,h(D.el),bt(D),u,v,m),M.el=E.el,d===null&&Ii(u,E.el),$&&Te($,v),(b=M.props&&M.props.onVnodeUpdated)&&Te(()=>Le(b,k,M,x),v)}else{let M;const{el:O,props:$}=a,{bm:k,m:x,parent:d,root:b,type:E}=u,D=Ut(a);ft(u,!1),k&&us(k),!D&&(M=$&&$.onVnodeBeforeMount)&&Le(M,d,a),ft(u,!0);{b.ce&&b.ce._hasShadowRoot()&&b.ce._injectChildStyle(E,u.parent?u.parent.type:void 0);const L=u.subTree=En(u);R(null,L,g,_,u,v,m),a.el=L.el}if(x&&Te(x,v),!D&&(M=$&&$.onVnodeMounted)){const L=a;Te(()=>Le(M,d,L),v)}(a.shapeFlag&256||d&&Ut(d.vnode)&&d.vnode.shapeFlag&256)&&u.a&&Te(u.a,v),u.isMounted=!0,a=g=_=null}};u.scope.on();const w=u.effect=new ur(C);u.scope.off();const y=u.update=w.run.bind(w),P=u.job=w.runIfDirty.bind(w);P.i=u,P.id=u.uid,w.scheduler=()=>dn(P),ft(u,!0),y()},re=(u,a,g)=>{a.component=u;const _=u.vnode.props;u.vnode=a,u.next=null,$i(u,a.props,_,g),Li(u,a.children,g),Qe(),xn(u),et()},V=(u,a,g,_,v,m,S,C,w=!1)=>{const y=u&&u.children,P=u?u.shapeFlag:0,M=a.children,{patchFlag:O,shapeFlag:$}=a;if(O>0){if(O&128){ut(y,M,g,_,v,m,S,C,w);return}else if(O&256){Fe(y,M,g,_,v,m,S,C,w);return}}$&8?(P&16&&De(y,v,m),M!==y&&f(g,M)):P&16?$&16?ut(y,M,g,_,v,m,S,C,w):De(y,v,m,!0):(P&8&&f(g,""),$&16&&he(M,g,_,v,m,S,C,w))},Fe=(u,a,g,_,v,m,S,C,w)=>{u=u||wt,a=a||wt;const y=u.length,P=a.length,M=Math.min(y,P);let O;for(O=0;O<M;O++){const $=a[O]=w?Je(a[O]):He(a[O]);R(u[O],$,g,null,v,m,S,C,w)}y>P?De(u,v,m,!0,!1,M):he(a,g,_,v,m,S,C,w,M)},ut=(u,a,g,_,v,m,S,C,w)=>{let y=0;const P=a.length;let M=u.length-1,O=P-1;for(;y<=M&&y<=O;){const $=u[y],k=a[y]=w?Je(a[y]):He(a[y]);if(Ft($,k))R($,k,g,null,v,m,S,C,w);else break;y++}for(;y<=M&&y<=O;){const $=u[M],k=a[O]=w?Je(a[O]):He(a[O]);if(Ft($,k))R($,k,g,null,v,m,S,C,w);else break;M--,O--}if(y>M){if(y<=O){const $=O+1,k=$<P?a[$].el:_;for(;y<=O;)R(null,a[y]=w?Je(a[y]):He(a[y]),g,k,v,m,S,C,w),y++}}else if(y>O)for(;y<=M;)Ae(u[y],v,m,!0),y++;else{const $=y,k=y,x=new Map;for(y=k;y<=O;y++){const U=a[y]=w?Je(a[y]):He(a[y]);U.key!=null&&x.set(U.key,y)}let d,b=0;const E=O-k+1;let D=!1,L=0;const W=new Array(E);for(y=0;y<E;y++)W[y]=0;for(y=$;y<=M;y++){const U=u[y];if(b>=E){Ae(U,v,m,!0);continue}let ee;if(U.key!=null)ee=x.get(U.key);else for(d=k;d<=O;d++)if(W[d-k]===0&&Ft(U,a[d])){ee=d;break}ee===void 0?Ae(U,v,m,!0):(W[ee-k]=y+1,ee>=L?L=ee:D=!0,R(U,a[ee],g,null,v,m,S,C,w),b++)}const X=D?Vi(W):wt;for(d=X.length-1,y=E-1;y>=0;y--){const U=k+y,ee=a[U],qe=a[U+1],rs=U+1<P?qe.el||Xr(qe):_;W[y]===0?R(null,ee,g,rs,v,m,S,C,w):D&&(d<0||y!==X[d]?ye(ee,g,rs,2):d--)}}},ye=(u,a,g,_,v=null)=>{const{el:m,type:S,transition:C,children:w,shapeFlag:y}=u;if(y&6){ye(u.component.subTree,a,g,_);return}if(y&128){u.suspense.move(a,g,_);return}if(y&64){S.move(u,a,g,ct);return}if(S===fe){n(m,a,g);for(let M=0;M<w.length;M++)ye(w[M],a,g,_);n(u.anchor,a,g);return}if(S===as){G(u,a,g);return}if(_!==2&&y&1&&C)if(_===0)C.beforeEnter(m),n(m,a,g),Te(()=>C.enter(m),v);else{const{leave:M,delayLeave:O,afterLeave:$}=C,k=()=>{u.ctx.isUnmounted?r(m):n(m,a,g)},x=()=>{m._isLeaving&&m[ni](!0),M(m,()=>{k(),$&&$()})};O?O(m,k,x):x()}else n(m,a,g)},Ae=(u,a,g,_=!1,v=!1)=>{const{type:m,props:S,ref:C,children:w,dynamicChildren:y,shapeFlag:P,patchFlag:M,dirs:O,cacheIndex:$,memo:k}=u;if(M===-2&&(v=!1),C!=null&&(Qe(),kt(C,null,g,u,!0),et()),$!=null&&(a.renderCache[$]=void 0),P&256){a.ctx.deactivate(u);return}const x=P&1&&O,d=!Ut(u);let b;if(d&&(b=S&&S.onVnodeBeforeUnmount)&&Le(b,a,u),P&6)Os(u.component,g,_);else{if(P&128){u.suspense.unmount(g,_);return}x&&at(u,null,a,"beforeUnmount"),P&64?u.type.remove(u,a,g,ct,_):y&&!y.hasOnce&&(m!==fe||M>0&&M&64)?De(y,a,g,!1,!0):(m===fe&&M&384||!v&&P&16)&&De(w,a,g),_&&ss(u)}const E=k!=null&&$==null;(d&&(b=S&&S.onVnodeUnmounted)||x||E)&&Te(()=>{b&&Le(b,a,u),x&&at(u,null,a,"unmounted"),E&&(u.el=null)},g)},ss=u=>{const{type:a,el:g,anchor:_,transition:v}=u;if(a===fe){Rt(g,_);return}if(a===as){I(u);return}const m=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:C}=v,w=()=>S(g,m);C?C(u.el,m,w):w()}else m()},Rt=(u,a)=>{let g;for(;u!==a;)g=T(u),r(u),u=g;r(a)},Os=(u,a,g)=>{const{bum:_,scope:v,job:m,subTree:S,um:C,m:w,a:y}=u;In(w),In(y),_&&us(_),v.stop(),m&&(m.flags|=8,Ae(S,u,a,g)),C&&Te(C,a),Te(()=>{u.isUnmounted=!0},a)},De=(u,a,g,_=!1,v=!1,m=0)=>{for(let S=m;S<u.length;S++)Ae(u[S],a,g,_,v)},bt=u=>{if(u.shapeFlag&6)return bt(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const a=T(u.anchor||u.el),g=a&&a[ti];return g?T(g):a};let $t=!1;const ns=(u,a,g)=>{let _;u==null?a._vnode&&(Ae(a._vnode,null,null,!0),_=a._vnode.component):R(a._vnode||null,u,a,null,null,null,g),a._vnode=u,$t||($t=!0,xn(_),Ar(),$t=!1)},ct={p:R,um:Ae,m:ye,r:ss,mt:It,mc:he,pc:V,pbc:Ce,n:bt,o:e};return{render:ns,hydrate:void 0,createApp:Ci(ns)}}function Ls({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ft({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Jr(e,t,s=!1){const n=e.children,r=t.children;if(N(n)&&N(r))for(let l=0;l<n.length;l++){const i=n[l];let o=r[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[l]=Je(r[l]),o.el=i.el),!s&&o.patchFlag!==-2&&Jr(i,o)),o.type===Ms&&(o.patchFlag===-1&&(o=r[l]=Je(o)),o.el=i.el),o.type===lt&&!o.el&&(o.el=i.el)}}function Vi(e){const t=e.slice(),s=[0];let n,r,l,i,o;const c=e.length;for(n=0;n<c;n++){const p=e[n];if(p!==0){if(r=s[s.length-1],e[r]<p){t[n]=r,s.push(n);continue}for(l=0,i=s.length-1;l<i;)o=l+i>>1,e[s[o]]<p?l=o+1:i=o;p<e[s[l]]&&(l>0&&(t[n]=s[l-1]),s[l]=n)}}for(l=s.length,i=s[l-1];l-- >0;)s[l]=i,i=t[i];return s}function Yr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Yr(t)}function In(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Xr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Xr(t.subTree):null}const Zr=e=>e.__isSuspense;function ki(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):Jl(e)}const fe=Symbol.for("v-fgt"),Ms=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Wt=[];let Me=null;function B(e=!1){Wt.push(Me=e?null:[])}function Ui(){Wt.pop(),Me=Wt[Wt.length-1]||null}let Jt=1;function Rn(e,t=!1){Jt+=e,e<0&&Me&&t&&(Me.hasOnce=!0)}function Qr(e){return e.dynamicChildren=Jt>0?Me||wt:null,Ui(),Jt>0&&Me&&Me.push(e),e}function q(e,t,s,n,r,l){return Qr(F(e,t,s,n,r,l,!0))}function Bi(e,t,s,n,r){return Qr(Ue(e,t,s,n,r,!0))}function el(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const tl=({key:e})=>e??null,fs=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||ve(e)||K(e)?{i:Pe,r:e,k:t,f:!!s}:e:null);function F(e,t=null,s=null,n=0,r=null,l=e===fe?0:1,i=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&tl(t),ref:t&&fs(t),scopeId:Er,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return o?(bn(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=ue(s)?8:16),Jt>0&&!i&&Me&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Me.push(c),c}const Ue=Wi;function Wi(e,t=null,s=null,n=0,r=null,l=!1){if((!e||e===bi)&&(e=lt),el(e)){const o=Mt(e,t,!0);return s&&bn(o,s),Jt>0&&!l&&Me&&(o.shapeFlag&6?Me[Me.indexOf(e)]=o:Me.push(o)),o.patchFlag=-2,o}if(no(e)&&(e=e.__vccOpts),t){t=qi(t);let{class:o,style:c}=t;o&&!ue(o)&&(t.class=pt(o)),Z(c)&&(fn(c)&&!N(c)&&(c=de({},c)),t.style=tn(c))}const i=ue(e)?1:Zr(e)?128:si(e)?64:Z(e)?4:K(e)?2:0;return F(e,t,s,n,r,i,l,!0)}function qi(e){return e?fn(e)||Ur(e)?de({},e):e:null}function Mt(e,t,s=!1,n=!1){const{props:r,ref:l,patchFlag:i,children:o,transition:c}=e,p=t?zi(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&tl(p),ref:t&&t.ref?s&&l?N(l)?l.concat(fs(t)):[l,fs(t)]:fs(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&pn(f,c.clone(f)),f}function xt(e=" ",t=0){return Ue(Ms,null,e,t)}function Gi(e,t){const s=Ue(as,null,e);return s.staticCount=t,s}function _e(e="",t=!1){return t?(B(),Bi(lt,null,e)):Ue(lt,null,e)}function He(e){return e==null||typeof e=="boolean"?Ue(lt):N(e)?Ue(fe,null,e.slice()):el(e)?Je(e):Ue(Ms,null,String(e))}function Je(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function bn(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(N(t))s=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),bn(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!Ur(t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:Pe},s=32):(t=String(t),n&64?(s=16,t=[xt(t)]):s=8);e.children=t,e.shapeFlag|=s}function zi(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=pt([t.class,n.class]));else if(r==="style")t.style=tn([t.style,n.style]);else if(ms(r)){const l=t[r],i=n[r];i&&l!==i&&!(N(l)&&l.includes(i))?t[r]=l?[].concat(l,i):i:i==null&&l==null&&!ys(r)&&(t[r]=i)}else r!==""&&(t[r]=n[r])}return t}function Le(e,t,s,n=null){We(e,t,7,[s,n])}const Ji=Kr();let Yi=0;function Xi(e,t,s){const n=e.type,r=(t?t.appContext:e.appContext)||Ji,l={uid:Yi++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wr(n,r),emitsOptions:jr(n,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:n.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Ai.bind(null,l),e.ce&&e.ce(l),l}let Se=null;const Zi=()=>Se||Pe;let vs,Ys;{const e=ws(),t=(s,n)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(n),l=>{r.length>1?r.forEach(i=>i(l)):r[0](l)}};vs=t("__VUE_INSTANCE_SETTERS__",s=>Se=s),Ys=t("__VUE_SSR_SETTERS__",s=>Yt=s)}const es=e=>{const t=Se;return vs(e),e.scope.on(),()=>{e.scope.off(),vs(t)}},$n=()=>{Se&&Se.scope.off(),vs(null)};function sl(e){return e.vnode.shapeFlag&4}let Yt=!1;function Qi(e,t=!1,s=!1){t&&Ys(t);const{props:n,children:r}=e.vnode,l=sl(e);Ri(e,n,l,t),Di(e,r,s||t);const i=l?eo(e,t):void 0;return t&&Ys(!1),i}function eo(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vi);const{setup:n}=s;if(n){Qe();const r=e.setupContext=n.length>1?so(e):null,l=es(e),i=Qt(n,e,0,[e.props,r]),o=er(i);if(et(),l(),(o||e.sp)&&!Ut(e)&&Ir(e),o){if(i.then($n,$n),t)return i.then(c=>{Nn(e,c)}).catch(c=>{Cs(c,e,0)});e.asyncDep=i}else Nn(e,i)}else nl(e)}function Nn(e,t,s){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=wr(t)),nl(e)}function nl(e,t,s){const n=e.type;e.render||(e.render=n.render||ke);{const r=es(e);Qe();try{mi(e)}finally{et(),r()}}}const to={get(e,t){return be(e,"get",""),e[t]}};function so(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,to),slots:e.slots,emit:e.emit,expose:t}}function Es(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wr(Kl(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Bt)return Bt[s](e)},has(t,s){return s in t||s in Bt}})):e.proxy}function no(e){return K(e)&&"__vccOpts"in e}const Oe=(e,t)=>Bl(e,t,Yt),ro="3.5.33";/**\n* @vue/runtime-dom v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let Xs;const Fn=typeof window<"u"&&window.trustedTypes;if(Fn)try{Xs=Fn.createPolicy("vue",{createHTML:e=>e})}catch{}const rl=Xs?e=>Xs.createHTML(e):e=>e,lo="http://www.w3.org/2000/svg",io="http://www.w3.org/1998/Math/MathML",ze=typeof document<"u"?document:null,Dn=ze&&ze.createElement("template"),oo={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const r=t==="svg"?ze.createElementNS(lo,e):t==="mathml"?ze.createElementNS(io,e):s?ze.createElement(e,{is:s}):ze.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>ze.createTextNode(e),createComment:e=>ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,r,l){const i=s?s.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{Dn.innerHTML=rl(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Dn.content;if(n==="svg"||n==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},uo=Symbol("_vtc");function co(e,t,s){const n=e[uo];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Ln=Symbol("_vod"),ao=Symbol("_vsh"),fo=Symbol(""),po=/(?:^|;)\\s*display\\s*:/;function ho(e,t,s){const n=e.style,r=ue(s);let l=!1;if(s&&!r){if(t)if(ue(t))for(const i of t.split(";")){const o=i.slice(0,i.indexOf(":")).trim();s[o]==null&&Lt(n,o,"")}else for(const i in t)s[i]==null&&Lt(n,i,"");for(const i in s){i==="display"&&(l=!0);const o=s[i];o!=null?bo(e,i,!ue(t)&&t?t[i]:void 0,o)||Lt(n,i,o):Lt(n,i,"")}}else if(r){if(t!==s){const i=n[fo];i&&(s+=";"+i),n.cssText=s,l=po.test(s)}}else t&&e.removeAttribute("style");Ln in e&&(e[Ln]=l?n.display:"",e[ao]&&(n.display="none"))}const Kn=/\\s*!important$/;function Lt(e,t,s){if(N(s))s.forEach(n=>Lt(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=go(e,t);Kn.test(s)?e.setProperty(it(n),s.replace(Kn,""),"important"):e[n]=s}}const jn=["Webkit","Moz","ms"],Ks={};function go(e,t){const s=Ks[t];if(s)return s;let n=Re(t);if(n!=="filter"&&n in e)return Ks[t]=n;n=nr(n);for(let r=0;r<jn.length;r++){const l=jn[r]+n;if(l in e)return Ks[t]=l}return t}function bo(e,t,s,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ue(n)&&s===n}const Hn="http://www.w3.org/1999/xlink";function Vn(e,t,s,n,r,l=gl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Hn,t.slice(6,t.length)):e.setAttributeNS(Hn,t,s):s==null||l&&!lr(s)?e.removeAttribute(t):e.setAttribute(t,l?"":Be(s)?String(s):s)}function kn(e,t,s,n,r){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?rl(s):s);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?e.getAttribute("value")||"":e.value,c=s==null?e.type==="checkbox"?"on":"":String(s);(o!==c||!("_value"in e))&&(e.value=c),s==null&&e.removeAttribute(t),e._value=s;return}let i=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=lr(s):s==null&&o==="string"?(s="",i=!0):o==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(r||t)}function rt(e,t,s,n){e.addEventListener(t,s,n)}function vo(e,t,s,n){e.removeEventListener(t,s,n)}const Un=Symbol("_vei");function mo(e,t,s,n,r=null){const l=e[Un]||(e[Un]={}),i=l[t];if(n&&i)i.value=n;else{const[o,c]=yo(t);if(n){const p=l[t]=wo(n,r);rt(e,o,p,c)}else i&&(vo(e,o,i,c),l[t]=void 0)}}const Bn=/(?:Once|Passive|Capture)$/;function yo(e){let t;if(Bn.test(e)){t={};let n;for(;n=e.match(Bn);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):it(e.slice(2)),t]}let js=0;const _o=Promise.resolve(),xo=()=>js||(_o.then(()=>js=0),js=Date.now());function wo(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;We(So(n,s.value),t,5,[n])};return s.value=e,s.attached=xo(),s}function So(e,t){if(N(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Wn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Co=(e,t,s,n,r,l)=>{const i=r==="svg";t==="class"?co(e,n,i):t==="style"?ho(e,s,n):ms(t)?ys(t)||mo(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):To(e,t,n,i))?(kn(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Vn(e,t,n,i,l,t!=="value")):e._isVueCE&&(Ao(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ue(n)))?kn(e,Re(t),n,l,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Vn(e,t,n,i))};function To(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wn(t)&&K(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wn(t)&&ue(s)?!1:t in e}function Ao(e,t){const s=e._def.props;if(!s)return!1;const n=Re(t);return Array.isArray(s)?s.some(r=>Re(r)===n):Object.keys(s).some(r=>Re(r)===n)}const Et=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?s=>us(t,s):t};function Mo(e){e.target.composing=!0}function qn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ze=Symbol("_assign");function Gn(e,t,s){return t&&(e=e.trim()),s&&(e=xs(e)),e}const Hs={created(e,{modifiers:{lazy:t,trim:s,number:n}},r){e[Ze]=Et(r);const l=n||r.props&&r.props.type==="number";rt(e,t?"change":"input",i=>{i.target.composing||e[Ze](Gn(e.value,s,l))}),(s||l)&&rt(e,"change",()=>{e.value=Gn(e.value,s,l)}),t||(rt(e,"compositionstart",Mo),rt(e,"compositionend",qn),rt(e,"change",qn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:n,trim:r,number:l}},i){if(e[Ze]=Et(i),e.composing)return;const o=(l||e.type==="number")&&!/^0\\d/.test(e.value)?xs(e.value):e.value,c=t??"";if(o===c)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(n&&t===s||r&&e.value.trim()===c)||(e.value=c)}},Eo={deep:!0,created(e,t,s){e[Ze]=Et(s),rt(e,"change",()=>{const n=e._modelValue,r=Xt(e),l=e.checked,i=e[Ze];if(N(n)){const o=sn(n,r),c=o!==-1;if(l&&!c)i(n.concat(r));else if(!l&&c){const p=[...n];p.splice(o,1),i(p)}}else if(Ot(n)){const o=new Set(n);l?o.add(r):o.delete(r),i(o)}else i(ll(e,l))})},mounted:zn,beforeUpdate(e,t,s){e[Ze]=Et(s),zn(e,t,s)}};function zn(e,{value:t,oldValue:s},n){e._modelValue=t;let r;if(N(t))r=sn(t,n.props.value)>-1;else if(Ot(t))r=t.has(n.props.value);else{if(t===s)return;r=Pt(t,ll(e,!0))}e.checked!==r&&(e.checked=r)}const Jn={deep:!0,created(e,{value:t,modifiers:{number:s}},n){const r=Ot(t);rt(e,"change",()=>{const l=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>s?xs(Xt(i)):Xt(i));e[Ze](e.multiple?r?new Set(l):l:l[0]),e._assigning=!0,Cr(()=>{e._assigning=!1})}),e[Ze]=Et(n)},mounted(e,{value:t}){Yn(e,t)},beforeUpdate(e,t,s){e[Ze]=Et(s)},updated(e,{value:t}){e._assigning||Yn(e,t)}};function Yn(e,t){const s=e.multiple,n=N(t);if(!(s&&!n&&!Ot(t))){for(let r=0,l=e.options.length;r<l;r++){const i=e.options[r],o=Xt(i);if(s)if(n){const c=typeof o;c==="string"||c==="number"?i.selected=t.some(p=>String(p)===String(o)):i.selected=sn(t,o)>-1}else i.selected=t.has(o);else if(Pt(Xt(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Xt(e){return"_value"in e?e._value:e.value}function ll(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Oo=["ctrl","shift","alt","meta"],Po={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Oo.some(s=>e[`${s}Key`]&&!t.includes(s))},Xn=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((r,...l)=>{for(let i=0;i<t.length;i++){const o=Po[t[i]];if(o&&o(r,t))return}return e(r,...l)}))},Io={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ro=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(r=>{if(!("key"in r))return;const l=it(r.key);if(t.some(i=>i===l||Io[i]===l))return e(r)}))},$o=de({patchProp:Co},oo);let Zn;function No(){return Zn||(Zn=Ki($o))}const Fo=((...e)=>{const t=No().createApp(...e),{mount:s}=t;return t.mount=n=>{const r=Lo(n);if(!r)return;const l=t._component;!K(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=s(r,!1,Do(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t});function Do(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Lo(e){return ue(e)?document.querySelector(e):e}const Ko={class:"flex flex-col h-screen bg-white text-[13px] font-sans select-none"},jo={class:"flex-1 overflow-y-auto p-4 space-y-4"},Ho={class:"space-y-2"},Vo={class:"flex items-center gap-2"},ko=["value"],Uo=["disabled"],Bo=["disabled"],Wo={key:1,class:"flex items-center gap-2 text-xs text-gray-600 cursor-pointer w-fit"},qo={class:"flex flex-col gap-1"},Go=["disabled"],zo=["value"],Jo={class:"space-y-2 pt-3 border-t border-gray-100"},Yo={class:"flex gap-2"},Xo=["onKeydown"],Zo=["disabled"],Qo={key:0,class:"space-y-2"},eu={class:"flex items-center justify-between"},tu={class:"text-xs text-gray-600"},su={class:"flex items-center gap-2"},nu={class:"max-h-60 overflow-auto border border-gray-200 rounded-lg"},ru=["checked","onChange"],lu={class:"min-w-0 flex-1"},iu={class:"flex items-center gap-1.5 truncate"},ou={class:"text-[12px] font-semibold text-gray-800 truncate"},uu={class:"text-[11px] text-gray-400 font-normal shrink-0"},cu={key:0,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-orange-500 text-white leading-none"},au={key:1,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-blue-500 text-white leading-none"},fu={class:"text-[11px] text-gray-500 truncate"},du={key:0,class:"text-[11px] text-gray-400 truncate"},pu={key:0,class:"flex flex-wrap gap-1 pt-1"},hu=["onClick"],gu={class:"space-y-2 pt-3 border-t border-gray-100"},bu={class:"text-[12px] font-semibold text-blue-800 truncate"},vu={class:"text-[11px] text-blue-600 mt-0.5"},mu={key:0,class:"mt-2 text-[11px] text-amber-800 leading-relaxed"},yu={key:1,class:"text-[12px] text-gray-500"},_u={key:0,class:"text-xs text-gray-500"},xu={key:1,class:"text-xs text-red-600"},wu={class:"px-4 py-3 border-t border-gray-200"},Su={key:0,class:"text-xs text-red-600 mb-2"},Cu={class:"flex gap-2"},Tu=["disabled"],Au=["disabled"],Mu=ri({__name:"App",setup(e){const t=le(""),s=le(""),n=le(!1),r=Oe(()=>!s.value.trim()||n.value),l=le([]),i=le("manual"),o=le(""),c=le([]),p=le(""),f=le(""),h=le([]),T=le([]),A=le(new Set),j=le(null),R=le(null),se=le(!1);let Y=null;const H=le([]),G=Oe(()=>new Set(H.value.map(x=>`${x.tabTitle}::${x.rowNumber}`))),I=le([]),ie=Oe(()=>new Set(I.value.map(x=>`${x.tabTitle}::${x.rowNumber}`))),pe=le(!1),ce=le(!1),he=le(!1),Ee=le(!1),Ce=le(!1),Q=le(""),me=le("");function ot(x){return String(x??"").trim().toLowerCase().replace(/[#()[\\]{}]/g," ").replace(/[_\\-\\s]+/g,"")}function It(x,d){const b=x??"",E=d??"",D=b.length,L=E.length;if(D===0)return L;if(L===0)return D;const W=new Array(L+1);for(let X=0;X<=L;X+=1)W[X]=X;for(let X=1;X<=D;X+=1){let U=W[0];W[0]=X;for(let ee=1;ee<=L;ee+=1){const qe=W[ee],rs=b[X-1]===E[ee-1]?0:1;W[ee]=Math.min(W[ee]+1,W[ee-1]+1,U+rs),U=qe}}return W[L]}function ts(x,d){const b=ot(x),E=ot(d);if(!b||!E)return 0;if(b===E)return 1;if(b.includes(E)||E.includes(b))return .92;const D=It(b,E),L=Math.max(b.length,E.length);return L===0?0:1-D/L}function ae(x,d,b,E=.6){let D="",L=0;for(const W of x){if(b.has(W))continue;let X=0;for(const U of d)X=Math.max(X,ts(W,U));X>L&&(L=X,D=W)}return D&&L>=E?D:""}function re(){var L,W;const x=((W=(L=j.value)==null?void 0:L.textProperties)==null?void 0:W.map(X=>X.name))??[];if(x.length===0)return;const d=new Set,b=ae(x,["label","title","name","key","header"],d,.55);b&&d.add(b);const E=ae(x,["value","content","text","body"],d,.55);E&&d.add(E);const D=ae(x,["description","desc","helper","hint","subtitle","note"],d,.55);D&&d.add(D)}function V(x){return`${x.tabTitle}::${x.rowNumber}::${x.name}::${x.label}`}function Fe(x,d){const b=d.split(",").map(U=>U.trim().toLowerCase()).filter(Boolean);if(b.length===0)return[{text:x,match:!1}];const E=x.toLowerCase(),D=[];for(const U of b){let ee=0;for(;ee<E.length;){const qe=E.indexOf(U,ee);if(qe===-1)break;D.push({start:qe,end:qe+U.length}),ee=qe+U.length}}if(D.length===0)return[{text:x,match:!1}];D.sort((U,ee)=>U.start-ee.start);const L=[];for(const U of D)L.length===0||U.start>=L[L.length-1].end?L.push({...U}):L[L.length-1].end=Math.max(L[L.length-1].end,U.end);const W=[];let X=0;for(const{start:U,end:ee}of L)X<U&&W.push({text:x.slice(X,U),match:!1}),W.push({text:x.slice(U,ee),match:!0}),X=ee;return X<x.length&&W.push({text:x.slice(X),match:!1}),W}function ut(x){return x.map(d=>({tabTitle:d.tabTitle,rowNumber:d.rowNumber,name:d.name,type:d.type,label:d.label,value:d.value,description:d.description}))}function ye(){Y&&clearTimeout(Y),Y=setTimeout(()=>{if(Y=null,!t.value.trim()){R.value=null,se.value=!1;return}if(!j.value||h.value.length===0){R.value=null,se.value=!1;return}parent.postMessage({pluginMessage:{type:"sheet-diff-request",url:t.value,currentRows:ut(h.value)}},"*")},120)}function Ae(){parent.postMessage({pluginMessage:{type:"get-selection"}},"*")}function ss(){i.value="manual",t.value="",n.value=!1,c.value=[],p.value="",f.value="",h.value=[],T.value=[],A.value=new Set,o.value="",me.value="",Q.value="\uC791\uC5C5 \uC601\uC5ED\uC744 \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.",pe.value=!1,Ee.value=!1,ce.value=!1,he.value=!1,R.value=null,se.value=!1,H.value=[],Ae()}function Rt(){c.value=[],p.value="",h.value=[],T.value=[],A.value=new Set,f.value="",o.value="",Q.value="",me.value="",R.value=null,se.value=!1,H.value=[]}function Os(){if(i.value==="manual"){Rt();return}t.value=i.value,Rt()}let De=null;Vt(t,(x,d)=>{i.value==="manual"&&d!==void 0&&(De&&clearTimeout(De),De=setTimeout(()=>{De=null,Rt()},450))});const bt=Oe(()=>{if(pe.value)return"\uD638\uCD9C \uC911...";const x=t.value.trim();return x&&o.value===x&&c.value.length>0?"\uC2DC\uD2B8 \uD638\uCD9C":"\uD638\uCD9C\uD558\uAE30"});function $t(){parent.postMessage({pluginMessage:{type:"clear-recent-urls"}},"*")}function ns(){me.value="",Q.value="",o.value="",c.value=[],p.value="",h.value=[],T.value=[],A.value=new Set,pe.value=!0,parent.postMessage({pluginMessage:{type:"list-tabs",url:t.value,apiKey:s.value}},"*")}function ct(){if(!(!t.value.trim()||!s.value.trim())){if(me.value="",Q.value="",!p.value){h.value=T.value.length?[...T.value]:[],A.value=new Set,Q.value=T.value.length?`\uC804\uCCB4 \uD0ED ${T.value.length}\uAC1C \uD589`:"\uC2DC\uD2B8 \uD638\uCD9C \uD6C4 \uC804\uCCB4 \uD0ED \uBAA9\uB85D\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.";return}Ee.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:p.value}},"*")}}function Ps(){if(me.value="",Q.value="",f.value.split(",").map(d=>d.trim()).filter(Boolean).length===0){A.value=new Set,p.value?(Ee.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:p.value}},"*")):T.value.length>0&&(h.value=[...T.value],Q.value=`\uC804\uCCB4 ${T.value.length}\uAC1C \uD589`);return}ce.value=!0,parent.postMessage({pluginMessage:{type:"search",url:t.value,apiKey:s.value,keyword:f.value,tabTitle:p.value||void 0}},"*")}function u(){ce.value||Ee.value||!t.value.trim()||!s.value.trim()||(f.value.trim()||T.value.length>0||p.value)&&Ps()}function a(x){const d=V(x),b=new Set(A.value);b.has(d)?b.delete(d):b.add(d),A.value=b}function g(){const x=G.value;A.value=new Set(h.value.filter(d=>x.has(`${d.tabTitle}::${d.rowNumber}`)).map(V))}function _(){const x=ie.value;A.value=new Set(h.value.filter(d=>x.has(`${d.tabTitle}::${d.rowNumber}`)).map(V))}function v(){A.value=new Set(h.value.map(V))}function m(){A.value=new Set}const S=Oe(()=>{const x=A.value;return h.value.filter(d=>x.has(V(d)))}),C=Oe(()=>{if(H.value.length===0)return!1;const x=G.value;return S.value.some(d=>x.has(`${d.tabTitle}::${d.rowNumber}`))}),w=Oe(()=>{var x;return((x=j.value)==null?void 0:x.hasMappableSheetProps)===!0}),y=Oe(()=>j.value?!w.value:!1),P=Oe(()=>{const x=new Map;for(const b of S.value){const E=String(b.label??"").trim(),D=E.length===0?"\\0empty":E;x.set(D,(x.get(D)??0)+1)}const d=[];for(const[b,E]of x)E<2||d.push(b==="\\0empty"?"(\uBE48 label)":b);return d}),M=Oe(()=>P.value.length>0),O=Oe(()=>!(!j.value||S.value.length===0||!w.value));function $(){if(A.value.size===0)return;const x=new Set(S.value.map(b=>`${b.tabTitle}::${b.rowNumber}`)),d=H.value.filter(b=>x.has(`${b.tabTitle}::${b.rowNumber}`)).map(b=>({oldLabel:b.oldLabel,newLabel:b.newLabel,tabTitle:b.tabTitle,rowNumber:b.rowNumber,value:b.value}));if(d.length===0){Q.value="\uC120\uD0DD\uD55C \uD589 \uC911 \uBCC0\uACBD\uB41C label\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";return}Ce.value=!0,me.value="",Q.value="",parent.postMessage({pluginMessage:{type:"sync-value-changes",valueChangedItems:[],labelChangedItems:d,url:t.value}},"*")}function k(){me.value="",Q.value="",he.value=!0;const x=S.value.map(d=>({tabTitle:d.tabTitle,rowNumber:d.rowNumber,name:d.name,type:d.type,label:d.label,value:d.value,description:d.description}));parent.postMessage({pluginMessage:{type:"connect-and-generate",url:t.value,apiKey:s.value,keywordRows:x,snapshotRows:ut(h.value),tabScope:p.value||void 0}},"*")}return Vt([h,j,t],()=>ye(),{deep:!0}),Nr(()=>{Ae(),parent.postMessage({pluginMessage:{type:"get-settings"}},"*"),window.onmessage=x=>{var b;const d=(b=x.data)==null?void 0:b.pluginMessage;if(d){if(d.type==="settings"){s.value=typeof d.apiKey=="string"?d.apiKey:"",l.value=Array.isArray(d.recentSheets)?d.recentSheets:[];return}if(d.type==="selection"){j.value=d.selection??null,re(),ye();return}if(d.type==="sheet-diff"){R.value={hasSnapshot:d.hasSnapshot===!0,sameSpreadsheet:d.sameSpreadsheet===!0,added:Array.isArray(d.added)?d.added:[],deleted:Array.isArray(d.deleted)?d.deleted:[],valueChanged:Array.isArray(d.valueChanged)?d.valueChanged:[],labelChanged:Array.isArray(d.labelChanged)?d.labelChanged:[]},se.value=!1;return}if(d.type==="tabs"){pe.value=!1,c.value=Array.isArray(d.tabs)?d.tabs:[];const E=Array.isArray(d.rows)?d.rows:[];T.value=E,h.value=[...E],A.value=new Set,o.value=t.value.trim();const D=Array.isArray(d.labelChanged)?d.labelChanged:[];if(H.value=D,I.value=Array.isArray(d.labelAdded)?d.labelAdded:[],c.value.length===0)Q.value="\uD0ED\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.";else if(E.length===0)Q.value=`\uD0ED ${c.value.length}\uAC1C\uB97C \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. (\uD589 \uB370\uC774\uD130 \uC5C6\uC74C \uB610\uB294 \uC77C\uBD80 \uD0ED\uB9CC \uC77D\uC74C)`;else{const L=G.value.size,W=ie.value.size,X=[L>0?`\u26A0\uFE0F label \uBCC0\uACBD ${L}\uAC74 \uAC10\uC9C0`:"",W>0?`\u{1F195} \uC2E0\uADDC ${W}\uAC74 \uAC10\uC9C0`:""].filter(Boolean).join(" \xB7 ");Q.value=X?`\uD0ED ${c.value.length}\uAC1C \xB7 ${E.length}\uAC1C \uD589 \uBD88\uB7EC\uC634 \xB7 ${X}`:`\uD0ED ${c.value.length}\uAC1C \xB7 \uC804\uCCB4 ${E.length}\uAC1C \uD589(label/value \uB4F1)\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`}ye();return}if(d.type==="tab-rows"){Ee.value=!1,h.value=Array.isArray(d.rows)?d.rows:[],A.value=new Set;const E=Array.isArray(d.labelChanged)?d.labelChanged:[];H.value=E,I.value=Array.isArray(d.labelAdded)?d.labelAdded:[];const D=E.length,L=I.value.length,W=[D>0?`\u26A0\uFE0F label \uBCC0\uACBD ${D}\uAC74 \uAC10\uC9C0`:"",L>0?`\u{1F195} \uC2E0\uADDC ${L}\uAC74 \uAC10\uC9C0`:""].filter(Boolean).join(" \xB7 ");Q.value=h.value.length?`${d.tabTitle} \uD0ED\uC5D0\uC11C ${h.value.length}\uAC1C \uD56D\uBAA9\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`+(W?` \xB7 ${W}`:""):`${d.tabTitle} \uD0ED\uC5D0 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`,ye();return}if(d.type==="search-results"){ce.value=!1,h.value=Array.isArray(d.rows)?d.rows:[],A.value=new Set,Q.value=h.value.length?`\uAC80\uC0C9 \uACB0\uACFC ${h.value.length}\uAC1C`:"\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",ye();return}if(d.type==="sync-done"){Ce.value=!1;const E=typeof d.updated=="number"?d.updated:0;Q.value=E>0?`${E}\uAC1C \uC778\uC2A4\uD134\uC2A4 \uB3D9\uAE30\uD654 \uC644\uB8CC`:"\uB3D9\uAE30\uD654\uD560 \uC778\uC2A4\uD134\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",ye();return}if(d.type==="done"){he.value=!1;const E=typeof d.appliedInPlace=="number"?d.appliedInPlace:0,D=typeof d.created=="number"?d.created:0;E>0&&D>0?Q.value=`${E}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4 \uAC31\uC2E0 \xB7 ${D}\uAC1C \uBCF5\uC81C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`:E>0&&D===0?Q.value=`${E}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0 \uC644\uB8CC (\uBCF5\uC81C \uC5C6\uC74C)`:Q.value=`${D}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`,ye();return}d.type==="error"&&(pe.value=!1,Ee.value=!1,ce.value=!1,he.value=!1,Ce.value=!1,me.value=d.message??"\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}}}),(x,d)=>(B(),q("div",Ko,[F("header",{class:"px-4 py-3 border-b border-gray-200 flex items-center justify-between"},[d[6]||(d[6]=F("span",{class:"font-semibold text-gray-900"},"SheetToComponent",-1)),F("button",{class:"text-[12px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:ss,title:"\uC2DC\uD2B8\xB7\uAC80\uC0C9\xB7\uD589 \uC120\uD0DD \uB4F1 \uC791\uC5C5 \uC601\uC5ED\uC744 \uBE44\uC6C1\uB2C8\uB2E4. API \uD0A4\xB7\uCD5C\uADFC URL\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4."}," \uCD08\uAE30\uD654 ")]),F("main",jo,[F("section",Ho,[d[12]||(d[12]=F("div",{class:"text-[11px] font-semibold text-gray-500 uppercase tracking-wide"},"1) \uC2DC\uD2B8 \uD638\uCD9C",-1)),d[13]||(d[13]=F("p",{class:"text-[10px] text-gray-500 leading-relaxed"}," \uC2DC\uD2B8 \uD638\uCD9C \uC2DC \uD0ED \uBAA9\uB85D\uACFC \uD568\uAED8 \uC804\uCCB4 \uD0ED\uC758 label/value \uD589\uC744 \uD55C \uBC88\uC5D0 \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uD0ED \uBC94\uC704\uC5D0\uC11C \uD2B9\uC815 \uD0ED\uB9CC \uACE0\uB974\uBA74 \uD574\uB2F9 \uD0ED\uB9CC \uB2E4\uC2DC \uC870\uD68C\uD569\uB2C8\uB2E4. ",-1)),F("div",Vo,[mt(F("select",{"onUpdate:modelValue":d[0]||(d[0]=b=>i.value=b),class:"flex-1 min-w-0 text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500",onChange:Os},[d[7]||(d[7]=F("option",{value:"manual"},"\uC9C1\uC811\uC785\uB825",-1)),(B(!0),q(fe,null,yt(l.value,b=>(B(),q("option",{key:b.url,value:b.url},oe(b.title),9,ko))),128))],544),[[Jn,i.value]]),F("button",{type:"button",class:"shrink-0 px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:pe.value||!t.value.trim()||!s.value.trim(),onClick:ns},oe(bt.value),9,Uo),F("button",{type:"button",class:"px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400",disabled:pe.value||ce.value||he.value||l.value.length===0,onClick:$t,title:"\uCD5C\uADFC \uC2DC\uD2B8 \uBAA9\uB85D \uBE44\uC6B0\uAE30"}," \uBAA9\uB85D \uBE44\uC6B0\uAE30 ",8,Bo)]),i.value==="manual"?mt((B(),q("input",{key:0,"onUpdate:modelValue":d[1]||(d[1]=b=>t.value=b),type:"text",placeholder:"https://docs.google.com/spreadsheets/d/...",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[Hs,t.value]]):_e("",!0),s.value.trim()?(B(),q("label",Wo,[mt(F("input",{"onUpdate:modelValue":d[2]||(d[2]=b=>n.value=b),type:"checkbox",class:"shrink-0"},null,512),[[Eo,n.value]]),d[8]||(d[8]=xt(" API \uD0A4 \uBCC0\uACBD ",-1))])):_e("",!0),r.value?mt((B(),q("input",{key:2,"onUpdate:modelValue":d[3]||(d[3]=b=>s.value=b),type:"password",placeholder:"Google API Key (AIza...)",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[Hs,s.value]]):_e("",!0),F("div",qo,[d[10]||(d[10]=F("label",{class:"text-xs font-medium text-gray-700"},"\uD0ED \uBC94\uC704",-1)),mt(F("select",{"onUpdate:modelValue":d[4]||(d[4]=b=>p.value=b),class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",disabled:c.value.length===0,onChange:ct},[d[9]||(d[9]=F("option",{value:""},"\uC804\uCCB4 \uD0ED",-1)),(B(!0),q(fe,null,yt(c.value,b=>(B(),q("option",{key:b.sheetId,value:b.title},oe(b.title),9,zo))),128))],40,Go),[[Jn,p.value]]),d[11]||(d[11]=F("p",{class:"text-[10px] text-gray-500"},"\uD2B9\uC815 \uD0ED\uB9CC \uC120\uD0DD\uD558\uBA74 \uADF8 \uD0ED \uD589\uB9CC \uB2E4\uC2DC \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uC804\uCCB4 \uD0ED\uC73C\uB85C \uB3CC\uB9AC\uBA74 \uC2DC\uD2B8 \uD638\uCD9C \uB54C \uBAA8\uC544 \uB454 \uC804\uCCB4 \uD589 \uBAA9\uB85D\uC744 \uB2E4\uC2DC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.",-1))])]),F("section",Jo,[d[15]||(d[15]=F("div",{class:"text-[11px] font-semibold text-gray-500 uppercase tracking-wide"},"2) \uD0A4\uC6CC\uB4DC \uAC80\uC0C9",-1)),F("div",Yo,[mt(F("input",{"onUpdate:modelValue":d[5]||(d[5]=b=>f.value=b),type:"text",placeholder:"name/type/label/value/description\uC5D0\uC11C \uAC80\uC0C9",class:"flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",onKeydown:Ro(Xn(u,["prevent"]),["enter"])},null,40,Xo),[[Hs,f.value]]),F("button",{class:"px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:ce.value||Ee.value||!t.value.trim()||!s.value.trim()||!f.value.trim()&&T.value.length===0&&!p.value,onClick:Ps},oe(ce.value?"\uAC80\uC0C9 \uC911...":"\uAC80\uC0C9"),9,Zo)]),h.value.length?(B(),q("div",Qo,[F("div",eu,[F("div",tu," \uACB0\uACFC "+oe(h.value.length)+"\uAC1C / \uC120\uD0DD "+oe(A.value.size)+"\uAC1C ",1),F("div",su,[H.value.length>0?(B(),q("button",{key:0,class:"text-[11px] px-2 py-1 rounded border border-orange-400 text-orange-700 bg-orange-50 hover:bg-orange-100",onClick:g}," \uC218\uC815\uAC74 \uC120\uD0DD ")):_e("",!0),I.value.length>0?(B(),q("button",{key:1,class:"text-[11px] px-2 py-1 rounded border border-blue-400 text-blue-700 bg-blue-50 hover:bg-blue-100",onClick:_}," \uC2E0\uADDC \uC120\uD0DD ")):_e("",!0),F("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:v}," \uC804\uCCB4\uC120\uD0DD "),F("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:m}," \uC120\uD0DD\uD574\uC81C ")])]),F("div",nu,[(B(!0),q(fe,null,yt(h.value,b=>(B(),q("label",{key:V(b),class:pt(["flex items-start gap-2 px-3 py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50",G.value.has(`${b.tabTitle}::${b.rowNumber}`)?"bg-orange-50":""])},[F("input",{type:"checkbox",class:"mt-1",checked:A.value.has(V(b)),onChange:E=>a(b)},null,40,ru),F("div",lu,[F("div",iu,[F("span",ou,[f.value.trim()?(B(!0),q(fe,{key:0},yt(Fe(b.label||b.name||"(no label)",f.value),(E,D)=>(B(),q("span",{key:D,class:pt(E.match?"text-blue-500":"")},oe(E.text),3))),128)):(B(),q(fe,{key:1},[xt(oe(b.label||b.name||"(no label)"),1)],64))]),F("span",uu,"("+oe(b.tabTitle)+" / "+oe(b.rowNumber)+"\uD589)",1),G.value.has(`${b.tabTitle}::${b.rowNumber}`)?(B(),q("span",cu,"label \uBCC0\uACBD")):_e("",!0),ie.value.has(`${b.tabTitle}::${b.rowNumber}`)?(B(),q("span",au,"\uC2E0\uADDC")):_e("",!0)]),F("div",fu,[d[14]||(d[14]=xt("value: ",-1)),f.value.trim()?(B(!0),q(fe,{key:0},yt(Fe(b.value,f.value),(E,D)=>(B(),q("span",{key:D,class:pt(E.match?"text-blue-500":"")},oe(E.text),3))),128)):(B(),q(fe,{key:1},[xt(oe(b.value),1)],64))]),b.description?(B(),q("div",du,"desc: "+oe(b.description),1)):_e("",!0)])],2))),128))]),S.value.length>0?(B(),q("div",pu,[(B(!0),q(fe,null,yt(S.value,b=>(B(),q("span",{key:V(b),class:"inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200"},[xt(oe(b.label||b.name||"(no label)")+" ",1),F("button",{type:"button",class:"text-gray-400 hover:text-gray-600 leading-none",onClick:Xn(E=>a(b),["prevent"])},"\u2715",8,hu)]))),128))])):_e("",!0)])):_e("",!0)]),F("section",gu,[d[16]||(d[16]=F("div",{class:"text-[11px] font-semibold text-gray-500 uppercase tracking-wide"},"3) \uC5F0\uACB0 \uB300\uC0C1(\uC120\uD0DD)",-1)),F("div",{class:pt(["p-3 rounded-lg border",j.value?"bg-blue-50 border-blue-200":"bg-gray-50 border-gray-200"])},[j.value?(B(),q(fe,{key:0},[F("div",bu,oe(j.value.name),1),F("div",vu,oe(j.value.kind)+" / TEXT \uD504\uB85C\uD37C\uD2F0 "+oe(j.value.textProperties.length)+"\uAC1C ",1),P.value.length>0?(B(),q("p",mu," \uC911\uBCF5\uB41C label\uBA85\uC774 \uC788\uC2B5\uB2C8\uB2E4 : "+oe(P.value.join(", ")),1)):_e("",!0)],64)):(B(),q("div",yu," \uC778\uC2A4\uD134\uC2A4(\uB610\uB294 \uC778\uC2A4\uD134\uC2A4\uB97C \uD3EC\uD568\uD55C \uB808\uC774\uC5B4)\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694. "))],2),d[17]||(d[17]=Gi(\'<div class="text-[12px] text-gray-600"><div class="font-semibold text-gray-700 mb-1">\uC790\uB3D9 \uC5F0\uACB0 \uADDC\uCE59</div><div class="text-[11px] text-gray-500 leading-5"> \uC120\uD0DD\uD55C \uCEE8\uD14C\uC774\uB108/\uC778\uC2A4\uD134\uC2A4 \uB0B4\uBD80 \uC778\uC2A4\uD134\uC2A4\uC758 TEXT \uD504\uB85C\uD37C\uD2F0 \uC911 <code class="text-[10px] bg-gray-100 px-1 rounded">label</code>, <code class="text-[10px] bg-gray-100 px-1 rounded">value</code>, <code class="text-[10px] bg-gray-100 px-1 rounded">description</code> \uC774 \uC874\uC7AC\uD558\uBA74 \uAC01\uAC01 \uC2DC\uD2B8\uC758 \uAC12\uC73C\uB85C \uC790\uB3D9 \uC5F0\uACB0\uD569\uB2C8\uB2E4. (2\uAC1C \uC774\uC0C1 \uC788\uC5B4\uB3C4 \uAC01\uAC01 \uC5F0\uACB0) </div></div>\',1))]),Q.value?(B(),q("p",_u,oe(Q.value),1)):_e("",!0),me.value?(B(),q("p",xu,oe(me.value),1)):_e("",!0)]),F("footer",wu,[y.value?(B(),q("p",Su," \uC77C\uCE58\uD558\uB294 \uD504\uB85C\uD37C\uD2F0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 ")):_e("",!0),F("div",Cu,[F("button",{class:"flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:!O.value||he.value,onClick:k},oe(he.value?"\uC0DD\uC131/\uC5F0\uACB0 \uC911...":M.value?`${A.value.size}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0`:`${A.value.size}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0`),9,Tu),C.value||Ce.value?(B(),q("button",{key:0,class:"flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400",disabled:Ce.value,onClick:$},oe(Ce.value?"\uB3D9\uAE30\uD654 \uC911...":`\u26A1 ${A.value.size}\uAC1C \uB3D9\uAE30\uD654`),9,Au)):_e("",!0)])])]))}});Fo(Mu).mount("#app");<\/script>\n    <style rel="stylesheet" crossorigin>/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-600:oklch(57.7% .245 27.325);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-400:oklch(75% .183 55.934);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-800:oklch(47% .157 37.304);--color-orange-900:oklch(40.8% .123 38.172);--color-orange-950:oklch(26.6% .079 36.259);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-200:oklch(92.4% .12 95.746);--color-amber-300:oklch(87.9% .169 91.605);--color-amber-800:oklch(47.3% .137 46.201);--color-amber-900:oklch(41.4% .112 45.904);--color-amber-950:oklch(27.9% .077 45.635);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-700:oklch(50% .134 242.749);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--leading-snug:1.375;--leading-relaxed:1.625;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.h-screen{height:100vh}.max-h-24{max-height:calc(var(--spacing) * 24)}.max-h-28{max-height:calc(var(--spacing) * 28)}.max-h-32{max-height:calc(var(--spacing) * 32)}.max-h-36{max-height:calc(var(--spacing) * 36)}.max-h-44{max-height:calc(var(--spacing) * 44)}.max-h-50{max-height:calc(var(--spacing) * 50)}.max-h-60{max-height:calc(var(--spacing) * 60)}.w-fit{width:fit-content}.w-full{width:100%}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-amber-200{border-color:var(--color-amber-200)}.border-amber-300{border-color:var(--color-amber-300)}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-orange-300{border-color:var(--color-orange-300)}.border-orange-400{border-color:var(--color-orange-400)}.border-orange-500{border-color:var(--color-orange-500)}.border-sky-200{border-color:var(--color-sky-200)}.bg-amber-50{background-color:var(--color-amber-50)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-orange-50{background-color:var(--color-orange-50)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-white{background-color:var(--color-white)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pl-1{padding-left:calc(var(--spacing) * 1)}.font-sans{font-family:var(--font-sans)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.text-amber-800{color:var(--color-amber-800)}.text-amber-900{color:var(--color-amber-900)}.text-amber-950{color:var(--color-amber-950)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-orange-700{color:var(--color-orange-700)}.text-orange-800{color:var(--color-orange-800)}.text-orange-900{color:var(--color-orange-900)}.text-orange-950{color:var(--color-orange-950)}.text-red-600{color:var(--color-red-600)}.text-sky-700{color:var(--color-sky-700)}.text-sky-900{color:var(--color-sky-900)}.text-sky-950{color:var(--color-sky-950)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-orange-200{--tw-ring-color:var(--color-orange-200)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media(hover:hover){.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-orange-100:hover{background-color:var(--color-orange-100)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:bg-gray-100:disabled{background-color:var(--color-gray-100)}.disabled\\:bg-gray-300:disabled{background-color:var(--color-gray-300)}.disabled\\:text-gray-400:disabled{color:var(--color-gray-400)}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}</style>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n</html>\n', { width: 460, height: 960, title: "SheetToComponent" });
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
            const labelAdded = detectNewLabelsFromPage(spreadsheetId, rows);
            figma.ui.postMessage({ type: "tabs", tabs, rows, labelChanged, labelAdded });
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
            figma.ui.postMessage({ type: "tab-rows", tabTitle: msg.tabTitle.trim(), rows, labelChanged, labelAdded });
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
