import { Header } from '@client-shared/layouts/header/Header'
import React from 'react'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { Container } from '@client-ui/container'
import { PaperWidget } from '@client-shared/widgets/paperWidget'
import { ETicketPageContent } from '@common/pagesContent/eTicket'
import { ETicketImplementationAfpsWidget } from '@client-pages/eticket/widgets/ImplementationAfps'
import { ETicketHeroWidget } from '@client-pages/eticket/widgets/hero'
import { ETicketAfpsWidget } from '@client-pages/eticket/widgets/afpsWidget'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'

export function ETicketPage({
                                pageContent,
                                breadcrumbs,
                            }: {
    pageContent: Partial<ETicketPageContent>
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
            
            {pageContent.heroWidget && <ETicketHeroWidget
                content={pageContent.heroWidget}
            />}
            
            {pageContent.afpsWidget && <ETicketAfpsWidget
                content={pageContent.afpsWidget}
            />}
            
            {pageContent.paperWidget && <PaperWidget
                paperWidget={pageContent.paperWidget}
            />}
            
            {pageContent.implementationAfpsWidget && <ETicketImplementationAfpsWidget
                content={pageContent.implementationAfpsWidget}
            />}
            
            <FooterExpanded />
        </>
    )
}