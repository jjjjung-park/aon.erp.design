<template>
  <!-- 우측정렬 스타일 추가  [&.text-right_input:not(:placeholder-shown)]:text-right -->
  <div :class="cn('flex flex-col h-18 gap-1 [&:has([aria-invalid=true])_span.caption]:text-danger w-full [&.text-right_input:not(:placeholder-shown)]:text-right', props.class)">
    <UiLabel class="text-xs flex gap-0.5 mb-1" v-if="label">{{ label }}<span class="text-danger" v-if="required">*</span></UiLabel>
    <slot name="input-item">
      <!--  div 제거    -->
      <InputBase :aria-invalid="ariaInvalid" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" v-model="modelValue" :type="type"/>

    </slot>
    <span class="caption text-muted" v-if="validateText">{{ validateText }}</span>
  </div>

</template>

<script setup lang="ts">
import {InputBase} from "@/markup/components/inputs";
import {cn} from "@/lib/utils.ts";
import type {HTMLAttributes} from "vue";

const props = withDefaults(defineProps<{
  class?:HTMLAttributes["class"]
  required?:boolean
  ariaInvalid?:boolean
  label?:string
  validateText?:string
  placeholder?:string
  disabled?:boolean
  readonly?:boolean
  type?:string

}>(),{
  required:false,
  ariaInvalid:false,
  disabled:false,
  readonly:false,
  type:'text',
})

const modelValue = defineModel()
</script>

<style scoped>

</style>
