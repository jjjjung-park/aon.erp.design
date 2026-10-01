import type { Meta, StoryObj } from '@storybook/vue3'
import PageSearch from "@/markup/components/accordion/PageSearch.vue";

const meta: Meta = {
  title: 'UI 패턴/Accordion',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj

export const Search: Story = {
  name: '검색',
  render: () => ({
    components: { PageSearch },
    template: `
      <PageSearch>
        <template #search-body>
          <div class="flex flex-wrap flex-row gap-2">
            <UiSkeleton class="h-10 w-1/5" v-for="n in 11" :key="n" />
          </div>
        </template>
      </PageSearch>`,
  }),
}

export const SheetAccordion: Story = {
  name: '시트 아코디언',
  render: () => ({
    template: `
      <UiAccordion class="w-full border-1 border-border rounded-md" collapsible type="single" default-value="style">
        <UiAccordionItem value="style">
          <UiAccordionTrigger class="text-sm px-5 py-3">아코디언 타이틀</UiAccordionTrigger>
          <UiAccordionContent class="list-layout--grid px-5 pb-3">
            <UiSkeleton class="h-4 w-full" v-for="n in 4" :key="n" />
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    `,
  }),
}

export const ModalAccordion: Story = {
  name: '모달 아코디언',
  render: () => ({
    template: `
      <UiAccordion class="w-full rounded-sm bg-surface-muted px-3 py-2" collapsible type="single" :default-value="'sku1'">
        <UiAccordionItem value="sku1" class="grid gap-3" >
          <UiAccordionTrigger class="caption text-muted" icon-class="size-4">
            <p class="text-default flex items-center  gap-2">
              <span>아코디언 타이틀</span>
              <UiSeparator orientation="vertical" class="h-4 bg-border"/>
              <span>5건</span>
            </p>
          </UiAccordionTrigger>
          <UiAccordionContent>
            <div class="flex flex-col gap-2 pb-2">
              <UiSkeleton class="h-4 w-full" v-for="n in 4" :key="n" />
            </div>
          </UiAccordionContent>
        </UiAccordionItem>
      </UiAccordion>
    `,
  }),
}
