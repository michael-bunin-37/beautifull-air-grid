"use client"

import { EmployeesTable } from "@/features/employees-table"
import { LayoutWrapper } from "@/widgets/layout/ui/layout-wrapper"
import { useTranslations } from "next-intl"

export default function Home() {
	const t = useTranslations("home.page")

	return (
		<LayoutWrapper className="space-y-6">
			<div className="space-y-2">
				<h1 className="text-md font-bold">{t("title")}</h1>
				<p className="text-sm">{t("description")}</p>
			</div>

			<div className="grow relative">
				<div className="absolute inset-0">
					<EmployeesTable />
				</div>
			</div>
		</LayoutWrapper>
	)
}
