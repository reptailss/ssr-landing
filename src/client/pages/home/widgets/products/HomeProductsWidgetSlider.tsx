import React, { useCallback, useRef, useState } from 'react'
import { HomeProductCard } from '@client-pages/home/widgets/products/types'
import { ISlider } from '@client-shared/features/slider/interfaces'
import { onSliderSlideChange } from '@client-shared/features/slider/interfaces/events'
import {
    HomeProductsWidgetSliderView,
} from '@client-pages/home/widgets/products/views/slider/HomeProductsWidgetSliderView'
import {
    HomeProductsWidgetSliderPaginationView,
} from '@client-pages/home/widgets/products/views/slider/HomeProductsWidgetSliderPaginationView'

export const HomeProductsWidgetSlider = ({
                                             productCards,
                                         }: {
    productCards: HomeProductCard[]
}) => {
    
    const sliderRef = useRef<ISlider>(null)
    const [activeIndex, setActiveIndex] = useState<number>(0)
    
    const onClickNextBtn = useCallback(() => {
        if (!sliderRef.current) {
            return
        }
        sliderRef.current.slideNext()
    }, [sliderRef.current])
    
    const onSlideChange: onSliderSlideChange = useCallback(({ realIndex }) => {
        setActiveIndex(realIndex)
    }, [])
    
    const onClickProductCard = useCallback((homeProductCard: HomeProductCard,index: number) => {
        if (!sliderRef.current) {
            return
        }
        sliderRef.current.slideToLoop(index)
    }, [])
    
    return (
        <>
            <HomeProductsWidgetSliderView
                productCards={productCards}
                onSlideChange={onSlideChange}
                onClickNextBtn={onClickNextBtn}
                sliderRef={sliderRef}
            />
            
            <HomeProductsWidgetSliderPaginationView
                productCards={productCards}
                activeIndex={activeIndex}
                onClickProductCard={onClickProductCard}
            />
        </>
    )
}

