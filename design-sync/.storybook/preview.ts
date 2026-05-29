import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3'
import { createRouter, createMemoryHistory } from 'vue-router'
import '../src/assets/index.css'
import 'vue-sonner/style.css'

// Lucide 아이콘 전체 (Lucide prefix로 자동 등록)
import * as LucideIcons from 'lucide-vue-next'

// UI 컴포넌트
import { Button } from '@/ui/button'
import { Badge } from '@/ui/badge'
import { Separator } from '@/ui/separator'
import { Skeleton } from '@/ui/skeleton'
import { Spinner } from '@/ui/spinner'
import { Label } from '@/ui/label'
import { Input } from '@/ui/input'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/ui/input-group'
import { Checkbox } from '@/ui/checkbox'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger } from '@/ui/combobox'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from '@/ui/pagination'
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@/ui/popover'
import { ScrollArea, ScrollBar } from '@/ui/scroll-area'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/ui/sheet'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/tooltip'
import { Calendar } from '@/ui/calendar'
import { RangeCalendar } from '@/ui/range-calendar'
import { TagsInput, TagsInputItem } from '@/ui/tags-input'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/ui/empty'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/ui/table'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion'
import {
  DropdownMenuGroup, DropdownMenuLabel, DropdownMenuRadioGroup,
  DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuCheckboxItem,
} from '@/ui/dropdown-menu'
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel,
  SidebarGroupContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
  SidebarProvider, SidebarTrigger, SidebarSeparator,
} from '@/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/ui/collapsible'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/carousel'
import { Progress } from '@/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/ui/resizable'
import { Toaster } from '@/ui/sonner'
import YearPicker from '@/ui/aon/year-picker/index.vue'
import YearRange from '@/ui/aon/year-range/index.vue'

// ✅ Storybook Vue3의 setup() 호출 — 전역 컴포넌트 등록
// export const setup = ... 방식은 Storybook 8+ 에서 작동 안 함
// @storybook/vue3 의 setup()을 직접 호출해야 PLUGINS_SETUP_FUNCTIONS에 등록됨
const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }],
})

setup((app) => {
  app.use(router)
  app.component('UiButton', Button)
  app.component('UiBadge', Badge)
  app.component('UiSeparator', Separator)
  app.component('UiSkeleton', Skeleton)
  app.component('UiSpinner', Spinner)
  app.component('UiLabel', Label)
  app.component('UiInput', Input)
  app.component('UiInputGroup', InputGroup)
  app.component('UiInputGroupAddon', InputGroupAddon)
  app.component('UiInputGroupButton', InputGroupButton)
  app.component('UiInputGroupInput', InputGroupInput)
  app.component('UiCheckbox', Checkbox)
  app.component('UiSelect', Select)
  app.component('UiSelectContent', SelectContent)
  app.component('UiSelectGroup', SelectGroup)
  app.component('UiSelectItem', SelectItem)
  app.component('UiSelectTrigger', SelectTrigger)
  app.component('UiSelectValue', SelectValue)
  app.component('UiCombobox', Combobox)
  app.component('UiComboboxAnchor', ComboboxAnchor)
  app.component('UiComboboxEmpty', ComboboxEmpty)
  app.component('UiComboboxGroup', ComboboxGroup)
  app.component('UiComboboxInput', ComboboxInput)
  app.component('UiComboboxItem', ComboboxItem)
  app.component('UiComboboxList', ComboboxList)
  app.component('UiComboboxTrigger', ComboboxTrigger)
  app.component('UiPagination', Pagination)
  app.component('UiPaginationContent', PaginationContent)
  app.component('UiPaginationEllipsis', PaginationEllipsis)
  app.component('UiPaginationItem', PaginationItem)
  app.component('UiPaginationNext', PaginationNext)
  app.component('UiPaginationPrevious', PaginationPrevious)
  app.component('UiPopover', Popover)
  app.component('UiPopoverAnchor', PopoverAnchor)
  app.component('UiPopoverContent', PopoverContent)
  app.component('UiPopoverTrigger', PopoverTrigger)
  app.component('UiScrollArea', ScrollArea)
  app.component('UiScrollAreaScrollBar', ScrollBar)
  app.component('UiSheet', Sheet)
  app.component('UiSheetClose', SheetClose)
  app.component('UiSheetContent', SheetContent)
  app.component('UiSheetFooter', SheetFooter)
  app.component('UiSheetHeader', SheetHeader)
  app.component('UiSheetTitle', SheetTitle)
  app.component('UiDialog', Dialog)
  app.component('UiDialogClose', DialogClose)
  app.component('UiDialogContent', DialogContent)
  app.component('UiDialogDescription', DialogDescription)
  app.component('UiDialogFooter', DialogFooter)
  app.component('UiDialogHeader', DialogHeader)
  app.component('UiDialogTitle', DialogTitle)
  app.component('UiDropdownMenu', DropdownMenu)
  app.component('UiDropdownMenuContent', DropdownMenuContent)
  app.component('UiDropdownMenuItem', DropdownMenuItem)
  app.component('UiDropdownMenuTrigger', DropdownMenuTrigger)
  app.component('UiTooltip', Tooltip)
  app.component('UiTooltipContent', TooltipContent)
  app.component('UiTooltipProvider', TooltipProvider)
  app.component('UiTooltipTrigger', TooltipTrigger)
  app.component('UiCalendar', Calendar)
  app.component('UiRangeCalendar', RangeCalendar)
  app.component('UiTagsInput', TagsInput)
  app.component('UiTagsInputItem', TagsInputItem)
  app.component('UiEmpty', Empty)
  app.component('UiEmptyContent', EmptyContent)
  app.component('UiEmptyDescription', EmptyDescription)
  app.component('UiEmptyHeader', EmptyHeader)
  app.component('UiEmptyMedia', EmptyMedia)
  app.component('UiEmptyTitle', EmptyTitle)
  app.component('UiTable', Table)
  app.component('UiTableBody', TableBody)
  app.component('UiTableCell', TableCell)
  app.component('UiTableHead', TableHead)
  app.component('UiTableHeader', TableHeader)
  app.component('UiTableRow', TableRow)
  app.component('UiAccordion', Accordion)
  app.component('UiAccordionContent', AccordionContent)
  app.component('UiAccordionItem', AccordionItem)
  app.component('UiAccordionTrigger', AccordionTrigger)
  app.component('UiDropdownMenuGroup', DropdownMenuGroup)
  app.component('UiDropdownMenuLabel', DropdownMenuLabel)
  app.component('UiDropdownMenuSeparator', DropdownMenuSeparator)
  app.component('UiDropdownMenuRadioGroup', DropdownMenuRadioGroup)
  app.component('UiDropdownMenuRadioItem', DropdownMenuRadioItem)
  app.component('UiDropdownMenuCheckboxItem', DropdownMenuCheckboxItem)
  app.component('UiSidebar', Sidebar)
  app.component('UiSidebarContent', SidebarContent)
  app.component('UiSidebarFooter', SidebarFooter)
  app.component('UiSidebarGroup', SidebarGroup)
  app.component('UiSidebarGroupLabel', SidebarGroupLabel)
  app.component('UiSidebarGroupContent', SidebarGroupContent)
  app.component('UiSidebarHeader', SidebarHeader)
  app.component('UiSidebarInset', SidebarInset)
  app.component('UiSidebarMenu', SidebarMenu)
  app.component('UiSidebarMenuButton', SidebarMenuButton)
  app.component('UiSidebarMenuItem', SidebarMenuItem)
  app.component('UiSidebarMenuSub', SidebarMenuSub)
  app.component('UiSidebarMenuSubButton', SidebarMenuSubButton)
  app.component('UiSidebarMenuSubItem', SidebarMenuSubItem)
  app.component('UiSidebarProvider', SidebarProvider)
  app.component('UiSidebarTrigger', SidebarTrigger)
  app.component('UiSidebarSeparator', SidebarSeparator)
  app.component('UiCollapsible', Collapsible)
  app.component('UiCollapsibleContent', CollapsibleContent)
  app.component('UiCollapsibleTrigger', CollapsibleTrigger)
  app.component('UiCard', Card)
  app.component('UiCardAction', CardAction)
  app.component('UiCardContent', CardContent)
  app.component('UiCardDescription', CardDescription)
  app.component('UiCardFooter', CardFooter)
  app.component('UiCardHeader', CardHeader)
  app.component('UiCardTitle', CardTitle)
  app.component('UiCarousel', Carousel)
  app.component('UiCarouselContent', CarouselContent)
  app.component('UiCarouselItem', CarouselItem)
  app.component('UiCarouselNext', CarouselNext)
  app.component('UiCarouselPrevious', CarouselPrevious)
  app.component('UiProgress', Progress)
  app.component('UiRadioGroup', RadioGroup)
  app.component('UiRadioGroupItem', RadioGroupItem)
  app.component('UiResizableHandle', ResizableHandle)
  app.component('UiResizablePanel', ResizablePanel)
  app.component('UiResizablePanelGroup', ResizablePanelGroup)
  app.component('UiToaster', Toaster)
  app.component('UiDatePicker', YearPicker)
  app.component('UiYearRange', YearRange)

  // Lucide 아이콘 전체를 Lucide prefix로 전역 등록 (대문자로 시작하는 것만)
  Object.entries(LucideIcons).forEach(([name, component]) => {
    if (/^[A-Z]/.test(name)) {
      app.component(`Lucide${name}`, component as any)
    }
  })
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    },
    options: {
      storySort: (a, b) => {
        const categoryOrder = ['액션', '데이터 입력', '데이터 표시', '피드백', '오버레이', '내비게이션', '레이아웃']
        const itemOrder = {
          '액션':        ['Button', 'Dropdown'],
          '데이터 입력':  ['Input', 'Checkbox', 'RadioGroup', 'Select', 'DatePicker'],
          '데이터 표시':  ['Tag', 'Badge', 'Progress', 'Card', 'Carousel', 'Accordion', 'ListBlockItem', 'Table'],
          '피드백':      ['Alert', 'Toast', 'Empty'],
          '오버레이':    ['Tooltip', 'Modal', 'Sheet'],
          '내비게이션':  ['Tabs', 'Pagination'],
          '레이아웃':    ['Layout', 'TableLayout', 'Resizable'],
        }
        if (a.title === '소개') return -1
        if (b.title === '소개') return 1
        const [aCat, aItem] = a.title.split('/')
        const [bCat, bItem] = b.title.split('/')
        const aCatIdx = categoryOrder.indexOf(aCat)
        const bCatIdx = categoryOrder.indexOf(bCat)
        if (aCatIdx !== bCatIdx) {
          if (aCatIdx === -1) return 1
          if (bCatIdx === -1) return -1
          return aCatIdx - bCatIdx
        }
        const subOrder = itemOrder[aCat] || []
        const aItemIdx = subOrder.indexOf(aItem)
        const bItemIdx = subOrder.indexOf(bItem)
        if (aItemIdx === -1 && bItemIdx === -1) return 0
        if (aItemIdx === -1) return 1
        if (bItemIdx === -1) return -1
        return aItemIdx - bItemIdx
      },
    },
  },

  decorators: [
    (story) => ({
      components: { story },
      template: '<story />',
    })
  ],
}

export default preview
