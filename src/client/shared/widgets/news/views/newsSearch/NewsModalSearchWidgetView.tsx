import React from 'react'
import { NewsDto } from '@common/dto/newsDto'
import { SearchModalPanel } from '@client-ui/searchModalPanel'
import { NewsSearchCard } from '@client-shared/widgets/news/views/newsSearchCard/NewsSearchCard'
import { TopLoadingBar } from '@client-ui/topLoadingBar'
import { NothingFoundMessage } from '@client-ui/nothingFoundMessage'
import { OnClickNewsSearchCard } from '@client-shared/widgets/news/types/events'


export const NewsModalSearchWidgetView = ({
                                              onChangeSearchValue,
                                              open,
                                              onClose,
                                              newsDtoList,
                                              isLoading,
                                              showNothingFoundMessage,
                                              onClickNewsSearchCard,
                                          }: {
    onChangeSearchValue: (value: string) => void
    open: boolean
    onClose: () => void
    newsDtoList: NewsDto[]
    isLoading: boolean
    showNothingFoundMessage: boolean
    onClickNewsSearchCard?: OnClickNewsSearchCard
}) => {
    
    
    return (
        <SearchModalPanel
            onChangeSearchValue={onChangeSearchValue}
            open={open}
            onClose={onClose}
        >
            {isLoading && <TopLoadingBar />}
            
            {showNothingFoundMessage && <NothingFoundMessage />}
            
            {newsDtoList.length >= 1 && newsDtoList.map((newsDto) => {
                return (
                    <NewsSearchCard
                        newsDto={newsDto}
                        key={newsDto.id}
                        onClick={onClickNewsSearchCard}
                    />
                )
            })}
        </SearchModalPanel>
    )
}

