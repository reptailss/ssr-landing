import React from 'react'
import { MetaDescriptorBuilder, usePageData } from 'os-react-ssr-client'
import { MetaBuilder } from '@client-shared/meta/MetaBuilder'
import { ClientGlobalData } from '@common/globalData'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { NewsClientPageData } from '@common/clientPageData/news'
import { NewsPage } from '@client-pages/news'

export const meta: MetaDescriptorBuilder<NewsClientPageData, ClientGlobalData> = (
    pageData,
    globalData,
) => {
    
    return MetaBuilder.buildMetaDescriptions({
        title: pageData?.pageContent.seo?.title || '',
        description: pageData?.pageContent.seo?.description || '',
        appPublicDomain: globalData?.appPublicDomain || '',
    })
}


const BREADCRUMBS: BreadcrumbCard[] = [
    {
        label: 'home',
        url: CLIENT_ROUTE_PATHS.home,
        active: false,
    },
    {
        label: 'news',
        url: null,
        active: true,
    },
]

export default function() {
    
    const pageData = usePageData<NewsClientPageData>()
    
    return (
        <NewsPage
            pageContent={pageData?.pageContent || {}}
            breadcrumbs={BREADCRUMBS}
            news={pageData?.data?.news || null}
        />
    )
}


