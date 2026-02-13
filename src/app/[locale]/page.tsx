"use client"

import {EmployeesTable} from "@/features/employees-table"
import {LayoutWrapper} from "@/widgets/layout/ui/layout-wrapper"

export default function Home() {
	return (
		<LayoutWrapper className="space-y-6">
			<div className="space-y-2">
				<h1 className="text-md font-bold">AirGrid Employees Manager</h1>
				<p className="text-sm">
					Welcome to the AirGrid Employees Management System. Manage your employees with ease.
				</p>
			</div>

			<div className="grow relative">
				<div className="absolute inset-0">
					<EmployeesTable />
				</div>
			</div>
		</LayoutWrapper>
	)
}
