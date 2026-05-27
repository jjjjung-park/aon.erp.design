<template>
  <ListboxRoot
    v-model="selectValue"
    highlight-on-hover
    :multiple="multiple"
    disabled
    :class="cn('', props.class)"
  >
    <template v-if="multiple">
      <UiTagsInput v-slot="{ modelValue: tags }" v-model="selectValue" :disabled="true"
                   class="w-full min-h-8 gap-1 py-1 items-center bg-gray-100'" >
        <template v-if="selectValue.length == 0">
          <span class="text-disabled-text">{{ placeholder }}</span>
          <div class="ml-auto">
            <LucideChevronDown class="size-4 text-disabled-text"/>
          </div>
        </template>

        <!--  태그 영역   -->
        <template v-else>
          <UiTagsInputItem v-for="item in tags" :key="item.toString()" :value="item.toString()" class="py-0.5">
            <span class="py-0.5 text-sm rounded bg-transparent">{{ item }}</span>
          </UiTagsInputItem>

          <!--   숫자로 표현되는 태그 영역     -->
          <UiTooltipProvider>
            <UiTooltip>
              <UiTooltipTrigger as-child class="">
                <Tags title="+ 3" class="bg-primary-light text-primary" type="chip" data-reka-collection-item/>
              </UiTooltipTrigger>
              <UiTooltipContent side="top" align="center" class="flex gap-1">
                <UiTagsInputItem v-for="item in tags" :key="item.toString()" :value="item.toString()" class="py-0.5">
                  <span class="py-0.5 text-sm rounded bg-transparent">{{ item }}</span>
                </UiTagsInputItem>
              </UiTooltipContent>
            </UiTooltip>
          </UiTooltipProvider>
          <!--   clear 버튼     -->
          <div class="ml-auto flex items-center pl-2">
            <LucideX class="size-4 text-disabled-text"/>
          </div>

        </template>
      </UiTagsInput>
    </template>
    <template v-else>
      <UiTagsInput class="w-full min-h-8 gap-1 py-1 items-center" :class="readonly?'bg-gray-100':'bg-disabled'" :disabled="true" >
        <span :class="readonly?'text-default-text':'text-disabled-text'">{{ placeholder }}</span>
        <!--   clear 버튼     -->
        <div class="ml-auto flex items-center pl-2">
          <TagsInputClear v-if="selectValue.length > 0">
            <LucideX class="size-4 text-disabled-text"/>
          </TagsInputClear>
          <template v-else>
            <LucideChevronDown class="size-4 text-disabled-text"/>
          </template>
        </div>
      </UiTagsInput>

    </template>


  </ListboxRoot>
</template>
<script setup lang="ts">
import {ListboxRoot, TagsInputClear} from "reka-ui"
import { type HTMLAttributes, ref} from "vue"
import {cn} from "@/lib/utils.ts";
import Tags from "@/markup/components/tag/Tags.vue";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    placeholder?: string
    multiple?: boolean
    readonly?: boolean
  }>(),
  {
    placeholder: '내용을 입력하세요',
    multiple: false,
    readonly: false
  }
)

const selectValue = ref<string[]>([])
const selectValueSingle = ref<string>('')


</script>


