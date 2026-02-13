"use client"

import {createContext, useContext} from "react"
import {PutEmployeeParams, PutEmployeeResponse} from "@/entities/employee"
import {UseMutateAsyncFunction} from "@tanstack/react-query"

type TEmployeesTableContext = {
	putEmployee: UseMutateAsyncFunction<PutEmployeeResponse, Error, PutEmployeeParams>
}

const EmployeesTableContext = createContext<TEmployeesTableContext | null>(null)

const useEmployeesTableContext = (): TEmployeesTableContext => {
	const context = useContext(EmployeesTableContext)

	if (!context) {
		throw new Error("useEmployeesTableContext must be used within EmployeesTableProvider")
	}

	return context
}

export {EmployeesTableContext, useEmployeesTableContext}
export type {TEmployeesTableContext}
