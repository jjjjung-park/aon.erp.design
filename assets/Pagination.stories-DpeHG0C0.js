import{bJ as o,bc as y,c7 as r,bg as n,az as R,aA as q,be as i,F as I,bN as B,aB as A,bf as F,bU as j,bd as J,aC as G,aD as H,aE as K,bl as z,bP as h,x as E,bb as T,bx as M,b$ as Q,aF as W,bL as f}from"./iframe-DooHc6g7.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-FI0fEOG2.js";const u={};function Y(a,e){const b=q,t=A,c=G,s=H,v=R,P=K;return o(),y(P,{"items-per-page":5,total:100,"default-page":1},{default:r(({page:x})=>[n(v,null,{default:r(({items:O})=>[n(b),(o(!0),i(I,null,B(O,(p,S)=>(o(),i(I,{key:S},[p.type==="page"?(o(),y(t,{key:0,value:p.value,"is-active":p.value===x},{default:r(()=>[F(j(p.value),1)]),_:2},1032,["value","is-active"])):J("",!0)],64))),128)),n(c,{index:2}),n(s)]),_:2},1024)]),_:1})}const Z=X(u,[["render",Y]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{displayName:"TablePagination",description:"",tags:{},sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/pagination/TablePagination.vue"]});const ee={class:"flex items-center gap-3 justify-center w-full"},ae={class:"flex items-center gap-2 text-secondary text-sm"},d=z({__name:"InputPagination",props:{total:{}},setup(a){const e=f(1);return(b,t)=>{const c=h("LucideChevronLeftIcon"),s=E,v=W,P=h("LucideChevronRightIcon");return o(),i("div",ee,[n(s,{variant:"ghost",size:"icon"},{default:r(()=>[n(c)]),_:1}),T("div",ae,[n(v,{class:"w-[64px] text-center",modelValue:Q(e),"onUpdate:modelValue":t[0]||(t[0]=x=>M(e)?e.value=x:null)},null,8,["modelValue"]),t[1]||(t[1]=T("span",{class:"text-disabled-text"},"/",-1)),F(" "+j(a.total),1)]),n(s,{variant:"ghost",size:"icon"},{default:r(()=>[n(P)]),_:1})])}}});d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"InputPagination",description:"",tags:{},props:[{name:"total",required:!1,type:{name:"number"}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/pagination/InputPagination.vue"]});const ne={class:"flex gap-2 justify-center w-full"},_=z({__name:"DotPagination",props:{total:{default:5}},setup(a){return(e,b)=>{const t=E;return o(),i("div",ne,[(o(!0),i(I,null,B(a.total,(c,s)=>(o(),y(t,{key:s,variant:"ghost",size:"icon-sm",class:"w-2 h-2 bg-surface data-[state=active]:bg-primary"}))),128))])}}});_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"DotPagination",description:"",tags:{},props:[{name:"total",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/pagination/DotPagination.vue"]});const re={title:"내비게이션/Pagination",tags:["autodocs"]},m={name:"TablePagination",render:a=>({components:{TablePagination:Z},setup(){const e=f(1);return{args:a,page:e}},template:'<TablePagination v-model:page="page" v-bind="args" />'})},l={name:"InputPagination",argTypes:{total:{control:"number",description:"전체 페이지 수"}},args:{total:20},render:a=>({components:{InputPagination:d},setup(){const e=f(1);return{args:a,page:e}},template:'<InputPagination v-model:page="page" v-bind="args" />'})},g={name:"DotPagination",argTypes:{total:{control:"number",description:"전체 페이지 수",min:1,max:20}},args:{total:5},render:a=>({components:{DotPagination:_},setup(){const e=f(0);return{args:a,page:e}},template:'<DotPagination v-model="page" v-bind="args" />'})};var N,D,k;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'TablePagination',
  render: args => ({
    components: {
      TablePagination
    },
    setup() {
      const page = ref(1);
      return {
        args,
        page
      };
    },
    template: \`<TablePagination v-model:page="page" v-bind="args" />\`
  })
}`,...(k=(D=m.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var $,U,C;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'InputPagination',
  argTypes: {
    total: {
      control: 'number',
      description: '전체 페이지 수'
    }
  },
  args: {
    total: 20
  },
  render: args => ({
    components: {
      InputPagination
    },
    setup() {
      const page = ref(1);
      return {
        args,
        page
      };
    },
    template: \`<InputPagination v-model:page="page" v-bind="args" />\`
  })
}`,...(C=(U=l.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var V,w,L;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'DotPagination',
  argTypes: {
    total: {
      control: 'number',
      description: '전체 페이지 수',
      min: 1,
      max: 20
    }
  },
  args: {
    total: 5
  },
  render: args => ({
    components: {
      DotPagination
    },
    setup() {
      const page = ref(0);
      return {
        args,
        page
      };
    },
    template: \`<DotPagination v-model="page" v-bind="args" />\`
  })
}`,...(L=(w=g.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const ie=["Table","Input","Dot"];export{g as Dot,l as Input,m as Table,ie as __namedExportsOrder,re as default};
