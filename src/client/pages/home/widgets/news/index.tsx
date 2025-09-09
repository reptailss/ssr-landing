import { NewsDto } from '@common/dto/newsDto'
import React from 'react'
import { HomeNewsWidgetView } from '@client-pages/home/widgets/news/views/HomeNewsWidgetView'

export const HomeNewsWidget = ({
                                   newsDtoList,
                               }: {
    newsDtoList: NewsDto[]
}) => {
    return (
        <HomeNewsWidgetView newsDtoList={newsDtoList} />
    )
}

