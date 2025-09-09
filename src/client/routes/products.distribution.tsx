import React from 'react'
import { MetaDescriptorBuilder, usePageData } from 'os-react-ssr-client'
import { MetaBuilder } from '@client-shared/meta/MetaBuilder'
import { ClientGlobalData } from '@common/globalData'
import { DistributionClientPageData } from '@common/clientPageData/distribution'
import { DistributionPage } from '@client-pages/distribution'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'


export const meta: MetaDescriptorBuilder<DistributionClientPageData, ClientGlobalData> = (
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
        label: 'basicDecisions',
        url: CLIENT_ROUTE_PATHS.products,
        active: false,
    },
    {
        label: 'distributions',
        url: null,
        active: true,
    },
]


export default function() {
    
    const pageData = usePageData<DistributionClientPageData>()
    
    return (
        <DistributionPage
            pageContent={pageData?.pageContent || {}}
            breadcrumbs={BREADCRUMBS}
        />
    )
}


