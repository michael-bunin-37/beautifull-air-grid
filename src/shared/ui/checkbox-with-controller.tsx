import * as React from "react"
import {Controller, type Control, type FieldPath, type FieldValues} from "react-hook-form"

import {Checkbox} from "./checkbox"

type CheckboxWithControllerProps<TFieldValues extends FieldValues> = {
	control: Control<TFieldValues>
	name: FieldPath<TFieldValues>
} & Omit<React.ComponentProps<typeof Checkbox>, "checked" | "onCheckedChange">

function CheckboxWithController<TFieldValues extends FieldValues>({
	control,
	name,
	...props
}: CheckboxWithControllerProps<TFieldValues>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({field}) => (
				<Checkbox
					checked={field.value}
					onCheckedChange={field.onChange}
					{...props}
				/>
			)}
		/>
	)
}

export {CheckboxWithController}
export type {CheckboxWithControllerProps}
