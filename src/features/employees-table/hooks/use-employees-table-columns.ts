import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import { useTranslations } from "next-intl"
import { TEmployee } from "@/entities/employee"
import { employeesTableColumnHelper } from "../helpers"
import { EmployeesTableCellEditable } from "../ui/employees-table-cell-editable"
import { EmployeesTableCellRoleSelector } from "../ui/employees-table-cell-role-selector"
import { formatDate } from "date-fns"

export const useEmployeesTableColumns = (): ColumnDef<TEmployee, any>[] => {
	const t = useTranslations("employees-table.columns")

	return useMemo(
		() =>
			[
				employeesTableColumnHelper.accessor("id", {
					header: t("id"),
					size: 312,
					cell: (ctx) => ctx.getValue(),
					enableHiding: false,
				}),
				employeesTableColumnHelper.accessor("createdAt", {
					header: t("createdAt"),
					size: 220,
					enableHiding: false,
					cell: ({ row: { original: employee } }) => formatDate(new Date(employee.createdAt), "PPPp"),
				}),
				employeesTableColumnHelper.accessor("role", {
					header: t("role"),
					size: 200,
					cell: EmployeesTableCellRoleSelector,
				}),
				employeesTableColumnHelper.accessor("name", {
					header: t("name"),
					size: 180,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("email", {
					header: t("email"),
					size: 240,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("phone", {
					header: t("phone"),
					size: 160,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("address", {
					header: t("address"),
					size: 220,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("city", {
					header: t("city"),
					size: 140,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("state", {
					header: t("state"),
					size: 120,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("zip", {
					header: t("zip"),
					size: 100,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("country", {
					header: t("country"),
					size: 140,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("dateOfBirth", {
					header: t("dateOfBirth"),
					size: 140,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("emergencyContactName", {
					header: t("emergencyContactName"),
					size: 200,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("emergencyContactPhone", {
					header: t("emergencyContactPhone"),
					size: 180,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("emergencyContactRelationship", {
					header: t("emergencyContactRelationship"),
					size: 220,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("emergencyContactAddress", {
					header: t("emergencyContactAddress"),
					size: 220,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("emergencyContactCity", {
					header: t("emergencyContactCity"),
					size: 160,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("emergencyContactState", {
					header: t("emergencyContactState"),
					size: 160,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("emergencyContactZip", {
					header: t("emergencyContactZip"),
					size: 140,
					cell: EmployeesTableCellEditable,
				}),
				employeesTableColumnHelper.accessor("emergencyContactCountry", {
					header: t("emergencyContactCountry"),
					size: 160,
					cell: EmployeesTableCellEditable,
				}),
			] as ColumnDef<TEmployee, any>[],
		[t]
	)
}
