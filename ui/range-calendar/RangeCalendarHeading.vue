<script lang="ts" setup>
import { RangeCalendarNextButton, RangeCalendarPrevButton } from '@/ui/range-calendar/index.ts'
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import type { DateValue, RangeCalendarHeadingProps } from 'reka-ui'
import { RangeCalendarHeading, injectRangeCalendarRootContext, useForwardProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

const props = defineProps<RangeCalendarHeadingProps & {class?: HTMLAttributes['class']}>()

defineSlots<{
  default: (props: {headingValue: string}) => any
}>()

const {format} = useDate()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
const rootContext = injectRangeCalendarRootContext()

const headerStartLabel = computed(() => {
  if (!rootContext.grid.value.length) return ''

  const startMonth = rootContext.grid.value[0].value.toString()
  const startYear = format(startMonth, 'YYYY')

  return `${startYear}년 ${format(startMonth, 'M')}월`
})

const headerEndLabel = computed(() => {
  if (!rootContext.grid.value.length) return ''

  const endMonth = rootContext.grid.value[rootContext.grid.value.length - 1].value.toString()
  const endYear = format(endMonth, 'YYYY')

  return `${endYear}년 ${format(endMonth, 'M')}월`
})

function pagingFunc(date: DateValue, sign: -1 | 1) {
  if (sign === -1) return date.subtract({years: 1})
  return date.add({years: 1})
}
</script>

<template>
  <RangeCalendarHeading
    v-slot="{headingValue}"
    data-slot="range-calendar-heading"
    :class="cn('font-bold w-full flex', props.class)"
    v-bind="forwardedProps"
  >
    <slot :heading-value>
      <div class="flex justify-center items-center w-1/2">
        <RangeCalendarPrevButton :tabindex="-1" class="left-11" />
        <RangeCalendarPrevButton :tabindex="-1" :prev-page="(date: DateValue) => pagingFunc(date, -1)" >
          <LucideChevronsLeft />
        </RangeCalendarPrevButton>
        {{ headerStartLabel }}
      </div>
      <div class="flex justify-center items-center w-1/2">
        {{ headerEndLabel }}
        <RangeCalendarNextButton :tabindex="-1" class="right-11" />
        <RangeCalendarNextButton :tabindex="-1" :next-page="(date: DateValue) => pagingFunc(date, 1)" >
          <LucideChevronsRight />
        </RangeCalendarNextButton>
      </div>
    </slot>
  </RangeCalendarHeading>
</template>
