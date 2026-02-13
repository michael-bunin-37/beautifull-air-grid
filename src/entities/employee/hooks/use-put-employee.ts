import {useMutation, UseMutationOptions} from "@tanstack/react-query"
import {putEmployee, PutEmployeeParams, PutEmployeeResponse} from "../api"
import {QUERY_CLIENT_MUTATION_KEYS} from "@/shared/constants/query-client.constants"

export type UsePutEmployeeOptions = UseMutationOptions<
	PutEmployeeResponse,
	Error,
	PutEmployeeParams
>

export const getPutEmployeeMutationKey = () => [QUERY_CLIENT_MUTATION_KEYS.EMPLOYEE_PUT]

export const usePutEmployee = (options?: Partial<UsePutEmployeeOptions>) => {
	return useMutation({
		mutationKey: getPutEmployeeMutationKey(),
		mutationFn: putEmployee,
		retry: 1,
		...options,
	})
}
