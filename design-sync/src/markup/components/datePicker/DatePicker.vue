<template>
  <UiPopover
    v-model:open="open"
    @update:open="toggleOpen()"
    :default-open="props.forceOpen"
  >
    <UiPopoverTrigger as-child :class="[{'border-danger':ariaInvalid}, props.class]" :aria-invalid="ariaInvalid">
      <div class="flex gap-2 justify-between items-center border-1 border-border rounded-sm h-8 px-padding-md bg-background w-full" >
        <p :class="['flex items-center gap-2', {'text-disabled-text': !isValue}]"
        >
          <LucideCalendar class="size-4 text-secondary flex-none"/>
          {{ value ?? props.placeholder }}
        </p>
        <UiButton variant="ghost" class="hover:bg-transparent" size="icon-sm" @click.prevent.stop="clear" :disabled="!isValue">
          <LucideX class="size-4" :class="!isValue ? 'text-transparent':'text-secondary'"/>
        </UiButton>
      </div>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-auto p-0">
      <UiCalendar
        v-model="value"
        locale="ko"
        :number-of-months="1"
        :week-starts-on="0"
        @update:model-value="change"
      />
    </UiPopoverContent>
  </UiPopover>
</template>

<script setup lang="ts">
import {parseDate} from '@internationalized/date'
import {type DateValue} from 'reka-ui'
import type {HTMLAttributes} from "vue";

const model = defineModel<string>({required: true})
const props = withDefaults(
  defineProps<{
    forceOpen?: boolean
    placeholder?: string
    class?: HTMLAttributes['class']
    ariaInvalid?: boolean
  }>(),
  {
    forceOpen: false,
    placeholder: '',
    ariaInvalid:false
  }
)

const {isNullOrEmpty} = useUtil()

const open = ref<boolean>(props.forceOpen)

const value = computed<DateValue>({
  get() {
    return isNullOrEmpty(model.value) ? null : parseDate(model.value)
  },
  set(date: DateValue) {
    model.value = date.toString()
  }
})
const isValue = computed<boolean>(() => {
  return !isNullOrEmpty(model.value)
})

const toggleOpen = (): void => {
  if (props.forceOpen) {
    open.value = true
  }
}
const change = (_date: DateValue): void => {
  open.value = false
}

const clear = (): void => {
  model.value = null
  if (!props.forceOpen && open.value) {
    open.value = false
  }
}
</script>
