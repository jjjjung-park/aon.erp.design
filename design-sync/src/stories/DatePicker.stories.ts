import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DatePicker from '@/markup/components/datePicker/DatePicker.vue'
import DateRange from '@/markup/components/datePicker/DateRange.vue'
import YearPicker from '@/ui/aon/year-picker/index.vue'
import YearRange from '@/ui/aon/year-range/index.vue'

const meta: Meta = {
  title: 'UI 패턴/DatePicker',
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
    components: { DatePicker, DateRange, YearPicker, YearRange },
    setup() {
      const dateValue = ref('')
      const yearOpen = ref(false)
      const yearValue = ref<any>(null)
      const yearRangeOpen = ref(false)
      const yearRangeValue = ref<{ start: any; end: any }>({ start: null, end: null })
      return { args, dateValue, yearOpen, yearValue, yearRangeOpen, yearRangeValue }
    },
    template: `
      <div class="w-60">
        <!-- 날짜 -->
        <DatePicker
          v-if="args.pickerType === '날짜'"
          v-model="dateValue"
          placeholder="날짜를 선택해 주세요"
        />

        <!-- 날짜 범위 -->
        <DateRange
          v-else-if="args.pickerType === '날짜 범위'"
        />

        <!-- 년도 -->
        <UiPopover v-else-if="args.pickerType === '년도'" v-model:open="yearOpen">
          <UiPopoverTrigger as-child>
            <div tabindex="0"
                :class="['flex gap-1 justify-between items-center border-1 rounded-sm px-padding-xs bg-background w-full h-8 focus-visible:ring-ring/50',
                yearOpen ? 'border-primary' : 'border-border']">
              <p :class="['flex items-center gap-1', !yearValue ? 'text-disabled-text' : '']">
                <LucideCalendar class="size-4 text-muted flex-none" />
                {{ yearValue ? yearValue.year + '년' : '년도를 선택해 주세요' }}
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="inline-icon" @click.prevent.stop="yearValue = null" :disabled="!yearValue">
                <LucideX :class="[!yearValue ? 'text-transparent' : 'text-muted']" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <YearPicker v-model="yearValue" @update:model-value="yearOpen = false" />
          </UiPopoverContent>
        </UiPopover>

        <!-- 년도 범위 -->
        <UiPopover v-else-if="args.pickerType === '년도 범위'" v-model:open="yearRangeOpen">
          <UiPopoverTrigger as-child>
            <div tabindex="0"
                :class="['flex gap-1 justify-between items-center border-1 rounded-sm px-padding-xs bg-background w-full h-8 focus-visible:ring-ring/50',
                yearRangeOpen ? 'border-primary' : 'border-border']">
              <p :class="['flex items-center gap-1', !yearRangeValue.start ? 'text-disabled-text' : '']">
                <LucideCalendar class="size-4 text-muted flex-none" />
                <template v-if="yearRangeValue.start">
                  {{ yearRangeValue.start.year }}년
                  <template v-if="yearRangeValue.end"> - {{ yearRangeValue.end.year }}년</template>
                </template>
                <template v-else>년도 범위를 선택해 주세요</template>
              </p>
              <UiButton variant="ghost" class="hover:bg-transparent" size="inline-icon" @click.prevent.stop="yearRangeValue = { start: null, end: null }" :disabled="!yearRangeValue.start && !yearRangeValue.end">
                <LucideX :class="[(!yearRangeValue.start && !yearRangeValue.end) ? 'text-transparent' : 'text-muted']" />
              </UiButton>
            </div>
          </UiPopoverTrigger>
          <UiPopoverContent class="w-auto p-0" @open-auto-focus.prevent>
            <YearRange v-model="yearRangeValue" @update:model-value="val => { if (val.start && val.end) yearRangeOpen = false }" />
          </UiPopoverContent>
        </UiPopover>
      </div>
    `,
  }),
}
