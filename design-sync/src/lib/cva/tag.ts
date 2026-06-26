import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export const tagsVariants = cva(
  "flex flex-row items-center justify-between pl-padding-md pr-padding-md gap-1 caption__bold inline-flex rounded-sm h-6 min-w-0 max-w-full truncate border-1",
  {
    variants: {
      type: {
        tag:  '',
        chip: 'rounded-full',
      },
      variant: {
        default:   'bg-primary text-neutral border-transparent data-[slot=tag]:bg-gray-900',
        secondary: 'bg-primary-light text-primary border-transparent',
        outline:   'bg-background border-border data-[slot=tag]:text-muted [&_[data-slot=close]]:text-muted [&_[data-slot=close]:hover]:text-default',
        info:      'bg-gray-200 border-transparent',
        disabled:  'bg-disabled text-disabled-text border-border',
      },
    },
    defaultVariants: {
      variant: 'default',
      type: 'tag',
    },
    compoundVariants: [
      { type: 'chip', variant: 'secondary', class: 'border-primary' },
    ],
  },
)

export type TagsVariants = VariantProps<typeof tagsVariants>
