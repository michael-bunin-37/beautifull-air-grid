import {useMutation, UseMutationOptions} from "@tanstack/react-query"
import {deleteEmployee, DeleteEmployeeParams, DeleteEmployeeResponse} from "../api"
import {QUERY_CLIENT_MUTATION_KEYS} from "@/shared/constants/query-client.constants"

export type UseDeleteEmployeeOptions = UseMutationOptions<
	DeleteEmployeeResponse,
	Error,
	DeleteEmployeeParams
>

export const getDeleteEmployeeMutationKey = () => [QUERY_CLIENT_MUTATION_KEYS.EMPLOYEE_DELETE]

export const useDeleteEmployee = (options?: Partial<UseDeleteEmployeeOptions>) => {
	return useMutation({
		mutationKey: getDeleteEmployeeMutationKey(),
		mutationFn: (params: DeleteEmployeeParams) => deleteEmployee(params),
		retry: 1,
		...options,
	})
}
