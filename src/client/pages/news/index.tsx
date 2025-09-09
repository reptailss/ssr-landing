import React from 'react'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { Header } from '@client-shared/layouts/header/Header'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { Container } from '@client-ui/container'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { NewsPageContent } from '@common/pagesContent/news'
import { NewsListResponse } from '@common/apiResponses/newsResponses'
import { NewsPagePaginationWidget } from '@client-shared/widgets/news/NewsPagePaginationWidget'
import { NewsInfoWidget } from '@client-pages/news/widgets/info'

export const NewsPage = ({
                             pageContent,
                             news,
                             breadcrumbs,
                         }: {
    pageContent: Partial<NewsPageContent>
    breadcrumbs: BreadcrumbCard[]
    news: NewsListResponse | null
}) => {
    return (
        <>
            <Header />
            
            <Container>
                <Breadcrumbs
                    breadcrumbs={breadcrumbs}
                />
            </Container>
            
            {pageContent.infoWidget && <NewsInfoWidget
                content={pageContent.infoWidget}
            />}
            
            {news && <NewsPagePaginationWidget
                news={news}
            />}
            <FooterExpanded
                showMap
            />
        </>
    )
}

