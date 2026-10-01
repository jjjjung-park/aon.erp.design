<template>
  <header class="flex h-10 shrink-0 items-center w-full px-5 gap-3 bg-background border-b-1 border-border">
    <UiSidebarTrigger :icon="!open?ArrowRight:ArrowLeft" variant="outline" size="icon-sm" class=""/>

    <div class="flex items-center justify-between w-full">
      <!--  브랜드가 단건일때    -->
      <!--      <div class="flex gap-2 items-center">
        <span class="truncate">thisisneverthat</span>
      </div>-->
      <!--  브랜드 여러건일때 /  셀렉트 사이즈 변경 w-60 > w-80    -->
      <ComboboxTag class="w-80" :placeholder="'브랜드를 선택해 주세요'" :list-item="brands" v-model:selectValueSingle="selectBrand">
        <template #list-item="{item}">
          <div class="group size-full flex gap-2 items-center">
            <span class="truncate">{{ item.label }}</span>
            <!--     평소엔 안보이고 hover, 기본 설정된 브랜드일 때만 보이게 처리       -->
            <UiButton variant="ghost" :class="['hover:bg-transparent ml-auto group-hover:inline-flex', item.value === settingBrand?'inline-flex':'hidden']" size="icon" @click.prevent.stop="defaultSet(item)">
              <!--     기본 설정되면 색상 변경       -->
              <LucideStar :fill=" item.value === settingBrand?'var(--color-primary)':'none'" :class=" item.value === settingBrand ? 'text-primary':'text-subtle-text'"/>
            </UiButton>
          </div>
        </template>
      </ComboboxTag>

      <div class="flex items-center gap-2">
        <div class="gap-2 flex items-center">
          <UiButton class="text-muted relative " variant="ghost" size="icon" @click="openAlert = true">
            <LucideBell />
            <UiBadge size="dot" class="bg-primary absolute top-1 right-1" />
          </UiButton>
          <UiSeparator orientation="vertical" size="md"/>
          <UiButton class="text-muted relative " variant="ghost" size="icon">
            <LucideSettings class=""/>
            <UiBadge size="dot" class="bg-success absolute top-1 right-1" />
          </UiButton>
          <UiSeparator orientation="vertical" size="md"/>
        </div>
        <UiDropdownMenu>
          <UiDropdownMenuTrigger class="flex items-center text-left gap-2 hover:cursor-pointer">
            <!--  프로필 이미지가 없는 경우   -->
            <div class=" rounded-full overflow-hidden text-center ">
              <img src="@/assets/images/ico/avatar-default.svg" alt="avatar" class="size-6 object-cover"/>
            </div>
            <!--  프로필 이미지가 있는 경우   -->
            <div class=" rounded-full overflow-hidden text-center ">
              <img src="@/assets/images/logo.svg" alt="avatar" class="size-6 object-cover"/>
            </div>
            <div class="h-8 flex flex-col">
              <p class="caption__bold">홍길동님</p>
              <span class="caption text-muted">안녕하시와요</span>
            </div>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent class="">
            <UiDropdownMenuLabel>My Account</UiDropdownMenuLabel>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem><LucideUser/>Profile</UiDropdownMenuItem>
            <UiDropdownMenuItem>Billing</UiDropdownMenuItem>
            <UiDropdownMenuItem>Team</UiDropdownMenuItem>
            <UiDropdownMenuItem>Subscription</UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>

      </div>
    </div>
  </header>
  <PushAlert v-model:open="openAlert"/>
</template>
<script setup lang="ts">
import {ArrowRight, ArrowLeft} from 'lucide-vue-next';
import {useSidebar} from "@/ui/sidebar";
import ComboboxTag from "@/markup/components/select/ComboboxTag.vue";
import PushAlert from "@/markup/components/sheet/PushAlert.vue";

const {open} = useSidebar();

const brands = [
  {label:'THISISNEVERTHAT', value:'thisisneverthat'},
  {label:'YESEYESEE', value:'yeseyesee'},
  {label:'KHAKIS', value:'khakis'},
  {label:'TUNE', value:'tune'},
  {label:'TENUI', value:'tenui'},
  {label:'SUNLOVE', value:'sunlove'},
  {label:'LOADINGROOM', value:'loadingroom'},
  {label:'WELLBEING EXPRESS', value:'wellbeingExpress'},
  {label:'KATA', value:'kata'},
]

const selectBrand = ref<string>('thisisneverthat')
const settingBrand = ref<string>('thisisneverthat')
const defaultSet = (item:any) => {
  if(brands.map((brand:any) => brand.value === item.value)){
    settingBrand.value = item.value
  }
}

const openAlert = ref<boolean>(false)
</script>
