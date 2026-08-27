import{E as t}from"./EmptyData-CpBZOKlK.js";import{bQ as p,bK as A,bd as O,cc as a,bP as V,bi as e,Y as K,Z as M,a0 as Q,bh as d,a1 as W,a2 as Y,x as Z,a3 as q}from"./iframe-RcI2tPm4.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-FI0fEOG2.js";const m={};function J(k,n){const z=p("LucideShieldAlert"),N=M,P=Q,R=W,$=K,C=p("LucideChevronLeft"),F=Z,j=Y,B=q;return A(),O(B,{class:"gap-16"},{default:a(()=>[V(k.$slots,"default",{},()=>[e($,null,{default:a(()=>[e(N,{variant:"icon",class:"bg-primary-light text-primary rounded-full size-[100px] [&_svg]:size-[100%] p-5"},{default:a(()=>[e(z)]),_:1}),e(P,{class:"text-xl font-bold text-primary mt-3"},{default:a(()=>[...n[0]||(n[0]=[d("화면을 찾을 수 없습니다.",-1)])]),_:1}),e(R,{class:"text-md"},{default:a(()=>[...n[1]||(n[1]=[d("관리자에게 문의 해 주세요.",-1)])]),_:1})]),_:1}),e(j,null,{default:a(()=>[e(F,{variant:"link",size:"lg",class:"text-default"},{default:a(()=>[e(C),n[2]||(n[2]=d("이전 화면으로 돌아가기",-1))]),_:1})]),_:1})])]),_:3})}const X=G(m,[["render",J]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{displayName:"EmptyPage",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/empty/EmptyPage.vue"]});const se={title:"UI 패턴/Empty",tags:["autodocs"],parameters:{controls:{hideNoControlsWarning:!0}}},s={name:"기본",render:()=>({components:{EmptyData:t},template:`
      <EmptyData class="rounded-sm !h-30"/>
    `})},r={name:"알림 없음",render:()=>({components:{EmptyData:t},template:`
      <EmptyData class="!h-35 !bg-background text-center flex-none">
        <LucideInfo class="size-4"/>
        알림은 30일전 내용 까지만 확인이 가능합니다.
      </EmptyData>
    `})},o={name:"바닥테이블",render:()=>({components:{EmptyData:t},template:`
      <UiTable class="border-b table-fixed w-full border-b-0">
        <UiTableHeader>
          <UiTableRow>
            <UiTableHead>이름</UiTableHead>
            <UiTableHead>부서</UiTableHead>
            <UiTableHead>상태</UiTableHead>
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
      <div class="h-[250px]">
        <EmptyData class="flex gap-2 items-center">
          <LucideInfo class="size-4" />
          데이터가 없습니다
        </EmptyData>
      </div>
    `})},l={name:"시트테이블",render:()=>({components:{EmptyData:t},template:`
      <UiTable class="table-secondary table-fixed w-full">
        <UiTableHeader>
          <UiTableRow>
            <UiTableHead>이름</UiTableHead>
            <UiTableHead>부서</UiTableHead>
            <UiTableHead>상태</UiTableHead>
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
      <div class="h-40 -mt-6  border-b-1 border-border ">
        <EmptyData class="!bg-background flex gap-2 items-center">
          <LucideInfo class="size-4" />
          데이터가 없습니다
        </EmptyData>
      </div>
    `})},c={name:"전체화면",parameters:{layout:"fullscreen"},render:()=>({components:{EmptyData:t},template:`
      <section class="w-full h-full flex-1 bg-surface-muted py-40">
        <EmptyData>
          <LucideInfo/>
          <h2>데이터가 없습니다</h2>
          <p>목록에서 데이터를 선택해 주세요</p>
        </EmptyData>
      </section>
    `})},i={name:"404",parameters:{layout:"fullscreen"},render:()=>({components:{EmptyPage:X},template:`
      <div class="h-screen flex items-center justify-center">
        <EmptyPage />
      </div>
    `})};var b,u,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '기본',
  render: () => ({
    components: {
      EmptyData
    },
    template: \`
      <EmptyData class="rounded-sm !h-30"/>
    \`
  })
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,U,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '알림 없음',
  render: () => ({
    components: {
      EmptyData
    },
    template: \`
      <EmptyData class="!h-35 !bg-background text-center flex-none">
        <LucideInfo class="size-4"/>
        알림은 30일전 내용 까지만 확인이 가능합니다.
      </EmptyData>
    \`
  })
}`,...(T=(U=r.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var _,E,g;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '바닥테이블',
  render: () => ({
    components: {
      EmptyData
    },
    template: \`
      <UiTable class="border-b table-fixed w-full border-b-0">
        <UiTableHeader>
          <UiTableRow>
            <UiTableHead>이름</UiTableHead>
            <UiTableHead>부서</UiTableHead>
            <UiTableHead>상태</UiTableHead>
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
      <div class="h-[250px]">
        <EmptyData class="flex gap-2 items-center">
          <LucideInfo class="size-4" />
          데이터가 없습니다
        </EmptyData>
      </div>
    \`
  })
}`,...(g=(E=o.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var H,x,D;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: '시트테이블',
  render: () => ({
    components: {
      EmptyData
    },
    template: \`
      <UiTable class="table-secondary table-fixed w-full">
        <UiTableHeader>
          <UiTableRow>
            <UiTableHead>이름</UiTableHead>
            <UiTableHead>부서</UiTableHead>
            <UiTableHead>상태</UiTableHead>
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
      <div class="h-40 -mt-6  border-b-1 border-border ">
        <EmptyData class="!bg-background flex gap-2 items-center">
          <LucideInfo class="size-4" />
          데이터가 없습니다
        </EmptyData>
      </div>
    \`
  })
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var h,v,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '전체화면',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    components: {
      EmptyData
    },
    template: \`
      <section class="w-full h-full flex-1 bg-surface-muted py-40">
        <EmptyData>
          <LucideInfo/>
          <h2>데이터가 없습니다</h2>
          <p>목록에서 데이터를 선택해 주세요</p>
        </EmptyData>
      </section>
    \`
  })
}`,...(w=(v=c.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var L,S,I;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '404',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => ({
    components: {
      EmptyPage
    },
    template: \`
      <div class="h-screen flex items-center justify-center">
        <EmptyPage />
      </div>
    \`
  })
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const re=["Data","NotificationEmpty","PageTableEmpty","SheetTableEmpty","FullEmpty","NotFound"];export{s as Data,c as FullEmpty,i as NotFound,r as NotificationEmpty,o as PageTableEmpty,l as SheetTableEmpty,re as __namedExportsOrder,se as default};
