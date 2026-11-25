import type {VariantProps} from "class-variance-authority"
import {cva} from "class-variance-authority"


export const tagsVariants = cva(
  "flex flex-row items-center justify-between  inline-flex min-w-0 max-w-full truncate",
  {
    variants: {
      /* 칩과 태그 라운디드 통일 - 뱃지와 혼선 방지*/
      type: {
        tag: 'border-transparent',
        chip: 'border-1'
      },
      variant: {
        default: 'bg-primary text-neutral border-primary data-[slot=tag]:bg-default ',
        secondary: 'bg-primary-light text-primary border-primary ',
        outline: 'bg-background border-border border-1 data-[slot=tag]:text-muted [&_[data-slot=close]]:text-muted [&_[data-slot=close]:hover]:text-default',
        info: 'bg-subtle border text-muted border-border ',
        category: 'bg-current text-current border-current'
      },
      size:{
        default:'caption__bold px-padding-xs gap-1 rounded-sm h-6',
        sm:'text-[10px] font-bold gap-0.5 rounded-xs px-padding-xxs h-4',
      }

    },
    defaultVariants: {
      variant: "default",
      type: 'tag',
      size:'default'
    }
  }
)

export type TagsVariants = VariantProps<typeof tagsVariants>
