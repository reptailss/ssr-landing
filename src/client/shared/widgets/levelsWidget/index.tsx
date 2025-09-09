import React from 'react'
import { LevelsWidgetCard } from '@client-shared/widgets/levelsWidget/types'
import { LevelsWidgetView } from '@client-shared/widgets/levelsWidget/views/LevelsWidgetView'

export const LevelsWidget = ({
                                 title,
                                 levels,
                             }: {
    title: string
    levels: LevelsWidgetCard[]
}) => {
    return (
        <LevelsWidgetView
            title={title}
            levels={levels}
        />
    )
}

