import React, { ReactNode, useMemo } from 'react'
import { useLocale } from 'os-react-ssr-client'
import { TranslationsContextValue } from '@client-shared/translations/context/contextValue'
import { APP_TRANSLATIONS } from '@client-shared/translations/appTranslations'
import { AppLocales, DEFAULT_APP_LOCALE } from '@common/locales'

export const TranslationsProvider = ({
                                         children,
                                     }: {
    children: ReactNode
}) => {
    
    const locale = useLocale()
    const translations: Record<string, string> = useMemo(() => {
        if (!locale || !(locale in APP_TRANSLATIONS)) {
            return APP_TRANSLATIONS[DEFAULT_APP_LOCALE]
        }
        return APP_TRANSLATIONS[locale as AppLocales[number]]
    }, [locale])
    
    return (
        <TranslationsContextValue.Provider
            value={translations}
        >
            {children}
        </TranslationsContextValue.Provider>
    )
}

