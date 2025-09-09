import React, { memo, ReactNode, RefObject, useEffect, useRef } from 'react'
import { ISlider } from 'src/client/shared/features/slider/interfaces'
import { Slider } from '@client-shared/features/slider/impl/Slider'
import { onSliderSlideChange } from '@client-shared/features/slider/interfaces/events'
import { SliderAutoPlayConfig } from '@client-shared/features/slider/types'


export const SliderContainer = memo(({
                                         children,
                                         slidesPerView = 1,
                                         spaceBetween,
                                         speed,
                                         sliderRef,
                                         onSlideChange,
                                         autoplayConfig,
                                         ElementType = 'div',
                                     }: {
    children: ReactNode
    slidesPerView?: number
    spaceBetween?: number
    speed?: number
    sliderRef?: RefObject<ISlider | null>
    onSlideChange?: onSliderSlideChange
    autoplayConfig?: SliderAutoPlayConfig
    ElementType?: 'nav' | 'div' | 'section' | 'ul'
}) => {
    const ref = useRef(null)
    
    useEffect(() => {
        if (!ref.current) {
            return
        }
        const slider = new Slider(ref.current, {
            autoHeight: true,
            loop: true,
            spaceBetween,
            speed,
            onSlideChange,
            slidesPerView: slidesPerView,
            ...(autoplayConfig && (
                !autoplayConfig?.onlyDesktop ||
                !window.matchMedia('(max-width: 767px)').matches
            ) ? { autoplay:autoplayConfig } : {}),
        })
        if (sliderRef) {
            sliderRef.current = slider
        }
        
        return () => {
            slider.destroy()
        }
    }, [])
    
    return (
        <div ref={ref} className="swiper">
            <ElementType
                className="swiper-wrapper"
            >
                {children}
            </ElementType>
        </div>
    )
})

