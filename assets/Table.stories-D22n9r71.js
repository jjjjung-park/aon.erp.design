import{_ as o,a}from"./Td-AShIOJI0.js";import{bK as I,bd as L,cc as $,bP as F,ay as G}from"./iframe-RcI2tPm4.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-FI0fEOG2.js";const T={};function O(e,C){const E=G;return I(),L(E,{class:"border-b table-fixed w-full"},{default:$(()=>[F(e.$slots,"default")]),_:3})}const j=N(T,[["render",O]]);T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{displayName:"DefaultTable",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/table/DefaultTable.vue"]});const J={title:"UI 패턴/Table",tags:["autodocs"],parameters:{layout:"padded"}},n={name:"기본",render:()=>({components:{DefaultTable:j,Th:a,Td:o},template:`
      <DefaultTable>
        <UiTableHeader>
          <UiTableRow>
            <Th data="이름" />
            <Th data="이메일" />
            <Th data="부서" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 3" :key="i">
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
          </UiTableRow>
        </UiTableBody>
      </DefaultTable>
    `})},t={name:"전체 조합",render:e=>({components:{Th:a,Td:o},setup(){return{args:e}},template:`
      <UiTable :class="['table-fixed w-full', args.secondary ? 'table-secondary' : 'border-b', args.groupTh ? 'table--group-header' : '']">
        <UiTableHeader>
          <UiTableRow v-if="args.groupTh">
            <Th colspan="1" />
            <Th colspan="2">기본정보</Th>
            <Th colspan="2">조직 현황</Th>
            <Th colspan="1" />
          </UiTableRow>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="이름" :sort="args.sort" :resizing="args.resizing" />
            <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
            <Th data="부서" :sort="args.sort" :resizing="args.resizing" />
            <Th data="상태" :sort="args.sort" :resizing="args.resizing" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 5" :key="i">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="process">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `}),argTypes:{groupTh:{control:"boolean",description:"그룹 Th — 컬럼 묶음 헤더 행 표시"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"},sort:{control:"boolean",description:"Th 정렬 버튼 표시"},resizing:{control:"boolean",description:"Th 컬럼 리사이징 핸들"}},args:{groupTh:!1,secondary:!1,sort:!1,resizing:!0}},s={name:"Th — 그룹 헤더",render:()=>({components:{Th:a,Td:o},template:`
      <UiTable class="table-fixed w-full table--group-header">
        <UiTableHeader>
          <UiTableRow>
            <Th colspan="1" />
            <Th colspan="2">기본정보</Th>
            <Th colspan="2">조직 현황</Th>
            <Th colspan="1" />
          </UiTableRow>
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
          <UiTableRow v-for="i in 3" :key="i">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="process">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `})},r={name:"Th — 인터랙티브",render:e=>({components:{Th:a},setup(){return{args:e}},template:`
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th v-bind="args" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    `}),argTypes:{data:{control:"text",description:"헤더 텍스트"},type:{control:"select",options:["default","checkbox","function"],description:"셀 타입"},sort:{control:"boolean",description:"정렬 버튼 표시"},resizing:{control:"boolean",description:"컬럼 리사이징 핸들"},checkDisabled:{control:"boolean",description:"체크박스 비활성화 (type=checkbox)"},style:{control:"text",description:"인라인 스타일 (width 등)"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{data:"컬럼명",type:"default",sort:!1,resizing:!0,checkDisabled:!1,secondary:!1}},i={name:"Th — 타입별",render:()=>({components:{Th:a},template:`
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
    `})},l={name:"Td — 인터랙티브",render:e=>({components:{Th:a,Td:o},setup(){return{args:e}},template:`
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
    `}),argTypes:{data:{control:"text",description:"셀 텍스트 (슬롯 미사용 시)"},type:{control:"select",options:["default","checkbox","function"],description:"셀 타입"},checkDisabled:{control:"boolean",description:"체크박스 비활성화 (type=checkbox)"},style:{control:"text",description:"인라인 스타일 (width 등)"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{data:"셀 내용",type:"default",checkDisabled:!1,secondary:!1}},d={name:"Td — 타입별",render:()=>({components:{Th:a,Td:o},template:`
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
            <Td><UiBadge variant="process">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `})};var c,b,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '기본',
  render: () => ({
    components: {
      DefaultTable,
      Th,
      Td
    },
    template: \`
      <DefaultTable>
        <UiTableHeader>
          <UiTableRow>
            <Th data="이름" />
            <Th data="이메일" />
            <Th data="부서" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 3" :key="i">
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
          </UiTableRow>
        </UiTableBody>
      </DefaultTable>
    \`
  })
}`,...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var h,U,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '전체 조합',
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
      <UiTable :class="['table-fixed w-full', args.secondary ? 'table-secondary' : 'border-b', args.groupTh ? 'table--group-header' : '']">
        <UiTableHeader>
          <UiTableRow v-if="args.groupTh">
            <Th colspan="1" />
            <Th colspan="2">기본정보</Th>
            <Th colspan="2">조직 현황</Th>
            <Th colspan="1" />
          </UiTableRow>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="이름" :sort="args.sort" :resizing="args.resizing" />
            <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
            <Th data="부서" :sort="args.sort" :resizing="args.resizing" />
            <Th data="상태" :sort="args.sort" :resizing="args.resizing" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow v-for="i in 5" :key="i">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="process">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    \`
  }),
  argTypes: {
    groupTh: {
      control: 'boolean',
      description: '그룹 Th — 컬럼 묶음 헤더 행 표시'
    },
    secondary: {
      control: 'boolean',
      description: 'table-secondary 클래스 적용'
    },
    sort: {
      control: 'boolean',
      description: 'Th 정렬 버튼 표시'
    },
    resizing: {
      control: 'boolean',
      description: 'Th 컬럼 리사이징 핸들'
    }
  },
  args: {
    groupTh: false,
    secondary: false,
    sort: false,
    resizing: true
  }
}`,...(u=(U=t.parameters)==null?void 0:U.docs)==null?void 0:u.source}}};var y,g,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Th — 그룹 헤더',
  render: () => ({
    components: {
      Th,
      Td
    },
    template: \`
      <UiTable class="table-fixed w-full table--group-header">
        <UiTableHeader>
          <UiTableRow>
            <Th colspan="1" />
            <Th colspan="2">기본정보</Th>
            <Th colspan="2">조직 현황</Th>
            <Th colspan="1" />
          </UiTableRow>
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
          <UiTableRow v-for="i in 3" :key="i">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="process">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    \`
  })
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var m,w,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var R,B,x;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var z,v,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var H,_,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
            <Td><UiBadge variant="process">처리중</UiBadge></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    \`
  })
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const M=["DefaultTableStory","FullTable","GroupThStory","ThInteractive","ThTypes","TdInteractive","TdTypes"];export{n as DefaultTableStory,t as FullTable,s as GroupThStory,l as TdInteractive,d as TdTypes,r as ThInteractive,i as ThTypes,M as __namedExportsOrder,J as default};
