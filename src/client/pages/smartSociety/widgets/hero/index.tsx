import React from 'react'
import { SmartSocietyPageContent } from '@common/pagesContent/smartSociety'
import { SmartSocietyHeroWidgetView } from '@client-pages/smartSociety/widgets/hero/views/SmartSocietyHeroWidgetView'

export const SmartSocietyHeroWidget = ({
                                           content,
                                       }: {
    content: SmartSocietyPageContent['heroWidget']
}) => {
    return (
        <SmartSocietyHeroWidgetView
            title={content.title}
            description={content.description}
            video={content.video}
            videoPreview={content.videoPreview}
        />
    )
}

