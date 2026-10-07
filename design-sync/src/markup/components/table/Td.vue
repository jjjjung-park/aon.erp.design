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
    <UiTableCell :style="style" :class="['text-center', props.class, attrs.class]">
      <div :style="style">
        <slot>
          <p>{{ data }}</p>
        </slot>

      </div>
    </UiTableCell>
  </template>
</template>

<script setup lang="ts">
import type {HTMLAttributes} from "vue";
import { useAttrs } from 'vue'

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
</script>

<style scoped>

</style>
