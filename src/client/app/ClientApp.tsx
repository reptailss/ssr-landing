import React, { ReactNode } from 'react'
import { TranslationsProvider } from '@client-shared/translations/context/TranslationsProvider'
import { GlobalContactUsWidgetProvider } from '@client-shared/widgets/globalContactUs/GlobalContactUsWidgetProvider'
import { GlobalSearchWidgetProvider } from '@client-shared/widgets/globalSearch/GlobalSearchWidgetProvider'
import { SharedDataProvider } from '@client-shared/sharedData/context/SharedDataProvider'


export const ClientApp = ({
                              children,
                          }: {
    children: ReactNode
}) => {
    return (
        <TranslationsProvider>
            <SharedDataProvider>
                <GlobalContactUsWidgetProvider>
                    <GlobalSearchWidgetProvider>
                        {children}
                    </GlobalSearchWidgetProvider>
                </GlobalContactUsWidgetProvider>
            </SharedDataProvider>
        </TranslationsProvider>
    )
}
