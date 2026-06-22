import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import 'vue-sonner/style.css'
import * as LucideIcons from 'lucide-vue-next'
import { Button } from '@/ui/button'
import { Badge } from '@/ui/badge'
import { Separator } from '@/ui/separator'
import { Skeleton } from '@/ui/skeleton'
import { Spinner } from '@/ui/spinner'
import { Label } from '@/ui/label'
import { Input } from '@/ui/input'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from '@/ui/input-group'
import { Checkbox } from '@/ui/checkbox'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/ui/select'
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger } from '@/ui/combobox'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from '@/ui/pagination'
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@/ui/popover'
import { ScrollArea, ScrollBar } from '@/ui/scroll-area'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/ui/sheet'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem } from '@/ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/tooltip'
import { Calendar } from '@/ui/calendar'
import { RangeCalendar } from '@/ui/range-calendar'
import { TagsInput, TagsInputItem } from '@/ui/tags-input'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/ui/empty'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/ui/table'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/accordion'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarTrigger, SidebarSeparator } from '@/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/ui/collapsible'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/carousel'
import { Progress } from '@/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/ui/resizable'
import { Toaster } from '@/ui/sonner'
import { Alert, AlertTitle, AlertDescription } from '@/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import YearPicker from '@/ui/aon/year-picker/index.vue'
import YearRange from '@/ui/aon/year-range/index.vue'

const app = createApp(App)

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
app.component('UiInputGroupText', InputGroupText)
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
app.component('UiDropdownMenuGroup', DropdownMenuGroup)
app.component('UiDropdownMenuLabel', DropdownMenuLabel)
app.component('UiDropdownMenuItem', DropdownMenuItem)
app.component('UiDropdownMenuSeparator', DropdownMenuSeparator)
app.component('UiDropdownMenuTrigger', DropdownMenuTrigger)
app.component('UiDropdownMenuRadioGroup', DropdownMenuRadioGroup)
app.component('UiDropdownMenuRadioItem', DropdownMenuRadioItem)
app.component('UiDropdownMenuCheckboxItem', DropdownMenuCheckboxItem)
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
app.component('UiAlert', Alert)
app.component('UiAlertTitle', AlertTitle)
app.component('UiAlertDescription', AlertDescription)
app.component('UiTabs', Tabs)
app.component('UiTabsContent', TabsContent)
app.component('UiTabsList', TabsList)
app.component('UiTabsTrigger', TabsTrigger)
app.component('UiDatePicker', YearPicker)
app.component('UiYearRange', YearRange)

Object.entries(LucideIcons).forEach(([name, component]) => {
  if (/^[A-Z]/.test(name)) {
    app.component(`Lucide${name}`, component as any)
  }
})

app.mount('#app')
