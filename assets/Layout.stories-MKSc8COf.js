import{bq as A,cc as Z,bU as U,bO as r,bg as _,aL as F,cf as t,bi as C,bS as R,aM as q,c5 as b,bV as ne,bh as ie,bl as e,F as P,cb as pe,ce as me,bf as s,b_ as I,aN as fe,aO as ve,aP as _e,aQ as be,aR as ge,aS as he,aT as xe,aU as ke,aV as Se,bQ as L,aW as ye,e as we,bT as K,aX as Ue,bC as oe,bI as V,bd as Ie,aY as Ae,aZ as Me,bk as v,a_ as re,a$ as ce,b0 as $e,b1 as ze,b2 as Ce,b3 as Pe,q as Le,B as Te,I as Be,D as Ne,o as Oe,l as He,bG as Ee,ca as je,a2 as Re,c as De,A as Ge,b4 as Ve,z as Ze,ch as Fe,K as qe,a0 as Qe,ax as Ke,ay as We,b5 as Xe,b6 as Je,az as Ye,aA as et}from"./iframe-CGZVOpYz.js";import{_ as tt}from"./ComboboxTag-CG-a1rdJ.js";import{_ as st}from"./SheetBase-18Decino.js";import{_ as at}from"./PageTabs-D2Q1AWjt.js";import"./preload-helper-FI0fEOG2.js";const de="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CiAgPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzAwN0JGRiIvPgogIDx0ZXh0IHg9IjE2IiB5PSIyMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiI+QTwvdGV4dD4KPC9zdmc+Cg==",O=A({__name:"MainMenuIcon",props:{items:{},activeItem:{}},emits:["update:activeItem"],setup(i,{emit:u}){const m=u,{setOpen:o,setHover:n,open:p}=Z(),a=c=>{m("update:activeItem",c)},l=c=>{c.isActive=!0,a(c),o(!0),n(!1)},g=c=>{p.value||(a(c),n(!0))};return(c,h)=>{const f=U("LucideEllipsisVertical"),x=q,k=F;return r(),_(k,{class:"flex-col p-0"},{default:t(()=>[(r(!0),C(P,null,R(i.items,d=>(r(),_(x,{key:d.title,class:"flex items-center relative justify-center size-16 hover:cursor-pointer hover:bg-transparent text-neutral/40 hover:text-white active:bg-transparent active:text-white data-[active=true]:bg-transparent data-[active=true]:text-white",tooltip:b(p)?d.title:void 0,"is-active":i.activeItem.title===d.title,onClick:M=>l(d),onMouseenter:M=>g(d)},{default:t(()=>[d.icon?(r(),_(ne(d.icon),{key:0,class:"stroke-2"})):ie("",!0),e(f,{class:"absolute right-0 size-5"})]),_:2},1032,["tooltip","is-active","onClick","onMouseenter"]))),128))]),_:1})}}});O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{exportName:"default",displayName:"MainMenuIcon",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:`{
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}`}]}},{name:"activeItem",required:!0,type:{name:"union",elements:[{name:"any"},{name:"null"}]}}],events:[{name:"update:activeItem"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/MainMenuIcon.vue"]});const H=A({__name:"MainMenuText",props:{activeItem:{}},setup(i){const u=pe(),{state:m}=Z(),o=L(!1);return me(m,n=>{n!=="collapsed"&&(o.value=!1)}),(n,p)=>{const a=fe,l=U("LucideChevronDown"),g=q,c=be,h=ke,f=xe,x=he,k=ge,d=_e,M=ve,D=Se,G=F;return r(),_(G,{class:"px-3"},{default:t(()=>[e(a,{class:"title__bold h-10"},{default:t(()=>[i.activeItem.icon?(r(),_(ne(i.activeItem.icon),{key:0,class:"size-4 mr-2"})):ie("",!0),s("span",null,I(i.activeItem.title),1)]),_:1}),e(D,null,{default:t(()=>[(r(!0),C(P,null,R(i.activeItem.subItems,y=>(r(),_(M,{key:y.title,class:"gap-1"},{default:t(()=>[y.childItem?(r(),_(d,{key:0,class:"group/collapsible"},{default:t(()=>[e(c,{"as-child":"",class:"pl-6 hover:bg-surface-muted mb-1"},{default:t(()=>[e(g,{tooltip:!1,class:"h-10"},{default:t(()=>[s("span",null,I(y.title),1),e(l,{class:"ml-auto text-muted transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 size-5"})]),_:2},1024)]),_:2},1024),e(k,null,{default:t(()=>[e(x,{class:"border-0"},{default:t(()=>[(r(!0),C(P,null,R(y.childItem,S=>(r(),_(f,{key:S.title,class:"h-10 flex items-center pl-8 hover:bg-surface-muted rounded-sm has-[span[data-active=true]]:bg-primary-light"},{default:t(()=>[e(h,{"as-child":"",onClick:Q=>b(u).push(S.url||"#"),"is-active":S.isActive},{default:t(()=>[s("span",null,I(S.title),1)]),_:2},1032,["onClick","is-active"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)):(r(),_(g,{key:1,"is-active":y.isActive,tooltip:!1,class:"pl-6 h-10 hover:bg-surface-muted data-[active=true]:bg-primary-light data-[active=true]:text-primary data-[active=true]:font-bold",onClick:S=>{b(u).push(y.url||"#")}},{default:t(()=>[s("span",null,I(y.title),1)]),_:2},1032,["is-active","onClick"]))]),_:2},1024))),128))]),_:1})]),_:1})}}});H.__docgenInfo=Object.assign({displayName:H.name??H.__name},{exportName:"default",displayName:"MainMenuText",description:"",tags:{},props:[{name:"activeItem",required:!0,type:{name:"union",elements:[{name:"any"},{name:"null"}]}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/MainMenuText.vue"]});const lt={class:"relative items-center flex h-8 gap-1 px-padding-md w-full"},nt={class:"absolute end-2 inset-y-0 flex items-center justify-center"},it={class:"truncate"},E=A({__name:"ComboboxBase",props:{class:{type:[Boolean,null,String,Object,Array]},placeholder:{default:"내용을 입력하세요"},disabled:{type:Boolean,default:!1},listItem:{default:()=>[]}},setup(i){const u=L(""),m=i;return(o,n)=>{const p=Ue,a=U("LucideChevronDown"),l=we,g=Ae,c=Me,h=ce,f=re,x=$e,k=ye;return r(),_(k,{by:"label"},{default:t(()=>[e(g,{class:V(b(Ie)("border border-border rounded-sm",m.class))},{default:t(()=>[e(l,{class:"w-full"},{default:t(()=>[s("div",lt,[K(o.$slots,"prefix"),e(p,{class:"",placeholder:i.placeholder,disabled:m.disabled,modelValue:b(u),"onUpdate:modelValue":n[0]||(n[0]=d=>oe(u)?u.value=d:null)},null,8,["placeholder","disabled","modelValue"]),s("span",nt,[e(a,{class:"size-5 text-muted"})])])]),_:3})]),_:3},8,["class"]),e(x,{class:"w-[var(--reka-popper-anchor-width)]"},{default:t(()=>[e(c,null,{default:t(()=>[...n[1]||(n[1]=[v(" 일치하는 키워드가 없습니다. ",-1)])]),_:1}),K(o.$slots,"combobox-list",{},()=>[e(f,{class:""},{default:t(()=>[(r(!0),C(P,null,R(i.listItem,d=>(r(),_(h,{value:d.value},{default:t(()=>[s("p",it,I(d.label),1)]),_:2},1032,["value"]))),256))]),_:1})])]),_:3})]),_:3})}}});E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:"default",displayName:"ComboboxBase",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'내용을 입력하세요'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"listItem",required:!1,type:{name:"Array",elements:[{name:"ListItem"}]},defaultValue:{func:!1,value:"() => []"}}],slots:[{name:"prefix"},{name:"combobox-list"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/select/ComboboxBase.vue"]});const $=A({__name:"LeftSidebar",props:{side:{},variant:{},collapsible:{default:"icon"},class:{type:[Boolean,null,String,Object,Array]}},setup(i){const u=i,m={mainMenu:[{title:"시스템 관리",url:"#",icon:Le,isActive:!1,subItems:[{title:"권한 관리",childItem:[{title:"컴포넌트 관리",url:"/markup/system/component"},{title:"메뉴 관리",url:"/markup/system/menu"},{title:"권한 그룹 관리",url:"/markup/system/permissionGroups"},{title:"사용자 권한 그룹 관리",url:"/markup/system/userGroups"},{title:"사용자 권한 관리",url:"/markup/system/user"}]},{title:"코드 관리",url:"#"}]},{title:"기업 관리",url:"#",icon:Te,subItems:[{title:"소속 관리",url:"/markup/company/business",isActive:!0},{title:"브랜드 관리",url:"/markup/company/brand",isActive:!1},{title:"조직 관리",childItem:[{title:"부서 관리",url:"/markup/company/organization/department",isActive:!1},{title:"인사 관리",url:"/markup/company/organization/hr",isActive:!1}]}]},{title:"기본 정보 관리",url:"#",icon:Be,isActive:!1,subItems:[{title:"업체 관리",url:"/markup/basic/partner",isActive:!1},{title:"판매 브랜드 관리",url:"/markup/basic/sell-brand",isActive:!1},{title:"컬러 관리",url:"/markup/basic/color",isActive:!1},{title:"사이즈 관리",url:"/markup/basic/size",isActive:!1},{title:"시즌 관리",url:"/markup/basic/season",isActive:!1},{title:"생산 환율 관리",url:"/markup/basic/exchange-rate",isActive:!1}]},{title:"기획 관리",url:"#",icon:Ne,isActive:!1,subItems:[{title:"공유문서 관리",url:"/markup/plan/share",isActive:!0},{title:"제품/상품 관리",childItem:[{title:"스타일 관리",url:"/markup/plan/product/style",isActive:!1},{title:"SKU 관리",url:"/markup/plan/product/sku",isActive:!1},{title:"바코드 관리",url:"/markup/plan/product/barcode",isActive:!1}]}]},{title:"생산 관리",url:"#",icon:Oe,isActive:!1,subItems:[{title:"스타일 정보 관리",childItem:[{title:"스타일 생산 정보",url:"/markup/production/style"},{title:"사양/수출 정보 관리",url:"/markup/production/spec"}]},{title:"완사입관리",childItem:[{title:"BOM(원가견적서) 작성관리",url:"/markup/production/bom-vendor"},{title:"BOM(원가견적서) 대사관리",url:"/markup/production/bom-internal"},{title:"완사입 발주관리",url:"/markup/production/order"},{title:"완사입 입고관리",url:"/markup/production/receive"}]},{title:"생산 일정 관리",url:"/markup/production/schedule"},{title:"업체 일정 관리",childItem:[{title:"업체 생산 스케줄",url:"/markup/production/produce-schedule"},{title:"자재수급 일정 관리",url:"/markup/production/material-schedule"},{title:"생산 공정 일정 관리",url:"/markup/production/process-schedule"}]},{title:"규격 정보 관리",childItem:[{title:"혼용율 정보 관리",url:"/markup/production/composition-info"},{title:"수출 정보 관리",url:"/markup/production/export-info"}]},{title:"입고 예정 수량 관리",url:"/markup/production/expected-receive"}]},{title:"컴포넌트 모음",url:"#",icon:He,isActive:!1,subItems:[{title:"atomic",url:"/markup/components/atomic",isActive:!0},{title:"molecule",url:"/markup/components/molecule",isActive:!1},{title:"organism",url:"/markup/components/organism",isActive:!1},{title:"structures",url:"/markup/components/structures",isActive:!1},{title:"structures2",url:"/markup/components/structures2",isActive:!1},{title:"skeleton",url:"/markup/components/skeleton",isActive:!1},{title:"brand change",url:"/markup/loading/brandChange",isActive:!1},{title:"table sample",url:"/markup/components/table",isActive:!1}]}]},o=L(m.mainMenu[0]),n=p=>{o.value=p};return(p,a)=>{const l=Ce,g=Pe,c=ze,h=q,f=ce,x=re,k=F;return r(),_(c,Ee({class:"overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"},u),{default:t(()=>[e(c,{collapsible:"none",class:"bg-primary w-(--sidebar-width-icon) group-data-[collapsible=icon]:w-0"},{default:t(()=>[e(l,{class:"p-4"},{default:t(()=>[...a[0]||(a[0]=[s("div",{class:"flex items-center justify-center rounded-sm bg-white text-primary size-8"},[s("img",{src:de,alt:"logo",class:""})],-1)])]),_:1}),e(g,null,{default:t(()=>[e(O,{items:m.mainMenu,activeItem:o.value,"onUpdate:activeItem":n},null,8,["items","activeItem"])]),_:1})]),_:1}),e(c,{collapsible:"none",class:"hidden flex-1 md:flex group-data-[collapsible=icon]:hidden border-border border-r gap-3"},{default:t(()=>[e(l,{class:"items-center px-padding-lg py-0"},{default:t(()=>[e(h,{size:"lg",class:"title__bold text-default p-0 h-16"},{default:t(()=>[...a[1]||(a[1]=[v(" AON ERP System ",-1)])]),_:1})]),_:1}),e(k,{class:"py-0 px-3"},{default:t(()=>[e(E,null,{"combobox-list":t(()=>[e(x,{class:""},{default:t(()=>[e(f,{value:"1depth"},{default:t(()=>[...a[2]||(a[2]=[s("p",{class:"truncate"},[v(" 기업 "),s("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(f,{value:"2depth",class:"pl-6"},{default:t(()=>[...a[3]||(a[3]=[s("p",{class:"truncate"},[v(" 조직 "),s("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(f,{value:"3depth",class:"pl-8"},{default:t(()=>[...a[4]||(a[4]=[s("p",{class:"truncate"},[v(" 복리 후생 "),s("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(f,{value:"2depth"},{default:t(()=>[...a[5]||(a[5]=[s("p",{class:"truncate"},[v(" 소속 "),s("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(f,{value:"3depth",class:"pl-6"},{default:t(()=>[...a[6]||(a[6]=[s("p",{class:"truncate"},[v(" 브랜드 "),s("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(f,{value:"3depth"},{default:t(()=>[...a[7]||(a[7]=[s("p",{class:"truncate"},[v(" 예산 "),s("span",{class:"font-bold"},"관리")],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(H,{items:m.mainMenu,activeItem:o.value,"onUpdate:activeItem":n},null,8,["items","activeItem"])]),_:1})]),_:1})]),_:1},16)}}});$.__docgenInfo=Object.assign({displayName:$.name??$.__name},{exportName:"default",displayName:"LeftSidebar",description:"",tags:{},props:[{name:"collapsible",defaultValue:{func:!1,value:'"icon"'}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/LeftSidebar.vue"]});const ot="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3ccircle%20cx='12'%20cy='12'%20r='12'%20fill='%23E5E7EB'/%3e%3ccircle%20cx='12'%20cy='9'%20r='4'%20fill='%239CA3AF'/%3e%3cpath%20d='M4%2020c0-4%203.6-7%208-7s8%203%208%207'%20fill='%239CA3AF'/%3e%3c/svg%3e",rt={class:"flex flex-col gap-3 py-2"},ct={class:"flex flex-col gap-2"},dt={class:"flex flex-col gap-2"},ut={class:"flex flex-col gap-2"},j=A({__name:"PushAlert",props:{open:{type:Boolean,default:!1},openModifiers:{}},emits:["update:open"],setup(i){const u=je(i,"open");return(m,o)=>{const n=Re;return r(),_(st,{open:u.value,"onUpdate:open":o[0]||(o[0]=p=>u.value=p),title:"알림",footer:!1},{body:t(()=>[s("div",rt,[s("div",ct,[e(n,{class:"h-3 w-1/3"}),e(n,{class:"h-9 w-full"})]),s("div",dt,[e(n,{class:"h-3 w-1/3"}),e(n,{class:"h-9 w-full"})]),s("div",ut,[e(n,{class:"h-3 w-1/3"}),e(n,{class:"h-9 w-full"})])])]),_:1},8,["open"])}}});j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{exportName:"default",displayName:"PushAlert",description:"",tags:{},sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/sheet/PushAlert.vue"]});const pt={class:"flex h-10 shrink-0 items-center w-full px-5 gap-3 bg-background border-b-1 border-border"},mt={class:"flex items-center justify-between w-full"},ft={class:"group w-full h-full flex justify-between items-center"},vt={class:"truncate"},_t={class:"flex items-center gap-2"},bt={class:"gap-2 flex items-center"},z=A({__name:"Header",setup(i){const{open:u}=Z(),m=[{label:"THISISNEVERTHAT",value:"thisisneverthat"},{label:"YESEYESEE",value:"yeseyesee"},{label:"KHAKIS",value:"khakis"},{label:"TUNE",value:"tune"},{label:"TENUI",value:"tenui"},{label:"SUNLOVE",value:"sunlove"},{label:"LOADINGROOM",value:"loadingroom"},{label:"WELLBEING EXPRESS",value:"wellbeingExpress"},{label:"KATA",value:"kata"}],o=L("thisisneverthat"),n=a=>{m.map(l=>l.value===a.value)&&(o.value=a.value)},p=L(!1);return(a,l)=>{const g=Ve,c=U("LucideStar"),h=Ze,f=U("LucideBell"),x=qe,k=Qe,d=U("LucideSettings"),M=Ke,D=Xe,G=Je,y=U("LucideUser"),S=Ye,Q=We,ue=et;return r(),C(P,null,[s("header",pt,[e(g,{icon:b(u)?b(Ge):b(De),variant:"outline",size:"icon-sm",class:""},null,8,["icon"]),s("div",mt,[e(tt,{class:"w-60",placeholder:"브랜드를 선택해 주세요","list-item":m},{"list-item":t(({item:w})=>[s("div",ft,[s("span",vt,I(w.label),1),e(h,{variant:"ghost",class:V(["hover:bg-transparent ml-auto  group-hover:inline-flex",w.value===b(o)?"inline-flex":"hidden"]),size:"icon",onClick:Fe(gt=>n(w),["prevent","stop"])},{default:t(()=>[e(c,{fill:w.value===b(o)?"var(--color-primary)":"none",class:V(w.value===b(o)?"text-primary":"text-gray-400")},null,8,["fill","class"])]),_:2},1032,["class","onClick"])])]),_:1}),s("div",_t,[s("div",bt,[e(h,{class:"text-muted relative",variant:"ghost",size:"icon",onClick:l[0]||(l[0]=w=>p.value=!0)},{default:t(()=>[e(f),e(x,{variant:"destructive",size:"dot",class:"absolute top-1 right-1"})]),_:1}),e(k,{orientation:"vertical",class:"h-4"}),e(h,{class:"text-muted relative",variant:"ghost",size:"icon"},{default:t(()=>[e(d,{class:""}),e(x,{variant:"destructive",size:"dot",class:"bg-success absolute top-1 right-1"})]),_:1}),e(k,{orientation:"vertical",class:"h-4"})]),e(ue,null,{default:t(()=>[e(M,{class:"flex items-center text-left gap-2 hover:cursor-pointer"},{default:t(()=>[...l[2]||(l[2]=[s("div",{class:"rounded-full overflow-hidden text-center"},[s("img",{src:ot,alt:"avatar",class:"size-6 object-cover"})],-1),s("div",{class:"rounded-full overflow-hidden text-center"},[s("img",{src:de,alt:"avatar",class:"size-6 object-cover"})],-1),s("div",{class:"h-8 flex flex-col"},[s("p",{class:"caption__bold"},"홍길동님"),s("span",{class:"caption text-muted"},"안녕하시와요")],-1)])]),_:1}),e(Q,{class:""},{default:t(()=>[e(D,null,{default:t(()=>[...l[3]||(l[3]=[v("My Account",-1)])]),_:1}),e(G),e(S,null,{default:t(()=>[e(y),l[4]||(l[4]=v("Profile",-1))]),_:1}),e(S,null,{default:t(()=>[...l[5]||(l[5]=[v("Billing",-1)])]),_:1}),e(S,null,{default:t(()=>[...l[6]||(l[6]=[v("Team",-1)])]),_:1}),e(S,null,{default:t(()=>[...l[7]||(l[7]=[v("Subscription",-1)])]),_:1})]),_:1})]),_:1})])])]),e(j,{open:b(p),"onUpdate:open":l[1]||(l[1]=w=>oe(p)?p.value=w:null)},null,8,["open"])],64)}}});z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{exportName:"default",displayName:"Header",description:"",tags:{},sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/Header.vue"]});const wt={title:"레이아웃/Layout",tags:["autodocs"],parameters:{layout:"fullscreen"}},T={name:"Index",parameters:{layout:"fullscreen"},argTypes:{sidebarOpen:{control:"boolean",description:"좌측 메뉴 열림 여부"},showPageTabs:{control:"boolean",description:"페이지탭 표시 여부"},contentLayout:{control:"radio",options:["2단","1단"],description:"내부 컨텐츠 레이아웃"}},args:{sidebarOpen:!0,showPageTabs:!0,contentLayout:"2단"},render:i=>({components:{LeftSidebar:$,Header:z,PageTabs:at},setup(){return{args:i}},template:`
      <UiSidebarProvider :key="args.sidebarOpen" :defaultOpen="args.sidebarOpen">
        <LeftSidebar />
        <UiSidebarInset class="overflow-hidden h-screen">
          <Header />
          <PageTabs v-if="args.showPageTabs" />

          <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
            <section class="border-b-1 border-border px-8 flex-none">
              <header class="contents-header">
                <div class="contents-header__title">
                  <UiSkeleton class="h-5 w-32" />
                  <UiSkeleton class="h-3 w-56 mt-1" />
                </div>
              </header>
            </section>

            <!-- 2단 -->
            <UiResizablePanelGroup v-if="args.contentLayout === '2단'" direction="horizontal" class="flex-1 min-h-0">
              <UiResizablePanel :default-size="25" :min-size="20" :max-size="50" class="flex flex-col p-6 gap-4 min-w-72">
                <div class="flex flex-col gap-1">
                  <UiSkeleton class="h-4 w-24" />
                  <UiSkeleton class="h-3 w-40" />
                </div>
                <div class="flex flex-col gap-3 p-4 bg-gray-100 rounded-lg">
                  <UiSkeleton class="h-8 w-full" />
                  <UiSkeleton class="h-8 w-full" />
                  <UiSkeleton class="h-9 w-full" />
                </div>
                <UiSkeleton class="h-3 w-16" />
                <div class="overflow-y-auto min-h-0 data-list">
                  <div class="data-list__item" v-for="n in 12" :key="n">
                    <div class="data-list__cont w-[75%] gap-2">
                      <UiSkeleton class="h-4 w-full" />
                      <UiSkeleton class="h-3 w-2/3" />
                    </div>
                  </div>
                </div>
              </UiResizablePanel>
              <UiResizableHandle />
              <UiResizablePanel class="flex flex-col overflow-hidden">
                <div class="flex items-center justify-between px-8 pt-6 pb-4 flex-none">
                  <UiSkeleton class="h-5 w-40" />
                  <div class="flex gap-2">
                    <UiSkeleton class="h-8 w-24" />
                    <UiSkeleton class="h-8 w-16" />
                  </div>
                </div>
                <div class="px-8 overflow-y-auto flex-1">
                  <UiSkeleton class="h-10 w-full mb-4" />
                  <div class="data-list">
                    <div class="data-list__item" v-for="n in 8" :key="n">
                      <div class="data-list__cont data-list__cont-left gap-2">
                        <UiSkeleton class="h-4 w-32" />
                        <UiSkeleton class="h-3 w-24" />
                      </div>
                      <div class="data-list__cont data-list__cont-right gap-2">
                        <UiSkeleton class="h-4 w-28" />
                        <UiSkeleton class="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </UiResizablePanel>
            </UiResizablePanelGroup>

            <!-- 1단 -->
            <div v-else class="flex-1 overflow-y-auto p-8 flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <UiSkeleton class="h-5 w-40" />
                <div class="flex gap-2">
                  <UiSkeleton class="h-8 w-24" />
                  <UiSkeleton class="h-8 w-16" />
                </div>
              </div>
              <UiSkeleton class="h-10 w-full" />
              <div class="flex flex-col gap-2">
                <UiSkeleton class="h-10 w-full" v-for="n in 10" :key="n" />
              </div>
            </div>

          </div>
        </UiSidebarInset>
      </UiSidebarProvider>
    `})},B={name:"Sidebar",render:()=>({components:{LeftSidebar:$},template:`
      <div class="h-screen flex">
        <UiSidebarProvider>
          <LeftSidebar />
        </UiSidebarProvider>
      </div>
    `})},N={name:"Header",render:()=>({components:{Header:z},template:`
      <UiSidebarProvider>
        <div class="flex flex-col w-full">
          <Header />
        </div>
      </UiSidebarProvider>
    `})};var W,X,J;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Index',
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    sidebarOpen: {
      control: 'boolean',
      description: '좌측 메뉴 열림 여부'
    },
    showPageTabs: {
      control: 'boolean',
      description: '페이지탭 표시 여부'
    },
    contentLayout: {
      control: 'radio',
      options: ['2단', '1단'],
      description: '내부 컨텐츠 레이아웃'
    }
  },
  args: {
    sidebarOpen: true,
    showPageTabs: true,
    contentLayout: '2단'
  },
  render: args => ({
    components: {
      LeftSidebar,
      Header,
      PageTabs
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiSidebarProvider :key="args.sidebarOpen" :defaultOpen="args.sidebarOpen">
        <LeftSidebar />
        <UiSidebarInset class="overflow-hidden h-screen">
          <Header />
          <PageTabs v-if="args.showPageTabs" />

          <div class="flex flex-col flex-1 min-h-0 overflow-hidden">
            <section class="border-b-1 border-border px-8 flex-none">
              <header class="contents-header">
                <div class="contents-header__title">
                  <UiSkeleton class="h-5 w-32" />
                  <UiSkeleton class="h-3 w-56 mt-1" />
                </div>
              </header>
            </section>

            <!-- 2단 -->
            <UiResizablePanelGroup v-if="args.contentLayout === '2단'" direction="horizontal" class="flex-1 min-h-0">
              <UiResizablePanel :default-size="25" :min-size="20" :max-size="50" class="flex flex-col p-6 gap-4 min-w-72">
                <div class="flex flex-col gap-1">
                  <UiSkeleton class="h-4 w-24" />
                  <UiSkeleton class="h-3 w-40" />
                </div>
                <div class="flex flex-col gap-3 p-4 bg-gray-100 rounded-lg">
                  <UiSkeleton class="h-8 w-full" />
                  <UiSkeleton class="h-8 w-full" />
                  <UiSkeleton class="h-9 w-full" />
                </div>
                <UiSkeleton class="h-3 w-16" />
                <div class="overflow-y-auto min-h-0 data-list">
                  <div class="data-list__item" v-for="n in 12" :key="n">
                    <div class="data-list__cont w-[75%] gap-2">
                      <UiSkeleton class="h-4 w-full" />
                      <UiSkeleton class="h-3 w-2/3" />
                    </div>
                  </div>
                </div>
              </UiResizablePanel>
              <UiResizableHandle />
              <UiResizablePanel class="flex flex-col overflow-hidden">
                <div class="flex items-center justify-between px-8 pt-6 pb-4 flex-none">
                  <UiSkeleton class="h-5 w-40" />
                  <div class="flex gap-2">
                    <UiSkeleton class="h-8 w-24" />
                    <UiSkeleton class="h-8 w-16" />
                  </div>
                </div>
                <div class="px-8 overflow-y-auto flex-1">
                  <UiSkeleton class="h-10 w-full mb-4" />
                  <div class="data-list">
                    <div class="data-list__item" v-for="n in 8" :key="n">
                      <div class="data-list__cont data-list__cont-left gap-2">
                        <UiSkeleton class="h-4 w-32" />
                        <UiSkeleton class="h-3 w-24" />
                      </div>
                      <div class="data-list__cont data-list__cont-right gap-2">
                        <UiSkeleton class="h-4 w-28" />
                        <UiSkeleton class="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </UiResizablePanel>
            </UiResizablePanelGroup>

            <!-- 1단 -->
            <div v-else class="flex-1 overflow-y-auto p-8 flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <UiSkeleton class="h-5 w-40" />
                <div class="flex gap-2">
                  <UiSkeleton class="h-8 w-24" />
                  <UiSkeleton class="h-8 w-16" />
                </div>
              </div>
              <UiSkeleton class="h-10 w-full" />
              <div class="flex flex-col gap-2">
                <UiSkeleton class="h-10 w-full" v-for="n in 10" :key="n" />
              </div>
            </div>

          </div>
        </UiSidebarInset>
      </UiSidebarProvider>
    \`
  })
}`,...(J=(X=T.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Y,ee,te;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Sidebar',
  render: () => ({
    components: {
      LeftSidebar
    },
    template: \`
      <div class="h-screen flex">
        <UiSidebarProvider>
          <LeftSidebar />
        </UiSidebarProvider>
      </div>
    \`
  })
}`,...(te=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,le;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Header',
  render: () => ({
    components: {
      Header
    },
    template: \`
      <UiSidebarProvider>
        <div class="flex flex-col w-full">
          <Header />
        </div>
      </UiSidebarProvider>
    \`
  })
}`,...(le=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Ut=["MainLayout","SidebarStory","HeaderStory"];export{N as HeaderStory,T as MainLayout,B as SidebarStory,Ut as __namedExportsOrder,wt as default};
