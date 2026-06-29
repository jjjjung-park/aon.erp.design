<template>
  <UiEmpty class="gap-16 ">
    <slot>
      <UiEmptyHeader>
        <UiEmptyMedia variant="icon" class="bg-primary-light text-primary rounded-full size-[100px] [&_svg]:size-[100%] p-5">
          <LucideShieldAlert />
        </UiEmptyMedia>
        <UiEmptyTitle class="text-xl font-bold text-primary mt-3">화면을 찾을 수 없습니다.</UiEmptyTitle>
        <UiEmptyDescription class="text-md">관리자에게 문의 해 주세요.</UiEmptyDescription>
      </UiEmptyHeader>
      <UiEmptyContent>
        <UiButton variant="link" size="lg" class="text-default" ><LucideChevronLeft/>이전 화면으로 돌아가기</UiButton>
      </UiEmptyContent>
    </slot>
  </UiEmpty>
</template>
<script setup lang="ts">

</script>
<style scoped>

</style>
