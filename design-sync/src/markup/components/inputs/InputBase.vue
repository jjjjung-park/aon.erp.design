<template>
<!-- TODO sm 좀 더 고민해보기.. -->
  <UiInputGroup :class="size == 'sm' ? 'h-6 gap-1 !px-1':''">
    <UiInputGroupAddon>
      <slot name="prefix"/>
    </UiInputGroupAddon>

    <UiInputGroupInput :placeholder="placeholder" :disabled="disabled" :aria-invalid="ariaInvalid" :readonly="readonly" :type="type" v-model="modelValue"/>
    <UiInputGroupAddon align="inline-end" :class="size == 'sm' ? 'size-4':''" >
      <slot name="suffix">
        <UiInputGroupButton variant="ghost"  tabindex="-1"
                            class=" rounded-full hover:text-default hover:bg-transparent"
                            :class="[(modelValue && (!readonly && !disabled))?'text-muted':'text-transparent hover:text-transparent hover:cursor-default focus:bg-transparent', size == 'sm'?'!size-4 !min-w-4':'']" @click="modelValue=''">
          <LucideX :class="size == 'sm' ? 'size-3':''" />
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
    ariaInvalid?:boolean
    readonly?:boolean
    type?:string
    size?:string
  }>(),
  {
    placeholder: '내용을 입력해 주세요',
    disabled:false,
    readonly:false,
    type:'text'
  }
)
</script>

<style scoped>

</style>
