import React, { useCallback, useEffect, useRef, useState } from 'react'
import { NewsListResponse } from '@common/apiResponses/newsResponses'
import { useLocation, useNavigate } from 'os-react-ssr-client'
import {
    NewsPagePaginationWidgetView,
} from '@client-shared/widgets/news/views/newsPagePagination/NewsPagePaginationWidgetView'
import { OnClickNewsCard } from '@client-shared/widgets/news/types/events'
import { NewsDto } from '@common/dto/newsDto'
import { NewsRoutePathBuilder } from '@client-shared/widgets/news/routePathBuilder/NewsRoutePathBuilder'
import { NewsCardView } from '@client-shared/widgets/news/views/newsCard/NewsCardView'
import { Container } from '@client-ui/container'
import { PaginationLinkHrefBuilderFn } from '@client-ui/pagination/types/build'
import { NewsCardLinkHrefBuildFn } from '@client-shared/widgets/news/types/buildFn'

export const NewsPagePaginationWithTargetNewsWidget = ({
                                                           news,
                                                           initialTargetNews,
                                                       }: {
    news: NewsListResponse | null
    initialTargetNews: NewsDto | null
}) => {
    
    const [page, setPage] = useState<number>(news?.page || 1)
    const [targetNews, setTargetNews] = useState<NewsDto | null>(initialTargetNews)
    
    const navigate = useNavigate()
    const location = useLocation()
    
    const newsContainerRef = useRef<HTMLDivElement>(null)
    
    const onChangePage = useCallback((newPage: number) => {
        if (typeof window === 'undefined') {
            return
        }
        
        setPage(newPage)
        const url = new URL(window.location.href)
        url.searchParams.set('page', newPage.toString())
        navigate(url.pathname + url.search + url.hash, {
            disableScrollTop: true,
        })
        newsContainerRef.current?.scrollIntoView({
            behavior: 'smooth',
        })
    }, [location])
    
    const onClickNewsCard: OnClickNewsCard = useCallback((newsDto) => {
        setTargetNews(newsDto)
        const href = NewsRoutePathBuilder.newsPost(newsDto.slug, newsDto.locale)
        
        const search = window.location.search
        const hash = window.location.hash
        window.history.pushState(null, '', href + search + hash)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }, [])
    
    const paginationLinkHrefBuilderFn: PaginationLinkHrefBuilderFn = useCallback((page) => {
        const original = typeof window === 'undefined' ? location.originalUrl : window.location.pathname
        const [beforeHash, hash = ''] = original.split('#')
        const [pathname, search = ''] = beforeHash.split('?')
        const params = new URLSearchParams(search)
        params.set('page', page.toString())
        const newSearch = params.toString() ? `?${params.toString()}` : ''
        const newHash = hash ? `#${hash}` : ''
        return  pathname + newSearch + newHash
    }, [location])
    
    const newsCardLinkHrefBuildFn: NewsCardLinkHrefBuildFn = useCallback((newsDto) => {
        return NewsRoutePathBuilder.newsPost(newsDto.slug, newsDto.locale)
    }, [])
    
    useEffect(() => {
        setTargetNews(initialTargetNews)
    }, [initialTargetNews])
    
    return (
        <>
            
            {targetNews && <Container>
                <NewsCardView
                    newsDto={targetNews}
                />
            </Container>}
            
            <div
                ref={newsContainerRef}
            >
                {news && <NewsPagePaginationWidgetView
                    news={news.rows}
                    page={page}
                    onChangePage={onChangePage}
                    totalPage={news.all_pages}
                    onClickNewsCard={onClickNewsCard}
                    paginationLinkHrefBuilderFn={paginationLinkHrefBuilderFn}
                    newsCardLinkHrefBuildFn={newsCardLinkHrefBuildFn}
                />}
            </div>
        </>
    )
}

