"use client"

import {useDeferredValue, useMemo} from "react"
import {useGetEmployeeList, usePutEmployee} from "@/entities/employee"
import {cn} from "@/shared/helpers/common"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/shared/ui"
import {flexRender} from "@tanstack/react-table"
import {useEmployeesTable} from "../hooks"
import {EmployeesTableContext} from "../model"
import {Loader} from "lucide-react"
import {EmployeesTableVirtualRow} from "./employees-table-virtual-row"
import {useState} from "react"
import {TGetEmployeeListParams} from "@/entities/employee"

type EmployeesTableProps = {
	className?: string
}

function EmployeesTable({className}: EmployeesTableProps) {
	const [params, setParams] = useState<TGetEmployeeListParams>({page: 1, limit: 10000})

	const {data, isPending} = useGetEmployeeList({page: 1, limit: 10000})
	const deferredData = useDeferredValue(data)
	const isStale = deferredData !== data

	const {mutateAsync: putEmployee} = usePutEmployee()
	const contextValue = useMemo(() => ({putEmployee}), [putEmployee])

	const {table, virtualizer, scrollContainerRef} = useEmployeesTable({data: deferredData, params})

	const rows = table.getRowModel().rows
	const virtualRows = virtualizer.getVirtualItems()
	const totalSize = virtualizer.getTotalSize()

	const {paddingTop, paddingBottom} = useMemo(() => {
		const top = virtualRows.length > 0 ? (virtualRows[0]?.start ?? 0) : 0
		const bottom =
			virtualRows.length > 0 ? totalSize - (virtualRows[virtualRows.length - 1]?.end ?? 0) : 0
		return {paddingTop: top, paddingBottom: bottom}
	}, [virtualRows, totalSize])

	const columnsCount = table.getAllColumns().length
	const tableWidth = table.getTotalSize()
	const isEmpty = rows.length === 0 && !isPending

	return (
		<EmployeesTableContext value={contextValue}>
			<div className="relative w-full h-full">
				{(isPending || isStale) && (
					<div className="absolute inset-0 flex items-center justify-center z-20 bg-background/50">
						<Loader className="size-4 animate-spin" />
					</div>
				)}
				<Table
					className={cn("w-full", className)}
					containerRef={scrollContainerRef}
					style={{width: tableWidth, tableLayout: "fixed"}}>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										style={{width: header.getSize()}}>
										{flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{isEmpty && (
							<TableRow>
								<TableCell
									colSpan={columnsCount}
									className="text-center py-8">
									Нет данных
								</TableCell>
							</TableRow>
						)}

						{!isPending && !isEmpty && (
							<>
								{paddingTop > 0 && (
									<tr>
										<td
											colSpan={columnsCount}
											style={{height: paddingTop}}
										/>
									</tr>
								)}
								{virtualRows.map((virtualRow) => {
									const row = rows[virtualRow.index]
									return (
										<EmployeesTableVirtualRow
											key={row.id}
											row={row}
											virtualRowIndex={virtualRow.index}
										/>
									)
								})}
								{paddingBottom > 0 && (
									<tr>
										<td
											colSpan={columnsCount}
											style={{height: paddingBottom}}
										/>
									</tr>
								)}
							</>
						)}
					</TableBody>
				</Table>
			</div>
		</EmployeesTableContext>
	)
}

export {EmployeesTable}
