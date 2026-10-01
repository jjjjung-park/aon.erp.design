import{bq as g,bT as n,bN as t,bi as s,bS as m,F as z,bg as c,bh as b,bl as A,aa as O,cf as j,A as q,bH as v,c4 as p,bd as T,bm as F,d as U,t as E,C as P,f as W}from"./iframe-BccxKPkU.js";import"./preload-helper-FI0fEOG2.js";const X={key:0,class:"ml-auto flex gap-2 items-center"},a=g({__name:"Alert",props:{class:{type:[Boolean,null,String,Object,Array]},variant:{default:"default"},dismiss:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:l}){const r=e,u=l;return(y,_)=>{const S=n("LucideAlertTriangle"),w=n("LucideCircleAlert"),N=n("LucideCheck"),V=n("LucideInfo"),$=O,D=n("LucideX"),B=q;return t(),s("div",{"data-slot":"alert",class:v(p(T)(p(H)({variant:e.variant}),r.class)),role:"alert"},[m(y.$slots,"alert-icon",{},()=>[e.variant==="default"?(t(),s(z,{key:0},[],64)):e.variant==="danger"?(t(),c(S,{key:1,class:"size-4"})):e.variant==="warning"?(t(),c(w,{key:2,class:"size-4"})):e.variant==="success"?(t(),c(N,{key:3,class:"size-4"})):e.variant==="primary"?(t(),c(V,{key:4,class:"size-4"})):b("",!0)]),m(y.$slots,"default"),e.dismiss?(t(),s("div",X,[A($,{orientation:"vertical",class:"h-4 ml-1 bg-current opacity-20"}),A(B,{variant:"ghost",size:"icon-sm",class:"text-current hover:bg-current/10 h-auto w-auto",onClick:_[0]||(_[0]=G=>u("close"))},{default:j(()=>[A(D)]),_:1})])):b("",!0)],2)}}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"variant",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"default"'}},{name:"dismiss",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"alert-icon"},{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/Alert.vue"]});const f=g({__name:"AlertDescription",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const l=e;return(r,u)=>(t(),s("div",{"data-slot":"alert-description",class:v(p(T)("text-muted gap-1 text-xs [&_p]:leading-relaxed",l.class))},[m(r.$slots,"default")],2))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"AlertDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/AlertDescription.vue"]});const i=g({__name:"AlertTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const l=e;return(r,u)=>(t(),s("div",{"data-slot":"alert-title",class:v(p(T)("caption__bold",l.class))},[m(r.$slots,"default")],2))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"AlertTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/AlertTitle.vue"]});const H=F("relative w-full rounded-sm p-3 caption__bold flex has-[>svg]:gap-x-2 gap-y-0.5 items-center [&>svg]:size-4 [&>svg]:flex-none [&>svg]:text-current",{variants:{variant:{default:"border-1 border-border",primary:"bg-primary-light text-primary ",info:"bg-surface-muted text-muted",warning:"bg-warning-light text-warning ",danger:"bg-danger-light text-danger ",success:"bg-success-light text-success "}},defaultVariants:{variant:"default"}}),M={title:"UI 패턴/Alert",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","info","warning","danger","success"]},dismiss:{control:"boolean"}},args:{variant:"default",dismiss:!1}},o={render:e=>({components:{Alert:a,AlertTitle:i},setup(){return{args:e}},template:`
      <Alert v-bind="args">
        <template #default>
          <AlertTitle>알림 제목</AlertTitle>
        </template>
      </Alert>
    `})},d={name:"모든 Variant",render:()=>({components:{Alert:a,AlertTitle:i,LucideInfo:W,LucideCheck:P,LucideAlertTriangle:E,LucideCircleAlert:U},template:`
      <div class="flex flex-col gap-3">
        <Alert variant="default">
          <template #default><AlertTitle>Default</AlertTitle></template>
        </Alert>
        <Alert variant="primary">
          <template #alert-icon><LucideInfo /></template>
          <template #default><AlertTitle>Primary</AlertTitle></template>
        </Alert>
        <Alert variant="info">
          <template #alert-icon><LucideInfo /></template>
          <template #default><AlertTitle>Info</AlertTitle></template>
        </Alert>
        <Alert variant="success">
          <template #alert-icon><LucideCheck /></template>
          <template #default><AlertTitle>Success</AlertTitle></template>
        </Alert>
        <Alert variant="warning">
          <template #alert-icon><LucideCircleAlert /></template>
          <template #default><AlertTitle>Warning</AlertTitle></template>
        </Alert>
        <Alert variant="danger">
          <template #alert-icon><LucideAlertTriangle /></template>
          <template #default><AlertTitle>Danger</AlertTitle></template>
        </Alert>
      </div>
    `})};var x,L,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert,
      AlertTitle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Alert v-bind="args">
        <template #default>
          <AlertTitle>알림 제목</AlertTitle>
        </template>
      </Alert>
    \`
  })
}`,...(h=(L=o.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var C,k,I;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => ({
    components: {
      Alert,
      AlertTitle,
      LucideInfo,
      LucideCheck,
      LucideAlertTriangle,
      LucideCircleAlert
    },
    template: \`
      <div class="flex flex-col gap-3">
        <Alert variant="default">
          <template #default><AlertTitle>Default</AlertTitle></template>
        </Alert>
        <Alert variant="primary">
          <template #alert-icon><LucideInfo /></template>
          <template #default><AlertTitle>Primary</AlertTitle></template>
        </Alert>
        <Alert variant="info">
          <template #alert-icon><LucideInfo /></template>
          <template #default><AlertTitle>Info</AlertTitle></template>
        </Alert>
        <Alert variant="success">
          <template #alert-icon><LucideCheck /></template>
          <template #default><AlertTitle>Success</AlertTitle></template>
        </Alert>
        <Alert variant="warning">
          <template #alert-icon><LucideCircleAlert /></template>
          <template #default><AlertTitle>Warning</AlertTitle></template>
        </Alert>
        <Alert variant="danger">
          <template #alert-icon><LucideAlertTriangle /></template>
          <template #default><AlertTitle>Danger</AlertTitle></template>
        </Alert>
      </div>
    \`
  })
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const Q=["Default","AllVariants"];export{d as AllVariants,o as Default,Q as __namedExportsOrder,M as default};
