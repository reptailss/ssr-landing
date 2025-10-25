import { AppLocaleValue, AppLocaleValues, DEFAULT_APP_LOCALE_VALUE } from '@common/locales'

export class ContentLocalesHelper {
    static getValueByLocale<Value>(locale: AppLocaleValue | null, values: Record<AppLocaleValues[number], Value>): Value {
        return locale && locale in values ? values[locale as AppLocaleValues[number]] : values[DEFAULT_APP_LOCALE_VALUE]
    }
}