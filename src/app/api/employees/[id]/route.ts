import {supabaseAdmin} from "@/shared/configs/supabase-admin"
import {NextRequest, NextResponse} from "next/server"
import {
	PutEmployeeSchema,
	PutEmployeeResponseSchema,
	TPutEmployeeResponse,
	DeleteEmployeeResponseSchema,
	TDeleteEmployeeResponse,
} from "@/entities/employee/model"

export async function PUT(req: NextRequest, context: {params: Promise<{id: string}>}) {
	const {id} = await context.params
	const requestBody = await req.json()

	const body = PutEmployeeSchema.safeParse(requestBody)
	if (!body.success) return NextResponse.json({error: body.error.message}, {status: 400})

	// Check if employee exists
	const {data: existingEmployee, error: checkError} = await supabaseAdmin
		.from("employees")
		.select("id")
		.eq("id", id)
		.single()

	if (checkError || !existingEmployee) {
		return NextResponse.json({error: "Employee not found"}, {status: 404})
	}

	// Check email uniqueness (excluding current employee)
	const {data: emailExists} = await supabaseAdmin
		.from("employees")
		.select("id")
		.eq("email", body.data.email)
		.neq("id", id)
		.single()

	if (emailExists) {
		return NextResponse.json({error: "Employee with this email already exists"}, {status: 409})
	}

	const {data, error} = await supabaseAdmin
		.from("employees")
		.update({
			name: body.data.name,
			email: body.data.email,
			role: body.data.role,
			salary: body.data.salary,
		})
		.eq("id", id)
		.select()
		.single()

	if (error) return NextResponse.json({error: error.message}, {status: 500})

	const responseBody = PutEmployeeResponseSchema.safeParse(data)
	if (!responseBody.success)
		return NextResponse.json({error: responseBody.error.message}, {status: 500})

	return NextResponse.json<TPutEmployeeResponse>(responseBody.data)
}

export async function DELETE(req: NextRequest, context: {params: Promise<{id: string}>}) {
	const {id} = await context.params

	// Check if employee exists
	const {data: existingEmployee, error: checkError} = await supabaseAdmin
		.from("employees")
		.select("id")
		.eq("id", id)
		.single()

	if (checkError || !existingEmployee) {
		return NextResponse.json({error: "Employee not found"}, {status: 404})
	}

	const {error} = await supabaseAdmin.from("employees").delete().eq("id", id)

	if (error) return NextResponse.json({error: error.message}, {status: 500})

	const responseBody = DeleteEmployeeResponseSchema.safeParse({
		success: true,
		message: "Employee deleted successfully",
	})

	if (!responseBody.success)
		return NextResponse.json({error: responseBody.error.message}, {status: 500})

	return NextResponse.json<TDeleteEmployeeResponse>(responseBody.data)
}
