import React from 'react'
import { GpsMonitoringAndDispatchingPageContent } from '@common/pagesContent/gpsMonitoringAndDispatching'
import {
    GpsMonitoringAndDispatchingFunctionalityWidgetView,
} from '@client-pages/gpsMonitoringAndDispatching/widgets/functionalityWidget/views/GpsMonitoringAndDispatchingFunctionalityWidgetView'

export const GpsMonitoringAndDispatchingFunctionalityWidget = ({
                                                                   content,
                                                               }: {
    content: GpsMonitoringAndDispatchingPageContent['functionalityWidget']
}) => {
    return (
        <GpsMonitoringAndDispatchingFunctionalityWidgetView
            title={content.title}
            functionalityList={content.functionalityList}
            advantages={content.advantages}
            tags={content.tags}
        />
    )
}

