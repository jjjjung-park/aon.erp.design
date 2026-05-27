import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Alert } from "./Alert.vue"
export { default as AlertDescription } from "./AlertDescription.vue"
export { default as AlertTitle } from "./AlertTitle.vue"

export const alertVariants = cva(
  "relative w-full rounded-sm p-3 text-sm flex has-[>svg]:gap-x-2 gap-y-0.5 items-center [&>svg]:size-4 [&>svg]:stroke-3 [&>svg]:flex-none [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "border-1 border-border",
        primary: "bg-primary-light text-primary ",
        info: "bg-gray-100 text-info",
        warning: "bg-warning-light text-warning ",
        danger: "bg-danger-light text-danger ",
        success: "bg-success-light text-success ",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export type AlertVariants = VariantProps<typeof alertVariants>
