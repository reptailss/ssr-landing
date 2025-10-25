import { useLocale, usePageData } from 'os-react-ssr-client'
import { useMemo } from 'react'
import { PagePageContentDefaultValues } from '@client-shared/pageData/types'
import { AppLocaleValues, DEFAULT_APP_LOCALE_VALUE } from '@common/locales'
import { ClientPageData } from '@common/clientPageData/clientPageData'


export function useClientPageData<PageContent extends Record<string, unknown>>(defaultValue: PagePageContentDefaultValues<PageContent>): PageContent {
    const data = usePageData<ClientPageData<PageContent>>()
    const locale = useLocale()
    return useMemo(() => {
        const targetDefaultValue = locale && locale in defaultValue ? defaultValue[locale as AppLocaleValues[number]] : defaultValue[DEFAULT_APP_LOCALE_VALUE]
        
        if (!data?.pageContent) {
            return targetDefaultValue
        }
        return {
            ...targetDefaultValue,
            ...data.pageContent,
        }
    }, [data,locale])
}