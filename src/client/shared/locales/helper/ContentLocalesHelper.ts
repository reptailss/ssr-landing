import { AppLocale, AppLocales, DEFAULT_APP_LOCALE } from '@common/locales'

export class ContentLocalesHelper {
    static getValueByLocale<Value>(locale: AppLocale | null, values: Record<AppLocales[number], Value>): Value {
        return locale && locale in values ? values[locale as AppLocales[number]] : values[DEFAULT_APP_LOCALE]
    }
}