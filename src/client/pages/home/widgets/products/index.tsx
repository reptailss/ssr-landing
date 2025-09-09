import React, { useMemo } from 'react'
import { HomePageContent } from '@common/pagesContent/home'
import { HomeProductsWidgetView } from '@client-pages/home/widgets/products/views/HomeProductsWidgetView'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'
import { HomeProductCard } from '@client-pages/home/widgets/products/types'
import { HomeProductsWidgetSlider } from '@client-pages/home/widgets/products/HomeProductsWidgetSlider'

export const HomeProductsWidget = ({
                                       content,
                                   }: {
    content: HomePageContent['productsWidget']
}) => {
    
    const productCards: HomeProductCard[] = useMemo(() => {
        return [
            {
                title: content.gpsMonitoringAndDispatching.title,
                description: content.gpsMonitoringAndDispatching.description,
                desktopImage: content.gpsMonitoringAndDispatching.desktopImage,
                mobileImage: content.gpsMonitoringAndDispatching.mobileImage,
                link: CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching,
            },
            {
                title: content.eTicket.title,
                description: content.eTicket.description,
                desktopImage: content.eTicket.desktopImage,
                mobileImage: content.eTicket.mobileImage,
                link: CLIENT_ROUTE_PATHS.eTicket,
            },
            {
                title: content.smartSociety.title,
                description: content.smartSociety.description,
                desktopImage: content.smartSociety.desktopImage,
                mobileImage: content.smartSociety.mobileImage,
                link: CLIENT_ROUTE_PATHS.smartSociety,
            },
        ]
    }, [content])
    
    
    return (
        <HomeProductsWidgetView
            title={content.title}
            description={content.description}
        >
            <HomeProductsWidgetSlider
                productCards={productCards}
            />
        </HomeProductsWidgetView>
    )
}

