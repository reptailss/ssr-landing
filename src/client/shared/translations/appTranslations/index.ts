import { UK_APP_TRANSLATIONS } from '@client-shared/translations/appTranslations/uk'
import { EN_APP_TRANSLATIONS } from '@client-shared/translations/appTranslations/en'
import { AppLocales } from '@common/locales'

export const APP_TRANSLATIONS: Record<AppLocales[number], Record<string, string>> = {
    uk: UK_APP_TRANSLATIONS,
    en: EN_APP_TRANSLATIONS,
}