const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SettingModal-BuO8SYzT.js","assets/iframe-DooHc6g7.js","assets/preload-helper-FI0fEOG2.js","assets/iframe-DlpHXijd.css","assets/ModalBase-CwcyudOa.js","assets/SortModal-D474bBoh.js"])))=>i.map(i=>d[i]);
import{_ as $}from"./preload-helper-FI0fEOG2.js";import{bl as R,bP as v,bJ as o,be as s,bb as m,bO as l,F as U,bc as w,c7 as a,bg as t,b$ as x,bd as r,y as M,bD as S,x as j,W as A,ao as H,ap as J,aq as Q,bf as p,bQ as W,bL as k,ba as G,ar as K,bk as C}from"./iframe-DooHc6g7.js";import{_ as X}from"./InputPassword-DkrTEvxl.js";import{_ as Y,a as Z}from"./Td-CBOlp6Jf.js";const ee={class:"flex flex-col gap-3 overflow-y-auto h-full px-8 pt-6"},te={class:"table-layout__top grid grid-cols-2 items-center"},ae={key:0,class:"table-layout__data-action flex gap-3 items-center"},ne={class:"table-layout__table-action gap-2 flex items-center justify-self-end"},oe={key:0,class:"pb-6 bg-background pt-3 mt-auto w-full"},u=R({__name:"TableLayout",props:{pagination:{type:Boolean,default:!0},sortList:{},filter:{type:Boolean,default:!0},download:{type:Boolean,default:!0},setting:{type:Boolean,default:!0}},setup(i){const d=k(!1),b=k(!1),P=k("Setting"),g=n=>{b.value=!0,P.value=n},V={Setting:C(()=>$(()=>import("./SettingModal-BuO8SYzT.js"),__vite__mapDeps([0,1,2,3,4]))),Sort:C(()=>$(()=>import("./SortModal-D474bBoh.js"),__vite__mapDeps([5,1,2,3,4])))},z=G(()=>V[P.value]);return(n,e)=>{const L=v("LucideSearch"),_=M,y=j,h=A,N=v("LucideFolderDown"),E=v("LucideSettings"),q=H,T=Q,F=J,O=K;return o(),s("div",ee,[m("div",te,[n.$slots["data-action"]?l(n.$slots,"data-action",{key:1}):(o(),s("div",ae,[...e[4]||(e[4]=[m("p",{class:"text-sm text-secondary font-bold"},"총 245건",-1)])])),m("div",ne,[n.$slots["table-action"]?l(n.$slots,"table-action",{key:1}):(o(),s(U,{key:0},[i.filter?(o(),s(U,{key:0},[d.value?(o(),w(x(X),{key:0,class:"h-6 gap-2 text-xs sm"},{prefix:a(()=>[t(L,{class:"size-3 stroke-3 text-default-text"})]),_:1})):r("",!0),t(y,{variant:"ghost",size:"icon-sm",title:"키워드 검색",onClick:e[0]||(e[0]=c=>d.value=!d.value),class:S([{"bg-surface":d.value},"relative"])},{default:a(()=>[t(L),t(_,{size:"dot",class:"absolute top-0.5 right-0.5"})]),_:1},8,["class"]),t(h,{orientation:"vertical",class:"h-4"})],64)):r("",!0),i.download?(o(),s(U,{key:1},[t(y,{variant:"ghost",size:"icon-sm",title:"엑셀 다운로드"},{default:a(()=>[t(N)]),_:1}),t(h,{orientation:"vertical",class:"h-4"})],64)):r("",!0),i.setting?(o(),w(O,{key:2},{default:a(()=>[t(q,{"as-child":""},{default:a(()=>[t(y,{variant:"ghost",size:"icon-sm",class:"relative",title:"테이블 설정"},{default:a(()=>[t(E),t(_,{size:"dot",class:"absolute top-0.5 right-0.5"})]),_:1})]),_:1}),t(F,{class:"w-40 mr-2 [&>div]:justify-center"},{default:a(()=>[t(T,{onClick:e[1]||(e[1]=c=>g("Setting"))},{default:a(()=>[...e[5]||(e[5]=[p("테이블 설정",-1)])]),_:1}),t(T,{onClick:e[2]||(e[2]=c=>g("Sort"))},{default:a(()=>[e[7]||(e[7]=p("테이블 정렬 ",-1)),t(_,{variant:"info",class:"size-4 text-secondary"},{default:a(()=>[...e[6]||(e[6]=[p("30",-1)])]),_:1})]),_:1}),t(T,null,{default:a(()=>[...e[8]||(e[8]=[p("데이터 넓이 초기화",-1)])]),_:1})]),_:1})]),_:1})):r("",!0),(o(),w(W(x(z)),{open:b.value,"onUpdate:open":e[3]||(e[3]=c=>b.value=c),onOpen:g},null,40,["open"]))],64))])]),m("div",{class:S(["table-layout__table overflow-auto w-full min-w-[calc(1200px-64px] max-h-full",i.pagination?"":"mb-3"])},[l(n.$slots,"table")],2),l(n.$slots,"empty"),i.pagination?(o(),s("div",oe,[l(n.$slots,"pagination")])):r("",!0)])}}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"TableLayout",description:"",tags:{},props:[{name:"pagination",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"sortList",required:!1,type:{name:"union",elements:[{name:"any"},{name:"null"}]}},{name:"filter",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"download",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"setting",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"data-action"},{name:"table-action"},{name:"table"},{name:"empty"},{name:"pagination"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/table/TableLayout.vue"]});const de={title:"레이아웃/TableLayout",component:u,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{pagination:{control:"boolean",description:"하단 페이지네이션 표시"},filter:{control:"boolean",description:"키워드 검색 버튼"},download:{control:"boolean",description:"엑셀 다운로드 버튼"},setting:{control:"boolean",description:"테이블 설정 버튼"}},args:{pagination:!0,filter:!0,download:!0,setting:!0}},ie=`
  <UiTable class="border-b table-fixed w-full">
    <UiTableHeader>
      <UiTableRow>
        <Th type="checkbox" />
        <Th data="이름" />
        <Th data="이메일" />
        <Th data="부서" />
        <Th data="직책" />
        <Th data="상태" />
        <Th type="function" />
      </UiTableRow>
    </UiTableHeader>
    <UiTableBody>
      <UiTableRow v-for="i in 10" :key="i">
        <Td type="checkbox" />
        <Td><UiSkeleton class="h-4 w-full" /></Td>
        <Td><UiSkeleton class="h-4 w-3/4" /></Td>
        <Td><UiSkeleton class="h-4 w-1/2" /></Td>
        <Td><UiSkeleton class="h-4 w-2/3" /></Td>
        <Td><UiSkeleton class="h-4 w-1/2" /></Td>
        <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
      </UiTableRow>
    </UiTableBody>
  </UiTable>
`,f={name:"TableLayout — 기본",render:i=>({components:{TableLayout:u,Th:Z,Td:Y},setup(){return{args:i}},template:`
      <div class="">
        <TableLayout v-bind="args">
          <template #table>${ie}</template>
          <template #pagination>
            <UiPagination :total="245" :sibling-count="1" show-edges :default-page="1">
              <UiPaginationContent>
                <UiPaginationItem><UiPaginationPrevious /></UiPaginationItem>
                <UiPaginationItem><UiPaginationNext /></UiPaginationItem>
              </UiPaginationContent>
            </UiPagination>
          </template>
        </TableLayout>
      </div>
    `})};var B,D,I;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'TableLayout — 기본',
  render: args => ({
    components: {
      TableLayout,
      Th,
      Td
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="">
        <TableLayout v-bind="args">
          <template #table>\${skeletonTable}</template>
          <template #pagination>
            <UiPagination :total="245" :sibling-count="1" show-edges :default-page="1">
              <UiPaginationContent>
                <UiPaginationItem><UiPaginationPrevious /></UiPaginationItem>
                <UiPaginationItem><UiPaginationNext /></UiPaginationItem>
              </UiPaginationContent>
            </UiPagination>
          </template>
        </TableLayout>
      </div>
    \`
  })
}`,...(I=(D=f.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ce=["Default"];export{f as Default,ce as __namedExportsOrder,de as default};
