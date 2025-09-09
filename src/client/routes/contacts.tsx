import React from 'react'
import { MetaDescriptorBuilder, usePageData } from 'os-react-ssr-client'
import { MetaBuilder } from '@client-shared/meta/MetaBuilder'
import { ClientGlobalData } from '@common/globalData'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { ContactsClientPageData } from '@common/clientPageData/contacts'
import { ContactsPage } from '@client-pages/contacts'

export const meta: MetaDescriptorBuilder<ContactsClientPageData, ClientGlobalData> = (
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
        label: 'contacts',
        url: null,
        active: true,
    },
]

export default function() {
    
    const pageData = usePageData<ContactsClientPageData>()
    
    return (
        <ContactsPage
            pageContent={pageData?.pageContent || {}}
            breadcrumbs={BREADCRUMBS}
        />
    )
}


