import {cn} from "@/shared/helpers/common"
import {LayoutHeader} from "./layout-header"
import {LayoutFooter} from "./layout-footer"

type LayoutWrapperProps = {
	className?: string
	children: React.ReactNode
}

function LayoutWrapper({className, children}: LayoutWrapperProps) {
	return (
		<div className={cn("flex flex-col min-h-screen", "space-y-6")}>
			<LayoutHeader />
			<div className={cn("flex flex-col grow w-full", "max-w-7xl mx-auto px-6", className)}>
				{children}
			</div>
			<LayoutFooter />
		</div>
	)
}

export {LayoutWrapper}
