<template>
  <template v-if="type == 'checkbox'">
    <UiTableCell :style="['width:40px;', style]">
      <div :style="['width:40px;', style]" class="!p-0">
        <UiLabel class="size-full flex items-center justify-center" @click.stop>
          <UiCheckbox :disabled="checkDisabled"/>
        </UiLabel>
      </div>
    </UiTableCell>
  </template>
  <template v-else-if="type == 'radio'">
    <UiTableCell :style="['width:40px;', style]">
      <div :style="['width:40px;', style]" class="!p-0">
        <UiLabel class="size-full flex items-center justify-center" @click.stop>
          <UiRadioGroup
            class="!mx-0 block"
            :model-value="modelValue"
            :disabled="checkDisabled"
            @update:model-value="emit('update:modelValue', props.radioValue)"
          >
            <UiRadioGroupItem :value="props.radioValue"/>
          </UiRadioGroup>
        </UiLabel>
      </div>
    </UiTableCell>
  </template>
  <template v-else-if="type == 'function'">
    <UiTableCell :style="['width:40px;', style]" class="text-center">
      <div :style="['width:40px;', style]">
        <slot/>
      </div>
    </UiTableCell>
  </template>
  <template v-else>
    <UiTableCell :style="style" :class="['text-center', props.class, attrs.class]" :title="cellTitle">
      <div :style="style" ref="cellRef">
        <slot>
          <p>{{ data }}</p>
        </slot>

      </div>
    </UiTableCell>
  </template>
</template>

<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import { computed, ref, useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  data?: string
  type?: string
  style?: string
  class?:HTMLAttributes['class']
  checkDisabled?:boolean
  modelValue?: string | number
  radioValue?: string | number
}>(), {
  type: 'default',
  checkDisabled:false
})

const emit = defineEmits<{ 'update:modelValue': [value: string | number | undefined] }>()

const attrs = useAttrs()
const cellRef = ref<HTMLElement | null>(null)
const cellTitle = computed<string | undefined> (() =>
  (attrs.title as string | undefined) ?? (cellRef.value?.innerText.replace(/\n+/g, '\n').trim() || undefined)
)
</script>

<style scoped>

</style>
