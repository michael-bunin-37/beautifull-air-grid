import {useEffect, useRef} from "react"

export const usePreviousValue = (value: any) => {
	const ref = useRef<typeof value>(undefined)

	useEffect(() => {
		ref.current = value
	}, [value])

	return ref.current
}
