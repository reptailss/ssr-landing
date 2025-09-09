import React from 'react'
import { MetaDescriptorBuilder, usePageData } from 'os-react-ssr-client'
import { MetaBuilder } from '@client-shared/meta/MetaBuilder'
import { ClientGlobalData } from '@common/globalData'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { NewsPostClientPageData } from '@common/clientPageData/news'
import { StringHelper } from '@client-utils/string/StringHelper'
import { NewsPostPage } from '@client-pages/newsPost'

export const meta: MetaDescriptorBuilder<NewsPostClientPageData, ClientGlobalData> = (
    pageData,
    globalData,
) => {
    
    return MetaBuilder.buildMetaDescriptions({
        title: pageData?.data?.targetNews?.title || '',
        description: pageData?.data.targetNews?.content ? StringHelper.slice(StringHelper.stripHtmlTags(pageData.data.targetNews.content), 40) : '',
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
        url: CLIENT_ROUTE_PATHS.news,
        active: true,
    },
]

export default function() {
    
    const pageData = usePageData<NewsPostClientPageData>()
    
    return (
        <NewsPostPage
            breadcrumbs={BREADCRUMBS}
            news={pageData?.data?.news || null}
            targetNews={pageData?.data?.targetNews || null}
        />
    )
}


