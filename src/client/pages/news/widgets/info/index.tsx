import React from 'react'
import { NewsPageContent } from '@common/pagesContent/news'
import { NewsInfoWidgetView } from '@client-pages/news/widgets/info/views/NewsInfoWidgetView'

export const NewsInfoWidget = ({
                                   content,
                               }: {
    content: NewsPageContent['infoWidget']
}) => {
    return (
        <NewsInfoWidgetView
            title={content.title}
        />
    )
}

