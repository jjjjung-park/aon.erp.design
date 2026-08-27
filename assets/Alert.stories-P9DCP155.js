import{bn as v,bQ as n,bK as t,bf as s,bP as m,F as B,bd as c,be as A,bi as f,a7 as O,cc as q,x as F,bE as T,c1 as u,ba as y,bj as z,c as E,q as P,C as U,I as W}from"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";const X={key:0,class:"ml-auto flex gap-2 items-center"},a=v({__name:"Alert",props:{class:{type:[Boolean,null,String,Object,Array]},variant:{default:"default"},dismiss:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:l}){const r=e,p=l;return(_,b)=>{const w=n("LucideAlertTriangle"),S=n("LucideCircleAlert"),N=n("LucideCheck"),V=n("LucideInfo"),$=O,D=n("LucideX"),j=F;return t(),s("div",{"data-slot":"alert",class:T(u(y)(u(K)({variant:e.variant}),r.class)),role:"alert"},[m(_.$slots,"alert-icon",{},()=>[e.variant==="default"?(t(),s(B,{key:0},[],64)):e.variant==="danger"?(t(),c(w,{key:1})):e.variant==="warning"?(t(),c(S,{key:2})):e.variant==="success"?(t(),c(N,{key:3})):A("",!0),e.variant==="primary"?(t(),c(V,{key:4})):A("",!0)]),m(_.$slots,"default"),e.dismiss?(t(),s("div",X,[f($,{orientation:"vertical",class:"h-4 ml-1 bg-current opacity-20"}),f(j,{variant:"ghost",size:"icon-sm",class:"text-current hover:bg-current/10 h-auto w-auto",onClick:b[0]||(b[0]=Q=>p("close"))},{default:q(()=>[f(D)]),_:1})])):A("",!0)],2)}}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"variant",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"default"'}},{name:"dismiss",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"alert-icon"},{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/Alert.vue"]});const g=v({__name:"AlertDescription",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const l=e;return(r,p)=>(t(),s("div",{"data-slot":"alert-description",class:T(u(y)("text-muted col-start-2 grid justify-items-start gap-1 text-xs [&_p]:leading-relaxed",l.class))},[m(r.$slots,"default")],2))}});g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"AlertDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/AlertDescription.vue"]});const i=v({__name:"AlertTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const l=e;return(r,p)=>(t(),s("div",{"data-slot":"alert-title",class:T(u(y)("col-start-2 caption__bold",l.class))},[m(r.$slots,"default")],2))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"AlertTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/AlertTitle.vue"]});const K=z("relative w-full rounded-sm p-3 text-sm flex has-[>svg]:gap-x-2 gap-y-0.5 items-center [&>svg]:size-4 [&>svg]:stroke-3 [&>svg]:flex-none [&>svg]:text-current",{variants:{variant:{default:"border-1 border-border",primary:"bg-primary-light text-primary ",info:"bg-surface-muted text-muted",warning:"bg-warning-light text-warning ",danger:"bg-danger-light text-danger ",success:"bg-success-light text-success "}},defaultVariants:{variant:"default"}}),J={title:"UI 패턴/Alert",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","info","warning","danger","success"]},dismiss:{control:"boolean"}},args:{variant:"default",dismiss:!1}},o={render:e=>({components:{Alert:a,AlertTitle:i},setup(){return{args:e}},template:`
      <Alert v-bind="args">
        <template #default>
          <AlertTitle>알림 제목</AlertTitle>
        </template>
      </Alert>
    `})},d={name:"모든 Variant",render:()=>({components:{Alert:a,AlertTitle:i,LucideInfo:W,LucideCheck:U,LucideAlertTriangle:P,LucideCircleAlert:E},template:`
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
}`,...(h=(L=o.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var k,C,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const M=["Default","AllVariants"];export{d as AllVariants,o as Default,M as __namedExportsOrder,J as default};
