import kyUniversal, {HTTPError} from "ky"

export const api = kyUniversal.extend({
	prefixUrl: `/api`,
	hooks: {
		beforeError: [
			async (error) => {
				const {response} = error

				if (response) {
					try {
						const json = (await response.json()) as {error: string}
						return new Error(json.error) as HTTPError<unknown>
					} catch (jsonError) {
						if (response.headers.get("content-type")?.includes("text/plain")) {
							const text = await response.text()
							return new Error(text) as HTTPError<unknown>
						}

						return error
					}
				}

				return error
			},
		],
	},
	retry: 0,
})
