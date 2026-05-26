<template>
  <template v-if="type == 'checkbox'">
    <UiTableCell :style="['width:40px;', style]">
      <div :style="['width:40px;', style]">
        <UiCheckbox :disabled="checkDisabled"/>
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
    <UiTableCell :style="style" :class="props.class">
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

const props = withDefaults(defineProps<{
  data?: string
  type?: string
  style?: string
  class?:HTMLAttributes['class']
  checkDisabled?:boolean
}>(), {
  type: 'default',
  checkDisabled:false
})
</script>

<style scoped>

</style>
