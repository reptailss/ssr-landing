import React from 'react'
import { NewsDto } from '@common/dto/newsDto'
import styles from './styles.module.css'
import { NewsSmallCardView } from '@client-shared/widgets/news/views/newsSmallCard/NewsSmallCardView'
import { OnClickNewsCard } from '@client-shared/widgets/news/types/events'
import { Container } from '@client-ui/container'
import { Pagination } from '@client-ui/pagination'
import { NewsCardLinkHrefBuildFn } from '@client-shared/widgets/news/types/buildFn'
import { PaginationLinkHrefBuilderFn } from '@client-ui/pagination/types/build'


export const NewsPagePaginationWidgetView = ({
                                                 news,
                                                 page,
                                                 totalPage,
                                                 onChangePage,
                                                 onClickNewsCard,
                                                 newsCardLinkHrefBuildFn,
                                                 paginationLinkHrefBuilderFn,
                                             }: {
    news: NewsDto[]
    page: number
    onChangePage: (page: number) => void
    totalPage: number
    onClickNewsCard: OnClickNewsCard
    newsCardLinkHrefBuildFn: NewsCardLinkHrefBuildFn
    paginationLinkHrefBuilderFn: PaginationLinkHrefBuilderFn
}) => {
    return (
        <section
            className={styles.root}
        >
            <Container
                className={styles.container}
            >
                <div
                    className={styles.list}
                >
                    {news.length >= 1 && news.map((news) => {
                        const href = newsCardLinkHrefBuildFn(news)
                        return (
                            <NewsSmallCardView
                                onClick={onClickNewsCard}
                                newsDto={news}
                                key={news.id}
                                href={href}
                            />
                        )
                    })}
                </div>
                
                {totalPage > 1 && <Pagination
                    page={page}
                    totalPage={totalPage}
                    onChange={onChangePage}
                    linkHrefBuilderFn={paginationLinkHrefBuilderFn}
                />}
            </Container>
        </section>
    )
}

