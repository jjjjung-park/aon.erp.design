import{_ as s,a}from"./Td-CBOlp6Jf.js";import"./iframe-DooHc6g7.js";import"./preload-helper-FI0fEOG2.js";const v={title:"데이터 표시/Table",tags:["autodocs"],parameters:{layout:"padded"}},o={name:"Table — 전체 조합",render:e=>({components:{Th:a,Td:s},setup(){return{args:e}},template:`
      <UiTable :class="['table-fixed w-full', args.secondary ? 'table-secondary' : 'border-b']">
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="이름" />
            <Th data="이메일" />
            <Th data="부서" />
            <Th data="상태" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 5" :key="i">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="secondary">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `}),argTypes:{secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{secondary:!1}},t={name:"Th — 인터랙티브",render:e=>({components:{Th:a},setup(){return{args:e}},template:`
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th v-bind="args" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    `}),argTypes:{data:{control:"text",description:"헤더 텍스트"},type:{control:"select",options:["default","checkbox","function"],description:"셀 타입"},sort:{control:"boolean",description:"정렬 버튼 표시"},resizing:{control:"boolean",description:"컬럼 리사이징 핸들"},checkDisabled:{control:"boolean",description:"체크박스 비활성화 (type=checkbox)"},style:{control:"text",description:"인라인 스타일 (width 등)"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{data:"컬럼명",type:"default",sort:!1,resizing:!0,checkDisabled:!1,secondary:!1}},n={name:"Th — 타입별",render:()=>({components:{Th:a},template:`
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="기본 컬럼" />
            <Th data="정렬 컬럼" :sort="true" />
            <Th data="리사이즈 없음" :resizing="false" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    `})},r={name:"Td — 인터랙티브",render:e=>({components:{Th:a,Td:s},setup(){return{args:e}},template:`
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th :type="args.type === 'checkbox' || args.type === 'function' ? args.type : 'default'"
                :data="args.type === 'default' ? '컬럼' : ''" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow>
            <Td v-bind="args" />
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `}),argTypes:{data:{control:"text",description:"셀 텍스트 (슬롯 미사용 시)"},type:{control:"select",options:["default","checkbox","function"],description:"셀 타입"},checkDisabled:{control:"boolean",description:"체크박스 비활성화 (type=checkbox)"},style:{control:"text",description:"인라인 스타일 (width 등)"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{data:"셀 내용",type:"default",checkDisabled:!1,secondary:!1}},i={name:"Td — 타입별",render:()=>({components:{Th:a,Td:s},template:`
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="기본 텍스트" />
            <Th data="슬롯 콘텐츠" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 3" :key="i">
            <Td type="checkbox" />
            <Td data="텍스트 데이터" />
            <Td><UiBadge variant="secondary">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `})};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Table — 전체 조합',
  render: args => ({
    components: {
      Th,
      Td
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiTable :class="['table-fixed w-full', args.secondary ? 'table-secondary' : 'border-b']">
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="이름" />
            <Th data="이메일" />
            <Th data="부서" />
            <Th data="상태" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 5" :key="i">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="secondary">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    \`
  }),
  argTypes: {
    secondary: {
      control: 'boolean',
      description: 'table-secondary 클래스 적용'
    }
  },
  args: {
    secondary: false
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var T,b,p;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Th — 인터랙티브',
  render: args => ({
    components: {
      Th
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th v-bind="args" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    \`
  }),
  argTypes: {
    data: {
      control: 'text',
      description: '헤더 텍스트'
    },
    type: {
      control: 'select',
      options: ['default', 'checkbox', 'function'],
      description: '셀 타입'
    },
    sort: {
      control: 'boolean',
      description: '정렬 버튼 표시'
    },
    resizing: {
      control: 'boolean',
      description: '컬럼 리사이징 핸들'
    },
    checkDisabled: {
      control: 'boolean',
      description: '체크박스 비활성화 (type=checkbox)'
    },
    style: {
      control: 'text',
      description: '인라인 스타일 (width 등)'
    },
    secondary: {
      control: 'boolean',
      description: 'table-secondary 클래스 적용'
    }
  },
  args: {
    data: '컬럼명',
    type: 'default',
    sort: false,
    resizing: true,
    checkDisabled: false,
    secondary: false
  }
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var y,U,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Th — 타입별',
  render: () => ({
    components: {
      Th
    },
    template: \`
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="기본 컬럼" />
            <Th data="정렬 컬럼" :sort="true" />
            <Th data="리사이즈 없음" :resizing="false" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    \`
  })
}`,...(h=(U=n.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Td — 인터랙티브',
  render: args => ({
    components: {
      Th,
      Td
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th :type="args.type === 'checkbox' || args.type === 'function' ? args.type : 'default'"
                :data="args.type === 'default' ? '컬럼' : ''" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow>
            <Td v-bind="args" />
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    \`
  }),
  argTypes: {
    data: {
      control: 'text',
      description: '셀 텍스트 (슬롯 미사용 시)'
    },
    type: {
      control: 'select',
      options: ['default', 'checkbox', 'function'],
      description: '셀 타입'
    },
    checkDisabled: {
      control: 'boolean',
      description: '체크박스 비활성화 (type=checkbox)'
    },
    style: {
      control: 'text',
      description: '인라인 스타일 (width 등)'
    },
    secondary: {
      control: 'boolean',
      description: 'table-secondary 클래스 적용'
    }
  },
  args: {
    data: '셀 내용',
    type: 'default',
    checkDisabled: false,
    secondary: false
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,w,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Td — 타입별',
  render: () => ({
    components: {
      Th,
      Td
    },
    template: \`
      <UiTable>
        <UiTableHeader>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="기본 텍스트" />
            <Th data="슬롯 콘텐츠" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 3" :key="i">
            <Td type="checkbox" />
            <Td data="텍스트 데이터" />
            <Td><UiBadge variant="secondary">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    \`
  })
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const H=["FullTable","ThInteractive","ThTypes","TdInteractive","TdTypes"];export{o as FullTable,r as TdInteractive,i as TdTypes,t as ThInteractive,n as ThTypes,H as __namedExportsOrder,v as default};
