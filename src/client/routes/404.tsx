import React from 'react'
import { NotFountPage } from '@client-pages/notFound/NotFountPage'
import { MetaDescriptorBuilder } from 'os-react-ssr-client'
import { MetaBuilder } from '@client-shared/meta/MetaBuilder'
import { ClientGlobalData } from '@common/globalData'
import { NotFoundClientPageData } from '@common/clientPageData/notFoundPageData'
import { AppLocale, AppLocales } from '@common/locales'
import { ContentLocalesHelper } from '@client-shared/locales/helper/ContentLocalesHelper'

const SEO: Record<AppLocales[number], {
    title: string
    description: string
}> = {
    uk: {
        title: 'GIS — Сторінку не знайдено',
        description: 'Сторінку, яку ви шукаєте, не знайдено. Можливо, вона була видалена або переміщена.',
    },
    en: {
        title: 'GIS — Page Not Found',
        description: 'The page you are looking for could not be found. It might have been removed or moved.',
    },
}

export const meta: MetaDescriptorBuilder<NotFoundClientPageData, ClientGlobalData> = (
    pageData,
    globalData,
    {
        locale,
    },
) => {
    const defaultContentByLocale = ContentLocalesHelper.getValueByLocale(locale as AppLocale, SEO)
    return MetaBuilder.buildMetaDescriptions({
        title: defaultContentByLocale.title,
        description: defaultContentByLocale.description,
        appPublicDomain: globalData?.appPublicDomain || '',
    })
}


export default function() {
    return (
        <NotFountPage />
    )
}