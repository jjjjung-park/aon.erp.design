<template>
  <template v-if="type == 'checkbox'">
    <UiTableHead :style="['width:40px;', style]">
      <div :style="['width:40px;', style]">
        <UiCheckbox :disabled="checkDisabled"/>
      </div>
    </UiTableHead>
  </template>
  <template v-else-if="type == 'function'">
    <UiTableHead :style="['width:40px;', style]" class="text-center">
      <div :style="['width:40px;', style]">
        <slot/>
      </div>
    </UiTableHead>
  </template>
  <template v-else>
    <UiTableHead class="" :style="style" v-bind="$attrs">
      <div class="text-center" :style="style">
        <div class="flex items-center gap-3">
          <p>
            <slot>
              {{ data }}
            </slot>
          </p>
          <div class="flex flex-col items-center" v-if="sort">
            <button class="arrow-up"/>
            <button class="arrow-down"/>
          </div>
        </div>
      </div>
      <template v-if="resizing">
        <span  class="table-resizing__button"></span>
      </template>
    </UiTableHead>
  </template>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  data?: string
  type?: string
  style?: string
  resizing?:boolean
  sort?:boolean
  checkDisabled?:boolean
}>(), {
  type: 'default',
  resizing:true,
  sort:false,
  checkDisabled:false
})
</script>

<style scoped>

</style>
