import {memo, useEffect, useRef, useState} from "react"
import {cn} from "@/shared/helpers/common"
import {TableCell} from "@/shared/ui"
import {Cell, flexRender} from "@tanstack/react-table"
import {TEmployee} from "@/entities/employee"

type EmployeesTableCellProps = {
	className?: string
	cell: Cell<TEmployee, unknown>
}

const EmployeesTableCell = memo(
	function EmployeesTableCell({className, cell}: EmployeesTableCellProps) {
		const {getContext} = cell
		return (
			<TableCell
				tabIndex={0}
				style={{width: cell.column.getSize()}}
				className={cn(
					"rounded-sm",
					"outline-none transition-colors",
					"overflow-hidden text-ellipsis",
					"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

					className,
				)}>
				{flexRender(cell.column.columnDef.cell, getContext())}
			</TableCell>
		)
	},
	(prev, next) => prev.cell.getValue() === next.cell.getValue(),
)

export {EmployeesTableCell}
