import{bs as D,bS as d,bh as b,co as t,bn as o,af as L,bL as N,cb as p,be as j,ag as A,ah as F,ai as O,bk as E,F as G,bX as X,aj as Y,bY as H,bg as J,c3 as K,bV as M,bf as P,ak as Q}from"./iframe-4xPXPRuq.js";import{_ as R}from"./ComboboxTag-aadXWQBF.js";import"./preload-helper-FI0fEOG2.js";const W={class:"truncate"},s=D({__name:"SelectBase",props:{placeholder:{default:"선택하세요"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean},size:{},class:{type:[Boolean,null,String,Object,Array]},listItem:{default:()=>[]}},emits:["click"],setup(e,{emit:z}){const f=e,T=z,i=M(null),k=P(()=>{var n;return(n=f.listItem.find(l=>l.value===i.value))==null?void 0:n.label});return(n,l)=>{const w=A,C=L,$=Y,U=O,V=F,q=Q;return d(),b(q,{value:p(i),"onUpdate:value":l[0]||(l[0]=a=>i.value=a),"default-value":p(k),onClick:l[1]||(l[1]=a=>T("click",a))},{default:t(()=>[o(C,{class:N(p(j)("w-full",f.class)),disabled:e.disabled,size:e.size,"data-display":e.readonly?"readonly":""},{default:t(()=>[o(w,{placeholder:e.placeholder},null,8,["placeholder"])]),_:1},8,["class","disabled","size","data-display"]),o(V,null,{default:t(()=>[o(U,null,{default:t(()=>[(d(!0),E(G,null,X(e.listItem,a=>(d(),b($,{key:a.value,value:a.value},{default:t(()=>[H(n.$slots,"default",{item:a},()=>[J("p",W,K(a.label),1)])]),_:2},1032,["value"]))),128))]),_:3})]),_:3})]),_:3},8,["value","default-value"])}}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"SelectBase",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'선택하세요'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"default"'},{name:'"lg"'}]}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"listItem",required:!1,type:{name:"Array",elements:[{name:"ListItem"}]},defaultValue:{func:!1,value:"() => []"}}],events:[{name:"click"}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/select/SelectBase.vue"]});const u=[{label:"옵션 1",value:"1"},{label:"옵션 2",value:"2"},{label:"옵션 3",value:"3"},{label:"옵션 4",value:"4"}],le={title:"UI 패턴/Select",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"radio",options:["기본 셀렉트","comboboxTag"],description:"셀렉트 종류"},multiple:{control:"radio",options:["단일","멀티"],description:"선택 모드",if:{arg:"type",eq:"comboboxTag"}},placeholder:{control:"text",description:"플레이스홀더"},disabled:{control:"boolean",description:"비활성화"}},args:{type:"comboboxTag",multiple:"단일",placeholder:"선택하세요",disabled:!1}},r={name:"Select",render:e=>({components:{SelectBase:s,ComboboxTag:R},setup(){return{args:e,sampleItems:u}},template:`
      <div class="w-60">
        <ComboboxTag
          v-if="args.type === 'comboboxTag'"
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :multiple="args.multiple === '멀티'"
          :disabled="args.disabled"
        />
        <SelectBase
          v-else
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    `})},c={name:"Select — 사이즈",render:()=>({components:{SelectBase:s},setup(){return{sampleItems:u}},template:`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase size="sm"      :list-item="sampleItems" placeholder="Small" />
        <SelectBase size="default" :list-item="sampleItems" placeholder="Default" />
        <SelectBase size="lg"      :list-item="sampleItems" placeholder="Large" />
      </div>
    `})},m={name:"Select — 상태",render:()=>({components:{SelectBase:s},setup(){return{sampleItems:u}},template:`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase :list-item="sampleItems" placeholder="기본" />
        <SelectBase :list-item="sampleItems" placeholder="비활성화" :disabled="true" />
        <SelectBase :list-item="sampleItems" placeholder="읽기 전용" :readonly="true" />
      </div>
    `})};var g,S,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Select',
  render: args => ({
    components: {
      SelectBase,
      ComboboxTag
    },
    setup() {
      return {
        args,
        sampleItems
      };
    },
    template: \`
      <div class="w-60">
        <ComboboxTag
          v-if="args.type === 'comboboxTag'"
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :multiple="args.multiple === '멀티'"
          :disabled="args.disabled"
        />
        <SelectBase
          v-else
          :list-item="sampleItems"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    \`
  })
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,_,B;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Select — 사이즈',
  render: () => ({
    components: {
      SelectBase
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase size="sm"      :list-item="sampleItems" placeholder="Small" />
        <SelectBase size="default" :list-item="sampleItems" placeholder="Default" />
        <SelectBase size="lg"      :list-item="sampleItems" placeholder="Large" />
      </div>
    \`
  })
}`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var h,I,x;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Select — 상태',
  render: () => ({
    components: {
      SelectBase
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase :list-item="sampleItems" placeholder="기본" />
        <SelectBase :list-item="sampleItems" placeholder="비활성화" :disabled="true" />
        <SelectBase :list-item="sampleItems" placeholder="읽기 전용" :readonly="true" />
      </div>
    \`
  })
}`,...(x=(I=m.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const se=["Default","Sizes","States"];export{r as Default,c as Sizes,m as States,se as __namedExportsOrder,le as default};
