import { routing } from "@/i18n/routing"
import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()
const nextConfig: NextConfig = {
	output: "standalone",
}

export default withNextIntl(nextConfig)
