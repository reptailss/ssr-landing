import React from 'react'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'
import { Header } from '@client-shared/layouts/header/Header'
import { Container } from '@client-ui/container'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { InnerHtml } from '@client-ui/innerHtml'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { PrivacyPolicyPageContent } from '@common/pagesContent/privacy-policy'
import styles from '@client-pages/termsOfUse/styles.module.css'

export const PrivacyPolicyPage = ({
                                      pageContent,
                                      breadcrumbs,
                                  }: {
    pageContent: Partial<PrivacyPolicyPageContent>
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

