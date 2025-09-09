import React, { ReactNode, useMemo } from 'react'
import { useGlobalData, useLocale } from 'os-react-ssr-client'
import { AppLocales, DEFAULT_APP_LOCALE } from '@common/locales'
import { DEFAULT_SHARED_CONTENT } from '@client-shared/sharedData/defaultContent'
import { SharedDataContextValue } from '@client-shared/sharedData/context/contextValue'
import { ClientGlobalData } from '@common/globalData'

export const SharedDataProvider = ({
                                       children,
                                   }: {
    children: ReactNode
}) => {
    
    
    const globalData = useGlobalData<ClientGlobalData>()
    const locale = useLocale()
    const sharedData = useMemo(() => {
        const targetDefaultValue = locale && locale in DEFAULT_SHARED_CONTENT ? DEFAULT_SHARED_CONTENT[locale as AppLocales[number]] : DEFAULT_SHARED_CONTENT[DEFAULT_APP_LOCALE]
        
        if (!globalData?.sharedContent) {
            return targetDefaultValue
        }
        return {
            ...targetDefaultValue,
            ...globalData.sharedContent,
        }
    }, [globalData, locale])
    
    return (
        <SharedDataContextValue.Provider
            value={sharedData}
        >
            {children}
        </SharedDataContextValue.Provider>
    )
}

