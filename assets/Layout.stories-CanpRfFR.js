import{bn as z,c8 as H,bQ as $,bK as i,bd as u,aV as E,cc as e,bf as B,bO as M,aW as j,c1 as C,bR as F,be as O,bi as a,F as P,c7 as K,ca as Y,bc as l,bW as S,aX as W,aY as J,aK as Q,aM as X,aL as Z,aZ as ee,a_ as ae,a$ as te,b0 as le,bM as U,b1 as oe,b2 as ie,b3 as se,o as ne,B as re,I as ce,D as ue,m as pe,j as be,aH as de,aI as me,bh as v,bC as fe}from"./iframe-RcI2tPm4.js";import{_ as ge}from"./logo-uj_DKnwi.js";import{_ as he}from"./ComboboxBase-OvtvW4Ug.js";import{a as N,b as ve}from"./PageTabs-DEPATQl7.js";import{T as we}from"./TablePagination-CxulSNKp.js";import{_ as ye}from"./PageSearch-CWXdKZYZ.js";import{E as Te}from"./EmptyData-CpBZOKlK.js";import{_ as Ue}from"./TableLayout-gLcolzbX.js";import"./preload-helper-FI0fEOG2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ModalBase-zATy2rHv.js";const x=z({__name:"MainMenuIcon",props:{items:{},activeItem:{}},emits:["update:activeItem"],setup(r,{emit:m}){const c=m,{setOpen:p,setHover:s,open:f}=H(),t=o=>{c("update:activeItem",o)},n=o=>{o.isActive=!0,t(o),p(!0),s(!1)},g=o=>{f.value||(t(o),s(!0))};return(o,b)=>{const w=$("LucideEllipsisVertical"),y=j,I=E;return i(),u(I,{class:"flex-col p-0"},{default:e(()=>[(i(!0),B(P,null,M(r.items,d=>(i(),u(y,{key:d.title,class:"flex items-center relative justify-center size-16 hover:cursor-pointer hover:bg-transparent text-neutral/40 hover:text-neutral active:bg-transparent active:text-neutral data-[active=true]:bg-transparent data-[active=true]:text-neutral",tooltip:C(f)?d.title:void 0,"is-active":r.activeItem.title===d.title,onClick:D=>n(d),onMouseenter:D=>g(d)},{default:e(()=>[d.icon?(i(),u(F(d.icon),{key:0})):O("",!0),a(w,{class:"absolute right-0 size-5"})]),_:2},1032,["tooltip","is-active","onClick","onMouseenter"]))),128))]),_:1})}}});x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:"default",displayName:"MainMenuIcon",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:`{
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}`}]}},{name:"activeItem",required:!0,type:{name:"union",elements:[{name:"any"},{name:"null"}]}}],events:[{name:"update:activeItem"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/MainMenuIcon.vue"]});const A=z({__name:"MainMenuText",props:{activeItem:{}},setup(r){const m=K(),{state:c}=H(),p=U(!1);return Y(c,s=>{s!=="collapsed"&&(p.value=!1)}),(s,f)=>{const t=W,n=$("LucideChevronDown"),g=j,o=X,b=te,w=ae,y=ee,I=Z,d=Q,D=J,V=le,G=E;return i(),u(G,{class:"px-3"},{default:e(()=>[a(t,{class:"title__bold h-10"},{default:e(()=>[r.activeItem.icon?(i(),u(F(r.activeItem.icon),{key:0,class:"size-4 mr-2"})):O("",!0),l("span",null,S(r.activeItem.title),1)]),_:1}),a(V,null,{default:e(()=>[(i(!0),B(P,null,M(r.activeItem.subItems,h=>(i(),u(D,{key:h.title,class:"gap-1"},{default:e(()=>[h.childItem?(i(),u(d,{key:0,class:"group/collapsible"},{default:e(()=>[a(o,{"as-child":"",class:"pl-6 hover:bg-surface-muted mb-1"},{default:e(()=>[a(g,{tooltip:!1,class:"h-10"},{default:e(()=>[l("span",null,S(h.title),1),a(n,{class:"ml-auto text-muted transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 size-4"})]),_:2},1024)]),_:2},1024),a(I,null,{default:e(()=>[a(y,{class:"border-0"},{default:e(()=>[(i(!0),B(P,null,M(h.childItem,T=>(i(),u(w,{key:T.title,class:"h-10 flex items-center pl-8 hover:bg-surface-muted rounded-sm has-[span[data-active=true]]:bg-primary-light"},{default:e(()=>[a(b,{"as-child":"",onClick:Se=>C(m).push(T.url||"#"),"is-active":T.isActive},{default:e(()=>[l("span",null,S(T.title),1)]),_:2},1032,["onClick","is-active"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)):(i(),u(g,{key:1,"is-active":h.isActive,tooltip:!1,class:"pl-6 h-10 hover:bg-surface-muted data-[active=true]:bg-primary-light data-[active=true]:text-primary data-[active=true]:font-bold",onClick:T=>{C(m).push(h.url||"#")}},{default:e(()=>[l("span",null,S(h.title),1)]),_:2},1032,["is-active","onClick"]))]),_:2},1024))),128))]),_:1})]),_:1})}}});A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{exportName:"default",displayName:"MainMenuText",description:"",tags:{},props:[{name:"activeItem",required:!0,type:{name:"union",elements:[{name:"any"},{name:"null"}]}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/MainMenuText.vue"]});const k=z({__name:"LeftSidebar",props:{side:{},variant:{},collapsible:{default:"icon"},class:{type:[Boolean,null,String,Object,Array]}},setup(r){const m=r,c={mainMenu:[{title:"시스템 관리",url:"#",icon:ne,isActive:!1,subItems:[{title:"권한 관리",childItem:[{title:"컴포넌트 관리",url:"/markup/system/component"},{title:"메뉴 관리",url:"/markup/system/menu"},{title:"권한 그룹 관리",url:"/markup/system/permissionGroups"},{title:"사용자 권한 그룹 관리",url:"/markup/system/userGroups"},{title:"사용자 권한 관리",url:"/markup/system/user"}]},{title:"코드 관리",url:"#"}]},{title:"기업 관리",url:"#",icon:re,subItems:[{title:"소속 관리",url:"/markup/company/business",isActive:!0},{title:"브랜드 관리",url:"/markup/company/brand",isActive:!1},{title:"조직 관리",childItem:[{title:"부서 관리",url:"/markup/company/organization/department",isActive:!1},{title:"인사 관리",url:"/markup/company/organization/hr",isActive:!1}]}]},{title:"기본 정보 관리",url:"#",icon:ce,isActive:!1,subItems:[{title:"업체 관리",url:"/markup/basic/partner",isActive:!1},{title:"판매 브랜드 관리",url:"/markup/basic/sell-brand",isActive:!1},{title:"컬러 관리",url:"/markup/basic/color",isActive:!1},{title:"사이즈 관리",url:"/markup/basic/size",isActive:!1},{title:"시즌 관리",url:"/markup/basic/season",isActive:!1},{title:"생산 환율 관리",url:"/markup/basic/exchange-rate",isActive:!1}]},{title:"기획 관리",url:"#",icon:ue,isActive:!1,subItems:[{title:"공유문서 관리",url:"/markup/plan/share",isActive:!0},{title:"제품/상품 관리",childItem:[{title:"스타일 관리",url:"/markup/plan/product/style",isActive:!1},{title:"SKU 관리",url:"/markup/plan/product/sku",isActive:!1},{title:"바코드 관리",url:"/markup/plan/product/barcode",isActive:!1}]}]},{title:"생산 관리",url:"#",icon:pe,isActive:!1,subItems:[{title:"스타일 정보 관리",childItem:[{title:"스타일 생산 정보",url:"/markup/production/style"},{title:"사양/수출 정보 관리",url:"/markup/production/spec"}]},{title:"완사입관리",childItem:[{title:"BOM(원가견적서) 작성관리",url:"/markup/production/bom-vendor"},{title:"BOM(원가견적서) 대사관리",url:"/markup/production/bom-internal"},{title:"완사입 발주관리",url:"/markup/production/order"},{title:"완사입 입고관리",url:"/markup/production/receive"}]},{title:"생산 일정 관리",url:"/markup/production/schedule"},{title:"업체 일정 관리",childItem:[{title:"업체 생산 스케줄",url:"/markup/production/produce-schedule"},{title:"자재수급 일정 관리",url:"/markup/production/material-schedule"},{title:"생산 공정 일정 관리",url:"/markup/production/process-schedule"}]},{title:"규격 정보 관리",childItem:[{title:"혼용율 정보 관리",url:"/markup/production/composition-info"},{title:"수출 정보 관리",url:"/markup/production/export-info"}]},{title:"입고 예정 수량 관리",url:"/markup/production/expected-receive"}]},{title:"컴포넌트 모음",url:"#",icon:be,isActive:!1,subItems:[{title:"atomic",url:"/markup/components/atomic",isActive:!0},{title:"molecule",url:"/markup/components/molecule",isActive:!1},{title:"organism",url:"/markup/components/organism",isActive:!1},{title:"structures",url:"/markup/components/structures",isActive:!1},{title:"structures2",url:"/markup/components/structures2",isActive:!1},{title:"skeleton",url:"/markup/components/skeleton",isActive:!1},{title:"brand change",url:"/markup/loading/brandChange",isActive:!1},{title:"table sample",url:"/markup/components/table",isActive:!1}]}]},p=U(c.mainMenu[0]),s=f=>{p.value=f};return(f,t)=>{const n=ie,g=se,o=oe,b=me,w=de,y=E;return i(),u(o,fe({class:"overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"},m),{default:e(()=>[a(o,{collapsible:"none",class:"bg-primary w-(--sidebar-width-icon) group-data-[collapsible=icon]:w-0"},{default:e(()=>[a(n,{class:"p-4"},{default:e(()=>[...t[0]||(t[0]=[l("div",{class:"flex items-center justify-center rounded-sm bg-background text-primary size-8 p-1"},[l("img",{src:ge,alt:"logo",class:"size-full object-contain object-center"})],-1)])]),_:1}),a(g,null,{default:e(()=>[a(x,{items:c.mainMenu,activeItem:p.value,"onUpdate:activeItem":s},null,8,["items","activeItem"])]),_:1})]),_:1}),a(o,{collapsible:"none",class:"hidden flex-1 md:flex group-data-[collapsible=icon]:hidden border-border border-r gap-3"},{default:e(()=>[a(n,{class:"justify-center p-3 h-16 overflow-hidden"},{default:e(()=>[...t[1]||(t[1]=[l("p",{class:"title__bold text-default"}," JKND ",-1)])]),_:1}),a(y,{class:"py-0 px-3"},{default:e(()=>[a(he,null,{"combobox-list":e(()=>[a(w,{class:""},{default:e(()=>[a(b,{value:"1depth"},{default:e(()=>[...t[2]||(t[2]=[l("p",{class:"truncate"},[v(" 기업 "),l("span",{class:"font-bold"},"관리")],-1)])]),_:1}),a(b,{value:"2depth",class:"pl-6"},{default:e(()=>[...t[3]||(t[3]=[l("p",{class:"truncate"},[v(" 조직 "),l("span",{class:"font-bold"},"관리")],-1)])]),_:1}),a(b,{value:"3depth",class:"pl-8"},{default:e(()=>[...t[4]||(t[4]=[l("p",{class:"truncate"},[v(" 복리 후생 "),l("span",{class:"font-bold"},"관리")],-1)])]),_:1}),a(b,{value:"2depth"},{default:e(()=>[...t[5]||(t[5]=[l("p",{class:"truncate"},[v(" 소속 "),l("span",{class:"font-bold"},"관리")],-1)])]),_:1}),a(b,{value:"3depth",class:"pl-6"},{default:e(()=>[...t[6]||(t[6]=[l("p",{class:"truncate"},[v(" 브랜드 "),l("span",{class:"font-bold"},"관리")],-1)])]),_:1}),a(b,{value:"3depth"},{default:e(()=>[...t[7]||(t[7]=[l("p",{class:"truncate"},[v(" 예산 "),l("span",{class:"font-bold"},"관리")],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(g,null,{default:e(()=>[a(A,{items:c.mainMenu,activeItem:p.value,"onUpdate:activeItem":s},null,8,["items","activeItem"])]),_:1})]),_:1})]),_:1},16)}}});k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:"default",displayName:"LeftSidebar",description:"",tags:{},props:[{name:"collapsible",defaultValue:{func:!1,value:'"icon"'}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/LeftSidebar.vue"]});const Ee={component:N,title:"레이아웃/PageLayout",tags:["autodocs"],parameters:{layout:"fullscreen"}},_={name:"Index",parameters:{layout:"fullscreen",docs:{story:{height:"400px"}}},argTypes:{sidebarOpen:{control:"boolean",description:"좌측 메뉴 열림 여부",table:{category:"사이드바"}},multiBrand:{control:"boolean",description:"브랜드 선택 셀렉트",table:{category:"헤더"}},showAlarm:{control:"boolean",description:"알람 버튼",table:{category:"헤더"}},showSettings:{control:"boolean",description:"설정 버튼",table:{category:"헤더"}},showAvatar:{control:"boolean",description:"아바타 영역",table:{category:"헤더"}},showPageTabs:{control:"boolean",description:"페이지탭 표시 여부",table:{category:"헤더"}},layout:{control:"radio",options:["기본","분할화면","빈화면"],description:"레이아웃 타입",table:{category:"콘텐츠"}},showSubTitle:{control:"boolean",description:"서브 타이틀",table:{category:"콘텐츠"},if:{arg:"layout",neq:"빈화면"}},showMainBtn:{control:"boolean",description:"메인버튼",table:{category:"콘텐츠"},if:{arg:"layout",neq:"빈화면"}},showContentTab:{control:"boolean",description:"콘텐츠 탭 (분할 영역 전체를 감싸는 탭)",table:{category:"콘텐츠"},if:{arg:"layout",neq:"빈화면"}},showTabTitle:{control:"boolean",description:"탭 타이틀",table:{category:"콘텐츠"},if:{arg:"layout",neq:"빈화면"}},showSubBtn:{control:"boolean",description:"탭 버튼",table:{category:"콘텐츠"},if:{arg:"layout",neq:"빈화면"}},showSplitTab:{control:"boolean",description:"분할 탭 (분할화면 우측 콘텐츠를 감싸는 탭)",table:{category:"콘텐츠"},if:{arg:"layout",eq:"분할화면"}},showSearch:{control:"boolean",description:"검색 영역 표시",table:{category:"검색 영역"},if:{arg:"layout",neq:"빈화면"}},searchFilter:{control:"boolean",description:"조회 저장 필터",table:{category:"검색 영역"},if:{arg:"layout",neq:"빈화면"}},showDataActionArea:{control:"boolean",description:"데이터 건수 영역",table:{category:"테이블 영역"},if:{arg:"layout",neq:"빈화면"}},showTableActionArea:{control:"boolean",description:"테이블 액션 버튼 영역",table:{category:"테이블 영역"},if:{arg:"layout",neq:"빈화면"}},showTableFilter:{control:"boolean",description:"키워드 검색 버튼",table:{category:"테이블 영역"},if:{arg:"layout",neq:"빈화면"}},showTableDownload:{control:"boolean",description:"엑셀 다운로드 버튼",table:{category:"테이블 영역"},if:{arg:"layout",neq:"빈화면"}},showTableAction:{control:"boolean",description:"테이블 액션 버튼",table:{category:"테이블 영역"},if:{arg:"layout",neq:"빈화면"}},showPagination:{control:"boolean",description:"페이지네이션",table:{category:"테이블 영역"},if:{arg:"layout",neq:"빈화면"}},tableEmptyData:{control:"boolean",description:"데이터 없음 상태",table:{category:"테이블 영역"},if:{arg:"layout",neq:"빈화면"}}},args:{sidebarOpen:!1,multiBrand:!0,showAlarm:!0,showSettings:!0,showAvatar:!0,showPageTabs:!0,layout:"기본",showTitle:!0,showSubTitle:!0,showMainBtn:!0,showContentTab:!1,showTabTitle:!1,showSubBtn:!1,showSplitTab:!1,showSearch:!0,searchFilter:!1,showDataActionArea:!0,showTableActionArea:!0,showTableFilter:!0,showTableDownload:!0,showTableAction:!0,showPagination:!0,tableEmptyData:!1},render:r=>({components:{LeftSidebar:k,PageTabs:ve,TablePagination:we,PageSearch:ye,TableLayout:Ue,EmptyData:Te,LineTabs:N},setup(){const m=U(1),c=U([{label:"전체",value:"all",active:!0},{label:"진행중",value:"progress",active:!1},{label:"완료",value:"done",active:!1},{label:"취소",value:"cancel",active:!1}]),p=t=>{c.value=c.value.map(n=>({...n,active:n.value===t}))},s=U([{label:"탭1",value:"tab1",active:!0},{label:"탭2",value:"tab2",active:!1},{label:"탭3",value:"tab3",active:!1}]);return{args:r,page:m,tabs:c,onTabChange:p,splitTabs:s,onSplitTabChange:t=>{s.value=s.value.map(n=>({...n,active:n.value===t}))}}},template:`
      <UiSidebarProvider :key="args.sidebarOpen" :defaultOpen="args.sidebarOpen" class="min-h-full">
        <LeftSidebar />
        <UiSidebarInset class="overflow-hidden">

          <!-- 헤더 -->
          <header class="flex h-10 shrink-0 items-center w-full px-5 gap-3 bg-background border-b-1 border-border">
            <UiSidebarTrigger variant="outline" size="icon-sm" />
            <div class="flex items-center justify-between w-full">
              <div v-if="!args.multiBrand" class="flex gap-2 items-center">
                <span class="truncate">THISISNEVERTHAT</span>
              </div>
              <UiSelect v-else>
                <UiSelectTrigger class="w-60"><UiSelectValue placeholder="브랜드를 선택해 주세요" /></UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="thisisneverthat">THISISNEVERTHAT</UiSelectItem>
                  <UiSelectItem value="yeseyesee">YESEYESEE</UiSelectItem>
                  <UiSelectItem value="khakis">KHAKIS</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
              <div class="flex items-center gap-2 ml-auto">
                <div class="gap-2 flex items-center">
                  <template v-if="args.showAlarm">
                    <UiButton class="text-muted relative" variant="ghost" size="icon">
                      <LucideBell /><UiBadge size="dot" class="bg-danger absolute top-1 right-1" />
                    </UiButton>
                    <UiSeparator orientation="vertical" class="h-4" />
                  </template>
                  <template v-if="args.showSettings">
                    <UiButton class="text-muted relative" variant="ghost" size="icon">
                      <LucideSettings /><UiBadge size="dot" class="bg-success absolute top-1 right-1" />
                    </UiButton>
                    <UiSeparator orientation="vertical" class="h-4" />
                  </template>
                </div>
                <UiDropdownMenu v-if="args.showAvatar">
                  <UiDropdownMenuTrigger class="flex items-center text-left gap-2 hover:cursor-pointer">
                    <div class="size-6 rounded-full bg-subtle flex items-center justify-center caption__bold shrink-0">홍</div>
                    <div class="h-8 flex flex-col">
                      <p class="caption__bold">홍길동님</p>
                      <span class="caption text-muted">안녕하시와요</span>
                    </div>
                  </UiDropdownMenuTrigger>
                  <UiDropdownMenuContent>
                    <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
                    <UiDropdownMenuSeparator />
                    <UiDropdownMenuItem><LucideUser />Profile</UiDropdownMenuItem>
                    <UiDropdownMenuItem>Billing</UiDropdownMenuItem>
                  </UiDropdownMenuContent>
                </UiDropdownMenu>
              </div>
            </div>
          </header>

          <!-- 페이지탭 -->
          <PageTabs v-if="args.showPageTabs" />

          <!-- 콘텐츠 -->
          <div class="flex flex-col flex-1 min-h-0 overflow-hidden">

            <!-- 타이틀 -->
            <section class="border-b border-border px-8 flex-none">
              <header class="contents-header">
                <div class="contents-header__title">
                  <h2>화면 명</h2>
                  <span v-if="args.showSubTitle">화면 설명이 들어갑니다</span>
                </div>
                <div v-if="args.showMainBtn" class="contents-header__button">
                  <UiButton variant="outline"><LucidePlus />메인버튼</UiButton>
                </div>
              </header>
              <nav>
                <LineTabs v-if="args.showContentTab" :tab-list="tabs" @change="onTabChange" />
              </nav>
            </section>

            <!-- 빈화면 -->
            <div v-if="args.layout === '빈화면'" class="flex-1 flex items-center justify-center">
              <EmptyData />
            </div>

            <!-- 기본 -->
            <template v-else-if="args.layout === '기본'">
              <section v-if="args.showContentTab && (args.showTabTitle || args.showSubBtn)" class="px-8 py-6 flex items-center justify-between flex-none">
                <span v-if="args.showTabTitle" class="font-bold">타이틀명</span>
                <div v-if="args.showSubBtn" class="ml-auto">
                  <UiButton variant="outline">서브버튼</UiButton>
                </div>
              </section>
              <section v-if="args.showSearch" class="px-8 pt-6 flex-none">
                <PageSearch :filter="args.searchFilter">
                  <template #search-body>
                    <div class="flex flex-wrap gap-2 items-center">
                      <UiInput class="w-48 h-8" placeholder="내용 입력" />
                      <UiInput class="w-48 h-8" placeholder="내용 입력" />
                    </div>
                  </template>
                </PageSearch>
              </section>
              <TableLayout
                class="flex-1 min-h-0"
                :table-top="args.showDataActionArea || args.showTableActionArea"
                :data-action="args.showDataActionArea"
                :table-action="args.showTableActionArea"
                :filter="args.showTableFilter"
                :download="args.showTableDownload"
                :setting="args.showTableAction"
                :pagination="args.showPagination"
              >
                <template #table>
                  <UiTable class="table-fixed w-full">
                    <UiTableHeader class="sticky top-0 z-10">
                      <UiTableRow>
                        <UiTableHead v-for="h in ['이름', '부서', '직급', '상태', '등록일']" :key="h">{{ h }}</UiTableHead>
                      </UiTableRow>
                    </UiTableHeader>
                    <UiTableBody v-if="!args.tableEmptyData">
                      <UiTableRow v-for="n in 10" :key="n">
                        <UiTableCell v-for="h in ['이름', '부서', '직급', '상태', '등록일']" :key="h">
                          <UiSkeleton class="h-4 w-full" />
                        </UiTableCell>
                      </UiTableRow>
                    </UiTableBody>
                  </UiTable>
                  <div v-if="args.tableEmptyData" class="h-60">
                    <EmptyData />
                  </div>
                </template>
                <template #pagination>
                  <TablePagination v-model:page="page" :total="10" />
                </template>
              </TableLayout>
            </template>

            <!-- 분할화면 -->
            <template v-else>
              <UiResizablePanelGroup direction="horizontal" class="flex-1 min-h-0">
                <UiResizablePanel :default-size="30" :min-size="20" :max-size="50" class="flex flex-col overflow-y-auto gap-3 px-6 pt-6">
                  <UiSkeleton class="h-10 w-full flex-none" v-for="n in 15" :key="n" />
                </UiResizablePanel>
                <UiResizableHandle />
                <UiResizablePanel class="flex flex-col overflow-hidden">
                  <!-- 탭 타이틀 영역 -->
                  <section v-if="args.showTabTitle || args.showSubBtn" class="px-8 h-15 flex items-center justify-between flex-none">
                    <span v-if="args.showTabTitle" class="font-bold">타이틀명</span>
                    <div v-if="args.showSubBtn" class="ml-auto">
                      <UiButton variant="outline" size="sm">서브버튼</UiButton>
                    </div>
                  </section>
                  <!-- 분할 탭 -->
                  <nav v-if="args.showSplitTab" class="border-b border-border px-8 flex-none">
                    <LineTabs :tab-list="splitTabs" @change="onSplitTabChange" />
                  </nav>
                  <!-- 검색 -->
                  <section v-if="args.showSearch" class="px-8 pt-6 flex-none">
                    <PageSearch :filter="args.searchFilter">
                      <template #search-body>
                        <div class="flex flex-wrap gap-2 items-center">
                          <UiInput class="w-48 h-8" placeholder="내용 입력" />
                        </div>
                      </template>
                    </PageSearch>
                  </section>
                  <!-- 컨텐츠 컨트롤 전부 false → Empty -->
                  <div v-if="!args.showTabTitle && !args.showSubBtn && !args.showSplitTab && !args.showSearch" class="flex-1 flex items-center justify-center">
                    <EmptyData />
                  </div>
                  <TableLayout
                    v-else
                    class="flex-1 min-h-0"
                    :table-top="args.showDataActionArea || args.showTableActionArea"
                    :data-action="args.showDataActionArea"
                    :table-action="args.showTableActionArea"
                    :filter="args.showTableFilter"
                    :download="args.showTableDownload"
                    :setting="args.showTableAction"
                    :pagination="args.showPagination"
                  >
                    <template #table>
                      <UiTable class="table-fixed w-full">
                        <UiTableHeader class="sticky top-0 z-10">
                          <UiTableRow>
                            <UiTableHead v-for="h in ['이름', '부서', '상태', '등록일']" :key="h">{{ h }}</UiTableHead>
                          </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody v-if="!args.tableEmptyData">
                          <UiTableRow v-for="n in 8" :key="n">
                            <UiTableCell v-for="h in ['이름', '부서', '상태', '등록일']" :key="h">
                              <UiSkeleton class="h-4 w-full" />
                            </UiTableCell>
                          </UiTableRow>
                        </UiTableBody>
                      </UiTable>
                      <div v-if="args.tableEmptyData" class="h-60">
                        <EmptyData />
                      </div>
                    </template>
                    <template #pagination>
                      <TablePagination v-model:page="page" :total="10" />
                    </template>
                  </TableLayout>
                </UiResizablePanel>
              </UiResizablePanelGroup>
            </template>

          </div>
        </UiSidebarInset>
      </UiSidebarProvider>
    `})};var L,R,q;_.parameters={..._.parameters,docs:{...(L=_.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Index',
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        height: '400px'
      }
    }
  },
  argTypes: {
    // 사이드바
    sidebarOpen: {
      control: 'boolean',
      description: '좌측 메뉴 열림 여부',
      table: {
        category: '사이드바'
      }
    },
    // 헤더
    multiBrand: {
      control: 'boolean',
      description: '브랜드 선택 셀렉트',
      table: {
        category: '헤더'
      }
    },
    showAlarm: {
      control: 'boolean',
      description: '알람 버튼',
      table: {
        category: '헤더'
      }
    },
    showSettings: {
      control: 'boolean',
      description: '설정 버튼',
      table: {
        category: '헤더'
      }
    },
    showAvatar: {
      control: 'boolean',
      description: '아바타 영역',
      table: {
        category: '헤더'
      }
    },
    showPageTabs: {
      control: 'boolean',
      description: '페이지탭 표시 여부',
      table: {
        category: '헤더'
      }
    },
    // 콘텐츠
    layout: {
      control: 'radio',
      options: ['기본', '분할화면', '빈화면'],
      description: '레이아웃 타입',
      table: {
        category: '콘텐츠'
      }
    },
    showSubTitle: {
      control: 'boolean',
      description: '서브 타이틀',
      table: {
        category: '콘텐츠'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showMainBtn: {
      control: 'boolean',
      description: '메인버튼',
      table: {
        category: '콘텐츠'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showContentTab: {
      control: 'boolean',
      description: '콘텐츠 탭 (분할 영역 전체를 감싸는 탭)',
      table: {
        category: '콘텐츠'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showTabTitle: {
      control: 'boolean',
      description: '탭 타이틀',
      table: {
        category: '콘텐츠'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showSubBtn: {
      control: 'boolean',
      description: '탭 버튼',
      table: {
        category: '콘텐츠'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showSplitTab: {
      control: 'boolean',
      description: '분할 탭 (분할화면 우측 콘텐츠를 감싸는 탭)',
      table: {
        category: '콘텐츠'
      },
      if: {
        arg: 'layout',
        eq: '분할화면'
      }
    },
    showSearch: {
      control: 'boolean',
      description: '검색 영역 표시',
      table: {
        category: '검색 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    searchFilter: {
      control: 'boolean',
      description: '조회 저장 필터',
      table: {
        category: '검색 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    // 테이블 영역
    showDataActionArea: {
      control: 'boolean',
      description: '데이터 건수 영역',
      table: {
        category: '테이블 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showTableActionArea: {
      control: 'boolean',
      description: '테이블 액션 버튼 영역',
      table: {
        category: '테이블 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showTableFilter: {
      control: 'boolean',
      description: '키워드 검색 버튼',
      table: {
        category: '테이블 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showTableDownload: {
      control: 'boolean',
      description: '엑셀 다운로드 버튼',
      table: {
        category: '테이블 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showTableAction: {
      control: 'boolean',
      description: '테이블 액션 버튼',
      table: {
        category: '테이블 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    showPagination: {
      control: 'boolean',
      description: '페이지네이션',
      table: {
        category: '테이블 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    },
    tableEmptyData: {
      control: 'boolean',
      description: '데이터 없음 상태',
      table: {
        category: '테이블 영역'
      },
      if: {
        arg: 'layout',
        neq: '빈화면'
      }
    }
  },
  args: {
    sidebarOpen: false,
    multiBrand: true,
    showAlarm: true,
    showSettings: true,
    showAvatar: true,
    showPageTabs: true,
    layout: '기본',
    showTitle: true,
    // 항상 표시
    showSubTitle: true,
    showMainBtn: true,
    showContentTab: false,
    showTabTitle: false,
    showSubBtn: false,
    showSplitTab: false,
    showSearch: true,
    searchFilter: false,
    showDataActionArea: true,
    showTableActionArea: true,
    showTableFilter: true,
    showTableDownload: true,
    showTableAction: true,
    showPagination: true,
    tableEmptyData: false
  },
  render: args => ({
    components: {
      LeftSidebar,
      PageTabs,
      TablePagination,
      PageSearch,
      TableLayout,
      EmptyData,
      LineTabs
    },
    setup() {
      const page = ref(1);
      const tabs = ref([{
        label: '전체',
        value: 'all',
        active: true
      }, {
        label: '진행중',
        value: 'progress',
        active: false
      }, {
        label: '완료',
        value: 'done',
        active: false
      }, {
        label: '취소',
        value: 'cancel',
        active: false
      }]);
      const onTabChange = (value: string) => {
        tabs.value = tabs.value.map(t => ({
          ...t,
          active: t.value === value
        }));
      };
      const splitTabs = ref([{
        label: '탭1',
        value: 'tab1',
        active: true
      }, {
        label: '탭2',
        value: 'tab2',
        active: false
      }, {
        label: '탭3',
        value: 'tab3',
        active: false
      }]);
      const onSplitTabChange = (value: string) => {
        splitTabs.value = splitTabs.value.map(t => ({
          ...t,
          active: t.value === value
        }));
      };
      return {
        args,
        page,
        tabs,
        onTabChange,
        splitTabs,
        onSplitTabChange
      };
    },
    template: \`
      <UiSidebarProvider :key="args.sidebarOpen" :defaultOpen="args.sidebarOpen" class="min-h-full">
        <LeftSidebar />
        <UiSidebarInset class="overflow-hidden">

          <!-- 헤더 -->
          <header class="flex h-10 shrink-0 items-center w-full px-5 gap-3 bg-background border-b-1 border-border">
            <UiSidebarTrigger variant="outline" size="icon-sm" />
            <div class="flex items-center justify-between w-full">
              <div v-if="!args.multiBrand" class="flex gap-2 items-center">
                <span class="truncate">THISISNEVERTHAT</span>
              </div>
              <UiSelect v-else>
                <UiSelectTrigger class="w-60"><UiSelectValue placeholder="브랜드를 선택해 주세요" /></UiSelectTrigger>
                <UiSelectContent>
                  <UiSelectItem value="thisisneverthat">THISISNEVERTHAT</UiSelectItem>
                  <UiSelectItem value="yeseyesee">YESEYESEE</UiSelectItem>
                  <UiSelectItem value="khakis">KHAKIS</UiSelectItem>
                </UiSelectContent>
              </UiSelect>
              <div class="flex items-center gap-2 ml-auto">
                <div class="gap-2 flex items-center">
                  <template v-if="args.showAlarm">
                    <UiButton class="text-muted relative" variant="ghost" size="icon">
                      <LucideBell /><UiBadge size="dot" class="bg-danger absolute top-1 right-1" />
                    </UiButton>
                    <UiSeparator orientation="vertical" class="h-4" />
                  </template>
                  <template v-if="args.showSettings">
                    <UiButton class="text-muted relative" variant="ghost" size="icon">
                      <LucideSettings /><UiBadge size="dot" class="bg-success absolute top-1 right-1" />
                    </UiButton>
                    <UiSeparator orientation="vertical" class="h-4" />
                  </template>
                </div>
                <UiDropdownMenu v-if="args.showAvatar">
                  <UiDropdownMenuTrigger class="flex items-center text-left gap-2 hover:cursor-pointer">
                    <div class="size-6 rounded-full bg-subtle flex items-center justify-center caption__bold shrink-0">홍</div>
                    <div class="h-8 flex flex-col">
                      <p class="caption__bold">홍길동님</p>
                      <span class="caption text-muted">안녕하시와요</span>
                    </div>
                  </UiDropdownMenuTrigger>
                  <UiDropdownMenuContent>
                    <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
                    <UiDropdownMenuSeparator />
                    <UiDropdownMenuItem><LucideUser />Profile</UiDropdownMenuItem>
                    <UiDropdownMenuItem>Billing</UiDropdownMenuItem>
                  </UiDropdownMenuContent>
                </UiDropdownMenu>
              </div>
            </div>
          </header>

          <!-- 페이지탭 -->
          <PageTabs v-if="args.showPageTabs" />

          <!-- 콘텐츠 -->
          <div class="flex flex-col flex-1 min-h-0 overflow-hidden">

            <!-- 타이틀 -->
            <section class="border-b border-border px-8 flex-none">
              <header class="contents-header">
                <div class="contents-header__title">
                  <h2>화면 명</h2>
                  <span v-if="args.showSubTitle">화면 설명이 들어갑니다</span>
                </div>
                <div v-if="args.showMainBtn" class="contents-header__button">
                  <UiButton variant="outline"><LucidePlus />메인버튼</UiButton>
                </div>
              </header>
              <nav>
                <LineTabs v-if="args.showContentTab" :tab-list="tabs" @change="onTabChange" />
              </nav>
            </section>

            <!-- 빈화면 -->
            <div v-if="args.layout === '빈화면'" class="flex-1 flex items-center justify-center">
              <EmptyData />
            </div>

            <!-- 기본 -->
            <template v-else-if="args.layout === '기본'">
              <section v-if="args.showContentTab && (args.showTabTitle || args.showSubBtn)" class="px-8 py-6 flex items-center justify-between flex-none">
                <span v-if="args.showTabTitle" class="font-bold">타이틀명</span>
                <div v-if="args.showSubBtn" class="ml-auto">
                  <UiButton variant="outline">서브버튼</UiButton>
                </div>
              </section>
              <section v-if="args.showSearch" class="px-8 pt-6 flex-none">
                <PageSearch :filter="args.searchFilter">
                  <template #search-body>
                    <div class="flex flex-wrap gap-2 items-center">
                      <UiInput class="w-48 h-8" placeholder="내용 입력" />
                      <UiInput class="w-48 h-8" placeholder="내용 입력" />
                    </div>
                  </template>
                </PageSearch>
              </section>
              <TableLayout
                class="flex-1 min-h-0"
                :table-top="args.showDataActionArea || args.showTableActionArea"
                :data-action="args.showDataActionArea"
                :table-action="args.showTableActionArea"
                :filter="args.showTableFilter"
                :download="args.showTableDownload"
                :setting="args.showTableAction"
                :pagination="args.showPagination"
              >
                <template #table>
                  <UiTable class="table-fixed w-full">
                    <UiTableHeader class="sticky top-0 z-10">
                      <UiTableRow>
                        <UiTableHead v-for="h in ['이름', '부서', '직급', '상태', '등록일']" :key="h">{{ h }}</UiTableHead>
                      </UiTableRow>
                    </UiTableHeader>
                    <UiTableBody v-if="!args.tableEmptyData">
                      <UiTableRow v-for="n in 10" :key="n">
                        <UiTableCell v-for="h in ['이름', '부서', '직급', '상태', '등록일']" :key="h">
                          <UiSkeleton class="h-4 w-full" />
                        </UiTableCell>
                      </UiTableRow>
                    </UiTableBody>
                  </UiTable>
                  <div v-if="args.tableEmptyData" class="h-60">
                    <EmptyData />
                  </div>
                </template>
                <template #pagination>
                  <TablePagination v-model:page="page" :total="10" />
                </template>
              </TableLayout>
            </template>

            <!-- 분할화면 -->
            <template v-else>
              <UiResizablePanelGroup direction="horizontal" class="flex-1 min-h-0">
                <UiResizablePanel :default-size="30" :min-size="20" :max-size="50" class="flex flex-col overflow-y-auto gap-3 px-6 pt-6">
                  <UiSkeleton class="h-10 w-full flex-none" v-for="n in 15" :key="n" />
                </UiResizablePanel>
                <UiResizableHandle />
                <UiResizablePanel class="flex flex-col overflow-hidden">
                  <!-- 탭 타이틀 영역 -->
                  <section v-if="args.showTabTitle || args.showSubBtn" class="px-8 h-15 flex items-center justify-between flex-none">
                    <span v-if="args.showTabTitle" class="font-bold">타이틀명</span>
                    <div v-if="args.showSubBtn" class="ml-auto">
                      <UiButton variant="outline" size="sm">서브버튼</UiButton>
                    </div>
                  </section>
                  <!-- 분할 탭 -->
                  <nav v-if="args.showSplitTab" class="border-b border-border px-8 flex-none">
                    <LineTabs :tab-list="splitTabs" @change="onSplitTabChange" />
                  </nav>
                  <!-- 검색 -->
                  <section v-if="args.showSearch" class="px-8 pt-6 flex-none">
                    <PageSearch :filter="args.searchFilter">
                      <template #search-body>
                        <div class="flex flex-wrap gap-2 items-center">
                          <UiInput class="w-48 h-8" placeholder="내용 입력" />
                        </div>
                      </template>
                    </PageSearch>
                  </section>
                  <!-- 컨텐츠 컨트롤 전부 false → Empty -->
                  <div v-if="!args.showTabTitle && !args.showSubBtn && !args.showSplitTab && !args.showSearch" class="flex-1 flex items-center justify-center">
                    <EmptyData />
                  </div>
                  <TableLayout
                    v-else
                    class="flex-1 min-h-0"
                    :table-top="args.showDataActionArea || args.showTableActionArea"
                    :data-action="args.showDataActionArea"
                    :table-action="args.showTableActionArea"
                    :filter="args.showTableFilter"
                    :download="args.showTableDownload"
                    :setting="args.showTableAction"
                    :pagination="args.showPagination"
                  >
                    <template #table>
                      <UiTable class="table-fixed w-full">
                        <UiTableHeader class="sticky top-0 z-10">
                          <UiTableRow>
                            <UiTableHead v-for="h in ['이름', '부서', '상태', '등록일']" :key="h">{{ h }}</UiTableHead>
                          </UiTableRow>
                        </UiTableHeader>
                        <UiTableBody v-if="!args.tableEmptyData">
                          <UiTableRow v-for="n in 8" :key="n">
                            <UiTableCell v-for="h in ['이름', '부서', '상태', '등록일']" :key="h">
                              <UiSkeleton class="h-4 w-full" />
                            </UiTableCell>
                          </UiTableRow>
                        </UiTableBody>
                      </UiTable>
                      <div v-if="args.tableEmptyData" class="h-60">
                        <EmptyData />
                      </div>
                    </template>
                    <template #pagination>
                      <TablePagination v-model:page="page" :total="10" />
                    </template>
                  </TableLayout>
                </UiResizablePanel>
              </UiResizablePanelGroup>
            </template>

          </div>
        </UiSidebarInset>
      </UiSidebarProvider>
    \`
  })
}`,...(q=(R=_.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Le=["MainLayout"];export{_ as MainLayout,Le as __namedExportsOrder,Ee as default};
