import React, { RefObject } from 'react'
import { HomeProductCard } from '@client-pages/home/widgets/products/types'
import { ProductCardView } from '@client-shared/widgets/products/views/productCard/ProductCardView'
import { SliderContainer } from '@client-shared/features/slider/SliderContainer'
import { SliderSlide } from '@client-shared/features/slider/SliderSlide'
import { onSliderSlideChange } from '@client-shared/features/slider/interfaces/events'
import { ISlider } from '@client-shared/features/slider/interfaces'
import { SliderAutoPlayConfig } from '@client-shared/features/slider/types'

const AUTO_PLAY_CONFIG: SliderAutoPlayConfig = {
    delay: 3000,
    onlyDesktop: true,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
}

export const HomeProductsWidgetSliderView = ({
                                                 productCards,
                                                 onSlideChange,
                                                 onClickNextBtn,
                                                 sliderRef,
                                             }: {
    productCards: HomeProductCard[]
    onSlideChange: onSliderSlideChange
    onClickNextBtn: () => void
    sliderRef: RefObject<ISlider | null>
}) => {
    
    return (
        <SliderContainer
            slidesPerView={1}
            speed={400}
            sliderRef={sliderRef}
            onSlideChange={onSlideChange}
            autoplayConfig={AUTO_PLAY_CONFIG}
            spaceBetween={30}
            ElementType={'ul'}
        >
            {productCards.map((productCard, i) => {
                return (
                    <SliderSlide
                        key={i}
                        ElementType={'li'}
                    >
                        <ProductCardView
                            productCard={productCard}
                            onClickNextBtn={onClickNextBtn}
                            key={i}
                        />
                    </SliderSlide>
                )
            })}
        </SliderContainer>
    )
}

