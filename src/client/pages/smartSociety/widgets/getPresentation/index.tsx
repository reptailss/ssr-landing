import React from 'react'
import { SmartSocietyPageContent } from '@common/pagesContent/smartSociety'
import {
    SmartSocietyGetPresentationWidgetView,
} from '@client-pages/smartSociety/widgets/getPresentation/views/SmartSocietyGetPresentationWidgetView'
import { useClientSharedData } from '@client-shared/sharedData/useClientSharedData'

export const SmartSocietyGetPresentationWidget = ({ content }: {
    content: SmartSocietyPageContent['getPresentationWidget']
}) => {
    
    
    const sharedData = useClientSharedData()
    
    return (
        <SmartSocietyGetPresentationWidgetView
            description={content.description}
            presentation={sharedData.smartSociety.presentation}
        />
    )
}

