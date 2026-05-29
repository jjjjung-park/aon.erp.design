import{bl as y,bJ as o,bc as U,c7 as h,bb as c,be as d,F as T,bN as L,bD as B,b$ as C,b9 as F,bO as X,bU as $,bg as f,aG as z,Y as q,c5 as G,bI as J,bP as M,x as Y,bL as x}from"./iframe-DooHc6g7.js";import"./preload-helper-FI0fEOG2.js";const H={class:"flex flex-nowrap"},K=["data-disabled","data-state","onClick"],i=y({__name:"LineTabs",props:{class:{type:[Boolean,null,String,Object,Array]},tabList:{}},setup(a){const t=a;return(l,s)=>{const r=z,n=q;return o(),U(n,null,{default:h(()=>[c("div",H,[(o(!0),d(T,null,L(a.tabList,e=>(o(),d("div",{"data-disabled":e.disabled,"data-state":e.active,onClick:b=>l.$emit("change",e.value),class:B(C(F)("flex min-w-fit items-center justify-center px-padding-lg gap-1 h-8 text-sm bg-background font-bold cursor-pointer text-secondary relative","data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text"," data-[state=true]:text-default-text data-[state=true]:after:content-[''] data-[state=true]:after:absolute data-[state=true]:after:bottom-0 data-[state=true]:after:left-0 data-[state=true]:after:w-full data-[state=true]:after:h-[2px] data-[state=true]:after:bg-primary",t.class))},[X(l.$slots,"default",{tab:e},()=>[c("span",null,$(e.label),1)])],10,K))),256))]),f(r,{orientation:"horizontal"})]),_:3})}}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"LineTabs",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"tabList",required:!0,type:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}]}]}}],events:[{name:"change"}],slots:[{name:"default",scoped:!0,bindings:[{name:"tab",title:"binding"}]}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/tabs/LineTabs.vue"]});const Q={class:"flex"},W=["data-disabled","data-state"],Z={class:"truncate max-w-[140px]"},g=y({__name:"BoxTabs",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(a){const t=a,l=[{label:"tabs fdfdfdfdfdfdfddfddf",value:"tabs",active:!0},{label:"tabs",value:"tabs",active:!1,disabled:!0},{label:"tabs",value:"tabs",active:!1},{label:"tabs",value:"tabs",active:!1},{label:"tabs",value:"tabs",active:!1},{label:"tabs",value:"tabs",active:!1}];return(s,r)=>(o(),d("div",Q,[(o(),d(T,null,L(l,(n,e)=>c("div",{"data-disabled":n.disabled,"data-state":n.active,class:B(C(F)("flex items-center justify-center px-padding-lg min-w-20 h-8 text-sm bg-background text-secondary border-1 border-surface font-bold -mr-1 cursor-pointer","data-[disabled=true]:cursor-not-allowed data-[disabled=true]:text-disabled-text","data-[state=true]:bg-primary-light data-[state=true]:text-primary data-[state=true]:border-primary data-[state=true]:mr-0",t.class))},[c("span",Z,$(n.label+e),1)],10,W)),64))]))}});g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"BoxTabs",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/tabs/BoxTabs.vue"]});const ee={class:"flex pt-1 px-4 bg-light border-gray-300 relative border-b-1 h-11"},ae=["data-status","onClick"],te={class:"truncate max-w-[220px]"},_=y({__name:"PageTabs",setup(a){const t=x([{label:"tabs fdfdfdfdfdfdfddfddf",value:"tabs1",active:!0},{label:"tabs",value:"tabs2",active:!1},{label:"tabs",value:"tabs3",active:!1},{label:"tabs",value:"tabs4",active:!1},{label:"tabs",value:"tabs5",active:!1}]),l=x("tabs1"),s=G("$tabItem");J(()=>{var e;((e=s.value)==null?void 0:e.find(b=>b.dataset.status==="true")).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})});const r=n=>{t.value.forEach(e=>e.active=e.value===n),l.value=n};return(n,e)=>{const b=M("LucideX"),E=Y,V=z,D=q;return o(),U(D,null,{default:h(()=>[c("div",ee,[(o(!0),d(T,null,L(C(t),(u,R)=>(o(),d("div",{ref_for:!0,ref_key:"$tabItem",ref:s,"data-status":u.active,class:B(["flex items-center justify-between px-padding-lg min-w-[200px] h-full text-sm border-gray-300 font-bold cursor-pointer text-gray-400 hover:text-secondary",u.active?"page-tab--active":""]),onClick:se=>r(u.value)},[c("span",te,$(u.label+R),1),f(E,{size:"icon-sm",variant:"ghost",class:"hover:bg-transparent text-gray-400 hover:text-secondary"},{default:h(()=>[f(b)]),_:1})],10,ae))),256))]),f(V,{orientation:"horizontal"})]),_:1})}}});_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"PageTabs",description:"",tags:{},sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/tabs/PageTabs.vue"]});const re={title:"내비게이션/Tabs",component:i,tags:["autodocs"],argTypes:{tabList:{control:"object",description:"탭 목록 ({ label, value, active, disabled? }[])"}},args:{tabList:[{label:"전체",value:"all",active:!0,disabled:!1},{label:"진행중",value:"process",active:!1,disabled:!1},{label:"완료",value:"done",active:!1,disabled:!1},{label:"비활성",value:"disabled",active:!1,disabled:!0}]}},p={name:"LineTabs — 인터랙티브",render:a=>({components:{LineTabs:i},setup(){const t=x(a.tabList.map((s,r)=>({...s,active:r===0})));return{tabs:t,onChange:s=>{t.value=t.value.map(r=>({...r,active:r.value===s}))}}},template:`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" @change="onChange" />
      </div>
    `})},m={name:"BoxTabs",render:()=>({components:{BoxTabs:g},setup(){const a=x([{label:"전체",value:"all",active:!0,disabled:!1},{label:"진행중",value:"process",active:!1,disabled:!1},{label:"완료",value:"done",active:!1,disabled:!1},{label:"비활성",value:"disabled",active:!1,disabled:!0}]);return{tabs:a,onChange:l=>{a.value=a.value.map(s=>({...s,active:s.value===l}))}}},template:'<BoxTabs :tab-list="tabs" @change="onChange" />'})},v={name:"PageTabs",render:()=>({components:{PageTabs:_},template:"<PageTabs />"})};var k,w,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'LineTabs — 인터랙티브',
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
        <LineTabs :tab-list="tabs" @change="onChange" />
      </div>
    \`
  })
}`,...(S=(w=p.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var N,P,I;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(P=m.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var j,A,O;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'PageTabs',
  render: () => ({
    components: {
      PageTabs
    },
    template: \`<PageTabs />\`
  })
}`,...(O=(A=v.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const oe=["Line","Box","Page"];export{m as Box,p as Line,v as Page,oe as __namedExportsOrder,re as default};
