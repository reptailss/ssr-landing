import React from 'react'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { Container } from '@client-ui/container'
import { ProductsPageContent } from '@common/pagesContent/products'
import { ProductsPageProductsWidget } from '@client-pages/products/widgets/products'
import { Header } from '@client-shared/layouts/header/Header'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'

export function ProductsPage({
                                 pageContent,
                                 breadcrumbs,
                             }: {
    pageContent: Partial<ProductsPageContent>
    breadcrumbs: BreadcrumbCard[]
}) {
    
    return (
        <>
            <Header />
            
            <Container>
                <Breadcrumbs
                    breadcrumbs={breadcrumbs}
                />
            </Container>
            
            {pageContent.productsWidget && <ProductsPageProductsWidget
                content={pageContent.productsWidget}
            />}
            
            <FooterExpanded />
        </>
    )
}