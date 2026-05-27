<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import type { CalendarRootEmits, CalendarRootProps, DateValue } from 'reka-ui'
import { CalendarRoot, useForwardPropsEmits } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton
} from '.'

const props = defineProps<CalendarRootProps & {class?: HTMLAttributes['class']}>()
const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

function pagingFunc(date: DateValue, sign: -1 | 1) {
  if (sign === -1) return date.subtract({years: 1})
  return date.add({years: 1})
}
</script>

<template>
  <CalendarRoot
    v-slot="{grid, weekDays}"
    data-slot="calendar"
    :class="cn('p-3', props.class)"
    v-bind="forwarded"
  >
    <CalendarHeader>
      <CalendarHeading />

      <div class="flex items-center gap-1">
        <CalendarPrevButton :tabindex="-1" class="left-8" />
        <CalendarPrevButton :tabindex="-1" :prev-page="(date: DateValue) => pagingFunc(date, -1)">
          <LucideChevronsLeft />
        </CalendarPrevButton>
        <CalendarNextButton :tabindex="-1" class="right-8" />
        <CalendarNextButton :tabindex="-1" :next-page="(date: DateValue) => pagingFunc(date, 1)">
          <LucideChevronsRight />
        </CalendarNextButton>
      </div>
    </CalendarHeader>

    <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
      >
        <CalendarGridHead>
          <CalendarGridRow>
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody>
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="mt-2 w-full"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
