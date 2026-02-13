import {QueryClient} from "@tanstack/react-query"
import {produce} from "immer"
import {
	TEmployee,
	TEmployeeRole,
	TGetEmployeeListParams,
	TGetEmployeeListResponse,
} from "./model/types"
import {getEmployeeListQueryKey} from "./hooks"

export const formatEmployeeRole = (role: TEmployeeRole): string => {
	const roleMap: Record<TEmployeeRole, string> = {
		[TEmployeeRole.MANAGER]: "Manager",
		[TEmployeeRole.SOFTWARE_ENGINEER]: "Software Engineer",
		[TEmployeeRole.DESIGNER]: "Designer",
		[TEmployeeRole.MARKETING_SPECIALIST]: "Marketing Specialist",
		[TEmployeeRole.HR_MANAGER]: "HR Manager",
		[TEmployeeRole.ACCOUNTANT]: "Accountant",
		[TEmployeeRole.OTHER]: "Other",
	}

	return roleMap[role] || role
}

/**
 * Optimistically updates an employee in the query cache.
 * Uses immer for immutable updates.
 *
 * @example
 * ```ts
 * const queryClient = useQueryClient()
 * const params = { page: 1, limit: 10000 }
 *
 * // In your mutation's onMutate callback:
 * onMutate: async (variables) => {
 *   putQueryClientOptimisticEmployee({
 *     queryClient,
 *     employee: { ...existingEmployee, ...variables },
 *     params,
 *   })
 * }
 * ```
 *
 * @param queryClient - The QueryClient instance
 * @param employee - The updated employee data
 * @param params - The query params used to fetch the employee list
 */
export const putQueryClientOptimisticEmployee = ({
	queryClient,
	employee,
	params,
}: {
	queryClient: QueryClient
	employee: TEmployee
	params: TGetEmployeeListParams
}): void => {
	queryClient.setQueryData<TGetEmployeeListResponse>(getEmployeeListQueryKey(params), (old) => {
		if (!old) return old

		return produce(old, (draft) => {
			const employeeIndex = draft.data.findIndex((emp) => emp.id === employee.id)
			if (employeeIndex !== -1) {
				draft.data[employeeIndex] = employee
			}
		})
	})
}
