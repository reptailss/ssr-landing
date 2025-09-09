import { Header } from '@client-shared/layouts/header/Header'
import React from 'react'
import { FooterExpanded } from '@client-shared/layouts/footer/FooterExpanded'
import { Breadcrumbs } from '@client-ui/breadcrumbs'
import { Container } from '@client-ui/container'
import { GpsMonitoringAndDispatchingHeroWidget } from '@client-pages/gpsMonitoringAndDispatching/widgets/hero'
import { GpsMonitoringAndDispatchingPageContent } from '@common/pagesContent/gpsMonitoringAndDispatching'
import {
    GpsMonitoringAndDispatchingFunctionalityWidget,
} from '@client-pages/gpsMonitoringAndDispatching/widgets/functionalityWidget'
import { PaperWidget } from '@client-shared/widgets/paperWidget'
import {
    GpsMonitoringAndDispatchingETransportWidget,
} from '@client-pages/gpsMonitoringAndDispatching/widgets/eTransport'
import { BreadcrumbCard } from '@client-ui/breadcrumbs/types'

export function GpsMonitoringAndDispatchingPage({
                                                    pageContent,
                                                    breadcrumbs,
                                                }: {
    pageContent: Partial<GpsMonitoringAndDispatchingPageContent>
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
            
            
            {pageContent.heroWidget && <GpsMonitoringAndDispatchingHeroWidget
                content={pageContent.heroWidget}
            />}
            
            {pageContent.functionalityWidget && <GpsMonitoringAndDispatchingFunctionalityWidget
                content={pageContent.functionalityWidget}
            />}
            
            {pageContent.paperWidget && <PaperWidget
                paperWidget={pageContent.paperWidget}
            />}
            
            {pageContent.eTransportWidget && <GpsMonitoringAndDispatchingETransportWidget
                content={pageContent.eTransportWidget}
            />}
            
            <FooterExpanded />
        </>
    )
}