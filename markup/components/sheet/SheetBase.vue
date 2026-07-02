<template>
  <UiSheet :modal="false" v-model:open="open">
    <!--  router tab 있는 경우 top-21 / 없는 경우 top-10  // 전체화면 정책 변경 시 fullsize : left-5 top-5 w-auto  -->
    <UiSheetContent class="top-21" :class="[fullSize?'full-size':'min-w-120 bottom-0 ', props.class]" :style="props.style">

      <UiSheetHeader class="px-padding-lg min-h-14 gap-0">
        <div class="flex justify-between items-center bg-background rounded-t-md gap-0.5">
          <UiSheetTitle>
            <slot name="title">{{title}}</slot>
          </UiSheetTitle>
          <div class="ml-auto flex items-center gap-2 justify-between">
            <template v-if="fullScreen">
              <UiButton variant="ghost" size="icon" @click="fullSize = !fullSize">
                <template v-if="!fullSize">
                  <LucideExpand/>
                </template>
                <template v-else>
                  <LucideMinimize-2/>
                </template>
              </UiButton>
              <UiSeparator orientation="vertical" class="h-4"/>
            </template>
            <UiSheetClose as-child>
              <UiButton variant="ghost" size="icon"><LucideX/></UiButton>
            </UiSheetClose>
          </div>
        </div>
      </UiSheetHeader>
      <template v-if="!isLooading">
        <!--    tab, body 감싸는 slot 추가    -->
        <slot name="container">
          <slot name="tab"/>
          <UiScrollArea class="h-screen flex flex-col" as-child>
            <slot name="body"/>
          </UiScrollArea>
        </slot>
      </template>
      <template v-else>
        <div class="grid gap-4 overflow-hidden">
          <div class="grid gap-2 px-6" v-for="_ in 15">
            <UiSkeleton class="w-1/2 h-6" />
            <UiSkeleton class="w-full h-6" />
            <UiSkeleton class="w-11/12 h-6" />
          </div>
        </div>

      </template>

      <UiSheetFooter class="mt-auto" v-if="footer">
        <UiSheetClose as-child >
            <UiButton variant="outline">닫기</UiButton>
        </UiSheetClose>
        <slot name="footer"/>
      </UiSheetFooter>

    </UiSheetContent>
    <teleport to="body">
      <div v-if="open && dimmed" :data-state="open?'open':'closed'" class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/20" aria-hidden="true" style="pointer-events: auto;" @click="open = false"></div>
    </teleport>
  </UiSheet>
</template>

<script setup lang="ts">
import type {HTMLAttributes} from "vue";

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    fullScreen?: boolean
    class?:HTMLAttributes["class"]
    style?:HTMLAttributes["style"]
    isLooading?:boolean
    open?:boolean
    dimmed?:boolean
    footer?:boolean

  }>(),
  {
    title: '기본 타이틀',
    description: '기본 서브 타이틀',
    fullScreen:false,
    isLooading:false,
    open:false,
    dimmed:false,
    footer:true,
  }
)
const open = defineModel<boolean>('open')

const fullSize = ref<boolean>(false)
</script>

<style scoped>

</style>
