import {api} from "@/shared/configs/api"
import {
	TPutEmployee,
	TPutEmployeeResponse,
	PutEmployeeSchema,
	PutEmployeeResponseSchema,
} from "../model"

export type PutEmployeeParams = {
	id: string
} & TPutEmployee

export type PutEmployeeResponse = TPutEmployeeResponse

export const putEmployee = async (params: PutEmployeeParams): Promise<PutEmployeeResponse> => {
	const {id, ...body} = params
	return api.put(`employees/${id}`, {json: body}).json().then(PutEmployeeResponseSchema.parse)
}
