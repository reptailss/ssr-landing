import React from 'react'
import { MetaDescriptorBuilder, usePageData } from 'os-react-ssr-client'
import { MetaBuilder } from '@client-shared/meta/MetaBuilder'
import { GpsMonitoringAndDispatchingClientPageData } from '@common/clientPageData/gpsMonitoringAndDispatching'
import { ClientGlobalData } from '@common/globalData'
import { HomePage } from '@client-pages/home'
import { HomeClientPageData } from '@common/clientPageData/home'


export const meta: MetaDescriptorBuilder<GpsMonitoringAndDispatchingClientPageData, ClientGlobalData> = (
    pageData,
    globalData,
) => {
    return MetaBuilder.buildMetaDescriptions({
        title: pageData?.pageContent.seo?.title || '',
        description: pageData?.pageContent.seo?.description || '',
        appPublicDomain: globalData?.appPublicDomain || '',
    })
}


export default function() {
    
    const pageData = usePageData<HomeClientPageData>()
    
    return (
        <HomePage
            pageContent={pageData?.pageContent || {}}
            lastNewsList={pageData?.data?.lastNewsList || []}
        />
    )
}


