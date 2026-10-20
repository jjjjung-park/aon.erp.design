import{_ as o,a as e}from"./Td-D9oQNYDR.js";import{bP as j,bi as F,ch as G,bU as N,aB as C,J,bR as $}from"./iframe-C17cHy35.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-FI0fEOG2.js";const c={};function q(a,p){const A=C;return j(),F(A,{class:"border-b table-fixed w-full"},{default:G(()=>[N(a.$slots,"default")]),_:3})}const K=P(c,[["render",q]]);c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{displayName:"DefaultTable",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/aon.erp.design/aon.erp.design/design-sync/src/markup/components/table/DefaultTable.vue"]});const Y={title:"UI 패턴/Table",tags:["autodocs"],parameters:{layout:"padded"}},t={name:"기본",render:()=>({components:{DefaultTable:K,Th:e,Td:o},template:`
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
    `})},i={name:"전체 조합",parameters:{docs:{description:{story:"실제 화면처럼 한 테이블 안에 Status Badge(플로우), Active Badge(이진), Tag 강조도(중강조 — 고정 식별값), 액션 버튼이 함께 들어간 조합 예시."}}},render:a=>({components:{Th:e,Td:o,Tags:J},setup(){const p=$(null);return{args:a,activeId:p}},template:`
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
    `}),argTypes:{groupTh:{control:"boolean",description:"그룹 Th — 컬럼 묶음 헤더 행 표시"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"},sort:{control:"boolean",description:"Th 정렬 버튼 표시"},resizing:{control:"boolean",description:"Th 컬럼 리사이징 핸들"}},args:{groupTh:!1,secondary:!1,sort:!1,resizing:!0}},n={name:"Th — 그룹 헤더",render:()=>({components:{Th:e,Td:o},template:`
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
    `})},d={name:"Th — 인터랙티브",render:a=>({components:{Th:e},setup(){return{args:a}},template:`
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th v-bind="args" />
          </UiTableRow>
        </UiTableHeader>
      </UiTable>
    `}),argTypes:{data:{control:"text",description:"헤더 텍스트"},type:{control:"select",options:["default","checkbox","function"],description:"셀 타입"},sort:{control:"boolean",description:"정렬 버튼 표시"},resizing:{control:"boolean",description:"컬럼 리사이징 핸들"},checkDisabled:{control:"boolean",description:"체크박스 비활성화 (type=checkbox)"},style:{control:"text",description:"인라인 스타일 (width 등)"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{data:"컬럼명",type:"default",sort:!1,resizing:!0,checkDisabled:!1,secondary:!1}},l={name:"Th — 타입별",render:()=>({components:{Th:e},template:`
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
    `})},s={name:"Td — 인터랙티브",render:a=>({components:{Th:e,Td:o},setup(){return{args:a}},template:`
      <UiTable :class="args.secondary ? 'table-secondary' : ''">
        <UiTableHeader>
          <UiTableRow>
            <Th :type="args.type === 'checkbox' ? 'checkbox' : (args.type === 'function' || args.type === 'radio') ? 'function' : 'default'"
                :data="args.type === 'default' ? '컬럼' : ''" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow>
            <Td v-bind="args" />
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `}),argTypes:{data:{control:"text",description:"셀 텍스트 (슬롯 미사용 시)"},type:{control:"select",options:["default","checkbox","radio","function"],description:"셀 타입"},checkDisabled:{control:"boolean",description:"체크박스/라디오 비활성화 (type=checkbox, radio)"},radioValue:{control:"number",description:"이 행의 값 (type=radio)"},modelValue:{control:"number",description:"현재 선택된 값 — radioValue와 같으면 체크 (type=radio)"},style:{control:"text",description:"인라인 스타일 (width 등)"},secondary:{control:"boolean",description:"table-secondary 클래스 적용"}},args:{data:"셀 내용",type:"default",checkDisabled:!1,radioValue:1,modelValue:1,secondary:!1}},r={name:"Td — 타입별",render:()=>({components:{Th:e,Td:o},template:`
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
    `})},T={name:"Td — 라디오 (단일 선택)",parameters:{docs:{description:{story:'`type="radio"`는 셀마다 라디오 그룹을 하나씩 가진다. `v-model`(model-value)에는 모든 행이 **같은 값(현재 선택된 값)**을 공유하고, `radio-value`는 행마다 자기 값을 넘긴다. `model-value === radio-value`인 행만 체크된다. 헤더 첫 칸은 전체 선택이 없으므로 `Th type="function"`(빈 칸)을 쓴다.'}}},render:()=>({components:{Th:e,Td:o},setup(){return{selected:$(1)}},template:`
      <UiTable class="table-secondary table-fixed w-full">
        <UiTableHeader>
          <UiTableRow>
            <Th type="function" />
            <Th data="쇼핑몰 주문 번호 (순번)" />
            <Th data="주문자 / 연락처 · 수취인 / 연락처" />
            <Th data="주소" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow>
            <Td type="radio" v-model="selected" :radio-value="1" />
            <Td><div class="flex flex-col"><p>ORD20260802-1127100</p><p>(@101951676)</p></div></Td>
            <Td><div class="flex flex-col"><p>김초롱초롱나들이 / 000-0000-0000</p><p>김초롱초롱나들이 / 000-0000-0000</p></div></Td>
            <Td data="(456238) 서울 특별시 어딘가" />
          </UiTableRow>
          <UiTableRow>
            <Td type="radio" v-model="selected" :radio-value="2" />
            <Td><div class="flex flex-col"><p>ORD20260814-8185247</p><p>(@101402202)</p></div></Td>
            <Td><div class="flex flex-col"><p>김초롱초롱나들이 / 000-0000-0000</p><p>김초롱초롱나들이 / 000-0000-0000</p></div></Td>
            <Td data="(456238) 서울 특별시 어딘가" />
          </UiTableRow>
          <UiTableRow>
            <Td type="radio" v-model="selected" :radio-value="3" />
            <Td><div class="flex flex-col"><p>ORD20260814-8185247</p><p>(@101402201)</p></div></Td>
            <Td><div class="flex flex-col"><p>김초롱초롱나들이 / 000-0000-0000</p><p>김초롱초롱나들이 / 000-0000-0000</p></div></Td>
            <Td data="(456238) 서울 특별시 어딘가" />
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    `})};var b,U,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(U=t.parameters)==null?void 0:U.docs)==null?void 0:h.source}}};var u,g,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,m,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=(m=n.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var v,R,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var B,x,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var z,H,_;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
            <Th :type="args.type === 'checkbox' ? 'checkbox' : (args.type === 'function' || args.type === 'radio') ? 'function' : 'default'"
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
      options: ['default', 'checkbox', 'radio', 'function'],
      description: '셀 타입'
    },
    checkDisabled: {
      control: 'boolean',
      description: '체크박스/라디오 비활성화 (type=checkbox, radio)'
    },
    radioValue: {
      control: 'number',
      description: '이 행의 값 (type=radio)'
    },
    modelValue: {
      control: 'number',
      description: '현재 선택된 값 — radioValue와 같으면 체크 (type=radio)'
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
    radioValue: 1,
    modelValue: 1,
    secondary: false
  }
}`,...(_=(H=s.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var D,I,V;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(I=r.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var E,L,O;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Td — 라디오 (단일 선택)',
  parameters: {
    docs: {
      description: {
        story: '\`type="radio"\`는 셀마다 라디오 그룹을 하나씩 가진다. \`v-model\`(model-value)에는 모든 행이 **같은 값(현재 선택된 값)**을 공유하고, \`radio-value\`는 행마다 자기 값을 넘긴다. \`model-value === radio-value\`인 행만 체크된다. 헤더 첫 칸은 전체 선택이 없으므로 \`Th type="function"\`(빈 칸)을 쓴다.'
      }
    }
  },
  render: () => ({
    components: {
      Th,
      Td
    },
    setup() {
      return {
        selected: ref(1)
      };
    },
    template: \`
      <UiTable class="table-secondary table-fixed w-full">
        <UiTableHeader>
          <UiTableRow>
            <Th type="function" />
            <Th data="쇼핑몰 주문 번호 (순번)" />
            <Th data="주문자 / 연락처 · 수취인 / 연락처" />
            <Th data="주소" />
          </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
          <UiTableRow>
            <Td type="radio" v-model="selected" :radio-value="1" />
            <Td><div class="flex flex-col"><p>ORD20260802-1127100</p><p>(@101951676)</p></div></Td>
            <Td><div class="flex flex-col"><p>김초롱초롱나들이 / 000-0000-0000</p><p>김초롱초롱나들이 / 000-0000-0000</p></div></Td>
            <Td data="(456238) 서울 특별시 어딘가" />
          </UiTableRow>
          <UiTableRow>
            <Td type="radio" v-model="selected" :radio-value="2" />
            <Td><div class="flex flex-col"><p>ORD20260814-8185247</p><p>(@101402202)</p></div></Td>
            <Td><div class="flex flex-col"><p>김초롱초롱나들이 / 000-0000-0000</p><p>김초롱초롱나들이 / 000-0000-0000</p></div></Td>
            <Td data="(456238) 서울 특별시 어딘가" />
          </UiTableRow>
          <UiTableRow>
            <Td type="radio" v-model="selected" :radio-value="3" />
            <Td><div class="flex flex-col"><p>ORD20260814-8185247</p><p>(@101402201)</p></div></Td>
            <Td><div class="flex flex-col"><p>김초롱초롱나들이 / 000-0000-0000</p><p>김초롱초롱나들이 / 000-0000-0000</p></div></Td>
            <Td data="(456238) 서울 특별시 어딘가" />
          </UiTableRow>
        </UiTableBody>
      </UiTable>
    \`
  })
}`,...(O=(L=T.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const Z=["DefaultTableStory","FullTable","GroupThStory","ThInteractive","ThTypes","TdInteractive","TdTypes","TdRadio"];export{t as DefaultTableStory,i as FullTable,n as GroupThStory,s as TdInteractive,T as TdRadio,r as TdTypes,d as ThInteractive,l as ThTypes,Z as __namedExportsOrder,Y as default};
