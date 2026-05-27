<script setup lang="ts">
import {buttonVariants} from '@/ui/button'
import {cn} from '@/lib/utils'
import {reactiveOmit} from '@vueuse/core'
import {
  YearRangePickerCell,
  YearRangePickerCellTrigger,
  YearRangePickerGrid,
  YearRangePickerGridBody,
  YearRangePickerGridRow,
  YearRangePickerHeader,
  YearRangePickerHeading,
  YearRangePickerNext,
  YearRangePickerPrev,
  YearRangePickerRoot,
  type YearRangePickerRootEmits,
  type YearRangePickerRootProps,
  useForwardPropsEmits
} from 'reka-ui'
import type {HTMLAttributes} from 'vue'

const props = defineProps<YearRangePickerRootProps & {class?: HTMLAttributes['class']}>()
const emits = defineEmits<YearRangePickerRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <YearRangePickerRoot
    v-slot="{grid}"
    v-bind="forwarded"
    :class="cn('p-3')"
  >
    <YearRangePickerHeader class="flex justify-center pt-1 relative items-center w-full">
      <YearRangePickerHeading class="font-bold" />
      <div class="flex items-center gap-1">
        <YearRangePickerPrev
          :tabindex="-1"
          :class="cn(buttonVariants({variant: 'ghost', size: 'icon-sm'}), 'absolute left-1')"
        >
          <LucideChevronLeft />
        </YearRangePickerPrev>
        <YearRangePickerNext
          :tabindex="-1"
          :class="cn(buttonVariants({variant: 'ghost', size: 'icon-sm'}), 'absolute right-1')"
        >
          <LucideChevronRight />
        </YearRangePickerNext>
      </div>
    </YearRangePickerHeader>
    <div class="">
      <YearRangePickerGrid class="w-full border-collapse">
        <YearRangePickerGridBody class="grid gap-y-2 mt-3">
          <YearRangePickerGridRow
            v-for="(years, index) in grid.rows"
            :key="`year-${index}`"
            class="grid grid-cols-4"
          >
            <YearRangePickerCell
              v-for="year in years"
              :key="year.toString()"
              :date="year"
              class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-primary-light first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md"
            >
              <YearRangePickerCellTrigger
                :year="year"
                :class="
                  cn(
                    buttonVariants({variant: 'ghost', size: 'icon'}),
                    'size-12 text-sm p-0 font-normal aria-selected:opacity-100 cursor-default border-2 !border-transparent  ' +
                      'focus-within:bg-primary-light focus-visible:bg-primary-light focus:bg-primary-light focus-within:text-primary focus-visible:text-primary focus:text-primary',
                    'data-[highlighted]:bg-primary-light [&[data-highlighted]:not([data-highlighted-end=true]):not([data-selected])]:rounded-none',
                    ' [&[data-today]:not([data-selected])]:text-primary hover:bg-primary-light hover:text-primary',
                    //selected + focus
                    'data-[selection-start]:data-[selected]:focus-within:!border-gray-600/20 data-[selection-end]:data-[selected]:focus-within:!border-gray-600/20 ',
                    // Selection Start
                    'data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground',
                    // Selection End
                    'data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground',
                    // Outside months
                    'data-[outside-view]:text-muted-foreground',
                    // Disabled
                    'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
                    // Unavailable
                    'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through'
                  )
                "
              />
            </YearRangePickerCell>
          </YearRangePickerGridRow>
        </YearRangePickerGridBody>
      </YearRangePickerGrid>
    </div>
  </YearRangePickerRoot>
</template>
