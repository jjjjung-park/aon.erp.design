<template>
  <UiSelect :value="selected" @update:value="selected = $event" :default-value="selectValue" @click="$emits('click', $event)">
    <UiSelectTrigger :class="cn('w-full', props.class)" :disabled="disabled" :size="size" :data-display="readonly?'readonly':''">
      <UiSelectValue :placeholder="placeholder"/>
    </UiSelectTrigger>
    <UiSelectContent>
      <UiSelectGroup>
        <UiSelectItem v-for="item in listItem" :key="item.value" :value="item.value">
          <slot :item="item">
            <p class="truncate">
              {{ item.label }}
            </p>
          </slot>
        </UiSelectItem>
      </UiSelectGroup>
    </UiSelectContent>
  </UiSelect>
</template>

<script setup lang="ts">
import {cn} from "@/lib/utils.ts";
import type { HTMLAttributes } from "vue"
interface ListItem {
  label: string
  value: string | number
}
const props = withDefaults(defineProps<{
    placeholder?: string,
    disabled?: boolean,
    readonly?: boolean,
    size?: "sm" | "default" | "lg"
    class?:HTMLAttributes["class"]
    listItem?: ListItem[]
  }>(),
  {
    placeholder: '선택하세요',
    disabled:false,
    listItem: () => []
  }
)
const $emits = defineEmits(['click'])
const selected = ref<string | null>(null);
const selectValue = computed(() => props.listItem.find(item => item.value === selected.value)?.label)
</script>

<style scoped>

</style>
