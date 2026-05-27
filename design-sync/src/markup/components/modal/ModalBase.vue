<template>
  <UiDialog>
    <UiDialogContent :class="[fullSize?'full-size':'min-w-120', props.class]" :style="props.style">
        <UiDialogHeader class="px-4 ">
          <!--    -mx-2 추가      -->
          <div :class="['flex justify-between items-center bg-background rounded-t-lg h-14']">
            <UiDialogTitle v-if="title">
              <slot name="title">{{title}}</slot>
            </UiDialogTitle>
            <div class="ml-auto flex items-center gap-2 justify-between h-5">
              <template v-if="fullScreen">
                <!--      사이즈 원복          -->
                <UiButton variant="ghost" size="icon" @click="fullSize = !fullSize">
                  <template v-if="!fullSize">
                    <LucideExpand/>
                  </template>
                  <template v-else>
                    <LucideMinimize-2/>
                  </template>
                </UiButton>
                <UiSeparator orientation="vertical" class="h-5"/>
              </template>
              <UiDialogClose as-child>
                <!--      사이즈 원복          -->
                <UiButton variant="ghost" size="icon"><LucideX/></UiButton>
              </UiDialogClose>
            </div>
          </div>
        </UiDialogHeader>

        <div class="overflow-y-auto max-h-[calc(100vh-12rem)] px-6">
          <template v-if="!isLoading">
            <slot name="body"/>
          </template>
          <template v-else>
            <div class="grid gap-3">
              <UiSkeleton class="w-1/2 h-6" />
              <UiSkeleton class="w-full h-6" />
              <UiSkeleton class="w-11/12 h-6" />
            </div>
          </template>
        </div>

      <UiDialogFooter class="mt-auto" v-if="footer">
        <UiDialogClose as-child>
          <UiButton variant="outline">닫기</UiButton>
        </UiDialogClose>
        <slot name="footer"/>
      </UiDialogFooter>

    </UiDialogContent>

  </UiDialog>
</template>

<script setup lang="ts">
import type {HTMLAttributes} from "vue";


const props = withDefaults(
  defineProps<{
    title?: string
    fullScreen?: boolean
    class?:HTMLAttributes["class"]
    style?:HTMLAttributes["style"]
    footer?:boolean
    isLoading?:boolean
  }>(),
  {
    fullScreen:false,
    footer:true,
    isLoading:false,
  }
)

const fullSize = ref<boolean>(false)

</script>

<style scoped>

</style>
