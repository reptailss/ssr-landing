import React, { useCallback, useState } from 'react'
import { NewsModalSearchWidgetView } from '@client-shared/widgets/news/views/newsSearch/NewsModalSearchWidgetView'
import { NewsDto } from '@common/dto/newsDto'
import { NewsApi } from '@client-shared/api/NewsApi'
import { useDebounceCb } from '@client-shared/hooks/useDebounceCb'

export const NewsModalSearchWidget = ({
                                          open,
                                          onClose,
                                      }: {
    open: boolean
    onClose: () => void
}) => {
    const [newsDtoList, setNewsList] = useState<NewsDto[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showNothingFoundMessage, setShowNothingFoundMessage] = useState<boolean>(false)
    
    const onNewsSearch = useDebounceCb(async (searchValue: string) => {
        if (!searchValue) {
            setNewsList([])
            setShowNothingFoundMessage(false)
            return
        }
        try {
            setIsLoading(true)
            const news = await NewsApi.searchNews(
                searchValue.trim(),
                10,
            )
            setNewsList(news)
            setShowNothingFoundMessage(!news.length)
            setIsLoading(false)
        } catch (error) {
            setNewsList([])
            setShowNothingFoundMessage(true)
            setIsLoading(false)
            console.log(error)
        }
    }, 500)
    
    return (
        <NewsModalSearchWidgetView
            open={open}
            onClose={onClose}
            onChangeSearchValue={onNewsSearch}
            newsDtoList={newsDtoList}
            isLoading={isLoading}
            showNothingFoundMessage={showNothingFoundMessage}
            onClickNewsSearchCard={onClose}
        />
    )
}

