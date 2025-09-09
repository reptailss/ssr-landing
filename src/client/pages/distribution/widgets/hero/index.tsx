import React from 'react'
import { DistributionPageContent } from '@common/pagesContent/distribution'
import { DistributionHeroWidgetView } from '@client-pages/distribution/widgets/hero/views/DistributionHeroWidgetView'

export const DistributionHeroWidget = ({
                                           content,
                                       }: {
    content: DistributionPageContent['heroWidget']
}) => {
    return (
        <DistributionHeroWidgetView
            title={content.title}
            description={content.description}
        />
    )
}

