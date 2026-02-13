"use client"

import {getQueryClient} from "@/shared/helpers/query-client"
import {QueryClientProvider as TanstackQueryClientProvider} from "@tanstack/react-query"
import {useMemo, useState} from "react"

export const QueryClientProvider = ({children}: {children: React.ReactNode}) => {
	const [queryClient] = useState(getQueryClient())
	return <TanstackQueryClientProvider client={queryClient}>{children}</TanstackQueryClientProvider>
}
