import * as React from "react"
import {Controller, type Control, type FieldPath, type FieldValues} from "react-hook-form"

import {Select} from "./select"

type SelectWithControllerProps<TFieldValues extends FieldValues> = {
	control: Control<TFieldValues>
	name: FieldPath<TFieldValues>
} & Omit<React.ComponentProps<typeof Select>, "value" | "onValueChange">

function SelectWithController<TFieldValues extends FieldValues>({
	control,
	name,
	...props
}: SelectWithControllerProps<TFieldValues>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({field}) => (
				<Select
					value={field.value}
					onValueChange={field.onChange}
					{...props}
				/>
			)}
		/>
	)
}

export {SelectWithController}
export type {SelectWithControllerProps}
