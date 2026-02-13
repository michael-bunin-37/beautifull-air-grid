import {
	PutEmployeeResponseSchema,
	putQueryClientOptimisticEmployee,
	TGetEmployeeListParams,
} from "@/entities/employee"
import {supabaseClient} from "@/shared/configs/supabase-client"
import {useQueryClient} from "@tanstack/react-query"
import {useEffect} from "react"

type UseEmployeesTableRealtimeProps = {
	params: TGetEmployeeListParams
}
export const useEmployeesTableRealtime = ({params}: UseEmployeesTableRealtimeProps) => {
	const queryClient = useQueryClient()

	useEffect(() => {
		const channel = supabaseClient
			.channel("employees")
			.on("postgres_changes", {event: "*", schema: "public", table: "employees"}, (payload) => {
				console.log(payload)
				if (!payload.new) return

				const {data: employee, success} = PutEmployeeResponseSchema.safeParse(payload.new)
				if (!success) return

				putQueryClientOptimisticEmployee({queryClient, employee, params})
			})
			.subscribe()

		return () => {
			supabaseClient.removeChannel(channel)
		}
	}, [queryClient])
}
