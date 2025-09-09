import React, { useCallback, useState } from 'react'
import { NewsListResponse } from '@common/apiResponses/newsResponses'
import { useLocation, useNavigate } from 'os-react-ssr-client'
import {
    NewsPagePaginationWidgetView,
} from '@client-shared/widgets/news/views/newsPagePagination/NewsPagePaginationWidgetView'
import { OnClickNewsCard } from '@client-shared/widgets/news/types/events'
import { NewsRoutePathBuilder } from '@client-shared/widgets/news/routePathBuilder/NewsRoutePathBuilder'
import { PaginationLinkHrefBuilderFn } from '@client-ui/pagination/types/build'
import { NewsCardLinkHrefBuildFn } from '@client-shared/widgets/news/types/buildFn'

export const NewsPagePaginationWidget = ({
                                             news,
                                         }: {
    news: NewsListResponse
}) => {
    
    const [page, setPage] = useState<number>(news.page)
    
    const navigate = useNavigate()
    const location = useLocation()
    
    const onChangePage = useCallback((newPage: number) => {
     
        if (typeof window === 'undefined') {
            return
        }
        setPage(newPage)
        const url = new URL(window.location.href)
        url.searchParams.set('page', newPage.toString())
        navigate(url.pathname + url.search + url.hash)
    }, [])
    
    const onClickNewsCard: OnClickNewsCard = useCallback((newsDto) => {
        const href = NewsRoutePathBuilder.newsPost(newsDto.slug, newsDto.locale)
        navigate(href)
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
    return (
        <NewsPagePaginationWidgetView
            news={news.rows}
            page={page}
            onChangePage={onChangePage}
            totalPage={news.all_pages}
            onClickNewsCard={onClickNewsCard}
            newsCardLinkHrefBuildFn={newsCardLinkHrefBuildFn}
            paginationLinkHrefBuilderFn={paginationLinkHrefBuilderFn}
        />
    )
}

