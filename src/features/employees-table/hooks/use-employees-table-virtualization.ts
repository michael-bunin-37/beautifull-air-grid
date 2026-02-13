import {useVirtualizer} from "@tanstack/react-virtual"
import {EMPLOYEES_TABLE_ROW_HEIGHT, EMPLOYEES_TABLE_OVERSCAN} from "../model"

type UseEmployeesTableVirtualizationProps = {
	count: number
	scrollContainerRef: React.RefObject<HTMLDivElement | null>
}

type UseEmployeesTableVirtualizationReturn = {
	virtualizer: ReturnType<typeof useVirtualizer<HTMLDivElement, Element>>
}

export const useEmployeesTableVirtualization = ({
	count,
	scrollContainerRef,
}: UseEmployeesTableVirtualizationProps): UseEmployeesTableVirtualizationReturn => {
	const virtualizer = useVirtualizer({
		count,
		getScrollElement: () => scrollContainerRef.current,
		estimateSize: () => EMPLOYEES_TABLE_ROW_HEIGHT,
		overscan: EMPLOYEES_TABLE_OVERSCAN,
	})

	return {virtualizer}
}
