<template>
  <UiInputGroup :class="size === 'sm' ? 'h-6' : ''">
    <UiInputGroupAddon v-if="$slots.prefix">
      <slot name="prefix"/>
    </UiInputGroupAddon>

    <UiInputGroupInput
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="ariaInvalid"
      :readonly="readonly"
      :type="type"
      :class="size === 'sm' ? 'text-xs' : ''"
      v-model="modelValue"
    />

    <UiInputGroupAddon align="inline-end">
      <slot name="suffix">
        <UiInputGroupButton
          :size="size === 'sm' ? 'inline-icon-sm' : 'inline-icon'"
          tabindex="-1"
          :class="(modelValue && (!readonly && !disabled)) ? 'text-muted' : 'text-transparent hover:text-transparent hover:cursor-default focus:bg-transparent'"
          @click="modelValue = ''"
        >
          <LucideX />
        </UiInputGroupButton>
      </slot>
    </UiInputGroupAddon>
  </UiInputGroup>
</template>

<script setup lang="ts">
const modelValue = defineModel()
const props = withDefaults(defineProps<{
  placeholder?: string
  disabled?: boolean
  ariaInvalid?: boolean
  readonly?: boolean
  type?: string
  size?: 'sm' | 'default'
}>(), {
  placeholder: '내용을 입력해 주세요',
  disabled: false,
  readonly: false,
  type: 'text',
})
</script>
