<template>
  <UiSidebar class="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row" v-bind="props">
    <UiSidebar collapsible="none" class="bg-primary w-(--sidebar-width-icon) group-data-[collapsible=icon]:w-0">
      <UiSidebarHeader class="p-4">
        <div class="flex items-center justify-center rounded-sm bg-background text-primary size-8 p-1">
          <img src="@/assets/images/logo.svg" alt="logo" class="size-full object-contain object-center">
        </div>

      </UiSidebarHeader>

      <UiSidebarContent>
        <MainMenuIcon :items="data.mainMenu" :activeItem="activeItem" @update:activeItem="updateActiveItem"/>
      </UiSidebarContent>

    </UiSidebar>

    <!--  펼침 메뉴  -->
    <UiSidebar collapsible="none" class="hidden flex-1 md:flex group-data-[collapsible=icon]:hidden border-border border-r gap-3">
      <UiSidebarHeader class="justify-center p-3 h-16 overflow-hidden">
        <p class="title__bold text-default"> JKND </p>
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
  Blocks,
  Building2, DraftingCompass, IdCard, Info, Package,
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
        {
          title: '창고 관리',
          url: '/markup/basic/warehouse',
          isActive:false
        },
        {
          title: '판매처 관리',
          childItem: [
            {
              title: '홀세일 판매처 관리',
              url: '/markup/basic/whole-sale',
              isActive:false
            },
            {
              title: '오프라인 판매처 관리',
              url: '/markup/basic/offline-sale',
              isActive:false
            },
            {
              title: '온라인 판매처 관리',
              url: '/markup/basic/online-sale',
              isActive:false
            },

          ]
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
      title: '물류 관리',
      url: '#',
      icon: Package,
      isActive: false,
      subItems: [
        {
          title:'물류 현황',

        },
        {
          title:'물류 기본정보',

        },
        {
          title:'입고 관리',
          childItem: [
            {
              title: '입고 예정 관리',
              url: '/markup/logistics/expected-receive',
            },
            {
              title: '입고 확정',
              url: '/markup/logistics/confirm-receive',
            },
            {
              title: '입고 현황',
              url: '/markup/logistics/status-receive',
            },
          ]
        },
        {
          title:'재고 관리',

        },
        {
          title:'출고 관리',

        },
        {
          title:'교환/반품 처리',

        },
        {
          title:'배송 관리',

        },
        {
          title:'재고 실사',

        },
      ]
    },
    {
      title: '외부 연동 관리',
      url: '#',
      icon: Blocks,
      isActive: false,
      subItems: [
        {
          title:'WMS 연동 관리',
          childItem: [
            {
              title: '창고 연동 관리',
              url: '/markup/integration/warehouse',
            },
            {
              title: '매장(판매처) 연동 관리',
              url: '/markup/integration/sales',
            },
            {
              title: '입고처(업체) 연동 관리',
              url: '/markup/integration/partner',
            },
            {
              title: '상품(SKU) 연동 관리',
              url: '/markup/integration/sku',
            },
          ]
        },

      ],
    },
    {
      title: 'MD 관리',
      url: '#',
      icon: IdCard,
      isActive: false,
      subItems: [
        {
          title:'재고 배분관리',
          childItem: [
            {
              title: '홀세일 수주 관리',
              url: '/markup/md/whole-sale-order',
            },
            {
              title: '해외직출 수주 관리',
              url: '/markup/md/drop-ship-order',
            },
            {
              title: '재고 가용화',
              url: '/markup/md/stock-available',
            },
            {
              title: '오프라인 일괄 배분',
              url: '/markup/md/offline-allocation',
            },
            {
              title: '온라인 일괄 배분',
              url: '/markup/md/online-allocation',
            },
            {
              title: '보충 요청 관리',
              url: '/markup/md/stock-replenishment',
            },
            {
              title: 'RT 요청 관리',
              url: '/markup/md/replenishment-task',
            },
            {
              title: '할인 설정 관리',
              url: '/markup/md/discount-setting',
            },
          ]
        },

      ],
    },
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
