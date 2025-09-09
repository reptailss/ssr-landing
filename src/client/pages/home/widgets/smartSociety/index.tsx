import React from 'react'
import { HomePageContent } from '@common/pagesContent/home'
import { HomeSmartSocietyWidgetView } from '@client-pages/home/widgets/smartSociety/views/HomeSmartSocietyWidgetView'
import { HomeSmartSocietyWidgetSlider } from '@client-pages/home/widgets/smartSociety/HomeSmartSocietyWidgetSlider'
import {
    HomeSmartSocietyWidgetVideoView,
} from '@client-pages/home/widgets/smartSociety/views/video/HomeSmartSocietyWidgetVideoView'

export const HomeSmartSocietyWidget = ({
                                           content,
                                       }: {
    content: HomePageContent['smartSocietyWidget']
}) => {
    return (
        <HomeSmartSocietyWidgetView
            title={content.title}
            description={content.description}
        >
            <HomeSmartSocietyWidgetSlider
                cards={content.cards}
            />
            
            <HomeSmartSocietyWidgetVideoView
                video={content.video}
                videoPreview={content.videoPreview}
                description={content.description}
            />
        </HomeSmartSocietyWidgetView>
    )
}

