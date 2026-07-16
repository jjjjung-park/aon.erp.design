
<template>
  <ModalBase v-model:open="open" title="테이블 설정" :class="groupHeader?'min-w-90':'w-180'">
    <template #body>
      <div class="flex gap-8 pb-4">
        <div v-if="!groupHeader" class="flex flex-col gap-2 w-1/2">
          <p class="text-muted caption__bold">고정 항목</p>
          <div class=" rounded-sm px-padding-sm py-6 text-muted bg-surface-muted text-center">
            고정된 항목이 없습니다.
          </div>
          <!--   default 고정 : 단일 레벨 헤더 테이블일때       -->
          <div class="list-block-item justify-between bg-primary-light">
            <span class="inline-flex align-middle items-center justify-center gap-1 size-8"><LucidePin fill="#007BFF" class="text-primary size-4"/> </span>
            <p class="cursor-default">칼럼명</p>
          </div>
          <UiCollapsible :default-open="true">
            <!--    1 level    -->
            <UiCollapsibleContent class="grid gap-2">
              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-1</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="고정해">
                      <LucidePinOff/>
                    </UiButton>
                  </div>
                </div>

                <!--    2 level    -->
                <UiCollapsibleContent class="grid gap-2">
                  <UiCollapsible class="grid gap-2" >

                    <div class="list-block-item">
                      <UiButton variant="ghost" size="icon" title="위치 변경"
                                class="hover:bg-transparent hover:cursor-grab">
                        <LucideEqual/>
                      </UiButton>
                      <UiCollapsibleTrigger class="pl-5">
                        <p>header-1-1</p>
                      </UiCollapsibleTrigger>

                    </div>

                    <!--    3 level    -->
                    <UiCollapsibleContent class="grid gap-2">
                      <UiCollapsible class="grid gap-2" >

                        <div class="list-block-item">
                          <UiButton variant="ghost" size="icon" title="위치 변경"
                                    class="hover:bg-transparent hover:cursor-grab">
                            <LucideEqual/>
                          </UiButton>
                          <UiCollapsibleTrigger class="pl-10">
                            <p>header-1-1-1</p>
                          </UiCollapsibleTrigger>

                        </div>

                        <!--    4 level    -->
                        <UiCollapsibleContent class="grid gap-2">
                          <UiCollapsible class="grid gap-2" >

                            <div class="list-block-item">
                              <UiButton variant="ghost" size="icon" title="위치 변경"
                                        class="hover:bg-transparent hover:cursor-grab">
                                <LucideEqual/>
                              </UiButton>
                              <UiCollapsibleTrigger class="pl-15">
                                <p>header-1-1-1-1</p>
                              </UiCollapsibleTrigger>

                            </div>

                            <!--    5 level    -->
                            <UiCollapsibleContent class="grid gap-2">
                              <UiCollapsible class="grid gap-2" >
                                <div class="list-block-item">
                                  <UiButton variant="ghost" size="icon" title="위치 변경"
                                            class="hover:bg-transparent hover:cursor-grab">
                                    <LucideEqual/>
                                  </UiButton>
                                  <UiCollapsibleTrigger class="pl-20">
                                    <p>header-1-1-1-1-1</p>
                                  </UiCollapsibleTrigger>
                                  <div class="ml-auto flex gap-0">
                                    <UiButton variant="ghost" size="icon" title="숨기기">
                                      <LucideEye/>
                                    </UiButton>
                                  </div>
                                </div>
                                <div class="list-block-item">
                                  <UiButton variant="ghost" size="icon" title="위치 변경"
                                            class="hover:bg-transparent hover:cursor-grab">
                                    <LucideEqual/>
                                  </UiButton>
                                  <UiCollapsibleTrigger class="pl-20">
                                    <p>header-1-1-1-1-2</p>
                                  </UiCollapsibleTrigger>
                                  <div class="ml-auto flex gap-0">
                                    <UiButton variant="ghost" size="icon" title="숨기기">
                                      <LucideEye/>
                                    </UiButton>
                                  </div>
                                </div>
                              </UiCollapsible>
                            </UiCollapsibleContent>
                          </UiCollapsible>
                        </UiCollapsibleContent>

                        <!--    4 level    -->
                        <UiCollapsibleContent class="grid gap-2">
                          <UiCollapsible class="grid gap-2" >
                            <div class="list-block-item">
                              <UiButton variant="ghost" size="icon" title="위치 변경"
                                        class="hover:bg-transparent hover:cursor-grab">
                                <LucideEqual/>
                              </UiButton>
                              <UiCollapsibleTrigger class="pl-15">
                                <p>header-1-1-1-2</p>
                              </UiCollapsibleTrigger>

                            </div>
                            <UiCollapsibleContent>
                              <UiCollapsible>
                                <div class="list-block-item">
                                  <UiButton variant="ghost" size="icon" title="위치 변경"
                                            class="hover:bg-transparent hover:cursor-grab">
                                    <LucideEqual/>
                                  </UiButton>
                                  <UiCollapsibleTrigger class="pl-20">
                                    <p>header-1-1-1-2-1</p>
                                  </UiCollapsibleTrigger>
                                  <div class="ml-auto flex gap-0">
                                    <UiButton variant="ghost" size="icon" title="보이기">
                                      <LucideEyeOff/>
                                    </UiButton>
                                  </div>
                                </div>
                              </UiCollapsible>
                            </UiCollapsibleContent>
                          </UiCollapsible>
                        </UiCollapsibleContent>
                      </UiCollapsible>
                    </UiCollapsibleContent>
                  </UiCollapsible>
                </UiCollapsibleContent>
              </UiCollapsible>


              <!--     single level         -->
              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-2</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="숨기기">
                      <LucideEye/>
                    </UiButton>
                    <UiButton variant="ghost" size="icon" title="고정해제">
                      <LucidePinOff/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>

              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item item--dragging">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-3</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="숨기기">
                      <LucideEye/>
                    </UiButton>
                    <UiButton variant="ghost" size="icon" title="고정해제">
                      <LucidePinOff/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>

              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item item--drag-target">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-4</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="숨기기">
                      <LucideEye/>
                    </UiButton>
                    <UiButton variant="ghost" size="icon" title="고정">
                      <LucidePin/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>

              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item item--drag-base">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-3</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="숨기기">
                      <LucideEye/>
                    </UiButton>
                    <UiButton variant="ghost" size="icon" title="고정">
                      <LucidePin/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>
            </UiCollapsibleContent>


          </UiCollapsible>

        </div>
        <div :class="['flex flex-col gap-2', groupHeader?'w-full':'w-1/2']">
          <p v-if="groupHeader" class="text-muted caption flex items-center gap-1 justify-end mb-4">
            <LucideCircleAlert class="size-3"/> 현재 테이블에서는 고정 기능이 제공되지 않습니다.
          </p>
          <p class="text-muted caption__bold">일반 항목</p>
          <UiCollapsible :default-open="true">
            <!--    1 level    -->
            <UiCollapsibleContent class="grid gap-2">
              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-1</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="고정" class="text-muted hover:text-default">
                      <LucidePin/>
                    </UiButton>
                  </div>
                </div>

                <!--    2 level    -->
                <UiCollapsibleContent class="grid gap-2">
                  <UiCollapsible class="grid gap-2" >

                    <div class="list-block-item">
                      <UiButton variant="ghost" size="icon" title="위치 변경"
                                class="hover:bg-transparent hover:cursor-grab">
                        <LucideEqual/>
                      </UiButton>
                      <UiCollapsibleTrigger class="pl-5">
                        <p>header-1-1</p>
                      </UiCollapsibleTrigger>

                    </div>

                    <!--    3 level    -->
                    <UiCollapsibleContent class="grid gap-2">
                      <UiCollapsible class="grid gap-2" >

                        <div class="list-block-item">
                          <UiButton variant="ghost" size="icon" title="위치 변경"
                                    class="hover:bg-transparent hover:cursor-grab">
                            <LucideEqual/>
                          </UiButton>
                          <UiCollapsibleTrigger class="pl-10">
                            <p>header-1-1-1</p>
                          </UiCollapsibleTrigger>

                        </div>

                        <!--    4 level    -->
                        <UiCollapsibleContent class="grid gap-2">
                          <UiCollapsible class="grid gap-2" >

                            <div class="list-block-item">
                              <UiButton variant="ghost" size="icon" title="위치 변경"
                                        class="hover:bg-transparent hover:cursor-grab">
                                <LucideEqual/>
                              </UiButton>
                              <UiCollapsibleTrigger class="pl-15">
                                <p>header-1-1-1-1</p>
                              </UiCollapsibleTrigger>

                            </div>

                            <!--    5 level    -->
                            <UiCollapsibleContent class="grid gap-2">
                              <UiCollapsible class="grid gap-2" >
                                <div class="list-block-item">
                                  <UiButton variant="ghost" size="icon" title="위치 변경"
                                            class="hover:bg-transparent hover:cursor-grab">
                                    <LucideEqual/>
                                  </UiButton>
                                  <UiCollapsibleTrigger class="pl-20">
                                    <p>header-1-1-1-1-1</p>
                                  </UiCollapsibleTrigger>
                                  <div class="ml-auto flex gap-0">
                                    <UiButton variant="ghost" size="icon" title="숨기기">
                                      <LucideEye/>
                                    </UiButton>
                                  </div>
                                </div>
                                <div class="list-block-item">
                                  <UiButton variant="ghost" size="icon" title="위치 변경"
                                            class="hover:bg-transparent hover:cursor-grab">
                                    <LucideEqual/>
                                  </UiButton>
                                  <UiCollapsibleTrigger class="pl-20">
                                    <p>header-1-1-1-1-1</p>
                                  </UiCollapsibleTrigger>
                                  <div class="ml-auto flex gap-0">
                                    <UiButton variant="ghost" size="icon" title="숨기기">
                                      <LucideEye/>
                                    </UiButton>
                                  </div>
                                </div>
                              </UiCollapsible>
                            </UiCollapsibleContent>
                          </UiCollapsible>
                        </UiCollapsibleContent>
                      </UiCollapsible>
                    </UiCollapsibleContent>
                  </UiCollapsible>
                </UiCollapsibleContent>
              </UiCollapsible>


              <!--     single level         -->
              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-2</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="숨기기" class="text-muted hover:text-default">
                      <LucideEye/>
                    </UiButton>
                    <UiButton variant="ghost" size="icon" title="고정" class="text-muted hover:text-default">
                      <LucidePin/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>

              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item item--dragging">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-3</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="숨기기" class="text-muted hover:text-default">
                      <LucideEye/>
                    </UiButton>
                    <UiButton variant="ghost" size="icon" title="고정" class="text-muted hover:text-default">
                      <LucidePin/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>

              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item item--drag-target">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-4</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="숨기기" class="text-muted hover:text-default">
                      <LucideEye/>
                    </UiButton>
                    <UiButton variant="ghost" size="icon" title="고정" class="text-muted hover:text-default">
                      <LucidePin/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>

              <UiCollapsible class="grid gap-2" >
                <div class="list-block-item item--drag-base">
                  <UiButton variant="ghost" size="icon" title="위치 변경"
                            class="hover:bg-transparent hover:cursor-grab">
                    <LucideEqual/>
                  </UiButton>
                  <UiCollapsibleTrigger>
                    <p>header-3</p>
                  </UiCollapsibleTrigger>
                  <div class="ml-auto flex gap-0">
                    <UiButton variant="ghost" size="icon" title="숨기기" class="text-muted hover:text-default">
                      <LucideEye/>
                    </UiButton>
                    <UiButton variant="ghost" size="icon" title="고정" class="text-muted hover:text-default">
                      <LucidePin/>
                    </UiButton>
                  </div>
                </div>
              </UiCollapsible>
            </UiCollapsibleContent>


          </UiCollapsible>
        </div>
      </div>
    </template>
    <template #footer>

      <div class="ml-auto gap-2 flex">
        <UiButton variant="outline">초기화</UiButton>
        <UiButton>저장</UiButton>
      </div>
    </template>
  </ModalBase>
</template>
<script setup lang="ts">
import ModalBase from "@/markup/components/modal/ModalBase.vue";

const open = defineModel<boolean>('open', { default: false })

const props = withDefaults(defineProps<{
  groupHeader?:boolean
}>(),{
  groupHeader:true
})
</script>

<style scoped>

</style>
