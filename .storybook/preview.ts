import type { Preview, App } from '@storybook/vue3-vite'
import '../src/assets/index.css'

// Lucide 아이콘 (원본 프로젝트에서 자동 임포트된 것들)
import {
  AlertTriangle as LucideAlertTriangle,
  Calendar as LucideCalendar,
  Check as LucideCheck,
  CheckIcon as LucideCheckIcon,
  ChevronDown as LucideChevronDown,
  ChevronLeft as LucideChevronLeft,
  ChevronLeftIcon as LucideChevronLeftIcon,
  ChevronRight as LucideChevronRight,
  ChevronRightIcon as LucideChevronRightIcon,
  ChevronsLeft as LucideChevronsLeft,
  ChevronsRight as LucideChevronsRight,
  CircleAlert as LucideCircleAlert,
  Expand as LucideExpand,
  Eye as LucideEye,
  EyeClosed as LucideEyeClosed,
  FolderDown as LucideFolderDown,
  Info as LucideInfo,
  Minimize as LucideMinimize,
  Paperclip as LucidePaperclip,
  Plus as LucidePlus,
  Search as LucideSearch,
  Settings as LucideSettings,
  ShieldAlert as LucideShieldAlert,
  Trash as LucideTrash,
  Trash2 as LucideTrash2,
  User as LucideUser,
  X as LucideX,
} from 'lucide-vue-next'

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
import { TableCell, TableHead } from '@/ui/table'

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
    }
  },

  decorators: [
    (story, context) => ({
      components: { story },
      template: '<story />',
      // Ui* 전역 컴포넌트 등록
      setup() { return {} },
    })
  ],
}

// Ui* prefix 전역 컴포넌트 등록
export const setup = (app: App) => {
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
  app.component('UiTableCell', TableCell)
  app.component('UiTableHead', TableHead)

  // Lucide 아이콘 전역 등록
  app.component('LucideAlertTriangle', LucideAlertTriangle)
  app.component('LucideCalendar', LucideCalendar)
  app.component('LucideCheck', LucideCheck)
  app.component('LucideCheckIcon', LucideCheckIcon)
  app.component('LucideChevronDown', LucideChevronDown)
  app.component('LucideChevronLeft', LucideChevronLeft)
  app.component('LucideChevronLeftIcon', LucideChevronLeftIcon)
  app.component('LucideChevronRight', LucideChevronRight)
  app.component('LucideChevronRightIcon', LucideChevronRightIcon)
  app.component('LucideChevronsLeft', LucideChevronsLeft)
  app.component('LucideChevronsRight', LucideChevronsRight)
  app.component('LucideCircleAlert', LucideCircleAlert)
  app.component('LucideExpand', LucideExpand)
  app.component('LucideEye', LucideEye)
  app.component('LucideEyeClosed', LucideEyeClosed)
  app.component('LucideFolderDown', LucideFolderDown)
  app.component('LucideInfo', LucideInfo)
  app.component('LucideMinimize', LucideMinimize)
  app.component('LucidePaperclip', LucidePaperclip)
  app.component('LucidePlus', LucidePlus)
  app.component('LucideSearch', LucideSearch)
  app.component('LucideSettings', LucideSettings)
  app.component('LucideShieldAlert', LucideShieldAlert)
  app.component('LucideTrash', LucideTrash)
  app.component('LucideTrash2', LucideTrash2)
  app.component('LucideUser', LucideUser)
  app.component('LucideX', LucideX)
}

export default preview
