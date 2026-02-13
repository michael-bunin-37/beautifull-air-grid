import {z} from "zod"
import {api} from "@/shared/configs/api"
import {TDeleteEmployeeResponse, DeleteEmployeeResponseSchema} from "../model"

export type DeleteEmployeeParams = {
	id: string
}

export type DeleteEmployeeResponse = TDeleteEmployeeResponse

export const deleteEmployee = async (
	params: DeleteEmployeeParams,
): Promise<DeleteEmployeeResponse> => {
	const validatedId = z.string().uuid().parse(params.id)
	const response = await api.delete(`employees/${validatedId}`).json()
	return DeleteEmployeeResponseSchema.parse(response)
}
