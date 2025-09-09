import React, { useCallback, useRef } from 'react'
import { ISlider } from '@client-shared/features/slider/interfaces'
import { HomeSmartSocietyCard } from '@client-pages/home/widgets/smartSociety/types'
import {
    HomeSmartSocietyWidgetSliderView,
} from '@client-pages/home/widgets/smartSociety/views/slider/HomeSmartSocietyWidgetSliderView'

export const HomeSmartSocietyWidgetSlider = ({
                                                 cards,
                                             }: {
    cards: HomeSmartSocietyCard[]
}) => {
    
    const sliderRef = useRef<ISlider>(null)
    
    const onClickNextBtn = useCallback(() => {
        if (!sliderRef.current) {
            return
        }
        sliderRef.current.slideNext()
    }, [sliderRef.current])
    
    
    return (
        <HomeSmartSocietyWidgetSliderView
            cards={cards}
            onClickNextBtn={onClickNextBtn}
            sliderRef={sliderRef}
        />
    )
}

