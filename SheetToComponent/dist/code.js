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
      figma.showUI('<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>SheetToComponent</title>\n    <script type="module" crossorigin>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();/**\n* @vue/shared v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function Xs(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const te={},Ct=[],Ue=()=>{},Zn=()=>!1,ms=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ys=e=>e.startsWith("onUpdate:"),be=Object.assign,Zs=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},il=Object.prototype.hasOwnProperty,G=(e,t)=>il.call(e,t),k=Array.isArray,Tt=e=>es(e)==="[object Map]",It=e=>es(e)==="[object Set]",bn=e=>es(e)==="[object Date]",L=e=>typeof e=="function",ue=e=>typeof e=="string",We=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Qn=e=>(Q(e)||L(e))&&L(e.then)&&L(e.catch),er=Object.prototype.toString,es=e=>er.call(e),ol=e=>es(e).slice(8,-1),tr=e=>es(e)==="[object Object]",Qs=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jt=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xs=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},ul=/-\\w/g,Ne=xs(e=>e.replace(ul,t=>t.slice(1).toUpperCase())),al=/\\B([A-Z])/g,ct=xs(e=>e.replace(al,"-$1").toLowerCase()),sr=xs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ps=xs(e=>e?`on${sr(e)}`:""),Ve=(e,t)=>!Object.is(e,t),us=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},nr=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},_s=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let mn;const ws=()=>mn||(mn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function en(e){if(k(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],r=ue(n)?pl(n):en(n);if(r)for(const l in r)t[l]=r[l]}return t}else if(ue(e)||Q(e))return e}const cl=/;(?![^(]*\\))/g,fl=/:([^]+)/,dl=/\\/\\*[^]*?\\*\\//g;function pl(e){const t={};return e.replace(dl,"").split(cl).forEach(s=>{if(s){const n=s.split(fl);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ze(e){let t="";if(ue(e))t=e;else if(k(e))for(let s=0;s<e.length;s++){const n=Ze(e[s]);n&&(t+=n+" ")}else if(Q(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gl=Xs(hl);function rr(e){return!!e||e===""}function vl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=Rt(e[n],t[n]);return s}function Rt(e,t){if(e===t)return!0;let s=bn(e),n=bn(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=We(e),n=We(t),s||n)return e===t;if(s=k(e),n=k(t),s||n)return s&&n?vl(e,t):!1;if(s=Q(e),n=Q(t),s||n){if(!s||!n)return!1;const r=Object.keys(e).length,l=Object.keys(t).length;if(r!==l)return!1;for(const i in e){const o=e.hasOwnProperty(i),a=t.hasOwnProperty(i);if(o&&!a||!o&&a||!Rt(e[i],t[i]))return!1}}return String(e)===String(t)}function tn(e,t){return e.findIndex(s=>Rt(s,t))}const lr=e=>!!(e&&e.__v_isRef===!0),ie=e=>ue(e)?e:e==null?"":k(e)||Q(e)&&(e.toString===er||!L(e.toString))?lr(e)?ie(e.value):JSON.stringify(e,ir,2):String(e),ir=(e,t)=>lr(t)?ir(e,t.value):Tt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,r],l)=>(s[Is(n,l)+" =>"]=r,s),{})}:It(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Is(s))}:We(t)?Is(t):Q(t)&&!k(t)&&!tr(t)?String(t):t,Is=(e,t="")=>{var s;return We(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**\n* @vue/reactivity v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let xe;class bl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=xe;try{return xe=this,t()}finally{xe=s}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){if(this._on>0&&--this._on===0){if(xe===this)xe=this.prevScope;else{let t=xe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ml(){return xe}let re;const Rs=new WeakSet;class or{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rs.has(this)&&(Rs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ar(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yn(this),cr(this);const t=re,s=ke;re=this,ke=!0;try{return this.fn()}finally{fr(this),re=t,ke=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)rn(t);this.deps=this.depsTail=void 0,yn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){js(this)&&this.run()}get dirty(){return js(this)}}let ur=0,Ht,Vt;function ar(e,t=!1){if(e.flags|=8,t){e.next=Vt,Vt=e;return}e.next=Ht,Ht=e}function sn(){ur++}function nn(){if(--ur>0)return;if(Vt){let t=Vt;for(Vt=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Ht;){let t=Ht;for(Ht=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function cr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fr(e){let t,s=e.depsTail,n=s;for(;n;){const r=n.prevDep;n.version===-1?(n===s&&(s=r),rn(n),yl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=s}function js(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(dr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function dr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Gt)||(e.globalVersion=Gt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!js(e))))return;e.flags|=2;const t=e.dep,s=re,n=ke;re=e,ke=!0;try{cr(e);const r=e.fn(e._value);(t.version===0||Ve(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{re=s,ke=n,fr(e),e.flags&=-3}}function rn(e,t=!1){const{dep:s,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let l=s.computed.deps;l;l=l.nextDep)rn(l,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function yl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let ke=!0;const pr=[];function nt(){pr.push(ke),ke=!1}function rt(){const e=pr.pop();ke=e===void 0?!0:e}function yn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=re;re=void 0;try{t()}finally{re=s}}}let Gt=0;class xl{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ln{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!re||!ke||re===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==re)s=this.activeLink=new xl(re,this),re.deps?(s.prevDep=re.depsTail,re.depsTail.nextDep=s,re.depsTail=s):re.deps=re.depsTail=s,hr(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=re.depsTail,s.nextDep=void 0,re.depsTail.nextDep=s,re.depsTail=s,re.deps===s&&(re.deps=n)}return s}trigger(t){this.version++,Gt++,this.notify(t)}notify(t){sn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{nn()}}}function hr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)hr(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Hs=new WeakMap,bt=Symbol(""),Vs=Symbol(""),Jt=Symbol("");function _e(e,t,s){if(ke&&re){let n=Hs.get(e);n||Hs.set(e,n=new Map);let r=n.get(s);r||(n.set(s,r=new ln),r.map=n,r.key=s),r.track()}}function et(e,t,s,n,r,l){const i=Hs.get(e);if(!i){Gt++;return}const o=a=>{a&&a.trigger()};if(sn(),t==="clear")i.forEach(o);else{const a=k(e),p=a&&Qs(s);if(a&&s==="length"){const d=Number(n);i.forEach((h,C)=>{(C==="length"||C===Jt||!We(C)&&C>=d)&&o(h)})}else switch((s!==void 0||i.has(void 0))&&o(i.get(s)),p&&o(i.get(Jt)),t){case"add":a?p&&o(i.get("length")):(o(i.get(bt)),Tt(e)&&o(i.get(Vs)));break;case"delete":a||(o(i.get(bt)),Tt(e)&&o(i.get(Vs)));break;case"set":Tt(e)&&o(i.get(bt));break}}nn()}function xt(e){const t=q(e);return t===e?t:(_e(t,"iterate",Jt),$e(e)?t:t.map(Fe))}function Ss(e){return _e(e=q(e),"iterate",Jt),e}function je(e,t){return lt(e)?Et(mt(e)?Fe(t):t):Fe(t)}const _l={__proto__:null,[Symbol.iterator](){return $s(this,Symbol.iterator,e=>je(this,e))},concat(...e){return xt(this).concat(...e.map(t=>k(t)?xt(t):t))},entries(){return $s(this,"entries",e=>(e[1]=je(this,e[1]),e))},every(e,t){return Je(this,"every",e,t,void 0,arguments)},filter(e,t){return Je(this,"filter",e,t,s=>s.map(n=>je(this,n)),arguments)},find(e,t){return Je(this,"find",e,t,s=>je(this,s),arguments)},findIndex(e,t){return Je(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Je(this,"findLast",e,t,s=>je(this,s),arguments)},findLastIndex(e,t){return Je(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Je(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ns(this,"includes",e)},indexOf(...e){return Ns(this,"indexOf",e)},join(e){return xt(this).join(e)},lastIndexOf(...e){return Ns(this,"lastIndexOf",e)},map(e,t){return Je(this,"map",e,t,void 0,arguments)},pop(){return Ft(this,"pop")},push(...e){return Ft(this,"push",e)},reduce(e,...t){return xn(this,"reduce",e,t)},reduceRight(e,...t){return xn(this,"reduceRight",e,t)},shift(){return Ft(this,"shift")},some(e,t){return Je(this,"some",e,t,void 0,arguments)},splice(...e){return Ft(this,"splice",e)},toReversed(){return xt(this).toReversed()},toSorted(e){return xt(this).toSorted(e)},toSpliced(...e){return xt(this).toSpliced(...e)},unshift(...e){return Ft(this,"unshift",e)},values(){return $s(this,"values",e=>je(this,e))}};function $s(e,t,s){const n=Ss(e),r=n[t]();return n!==e&&!$e(e)&&(r._next=r.next,r.next=()=>{const l=r._next();return l.done||(l.value=s(l.value)),l}),r}const wl=Array.prototype;function Je(e,t,s,n,r,l){const i=Ss(e),o=i!==e&&!$e(e),a=i[t];if(a!==wl[t]){const h=a.apply(e,l);return o?Fe(h):h}let p=s;i!==e&&(o?p=function(h,C){return s.call(this,je(e,h),C,e)}:s.length>2&&(p=function(h,C){return s.call(this,h,C,e)}));const d=a.call(i,p,n);return o&&r?r(d):d}function xn(e,t,s,n){const r=Ss(e),l=r!==e&&!$e(e);let i=s,o=!1;r!==e&&(l?(o=n.length===0,i=function(p,d,h){return o&&(o=!1,p=je(e,p)),s.call(this,p,je(e,d),h,e)}):s.length>3&&(i=function(p,d,h){return s.call(this,p,d,h,e)}));const a=r[t](i,...n);return o?je(e,a):a}function Ns(e,t,s){const n=q(e);_e(n,"iterate",Jt);const r=n[t](...s);return(r===-1||r===!1)&&cn(s[0])?(s[0]=q(s[0]),n[t](...s)):r}function Ft(e,t,s=[]){nt(),sn();const n=q(e)[t].apply(e,s);return nn(),rt(),n}const Sl=Xs("__proto__,__v_isRef,__isVue"),gr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(We));function Cl(e){We(e)||(e=String(e));const t=q(this);return _e(t,"has",e),t.hasOwnProperty(e)}class vr{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const r=this._isReadonly,l=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return l;if(s==="__v_raw")return n===(r?l?Nl:xr:l?yr:mr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const i=k(t);if(!r){let a;if(i&&(a=_l[s]))return a;if(s==="hasOwnProperty")return Cl}const o=Reflect.get(t,s,we(t)?t:n);if((We(s)?gr.has(s):Sl(s))||(r||_e(t,"get",s),l))return o;if(we(o)){const a=i&&Qs(s)?o:o.value;return r&&Q(a)?Bs(a):a}return Q(o)?r?Bs(o):un(o):o}}class br extends vr{constructor(t=!1){super(!1,t)}set(t,s,n,r){let l=t[s];const i=k(t)&&Qs(s);if(!this._isShallow){const p=lt(l);if(!$e(n)&&!lt(n)&&(l=q(l),n=q(n)),!i&&we(l)&&!we(n))return p||(l.value=n),!0}const o=i?Number(s)<t.length:G(t,s),a=Reflect.set(t,s,n,we(t)?t:r);return t===q(r)&&(o?Ve(n,l)&&et(t,"set",s,n):et(t,"add",s,n)),a}deleteProperty(t,s){const n=G(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&n&&et(t,"delete",s,void 0),r}has(t,s){const n=Reflect.has(t,s);return(!We(s)||!gr.has(s))&&_e(t,"has",s),n}ownKeys(t){return _e(t,"iterate",k(t)?"length":bt),Reflect.ownKeys(t)}}class Tl extends vr{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Al=new br,Ml=new Tl,El=new br(!0);const Us=e=>e,ls=e=>Reflect.getPrototypeOf(e);function Ol(e,t,s){return function(...n){const r=this.__v_raw,l=q(r),i=Tt(l),o=e==="entries"||e===Symbol.iterator&&i,a=e==="keys"&&i,p=r[e](...n),d=s?Us:t?Et:Fe;return!t&&_e(l,"iterate",a?Vs:bt),be(Object.create(p),{next(){const{value:h,done:C}=p.next();return C?{value:h,done:C}:{value:o?[d(h[0]),d(h[1])]:d(h),done:C}}})}}function is(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Pl(e,t){const s={get(r){const l=this.__v_raw,i=q(l),o=q(r);e||(Ve(r,o)&&_e(i,"get",r),_e(i,"get",o));const{has:a}=ls(i),p=t?Us:e?Et:Fe;if(a.call(i,r))return p(l.get(r));if(a.call(i,o))return p(l.get(o));l!==i&&l.get(r)},get size(){const r=this.__v_raw;return!e&&_e(q(r),"iterate",bt),r.size},has(r){const l=this.__v_raw,i=q(l),o=q(r);return e||(Ve(r,o)&&_e(i,"has",r),_e(i,"has",o)),r===o?l.has(r):l.has(r)||l.has(o)},forEach(r,l){const i=this,o=i.__v_raw,a=q(o),p=t?Us:e?Et:Fe;return!e&&_e(a,"iterate",bt),o.forEach((d,h)=>r.call(l,p(d),p(h),i))}};return be(s,e?{add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear")}:{add(r){const l=q(this),i=ls(l),o=q(r),a=!t&&!$e(r)&&!lt(r)?o:r;return i.has.call(l,a)||Ve(r,a)&&i.has.call(l,r)||Ve(o,a)&&i.has.call(l,o)||(l.add(a),et(l,"add",a,a)),this},set(r,l){!t&&!$e(l)&&!lt(l)&&(l=q(l));const i=q(this),{has:o,get:a}=ls(i);let p=o.call(i,r);p||(r=q(r),p=o.call(i,r));const d=a.call(i,r);return i.set(r,l),p?Ve(l,d)&&et(i,"set",r,l):et(i,"add",r,l),this},delete(r){const l=q(this),{has:i,get:o}=ls(l);let a=i.call(l,r);a||(r=q(r),a=i.call(l,r)),o&&o.call(l,r);const p=l.delete(r);return a&&et(l,"delete",r,void 0),p},clear(){const r=q(this),l=r.size!==0,i=r.clear();return l&&et(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=Ol(r,e,t)}),s}function on(e,t){const s=Pl(e,t);return(n,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(G(s,r)&&r in n?s:n,r,l)}const Il={get:on(!1,!1)},Rl={get:on(!1,!0)},$l={get:on(!0,!1)};const mr=new WeakMap,yr=new WeakMap,xr=new WeakMap,Nl=new WeakMap;function kl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fl(e){return e.__v_skip||!Object.isExtensible(e)?0:kl(ol(e))}function un(e){return lt(e)?e:an(e,!1,Al,Il,mr)}function Dl(e){return an(e,!1,El,Rl,yr)}function Bs(e){return an(e,!0,Ml,$l,xr)}function an(e,t,s,n,r){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Fl(e);if(l===0)return e;const i=r.get(e);if(i)return i;const o=new Proxy(e,l===2?n:s);return r.set(e,o),o}function mt(e){return lt(e)?mt(e.__v_raw):!!(e&&e.__v_isReactive)}function lt(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function cn(e){return e?!!e.__v_raw:!1}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Ll(e){return!G(e,"__v_skip")&&Object.isExtensible(e)&&nr(e,"__v_skip",!0),e}const Fe=e=>Q(e)?un(e):e,Et=e=>Q(e)?Bs(e):e;function we(e){return e?e.__v_isRef===!0:!1}function le(e){return Kl(e,!1)}function Kl(e,t){return we(e)?e:new jl(e,t)}class jl{constructor(t,s){this.dep=new ln,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:q(t),this._value=s?t:Fe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||$e(t)||lt(t);t=n?t:q(t),Ve(t,s)&&(this._rawValue=t,this._value=n?t:Fe(t),this.dep.trigger())}}function Hl(e){return we(e)?e.value:e}const Vl={get:(e,t,s)=>t==="__v_raw"?e:Hl(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const r=e[t];return we(r)&&!we(s)?(r.value=s,!0):Reflect.set(e,t,s,n)}};function _r(e){return mt(e)?e:new Proxy(e,Vl)}class Ul{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new ln(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return ar(this,!0),!0}get value(){const t=this.dep.track();return dr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bl(e,t,s=!1){let n,r;return L(e)?n=e:(n=e.get,r=e.set),new Ul(n,r,s)}const os={},ds=new WeakMap;let vt;function Wl(e,t=!1,s=vt){if(s){let n=ds.get(s);n||ds.set(s,n=[]),n.push(e)}}function zl(e,t,s=te){const{immediate:n,deep:r,once:l,scheduler:i,augmentJob:o,call:a}=s,p=R=>r?R:$e(R)||r===!1||r===0?tt(R,1):tt(R);let d,h,C,T,K=!1,$=!1;if(we(e)?(h=()=>e.value,K=$e(e)):mt(e)?(h=()=>p(e),K=!0):k(e)?($=!0,K=e.some(R=>mt(R)||$e(R)),h=()=>e.map(R=>{if(we(R))return R.value;if(mt(R))return p(R);if(L(R))return a?a(R,2):R()})):L(e)?t?h=a?()=>a(e,2):e:h=()=>{if(C){nt();try{C()}finally{rt()}}const R=vt;vt=d;try{return a?a(e,3,[T]):e(T)}finally{vt=R}}:h=Ue,t&&r){const R=h,oe=r===!0?1/0:r;h=()=>tt(R(),oe)}const se=ml(),J=()=>{d.stop(),se&&se.active&&Zs(se.effects,d)};if(l&&t){const R=t;t=(...oe)=>{R(...oe),J()}}let j=$?new Array(e.length).fill(os):os;const z=R=>{if(!(!(d.flags&1)||!d.dirty&&!R))if(t){const oe=d.run();if(r||K||($?oe.some((ce,fe)=>Ve(ce,j[fe])):Ve(oe,j))){C&&C();const ce=vt;vt=d;try{const fe=[oe,j===os?void 0:$&&j[0]===os?[]:j,T];j=oe,a?a(t,3,fe):t(...fe)}finally{vt=ce}}}else d.run()};return o&&o(z),d=new or(h),d.scheduler=i?()=>i(z,!1):z,T=R=>Wl(R,!1,d),C=d.onStop=()=>{const R=ds.get(d);if(R){if(a)a(R,4);else for(const oe of R)oe();ds.delete(d)}},t?n?z(!0):j=d.run():i?i(z.bind(null,!0),!0):d.run(),J.pause=d.pause.bind(d),J.resume=d.resume.bind(d),J.stop=J,J}function tt(e,t=1/0,s){if(t<=0||!Q(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,we(e))tt(e.value,t,s);else if(k(e))for(let n=0;n<e.length;n++)tt(e[n],t,s);else if(It(e)||Tt(e))e.forEach(n=>{tt(n,t,s)});else if(tr(e)){for(const n in e)tt(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&tt(e[n],t,s)}return e}/**\n* @vue/runtime-core v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function ts(e,t,s,n){try{return n?e(...n):e()}catch(r){Cs(r,t,s)}}function ze(e,t,s,n){if(L(e)){const r=ts(e,t,s,n);return r&&Qn(r)&&r.catch(l=>{Cs(l,t,s)}),r}if(k(e)){const r=[];for(let l=0;l<e.length;l++)r.push(ze(e[l],t,s,n));return r}}function Cs(e,t,s,n=!0){const r=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||te;if(t){let o=t.parent;const a=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const d=o.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](e,a,p)===!1)return}o=o.parent}if(l){nt(),ts(l,null,10,[e,a,p]),rt();return}}ql(e,s,r,n,i)}function ql(e,t,s,n=!0,r=!1){if(r)throw e;console.error(e)}const Te=[];let Ke=-1;const At=[];let ot=null,St=0;const wr=Promise.resolve();let ps=null;function Sr(e){const t=ps||wr;return e?t.then(this?e.bind(this):e):t}function Gl(e){let t=Ke+1,s=Te.length;for(;t<s;){const n=t+s>>>1,r=Te[n],l=Yt(r);l<e||l===e&&r.flags&2?t=n+1:s=n}return t}function fn(e){if(!(e.flags&1)){const t=Yt(e),s=Te[Te.length-1];!s||!(e.flags&2)&&t>=Yt(s)?Te.push(e):Te.splice(Gl(t),0,e),e.flags|=1,Cr()}}function Cr(){ps||(ps=wr.then(Ar))}function Jl(e){k(e)?At.push(...e):ot&&e.id===-1?ot.splice(St+1,0,e):e.flags&1||(At.push(e),e.flags|=1),Cr()}function _n(e,t,s=Ke+1){for(;s<Te.length;s++){const n=Te[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Te.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Tr(e){if(At.length){const t=[...new Set(At)].sort((s,n)=>Yt(s)-Yt(n));if(At.length=0,ot){ot.push(...t);return}for(ot=t,St=0;St<ot.length;St++){const s=ot[St];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ot=null,St=0}}const Yt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ar(e){try{for(Ke=0;Ke<Te.length;Ke++){const t=Te[Ke];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ts(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ke<Te.length;Ke++){const t=Te[Ke];t&&(t.flags&=-2)}Ke=-1,Te.length=0,Tr(),ps=null,(Te.length||At.length)&&Ar()}}let Re=null,Mr=null;function hs(e){const t=Re;return Re=e,Mr=e&&e.type.__scopeId||null,t}function Yl(e,t=Re,s){if(!t||e._n)return e;const n=(...r)=>{n._d&&Rn(-1);const l=hs(t);let i;try{i=e(...r)}finally{hs(l),n._d&&Rn(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function _t(e,t){if(Re===null)return e;const s=Es(Re),n=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[l,i,o,a=te]=t[r];l&&(L(l)&&(l={mounted:l,updated:l}),l.deep&&tt(i),n.push({dir:l,instance:s,value:i,oldValue:void 0,arg:o,modifiers:a}))}return e}function ht(e,t,s,n){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const o=r[i];l&&(o.oldValue=l[i].value);let a=o.dir[n];a&&(nt(),ze(a,s,8,[e.el,o,e,t]),rt())}}function Xl(e,t){if(Ae){let s=Ae.provides;const n=Ae.parent&&Ae.parent.provides;n===s&&(s=Ae.provides=Object.create(n)),s[e]=t}}function as(e,t,s=!1){const n=Zi();if(n||Mt){let r=Mt?Mt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&L(t)?t.call(n&&n.proxy):t}}const Zl=Symbol.for("v-scx"),Ql=()=>as(Zl);function Ut(e,t,s){return Er(e,t,s)}function Er(e,t,s=te){const{immediate:n,deep:r,flush:l,once:i}=s,o=be({},s),a=t&&n||!t&&l!=="post";let p;if(Zt){if(l==="sync"){const T=Ql();p=T.__watcherHandles||(T.__watcherHandles=[])}else if(!a){const T=()=>{};return T.stop=Ue,T.resume=Ue,T.pause=Ue,T}}const d=Ae;o.call=(T,K,$)=>ze(T,d,K,$);let h=!1;l==="post"?o.scheduler=T=>{Me(T,d&&d.suspense)}:l!=="sync"&&(h=!0,o.scheduler=(T,K)=>{K?T():fn(T)}),o.augmentJob=T=>{t&&(T.flags|=4),h&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const C=zl(e,t,o);return Zt&&(p?p.push(C):a&&C()),C}function ei(e,t,s){const n=this.proxy,r=ue(e)?e.includes(".")?Or(n,e):()=>n[e]:e.bind(n,n);let l;L(t)?l=t:(l=t.handler,s=t);const i=ss(this),o=Er(r,l.bind(n),s);return i(),o}function Or(e,t){const s=t.split(".");return()=>{let n=e;for(let r=0;r<s.length&&n;r++)n=n[s[r]];return n}}const ti=Symbol("_vte"),si=e=>e.__isTeleport,ni=Symbol("_leaveCb");function dn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,dn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ri(e,t){return L(e)?be({name:e.name},t,{setup:e}):e}function Pr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function wn(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const gs=new WeakMap;function Bt(e,t,s,n,r=!1){if(k(e)){e.forEach(($,se)=>Bt($,t&&(k(t)?t[se]:t),s,n,r));return}if(Wt(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Bt(e,t,s,n.component.subTree);return}const l=n.shapeFlag&4?Es(n.component):n.el,i=r?null:l,{i:o,r:a}=e,p=t&&t.r,d=o.refs===te?o.refs={}:o.refs,h=o.setupState,C=q(h),T=h===te?Zn:$=>wn(d,$)?!1:G(C,$),K=($,se)=>!(se&&wn(d,se));if(p!=null&&p!==a){if(Sn(t),ue(p))d[p]=null,T(p)&&(h[p]=null);else if(we(p)){const $=t;K(p,$.k)&&(p.value=null),$.k&&(d[$.k]=null)}}if(L(a))ts(a,o,12,[i,d]);else{const $=ue(a),se=we(a);if($||se){const J=()=>{if(e.f){const j=$?T(a)?h[a]:d[a]:K()||!e.k?a.value:d[e.k];if(r)k(j)&&Zs(j,l);else if(k(j))j.includes(l)||j.push(l);else if($)d[a]=[l],T(a)&&(h[a]=d[a]);else{const z=[l];K(a,e.k)&&(a.value=z),e.k&&(d[e.k]=z)}}else $?(d[a]=i,T(a)&&(h[a]=i)):se&&(K(a,e.k)&&(a.value=i),e.k&&(d[e.k]=i))};if(i){const j=()=>{J(),gs.delete(e)};j.id=-1,gs.set(e,j),Me(j,s)}else Sn(e),J()}}}function Sn(e){const t=gs.get(e);t&&(t.flags|=8,gs.delete(e))}ws().requestIdleCallback;ws().cancelIdleCallback;const Wt=e=>!!e.type.__asyncLoader,Ir=e=>e.type.__isKeepAlive;function li(e,t){Rr(e,"a",t)}function ii(e,t){Rr(e,"da",t)}function Rr(e,t,s=Ae){const n=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ts(t,n,s),s){let r=s.parent;for(;r&&r.parent;)Ir(r.parent.vnode)&&oi(n,t,s,r),r=r.parent}}function oi(e,t,s,n){const r=Ts(t,e,n,!0);Nr(()=>{Zs(n[t],r)},s)}function Ts(e,t,s=Ae,n=!1){if(s){const r=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...i)=>{nt();const o=ss(s),a=ze(t,s,e,i);return o(),rt(),a});return n?r.unshift(l):r.push(l),l}}const it=e=>(t,s=Ae)=>{(!Zt||e==="sp")&&Ts(e,(...n)=>t(...n),s)},ui=it("bm"),$r=it("m"),ai=it("bu"),ci=it("u"),fi=it("bum"),Nr=it("um"),di=it("sp"),pi=it("rtg"),hi=it("rtc");function gi(e,t=Ae){Ts("ec",e,t)}const vi=Symbol.for("v-ndc");function wt(e,t,s,n){let r;const l=s,i=k(e);if(i||ue(e)){const o=i&&mt(e);let a=!1,p=!1;o&&(a=!$e(e),p=lt(e),e=Ss(e)),r=new Array(e.length);for(let d=0,h=e.length;d<h;d++)r[d]=t(a?p?Et(Fe(e[d])):Fe(e[d]):e[d],d,void 0,l)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,l)}else if(Q(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,l));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,p=o.length;a<p;a++){const d=o[a];r[a]=t(e[d],d,a,l)}}else r=[];return r}const Ws=e=>e?tl(e)?Es(e):Ws(e.parent):null,zt=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ws(e.parent),$root:e=>Ws(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Fr(e),$forceUpdate:e=>e.f||(e.f=()=>{fn(e.update)}),$nextTick:e=>e.n||(e.n=Sr.bind(e.proxy)),$watch:e=>ei.bind(e)}),ks=(e,t)=>e!==te&&!e.__isScriptSetup&&G(e,t),bi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:r,props:l,accessCache:i,type:o,appContext:a}=e;if(t[0]!=="$"){const C=i[t];if(C!==void 0)switch(C){case 1:return n[t];case 2:return r[t];case 4:return s[t];case 3:return l[t]}else{if(ks(n,t))return i[t]=1,n[t];if(r!==te&&G(r,t))return i[t]=2,r[t];if(G(l,t))return i[t]=3,l[t];if(s!==te&&G(s,t))return i[t]=4,s[t];zs&&(i[t]=0)}}const p=zt[t];let d,h;if(p)return t==="$attrs"&&_e(e.attrs,"get",""),p(e);if((d=o.__cssModules)&&(d=d[t]))return d;if(s!==te&&G(s,t))return i[t]=4,s[t];if(h=a.config.globalProperties,G(h,t))return h[t]},set({_:e},t,s){const{data:n,setupState:r,ctx:l}=e;return ks(r,t)?(r[t]=s,!0):n!==te&&G(n,t)?(n[t]=s,!0):G(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:r,props:l,type:i}},o){let a;return!!(s[o]||e!==te&&o[0]!=="$"&&G(e,o)||ks(t,o)||G(l,o)||G(n,o)||G(zt,o)||G(r.config.globalProperties,o)||(a=i.__cssModules)&&a[o])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:G(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Cn(e){return k(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let zs=!0;function mi(e){const t=Fr(e),s=e.proxy,n=e.ctx;zs=!1,t.beforeCreate&&Tn(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:o,provide:a,inject:p,created:d,beforeMount:h,mounted:C,beforeUpdate:T,updated:K,activated:$,deactivated:se,beforeDestroy:J,beforeUnmount:j,destroyed:z,unmounted:R,render:oe,renderTracked:ce,renderTriggered:fe,errorCaptured:pe,serverPrefetch:me,expose:Ee,inheritAttrs:Pe,components:ne,directives:Se,filters:yt}=t;if(p&&yi(p,n,null),i)for(const ee in i){const Z=i[ee];L(Z)&&(n[ee]=Z.bind(s))}if(r){const ee=r.call(s,s);Q(ee)&&(e.data=un(ee))}if(zs=!0,l)for(const ee in l){const Z=l[ee],ye=L(Z)?Z.bind(s,s):L(Z.get)?Z.get.bind(s,s):Ue,ft=!L(Z)&&L(Z.set)?Z.set.bind(s):Ue,De=Ie({get:ye,set:ft});Object.defineProperty(n,ee,{enumerable:!0,configurable:!0,get:()=>De.value,set:he=>De.value=he})}if(o)for(const ee in o)kr(o[ee],n,s,ee);if(a){const ee=L(a)?a.call(s):a;Reflect.ownKeys(ee).forEach(Z=>{Xl(Z,ee[Z])})}d&&Tn(d,e,"c");function ve(ee,Z){k(Z)?Z.forEach(ye=>ee(ye.bind(s))):Z&&ee(Z.bind(s))}if(ve(ui,h),ve($r,C),ve(ai,T),ve(ci,K),ve(li,$),ve(ii,se),ve(gi,pe),ve(hi,ce),ve(pi,fe),ve(fi,j),ve(Nr,R),ve(di,me),k(Ee))if(Ee.length){const ee=e.exposed||(e.exposed={});Ee.forEach(Z=>{Object.defineProperty(ee,Z,{get:()=>s[Z],set:ye=>s[Z]=ye,enumerable:!0})})}else e.exposed||(e.exposed={});oe&&e.render===Ue&&(e.render=oe),Pe!=null&&(e.inheritAttrs=Pe),ne&&(e.components=ne),Se&&(e.directives=Se),me&&Pr(e)}function yi(e,t,s=Ue){k(e)&&(e=qs(e));for(const n in e){const r=e[n];let l;Q(r)?"default"in r?l=as(r.from||n,r.default,!0):l=as(r.from||n):l=as(r),we(l)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[n]=l}}function Tn(e,t,s){ze(k(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function kr(e,t,s,n){let r=n.includes(".")?Or(s,n):()=>s[n];if(ue(e)){const l=t[e];L(l)&&Ut(r,l)}else if(L(e))Ut(r,e.bind(s));else if(Q(e))if(k(e))e.forEach(l=>kr(l,t,s,n));else{const l=L(e.handler)?e.handler.bind(s):t[e.handler];L(l)&&Ut(r,l,e)}}function Fr(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,o=l.get(t);let a;return o?a=o:!r.length&&!s&&!n?a=t:(a={},r.length&&r.forEach(p=>vs(a,p,i,!0)),vs(a,t,i)),Q(t)&&l.set(t,a),a}function vs(e,t,s,n=!1){const{mixins:r,extends:l}=t;l&&vs(e,l,s,!0),r&&r.forEach(i=>vs(e,i,s,!0));for(const i in t)if(!(n&&i==="expose")){const o=xi[i]||s&&s[i];e[i]=o?o(e[i],t[i]):t[i]}return e}const xi={data:An,props:Mn,emits:Mn,methods:Lt,computed:Lt,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Lt,directives:Lt,watch:wi,provide:An,inject:_i};function An(e,t){return t?e?function(){return be(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function _i(e,t){return Lt(qs(e),qs(t))}function qs(e){if(k(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Lt(e,t){return e?be(Object.create(null),e,t):t}function Mn(e,t){return e?k(e)&&k(t)?[...new Set([...e,...t])]:be(Object.create(null),Cn(e),Cn(t??{})):t}function wi(e,t){if(!e)return t;if(!t)return e;const s=be(Object.create(null),e);for(const n in t)s[n]=Ce(e[n],t[n]);return s}function Dr(){return{app:null,config:{isNativeTag:Zn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Si=0;function Ci(e,t){return function(n,r=null){L(n)||(n=be({},n)),r!=null&&!Q(r)&&(r=null);const l=Dr(),i=new WeakSet,o=[];let a=!1;const p=l.app={_uid:Si++,_component:n,_props:r,_container:null,_context:l,_instance:null,version:ro,get config(){return l.config},set config(d){},use(d,...h){return i.has(d)||(d&&L(d.install)?(i.add(d),d.install(p,...h)):L(d)&&(i.add(d),d(p,...h))),p},mixin(d){return l.mixins.includes(d)||l.mixins.push(d),p},component(d,h){return h?(l.components[d]=h,p):l.components[d]},directive(d,h){return h?(l.directives[d]=h,p):l.directives[d]},mount(d,h,C){if(!a){const T=p._ceVNode||Be(n,r);return T.appContext=l,C===!0?C="svg":C===!1&&(C=void 0),e(T,d,C),a=!0,p._container=d,d.__vue_app__=p,Es(T.component)}},onUnmount(d){o.push(d)},unmount(){a&&(ze(o,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(d,h){return l.provides[d]=h,p},runWithContext(d){const h=Mt;Mt=p;try{return d()}finally{Mt=h}}};return p}}let Mt=null;const Ti=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ne(t)}Modifiers`]||e[`${ct(t)}Modifiers`];function Ai(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||te;let r=s;const l=t.startsWith("update:"),i=l&&Ti(n,t.slice(7));i&&(i.trim&&(r=s.map(d=>ue(d)?d.trim():d)),i.number&&(r=s.map(_s)));let o,a=n[o=Ps(t)]||n[o=Ps(Ne(t))];!a&&l&&(a=n[o=Ps(ct(t))]),a&&ze(a,e,6,r);const p=n[o+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ze(p,e,6,r)}}const Mi=new WeakMap;function Lr(e,t,s=!1){const n=s?Mi:t.emitsCache,r=n.get(e);if(r!==void 0)return r;const l=e.emits;let i={},o=!1;if(!L(e)){const a=p=>{const d=Lr(p,t,!0);d&&(o=!0,be(i,d))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!l&&!o?(Q(e)&&n.set(e,null),null):(k(l)?l.forEach(a=>i[a]=null):be(i,l),Q(e)&&n.set(e,i),i)}function As(e,t){return!e||!ms(t)?!1:(t=t.slice(2).replace(/Once$/,""),G(e,t[0].toLowerCase()+t.slice(1))||G(e,ct(t))||G(e,t))}function En(e){const{type:t,vnode:s,proxy:n,withProxy:r,propsOptions:[l],slots:i,attrs:o,emit:a,render:p,renderCache:d,props:h,data:C,setupState:T,ctx:K,inheritAttrs:$}=e,se=hs(e);let J,j;try{if(s.shapeFlag&4){const R=r||n,oe=R;J=He(p.call(oe,R,d,h,T,C,K)),j=o}else{const R=t;J=He(R.length>1?R(h,{attrs:o,slots:i,emit:a}):R(h,null)),j=t.props?o:Ei(o)}}catch(R){qt.length=0,Cs(R,e,1),J=Be(at)}let z=J;if(j&&$!==!1){const R=Object.keys(j),{shapeFlag:oe}=z;R.length&&oe&7&&(l&&R.some(ys)&&(j=Oi(j,l)),z=Ot(z,j,!1,!0))}return s.dirs&&(z=Ot(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(s.dirs):s.dirs),s.transition&&dn(z,s.transition),J=z,hs(se),J}const Ei=e=>{let t;for(const s in e)(s==="class"||s==="style"||ms(s))&&((t||(t={}))[s]=e[s]);return t},Oi=(e,t)=>{const s={};for(const n in e)(!ys(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Pi(e,t,s){const{props:n,children:r,component:l}=e,{props:i,children:o,patchFlag:a}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?On(n,i,p):!!i;if(a&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const C=d[h];if(Kr(i,n,C)&&!As(p,C))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===i?!1:n?i?On(n,i,p):!0:!!i;return!1}function On(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const l=n[r];if(Kr(t,e,l)&&!As(s,l))return!0}return!1}function Kr(e,t,s){const n=e[s],r=t[s];return s==="style"&&Q(n)&&Q(r)?!Rt(n,r):n!==r}function Ii({vnode:e,parent:t,suspense:s},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=n,e=r),r===e)(e=t.vnode).el=n,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=n)}const jr={},Hr=()=>Object.create(jr),Vr=e=>Object.getPrototypeOf(e)===jr;function Ri(e,t,s,n=!1){const r={},l=Hr();e.propsDefaults=Object.create(null),Ur(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);s?e.props=n?r:Dl(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function $i(e,t,s,n){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,o=q(r),[a]=e.propsOptions;let p=!1;if((n||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let C=d[h];if(As(e.emitsOptions,C))continue;const T=t[C];if(a)if(G(l,C))T!==l[C]&&(l[C]=T,p=!0);else{const K=Ne(C);r[K]=Gs(a,o,K,T,e,!1)}else T!==l[C]&&(l[C]=T,p=!0)}}}else{Ur(e,t,r,l)&&(p=!0);let d;for(const h in o)(!t||!G(t,h)&&((d=ct(h))===h||!G(t,d)))&&(a?s&&(s[h]!==void 0||s[d]!==void 0)&&(r[h]=Gs(a,o,h,void 0,e,!0)):delete r[h]);if(l!==o)for(const h in l)(!t||!G(t,h))&&(delete l[h],p=!0)}p&&et(e.attrs,"set","")}function Ur(e,t,s,n){const[r,l]=e.propsOptions;let i=!1,o;if(t)for(let a in t){if(jt(a))continue;const p=t[a];let d;r&&G(r,d=Ne(a))?!l||!l.includes(d)?s[d]=p:(o||(o={}))[d]=p:As(e.emitsOptions,a)||(!(a in n)||p!==n[a])&&(n[a]=p,i=!0)}if(l){const a=q(s),p=o||te;for(let d=0;d<l.length;d++){const h=l[d];s[h]=Gs(r,a,h,p[h],e,!G(p,h))}}return i}function Gs(e,t,s,n,r,l){const i=e[s];if(i!=null){const o=G(i,"default");if(o&&n===void 0){const a=i.default;if(i.type!==Function&&!i.skipFactory&&L(a)){const{propsDefaults:p}=r;if(s in p)n=p[s];else{const d=ss(r);n=p[s]=a.call(null,t),d()}}else n=a;r.ce&&r.ce._setProp(s,n)}i[0]&&(l&&!o?n=!1:i[1]&&(n===""||n===ct(s))&&(n=!0))}return n}const Ni=new WeakMap;function Br(e,t,s=!1){const n=s?Ni:t.propsCache,r=n.get(e);if(r)return r;const l=e.props,i={},o=[];let a=!1;if(!L(e)){const d=h=>{a=!0;const[C,T]=Br(h,t,!0);be(i,C),T&&o.push(...T)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!l&&!a)return Q(e)&&n.set(e,Ct),Ct;if(k(l))for(let d=0;d<l.length;d++){const h=Ne(l[d]);Pn(h)&&(i[h]=te)}else if(l)for(const d in l){const h=Ne(d);if(Pn(h)){const C=l[d],T=i[h]=k(C)||L(C)?{type:C}:be({},C),K=T.type;let $=!1,se=!0;if(k(K))for(let J=0;J<K.length;++J){const j=K[J],z=L(j)&&j.name;if(z==="Boolean"){$=!0;break}else z==="String"&&(se=!1)}else $=L(K)&&K.name==="Boolean";T[0]=$,T[1]=se,($||G(T,"default"))&&o.push(h)}}const p=[i,o];return Q(e)&&n.set(e,p),p}function Pn(e){return e[0]!=="$"&&!jt(e)}const pn=e=>e==="_"||e==="_ctx"||e==="$stable",hn=e=>k(e)?e.map(He):[He(e)],ki=(e,t,s)=>{if(t._n)return t;const n=Yl((...r)=>hn(t(...r)),s);return n._c=!1,n},Wr=(e,t,s)=>{const n=e._ctx;for(const r in e){if(pn(r))continue;const l=e[r];if(L(l))t[r]=ki(r,l,n);else if(l!=null){const i=hn(l);t[r]=()=>i}}},zr=(e,t)=>{const s=hn(t);e.slots.default=()=>s},qr=(e,t,s)=>{for(const n in t)(s||!pn(n))&&(e[n]=t[n])},Fi=(e,t,s)=>{const n=e.slots=Hr();if(e.vnode.shapeFlag&32){const r=t._;r?(qr(n,t,s),s&&nr(n,"_",r,!0)):Wr(t,n)}else t&&zr(e,t)},Di=(e,t,s)=>{const{vnode:n,slots:r}=e;let l=!0,i=te;if(n.shapeFlag&32){const o=t._;o?s&&o===1?l=!1:qr(r,t,s):(l=!t.$stable,Wr(t,r)),i=t}else t&&(zr(e,t),i={default:1});if(l)for(const o in r)!pn(o)&&i[o]==null&&delete r[o]},Me=Vi;function Li(e){return Ki(e)}function Ki(e,t){const s=ws();s.__VUE__=!0;const{insert:n,remove:r,patchProp:l,createElement:i,createText:o,createComment:a,setText:p,setElementText:d,parentNode:h,nextSibling:C,setScopeId:T=Ue,insertStaticContent:K}=e,$=(u,c,g,x=null,b=null,y=null,A=void 0,w=null,S=!!c.dynamicChildren)=>{if(u===c)return;u&&!Dt(u,c)&&(x=qe(u),he(u,b,y,!0),u=null),c.patchFlag===-2&&(S=!1,c.dynamicChildren=null);const{type:m,ref:I,shapeFlag:M}=c;switch(m){case Ms:se(u,c,g,x);break;case at:J(u,c,g,x);break;case cs:u==null&&j(c,g,x,A);break;case ge:ne(u,c,g,x,b,y,A,w,S);break;default:M&1?oe(u,c,g,x,b,y,A,w,S):M&6?Se(u,c,g,x,b,y,A,w,S):(M&64||M&128)&&m.process(u,c,g,x,b,y,A,w,S,pt)}I!=null&&b?Bt(I,u&&u.ref,y,c||u,!c):I==null&&u&&u.ref!=null&&Bt(u.ref,null,y,u,!0)},se=(u,c,g,x)=>{if(u==null)n(c.el=o(c.children),g,x);else{const b=c.el=u.el;c.children!==u.children&&p(b,c.children)}},J=(u,c,g,x)=>{u==null?n(c.el=a(c.children||""),g,x):c.el=u.el},j=(u,c,g,x)=>{[u.el,u.anchor]=K(u.children,c,g,x,u.el,u.anchor)},z=({el:u,anchor:c},g,x)=>{let b;for(;u&&u!==c;)b=C(u),n(u,g,x),u=b;n(c,g,x)},R=({el:u,anchor:c})=>{let g;for(;u&&u!==c;)g=C(u),r(u),u=g;r(c)},oe=(u,c,g,x,b,y,A,w,S)=>{if(c.type==="svg"?A="svg":c.type==="math"&&(A="mathml"),u==null)ce(c,g,x,b,y,A,w,S);else{const m=u.el&&u.el._isVueCE?u.el:null;try{m&&m._beginPatch(),me(u,c,b,y,A,w,S)}finally{m&&m._endPatch()}}},ce=(u,c,g,x,b,y,A,w)=>{let S,m;const{props:I,shapeFlag:M,transition:P,dirs:N}=u;if(S=u.el=i(u.type,y,I&&I.is,I),M&8?d(S,u.children):M&16&&pe(u.children,S,null,x,b,Fs(u,y),A,w),N&&ht(u,null,x,"created"),fe(S,u,u.scopeId,A,x),I){for(const Y in I)Y!=="value"&&!jt(Y)&&l(S,Y,null,I[Y],y,x);"value"in I&&l(S,"value",null,I.value,y),(m=I.onVnodeBeforeMount)&&Le(m,x,u)}N&&ht(u,null,x,"beforeMount");const W=ji(b,P);W&&P.beforeEnter(S),n(S,c,g),((m=I&&I.onVnodeMounted)||W||N)&&Me(()=>{try{m&&Le(m,x,u),W&&P.enter(S),N&&ht(u,null,x,"mounted")}finally{}},b)},fe=(u,c,g,x,b)=>{if(g&&T(u,g),x)for(let y=0;y<x.length;y++)T(u,x[y]);if(b){let y=b.subTree;if(c===y||Xr(y.type)&&(y.ssContent===c||y.ssFallback===c)){const A=b.vnode;fe(u,A,A.scopeId,A.slotScopeIds,b.parent)}}},pe=(u,c,g,x,b,y,A,w,S=0)=>{for(let m=S;m<u.length;m++){const I=u[m]=w?Qe(u[m]):He(u[m]);$(null,I,c,g,x,b,y,A,w)}},me=(u,c,g,x,b,y,A)=>{const w=c.el=u.el;let{patchFlag:S,dynamicChildren:m,dirs:I}=c;S|=u.patchFlag&16;const M=u.props||te,P=c.props||te;let N;if(g&&gt(g,!1),(N=P.onVnodeBeforeUpdate)&&Le(N,g,c,u),I&&ht(c,u,g,"beforeUpdate"),g&&gt(g,!0),(M.innerHTML&&P.innerHTML==null||M.textContent&&P.textContent==null)&&d(w,""),m?Ee(u.dynamicChildren,m,w,g,x,Fs(c,b),y):A||Z(u,c,w,null,g,x,Fs(c,b),y,!1),S>0){if(S&16)Pe(w,M,P,g,b);else if(S&2&&M.class!==P.class&&l(w,"class",null,P.class,b),S&4&&l(w,"style",M.style,P.style,b),S&8){const W=c.dynamicProps;for(let Y=0;Y<W.length;Y++){const _=W[Y],f=M[_],v=P[_];(v!==f||_==="value")&&l(w,_,f,v,b,g)}}S&1&&u.children!==c.children&&d(w,c.children)}else!A&&m==null&&Pe(w,M,P,g,b);((N=P.onVnodeUpdated)||I)&&Me(()=>{N&&Le(N,g,c,u),I&&ht(c,u,g,"updated")},x)},Ee=(u,c,g,x,b,y,A)=>{for(let w=0;w<c.length;w++){const S=u[w],m=c[w],I=S.el&&(S.type===ge||!Dt(S,m)||S.shapeFlag&198)?h(S.el):g;$(S,m,I,null,x,b,y,A,!0)}},Pe=(u,c,g,x,b)=>{if(c!==g){if(c!==te)for(const y in c)!jt(y)&&!(y in g)&&l(u,y,c[y],null,b,x);for(const y in g){if(jt(y))continue;const A=g[y],w=c[y];A!==w&&y!=="value"&&l(u,y,w,A,b,x)}"value"in g&&l(u,"value",c.value,g.value,b)}},ne=(u,c,g,x,b,y,A,w,S)=>{const m=c.el=u?u.el:o(""),I=c.anchor=u?u.anchor:o("");let{patchFlag:M,dynamicChildren:P,slotScopeIds:N}=c;N&&(w=w?w.concat(N):N),u==null?(n(m,g,x),n(I,g,x),pe(c.children||[],g,I,b,y,A,w,S)):M>0&&M&64&&P&&u.dynamicChildren&&u.dynamicChildren.length===P.length?(Ee(u.dynamicChildren,P,g,b,y,A,w),(c.key!=null||b&&c===b.subTree)&&Gr(u,c,!0)):Z(u,c,g,I,b,y,A,w,S)},Se=(u,c,g,x,b,y,A,w,S)=>{c.slotScopeIds=w,u==null?c.shapeFlag&512?b.ctx.activate(c,g,x,A,S):yt(c,g,x,b,y,A,S):ns(u,c,S)},yt=(u,c,g,x,b,y,A)=>{const w=u.component=Xi(u,x,b);if(Ir(u)&&(w.ctx.renderer=pt),Qi(w,!1,A),w.asyncDep){if(b&&b.registerDep(w,ve,A),!u.el){const S=w.subTree=Be(at);J(null,S,c,g),u.placeholder=S.el}}else ve(w,u,c,g,b,y,A)},ns=(u,c,g)=>{const x=c.component=u.component;if(Pi(u,c,g))if(x.asyncDep&&!x.asyncResolved){ee(x,c,g);return}else x.next=c,x.update();else c.el=u.el,x.vnode=c},ve=(u,c,g,x,b,y,A)=>{const w=()=>{if(u.isMounted){let{next:M,bu:P,u:N,parent:W,vnode:Y}=u;{const F=Jr(u);if(F){M&&(M.el=Y.el,ee(u,M,A)),F.asyncDep.then(()=>{Me(()=>{u.isUnmounted||m()},b)});return}}let _=M,f;gt(u,!1),M?(M.el=Y.el,ee(u,M,A)):M=Y,P&&us(P),(f=M.props&&M.props.onVnodeBeforeUpdate)&&Le(f,W,M,Y),gt(u,!0);const v=En(u),O=u.subTree;u.subTree=v,$(O,v,h(O.el),qe(O),u,b,y),M.el=v.el,_===null&&Ii(u,v.el),N&&Me(N,b),(f=M.props&&M.props.onVnodeUpdated)&&Me(()=>Le(f,W,M,Y),b)}else{let M;const{el:P,props:N}=c,{bm:W,m:Y,parent:_,root:f,type:v}=u,O=Wt(c);gt(u,!1),W&&us(W),!O&&(M=N&&N.onVnodeBeforeMount)&&Le(M,_,c),gt(u,!0);{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(v,u.parent?u.parent.type:void 0);const F=u.subTree=En(u);$(null,F,g,x,u,b,y),c.el=F.el}if(Y&&Me(Y,b),!O&&(M=N&&N.onVnodeMounted)){const F=c;Me(()=>Le(M,_,F),b)}(c.shapeFlag&256||_&&Wt(_.vnode)&&_.vnode.shapeFlag&256)&&u.a&&Me(u.a,b),u.isMounted=!0,c=g=x=null}};u.scope.on();const S=u.effect=new or(w);u.scope.off();const m=u.update=S.run.bind(S),I=u.job=S.runIfDirty.bind(S);I.i=u,I.id=u.uid,S.scheduler=()=>fn(I),gt(u,!0),m()},ee=(u,c,g)=>{c.component=u;const x=u.vnode.props;u.vnode=c,u.next=null,$i(u,c.props,x,g),Di(u,c.children,g),nt(),_n(u),rt()},Z=(u,c,g,x,b,y,A,w,S=!1)=>{const m=u&&u.children,I=u?u.shapeFlag:0,M=c.children,{patchFlag:P,shapeFlag:N}=c;if(P>0){if(P&128){ft(m,M,g,x,b,y,A,w,S);return}else if(P&256){ye(m,M,g,x,b,y,A,w,S);return}}N&8?(I&16&&dt(m,b,y),M!==m&&d(g,M)):I&16?N&16?ft(m,M,g,x,b,y,A,w,S):dt(m,b,y,!0):(I&8&&d(g,""),N&16&&pe(M,g,x,b,y,A,w,S))},ye=(u,c,g,x,b,y,A,w,S)=>{u=u||Ct,c=c||Ct;const m=u.length,I=c.length,M=Math.min(m,I);let P;for(P=0;P<M;P++){const N=c[P]=S?Qe(c[P]):He(c[P]);$(u[P],N,g,null,b,y,A,w,S)}m>I?dt(u,b,y,!0,!1,M):pe(c,g,x,b,y,A,w,S,M)},ft=(u,c,g,x,b,y,A,w,S)=>{let m=0;const I=c.length;let M=u.length-1,P=I-1;for(;m<=M&&m<=P;){const N=u[m],W=c[m]=S?Qe(c[m]):He(c[m]);if(Dt(N,W))$(N,W,g,null,b,y,A,w,S);else break;m++}for(;m<=M&&m<=P;){const N=u[M],W=c[P]=S?Qe(c[P]):He(c[P]);if(Dt(N,W))$(N,W,g,null,b,y,A,w,S);else break;M--,P--}if(m>M){if(m<=P){const N=P+1,W=N<I?c[N].el:x;for(;m<=P;)$(null,c[m]=S?Qe(c[m]):He(c[m]),g,W,b,y,A,w,S),m++}}else if(m>P)for(;m<=M;)he(u[m],b,y,!0),m++;else{const N=m,W=m,Y=new Map;for(m=W;m<=P;m++){const D=c[m]=S?Qe(c[m]):He(c[m]);D.key!=null&&Y.set(D.key,m)}let _,f=0;const v=P-W+1;let O=!1,F=0;const V=new Array(v);for(m=0;m<v;m++)V[m]=0;for(m=N;m<=M;m++){const D=u[m];if(f>=v){he(D,b,y,!0);continue}let U;if(D.key!=null)U=Y.get(D.key);else for(_=W;_<=P;_++)if(V[_-W]===0&&Dt(D,c[_])){U=_;break}U===void 0?he(D,b,y,!0):(V[U-W]=m+1,U>=F?F=U:O=!0,$(D,c[U],g,null,b,y,A,w,S),f++)}const X=O?Hi(V):Ct;for(_=X.length-1,m=v-1;m>=0;m--){const D=W+m,U=c[D],ae=c[D+1],Ge=D+1<I?ae.el||Yr(ae):x;V[m]===0?$(null,U,g,Ge,b,y,A,w,S):O&&(_<0||m!==X[_]?De(U,g,Ge,2):_--)}}},De=(u,c,g,x,b=null)=>{const{el:y,type:A,transition:w,children:S,shapeFlag:m}=u;if(m&6){De(u.component.subTree,c,g,x);return}if(m&128){u.suspense.move(c,g,x);return}if(m&64){A.move(u,c,g,pt);return}if(A===ge){n(y,c,g);for(let M=0;M<S.length;M++)De(S[M],c,g,x);n(u.anchor,c,g);return}if(A===cs){z(u,c,g);return}if(x!==2&&m&1&&w)if(x===0)w.beforeEnter(y),n(y,c,g),Me(()=>w.enter(y),b);else{const{leave:M,delayLeave:P,afterLeave:N}=w,W=()=>{u.ctx.isUnmounted?r(y):n(y,c,g)},Y=()=>{y._isLeaving&&y[ni](!0),M(y,()=>{W(),N&&N()})};P?P(y,W,Y):Y()}else n(y,c,g)},he=(u,c,g,x=!1,b=!1)=>{const{type:y,props:A,ref:w,children:S,dynamicChildren:m,shapeFlag:I,patchFlag:M,dirs:P,cacheIndex:N,memo:W}=u;if(M===-2&&(b=!1),w!=null&&(nt(),Bt(w,null,g,u,!0),rt()),N!=null&&(c.renderCache[N]=void 0),I&256){c.ctx.deactivate(u);return}const Y=I&1&&P,_=!Wt(u);let f;if(_&&(f=A&&A.onVnodeBeforeUnmount)&&Le(f,c,u),I&6)Nt(u.component,g,x);else{if(I&128){u.suspense.unmount(g,x);return}Y&&ht(u,null,c,"beforeUnmount"),I&64?u.type.remove(u,c,g,pt,x):m&&!m.hasOnce&&(y!==ge||M>0&&M&64)?dt(m,c,g,!1,!0):(y===ge&&M&384||!b&&I&16)&&dt(S,c,g),x&&$t(u)}const v=W!=null&&N==null;(_&&(f=A&&A.onVnodeUnmounted)||Y||v)&&Me(()=>{f&&Le(f,c,u),Y&&ht(u,null,c,"unmounted"),v&&(u.el=null)},g)},$t=u=>{const{type:c,el:g,anchor:x,transition:b}=u;if(c===ge){Os(g,x);return}if(c===cs){R(u);return}const y=()=>{r(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:A,delayLeave:w}=b,S=()=>A(g,y);w?w(u.el,y,S):S()}else y()},Os=(u,c)=>{let g;for(;u!==c;)g=C(u),r(u),u=g;r(c)},Nt=(u,c,g)=>{const{bum:x,scope:b,job:y,subTree:A,um:w,m:S,a:m}=u;In(S),In(m),x&&us(x),b.stop(),y&&(y.flags|=8,he(A,u,c,g)),w&&Me(w,c),Me(()=>{u.isUnmounted=!0},c)},dt=(u,c,g,x=!1,b=!1,y=0)=>{for(let A=y;A<u.length;A++)he(u[A],c,g,x,b)},qe=u=>{if(u.shapeFlag&6)return qe(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const c=C(u.anchor||u.el),g=c&&c[ti];return g?C(g):c};let kt=!1;const rs=(u,c,g)=>{let x;u==null?c._vnode&&(he(c._vnode,null,null,!0),x=c._vnode.component):$(c._vnode||null,u,c,null,null,null,g),c._vnode=u,kt||(kt=!0,_n(x),Tr(),kt=!1)},pt={p:$,um:he,m:De,r:$t,mt:yt,mc:pe,pc:Z,pbc:Ee,n:qe,o:e};return{render:rs,hydrate:void 0,createApp:Ci(rs)}}function Fs({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function gt({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ji(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gr(e,t,s=!1){const n=e.children,r=t.children;if(k(n)&&k(r))for(let l=0;l<n.length;l++){const i=n[l];let o=r[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[l]=Qe(r[l]),o.el=i.el),!s&&o.patchFlag!==-2&&Gr(i,o)),o.type===Ms&&(o.patchFlag===-1&&(o=r[l]=Qe(o)),o.el=i.el),o.type===at&&!o.el&&(o.el=i.el)}}function Hi(e){const t=e.slice(),s=[0];let n,r,l,i,o;const a=e.length;for(n=0;n<a;n++){const p=e[n];if(p!==0){if(r=s[s.length-1],e[r]<p){t[n]=r,s.push(n);continue}for(l=0,i=s.length-1;l<i;)o=l+i>>1,e[s[o]]<p?l=o+1:i=o;p<e[s[l]]&&(l>0&&(t[n]=s[l-1]),s[l]=n)}}for(l=s.length,i=s[l-1];l-- >0;)s[l]=i,i=t[i];return s}function Jr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jr(t)}function In(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Yr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Yr(t.subTree):null}const Xr=e=>e.__isSuspense;function Vi(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):Jl(e)}const ge=Symbol.for("v-fgt"),Ms=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),cs=Symbol.for("v-stc"),qt=[];let Oe=null;function H(e=!1){qt.push(Oe=e?null:[])}function Ui(){qt.pop(),Oe=qt[qt.length-1]||null}let Xt=1;function Rn(e,t=!1){Xt+=e,e<0&&Oe&&t&&(Oe.hasOnce=!0)}function Zr(e){return e.dynamicChildren=Xt>0?Oe||Ct:null,Ui(),Xt>0&&Oe&&Oe.push(e),e}function B(e,t,s,n,r,l){return Zr(E(e,t,s,n,r,l,!0))}function Bi(e,t,s,n,r){return Zr(Be(e,t,s,n,r,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const el=({key:e})=>e??null,fs=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||we(e)||L(e)?{i:Re,r:e,k:t,f:!!s}:e:null);function E(e,t=null,s=null,n=0,r=null,l=e===ge?0:1,i=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&el(t),ref:t&&fs(t),scopeId:Mr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Re};return o?(gn(a,s),l&128&&e.normalize(a)):s&&(a.shapeFlag|=ue(s)?8:16),Xt>0&&!i&&Oe&&(a.patchFlag>0||l&6)&&a.patchFlag!==32&&Oe.push(a),a}const Be=Wi;function Wi(e,t=null,s=null,n=0,r=null,l=!1){if((!e||e===vi)&&(e=at),Qr(e)){const o=Ot(e,t,!0);return s&&gn(o,s),Xt>0&&!l&&Oe&&(o.shapeFlag&6?Oe[Oe.indexOf(e)]=o:Oe.push(o)),o.patchFlag=-2,o}if(no(e)&&(e=e.__vccOpts),t){t=zi(t);let{class:o,style:a}=t;o&&!ue(o)&&(t.class=Ze(o)),Q(a)&&(cn(a)&&!k(a)&&(a=be({},a)),t.style=en(a))}const i=ue(e)?1:Xr(e)?128:si(e)?64:Q(e)?4:L(e)?2:0;return E(e,t,s,n,r,i,l,!0)}function zi(e){return e?cn(e)||Vr(e)?be({},e):e:null}function Ot(e,t,s=!1,n=!1){const{props:r,ref:l,patchFlag:i,children:o,transition:a}=e,p=t?Gi(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&el(p),ref:t&&t.ref?s&&l?k(l)?l.concat(fs(t)):[l,fs(t)]:fs(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&dn(d,a.clone(d)),d}function Ye(e=" ",t=0){return Be(Ms,null,e,t)}function qi(e,t){const s=Be(cs,null,e);return s.staticCount=t,s}function de(e="",t=!1){return t?(H(),Bi(at,null,e)):Be(at,null,e)}function He(e){return e==null||typeof e=="boolean"?Be(at):k(e)?Be(ge,null,e.slice()):Qr(e)?Qe(e):Be(Ms,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function gn(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(k(t))s=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),gn(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!Vr(t)?t._ctx=Re:r===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Re},s=32):(t=String(t),n&64?(s=16,t=[Ye(t)]):s=8);e.children=t,e.shapeFlag|=s}function Gi(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=Ze([t.class,n.class]));else if(r==="style")t.style=en([t.style,n.style]);else if(ms(r)){const l=t[r],i=n[r];i&&l!==i&&!(k(l)&&l.includes(i))?t[r]=l?[].concat(l,i):i:i==null&&l==null&&!ys(r)&&(t[r]=i)}else r!==""&&(t[r]=n[r])}return t}function Le(e,t,s,n=null){ze(e,t,7,[s,n])}const Ji=Dr();let Yi=0;function Xi(e,t,s){const n=e.type,r=(t?t.appContext:e.appContext)||Ji,l={uid:Yi++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Br(n,r),emitsOptions:Lr(n,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:n.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Ai.bind(null,l),e.ce&&e.ce(l),l}let Ae=null;const Zi=()=>Ae||Re;let bs,Js;{const e=ws(),t=(s,n)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(n),l=>{r.length>1?r.forEach(i=>i(l)):r[0](l)}};bs=t("__VUE_INSTANCE_SETTERS__",s=>Ae=s),Js=t("__VUE_SSR_SETTERS__",s=>Zt=s)}const ss=e=>{const t=Ae;return bs(e),e.scope.on(),()=>{e.scope.off(),bs(t)}},$n=()=>{Ae&&Ae.scope.off(),bs(null)};function tl(e){return e.vnode.shapeFlag&4}let Zt=!1;function Qi(e,t=!1,s=!1){t&&Js(t);const{props:n,children:r}=e.vnode,l=tl(e);Ri(e,n,l,t),Fi(e,r,s||t);const i=l?eo(e,t):void 0;return t&&Js(!1),i}function eo(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bi);const{setup:n}=s;if(n){nt();const r=e.setupContext=n.length>1?so(e):null,l=ss(e),i=ts(n,e,0,[e.props,r]),o=Qn(i);if(rt(),l(),(o||e.sp)&&!Wt(e)&&Pr(e),o){if(i.then($n,$n),t)return i.then(a=>{Nn(e,a)}).catch(a=>{Cs(a,e,0)});e.asyncDep=i}else Nn(e,i)}else sl(e)}function Nn(e,t,s){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=_r(t)),sl(e)}function sl(e,t,s){const n=e.type;e.render||(e.render=n.render||Ue);{const r=ss(e);nt();try{mi(e)}finally{rt(),r()}}}const to={get(e,t){return _e(e,"get",""),e[t]}};function so(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,to),slots:e.slots,emit:e.emit,expose:t}}function Es(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(_r(Ll(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in zt)return zt[s](e)},has(t,s){return s in t||s in zt}})):e.proxy}function no(e){return L(e)&&"__vccOpts"in e}const Ie=(e,t)=>Bl(e,t,Zt),ro="3.5.33";/**\n* @vue/runtime-dom v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let Ys;const kn=typeof window<"u"&&window.trustedTypes;if(kn)try{Ys=kn.createPolicy("vue",{createHTML:e=>e})}catch{}const nl=Ys?e=>Ys.createHTML(e):e=>e,lo="http://www.w3.org/2000/svg",io="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,Fn=Xe&&Xe.createElement("template"),oo={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const r=t==="svg"?Xe.createElementNS(lo,e):t==="mathml"?Xe.createElementNS(io,e):s?Xe.createElement(e,{is:s}):Xe.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Xe.createTextNode(e),createComment:e=>Xe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,r,l){const i=s?s.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{Fn.innerHTML=nl(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Fn.content;if(n==="svg"||n==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},uo=Symbol("_vtc");function ao(e,t,s){const n=e[uo];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Dn=Symbol("_vod"),co=Symbol("_vsh"),fo=Symbol(""),po=/(?:^|;)\\s*display\\s*:/;function ho(e,t,s){const n=e.style,r=ue(s);let l=!1;if(s&&!r){if(t)if(ue(t))for(const i of t.split(";")){const o=i.slice(0,i.indexOf(":")).trim();s[o]==null&&Kt(n,o,"")}else for(const i in t)s[i]==null&&Kt(n,i,"");for(const i in s){i==="display"&&(l=!0);const o=s[i];o!=null?vo(e,i,!ue(t)&&t?t[i]:void 0,o)||Kt(n,i,o):Kt(n,i,"")}}else if(r){if(t!==s){const i=n[fo];i&&(s+=";"+i),n.cssText=s,l=po.test(s)}}else t&&e.removeAttribute("style");Dn in e&&(e[Dn]=l?n.display:"",e[co]&&(n.display="none"))}const Ln=/\\s*!important$/;function Kt(e,t,s){if(k(s))s.forEach(n=>Kt(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=go(e,t);Ln.test(s)?e.setProperty(ct(n),s.replace(Ln,""),"important"):e[n]=s}}const Kn=["Webkit","Moz","ms"],Ds={};function go(e,t){const s=Ds[t];if(s)return s;let n=Ne(t);if(n!=="filter"&&n in e)return Ds[t]=n;n=sr(n);for(let r=0;r<Kn.length;r++){const l=Kn[r]+n;if(l in e)return Ds[t]=l}return t}function vo(e,t,s,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ue(n)&&s===n}const jn="http://www.w3.org/1999/xlink";function Hn(e,t,s,n,r,l=gl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(jn,t.slice(6,t.length)):e.setAttributeNS(jn,t,s):s==null||l&&!rr(s)?e.removeAttribute(t):e.setAttribute(t,l?"":We(s)?String(s):s)}function Vn(e,t,s,n,r){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?nl(s):s);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?e.getAttribute("value")||"":e.value,a=s==null?e.type==="checkbox"?"on":"":String(s);(o!==a||!("_value"in e))&&(e.value=a),s==null&&e.removeAttribute(t),e._value=s;return}let i=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=rr(s):s==null&&o==="string"?(s="",i=!0):o==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(r||t)}function ut(e,t,s,n){e.addEventListener(t,s,n)}function bo(e,t,s,n){e.removeEventListener(t,s,n)}const Un=Symbol("_vei");function mo(e,t,s,n,r=null){const l=e[Un]||(e[Un]={}),i=l[t];if(n&&i)i.value=n;else{const[o,a]=yo(t);if(n){const p=l[t]=wo(n,r);ut(e,o,p,a)}else i&&(bo(e,o,i,a),l[t]=void 0)}}const Bn=/(?:Once|Passive|Capture)$/;function yo(e){let t;if(Bn.test(e)){t={};let n;for(;n=e.match(Bn);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ct(e.slice(2)),t]}let Ls=0;const xo=Promise.resolve(),_o=()=>Ls||(xo.then(()=>Ls=0),Ls=Date.now());function wo(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;ze(So(n,s.value),t,5,[n])};return s.value=e,s.attached=_o(),s}function So(e,t){if(k(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Wn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Co=(e,t,s,n,r,l)=>{const i=r==="svg";t==="class"?ao(e,n,i):t==="style"?ho(e,s,n):ms(t)?ys(t)||mo(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):To(e,t,n,i))?(Vn(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hn(e,t,n,i,l,t!=="value")):e._isVueCE&&(Ao(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ue(n)))?Vn(e,Ne(t),n,l,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Hn(e,t,n,i))};function To(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wn(t)&&L(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wn(t)&&ue(s)?!1:t in e}function Ao(e,t){const s=e._def.props;if(!s)return!1;const n=Ne(t);return Array.isArray(s)?s.some(r=>Ne(r)===n):Object.keys(s).some(r=>Ne(r)===n)}const Pt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return k(t)?s=>us(t,s):t};function Mo(e){e.target.composing=!0}function zn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const st=Symbol("_assign");function qn(e,t,s){return t&&(e=e.trim()),s&&(e=_s(e)),e}const Ks={created(e,{modifiers:{lazy:t,trim:s,number:n}},r){e[st]=Pt(r);const l=n||r.props&&r.props.type==="number";ut(e,t?"change":"input",i=>{i.target.composing||e[st](qn(e.value,s,l))}),(s||l)&&ut(e,"change",()=>{e.value=qn(e.value,s,l)}),t||(ut(e,"compositionstart",Mo),ut(e,"compositionend",zn),ut(e,"change",zn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:n,trim:r,number:l}},i){if(e[st]=Pt(i),e.composing)return;const o=(l||e.type==="number")&&!/^0\\d/.test(e.value)?_s(e.value):e.value,a=t??"";if(o===a)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(n&&t===s||r&&e.value.trim()===a)||(e.value=a)}},Eo={deep:!0,created(e,t,s){e[st]=Pt(s),ut(e,"change",()=>{const n=e._modelValue,r=Qt(e),l=e.checked,i=e[st];if(k(n)){const o=tn(n,r),a=o!==-1;if(l&&!a)i(n.concat(r));else if(!l&&a){const p=[...n];p.splice(o,1),i(p)}}else if(It(n)){const o=new Set(n);l?o.add(r):o.delete(r),i(o)}else i(rl(e,l))})},mounted:Gn,beforeUpdate(e,t,s){e[st]=Pt(s),Gn(e,t,s)}};function Gn(e,{value:t,oldValue:s},n){e._modelValue=t;let r;if(k(t))r=tn(t,n.props.value)>-1;else if(It(t))r=t.has(n.props.value);else{if(t===s)return;r=Rt(t,rl(e,!0))}e.checked!==r&&(e.checked=r)}const Jn={deep:!0,created(e,{value:t,modifiers:{number:s}},n){const r=It(t);ut(e,"change",()=>{const l=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>s?_s(Qt(i)):Qt(i));e[st](e.multiple?r?new Set(l):l:l[0]),e._assigning=!0,Sr(()=>{e._assigning=!1})}),e[st]=Pt(n)},mounted(e,{value:t}){Yn(e,t)},beforeUpdate(e,t,s){e[st]=Pt(s)},updated(e,{value:t}){e._assigning||Yn(e,t)}};function Yn(e,t){const s=e.multiple,n=k(t);if(!(s&&!n&&!It(t))){for(let r=0,l=e.options.length;r<l;r++){const i=e.options[r],o=Qt(i);if(s)if(n){const a=typeof o;a==="string"||a==="number"?i.selected=t.some(p=>String(p)===String(o)):i.selected=tn(t,o)>-1}else i.selected=t.has(o);else if(Rt(Qt(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Qt(e){return"_value"in e?e._value:e.value}function rl(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Oo=["ctrl","shift","alt","meta"],Po={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Oo.some(s=>e[`${s}Key`]&&!t.includes(s))},Io=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((r,...l)=>{for(let i=0;i<t.length;i++){const o=Po[t[i]];if(o&&o(r,t))return}return e(r,...l)}))},Ro={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$o=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(r=>{if(!("key"in r))return;const l=ct(r.key);if(t.some(i=>i===l||Ro[i]===l))return e(r)}))},No=be({patchProp:Co},oo);let Xn;function ko(){return Xn||(Xn=Li(No))}const Fo=((...e)=>{const t=ko().createApp(...e),{mount:s}=t;return t.mount=n=>{const r=Lo(n);if(!r)return;const l=t._component;!L(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=s(r,!1,Do(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t});function Do(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Lo(e){return ue(e)?document.querySelector(e):e}const Ko={class:"relative flex flex-col h-screen bg-white text-[13px] font-sans select-none"},jo={key:0,class:"absolute inset-0 z-50 bg-white/70 flex flex-col items-center justify-center gap-2 pointer-events-none"},Ho={class:"text-[12px] text-gray-600 font-medium"},Vo={class:"flex-1 overflow-y-auto p-4 space-y-4"},Uo={class:"space-y-2"},Bo={class:"flex items-center gap-2"},Wo=["value"],zo=["disabled"],qo=["disabled"],Go={key:1,class:"flex items-center gap-2 text-xs text-gray-600 cursor-pointer w-fit"},Jo={class:"flex flex-col gap-1"},Yo=["disabled"],Xo=["value"],Zo={key:0,class:"flex items-center gap-2 py-1 text-gray-400"},Qo={class:"space-y-2 pt-3 border-t border-gray-100"},eu={class:"flex gap-2"},tu=["disabled"],su={key:0,class:"flex items-center justify-center gap-2 py-6 text-gray-400"},nu={class:"text-[12px]"},ru={key:1,class:"space-y-2"},lu={class:"flex items-center justify-between"},iu={class:"text-xs text-gray-600"},ou={class:"flex items-center gap-2"},uu={class:"max-h-60 overflow-auto border border-gray-200 rounded-lg"},au=["checked","disabled","onChange"],cu={class:"min-w-0 flex-1"},fu={class:"flex items-center gap-1.5 truncate"},du={class:"text-[11px] text-gray-400 font-normal shrink-0"},pu={key:0,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-orange-500 text-white leading-none"},hu={key:1,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-blue-500 text-white leading-none"},gu={key:2,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-gray-400 text-white leading-none"},vu={key:0,class:"text-[11px] text-gray-400 truncate"},bu={key:0,class:"flex flex-wrap gap-1 pt-1"},mu=["onClick"],yu={class:"space-y-2 pt-3 border-t border-gray-100"},xu={class:"text-[12px] font-semibold text-blue-800 truncate"},_u={class:"text-[11px] text-blue-600 mt-0.5"},wu={key:0,class:"mt-2 text-[11px] text-amber-800 leading-relaxed"},Su={key:1,class:"text-[12px] text-gray-500"},Cu={key:0,class:"text-xs text-gray-500"},Tu={key:1,class:"text-xs text-red-600"},Au={class:"px-4 py-3 border-t border-gray-200"},Mu={key:0,class:"text-xs text-red-600 mb-2"},Eu={class:"flex gap-2"},Ou={key:0,class:"relative flex-1 group"},Pu=["disabled"],Iu={key:0,class:"pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 w-max max-w-[200px] text-center rounded bg-gray-800 px-2 py-1 text-[11px] text-white z-10"},Ru=["disabled"],$u=ri({__name:"App",setup(e){const t=le(""),s=le(""),n=le(!1),r=Ie(()=>!s.value.trim()||n.value),l=le([]),i=le("manual"),o=le(""),a=le([]),p=le(""),d=le(""),h=le([]),C=le([]),T=le(new Set),K=le(null),$=le(null),se=le(!1);let J=null;const j=le([]),z=Ie(()=>new Set(j.value.map(_=>`${_.tabTitle}::${_.rowNumber}`))),R=le([]),oe=Ie(()=>new Set(R.value.map(_=>`${_.tabTitle}::${_.rowNumber}`))),ce=le(!1),fe=le(!1),pe=le(!1),me=le(!1),Ee=le(!1),Pe=le(!1),ne=le(""),Se=le("");function yt(_){return String(_??"").trim().toLowerCase().replace(/[#()[\\]{}]/g," ").replace(/[_\\-\\s]+/g,"")}function ns(_,f){const v=_??"",O=f??"",F=v.length,V=O.length;if(F===0)return V;if(V===0)return F;const X=new Array(V+1);for(let D=0;D<=V;D+=1)X[D]=D;for(let D=1;D<=F;D+=1){let U=X[0];X[0]=D;for(let ae=1;ae<=V;ae+=1){const Ge=X[ae],ll=v[D-1]===O[ae-1]?0:1;X[ae]=Math.min(X[ae]+1,X[ae-1]+1,U+ll),U=Ge}}return X[V]}function ve(_,f){const v=yt(_),O=yt(f);if(!v||!O)return 0;if(v===O)return 1;if(v.includes(O)||O.includes(v))return .92;const F=ns(v,O),V=Math.max(v.length,O.length);return V===0?0:1-F/V}function ee(_,f,v,O=.6){let F="",V=0;for(const X of _){if(v.has(X))continue;let D=0;for(const U of f)D=Math.max(D,ve(X,U));D>V&&(V=D,F=X)}return F&&V>=O?F:""}function Z(){var V,X;const _=((X=(V=K.value)==null?void 0:V.textProperties)==null?void 0:X.map(D=>D.name))??[];if(_.length===0)return;const f=new Set,v=ee(_,["label","title","name","key","header"],f,.55);v&&f.add(v);const O=ee(_,["value","content","text","body"],f,.55);O&&f.add(O);const F=ee(_,["description","desc","helper","hint","subtitle","note"],f,.55);F&&f.add(F)}function ye(_){return`${_.tabTitle}::${_.rowNumber}::${_.name}::${_.label}`}function ft(_,f){const v=f.split(",").map(U=>U.trim().toLowerCase().normalize("NFC")).filter(U=>U.length>=2);if(v.length===0)return[{text:_,match:!1}];const O=_.toLowerCase().normalize("NFC"),F=[];for(const U of v){let ae=0;for(;ae<O.length;){const Ge=O.indexOf(U,ae);if(Ge===-1)break;F.push({start:Ge,end:Ge+U.length}),ae=Ge+U.length}}if(F.length===0)return[{text:_,match:!1}];F.sort((U,ae)=>U.start-ae.start);const V=[];for(const U of F)V.length===0||U.start>=V[V.length-1].end?V.push({...U}):V[V.length-1].end=Math.max(V[V.length-1].end,U.end);const X=[];let D=0;for(const{start:U,end:ae}of V)D<U&&X.push({text:_.slice(D,U),match:!1}),X.push({text:_.slice(U,ae),match:!0}),D=ae;return D<_.length&&X.push({text:_.slice(D),match:!1}),X}function De(_){return _.map(f=>({tabTitle:f.tabTitle,rowNumber:f.rowNumber,name:f.name,type:f.type,label:f.label,value:f.value,description:f.description}))}function he(){J&&clearTimeout(J),J=setTimeout(()=>{if(J=null,!t.value.trim()){$.value=null,se.value=!1;return}if(!K.value||h.value.length===0){$.value=null,se.value=!1;return}parent.postMessage({pluginMessage:{type:"sheet-diff-request",url:t.value,currentRows:De(h.value)}},"*")},120)}function $t(){parent.postMessage({pluginMessage:{type:"get-selection"}},"*")}function Os(){i.value="manual",t.value="",n.value=!1,a.value=[],p.value="",d.value="",h.value=[],C.value=[],T.value=new Set,o.value="",Se.value="",ne.value="\uC791\uC5C5 \uC601\uC5ED\uC744 \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.",ce.value=!1,me.value=!1,fe.value=!1,pe.value=!1,$.value=null,se.value=!1,j.value=[],$t()}function Nt(){a.value=[],p.value="",h.value=[],C.value=[],T.value=new Set,d.value="",o.value="",ne.value="",Se.value="",$.value=null,se.value=!1,j.value=[]}function dt(){if(i.value==="manual"){Nt();return}t.value=i.value,Nt()}let qe=null;Ut(t,(_,f)=>{i.value==="manual"&&f!==void 0&&(qe&&clearTimeout(qe),qe=setTimeout(()=>{qe=null,Nt()},450))});const kt=Ie(()=>{if(ce.value)return"\uD638\uCD9C \uC911...";const _=t.value.trim();return _&&o.value===_&&a.value.length>0?"\uC2DC\uD2B8 \uD638\uCD9C":"\uD638\uCD9C\uD558\uAE30"});function rs(){parent.postMessage({pluginMessage:{type:"clear-recent-urls"}},"*")}function pt(){Se.value="",ne.value="",o.value="",a.value=[],p.value="",h.value=[],C.value=[],T.value=new Set,ce.value=!0,parent.postMessage({pluginMessage:{type:"list-tabs",url:t.value,apiKey:s.value}},"*")}function vn(){if(!(!t.value.trim()||!s.value.trim())){if(Se.value="",ne.value="",!p.value){h.value=C.value.length?[...C.value]:[],T.value=new Set,ne.value=C.value.length?`\uC804\uCCB4 \uD0ED ${C.value.length}\uAC1C \uD589`:"\uC2DC\uD2B8 \uD638\uCD9C \uD6C4 \uC804\uCCB4 \uD0ED \uBAA9\uB85D\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.";return}me.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:p.value}},"*")}}function u(){var f;if((f=document.activeElement)==null||f.blur(),Se.value="",ne.value="",d.value.split(",").map(v=>v.trim()).filter(v=>v.length>=2).length===0){T.value=new Set,p.value?(me.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:p.value}},"*")):C.value.length>0&&(h.value=[...C.value],ne.value=`\uC804\uCCB4 ${C.value.length}\uAC1C \uD589`);return}fe.value=!0,parent.postMessage({pluginMessage:{type:"search",url:t.value,apiKey:s.value,keyword:d.value,tabTitle:p.value||void 0}},"*")}function c(){if(fe.value||me.value||!t.value.trim()||!s.value.trim())return;const _=d.value.trim();_&&!_.split(",").some(f=>f.trim().length>=2)||(_||C.value.length>0||p.value)&&u()}function g(_){const f=ye(_),v=new Set(T.value);v.has(f)?v.delete(f):v.add(f),T.value=v}function x(){const _=z.value;T.value=new Set(h.value.filter(f=>_.has(`${f.tabTitle}::${f.rowNumber}`)).map(ye))}function b(){const _=oe.value;T.value=new Set(h.value.filter(f=>_.has(`${f.tabTitle}::${f.rowNumber}`)).map(ye))}function y(){T.value=new Set(h.value.map(ye))}function A(){T.value=new Set}const w=Ie(()=>{const _=T.value;return h.value.filter(f=>_.has(ye(f)))}),S=Ie(()=>{if(w.value.length===0)return!1;const _=z.value;return w.value.every(f=>_.has(`${f.tabTitle}::${f.rowNumber}`))}),m=Ie(()=>{var _;return((_=K.value)==null?void 0:_.hasMappableSheetProps)===!0}),I=Ie(()=>K.value?!m.value:!1),M=Ie(()=>{const _=new Map;for(const v of w.value){const O=String(v.label??"").trim(),F=O.length===0?"\\0empty":O;_.set(F,(_.get(F)??0)+1)}const f=[];for(const[v,O]of _)O<2||f.push(v==="\\0empty"?"(\uBE48 label)":v);return f}),P=Ie(()=>M.value.length>0),N=Ie(()=>!(S.value||!K.value||w.value.length===0||!m.value));function W(){if(T.value.size===0)return;const _=new Set(w.value.map(v=>`${v.tabTitle}::${v.rowNumber}`)),f=j.value.filter(v=>_.has(`${v.tabTitle}::${v.rowNumber}`)).map(v=>({oldLabel:v.oldLabel,newLabel:v.newLabel,tabTitle:v.tabTitle,rowNumber:v.rowNumber,value:v.value}));if(f.length===0){ne.value="\uC120\uD0DD\uD55C \uD589 \uC911 \uBCC0\uACBD\uB41C label\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";return}Pe.value=!0,Se.value="",ne.value="",parent.postMessage({pluginMessage:{type:"sync-value-changes",valueChangedItems:[],labelChangedItems:f,url:t.value}},"*")}function Y(){Se.value="",ne.value="",pe.value=!0;const _=w.value.map(f=>({tabTitle:f.tabTitle,rowNumber:f.rowNumber,name:f.name,type:f.type,label:f.label,value:f.value,description:f.description}));parent.postMessage({pluginMessage:{type:"connect-and-generate",url:t.value,apiKey:s.value,keywordRows:_,snapshotRows:De(C.value),tabScope:p.value||void 0}},"*")}return Ut([h,K,t],()=>he(),{deep:!0}),$r(()=>{$t(),parent.postMessage({pluginMessage:{type:"get-settings"}},"*"),window.onmessage=_=>{var v;const f=(v=_.data)==null?void 0:v.pluginMessage;if(f){if(f.type==="settings"){s.value=typeof f.apiKey=="string"?f.apiKey:"",l.value=Array.isArray(f.recentSheets)?f.recentSheets:[];return}if(f.type==="selection"){K.value=f.selection??null,Z(),he();return}if(f.type==="sheet-diff"){$.value={hasSnapshot:f.hasSnapshot===!0,sameSpreadsheet:f.sameSpreadsheet===!0,added:Array.isArray(f.added)?f.added:[],deleted:Array.isArray(f.deleted)?f.deleted:[],valueChanged:Array.isArray(f.valueChanged)?f.valueChanged:[],labelChanged:Array.isArray(f.labelChanged)?f.labelChanged:[]},se.value=!1;return}if(f.type==="node-scanning"){Ee.value=!0;return}if(f.type==="tabs"){Ee.value=!1,ce.value=!1,a.value=Array.isArray(f.tabs)?f.tabs:[];const O=Array.isArray(f.rows)?f.rows:[];C.value=O,h.value=[...O],T.value=new Set,o.value=t.value.trim();const F=Array.isArray(f.labelChanged)?f.labelChanged:[];if(j.value=F,R.value=Array.isArray(f.labelAdded)?f.labelAdded:[],a.value.length===0)ne.value="\uD0ED\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.";else if(O.length===0)ne.value=`\uD0ED ${a.value.length}\uAC1C\uB97C \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. (\uD589 \uB370\uC774\uD130 \uC5C6\uC74C \uB610\uB294 \uC77C\uBD80 \uD0ED\uB9CC \uC77D\uC74C)`;else{const V=z.value.size,X=oe.value.size,D=O.filter(ae=>ae.strikethrough).length,U=[V>0?`\u26A0\uFE0F label \uBCC0\uACBD ${V}\uAC74 \uAC10\uC9C0`:"",X>0?`\u{1F195} \uC2E0\uADDC ${X}\uAC74 \uAC10\uC9C0`:"",D>0?`\u{1F5D1}\uFE0F \uC0AD\uC81C ${D}\uAC74 \uAC10\uC9C0`:""].filter(Boolean).join(" \xB7 ");ne.value=U?`\uD0ED ${a.value.length}\uAC1C \xB7 ${O.length}\uAC1C \uD589 \uBD88\uB7EC\uC634 \xB7 ${U}`:`\uD0ED ${a.value.length}\uAC1C \xB7 \uC804\uCCB4 ${O.length}\uAC1C \uD589(label/value \uB4F1)\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`}he();return}if(f.type==="tab-rows"){Ee.value=!1,me.value=!1,h.value=Array.isArray(f.rows)?f.rows:[],T.value=new Set;const O=Array.isArray(f.labelChanged)?f.labelChanged:[];j.value=O,R.value=Array.isArray(f.labelAdded)?f.labelAdded:[];const F=O.length,V=R.value.length,X=h.value.filter(U=>U.strikethrough).length,D=[F>0?`\u26A0\uFE0F label \uBCC0\uACBD ${F}\uAC74 \uAC10\uC9C0`:"",V>0?`\u{1F195} \uC2E0\uADDC ${V}\uAC74 \uAC10\uC9C0`:"",X>0?`\u{1F5D1}\uFE0F \uC0AD\uC81C ${X}\uAC74 \uAC10\uC9C0`:""].filter(Boolean).join(" \xB7 ");ne.value=h.value.length?`${f.tabTitle} \uD0ED\uC5D0\uC11C ${h.value.length}\uAC1C \uD56D\uBAA9\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`+(D?` \xB7 ${D}`:""):`${f.tabTitle} \uD0ED\uC5D0 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`,he();return}if(f.type==="search-results"){fe.value=!1,h.value=Array.isArray(f.rows)?f.rows:[],T.value=new Set,ne.value=h.value.length?`\uAC80\uC0C9 \uACB0\uACFC ${h.value.length}\uAC1C`:"\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",he();return}if(f.type==="sync-done"){Pe.value=!1;const O=typeof f.updated=="number"?f.updated:0;ne.value=O>0?`${O}\uAC1C \uC778\uC2A4\uD134\uC2A4 \uB3D9\uAE30\uD654 \uC644\uB8CC`:"\uB3D9\uAE30\uD654\uD560 \uC778\uC2A4\uD134\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",he();return}if(f.type==="done"){pe.value=!1;const O=typeof f.appliedInPlace=="number"?f.appliedInPlace:0,F=typeof f.created=="number"?f.created:0;O>0&&F>0?ne.value=`${O}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4 \uAC31\uC2E0 \xB7 ${F}\uAC1C \uBCF5\uC81C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`:O>0&&F===0?ne.value=`${O}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0 \uC644\uB8CC (\uBCF5\uC81C \uC5C6\uC74C)`:ne.value=`${F}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`,he();return}f.type==="error"&&(ce.value=!1,me.value=!1,fe.value=!1,pe.value=!1,Pe.value=!1,Se.value=f.message??"\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}}}),(_,f)=>(H(),B("div",Ko,[E("header",{class:"px-4 py-3 border-b border-gray-200 flex items-center justify-between"},[f[6]||(f[6]=E("span",{class:"font-semibold text-gray-900"},"SheetToComponent",-1)),E("button",{class:"text-[12px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:Os,title:"\uC2DC\uD2B8\xB7\uAC80\uC0C9\xB7\uD589 \uC120\uD0DD \uB4F1 \uC791\uC5C5 \uC601\uC5ED\uC744 \uBE44\uC6C1\uB2C8\uB2E4. API \uD0A4\xB7\uCD5C\uADFC URL\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4."}," \uCD08\uAE30\uD654 ")]),f[21]||(f[21]=E("div",{class:"bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-start gap-2"},[E("span",{class:"text-amber-500 text-[14px] shrink-0 mt-0.5"},"\u26A0\uFE0F"),E("p",{class:"text-[12px] text-amber-800 leading-relaxed"},[Ye(" \uC0DD\uC131 \uD6C4 \uD14D\uC2A4\uD2B8 \uC815\uB82C \uBCC0\uACBD \uC2DC \uCD94\uD6C4 \uC218\uC815\uAC74 \uAC10\uC9C0\uAC00 \uBD88\uAC00\uD569\uB2C8\uB2E4."),E("br"),E("span",{class:"font-bold"},"\uC0DD\uC131 \uC804 \uD14D\uC2A4\uD2B8 \uC815\uB82C \uBCC0\uACBD \uD6C4 \uC0DD\uC131\uD574 \uC8FC\uC138\uC694.")])],-1)),ce.value||me.value||fe.value||Ee.value?(H(),B("div",jo,[f[7]||(f[7]=E("svg",{class:"animate-spin w-6 h-6 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[E("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),E("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})],-1)),E("span",Ho,ie(Ee.value?"\uB178\uB4DC \uBD84\uC11D \uC911...":ce.value?"\uC2DC\uD2B8 \uD638\uCD9C \uC911...":me.value?"\uD0ED \uB370\uC774\uD130 \uBD88\uB7EC\uC624\uB294 \uC911...":"\uAC80\uC0C9 \uC911..."),1)])):de("",!0),E("main",Vo,[E("section",Uo,[f[14]||(f[14]=E("div",{class:"text-[13px] font-bold text-gray-900"},[Ye("1) \uC2DC\uD2B8 \uD638\uCD9C "),E("span",{class:"text-red-500"},"*")],-1)),f[15]||(f[15]=E("p",{class:"text-[10px] text-gray-500 leading-relaxed"}," \uC2DC\uD2B8 \uD638\uCD9C \uC2DC \uD0ED \uBAA9\uB85D\uACFC \uD568\uAED8 \uC804\uCCB4 \uD0ED\uC758 label/value \uD589\uC744 \uD55C \uBC88\uC5D0 \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uD0ED \uBC94\uC704\uC5D0\uC11C \uD2B9\uC815 \uD0ED\uB9CC \uACE0\uB974\uBA74 \uD574\uB2F9 \uD0ED\uB9CC \uB2E4\uC2DC \uC870\uD68C\uD569\uB2C8\uB2E4. ",-1)),E("div",Bo,[_t(E("select",{"onUpdate:modelValue":f[0]||(f[0]=v=>i.value=v),class:"flex-1 min-w-0 text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500",onChange:dt},[f[8]||(f[8]=E("option",{value:"manual"},"\uC9C1\uC811\uC785\uB825",-1)),(H(!0),B(ge,null,wt(l.value,v=>(H(),B("option",{key:v.url,value:v.url},ie(v.title),9,Wo))),128))],544),[[Jn,i.value]]),E("button",{type:"button",class:"shrink-0 px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:ce.value||!t.value.trim()||!s.value.trim(),onClick:pt},ie(kt.value),9,zo),E("button",{type:"button",class:"px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400",disabled:ce.value||fe.value||pe.value||l.value.length===0,onClick:rs,title:"\uCD5C\uADFC \uC2DC\uD2B8 \uBAA9\uB85D \uBE44\uC6B0\uAE30"}," \uBAA9\uB85D \uBE44\uC6B0\uAE30 ",8,qo)]),i.value==="manual"?_t((H(),B("input",{key:0,"onUpdate:modelValue":f[1]||(f[1]=v=>t.value=v),type:"text",placeholder:"https://docs.google.com/spreadsheets/d/...",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[Ks,t.value]]):de("",!0),s.value.trim()?(H(),B("label",Go,[_t(E("input",{"onUpdate:modelValue":f[2]||(f[2]=v=>n.value=v),type:"checkbox",class:"shrink-0"},null,512),[[Eo,n.value]]),f[9]||(f[9]=Ye(" API \uD0A4 \uBCC0\uACBD ",-1))])):de("",!0),r.value?_t((H(),B("input",{key:2,"onUpdate:modelValue":f[3]||(f[3]=v=>s.value=v),type:"password",placeholder:"Google API Key (AIza...)",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[Ks,s.value]]):de("",!0),E("div",Jo,[f[12]||(f[12]=E("label",{class:"text-[11px] font-medium text-gray-400"},"\uD0ED \uBC94\uC704",-1)),_t(E("select",{"onUpdate:modelValue":f[4]||(f[4]=v=>p.value=v),class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",disabled:a.value.length===0,onChange:vn},[f[10]||(f[10]=E("option",{value:""},"\uC804\uCCB4 \uD0ED",-1)),(H(!0),B(ge,null,wt(a.value,v=>(H(),B("option",{key:v.sheetId,value:v.title},ie(v.title),9,Xo))),128))],40,Yo),[[Jn,p.value]]),f[13]||(f[13]=E("p",{class:"text-[10px] text-gray-500"},"\uD2B9\uC815 \uD0ED\uB9CC \uC120\uD0DD\uD558\uBA74 \uADF8 \uD0ED \uD589\uB9CC \uB2E4\uC2DC \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uC804\uCCB4 \uD0ED\uC73C\uB85C \uB3CC\uB9AC\uBA74 \uC2DC\uD2B8 \uD638\uCD9C \uB54C \uBAA8\uC544 \uB454 \uC804\uCCB4 \uD589 \uBAA9\uB85D\uC744 \uB2E4\uC2DC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.",-1)),me.value?(H(),B("div",Zo,[...f[11]||(f[11]=[E("svg",{class:"animate-spin w-3.5 h-3.5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[E("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),E("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})],-1),E("span",{class:"text-[11px]"},"\uD0ED \uB370\uC774\uD130 \uBD88\uB7EC\uC624\uB294 \uC911...",-1)])])):de("",!0)])]),E("section",Qo,[f[18]||(f[18]=E("div",{class:"text-[13px] font-bold text-gray-900"},"2) \uD0A4\uC6CC\uB4DC \uAC80\uC0C9",-1)),E("div",eu,[_t(E("input",{"onUpdate:modelValue":f[5]||(f[5]=v=>d.value=v),type:"text",placeholder:"\uB450 \uAE00\uC790 \uC774\uC0C1 \uC785\uB825",class:"flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyup:$o(c,["enter"])},null,544),[[Ks,d.value]]),E("button",{class:"px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:fe.value||me.value||!t.value.trim()||!s.value.trim()||!d.value.trim()&&C.value.length===0&&!p.value||!!d.value.trim()&&!d.value.trim().split(",").some(v=>v.trim().length>=2),onClick:u},ie(fe.value?"\uAC80\uC0C9 \uC911...":"\uAC80\uC0C9"),9,tu)]),ce.value||me.value?(H(),B("div",su,[f[16]||(f[16]=E("svg",{class:"animate-spin w-4 h-4 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[E("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),E("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})],-1)),E("span",nu,ie(ce.value?"\uC2DC\uD2B8 \uD638\uCD9C \uC911...":"\uD0ED \uB370\uC774\uD130 \uBD88\uB7EC\uC624\uB294 \uC911..."),1)])):h.value.length?(H(),B("div",ru,[E("div",lu,[E("div",iu," \uACB0\uACFC "+ie(h.value.length)+"\uAC1C / \uC120\uD0DD "+ie(T.value.size)+"\uAC1C ",1),E("div",ou,[j.value.length>0?(H(),B("button",{key:0,class:"text-[11px] px-2 py-1 rounded border border-orange-400 text-orange-700 bg-orange-50 hover:bg-orange-100",onClick:x}," \uC218\uC815\uAC74 \uC120\uD0DD ")):de("",!0),R.value.length>0?(H(),B("button",{key:1,class:"text-[11px] px-2 py-1 rounded border border-blue-400 text-blue-700 bg-blue-50 hover:bg-blue-100",onClick:b}," \uC2E0\uADDC \uC120\uD0DD ")):de("",!0),E("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:y}," \uC804\uCCB4\uC120\uD0DD "),E("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:A}," \uC120\uD0DD\uD574\uC81C ")])]),E("div",uu,[(H(!0),B(ge,null,wt(h.value,v=>(H(),B("label",{key:ye(v),class:Ze(["flex items-start gap-2 px-3 py-2 border-b border-gray-100 last:border-b-0",v.strikethrough?"bg-gray-50 opacity-60 cursor-default":"hover:bg-gray-50",!v.strikethrough&&z.value.has(`${v.tabTitle}::${v.rowNumber}`)?"bg-orange-50":""])},[E("input",{type:"checkbox",class:"mt-1",checked:T.value.has(ye(v)),disabled:v.strikethrough,onChange:O=>!v.strikethrough&&g(v)},null,40,au),E("div",cu,[E("div",fu,[E("span",{class:Ze(["text-[12px] font-semibold truncate",v.strikethrough?"text-gray-400 line-through":"text-gray-800"])},[d.value.trim()&&!v.strikethrough?(H(!0),B(ge,{key:0},wt(ft(v.label||v.name||"(no label)",d.value),(O,F)=>(H(),B("span",{key:F,class:Ze(O.match?"text-blue-500":"")},ie(O.text),3))),128)):(H(),B(ge,{key:1},[Ye(ie(v.label||v.name||"(no label)"),1)],64))],2),E("span",du,"("+ie(v.tabTitle)+" / "+ie(v.rowNumber)+"\uD589)",1),!v.strikethrough&&z.value.has(`${v.tabTitle}::${v.rowNumber}`)?(H(),B("span",pu,"label \uBCC0\uACBD")):de("",!0),!v.strikethrough&&oe.value.has(`${v.tabTitle}::${v.rowNumber}`)?(H(),B("span",hu,"\uC2E0\uADDC")):de("",!0),v.strikethrough?(H(),B("span",gu,"\uC0AD\uC81C\uB428")):de("",!0)]),E("div",{class:Ze(["text-[11px] truncate",v.strikethrough?"text-gray-400":"text-gray-500"])},[f[17]||(f[17]=Ye("value: ",-1)),d.value.trim()&&!v.strikethrough?(H(!0),B(ge,{key:0},wt(ft(v.value,d.value),(O,F)=>(H(),B("span",{key:F,class:Ze(O.match?"text-blue-500":"")},ie(O.text),3))),128)):(H(),B(ge,{key:1},[Ye(ie(v.value),1)],64))],2),v.description&&!v.strikethrough?(H(),B("div",vu,"desc: "+ie(v.description),1)):de("",!0)])],2))),128))]),w.value.length>0?(H(),B("div",bu,[(H(!0),B(ge,null,wt(w.value,v=>(H(),B("span",{key:ye(v),class:"inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200"},[Ye(ie(v.label||v.name||"(no label)")+" ",1),E("button",{type:"button",class:"text-gray-400 hover:text-gray-600 leading-none",onClick:Io(O=>g(v),["prevent"])},"\u2715",8,mu)]))),128))])):de("",!0)])):de("",!0)]),E("section",yu,[f[19]||(f[19]=E("div",{class:"text-[13px] font-bold text-gray-900"},[Ye("3) \uC5F0\uACB0 \uB300\uC0C1 "),E("span",{class:"text-red-500"},"*")],-1)),E("div",{class:Ze(["p-3 rounded-lg border",K.value?"bg-blue-50 border-blue-200":"bg-gray-50 border-gray-200"])},[K.value?(H(),B(ge,{key:0},[E("div",xu,ie(K.value.name),1),E("div",_u,ie(K.value.kind)+" / TEXT \uD504\uB85C\uD37C\uD2F0 "+ie(K.value.textProperties.length)+"\uAC1C ",1),M.value.length>0?(H(),B("p",wu," \uC911\uBCF5\uB41C label\uBA85\uC774 \uC788\uC2B5\uB2C8\uB2E4 : "+ie(M.value.join(", ")),1)):de("",!0)],64)):(H(),B("div",Su," \uC778\uC2A4\uD134\uC2A4(\uB610\uB294 \uC778\uC2A4\uD134\uC2A4\uB97C \uD3EC\uD568\uD55C \uB808\uC774\uC5B4)\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694. "))],2),f[20]||(f[20]=qi(\'<div class="text-[12px] text-gray-600 border-1 border-sky-200 bg-sky-50 rounded-lg p-3"><div class="text-[11px] font-medium text-gray-400 mb-1">\uC790\uB3D9 \uC5F0\uACB0 \uADDC\uCE59</div><div class="text-[11px] text-gray-500 leading-5"> \uC120\uD0DD\uD55C \uB808\uC774\uC5B4\uC758 TEXT \uD504\uB85C\uD37C\uD2F0 \uC911 <code class="text-[10px] bg-sky-200/50 px-1 rounded">label</code>, <code class="text-[10px] bg-sky-200/50 px-1 rounded">value</code>, <code class="text-[10px] bg-sky-200/50 px-1 rounded">description</code> \uC774 \uC874\uC7AC\uD558\uBA74 \uAC01\uAC01 \uC2DC\uD2B8\uC758 \uAC12\uC73C\uB85C \uC790\uB3D9 \uC5F0\uACB0\uD569\uB2C8\uB2E4. (2\uAC1C \uC774\uC0C1 \uC788\uC5B4\uB3C4 \uAC01\uAC01 \uC5F0\uACB0) </div></div>\',1))]),ne.value?(H(),B("p",Cu,ie(ne.value),1)):de("",!0),Se.value?(H(),B("p",Tu,ie(Se.value),1)):de("",!0)]),E("footer",Au,[I.value?(H(),B("p",Mu," \uC77C\uCE58\uD558\uB294 \uD504\uB85C\uD37C\uD2F0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 ")):de("",!0),E("div",Eu,[!S.value||pe.value?(H(),B("div",Ou,[E("button",{class:"w-full py-2.5 rounded-lg font-semibold text-[13px] transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:!N.value||pe.value,onClick:Y},ie(pe.value?"\uC0DD\uC131/\uC5F0\uACB0 \uC911...":P.value?`${T.value.size}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0`:`${T.value.size}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0`),9,Pu),!N.value&&!pe.value&&w.value.length>0?(H(),B("div",Iu," \uC778\uC2A4\uD134\uC2A4 \uB610\uB294 \uC778\uC2A4\uD134\uC2A4\uB97C \uD3EC\uD568\uD55C \uB808\uC774\uC5B4\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694 ")):de("",!0)])):de("",!0),S.value||Pe.value?(H(),B("button",{key:1,class:"flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors border-1 border-gray-900 bg-white text-gray-900 hover:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:bg-white",disabled:Pe.value,onClick:W},ie(Pe.value?"\uB3D9\uAE30\uD654 \uC911...":`\u26A1 ${T.value.size}\uAC1C \uB3D9\uAE30\uD654`),9,Ru)):de("",!0)])])]))}});Fo($u).mount("#app");<\/script>\n    <style rel="stylesheet" crossorigin>/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-400:oklch(75% .183 55.934);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-800:oklch(47% .157 37.304);--color-orange-900:oklch(40.8% .123 38.172);--color-orange-950:oklch(26.6% .079 36.259);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-200:oklch(92.4% .12 95.746);--color-amber-300:oklch(87.9% .169 91.605);--color-amber-400:oklch(82.8% .189 84.429);--color-amber-500:oklch(76.9% .188 70.08);--color-amber-800:oklch(47.3% .137 46.201);--color-amber-900:oklch(41.4% .112 45.904);--color-amber-950:oklch(27.9% .077 45.635);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-700:oklch(50% .134 242.749);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--leading-snug:1.375;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.bottom-full{bottom:100%}.left-1{left:calc(var(--spacing) * 1)}.left-1\\/2{left:50%}.z-10{z-index:10}.z-50{z-index:50}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-6{height:calc(var(--spacing) * 6)}.h-screen{height:100vh}.max-h-24{max-height:calc(var(--spacing) * 24)}.max-h-28{max-height:calc(var(--spacing) * 28)}.max-h-32{max-height:calc(var(--spacing) * 32)}.max-h-36{max-height:calc(var(--spacing) * 36)}.max-h-44{max-height:calc(var(--spacing) * 44)}.max-h-50{max-height:calc(var(--spacing) * 50)}.max-h-60{max-height:calc(var(--spacing) * 60)}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-4{width:calc(var(--spacing) * 4)}.w-6{width:calc(var(--spacing) * 6)}.w-fit{width:fit-content}.w-full{width:100%}.w-max{width:max-content}.max-w-\\[200px\\]{max-width:200px}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-x-1{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-amber-200{border-color:var(--color-amber-200)}.border-amber-300{border-color:var(--color-amber-300)}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-900{border-color:var(--color-blue-900)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-orange-300{border-color:var(--color-orange-300)}.border-orange-400{border-color:var(--color-orange-400)}.border-orange-500{border-color:var(--color-orange-500)}.border-red-200{border-color:var(--color-red-200)}.border-sky-100{border-color:var(--color-sky-100)}.border-sky-200{border-color:var(--color-sky-200)}.bg-amber-50{background-color:var(--color-amber-50)}.bg-amber-400{background-color:var(--color-amber-400)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-orange-50{background-color:var(--color-orange-50)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-red-50{background-color:var(--color-red-50)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-sky-100{background-color:var(--color-sky-100)}.bg-sky-200{background-color:var(--color-sky-200)}.bg-sky-200\\/50{background-color:#b8e6fe80}@supports (color:color-mix(in lab,red,red)){.bg-sky-200\\/50{background-color:color-mix(in oklab,var(--color-sky-200) 50%,transparent)}}.bg-white{background-color:var(--color-white)}.bg-white\\/70{background-color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.bg-white\\/70{background-color:color-mix(in oklab,var(--color-white) 70%,transparent)}}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-6{padding-block:calc(var(--spacing) * 6)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pl-1{padding-left:calc(var(--spacing) * 1)}.text-center{text-align:center}.font-sans{font-family:var(--font-sans)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-amber-500{color:var(--color-amber-500)}.text-amber-800{color:var(--color-amber-800)}.text-amber-900{color:var(--color-amber-900)}.text-amber-950{color:var(--color-amber-950)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-orange-700{color:var(--color-orange-700)}.text-orange-800{color:var(--color-orange-800)}.text-orange-900{color:var(--color-orange-900)}.text-orange-950{color:var(--color-orange-950)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-700{color:var(--color-red-700)}.text-sky-700{color:var(--color-sky-700)}.text-sky-900{color:var(--color-sky-900)}.text-sky-950{color:var(--color-sky-950)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.line-through{text-decoration-line:line-through}.opacity-25{opacity:.25}.opacity-60{opacity:.6}.opacity-75{opacity:.75}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-orange-200{--tw-ring-color:var(--color-orange-200)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media(hover:hover){.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-orange-100:hover{background-color:var(--color-orange-100)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:border-gray-300:disabled{border-color:var(--color-gray-300)}.disabled\\:bg-gray-100:disabled{background-color:var(--color-gray-100)}.disabled\\:bg-gray-300:disabled{background-color:var(--color-gray-300)}.disabled\\:bg-white:disabled{background-color:var(--color-white)}.disabled\\:text-gray-400:disabled{color:var(--color-gray-400)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}</style>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n</html>\n', { width: 460, height: 960, title: "SheetToComponent" });
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
      var SNAPSHOT_NODE_CACHE_KEY_PREFIX = "SheetToComponent.snapshotNodeId.";
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
        return currRows.filter((r) => !r.strikethrough && !prevKeys.has(`${r.tabTitle}::${r.rowNumber}`)).map((r) => ({ tabTitle: r.tabTitle, rowNumber: r.rowNumber, label: r.label, value: r.value }));
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
          figma.currentPage.setPluginData(SNAPSHOT_NODE_CACHE_KEY_PREFIX + spreadsheetId, root.id);
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
      var LEAF_NODE_TYPES = /* @__PURE__ */ new Set(["TEXT", "VECTOR", "RECTANGLE", "ELLIPSE", "POLYGON", "STAR", "LINE", "BOOLEAN_OPERATION", "SLICE"]);
      function findAnySnapshotOnPage(page, spreadsheetId) {
        if (spreadsheetId) {
          try {
            const cachedId = page.getPluginData(SNAPSHOT_NODE_CACHE_KEY_PREFIX + spreadsheetId);
            if (cachedId) {
              const cachedNode = figma.getNodeById(cachedId);
              if (cachedNode && !cachedNode.removed) {
                const snap = readSheetSnapshotFromNode(cachedNode);
                if (snap && snap.spreadsheetId === spreadsheetId) {
                  return { node: cachedNode, snapshot: snap };
                }
              }
              page.setPluginData(SNAPSHOT_NODE_CACHE_KEY_PREFIX + spreadsheetId, "");
            }
          } catch (e) {
          }
        }
        const candidates = [];
        function visit(node) {
          try {
            if (node.removed) return;
            if (LEAF_NODE_TYPES.has(node.type)) return;
            const snap = readSheetSnapshotFromNode(node);
            if (snap && (!spreadsheetId || snap.spreadsheetId === spreadsheetId)) {
              candidates.push({ node, snapshot: snap });
            }
            if ("children" in node) {
              for (const child of node.children) {
                visit(child);
              }
            }
          } catch (e) {
          }
        }
        for (const child of page.children) {
          visit(child);
        }
        if (candidates.length === 0) return null;
        candidates.sort((a, b) => {
          const ta = a.snapshot.capturedAt ? new Date(a.snapshot.capturedAt).getTime() : 0;
          const tb = b.snapshot.capturedAt ? new Date(b.snapshot.capturedAt).getTime() : 0;
          return tb - ta;
        });
        const best = candidates[0];
        if (spreadsheetId) {
          try {
            page.setPluginData(SNAPSHOT_NODE_CACHE_KEY_PREFIX + spreadsheetId, best.node.id);
          } catch (e) {
          }
        }
        return best;
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
            figma.ui.postMessage({ type: "node-scanning" });
            yield new Promise((resolve) => setTimeout(resolve, 32));
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
            figma.ui.postMessage({ type: "node-scanning" });
            yield new Promise((resolve) => setTimeout(resolve, 32));
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
