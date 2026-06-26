import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full caption__bold whitespace-nowrap shrink-0 [&>svg]:size-4 gap-1 [&>svg]:pointer-events-none  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow]",
  {
    variants: {
      variant: {
        /*일반*/
        default:
          "bg-primary text-neutral [a&]:hover:bg-primary/90",
        secondary:
          "border border-primary bg-primary-light text-primary [a&]:hover:bg-secondary/90",
        destructive:
         "bg-danger text-neutral [a&]:hover:bg-destructive/90 ",
        /*상태별*/
        info:
          "bg-subtle text-muted border",
        outline:
          "border text-default border-border bg-background [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        process:
          "bg-primary-light text-primary  border  border-primary",
        accept:
          "bg-success-light text-success  border border-success",
        reject:
          "bg-danger-light text-danger border  border-danger",
        hold:
          "bg-warning-light text-warning  border border-warning",
        count:
          "[&>svg]:size-3",
      },
      tone: {
        default: "",
        important: ""
      },
      size:{
        "sm":'h-5 px-1 min-w-5',
        "default":'h-6 min-w-6 px-padding-lg ',
        'dot':'w-1 h-1 !p-0'
      }
    },
    compoundVariants: [
      {
        variant: "count",
        tone: "default",
        class: "bg-subtle text-muted"
      },
      {
        variant: "count",
        tone: "important",
        class: "bg-danger text-neutral"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)
export type BadgeVariants = VariantProps<typeof badgeVariants>
