export const APP_LOCALES = ['uk', 'en'] as const

export type AppLocaleValues = typeof APP_LOCALES
export type AppLocaleValue = AppLocaleValues[number]

export const DEFAULT_APP_LOCALE_VALUE: AppLocaleValue = 'uk'
