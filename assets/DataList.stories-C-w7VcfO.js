const y={title:"UI 패턴/list/DataList",tags:["autodocs"],parameters:{layout:"centered"},argTypes:{rightIcon:{control:"boolean",description:"우측 아이콘"},showDesc:{control:"boolean",description:"2행 — 서브텍스트"},showMeta:{control:"boolean",description:"2행 — 메타 정보 (시즌/컬러 등)"},showAction:{control:"boolean",description:"3행 — 인터랙션 요소 (Select)"},showBadge:{control:"boolean",description:"카운트 배지 (제목 우측)"},showRightText:{control:"boolean",description:"우측 텍스트"},showStatus:{control:"boolean",description:"상태 배지 (우측)"},selected:{control:"boolean",description:"선택 상태 — data-list__item--selected (첫 번째 아이템)"},active:{control:"boolean",description:"활성 상태 (첫 번째 아이템)"},clickable:{control:"boolean",description:"호버/클릭 가능 상태"}},args:{rightIcon:!1,showDesc:!1,showMeta:!1,showAction:!1,showBadge:!1,showRightText:!1,showStatus:!1,selected:!1,active:!1,clickable:!1}},x=[{code:"W530KALK W530KALK",name:"Summit Ridge Fleece Pullover Summit Ridge",count:3,year:"2025",season:"SS",color:"REA",size:"XL"},{code:"T220NBWH",name:"Fleece Pullover",count:12,year:"2024",season:"FW",color:"BLU",size:"M"},{code:"K990GRBK",name:"Down Jacket Series",count:1,year:"2023",season:"SS",color:"GRN",size:"L"}],k=`
  <ul class="data-list w-96">
    <li
      v-for="(item, i) in items"
      :key="item.code"
      class="data-list__item"
      :class="[{ 'active': i === 0 && args.active }, { 'data-list__item--selected pl-10 ': i === 0 && args.selected }, args.clickable ? 'cursor-pointer hover:bg-surface-muted' : '']"
    >
      <div class="data-list__body">

        <!-- 1행: 제목 + 우측 -->
        <div class="data-list__cont">
          <div class="data-list__group">
            <p class="font-bold">{{ item.code }}</p>
            <UiBadge v-if="args.showBadge" class="shrink-0" size="count">{{ item.count > 99 ? '99+' : item.count }}</UiBadge>
          </div>
          <div v-if="args.showRightText || args.showStatus" class="data-list__group justify-end">
            <span v-if="args.showRightText" class="text-sm font-bold">우측 텍스트 영역</span>
            <UiBadge v-if="args.showStatus" variant="outline" class="shrink-0">상태 뱃지</UiBadge>
          </div>
        </div>

        <!-- 2행: 서브텍스트 + 메타 -->
        <div v-if="args.showDesc || args.showMeta" class="data-list__cont">
          <span v-if="args.showDesc" class="data-list__desc">{{ item.name }}</span>
          <div v-if="args.showMeta" :class="['data-list__meta', args.showDesc ? 'justify-end' : 'justify-start']">
            <span class="shrink-0">{{ item.year }}</span>
            <UiSeparator orientation="vertical" size="sm" />
            <span>{{ item.season }}</span>
            <UiSeparator orientation="vertical" size="sm" />
            <span>{{ item.color }}</span>
            <UiSeparator orientation="vertical" size="sm" />
            <span>{{ item.size }}</span>
          </div>
        </div>

        <!-- 3행: 자유 아이템 -->
        <div v-if="args.showAction" class="data-list__slot">
          <UiSelect>
            <UiSelectTrigger class="w-full">
              <UiSelectValue placeholder="사유를 선택 해 주세요." />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectItem value="1">사유 1</UiSelectItem>
              <UiSelectItem value="2">사유 2</UiSelectItem>
            </UiSelectContent>
          </UiSelect>
        </div>

      </div>

      <LucideCheck v-if="args.rightIcon" class="size-4 text-primary shrink-0" />
    </li>
  </ul>
`,e=D=>({setup(){return{args:D,items:x}},template:k}),s={name:"기본",args:{rightIcon:!1,showDesc:!1,showAction:!1,showBadge:!1,showStatus:!1},render:e},t={name:"2행 서브텍스트",args:{showDesc:!0,showMeta:!0},render:e},a={name:"우측 아이콘",args:{rightIcon:!0},render:e},o={name:"카운트 배지",args:{showBadge:!0},render:e},r={name:"상태 배지 (우측)",args:{showStatus:!0},render:e},n={name:"전체 구성",args:{rightIcon:!0,showDesc:!0,showMeta:!0,showAction:!0,showBadge:!0,showRightText:!0,showStatus:!0,selected:!0,active:!1,clickable:!0},render:e};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '기본',
  args: {
    rightIcon: false,
    showDesc: false,
    showAction: false,
    showBadge: false,
    showStatus: false
  },
  render
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '2행 서브텍스트',
  args: {
    showDesc: true,
    showMeta: true
  },
  render
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,m,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '우측 아이콘',
  args: {
    rightIcon: true
  },
  render
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var w,f,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '카운트 배지',
  args: {
    showBadge: true
  },
  render
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,_,U;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '상태 배지 (우측)',
  args: {
    showStatus: true
  },
  render
}`,...(U=(_=r.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var b,B,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '전체 구성',
  args: {
    rightIcon: true,
    showDesc: true,
    showMeta: true,
    showAction: true,
    showBadge: true,
    showRightText: true,
    showStatus: true,
    selected: true,
    active: false,
    clickable: true
  },
  render
}`,...(I=(B=n.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const W=["Index","WithDesc","WithIcons","WithBadge","WithStatus","MaxCase"];export{s as Index,n as MaxCase,o as WithBadge,t as WithDesc,a as WithIcons,r as WithStatus,W as __namedExportsOrder,y as default};
