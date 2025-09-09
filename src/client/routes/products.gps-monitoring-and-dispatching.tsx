import React from 'react'
import { MetaDescriptorBuilder, usePageData } from 'os-react-ssr-client'
import { MetaBuilder } from '@client-shared/meta/MetaBuilder'
import { GpsMonitoringAndDispatchingPage } from '@client-pages/gpsMonitoringAndDispatching'
import { ClientGlobalData } from '@common/globalData'

import { ETicketClientPageData } from '@common/clientPageData/eTicket'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'


export const meta: MetaDescriptorBuilder<ETicketClientPageData, ClientGlobalData> = (
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
        label: 'gpsMonitoringAndDispatching',
        url: null,
        active: true,
    },
]

export default function() {
    
    const pageData = usePageData<ETicketClientPageData>()
    
    return (
        <GpsMonitoringAndDispatchingPage
            pageContent={pageData?.pageContent || {}}
            breadcrumbs={BREADCRUMBS}
        />
    )
}


