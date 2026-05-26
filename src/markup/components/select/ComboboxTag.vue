<template>
  <UiPopover v-model:open="open" >
    <ListboxRoot
      v-model="selectValue"
      highlight-on-hover
      :multiple="multiple"
      :class="cn('w-full', props.class)"
      v-bind="$attrs"

    >
      <!--  w-full을 넣어야 root에서 받은 props width가 먹힘    -->
      <UiPopoverAnchor class="w-full">
        <UiPopoverTrigger as-child class="" tabindex="0" @keydown.enter="open = true">
          <template v-if="multiple">
            <UiTagsInput v-slot="{ modelValue: tags }" v-model="selectValue" :aria-invalid="ariaInvalid" class="w-full min-h-8 gap-1 items-center">
              <template v-if="selectValue.length == 0">
                <span class="!text-disabled-text">{{ placeholder }}</span>
                <div class="ml-auto pl-2">
                  <LucideChevronDown class="size-4 text-secondary"/>
                </div>
              </template>

              <!--  태그 영역   -->
              <template v-else>
                <UiTagsInputItem v-for="item in tags" :key="item.toString()" :value="item.toString()" class="py-0.5">
                  <span class="py-0.5 text-sm rounded bg-transparent">{{ item }}</span>
                  <UiButton variant="ghost" size="icon-sm" class="text-primary hover:bg-transparent size-3">
                    <LucideX :size="9" />
                  </UiButton>
                </UiTagsInputItem>

                <UiTooltipProvider>
                  <UiTooltip>
                    <UiTooltipTrigger as-child class="">
                      <Tags title="+ 3" type="chip" variant="secondary" closeable />
                    </UiTooltipTrigger>
                    <UiTooltipContent side="top" align="center" class="flex flex-wrap gap-1">
                      <UiTagsInputItem v-for="item in tags" :key="item.toString()" :value="item.toString()" class="py-0.5">
                        <span class="py-0.5 text-sm rounded bg-transparent">{{ item }}</span>
                        <UiButton variant="ghost" size="icon-sm" class="text-primary hover:bg-transparent size-3">
                          <LucideX :size="9" />
                        </UiButton>
                      </UiTagsInputItem>
                    </UiTooltipContent>
                  </UiTooltip>
                </UiTooltipProvider>
                <!--   clear 버튼     -->
                <div class="ml-auto flex items-center pl-2">
                  <!--   TODO svg 사이즈 버튼에서 관장하도록 변경     -->
                  <TagsInputClear v-if="selectValue.length > 0">
                    <LucideX class="size-4 text-secondary"/>
                  </TagsInputClear>
                </div>

              </template>
          </UiTagsInput>
          </template>
          <template v-else>
            <UiTagsInput class="w-full min-h-8 gap-1 py-1 items-center" :aria-invalid="ariaInvalid">
              <!--      w-10/12 클래스 제거        -->
              <span class="truncate flex-1" :class="[selectValueSingle?'text-default-text':'text-disabled-text']">{{ selectValueSingle || placeholder }}</span>
              <!--   clear 버튼     -->
              <div class="ml-auto flex items-center pl-2">
                <TagsInputClear v-if="selectValue.length > 0">
                  <LucideX class="size-4 text-secondary"/>
                </TagsInputClear>
                <template v-else>
                  <LucideChevronDown class="size-4 text-secondary"/>
                </template>
              </div>
            </UiTagsInput>
          </template>
        </UiPopoverTrigger>
      </UiPopoverAnchor>

      <UiPopoverContent class="p-1 w-[var(--reka-popper-anchor-width)] " @open-auto-focus.prevent :collision-padding="{bottom:32}">
        <UiTagsInput class="mb-1 border-0 p-0" tabindex="0">
          <ListboxFilter v-model="searchValue" as-child class="">
            <InputBase :placeholder="placeholder" @keydown.enter.prevent @keydown.down="open = true" class="shadow-none"/>
          </ListboxFilter>

        </UiTagsInput>
        <UiScrollArea as-child class="max-h-[var(--reka-popover-content-available-height)]">
          <ListboxContent :data-empty-text="emptyText" class="select-content" tabindex="0">
            <ListboxItem v-for="item in filteredFrameworks" :key="item.value" :value="item.label" @select="select(item)"
                         :disabled="Boolean(item.disabled)"
                         class="select-content__list-item">
              <slot name="list-item" :item="item">
                <span class="truncate ">{{ item.label }}</span>
                <ListboxItemIndicator class="ml-auto inline-flex items-center justify-center">
                  <LucideCheckIcon />
                </ListboxItemIndicator>
              </slot>
            </ListboxItem>
          </ListboxContent>
        </UiScrollArea>
        <!--     virtual scroll 사용 시-->
        <!--     Virtualizer 부모에 height, overflow-auto가 있어야 작동 함    -->
<!--       <ListboxContent data-empty-text="일치하는 키워드가 없습니다" class="select-content max-h-[calc(var(&#45;&#45;reka-popover-content-available-height)-80px)] overflow-y-auto"  tabindex="0">
          <ListboxVirtualizer :options="filteredFrameworks" v-slot="{ option : item}"  :estimate-size="32" class="">
            <ListboxItem :value="item" @select="()=>{searchValue = ''; selectValueSingle = item.label}"
                          :disabled="item.disabled"
                          class="select-content__list-item">
              <span>{{ item.label }}</span>
              <ListboxItemIndicator class="ml-auto inline-flex items-center justify-center">
                <LucideCheckIcon />
              </ListboxItemIndicator>
            </ListboxItem>
          </ListboxVirtualizer>
        </ListboxContent>-->
      </UiPopoverContent>
    </ListboxRoot>
  </UiPopover>
</template>
<script setup lang="ts">
import {
  ListboxContent,
  ListboxFilter,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
  useFilter,
  TagsInputClear,
  ListboxVirtualizer

} from "reka-ui"
import {computed, type HTMLAttributes, ref} from "vue"
import {InputBase} from "@/markup/components/inputs";
import Tags from "@/markup/components/tag/Tags.vue";
import {cn} from "@/lib/utils.ts";
interface ListItem {
  label: string
  value: string | number
  [key: string]: any
}
const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    placeholder?: string
    disabled?: boolean
    multiple?: boolean
    ariaInvalid?: boolean
    listItem?: ListItem[]
    emptyText?: string
  }>(),
  {
    placeholder: '내용을 입력하세요',
    disabled: true,
    multiple:false,
    ariaInvalid:false,
    listItem: () => [],
    emptyText:'일치하는 키워드가 없습니다'
  }
)

const searchValue = ref('')
const selectValue = ref<string[]>([])
const selectValueSingle = defineModel('selectValueSingle')
const open = ref(false)
const { contains } = useFilter({ sensitivity: 'base' })


const filteredFrameworks = computed(() =>
  searchValue.value === '' ? props.listItem : props.listItem.filter(option => contains(option.label, searchValue.value)),
)

const select = (item: ListItem) => {
  searchValue.value = '';
  selectValueSingle.value = item.label;
  open.value = false
}

</script>


