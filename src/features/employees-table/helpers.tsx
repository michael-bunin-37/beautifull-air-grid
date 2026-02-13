import {TEmployee} from "@/entities/employee"
import {createColumnHelper} from "@tanstack/react-table"

export const employeesTableColumnHelper = createColumnHelper<TEmployee>()
