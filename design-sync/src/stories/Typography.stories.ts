import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: '기초/Typography',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const TextStyles: Story = {
  name: '텍스트 스타일 전체',
  render: () => ({
    template: `
      <div class="flex flex-col gap-6 p-4">
        <div class="flex flex-col gap-1">
          <p class="caption text-secondary">heading1 · 24px / 600 / 1.5</p>
          <h1>Heading 1 — 페이지 대제목</h1>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-secondary">heading2 · 20px / 600 / 1.5</p>
          <h2>Heading 2 — 섹션 제목</h2>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-secondary">title · 16px / 400 / 1.5</p>
          <p class="title">Title — 카드, 모달 제목</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-secondary">title-bold · 16px / 600 / 1.5</p>
          <p class="title__bold">Title Bold — 강조 제목</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-secondary">body (기본) · 14px / 400 / 1.4</p>
          <p>Body — 일반 본문 텍스트. body는 전역 기본값으로 별도 클래스 없음.</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-secondary">body-bold · 14px / 600 / 1.4</p>
          <p class="font-bold">Body Bold — 강조 본문</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-secondary">caption · 12px / 400 / 1.4</p>
          <p class="caption">Caption — 보조 설명, 레이블</p>
        </div>
        <div class="flex flex-col gap-1">
          <p class="caption text-secondary">caption-bold · 12px / 600 / 1.4</p>
          <p class="caption__bold">Caption Bold — 강조 보조 텍스트</p>
        </div>
      </div>
    `,
  }),
}

export const HeadingTokens: Story = {
  name: 'Heading',
  render: () => ({
    template: `
      <div class="flex flex-col gap-4 p-4">
        <div class="flex items-baseline gap-4">
          <h1>Heading 1</h1>
          <span class="caption text-secondary">24px / SemiBold / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <h2>Heading 2</h2>
          <span class="caption text-secondary">20px / SemiBold / 1.5</span>
        </div>
      </div>
    `,
  }),
}

export const BodyTokens: Story = {
  name: 'Body',
  render: () => ({
    template: `
      <div class="flex flex-col gap-4 p-4">
        <div class="flex items-baseline gap-4">
          <p class="title">Title</p>
          <span class="caption text-secondary">16px / Regular / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="title__bold">Title Bold</p>
          <span class="caption text-secondary">16px / SemiBold / 1.5</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p>Body</p>
          <span class="caption text-secondary">14px / Regular / 1.4 · 전역 기본값</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="font-bold">Body Bold</p>
          <span class="caption text-secondary">14px / SemiBold / 1.4</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="caption">Caption</p>
          <span class="caption text-secondary">12px / Regular / 1.4</span>
        </div>
        <div class="flex items-baseline gap-4">
          <p class="caption__bold">Caption Bold</p>
          <span class="caption text-secondary">12px / SemiBold / 1.4</span>
        </div>
      </div>
    `,
  }),
}

export const ColorVariants: Story = {
  name: '컬러 조합',
  render: () => ({
    template: `
      <div class="flex flex-col gap-1 p-4">
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-secondary">--text-default</p>
          <p class="text-default-text">Default — 기본 본문 텍스트</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-secondary">--text-brand</p>
          <p style="color: var(--text-brand)">Brand — 브랜드 강조</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border bg-gray-600 rounded-sm">
          <p class="w-32 caption" style="color: var(--text-brand)">--text-neutral</p>
          <p style="color: var(--text-neutral)">Neutral — 반전 텍스트 (dark bg)</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-secondary">--text-muted</p>
          <p class="text-muted">Muted — 흐린 텍스트</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-secondary">--text-disabled</p>
          <p class="text-disabled-text">Disabled — 비활성화</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-secondary">--text-danger</p>
          <p class="text-danger">Danger — 오류</p>
        </div>
        <div class="flex items-center gap-4 py-2 border-b border-border">
          <p class="w-32 caption text-secondary">--text-success</p>
          <p class="text-success">Success — 성공</p>
        </div>
        <div class="flex items-center gap-4 py-2">
          <p class="w-32 caption text-secondary">--text-warning</p>
          <p class="text-warning">Warning — 경고</p>
        </div>
      </div>
    `,
  }),
}
