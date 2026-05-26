import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

export const tagsVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-full caption__bold whitespace-nowrap shrink-0 px-padding-lg transition-[color,box-shadow]",
  {
    variants: {
      variant: {
        default:   "bg-primary text-primary-foreground",
        secondary: "border border-primary bg-primary-light text-primary",
        outline:   "border text-default-text border-border bg-background",
        process:   "bg-primary-light text-primary border border-primary",
        accept:    "bg-success-light text-success border border-success",
        reject:    "bg-danger-light text-danger border border-danger",
        hold:      "bg-warning-light text-warning border border-warning",
        info:      "bg-info-light border-info border",
      },
      type: {
        tag:    "h-6 text-xs",
        chip:   "h-5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      type: "tag",
    },
  },
)

export type TagsVariants = VariantProps<typeof tagsVariants>
