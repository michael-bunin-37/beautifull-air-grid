import * as React from "react"
import {Controller, type Control, type FieldPath, type FieldValues} from "react-hook-form"

import {Textarea} from "./textarea"

type TextareaWithControllerProps<TFieldValues extends FieldValues> = {
	control: Control<TFieldValues>
	name: FieldPath<TFieldValues>
} & Omit<React.ComponentProps<typeof Textarea>, "value" | "onChange">

function TextareaWithController<TFieldValues extends FieldValues>({
	control,
	name,
	...props
}: TextareaWithControllerProps<TFieldValues>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({field}) => (
				<Textarea
					{...field}
					{...props}
				/>
			)}
		/>
	)
}

export {TextareaWithController}
export type {TextareaWithControllerProps}
