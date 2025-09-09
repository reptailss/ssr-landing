import React from 'react'
import { MetaDescriptorBuilder, usePageData } from 'os-react-ssr-client'
import { MetaBuilder } from '@client-shared/meta/MetaBuilder'
import { ClientGlobalData } from '@common/globalData'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { SmartSocietyClientPageData } from '@common/clientPageData/smartSociety'
import { SmartSocietyPage } from '@client-pages/smartSociety'


export const meta: MetaDescriptorBuilder<SmartSocietyClientPageData, ClientGlobalData> = (
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
        label: 'smartSociety',
        url: null,
        active: true,
    },
]

export default function() {
    
    const pageData = usePageData<SmartSocietyClientPageData>()
    
    return (
        <SmartSocietyPage
            pageContent={pageData?.pageContent || {}}
            breadcrumbs={BREADCRUMBS}
        />
    )
}


