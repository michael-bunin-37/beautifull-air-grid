import {supabaseAdmin} from "@/shared/configs/supabase-admin"
import {NextRequest, NextResponse} from "next/server"
import {
	GetEmployeeListParamsSchema,
	GetEmployeeListResponseSchema,
	TGetEmployeeListResponse,
	PostEmployeeSchema,
	PostEmployeeResponseSchema,
	TPostEmployeeResponse,
} from "@/entities/employee/model"

export async function GET(req: NextRequest) {
	const {searchParams} = new URL(req.url)

	const body = GetEmployeeListParamsSchema.safeParse(Object.fromEntries(searchParams))
	if (!body.success) return NextResponse.json({error: body.error.message}, {status: 400})

	const {data, error, count} = await supabaseAdmin
		.from("employees")
		.select("*", {count: "exact"})
		.range(body.data.page - 1, body.data.limit - 1)
		.order("createdAt", {ascending: false})

	if (error) return NextResponse.json({error: error.message}, {status: 500})

	const responseBody = GetEmployeeListResponseSchema.shape.data.safeParse(data)

	if (!responseBody.success)
		return NextResponse.json({error: responseBody.error.message}, {status: 500})

	return NextResponse.json<TGetEmployeeListResponse>({
		data,
		meta: {
			page: body.data.page,
			limit: body.data.limit,
			total: count,
		},
	})
}

export async function POST(req: NextRequest) {
	const requestBody = await req.json()

	const body = PostEmployeeSchema.safeParse(requestBody)
	if (!body.success) return NextResponse.json({error: body.error.message}, {status: 400})

	// Check email uniqueness
	const {data: existingEmployee} = await supabaseAdmin
		.from("employees")
		.select("id")
		.eq("email", body.data.email)
		.single()

	if (existingEmployee) {
		return NextResponse.json({error: "Employee with this email already exists"}, {status: 409})
	}

	const {data, error} = await supabaseAdmin
		.from("employees")
		.insert({
			name: body.data.name,
			email: body.data.email,
			role: body.data.role,
			salary: body.data.salary,
		})
		.select()
		.single()

	if (error) return NextResponse.json({error: error.message}, {status: 500})

	const responseBody = PostEmployeeResponseSchema.safeParse(data)
	if (!responseBody.success)
		return NextResponse.json({error: responseBody.error.message}, {status: 500})

	return NextResponse.json<TPostEmployeeResponse>(responseBody.data, {status: 201})
}
