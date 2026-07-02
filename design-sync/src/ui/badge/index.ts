import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full caption__bold whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow]",
  {
    variants: {
      variant: {
        /* 상태 */
        info:     "bg-subtle text-muted border",
        outline:  "border text-default border-border bg-background",
        process:  "bg-primary-light text-primary border border-primary",
        accept:   "bg-success-light text-success border border-success",
        reject:   "bg-danger-light text-danger border border-danger",
        hold:     "bg-warning-light text-warning border border-warning",
      },

      size: {
        dot: "w-1 h-1 px-0 rounded-full border-0",
        count:"h-5 px-padding-xxs min-w-5 border-0",
        default: "h-6 min-w-6 px-padding-xs",
      },
    },

    defaultVariants: {
      variant: "info",
      size: "default",
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
