import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Tooltip } from "./Tooltip.vue"
export { default as TooltipContent } from "./TooltipContent.vue"
export { default as TooltipProvider } from "./TooltipProvider.vue"
export { default as TooltipTrigger } from "./TooltipTrigger.vue"


export const tooltipContentVariants = cva(
  "group z-50 w-fit rounded-sm px-3 py-2 text-xs text-balance max-w-80 max-h-90 overflow-y-auto " +
  " [&.sidebar-tooltip]:bg-primary [&.sidebar-tooltip]:text-neutral [&.sidebar-tooltip]:border-0 [&.tooltip--dark]:bg-default [&.tooltip--dark]:text-neutral [&.tooltip--dark]:border-0 bg-background border-1 border-border text-default" , //variant 추가하고 지워야됨
  {
    variants: {
      variant: {
        light: "bg-background border-1 border-border text-default",
        dark:"bg-default text-neutral",
        primary:"bg-primary text-neutral"
      }
    },
    defaultVariants: {
      variant: "light",
    },
  }
)
export type TooltipContentVariants = VariantProps<typeof tooltipContentVariants>

export const tooltipArrowVariants = cva(
  "shadow-[2px_2px_2px_0_rgba(11,21,33,0.1)] z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" +
  "group-[.sidebar-tooltip]:bg-primary group-[.sidebar-tooltip]:fill-primary group-[.tooltip--dark]:bg-default group-[.tooltip--dark]:fill-gray-900 ", //variant 추가하고 지워야됨
  {
    variants: {
      variant: {
        light: "bg-background fill-background",
        dark: "bg-default fill-gray-900",
        primary:"bg-primary fill-primary"
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
)

