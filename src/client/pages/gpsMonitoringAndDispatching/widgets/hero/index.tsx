import React from 'react'
import { GpsMonitoringAndDispatchingPageContent } from '@common/pagesContent/gpsMonitoringAndDispatching'
import {
    GpsMonitoringAndDispatchingHeroWidgetView,
} from '@client-pages/gpsMonitoringAndDispatching/widgets/hero/views/GpsMonitoringAndDispatchingHeroWidgetView'

export const GpsMonitoringAndDispatchingHeroWidget = ({
                                                          content,
                                                      }: {
    content: GpsMonitoringAndDispatchingPageContent['heroWidget']
}) => {
    return (
        <GpsMonitoringAndDispatchingHeroWidgetView
            title={content.title}
            description={content.description}
            image={content.image}
        />
    )
}

