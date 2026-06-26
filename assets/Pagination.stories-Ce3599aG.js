import{bO as o,bg as x,cf as r,bl as n,aE as q,aF as R,bi as i,F as I,bS as B,aG as G,bk as F,b_ as j,bh as H,aH as J,aI as K,aJ as Q,bq as O,bU as h,z as S,bf as T,bC as A,c5 as M,aK as W,bQ as f}from"./iframe-CGZVOpYz.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-FI0fEOG2.js";const u={};function Y(a,e){const b=R,t=G,c=J,s=K,v=q,P=Q;return o(),x(P,{"items-per-page":5,total:100,"default-page":1},{default:r(({page:y})=>[n(v,null,{default:r(({items:z})=>[n(b),(o(!0),i(I,null,B(z,(p,E)=>(o(),i(I,{key:E},[p.type==="page"?(o(),x(t,{key:0,value:p.value,"is-active":p.value===y},{default:r(()=>[F(j(p.value),1)]),_:2},1032,["value","is-active"])):H("",!0)],64))),128)),n(c,{index:2}),n(s)]),_:2},1024)]),_:1})}const Z=X(u,[["render",Y]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{displayName:"TablePagination",description:"",tags:{},sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/pagination/TablePagination.vue"]});const ee={class:"flex items-center gap-3 justify-center w-full"},ae={class:"flex items-center gap-2 text-muted text-sm"},d=O({__name:"InputPagination",props:{total:{}},setup(a){const e=f(1);return(b,t)=>{const c=h("LucideChevronLeftIcon"),s=S,v=W,P=h("LucideChevronRightIcon");return o(),i("div",ee,[n(s,{variant:"ghost",size:"icon"},{default:r(()=>[n(c)]),_:1}),T("div",ae,[n(v,{class:"w-[64px] text-center",modelValue:M(e),"onUpdate:modelValue":t[0]||(t[0]=y=>A(e)?e.value=y:null)},null,8,["modelValue"]),t[1]||(t[1]=T("span",{class:"text-disabled-text"},"/",-1)),F(" "+j(a.total),1)]),n(s,{variant:"ghost",size:"icon"},{default:r(()=>[n(P)]),_:1})])}}});d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"InputPagination",description:"",tags:{},props:[{name:"total",required:!1,type:{name:"number"}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/pagination/InputPagination.vue"]});const ne={class:"flex gap-2 justify-center w-full"},_=O({__name:"DotPagination",props:{total:{default:5}},setup(a){return(e,b)=>{const t=S;return o(),i("div",ne,[(o(!0),i(I,null,B(a.total,(c,s)=>(o(),x(t,{key:s,variant:"ghost",size:"icon-sm",class:"w-2 h-2 bg-gray-300 data-[state=active]:bg-primary"}))),128))])}}});_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"DotPagination",description:"",tags:{},props:[{name:"total",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"5"}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/pagination/DotPagination.vue"]});const re={title:"내비게이션/Pagination",tags:["autodocs"]},m={name:"TablePagination",render:a=>({components:{TablePagination:Z},setup(){const e=f(1);return{args:a,page:e}},template:'<TablePagination v-model:page="page" v-bind="args" />'})},l={name:"InputPagination",argTypes:{total:{control:"number",description:"전체 페이지 수"}},args:{total:20},render:a=>({components:{InputPagination:d},setup(){const e=f(1);return{args:a,page:e}},template:'<InputPagination v-model:page="page" v-bind="args" />'})},g={name:"DotPagination",argTypes:{total:{control:"number",description:"전체 페이지 수",min:1,max:20}},args:{total:5},render:a=>({components:{DotPagination:_},setup(){const e=f(0);return{args:a,page:e}},template:'<DotPagination v-model="page" v-bind="args" />'})};var k,N,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(N=m.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var U,$,C;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(C=($=l.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var V,w,L;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
