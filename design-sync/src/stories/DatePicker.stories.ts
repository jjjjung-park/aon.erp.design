import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DatePicker from '@/markup/components/datePicker/DatePicker.vue'
import DateRange from '@/markup/components/datePicker/DateRange.vue'

const meta: Meta = {
  title: '데이터 입력/DatePicker',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    pickerType: {
      control: 'radio',
      options: ['년도', '년도 범위', '날짜', '날짜 범위'],
      description: '선택 타입',
    },
  },
  args: {
    pickerType: '날짜',
  },
}
export default meta
type Story = StoryObj<{ pickerType: '년도' | '년도 범위' | '날짜' | '날짜 범위' }>

export const Default: Story = {
  name: 'DatePicker',
  render: (args) => ({
    components: { DatePicker, DateRange },
    setup() {
      const yearOpen = ref(false)
      const yearValue = ref<any>(null)
      const yearRangeOpen = ref(false)
      const yearRangeValue = ref<{ start: any; end: any }>({ start: null, end: null })
      return { args, yearOpen, yearValue, yearRangeOpen, yearRangeValue }
    },
    template: `
      <div class="w-60">
        <!-- 날짜 -->
        <DatePicker
          v-if="args.pickerType === '날짜'"
          placeholder="날짜를 선택해 주세요"
        />

        <!-- 날짜 범위 -->
        <DateRange
          v-else-if="args.pickerType === '날짜 범위'"
        />

        <!-- 년도 -->
        <UiPopover v-else-if="args.pickerType === '년도'" v-model:open="yearOpen">
          <UiPopoverTrigger as-child>
            <div class="flex gap-2 justify-between items-center border border-border rounded-sm h-8 px-3 bg-background w-full cursor-pointer hover:border-primary transition-colors">
              <p class="flex items-center gap-2" :class="!yearValue ? 'text-disabled-text' : 'text-default-text'">
                <LucideCalendar class="size-4 text-secondary flex-none" />
                {{ yearValue ? yearValue.year + '년' : '년도를 선택해 주세요' }}
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="icon-sm" @click.prevent.stop="yearValue = null">
                <LucideX class="size-4" :class="!yearValue ? 'text-transparent' : 'text-secondary'" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <UiDatePicker v-model="yearValue" @update:model-value="yearOpen = false" />
          </UiPopoverContent>
        </UiPopover>

        <!-- 년도 범위 -->
        <UiPopover v-else-if="args.pickerType === '년도 범위'" v-model:open="yearRangeOpen">
          <UiPopoverTrigger as-child>
            <div class="flex gap-2 justify-between items-center border border-border rounded-sm h-8 px-3 bg-background w-full cursor-pointer hover:border-primary transition-colors">
              <p class="flex items-center gap-2" :class="!yearRangeValue.start ? 'text-disabled-text' : 'text-default-text'">
                <LucideCalendar class="size-4 text-secondary flex-none" />
                <template v-if="yearRangeValue.start">
                  {{ yearRangeValue.start.year }}년
                  <template v-if="yearRangeValue.end"> - {{ yearRangeValue.end.year }}년</template>
                </template>
                <template v-else>년도 범위를 선택해 주세요</template>
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="icon-sm" @click.prevent.stop="yearRangeValue = { start: null, end: null }">
                <LucideX class="size-4" :class="!yearRangeValue.start ? 'text-transparent' : 'text-secondary'" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <UiYearRange v-model="yearRangeValue" @update:model-value="val => { if (val.start && val.end) yearRangeOpen = false }" />
          </UiPopoverContent>
        </UiPopover>
      </div>
    `,
  }),
}
