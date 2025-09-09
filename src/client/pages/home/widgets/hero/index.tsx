import React from 'react'
import { HomeHeroWidgetView } from '@client-pages/home/widgets/hero/views/HomeHeroWidgetView'
import { HomePageContent } from '@common/pagesContent/home'
import { useOpenGlobalContactUsFn } from '@client-shared/widgets/globalContactUs/useOpenGlobalContactUsFn'

export const HomeHeroWidget = ({
                                   content,
                               }: {
    content: HomePageContent['heroWidget']
}) => {
    
    const openGlobalContactUsFn = useOpenGlobalContactUsFn()
    
    return (
        <HomeHeroWidgetView
            content={content}
            onClickContactUs={openGlobalContactUsFn}
        />
    )
}
