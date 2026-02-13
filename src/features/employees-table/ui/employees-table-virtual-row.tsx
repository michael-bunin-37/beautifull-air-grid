import {memo} from "react"
import {Row} from "@tanstack/react-table"
import {TEmployee} from "@/entities/employee"
import {TableRow} from "@/shared/ui"
import {EmployeesTableCell} from "./employees-table-cell"

type EmployeesTableVirtualRowProps = {
	row: Row<TEmployee>
	virtualRowIndex: number
}

const EmployeesTableVirtualRow = memo(
	function EmployeesTableVirtualRow({row, virtualRowIndex}: EmployeesTableVirtualRowProps) {
		return (
			<TableRow
				className="transition-none"
				data-index={virtualRowIndex}>
				{row.getVisibleCells().map((cell) => (
					<EmployeesTableCell
						key={cell.id}
						cell={cell}
					/>
				))}
			</TableRow>
		)
	},
	(prev, next) =>
		prev.row.id === next.row.id &&
		prev.virtualRowIndex === next.virtualRowIndex &&
		prev.row.original === next.row.original,
)

export {EmployeesTableVirtualRow}
