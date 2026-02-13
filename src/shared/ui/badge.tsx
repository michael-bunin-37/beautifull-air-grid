import * as React from "react"
import {cva, type VariantProps} from "class-variance-authority"
import {Slot} from "radix-ui"

import {cn} from "@/shared/helpers/common"

const badgeVariants = cva(
	"inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-error/20 aria-invalid:border-error transition-[color,box-shadow] overflow-hidden",
	{
		variants: {
			variant: {
				default: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
				success:
					"bg-success-subtle text-success-subtle-foreground border-success-subtle-stroke [a&]:hover:bg-success-subtle/80",
				error:
					"bg-error-subtle text-error-subtle-foreground border-error-subtle-stroke [a&]:hover:bg-error-subtle/80",
				warning:
					"bg-warning-subtle text-warning-subtle-foreground border-warning-subtle-stroke [a&]:hover:bg-warning-subtle/80",
				info: "bg-info-subtle text-info-subtle-foreground border-info-subtle-stroke [a&]:hover:bg-info-subtle/80",
				outline:
					"border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
				ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
)

function Badge({
	className,
	variant = "default",
	asChild = false,
	...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {asChild?: boolean}) {
	const Comp = asChild ? Slot.Root : "span"

	return (
		<Comp
			data-slot="badge"
			data-variant={variant}
			className={cn(badgeVariants({variant}), className)}
			{...props}
		/>
	)
}

export {Badge, badgeVariants}
