import {z} from "zod"
import {TEmployeeRole} from "./types"

export const EmployeeRoleSchema = z.enum(Object.values(TEmployeeRole))

export const EmployeeSchema = z.object({
	id: z.string(),
	createdAt: z.string(),
	name: z.string(),
	email: z.string(),
	role: EmployeeRoleSchema,
	salary: z.coerce.number(),

	phone: z.string(),
	address: z.string(),
	city: z.string(),
	state: z.string(),
	zip: z.string(),
	country: z.string(),

	dateOfBirth: z.string(),

	emergencyContactName: z.string(),
	emergencyContactPhone: z.string(),
	emergencyContactRelationship: z.string(),
	emergencyContactAddress: z.string(),
	emergencyContactCity: z.string(),
	emergencyContactState: z.string(),
	emergencyContactZip: z.string(),
	emergencyContactCountry: z.string(),
})

export const GetEmployeeListParamsSchema = z.object({
	page: z.coerce.number().min(1).default(1),
	limit: z.coerce.number().min(1).default(10),
})

export const GetEmployeeListResponseSchema = z.object({
	data: z.array(EmployeeSchema),
	meta: z.object({
		page: z.coerce.number(),
		limit: z.coerce.number(),
		total: z.coerce.number().nullable(),
	}),
})

export const PostEmployeeSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.email("Invalid email format"),
	role: EmployeeRoleSchema,
	salary: z.coerce.number().min(0, "Salary must be positive"),
})

export const PutEmployeeSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email format"),
	role: EmployeeRoleSchema,
	salary: z.coerce.number().min(0, "Salary must be positive"),
})

export const PostEmployeeResponseSchema = EmployeeSchema
export const PutEmployeeResponseSchema = EmployeeSchema
export const DeleteEmployeeResponseSchema = z.object({
	success: z.boolean(),
	message: z.string(),
})
