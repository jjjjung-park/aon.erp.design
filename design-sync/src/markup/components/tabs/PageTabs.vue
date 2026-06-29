<template>
  <UiScrollArea>
    <div class="flex pt-1 px-4 bg-light border-border relative border-b-1 h-11">
      <template v-for="(tab, index) in tabsList">
        <div ref="$tabItem" :data-status="tab.active" class=" flex items-center justify-between px-padding-sm min-w-[200px] h-full text-sm border-border font-bold cursor-pointer text-subtle-text hover:text-muted"
             :class="tab.active?'page-tab--active':''" @click="changeTab(tab.value)">
          <span class="truncate max-w-[220px]">{{tab.label + index}}</span>
          <UiButton size="icon-sm" variant="ghost" class="hover:bg-transparent text-subtle-text hover:text-muted">
            <LucideX/>
          </UiButton>
        </div>
      </template>
    </div>
    <UiScrollAreaScrollBar orientation="horizontal" />
  </UiScrollArea>
</template>

<script setup lang="ts">

const tabsList = ref<any>([
  {label:'tabs fdfdfdfdfdfdfddfddf', value:'tabs1', active:true},
  {label:'tabs', value:'tabs2', active:false},
  {label:'tabs', value:'tabs3', active:false},
  {label:'tabs', value:'tabs4', active:false},
  {label:'tabs', value:'tabs5', active:false},
])

const activeTab = ref<string>('tabs1')
const $tabItem = useTemplateRef<HTMLElement[]>('$tabItem');

onMounted(() => {
  const el = $tabItem.value?.find(item => item.dataset.status === 'true');
  el.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
})

const changeTab = (value:string) => {
  tabsList.value.forEach(item => item.active = item.value === value);
  activeTab.value = value
}
</script>

<style scoped>

</style>
