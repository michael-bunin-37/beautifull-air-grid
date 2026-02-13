import {cn} from "@/shared/helpers/common"

type LayoutFooterProps = {
	className?: string
}

function LayoutFooter({className}: LayoutFooterProps) {
	if (!className) return null
	return <div className={className} />
}

export {LayoutFooter}
