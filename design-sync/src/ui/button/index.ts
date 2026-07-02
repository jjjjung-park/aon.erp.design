import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Button } from "./Button.vue"

export const buttonVariants = cva(
    "inline-flex align-middle items-center justify-center gap-1  whitespace-nowrap rounded-sm  font-bold transition-all cursor-pointer " +
    "disabled:pointer-events-none [&_svg]:pointer-events-none disabled:bg-disabled disabled:border-0 disabled:text-disabled-text shrink-0 [&_svg]:shrink-0 outline-none " +
    " aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger focus-visible:ring-ring/50 focus-visible:ring-[2px] ",
    {
      variants: {
        variant: {
          default:
              "bg-primary text-neutral shadow-xs hover:bg-[var(--color-blue-600)] active:bg-[var(--color-blue-700)]",
          destructive:
              "bg-background text-danger border-danger border-1 shadow-xs hover:bg-danger-light ",
          outline:
              "border border-border bg-background shadow-xs hover:text-primary hover:border-primary active:bg-primary-light dark:bg-inputs/30 dark:border-border dark:hover:bg-inputs/50",
          secondary:
              "bg-primary-light border-primary border text-primary shadow-xs hover:bg-[var(--color-blue-200)] active:bg-[var(--color-blue-300)]",
          ghost:
              "text-default hover:bg-surface-muted dark:hover:bg-accent/50 disabled:bg-background ",
          link: "[&:has(>span):not(:has(img,svg))]:max-w-full  underline underline-offset-3  !min-w-0 !p-0 hover:text-primary  disabled:bg-transparent disabled:!cursor-not-allowed",
        },
        size: {
          "sm": " min-w-[40px] h-6 [&_svg:not([class*='size-'])]:size-3 px-padding-xs text-xs",
          "default": "min-w-[64px] h-8 py-2 [&_svg:not([class*='size-'])]:size-4 px-padding-xs ",
          "lg": "min-w-[104px] h-10 [&_svg:not([class*='size-'])]:size-4 px-padding-xs text-md",
          "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
          "icon": "size-8 [&_svg:not([class*='size-'])]:size-4",
          "icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-6 ",
          "inline-icon": "size-4 [&_svg:not([class*='size-'])]:size-4",
          "inline-icon-sm": "size-3 [&_svg:not([class*='size-'])]:size-3",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
