import {cn} from "@/shared/helpers/common"
import {CellContext} from "@tanstack/react-table"
import {TEmployee} from "@/entities/employee"
import {useEffect, useState} from "react"
import toast from "react-hot-toast"
import {useEmployeesTableContext} from "../model"

type EmployeesTableCellEditableProps = CellContext<TEmployee, string>

function EmployeesTableCellEditable({
	getValue,
	row: {original: employee},
	column: {id: accessorKey},
}: EmployeesTableCellEditableProps) {
	const initialValue = getValue()
	const [value, setValue] = useState(initialValue)
	const {putEmployee} = useEmployeesTableContext()

	const onBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
		if (value === initialValue) return
		if (value.trim() === "") return setValue(initialValue)

		try {
			await putEmployee({...employee, [accessorKey]: value})
		} catch (error) {
			toast.error((error as Error).message)
		}
	}

	useEffect(() => setValue(initialValue), [initialValue])

	return (
		<input
			type="text"
			value={value}
			className={cn(
				"block w-full -mx-1 -my-1",
				"py-2 px-2",
				"text-sm",
				"bg-background text-foreground",
				"border border-input rounded-sm",
				"outline-none transition-colors",
				"hover:border-input",
				"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			)}
			onChange={(e) => setValue(e.target.value)}
			onBlur={onBlur}
		/>
	)
}

export {EmployeesTableCellEditable}
