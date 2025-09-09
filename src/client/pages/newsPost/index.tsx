import React from 'react'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { Header } from '@client-shared/layouts/header/Header'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { Container } from '@client-ui/container'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { NewsListResponse } from '@common/apiResponses/newsResponses'
import { NewsDto } from '@common/dto/newsDto'
import {
    NewsPagePaginationWithTargetNewsWidget,
} from '@client-shared/widgets/news/NewsPagePaginationWithTargetNewsWidget'

export const NewsPostPage = ({
                                 news,
                                 breadcrumbs,
                                 targetNews,
                             }: {
    breadcrumbs: BreadcrumbCard[]
    news: NewsListResponse | null
    targetNews: NewsDto | null
}) => {
    return (
        <>
            <Header />
            
            <Container>
                <Breadcrumbs
                    breadcrumbs={breadcrumbs}
                />
            </Container>
            
            <NewsPagePaginationWithTargetNewsWidget
                news={news}
                initialTargetNews={targetNews}
            />
            
            <FooterExpanded
                showMap
            />
        </>
    )
}

