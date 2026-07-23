import type { Meta, StoryObj } from '@storybook/vue3'
import PageSearch from '@/markup/components/accordion/PageSearch.vue'
import TablePagination from '@/markup/components/pagination/TablePagination.vue'

const meta: Meta = {
  title: '레이아웃/Modal/템플릿',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj

// ─── 공통 모달 셸 ─────────────────────────────────────────────────────────────
const shell = (title: string, body: string, footer: string, cls = 'w-120') => `
  <div class="bg-background rounded-md shadow-bottom flex flex-col ${cls}">
    <div class="flex justify-between items-center px-4 h-14 shrink-0">
      <span class="font-bold text-sm">${title}</span>
      <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
    </div>
    <div class="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 py-2">
      ${body}
    </div>
    ${footer ? `<div class="flex justify-between gap-2 p-4 shrink-0"><UiButton variant="outline">닫기</UiButton>${footer}</div>` : ''}
  </div>
`

const tableBody = `
  <p class="caption text-secondary pb-1">총 10건</p>
  <UiTable class="border-b table-fixed w-full">
    <colgroup>
      <col style="width:40px"/>
      <col/><col style="width:80px"/><col/>
      <col style="width:80px"/><col style="width:80px"/>
      <col style="width:80px"/><col/>
    </colgroup>
    <UiTableHeader class="sticky top-0 z-10">
      <UiTableRow>
        <UiTableHead><UiCheckbox /></UiTableHead>
        <UiTableHead>부서</UiTableHead>
        <UiTableHead>이름</UiTableHead>
        <UiTableHead>이메일</UiTableHead>
        <UiTableHead>직위</UiTableHead>
        <UiTableHead>직책</UiTableHead>
        <UiTableHead>상태</UiTableHead>
        <UiTableHead>연락처</UiTableHead>
      </UiTableRow>
    </UiTableHeader>
    <UiTableBody>
      <UiTableRow v-for="i in 10" :key="i">
        <UiTableCell><UiCheckbox /></UiTableCell>
        <UiTableCell>소속&gt;부서&gt;팀</UiTableCell>
        <UiTableCell class="text-center"><UiButton variant="link">홍길동</UiButton></UiTableCell>
        <UiTableCell class="text-center">user@gmail.com</UiTableCell>
        <UiTableCell class="text-center">부장</UiTableCell>
        <UiTableCell class="text-center">파트장</UiTableCell>
        <UiTableCell class="text-center"><UiBadge variant="process">재직</UiBadge></UiTableCell>
        <UiTableCell class="text-center">000-0000-0000</UiTableCell>
      </UiTableRow>
    </UiTableBody>
  </UiTable>
`

// ─── 유저 모달 (360px, 테스트) ─────────────────────────────────────────────────

export const UserModal: Story = {
  name: '유저 모달 (360px)',
  render: () => ({
    template: `
      <div class="bg-background rounded-md shadow-bottom flex flex-col w-90">
        <div class="flex justify-between items-center px-4 h-14 shrink-0">
          <span class="font-bold text-sm"></span>
          <UiButton variant="ghost" size="icon" class="ml-auto"><LucideX /></UiButton>
        </div>
        <div class="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 py-2">
          <div class="px-1 pb-6 grid gap-4">
            <section class="mx-auto grid gap-2">
              <div class="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/src/assets/images/ico/avatar-default.svg" alt="avatar" class="object-cover" />
              </div>
              <div class="flex flex-col items-center">
                <p class="title__bold mb-0.5 flex items-center gap-1">
                  홍길동
                  <img src="/src/assets/images/ico/ico-admin.svg" alt="관리자" class="size-4" title="관리자" />
                </p>
                <span class="caption text-secondary">팀장 / 파트장</span>
              </div>
            </section>
            <section class="flex flex-col gap-4">
              <dl class="view-list__item"><dt class="view-list__item-title">소속</dt><dd class="view-list__item-cont">JKND</dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">부서</dt><dd class="view-list__item-cont">JKND > thisisneverthat > 기획/생산팀  > 기획 MD </dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">이메일</dt><dd class="view-list__item-cont">user@gmail.com</dd></dl>
              <dl class="view-list__item"><dt class="view-list__item-title">연락처</dt><dd class="view-list__item-cont">010-0000-0000</dd></dl>
            </section>
          </div>
        </div>
      </div>
    `,
  }),
}

// ─── 컨펌/삭제 모달 (480px) ───────────────────────────────────────────────────

export const ConfirmDelete: Story = {
  name: '컨펌/삭제 모달 (480px)',
  render: () => ({
    template: `
      <div class="flex flex-col gap-6">
        ${shell('확인', `
          <div class="flex gap-4 mb-6">
            <p class="rounded-full bg-primary-light text-primary size-12 flex items-center justify-center flex-none"><LucideCheck class="size-6"/></p>
            <div>
              <p class="text-sm text-secondary mb-1">항목명 확인</p>
              <p>저장하시겠습니까?</p>
            </div>
          </div>
        `, '<UiButton>확인</UiButton>', 'w-120')}
        ${shell('삭제', `
          <div class="flex gap-4 mb-6">
            <p class="rounded-full bg-danger-light text-danger size-12 flex items-center justify-center flex-none"><LucideTrash2 class="size-6"/></p>
            <div>
              <p class="text-sm text-secondary mb-1">항목명 삭제</p>
              <p>삭제하시겠습니까?</p>
            </div>
          </div>
        `, '<UiButton variant="destructive">삭제</UiButton>', 'w-120')}
      </div>
    `,
  }),
}

// ─── 폼 모달 (480px) ──────────────────────────────────────────────────────────

export const FormModal: Story = {
  name: '폼 모달 (480px)',
  render: () => ({
    template: `
      ${shell('항목명', `
        <form class="py-2">
          <FormItem label="항목명" placeholder="항목명 입력" />
        </form>
      `, '<UiButton>저장</UiButton>')}
    `,
  }),
}

// ─── 파일 업로드 모달 (480px) ─────────────────────────────────────────────────

export const FileUploadModal: Story = {
  name: '파일 업로드 모달 (480px)',
  render: () => ({
    template: `
      <div class="bg-background rounded-md shadow-bottom flex flex-col w-120">
        <div class="flex justify-between items-center px-4 h-14 shrink-0">
          <span class="font-bold text-sm">파일 업로드</span>
          <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
        </div>
        <div class="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 py-2">
          <div class="mb-4 relative flex flex-col gap-4">
            <div class="border border-dashed aspect-[16/9] cursor-pointer bg-gray-100 flex flex-col items-center justify-center gap-2">
              <LucidePaperclip class="size-5 text-secondary" />
              <p class="flex items-center gap-1 font-bold">파일 첨부</p>
              <p class="text-secondary caption text-center px-6">파일을 끌어올리거나, 클릭해서 추가해 주세요.</p>
            </div>
            <div>
              <p class="caption__bold mt-4 mb-2">첨부된 파일 (3개 / 최대 5개)</p>
              <ul class="flex flex-col gap-2 list-none">
                <li class="group list-block-item h-8 hover:bg-gray-100 text-gray-400">
                  <div class="caption flex gap-2 line-through"><LucidePaperclip class="text-current size-4"/>신규브랜드_품의서_2025.pdf</div>
                  <div class="ml-auto flex items-center"><UiButton variant="ghost" size="icon" title="삭제 취소"><LucideUndo2/></UiButton></div>
                </li>
                <li class="group list-block-item h-8 hover:bg-gray-100">
                  <div class="caption flex gap-2"><LucidePaperclip class="text-secondary size-4"/>신규브랜드_품의서_2025.pdf</div>
                  <div class="ml-auto flex items-center">
                    <p class="size-8 inline-flex items-center justify-center group-hover:hidden"><LucideCheckCheck class="size-4 text-success"/></p>
                    <UiButton variant="ghost" size="icon" class="hidden group-hover:inline-flex" title="파일 삭제"><LucideTrash2/></UiButton>
                  </div>
                </li>
                <li class="group list-block-item h-8 hover:bg-gray-100 text-danger">
                  <div class="caption flex gap-2"><LucidePaperclip class="text-current size-4"/>신규브랜드_품의서_2025.pdf</div>
                  <div class="ml-auto flex items-center">
                    <p class="size-8 inline-flex items-center justify-center group-hover:hidden"><LucideAlertTriangle class="size-4 text-danger"/></p>
                    <UiButton variant="ghost" size="icon" class="hidden group-hover:inline-flex" title="파일 삭제"><LucideTrash2/></UiButton>
                  </div>
                </li>
                <li class="group list-block-item h-8 hover:bg-gray-100">
                  <div class="caption flex gap-2"><LucidePaperclip class="text-secondary size-4"/>신규브랜드_품의서_2025.pdf</div>
                  <div class="ml-auto flex items-center">
                    <p class="size-8 inline-flex items-center justify-center group-hover:hidden"><LucideCheck class="size-4 text-success"/></p>
                    <UiButton variant="ghost" size="icon" class="hidden group-hover:inline-flex" title="파일 삭제"><LucideTrash2/></UiButton>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex justify-between gap-2 p-4 shrink-0">
          <UiButton variant="outline">닫기</UiButton>
          <div class="flex gap-2">
            <UiButton variant="secondary">업로드</UiButton>
            <UiButton>저장</UiButton>
          </div>
        </div>
      </div>
    `,
  }),
}

// ─── 주소 모달 (480px) ────────────────────────────────────────────────────────

export const AddrModal: Story = {
  name: '주소 모달 (480px)',
  render: () => ({
    components: { TablePagination },
    template: `
      <div class="bg-background rounded-md shadow-bottom flex flex-col w-120 min-h-120">
        <div class="flex justify-between items-center px-4 h-14 shrink-0">
          <span class="font-bold text-sm">주소 검색</span>
          <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
        </div>
        <div class="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 py-2">
          <UiInputGroup class="mb-2">
            <UiInputGroupAddon><LucideSearch class="size-4 text-secondary" /></UiInputGroupAddon>
            <UiInputGroupInput placeholder="지번, 도로명, 건물명 입력 후 엔터" />
          </UiInputGroup>
          <div class="my-4">
            <p class="font-bold mb-2">총 100건</p>
            <ul>
              <li class="addr-list">
                <div class="border-b border-border mx-6 pt-4 pb-6 grid gap-3">
                  <p class="title__bold text-primary">04778</p>
                  <div class="grid gap-2">
                    <dl class="flex items-start gap-3">
                      <dt class="addr-list__type"><Tags variant="outline">도로명</Tags></dt>
                      <dd>
                        <ul><li class="addr-list__item">서울특별시 성동구 아차산로 12 (성수동 1가, 한국방송통신대학교 서울지역대학)</li></ul>
                      </dd>
                    </dl>
                    <dl class="flex items-start gap-3">
                      <dt class="addr-list__type"><Tags variant="outline">지번</Tags></dt>
                      <dd>
                        <p class="caption text-secondary mb-2">아래 목록에서 정확한 지번 주소를 선택 해 주세요.</p>
                        <ul class="grid gap-2">
                          <li class="addr-list__item">지번 주소 선택 안함</li>
                          <li class="addr-list__item">서울특별시 성동구 성수동 1가 000-000</li>
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </div>
              </li>
              <li class="addr-list" v-for="i in 4" :key="i">
                <div class="border-b border-border mx-6 pt-4 pb-6 grid gap-3">
                  <p class="title__bold text-primary">04778</p>
                  <div class="grid gap-2">
                    <dl class="flex items-start gap-3">
                      <dt class="addr-list__type"><Tags variant="outline">도로명</Tags></dt>
                      <dd><ul><li class="addr-list__item">서울특별시 성동구 아차산로 12 (성수동 1가, 한국방송통신대학교 서울지역대학)</li></ul></dd>
                    </dl>
                    <dl class="flex items-start gap-3">
                      <dt class="addr-list__type"><Tags variant="outline">지번</Tags></dt>
                      <dd><ul class="grid gap-2"><li class="addr-list__item">서울특별시 성동구 성수동 1가 000-000</li></ul></dd>
                    </dl>
                  </div>
                </div>
              </li>
            </ul>
            <div class="py-3 flex items-center justify-center">
              <TablePagination />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

// ─── 설정 모달 (360px / 720px) ───────────────────────────────────────────────

export const SettingModal: Story = {
  name: '설정 모달 (360px / 720px)',
  render: () => ({
    setup() {
      const variants = [true, false]
      return { variants }
    },
    template: `
    <div class="flex flex-col items-start gap-6">
      <div v-for="groupHeader in variants" :key="String(groupHeader)" class="bg-background rounded-md shadow-bottom flex flex-col" :class="groupHeader ? 'w-90' : 'w-180'">
        <div class="flex justify-between items-center px-4 h-14 shrink-0">
          <span class="font-bold text-sm">테이블 설정</span>
          <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
        </div>
        <div class="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 py-2">
          <div class="flex gap-8 pb-4">

            <!-- 고정 항목 (groupHeader=false 일때만) -->
            <div v-if="!groupHeader" class="flex flex-col gap-2 w-1/2">
              <p class="text-muted caption__bold">고정 항목</p>
              <div class="rounded-sm px-padding-sm py-6 text-muted bg-surface-muted text-center">고정된 항목이 없습니다.</div>
              <div class="list-block-item justify-between bg-primary-light">
                <span class="inline-flex items-center justify-center gap-1 size-8"><LucidePin fill="#007BFF" class="text-primary size-4"/></span>
                <p class="cursor-default">칼럼명</p>
              </div>
              <UiCollapsible :default-open="true">
                <UiCollapsibleContent class="grid gap-2">
                  <div class="list-block-item">
                    <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                    <UiCollapsibleTrigger><p>header-1</p></UiCollapsibleTrigger>
                    <div class="ml-auto flex gap-0">
                      <UiButton variant="ghost" size="icon"><LucidePinOff/></UiButton>
                    </div>
                  </div>
                  <div class="list-block-item">
                    <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                    <UiCollapsibleTrigger><p>header-2</p></UiCollapsibleTrigger>
                    <div class="ml-auto flex gap-0">
                      <UiButton variant="ghost" size="icon"><LucideEye/></UiButton>
                      <UiButton variant="ghost" size="icon"><LucidePinOff/></UiButton>
                    </div>
                  </div>
                  <div class="list-block-item item--dragging">
                    <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                    <UiCollapsibleTrigger><p>header-3</p></UiCollapsibleTrigger>
                    <div class="ml-auto flex gap-0">
                      <UiButton variant="ghost" size="icon"><LucideEye/></UiButton>
                      <UiButton variant="ghost" size="icon"><LucidePinOff/></UiButton>
                    </div>
                  </div>
                  <div class="list-block-item item--drag-target">
                    <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                    <UiCollapsibleTrigger><p>header-4</p></UiCollapsibleTrigger>
                    <div class="ml-auto flex gap-0">
                      <UiButton variant="ghost" size="icon"><LucideEye/></UiButton>
                      <UiButton variant="ghost" size="icon"><LucidePin/></UiButton>
                    </div>
                  </div>
                </UiCollapsibleContent>
              </UiCollapsible>
            </div>

            <!-- 일반 항목 -->
            <div :class="['flex flex-col gap-2', groupHeader ? 'w-full' : 'w-1/2']">
              <p v-if="groupHeader" class="text-muted caption flex items-center gap-1 justify-end mb-4">
                <LucideCircleAlert class="size-3"/> 현재 테이블에서는 고정 기능이 제공되지 않습니다.
              </p>
              <p class="text-muted caption__bold">일반 항목</p>
              <UiCollapsible :default-open="true">
                <UiCollapsibleContent class="grid gap-2">
                  <!-- 멀티레벨 헤더 -->
                  <UiCollapsible class="grid gap-2">
                    <div class="list-block-item">
                      <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                      <UiCollapsibleTrigger><p>header-1</p></UiCollapsibleTrigger>
                      <div class="ml-auto flex gap-0">
                        <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucidePin/></UiButton>
                      </div>
                    </div>
                    <UiCollapsibleContent class="grid gap-2">
                      <div class="list-block-item">
                        <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                        <UiCollapsibleTrigger class="pl-5"><p>header-1-1</p></UiCollapsibleTrigger>
                      </div>
                      <div class="list-block-item pl-10">
                        <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                        <p class="pl-5">header-1-1-1</p>
                        <div class="ml-auto flex gap-0">
                          <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucideEye/></UiButton>
                        </div>
                      </div>
                    </UiCollapsibleContent>
                  </UiCollapsible>
                  <!-- 단일 레벨 -->
                  <div class="list-block-item">
                    <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                    <p>header-2</p>
                    <div class="ml-auto flex gap-0">
                      <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucideEye/></UiButton>
                      <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucidePin/></UiButton>
                    </div>
                  </div>
                  <div class="list-block-item item--dragging">
                    <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                    <p>header-3</p>
                    <div class="ml-auto flex gap-0">
                      <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucideEye/></UiButton>
                      <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucidePin/></UiButton>
                    </div>
                  </div>
                  <div class="list-block-item item--drag-target">
                    <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                    <p>header-4</p>
                    <div class="ml-auto flex gap-0">
                      <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucideEye/></UiButton>
                      <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucidePin/></UiButton>
                    </div>
                  </div>
                  <div class="list-block-item item--drag-base">
                    <UiButton variant="ghost" size="icon" class="hover:bg-transparent hover:cursor-grab"><LucideEqual/></UiButton>
                    <p>header-5</p>
                    <div class="ml-auto flex gap-0">
                      <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucideEye/></UiButton>
                      <UiButton variant="ghost" size="icon" class="text-muted hover:text-default"><LucidePin/></UiButton>
                    </div>
                  </div>
                </UiCollapsibleContent>
              </UiCollapsible>
            </div>

          </div>
        </div>
        <div class="flex justify-between gap-2 p-4 shrink-0">
          <div class="ml-auto flex gap-2">
            <UiButton variant="outline">초기화</UiButton>
            <UiButton>저장</UiButton>
          </div>
        </div>
      </div>
    </div>
    `,
  }),
}

// ─── 이미지 업로드 모달 (720px) ───────────────────────────────────────────────

export const ImageUploadModal: Story = {
  name: '이미지 업로드 모달 (720px)',
  render: () => ({
    setup() {
      const images = [
        { state: 'deleted', src: '/src/assets/images/sample/clothes.png' },
        { state: 'success', src: '/src/assets/images/sample/clothes.png' },
        { state: 'error',   src: '/src/assets/images/sample/clothes.png' },
        { state: 'default', src: '/src/assets/images/sample/clothes.png' },
      ]
      return { images }
    },
    template: `
      <div class="bg-background rounded-md shadow-bottom flex flex-col w-180">
        <div class="flex justify-between items-center px-4 h-14 shrink-0">
          <span class="font-bold text-sm">이미지 업로드</span>
          <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
        </div>
        <div class="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 py-2">
          <div class="flex flex-col gap-4">
            <div class="w-full bg-gray-100 aspect-video flex items-center justify-center">
              <LucideImages class="size-12 text-gray-400"/>
            </div>
            <UiSeparator orientation="horizontal" class="data-[orientation=horizontal]:h-2 bg-gray-100 -mx-6 !w-auto"/>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-center">
                <p class="caption__bold">첨부된 파일 (3/5)</p>
                <span class="caption text-secondary">최대 5개 | 총 25MB 이하</span>
              </div>
              <div class="p-2 bg-gray-100 border border-dashed border-subtle relative h-28">
                <div class="flex gap-1 h-full overflow-hidden">
                  <div
                    v-for="(img, i) in images" :key="i"
                    class="p-1 basis-1/4 cursor-pointer"
                  >
                    <div :class="['aspect-video border border-border flex items-center justify-center overflow-hidden rounded-sm relative group h-full', i === 1 ? 'ring-1 ring-primary !border-primary' : '']">
                      <img :src="img.src" alt="image" class="object-cover size-full" :class="img.state === 'deleted' ? 'opacity-50' : ''" />
                      <div class="absolute right-1 top-1 size-6 flex items-center justify-center bg-background/50 rounded-full">
                        <LucideCircleMinus class="size-4 text-secondary" v-if="img.state === 'deleted'"/>
                        <LucideCheckCheck class="size-4 text-success" v-else-if="img.state === 'success'"/>
                        <LucideAlertTriangle class="size-4 text-danger" v-else-if="img.state === 'error'"/>
                        <LucideCheck class="size-4 text-success" v-else/>
                      </div>
                      <div class="bg-gray-800/75 size-full absolute top-0 left-0 hidden group-hover:inline-flex items-end p-2 text-background">
                        <div class="overflow-hidden caption">
                          <p class="truncate">minimarker-g-63.jpg</p>
                          <span>jpg, 5MB</span>
                        </div>
                        <div class="absolute right-1 top-1 size-6 flex items-center justify-center">
                          <UiButton variant="ghost" size="icon" class="text-background hover:bg-transparent" v-if="img.state === 'deleted'"><LucideUndo2/></UiButton>
                          <UiButton variant="ghost" size="icon" class="text-background hover:bg-transparent" v-else-if="img.state === 'success'"><LucideDownload/></UiButton>
                          <UiButton variant="ghost" size="icon" class="text-background hover:bg-transparent" v-else><LucideTrash2/></UiButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="caption text-danger flex items-center gap-1"><LucideAlertTriangle class="size-3" />용량 초과 (파일 당 5MB 이하)</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between gap-2 p-4 shrink-0">
          <UiButton variant="outline">닫기</UiButton>
          <div class="flex gap-2">
            <UiButton variant="secondary">업로드</UiButton>
            <UiButton>저장</UiButton>
          </div>
        </div>
      </div>
    `,
  }),
}

// ─── 데이터 추가 모달 (1040px) ────────────────────────────────────────────────

export const DataAddModal: Story = {
  name: '데이터 추가 모달 (1040px)',
  argTypes: {
    splitType: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: '선택항목 분할 타입',
    },
  },
  args: {
    splitType: 'vertical',
  },
  render: (args) => ({
    components: { PageSearch },
    setup() { return { args } },
    template: `
      <div :class="['bg-background rounded-md shadow-bottom flex flex-col w-[1040px]', args.splitType === 'vertical' ? 'h-[620px]' : '']">
        <div class="flex justify-between items-center px-4 h-14 shrink-0">
          <span class="font-bold text-sm">팀원 추가</span>
          <UiButton variant="ghost" size="icon"><LucideX /></UiButton>
        </div>

        <!-- vertical 레이아웃 -->
        <template v-if="args.splitType === 'vertical'">
          <div class="flex flex-col flex-1 min-h-0 px-6 py-2 gap-3">
            <PageSearch>
              <template #search-body>
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <UiCheckbox id="new-v" /><UiLabel for="new-v">신규 입사</UiLabel>
                  </div>
                  <UiInput class="w-60" placeholder="소속>부서>팀" />
                  <UiInput class="w-40" placeholder="이름" />
                  <UiInput class="w-40" placeholder="이메일" />
                  <UiInput class="w-40" placeholder="상태" />
                </div>
              </template>
              <template #search-footer>
                <div class="flex justify-end gap-2 w-full">
                  <UiButton variant="outline" size="sm">초기화</UiButton>
                  <UiButton size="sm">조회</UiButton>
                </div>
              </template>
            </PageSearch>
            <UiResizablePanelGroup direction="horizontal" class="gap-4 px-2 min-h-0 flex-1">
              <UiResizablePanel :default-size="75" :min-size="25" :max-size="75" class="min-h-0 flex flex-col overflow-y-auto">
                ${tableBody}
              </UiResizablePanel>
              <UiResizableHandle />
              <UiResizablePanel :default-size="25" :min-size="25" :max-size="75" class="min-h-0 flex flex-col gap-3 pt-1">
                <p class="caption">선택한 항목 <span class="caption__bold">총 3건</span></p>
                <div class="flex flex-wrap gap-2 max-h-full min-h-0 overflow-y-auto">
                  <Tags type="chip" variant="outline" closeable class="tag--resizing">
                    <span>홍길동</span>
                    <UiSeparator orientation="vertical" size="sm" />
                    <span class="tag--resizing__item--truncate">소속&gt;부서&gt;팀</span>
                  </Tags>
                  <Tags type="chip" variant="outline" closeable class="tag--resizing">
                    <span>이순신</span>
                    <UiSeparator orientation="vertical" size="sm" />
                    <span class="tag--resizing__item--truncate">소속&gt;부서&gt;팀</span>
                  </Tags>
                  <Tags type="chip" variant="outline" closeable class="tag--resizing">
                    <span>강감찬</span>
                    <UiSeparator orientation="vertical" size="sm" />
                    <span class="tag--resizing__item--truncate">소속&gt;부서&gt;팀</span>
                  </Tags>
                </div>
              </UiResizablePanel>
            </UiResizablePanelGroup>
          </div>
        </template>

        <!-- horizontal 레이아웃 -->
        <template v-else>
          <div class="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 py-2 flex flex-col gap-3">
            <PageSearch>
              <template #search-body>
                <div class="flex flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <UiCheckbox id="new-h" /><UiLabel for="new-h">신규 입사</UiLabel>
                  </div>
                  <UiInput class="w-60" placeholder="소속>부서>팀" />
                  <UiInput class="w-40" placeholder="이름" />
                  <UiInput class="w-40" placeholder="이메일" />
                  <UiInput class="w-40" placeholder="상태" />
                </div>
              </template>
              <template #search-footer>
                <div class="flex justify-end gap-2 w-full">
                  <UiButton variant="outline" size="sm">초기화</UiButton>
                  <UiButton size="sm">조회</UiButton>
                </div>
              </template>
            </PageSearch>
            <div class="min-h-80 px-2">
              ${tableBody}
            </div>
            <div class="sticky bottom-0 -mx-6 py-4 px-8 border-t border-border bg-background max-h-30 overflow-y-auto">
              <section class="grid gap-3">
                <p>선택된 항목 <span class="font-bold">총 3건</span></p>
                <div class="flex flex-wrap gap-2">
                  <Tags title="홍길동" type="chip" variant="outline" closeable />
                  <Tags title="이순신" type="chip" variant="outline" closeable />
                  <Tags title="강감찬" type="chip" variant="outline" closeable />
                </div>
              </section>
            </div>
          </div>
        </template>

        <div class="flex justify-between gap-2 p-4 shrink-0">
          <UiButton variant="outline">닫기</UiButton>
          <UiButton>등록</UiButton>
        </div>
      </div>
    `,
  }),
}
