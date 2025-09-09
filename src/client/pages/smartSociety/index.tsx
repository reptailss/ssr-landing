import { Header } from '@client-shared/layouts/header/Header'
import React from 'react'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { Container } from '@client-ui/container'
import { PaperWidget } from '@client-shared/widgets/paperWidget'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { SmartSocietyPageContent } from '@common/pagesContent/smartSociety'
import { SmartSocietyUniqueWidget } from '@client-pages/smartSociety/widgets/uniqueWidget'
import { SmartSocietyHeroWidget } from '@client-pages/smartSociety/widgets/hero'
import { SmartSocietyWidget } from '@client-pages/smartSociety/widgets/smartSociety'
import { SmartSocietyGetPresentationWidget } from '@client-pages/smartSociety/widgets/getPresentation'

export function SmartSocietyPage({
                                     pageContent,
                                     breadcrumbs,
                                 }: {
    pageContent: Partial<SmartSocietyPageContent>
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
            
            {pageContent.heroWidget && <SmartSocietyHeroWidget
                content={pageContent.heroWidget}
            />}
            
            {pageContent.uniqueWidget && <SmartSocietyUniqueWidget
                content={pageContent.uniqueWidget}
            />}
            
            {pageContent.smartSocietyWidget && <SmartSocietyWidget
                content={pageContent.smartSocietyWidget}
            />}
            
            {pageContent.paperWidget && <PaperWidget
                paperWidget={pageContent.paperWidget}
            />}
            
            {pageContent.getPresentationWidget && <SmartSocietyGetPresentationWidget
                content={pageContent.getPresentationWidget}
            />}
            
            <FooterExpanded />
        </>
    )
}