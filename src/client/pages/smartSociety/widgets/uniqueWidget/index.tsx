import React from 'react'
import { SmartSocietyPageContent } from '@common/pagesContent/smartSociety'
import {
    SmartSocietyUniqueWidgetView,
} from '@client-pages/smartSociety/widgets/uniqueWidget/views/SmartSocietyUniqueWidgetView'

export const SmartSocietyUniqueWidget = ({
                                             content,
                                         }: {
    content: SmartSocietyPageContent['uniqueWidget']
}) => {
    return (
        <SmartSocietyUniqueWidgetView
            title={content.title}
            list={content.list}
        />
    )
}

