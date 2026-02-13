import {defineRouting} from "next-intl/routing"
import {DEFAULT_LOCALE, LOCALES} from "@/shared/constants/i18n.constants"

export const routing = defineRouting({
	locales: LOCALES,
	defaultLocale: DEFAULT_LOCALE,
	localePrefix: "as-needed",
})
