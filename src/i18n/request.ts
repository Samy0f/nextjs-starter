import { DEFAULT_LOCALE, LOCALE_CODES } from "@/constants/locale";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value ?? DEFAULT_LOCALE;

  return {
    locale,
    locales: LOCALE_CODES,
    defaultLocale: DEFAULT_LOCALE,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
