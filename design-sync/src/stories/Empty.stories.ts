import type { Meta, StoryObj } from '@storybook/vue3'
import EmptyData from '@/markup/components/empty/EmptyData.vue'
import EmptyPage from '@/markup/components/empty/EmptyPage.vue'

// EmptyData / EmptyPage 모두 외부 props 없음
const meta: Meta = {
  title: 'UI 패턴/Empty',
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
export default meta

export const Data: StoryObj = {
  name: '데이터 없음 화면 - 기본',
  render: () => ({
    components: { EmptyData },
    template: `
      <EmptyData class="rounded-sm !h-30"/>
    `,
  }),
}



export const ListEmpty: StoryObj = {
  name: '리스트 없음 - 분할화면 좌측 리스트 없음',
  render: () => ({
    components: { EmptyData },
    template: `
      <EmptyData class="rounded-sm !h-20 !w-60"/>
    `,
  }),
}

export const NotificationEmpty: StoryObj = {
  name: '리스트 없음 — 알림 리스트 없음',
  render: () => ({
    components: { EmptyData },
    template: `
      <EmptyData class="!h-35 !bg-background text-center flex-none">
        <LucideInfo class="size-4"/>
        알림은 30일전 내용 까지만 확인이 가능합니다.
      </EmptyData>
    `,
  }),
}

export const PageTableEmpty: StoryObj = {
  name: '데이터 없음 — 바닥 테이블 데이터 없음',
  render: () => ({
    components: { EmptyData },
    template: `
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
    `,
  }),
}

export const SheetTableEmpty: StoryObj = {
  name: '데이터 없음 — 시트 테이블 데이터 없음',
  render: () => ({
    components: { EmptyData },
    template: `
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
    `,
  }),
}

export const FullEmpty: StoryObj = {
  name: '데이터 없음 — 바닥 전체화면 데이터 없음',
  parameters: { layout: 'fullscreen' },
  render: () => ({
    components: { EmptyData },
    template: `
      <section class="w-full h-full flex-1 bg-surface-muted py-40">
        <EmptyData>
          <LucideInfo/>
          <h2>데이터가 없습니다</h2>
          <p>목록에서 데이터를 선택해 주세요</p>
        </EmptyData>
      </section>
    `,
  }),
}

export const NotFound: StoryObj = {
  name: 'Empty — 404',
  parameters: { layout: 'fullscreen' },
  render: () => ({
    components: { EmptyPage },
    template: `
      <div class="h-screen flex items-center justify-center">
        <EmptyPage />
      </div>
    `,
  }),
}
