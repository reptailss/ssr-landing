import React from 'react'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { Header } from '@client-shared/layouts/header/Header'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { ContactsPageContent } from '@common/pagesContent/contacts'
import { Container } from '@client-ui/container'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { ContactsInfoWidget } from '@client-pages/contacts/widgets/info'

export const ContactsPage = ({
                                 pageContent,
                                 breadcrumbs,
                             }: {
    pageContent: Partial<ContactsPageContent>
    breadcrumbs: BreadcrumbCard[]
}) => {
    return (
        <>
            <Header />
            
            <Container>
                <Breadcrumbs
                    breadcrumbs={breadcrumbs}
                />
            </Container>
            
            {pageContent.infoWidget && <ContactsInfoWidget
                content={pageContent.infoWidget}
            />}
            
            <FooterExpanded
                showMap
            />
        </>
    )
}

