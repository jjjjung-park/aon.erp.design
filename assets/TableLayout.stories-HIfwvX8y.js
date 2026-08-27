import{_ as t}from"./TableLayout-gLcolzbX.js";import{T as r}from"./TablePagination-CxulSNKp.js";import{_ as b,a as o}from"./Td-AShIOJI0.js";import{E as L}from"./EmptyData-CpBZOKlK.js";import{bM as s}from"./iframe-RcI2tPm4.js";import"./preload-helper-FI0fEOG2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $={title:"레이아웃/TableLayout",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{story:{height:"400px"}}},argTypes:{empty:{control:"boolean",description:"빈 데이터 상태",table:{category:"테이블 레이아웃"}},tableTop:{control:"boolean",description:"상단 액션 영역 표시",table:{category:"테이블 레이아웃"}},dataAction:{control:"boolean",description:"데이터 건수 영역",table:{category:"테이블 레이아웃"},if:{arg:"tableTop"}},tableAction:{control:"boolean",description:"테이블 액션 버튼 영역",table:{category:"테이블 레이아웃"},if:{arg:"tableTop"}},filter:{control:"boolean",description:"키워드 검색 버튼",table:{category:"테이블 레이아웃"},if:{arg:"tableTop"}},download:{control:"boolean",description:"엑셀 다운로드 버튼",table:{category:"테이블 레이아웃"},if:{arg:"tableTop"}},setting:{control:"boolean",description:"테이블 설정 버튼",table:{category:"테이블 레이아웃"},if:{arg:"tableTop"}},pagination:{control:"boolean",description:"하단 페이지네이션",table:{category:"테이블 레이아웃"}},sheetTable:{control:"boolean",description:"세컨더리 테이블",table:{category:"전체 테이블"}},checkbox:{control:"boolean",description:"체크박스 컬럼",table:{category:"전체 테이블"},if:{arg:"rowHeader",truthy:!1}},rowHeader:{control:"boolean",description:"row-header (첫 번째 컬럼)",table:{category:"전체 테이블"}},groupHeader:{control:"boolean",description:"그룹 헤더",table:{category:"헤더"}},sort:{control:"boolean",description:"정렬 버튼",table:{category:"헤더"}},resizing:{control:"boolean",description:"리사이징 핸들",table:{category:"헤더"}},pinned:{control:"boolean",description:"컬럼 고정 (체크박스 + 이름)",table:{category:"셀"}},editable:{control:"boolean",description:"에디터블 (td → FormItem)",table:{category:"셀"}}},args:{empty:!1,tableTop:!0,dataAction:!0,tableAction:!0,filter:!0,download:!0,setting:!0,pagination:!0,sheetTable:!1,checkbox:!0,rowHeader:!1,groupHeader:!1,sort:!1,resizing:!0,pinned:!1,editable:!1}},n=[{name:"홍길동",email:"hong@example.com",dept:"개발팀",role:"과장",status:"재직"},{name:"이순신",email:"lee@example.com",dept:"디자인팀",role:"차장",status:"재직"},{name:"김철수",email:"kim@example.com",dept:"마케팅팀",role:"대리",status:"휴직"},{name:"박영희",email:"park@example.com",dept:"인사팀",role:"부장",status:"재직"},{name:"최민준",email:"choi@example.com",dept:"개발팀",role:"사원",status:"재직"},{name:"정수연",email:"jung@example.com",dept:"기획팀",role:"과장",status:"재직"},{name:"강동원",email:"kang@example.com",dept:"영업팀",role:"차장",status:"퇴사"},{name:"윤아름",email:"yoon@example.com",dept:"개발팀",role:"대리",status:"재직"},{name:"임지훈",email:"lim@example.com",dept:"디자인팀",role:"사원",status:"재직"},{name:"오세진",email:"oh@example.com",dept:"마케팅팀",role:"과장",status:"휴직"}],l={name:"TableLayout — 기본",render:e=>({components:{TableLayout:t,TablePagination:r,Th:o,Td:b,EmptyData:L},setup(){const a=s(1);return{args:e,page:a,tableRows:n}},template:`
      <TableLayout v-bind="args">
        <template #table>
          <UiTable :class="['table-fixed w-full', args.empty && !args.sheetTable ? '' : 'border-b', args.sheetTable ? 'table-secondary' : '', args.groupHeader ? 'table--group-header' : '']">
            <UiTableHeader>

              <!-- 그룹 헤더 행 -->
              <UiTableRow v-if="args.groupHeader">
                <Th v-if="args.checkbox && !args.rowHeader" />
                <Th data="인적사항" colspan="2" />
                <Th data="소속" colspan="2" />
                <Th data="상태" />
                <Th type="function" />
              </UiTableRow>

              <!-- 일반 헤더 행 -->
              <UiTableRow>
                <Th v-if="args.checkbox && !args.rowHeader" type="checkbox" :class="args.pinned && !args.groupHeader ? 'pinned--left' : ''" />
                <Th data="이름" :sort="args.sort" :resizing="args.resizing" :class="[args.rowHeader ? 'table__row-header' : '', args.pinned && !args.groupHeader ? 'pinned--left' : '']" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
                <Th type="function" />
              </UiTableRow>

            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-if="args.empty">
                <UiTableCell colspan="7" class="h-60 p-0"><EmptyData :class="args.sheetTable ? '!bg-background' : ''" /></UiTableCell>
              </UiTableRow>
              <template v-else>
                <UiTableRow v-for="row in tableRows" :key="row.email">
                  <Td v-if="args.checkbox && !args.rowHeader" type="checkbox" :class="args.pinned && !args.groupHeader ? 'pinned--left' : ''" />
                  <Td :data="args.editable ? undefined : row.name" :class="[args.rowHeader ? 'table__row-header' : '', args.pinned && !args.groupHeader ? 'pinned--left' : '', 'text-center']">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.name" />
                  </Td>
                  <Td :data="args.editable ? undefined : row.email" class="text-center">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.email" />
                  </Td>
                  <Td :data="args.editable ? undefined : row.dept" class="text-center">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.dept" />
                  </Td>
                  <Td :data="args.editable ? undefined : row.role" class="text-center">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.role" />
                  </Td>
                  <Td :data="args.editable ? undefined : row.status" class="text-center">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.status" />
                  </Td>
                  <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
                </UiTableRow>
              </template>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="args.empty ? 0 : 10" />
        </template>
      </TableLayout>
    `})},B={sort:{control:"boolean",description:"Th — 정렬 버튼 표시",table:{category:"헤더"}},resizing:{control:"boolean",description:"Th — 컬럼 리사이징 핸들",table:{category:"헤더"}},checkDisabled:{control:"boolean",description:"Th/Td — 체크박스 비활성화",table:{category:"셀"}}},D={empty:!1,sort:!1,resizing:!0,checkDisabled:!1},_={sort:{control:"boolean",description:"Th — 정렬 버튼 표시",table:{category:"헤더"}},resizing:{control:"boolean",description:"Th — 컬럼 리사이징 핸들",table:{category:"헤더"}}},E={empty:!1,sort:!1,resizing:!0},i={name:"TableLayout — 세컨더리 테이블",render:e=>({components:{TableLayout:t,TablePagination:r,Th:o,Td:b},setup(){const a=s(1);return{args:e,page:a,tableRows:n}},template:`
      <TableLayout>
        <template #data-action>
          <p class="caption text-secondary">* 시트 내 테이블</p>
        </template>
        <template #table>
          <UiTable class="table-secondary table-fixed w-full">
            <UiTableHeader>
              <UiTableRow>
                <Th type="checkbox" :checkDisabled="args.checkDisabled" />
                <Th data="이름"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
                <Th type="function" />
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="row in tableRows" :key="row.email">
                <Td type="checkbox" :checkDisabled="args.checkDisabled" />
                <Td :data="row.name" />
                <Td :data="row.email" />
                <Td :data="row.dept" />
                <Td :data="row.role" />
                <Td :data="row.status" />
                <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="10" />
        </template>
      </TableLayout>
    `}),argTypes:B,args:D},d={name:"TableLayout — 그룹헤더 테이블",render:e=>({components:{TableLayout:t,TablePagination:r,Th:o,Td:b},setup(){const a=s(1);return{args:e,page:a,tableRows:n}},template:`
      <TableLayout>
        <template #table>
          <UiTable class="border-b table-fixed w-full table--group-header">
            <UiTableHeader>
              <UiTableRow>
                <Th colspan="1" />
                <Th colspan="2">인적사항</Th>
                <Th colspan="2">소속</Th>
                <Th data="상태" />
                <Th colspan="1" />
              </UiTableRow>
              <UiTableRow>
                <Th type="checkbox" :checkDisabled="args.checkDisabled" />
                <Th data="이름"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
                <Th type="function" />
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="row in tableRows" :key="row.email">
                <Td type="checkbox" :checkDisabled="args.checkDisabled" />
                <Td :data="row.name" />
                <Td :data="row.email" />
                <Td :data="row.dept" />
                <Td :data="row.role" />
                <Td :data="row.status" />
                <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="10" />
        </template>
      </TableLayout>
    `}),argTypes:B,args:D},g={name:"TableLayout — 로우헤더 테이블",render:e=>({components:{TableLayout:t,TablePagination:r,Th:o,Td:b},setup(){const a=s(1);return{args:e,page:a,tableRows:n}},template:`
      <TableLayout>
        <template #table>
          <UiTable class="border-b table-fixed w-full">
            <UiTableHeader>
              <UiTableRow>
                <Th data="항목"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="이름"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="row in tableRows" :key="row.email">
                <Td class="table__row-header" :data="row.name" />
                <Td :data="row.name" />
                <Td :data="row.email" />
                <Td :data="row.dept" />
                <Td :data="row.role" />
                <Td :data="row.status" />
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="10" />
        </template>
      </TableLayout>
    `}),argTypes:_,args:E},T={name:"TableLayout — 데이터 없음",render:()=>({components:{TableLayout:t,TablePagination:r,Th:o,EmptyData:L},setup(){return{page:s(1),tableRows:n}},template:`
      <TableLayout>
        <template #table>
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
              <UiTableRow>
                <UiTableCell colspan="7" class="h-60 p-0">
                  <EmptyData />
                </UiTableCell>
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="0" />
        </template>
      </TableLayout>
    `})};var p,c,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'TableLayout — 기본',
  render: args => ({
    components: {
      TableLayout,
      TablePagination,
      Th,
      Td,
      EmptyData
    },
    setup() {
      const page = ref(1);
      return {
        args,
        page,
        tableRows
      };
    },
    template: \`
      <TableLayout v-bind="args">
        <template #table>
          <UiTable :class="['table-fixed w-full', args.empty && !args.sheetTable ? '' : 'border-b', args.sheetTable ? 'table-secondary' : '', args.groupHeader ? 'table--group-header' : '']">
            <UiTableHeader>

              <!-- 그룹 헤더 행 -->
              <UiTableRow v-if="args.groupHeader">
                <Th v-if="args.checkbox && !args.rowHeader" />
                <Th data="인적사항" colspan="2" />
                <Th data="소속" colspan="2" />
                <Th data="상태" />
                <Th type="function" />
              </UiTableRow>

              <!-- 일반 헤더 행 -->
              <UiTableRow>
                <Th v-if="args.checkbox && !args.rowHeader" type="checkbox" :class="args.pinned && !args.groupHeader ? 'pinned--left' : ''" />
                <Th data="이름" :sort="args.sort" :resizing="args.resizing" :class="[args.rowHeader ? 'table__row-header' : '', args.pinned && !args.groupHeader ? 'pinned--left' : '']" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
                <Th type="function" />
              </UiTableRow>

            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-if="args.empty">
                <UiTableCell colspan="7" class="h-60 p-0"><EmptyData :class="args.sheetTable ? '!bg-background' : ''" /></UiTableCell>
              </UiTableRow>
              <template v-else>
                <UiTableRow v-for="row in tableRows" :key="row.email">
                  <Td v-if="args.checkbox && !args.rowHeader" type="checkbox" :class="args.pinned && !args.groupHeader ? 'pinned--left' : ''" />
                  <Td :data="args.editable ? undefined : row.name" :class="[args.rowHeader ? 'table__row-header' : '', args.pinned && !args.groupHeader ? 'pinned--left' : '', 'text-center']">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.name" />
                  </Td>
                  <Td :data="args.editable ? undefined : row.email" class="text-center">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.email" />
                  </Td>
                  <Td :data="args.editable ? undefined : row.dept" class="text-center">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.dept" />
                  </Td>
                  <Td :data="args.editable ? undefined : row.role" class="text-center">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.role" />
                  </Td>
                  <Td :data="args.editable ? undefined : row.status" class="text-center">
                    <FormItem v-if="args.editable" class="h-auto" :placeholder="row.status" />
                  </Td>
                  <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
                </UiTableRow>
              </template>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="args.empty ? 0 : 10" />
        </template>
      </TableLayout>
    \`
  })
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,u,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'TableLayout — 세컨더리 테이블',
  render: args => ({
    components: {
      TableLayout,
      TablePagination,
      Th,
      Td
    },
    setup() {
      const page = ref(1);
      return {
        args,
        page,
        tableRows
      };
    },
    template: \`
      <TableLayout>
        <template #data-action>
          <p class="caption text-secondary">* 시트 내 테이블</p>
        </template>
        <template #table>
          <UiTable class="table-secondary table-fixed w-full">
            <UiTableHeader>
              <UiTableRow>
                <Th type="checkbox" :checkDisabled="args.checkDisabled" />
                <Th data="이름"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
                <Th type="function" />
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="row in tableRows" :key="row.email">
                <Td type="checkbox" :checkDisabled="args.checkDisabled" />
                <Td :data="row.name" />
                <Td :data="row.email" />
                <Td :data="row.dept" />
                <Td :data="row.role" />
                <Td :data="row.status" />
                <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="10" />
        </template>
      </TableLayout>
    \`
  }),
  argTypes: thTdArgTypes,
  args: thTdArgs
}`,...(w=(u=i.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var y,U,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'TableLayout — 그룹헤더 테이블',
  render: args => ({
    components: {
      TableLayout,
      TablePagination,
      Th,
      Td
    },
    setup() {
      const page = ref(1);
      return {
        args,
        page,
        tableRows
      };
    },
    template: \`
      <TableLayout>
        <template #table>
          <UiTable class="border-b table-fixed w-full table--group-header">
            <UiTableHeader>
              <UiTableRow>
                <Th colspan="1" />
                <Th colspan="2">인적사항</Th>
                <Th colspan="2">소속</Th>
                <Th data="상태" />
                <Th colspan="1" />
              </UiTableRow>
              <UiTableRow>
                <Th type="checkbox" :checkDisabled="args.checkDisabled" />
                <Th data="이름"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
                <Th type="function" />
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="row in tableRows" :key="row.email">
                <Td type="checkbox" :checkDisabled="args.checkDisabled" />
                <Td :data="row.name" />
                <Td :data="row.email" />
                <Td :data="row.dept" />
                <Td :data="row.role" />
                <Td :data="row.status" />
                <Td type="function"><UiButton variant="ghost" size="icon-sm"><LucideEllipsis /></UiButton></Td>
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="10" />
        </template>
      </TableLayout>
    \`
  }),
  argTypes: thTdArgTypes,
  args: thTdArgs
}`,...(f=(U=d.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var z,R,x;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'TableLayout — 로우헤더 테이블',
  render: args => ({
    components: {
      TableLayout,
      TablePagination,
      Th,
      Td
    },
    setup() {
      const page = ref(1);
      return {
        args,
        page,
        tableRows
      };
    },
    template: \`
      <TableLayout>
        <template #table>
          <UiTable class="border-b table-fixed w-full">
            <UiTableHeader>
              <UiTableRow>
                <Th data="항목"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="이름"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="이메일" :sort="args.sort" :resizing="args.resizing" />
                <Th data="부서"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="직책"   :sort="args.sort" :resizing="args.resizing" />
                <Th data="상태"   :sort="args.sort" :resizing="args.resizing" />
              </UiTableRow>
            </UiTableHeader>
            <UiTableBody>
              <UiTableRow v-for="row in tableRows" :key="row.email">
                <Td class="table__row-header" :data="row.name" />
                <Td :data="row.name" />
                <Td :data="row.email" />
                <Td :data="row.dept" />
                <Td :data="row.role" />
                <Td :data="row.status" />
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="10" />
        </template>
      </TableLayout>
    \`
  }),
  argTypes: thArgTypes,
  args: thArgs
}`,...(x=(R=g.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var k,H,v;T.parameters={...T.parameters,docs:{...(k=T.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'TableLayout — 데이터 없음',
  render: () => ({
    components: {
      TableLayout,
      TablePagination,
      Th,
      EmptyData
    },
    setup() {
      const page = ref(1);
      return {
        page,
        tableRows
      };
    },
    template: \`
      <TableLayout>
        <template #table>
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
              <UiTableRow>
                <UiTableCell colspan="7" class="h-60 p-0">
                  <EmptyData />
                </UiTableCell>
              </UiTableRow>
            </UiTableBody>
          </UiTable>
        </template>
        <template #pagination>
          <TablePagination v-model:page="page" :total="0" />
        </template>
      </TableLayout>
    \`
  })
}`,...(v=(H=T.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};const j=["Default","SecondaryTable","GroupHeaderTable","RowHeaderTable","EmptyTable"];export{l as Default,T as EmptyTable,d as GroupHeaderTable,g as RowHeaderTable,i as SecondaryTable,j as __namedExportsOrder,$ as default};
