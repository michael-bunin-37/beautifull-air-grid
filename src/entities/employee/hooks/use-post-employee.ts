import {useMutation, UseMutationOptions} from "@tanstack/react-query"
import {postEmployee, PostEmployeeParams, PostEmployeeResponse} from "../api"
import {QUERY_CLIENT_MUTATION_KEYS} from "@/shared/constants/query-client.constants"

export type UsePostEmployeeOptions = UseMutationOptions<
	PostEmployeeResponse,
	Error,
	PostEmployeeParams
>

export const getPostEmployeeMutationKey = () => [QUERY_CLIENT_MUTATION_KEYS.EMPLOYEE_POST]

export const usePostEmployee = (options?: Partial<UsePostEmployeeOptions>) => {
	return useMutation({
		mutationKey: getPostEmployeeMutationKey(),
		mutationFn: (params: PostEmployeeParams) => postEmployee(params),
		retry: 1,
		...options,
	})
}
