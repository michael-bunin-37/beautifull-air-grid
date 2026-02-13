import {api} from "@/shared/configs/api"
import {
	TPostEmployee,
	TPostEmployeeResponse,
	PostEmployeeSchema,
	PostEmployeeResponseSchema,
} from "../model"

export type PostEmployeeParams = TPostEmployee
export type PostEmployeeResponse = TPostEmployeeResponse

export const postEmployee = async (params: PostEmployeeParams): Promise<PostEmployeeResponse> => {
	const validatedParams = PostEmployeeSchema.parse(params)
	const response = await api.post("employees", {json: validatedParams}).json()
	return PostEmployeeResponseSchema.parse(response)
}
