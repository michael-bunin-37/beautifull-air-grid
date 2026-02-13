import {Link} from "@/i18n/navigation"
import {cn} from "@/shared/helpers/common"
import {Wind} from "lucide-react"

export const LayoutLogo = () => {
	return (
		<Link
			href="/"
			className={cn(
				"inline-flex items-center gap-3",
				"text-foreground transition-colors",
				"hover:text-primary",
			)}>
			<Wind
				size={24}
				className="text-primary rotate-180"
			/>
			<span className={cn("text-sm font-semibold uppercase tracking-wide", "text-foreground")}>
				AirGrid
			</span>
		</Link>
	)
}
