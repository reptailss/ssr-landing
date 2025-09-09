import React, { useMemo } from 'react'
import { ProductsPageContent } from '@common/pagesContent/products'
import { ProductCard } from '@client-shared/widgets/products/types'
import {
    ProductsPageProductsWidgetView,
} from '@client-pages/products/widgets/products/views/ProductsPageProductsWidgetView'
import { CLIENT_ROUTE_PATHS } from '@common/clientRoutePaths'

export const ProductsPageProductsWidget = ({
                                               content,
                                           }: {
    content: ProductsPageContent['productsWidget']
}) => {
    
    
    const productCards: ProductCard[] = useMemo(() => {
        return [
            {
                description: content.gpsMonitoringAndDispatching.description,
                desktopImage: content.gpsMonitoringAndDispatching.desktopImage,
                mobileImage: content.gpsMonitoringAndDispatching.mobileImage,
                link: CLIENT_ROUTE_PATHS.gpsMonitoringAndDispatching,
            },
            {
                description: content.eTicket.description,
                desktopImage: content.eTicket.desktopImage,
                mobileImage: content.eTicket.mobileImage,
                link: CLIENT_ROUTE_PATHS.eTicket,
            },
            {
                description: content.smartSociety.description,
                desktopImage: content.smartSociety.desktopImage,
                mobileImage: content.smartSociety.mobileImage,
                link: CLIENT_ROUTE_PATHS.smartSociety,
            },
            {
                description: content.otherSolutions.description,
                desktopImage: content.otherSolutions.desktopImage,
                mobileImage: content.otherSolutions.mobileImage,
                link: CLIENT_ROUTE_PATHS.distribution,
            },
        ]
    }, [content])
    
    return (
        <ProductsPageProductsWidgetView
            productCards={productCards}
        />
    )
}

