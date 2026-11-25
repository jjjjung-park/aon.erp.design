<template>
  <UiLabel for="file" class="flex flex-col gap-2 items-center justify-center h-full w-full cursor-pointer">
    <slot>
      <p class="flex items-center gap-1 font-bold">
        <LucidePaperclip :size="16"/>
        이미지 등록
      </p>
      <p class="text-muted caption text-center px-6">첨부할 파일을 드래그 또는 클릭하여 추가<br/>(5mb 이하의 이미지)</p>
    </slot>
    <UiInput type="file" id="file" multiple class="sr-only"/>
  </UiLabel>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
