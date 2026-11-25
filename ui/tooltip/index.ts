import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Tooltip } from "./Tooltip.vue"
export { default as TooltipContent } from "./TooltipContent.vue"
export { default as TooltipProvider } from "./TooltipProvider.vue"
export { default as TooltipTrigger } from "./TooltipTrigger.vue"


export const tooltipContentVariants = cva(
    "group z-50 w-fit rounded-sm px-3 py-2 text-xs text-balance max-w-80 max-h-90 overflow-y-auto " ,
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
    "shadow-bottom z-50 size-2 -translate-y-1/2 rotate-45 rounded-[2px]" ,
    {
        variants: {
            variant: {
                light: "bg-background fill-background border-border group-data-[side=top]:border-r group-data-[side=top]:border-b group-data-[side=bottom]:border-b group-data-[side=bottom]:border-r group-data-[side=left]:border-b group-data-[side=left]:border-r group-data-[side=right]:border-r group-data-[side=right]:border-b",
                dark: "bg-default fill-default",
                primary:"bg-primary fill-primary"
            },
        },
        defaultVariants: {
            variant: "light",
        },
    }
)

