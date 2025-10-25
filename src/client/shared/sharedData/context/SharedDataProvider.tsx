import React, { ReactNode, useMemo } from 'react'
import { useGlobalData, useLocale } from 'os-react-ssr-client'
import { AppLocaleValues, DEFAULT_APP_LOCALE_VALUE } from '@common/locales'
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
        const targetDefaultValue = locale && locale in DEFAULT_SHARED_CONTENT ? DEFAULT_SHARED_CONTENT[locale as AppLocaleValues[number]] : DEFAULT_SHARED_CONTENT[DEFAULT_APP_LOCALE_VALUE]
        
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

