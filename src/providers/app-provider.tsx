import {QueryClientProvider} from "./query-client-provider"
import {SnackbarProvider} from "./snackbar-provider"

export const AppProvider = ({children}: {children: React.ReactNode}) => {
	return (
		<QueryClientProvider>
			<SnackbarProvider>{children}</SnackbarProvider>
		</QueryClientProvider>
	)
}
