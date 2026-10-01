<script setup lang="ts">
import {cn} from '@/lib/utils'
import {reactiveOmit} from '@vueuse/core'
import {
  YearPickerCell,
  YearPickerCellTrigger,
  YearPickerGrid,
  YearPickerGridBody,
  YearPickerGridRow,
  YearPickerHeader,
  YearPickerHeading,
  YearPickerNext,
  YearPickerPrev,
  YearPickerRoot,
  type YearPickerRootEmits,
  type YearPickerRootProps,
  useForwardPropsEmits
} from 'reka-ui'
import type {HTMLAttributes} from 'vue'
import {buttonVariants} from "@/ui/button";

const props = defineProps<YearPickerRootProps & {class?: HTMLAttributes['class']}>()
const emits = defineEmits<YearPickerRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <YearPickerRoot
    v-slot="{grid}"
    v-bind="forwarded"
    :class="cn('p-3')"
  >
    <YearPickerHeader class="flex justify-center pt-1 relative items-center w-full">
      <YearPickerHeading class="font-bold" />

      <div class="flex items-center gap-1">
        <YearPickerPrev
          :tabindex="-1"
          :class="cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }), 'absolute left-1')"
        >
          <LucideChevronLeft />
        </YearPickerPrev>
        <YearPickerNext
          :tabindex="-1"
          :class="cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }), 'absolute right-1')"
        >
          <LucideChevronRight />
        </YearPickerNext>
      </div>
    </YearPickerHeader>

    <div class="">
      <YearPickerGrid class="w-full border-collapse">
        <YearPickerGridBody class="grid gap-y-2 mt-3">
          <YearPickerGridRow
            v-for="(years, index) in grid.rows"
            :key="`year-${index}`"
            class="grid grid-cols-4"
          >
            <YearPickerCell
              v-for="year in years"
              :key="year.toString()"
              :date="year"
              class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-sm "
            >
              <YearPickerCellTrigger
                :year="year"
                :class="cn(
                  buttonVariants({ variant: 'ghost', size: 'icon'  }),
                  'text-sm size-12 font-normal aria-selected:opacity-100 cursor-default border-2 border-transparent focus-within:bg-primary-light focus-visible:bg-primary-light focus:bg-primary-light focus-within:text-primary focus-visible:text-primary focus:text-primary',
                  '[&[data-today]:not([data-selected])]:bg-background [&[data-today]:not([data-selected])]:text-primary [&[data-today]:not([data-selected])]:focus:bg-primary-light hover:bg-primary-light hover:text-primary ',
                  // Selected
                  'data-[selected]:bg-primary data-[selected]:text-neutral data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-neutral data-[selected]:focus:bg-primary data-[selected]:focus:text-neutral  data-[selected]:focus-visible:ring-2 data-[selected]:focus-visible:ring-ring/50',
                  // Disabled
                  'data-[disabled]:text-disabled-text data-[disabled]:opacity-50',
                  // Unavailable
                  'data-[unavailable]:text-danger-light data-[unavailable]:line-through',
                  // Outside months
                  'data-[outside-view]:text-disabled-text',
                )"
              />
            </YearPickerCell>
          </YearPickerGridRow>
        </YearPickerGridBody>
      </YearPickerGrid>
    </div>
  </YearPickerRoot>
</template>
