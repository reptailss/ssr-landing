import React from 'react'
import { GpsMonitoringAndDispatchingPageContent } from '@common/pagesContent/gpsMonitoringAndDispatching'
import {
    GpsMonitoringAndDispatchingETransportWidgetView,
} from '@client-pages/gpsMonitoringAndDispatching/widgets/eTransport/views/GpsMonitoringAndDispatchingETransportWidgetView'

export const GpsMonitoringAndDispatchingETransportWidget = ({ content }: {
    content: GpsMonitoringAndDispatchingPageContent['eTransportWidget']
}) => {
    return (
        <GpsMonitoringAndDispatchingETransportWidgetView
            content={content.content}
        />
    )
}

