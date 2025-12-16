export type Locale = (typeof LOCALES)[number];
export type LocaleCode = Locale["code"];

export const LOCALES = [
  {
    code: "en",
    label: "English",
    default: true,
  },
] as const;

export const LOCALE_CODES = LOCALES.map((l) => l.code);
export const DEFAULT_LOCALE =
  LOCALES.find((l) => l.default)?.code ?? LOCALES[0].code;

export const getValidLocale = (locale?: string): LocaleCode => {
  if (
    typeof locale === "string" &&
    LOCALE_CODES.includes(locale as LocaleCode)
  ) {
    return locale as LocaleCode;
  }
  return DEFAULT_LOCALE;
};
