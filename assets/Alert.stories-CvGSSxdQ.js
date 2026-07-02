import{bs as g,bZ as n,bS as t,bk as i,bY as m,F as j,bh as o,bi as f,bn as v,a4 as O,co as q,z as F,bL as T,cb as u,be as y,bo as z,d as U,t as E,C as P,I as W}from"./iframe-4xPXPRuq.js";import"./preload-helper-FI0fEOG2.js";const X={key:0,class:"ml-auto flex gap-2 items-center"},r=g({__name:"Alert",props:{class:{type:[Boolean,null,String,Object,Array]},variant:{default:"default"},dismiss:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:a}){const l=e,A=a;return(D,_)=>{const I=n("LucideAlertTriangle"),S=n("LucideCircleAlert"),w=n("LucideCheck"),N=n("LucideInfo"),V=O,$=n("LucideX"),B=F;return t(),i("div",{"data-slot":"alert",class:T(u(y)(u(Y)({variant:e.variant}),l.class)),role:"alert"},[m(D.$slots,"alert-icon",{},()=>[e.variant==="default"?(t(),i(j,{key:0},[],64)):e.variant==="danger"?(t(),o(I,{key:1})):e.variant==="warning"?(t(),o(S,{key:2})):e.variant==="success"?(t(),o(w,{key:3})):f("",!0),e.variant==="primary"?(t(),o(N,{key:4})):f("",!0)]),m(D.$slots,"default"),e.dismiss?(t(),i("div",X,[v(V,{orientation:"vertical",class:"h-4 ml-1 bg-current opacity-20"}),v(B,{variant:"ghost",size:"icon-sm",class:"text-current hover:bg-current/10 h-auto w-auto",onClick:_[0]||(_[0]=Z=>A("close"))},{default:q(()=>[v($)]),_:1})])):f("",!0)],2)}}});r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"variant",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"default"'}},{name:"dismiss",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"alert-icon"},{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/Alert.vue"]});const s=g({__name:"AlertDescription",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const a=e;return(l,A)=>(t(),i("div",{"data-slot":"alert-description",class:T(u(y)("text-muted col-start-2 grid justify-items-start gap-1 text-xs [&_p]:leading-relaxed",a.class))},[m(l.$slots,"default")],2))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"AlertDescription",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/AlertDescription.vue"]});const c=g({__name:"AlertTitle",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(e){const a=e;return(l,A)=>(t(),i("div",{"data-slot":"alert-title",class:T(u(y)("col-start-2 caption__bold",a.class))},[m(l.$slots,"default")],2))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"AlertTitle",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/alert/AlertTitle.vue"]});const Y=z("relative w-full rounded-sm p-3 text-sm flex has-[>svg]:gap-x-2 gap-y-0.5 items-center [&>svg]:size-4 [&>svg]:stroke-3 [&>svg]:flex-none [&>svg]:text-current",{variants:{variant:{default:"border-1 border-border",primary:"bg-primary-light text-primary ",info:"bg-surface-muted text-muted",warning:"bg-warning-light text-warning ",danger:"bg-danger-light text-danger ",success:"bg-success-light text-success "}},defaultVariants:{variant:"default"}}),J={title:"UI 패턴/Alert",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","info","warning","danger","success"]}},args:{variant:"default"}},d={render:e=>({components:{Alert:r,AlertTitle:c,AlertDescription:s},setup(){return{args:e}},template:`
      <Alert v-bind="args">
        <template #default>
          <div>
            <AlertTitle>알림 제목</AlertTitle>
            <AlertDescription>알림 내용이 여기에 표시됩니다.</AlertDescription>
          </div>
        </template>
      </Alert>
    `})},p={name:"모든 Variant",render:()=>({components:{Alert:r,AlertTitle:c,AlertDescription:s,LucideInfo:W,LucideCheck:P,LucideAlertTriangle:E,LucideCircleAlert:U},template:`
      <div class="flex flex-col gap-3">
        <Alert variant="default">
          <template #default>
            <div><AlertTitle>Default</AlertTitle><AlertDescription>기본 알림 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="primary">
          <template #alert-icon><LucideInfo /></template>
          <template #default>
            <div><AlertTitle>Primary</AlertTitle><AlertDescription>안내 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="info">
          <template #alert-icon><LucideInfo /></template>
          <template #default>
            <div><AlertTitle>Info</AlertTitle><AlertDescription>정보 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="success">
          <template #alert-icon><LucideCheck /></template>
          <template #default>
            <div><AlertTitle>Success</AlertTitle><AlertDescription>성공 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="warning">
          <template #alert-icon><LucideCircleAlert /></template>
          <template #default>
            <div><AlertTitle>Warning</AlertTitle><AlertDescription>주의 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="danger">
          <template #alert-icon><LucideAlertTriangle /></template>
          <template #default>
            <div><AlertTitle>Danger</AlertTitle><AlertDescription>위험 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
      </div>
    `})};var b,x,L;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Alert,
      AlertTitle,
      AlertDescription
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Alert v-bind="args">
        <template #default>
          <div>
            <AlertTitle>알림 제목</AlertTitle>
            <AlertDescription>알림 내용이 여기에 표시됩니다.</AlertDescription>
          </div>
        </template>
      </Alert>
    \`
  })
}`,...(L=(x=d.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var h,k,C;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => ({
    components: {
      Alert,
      AlertTitle,
      AlertDescription,
      LucideInfo,
      LucideCheck,
      LucideAlertTriangle,
      LucideCircleAlert
    },
    template: \`
      <div class="flex flex-col gap-3">
        <Alert variant="default">
          <template #default>
            <div><AlertTitle>Default</AlertTitle><AlertDescription>기본 알림 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="primary">
          <template #alert-icon><LucideInfo /></template>
          <template #default>
            <div><AlertTitle>Primary</AlertTitle><AlertDescription>안내 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="info">
          <template #alert-icon><LucideInfo /></template>
          <template #default>
            <div><AlertTitle>Info</AlertTitle><AlertDescription>정보 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="success">
          <template #alert-icon><LucideCheck /></template>
          <template #default>
            <div><AlertTitle>Success</AlertTitle><AlertDescription>성공 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="warning">
          <template #alert-icon><LucideCircleAlert /></template>
          <template #default>
            <div><AlertTitle>Warning</AlertTitle><AlertDescription>주의 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
        <Alert variant="danger">
          <template #alert-icon><LucideAlertTriangle /></template>
          <template #default>
            <div><AlertTitle>Danger</AlertTitle><AlertDescription>위험 메시지입니다.</AlertDescription></div>
          </template>
        </Alert>
      </div>
    \`
  })
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const K=["Default","AllVariants"];export{p as AllVariants,d as Default,K as __namedExportsOrder,J as default};
