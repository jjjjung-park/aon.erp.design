<template>
  <UiSidebar class="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row" v-bind="props">
    <UiSidebar collapsible="none" class="bg-primary w-(--sidebar-width-icon) group-data-[collapsible=icon]:w-0">
      <UiSidebarHeader class="p-4">
        <div class="flex items-center justify-center rounded-sm bg-white text-primary size-8">
          <img src="@/assets/images/logo.svg" alt="logo" class="">
        </div>

      </UiSidebarHeader>

      <UiSidebarContent>
        <MainMenuIcon :items="data.mainMenu" :activeItem="activeItem" @update:activeItem="updateActiveItem"/>
      </UiSidebarContent>

    </UiSidebar>

    <!--  펼침 메뉴  -->
    <UiSidebar collapsible="none" class="hidden flex-1 md:flex group-data-[collapsible=icon]:hidden border-border border-r gap-3">
      <UiSidebarHeader class="items-center px-padding-lg py-0">
        <UiSidebarMenuButton size="lg" class=" title__bold text-default p-0 h-16">
          AON ERP System
        </UiSidebarMenuButton>
      </UiSidebarHeader>

      <UiSidebarGroup class="py-0 px-3">
        <ComboboxBase>
          <template #combobox-list>
            <UiComboboxGroup class="">
              <!--     1뎁스에 키워드 있을 때        -->
              <UiComboboxItem value="1depth">
                <p class="truncate">
                  기업 <span class="font-bold">관리</span>
                </p>
              </UiComboboxItem>
              <UiComboboxItem value="2depth" class="pl-6">
                <p class="truncate">
                  조직 <span class="font-bold">관리</span>
                </p>
              </UiComboboxItem>
              <UiComboboxItem value="3depth" class="pl-8">
                <p class="truncate">
                  복리 후생 <span class="font-bold">관리</span>
                </p>
              </UiComboboxItem>
              <!--     2뎁스에 키워드 있을 때        -->
              <UiComboboxItem value="2depth">
                <p class="truncate">
                  소속 <span class="font-bold">관리</span>
                </p>
              </UiComboboxItem>
              <UiComboboxItem value="3depth" class="pl-6">
                <p class="truncate">
                  브랜드 <span class="font-bold">관리</span>
                </p>
              </UiComboboxItem>
              <!--     3뎁스에 키워드 있을 때        -->
              <UiComboboxItem value="3depth">
                <p class="truncate">
                  예산 <span class="font-bold">관리</span>
                </p>
              </UiComboboxItem>
            </UiComboboxGroup>
          </template>
        </ComboboxBase>
      </UiSidebarGroup>

      <UiSidebarContent>
        <MainMenuText :items="data.mainMenu" :activeItem="activeItem" @update:activeItem="updateActiveItem"/>
      </UiSidebarContent>

    </UiSidebar>
  </UiSidebar>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {type SidebarProps} from "@/ui/sidebar";
import {
  Building2, DraftingCompass, Info,
  Puzzle, Scissors,
  Settings,
} from 'lucide-vue-next'
import MainMenuIcon from "./MainMenuIcon.vue";
import MainMenuText from "./MainMenuText.vue";
import ComboboxBase from "@/markup/components/select/ComboboxBase.vue";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})


// menu sample data.
const data = {
  mainMenu: [
    {
      title: '시스템 관리',
      url: '#',
      icon: Settings,
      isActive: false,
      subItems: [
        {
          title:'권한 관리',
          childItem: [
            {
              title: '컴포넌트 관리',
              url: '/markup/system/component',
            },
            {
              title: '메뉴 관리',
              url: '/markup/system/menu',
            },
            {
              title: '권한 그룹 관리',
              url: '/markup/system/permissionGroups',
            },
            {
              title: '사용자 권한 그룹 관리',
              url: '/markup/system/userGroups',
            },
            {
              title: '사용자 권한 관리',
              url: '/markup/system/user',
            },
          ]
        },
        {
          title:'코드 관리',
          url: '#',
        }
      ],
    },
    {
      title: '기업 관리',
      url: '#',
      icon: Building2,
      subItems: [
        {
          title: '소속 관리',
          url:'/markup/company/business',
          isActive:true
        },
        {
          title: '브랜드 관리',
          url:'/markup/company/brand',
          isActive:false
        },
        {
          title: '조직 관리',
          childItem: [
            /*{
              title: '직위/직책 관리',
              url: '/markup/company/organization/position',
              isActive:true
            },*/
            {
              title: '부서 관리',
              url: '/markup/company/organization/department',
              isActive:false
            },
            {
              title: '인사 관리',
              url: '/markup/company/organization/hr',
              isActive:false
            },
          ]
        },

      ],
    },
    {
      title: '기본 정보 관리',
      url: '#',
      icon: Info,
      isActive: false,
      subItems: [
        {
          title: '업체 관리',
          url: '/markup/basic/partner',
          isActive:false
        },
        {
          title: '판매 브랜드 관리',
          url: '/markup/basic/sell-brand',
          isActive:false
        },

        {
          title: '컬러 관리',
          url: '/markup/basic/color',
          isActive:false
        },
        {
          title: '사이즈 관리',
          url: '/markup/basic/size',
          isActive:false
        },
        {
          title: '시즌 관리',
          url: '/markup/basic/season',
          isActive:false
        },
        {
          title: '생산 환율 관리',
          url: '/markup/basic/exchange-rate',
          isActive:false
        },

      ],
    },
    {
      title: '기획 관리',
      url: '#',
      icon: DraftingCompass,
      isActive: false,
      subItems: [
        {
          title: '공유문서 관리',
          url: '/markup/plan/share',
          isActive:true
        },
        {
          title: '제품/상품 관리',
          childItem: [
            {
              title: '스타일 관리',
              url: '/markup/plan/product/style',
              isActive:false
            },
            {
              title: 'SKU 관리',
              url: '/markup/plan/product/sku',
              isActive:false
            },
            {
              title: '바코드 관리',
              url: '/markup/plan/product/barcode',
              isActive:false
            },
          ]
        },
      ],
    },
    {
      title: '생산 관리',
      url: '#',
      icon: Scissors,
      isActive: false,
      subItems: [
        {
          title:'스타일 정보 관리',
          childItem: [
            {
              title: '스타일 생산 정보',
              url: '/markup/production/style',
            },
            {
              title: '사양/수출 정보 관리',
              url: '/markup/production/spec',
            },
          ]
        },
        {
          title:'완사입관리',
          childItem: [
            {
              title: 'BOM(원가견적서) 작성관리',
              url: '/markup/production/bom-vendor',
            },
            {
              title: 'BOM(원가견적서) 대사관리',
              url: '/markup/production/bom-internal',
            },
            {
              title: '완사입 발주관리',
              url: '/markup/production/order',
            },
            {
              title: '완사입 입고관리',
              url: '/markup/production/receive',
            },
          ]
        },
        {
          title:'생산 일정 관리',
          url: '/markup/production/schedule',
        },
        {
          title:'업체 일정 관리',
          childItem: [
            {
              title: '업체 생산 스케줄',
              url: '/markup/production/produce-schedule',
            },
            {
              title: '자재수급 일정 관리',
              url: '/markup/production/material-schedule',
            },
            {
              title: '생산 공정 일정 관리',
              url: '/markup/production/process-schedule',
            },
          ]
        },
        {
          title:'규격 정보 관리',
          childItem: [
            {
              title: '혼용율 정보 관리',
              url: '/markup/production/composition-info',
            },
            {
              title: '수출 정보 관리',
              url: '/markup/production/export-info',
            },
          ]
        },
        {
          title:'입고 예정 수량 관리',
          url: '/markup/production/expected-receive',
        },
      ]
    },
    {
      title: '컴포넌트 모음',
      url: '#',
      icon: Puzzle,
      isActive: false,
      subItems: [
        {
          title: 'atomic',
          url: '/markup/components/atomic',
          isActive:true
        },
        {
          title: 'molecule',
          url: '/markup/components/molecule',
          isActive:false
        },
        {
          title: 'organism',
          url: '/markup/components/organism',
          isActive:false
        },
        {
          title: 'structures',
          url: '/markup/components/structures',
          isActive:false
        },
        {
          title: 'structures2',
          url: '/markup/components/structures2',
          isActive:false
        },
        {
          title: 'skeleton',
          url: '/markup/components/skeleton',
          isActive:false
        },
        {
          title: 'brand change',
          url: '/markup/loading/brandChange',
          isActive:false
        },
        {
          title: 'table sample',
          url: '/markup/components/table',
          isActive:false
        },
      ],
    },

  ],

}

const activeItem = ref(data.mainMenu[0]);
const updateActiveItem = (item: any) => {
  activeItem.value = item;

}

</script>
