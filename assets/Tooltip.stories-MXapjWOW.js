import{bn as I,bK as N,bd as S,cc as e,bi as o,am as d,an as T,bP as u,bc as A,bW as C,w as j,bh as O,ao as c,al as m,x as z}from"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";const F={class:"truncate"},p=I({__name:"CountTooltip",props:{title:{},count:{},variant:{default:"light"}},setup(t){return(n,q)=>{const g=j,f=T,v=c,_=d,w=m;return N(),S(w,null,{default:e(()=>[o(_,null,{default:e(()=>[o(f,{class:"flex items-center justify-center gap-1 cursor-default"},{default:e(()=>[u(n.$slots,"title",{},()=>[A("p",F,C(t.title),1)]),o(g,{variant:"outline",size:"count",class:"cursor-pointer"},{default:e(()=>[O("+ "+C(t.count),1)]),_:1})]),_:3}),o(v,{side:"top",align:"center",variant:t.variant,class:"flex flex-col gap-2"},{default:e(()=>[u(n.$slots,"default")]),_:3},8,["variant"])]),_:3})]),_:3})}}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"CountTooltip",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"count",required:!0,type:{name:"number"}},{name:"variant",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"light"'}}],slots:[{name:"title"},{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/tooltips/CountTooltip.vue"]});const s=I({__name:"DefaultTooltip",props:{title:{},variant:{default:"light"},side:{default:"top"}},setup(t){return(n,q)=>{const g=T,f=c,v=d,_=m;return N(),S(_,null,{default:e(()=>[o(v,null,{default:e(()=>[o(g,null,{default:e(()=>[u(n.$slots,"title")]),_:3}),o(f,{side:t.side,align:"center",variant:t.variant,class:"flex flex-col gap-2"},{default:e(()=>[u(n.$slots,"content")]),_:3},8,["side","variant"])]),_:3})]),_:3})}}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"DefaultTooltip",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"string"}},{name:"variant",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:'"light"'}},{name:"side",required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:'"top"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/tooltips/DefaultTooltip.vue"]});const K={title:"UI 패턴/Tooltip",tags:["autodocs"],argTypes:{side:{control:"select",options:["top","bottom","left","right"],description:"툴팁 방향"}},args:{side:"top"}},i={name:"Variants — 스타일",render:t=>({components:{Tooltip:d,TooltipContent:c,TooltipProvider:m,TooltipTrigger:T,Button:z},setup(){return{args:t}},template:`
      <TooltipProvider>
        <div class="flex gap-10 items-center p-20">
          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light" :side="args.side">라이트 툴팁입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Dark</Button>
            </TooltipTrigger>
            <TooltipContent variant="dark" :side="args.side">다크 툴팁입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="default">Primary</Button>
            </TooltipTrigger>
            <TooltipContent variant="primary" :side="args.side">프라이머리 툴팁입니다.</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `})},a={name:"기본",render:t=>({components:{DefaultTooltip:s,Button:z},setup(){return{args:t}},template:`
      <div class="flex gap-10 items-center p-10">
        <DefaultTooltip variant="light" :side="args.side">
          <template #title>
            <Button variant="outline">Light</Button>
          </template>
          <template #content>라이트 툴팁입니다.</template>
        </DefaultTooltip>

        <DefaultTooltip variant="dark" :side="args.side">
          <template #title>
            <Button variant="outline">Dark</Button>
          </template>
          <template #content>다크 툴팁입니다.</template>
        </DefaultTooltip>
      </div>
    `})},r={name:"Trigger — 카운트",render:()=>({components:{CountTooltip:p},setup(){return{items1:["이순신","강감찬","유관순"],items2:["영업팀","개발팀","디자인팀","마케팅팀","운영팀"]}},template:`
      <div class="flex gap-12 items-center p-10">
        <CountTooltip title="홍길동" :count="3" variant="light" >
          <p v-for="item in items1" :key="item">{{item}}</p>
        </CountTooltip>
        <CountTooltip :count="3" variant="light" >
          <template #title>
            <UiButton variant="link">{{ items2[0] }}</UiButton>
          </template>
          <UiButton variant="link" class="!h-auto" v-for="item in items2" :key="item">{{item}}</UiButton>
        </CountTooltip>
      </div>
    `})},l={name:"Trigger — 아이콘",render:()=>({components:{Tooltip:d,TooltipContent:c,TooltipProvider:m,TooltipTrigger:T},template:`
      <TooltipProvider>
        <div class="flex gap-10 items-center p-10">
          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideInfo :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="light" side="top">항목에 대한 설명입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideCircleHelp :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="dark" side="top">도움말 내용이 표시됩니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideAlertCircle :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="primary" side="top">주의사항을 안내합니다.</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `})};var h,B,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Variants — 스타일',
  render: args => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <TooltipProvider>
        <div class="flex gap-10 items-center p-20">
          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Light</Button>
            </TooltipTrigger>
            <TooltipContent variant="light" :side="args.side">라이트 툴팁입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="outline">Dark</Button>
            </TooltipTrigger>
            <TooltipContent variant="dark" :side="args.side">다크 툴팁입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger as-child>
              <Button variant="default">Primary</Button>
            </TooltipTrigger>
            <TooltipContent variant="primary" :side="args.side">프라이머리 툴팁입니다.</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    \`
  })
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var y,k,D;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '기본',
  render: args => ({
    components: {
      DefaultTooltip,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="flex gap-10 items-center p-10">
        <DefaultTooltip variant="light" :side="args.side">
          <template #title>
            <Button variant="outline">Light</Button>
          </template>
          <template #content>라이트 툴팁입니다.</template>
        </DefaultTooltip>

        <DefaultTooltip variant="dark" :side="args.side">
          <template #title>
            <Button variant="outline">Dark</Button>
          </template>
          <template #content>다크 툴팁입니다.</template>
        </DefaultTooltip>
      </div>
    \`
  })
}`,...(D=(k=a.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var U,P,b;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Trigger — 카운트',
  render: () => ({
    components: {
      CountTooltip
    },
    setup() {
      return {
        items1: ['이순신', '강감찬', '유관순'],
        items2: ['영업팀', '개발팀', '디자인팀', '마케팅팀', '운영팀']
      };
    },
    template: \`
      <div class="flex gap-12 items-center p-10">
        <CountTooltip title="홍길동" :count="3" variant="light" >
          <p v-for="item in items1" :key="item">{{item}}</p>
        </CountTooltip>
        <CountTooltip :count="3" variant="light" >
          <template #title>
            <UiButton variant="link">{{ items2[0] }}</UiButton>
          </template>
          <UiButton variant="link" class="!h-auto" v-for="item in items2" :key="item">{{item}}</UiButton>
        </CountTooltip>
      </div>
    \`
  })
}`,...(b=(P=r.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var $,L,V;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Trigger — 아이콘',
  render: () => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger
    },
    template: \`
      <TooltipProvider>
        <div class="flex gap-10 items-center p-10">
          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideInfo :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="light" side="top">항목에 대한 설명입니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideCircleHelp :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="dark" side="top">도움말 내용이 표시됩니다.</TooltipContent>
          </Tooltip>

          <Tooltip :default-open="true">
            <TooltipTrigger class="text-muted hover:text-default">
              <LucideAlertCircle :size="16" />
            </TooltipTrigger>
            <TooltipContent variant="primary" side="top">주의사항을 안내합니다.</TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    \`
  })
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const W=["Variants","Default","TriggerCount","TriggerIcon"];export{a as Default,r as TriggerCount,l as TriggerIcon,i as Variants,W as __namedExportsOrder,K as default};
