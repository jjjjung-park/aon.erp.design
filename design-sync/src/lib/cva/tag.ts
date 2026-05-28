import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export const tagsVariants = cva(
  "flex flex-row items-center justify-between pl-padding-md pr-padding-md gap-1 caption__bold inline-flex rounded-sm h-6 min-w-0 max-w-full truncate",
  {
    variants: {
      type: {
        tag:  'border-transparent',
        chip: 'rounded-full border-1',
      },
      variant: {
        default:   'bg-primary text-primary-foreground border-primary data-[slot=tag]:bg-gray-600',
        secondary: 'bg-primary-light text-primary border-primary',
        outline:   'bg-background border-border border-1 data-[slot=tag]:text-secondary [&_[data-slot=close]]:text-secondary [&_[data-slot=close]:hover]:text-default-text',
        info:      'bg-gray-200 border-border',
      },
    },
    defaultVariants: {
      variant: 'default',
      type: 'tag',
    },
  },
)

export type TagsVariants = VariantProps<typeof tagsVariants>
