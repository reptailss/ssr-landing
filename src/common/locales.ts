export const APP_LOCALES = ['uk', 'en'] as const

export type AppLocales = typeof APP_LOCALES
export type AppLocale = AppLocales[number]

export const DEFAULT_APP_LOCALE: AppLocale = 'uk'
