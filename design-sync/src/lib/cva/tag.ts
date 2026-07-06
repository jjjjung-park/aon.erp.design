import type {VariantProps} from "class-variance-authority"
import {cva} from "class-variance-authority"


export const tagsVariants = cva(
    "flex flex-row items-center justify-between px-padding-xs gap-1 caption__bold inline-flex rounded-sm h-6 min-w-0 max-w-full truncate",
    {
        variants: {
            type: {
                tag: 'border-transparent',
                chip: 'rounded-full border-1'
            },
            variant: {
                default: 'bg-primary text-neutral border-primary data-[slot=tag]:bg-default ',
                secondary: 'bg-primary-light text-primary border-primary ',
                outline: 'bg-background border-border border-1 data-[slot=tag]:text-muted [&_[data-slot=close]]:text-muted [&_[data-slot=close]:hover]:text-default',
                info: 'bg-subtle border-border'
            },

        },
        defaultVariants: {
            variant: "default",
            type: 'tag'
        }
    }
)

export type TagsVariants = VariantProps<typeof tagsVariants>
