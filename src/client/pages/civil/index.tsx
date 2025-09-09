import { Header } from '@client-shared/layouts/header/Header'
import React from 'react'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { Container } from '@client-ui/container'
import { PaperWidget } from '@client-shared/widgets/paperWidget'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { CivilPageContent } from '@common/pagesContent/civil'
import { CivilHeroWidget } from '@client-pages/civil/widgets/hero'
import { CivilTrekWidget } from 'src/client/pages/civil/widgets/trek'

export function CivilPage({
                              pageContent,
                              breadcrumbs,
                          }: {
    pageContent: Partial<CivilPageContent>
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
            
            {pageContent.heroWidget && <CivilHeroWidget
                content={pageContent.heroWidget}
            />}
            
            {pageContent.trekWidget && <CivilTrekWidget
                content={pageContent.trekWidget}
            />}
            
            {pageContent.paperWidget && <PaperWidget
                paperWidget={pageContent.paperWidget}
            />}
            
            <FooterExpanded />
        </>
    )
}