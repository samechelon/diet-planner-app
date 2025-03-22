import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["it"],

  // Used when no locale matches
  defaultLocale: "it",

  // Add this to ensure proper redirects
  localePrefix: "always",
})