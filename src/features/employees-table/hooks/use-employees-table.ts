import { useRef } from "react"
import { TGetEmployeeListResponse, TGetEmployeeListParams } from "@/entities/employee"
import { getCoreRowModel, Table, useReactTable } from "@tanstack/react-table"

import { TEmployee } from "@/entities/employee"
import { useEmployeesTableVirtualization } from "./use-employees-table-virtualization"
import { useEmployeesTableRealtime } from "./use-employees-table-realtime"
import { useEmployeesTableColumns } from "./use-employees-table-columns"

const EMPTY_DATA: TEmployee[] = []
const coreRowModel = getCoreRowModel<TEmployee>()

type UseEmployeesTableProps = {
	data?: TGetEmployeeListResponse
	params: TGetEmployeeListParams
}

type UseEmployeesTableReturn = {
	table: Table<TEmployee>
	virtualizer: ReturnType<typeof useEmployeesTableVirtualization>["virtualizer"]
	scrollContainerRef: React.RefObject<HTMLDivElement | null>
}

export const useEmployeesTable = ({
	data,
	params,
}: UseEmployeesTableProps): UseEmployeesTableReturn => {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const rows = data?.data ?? EMPTY_DATA
	const rowCount = rows.length
	const columns = useEmployeesTableColumns()

	useEmployeesTableRealtime({ params })
	const table = useReactTable({
		data: rows,
		columns,
		getCoreRowModel: coreRowModel,
	})

	const { virtualizer } = useEmployeesTableVirtualization({
		count: rowCount,
		scrollContainerRef,
	})

	return { table, virtualizer, scrollContainerRef }
}
