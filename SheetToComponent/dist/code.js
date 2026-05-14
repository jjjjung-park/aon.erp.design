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
      figma.showUI('<!DOCTYPE html>\n<html lang="ko">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>SheetToComponent</title>\n    <script type="module" crossorigin>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();/**\n* @vue/shared v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function Zs(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const te={},wt=[],Ve=()=>{},Zn=()=>!1,ms=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ys=e=>e.startsWith("onUpdate:"),pe=Object.assign,Qs=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},ll=Object.prototype.hasOwnProperty,Y=(e,t)=>ll.call(e,t),F=Array.isArray,St=e=>Zt(e)==="[object Map]",Ot=e=>Zt(e)==="[object Set]",vn=e=>Zt(e)==="[object Date]",L=e=>typeof e=="function",ue=e=>typeof e=="string",Be=e=>typeof e=="symbol",Q=e=>e!==null&&typeof e=="object",Qn=e=>(Q(e)||L(e))&&L(e.then)&&L(e.catch),er=Object.prototype.toString,Zt=e=>er.call(e),il=e=>Zt(e).slice(8,-1),tr=e=>Zt(e)==="[object Object]",en=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Lt=Zs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xs=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},ol=/-\\w/g,Re=xs(e=>e.replace(ol,t=>t.slice(1).toUpperCase())),ul=/\\B([A-Z])/g,ut=xs(e=>e.replace(ul,"-$1").toLowerCase()),sr=xs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Is=xs(e=>e?`on${sr(e)}`:""),He=(e,t)=>!Object.is(e,t),us=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},nr=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},_s=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let mn;const ws=()=>mn||(mn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(e){if(F(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],r=ue(n)?dl(n):tn(n);if(r)for(const l in r)t[l]=r[l]}return t}else if(ue(e)||Q(e))return e}const cl=/;(?![^(]*\\))/g,al=/:([^]+)/,fl=/\\/\\*[^]*?\\*\\//g;function dl(e){const t={};return e.replace(fl,"").split(cl).forEach(s=>{if(s){const n=s.split(al);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Je(e){let t="";if(ue(e))t=e;else if(F(e))for(let s=0;s<e.length;s++){const n=Je(e[s]);n&&(t+=n+" ")}else if(Q(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pl=Zs(hl);function rr(e){return!!e||e===""}function gl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=Pt(e[n],t[n]);return s}function Pt(e,t){if(e===t)return!0;let s=vn(e),n=vn(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=Be(e),n=Be(t),s||n)return e===t;if(s=F(e),n=F(t),s||n)return s&&n?gl(e,t):!1;if(s=Q(e),n=Q(t),s||n){if(!s||!n)return!1;const r=Object.keys(e).length,l=Object.keys(t).length;if(r!==l)return!1;for(const i in e){const o=e.hasOwnProperty(i),c=t.hasOwnProperty(i);if(o&&!c||!o&&c||!Pt(e[i],t[i]))return!1}}return String(e)===String(t)}function sn(e,t){return e.findIndex(s=>Pt(s,t))}const lr=e=>!!(e&&e.__v_isRef===!0),oe=e=>ue(e)?e:e==null?"":F(e)||Q(e)&&(e.toString===er||!L(e.toString))?lr(e)?oe(e.value):JSON.stringify(e,ir,2):String(e),ir=(e,t)=>lr(t)?ir(e,t.value):St(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,r],l)=>(s[Rs(n,l)+" =>"]=r,s),{})}:Ot(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Rs(s))}:Be(t)?Rs(t):Q(t)&&!F(t)&&!tr(t)?String(t):t,Rs=(e,t="")=>{var s;return Be(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**\n* @vue/reactivity v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let be;class bl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=be;try{return be=this,t()}finally{be=s}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){if(this._on>0&&--this._on===0){if(be===this)be=this.prevScope;else{let t=be;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function vl(){return be}let ne;const $s=new WeakSet;class or{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$s.has(this)&&($s.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yn(this),ar(this);const t=ne,s=$e;ne=this,$e=!0;try{return this.fn()}finally{fr(this),ne=t,$e=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ln(t);this.deps=this.depsTail=void 0,yn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$s.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hs(this)&&this.run()}get dirty(){return Hs(this)}}let ur=0,Kt,jt;function cr(e,t=!1){if(e.flags|=8,t){e.next=jt,jt=e;return}e.next=Kt,Kt=e}function nn(){ur++}function rn(){if(--ur>0)return;if(jt){let t=jt;for(jt=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Kt;){let t=Kt;for(Kt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function ar(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fr(e){let t,s=e.depsTail,n=s;for(;n;){const r=n.prevDep;n.version===-1?(n===s&&(s=r),ln(n),ml(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=t,e.depsTail=s}function Hs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(dr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function dr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qt)||(e.globalVersion=qt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Hs(e))))return;e.flags|=2;const t=e.dep,s=ne,n=$e;ne=e,$e=!0;try{ar(e);const r=e.fn(e._value);(t.version===0||He(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ne=s,$e=n,fr(e),e.flags&=-3}}function ln(e,t=!1){const{dep:s,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let l=s.computed.deps;l;l=l.nextDep)ln(l,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function ml(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let $e=!0;const hr=[];function et(){hr.push($e),$e=!1}function tt(){const e=hr.pop();$e=e===void 0?!0:e}function yn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=ne;ne=void 0;try{t()}finally{ne=s}}}let qt=0;class yl{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class on{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ne||!$e||ne===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==ne)s=this.activeLink=new yl(ne,this),ne.deps?(s.prevDep=ne.depsTail,ne.depsTail.nextDep=s,ne.depsTail=s):ne.deps=ne.depsTail=s,pr(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=ne.depsTail,s.nextDep=void 0,ne.depsTail.nextDep=s,ne.depsTail=s,ne.deps===s&&(ne.deps=n)}return s}trigger(t){this.version++,qt++,this.notify(t)}notify(t){nn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{rn()}}}function pr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)pr(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Vs=new WeakMap,gt=Symbol(""),Us=Symbol(""),zt=Symbol("");function ve(e,t,s){if($e&&ne){let n=Vs.get(e);n||Vs.set(e,n=new Map);let r=n.get(s);r||(n.set(s,r=new on),r.map=n,r.key=s),r.track()}}function Xe(e,t,s,n,r,l){const i=Vs.get(e);if(!i){qt++;return}const o=c=>{c&&c.trigger()};if(nn(),t==="clear")i.forEach(o);else{const c=F(e),h=c&&en(s);if(c&&s==="length"){const f=Number(n);i.forEach((p,T)=>{(T==="length"||T===zt||!Be(T)&&T>=f)&&o(p)})}else switch((s!==void 0||i.has(void 0))&&o(i.get(s)),h&&o(i.get(zt)),t){case"add":c?h&&o(i.get("length")):(o(i.get(gt)),St(e)&&o(i.get(Us)));break;case"delete":c||(o(i.get(gt)),St(e)&&o(i.get(Us)));break;case"set":St(e)&&o(i.get(gt));break}}rn()}function mt(e){const t=J(e);return t===e?t:(ve(t,"iterate",zt),Ie(e)?t:t.map(Ne))}function Ss(e){return ve(e=J(e),"iterate",zt),e}function Ke(e,t){return st(e)?At(bt(e)?Ne(t):t):Ne(t)}const xl={__proto__:null,[Symbol.iterator](){return Ns(this,Symbol.iterator,e=>Ke(this,e))},concat(...e){return mt(this).concat(...e.map(t=>F(t)?mt(t):t))},entries(){return Ns(this,"entries",e=>(e[1]=Ke(this,e[1]),e))},every(e,t){return ze(this,"every",e,t,void 0,arguments)},filter(e,t){return ze(this,"filter",e,t,s=>s.map(n=>Ke(this,n)),arguments)},find(e,t){return ze(this,"find",e,t,s=>Ke(this,s),arguments)},findIndex(e,t){return ze(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ze(this,"findLast",e,t,s=>Ke(this,s),arguments)},findLastIndex(e,t){return ze(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ze(this,"forEach",e,t,void 0,arguments)},includes(...e){return Fs(this,"includes",e)},indexOf(...e){return Fs(this,"indexOf",e)},join(e){return mt(this).join(e)},lastIndexOf(...e){return Fs(this,"lastIndexOf",e)},map(e,t){return ze(this,"map",e,t,void 0,arguments)},pop(){return Nt(this,"pop")},push(...e){return Nt(this,"push",e)},reduce(e,...t){return xn(this,"reduce",e,t)},reduceRight(e,...t){return xn(this,"reduceRight",e,t)},shift(){return Nt(this,"shift")},some(e,t){return ze(this,"some",e,t,void 0,arguments)},splice(...e){return Nt(this,"splice",e)},toReversed(){return mt(this).toReversed()},toSorted(e){return mt(this).toSorted(e)},toSpliced(...e){return mt(this).toSpliced(...e)},unshift(...e){return Nt(this,"unshift",e)},values(){return Ns(this,"values",e=>Ke(this,e))}};function Ns(e,t,s){const n=Ss(e),r=n[t]();return n!==e&&!Ie(e)&&(r._next=r.next,r.next=()=>{const l=r._next();return l.done||(l.value=s(l.value)),l}),r}const _l=Array.prototype;function ze(e,t,s,n,r,l){const i=Ss(e),o=i!==e&&!Ie(e),c=i[t];if(c!==_l[t]){const p=c.apply(e,l);return o?Ne(p):p}let h=s;i!==e&&(o?h=function(p,T){return s.call(this,Ke(e,p),T,e)}:s.length>2&&(h=function(p,T){return s.call(this,p,T,e)}));const f=c.call(i,h,n);return o&&r?r(f):f}function xn(e,t,s,n){const r=Ss(e),l=r!==e&&!Ie(e);let i=s,o=!1;r!==e&&(l?(o=n.length===0,i=function(h,f,p){return o&&(o=!1,h=Ke(e,h)),s.call(this,h,Ke(e,f),p,e)}):s.length>3&&(i=function(h,f,p){return s.call(this,h,f,p,e)}));const c=r[t](i,...n);return o?Ke(e,c):c}function Fs(e,t,s){const n=J(e);ve(n,"iterate",zt);const r=n[t](...s);return(r===-1||r===!1)&&fn(s[0])?(s[0]=J(s[0]),n[t](...s)):r}function Nt(e,t,s=[]){et(),nn();const n=J(e)[t].apply(e,s);return rn(),tt(),n}const wl=Zs("__proto__,__v_isRef,__isVue"),gr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Be));function Sl(e){Be(e)||(e=String(e));const t=J(this);return ve(t,"has",e),t.hasOwnProperty(e)}class br{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const r=this._isReadonly,l=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return l;if(s==="__v_raw")return n===(r?l?$l:xr:l?yr:mr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const i=F(t);if(!r){let c;if(i&&(c=xl[s]))return c;if(s==="hasOwnProperty")return Sl}const o=Reflect.get(t,s,me(t)?t:n);if((Be(s)?gr.has(s):wl(s))||(r||ve(t,"get",s),l))return o;if(me(o)){const c=i&&en(s)?o:o.value;return r&&Q(c)?Ws(c):c}return Q(o)?r?Ws(o):cn(o):o}}class vr extends br{constructor(t=!1){super(!1,t)}set(t,s,n,r){let l=t[s];const i=F(t)&&en(s);if(!this._isShallow){const h=st(l);if(!Ie(n)&&!st(n)&&(l=J(l),n=J(n)),!i&&me(l)&&!me(n))return h||(l.value=n),!0}const o=i?Number(s)<t.length:Y(t,s),c=Reflect.set(t,s,n,me(t)?t:r);return t===J(r)&&(o?He(n,l)&&Xe(t,"set",s,n):Xe(t,"add",s,n)),c}deleteProperty(t,s){const n=Y(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&n&&Xe(t,"delete",s,void 0),r}has(t,s){const n=Reflect.has(t,s);return(!Be(s)||!gr.has(s))&&ve(t,"has",s),n}ownKeys(t){return ve(t,"iterate",F(t)?"length":gt),Reflect.ownKeys(t)}}class Cl extends br{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Tl=new vr,Al=new Cl,Ml=new vr(!0);const Bs=e=>e,ls=e=>Reflect.getPrototypeOf(e);function El(e,t,s){return function(...n){const r=this.__v_raw,l=J(r),i=St(l),o=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,h=r[e](...n),f=s?Bs:t?At:Ne;return!t&&ve(l,"iterate",c?Us:gt),pe(Object.create(h),{next(){const{value:p,done:T}=h.next();return T?{value:p,done:T}:{value:o?[f(p[0]),f(p[1])]:f(p),done:T}}})}}function is(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ol(e,t){const s={get(r){const l=this.__v_raw,i=J(l),o=J(r);e||(He(r,o)&&ve(i,"get",r),ve(i,"get",o));const{has:c}=ls(i),h=t?Bs:e?At:Ne;if(c.call(i,r))return h(l.get(r));if(c.call(i,o))return h(l.get(o));l!==i&&l.get(r)},get size(){const r=this.__v_raw;return!e&&ve(J(r),"iterate",gt),r.size},has(r){const l=this.__v_raw,i=J(l),o=J(r);return e||(He(r,o)&&ve(i,"has",r),ve(i,"has",o)),r===o?l.has(r):l.has(r)||l.has(o)},forEach(r,l){const i=this,o=i.__v_raw,c=J(o),h=t?Bs:e?At:Ne;return!e&&ve(c,"iterate",gt),o.forEach((f,p)=>r.call(l,h(f),h(p),i))}};return pe(s,e?{add:is("add"),set:is("set"),delete:is("delete"),clear:is("clear")}:{add(r){const l=J(this),i=ls(l),o=J(r),c=!t&&!Ie(r)&&!st(r)?o:r;return i.has.call(l,c)||He(r,c)&&i.has.call(l,r)||He(o,c)&&i.has.call(l,o)||(l.add(c),Xe(l,"add",c,c)),this},set(r,l){!t&&!Ie(l)&&!st(l)&&(l=J(l));const i=J(this),{has:o,get:c}=ls(i);let h=o.call(i,r);h||(r=J(r),h=o.call(i,r));const f=c.call(i,r);return i.set(r,l),h?He(l,f)&&Xe(i,"set",r,l):Xe(i,"add",r,l),this},delete(r){const l=J(this),{has:i,get:o}=ls(l);let c=i.call(l,r);c||(r=J(r),c=i.call(l,r)),o&&o.call(l,r);const h=l.delete(r);return c&&Xe(l,"delete",r,void 0),h},clear(){const r=J(this),l=r.size!==0,i=r.clear();return l&&Xe(r,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=El(r,e,t)}),s}function un(e,t){const s=Ol(e,t);return(n,r,l)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(Y(s,r)&&r in n?s:n,r,l)}const Pl={get:un(!1,!1)},Il={get:un(!1,!0)},Rl={get:un(!0,!1)};const mr=new WeakMap,yr=new WeakMap,xr=new WeakMap,$l=new WeakMap;function Nl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fl(e){return e.__v_skip||!Object.isExtensible(e)?0:Nl(il(e))}function cn(e){return st(e)?e:an(e,!1,Tl,Pl,mr)}function Dl(e){return an(e,!1,Ml,Il,yr)}function Ws(e){return an(e,!0,Al,Rl,xr)}function an(e,t,s,n,r){if(!Q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Fl(e);if(l===0)return e;const i=r.get(e);if(i)return i;const o=new Proxy(e,l===2?n:s);return r.set(e,o),o}function bt(e){return st(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function st(e){return!!(e&&e.__v_isReadonly)}function Ie(e){return!!(e&&e.__v_isShallow)}function fn(e){return e?!!e.__v_raw:!1}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function kl(e){return!Y(e,"__v_skip")&&Object.isExtensible(e)&&nr(e,"__v_skip",!0),e}const Ne=e=>Q(e)?cn(e):e,At=e=>Q(e)?Ws(e):e;function me(e){return e?e.__v_isRef===!0:!1}function le(e){return Ll(e,!1)}function Ll(e,t){return me(e)?e:new Kl(e,t)}class Kl{constructor(t,s){this.dep=new on,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:J(t),this._value=s?t:Ne(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||Ie(t)||st(t);t=n?t:J(t),He(t,s)&&(this._rawValue=t,this._value=n?t:Ne(t),this.dep.trigger())}}function jl(e){return me(e)?e.value:e}const Hl={get:(e,t,s)=>t==="__v_raw"?e:jl(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const r=e[t];return me(r)&&!me(s)?(r.value=s,!0):Reflect.set(e,t,s,n)}};function _r(e){return bt(e)?e:new Proxy(e,Hl)}class Vl{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new on(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ne!==this)return cr(this,!0),!0}get value(){const t=this.dep.track();return dr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ul(e,t,s=!1){let n,r;return L(e)?n=e:(n=e.get,r=e.set),new Vl(n,r,s)}const os={},ds=new WeakMap;let pt;function Bl(e,t=!1,s=pt){if(s){let n=ds.get(s);n||ds.set(s,n=[]),n.push(e)}}function Wl(e,t,s=te){const{immediate:n,deep:r,once:l,scheduler:i,augmentJob:o,call:c}=s,h=I=>r?I:Ie(I)||r===!1||r===0?Ze(I,1):Ze(I);let f,p,T,A,K=!1,R=!1;if(me(e)?(p=()=>e.value,K=Ie(e)):bt(e)?(p=()=>h(e),K=!0):F(e)?(R=!0,K=e.some(I=>bt(I)||Ie(I)),p=()=>e.map(I=>{if(me(I))return I.value;if(bt(I))return h(I);if(L(I))return c?c(I,2):I()})):L(e)?t?p=c?()=>c(e,2):e:p=()=>{if(T){et();try{T()}finally{tt()}}const I=pt;pt=f;try{return c?c(e,3,[A]):e(A)}finally{pt=I}}:p=Ve,t&&r){const I=p,ie=r===!0?1/0:r;p=()=>Ze(I(),ie)}const se=vl(),X=()=>{f.stop(),se&&se.active&&Qs(se.effects,f)};if(l&&t){const I=t;t=(...ie)=>{I(...ie),X()}}let H=R?new Array(e.length).fill(os):os;const z=I=>{if(!(!(f.flags&1)||!f.dirty&&!I))if(t){const ie=f.run();if(r||K||(R?ie.some((ge,ce)=>He(ge,H[ce])):He(ie,H))){T&&T();const ge=pt;pt=f;try{const ce=[ie,H===os?void 0:R&&H[0]===os?[]:H,A];H=ie,c?c(t,3,ce):t(...ce)}finally{pt=ge}}}else f.run()};return o&&o(z),f=new or(p),f.scheduler=i?()=>i(z,!1):z,A=I=>Bl(I,!1,f),T=f.onStop=()=>{const I=ds.get(f);if(I){if(c)c(I,4);else for(const ie of I)ie();ds.delete(f)}},t?n?z(!0):H=f.run():i?i(z.bind(null,!0),!0):f.run(),X.pause=f.pause.bind(f),X.resume=f.resume.bind(f),X.stop=X,X}function Ze(e,t=1/0,s){if(t<=0||!Q(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,me(e))Ze(e.value,t,s);else if(F(e))for(let n=0;n<e.length;n++)Ze(e[n],t,s);else if(Ot(e)||St(e))e.forEach(n=>{Ze(n,t,s)});else if(tr(e)){for(const n in e)Ze(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ze(e[n],t,s)}return e}/**\n* @vue/runtime-core v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/function Qt(e,t,s,n){try{return n?e(...n):e()}catch(r){Cs(r,t,s)}}function We(e,t,s,n){if(L(e)){const r=Qt(e,t,s,n);return r&&Qn(r)&&r.catch(l=>{Cs(l,t,s)}),r}if(F(e)){const r=[];for(let l=0;l<e.length;l++)r.push(We(e[l],t,s,n));return r}}function Cs(e,t,s,n=!0){const r=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||te;if(t){let o=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,c,h)===!1)return}o=o.parent}if(l){et(),Qt(l,null,10,[e,c,h]),tt();return}}ql(e,s,r,n,i)}function ql(e,t,s,n=!0,r=!1){if(r)throw e;console.error(e)}const we=[];let Le=-1;const Ct=[];let lt=null,_t=0;const wr=Promise.resolve();let hs=null;function Sr(e){const t=hs||wr;return e?t.then(this?e.bind(this):e):t}function zl(e){let t=Le+1,s=we.length;for(;t<s;){const n=t+s>>>1,r=we[n],l=Gt(r);l<e||l===e&&r.flags&2?t=n+1:s=n}return t}function dn(e){if(!(e.flags&1)){const t=Gt(e),s=we[we.length-1];!s||!(e.flags&2)&&t>=Gt(s)?we.push(e):we.splice(zl(t),0,e),e.flags|=1,Cr()}}function Cr(){hs||(hs=wr.then(Ar))}function Gl(e){F(e)?Ct.push(...e):lt&&e.id===-1?lt.splice(_t+1,0,e):e.flags&1||(Ct.push(e),e.flags|=1),Cr()}function _n(e,t,s=Le+1){for(;s<we.length;s++){const n=we[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;we.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Tr(e){if(Ct.length){const t=[...new Set(Ct)].sort((s,n)=>Gt(s)-Gt(n));if(Ct.length=0,lt){lt.push(...t);return}for(lt=t,_t=0;_t<lt.length;_t++){const s=lt[_t];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}lt=null,_t=0}}const Gt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ar(e){try{for(Le=0;Le<we.length;Le++){const t=we[Le];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Qt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Le<we.length;Le++){const t=we[Le];t&&(t.flags&=-2)}Le=-1,we.length=0,Tr(),hs=null,(we.length||Ct.length)&&Ar()}}let Pe=null,Mr=null;function ps(e){const t=Pe;return Pe=e,Mr=e&&e.type.__scopeId||null,t}function Jl(e,t=Pe,s){if(!t||e._n)return e;const n=(...r)=>{n._d&&Rn(-1);const l=ps(t);let i;try{i=e(...r)}finally{ps(l),n._d&&Rn(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function yt(e,t){if(Pe===null)return e;const s=Es(Pe),n=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[l,i,o,c=te]=t[r];l&&(L(l)&&(l={mounted:l,updated:l}),l.deep&&Ze(i),n.push({dir:l,instance:s,value:i,oldValue:void 0,arg:o,modifiers:c}))}return e}function dt(e,t,s,n){const r=e.dirs,l=t&&t.dirs;for(let i=0;i<r.length;i++){const o=r[i];l&&(o.oldValue=l[i].value);let c=o.dir[n];c&&(et(),We(c,s,8,[e.el,o,e,t]),tt())}}function Yl(e,t){if(Se){let s=Se.provides;const n=Se.parent&&Se.parent.provides;n===s&&(s=Se.provides=Object.create(n)),s[e]=t}}function cs(e,t,s=!1){const n=Xi();if(n||Tt){let r=Tt?Tt._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&L(t)?t.call(n&&n.proxy):t}}const Xl=Symbol.for("v-scx"),Zl=()=>cs(Xl);function Ht(e,t,s){return Er(e,t,s)}function Er(e,t,s=te){const{immediate:n,deep:r,flush:l,once:i}=s,o=pe({},s),c=t&&n||!t&&l!=="post";let h;if(Yt){if(l==="sync"){const A=Zl();h=A.__watcherHandles||(A.__watcherHandles=[])}else if(!c){const A=()=>{};return A.stop=Ve,A.resume=Ve,A.pause=Ve,A}}const f=Se;o.call=(A,K,R)=>We(A,f,K,R);let p=!1;l==="post"?o.scheduler=A=>{Te(A,f&&f.suspense)}:l!=="sync"&&(p=!0,o.scheduler=(A,K)=>{K?A():dn(A)}),o.augmentJob=A=>{t&&(A.flags|=4),p&&(A.flags|=2,f&&(A.id=f.uid,A.i=f))};const T=Wl(e,t,o);return Yt&&(h?h.push(T):c&&T()),T}function Ql(e,t,s){const n=this.proxy,r=ue(e)?e.includes(".")?Or(n,e):()=>n[e]:e.bind(n,n);let l;L(t)?l=t:(l=t.handler,s=t);const i=es(this),o=Er(r,l.bind(n),s);return i(),o}function Or(e,t){const s=t.split(".");return()=>{let n=e;for(let r=0;r<s.length&&n;r++)n=n[s[r]];return n}}const ei=Symbol("_vte"),ti=e=>e.__isTeleport,si=Symbol("_leaveCb");function hn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,hn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ni(e,t){return L(e)?pe({name:e.name},t,{setup:e}):e}function Pr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function wn(e,t){let s;return!!((s=Object.getOwnPropertyDescriptor(e,t))&&!s.configurable)}const gs=new WeakMap;function Vt(e,t,s,n,r=!1){if(F(e)){e.forEach((R,se)=>Vt(R,t&&(F(t)?t[se]:t),s,n,r));return}if(Ut(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Vt(e,t,s,n.component.subTree);return}const l=n.shapeFlag&4?Es(n.component):n.el,i=r?null:l,{i:o,r:c}=e,h=t&&t.r,f=o.refs===te?o.refs={}:o.refs,p=o.setupState,T=J(p),A=p===te?Zn:R=>wn(f,R)?!1:Y(T,R),K=(R,se)=>!(se&&wn(f,se));if(h!=null&&h!==c){if(Sn(t),ue(h))f[h]=null,A(h)&&(p[h]=null);else if(me(h)){const R=t;K(h,R.k)&&(h.value=null),R.k&&(f[R.k]=null)}}if(L(c))Qt(c,o,12,[i,f]);else{const R=ue(c),se=me(c);if(R||se){const X=()=>{if(e.f){const H=R?A(c)?p[c]:f[c]:K()||!e.k?c.value:f[e.k];if(r)F(H)&&Qs(H,l);else if(F(H))H.includes(l)||H.push(l);else if(R)f[c]=[l],A(c)&&(p[c]=f[c]);else{const z=[l];K(c,e.k)&&(c.value=z),e.k&&(f[e.k]=z)}}else R?(f[c]=i,A(c)&&(p[c]=i)):se&&(K(c,e.k)&&(c.value=i),e.k&&(f[e.k]=i))};if(i){const H=()=>{X(),gs.delete(e)};H.id=-1,gs.set(e,H),Te(H,s)}else Sn(e),X()}}}function Sn(e){const t=gs.get(e);t&&(t.flags|=8,gs.delete(e))}ws().requestIdleCallback;ws().cancelIdleCallback;const Ut=e=>!!e.type.__asyncLoader,Ir=e=>e.type.__isKeepAlive;function ri(e,t){Rr(e,"a",t)}function li(e,t){Rr(e,"da",t)}function Rr(e,t,s=Se){const n=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ts(t,n,s),s){let r=s.parent;for(;r&&r.parent;)Ir(r.parent.vnode)&&ii(n,t,s,r),r=r.parent}}function ii(e,t,s,n){const r=Ts(t,e,n,!0);Nr(()=>{Qs(n[t],r)},s)}function Ts(e,t,s=Se,n=!1){if(s){const r=s[e]||(s[e]=[]),l=t.__weh||(t.__weh=(...i)=>{et();const o=es(s),c=We(t,s,e,i);return o(),tt(),c});return n?r.unshift(l):r.push(l),l}}const nt=e=>(t,s=Se)=>{(!Yt||e==="sp")&&Ts(e,(...n)=>t(...n),s)},oi=nt("bm"),$r=nt("m"),ui=nt("bu"),ci=nt("u"),ai=nt("bum"),Nr=nt("um"),fi=nt("sp"),di=nt("rtg"),hi=nt("rtc");function pi(e,t=Se){Ts("ec",e,t)}const gi=Symbol.for("v-ndc");function xt(e,t,s,n){let r;const l=s,i=F(e);if(i||ue(e)){const o=i&&bt(e);let c=!1,h=!1;o&&(c=!Ie(e),h=st(e),e=Ss(e)),r=new Array(e.length);for(let f=0,p=e.length;f<p;f++)r[f]=t(c?h?At(Ne(e[f])):Ne(e[f]):e[f],f,void 0,l)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,l)}else if(Q(e))if(e[Symbol.iterator])r=Array.from(e,(o,c)=>t(o,c,void 0,l));else{const o=Object.keys(e);r=new Array(o.length);for(let c=0,h=o.length;c<h;c++){const f=o[c];r[c]=t(e[f],f,c,l)}}else r=[];return r}const qs=e=>e?tl(e)?Es(e):qs(e.parent):null,Bt=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>qs(e.parent),$root:e=>qs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Dr(e),$forceUpdate:e=>e.f||(e.f=()=>{dn(e.update)}),$nextTick:e=>e.n||(e.n=Sr.bind(e.proxy)),$watch:e=>Ql.bind(e)}),Ds=(e,t)=>e!==te&&!e.__isScriptSetup&&Y(e,t),bi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:r,props:l,accessCache:i,type:o,appContext:c}=e;if(t[0]!=="$"){const T=i[t];if(T!==void 0)switch(T){case 1:return n[t];case 2:return r[t];case 4:return s[t];case 3:return l[t]}else{if(Ds(n,t))return i[t]=1,n[t];if(r!==te&&Y(r,t))return i[t]=2,r[t];if(Y(l,t))return i[t]=3,l[t];if(s!==te&&Y(s,t))return i[t]=4,s[t];zs&&(i[t]=0)}}const h=Bt[t];let f,p;if(h)return t==="$attrs"&&ve(e.attrs,"get",""),h(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(s!==te&&Y(s,t))return i[t]=4,s[t];if(p=c.config.globalProperties,Y(p,t))return p[t]},set({_:e},t,s){const{data:n,setupState:r,ctx:l}=e;return Ds(r,t)?(r[t]=s,!0):n!==te&&Y(n,t)?(n[t]=s,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:r,props:l,type:i}},o){let c;return!!(s[o]||e!==te&&o[0]!=="$"&&Y(e,o)||Ds(t,o)||Y(l,o)||Y(n,o)||Y(Bt,o)||Y(r.config.globalProperties,o)||(c=i.__cssModules)&&c[o])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:Y(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Cn(e){return F(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let zs=!0;function vi(e){const t=Dr(e),s=e.proxy,n=e.ctx;zs=!1,t.beforeCreate&&Tn(t.beforeCreate,e,"bc");const{data:r,computed:l,methods:i,watch:o,provide:c,inject:h,created:f,beforeMount:p,mounted:T,beforeUpdate:A,updated:K,activated:R,deactivated:se,beforeDestroy:X,beforeUnmount:H,destroyed:z,unmounted:I,render:ie,renderTracked:ge,renderTriggered:ce,errorCaptured:fe,serverPrefetch:Ee,expose:Ce,inheritAttrs:ee,components:ye,directives:ct,filters:It}=t;if(h&&mi(h,n,null),i)for(const re in i){const U=i[re];L(U)&&(n[re]=U.bind(s))}if(r){const re=r.call(s,s);Q(re)&&(e.data=cn(re))}if(zs=!0,l)for(const re in l){const U=l[re],Fe=L(U)?U.bind(s,s):L(U.get)?U.get.bind(s,s):Ve,at=!L(U)&&L(U.set)?U.set.bind(s):Ve,xe=Oe({get:Fe,set:at});Object.defineProperty(n,re,{enumerable:!0,configurable:!0,get:()=>xe.value,set:Ae=>xe.value=Ae})}if(o)for(const re in o)Fr(o[re],n,s,re);if(c){const re=L(c)?c.call(s):c;Reflect.ownKeys(re).forEach(U=>{Yl(U,re[U])})}f&&Tn(f,e,"c");function ae(re,U){F(U)?U.forEach(Fe=>re(Fe.bind(s))):U&&re(U.bind(s))}if(ae(oi,p),ae($r,T),ae(ui,A),ae(ci,K),ae(ri,R),ae(li,se),ae(pi,fe),ae(hi,ge),ae(di,ce),ae(ai,H),ae(Nr,I),ae(fi,Ee),F(Ce))if(Ce.length){const re=e.exposed||(e.exposed={});Ce.forEach(U=>{Object.defineProperty(re,U,{get:()=>s[U],set:Fe=>s[U]=Fe,enumerable:!0})})}else e.exposed||(e.exposed={});ie&&e.render===Ve&&(e.render=ie),ee!=null&&(e.inheritAttrs=ee),ye&&(e.components=ye),ct&&(e.directives=ct),Ee&&Pr(e)}function mi(e,t,s=Ve){F(e)&&(e=Gs(e));for(const n in e){const r=e[n];let l;Q(r)?"default"in r?l=cs(r.from||n,r.default,!0):l=cs(r.from||n):l=cs(r),me(l)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[n]=l}}function Tn(e,t,s){We(F(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Fr(e,t,s,n){let r=n.includes(".")?Or(s,n):()=>s[n];if(ue(e)){const l=t[e];L(l)&&Ht(r,l)}else if(L(e))Ht(r,e.bind(s));else if(Q(e))if(F(e))e.forEach(l=>Fr(l,t,s,n));else{const l=L(e.handler)?e.handler.bind(s):t[e.handler];L(l)&&Ht(r,l,e)}}function Dr(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:r,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,o=l.get(t);let c;return o?c=o:!r.length&&!s&&!n?c=t:(c={},r.length&&r.forEach(h=>bs(c,h,i,!0)),bs(c,t,i)),Q(t)&&l.set(t,c),c}function bs(e,t,s,n=!1){const{mixins:r,extends:l}=t;l&&bs(e,l,s,!0),r&&r.forEach(i=>bs(e,i,s,!0));for(const i in t)if(!(n&&i==="expose")){const o=yi[i]||s&&s[i];e[i]=o?o(e[i],t[i]):t[i]}return e}const yi={data:An,props:Mn,emits:Mn,methods:Dt,computed:Dt,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Dt,directives:Dt,watch:_i,provide:An,inject:xi};function An(e,t){return t?e?function(){return pe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function xi(e,t){return Dt(Gs(e),Gs(t))}function Gs(e){if(F(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function Dt(e,t){return e?pe(Object.create(null),e,t):t}function Mn(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:pe(Object.create(null),Cn(e),Cn(t??{})):t}function _i(e,t){if(!e)return t;if(!t)return e;const s=pe(Object.create(null),e);for(const n in t)s[n]=_e(e[n],t[n]);return s}function kr(){return{app:null,config:{isNativeTag:Zn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wi=0;function Si(e,t){return function(n,r=null){L(n)||(n=pe({},n)),r!=null&&!Q(r)&&(r=null);const l=kr(),i=new WeakSet,o=[];let c=!1;const h=l.app={_uid:wi++,_component:n,_props:r,_container:null,_context:l,_instance:null,version:no,get config(){return l.config},set config(f){},use(f,...p){return i.has(f)||(f&&L(f.install)?(i.add(f),f.install(h,...p)):L(f)&&(i.add(f),f(h,...p))),h},mixin(f){return l.mixins.includes(f)||l.mixins.push(f),h},component(f,p){return p?(l.components[f]=p,h):l.components[f]},directive(f,p){return p?(l.directives[f]=p,h):l.directives[f]},mount(f,p,T){if(!c){const A=h._ceVNode||Ue(n,r);return A.appContext=l,T===!0?T="svg":T===!1&&(T=void 0),e(A,f,T),c=!0,h._container=f,f.__vue_app__=h,Es(A.component)}},onUnmount(f){o.push(f)},unmount(){c&&(We(o,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(f,p){return l.provides[f]=p,h},runWithContext(f){const p=Tt;Tt=h;try{return f()}finally{Tt=p}}};return h}}let Tt=null;const Ci=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Re(t)}Modifiers`]||e[`${ut(t)}Modifiers`];function Ti(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||te;let r=s;const l=t.startsWith("update:"),i=l&&Ci(n,t.slice(7));i&&(i.trim&&(r=s.map(f=>ue(f)?f.trim():f)),i.number&&(r=s.map(_s)));let o,c=n[o=Is(t)]||n[o=Is(Re(t))];!c&&l&&(c=n[o=Is(ut(t))]),c&&We(c,e,6,r);const h=n[o+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,We(h,e,6,r)}}const Ai=new WeakMap;function Lr(e,t,s=!1){const n=s?Ai:t.emitsCache,r=n.get(e);if(r!==void 0)return r;const l=e.emits;let i={},o=!1;if(!L(e)){const c=h=>{const f=Lr(h,t,!0);f&&(o=!0,pe(i,f))};!s&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!o?(Q(e)&&n.set(e,null),null):(F(l)?l.forEach(c=>i[c]=null):pe(i,l),Q(e)&&n.set(e,i),i)}function As(e,t){return!e||!ms(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,ut(t))||Y(e,t))}function En(e){const{type:t,vnode:s,proxy:n,withProxy:r,propsOptions:[l],slots:i,attrs:o,emit:c,render:h,renderCache:f,props:p,data:T,setupState:A,ctx:K,inheritAttrs:R}=e,se=ps(e);let X,H;try{if(s.shapeFlag&4){const I=r||n,ie=I;X=je(h.call(ie,I,f,p,A,T,K)),H=o}else{const I=t;X=je(I.length>1?I(p,{attrs:o,slots:i,emit:c}):I(p,null)),H=t.props?o:Mi(o)}}catch(I){Wt.length=0,Cs(I,e,1),X=Ue(ot)}let z=X;if(H&&R!==!1){const I=Object.keys(H),{shapeFlag:ie}=z;I.length&&ie&7&&(l&&I.some(ys)&&(H=Ei(H,l)),z=Mt(z,H,!1,!0))}return s.dirs&&(z=Mt(z,null,!1,!0),z.dirs=z.dirs?z.dirs.concat(s.dirs):s.dirs),s.transition&&hn(z,s.transition),X=z,ps(se),X}const Mi=e=>{let t;for(const s in e)(s==="class"||s==="style"||ms(s))&&((t||(t={}))[s]=e[s]);return t},Ei=(e,t)=>{const s={};for(const n in e)(!ys(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Oi(e,t,s){const{props:n,children:r,component:l}=e,{props:i,children:o,patchFlag:c}=t,h=l.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return n?On(n,i,h):!!i;if(c&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const T=f[p];if(Kr(i,n,T)&&!As(h,T))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===i?!1:n?i?On(n,i,h):!0:!!i;return!1}function On(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const l=n[r];if(Kr(t,e,l)&&!As(s,l))return!0}return!1}function Kr(e,t,s){const n=e[s],r=t[s];return s==="style"&&Q(n)&&Q(r)?!Pt(n,r):n!==r}function Pi({vnode:e,parent:t,suspense:s},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=n,e=r),r===e)(e=t.vnode).el=n,t=t.parent;else break}s&&s.activeBranch===e&&(s.vnode.el=n)}const jr={},Hr=()=>Object.create(jr),Vr=e=>Object.getPrototypeOf(e)===jr;function Ii(e,t,s,n=!1){const r={},l=Hr();e.propsDefaults=Object.create(null),Ur(e,t,r,l);for(const i in e.propsOptions[0])i in r||(r[i]=void 0);s?e.props=n?r:Dl(r):e.type.props?e.props=r:e.props=l,e.attrs=l}function Ri(e,t,s,n){const{props:r,attrs:l,vnode:{patchFlag:i}}=e,o=J(r),[c]=e.propsOptions;let h=!1;if((n||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let T=f[p];if(As(e.emitsOptions,T))continue;const A=t[T];if(c)if(Y(l,T))A!==l[T]&&(l[T]=A,h=!0);else{const K=Re(T);r[K]=Js(c,o,K,A,e,!1)}else A!==l[T]&&(l[T]=A,h=!0)}}}else{Ur(e,t,r,l)&&(h=!0);let f;for(const p in o)(!t||!Y(t,p)&&((f=ut(p))===p||!Y(t,f)))&&(c?s&&(s[p]!==void 0||s[f]!==void 0)&&(r[p]=Js(c,o,p,void 0,e,!0)):delete r[p]);if(l!==o)for(const p in l)(!t||!Y(t,p))&&(delete l[p],h=!0)}h&&Xe(e.attrs,"set","")}function Ur(e,t,s,n){const[r,l]=e.propsOptions;let i=!1,o;if(t)for(let c in t){if(Lt(c))continue;const h=t[c];let f;r&&Y(r,f=Re(c))?!l||!l.includes(f)?s[f]=h:(o||(o={}))[f]=h:As(e.emitsOptions,c)||(!(c in n)||h!==n[c])&&(n[c]=h,i=!0)}if(l){const c=J(s),h=o||te;for(let f=0;f<l.length;f++){const p=l[f];s[p]=Js(r,c,p,h[p],e,!Y(h,p))}}return i}function Js(e,t,s,n,r,l){const i=e[s];if(i!=null){const o=Y(i,"default");if(o&&n===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&L(c)){const{propsDefaults:h}=r;if(s in h)n=h[s];else{const f=es(r);n=h[s]=c.call(null,t),f()}}else n=c;r.ce&&r.ce._setProp(s,n)}i[0]&&(l&&!o?n=!1:i[1]&&(n===""||n===ut(s))&&(n=!0))}return n}const $i=new WeakMap;function Br(e,t,s=!1){const n=s?$i:t.propsCache,r=n.get(e);if(r)return r;const l=e.props,i={},o=[];let c=!1;if(!L(e)){const f=p=>{c=!0;const[T,A]=Br(p,t,!0);pe(i,T),A&&o.push(...A)};!s&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!l&&!c)return Q(e)&&n.set(e,wt),wt;if(F(l))for(let f=0;f<l.length;f++){const p=Re(l[f]);Pn(p)&&(i[p]=te)}else if(l)for(const f in l){const p=Re(f);if(Pn(p)){const T=l[f],A=i[p]=F(T)||L(T)?{type:T}:pe({},T),K=A.type;let R=!1,se=!0;if(F(K))for(let X=0;X<K.length;++X){const H=K[X],z=L(H)&&H.name;if(z==="Boolean"){R=!0;break}else z==="String"&&(se=!1)}else R=L(K)&&K.name==="Boolean";A[0]=R,A[1]=se,(R||Y(A,"default"))&&o.push(p)}}const h=[i,o];return Q(e)&&n.set(e,h),h}function Pn(e){return e[0]!=="$"&&!Lt(e)}const pn=e=>e==="_"||e==="_ctx"||e==="$stable",gn=e=>F(e)?e.map(je):[je(e)],Ni=(e,t,s)=>{if(t._n)return t;const n=Jl((...r)=>gn(t(...r)),s);return n._c=!1,n},Wr=(e,t,s)=>{const n=e._ctx;for(const r in e){if(pn(r))continue;const l=e[r];if(L(l))t[r]=Ni(r,l,n);else if(l!=null){const i=gn(l);t[r]=()=>i}}},qr=(e,t)=>{const s=gn(t);e.slots.default=()=>s},zr=(e,t,s)=>{for(const n in t)(s||!pn(n))&&(e[n]=t[n])},Fi=(e,t,s)=>{const n=e.slots=Hr();if(e.vnode.shapeFlag&32){const r=t._;r?(zr(n,t,s),s&&nr(n,"_",r,!0)):Wr(t,n)}else t&&qr(e,t)},Di=(e,t,s)=>{const{vnode:n,slots:r}=e;let l=!0,i=te;if(n.shapeFlag&32){const o=t._;o?s&&o===1?l=!1:zr(r,t,s):(l=!t.$stable,Wr(t,r)),i=t}else t&&(qr(e,t),i={default:1});if(l)for(const o in r)!pn(o)&&i[o]==null&&delete r[o]},Te=Hi;function ki(e){return Li(e)}function Li(e,t){const s=ws();s.__VUE__=!0;const{insert:n,remove:r,patchProp:l,createElement:i,createText:o,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:T,setScopeId:A=Ve,insertStaticContent:K}=e,R=(u,a,g,x=null,v=null,m=null,S=void 0,C=null,w=!!a.dynamicChildren)=>{if(u===a)return;u&&!Ft(u,a)&&(x=vt(u),Ae(u,v,m,!0),u=null),a.patchFlag===-2&&(w=!1,a.dynamicChildren=null);const{type:y,ref:P,shapeFlag:M}=a;switch(y){case Ms:se(u,a,g,x);break;case ot:X(u,a,g,x);break;case as:u==null&&H(a,g,x,S);break;case he:ye(u,a,g,x,v,m,S,C,w);break;default:M&1?ie(u,a,g,x,v,m,S,C,w):M&6?ct(u,a,g,x,v,m,S,C,w):(M&64||M&128)&&y.process(u,a,g,x,v,m,S,C,w,ft)}P!=null&&v?Vt(P,u&&u.ref,m,a||u,!a):P==null&&u&&u.ref!=null&&Vt(u.ref,null,m,u,!0)},se=(u,a,g,x)=>{if(u==null)n(a.el=o(a.children),g,x);else{const v=a.el=u.el;a.children!==u.children&&h(v,a.children)}},X=(u,a,g,x)=>{u==null?n(a.el=c(a.children||""),g,x):a.el=u.el},H=(u,a,g,x)=>{[u.el,u.anchor]=K(u.children,a,g,x,u.el,u.anchor)},z=({el:u,anchor:a},g,x)=>{let v;for(;u&&u!==a;)v=T(u),n(u,g,x),u=v;n(a,g,x)},I=({el:u,anchor:a})=>{let g;for(;u&&u!==a;)g=T(u),r(u),u=g;r(a)},ie=(u,a,g,x,v,m,S,C,w)=>{if(a.type==="svg"?S="svg":a.type==="math"&&(S="mathml"),u==null)ge(a,g,x,v,m,S,C,w);else{const y=u.el&&u.el._isVueCE?u.el:null;try{y&&y._beginPatch(),Ee(u,a,v,m,S,C,w)}finally{y&&y._endPatch()}}},ge=(u,a,g,x,v,m,S,C)=>{let w,y;const{props:P,shapeFlag:M,transition:O,dirs:$}=u;if(w=u.el=i(u.type,m,P&&P.is,P),M&8?f(w,u.children):M&16&&fe(u.children,w,null,x,v,ks(u,m),S,C),$&&dt(u,null,x,"created"),ce(w,u,u.scopeId,S,x),P){for(const _ in P)_!=="value"&&!Lt(_)&&l(w,_,null,P[_],m,x);"value"in P&&l(w,"value",null,P.value,m),(y=P.onVnodeBeforeMount)&&ke(y,x,u)}$&&dt(u,null,x,"beforeMount");const W=Ki(v,O);W&&O.beforeEnter(w),n(w,a,g),((y=P&&P.onVnodeMounted)||W||$)&&Te(()=>{try{y&&ke(y,x,u),W&&O.enter(w),$&&dt(u,null,x,"mounted")}finally{}},v)},ce=(u,a,g,x,v)=>{if(g&&A(u,g),x)for(let m=0;m<x.length;m++)A(u,x[m]);if(v){let m=v.subTree;if(a===m||Xr(m.type)&&(m.ssContent===a||m.ssFallback===a)){const S=v.vnode;ce(u,S,S.scopeId,S.slotScopeIds,v.parent)}}},fe=(u,a,g,x,v,m,S,C,w=0)=>{for(let y=w;y<u.length;y++){const P=u[y]=C?Ye(u[y]):je(u[y]);R(null,P,a,g,x,v,m,S,C)}},Ee=(u,a,g,x,v,m,S)=>{const C=a.el=u.el;let{patchFlag:w,dynamicChildren:y,dirs:P}=a;w|=u.patchFlag&16;const M=u.props||te,O=a.props||te;let $;if(g&&ht(g,!1),($=O.onVnodeBeforeUpdate)&&ke($,g,a,u),P&&dt(a,u,g,"beforeUpdate"),g&&ht(g,!0),(M.innerHTML&&O.innerHTML==null||M.textContent&&O.textContent==null)&&f(C,""),y?Ce(u.dynamicChildren,y,C,g,x,ks(a,v),m):S||U(u,a,C,null,g,x,ks(a,v),m,!1),w>0){if(w&16)ee(C,M,O,g,v);else if(w&2&&M.class!==O.class&&l(C,"class",null,O.class,v),w&4&&l(C,"style",M.style,O.style,v),w&8){const W=a.dynamicProps;for(let _=0;_<W.length;_++){const d=W[_],b=M[d],E=O[d];(E!==b||d==="value")&&l(C,d,b,E,v,g)}}w&1&&u.children!==a.children&&f(C,a.children)}else!S&&y==null&&ee(C,M,O,g,v);(($=O.onVnodeUpdated)||P)&&Te(()=>{$&&ke($,g,a,u),P&&dt(a,u,g,"updated")},x)},Ce=(u,a,g,x,v,m,S)=>{for(let C=0;C<a.length;C++){const w=u[C],y=a[C],P=w.el&&(w.type===he||!Ft(w,y)||w.shapeFlag&198)?p(w.el):g;R(w,y,P,null,x,v,m,S,!0)}},ee=(u,a,g,x,v)=>{if(a!==g){if(a!==te)for(const m in a)!Lt(m)&&!(m in g)&&l(u,m,a[m],null,v,x);for(const m in g){if(Lt(m))continue;const S=g[m],C=a[m];S!==C&&m!=="value"&&l(u,m,C,S,v,x)}"value"in g&&l(u,"value",a.value,g.value,v)}},ye=(u,a,g,x,v,m,S,C,w)=>{const y=a.el=u?u.el:o(""),P=a.anchor=u?u.anchor:o("");let{patchFlag:M,dynamicChildren:O,slotScopeIds:$}=a;$&&(C=C?C.concat($):$),u==null?(n(y,g,x),n(P,g,x),fe(a.children||[],g,P,v,m,S,C,w)):M>0&&M&64&&O&&u.dynamicChildren&&u.dynamicChildren.length===O.length?(Ce(u.dynamicChildren,O,g,v,m,S,C),(a.key!=null||v&&a===v.subTree)&&Gr(u,a,!0)):U(u,a,g,P,v,m,S,C,w)},ct=(u,a,g,x,v,m,S,C,w)=>{a.slotScopeIds=C,u==null?a.shapeFlag&512?v.ctx.activate(a,g,x,S,w):It(a,g,x,v,m,S,w):ts(u,a,w)},It=(u,a,g,x,v,m,S)=>{const C=u.component=Yi(u,x,v);if(Ir(u)&&(C.ctx.renderer=ft),Zi(C,!1,S),C.asyncDep){if(v&&v.registerDep(C,ae,S),!u.el){const w=C.subTree=Ue(ot);X(null,w,a,g),u.placeholder=w.el}}else ae(C,u,a,g,v,m,S)},ts=(u,a,g)=>{const x=a.component=u.component;if(Oi(u,a,g))if(x.asyncDep&&!x.asyncResolved){re(x,a,g);return}else x.next=a,x.update();else a.el=u.el,x.vnode=a},ae=(u,a,g,x,v,m,S)=>{const C=()=>{if(u.isMounted){let{next:M,bu:O,u:$,parent:W,vnode:_}=u;{const k=Jr(u);if(k){M&&(M.el=_.el,re(u,M,S)),k.asyncDep.then(()=>{Te(()=>{u.isUnmounted||y()},v)});return}}let d=M,b;ht(u,!1),M?(M.el=_.el,re(u,M,S)):M=_,O&&us(O),(b=M.props&&M.props.onVnodeBeforeUpdate)&&ke(b,W,M,_),ht(u,!0);const E=En(u),D=u.subTree;u.subTree=E,R(D,E,p(D.el),vt(D),u,v,m),M.el=E.el,d===null&&Pi(u,E.el),$&&Te($,v),(b=M.props&&M.props.onVnodeUpdated)&&Te(()=>ke(b,W,M,_),v)}else{let M;const{el:O,props:$}=a,{bm:W,m:_,parent:d,root:b,type:E}=u,D=Ut(a);ht(u,!1),W&&us(W),!D&&(M=$&&$.onVnodeBeforeMount)&&ke(M,d,a),ht(u,!0);{b.ce&&b.ce._hasShadowRoot()&&b.ce._injectChildStyle(E,u.parent?u.parent.type:void 0);const k=u.subTree=En(u);R(null,k,g,x,u,v,m),a.el=k.el}if(_&&Te(_,v),!D&&(M=$&&$.onVnodeMounted)){const k=a;Te(()=>ke(M,d,k),v)}(a.shapeFlag&256||d&&Ut(d.vnode)&&d.vnode.shapeFlag&256)&&u.a&&Te(u.a,v),u.isMounted=!0,a=g=x=null}};u.scope.on();const w=u.effect=new or(C);u.scope.off();const y=u.update=w.run.bind(w),P=u.job=w.runIfDirty.bind(w);P.i=u,P.id=u.uid,w.scheduler=()=>dn(P),ht(u,!0),y()},re=(u,a,g)=>{a.component=u;const x=u.vnode.props;u.vnode=a,u.next=null,Ri(u,a.props,x,g),Di(u,a.children,g),et(),_n(u),tt()},U=(u,a,g,x,v,m,S,C,w=!1)=>{const y=u&&u.children,P=u?u.shapeFlag:0,M=a.children,{patchFlag:O,shapeFlag:$}=a;if(O>0){if(O&128){at(y,M,g,x,v,m,S,C,w);return}else if(O&256){Fe(y,M,g,x,v,m,S,C,w);return}}$&8?(P&16&&De(y,v,m),M!==y&&f(g,M)):P&16?$&16?at(y,M,g,x,v,m,S,C,w):De(y,v,m,!0):(P&8&&f(g,""),$&16&&fe(M,g,x,v,m,S,C,w))},Fe=(u,a,g,x,v,m,S,C,w)=>{u=u||wt,a=a||wt;const y=u.length,P=a.length,M=Math.min(y,P);let O;for(O=0;O<M;O++){const $=a[O]=w?Ye(a[O]):je(a[O]);R(u[O],$,g,null,v,m,S,C,w)}y>P?De(u,v,m,!0,!1,M):fe(a,g,x,v,m,S,C,w,M)},at=(u,a,g,x,v,m,S,C,w)=>{let y=0;const P=a.length;let M=u.length-1,O=P-1;for(;y<=M&&y<=O;){const $=u[y],W=a[y]=w?Ye(a[y]):je(a[y]);if(Ft($,W))R($,W,g,null,v,m,S,C,w);else break;y++}for(;y<=M&&y<=O;){const $=u[M],W=a[O]=w?Ye(a[O]):je(a[O]);if(Ft($,W))R($,W,g,null,v,m,S,C,w);else break;M--,O--}if(y>M){if(y<=O){const $=O+1,W=$<P?a[$].el:x;for(;y<=O;)R(null,a[y]=w?Ye(a[y]):je(a[y]),g,W,v,m,S,C,w),y++}}else if(y>O)for(;y<=M;)Ae(u[y],v,m,!0),y++;else{const $=y,W=y,_=new Map;for(y=W;y<=O;y++){const j=a[y]=w?Ye(a[y]):je(a[y]);j.key!=null&&_.set(j.key,y)}let d,b=0;const E=O-W+1;let D=!1,k=0;const q=new Array(E);for(y=0;y<E;y++)q[y]=0;for(y=$;y<=M;y++){const j=u[y];if(b>=E){Ae(j,v,m,!0);continue}let Z;if(j.key!=null)Z=_.get(j.key);else for(d=W;d<=O;d++)if(q[d-W]===0&&Ft(j,a[d])){Z=d;break}Z===void 0?Ae(j,v,m,!0):(q[Z-W]=y+1,Z>=k?k=Z:D=!0,R(j,a[Z],g,null,v,m,S,C,w),b++)}const G=D?ji(q):wt;for(d=G.length-1,y=E-1;y>=0;y--){const j=W+y,Z=a[j],qe=a[j+1],rs=j+1<P?qe.el||Yr(qe):x;q[y]===0?R(null,Z,g,rs,v,m,S,C,w):D&&(d<0||y!==G[d]?xe(Z,g,rs,2):d--)}}},xe=(u,a,g,x,v=null)=>{const{el:m,type:S,transition:C,children:w,shapeFlag:y}=u;if(y&6){xe(u.component.subTree,a,g,x);return}if(y&128){u.suspense.move(a,g,x);return}if(y&64){S.move(u,a,g,ft);return}if(S===he){n(m,a,g);for(let M=0;M<w.length;M++)xe(w[M],a,g,x);n(u.anchor,a,g);return}if(S===as){z(u,a,g);return}if(x!==2&&y&1&&C)if(x===0)C.beforeEnter(m),n(m,a,g),Te(()=>C.enter(m),v);else{const{leave:M,delayLeave:O,afterLeave:$}=C,W=()=>{u.ctx.isUnmounted?r(m):n(m,a,g)},_=()=>{m._isLeaving&&m[si](!0),M(m,()=>{W(),$&&$()})};O?O(m,W,_):_()}else n(m,a,g)},Ae=(u,a,g,x=!1,v=!1)=>{const{type:m,props:S,ref:C,children:w,dynamicChildren:y,shapeFlag:P,patchFlag:M,dirs:O,cacheIndex:$,memo:W}=u;if(M===-2&&(v=!1),C!=null&&(et(),Vt(C,null,g,u,!0),tt()),$!=null&&(a.renderCache[$]=void 0),P&256){a.ctx.deactivate(u);return}const _=P&1&&O,d=!Ut(u);let b;if(d&&(b=S&&S.onVnodeBeforeUnmount)&&ke(b,a,u),P&6)Os(u.component,g,x);else{if(P&128){u.suspense.unmount(g,x);return}_&&dt(u,null,a,"beforeUnmount"),P&64?u.type.remove(u,a,g,ft,x):y&&!y.hasOnce&&(m!==he||M>0&&M&64)?De(y,a,g,!1,!0):(m===he&&M&384||!v&&P&16)&&De(w,a,g),x&&ss(u)}const E=W!=null&&$==null;(d&&(b=S&&S.onVnodeUnmounted)||_||E)&&Te(()=>{b&&ke(b,a,u),_&&dt(u,null,a,"unmounted"),E&&(u.el=null)},g)},ss=u=>{const{type:a,el:g,anchor:x,transition:v}=u;if(a===he){Rt(g,x);return}if(a===as){I(u);return}const m=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:C}=v,w=()=>S(g,m);C?C(u.el,m,w):w()}else m()},Rt=(u,a)=>{let g;for(;u!==a;)g=T(u),r(u),u=g;r(a)},Os=(u,a,g)=>{const{bum:x,scope:v,job:m,subTree:S,um:C,m:w,a:y}=u;In(w),In(y),x&&us(x),v.stop(),m&&(m.flags|=8,Ae(S,u,a,g)),C&&Te(C,a),Te(()=>{u.isUnmounted=!0},a)},De=(u,a,g,x=!1,v=!1,m=0)=>{for(let S=m;S<u.length;S++)Ae(u[S],a,g,x,v)},vt=u=>{if(u.shapeFlag&6)return vt(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const a=T(u.anchor||u.el),g=a&&a[ei];return g?T(g):a};let $t=!1;const ns=(u,a,g)=>{let x;u==null?a._vnode&&(Ae(a._vnode,null,null,!0),x=a._vnode.component):R(a._vnode||null,u,a,null,null,null,g),a._vnode=u,$t||($t=!0,_n(x),Tr(),$t=!1)},ft={p:R,um:Ae,m:xe,r:ss,mt:It,mc:fe,pc:U,pbc:Ce,n:vt,o:e};return{render:ns,hydrate:void 0,createApp:Si(ns)}}function ks({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ht({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ki(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Gr(e,t,s=!1){const n=e.children,r=t.children;if(F(n)&&F(r))for(let l=0;l<n.length;l++){const i=n[l];let o=r[l];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[l]=Ye(r[l]),o.el=i.el),!s&&o.patchFlag!==-2&&Gr(i,o)),o.type===Ms&&(o.patchFlag===-1&&(o=r[l]=Ye(o)),o.el=i.el),o.type===ot&&!o.el&&(o.el=i.el)}}function ji(e){const t=e.slice(),s=[0];let n,r,l,i,o;const c=e.length;for(n=0;n<c;n++){const h=e[n];if(h!==0){if(r=s[s.length-1],e[r]<h){t[n]=r,s.push(n);continue}for(l=0,i=s.length-1;l<i;)o=l+i>>1,e[s[o]]<h?l=o+1:i=o;h<e[s[l]]&&(l>0&&(t[n]=s[l-1]),s[l]=n)}}for(l=s.length,i=s[l-1];l-- >0;)s[l]=i,i=t[i];return s}function Jr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jr(t)}function In(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Yr(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Yr(t.subTree):null}const Xr=e=>e.__isSuspense;function Hi(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Gl(e)}const he=Symbol.for("v-fgt"),Ms=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Wt=[];let Me=null;function V(e=!1){Wt.push(Me=e?null:[])}function Vi(){Wt.pop(),Me=Wt[Wt.length-1]||null}let Jt=1;function Rn(e,t=!1){Jt+=e,e<0&&Me&&t&&(Me.hasOnce=!0)}function Zr(e){return e.dynamicChildren=Jt>0?Me||wt:null,Vi(),Jt>0&&Me&&Me.push(e),e}function B(e,t,s,n,r,l){return Zr(N(e,t,s,n,r,l,!0))}function Ui(e,t,s,n,r){return Zr(Ue(e,t,s,n,r,!0))}function Qr(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const el=({key:e})=>e??null,fs=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||me(e)||L(e)?{i:Pe,r:e,k:t,f:!!s}:e:null);function N(e,t=null,s=null,n=0,r=null,l=e===he?0:1,i=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&el(t),ref:t&&fs(t),scopeId:Mr,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Pe};return o?(bn(c,s),l&128&&e.normalize(c)):s&&(c.shapeFlag|=ue(s)?8:16),Jt>0&&!i&&Me&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Me.push(c),c}const Ue=Bi;function Bi(e,t=null,s=null,n=0,r=null,l=!1){if((!e||e===gi)&&(e=ot),Qr(e)){const o=Mt(e,t,!0);return s&&bn(o,s),Jt>0&&!l&&Me&&(o.shapeFlag&6?Me[Me.indexOf(e)]=o:Me.push(o)),o.patchFlag=-2,o}if(so(e)&&(e=e.__vccOpts),t){t=Wi(t);let{class:o,style:c}=t;o&&!ue(o)&&(t.class=Je(o)),Q(c)&&(fn(c)&&!F(c)&&(c=pe({},c)),t.style=tn(c))}const i=ue(e)?1:Xr(e)?128:ti(e)?64:Q(e)?4:L(e)?2:0;return N(e,t,s,n,r,i,l,!0)}function Wi(e){return e?fn(e)||Vr(e)?pe({},e):e:null}function Mt(e,t,s=!1,n=!1){const{props:r,ref:l,patchFlag:i,children:o,transition:c}=e,h=t?zi(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&el(h),ref:t&&t.ref?s&&l?F(l)?l.concat(fs(t)):[l,fs(t)]:fs(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&hn(f,c.clone(f)),f}function rt(e=" ",t=0){return Ue(Ms,null,e,t)}function qi(e,t){const s=Ue(as,null,e);return s.staticCount=t,s}function de(e="",t=!1){return t?(V(),Ui(ot,null,e)):Ue(ot,null,e)}function je(e){return e==null||typeof e=="boolean"?Ue(ot):F(e)?Ue(he,null,e.slice()):Qr(e)?Ye(e):Ue(Ms,null,String(e))}function Ye(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function bn(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(F(t))s=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),bn(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!Vr(t)?t._ctx=Pe:r===3&&Pe&&(Pe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Pe},s=32):(t=String(t),n&64?(s=16,t=[rt(t)]):s=8);e.children=t,e.shapeFlag|=s}function zi(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=Je([t.class,n.class]));else if(r==="style")t.style=tn([t.style,n.style]);else if(ms(r)){const l=t[r],i=n[r];i&&l!==i&&!(F(l)&&l.includes(i))?t[r]=l?[].concat(l,i):i:i==null&&l==null&&!ys(r)&&(t[r]=i)}else r!==""&&(t[r]=n[r])}return t}function ke(e,t,s,n=null){We(e,t,7,[s,n])}const Gi=kr();let Ji=0;function Yi(e,t,s){const n=e.type,r=(t?t.appContext:e.appContext)||Gi,l={uid:Ji++,vnode:e,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Br(n,r),emitsOptions:Lr(n,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:n.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Ti.bind(null,l),e.ce&&e.ce(l),l}let Se=null;const Xi=()=>Se||Pe;let vs,Ys;{const e=ws(),t=(s,n)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(n),l=>{r.length>1?r.forEach(i=>i(l)):r[0](l)}};vs=t("__VUE_INSTANCE_SETTERS__",s=>Se=s),Ys=t("__VUE_SSR_SETTERS__",s=>Yt=s)}const es=e=>{const t=Se;return vs(e),e.scope.on(),()=>{e.scope.off(),vs(t)}},$n=()=>{Se&&Se.scope.off(),vs(null)};function tl(e){return e.vnode.shapeFlag&4}let Yt=!1;function Zi(e,t=!1,s=!1){t&&Ys(t);const{props:n,children:r}=e.vnode,l=tl(e);Ii(e,n,l,t),Fi(e,r,s||t);const i=l?Qi(e,t):void 0;return t&&Ys(!1),i}function Qi(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,bi);const{setup:n}=s;if(n){et();const r=e.setupContext=n.length>1?to(e):null,l=es(e),i=Qt(n,e,0,[e.props,r]),o=Qn(i);if(tt(),l(),(o||e.sp)&&!Ut(e)&&Pr(e),o){if(i.then($n,$n),t)return i.then(c=>{Nn(e,c)}).catch(c=>{Cs(c,e,0)});e.asyncDep=i}else Nn(e,i)}else sl(e)}function Nn(e,t,s){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Q(t)&&(e.setupState=_r(t)),sl(e)}function sl(e,t,s){const n=e.type;e.render||(e.render=n.render||Ve);{const r=es(e);et();try{vi(e)}finally{tt(),r()}}}const eo={get(e,t){return ve(e,"get",""),e[t]}};function to(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,eo),slots:e.slots,emit:e.emit,expose:t}}function Es(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(_r(kl(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Bt)return Bt[s](e)},has(t,s){return s in t||s in Bt}})):e.proxy}function so(e){return L(e)&&"__vccOpts"in e}const Oe=(e,t)=>Ul(e,t,Yt),no="3.5.33";/**\n* @vue/runtime-dom v3.5.33\n* (c) 2018-present Yuxi (Evan) You and Vue contributors\n* @license MIT\n**/let Xs;const Fn=typeof window<"u"&&window.trustedTypes;if(Fn)try{Xs=Fn.createPolicy("vue",{createHTML:e=>e})}catch{}const nl=Xs?e=>Xs.createHTML(e):e=>e,ro="http://www.w3.org/2000/svg",lo="http://www.w3.org/1998/Math/MathML",Ge=typeof document<"u"?document:null,Dn=Ge&&Ge.createElement("template"),io={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const r=t==="svg"?Ge.createElementNS(ro,e):t==="mathml"?Ge.createElementNS(lo,e):s?Ge.createElement(e,{is:s}):Ge.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>Ge.createTextNode(e),createComment:e=>Ge.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ge.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,r,l){const i=s?s.previousSibling:t.lastChild;if(r&&(r===l||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===l||!(r=r.nextSibling)););else{Dn.innerHTML=nl(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Dn.content;if(n==="svg"||n==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,s)}return[i?i.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},oo=Symbol("_vtc");function uo(e,t,s){const n=e[oo];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const kn=Symbol("_vod"),co=Symbol("_vsh"),ao=Symbol(""),fo=/(?:^|;)\\s*display\\s*:/;function ho(e,t,s){const n=e.style,r=ue(s);let l=!1;if(s&&!r){if(t)if(ue(t))for(const i of t.split(";")){const o=i.slice(0,i.indexOf(":")).trim();s[o]==null&&kt(n,o,"")}else for(const i in t)s[i]==null&&kt(n,i,"");for(const i in s){i==="display"&&(l=!0);const o=s[i];o!=null?go(e,i,!ue(t)&&t?t[i]:void 0,o)||kt(n,i,o):kt(n,i,"")}}else if(r){if(t!==s){const i=n[ao];i&&(s+=";"+i),n.cssText=s,l=fo.test(s)}}else t&&e.removeAttribute("style");kn in e&&(e[kn]=l?n.display:"",e[co]&&(n.display="none"))}const Ln=/\\s*!important$/;function kt(e,t,s){if(F(s))s.forEach(n=>kt(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=po(e,t);Ln.test(s)?e.setProperty(ut(n),s.replace(Ln,""),"important"):e[n]=s}}const Kn=["Webkit","Moz","ms"],Ls={};function po(e,t){const s=Ls[t];if(s)return s;let n=Re(t);if(n!=="filter"&&n in e)return Ls[t]=n;n=sr(n);for(let r=0;r<Kn.length;r++){const l=Kn[r]+n;if(l in e)return Ls[t]=l}return t}function go(e,t,s,n){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ue(n)&&s===n}const jn="http://www.w3.org/1999/xlink";function Hn(e,t,s,n,r,l=pl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(jn,t.slice(6,t.length)):e.setAttributeNS(jn,t,s):s==null||l&&!rr(s)?e.removeAttribute(t):e.setAttribute(t,l?"":Be(s)?String(s):s)}function Vn(e,t,s,n,r){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?nl(s):s);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const o=l==="OPTION"?e.getAttribute("value")||"":e.value,c=s==null?e.type==="checkbox"?"on":"":String(s);(o!==c||!("_value"in e))&&(e.value=c),s==null&&e.removeAttribute(t),e._value=s;return}let i=!1;if(s===""||s==null){const o=typeof e[t];o==="boolean"?s=rr(s):s==null&&o==="string"?(s="",i=!0):o==="number"&&(s=0,i=!0)}try{e[t]=s}catch{}i&&e.removeAttribute(r||t)}function it(e,t,s,n){e.addEventListener(t,s,n)}function bo(e,t,s,n){e.removeEventListener(t,s,n)}const Un=Symbol("_vei");function vo(e,t,s,n,r=null){const l=e[Un]||(e[Un]={}),i=l[t];if(n&&i)i.value=n;else{const[o,c]=mo(t);if(n){const h=l[t]=_o(n,r);it(e,o,h,c)}else i&&(bo(e,o,i,c),l[t]=void 0)}}const Bn=/(?:Once|Passive|Capture)$/;function mo(e){let t;if(Bn.test(e)){t={};let n;for(;n=e.match(Bn);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ut(e.slice(2)),t]}let Ks=0;const yo=Promise.resolve(),xo=()=>Ks||(yo.then(()=>Ks=0),Ks=Date.now());function _o(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;We(wo(n,s.value),t,5,[n])};return s.value=e,s.attached=xo(),s}function wo(e,t){if(F(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Wn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,So=(e,t,s,n,r,l)=>{const i=r==="svg";t==="class"?uo(e,n,i):t==="style"?ho(e,s,n):ms(t)?ys(t)||vo(e,t,s,n,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Co(e,t,n,i))?(Vn(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hn(e,t,n,i,l,t!=="value")):e._isVueCE&&(To(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ue(n)))?Vn(e,Re(t),n,l,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Hn(e,t,n,i))};function Co(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wn(t)&&L(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wn(t)&&ue(s)?!1:t in e}function To(e,t){const s=e._def.props;if(!s)return!1;const n=Re(t);return Array.isArray(s)?s.some(r=>Re(r)===n):Object.keys(s).some(r=>Re(r)===n)}const Et=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?s=>us(t,s):t};function Ao(e){e.target.composing=!0}function qn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Qe=Symbol("_assign");function zn(e,t,s){return t&&(e=e.trim()),s&&(e=_s(e)),e}const js={created(e,{modifiers:{lazy:t,trim:s,number:n}},r){e[Qe]=Et(r);const l=n||r.props&&r.props.type==="number";it(e,t?"change":"input",i=>{i.target.composing||e[Qe](zn(e.value,s,l))}),(s||l)&&it(e,"change",()=>{e.value=zn(e.value,s,l)}),t||(it(e,"compositionstart",Ao),it(e,"compositionend",qn),it(e,"change",qn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:n,trim:r,number:l}},i){if(e[Qe]=Et(i),e.composing)return;const o=(l||e.type==="number")&&!/^0\\d/.test(e.value)?_s(e.value):e.value,c=t??"";if(o===c)return;const h=e.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===e&&e.type!=="range"&&(n&&t===s||r&&e.value.trim()===c)||(e.value=c)}},Mo={deep:!0,created(e,t,s){e[Qe]=Et(s),it(e,"change",()=>{const n=e._modelValue,r=Xt(e),l=e.checked,i=e[Qe];if(F(n)){const o=sn(n,r),c=o!==-1;if(l&&!c)i(n.concat(r));else if(!l&&c){const h=[...n];h.splice(o,1),i(h)}}else if(Ot(n)){const o=new Set(n);l?o.add(r):o.delete(r),i(o)}else i(rl(e,l))})},mounted:Gn,beforeUpdate(e,t,s){e[Qe]=Et(s),Gn(e,t,s)}};function Gn(e,{value:t,oldValue:s},n){e._modelValue=t;let r;if(F(t))r=sn(t,n.props.value)>-1;else if(Ot(t))r=t.has(n.props.value);else{if(t===s)return;r=Pt(t,rl(e,!0))}e.checked!==r&&(e.checked=r)}const Jn={deep:!0,created(e,{value:t,modifiers:{number:s}},n){const r=Ot(t);it(e,"change",()=>{const l=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>s?_s(Xt(i)):Xt(i));e[Qe](e.multiple?r?new Set(l):l:l[0]),e._assigning=!0,Sr(()=>{e._assigning=!1})}),e[Qe]=Et(n)},mounted(e,{value:t}){Yn(e,t)},beforeUpdate(e,t,s){e[Qe]=Et(s)},updated(e,{value:t}){e._assigning||Yn(e,t)}};function Yn(e,t){const s=e.multiple,n=F(t);if(!(s&&!n&&!Ot(t))){for(let r=0,l=e.options.length;r<l;r++){const i=e.options[r],o=Xt(i);if(s)if(n){const c=typeof o;c==="string"||c==="number"?i.selected=t.some(h=>String(h)===String(o)):i.selected=sn(t,o)>-1}else i.selected=t.has(o);else if(Pt(Xt(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Xt(e){return"_value"in e?e._value:e.value}function rl(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Eo=["ctrl","shift","alt","meta"],Oo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Eo.some(s=>e[`${s}Key`]&&!t.includes(s))},Po=(e,t)=>{if(!e)return e;const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((r,...l)=>{for(let i=0;i<t.length;i++){const o=Oo[t[i]];if(o&&o(r,t))return}return e(r,...l)}))},Io={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ro=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(r=>{if(!("key"in r))return;const l=ut(r.key);if(t.some(i=>i===l||Io[i]===l))return e(r)}))},$o=pe({patchProp:So},io);let Xn;function No(){return Xn||(Xn=ki($o))}const Fo=((...e)=>{const t=No().createApp(...e),{mount:s}=t;return t.mount=n=>{const r=ko(n);if(!r)return;const l=t._component;!L(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const i=s(r,!1,Do(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t});function Do(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ko(e){return ue(e)?document.querySelector(e):e}const Lo={class:"flex flex-col h-screen bg-white text-[13px] font-sans select-none"},Ko={class:"flex-1 overflow-y-auto p-4 space-y-4"},jo={class:"space-y-2"},Ho={class:"flex items-center gap-2"},Vo=["value"],Uo=["disabled"],Bo=["disabled"],Wo={key:1,class:"flex items-center gap-2 text-xs text-gray-600 cursor-pointer w-fit"},qo={class:"flex flex-col gap-1"},zo=["disabled"],Go=["value"],Jo={class:"space-y-2 pt-3 border-t border-gray-100"},Yo={class:"flex gap-2"},Xo=["disabled"],Zo={key:0,class:"space-y-2"},Qo={class:"flex items-center justify-between"},eu={class:"text-xs text-gray-600"},tu={class:"flex items-center gap-2"},su={class:"max-h-60 overflow-auto border border-gray-200 rounded-lg"},nu=["checked","disabled","onChange"],ru={class:"min-w-0 flex-1"},lu={class:"flex items-center gap-1.5 truncate"},iu={class:"text-[11px] text-gray-400 font-normal shrink-0"},ou={key:0,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-orange-500 text-white leading-none"},uu={key:1,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-blue-500 text-white leading-none"},cu={key:2,class:"shrink-0 text-[9px] font-bold px-1 py-0.5 rounded bg-gray-400 text-white leading-none"},au={key:0,class:"text-[11px] text-gray-400 truncate"},fu={key:0,class:"flex flex-wrap gap-1 pt-1"},du=["onClick"],hu={class:"space-y-2 pt-3 border-t border-gray-100"},pu={class:"text-[12px] font-semibold text-blue-800 truncate"},gu={class:"text-[11px] text-blue-600 mt-0.5"},bu={key:0,class:"mt-2 text-[11px] text-amber-800 leading-relaxed"},vu={key:1,class:"text-[12px] text-gray-500"},mu={key:0,class:"text-xs text-gray-500"},yu={key:1,class:"text-xs text-red-600"},xu={class:"px-4 py-3 border-t border-gray-200"},_u={key:0,class:"text-xs text-red-600 mb-2"},wu={class:"flex gap-2"},Su={key:0,class:"relative flex-1 group"},Cu=["disabled"],Tu={key:0,class:"pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 w-max max-w-[200px] text-center rounded bg-gray-800 px-2 py-1 text-[11px] text-white z-10"},Au=["disabled"],Mu=ni({__name:"App",setup(e){const t=le(""),s=le(""),n=le(!1),r=Oe(()=>!s.value.trim()||n.value),l=le([]),i=le("manual"),o=le(""),c=le([]),h=le(""),f=le(""),p=le([]),T=le([]),A=le(new Set),K=le(null),R=le(null),se=le(!1);let X=null;const H=le([]),z=Oe(()=>new Set(H.value.map(_=>`${_.tabTitle}::${_.rowNumber}`))),I=le([]),ie=Oe(()=>new Set(I.value.map(_=>`${_.tabTitle}::${_.rowNumber}`))),ge=le(!1),ce=le(!1),fe=le(!1),Ee=le(!1),Ce=le(!1),ee=le(""),ye=le("");function ct(_){return String(_??"").trim().toLowerCase().replace(/[#()[\\]{}]/g," ").replace(/[_\\-\\s]+/g,"")}function It(_,d){const b=_??"",E=d??"",D=b.length,k=E.length;if(D===0)return k;if(k===0)return D;const q=new Array(k+1);for(let G=0;G<=k;G+=1)q[G]=G;for(let G=1;G<=D;G+=1){let j=q[0];q[0]=G;for(let Z=1;Z<=k;Z+=1){const qe=q[Z],rs=b[G-1]===E[Z-1]?0:1;q[Z]=Math.min(q[Z]+1,q[Z-1]+1,j+rs),j=qe}}return q[k]}function ts(_,d){const b=ct(_),E=ct(d);if(!b||!E)return 0;if(b===E)return 1;if(b.includes(E)||E.includes(b))return .92;const D=It(b,E),k=Math.max(b.length,E.length);return k===0?0:1-D/k}function ae(_,d,b,E=.6){let D="",k=0;for(const q of _){if(b.has(q))continue;let G=0;for(const j of d)G=Math.max(G,ts(q,j));G>k&&(k=G,D=q)}return D&&k>=E?D:""}function re(){var k,q;const _=((q=(k=K.value)==null?void 0:k.textProperties)==null?void 0:q.map(G=>G.name))??[];if(_.length===0)return;const d=new Set,b=ae(_,["label","title","name","key","header"],d,.55);b&&d.add(b);const E=ae(_,["value","content","text","body"],d,.55);E&&d.add(E);const D=ae(_,["description","desc","helper","hint","subtitle","note"],d,.55);D&&d.add(D)}function U(_){return`${_.tabTitle}::${_.rowNumber}::${_.name}::${_.label}`}function Fe(_,d){const b=d.split(",").map(j=>j.trim().toLowerCase().normalize("NFC")).filter(j=>j.length>=2);if(b.length===0)return[{text:_,match:!1}];const E=_.toLowerCase().normalize("NFC"),D=[];for(const j of b){let Z=0;for(;Z<E.length;){const qe=E.indexOf(j,Z);if(qe===-1)break;D.push({start:qe,end:qe+j.length}),Z=qe+j.length}}if(D.length===0)return[{text:_,match:!1}];D.sort((j,Z)=>j.start-Z.start);const k=[];for(const j of D)k.length===0||j.start>=k[k.length-1].end?k.push({...j}):k[k.length-1].end=Math.max(k[k.length-1].end,j.end);const q=[];let G=0;for(const{start:j,end:Z}of k)G<j&&q.push({text:_.slice(G,j),match:!1}),q.push({text:_.slice(j,Z),match:!0}),G=Z;return G<_.length&&q.push({text:_.slice(G),match:!1}),q}function at(_){return _.map(d=>({tabTitle:d.tabTitle,rowNumber:d.rowNumber,name:d.name,type:d.type,label:d.label,value:d.value,description:d.description}))}function xe(){X&&clearTimeout(X),X=setTimeout(()=>{if(X=null,!t.value.trim()){R.value=null,se.value=!1;return}if(!K.value||p.value.length===0){R.value=null,se.value=!1;return}parent.postMessage({pluginMessage:{type:"sheet-diff-request",url:t.value,currentRows:at(p.value)}},"*")},120)}function Ae(){parent.postMessage({pluginMessage:{type:"get-selection"}},"*")}function ss(){i.value="manual",t.value="",n.value=!1,c.value=[],h.value="",f.value="",p.value=[],T.value=[],A.value=new Set,o.value="",ye.value="",ee.value="\uC791\uC5C5 \uC601\uC5ED\uC744 \uCD08\uAE30\uD654\uD588\uC2B5\uB2C8\uB2E4.",ge.value=!1,Ee.value=!1,ce.value=!1,fe.value=!1,R.value=null,se.value=!1,H.value=[],Ae()}function Rt(){c.value=[],h.value="",p.value=[],T.value=[],A.value=new Set,f.value="",o.value="",ee.value="",ye.value="",R.value=null,se.value=!1,H.value=[]}function Os(){if(i.value==="manual"){Rt();return}t.value=i.value,Rt()}let De=null;Ht(t,(_,d)=>{i.value==="manual"&&d!==void 0&&(De&&clearTimeout(De),De=setTimeout(()=>{De=null,Rt()},450))});const vt=Oe(()=>{if(ge.value)return"\uD638\uCD9C \uC911...";const _=t.value.trim();return _&&o.value===_&&c.value.length>0?"\uC2DC\uD2B8 \uD638\uCD9C":"\uD638\uCD9C\uD558\uAE30"});function $t(){parent.postMessage({pluginMessage:{type:"clear-recent-urls"}},"*")}function ns(){ye.value="",ee.value="",o.value="",c.value=[],h.value="",p.value=[],T.value=[],A.value=new Set,ge.value=!0,parent.postMessage({pluginMessage:{type:"list-tabs",url:t.value,apiKey:s.value}},"*")}function ft(){if(!(!t.value.trim()||!s.value.trim())){if(ye.value="",ee.value="",!h.value){p.value=T.value.length?[...T.value]:[],A.value=new Set,ee.value=T.value.length?`\uC804\uCCB4 \uD0ED ${T.value.length}\uAC1C \uD589`:"\uC2DC\uD2B8 \uD638\uCD9C \uD6C4 \uC804\uCCB4 \uD0ED \uBAA9\uB85D\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.";return}Ee.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:h.value}},"*")}}function Ps(){var d;if((d=document.activeElement)==null||d.blur(),ye.value="",ee.value="",f.value.split(",").map(b=>b.trim()).filter(b=>b.length>=2).length===0){A.value=new Set,h.value?(Ee.value=!0,parent.postMessage({pluginMessage:{type:"load-tab-rows",url:t.value,apiKey:s.value,tabTitle:h.value}},"*")):T.value.length>0&&(p.value=[...T.value],ee.value=`\uC804\uCCB4 ${T.value.length}\uAC1C \uD589`);return}ce.value=!0,parent.postMessage({pluginMessage:{type:"search",url:t.value,apiKey:s.value,keyword:f.value,tabTitle:h.value||void 0}},"*")}function u(){if(ce.value||Ee.value||!t.value.trim()||!s.value.trim())return;const _=f.value.trim();_&&!_.split(",").some(d=>d.trim().length>=2)||(_||T.value.length>0||h.value)&&Ps()}function a(_){const d=U(_),b=new Set(A.value);b.has(d)?b.delete(d):b.add(d),A.value=b}function g(){const _=z.value;A.value=new Set(p.value.filter(d=>_.has(`${d.tabTitle}::${d.rowNumber}`)).map(U))}function x(){const _=ie.value;A.value=new Set(p.value.filter(d=>_.has(`${d.tabTitle}::${d.rowNumber}`)).map(U))}function v(){A.value=new Set(p.value.map(U))}function m(){A.value=new Set}const S=Oe(()=>{const _=A.value;return p.value.filter(d=>_.has(U(d)))}),C=Oe(()=>{if(S.value.length===0)return!1;const _=z.value;return S.value.every(d=>_.has(`${d.tabTitle}::${d.rowNumber}`))}),w=Oe(()=>{var _;return((_=K.value)==null?void 0:_.hasMappableSheetProps)===!0}),y=Oe(()=>K.value?!w.value:!1),P=Oe(()=>{const _=new Map;for(const b of S.value){const E=String(b.label??"").trim(),D=E.length===0?"\\0empty":E;_.set(D,(_.get(D)??0)+1)}const d=[];for(const[b,E]of _)E<2||d.push(b==="\\0empty"?"(\uBE48 label)":b);return d}),M=Oe(()=>P.value.length>0),O=Oe(()=>!(C.value||!K.value||S.value.length===0||!w.value));function $(){if(A.value.size===0)return;const _=new Set(S.value.map(b=>`${b.tabTitle}::${b.rowNumber}`)),d=H.value.filter(b=>_.has(`${b.tabTitle}::${b.rowNumber}`)).map(b=>({oldLabel:b.oldLabel,newLabel:b.newLabel,tabTitle:b.tabTitle,rowNumber:b.rowNumber,value:b.value}));if(d.length===0){ee.value="\uC120\uD0DD\uD55C \uD589 \uC911 \uBCC0\uACBD\uB41C label\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";return}Ce.value=!0,ye.value="",ee.value="",parent.postMessage({pluginMessage:{type:"sync-value-changes",valueChangedItems:[],labelChangedItems:d,url:t.value}},"*")}function W(){ye.value="",ee.value="",fe.value=!0;const _=S.value.map(d=>({tabTitle:d.tabTitle,rowNumber:d.rowNumber,name:d.name,type:d.type,label:d.label,value:d.value,description:d.description}));parent.postMessage({pluginMessage:{type:"connect-and-generate",url:t.value,apiKey:s.value,keywordRows:_,snapshotRows:at(p.value),tabScope:h.value||void 0}},"*")}return Ht([p,K,t],()=>xe(),{deep:!0}),$r(()=>{Ae(),parent.postMessage({pluginMessage:{type:"get-settings"}},"*"),window.onmessage=_=>{var b;const d=(b=_.data)==null?void 0:b.pluginMessage;if(d){if(d.type==="settings"){s.value=typeof d.apiKey=="string"?d.apiKey:"",l.value=Array.isArray(d.recentSheets)?d.recentSheets:[];return}if(d.type==="selection"){K.value=d.selection??null,re(),xe();return}if(d.type==="sheet-diff"){R.value={hasSnapshot:d.hasSnapshot===!0,sameSpreadsheet:d.sameSpreadsheet===!0,added:Array.isArray(d.added)?d.added:[],deleted:Array.isArray(d.deleted)?d.deleted:[],valueChanged:Array.isArray(d.valueChanged)?d.valueChanged:[],labelChanged:Array.isArray(d.labelChanged)?d.labelChanged:[]},se.value=!1;return}if(d.type==="tabs"){ge.value=!1,c.value=Array.isArray(d.tabs)?d.tabs:[];const E=Array.isArray(d.rows)?d.rows:[];T.value=E,p.value=[...E],A.value=new Set,o.value=t.value.trim();const D=Array.isArray(d.labelChanged)?d.labelChanged:[];if(H.value=D,I.value=Array.isArray(d.labelAdded)?d.labelAdded:[],c.value.length===0)ee.value="\uD0ED\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.";else if(E.length===0)ee.value=`\uD0ED ${c.value.length}\uAC1C\uB97C \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4. (\uD589 \uB370\uC774\uD130 \uC5C6\uC74C \uB610\uB294 \uC77C\uBD80 \uD0ED\uB9CC \uC77D\uC74C)`;else{const k=z.value.size,q=ie.value.size,G=E.filter(Z=>Z.strikethrough).length,j=[k>0?`\u26A0\uFE0F label \uBCC0\uACBD ${k}\uAC74 \uAC10\uC9C0`:"",q>0?`\u{1F195} \uC2E0\uADDC ${q}\uAC74 \uAC10\uC9C0`:"",G>0?`\u{1F5D1}\uFE0F \uC0AD\uC81C ${G}\uAC74 \uAC10\uC9C0`:""].filter(Boolean).join(" \xB7 ");ee.value=j?`\uD0ED ${c.value.length}\uAC1C \xB7 ${E.length}\uAC1C \uD589 \uBD88\uB7EC\uC634 \xB7 ${j}`:`\uD0ED ${c.value.length}\uAC1C \xB7 \uC804\uCCB4 ${E.length}\uAC1C \uD589(label/value \uB4F1)\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`}xe();return}if(d.type==="tab-rows"){Ee.value=!1,p.value=Array.isArray(d.rows)?d.rows:[],A.value=new Set;const E=Array.isArray(d.labelChanged)?d.labelChanged:[];H.value=E,I.value=Array.isArray(d.labelAdded)?d.labelAdded:[];const D=E.length,k=I.value.length,q=p.value.filter(j=>j.strikethrough).length,G=[D>0?`\u26A0\uFE0F label \uBCC0\uACBD ${D}\uAC74 \uAC10\uC9C0`:"",k>0?`\u{1F195} \uC2E0\uADDC ${k}\uAC74 \uAC10\uC9C0`:"",q>0?`\u{1F5D1}\uFE0F \uC0AD\uC81C ${q}\uAC74 \uAC10\uC9C0`:""].filter(Boolean).join(" \xB7 ");ee.value=p.value.length?`${d.tabTitle} \uD0ED\uC5D0\uC11C ${p.value.length}\uAC1C \uD56D\uBAA9\uC744 \uBD88\uB7EC\uC654\uC2B5\uB2C8\uB2E4.`+(G?` \xB7 ${G}`:""):`${d.tabTitle} \uD0ED\uC5D0 \uD56D\uBAA9\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.`,xe();return}if(d.type==="search-results"){ce.value=!1,p.value=Array.isArray(d.rows)?d.rows:[],A.value=new Set,ee.value=p.value.length?`\uAC80\uC0C9 \uACB0\uACFC ${p.value.length}\uAC1C`:"\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",xe();return}if(d.type==="sync-done"){Ce.value=!1;const E=typeof d.updated=="number"?d.updated:0;ee.value=E>0?`${E}\uAC1C \uC778\uC2A4\uD134\uC2A4 \uB3D9\uAE30\uD654 \uC644\uB8CC`:"\uB3D9\uAE30\uD654\uD560 \uC778\uC2A4\uD134\uC2A4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.",xe();return}if(d.type==="done"){fe.value=!1;const E=typeof d.appliedInPlace=="number"?d.appliedInPlace:0,D=typeof d.created=="number"?d.created:0;E>0&&D>0?ee.value=`${E}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4 \uAC31\uC2E0 \xB7 ${D}\uAC1C \uBCF5\uC81C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`:E>0&&D===0?ee.value=`${E}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0 \uC644\uB8CC (\uBCF5\uC81C \uC5C6\uC74C)`:ee.value=`${D}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0 \uC644\uB8CC`,xe();return}d.type==="error"&&(ge.value=!1,Ee.value=!1,ce.value=!1,fe.value=!1,Ce.value=!1,ye.value=d.message??"\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4.")}}}),(_,d)=>(V(),B("div",Lo,[N("header",{class:"px-4 py-3 border-b border-gray-200 flex items-center justify-between"},[d[6]||(d[6]=N("span",{class:"font-semibold text-gray-900"},"SheetToComponent",-1)),N("button",{class:"text-[12px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:ss,title:"\uC2DC\uD2B8\xB7\uAC80\uC0C9\xB7\uD589 \uC120\uD0DD \uB4F1 \uC791\uC5C5 \uC601\uC5ED\uC744 \uBE44\uC6C1\uB2C8\uB2E4. API \uD0A4\xB7\uCD5C\uADFC URL\uC740 \uC720\uC9C0\uB429\uB2C8\uB2E4."}," \uCD08\uAE30\uD654 ")]),N("main",Ko,[N("section",jo,[d[12]||(d[12]=N("div",{class:"text-[13px] font-bold text-gray-900"},[rt("1) \uC2DC\uD2B8 \uD638\uCD9C "),N("span",{class:"text-red-500"},"*")],-1)),d[13]||(d[13]=N("p",{class:"text-[10px] text-gray-500 leading-relaxed"}," \uC2DC\uD2B8 \uD638\uCD9C \uC2DC \uD0ED \uBAA9\uB85D\uACFC \uD568\uAED8 \uC804\uCCB4 \uD0ED\uC758 label/value \uD589\uC744 \uD55C \uBC88\uC5D0 \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uD0ED \uBC94\uC704\uC5D0\uC11C \uD2B9\uC815 \uD0ED\uB9CC \uACE0\uB974\uBA74 \uD574\uB2F9 \uD0ED\uB9CC \uB2E4\uC2DC \uC870\uD68C\uD569\uB2C8\uB2E4. ",-1)),N("div",Ho,[yt(N("select",{"onUpdate:modelValue":d[0]||(d[0]=b=>i.value=b),class:"flex-1 min-w-0 text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500",onChange:Os},[d[7]||(d[7]=N("option",{value:"manual"},"\uC9C1\uC811\uC785\uB825",-1)),(V(!0),B(he,null,xt(l.value,b=>(V(),B("option",{key:b.url,value:b.url},oe(b.title),9,Vo))),128))],544),[[Jn,i.value]]),N("button",{type:"button",class:"shrink-0 px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:ge.value||!t.value.trim()||!s.value.trim(),onClick:ns},oe(vt.value),9,Uo),N("button",{type:"button",class:"px-3 py-2 text-xs rounded-md bg-white border border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400",disabled:ge.value||ce.value||fe.value||l.value.length===0,onClick:$t,title:"\uCD5C\uADFC \uC2DC\uD2B8 \uBAA9\uB85D \uBE44\uC6B0\uAE30"}," \uBAA9\uB85D \uBE44\uC6B0\uAE30 ",8,Bo)]),i.value==="manual"?yt((V(),B("input",{key:0,"onUpdate:modelValue":d[1]||(d[1]=b=>t.value=b),type:"text",placeholder:"https://docs.google.com/spreadsheets/d/...",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[js,t.value]]):de("",!0),s.value.trim()?(V(),B("label",Wo,[yt(N("input",{"onUpdate:modelValue":d[2]||(d[2]=b=>n.value=b),type:"checkbox",class:"shrink-0"},null,512),[[Mo,n.value]]),d[8]||(d[8]=rt(" API \uD0A4 \uBCC0\uACBD ",-1))])):de("",!0),r.value?yt((V(),B("input",{key:2,"onUpdate:modelValue":d[3]||(d[3]=b=>s.value=b),type:"password",placeholder:"Google API Key (AIza...)",class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512)),[[js,s.value]]):de("",!0),N("div",qo,[d[10]||(d[10]=N("label",{class:"text-[11px] font-medium text-gray-400"},"\uD0ED \uBC94\uC704",-1)),yt(N("select",{"onUpdate:modelValue":d[4]||(d[4]=b=>h.value=b),class:"w-full text-xs px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100",disabled:c.value.length===0,onChange:ft},[d[9]||(d[9]=N("option",{value:""},"\uC804\uCCB4 \uD0ED",-1)),(V(!0),B(he,null,xt(c.value,b=>(V(),B("option",{key:b.sheetId,value:b.title},oe(b.title),9,Go))),128))],40,zo),[[Jn,h.value]]),d[11]||(d[11]=N("p",{class:"text-[10px] text-gray-500"},"\uD2B9\uC815 \uD0ED\uB9CC \uC120\uD0DD\uD558\uBA74 \uADF8 \uD0ED \uD589\uB9CC \uB2E4\uC2DC \uBD88\uB7EC\uC635\uB2C8\uB2E4. \uC804\uCCB4 \uD0ED\uC73C\uB85C \uB3CC\uB9AC\uBA74 \uC2DC\uD2B8 \uD638\uCD9C \uB54C \uBAA8\uC544 \uB454 \uC804\uCCB4 \uD589 \uBAA9\uB85D\uC744 \uB2E4\uC2DC \uBCF4\uC5EC \uC90D\uB2C8\uB2E4.",-1))])]),N("section",Jo,[d[15]||(d[15]=N("div",{class:"text-[13px] font-bold text-gray-900"},"2) \uD0A4\uC6CC\uB4DC \uAC80\uC0C9",-1)),N("div",Yo,[yt(N("input",{"onUpdate:modelValue":d[5]||(d[5]=b=>f.value=b),type:"text",placeholder:"\uB450 \uAE00\uC790 \uC774\uC0C1 \uC785\uB825",class:"flex-1 text-xs px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyup:Ro(u,["enter"])},null,544),[[js,f.value]]),N("button",{class:"px-3 py-2 text-xs rounded-md bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:ce.value||Ee.value||!t.value.trim()||!s.value.trim()||!f.value.trim()&&T.value.length===0&&!h.value||!!f.value.trim()&&!f.value.trim().split(",").some(b=>b.trim().length>=2),onClick:Ps},oe(ce.value?"\uAC80\uC0C9 \uC911...":"\uAC80\uC0C9"),9,Xo)]),p.value.length?(V(),B("div",Zo,[N("div",Qo,[N("div",eu," \uACB0\uACFC "+oe(p.value.length)+"\uAC1C / \uC120\uD0DD "+oe(A.value.size)+"\uAC1C ",1),N("div",tu,[H.value.length>0?(V(),B("button",{key:0,class:"text-[11px] px-2 py-1 rounded border border-orange-400 text-orange-700 bg-orange-50 hover:bg-orange-100",onClick:g}," \uC218\uC815\uAC74 \uC120\uD0DD ")):de("",!0),I.value.length>0?(V(),B("button",{key:1,class:"text-[11px] px-2 py-1 rounded border border-blue-400 text-blue-700 bg-blue-50 hover:bg-blue-100",onClick:x}," \uC2E0\uADDC \uC120\uD0DD ")):de("",!0),N("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:v}," \uC804\uCCB4\uC120\uD0DD "),N("button",{class:"text-[11px] px-2 py-1 rounded border border-gray-200 hover:bg-gray-50",onClick:m}," \uC120\uD0DD\uD574\uC81C ")])]),N("div",su,[(V(!0),B(he,null,xt(p.value,b=>(V(),B("label",{key:U(b),class:Je(["flex items-start gap-2 px-3 py-2 border-b border-gray-100 last:border-b-0",b.strikethrough?"bg-gray-50 opacity-60 cursor-default":"hover:bg-gray-50",!b.strikethrough&&z.value.has(`${b.tabTitle}::${b.rowNumber}`)?"bg-orange-50":""])},[N("input",{type:"checkbox",class:"mt-1",checked:A.value.has(U(b)),disabled:b.strikethrough,onChange:E=>!b.strikethrough&&a(b)},null,40,nu),N("div",ru,[N("div",lu,[N("span",{class:Je(["text-[12px] font-semibold truncate",b.strikethrough?"text-gray-400 line-through":"text-gray-800"])},[f.value.trim()&&!b.strikethrough?(V(!0),B(he,{key:0},xt(Fe(b.label||b.name||"(no label)",f.value),(E,D)=>(V(),B("span",{key:D,class:Je(E.match?"text-blue-500":"")},oe(E.text),3))),128)):(V(),B(he,{key:1},[rt(oe(b.label||b.name||"(no label)"),1)],64))],2),N("span",iu,"("+oe(b.tabTitle)+" / "+oe(b.rowNumber)+"\uD589)",1),!b.strikethrough&&z.value.has(`${b.tabTitle}::${b.rowNumber}`)?(V(),B("span",ou,"label \uBCC0\uACBD")):de("",!0),!b.strikethrough&&ie.value.has(`${b.tabTitle}::${b.rowNumber}`)?(V(),B("span",uu,"\uC2E0\uADDC")):de("",!0),b.strikethrough?(V(),B("span",cu,"\uC0AD\uC81C\uB428")):de("",!0)]),N("div",{class:Je(["text-[11px] truncate",b.strikethrough?"text-gray-400":"text-gray-500"])},[d[14]||(d[14]=rt("value: ",-1)),f.value.trim()&&!b.strikethrough?(V(!0),B(he,{key:0},xt(Fe(b.value,f.value),(E,D)=>(V(),B("span",{key:D,class:Je(E.match?"text-blue-500":"")},oe(E.text),3))),128)):(V(),B(he,{key:1},[rt(oe(b.value),1)],64))],2),b.description&&!b.strikethrough?(V(),B("div",au,"desc: "+oe(b.description),1)):de("",!0)])],2))),128))]),S.value.length>0?(V(),B("div",fu,[(V(!0),B(he,null,xt(S.value,b=>(V(),B("span",{key:U(b),class:"inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200"},[rt(oe(b.label||b.name||"(no label)")+" ",1),N("button",{type:"button",class:"text-gray-400 hover:text-gray-600 leading-none",onClick:Po(E=>a(b),["prevent"])},"\u2715",8,du)]))),128))])):de("",!0)])):de("",!0)]),N("section",hu,[d[16]||(d[16]=N("div",{class:"text-[13px] font-bold text-gray-900"},[rt("3) \uC5F0\uACB0 \uB300\uC0C1 "),N("span",{class:"text-red-500"},"*")],-1)),N("div",{class:Je(["p-3 rounded-lg border",K.value?"bg-blue-50 border-blue-200":"bg-gray-50 border-gray-200"])},[K.value?(V(),B(he,{key:0},[N("div",pu,oe(K.value.name),1),N("div",gu,oe(K.value.kind)+" / TEXT \uD504\uB85C\uD37C\uD2F0 "+oe(K.value.textProperties.length)+"\uAC1C ",1),P.value.length>0?(V(),B("p",bu," \uC911\uBCF5\uB41C label\uBA85\uC774 \uC788\uC2B5\uB2C8\uB2E4 : "+oe(P.value.join(", ")),1)):de("",!0)],64)):(V(),B("div",vu," \uC778\uC2A4\uD134\uC2A4(\uB610\uB294 \uC778\uC2A4\uD134\uC2A4\uB97C \uD3EC\uD568\uD55C \uB808\uC774\uC5B4)\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694. "))],2),d[17]||(d[17]=qi(\'<div class="text-[12px] text-gray-600 border-1 border-sky-200 bg-sky-50 rounded-lg p-3"><div class="text-[11px] font-medium text-gray-400 mb-1">\uC790\uB3D9 \uC5F0\uACB0 \uADDC\uCE59</div><div class="text-[11px] text-gray-500 leading-5"> \uC120\uD0DD\uD55C \uB808\uC774\uC5B4\uC758 TEXT \uD504\uB85C\uD37C\uD2F0 \uC911 <code class="text-[10px] bg-sky-200/50 px-1 rounded">label</code>, <code class="text-[10px] bg-sky-200/50 px-1 rounded">value</code>, <code class="text-[10px] bg-sky-200/50 px-1 rounded">description</code> \uC774 \uC874\uC7AC\uD558\uBA74 \uAC01\uAC01 \uC2DC\uD2B8\uC758 \uAC12\uC73C\uB85C \uC790\uB3D9 \uC5F0\uACB0\uD569\uB2C8\uB2E4. (2\uAC1C \uC774\uC0C1 \uC788\uC5B4\uB3C4 \uAC01\uAC01 \uC5F0\uACB0) </div></div>\',1))]),ee.value?(V(),B("p",mu,oe(ee.value),1)):de("",!0),ye.value?(V(),B("p",yu,oe(ye.value),1)):de("",!0)]),N("footer",xu,[y.value?(V(),B("p",_u," \uC77C\uCE58\uD558\uB294 \uD504\uB85C\uD37C\uD2F0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4 ")):de("",!0),N("div",wu,[!C.value||fe.value?(V(),B("div",Su,[N("button",{class:"w-full py-2.5 rounded-lg font-semibold text-[13px] transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:bg-gray-300",disabled:!O.value||fe.value,onClick:W},oe(fe.value?"\uC0DD\uC131/\uC5F0\uACB0 \uC911...":M.value?`${A.value.size}\uAC1C \uAE30\uC874 \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC5F0\uACB0`:`${A.value.size}\uAC1C \uC0DD\uC131 \uBC0F \uC5F0\uACB0`),9,Cu),!O.value&&!fe.value&&S.value.length>0?(V(),B("div",Tu," \uC778\uC2A4\uD134\uC2A4 \uB610\uB294 \uC778\uC2A4\uD134\uC2A4\uB97C \uD3EC\uD568\uD55C \uB808\uC774\uC5B4\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694 ")):de("",!0)])):de("",!0),C.value||Ce.value?(V(),B("button",{key:1,class:"flex-1 py-2.5 rounded-lg font-semibold text-[13px] transition-colors border-1 border-gray-900 bg-white text-gray-900 hover:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:bg-white",disabled:Ce.value,onClick:$},oe(Ce.value?"\uB3D9\uAE30\uD654 \uC911...":`\u26A1 ${A.value.size}\uAC1C \uB3D9\uAE30\uD654`),9,Au)):de("",!0)])])]))}});Fo(Mu).mount("#app");<\/script>\n    <style rel="stylesheet" crossorigin>/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-orange-50:oklch(98% .016 73.684);--color-orange-100:oklch(95.4% .038 75.164);--color-orange-200:oklch(90.1% .076 70.697);--color-orange-300:oklch(83.7% .128 66.29);--color-orange-400:oklch(75% .183 55.934);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-orange-700:oklch(55.3% .195 38.402);--color-orange-800:oklch(47% .157 37.304);--color-orange-900:oklch(40.8% .123 38.172);--color-orange-950:oklch(26.6% .079 36.259);--color-amber-50:oklch(98.7% .022 95.277);--color-amber-200:oklch(92.4% .12 95.746);--color-amber-300:oklch(87.9% .169 91.605);--color-amber-800:oklch(47.3% .137 46.201);--color-amber-900:oklch(41.4% .112 45.904);--color-amber-950:oklch(27.9% .077 45.635);--color-sky-50:oklch(97.7% .013 236.62);--color-sky-100:oklch(95.1% .026 236.824);--color-sky-200:oklch(90.1% .058 230.902);--color-sky-700:oklch(50% .134 242.749);--color-sky-900:oklch(39.1% .09 240.876);--color-sky-950:oklch(29.3% .066 243.157);--color-blue-50:oklch(97% .014 254.604);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-300:oklch(80.9% .105 251.813);--color-blue-400:oklch(70.7% .165 254.624);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-blue-800:oklch(42.4% .199 265.638);--color-blue-900:oklch(37.9% .146 265.522);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-tight:-.025em;--tracking-wide:.025em;--leading-snug:1.375;--leading-relaxed:1.625;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.bottom-full{bottom:100%}.left-1{left:calc(var(--spacing) * 1)}.left-1\\/2{left:50%}.z-10{z-index:10}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mb-1{margin-bottom:calc(var(--spacing) * 1)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-screen{height:100vh}.max-h-24{max-height:calc(var(--spacing) * 24)}.max-h-28{max-height:calc(var(--spacing) * 28)}.max-h-32{max-height:calc(var(--spacing) * 32)}.max-h-36{max-height:calc(var(--spacing) * 36)}.max-h-44{max-height:calc(var(--spacing) * 44)}.max-h-50{max-height:calc(var(--spacing) * 50)}.max-h-60{max-height:calc(var(--spacing) * 60)}.w-fit{width:fit-content}.w-full{width:100%}.w-max{width:max-content}.max-w-\\[200px\\]{max-width:200px}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-x-1{--tw-translate-x:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-amber-200{border-color:var(--color-amber-200)}.border-amber-300{border-color:var(--color-amber-300)}.border-blue-200{border-color:var(--color-blue-200)}.border-blue-300{border-color:var(--color-blue-300)}.border-blue-400{border-color:var(--color-blue-400)}.border-blue-900{border-color:var(--color-blue-900)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-400{border-color:var(--color-gray-400)}.border-gray-900{border-color:var(--color-gray-900)}.border-orange-300{border-color:var(--color-orange-300)}.border-orange-400{border-color:var(--color-orange-400)}.border-orange-500{border-color:var(--color-orange-500)}.border-sky-100{border-color:var(--color-sky-100)}.border-sky-200{border-color:var(--color-sky-200)}.bg-amber-50{background-color:var(--color-amber-50)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-blue-100{background-color:var(--color-blue-100)}.bg-blue-200{background-color:var(--color-blue-200)}.bg-blue-500{background-color:var(--color-blue-500)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-400{background-color:var(--color-gray-400)}.bg-gray-800{background-color:var(--color-gray-800)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-orange-50{background-color:var(--color-orange-50)}.bg-orange-100{background-color:var(--color-orange-100)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-sky-50{background-color:var(--color-sky-50)}.bg-sky-100{background-color:var(--color-sky-100)}.bg-sky-200{background-color:var(--color-sky-200)}.bg-sky-200\\/50{background-color:#b8e6fe80}@supports (color:color-mix(in lab,red,red)){.bg-sky-200\\/50{background-color:color-mix(in oklab,var(--color-sky-200) 50%,transparent)}}.bg-white{background-color:var(--color-white)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-4{padding-inline:calc(var(--spacing) * 4)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pl-1{padding-left:calc(var(--spacing) * 1)}.text-center{text-align:center}.font-sans{font-family:var(--font-sans)}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[12px\\]{font-size:12px}.text-\\[13px\\]{font-size:13px}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.whitespace-nowrap{white-space:nowrap}.text-amber-800{color:var(--color-amber-800)}.text-amber-900{color:var(--color-amber-900)}.text-amber-950{color:var(--color-amber-950)}.text-blue-500{color:var(--color-blue-500)}.text-blue-600{color:var(--color-blue-600)}.text-blue-700{color:var(--color-blue-700)}.text-blue-800{color:var(--color-blue-800)}.text-blue-900{color:var(--color-blue-900)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-600{color:var(--color-gray-600)}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-900{color:var(--color-gray-900)}.text-orange-700{color:var(--color-orange-700)}.text-orange-800{color:var(--color-orange-800)}.text-orange-900{color:var(--color-orange-900)}.text-orange-950{color:var(--color-orange-950)}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-sky-700{color:var(--color-sky-700)}.text-sky-900{color:var(--color-sky-900)}.text-sky-950{color:var(--color-sky-950)}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.line-through{text-decoration-line:line-through}.opacity-60{opacity:.6}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-orange-200{--tw-ring-color:var(--color-orange-200)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.select-none{-webkit-user-select:none;user-select:none}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media(hover:hover){.hover\\:bg-blue-100:hover{background-color:var(--color-blue-100)}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.hover\\:bg-gray-700:hover{background-color:var(--color-gray-700)}.hover\\:bg-orange-100:hover{background-color:var(--color-orange-100)}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-500:focus{--tw-ring-color:var(--color-blue-500)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:border-gray-300:disabled{border-color:var(--color-gray-300)}.disabled\\:bg-gray-100:disabled{background-color:var(--color-gray-100)}.disabled\\:bg-gray-300:disabled{background-color:var(--color-gray-300)}.disabled\\:bg-white:disabled{background-color:var(--color-white)}.disabled\\:text-gray-400:disabled{color:var(--color-gray-400)}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}</style>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n</html>\n', { width: 460, height: 960, title: "SheetToComponent" });
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
