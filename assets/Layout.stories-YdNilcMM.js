import{bs as x,cf as X,bV as S,bS as m,bh as f,co as a,bY as A,cb as d,k as J,bj as Ae,cm as ve,bD as _e,bi as Q,bQ as Ie,bR as $e,bf as Ce,c5 as Le,cl as be,cp as Me,ck as ze,ci as Z,bZ as $,aM as ee,bk as P,bX as G,aN as ae,b_ as ge,bn as e,F as N,ch as Pe,bg as r,c3 as C,aO as Ne,aP as Be,aQ as Te,aR as Oe,aS as Re,aT as Ee,aU as je,aV as He,aW as qe,aX as Fe,e as De,aY as Ve,bF as he,bL as K,be as te,aZ as Ge,a_ as Ke,bm as h,a$ as xe,b0 as ye,b1 as Ye,b2 as We,b3 as Xe,b4 as Je,q as Qe,B as Ze,I as ea,D as aa,o as ta,l as sa,bJ as se,bU as la,cg as na,a6 as oa,c as ia,A as ra,b5 as ca,z as ua,cr as da,J as pa,a4 as ma,az as fa,aA as va,b6 as _a,b7 as ba,aB as ga,aC as ha}from"./iframe-4xPXPRuq.js";import{_ as xa}from"./logo-uj_DKnwi.js";import{_ as ya}from"./ComboboxTag-aadXWQBF.js";import{_ as ka}from"./SheetBase-DRTMl3PM.js";import{_ as Sa}from"./PageTabs-KnkVaYxe.js";import"./preload-helper-FI0fEOG2.js";const[ke,wa]=Ae("AvatarRoot");var Ua=x({__name:"AvatarRoot",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(s){return X(),wa({imageLoadingStatus:S("idle")}),(t,u)=>(m(),f(d(J),{"as-child":t.asChild,as:t.as},{default:a(()=>[A(t.$slots,"default")]),_:3},8,["as-child","as"]))}}),Aa=Ua,Ia=x({__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(s){const t=s,u=ke();X();const c=S(t.delayMs===void 0);return ve(l=>{if(t.delayMs&&_e){const p=window.setTimeout(()=>{c.value=!0},t.delayMs);l(()=>{window.clearTimeout(p)})}}),(l,p)=>c.value&&d(u).imageLoadingStatus.value!=="loaded"?(m(),f(d(J),{key:0,"as-child":l.asChild,as:l.as},{default:a(()=>[A(l.$slots,"default")]),_:3},8,["as-child","as"])):Q("v-if",!0)}}),$a=Ia;function ne(s,t){return s?t?(s.src!==t&&(s.src=t),s.complete&&s.naturalWidth>0?"loaded":"loading"):"error":"idle"}function Ca(s,{referrerPolicy:t,crossOrigin:u}={}){const c=S(!1),l=S(null),p=Ce(()=>c.value?(!l.value&&_e&&(l.value=new window.Image),l.value):null),n=S(ne(p.value,s.value)),o=v=>()=>{c.value&&(n.value=v)};return Ie(()=>{c.value=!0,ve(v=>{const i=p.value;if(!i)return;n.value=ne(i,s.value);const g=o("loaded"),_=o("error");i.addEventListener("load",g),i.addEventListener("error",_),t!=null&&t.value&&(i.referrerPolicy=t.value),typeof(u==null?void 0:u.value)=="string"&&(i.crossOrigin=u.value),v(()=>{i.removeEventListener("load",g),i.removeEventListener("error",_)})})}),$e(()=>{c.value=!1}),n}var La=x({__name:"AvatarImage",props:{src:{type:String,required:!0},referrerPolicy:{type:null,required:!1},crossOrigin:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"img"}},emits:["loadingStatusChange"],setup(s,{emit:t}){const u=s,c=t,{src:l,referrerPolicy:p,crossOrigin:n}=Le(u);X();const o=ke(),v=Ca(l,{referrerPolicy:p,crossOrigin:n});return be(v,i=>{c("loadingStatusChange",i),i!=="idle"&&(o.imageLoadingStatus.value=i)},{immediate:!0}),(i,g)=>Me((m(),f(d(J),{role:"img","as-child":i.asChild,as:i.as,src:d(l),referrerpolicy:d(p),crossorigin:d(n)},{default:a(()=>[A(i.$slots,"default")]),_:3},8,["as-child","as","src","referrerpolicy","crossorigin"])),[[ze,d(v)==="loaded"]])}}),Ma=La;const E=x({__name:"MainMenuIcon",props:{items:{},activeItem:{}},emits:["update:activeItem"],setup(s,{emit:t}){const u=t,{setOpen:c,setHover:l,open:p}=Z(),n=i=>{u("update:activeItem",i)},o=i=>{i.isActive=!0,n(i),c(!0),l(!1)},v=i=>{p.value||(n(i),l(!0))};return(i,g)=>{const _=$("LucideEllipsisVertical"),y=ae,k=ee;return m(),f(k,{class:"flex-col p-0"},{default:a(()=>[(m(!0),P(N,null,G(s.items,b=>(m(),f(y,{key:b.title,class:"flex items-center relative justify-center size-16 hover:cursor-pointer hover:bg-transparent text-neutral/40 hover:text-neutral active:bg-transparent active:text-neutral data-[active=true]:bg-transparent data-[active=true]:text-neutral",tooltip:d(p)?b.title:void 0,"is-active":s.activeItem.title===b.title,onClick:L=>o(b),onMouseenter:L=>v(b)},{default:a(()=>[b.icon?(m(),f(ge(b.icon),{key:0,class:"stroke-2"})):Q("",!0),e(_,{class:"absolute right-0 size-5"})]),_:2},1032,["tooltip","is-active","onClick","onMouseenter"]))),128))]),_:1})}}});E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:"default",displayName:"MainMenuIcon",description:"",tags:{},props:[{name:"items",required:!0,type:{name:"Array",elements:[{name:`{
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}`}]}},{name:"activeItem",required:!0,type:{name:"union",elements:[{name:"any"},{name:"null"}]}}],events:[{name:"update:activeItem"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/MainMenuIcon.vue"]});const j=x({__name:"MainMenuText",props:{activeItem:{}},setup(s){const t=Pe(),{state:u}=Z(),c=S(!1);return be(u,l=>{l!=="collapsed"&&(c.value=!1)}),(l,p)=>{const n=Ne,o=$("LucideChevronDown"),v=ae,i=Oe,g=He,_=je,y=Ee,k=Re,b=Te,L=Be,Y=qe,W=ee;return m(),f(W,{class:"px-3"},{default:a(()=>[e(n,{class:"title__bold h-10"},{default:a(()=>[s.activeItem.icon?(m(),f(ge(s.activeItem.icon),{key:0,class:"size-4 mr-2"})):Q("",!0),r("span",null,C(s.activeItem.title),1)]),_:1}),e(Y,null,{default:a(()=>[(m(!0),P(N,null,G(s.activeItem.subItems,w=>(m(),f(L,{key:w.title,class:"gap-1"},{default:a(()=>[w.childItem?(m(),f(b,{key:0,class:"group/collapsible"},{default:a(()=>[e(i,{"as-child":"",class:"pl-6 hover:bg-surface-muted mb-1"},{default:a(()=>[e(v,{tooltip:!1,class:"h-10"},{default:a(()=>[r("span",null,C(w.title),1),e(o,{class:"ml-auto text-muted transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 size-4"})]),_:2},1024)]),_:2},1024),e(k,null,{default:a(()=>[e(y,{class:"border-0"},{default:a(()=>[(m(!0),P(N,null,G(w.childItem,I=>(m(),f(_,{key:I.title,class:"h-10 flex items-center pl-8 hover:bg-surface-muted rounded-sm has-[span[data-active=true]]:bg-primary-light"},{default:a(()=>[e(g,{"as-child":"",onClick:le=>d(t).push(I.url||"#"),"is-active":I.isActive},{default:a(()=>[r("span",null,C(I.title),1)]),_:2},1032,["onClick","is-active"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)):(m(),f(v,{key:1,"is-active":w.isActive,tooltip:!1,class:"pl-6 h-10 hover:bg-surface-muted data-[active=true]:bg-primary-light data-[active=true]:text-primary data-[active=true]:font-bold",onClick:I=>{d(t).push(w.url||"#")}},{default:a(()=>[r("span",null,C(w.title),1)]),_:2},1032,["is-active","onClick"]))]),_:2},1024))),128))]),_:1})]),_:1})}}});j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{exportName:"default",displayName:"MainMenuText",description:"",tags:{},props:[{name:"activeItem",required:!0,type:{name:"union",elements:[{name:"any"},{name:"null"}]}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/MainMenuText.vue"]});const za={class:"relative items-center flex h-8 gap-1 px-padding-xs w-full"},Pa={class:"absolute end-2 inset-y-0 flex items-center justify-center"},Na={class:"truncate"},H=x({__name:"ComboboxBase",props:{class:{type:[Boolean,null,String,Object,Array]},placeholder:{default:"내용을 입력하세요"},disabled:{type:Boolean,default:!1},listItem:{default:()=>[]}},setup(s){const t=S(""),u=s;return(c,l)=>{const p=Ve,n=$("LucideChevronDown"),o=De,v=Ge,i=Ke,g=ye,_=xe,y=Ye,k=Fe;return m(),f(k,{by:"label"},{default:a(()=>[e(v,{class:K(d(te)("border border-border rounded-sm",u.class))},{default:a(()=>[e(o,{class:"w-full"},{default:a(()=>[r("div",za,[A(c.$slots,"prefix"),e(p,{class:"",placeholder:s.placeholder,disabled:u.disabled,modelValue:d(t),"onUpdate:modelValue":l[0]||(l[0]=b=>he(t)?t.value=b:null)},null,8,["placeholder","disabled","modelValue"]),r("span",Pa,[e(n,{class:"size-5 text-muted"})])])]),_:3})]),_:3},8,["class"]),e(y,{class:"w-[var(--reka-popper-anchor-width)]"},{default:a(()=>[e(i,null,{default:a(()=>[...l[1]||(l[1]=[h(" 일치하는 키워드가 없습니다. ",-1)])]),_:1}),A(c.$slots,"combobox-list",{},()=>[e(_,{class:""},{default:a(()=>[(m(!0),P(N,null,G(s.listItem,b=>(m(),f(g,{value:b.value},{default:a(()=>[r("p",Na,C(b.label),1)]),_:2},1032,["value"]))),256))]),_:1})])]),_:3})]),_:3})}}});H.__docgenInfo=Object.assign({displayName:H.name??H.__name},{exportName:"default",displayName:"ComboboxBase",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'내용을 입력하세요'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"listItem",required:!1,type:{name:"Array",elements:[{name:"ListItem"}]},defaultValue:{func:!1,value:"() => []"}}],slots:[{name:"prefix"},{name:"combobox-list"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/select/ComboboxBase.vue"]});const M=x({__name:"LeftSidebar",props:{side:{},variant:{},collapsible:{default:"icon"},class:{type:[Boolean,null,String,Object,Array]}},setup(s){const t=s,u={mainMenu:[{title:"시스템 관리",url:"#",icon:Qe,isActive:!1,subItems:[{title:"권한 관리",childItem:[{title:"컴포넌트 관리",url:"/markup/system/component"},{title:"메뉴 관리",url:"/markup/system/menu"},{title:"권한 그룹 관리",url:"/markup/system/permissionGroups"},{title:"사용자 권한 그룹 관리",url:"/markup/system/userGroups"},{title:"사용자 권한 관리",url:"/markup/system/user"}]},{title:"코드 관리",url:"#"}]},{title:"기업 관리",url:"#",icon:Ze,subItems:[{title:"소속 관리",url:"/markup/company/business",isActive:!0},{title:"브랜드 관리",url:"/markup/company/brand",isActive:!1},{title:"조직 관리",childItem:[{title:"부서 관리",url:"/markup/company/organization/department",isActive:!1},{title:"인사 관리",url:"/markup/company/organization/hr",isActive:!1}]}]},{title:"기본 정보 관리",url:"#",icon:ea,isActive:!1,subItems:[{title:"업체 관리",url:"/markup/basic/partner",isActive:!1},{title:"판매 브랜드 관리",url:"/markup/basic/sell-brand",isActive:!1},{title:"컬러 관리",url:"/markup/basic/color",isActive:!1},{title:"사이즈 관리",url:"/markup/basic/size",isActive:!1},{title:"시즌 관리",url:"/markup/basic/season",isActive:!1},{title:"생산 환율 관리",url:"/markup/basic/exchange-rate",isActive:!1}]},{title:"기획 관리",url:"#",icon:aa,isActive:!1,subItems:[{title:"공유문서 관리",url:"/markup/plan/share",isActive:!0},{title:"제품/상품 관리",childItem:[{title:"스타일 관리",url:"/markup/plan/product/style",isActive:!1},{title:"SKU 관리",url:"/markup/plan/product/sku",isActive:!1},{title:"바코드 관리",url:"/markup/plan/product/barcode",isActive:!1}]}]},{title:"생산 관리",url:"#",icon:ta,isActive:!1,subItems:[{title:"스타일 정보 관리",childItem:[{title:"스타일 생산 정보",url:"/markup/production/style"},{title:"사양/수출 정보 관리",url:"/markup/production/spec"}]},{title:"완사입관리",childItem:[{title:"BOM(원가견적서) 작성관리",url:"/markup/production/bom-vendor"},{title:"BOM(원가견적서) 대사관리",url:"/markup/production/bom-internal"},{title:"완사입 발주관리",url:"/markup/production/order"},{title:"완사입 입고관리",url:"/markup/production/receive"}]},{title:"생산 일정 관리",url:"/markup/production/schedule"},{title:"업체 일정 관리",childItem:[{title:"업체 생산 스케줄",url:"/markup/production/produce-schedule"},{title:"자재수급 일정 관리",url:"/markup/production/material-schedule"},{title:"생산 공정 일정 관리",url:"/markup/production/process-schedule"}]},{title:"규격 정보 관리",childItem:[{title:"혼용율 정보 관리",url:"/markup/production/composition-info"},{title:"수출 정보 관리",url:"/markup/production/export-info"}]},{title:"입고 예정 수량 관리",url:"/markup/production/expected-receive"}]},{title:"컴포넌트 모음",url:"#",icon:sa,isActive:!1,subItems:[{title:"atomic",url:"/markup/components/atomic",isActive:!0},{title:"molecule",url:"/markup/components/molecule",isActive:!1},{title:"organism",url:"/markup/components/organism",isActive:!1},{title:"structures",url:"/markup/components/structures",isActive:!1},{title:"structures2",url:"/markup/components/structures2",isActive:!1},{title:"skeleton",url:"/markup/components/skeleton",isActive:!1},{title:"brand change",url:"/markup/loading/brandChange",isActive:!1},{title:"table sample",url:"/markup/components/table",isActive:!1}]}]},c=S(u.mainMenu[0]),l=p=>{c.value=p};return(p,n)=>{const o=Xe,v=Je,i=We,g=ae,_=ye,y=xe,k=ee;return m(),f(i,se({class:"overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"},t),{default:a(()=>[e(i,{collapsible:"none",class:"bg-primary w-(--sidebar-width-icon) group-data-[collapsible=icon]:w-0"},{default:a(()=>[e(o,{class:"p-4"},{default:a(()=>[...n[0]||(n[0]=[r("div",{class:"flex items-center justify-center rounded-sm bg-background text-primary size-8"},[r("img",{src:xa,alt:"logo",class:""})],-1)])]),_:1}),e(v,null,{default:a(()=>[e(E,{items:u.mainMenu,activeItem:c.value,"onUpdate:activeItem":l},null,8,["items","activeItem"])]),_:1})]),_:1}),e(i,{collapsible:"none",class:"hidden flex-1 md:flex group-data-[collapsible=icon]:hidden border-border border-r gap-3"},{default:a(()=>[e(o,{class:"items-center px-padding-sm py-0"},{default:a(()=>[e(g,{size:"lg",class:"title__bold text-default p-0 h-16"},{default:a(()=>[...n[1]||(n[1]=[h(" AON ERP System ",-1)])]),_:1})]),_:1}),e(k,{class:"py-0 px-3"},{default:a(()=>[e(H,null,{"combobox-list":a(()=>[e(y,{class:""},{default:a(()=>[e(_,{value:"1depth"},{default:a(()=>[...n[2]||(n[2]=[r("p",{class:"truncate"},[h(" 기업 "),r("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(_,{value:"2depth",class:"pl-6"},{default:a(()=>[...n[3]||(n[3]=[r("p",{class:"truncate"},[h(" 조직 "),r("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(_,{value:"3depth",class:"pl-8"},{default:a(()=>[...n[4]||(n[4]=[r("p",{class:"truncate"},[h(" 복리 후생 "),r("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(_,{value:"2depth"},{default:a(()=>[...n[5]||(n[5]=[r("p",{class:"truncate"},[h(" 소속 "),r("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(_,{value:"3depth",class:"pl-6"},{default:a(()=>[...n[6]||(n[6]=[r("p",{class:"truncate"},[h(" 브랜드 "),r("span",{class:"font-bold"},"관리")],-1)])]),_:1}),e(_,{value:"3depth"},{default:a(()=>[...n[7]||(n[7]=[r("p",{class:"truncate"},[h(" 예산 "),r("span",{class:"font-bold"},"관리")],-1)])]),_:1})]),_:1})]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(j,{items:u.mainMenu,activeItem:c.value,"onUpdate:activeItem":l},null,8,["items","activeItem"])]),_:1})]),_:1})]),_:1},16)}}});M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{exportName:"default",displayName:"LeftSidebar",description:"",tags:{},props:[{name:"collapsible",defaultValue:{func:!1,value:'"icon"'}}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/sideMenu/LeftSidebar.vue"]});const q=x({__name:"Avatar",props:{class:{type:[Boolean,null,String,Object,Array]}},setup(s){const t=s;return(u,c)=>(m(),f(d(Aa),{"data-slot":"avatar",class:K(d(te)("relative flex size-8 shrink-0 overflow-hidden rounded-full",t.class))},{default:a(()=>[A(u.$slots,"default")]),_:3},8,["class"]))}});q.__docgenInfo=Object.assign({displayName:q.name??q.__name},{exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"TSIndexedAccessType"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/avatar/Avatar.vue"]});const F=x({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(s){const t=s,u=la(t,"class");return(c,l)=>(m(),f(d($a),se({"data-slot":"avatar-fallback"},d(u),{class:d(te)("bg-subtle flex size-full items-center justify-center rounded-full",t.class)}),{default:a(()=>[A(c.$slots,"default")]),_:3},16,["class"]))}});F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{exportName:"default",displayName:"AvatarFallback",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/avatar/AvatarFallback.vue"]});const D=x({__name:"AvatarImage",props:{src:{},referrerPolicy:{},crossOrigin:{},asChild:{type:Boolean},as:{}},setup(s){const t=s;return(u,c)=>(m(),f(d(Ma),se({"data-slot":"avatar-image"},t,{class:"aspect-square size-full"}),{default:a(()=>[A(u.$slots,"default")]),_:3},16))}});D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:"default",displayName:"AvatarImage",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/ui/avatar/AvatarImage.vue"]});const Ba={class:"flex flex-col gap-3 py-2"},Ta={class:"flex flex-col gap-2"},Oa={class:"flex flex-col gap-2"},Ra={class:"flex flex-col gap-2"},V=x({__name:"PushAlert",props:{open:{type:Boolean,default:!1},openModifiers:{}},emits:["update:open"],setup(s){const t=na(s,"open");return(u,c)=>{const l=oa;return m(),f(ka,{open:t.value,"onUpdate:open":c[0]||(c[0]=p=>t.value=p),title:"알림",footer:!1},{body:a(()=>[r("div",Ba,[r("div",Ta,[e(l,{class:"h-3 w-1/3"}),e(l,{class:"h-9 w-full"})]),r("div",Oa,[e(l,{class:"h-3 w-1/3"}),e(l,{class:"h-9 w-full"})]),r("div",Ra,[e(l,{class:"h-3 w-1/3"}),e(l,{class:"h-9 w-full"})])])]),_:1},8,["open"])}}});V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:"default",displayName:"PushAlert",description:"",tags:{},sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/sheet/PushAlert.vue"]});const Ea={class:"flex h-10 shrink-0 items-center w-full px-5 gap-3 bg-background border-b-1 border-border"},ja={class:"flex items-center justify-between w-full"},Ha={class:"group w-full h-full flex justify-between items-center"},qa={class:"truncate"},Fa={class:"flex items-center gap-2"},Da={class:"gap-2 flex items-center"},z=x({__name:"Header",setup(s){const{open:t}=Z(),u=[{label:"THISISNEVERTHAT",value:"thisisneverthat"},{label:"YESEYESEE",value:"yeseyesee"},{label:"KHAKIS",value:"khakis"},{label:"TUNE",value:"tune"},{label:"TENUI",value:"tenui"},{label:"SUNLOVE",value:"sunlove"},{label:"LOADINGROOM",value:"loadingroom"},{label:"WELLBEING EXPRESS",value:"wellbeingExpress"},{label:"KATA",value:"kata"}],c=S("thisisneverthat"),l=n=>{u.map(o=>o.value===n.value)&&(c.value=n.value)},p=S(!1);return(n,o)=>{const v=ca,i=$("LucideStar"),g=ua,_=$("LucideBell"),y=pa,k=ma,b=$("LucideSettings"),L=D,Y=F,W=q,w=fa,I=_a,le=ba,Se=$("LucideUser"),B=ga,we=va,Ue=ha;return m(),P(N,null,[r("header",Ea,[e(v,{icon:d(t)?d(ra):d(ia),variant:"outline",size:"icon-sm",class:""},null,8,["icon"]),r("div",ja,[e(ya,{class:"w-60",placeholder:"브랜드를 선택해 주세요","list-item":u},{"list-item":a(({item:U})=>[r("div",Ha,[r("span",qa,C(U.label),1),e(g,{variant:"ghost",class:K(["hover:bg-transparent ml-auto  group-hover:inline-flex",U.value===d(c)?"inline-flex":"hidden"]),size:"icon",onClick:da(Va=>l(U),["prevent","stop"])},{default:a(()=>[e(i,{fill:U.value===d(c)?"var(--color-primary)":"none",class:K(U.value===d(c)?"text-primary":"text-subtle-text")},null,8,["fill","class"])]),_:2},1032,["class","onClick"])])]),_:1}),r("div",Fa,[r("div",Da,[e(g,{class:"text-muted relative",variant:"ghost",size:"icon",onClick:o[0]||(o[0]=U=>p.value=!0)},{default:a(()=>[e(_),e(y,{variant:"destructive",size:"dot",class:"absolute top-1 right-1"})]),_:1}),e(k,{orientation:"vertical",class:"h-4"}),e(g,{class:"text-muted relative",variant:"ghost",size:"icon"},{default:a(()=>[e(b,{class:""}),e(y,{variant:"destructive",size:"dot",class:"bg-success absolute top-1 right-1"})]),_:1}),e(k,{orientation:"vertical",class:"h-4"})]),e(Ue,null,{default:a(()=>[e(w,{class:"flex items-center text-left gap-2 hover:cursor-pointer"},{default:a(()=>[e(W,{class:"size-6"},{default:a(()=>[e(L,{src:"@/assets/images/logo.svg",alt:"avatar"}),e(Y,null,{default:a(()=>[...o[2]||(o[2]=[h("홍길",-1)])]),_:1})]),_:1}),o[3]||(o[3]=r("div",{class:"h-8 flex flex-col"},[r("p",{class:"caption__bold"},"홍길동님"),r("span",{class:"caption text-muted"},"안녕하시와요")],-1))]),_:1}),e(we,{class:""},{default:a(()=>[e(I,null,{default:a(()=>[...o[4]||(o[4]=[h("My Account",-1)])]),_:1}),e(le),e(B,null,{default:a(()=>[e(Se),o[5]||(o[5]=h("Profile",-1))]),_:1}),e(B,null,{default:a(()=>[...o[6]||(o[6]=[h("Billing",-1)])]),_:1}),e(B,null,{default:a(()=>[...o[7]||(o[7]=[h("Team",-1)])]),_:1}),e(B,null,{default:a(()=>[...o[8]||(o[8]=[h("Subscription",-1)])]),_:1})]),_:1})]),_:1})])])]),e(V,{open:d(p),"onUpdate:open":o[1]||(o[1]=U=>he(p)?p.value=U:null)},null,8,["open"])],64)}}});z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{exportName:"default",displayName:"Header",description:"",tags:{},sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/layout/Header.vue"]});const Qa={title:"레이아웃/Layout",tags:["autodocs"],parameters:{layout:"fullscreen"}},T={name:"Index",parameters:{layout:"fullscreen"},argTypes:{sidebarOpen:{control:"boolean",description:"좌측 메뉴 열림 여부"},showPageTabs:{control:"boolean",description:"페이지탭 표시 여부"},contentLayout:{control:"radio",options:["2단","1단"],description:"내부 컨텐츠 레이아웃"}},args:{sidebarOpen:!0,showPageTabs:!0,contentLayout:"2단"},render:s=>({components:{LeftSidebar:M,Header:z,PageTabs:Sa},setup(){return{args:s}},template:`
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
                <div class="flex flex-col gap-3 p-4 bg-surface-muted rounded-md">
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
    `})},O={name:"Sidebar",render:()=>({components:{LeftSidebar:M},template:`
      <div class="h-screen flex">
        <UiSidebarProvider>
          <LeftSidebar />
        </UiSidebarProvider>
      </div>
    `})},R={name:"Header",render:()=>({components:{Header:z},template:`
      <UiSidebarProvider>
        <div class="flex flex-col w-full">
          <Header />
        </div>
      </UiSidebarProvider>
    `})};var oe,ie,re;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
                <div class="flex flex-col gap-3 p-4 bg-surface-muted rounded-md">
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
}`,...(re=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,ue,de;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,fe;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(me=R.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const Za=["MainLayout","SidebarStory","HeaderStory"];export{R as HeaderStory,T as MainLayout,O as SidebarStory,Za as __namedExportsOrder,Qa as default};
