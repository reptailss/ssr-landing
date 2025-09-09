import React from 'react'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { Header } from '@client-shared/layouts/header/Header'
import { Container } from '@client-ui/container'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { TermsOfUsePageContent } from '@common/pagesContent/termsOfUse'
import { InnerHtml } from '@client-ui/innerHtml'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import styles from './styles.module.css'
export const TermOfUsePage = ({
                                  pageContent,
                                  breadcrumbs,
                              }: {
    pageContent: Partial<TermsOfUsePageContent>
    breadcrumbs: BreadcrumbCard[]
}) => {
    return (
        <>
            <Header />
            
            <Container>
                <Breadcrumbs
                    breadcrumbs={breadcrumbs}
                />
                {pageContent.content && <InnerHtml
                    className={styles.content}
                    html={pageContent.content.value}
                />}
            </Container>
            
           
            
            <FooterExpanded
                showMap
            />
        </>
    )
}

