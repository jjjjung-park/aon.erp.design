const r=["LucidePlus","LucideTrash2","LucideCircleAlert","LucideSearch","LucideSquarePen","LucideCalendar","LucideEqual","LucideInfo","LucideCheck","LucideDownload","LucideEye","LucidePaperclip","LucideChevronDown","LucidePin","LucideSettings"],a=[{label:"캡션",desc:"12px 텍스트 옆 인라인",sizeClass:"size-3",strokeVar:"--shape-stroke-xs",strokeLabel:"shape-stroke-xs (1.4px)",px:12},{label:"바디",desc:"16px 텍스트 옆 기본",sizeClass:"size-4",strokeVar:"--shape-stroke-sm",strokeLabel:"shape-stroke-sm (1.6px)",px:16},{label:"스탠드얼론",desc:"한 줄에 아이콘만",strokeLabel:"shape-stroke-md (2px)",px:24},{label:"강조",desc:"48px 대형 강조 아이콘",sizeClass:"size-12",strokeLabel:"shape-stroke-md (2px)",px:48}],i={title:"Foundation/Icons",tags:["autodocs","done"],parameters:{layout:"centered"}},e={name:"사이즈 규칙",render:()=>({setup(){return{sizeRules:a,iconList:r}},template:`
      <div class="flex flex-col gap-8 p-4 min-w-[560px]">
        <div v-for="rule in sizeRules" :key="rule.label" class="flex items-center gap-6 py-4 border-b border-border last:border-0">
          <div class="w-24 flex flex-col gap-1 shrink-0">
            <p class="font-bold text-sm">{{ rule.label }}</p>
            <p class="caption text-muted">{{ rule.px }}px / stroke-{{ rule.stroke }}</p>
          </div>
          <div class="flex items-center gap-1 flex-1">
            <component
              v-for="icon in iconList.slice(0, 8)"
              :key="icon"
              :is="icon"
              :class="rule.sizeClass"
              :style="'stroke-width: var(' + rule.strokeVar + ')'"
              class="text-default"
            />
          </div>
          <div class="flex flex-col gap-0.5 shrink-0 text-right">
            <div class="flex items-center gap-1 text-muted justify-end">
              <component :is="'LucideInfo'" :class="rule.sizeClass" :style="'stroke-width: var(' + rule.strokeVar + ')'" />
              <span :style="'font-size:' + rule.px + 'px'">텍스트 예시</span>
            </div>
            <p class="caption text-muted">{{ rule.strokeLabel }}</p>
          </div>
        </div>
      </div>
    `})};var s,l,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '사이즈 규칙',
  render: () => ({
    setup() {
      return {
        sizeRules,
        iconList
      };
    },
    template: \`
      <div class="flex flex-col gap-8 p-4 min-w-[560px]">
        <div v-for="rule in sizeRules" :key="rule.label" class="flex items-center gap-6 py-4 border-b border-border last:border-0">
          <div class="w-24 flex flex-col gap-1 shrink-0">
            <p class="font-bold text-sm">{{ rule.label }}</p>
            <p class="caption text-muted">{{ rule.px }}px / stroke-{{ rule.stroke }}</p>
          </div>
          <div class="flex items-center gap-1 flex-1">
            <component
              v-for="icon in iconList.slice(0, 8)"
              :key="icon"
              :is="icon"
              :class="rule.sizeClass"
              :style="'stroke-width: var(' + rule.strokeVar + ')'"
              class="text-default"
            />
          </div>
          <div class="flex flex-col gap-0.5 shrink-0 text-right">
            <div class="flex items-center gap-1 text-muted justify-end">
              <component :is="'LucideInfo'" :class="rule.sizeClass" :style="'stroke-width: var(' + rule.strokeVar + ')'" />
              <span :style="'font-size:' + rule.px + 'px'">텍스트 예시</span>
            </div>
            <p class="caption text-muted">{{ rule.strokeLabel }}</p>
          </div>
        </div>
      </div>
    \`
  })
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const o=["SizeRule"];export{e as SizeRule,o as __namedExportsOrder,i as default};
