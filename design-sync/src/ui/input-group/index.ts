import type { VariantProps } from "class-variance-authority"
import type { HTMLAttributes } from "vue"
import { cva } from "class-variance-authority"

export { default as InputGroup } from "./InputGroup.vue"
export { default as InputGroupAddon } from "./InputGroupAddon.vue"
export { default as InputGroupButton } from "./InputGroupButton.vue"
export { default as InputGroupInput } from "./InputGroupInput.vue"
export { default as InputGroupText } from "./InputGroupText.vue"
export { default as InputGroupTextarea } from "./InputGroupTextarea.vue"

export const inputGroupAddonVariants = cva(
  "text-muted flex h-auto cursor-text items-center justify-center text-sm select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:text-disabled-text",
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

