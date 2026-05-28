<template>
  <UiInputGroup>
    <UiInputGroupInput :placeholder="placeholder" v-model="value" :disabled="props.disabled" :type="show?'text':'password'" :aria-invalid="props.ariaInvalid"/>
    <UiInputGroupAddon align="inline-end">
      <slot name="button">
        <UiInputGroupButton size="icon-sm" variant="ghost" class=" rounded-full text-secondary hover:text-default-text hover:bg-transparent" @click="show = !show">
          <template v-if="show">
            <LucideEye/>
          </template>
          <template v-else>
            <LucideEyeClosed/>
          </template>
        </UiInputGroupButton>
      </slot>

    </UiInputGroupAddon>
  </UiInputGroup>
</template>

<script setup lang="ts">
const value = ref<any>('')
const show = ref<boolean>(false)
const props = withDefaults(defineProps<{
    disabled?: boolean,
    ariaInvalid?:boolean,
    placeholder?:string
  }>(),
  {
    placeholder: '비밀번호를 입력해 주세요',
    disabled:false
  }
)
</script>

<style scoped>

</style>
