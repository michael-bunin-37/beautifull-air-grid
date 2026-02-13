import { CellContext } from "@tanstack/react-table"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useTranslations } from "next-intl"

import { TEmployee, TEmployeeRole } from "@/entities/employee"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui"
import { useEmployeesTableContext } from "../model"

type EmployeesTableCellRoleSelectorProps = CellContext<TEmployee, TEmployeeRole>

function EmployeesTableCellRoleSelector({
	getValue,
	row: { original: employee },
}: EmployeesTableCellRoleSelectorProps) {
	const initialValue = getValue()
	const [value, setValue] = useState<TEmployeeRole>(initialValue)
	const { putEmployee } = useEmployeesTableContext()
	const t = useTranslations("employee.role")

	const onValueChange = async (newValue: string) => {
		const roleValue = newValue as TEmployeeRole
		if (roleValue === initialValue) return

		setValue(roleValue)

		try {
			await putEmployee({ ...employee, role: roleValue })
		} catch (error) {
			setValue(initialValue)
			toast.error((error as Error).message)
		}
	}

	useEffect(() => setValue(initialValue), [initialValue])

	return (
		<Select value={value} onValueChange={onValueChange}>
			<SelectTrigger size="sm">
				<SelectValue />
			</SelectTrigger>
			<SelectContent side="bottom">
				{Object.values(TEmployeeRole).map((role) => (
					<SelectItem key={role} value={role}>
						{t(role)}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}

export { EmployeesTableCellRoleSelector }
