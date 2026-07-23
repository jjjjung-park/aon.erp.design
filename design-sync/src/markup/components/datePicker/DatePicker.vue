<template>
  <UiPopover
    v-model:open="open"
    @update:open="toggleOpen()"
    :default-open="props.forceOpen"
  >
    <UiPopoverTrigger as-child :class="[{'border-danger':ariaInvalid}, props.class]" :aria-invalid="ariaInvalid">
      <div tabindex="0"
           :class="['flex gap-1 justify-between items-center border-1 rounded-sm px-padding-xs bg-background w-full h-8 focus-visible:outline-0 focus-visible:border-primary',
          open ? 'border-primary' : 'border-border']">
        <p :class="['flex items-center gap-1', {'text-disabled-text': !isValue}]"
        >
          <LucideCalendar class="size-4 text-muted flex-none"/>
          {{ value ?? props.placeholder }}
        </p>
        <UiButton variant="ghost" class="hover:bg-transparent" size="inline-icon" @click.prevent.stop="clear" :disabled="!isValue">
          <LucideX class="size-4" :class="!isValue ? 'text-transparent':'text-muted'"/>
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
