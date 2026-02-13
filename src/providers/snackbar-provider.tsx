"use client"

import React from "react"
import toast, {ToastBar, Toaster} from "react-hot-toast"
import {X} from "lucide-react"

type SnackbarProviderProps = {
	children?: React.ReactNode
}

function SnackbarProvider({children}: SnackbarProviderProps) {
	return (
		<React.Fragment>
			<Toaster
				position="top-center"
				toastOptions={{
					duration: 5000,
					style: {
						// border: "1px solid #713200",
						color: "var(--color-foreground)",
						fontSize: "14px",
						background: "var(--color-background)",
					},
				}}>
				{(t) => (
					<ToastBar toast={t}>
						{({icon, message}) => (
							<div className="flex items-center gap-2">
								{icon}
								<div>{message}</div>
								<button
									onClick={() => toast.dismiss(t.id)}
									aria-label="Close">
									<X size={14} />
								</button>
							</div>
						)}
					</ToastBar>
				)}
			</Toaster>
			{children}
		</React.Fragment>
	)
}

export {SnackbarProvider}
