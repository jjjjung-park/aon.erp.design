import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from '@/ui/button'
import { cva } from "class-variance-authority"

export { default as InputGroup } from "./InputGroup.vue"
export { default as InputGroupAddon } from "./InputGroupAddon.vue"
export { default as InputGroupButton } from "./InputGroupButton.vue"
export { default as InputGroupInput } from "./InputGroupInput.vue"
export { default as InputGroupText } from "./InputGroupText.vue"
export { default as InputGroupTextarea } from "./InputGroupTextarea.vue"

export const inputGroupAddonVariants = cva(
  "text-secondary flex h-auto cursor-text items-center justify-center text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:text-disabled-text",
  {
    variants: {
      align: {
        "inline-start":
          "order-first has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "order-last  has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-lg",
        "block-end":
          "order-last w-full justify-start pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-lg",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
)

export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>

export const inputGroupButtonVariants = cva(
  "size-6 shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        "sm": "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-4 min-w-6 [&_svg]:stroke-[3]",
        "icon": "size-8 [&_svg:not([class*='size-'])]:size-5 min-w-8  [&_svg]:stroke-[2.5]",
      },
    },
    defaultVariants: {
      size: "icon",
    },
  },
)

export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>

export interface InputGroupButtonProps {
  variant?: ButtonVariants["variant"]
  size?: InputGroupButtonVariants["size"]
  class?: HTMLAttributes["class"]
}
