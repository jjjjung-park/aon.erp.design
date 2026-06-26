import{bq as N,bO as l,bg as D,cf as z,bf as g,bi as d,F as P,bS as j,bI as q,c5 as f,bd as O,bT as E,b_ as I,bl as U,ac as V,aa as Q,be as R,bQ as y}from"./iframe-CGZVOpYz.js";import{_ as G}from"./PageTabs-D2Q1AWjt.js";import"./preload-helper-FI0fEOG2.js";const H={class:"flex flex-nowrap"},J=["data-disabled","data-state","onClick"],o=N({__name:"LineTabs",props:{class:{type:[Boolean,null,String,Object,Array]},tabList:{},type:{}},setup(s){const e=s;return(n,a)=>{const t=V,v=Q;return l(),D(v,null,{default:z(()=>[g("div",H,[(l(!0),d(P,null,j(s.tabList,r=>(l(),d("div",{"data-disabled":r.disabled,"data-state":r.active,onClick:F=>n.$emit("change",r.value),class:q(f(O)("flex min-w-fit items-center justify-center px-padding-lg gap-1 h-8 text-sm bg-background font-bold cursor-pointer text-muted relative","data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text","data-[state=true]:text-default data-[state=true]:after:content-[''] data-[state=true]:after:absolute data-[state=true]:after:bottom-0 data-[state=true]:after:left-0 data-[state=true]:after:w-full data-[state=true]:after:h-[2px]",e.type==="secondary"?"data-[state=true]:after:bg-default":"data-[state=true]:after:bg-primary",e.class))},[E(n.$slots,"default",{tab:r},()=>[g("span",null,I(r.label),1)])],10,J))),256))]),U(t,{orientation:"horizontal"})]),_:3})}}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"LineTabs",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"tabList",required:!0,type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}]}]}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'}]}}],events:[{name:"change"}],slots:[{name:"default",scoped:!0,bindings:[{name:"tab",title:"binding"}]}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/tabs/LineTabs.vue"]});const K={class:"flex"},M=["data-disabled","data-state","onClick"],W={class:"truncate max-w-[140px]"},p=N({__name:"BoxTabs",props:{tabList:{},class:{type:[Boolean,null,String,Object,Array]}},emits:["change"],setup(s,{emit:e}){const n=s,a=e,t=[{label:"tabs",value:"tab1",active:!0},{label:"tabs",value:"tab2",active:!1,disabled:!0},{label:"tabs",value:"tab3",active:!1},{label:"tabs",value:"tab4",active:!1}],v=R(()=>n.tabList??t);return(r,F)=>(l(),d("div",K,[(l(!0),d(P,null,j(f(v),i=>(l(),d("div",{"data-disabled":i.disabled,"data-state":i.active,class:q(f(O)("flex items-center justify-center px-padding-lg min-w-20 h-8 text-sm bg-background text-muted border-1 border-border font-bold cursor-pointer border-r-0 last:border-r-1 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text data-[state=true]:bg-primary-light data-[state=true]:text-primary data-[state=true]:border-primary data-[state=true]:[&+div]:border-l-primary",n.class)),onClick:X=>!i.disabled&&a("change",i.value)},[g("span",W,I(i.label),1)],10,M))),256))]))}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"BoxTabs",description:"",tags:{},props:[{name:"tabList",required:!1,type:{name:"Array",elements:[{name:"{ label: string; value: string; active: boolean; disabled?: boolean }"}]}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],events:[{name:"change",type:{names:["string"]}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/tabs/BoxTabs.vue"]});const ae={title:"내비게이션/Tabs",component:o,tags:["autodocs"],argTypes:{tabList:{control:"object",description:"탭 목록 ({ label, value, active, disabled? }[])"}},args:{tabList:[{label:"전체",value:"all",active:!0,disabled:!1},{label:"진행중",value:"process",active:!1,disabled:!1},{label:"완료",value:"done",active:!1,disabled:!1},{label:"비활성",value:"disabled",active:!1,disabled:!0}]}},c={name:"LineTabs — primary",render:s=>({components:{LineTabs:o},setup(){const e=y(s.tabList.map((a,t)=>({...a,active:t===0})));return{tabs:e,onChange:a=>{e.value=e.value.map(t=>({...t,active:t.value===a}))}}},template:`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="primary" @change="onChange" />
      </div>
    `})},b={name:"LineTabs — secondary",render:s=>({components:{LineTabs:o},setup(){const e=y(s.tabList.map((a,t)=>({...a,active:t===0})));return{tabs:e,onChange:a=>{e.value=e.value.map(t=>({...t,active:t.value===a}))}}},template:`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="secondary" @change="onChange" />
      </div>
    `})},u={name:"BoxTabs",render:()=>({components:{BoxTabs:p},setup(){const s=y([{label:"전체",value:"all",active:!0,disabled:!1},{label:"진행중",value:"process",active:!1,disabled:!1},{label:"완료",value:"done",active:!1,disabled:!1},{label:"비활성",value:"disabled",active:!1,disabled:!0}]);return{tabs:s,onChange:n=>{s.value=s.value.map(a=>({...a,active:a.value===n}))}}},template:'<BoxTabs :tab-list="tabs" @change="onChange" />'})},m={name:"PageTabs",render:()=>({components:{PageTabs:G},template:"<PageTabs />"})};var h,_,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'LineTabs — primary',
  render: args => ({
    components: {
      LineTabs
    },
    setup() {
      const tabs = ref(args.tabList.map((t: any, i: number) => ({
        ...t,
        active: i === 0
      })));
      const onChange = (val: string) => {
        tabs.value = tabs.value.map((t: any) => ({
          ...t,
          active: t.value === val
        }));
      };
      return {
        tabs,
        onChange
      };
    },
    template: \`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="primary" @change="onChange" />
      </div>
    \`
  })
}`,...(x=(_=c.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var T,L,C;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'LineTabs — secondary',
  render: args => ({
    components: {
      LineTabs
    },
    setup() {
      const tabs = ref(args.tabList.map((t: any, i: number) => ({
        ...t,
        active: i === 0
      })));
      const onChange = (val: string) => {
        tabs.value = tabs.value.map((t: any) => ({
          ...t,
          active: t.value === val
        }));
      };
      return {
        tabs,
        onChange
      };
    },
    template: \`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="secondary" @change="onChange" />
      </div>
    \`
  })
}`,...(C=(L=b.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var B,S,k;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'BoxTabs',
  render: () => ({
    components: {
      BoxTabs
    },
    setup() {
      const tabs = ref([{
        label: '전체',
        value: 'all',
        active: true,
        disabled: false
      }, {
        label: '진행중',
        value: 'process',
        active: false,
        disabled: false
      }, {
        label: '완료',
        value: 'done',
        active: false,
        disabled: false
      }, {
        label: '비활성',
        value: 'disabled',
        active: false,
        disabled: true
      }]);
      const onChange = (val: string) => {
        tabs.value = tabs.value.map(t => ({
          ...t,
          active: t.value === val
        }));
      };
      return {
        tabs,
        onChange
      };
    },
    template: \`<BoxTabs :tab-list="tabs" @change="onChange" />\`
  })
}`,...(k=(S=u.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,$,A;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'PageTabs',
  render: () => ({
    components: {
      PageTabs
    },
    template: \`<PageTabs />\`
  })
}`,...(A=($=m.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const te=["Line","LineDefault","Box","Page"];export{u as Box,c as Line,b as LineDefault,m as Page,te as __namedExportsOrder,ae as default};
