import {api} from "@/shared/configs/api"
import {
	GetEmployeeListResponseSchema,
	TGetEmployeeListParams,
	TGetEmployeeListResponse,
} from "../model"

export const getEmployeeList = async (
	params: TGetEmployeeListParams,
): Promise<TGetEmployeeListResponse> => {
	return api
		.get("employees", {searchParams: params})
		.json()
		.then(GetEmployeeListResponseSchema.parse)
}
