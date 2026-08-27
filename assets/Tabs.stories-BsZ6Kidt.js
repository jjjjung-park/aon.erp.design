import{_ as B,a as i,b as U}from"./PageTabs-DEPATQl7.js";import{bM as c}from"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";const S={title:"UI 패턴/Tabs",component:i,tags:["autodocs"],argTypes:{tabList:{control:"object",description:"탭 목록 ({ label, value, active, disabled? }[])"}},args:{tabList:[{label:"전체",value:"all",active:!0,disabled:!1,count:24},{label:"진행중",value:"process",active:!1,disabled:!1,count:12},{label:"완료",value:"done",active:!1,disabled:!1,count:8},{label:"비활성",value:"disabled",active:!1,disabled:!0,count:0}]}},x=(a,e)=>e==="primary"?a.disabled?"bg-surface-muted text-muted opacity-50":a.active?"bg-primary-light text-primary":"bg-surface-muted text-muted":a.disabled?"bg-subtle text-muted opacity-50":a.active?"bg-surface-muted text-muted":"bg-subtle text-muted opacity-50",n={name:"LineTabs — primary",render:a=>({components:{LineTabs:i},setup(){const e=c(a.tabList.map((t,s)=>({...t,active:s===0})));return{tabs:e,onChange:t=>{e.value=e.value.map(s=>({...s,active:s.value===t}))},badgeClass:x}},template:`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="primary" @change="onChange">
          <template #default="{ tab }">
            <span>{{ tab.label }}</span>
            <UiBadge size="count" :class="badgeClass(tab, 'primary')">{{ tab.count }}</UiBadge>
          </template>
        </LineTabs>
      </div>
    `})},r={name:"LineTabs — secondary",render:a=>({components:{LineTabs:i},setup(){const e=c(a.tabList.map((t,s)=>({...t,active:s===0})));return{tabs:e,onChange:t=>{e.value=e.value.map(s=>({...s,active:s.value===t}))},badgeClass:x}},template:`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="secondary" @change="onChange">
          <template #default="{ tab }">
            <span>{{ tab.label }}</span>
            <UiBadge size="count" :class="badgeClass(tab, 'secondary')">{{ tab.count }}</UiBadge>
          </template>
        </LineTabs>
      </div>
    `})},l={name:"BoxTabs",render:()=>({components:{BoxTabs:B},setup(){const a=c([{label:"전체",value:"all",active:!0,disabled:!1},{label:"진행중",value:"process",active:!1,disabled:!1},{label:"완료",value:"done",active:!1,disabled:!1},{label:"비활성",value:"disabled",active:!1,disabled:!0}]);return{tabs:a,onChange:o=>{a.value=a.value.map(t=>({...t,active:t.value===o}))}}},template:'<BoxTabs :tab-list="tabs" @change="onChange" />'})},b={name:"PageTabs",render:()=>({components:{PageTabs:U},template:"<PageTabs />"})};var d,u,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'LineTabs — primary',
  render: args => ({
    components: {
      LineTabs
    },
    setup() {
      const tabs = ref(args.tabList.map((t: any, i: number) => ({
        ...t,
        active: i === 0
      })));
      const onChange = (val: string) => {
        tabs.value = tabs.value.map((t: any) => ({
          ...t,
          active: t.value === val
        }));
      };
      return {
        tabs,
        onChange,
        badgeClass
      };
    },
    template: \`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="primary" @change="onChange">
          <template #default="{ tab }">
            <span>{{ tab.label }}</span>
            <UiBadge size="count" :class="badgeClass(tab, 'primary')">{{ tab.count }}</UiBadge>
          </template>
        </LineTabs>
      </div>
    \`
  })
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,v,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'LineTabs — secondary',
  render: args => ({
    components: {
      LineTabs
    },
    setup() {
      const tabs = ref(args.tabList.map((t: any, i: number) => ({
        ...t,
        active: i === 0
      })));
      const onChange = (val: string) => {
        tabs.value = tabs.value.map((t: any) => ({
          ...t,
          active: t.value === val
        }));
      };
      return {
        tabs,
        onChange,
        badgeClass
      };
    },
    template: \`
      <div class="border-b border-border">
        <LineTabs :tab-list="tabs" type="secondary" @change="onChange">
          <template #default="{ tab }">
            <span>{{ tab.label }}</span>
            <UiBadge size="count" :class="badgeClass(tab, 'secondary')">{{ tab.count }}</UiBadge>
          </template>
        </LineTabs>
      </div>
    \`
  })
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,T,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'BoxTabs',
  render: () => ({
    components: {
      BoxTabs
    },
    setup() {
      const tabs = ref([{
        label: '전체',
        value: 'all',
        active: true,
        disabled: false
      }, {
        label: '진행중',
        value: 'process',
        active: false,
        disabled: false
      }, {
        label: '완료',
        value: 'done',
        active: false,
        disabled: false
      }, {
        label: '비활성',
        value: 'disabled',
        active: false,
        disabled: true
      }]);
      const onChange = (val: string) => {
        tabs.value = tabs.value.map(t => ({
          ...t,
          active: t.value === val
        }));
      };
      return {
        tabs,
        onChange
      };
    },
    template: \`<BoxTabs :tab-list="tabs" @change="onChange" />\`
  })
}`,...(y=(T=l.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var L,h,C;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'PageTabs',
  render: () => ({
    components: {
      PageTabs
    },
    template: \`<PageTabs />\`
  })
}`,...(C=(h=b.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const D=["Line","LineDefault","Box","Page"];export{l as Box,n as Line,r as LineDefault,b as Page,D as __namedExportsOrder,S as default};
