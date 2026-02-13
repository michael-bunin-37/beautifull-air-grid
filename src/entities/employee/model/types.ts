import z from "zod"
import {
	EmployeeSchema,
	GetEmployeeListParamsSchema,
	GetEmployeeListResponseSchema,
	PostEmployeeSchema,
	PutEmployeeSchema,
	PostEmployeeResponseSchema,
	PutEmployeeResponseSchema,
	DeleteEmployeeResponseSchema,
} from "./schemas"

export enum TEmployeeRole {
	MANAGER = "MANAGER",
	SOFTWARE_ENGINEER = "SOFTWARE_ENGINEER",
	DESIGNER = "DESIGNER",
	MARKETING_SPECIALIST = "MARKETING_SPECIALIST",
	HR_MANAGER = "HR_MANAGER",
	ACCOUNTANT = "ACCOUNTANT",
	OTHER = "OTHER",
}

export type TEmployee = z.infer<typeof EmployeeSchema>
export type TGetEmployeeListParams = z.infer<typeof GetEmployeeListParamsSchema>
export type TGetEmployeeListResponse = z.infer<typeof GetEmployeeListResponseSchema>
export type TPostEmployee = z.infer<typeof PostEmployeeSchema>
export type TPutEmployee = z.infer<typeof PutEmployeeSchema>
export type TPostEmployeeResponse = z.infer<typeof PostEmployeeResponseSchema>
export type TPutEmployeeResponse = z.infer<typeof PutEmployeeResponseSchema>
export type TDeleteEmployeeResponse = z.infer<typeof DeleteEmployeeResponseSchema>
