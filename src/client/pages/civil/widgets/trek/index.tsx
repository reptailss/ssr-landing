import React from 'react'
import { CivilPageContent } from '@common/pagesContent/civil'
import { LevelsWidget } from '@client-shared/widgets/levelsWidget'

export const CivilTrekWidget = ({
                                          content,
                                      }: {
    content: CivilPageContent['trekWidget']
}) => {
    return (
        <LevelsWidget
            title={content.title}
            levels={content.levels}
        />
    )
}

