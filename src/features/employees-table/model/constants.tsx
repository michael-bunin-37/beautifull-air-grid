import {AccessorColumnDef, ColumnDef} from "@tanstack/react-table"
import {TEmployee} from "@/entities/employee"
import {employeesTableColumnHelper} from "../helpers"
import {EmployeesTableCellEditable} from "../ui/employees-table-cell-editable"
import {EmployeesTableCellRoleSelector} from "../ui/employees-table-cell-role-selector"
import {formatDate} from "date-fns"

export const EMPLOYEES_TABLE_ROW_HEIGHT = 49
export const EMPLOYEES_TABLE_OVERSCAN = 50

export const EMPLOYEES_TABLE_COLUMNS: ColumnDef<TEmployee, any>[] = [
	employeesTableColumnHelper.accessor("id", {
		header: "ID",
		size: 312,
		cell: (ctx) => ctx.getValue(),
		enableHiding: false,
	}),
	employeesTableColumnHelper.accessor("createdAt", {
		header: "Created At",
		size: 220,
		enableHiding: false,
		cell: ({row: {original: employee}}) => formatDate(new Date(employee.createdAt), "PPPp"),
	}),
	employeesTableColumnHelper.accessor("role", {
		header: "Role",
		size: 200,
		cell: EmployeesTableCellRoleSelector,
	}),
	employeesTableColumnHelper.accessor("name", {
		header: "Name",
		size: 180,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("email", {
		header: "Email",
		size: 240,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("phone", {
		header: "Phone",
		size: 160,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("address", {
		header: "Address",
		size: 220,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("city", {
		header: "City",
		size: 140,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("state", {
		header: "State",
		size: 120,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("zip", {
		header: "Zip",
		size: 100,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("country", {
		header: "Country",
		size: 140,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("dateOfBirth", {
		header: "Date of Birth",
		size: 140,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("emergencyContactName", {
		header: "Emergency Contact Name",
		size: 200,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("emergencyContactPhone", {
		header: "Emergency Contact Phone",
		size: 180,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("emergencyContactRelationship", {
		header: "Emergency Contact Relationship",
		size: 220,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("emergencyContactAddress", {
		header: "Emergency Contact Address",
		size: 220,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("emergencyContactCity", {
		header: "Emergency Contact City",
		size: 160,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("emergencyContactState", {
		header: "Emergency Contact State",
		size: 160,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("emergencyContactZip", {
		header: "Emergency Contact Zip",
		size: 140,
		cell: EmployeesTableCellEditable,
	}),
	employeesTableColumnHelper.accessor("emergencyContactCountry", {
		header: "Emergency Contact Country",
		size: 160,
		cell: EmployeesTableCellEditable,
	}),
] as const
