import { Header } from '@client-shared/layouts/header/Header'
import React from 'react'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { Container } from '@client-ui/container'
import { PaperWidget } from '@client-shared/widgets/paperWidget'
import { DistributionPageContent } from '@common/pagesContent/distribution'
import { DistributionHeroWidget } from '@client-pages/distribution/widgets/hero'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { DistributionPaddingBlock } from '@client-pages/distribution/paddingBlock/DistributionPaddingBlock'

export function DistributionPage({
                                     pageContent,
                                     breadcrumbs,
                                 }: {
    pageContent: Partial<DistributionPageContent>
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
            
            {pageContent.heroWidget && <DistributionHeroWidget
                content={pageContent.heroWidget}
            />}
            
            {pageContent.paperWidget && <PaperWidget
                paperWidget={pageContent.paperWidget}
            />}
            
            <DistributionPaddingBlock />
            
            <FooterExpanded />
        </>
    )
}