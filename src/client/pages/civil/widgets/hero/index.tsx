import React from 'react'
import { CivilHeroWidgetView } from '@client-pages/civil/widgets/hero/views/CivilHeroWidgetView'
import { CivilPageContent } from '@common/pagesContent/civil'

export const CivilHeroWidget = ({
                                    content,
                                }: {
    content: CivilPageContent['heroWidget']
}) => {
    return (
        <CivilHeroWidgetView
            title={content.title}
            description={content.description}
            video={content.video}
            videoPreview={content.videoPreview}
        />
    )
}

