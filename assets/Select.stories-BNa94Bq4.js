import{bl as G,bJ as b,bc as S,c7 as t,bg as r,a6 as J,bD as H,b$ as f,b9 as K,a7 as P,a8 as Q,a9 as R,be as W,F as X,bN as Y,aa as Z,bO as ee,bb as ae,bU as se,bL as le,ba as te,ab as ne}from"./iframe-DooHc6g7.js";import{_ as q}from"./ComboboxTag-DjUvbfkz.js";import"./preload-helper-FI0fEOG2.js";import"./InputPassword-DkrTEvxl.js";import"./Tags-CO3dDQ2_.js";const oe={class:"truncate"},s=G({__name:"SelectBase",props:{placeholder:{default:"선택하세요"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean},size:{},class:{type:[Boolean,null,String,Object,Array]},listItem:{default:()=>[]}},emits:["click"],setup(e,{emit:D}){const g=e,N=D,u=le(null),L=te(()=>{var o;return(o=g.listItem.find(l=>l.value===u.value))==null?void 0:o.label});return(o,l)=>{const O=P,A=J,F=Z,j=R,E=Q,M=ne;return b(),S(M,{value:f(u),"onUpdate:value":l[0]||(l[0]=a=>u.value=a),"default-value":f(L),onClick:l[1]||(l[1]=a=>N("click",a))},{default:t(()=>[r(A,{class:H(f(K)("w-full",g.class)),disabled:e.disabled,size:e.size,"data-display":e.readonly?"readonly":""},{default:t(()=>[r(O,{placeholder:e.placeholder},null,8,["placeholder"])]),_:1},8,["class","disabled","size","data-display"]),r(E,null,{default:t(()=>[r(j,null,{default:t(()=>[(b(!0),W(X,null,Y(e.listItem,a=>(b(),S(F,{key:a.value,value:a.value},{default:t(()=>[ee(o.$slots,"default",{item:a},()=>[ae("p",oe,se(a.label),1)])]),_:2},1032,["value"]))),128))]),_:3})]),_:3})]),_:3},8,["value","default-value"])}}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"SelectBase",description:"",tags:{},props:[{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'선택하세요'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"default"'},{name:'"lg"'}]}},{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"listItem",required:!1,type:{name:"Array",elements:[{name:"ListItem"}]},defaultValue:{func:!1,value:"() => []"}}],events:[{name:"click"}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/select/SelectBase.vue"]});const n=[{label:"옵션 1",value:"1"},{label:"옵션 2",value:"2"},{label:"옵션 3",value:"3"},{label:"옵션 4",value:"4"}],pe={title:"데이터 입력/Select",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placeholder:{control:"text",description:"플레이스홀더"},disabled:{control:"boolean",description:"비활성화"},readonly:{control:"boolean",description:"읽기 전용"},size:{control:"select",options:["sm","default","lg"],description:"사이즈"}},args:{placeholder:"선택하세요",disabled:!1,readonly:!1,size:"default"}},m={name:"Select — 인터랙티브",render:e=>({components:{SelectBase:s},setup(){return{args:e,sampleItems:n}},template:'<div class="w-60"><SelectBase v-bind="args" :list-item="sampleItems" /></div>'})},c={name:"Select — 사이즈",render:()=>({components:{SelectBase:s},setup(){return{sampleItems:n}},template:`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase size="sm"      :list-item="sampleItems" placeholder="Small" />
        <SelectBase size="default" :list-item="sampleItems" placeholder="Default" />
        <SelectBase size="lg"      :list-item="sampleItems" placeholder="Large" />
      </div>
    `})},i={name:"Select — 상태",render:()=>({components:{SelectBase:s},setup(){return{sampleItems:n}},template:`
      <div class="flex flex-col gap-3 w-60">
        <SelectBase :list-item="sampleItems" placeholder="기본" />
        <SelectBase :list-item="sampleItems" placeholder="비활성화" :disabled="true" />
        <SelectBase :list-item="sampleItems" placeholder="읽기 전용" :readonly="true" />
      </div>
    `})},d={name:"ComboboxTag — 단일 선택",render:()=>({components:{ComboboxTag:q},setup(){return{sampleItems:n}},template:`
      <div class="w-60">
        <ComboboxTag :list-item="sampleItems" placeholder="선택하세요" :multiple="false" />
      </div>
    `})},p={name:"ComboboxTag — 다중 선택",render:()=>({components:{ComboboxTag:q},setup(){return{sampleItems:n}},template:`
      <div class="w-60">
        <ComboboxTag :list-item="sampleItems" placeholder="선택하세요" :multiple="true" :disabled="false" />
      </div>
    `})};var v,I,_;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Select — 인터랙티브',
  render: args => ({
    components: {
      SelectBase
    },
    setup() {
      return {
        args,
        sampleItems
      };
    },
    template: \`<div class="w-60"><SelectBase v-bind="args" :list-item="sampleItems" /></div>\`
  })
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var x,B,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(B=c.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var h,C,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var z,w,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'ComboboxTag — 단일 선택',
  render: () => ({
    components: {
      ComboboxTag
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div class="w-60">
        <ComboboxTag :list-item="sampleItems" placeholder="선택하세요" :multiple="false" />
      </div>
    \`
  })
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var $,U,V;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'ComboboxTag — 다중 선택',
  render: () => ({
    components: {
      ComboboxTag
    },
    setup() {
      return {
        sampleItems
      };
    },
    template: \`
      <div class="w-60">
        <ComboboxTag :list-item="sampleItems" placeholder="선택하세요" :multiple="true" :disabled="false" />
      </div>
    \`
  })
}`,...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const ue=["Default","Sizes","States","ComboboxTagSingle","ComboboxTagMultiple"];export{p as ComboboxTagMultiple,d as ComboboxTagSingle,m as Default,c as Sizes,i as States,ue as __namedExportsOrder,pe as default};
