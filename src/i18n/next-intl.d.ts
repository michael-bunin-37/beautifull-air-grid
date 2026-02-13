import type messages from "@/i18n/messages/en.json"

declare module "next-intl" {
	interface AppConfig {
		Messages: typeof messages
	}
}
