import { computed } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import Tags from '@/markup/components/tag/Tags.vue'

const meta: Meta = {
  title: '기초/Tag',
  component: Tags,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle:'개발 : tag - 디자인 : label / 개발 : chip - 디자인 : filter',
      description: {
        component: 'Tags는 카테고리·칩·라벨링 3가지 용도로 쓰인다. 필터/선택은 Chip, 강조도·체크 표시는 Tag 강조도(Emphasis), 자유 색상 카테고리는 variant="category"를 참고.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['tag', 'chip'],
      description: '타입',
    },
    tagVariant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'info'],
      description: 'variant',
      if: { arg: 'type', eq: 'tag' },
    },
    chipVariant: {
      control: 'select',
      options: ['default', 'secondary', 'outline'],
      description: 'variant',
      if: { arg: 'type', eq: 'chip' },
    },
    title:     { control: 'text',    description: '태그 텍스트' },
    closeable: { control: 'boolean', description: '닫기 버튼 표시', if: { arg: 'type', eq: 'chip' } },
    disabled:  { control: 'boolean', description: '비활성화',       if: { arg: 'type', eq: 'chip' } },
  },
  args: {
    type: 'tag',
    tagVariant: 'default',
    chipVariant: 'secondary',
    title: '태그',
    closeable: false,
    disabled: false,
  },
}
export default meta
type Story = StoryObj<{ type: string; tagVariant: string; chipVariant: string; title: string; closeable: boolean; disabled: boolean }>

export const Default: Story = {
  name: 'Tags — 인터랙티브',
  render: (args) => ({
    components: { Tags },
    setup() {
      const variant = computed(() => args.type === 'chip' ? args.chipVariant : args.tagVariant)
      return { args, variant }
    },
    template: `<Tags :type="args.type" :variant="variant" :title="args.title" :closeable="args.closeable" :disabled="args.type === 'chip' ? args.disabled : undefined" />`,
  }),
}

export const Chip: Story = {
  name: 'Chip — filter',
  parameters: {
    docs: {
      description: {
        story: '필터·다중 선택 목록에서 고른 항목을 표시할 때 사용. 닫기 버튼으로 선택을 해제할 수 있다.',
      },
    },
  },
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="chip" variant="default"   title="선택완료된 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">선택완료된 태그</p></template>
        </Tags>
        <Tags type="chip" variant="secondary" title="선택한 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">선택한 태그</p></template>
        </Tags>
        <Tags type="chip" variant="outline"   title="미선택 태그"  :closeable="true"/>
        <Tags type="chip" :disabled="true" title="비활성 태그" :closeable="true">
          <template #default><LucideCheck class="size-3 shrink-0"/><p class="truncate">비활성 태그</p></template>
        </Tags>
      </div>
    `,
  }),
}

export const TagLevel: Story = {
  name: 'Tag — label (강조도)',
  parameters: {
    docs: {
      description: {
        story: `이 라벨이 화면에서 얼마나 시각적 무게를 가져야 하는지를 나타낸다.

- 저강조(low) — 히스토리성/부가정보. 있어도 그만인 값 (예: 등록일)
- 중강조(middle) — 계속 눈이 가야 하는 고정 식별값 (예: n차 오더)
- 고강조(high) — 핵심 식별값 (예: 스타일코드)

Checked(secondary)는 강조도 축이 아니라 선택/완료 여부를 나타내는 별도의 상태 표시.`,
      },
    },
  },
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="tag" variant="secondary">
          <LucideCheck class="size-3 shrink-0"/><span class="truncate">Checked</span>
        </Tags>
        <Tags type="tag" variant="default"   title="스타일코드" />
        <Tags type="tag" variant="info"      title="n차 오더" />
        <Tags type="tag" variant="outline"   title="등록일" />

      </div>
    `,
  }),
}

export const Tag: Story = {
  name: 'Tag — label (카테고리 색상)',
  parameters: {
    docs: {
      description: {
        story: 'variant="category"는 배경/텍스트/테두리를 currentColor로 위임한다. 토큰 컬러 외 컬러도 가능하며 class로 자유롭게 지정 — 카테고리별 색상이 계속 늘어나는 경우 이 방식으로 대응한다.',
      },
    },
  },
  render: () => ({
    components: { Tags },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Tags type="tag" variant="category" class="bg-primary-light text-primary"  title="label" />
        <Tags type="tag" variant="category" class="bg-[#EE00FF] text-neutral"  title="label" />
        <Tags type="tag" variant="category" class="bg-[#FFF9E8] text-[#A88A00]"  title="label" />
        <Tags type="tag" variant="category" class="bg-surface-muted text-[#FF8083]" >
          <LucideCircleCheck class="size-3"/><span>label</span>
        </Tags>
      </div>
    `,
  }),
}
