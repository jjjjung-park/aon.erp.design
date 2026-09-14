<template>
  <UiCombobox by="label">
    <UiComboboxAnchor :class="cn('border border-border rounded-sm', props.class)">
      <UiComboboxTrigger class="w-full">
        <div class="relative items-center flex h-8 gap-1 px-padding-xs w-full">
          <slot name="prefix"/>
          <UiComboboxInput class="" :placeholder="placeholder" :disabled="props.disabled"
                           v-model="modelValue"/>
          <span class="absolute end-2 inset-y-0 flex items-center justify-center">
            <LucideChevronDown class="size-4 text-muted"/>
          </span>
        </div>
      </UiComboboxTrigger>
    </UiComboboxAnchor>
    <UiComboboxList class="w-[var(--reka-popper-anchor-width)]">
      <UiComboboxEmpty>
        일치하는 키워드가 없습니다.
      </UiComboboxEmpty>
      <slot name="combobox-list">

        <UiComboboxGroup class="">
          <template v-for="item in listItem">
            <UiComboboxItem :value="item.value">
                <p class="truncate">
                  {{ item.label }}
                </p>
            </UiComboboxItem>
          </template>
        </UiComboboxGroup>
      </slot>

    </UiComboboxList>
  </UiCombobox>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils"
import type {HTMLAttributes} from "vue";

const modelValue = ref<string>("")

interface ListItem {
  label: string
  value: string | number
}

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    placeholder?: string
    disabled?: boolean
    listItem?: ListItem[]
  }>(),
  {
    placeholder: '내용을 입력하세요',
    disabled: false,
    listItem: () => []
  }
)


</script>

<style scoped>

</style>
