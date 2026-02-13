import {QUERY_CLIENT_KEYS} from "@/shared/constants/query-client.constants"
import {TGetEmployeeListParams, TGetEmployeeListResponse} from "../model"
import {queryOptions, useQuery, UseQueryOptions} from "@tanstack/react-query"
import {getEmployeeList} from "../api"

export const getEmployeeListQueryKey = (params: TGetEmployeeListParams) => [
	QUERY_CLIENT_KEYS.EMPLOYEE,
	params,
]

export type UseGetEmployeeListOptions = UseQueryOptions<TGetEmployeeListResponse, Error>

export const getEmployeeListQueryOptions = (
	params: TGetEmployeeListParams,
	options?: Partial<UseGetEmployeeListOptions>,
) => {
	return queryOptions({
		queryKey: getEmployeeListQueryKey(params),
		queryFn: () => getEmployeeList(params),
		retry: 1,
		...options,
	})
}

export const useGetEmployeeList = (
	params: TGetEmployeeListParams,
	options?: Partial<UseGetEmployeeListOptions>,
) => {
	return useQuery(getEmployeeListQueryOptions(params, options))
}
