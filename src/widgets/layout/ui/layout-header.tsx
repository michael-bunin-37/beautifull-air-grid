import {cn} from "@/shared/helpers/common"
import {LayoutLogo} from "./layout-logo"
import {Button} from "@/shared/ui"
import {ArrowRight, LogIn} from "lucide-react"

type LayoutHeaderProps = {
	className?: string
}

function LayoutHeader({className}: LayoutHeaderProps) {
	return (
		<header className={cn("flex w-full", "border-b border-border", "py-6", className)}>
			<div className={cn("flex items-center justify-between", "w-full max-w-7xl mx-auto px-6")}>
				<LayoutLogo />
				<div className="flex items-center gap-3">
					<Button
						variant="ghost"
						size="sm">
						<LogIn size={14} />
						Sign in
					</Button>
					<Button
						variant="default"
						size="sm">
						Get Started
						<ArrowRight size={14} />
					</Button>
				</div>
			</div>
		</header>
	)
}

export {LayoutHeader}
