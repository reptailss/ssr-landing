import React from 'react'
import { SmartSocietyPageContent } from '@common/pagesContent/smartSociety'
import { SmartSocietyWidgetView } from '@client-pages/smartSociety/widgets/smartSociety/views/SmartSocietyWidgetView'
import { useClientSharedData } from '@client-shared/sharedData/useClientSharedData'

export const SmartSocietyWidget = ({
                                       content,
                                   }: {
    content: SmartSocietyPageContent['smartSocietyWidget']
}) => {
    
    const sharedData = useClientSharedData()
    
    return (
        <SmartSocietyWidgetView
            title={content.title}
            description={content.description}
            banner={content.banner}
            presentation={sharedData.smartSociety.presentation}
        />
    )
}

