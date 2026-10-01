import{_ as t,a}from"./Td-BNlf3Kd9.js";import{bN as L,bg as $,cf as A,bS as j,aB as F,J as N,bP as G}from"./iframe-BccxKPkU.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-FI0fEOG2.js";const T={};function C(e,c){const E=F;return L(),$(E,{class:"border-b table-fixed w-full"},{default:A(()=>[j(e.$slots,"default")]),_:3})}const J=O(T,[["render",C]]);T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{displayName:"DefaultTable",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/table/DefaultTable.vue"]});const Q={title:"UI 패턴/Table",tags:["autodocs"],parameters:{layout:"padded"}},o={name:"기본",render:()=>({components:{DefaultTable:J,Th:a,Td:t},template:`
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
    `})},i={name:"전체 조합",parameters:{docs:{description:{story:"실제 화면처럼 한 테이블 안에 Status Badge(플로우), Active Badge(이진), Tag 강조도(중강조 — 고정 식별값), 액션 버튼이 함께 들어간 조합 예시."}}},render:e=>({components:{Th:a,Td:t,Tags:N},setup(){const c=G(null);return{args:e,activeId:c}},template:`
      <UiTable :class="['table-fixed w-full', args.secondary ? 'table-secondary' : 'border-b', args.groupTh ? 'table--group-header' : '']">
        <UiTableHeader>
          <UiTableRow v-if="args.groupTh">
            <Th colspan="1" />
            <Th colspan="2">기본정보</Th>
            <Th colspan="4">조직 현황</Th>
            <Th colspan="1" />
          </UiTableRow>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="이름" :sort="args.sort" :resizing="args.resizing" />
            <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
            <Th data="부서" :sort="args.sort" :resizing="args.resizing" />
            <Th data="상태" :sort="args.sort" :resizing="args.resizing" />
            <Th data="사용 여부" :sort="args.sort" :resizing="args.resizing" />
            <Th data="구분" :sort="args.sort" :resizing="args.resizing" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow :selected="activeId === 1" @click="activeId = 1">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="process">진행중</UiBadge></Td>
            <Td><UiBadge variant="active">사용</UiBadge></Td>
            <Td><Tags type="tag" variant="info" title="0차 오더" /></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
          <UiTableRow :selected="activeId === 2" @click="activeId = 2">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="accept">완료</UiBadge></Td>
            <Td><UiBadge variant="inActive">미사용</UiBadge></Td>
            <Td><Tags type="tag" variant="info" title="1차 오더" /></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
          <UiTableRow :selected="activeId === 3" @click="activeId = 3">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="reject">반려</UiBadge></Td>
            <Td><UiBadge variant="active">사용</UiBadge></Td>
            <Td><Tags type="tag" variant="info" title="0차 오더" /></Td>
            <Td type="function">
              <UiButton variant="outline" size="sm">보기</UiButton>
            </Td>
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `}),argTypes:{groupTh:{control:"boolean",description:"그룹 Th — 컬럼 묶음 헤더 행 표시"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"},sort:{control:"boolean",description:"Th 정렬 버튼 표시"},resizing:{control:"boolean",description:"Th 컬럼 리사이징 핸들"}},args:{groupTh:!1,secondary:!1,sort:!1,resizing:!0}},n={name:"Th — 그룹 헤더",render:()=>({components:{Th:a,Td:t},template:`
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
    `})},s={name:"Th — 인터랙티브",render:e=>({components:{Th:a},setup(){return{args:e}},template:`
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th v-bind="args" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    `}),argTypes:{data:{control:"text",description:"헤더 텍스트"},type:{control:"select",options:["default","checkbox","function"],description:"셀 타입"},sort:{control:"boolean",description:"정렬 버튼 표시"},resizing:{control:"boolean",description:"컬럼 리사이징 핸들"},checkDisabled:{control:"boolean",description:"체크박스 비활성화 (type=checkbox)"},style:{control:"text",description:"인라인 스타일 (width 등)"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{data:"컬럼명",type:"default",sort:!1,resizing:!0,checkDisabled:!1,secondary:!1}},r={name:"Th — 타입별",render:()=>({components:{Th:a},template:`
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
    `})},d={name:"Td — 인터랙티브",render:e=>({components:{Th:a,Td:t},setup(){return{args:e}},template:`
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
    `}),argTypes:{data:{control:"text",description:"셀 텍스트 (슬롯 미사용 시)"},type:{control:"select",options:["default","checkbox","function"],description:"셀 타입"},checkDisabled:{control:"boolean",description:"체크박스 비활성화 (type=checkbox)"},style:{control:"text",description:"인라인 스타일 (width 등)"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{data:"셀 내용",type:"default",checkDisabled:!1,secondary:!1}},l={name:"Td — 타입별",render:()=>({components:{Th:a,Td:t},template:`
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
    `})};var b,p,U;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(U=(p=o.parameters)==null?void 0:p.docs)==null?void 0:U.source}}};var h,g,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '전체 조합',
  parameters: {
    docs: {
      description: {
        story: '실제 화면처럼 한 테이블 안에 Status Badge(플로우), Active Badge(이진), Tag 강조도(중강조 — 고정 식별값), 액션 버튼이 함께 들어간 조합 예시.'
      }
    }
  },
  render: args => ({
    components: {
      Th,
      Td,
      Tags
    },
    setup() {
      const activeId = ref<number | null>(null);
      return {
        args,
        activeId
      };
    },
    template: \`
      <UiTable :class="['table-fixed w-full', args.secondary ? 'table-secondary' : 'border-b', args.groupTh ? 'table--group-header' : '']">
        <UiTableHeader>
          <UiTableRow v-if="args.groupTh">
            <Th colspan="1" />
            <Th colspan="2">기본정보</Th>
            <Th colspan="4">조직 현황</Th>
            <Th colspan="1" />
          </UiTableRow>
          <UiTableRow>
            <Th type="checkbox" />
            <Th data="이름" :sort="args.sort" :resizing="args.resizing" />
            <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
            <Th data="부서" :sort="args.sort" :resizing="args.resizing" />
            <Th data="상태" :sort="args.sort" :resizing="args.resizing" />
            <Th data="사용 여부" :sort="args.sort" :resizing="args.resizing" />
            <Th data="구분" :sort="args.sort" :resizing="args.resizing" />
            <Th type="function" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow :selected="activeId === 1" @click="activeId = 1">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="process">진행중</UiBadge></Td>
            <Td><UiBadge variant="active">사용</UiBadge></Td>
            <Td><Tags type="tag" variant="info" title="0차 오더" /></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
          <UiTableRow :selected="activeId === 2" @click="activeId = 2">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="accept">완료</UiBadge></Td>
            <Td><UiBadge variant="inActive">미사용</UiBadge></Td>
            <Td><Tags type="tag" variant="info" title="1차 오더" /></Td>
            <Td type="function">
              <UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton>
            </Td>
          </UiTableRow>
          <UiTableRow :selected="activeId === 3" @click="activeId = 3">
            <Td type="checkbox" />
            <Td><UiSkeleton class="h-4 w-full" /></Td>
            <Td><UiSkeleton class="h-4 w-3/4" /></Td>
            <Td><UiSkeleton class="h-4 w-1/2" /></Td>
            <Td><UiBadge variant="reject">반려</UiBadge></Td>
            <Td><UiBadge variant="active">사용</UiBadge></Td>
            <Td><Tags type="tag" variant="info" title="0차 오더" /></Td>
            <Td type="function">
              <UiButton variant="outline" size="sm">보기</UiButton>
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,f,m;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(m=(f=n.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var w,k,B;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var v,R,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(R=r.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var S,z,H;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(H=(z=d.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var _,I,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const V=["DefaultTableStory","FullTable","GroupThStory","ThInteractive","ThTypes","TdInteractive","TdTypes"];export{o as DefaultTableStory,i as FullTable,n as GroupThStory,d as TdInteractive,l as TdTypes,s as ThInteractive,r as ThTypes,V as __namedExportsOrder,Q as default};
