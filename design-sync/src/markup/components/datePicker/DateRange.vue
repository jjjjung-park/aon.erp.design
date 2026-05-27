<template>
  <UiPopover>
    <UiPopoverTrigger as-child :class="cn({'border-danger':ariaInvalid}, props.class)"  :aria-invalid="ariaInvalid">
      <div class="flex gap-2 justify-between items-center border-1 border-border rounded-sm h-8 min-w-60 pl-2" >

        <p class="flex items-center gap-2" :class="!value && 'text-disabled-text'">
          <LucideCalendar class="size-4 text-secondary"/>
          <template v-if="value.start">
            <template v-if="value.end">
              {{
                formatter.custom(toDate(value.start), {
                  dateStyle: "medium",
                })
              }}
              -
              {{
                formatter.custom(toDate(value.end), {
                  dateStyle: "medium",
                })
              }}
            </template>

            <template v-else>
              {{
                formatter.custom(toDate(value.start), {
                  dateStyle: "medium",
                })
              }}
            </template>
          </template>

          <template v-else>
            날짜를 선택해 주세요
          </template>
        </p>
        <UiButton variant="ghost" class="hover:bg-transparent" size="icon-sm">
          <LucideX class="size-4" :class="!value ? 'text-transparent':'text-secondary'"/>
        </UiButton>
      </div>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-auto p-0" >
      <UiRangeCalendar
        locale="ko"
        v-model="value"
        class="p-3"
        :number-of-months="2"
        :week-starts-on="0"
        disable-days-outside-current-view
        :min-value="minDate"
        :max-value="maxDate"
        @update:model-value="change"
      >
      </UiRangeCalendar>
    </UiPopoverContent>
  </UiPopover>
</template>

<script setup lang="ts">
import type {HTMLAttributes, Ref} from "vue"
import {cn} from "@/lib/utils.ts";

import  { type DateValue, parseDate } from "@internationalized/date"
import type { DateRange } from "reka-ui"
import type { Grid } from "reka-ui/date"

import {
  CalendarDate,
  isEqualMonth,
} from "@internationalized/date"
import {  useDateFormatter } from "reka-ui"
import { createMonth, toDate } from "reka-ui/date"
import { ref, watch } from "vue"
const {format} = useDate()
const props = defineProps<{
  class?: HTMLAttributes["class"]
  ariaInvalid?: boolean
  min?: string | Date
  max?: string | Date

}>()


const value = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
}) as Ref<DateRange>

const locale = ref("ko")
const formatter = useDateFormatter(locale.value)

const placeholder = ref(value.value.start) as Ref<DateValue>
const secondMonthPlaceholder = ref(value.value.end) as Ref<DateValue>

const firstMonth = ref(
  createMonth({
    dateObj: placeholder.value,
    locale: locale.value,
    fixedWeeks: true,
    weekStartsOn: 0,
  }),
) as Ref<Grid<DateValue>>
const secondMonth = ref(
  createMonth({
    dateObj: secondMonthPlaceholder.value,
    locale: locale.value,
    fixedWeeks: true,
    weekStartsOn: 0,
  }),
) as Ref<Grid<DateValue>>

const minDate = computed<DateValue>(() => {
  if (props.min) {
    return parseDate(format(props.min, 'YYYY-MM-DD'))
  }
  return null
})
const maxDate = computed<DateValue>(() => {
  if (props.max) {
    return parseDate(format(props.max, 'YYYY-MM-DD'))
  }
  return null
})

const change = (date: DateRange): void => {
  if (date.start && date.end) {
    open.value = false
  }
}

watch(placeholder, (_placeholder) => {
  firstMonth.value = createMonth({
    dateObj: _placeholder,
    weekStartsOn: 0,
    fixedWeeks: false,
    locale: locale.value,
  })
  if (isEqualMonth(secondMonthPlaceholder.value, _placeholder)) {
    secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
      months: 1,
    })
  }
})

watch(secondMonthPlaceholder, (_secondMonthPlaceholder) => {
  secondMonth.value = createMonth({
    dateObj: _secondMonthPlaceholder,
    weekStartsOn: 0,
    fixedWeeks: false,
    locale: locale.value,
  })
  if (isEqualMonth(_secondMonthPlaceholder, placeholder.value))
    placeholder.value = placeholder.value.subtract({ months: 1 })
})
</script>


