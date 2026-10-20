import { cva } from 'class-variance-authority'
export { default as Separator } from "./Separator.vue"

export const separatorVariants = cva(
  'shrink-0 data-[orientation=vertical]:w-px',
  {
    variants: {
      size: {
        sm: 'data-[orientation=vertical]:h-3',
        md: 'data-[orientation=vertical]:h-4',
        full:'data-[orientation=vertical]:h-full'
      },
      orientation: {
        vertical: 'bg-border',
        horizontal: 'bg-surface-muted h-2',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
)

export type SeparatorVariants = typeof separatorVariants
